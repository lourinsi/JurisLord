<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Popover } from 'bits-ui';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import {
		AlignLeft,
		Bookmark,
		BookmarkCheck,
		CheckCircle2,
		ChevronLeft,
		ChevronRight,
		Clock,
		Eye,
		EyeOff,
		Flag,
		LayoutList,
		Lightbulb,
		MoreVertical,
		Pause,
		Play,
		RotateCcw,
		Send,
		SkipForward,
		Sparkles,
		Square,
		Volume2,
		VolumeX,
		XCircle
	} from '@lucide/svelte';
	import ScoreScale from '$lib/components/ScoreScale.svelte';
	import { essayStatus } from '$lib/alac';
	import type { Kit } from '$lib/kit';
	import { dynamicOptionOrder, resolveCorrectIndex } from '$lib/mcq';
	import type { SubjectNumbersConfig } from '$lib/numbers-registry';
	import type { Essay as PhiloEssay } from '$lib/philo';
	import type { Problem as ConstiProblem } from '$lib/problems';
	import type { SubjectRequisitesConfig } from '$lib/requisites';
	import { playMcqSound } from '$lib/sound';
	import { canonicalModuleId } from '$lib/data/aliases';
	import { prefs } from '$lib/stores/prefs.svelte';
	import { userStorage, type ExamWeightUpdate } from '$lib/stores/storage.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { md } from '$lib/text';
	import { mcqMatchesTopic } from '$lib/topics';
	import type { McqTag, Subject } from '$lib/types';
	import {
		KIND_META,
		PART_ORDER,
		buildSubjectExamBank,
		computeExamTotals,
		defaultEssayFreeform,
		defaultExamSettings,
		entryKey,
		formatClock,
		formatWeightDelta,
		formatWeightMultiplier,
		isEntryAnswered,
		loadSavedExamSession,
		loadSavedExamSettings,
		maxPointsForEntry,
		pointsForEntry,
		sampleItems,
		sampleWeightedItems,
		saveExamSession,
		saveExamSettings,
		subTickKey,
			type ExamItemKind,
		type ScopePreset,
		type UnifiedExamEntry,
		type UnifiedExamSession
	} from '$lib/unified-exam';
	import { cn } from '$lib/utils';

	let {
		subject,
		kit,
		numbers,
		requisites,
		constiProblems,
		philoEssays
	}: {
		subject: Subject;
		kit?: Kit;
		numbers?: SubjectNumbersConfig;
		requisites?: SubjectRequisitesConfig;
		constiProblems?: ConstiProblem[];
		philoEssays?: PhiloEssay[];
	} = $props();

	const bank = $derived(
		buildSubjectExamBank({
			subject,
			kit,
			numbers,
			requisites,
			constiProblems,
			philoEssays
		})
	);

	// ---- Active exam session (persisted per subject) ----
	let session = $state<UnifiedExamSession | null>(null);
	let loadedSubjectId = $state('');

	$effect(() => {
		const id = subject.id;
		if (loadedSubjectId === id) return;
		loadedSubjectId = id;
		let loaded = loadSavedExamSession(id);
		// Temporarily disable non-MCQ items in consti1 Mock Exam
		if (
			loaded &&
			id === 'consti1' &&
			!loaded.finishedAt &&
			loaded.items.some((it) => it.kind !== 'mcq')
		) {
			saveExamSession(id, null);
			loaded = null;
		}
		session = loaded;
		activeItemKey = session?.items.length ? entryKey(session.items[0]) : '';
	});

	$effect(() => {
		if (!loadedSubjectId || loadedSubjectId !== subject.id) return;
		// Track deep mutations on session before persisting
		if (session) {
			void JSON.stringify(session.answers);
			void JSON.stringify(session.marks);
			void JSON.stringify(session.flagged ?? {});
			void JSON.stringify(session.items);
			void session.startedAt;
			void session.deadlineAt;
			void session.durationMs;
			void session.pausedAt;
			void session.pausedTotalMs;
			void session.showAnswers;
			void session.singleQuestion;
			void session.essayFreeform;
			void session.finishedAt;
			void session.graded;
		}
		saveExamSession(subject.id, session);
	});

	// ---- Setup form state (defaults to ★ FINALS preset) ----
	let mode = $state<'exam' | 'practice'>('exam');
	let scopePreset = $state<ScopePreset>('finals');
	let mcqFilter = $state<string>('finals_all'); // 'all' | 'missed' | 'new' | 'finals_all' | <topicId>
	let essayFilter = $state<string>('finals_all'); // 'all' | 'finals_all' | 'unmastered' | 'review' | src:<source>
	let enumFilter = $state<'all' | 'finals'>('finals');
	let termFilter = $state<'all' | 'finals'>('finals');
	let numFilter = $state<'all' | 'finals'>('finals');
	let timerChoice = $state<'none' | 'auto' | '15' | '30' | '45' | '60' | '90'>('auto');

	const counts = $state<Record<ExamItemKind, number>>({
		mcq: 20,
		essay: 0,
		enum: 0,
		term: 0,
		req: 0,
		num: 0
	});

	// Re-seed sensible defaults (★ FINALS by default, or user's saved settings) when switching subjects
	let seededForSubject = $state('');
	$effect(() => {
		const id = bank.subjectId;
		if (seededForSubject === id) return;
		seededForSubject = id;
		const saved = loadSavedExamSettings(id, bank) ?? defaultExamSettings(bank);
		mode = saved.mode;
		scopePreset = saved.scopePreset;
		mcqFilter = saved.mcqFilter;
		essayFilter = saved.essayFilter;
		enumFilter = saved.enumFilter;
		termFilter = saved.termFilter;
		numFilter = saved.numFilter;
		timerChoice = saved.timerChoice;
		counts.mcq = saved.counts.mcq;
		counts.essay = saved.counts.essay;
		counts.enum = saved.counts.enum;
		counts.term = saved.counts.term;
		counts.req = saved.counts.req;
		counts.num = saved.counts.num;
	});

	// Persist setup settings whenever modified on the Mock Exam page
	$effect(() => {
		const id = bank.subjectId;
		if (!id || seededForSubject !== id) return;
		const current = {
			mode,
			scopePreset,
			mcqFilter,
			essayFilter,
			enumFilter,
			termFilter,
			numFilter,
			timerChoice,
			counts: {
				mcq: counts.mcq,
				essay: counts.essay,
				enum: counts.enum,
				term: counts.term,
				req: counts.req,
				num: counts.num
			}
		};
		const dflt = defaultExamSettings(bank);
		const isDefault =
			current.mode === dflt.mode &&
			current.scopePreset === dflt.scopePreset &&
			current.mcqFilter === dflt.mcqFilter &&
			current.essayFilter === dflt.essayFilter &&
			current.enumFilter === dflt.enumFilter &&
			current.termFilter === dflt.termFilter &&
			current.numFilter === dflt.numFilter &&
			current.timerChoice === dflt.timerChoice &&
			current.counts.mcq === dflt.counts.mcq &&
			current.counts.essay === dflt.counts.essay &&
			current.counts.enum === dflt.counts.enum &&
			current.counts.term === dflt.counts.term &&
			current.counts.req === dflt.counts.req &&
			current.counts.num === dflt.counts.num;
		saveExamSettings(id, isDefault ? null : current);
	});

	function resetToFinalsDefault() {
		const dflt = defaultExamSettings(bank);
		mode = dflt.mode;
		scopePreset = dflt.scopePreset;
		mcqFilter = dflt.mcqFilter;
		essayFilter = dflt.essayFilter;
		enumFilter = dflt.enumFilter;
		termFilter = dflt.termFilter;
		numFilter = dflt.numFilter;
		timerChoice = dflt.timerChoice;
		counts.mcq = dflt.counts.mcq;
		counts.essay = dflt.counts.essay;
		counts.enum = dflt.counts.enum;
		counts.term = dflt.counts.term;
		counts.req = dflt.counts.req;
		counts.num = dflt.counts.num;
		saveExamSettings(subject.id, null);
	}

	function applyScopePreset(preset: ScopePreset) {
		scopePreset = preset;
		if (preset === 'all') {
			mcqFilter = 'all';
			essayFilter = 'all';
			enumFilter = 'all';
			termFilter = 'all';
			numFilter = 'all';
		} else if (preset === 'finals') {
			mcqFilter = bank.hasFinalsMcqs ? 'finals_all' : 'all';
			essayFilter = bank.hasFinalsEssays ? 'finals_all' : 'all';
			enumFilter = bank.hasFinalsEnums ? 'finals' : 'all';
			termFilter = bank.hasFinalsTerms ? 'finals' : 'all';
			numFilter = bank.hasFinalsNums ? 'finals' : 'all';
			if (bank.hasFinalsMcqs && counts.mcq === 0) counts.mcq = Math.min(10, bank.mcqs.filter((q) => q.isFinals).length);
			if (subject.id === 'consti1') {
				counts.essay = 0;
				counts.enum = 0;
				counts.term = 0;
				counts.req = 0;
				counts.num = 0;
			} else if (subject.id === 'philo') {
				if (bank.hasFinalsEssays && counts.essay === 0) counts.essay = Math.min(2, bank.essays.filter((e) => e.isFinals).length);
				counts.enum = 0;
				counts.term = 0;
				counts.req = 0;
				counts.num = 0;
			} else {
				if (bank.hasFinalsEssays && counts.essay === 0) counts.essay = Math.min(2, bank.essays.filter((e) => e.isFinals).length);
				if (bank.hasFinalsEnums && counts.enum === 0) counts.enum = Math.min(2, bank.enums.filter((e) => e.isFinals).length);
				if (bank.hasFinalsTerms && counts.term === 0) counts.term = Math.min(2, bank.terms.filter((t) => t.isFinals).length);
				if (bank.reqs.length && counts.req === 0) counts.req = Math.min(3, bank.reqs.length);
			}
		} else if (preset === 'missed') {
			mcqFilter = 'missed';
			essayFilter = 'review';
			enumFilter = 'all';
			termFilter = 'all';
			numFilter = 'all';
			const missedMcqs = bank.mcqs.filter(
				(q) => userStorage.mcqAttempts[q.id]?.isCorrect === false || userStorage.getExamWeight(q.id) > 1
			).length;
			const missedEssays = bank.essays.filter(
				(e) => essayStatus(userStorage.essayDrafts[e.id]) === 'review' || userStorage.getExamWeight(e.id) > 1
			).length;
			const missedEnums = bank.enums.filter((e) => userStorage.getExamWeight(e.id) > 1).length;
			const missedTerms = bank.terms.filter((t) => userStorage.getExamWeight(t.id) > 1).length;
			const missedReqs = bank.reqs.filter((r) => userStorage.getExamWeight(r.id) > 1).length;
			const missedNums = bank.nums.filter((n) => userStorage.getExamWeight(n.id) > 1).length;
			counts.mcq = missedMcqs;
			counts.essay = missedEssays;
			counts.enum = missedEnums;
			counts.term = missedTerms;
			counts.req = missedReqs;
			counts.num = missedNums;
		} else if (preset === 'new') {
			mcqFilter = 'new';
			essayFilter = 'unmastered';
			enumFilter = 'all';
			termFilter = 'all';
			numFilter = 'all';
		}
		if (subject.id === 'consti1') {
			counts.essay = 0;
			counts.enum = 0;
			counts.term = 0;
			counts.req = 0;
			counts.num = 0;
		}
	}

	// ---- Filtered pools ----
	const filteredMcqs = $derived.by(() => {
		if (mcqFilter === 'missed') {
			return bank.mcqs.filter(
				(q) => userStorage.mcqAttempts[q.id]?.isCorrect === false || userStorage.getExamWeight(q.id) > 1
			);
		}
		if (mcqFilter === 'new') return bank.mcqs.filter((q) => !userStorage.mcqAttempts[q.id]);
		if (mcqFilter === 'finals_all') return bank.mcqs.filter((q) => q.isFinals);
		if (mcqFilter === 'all') return bank.mcqs;
		return bank.mcqs.filter((q) => mcqMatchesTopic(q, mcqFilter));
	});

	const filteredEssays = $derived.by(() => {
		if (essayFilter === 'finals_all') return bank.essays.filter((e) => e.isFinals);
		if (essayFilter === 'review') {
			return bank.essays.filter(
				(e) => essayStatus(userStorage.essayDrafts[e.id]) === 'review' || userStorage.getExamWeight(e.id) > 1
			);
		}
		if (essayFilter === 'unmastered') return bank.essays.filter((e) => !userStorage.essayDrafts[e.id]?.isMastered);
		if (essayFilter === 'src:__core__') return bank.essays.filter((e) => !e.source);
		if (essayFilter.startsWith('src:')) {
			const src = essayFilter.slice(4);
			return bank.essays.filter((e) => e.source === src);
		}
		return bank.essays;
	});

	const filteredEnums = $derived.by(() => {
		if (scopePreset === 'missed') return bank.enums.filter((e) => userStorage.getExamWeight(e.id) > 1);
		if (enumFilter === 'finals' && bank.hasFinalsEnums) return bank.enums.filter((e) => e.isFinals);
		return bank.enums;
	});

	const filteredTerms = $derived.by(() => {
		if (scopePreset === 'missed') return bank.terms.filter((t) => userStorage.getExamWeight(t.id) > 1);
		if (termFilter === 'finals' && bank.hasFinalsTerms) return bank.terms.filter((t) => t.isFinals);
		return bank.terms;
	});

	const filteredReqs = $derived.by(() => {
		if (scopePreset === 'missed') return bank.reqs.filter((r) => userStorage.getExamWeight(r.id) > 1);
		return bank.reqs;
	});

	const filteredNums = $derived.by(() => {
		if (scopePreset === 'missed') return bank.nums.filter((n) => userStorage.getExamWeight(n.id) > 1);
		if (numFilter === 'finals' && bank.hasFinalsNums) return bank.nums.filter((n) => n.isFinals);
		return bank.nums;
	});

	const availableCounts = $derived<Record<ExamItemKind, number>>({
		mcq: filteredMcqs.length,
		essay: filteredEssays.length,
		enum: filteredEnums.length,
		term: filteredTerms.length,
		req: filteredReqs.length,
		num: filteredNums.length
	});

	const effectiveCounts = $derived<Record<ExamItemKind, number>>({
		mcq: Math.min(counts.mcq, availableCounts.mcq),
		essay: Math.min(counts.essay, availableCounts.essay),
		enum: Math.min(counts.enum, availableCounts.enum),
		term: Math.min(counts.term, availableCounts.term),
		req: Math.min(counts.req, availableCounts.req),
		num: Math.min(counts.num, availableCounts.num)
	});

	const availableKinds = $derived(
		PART_ORDER.filter((k) => {
			if (subject.id === 'consti1') return k === 'mcq' && bank.mcqs.length > 0;
			if (k === 'mcq') return bank.mcqs.length > 0;
			if (k === 'essay') return bank.essays.length > 0;
			if (k === 'enum') return bank.enums.length > 0;
			if (k === 'term') return bank.terms.length > 0;
			if (k === 'req') return bank.reqs.length > 0;
			return bank.nums.length > 0;
		})
	);

	const totalSelected = $derived(
		effectiveCounts.mcq +
			effectiveCounts.essay +
			effectiveCounts.enum +
			effectiveCounts.term +
			effectiveCounts.req +
			effectiveCounts.num
	);

	const autoTimerMinutes = $derived(
		Math.max(
			5,
			Math.ceil(
				effectiveCounts.mcq * 1 +
					effectiveCounts.essay * 8 +
					effectiveCounts.enum * 2 +
					effectiveCounts.req * 2 +
					effectiveCounts.term * 1 +
					effectiveCounts.num * 0.75
			)
		)
	);

	const computedTimerSecs = $derived.by(() => {
		if (mode !== 'exam' || timerChoice === 'none') return null;
		if (timerChoice === 'auto') return autoTimerMinutes * 60;
		return Number(timerChoice) * 60;
	});

	const missedMcqCount = $derived(
		bank.mcqs.filter(
			(q) => userStorage.mcqAttempts[q.id]?.isCorrect === false || userStorage.getExamWeight(q.id) > 1
		).length
	);
	const newMcqCount = $derived(bank.mcqs.filter((q) => !userStorage.mcqAttempts[q.id]).length);
	const finalsMcqCount = $derived(bank.mcqs.filter((q) => q.isFinals).length);
	const finalsEssayCount = $derived(bank.essays.filter((e) => e.isFinals).length);
	const finalsEnumCount = $derived(bank.enums.filter((e) => e.isFinals).length);
	const finalsTermCount = $derived(bank.terms.filter((t) => t.isFinals).length);
	const finalsNumCount = $derived(bank.nums.filter((n) => n.isFinals).length);
	const reviewEssayCount = $derived(
		bank.essays.filter(
			(e) => essayStatus(userStorage.essayDrafts[e.id]) === 'review' || userStorage.getExamWeight(e.id) > 1
		).length
	);
	const boostedOtherWrittenCount = $derived(
		bank.enums.filter((e) => userStorage.getExamWeight(e.id) > 1).length +
			bank.terms.filter((t) => userStorage.getExamWeight(t.id) > 1).length +
			bank.reqs.filter((r) => userStorage.getExamWeight(r.id) > 1).length +
			bank.nums.filter((n) => userStorage.getExamWeight(n.id) > 1).length
	);
	const totalMissedAndMoreLikelyCount = $derived(
		missedMcqCount + reviewEssayCount + boostedOtherWrittenCount
	);
	const unmasteredEssayCount = $derived(
		bank.essays.filter((e) => !userStorage.essayDrafts[e.id]?.isMastered).length
	);

	const isModifiedFromFinalsDefault = $derived.by(() => {
		const dflt = defaultExamSettings(bank);
		return (
			mode !== dflt.mode ||
			scopePreset !== dflt.scopePreset ||
			mcqFilter !== dflt.mcqFilter ||
			essayFilter !== dflt.essayFilter ||
			enumFilter !== dflt.enumFilter ||
			termFilter !== dflt.termFilter ||
			numFilter !== dflt.numFilter ||
			timerChoice !== dflt.timerChoice ||
			counts.mcq !== dflt.counts.mcq ||
			counts.essay !== dflt.counts.essay ||
			counts.enum !== dflt.counts.enum ||
			counts.term !== dflt.counts.term ||
			counts.req !== dflt.counts.req ||
			counts.num !== dflt.counts.num
		);
	});

	const subjectHistory = $derived(
		userStorage.testHistory.filter((h) => h.subjectId === subject.id).slice(0, 8)
	);

	let weightHistoryFilter = $state<'all' | 'boosted' | 'lowered'>('all');

	function resolveItemMeta(id: string): { kindLabel: string; prompt: string; topic: string; isMcq: boolean } {
		const mcq = bank.mcqById[id];
		if (mcq) return { kindLabel: 'MCQ', prompt: mcq.question, topic: mcq.topicName, isMcq: true };
		const essay = bank.essayById[id];
		if (essay) return { kindLabel: 'Essay', prompt: essay.title, topic: essay.topic, isMcq: false };
		const en = bank.enumById[id];
		if (en) return { kindLabel: 'Enum', prompt: en.title, topic: en.src, isMcq: false };
		const tm = bank.termById[id];
		if (tm) return { kindLabel: 'Term', prompt: tm.term, topic: tm.src, isMcq: false };
		const rq = bank.reqById[id];
		if (rq) return { kindLabel: 'Requisite', prompt: rq.question, topic: rq.topicTitle, isMcq: false };
		const nm = bank.numById[id];
		if (nm) return { kindLabel: 'Number', prompt: nm.prompt, topic: nm.group, isMcq: false };
		return { kindLabel: 'Item', prompt: id, topic: '', isMcq: false };
	}

	const subjectModifiedWeights = $derived.by(() => {
		const targetSubject = canonicalModuleId(subject.id);
		const rows: {
			id: string;
			weight: number;
			streak: number;
			kindLabel: string;
			prompt: string;
			topic: string;
			isMcq: boolean;
			updatedAt: number;
		}[] = [];
		for (const [id, rec] of Object.entries(userStorage.examWeights)) {
			if (!rec || rec.weight === 1) continue;
			const owner = canonicalModuleId(rec.subjectId ?? id.split(':')[0]);
			const inBank =
				Boolean(bank.mcqById[id]) ||
				Boolean(bank.essayById[id]) ||
				Boolean(bank.enumById[id]) ||
				Boolean(bank.termById[id]) ||
				Boolean(bank.reqById[id]) ||
				Boolean(bank.numById[id]);
			if (owner !== targetSubject && !inBank) continue;
			const meta = resolveItemMeta(id);
			rows.push({
				id,
				weight: rec.weight,
				streak: rec.streak,
				kindLabel: meta.prompt !== id ? meta.kindLabel : (rec.kind?.toUpperCase() ?? 'Item'),
				prompt: meta.prompt !== id ? meta.prompt : (rec.prompt ?? id),
				topic: meta.topic || rec.topic || '',
				isMcq: meta.isMcq || rec.kind === 'mcq',
				updatedAt: rec.updatedAt
			});
		}
		return rows.sort((a, b) => b.weight - a.weight || b.updatedAt - a.updatedAt);
	});

	const boostedWeightCount = $derived(subjectModifiedWeights.filter((r) => r.weight > 1).length);
	const loweredWeightCount = $derived(subjectModifiedWeights.filter((r) => r.weight < 1).length);
	const visibleModifiedWeights = $derived(
		weightHistoryFilter === 'boosted'
			? subjectModifiedWeights.filter((r) => r.weight > 1)
			: weightHistoryFilter === 'lowered'
				? subjectModifiedWeights.filter((r) => r.weight < 1)
				: subjectModifiedWeights
	);

	// ---- Start / Submit / Grade handlers ----

	function buildLabel(): string {
		const bits: string[] = [];
		if (scopePreset === 'finals') bits.push('★ FINALS');
		else if (mcqFilter !== 'all' && effectiveCounts.mcq > 0) {
			const t = bank.mcqTopics.find((x) => x.id === mcqFilter);
			if (t) bits.push(t.label);
		}
		const parts: string[] = [];
		for (const k of PART_ORDER) {
			if (effectiveCounts[k] > 0) parts.push(`${effectiveCounts[k]} ${KIND_META[k].short}`);
		}
		const head = mode === 'exam' ? 'Mock Exam' : 'Practice Run';
		return [head, ...bits, parts.join(' · ')].filter(Boolean).join(' · ');
	}

	function startExam() {
		const items: UnifiedExamEntry[] = [];

		if (effectiveCounts.mcq > 0) {
			const sampled = sampleWeightedItems(filteredMcqs, effectiveCounts.mcq, (q) => {
				const baseWeight = q.tag === 'cases' || q.topicId === 'finals_cases' ? 0.3 : 1;
				return baseWeight * userStorage.getExamWeight(q.id);
			});
			for (const q of sampled) {
				const order = dynamicOptionOrder(q.options);
				items.push({ kind: 'mcq', id: q.id, order });
			}
		}
		if (effectiveCounts.essay > 0) {
			for (const e of sampleWeightedItems(filteredEssays, effectiveCounts.essay, (it) => userStorage.getExamWeight(it.id))) {
				items.push({ kind: 'essay', id: e.id });
			}
		}
		if (effectiveCounts.enum > 0) {
			for (const en of sampleWeightedItems(filteredEnums, effectiveCounts.enum, (it) => userStorage.getExamWeight(it.id))) {
				items.push({ kind: 'enum', id: en.id });
			}
		}
		if (effectiveCounts.term > 0) {
			for (const tm of sampleWeightedItems(filteredTerms, effectiveCounts.term, (it) => userStorage.getExamWeight(it.id))) {
				items.push({ kind: 'term', id: tm.id });
			}
		}
		if (effectiveCounts.req > 0) {
			for (const rq of sampleWeightedItems(filteredReqs, effectiveCounts.req, (it) => userStorage.getExamWeight(it.id))) {
				items.push({ kind: 'req', id: rq.id });
			}
		}
		if (effectiveCounts.num > 0) {
			for (const nm of sampleWeightedItems(filteredNums, effectiveCounts.num, (it) => userStorage.getExamWeight(it.id))) {
				items.push({ kind: 'num', id: nm.id });
			}
		}

		if (!items.length) return;
		const now = Date.now();
		const durationMs = computedTimerSecs ? computedTimerSecs * 1000 : null;
		session = {
			subjectId: subject.id,
			mode,
			label: buildLabel(),
			startedAt: now,
			deadlineAt: durationMs ? now + durationMs : null,
			durationMs,
			pausedAt: null,
			pausedTotalMs: 0,
			showAnswers: true,
			singleQuestion: true,
			essayFreeform: defaultEssayFreeform(subject.id),
			flagged: {},
			finishedAt: null,
			graded: false,
			items,
			answers: {},
			marks: {}
		};
		activeItemKey = items.length ? entryKey(items[0]) : '';
		activeFilter = 'all';
		openHints = {};
		confirmSubmit = false;
		confirmReset = false;
		confirmQuit = false;
		mcqReviewFilter = 'all';
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function retryMissedMcqs() {
		if (!session) return;
		const missedEntries = session.items.filter((it) => {
			if (it.kind !== 'mcq') return false;
			return pointsForEntry(session!, it, bank) !== 1;
		});
		if (!missedEntries.length) return;
		const now = Date.now();
		const retryItems = missedEntries.map((it) => {
			const q = bank.mcqById[it.id];
			const opts = q?.options ?? [];
			const order = dynamicOptionOrder(opts, Math.random, it.order);
			return { kind: 'mcq' as const, id: it.id, order };
		});
		const durationMs = Math.max(1, retryItems.length) * 60 * 1000;
		session = {
			subjectId: subject.id,
			mode: 'exam',
			label: `Retake Missed (This Exam) · ${missedEntries.length} MCQs`,
			startedAt: now,
			deadlineAt: now + durationMs,
			durationMs,
			pausedAt: null,
			pausedTotalMs: 0,
			showAnswers: true,
			singleQuestion: true,
			essayFreeform: defaultEssayFreeform(subject.id),
			flagged: {},
			finishedAt: null,
			graded: false,
			items: retryItems,
			answers: {},
			marks: {}
		};
		activeItemKey = retryItems.length ? entryKey(retryItems[0]) : '';
		activeFilter = 'all';
		openHints = {};
		confirmSubmit = false;
		confirmReset = false;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	/**
	 * Launches a Redemption Mock Exam consisting of ALL "More likely" (weight > 1×) and missed
	 * questions from this exam and past history for this subject, sorted by highest weight first.
	 * On submission, every question answered right resets to base 1× and drops by 50% (to 0.5×).
	 */
	function takeAllMissedFromHistory() {
		const prevOrders = new Map<string, number[]>();
		if (session) {
			for (const it of session.items) {
				if (it.kind === 'mcq' && it.order) prevOrders.set(it.id, it.order);
			}
		}

		const items: UnifiedExamEntry[] = [];
		const seenIds = new Set<string>();

		// 1. All MCQs that are "More likely" (weight > 1×) or missed in attempt history, highest weight first
		const candidateMcqs = bank.mcqs
			.filter(
				(q) => userStorage.getExamWeight(q.id) > 1 || userStorage.mcqAttempts[q.id]?.isCorrect === false
			)
			.sort((a, b) => userStorage.getExamWeight(b.id) - userStorage.getExamWeight(a.id));

		for (const q of candidateMcqs) {
			seenIds.add(q.id);
			items.push({
				kind: 'mcq',
				id: q.id,
				order: dynamicOptionOrder(q.options, Math.random, prevOrders.get(q.id))
			});
		}

		// 2. Any non-MCQ items in this subject whose weight is > 1× ("More likely" from past submissions)
		if (subject.id !== 'consti1') for (const row of subjectModifiedWeights) {
			if (row.weight <= 1 || seenIds.has(row.id)) continue;
			if (bank.mcqById[row.id]) {
				const q = bank.mcqById[row.id];
				seenIds.add(q.id);
				items.push({
					kind: 'mcq',
					id: q.id,
					order: dynamicOptionOrder(q.options, Math.random, prevOrders.get(q.id))
				});
			} else if (bank.essayById[row.id]) {
				seenIds.add(row.id);
				items.push({ kind: 'essay', id: row.id });
			} else if (bank.enumById[row.id]) {
				seenIds.add(row.id);
				items.push({ kind: 'enum', id: row.id });
			} else if (bank.termById[row.id]) {
				seenIds.add(row.id);
				items.push({ kind: 'term', id: row.id });
			} else if (bank.reqById[row.id]) {
				seenIds.add(row.id);
				items.push({ kind: 'req', id: row.id });
			} else if (bank.numById[row.id]) {
				seenIds.add(row.id);
				items.push({ kind: 'num', id: row.id });
			}
		}

		if (!items.length) return;

		const now = Date.now();
		const autoMins = Math.max(
			5,
			Math.ceil(
				items.reduce((sum, it) => {
					if (it.kind === 'mcq' || it.kind === 'term') return sum + 1;
					if (it.kind === 'essay') return sum + 8;
					if (it.kind === 'enum' || it.kind === 'req') return sum + 2;
					return sum + 0.75;
				}, 0)
			)
		);
		const durationMs = autoMins * 60 * 1000;

		session = {
			subjectId: subject.id,
			mode: 'exam',
			label: `Redeem Past Mistakes · ${items.length} ${items.length === 1 ? 'Item' : 'Items'}`,
			startedAt: now,
			deadlineAt: now + durationMs,
			durationMs,
			pausedAt: null,
			pausedTotalMs: 0,
			showAnswers: true,
			singleQuestion: true,
			essayFreeform: defaultEssayFreeform(subject.id),
			flagged: {},
			finishedAt: null,
			graded: false,
			items,
			answers: {},
			marks: {}
		};
		activeItemKey = items.length ? entryKey(items[0]) : '';
		activeFilter = 'all';
		openHints = {};
		confirmSubmit = false;
		confirmReset = false;
		confirmQuit = false;
		mcqReviewFilter = 'all';
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function retakeFresh20() {
		mode = 'exam';
		timerChoice = 'auto';
		applyScopePreset(bank.hasFinalsPreset ? 'finals' : 'all');
		counts.mcq = Math.min(20, availableCounts.mcq);
		const dflt = defaultExamSettings(bank);
		counts.essay = dflt.counts.essay;
		counts.enum = dflt.counts.enum;
		counts.term = dflt.counts.term;
		counts.req = dflt.counts.req;
		counts.num = dflt.counts.num;
		startExam();
	}

	function takeAllFinalsExam() {
		mode = 'exam';
		timerChoice = 'auto';
		applyScopePreset(bank.hasFinalsPreset ? 'finals' : 'all');
		counts.mcq = availableCounts.mcq;
		if (subject.id === 'consti1') {
			counts.essay = 0;
			counts.enum = 0;
			counts.term = 0;
			counts.req = 0;
			counts.num = 0;
		}
		startExam();
	}

	function pickMcqOption(entry: UnifiedExamEntry, originalIndex: number) {
		if (!session || session.finishedAt) return;
		const k = entryKey(entry);
		const q = bank.mcqById[entry.id];
		if (!q) return;

		const revealNow = session.showAnswers ?? true;
		if (revealNow) {
			if (session.answers[k] !== undefined && session.answers[k] !== '') return;
			session.answers[k] = String(originalIndex);
			const ok = originalIndex === resolveCorrectIndex(q);
			if (session.mode === 'practice') {
				userStorage.recordMcqAttempt(q.id, originalIndex, ok);
			}
			playMcqSound(ok);
		} else {
			session.answers[k] = String(originalIndex);
		}
	}

	function submitExam() {
		if (!session || session.finishedAt) return;
		if (session.pausedAt) {
			const pausedDelta = Date.now() - session.pausedAt;
			session.pausedTotalMs = (session.pausedTotalMs ?? 0) + pausedDelta;
			if (session.deadlineAt !== null) session.deadlineAt += pausedDelta;
			session.pausedAt = null;
		}
		const end = session.deadlineAt ? Math.min(Date.now(), session.deadlineAt) : Date.now();
		session.finishedAt = end;
		confirmSubmit = false;

		// Record all MCQs in the exam into userStorage and update adaptive mock-exam weights after submission
		// (unanswered MCQs score 0 and count as missed so they become "More likely" at 1.5×)
		let mcqCount = 0;
		let mcqCorrect = 0;
		const weightUpdates: ExamWeightUpdate[] = [];
		for (const it of session.items) {
			if (it.kind !== 'mcq') continue;
			const q = bank.mcqById[it.id];
			if (!q) continue;
			mcqCount++;
			const raw = session.answers[entryKey(it)];
			const hasAnswer = raw !== undefined && raw !== '';
			const picked = hasAnswer ? Number(raw) : -1;
			const ok = hasAnswer && picked === resolveCorrectIndex(q);
			if (ok) mcqCorrect++;
			// Blank MCQs score 0 but are deliberate skips: no attempt record and the
			// item's current weight stays exactly as is (no "More likely" boost).
			if (!hasAnswer) continue;
			userStorage.recordMcqAttempt(q.id, picked, ok);
			weightUpdates.push({
				id: q.id,
				isCorrect: ok,
				subjectId: subject.id,
				kind: 'mcq',
				prompt: q.question,
				topic: q.topicName
			});
		}
		if (weightUpdates.length > 0) {
			userStorage.recordExamSubmissionWeights(weightUpdates);
		}

		{
			session.graded = true;
			const totals = computeExamTotals(session, bank);
			const hasWritten = session.items.some((it) => it.kind !== 'mcq');
			userStorage.recordTestHistory({
				subjectId: subject.id,
				subjectTitle: subject.title,
				topicId: scopePreset === 'finals' ? 'finals' : hasWritten ? 'mock_exam' : mcqFilter,
				topicName: session.label,
				mode: session.mode,
				correct: totals.score,
				answered: answeredCount,
				total: totals.total,
				secondsUsed: Math.max(0, Math.round((end - session.startedAt - (session.pausedTotalMs ?? 0)) / 1000))
			});
			if (mcqCount > 0) playMcqSound(mcqCorrect >= Math.ceil(mcqCount / 2));
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function resetExam() {
		session = null;
		confirmQuit = false;
		confirmSubmit = false;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	// Handle direct launch (?autostart=1) or explicit setup (?setup=1) from the Subject Entry Modal
	$effect(() => {
		const id = bank.subjectId;
		if (!id || seededForSubject !== id || loadedSubjectId !== id) return;
		const autostart = page.url.searchParams.get('autostart');
		const forceSetup = page.url.searchParams.get('setup');
		const redeem = page.url.searchParams.get('redeem');
		if (redeem === '1') {
			const url = new URL(page.url.href);
			url.searchParams.delete('redeem');
			goto(url, { replace: true });
			takeAllMissedFromHistory();
		} else if (autostart === '1') {
			const url = new URL(page.url.href);
			url.searchParams.delete('autostart');
			goto(url, { replace: true });
			if (totalSelected === 0) resetToFinalsDefault();
			startExam();
		} else if (forceSetup === '1') {
			const url = new URL(page.url.href);
			url.searchParams.delete('setup');
			goto(url, { replace: true });
			session = null;
		}
	});

	// ---- Live clock + pause ----
	let now = $state(Date.now());
	const tickTimer = setInterval(() => {
		now = Date.now();
	}, 500);
	onDestroy(() => clearInterval(tickTimer));

	const isPaused = $derived(Boolean(session && !session.finishedAt && session.pausedAt));
	const showAnswers = $derived(session ? (session.showAnswers ?? true) : true);
	const singleQuestion = $derived(session ? (session.singleQuestion ?? true) : true);
	const essayFreeform = $derived(
		session ? (session.essayFreeform ?? defaultEssayFreeform(subject.id)) : defaultEssayFreeform(subject.id)
	);
	const hasAlacEssaysInSession = $derived(
		Boolean(session?.items.some((it) => it.kind === 'essay' && bank.essayById[it.id]?.format === 'alac'))
	);
	const effectiveNow = $derived(session?.pausedAt ?? now);

	function toggleShowAnswers() {
		if (!session || session.finishedAt) return;
		session.showAnswers = !(session.showAnswers ?? true);
	}

	function toggleSingleQuestion() {
		if (!session || session.finishedAt) return;
		session.singleQuestion = !(session.singleQuestion ?? true);
	}

	function toggleEssayFreeform() {
		if (!session || session.finishedAt) return;
		const next = !(session.essayFreeform ?? defaultEssayFreeform(subject.id));
		if (next) {
			for (const it of session.items) {
				if (it.kind !== 'essay') continue;
				const k = entryKey(it);
				if (session.answers[k]?.trim()) continue;
				const parts = ALAC_FIELDS.map((f) => {
					const txt = session!.answers[`${k}:${f.key}`]?.trim();
					return txt ? `${f.label}: ${txt}` : '';
				}).filter(Boolean);
				if (parts.length) session.answers[k] = parts.join('\n\n');
			}
		}
		session.essayFreeform = next;
	}

	function togglePause() {
		if (!session || session.finishedAt) return;
		if (session.pausedAt) {
			const delta = Date.now() - session.pausedAt;
			session.pausedTotalMs = (session.pausedTotalMs ?? 0) + delta;
			if (session.deadlineAt !== null) session.deadlineAt += delta;
			session.pausedAt = null;
			now = Date.now();
		} else {
			session.pausedAt = Date.now();
		}
	}

	const secsLeft = $derived(
		session && !session.finishedAt && session.deadlineAt
			? (session.deadlineAt - effectiveNow) / 1000
			: null
	);
	const elapsedSecs = $derived(
		session
			? Math.max(0, ((session.finishedAt ?? effectiveNow) - session.startedAt - (session.pausedTotalMs ?? 0)) / 1000)
			: 0
	);
	$effect(() => {
		if (secsLeft !== null && secsLeft <= 0 && session && !session.finishedAt && !session.pausedAt) {
			submitExam();
		}
	});

	// ---- Jump to question, filters & MCQ-parity actions ----
	type ActiveExamFilter = 'all' | 'unanswered' | 'incorrect' | 'flagged' | 'bookmarked';
	let activeItemKey = $state('');
	let activeFilter = $state<ActiveExamFilter>('all');
	let openHints = $state<Record<string, boolean>>({});
	let confirmReset = $state(false);

	const TAGS: Record<McqTag, { label: string; cls: string }> = {
		memorization: {
			label: 'Memorization',
			cls: 'border-[#E5B400] bg-[#FFF5CC] text-[#946200] dark:border-[#FFC800]/50 dark:bg-[#FFC800]/20 dark:text-[#FFD633]'
		},
		requisites: {
			label: 'Requisites',
			cls: 'border-[#46A302]/50 bg-[#D7FFB8] text-[#46A302] dark:border-[#58CC02]/50 dark:bg-[#58CC02]/20 dark:text-[#7BE328]'
		},
		exceptions: {
			label: 'Exceptions',
			cls: 'border-[#1899D6]/50 bg-[#DDF4FF] text-[#1899D6] dark:border-[#1CB0F6]/50 dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]'
		},
		effects: {
			label: 'Effects',
			cls: 'border-[#A55EEA]/50 bg-[#F3E8FF] text-[#8930C9] dark:border-[#CE82FF]/50 dark:bg-[#CE82FF]/20 dark:text-[#DDA6FF]'
		},
		jurisprudence: {
			label: 'Jurisprudence',
			cls: 'border-[#EA2B2B]/50 bg-[#FFDFE0] text-[#EA2B2B] dark:border-[#FF4B4B]/50 dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]'
		},
		cases: {
			label: 'Cases',
			cls: 'border-[#FF9600]/60 bg-[#FFF4E5] text-[#C96B00] dark:border-[#FF9600]/50 dark:bg-[#FF9600]/20 dark:text-[#FFAD33]'
		},
		bodies: {
			label: 'Bodies',
			cls: 'border-teal-600/50 bg-teal-100 text-teal-800 dark:border-teal-400/50 dark:bg-teal-500/20 dark:text-teal-300'
		}
	};

	function itemDomId(k: string): string {
		return `exam-item-${k.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
	}

	function jumpToItem(k: string) {
		activeItemKey = k;
		if (!singleQuestion) {
			const el = document.getElementById(itemDomId(k));
			if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	function stepSingleQuestion(delta: -1 | 1) {
		if (!flatFilteredItems.length) return;
		const nextIdx = currentFlatIndex + delta;
		if (nextIdx < 0 || nextIdx >= flatFilteredItems.length) return;
		activeItemKey = entryKey(flatFilteredItems[nextIdx].entry);
	}

	function jumpToNextUnanswered() {
		if (!session) return;
		const ordered = activeParts.flatMap((p) => p.items);
		if (!ordered.length) return;
		const curIdx = ordered.findIndex((it) => entryKey(it) === activeItemKey);
		for (let offset = 1; offset <= ordered.length; offset++) {
			const candidate = ordered[(curIdx + offset) % ordered.length];
			if (!isEntryAnswered(session, candidate, bank)) {
				if (activeFilter !== 'all' && activeFilter !== 'unanswered') activeFilter = 'all';
				const targetKey = entryKey(candidate);
				activeItemKey = targetKey;
				requestAnimationFrame(() => jumpToItem(targetKey));
				return;
			}
		}
	}

	function mapItemState(entry: UnifiedExamEntry): 'correct' | 'incorrect' | 'answered' | 'none' {
		if (!session) return 'none';
		if (!isEntryAnswered(session, entry, bank)) return 'none';
		if (showAnswers && entry.kind === 'mcq') {
			return pointsForEntry(session, entry, bank) === 1 ? 'correct' : 'incorrect';
		}
		return 'answered';
	}

	function toggleFlag(k: string) {
		if (!session || session.finishedAt) return;
		if (!session.flagged) session.flagged = {};
		if (session.flagged[k]) delete session.flagged[k];
		else session.flagged[k] = true;
	}

	function toggleHint(k: string) {
		openHints = { ...openHints, [k]: !openHints[k] };
	}

	function retrySingleMcq(entry: UnifiedExamEntry) {
		if (!session || session.finishedAt || entry.kind !== 'mcq') return;
		const k = entryKey(entry);
		delete session.answers[k];
		const q = bank.mcqById[entry.id];
		if (q) entry.order = dynamicOptionOrder(q.options, Math.random, entry.order);
	}

	function resetCurrentExam() {
		if (!session || session.finishedAt) return;
		const nowMs = Date.now();
		const origDuration =
			session.durationMs !== undefined
				? session.durationMs
				: session.deadlineAt !== null
					? Math.max(0, session.deadlineAt - session.startedAt - (session.pausedTotalMs ?? 0))
					: null;
		session.answers = {};
		session.marks = {};
		session.flagged = {};
		session.startedAt = nowMs;
		session.deadlineAt = origDuration ? nowMs + origDuration : null;
		session.durationMs = origDuration;
		session.pausedAt = null;
		session.pausedTotalMs = 0;
		for (const it of session.items) {
			if (it.kind === 'mcq') {
				const q = bank.mcqById[it.id];
				if (q) it.order = dynamicOptionOrder(q.options, Math.random, it.order);
			}
		}
		openHints = {};
		activeFilter = 'all';
		confirmReset = false;
		confirmSubmit = false;
		activeItemKey = session.items.length ? entryKey(session.items[0]) : '';
		now = nowMs;
		ui.toast('Exam reset — answers cleared and choices reshuffled');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function resetWrongMcqsInExam() {
		if (!session || session.finishedAt) return;
		let cleared = 0;
		let firstClearedKey = '';
		for (const it of session.items) {
			if (it.kind !== 'mcq') continue;
			const k = entryKey(it);
			const raw = session.answers[k];
			if (raw === undefined || raw === '') continue;
			if (pointsForEntry(session, it, bank) !== 1) {
				delete session.answers[k];
				const q = bank.mcqById[it.id];
				if (q) it.order = dynamicOptionOrder(q.options, Math.random, it.order);
				if (!firstClearedKey) firstClearedKey = k;
				cleared++;
			}
		}
		if (!cleared) return;
		confirmReset = false;
		confirmSubmit = false;
		if (activeFilter === 'incorrect') activeFilter = 'all';
		ui.toast(`Cleared ${cleared} wrong ${cleared === 1 ? 'answer' : 'answers'} — try again`);
		if (firstClearedKey) {
			activeItemKey = firstClearedKey;
			requestAnimationFrame(() => jumpToItem(firstClearedKey));
		}
	}

	function requestSubmit() {
		if (!session || session.finishedAt) return;
		confirmReset = false;
		if (answeredCount < session.items.length && !confirmSubmit) {
			confirmSubmit = true;
		} else {
			submitExam();
		}
	}

	function matchesActiveFilter(entry: UnifiedExamEntry): boolean {
		if (!session || activeFilter === 'all') return true;
		const k = entryKey(entry);
		if (activeFilter === 'unanswered') return !isEntryAnswered(session, entry, bank);
		if (activeFilter === 'incorrect') {
			return (
				entry.kind === 'mcq' &&
				isEntryAnswered(session, entry, bank) &&
				pointsForEntry(session, entry, bank) !== 1
			);
		}
		if (activeFilter === 'flagged') return Boolean(session.flagged?.[k]);
		if (activeFilter === 'bookmarked') return entry.kind === 'mcq' && userStorage.isBookmarked(entry.id);
		return true;
	}

	function onKey(e: KeyboardEvent) {
		if (!session || session.finishedAt) return;
		if (e.metaKey || e.ctrlKey || e.altKey) return;
		const tag = (e.target as HTMLElement | null)?.tagName;
		if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (e.target as HTMLElement | null)?.isContentEditable) {
			return;
		}
		const ordered = filteredActiveParts.flatMap((p) => p.items);
		if (!ordered.length) return;
		const curIdx = Math.max(
			0,
			ordered.findIndex((it) => entryKey(it) === activeItemKey)
		);
		const cur = ordered[curIdx];

		if (e.key === 'ArrowRight') {
			if (curIdx + 1 < ordered.length) {
				e.preventDefault();
				jumpToItem(entryKey(ordered[curIdx + 1]));
			}
			return;
		}
		if (e.key === 'ArrowLeft') {
			if (curIdx > 0) {
				e.preventDefault();
				jumpToItem(entryKey(ordered[curIdx - 1]));
			}
			return;
		}
		if (e.key.toLowerCase() === 'f' && cur) {
			e.preventDefault();
			toggleFlag(entryKey(cur));
			return;
		}
		if (e.key.toLowerCase() === 'b' && cur && cur.kind === 'mcq') {
			e.preventDefault();
			userStorage.toggleBookmark(cur.id);
			return;
		}
		if (cur && cur.kind === 'mcq') {
			const q = bank.mcqById[cur.id];
			if (!q) return;
			const order = cur.order ?? q.options.map((_, i) => i);
			const n = Number(e.key);
			const letterIdx = LETTERS.indexOf(e.key.toUpperCase());
			const displayIdx = n >= 1 && n <= order.length ? n - 1 : letterIdx >= 0 && letterIdx < order.length ? letterIdx : -1;
			if (displayIdx >= 0) {
				e.preventDefault();
				pickMcqOption(cur, order[displayIdx]);
			}
		}
	}

	function onBeforeUnload(e: BeforeUnloadEvent) {
		if (session && !session.finishedAt && answeredCount > 0) {
			e.preventDefault();
		}
	}

	// ---- Active exam derived values ----
	const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI'];
	const activeParts = $derived.by(() => {
		if (!session) return [];
		const out: { kind: ExamItemKind; roman: string; title: string; items: UnifiedExamEntry[] }[] = [];
		for (const k of PART_ORDER) {
			const items = session.items.filter((it) => it.kind === k);
			if (items.length) {
				out.push({
					kind: k,
					roman: ROMAN[out.length] ?? String(out.length + 1),
					title: KIND_META[k].title,
					items
				});
			}
		}
		return out;
	});

	const filteredActiveParts = $derived.by(() => {
		if (!session) return [];
		return activeParts
			.map((part) => ({
				...part,
				indexedItems: part.items
					.map((entry, idx) => ({ entry, idx }))
					.filter(({ entry }) => matchesActiveFilter(entry)),
				items: part.items.filter((entry) => matchesActiveFilter(entry))
			}))
			.filter((part) => part.items.length > 0);
	});

	const flatFilteredItems = $derived(
		filteredActiveParts.flatMap((part) =>
			part.indexedItems.map(({ entry, idx }) => ({ part, entry, idx }))
		)
	);

	const currentFlatIndex = $derived.by(() => {
		if (!flatFilteredItems.length) return 0;
		const idx = flatFilteredItems.findIndex(({ entry }) => entryKey(entry) === activeItemKey);
		return idx >= 0 ? idx : 0;
	});

	const displayParts = $derived.by(() => {
		if (!singleQuestion) return filteredActiveParts;
		const cur = flatFilteredItems[currentFlatIndex];
		if (!cur) return [];
		return [
			{
				...cur.part,
				indexedItems: [{ entry: cur.entry, idx: cur.idx }],
				items: [cur.entry]
			}
		];
	});

	const answeredCount = $derived(
		session ? session.items.filter((it) => isEntryAnswered(session!, it, bank)).length : 0
	);
	const progressPct = $derived(
		session && session.items.length ? Math.round((answeredCount / session.items.length) * 100) : 0
	);
	const correctMcqCount = $derived(
		session
			? session.items.filter(
					(it) =>
						it.kind === 'mcq' &&
						isEntryAnswered(session!, it, bank) &&
						pointsForEntry(session!, it, bank) === 1
				).length
			: 0
	);
	const wrongMcqCount = $derived(
		session
			? session.items.filter(
					(it) =>
						it.kind === 'mcq' &&
						isEntryAnswered(session!, it, bank) &&
						pointsForEntry(session!, it, bank) !== 1
				).length
			: 0
	);
	const flaggedCount = $derived(
		session ? session.items.filter((it) => Boolean(session!.flagged?.[entryKey(it)])).length : 0
	);
	const bookmarkedInExamCount = $derived(
		session ? session.items.filter((it) => it.kind === 'mcq' && userStorage.isBookmarked(it.id)).length : 0
	);
	const totals = $derived(session ? computeExamTotals(session, bank) : null);
	const missedMcqsInSession = $derived(
		session
			? session.items.filter((it) => it.kind === 'mcq' && pointsForEntry(session!, it, bank) !== 1).length
			: 0
	);

	// Topic breakdown for MCQs on results screen
	const mcqTopicBreakdown = $derived.by(() => {
		if (!session) return [];
		const map = new Map<string, { name: string; ok: number; total: number }>();
		for (const it of session.items) {
			if (it.kind !== 'mcq') continue;
			const q = bank.mcqById[it.id];
			if (!q) continue;
			const row = map.get(q.topicId) ?? { name: q.topicName, ok: 0, total: 0 };
			row.total++;
			if (pointsForEntry(session, it, bank) === 1) row.ok++;
			map.set(q.topicId, row);
		}
		return [...map.values()].sort((a, b) => a.ok / a.total - b.ok / b.total || b.total - a.total);
	});

	let confirmSubmit = $state(false);
	let confirmQuit = $state(false);
	let mobileMenuOpen = $state(false);
	let mcqReviewFilter = $state<'all' | 'missed'>('all');

	const ALAC_FIELDS: { key: 'a' | 'l' | 'p' | 'c'; letter: string; label: string; placeholder: string; rows: number }[] = [
		{ key: 'a', letter: 'A', label: 'Answer', placeholder: 'Yes / No. Categorical answer…', rows: 2 },
		{ key: 'l', letter: 'L', label: 'Legal Basis', placeholder: 'Under Rule / Article / Jurisprudence…', rows: 3 },
		{ key: 'p', letter: 'A', label: 'Application', placeholder: 'Here, applying the facts to the requisites…', rows: 4 },
		{ key: 'c', letter: 'C', label: 'Conclusion', placeholder: 'Therefore, …', rows: 2 }
	];
	const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

	const fmtDate = (t: number) =>
		new Date(t).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

	function sectionOptions(kind: ExamItemKind, avail: number): number[] {
		const base = KIND_META[kind].opts.filter((v) => v === 0 || v <= avail);
		if (avail > 0 && !base.includes(avail)) base.push(avail);
		return base;
	}
</script>

<svelte:window onkeydown={onKey} onbeforeunload={onBeforeUnload} />

{#if !session}
	<!-- ==================== SETUP SCREEN ==================== -->
	<div class="flex flex-col gap-6">
		<p class="max-w-3xl text-sm leading-relaxed font-semibold text-muted-foreground">
			Build a custom mock exam or practice run from every test type available in <strong class="text-foreground">{subject.title}</strong>.
			Mix MCQs, ALAC essays, enumerations, definitions, requisites, and numbers in one exam — MCQs grade automatically while written items use side-by-side rubric self-grading.
		</p>

		<section class="flex flex-col gap-6 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 sm:p-6 dark:border-[#2B434E]">
			<!-- Top row: Mode + Quick Scope Preset -->
			<div class="grid gap-5 md:grid-cols-2">
				<div class="flex flex-col gap-2">
					<span class="text-xs font-extrabold tracking-wide text-muted-foreground uppercase">Mode</span>
					<div role="group" aria-label="Exam mode" class="inline-flex w-fit rounded-2xl border-2 border-slate-200 bg-slate-100 p-1 dark:border-[#2B434E] dark:bg-[#131F24]">
						<button
							type="button"
							aria-pressed={mode === 'exam'}
							onclick={() => (mode = 'exam')}
							class={cn(
								'rounded-xl px-4 py-2 text-xs font-extrabold tracking-wide uppercase transition-all',
								mode === 'exam' ? 'bg-[#1CB0F6] text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
							)}
						>
							Mock Exam
						</button>
						<button
							type="button"
							aria-pressed={mode === 'practice'}
							onclick={() => (mode = 'practice')}
							class={cn(
								'rounded-xl px-4 py-2 text-xs font-extrabold tracking-wide uppercase transition-all',
								mode === 'practice' ? 'bg-[#58CC02] text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'
							)}
						>
							Practice Run
						</button>
					</div>
					<p class="text-xs font-semibold text-muted-foreground">
						{mode === 'exam'
							? 'Answers stay editable until submit; explanations and scoring appear at the end.'
							: 'Instant MCQ feedback with sound effects after every choice.'}
					</p>
				</div>

				<div class="flex flex-col gap-2">
					<div class="flex flex-wrap items-center justify-between gap-2">
						<span class="text-xs font-extrabold tracking-wide text-muted-foreground uppercase">Quick Filter / Scope</span>
						{#if isModifiedFromFinalsDefault}
							<button
								type="button"
								onclick={resetToFinalsDefault}
								class="inline-flex items-center gap-1 text-xs font-extrabold text-[#1CB0F6] hover:underline"
							>
								<RotateCcw class="size-3" /> Reset to ★ FINALS default
							</button>
						{/if}
					</div>
					<div role="group" aria-label="Exam scope preset" class="flex flex-wrap gap-2">
						{#if bank.hasFinalsPreset}
							<button
								type="button"
								aria-pressed={scopePreset === 'finals'}
								onclick={() => applyScopePreset('finals')}
								class={cn(
									'inline-flex h-9 items-center gap-1.5 rounded-xl border-2 border-b-3 px-3 text-xs font-extrabold tracking-wide uppercase transition-all',
									scopePreset === 'finals'
										? 'border-[#E5B400] bg-[#FFC800] text-slate-900'
										: 'border-[#E5B400]/50 bg-[#FFF5CC]/70 text-[#946200] hover:bg-[#FFF5CC] dark:border-[#FFC800]/40 dark:bg-[#FFC800]/15 dark:text-[#FFD633]'
								)}
							>
								<Sparkles class="size-3.5" strokeWidth={2.5} /> ★ FINALS Only
							</button>
						{/if}
						<button
							type="button"
							aria-pressed={scopePreset === 'all'}
							onclick={() => applyScopePreset('all')}
							class={cn(
								'inline-flex h-9 items-center gap-1.5 rounded-xl border-2 border-b-3 px-3 text-xs font-extrabold tracking-wide uppercase transition-all',
								scopePreset === 'all'
									? 'border-[#1899D6] bg-[#1CB0F6] text-white'
									: 'border-slate-200 bg-white text-foreground hover:bg-muted dark:border-[#2B434E] dark:bg-[#131F24]'
							)}
						>
							All Topics
						</button>
						<button
							type="button"
							aria-pressed={scopePreset === 'missed'}
							disabled={!totalMissedAndMoreLikelyCount}
							onclick={() => applyScopePreset('missed')}
							class={cn(
								'inline-flex h-9 items-center gap-1.5 rounded-xl border-2 border-b-3 px-3 text-xs font-extrabold tracking-wide uppercase transition-all disabled:opacity-40',
								scopePreset === 'missed'
									? 'border-[#EA2B2B] bg-[#FF4B4B] text-white'
									: 'border-slate-200 bg-white text-foreground hover:bg-muted dark:border-[#2B434E] dark:bg-[#131F24]'
							)}
						>
							Missed / More Likely ({totalMissedAndMoreLikelyCount})
						</button>
						<button
							type="button"
							aria-pressed={scopePreset === 'new'}
							disabled={!newMcqCount && !unmasteredEssayCount}
							onclick={() => applyScopePreset('new')}
							class={cn(
								'inline-flex h-9 items-center gap-1.5 rounded-xl border-2 border-b-3 px-3 text-xs font-extrabold tracking-wide uppercase transition-all disabled:opacity-40',
								scopePreset === 'new'
									? 'border-[#46A302] bg-[#58CC02] text-white'
									: 'border-slate-200 bg-white text-foreground hover:bg-muted dark:border-[#2B434E] dark:bg-[#131F24]'
							)}
						>
							Unanswered ({newMcqCount})
						</button>
					</div>
				</div>
			</div>

			<!-- Dynamic Test Type Sections -->
			<div class="flex flex-col gap-3.5">
				<div class="flex items-center justify-between">
					<span class="text-xs font-extrabold tracking-wide text-muted-foreground uppercase">
						Available Test Sections ({availableKinds.length})
					</span>
				</div>

				<div class="grid gap-3.5 lg:grid-cols-2">
					{#each availableKinds as kind, idx (kind)}
						{@const meta = KIND_META[kind]}
						{@const avail = availableCounts[kind]}
						{@const selected = effectiveCounts[kind]}
						{@const opts = sectionOptions(kind, avail)}
						<div
							class={cn(
								'flex flex-col gap-3 rounded-2xl border-2 p-4 transition-colors',
								selected > 0
									? 'border-[#1CB0F6]/60 bg-[#DDF4FF]/25 dark:border-[#1CB0F6]/50 dark:bg-[#1CB0F6]/10'
									: 'border-slate-200 bg-slate-50/60 dark:border-[#2B434E] dark:bg-[#131F24]/60'
							)}
						>
							<div class="flex items-center justify-between gap-2">
								<span class="text-sm font-extrabold text-foreground">
									{ROMAN[idx]}. {meta.title}
								</span>
								<span class="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-[0.7rem] font-extrabold text-slate-700 tabular-nums dark:bg-[#223842] dark:text-slate-200">
									{avail} available
								</span>
							</div>

							<!-- Section-specific filter dropdown -->
							{#if kind === 'mcq'}
								<select
									aria-label="Filter MCQ topic"
									bind:value={mcqFilter}
									onchange={() => (scopePreset = mcqFilter === 'finals_all' ? 'finals' : mcqFilter === 'missed' ? 'missed' : mcqFilter === 'new' ? 'new' : 'all')}
									class="h-10 w-full rounded-xl border-2 border-slate-200 bg-white px-3 text-xs font-bold text-foreground outline-none focus:border-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#131F24]"
								>
									{#if bank.hasFinalsMcqs}
										<option value="finals_all">★ FINALS ({finalsMcqCount})</option>
									{/if}
									<option value="all">All MCQ topics ({bank.mcqs.length})</option>
									<option value="missed" disabled={!missedMcqCount}>Questions I missed ({missedMcqCount})</option>
									<option value="new" disabled={!newMcqCount}>Not yet answered ({newMcqCount})</option>
									{#if bank.mcqTopics.length > 1}
										<optgroup label="By topic / quiz / rule">
											{#each bank.mcqTopics as t (t.id)}
												<option value={t.id}>{t.isFinals ? '★ ' : ''}{t.label} ({t.count})</option>
											{/each}
										</optgroup>
									{/if}
								</select>
							{:else if kind === 'essay' && (bank.hasFinalsEssays || bank.essaySources.length > 0 || reviewEssayCount > 0)}
								<select
									aria-label="Filter essay source"
									bind:value={essayFilter}
									onchange={() => (scopePreset = essayFilter === 'finals_all' ? 'finals' : essayFilter === 'review' ? 'missed' : essayFilter === 'unmastered' ? 'new' : 'all')}
									class="h-10 w-full rounded-xl border-2 border-slate-200 bg-white px-3 text-xs font-bold text-foreground outline-none focus:border-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#131F24]"
								>
									{#if bank.hasFinalsEssays}
										<option value="finals_all">★ FINALS ({finalsEssayCount})</option>
									{/if}
									<option value="all">All essays ({bank.essays.length})</option>
									<option value="unmastered" disabled={!unmasteredEssayCount}>Not yet mastered ({unmasteredEssayCount})</option>
									<option value="review" disabled={!reviewEssayCount}>Flagged for review ({reviewEssayCount})</option>
									{#if bank.essaySources.length > 0}
										<optgroup label="By source">
											{#each bank.essaySources as src (src.id)}
												<option value={src.id}>{src.isFinals ? '★ ' : ''}{src.label} ({src.count})</option>
											{/each}
										</optgroup>
									{/if}
								</select>
							{:else if kind === 'enum' && bank.hasFinalsEnums}
								<select
									aria-label="Filter enumerations scope"
									bind:value={enumFilter}
									class="h-10 w-full rounded-xl border-2 border-slate-200 bg-white px-3 text-xs font-bold text-foreground outline-none focus:border-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#131F24]"
								>
									<option value="finals">★ FINALS ({finalsEnumCount})</option>
									<option value="all">All enumerations ({bank.enums.length})</option>
								</select>
							{:else if kind === 'term' && bank.hasFinalsTerms}
								<select
									aria-label="Filter definitions scope"
									bind:value={termFilter}
									class="h-10 w-full rounded-xl border-2 border-slate-200 bg-white px-3 text-xs font-bold text-foreground outline-none focus:border-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#131F24]"
								>
									<option value="finals">★ FINALS ({finalsTermCount})</option>
									<option value="all">All definitions ({bank.terms.length})</option>
								</select>
							{:else if kind === 'num' && bank.hasFinalsNums}
								<select
									aria-label="Filter numbers scope"
									bind:value={numFilter}
									class="h-10 w-full rounded-xl border-2 border-slate-200 bg-white px-3 text-xs font-bold text-foreground outline-none focus:border-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#131F24]"
								>
									<option value="finals">★ FINALS ({finalsNumCount})</option>
									<option value="all">All numbers ({bank.nums.length})</option>
								</select>
							{/if}

							<!-- Count picker -->
							<div role="group" aria-label="{meta.title} count" class="flex flex-wrap gap-1.5">
								{#each opts as v (v)}
									<button
										type="button"
										aria-pressed={selected === v}
										onclick={() => (counts[kind] = v)}
										class={cn(
											'h-8 min-w-[2.5rem] rounded-xl border-2 px-2.5 text-xs font-extrabold tabular-nums transition-all',
											selected === v
												? 'border-[#1899D6] bg-[#1CB0F6] text-white'
												: 'border-slate-200 bg-white text-slate-700 hover:border-[#1CB0F6]/60 dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-slate-200'
										)}
									>
										{v === 0 ? 'None' : v === avail && !KIND_META[kind].opts.includes(v) ? `All (${v})` : v}
									</button>
								{/each}
							</div>

							<p class="text-[0.72rem] font-semibold text-muted-foreground">{meta.setupHint}</p>
						</div>
					{/each}
				</div>
			</div>

			<!-- Timer (Exam Mode) -->
			{#if mode === 'exam'}
				<div class="flex flex-col gap-2">
					<span class="text-xs font-extrabold tracking-wide text-muted-foreground uppercase">Timer</span>
					<div role="group" aria-label="Exam timer" class="flex flex-wrap gap-1.5">
						{#each [['none', 'No timer'], ['auto', `Auto (${autoTimerMinutes}m)`], ['15', '15 min'], ['30', '30 min'], ['45', '45 min'], ['60', '60 min'], ['90', '90 min']] as [val, lbl] (val)}
							<button
								type="button"
								aria-pressed={timerChoice === val}
								onclick={() => (timerChoice = val as typeof timerChoice)}
								class={cn(
									'h-9 rounded-xl border-2 border-b-3 px-3 text-xs font-extrabold tracking-wide transition-all',
									timerChoice === val
										? 'border-[#1899D6] bg-[#1CB0F6] text-white'
										: 'border-slate-200 bg-white text-foreground hover:bg-muted dark:border-[#2B434E] dark:bg-[#131F24]'
								)}
							>
								{lbl}
							</button>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Launch CTA -->
			<div class="flex flex-wrap items-center gap-3 pt-1">
				<button
					type="button"
					disabled={!totalSelected}
					onclick={startExam}
					class="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-6 text-sm font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#4EB802] active:translate-y-0.5 active:border-b-2 disabled:opacity-40"
				>
					Start {mode === 'exam' ? 'Mock Exam' : 'Practice Run'} · {totalSelected} {totalSelected === 1 ? 'item' : 'items'}
				</button>
				{#if computedTimerSecs && totalSelected > 0}
					<span class="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground tabular-nums">
						<Clock class="size-3.5" /> {formatClock(computedTimerSecs)} limit
					</span>
				{/if}
			</div>
		</section>

		<!-- Recent Mock Exam History -->
		{#if subjectHistory.length}
			<section class="flex flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 dark:border-[#2B434E]">
				<h2 class="label-caps text-xs">Recent Exams · {subject.title}</h2>
				<div class="overflow-x-auto">
					<table class="w-full border-collapse text-sm">
						<tbody>
							{#each subjectHistory as h (h.id)}
								{@const p = h.total ? Math.round((h.correct / h.total) * 100) : 0}
								<tr class="border-t border-slate-200 first:border-t-0 dark:border-[#2B434E]">
									<td class="py-2.5 pr-3 text-xs font-bold whitespace-nowrap text-muted-foreground">{fmtDate(h.at)}</td>
									<td class="py-2.5 pr-3 font-extrabold text-foreground tabular-nums">{h.correct}/{h.total}</td>
									<td class="py-2.5 pr-3">
										<span
											class={cn(
												'inline-flex rounded-full px-2.5 py-0.5 text-xs font-extrabold tabular-nums',
												p >= 75
													? 'bg-[#D7FFB8] text-[#46A302] dark:bg-[#58CC02]/20 dark:text-[#7BE328]'
													: p >= 50
														? 'bg-[#FFF5CC] text-[#946200] dark:bg-[#FFC800]/20 dark:text-[#FFD633]'
														: 'bg-[#FFDFE0] text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]'
											)}
										>
											{p}%
										</span>
									</td>
									<td class="py-2.5 pr-3 text-xs font-semibold text-muted-foreground">{h.topicName}</td>
									<td class="py-2.5 text-right text-xs font-bold whitespace-nowrap text-muted-foreground tabular-nums max-sm:hidden">
										{h.secondsUsed ? formatClock(h.secondsUsed) : '—'}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>
		{/if}

		<!-- Adaptive Mock Exam Question Weights (only modified items shown; base 1× hidden) -->
		{#if subjectModifiedWeights.length}
			<section class="flex flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 dark:border-[#2B434E]">
				<div class="flex flex-wrap items-center justify-between gap-2">
					<div class="flex flex-wrap items-center gap-2">
						<h2 class="label-caps text-xs">Modified Question Weights · {subject.title}</h2>
						{#if boostedWeightCount > 0}
							<span class="rounded-full bg-[#FFDFE0] px-2.5 py-0.5 text-[0.7rem] font-extrabold text-[#EA2B2B] tabular-nums dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]">
								↑ {boostedWeightCount} boosted
							</span>
						{/if}
						{#if loweredWeightCount > 0}
							<span class="rounded-full bg-[#D7FFB8] px-2.5 py-0.5 text-[0.7rem] font-extrabold text-[#46A302] tabular-nums dark:bg-[#58CC02]/20 dark:text-[#7BE328]">
								↓ {loweredWeightCount} lowered
							</span>
						{/if}
					</div>
					<div class="flex flex-wrap items-center gap-2">
						{#if boostedWeightCount > 0 || missedMcqCount > 0}
							<button
								type="button"
								onclick={takeAllMissedFromHistory}
								class="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#EA2B2B] border-b-3 bg-[#FF4B4B] px-3 py-1 text-[0.7rem] font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#E03E3E] active:translate-y-0.5 active:border-b-2"
							>
								<RotateCcw class="size-3" strokeWidth={2.5} /> Take All Missed / More Likely ({Math.max(boostedWeightCount, missedMcqCount)})
							</button>
						{/if}
						<button
							type="button"
							onclick={() => {
								userStorage.clearExamWeights(subject.id);
								weightHistoryFilter = 'all';
								ui.toast(`Reset mock-exam weights for ${subject.title}`);
							}}
							class="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-background px-2.5 py-1 text-[0.7rem] font-extrabold tracking-wide text-muted-foreground uppercase transition-colors hover:border-[#EA2B2B]/50 hover:text-[#EA2B2B] dark:border-[#2B434E]"
						>
							<RotateCcw class="size-3" /> Reset all to 1×
						</button>
					</div>
				</div>
				<p class="text-xs font-semibold text-muted-foreground">
					Applies to subset mock exams (e.g. 20, 40 items). Consecutive right answers halve weight (never 0); flipping right ↔ wrong resets to base 1× first, then applies ±50%. Unchanged (1×) items are hidden.
				</p>
				{#if boostedWeightCount > 0 && loweredWeightCount > 0}
					<div class="flex flex-wrap gap-1.5" role="group" aria-label="Filter modified weights">
						{#each [
							{ id: 'all', label: `All (${subjectModifiedWeights.length})` },
							{ id: 'boosted', label: `More likely (${boostedWeightCount})` },
							{ id: 'lowered', label: `Less likely (${loweredWeightCount})` }
						] as tab (tab.id)}
							<button
								type="button"
								aria-pressed={weightHistoryFilter === tab.id}
								onclick={() => (weightHistoryFilter = tab.id as 'all' | 'boosted' | 'lowered')}
								class={cn(
									'rounded-xl border-2 px-2.5 py-1 text-[0.7rem] font-extrabold tracking-wide uppercase transition-colors',
									weightHistoryFilter === tab.id
										? 'border-[#1899D6] bg-[#1CB0F6] text-white'
										: 'border-slate-200 bg-background text-muted-foreground hover:text-foreground dark:border-[#2B434E]'
								)}
							>
								{tab.label}
							</button>
						{/each}
					</div>
				{/if}
				<div class="max-h-96 divide-y divide-slate-200 overflow-y-auto rounded-2xl border border-slate-200 dark:divide-[#2B434E] dark:border-[#2B434E]">
					{#each visibleModifiedWeights as row (row.id)}
						{@const boosted = row.weight > 1}
						<div class="flex items-start justify-between gap-3 px-3.5 py-2.5">
							<div class="flex min-w-0 flex-1 flex-col gap-0.5">
								<div class="flex flex-wrap items-center gap-1.5">
									<span class="rounded-md bg-slate-100 px-1.5 py-0.5 text-[0.65rem] font-extrabold tracking-wide text-slate-600 uppercase dark:bg-[#223842] dark:text-slate-300">
										{row.kindLabel}
									</span>
									{#if row.topic}
										<span class="truncate text-[0.7rem] font-bold text-muted-foreground">{row.topic}</span>
									{/if}
									{#if row.streak !== 0}
										<span class="text-[0.68rem] font-bold text-muted-foreground/80">
											· {Math.abs(row.streak)}× {row.streak > 0 ? 'right' : 'wrong'}
										</span>
									{/if}
								</div>
								<p class="line-clamp-2 text-xs leading-snug font-semibold text-foreground">{row.prompt}</p>
							</div>
							<div class="flex shrink-0 items-center gap-1.5">
								<span
									class={cn(
										'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-extrabold tabular-nums',
										boosted
											? 'bg-[#FFDFE0] text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]'
											: 'bg-[#D7FFB8] text-[#46A302] dark:bg-[#58CC02]/20 dark:text-[#7BE328]'
									)}
									title={boosted ? 'More likely to reappear on subset mock exams' : 'Less likely to reappear on subset mock exams (still eligible)'}
								>
									{formatWeightMultiplier(row.weight)}
									<span class="text-[0.68rem] opacity-80">({formatWeightDelta(row.weight)})</span>
								</span>
								<button
									type="button"
									onclick={() => userStorage.resetExamWeight(row.id)}
									title="Reset this item back to base weight (1×)"
									aria-label="Reset item weight to 1x"
									class="grid size-7 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground dark:hover:bg-[#223842]"
								>
									<RotateCcw class="size-3.5" />
								</button>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/if}
	</div>
{:else if !session.finishedAt}
	<!-- ==================== ACTIVE EXAM PAPER ==================== -->
	<div class="flex flex-col gap-5">
		<!-- Sticky header bar -->
		<div class="sticky top-[calc(var(--header-h)+0.5rem)] z-20 flex flex-col gap-3 rounded-2xl border-2 border-b-4 border-slate-200 bg-card/95 px-4 py-3 shadow-sm backdrop-blur dark:border-[#2B434E]">
			<div class="flex flex-wrap items-center justify-between gap-3">
				<div class="flex min-w-0 flex-col gap-1">
					<span class="truncate text-[0.7rem] font-extrabold tracking-wide text-muted-foreground uppercase">{session.label}</span>
					<div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-extrabold text-foreground tabular-nums">
						<span>{answeredCount} of {session.items.length} answered ({progressPct}%)</span>
						{#if showAnswers && correctMcqCount + wrongMcqCount > 0}
							<span class="inline-flex items-center gap-1.5 text-xs">
								<span class="rounded-full bg-[#D7FFB8] px-2 py-0.5 text-[#46A302] dark:bg-[#58CC02]/20 dark:text-[#7BE328]">
									✓ {correctMcqCount}
								</span>
								<span class="rounded-full bg-[#FFDFE0] px-2 py-0.5 text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]">
									✗ {wrongMcqCount}
								</span>
							</span>
						{/if}
						{#if flaggedCount > 0}
							<span class="inline-flex items-center gap-1 rounded-full bg-[#FFF4E5] px-2 py-0.5 text-xs text-[#C96B00] dark:bg-[#FF9600]/20 dark:text-[#FFAD33]">
								<Flag class="size-3" /> {flaggedCount}
							</span>
						{/if}
					</div>
					{#if !singleQuestion && activeParts.length > 1}
						<div class="mt-0.5 hidden flex-wrap gap-1 md:flex">
							{#each activeParts as part (part.kind)}
								<a
									href="#exam-part-{part.kind}"
									class="rounded-lg border border-slate-200 bg-slate-100 px-2 py-0.5 text-[0.68rem] font-extrabold text-foreground no-underline hover:border-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#131F24]"
								>
									{part.roman}. {KIND_META[part.kind].short}
								</a>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Controls: Mobile prioritizes Submit, Reset, Timer & 3-dot overflow; Desktop shows all controls inline -->
				<div class="flex w-full flex-wrap items-center justify-between gap-1.5 sm:w-auto sm:justify-end sm:gap-2">
					{#if showAnswers && wrongMcqCount > 0}
						<button
							type="button"
							onclick={resetWrongMcqsInExam}
							title="Clear only wrong MCQ answers and reshuffle their choices"
							class="hidden h-9 items-center gap-1.5 rounded-xl border-2 border-[#EA2B2B]/40 border-b-3 bg-[#FFDFE0]/70 px-3 text-xs font-extrabold tracking-wide text-[#EA2B2B] uppercase transition-all hover:bg-[#FFDFE0] active:translate-y-0.5 active:border-b-2 sm:inline-flex dark:border-[#FF4B4B]/50 dark:bg-[#FF4B4B]/15 dark:text-[#FF7878]"
						>
							<RotateCcw class="size-3.5" strokeWidth={2.5} /> Reset wrong ({wrongMcqCount})
						</button>
					{/if}
					<div class="flex items-center gap-1.5 sm:gap-2">
						<button
							type="button"
							onclick={requestSubmit}
							class="inline-flex h-9 items-center gap-1.5 rounded-xl border-2 border-[#46A302] border-b-3 bg-[#58CC02] px-3.5 text-xs font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#4EB802] active:translate-y-0.5 active:border-b-2"
						>
							<Send class="size-3.5" strokeWidth={2.5} /> Submit
						</button>
						<button
							type="button"
							onclick={() => {
								confirmSubmit = false;
								confirmReset = !confirmReset;
							}}
							aria-label="Reset exam"
							title="Clear all answers, reshuffle choices, and restart timer"
							class="inline-flex size-9 items-center justify-center gap-1.5 rounded-xl border-2 border-slate-200 border-b-3 bg-white text-xs font-extrabold tracking-wide text-foreground uppercase transition-all hover:border-slate-300 hover:bg-slate-50 active:translate-y-0.5 active:border-b-2 sm:w-auto sm:px-3 dark:border-[#2B434E] dark:bg-[#131F24] dark:hover:bg-[#223842]"
						>
							<RotateCcw class="size-3.5" strokeWidth={2.5} />
							<span class="hidden sm:inline">Reset</span>
						</button>
					</div>
					<button
						type="button"
						onclick={toggleSingleQuestion}
						aria-pressed={singleQuestion}
						title={singleQuestion ? 'One question per page (MCQ view) — click for full exam scroll' : 'Full exam scroll — click for one question per page (MCQ view)'}
						aria-label={singleQuestion ? 'Switch to full exam scroll view' : 'Switch to one question per page view'}
						class={cn(
							'hidden size-9 place-items-center rounded-xl border-2 border-b-3 transition-all active:translate-y-0.5 active:border-b-2 sm:grid',
							singleQuestion
								? 'border-[#1899D6]/60 bg-[#DDF4FF]/80 text-[#1899D6] hover:bg-[#DDF4FF] dark:border-[#1CB0F6]/50 dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]'
								: 'border-slate-200 bg-white text-muted-foreground hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
						)}
					>
						{#if singleQuestion}
							<Square class="size-4" strokeWidth={2.5} />
						{:else}
							<LayoutList class="size-4" strokeWidth={2.5} />
						{/if}
					</button>
					<button
						type="button"
						onclick={toggleShowAnswers}
						aria-pressed={showAnswers}
						title={showAnswers ? 'Answers reveal after each choice — click to hide until submission' : 'Answers hidden until submission — click to reveal after each choice'}
						aria-label={showAnswers ? 'Hide answers until submission' : 'Reveal answers after each choice'}
						class={cn(
							'hidden size-9 place-items-center rounded-xl border-2 border-b-3 transition-all active:translate-y-0.5 active:border-b-2 sm:grid',
							showAnswers
								? 'border-[#46A302]/50 bg-[#D7FFB8]/70 text-[#46A302] hover:bg-[#D7FFB8] dark:border-[#58CC02]/50 dark:bg-[#58CC02]/15 dark:text-[#7BE328]'
								: 'border-slate-200 bg-white text-muted-foreground hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
						)}
					>
						{#if showAnswers}
							<Eye class="size-4" strokeWidth={2.5} />
						{:else}
							<EyeOff class="size-4" strokeWidth={2.5} />
						{/if}
					</button>
					<button
						type="button"
						onclick={() => prefs.set('soundEnabled', !prefs.value.soundEnabled)}
						title={prefs.value.soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
						aria-label={prefs.value.soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
						class="hidden size-9 place-items-center rounded-xl border-2 border-slate-200 bg-white text-muted-foreground hover:text-foreground sm:grid dark:border-[#2B434E] dark:bg-[#131F24]"
					>
						{#if prefs.value.soundEnabled}
							<Volume2 class="size-4 text-[#1CB0F6]" />
						{:else}
							<VolumeX class="size-4" />
						{/if}
					</button>
					{#if hasAlacEssaysInSession}
						<button
							type="button"
							onclick={toggleEssayFreeform}
							aria-pressed={!essayFreeform}
							title={essayFreeform
								? 'Wide essay textbox mode — click to switch to 4-box ALAC format'
								: 'ALAC 4-box mode — click to switch to wide essay textbox'}
							class={cn(
								'hidden h-9 items-center gap-1.5 rounded-xl border-2 border-b-3 px-3 text-xs font-extrabold tracking-wide uppercase transition-all active:translate-y-0.5 active:border-b-2 sm:inline-flex',
								!essayFreeform
									? 'border-[#A55EEA]/60 bg-[#F3E8FF] text-[#8930C9] hover:bg-[#EBD5FF] dark:border-[#CE82FF]/50 dark:bg-[#CE82FF]/20 dark:text-[#DDA6FF]'
									: 'border-slate-200 bg-white text-foreground hover:border-[#A55EEA]/50 hover:text-[#8930C9] dark:border-[#2B434E] dark:bg-[#131F24] dark:hover:text-[#DDA6FF]'
							)}
						>
							{#if essayFreeform}
								<AlignLeft class="size-3.5" strokeWidth={2.5} /> Essay
							{:else}
								<LayoutList class="size-3.5" strokeWidth={2.5} /> ALAC
							{/if}
						</button>
					{/if}
					<div class="flex items-center gap-1.5 sm:gap-2">
						<button
							type="button"
							onclick={togglePause}
							aria-pressed={isPaused}
							title={isPaused ? 'Timer paused — click to resume' : 'Click to pause timer'}
							class={cn(
								'group relative inline-flex h-9 items-center justify-center gap-1.5 overflow-hidden rounded-xl border-2 border-b-3 px-2.5 text-sm font-extrabold tabular-nums transition-all active:translate-y-0.5 active:border-b-2 sm:px-3',
								isPaused
									? 'border-[#FF9600] bg-[#FFF4E5] text-[#C96B00] hover:border-[#46A302] hover:bg-[#58CC02] hover:text-white dark:border-[#FF9600]/60 dark:bg-[#FF9600]/15 dark:text-[#FFAD33] dark:hover:border-[#46A302] dark:hover:bg-[#58CC02] dark:hover:text-white'
									: secsLeft !== null && secsLeft < 60
										? 'animate-pulse border-[#EA2B2B] bg-[#FFDFE0] text-[#EA2B2B] hover:animate-none dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]'
										: 'border-slate-200 bg-slate-100 text-foreground hover:border-[#FF9600] hover:bg-[#FFF4E5] hover:text-[#C96B00] dark:border-[#2B434E] dark:bg-[#131F24] dark:hover:border-[#FF9600]/60 dark:hover:bg-[#FF9600]/15 dark:hover:text-[#FFAD33]'
							)}
						>
							<span class="inline-flex items-center gap-1.5 transition-opacity group-hover:opacity-0">
								<Clock class="size-4" />
								{#if secsLeft !== null}
									{formatClock(secsLeft)}
								{:else}
									{formatClock(elapsedSecs)}
								{/if}
								{#if isPaused}
									<span class="ml-0.5 text-[0.65rem] tracking-wide uppercase">Paused</span>
								{/if}
							</span>
							<span class="pointer-events-none absolute inset-0 inline-flex items-center justify-center gap-1 text-xs font-extrabold tracking-wide uppercase opacity-0 transition-opacity group-hover:opacity-100">
								{#if isPaused}
									<Play class="size-3.5" strokeWidth={2.5} /> Resume
								{:else}
									<Pause class="size-3.5" strokeWidth={2.5} /> Pause
								{/if}
							</span>
						</button>

						<!-- Mobile 3-dot menu for secondary controls -->
						<div class="sm:hidden">
							<Popover.Root bind:open={mobileMenuOpen}>
								<Popover.Trigger
									aria-label="More exam options"
									title="More exam options"
									class="relative grid size-9 place-items-center rounded-xl border-2 border-b-3 border-slate-200 bg-white text-foreground transition-all hover:bg-slate-50 active:translate-y-0.5 active:border-b-2 dark:border-[#2B434E] dark:bg-[#131F24]"
								>
									<MoreVertical class="size-4" strokeWidth={2.5} />
									{#if showAnswers && wrongMcqCount > 0}
										<span class="absolute top-1 right-1 size-2 rounded-full bg-[#FF4B4B]" aria-hidden="true"></span>
									{/if}
								</Popover.Trigger>
								<Popover.Portal>
									<Popover.Content
										sideOffset={6}
										align="end"
										class="z-50 flex w-60 flex-col gap-1 rounded-2xl border-2 border-b-4 border-slate-200 bg-popover p-1.5 shadow-xl outline-none dark:border-[#2B434E]"
									>
										{#if showAnswers && wrongMcqCount > 0}
											<button
												type="button"
												onclick={() => {
													mobileMenuOpen = false;
													resetWrongMcqsInExam();
												}}
												class="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-extrabold text-[#EA2B2B] hover:bg-[#FFDFE0]/60 dark:text-[#FF7878] dark:hover:bg-[#FF4B4B]/15"
											>
												<RotateCcw class="size-4 shrink-0" />
												<span>Reset wrong ({wrongMcqCount})</span>
											</button>
										{/if}
										<button
											type="button"
											onclick={() => {
												toggleSingleQuestion();
												mobileMenuOpen = false;
											}}
											class="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-extrabold text-foreground hover:bg-muted"
										>
											{#if singleQuestion}
												<LayoutList class="size-4 shrink-0 text-[#1CB0F6]" />
												<span>Full exam scroll</span>
											{:else}
												<Square class="size-4 shrink-0 text-[#1CB0F6]" />
												<span>One question per page</span>
											{/if}
										</button>
										<button
											type="button"
											onclick={() => {
												toggleShowAnswers();
												mobileMenuOpen = false;
											}}
											class="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-extrabold text-foreground hover:bg-muted"
										>
											{#if showAnswers}
												<EyeOff class="size-4 shrink-0 text-[#58CC02]" />
												<span>Hide answers until submit</span>
											{:else}
												<Eye class="size-4 shrink-0 text-[#58CC02]" />
												<span>Reveal answers on pick</span>
											{/if}
										</button>
										{#if hasAlacEssaysInSession}
											<button
												type="button"
												onclick={() => {
													toggleEssayFreeform();
													mobileMenuOpen = false;
												}}
												class="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-extrabold text-foreground hover:bg-muted"
											>
												{#if essayFreeform}
													<LayoutList class="size-4 shrink-0 text-[#CE82FF]" />
													<span>Switch to 4-box ALAC</span>
												{:else}
													<AlignLeft class="size-4 shrink-0 text-[#CE82FF]" />
													<span>Switch to wide essay box</span>
												{/if}
											</button>
										{/if}
										<button
											type="button"
											onclick={() => {
												prefs.set('soundEnabled', !prefs.value.soundEnabled);
												mobileMenuOpen = false;
											}}
											class="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-xs font-extrabold text-foreground hover:bg-muted"
										>
											{#if prefs.value.soundEnabled}
												<Volume2 class="size-4 shrink-0 text-[#1CB0F6]" />
												<span>Sound effects: On</span>
											{:else}
												<VolumeX class="size-4 shrink-0 text-muted-foreground" />
												<span>Sound effects: Off</span>
											{/if}
										</button>
									</Popover.Content>
								</Popover.Portal>
							</Popover.Root>
						</div>
					</div>
				</div>
			</div>

			<!-- Progress bar -->
			<div class="h-2 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-[#223842]">
				<div
					class={cn(
						'h-full rounded-full transition-all duration-300',
						progressPct >= 100 ? 'bg-[#58CC02]' : 'bg-[#1CB0F6]'
					)}
					style="width: {progressPct}%"
				></div>
			</div>

			{#if confirmReset}
				<div role="alert" class="flex flex-wrap items-center justify-between gap-2 rounded-xl border-2 border-[#EA2B2B]/50 bg-[#FFDFE0]/70 px-3.5 py-2.5 text-xs dark:bg-[#FF4B4B]/15">
					<span class="font-extrabold text-foreground">
						Reset all {session.items.length} items? This clears all answers, reshuffles choices, and restarts the timer.
					</span>
					<div class="flex items-center gap-2">
						<button
							type="button"
							onclick={resetCurrentExam}
							class="rounded-xl border-2 border-[#EA2B2B] border-b-3 bg-[#FF4B4B] px-3 py-1.5 text-xs font-extrabold tracking-wide text-white uppercase"
						>
							Reset Exam
						</button>
						<button
							type="button"
							onclick={() => (confirmReset = false)}
							class="rounded-xl border-2 border-slate-200 bg-white px-3 py-1.5 text-xs font-extrabold text-foreground dark:border-[#2B434E] dark:bg-[#131F24]"
						>
							Cancel
						</button>
					</div>
				</div>
			{/if}

			{#if confirmSubmit}
				<div role="alert" class="flex flex-wrap items-center justify-between gap-2 rounded-xl border-2 border-[#E5B400] bg-[#FFF5CC]/85 px-3.5 py-2.5 text-xs dark:bg-[#FFC800]/15">
					<span class="font-extrabold text-foreground">
						{session.items.length - answeredCount} {session.items.length - answeredCount === 1 ? 'item is' : 'items are'} unanswered and will score 0.
					</span>
					<div class="flex items-center gap-2">
						<button
							type="button"
							onclick={submitExam}
							class="rounded-xl border-2 border-[#46A302] border-b-3 bg-[#58CC02] px-3 py-1.5 text-xs font-extrabold tracking-wide text-white uppercase"
						>
							Submit Anyway
						</button>
						<button
							type="button"
							onclick={() => (confirmSubmit = false)}
							class="rounded-xl border-2 border-slate-200 bg-white px-3 py-1.5 text-xs font-extrabold text-foreground dark:border-[#2B434E] dark:bg-[#131F24]"
						>
							Keep Answering
						</button>
					</div>
				</div>
			{/if}
		</div>

		{#if isPaused}
			<div role="status" class="flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-[#FF9600]/60 bg-[#FFF4E5] px-4 py-3 text-sm dark:bg-[#FF9600]/15">
				<span class="font-extrabold text-[#C96B00] dark:text-[#FFAD33]">Timer is paused. Resume whenever you’re ready to continue.</span>
				<button
					type="button"
					onclick={togglePause}
					class="inline-flex h-8 items-center gap-1.5 rounded-xl border-2 border-[#46A302] border-b-3 bg-[#58CC02] px-3 text-xs font-extrabold tracking-wide text-white uppercase"
				>
					<Play class="size-3.5" strokeWidth={2.5} /> Resume timer
				</button>
			</div>
		{/if}

		<!-- Quick Filter Bar (MCQ parity: All / Unanswered / Incorrect / Flagged / Bookmarked) -->
		<div class="flex flex-wrap items-center justify-between gap-2">
			<div class="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter exam items">
				{#each [
					{ id: 'all' as ActiveExamFilter, label: 'All', count: session.items.length, show: true },
					{ id: 'unanswered' as ActiveExamFilter, label: 'Unanswered', count: session.items.length - answeredCount, show: true },
					{ id: 'incorrect' as ActiveExamFilter, label: 'Incorrect', count: wrongMcqCount, show: showAnswers },
					{ id: 'flagged' as ActiveExamFilter, label: 'Flagged', count: flaggedCount, show: true },
					{ id: 'bookmarked' as ActiveExamFilter, label: 'Bookmarked', count: bookmarkedInExamCount, show: session.items.some((it) => it.kind === 'mcq') }
				] as f (f.id)}
					{#if f.show}
						<button
							type="button"
							onclick={() => (activeFilter = f.id)}
							class={cn(
								'inline-flex h-8 items-center gap-1.5 rounded-xl border-2 px-3 text-xs font-extrabold transition-all',
								activeFilter === f.id
									? 'border-[#1899D6] bg-[#1CB0F6] text-white'
									: 'border-slate-200 bg-card text-muted-foreground hover:border-[#1CB0F6]/50 hover:text-foreground dark:border-[#2B434E]'
							)}
						>
							{f.label}
							<span class={cn('rounded-full px-1.5 py-0.2 text-[0.65rem] tabular-nums', activeFilter === f.id ? 'bg-white/25 text-white' : 'bg-slate-100 text-muted-foreground dark:bg-[#223842]')}>
								{f.count}
							</span>
						</button>
					{/if}
				{/each}
			</div>
			<span class="hidden text-[0.7rem] font-bold text-muted-foreground sm:inline">
				Keys: A–H / 1–8 pick · ←/→ jump · F flag · B bookmark
			</span>
		</div>

		<!-- Active Exam Content + Jump to Question Sidebar -->
		<div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_17.5rem]">
		<div class="flex min-w-0 flex-col gap-6">
		{#if filteredActiveParts.length === 0}
			<div class="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 bg-card p-8 text-center dark:border-[#2B434E]">
				<p class="text-sm font-extrabold text-foreground">No items match the “{activeFilter}” filter.</p>
				<button
					type="button"
					onclick={() => (activeFilter = 'all')}
					class="rounded-xl border-2 border-[#1899D6] border-b-3 bg-[#1CB0F6] px-4 py-1.5 text-xs font-extrabold tracking-wide text-white uppercase"
				>
					Show All Items
				</button>
			</div>
		{/if}
		<!-- Exam Sections -->
		{#if singleQuestion && flatFilteredItems.length > 0}
			{@const curFlat = flatFilteredItems[currentFlatIndex]}
			<div class="flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold tracking-wide text-muted-foreground uppercase">
				<span>
					Question <span class="text-[#1CB0F6] tabular-nums">{currentFlatIndex + 1}</span> of {flatFilteredItems.length}
					{#if activeParts.length > 1}
						<span class="ml-1.5 text-muted-foreground/80">· Part {curFlat.part.roman}. {curFlat.part.title}</span>
					{/if}
				</span>
				<span class="rounded-full bg-[#D7FFB8] px-2.5 py-0.5 text-[0.7rem] font-extrabold text-[#46A302] tabular-nums dark:bg-[#58CC02]/20 dark:text-[#7BE328]">
					{answeredCount} / {session.items.length} · {progressPct}%
				</span>
			</div>
		{/if}
		{#each displayParts as part (part.kind)}
			<section id="exam-part-{part.kind}" class="flex scroll-mt-36 flex-col gap-4">
				{#if !singleQuestion}
					<div class="flex flex-col gap-0.5 border-b-2 border-slate-200 pb-2 dark:border-[#2B434E]">
						<h2 class="font-heading text-xl font-extrabold text-foreground">
							Part {part.roman}. {part.title}
						</h2>
						<p class="text-xs font-semibold text-muted-foreground">{KIND_META[part.kind].intro}</p>
					</div>
				{/if}

				{#each part.indexedItems as { entry, idx } (entryKey(entry))}
					{@const k = entryKey(entry)}
					{@const isFlagged = Boolean(session.flagged?.[k])}
					<article
						id={itemDomId(k)}
						onfocusin={() => (activeItemKey = k)}
						onpointerdown={() => (activeItemKey = k)}
						class={cn(
							'flex scroll-mt-36 flex-col gap-3 rounded-2xl border-2 border-b-4 bg-card p-5 transition-colors',
							activeItemKey === k
								? 'border-[#1CB0F6]/70 dark:border-[#1CB0F6]/60'
								: 'border-slate-200 dark:border-[#2B434E]'
						)}
					>
						{#if entry.kind === 'mcq'}
							{@const q = bank.mcqById[entry.id]}
							{#if q}
								{@const order = entry.order ?? q.options.map((_, i) => i)}
								{@const correctIdx = resolveCorrectIndex(q)}
								{@const rawPick = session.answers[k]}
								{@const picked = rawPick !== undefined && rawPick !== '' ? Number(rawPick) : null}
								{@const reveal = showAnswers && picked !== null}
								{@const bookmarked = userStorage.isBookmarked(q.id)}
								{@const tagInfo = q.tag ? TAGS[q.tag] : null}
								<div class="flex flex-wrap items-center justify-between gap-2">
									<div class="flex flex-wrap items-center gap-1.5">
										<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.68rem] font-extrabold text-muted-foreground dark:bg-[#223842]">
											{q.topicName}
										</span>
										{#if tagInfo}
											<span class={cn('rounded-full border px-2 py-0.5 text-[0.65rem] font-extrabold tracking-wide uppercase', tagInfo.cls)}>
												{tagInfo.label}
											</span>
										{/if}
									</div>
									<div class="flex items-center gap-1.5">
										<button
											type="button"
											onclick={() => toggleFlag(k)}
											aria-pressed={isFlagged}
											title={isFlagged ? 'Remove review flag' : 'Flag for review (F)'}
											class={cn(
												'inline-flex h-7 items-center gap-1 rounded-lg border px-2 text-[0.7rem] font-extrabold transition-colors',
												isFlagged
													? 'border-[#FF9600] bg-[#FFF4E5] text-[#C96B00] dark:border-[#FF9600]/60 dark:bg-[#FF9600]/20 dark:text-[#FFAD33]'
													: 'border-slate-200 bg-white text-muted-foreground hover:border-[#FF9600]/60 hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
											)}
										>
											<Flag class="size-3" /> {isFlagged ? 'Flagged' : 'Flag'}
										</button>
										<button
											type="button"
											onclick={() => userStorage.toggleBookmark(q.id)}
											aria-pressed={bookmarked}
											title={bookmarked ? 'Remove bookmark' : 'Bookmark question (B)'}
											aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark question'}
											class={cn(
												'grid size-7 place-items-center rounded-lg border transition-colors',
												bookmarked
													? 'border-[#E5B400] bg-[#FFF5CC] text-[#946200] dark:border-[#FFC800]/60 dark:bg-[#FFC800]/20 dark:text-[#FFD633]'
													: 'border-slate-200 bg-white text-muted-foreground hover:border-[#E5B400] hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
											)}
										>
											{#if bookmarked}
												<BookmarkCheck class="size-3.5" />
											{:else}
												<Bookmark class="size-3.5" />
											{/if}
										</button>
									</div>
								</div>
								<p class="text-[0.95rem] leading-relaxed font-bold text-foreground">
									<span class="mr-1.5 font-extrabold text-[#1CB0F6] tabular-nums">{idx + 1}.</span>
									{q.question}
								</p>
								{#if !reveal && q.hint}
									<div class="flex flex-col items-start gap-1.5">
										<button
											type="button"
											onclick={() => toggleHint(k)}
											class="inline-flex items-center gap-1.5 rounded-lg border border-[#E5B400]/50 bg-[#FFF5CC]/60 px-2.5 py-1 text-xs font-extrabold text-[#946200] hover:bg-[#FFF5CC] dark:bg-[#FFC800]/15 dark:text-[#FFD633]"
										>
											<Lightbulb class="size-3.5" /> {openHints[k] ? 'Hide hint' : 'Show hint'}
										</button>
										{#if openHints[k]}
											<p class="rounded-xl border border-[#E5B400]/50 bg-[#FFF5CC]/50 px-3 py-2 text-xs font-semibold text-foreground dark:bg-[#FFC800]/10">
												{q.hint}
											</p>
										{/if}
									</div>
								{/if}
								<div class="flex flex-col gap-2">
									{#each order as origIdx, displayIdx (origIdx)}
										{@const isPicked = picked === origIdx}
										{@const isCorrect = origIdx === correctIdx}
										<button
											type="button"
											disabled={reveal}
											onclick={() => pickMcqOption(entry, origIdx)}
											class={cn(
												'flex items-start gap-3 rounded-xl border-2 px-3.5 py-2.5 text-left text-sm font-semibold transition-all',
												reveal
													? isCorrect
														? 'border-[#58CC02] bg-[#D7FFB8]/60 text-foreground dark:bg-[#58CC02]/20'
														: isPicked
															? 'border-[#FF4B4B] bg-[#FFDFE0]/70 text-foreground dark:bg-[#FF4B4B]/20'
															: 'border-slate-200/70 bg-card text-muted-foreground opacity-70 dark:border-[#2B434E]'
													: isPicked
														? 'border-[#1CB0F6] bg-[#DDF4FF]/70 text-foreground dark:bg-[#1CB0F6]/20'
														: 'border-slate-200 bg-white text-foreground hover:border-[#1CB0F6]/60 dark:border-[#2B434E] dark:bg-[#131F24]'
											)}
										>
											<span
												class={cn(
													'grid size-6 shrink-0 place-items-center rounded-lg text-xs font-extrabold',
													reveal && isCorrect
														? 'bg-[#58CC02] text-white'
														: reveal && isPicked
															? 'bg-[#FF4B4B] text-white'
															: isPicked
																? 'bg-[#1CB0F6] text-white'
																: 'bg-slate-100 text-muted-foreground dark:bg-[#223842]'
												)}
											>
												{LETTERS[displayIdx]}
											</span>
											<span class="min-w-0 flex-1 leading-snug">
												<span class="block">{q.options[origIdx]}</span>
												{#if reveal && q.optionExplanations?.[origIdx]}
													<span class={cn('mt-1 block text-xs leading-relaxed font-semibold', isCorrect ? 'text-[#46A302] dark:text-[#7BE328]' : isPicked ? 'text-[#EA2B2B] dark:text-[#FF7878]' : 'text-muted-foreground')}>
														{q.optionExplanations[origIdx]}
													</span>
												{/if}
											</span>
										</button>
									{/each}
								</div>
								{#if reveal}
									<div
										class={cn(
											'mt-1 rounded-xl border-2 p-3.5 text-xs leading-relaxed font-semibold',
											picked === correctIdx
												? 'border-[#58CC02]/50 bg-[#D7FFB8]/40 text-foreground dark:bg-[#58CC02]/15'
												: 'border-[#FF4B4B]/50 bg-[#FFDFE0]/40 text-foreground dark:bg-[#FF4B4B]/15'
										)}
									>
										<div class="flex flex-wrap items-center justify-between gap-2">
											<p class="font-extrabold">
												{picked === correctIdx ? '✓ Correct!' : '✗ Incorrect.'}
												{#if q.legalBasis}<span class="ml-1 font-bold text-muted-foreground">({q.legalBasis})</span>{/if}
											</p>
											<button
												type="button"
												onclick={() => retrySingleMcq(entry)}
												class="inline-flex h-7 items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 text-[0.7rem] font-extrabold text-foreground hover:border-[#1CB0F6] hover:text-[#1899D6] dark:border-[#2B434E] dark:bg-[#131F24]"
											>
												<RotateCcw class="size-3" /> Try again
											</button>
										</div>
										<p class="mt-1">{q.explanation}</p>
									</div>
								{/if}
							{/if}
						{:else if entry.kind === 'essay'}
							{@const e = bank.essayById[entry.id]}
							{#if e}
								<div class="flex flex-wrap items-center justify-between gap-2">
									<h3 class="text-sm font-extrabold text-foreground">
										<span class="mr-1 text-[#CE82FF] tabular-nums">{idx + 1}.</span>
										{e.title}
									</h3>
									<div class="flex items-center gap-1.5">
										<span class="rounded-full bg-[#F3E8FF] px-2.5 py-0.5 text-[0.68rem] font-extrabold text-[#8930C9] dark:bg-[#CE82FF]/20 dark:text-[#DDA6FF]">
											{e.source ?? e.topic}
										</span>
										<button
											type="button"
											onclick={() => toggleFlag(k)}
											aria-pressed={isFlagged}
											title={isFlagged ? 'Remove review flag' : 'Flag for review (F)'}
											class={cn(
												'inline-flex h-7 items-center gap-1 rounded-lg border px-2 text-[0.7rem] font-extrabold transition-colors',
												isFlagged
													? 'border-[#FF9600] bg-[#FFF4E5] text-[#C96B00] dark:border-[#FF9600]/60 dark:bg-[#FF9600]/20 dark:text-[#FFAD33]'
													: 'border-slate-200 bg-white text-muted-foreground hover:border-[#FF9600]/60 hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
											)}
										>
											<Flag class="size-3" /> {isFlagged ? 'Flagged' : 'Flag'}
										</button>
									</div>
								</div>
								<p class="legal rounded-xl bg-slate-50 p-3.5 text-[0.94rem] leading-relaxed whitespace-pre-line text-foreground dark:bg-[#131F24]">
									{@html e.factPattern}
								</p>
								{#if e.question}
									<p class="text-sm font-extrabold text-foreground">{e.question}</p>
								{/if}
								{#if e.format === 'alac' && !essayFreeform}
									<div class="flex flex-col gap-2.5">
										{#each ALAC_FIELDS as f (f.key)}
											<label class="grid grid-cols-[2rem_1fr] items-start gap-2.5">
												<span
													title={f.label}
													class="mt-1 grid size-8 place-items-center rounded-xl bg-[#CE82FF]/20 text-xs font-extrabold text-[#8930C9] dark:text-[#DDA6FF]"
												>
													{f.letter}
												</span>
												<textarea
													rows={f.rows}
													bind:value={session.answers[`${k}:${f.key}`]}
													placeholder={f.placeholder}
													aria-label="{f.label} for essay {idx + 1}"
													class="w-full rounded-xl border-2 border-slate-200 bg-white p-2.5 text-sm font-medium text-foreground outline-none focus:border-[#CE82FF] dark:border-[#2B434E] dark:bg-[#131F24]"
												></textarea>
											</label>
										{/each}
									</div>
								{:else}
									<textarea
										rows="10"
										bind:value={session.answers[k]}
										placeholder="Write your essay answer here…"
										aria-label="Answer for essay {idx + 1}"
										class="min-h-48 w-full rounded-xl border-2 border-slate-200 bg-white p-3.5 text-sm leading-relaxed font-medium text-foreground outline-none focus:border-[#CE82FF] dark:border-[#2B434E] dark:bg-[#131F24]"
									></textarea>
								{/if}
							{/if}
						{:else if entry.kind === 'enum'}
							{@const en = bank.enumById[entry.id]}
							{#if en}
								<div class="flex items-start justify-between gap-2">
									<p class="text-[0.95rem] font-extrabold text-foreground">
										<span class="mr-1.5 text-[#58CC02] tabular-nums">{idx + 1}.</span>
										{en.title}
									</p>
									<div class="flex shrink-0 items-center gap-1.5">
										<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.68rem] font-extrabold text-muted-foreground dark:bg-[#223842]">
											{en.items.length} items · {en.src}
										</span>
										<button
											type="button"
											onclick={() => toggleFlag(k)}
											aria-pressed={isFlagged}
											title={isFlagged ? 'Remove review flag' : 'Flag for review (F)'}
											class={cn(
												'inline-flex h-7 items-center gap-1 rounded-lg border px-2 text-[0.7rem] font-extrabold transition-colors',
												isFlagged
													? 'border-[#FF9600] bg-[#FFF4E5] text-[#C96B00] dark:border-[#FF9600]/60 dark:bg-[#FF9600]/20 dark:text-[#FFAD33]'
													: 'border-slate-200 bg-white text-muted-foreground hover:border-[#FF9600]/60 hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
											)}
										>
											<Flag class="size-3" /> {isFlagged ? 'Flagged' : 'Flag'}
										</button>
									</div>
								</div>
								<textarea
									rows="5"
									bind:value={session.answers[k]}
									placeholder="There are {en.items.length}. They are: (1) … (2) …"
									aria-label="Enumeration answer {idx + 1}"
									class="w-full rounded-xl border-2 border-slate-200 bg-white p-3 text-sm font-medium text-foreground outline-none focus:border-[#58CC02] dark:border-[#2B434E] dark:bg-[#131F24]"
								></textarea>
							{/if}
						{:else if entry.kind === 'term'}
							{@const tm = bank.termById[entry.id]}
							{#if tm}
								<div class="flex items-start justify-between gap-2">
									<p class="text-[0.95rem] font-extrabold text-foreground">
										<span class="mr-1.5 text-[#1CB0F6] tabular-nums">{idx + 1}.</span>
										Define: {tm.term}
									</p>
									<div class="flex shrink-0 items-center gap-1.5">
										<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.68rem] font-extrabold text-muted-foreground dark:bg-[#223842]">
											{tm.src}
										</span>
										<button
											type="button"
											onclick={() => toggleFlag(k)}
											aria-pressed={isFlagged}
											title={isFlagged ? 'Remove review flag' : 'Flag for review (F)'}
											class={cn(
												'inline-flex h-7 items-center gap-1 rounded-lg border px-2 text-[0.7rem] font-extrabold transition-colors',
												isFlagged
													? 'border-[#FF9600] bg-[#FFF4E5] text-[#C96B00] dark:border-[#FF9600]/60 dark:bg-[#FF9600]/20 dark:text-[#FFAD33]'
													: 'border-slate-200 bg-white text-muted-foreground hover:border-[#FF9600]/60 hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
											)}
										>
											<Flag class="size-3" /> {isFlagged ? 'Flagged' : 'Flag'}
										</button>
									</div>
								</div>
								<textarea
									rows="3"
									bind:value={session.answers[k]}
									placeholder="{tm.term} is …"
									aria-label="Define {tm.term}"
									class="w-full rounded-xl border-2 border-slate-200 bg-white p-3 text-sm font-medium text-foreground outline-none focus:border-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#131F24]"
								></textarea>
							{/if}
						{:else if entry.kind === 'req'}
							{@const rq = bank.reqById[entry.id]}
							{#if rq}
								<div class="flex items-start justify-between gap-2">
									<p class="text-[0.95rem] font-extrabold text-foreground">
										<span class="mr-1.5 text-[#FF9600] tabular-nums">{idx + 1}.</span>
										{rq.question}
									</p>
									<div class="flex shrink-0 items-center gap-1.5">
										<span class="rounded-full bg-[#FFF5CC] px-2.5 py-0.5 text-[0.68rem] font-extrabold text-[#946200] dark:bg-[#FFC800]/20 dark:text-[#FFD633]">
											{rq.answers.length > 1 ? `${rq.answers.length} requisites` : 'Short rule'} · {rq.topicTitle}
										</span>
										<button
											type="button"
											onclick={() => toggleFlag(k)}
											aria-pressed={isFlagged}
											title={isFlagged ? 'Remove review flag' : 'Flag for review (F)'}
											class={cn(
												'inline-flex h-7 items-center gap-1 rounded-lg border px-2 text-[0.7rem] font-extrabold transition-colors',
												isFlagged
													? 'border-[#FF9600] bg-[#FFF4E5] text-[#C96B00] dark:border-[#FF9600]/60 dark:bg-[#FF9600]/20 dark:text-[#FFAD33]'
													: 'border-slate-200 bg-white text-muted-foreground hover:border-[#FF9600]/60 hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
											)}
										>
											<Flag class="size-3" /> {isFlagged ? 'Flagged' : 'Flag'}
										</button>
									</div>
								</div>
								<textarea
									rows={rq.answers.length > 1 ? 4 : 2}
									bind:value={session.answers[k]}
									placeholder={rq.answers.length > 1 ? `1. …\n2. …` : 'Type the concise answer / forum / rule…'}
									aria-label="Requisite answer {idx + 1}"
									class="w-full rounded-xl border-2 border-slate-200 bg-white p-3 text-sm font-medium text-foreground outline-none focus:border-[#FF9600] dark:border-[#2B434E] dark:bg-[#131F24]"
								></textarea>
							{/if}
						{:else if entry.kind === 'num'}
							{@const nm = bank.numById[entry.id]}
							{#if nm}
								<div class="flex items-start justify-between gap-2">
									<p class="text-[0.95rem] font-extrabold text-foreground">
										<span class="mr-1.5 text-[#1CB0F6] tabular-nums">{idx + 1}.</span>
										{nm.prompt}
									</p>
									<div class="flex shrink-0 items-center gap-1.5">
										<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.68rem] font-extrabold text-muted-foreground dark:bg-[#223842]">
											{nm.source}
										</span>
										<button
											type="button"
											onclick={() => toggleFlag(k)}
											aria-pressed={isFlagged}
											title={isFlagged ? 'Remove review flag' : 'Flag for review (F)'}
											class={cn(
												'inline-flex h-7 items-center gap-1 rounded-lg border px-2 text-[0.7rem] font-extrabold transition-colors',
												isFlagged
													? 'border-[#FF9600] bg-[#FFF4E5] text-[#C96B00] dark:border-[#FF9600]/60 dark:bg-[#FF9600]/20 dark:text-[#FFAD33]'
													: 'border-slate-200 bg-white text-muted-foreground hover:border-[#FF9600]/60 hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
											)}
										>
											<Flag class="size-3" /> {isFlagged ? 'Flagged' : 'Flag'}
										</button>
									</div>
								</div>
								<input
									type="text"
									bind:value={session.answers[k]}
									placeholder="Enter the exact period, number, or amount…"
									aria-label="Number answer {idx + 1}"
									class="h-11 w-full rounded-xl border-2 border-slate-200 bg-white px-3.5 text-sm font-bold text-foreground outline-none focus:border-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#131F24]"
								/>
							{/if}
						{/if}
					</article>
				{/each}
			</section>
		{/each}

		{#if singleQuestion && flatFilteredItems.length > 0}
			<div class="flex items-center justify-between gap-3">
				<button
					type="button"
					disabled={currentFlatIndex <= 0}
					onclick={() => stepSingleQuestion(-1)}
					class="inline-flex h-11 items-center gap-1.5 rounded-2xl border-2 border-slate-200 border-b-4 bg-white px-4 text-xs font-extrabold tracking-wide text-foreground uppercase transition-all hover:border-[#1CB0F6] hover:text-[#1899D6] active:translate-y-0.5 active:border-b-2 disabled:pointer-events-none disabled:opacity-40 dark:border-[#2B434E] dark:bg-[#131F24]"
				>
					<ChevronLeft class="size-4" strokeWidth={2.5} /> Previous
				</button>
				<span class="text-xs font-extrabold text-muted-foreground tabular-nums">
					{currentFlatIndex + 1} / {flatFilteredItems.length}
				</span>
				{#if currentFlatIndex + 1 < flatFilteredItems.length}
					<button
						type="button"
						onclick={() => stepSingleQuestion(1)}
						class="inline-flex h-11 items-center gap-1.5 rounded-2xl border-2 border-[#1899D6] border-b-4 bg-[#1CB0F6] px-5 text-xs font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#18A1E3] active:translate-y-0.5 active:border-b-2"
					>
						Next <ChevronRight class="size-4" strokeWidth={2.5} />
					</button>
				{:else}
					<button
						type="button"
						onclick={requestSubmit}
						class="inline-flex h-11 items-center gap-1.5 rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-5 text-xs font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#4EB802] active:translate-y-0.5 active:border-b-2"
					>
						<Send class="size-3.5" strokeWidth={2.5} /> Finish &amp; Submit
					</button>
				{/if}
			</div>
		{/if}

		<!-- Bottom Submit / Quit bar -->
		{#if confirmSubmit}
			<div role="alert" class="flex flex-wrap items-center gap-3 rounded-2xl border-2 border-[#E5B400] bg-[#FFF5CC]/80 p-4 dark:bg-[#FFC800]/15">
				<span class="flex-1 text-sm font-bold text-foreground">
					{session.items.length - answeredCount} {session.items.length - answeredCount === 1 ? 'item is' : 'items are'} unanswered and will score 0.
				</span>
				<button
					type="button"
					onclick={submitExam}
					class="rounded-xl border-2 border-[#46A302] border-b-3 bg-[#58CC02] px-4 py-2 text-xs font-extrabold tracking-wide text-white uppercase"
				>
					Submit Anyway
				</button>
				<button
					type="button"
					onclick={() => (confirmSubmit = false)}
					class="rounded-xl border-2 border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-foreground dark:border-[#2B434E] dark:bg-[#131F24]"
				>
					Keep Answering
				</button>
			</div>
		{/if}

		<div class="flex flex-wrap items-center justify-between gap-3 border-t-2 border-slate-200 pt-4 dark:border-[#2B434E]">
			<button
				type="button"
				onclick={requestSubmit}
				class="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-6 text-sm font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#4EB802] active:translate-y-0.5 active:border-b-2"
			>
				<Send class="size-4" strokeWidth={2.5} /> Submit &amp; Check Answers
			</button>

			{#if confirmQuit}
				<div class="flex items-center gap-2">
					<span class="text-xs font-bold text-muted-foreground">Discard this exam?</span>
					<button
						type="button"
						onclick={resetExam}
						class="rounded-xl bg-[#FF4B4B] px-3 py-1.5 text-xs font-extrabold text-white"
					>
						Discard
					</button>
					<button
						type="button"
						onclick={() => (confirmQuit = false)}
						class="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-extrabold text-foreground dark:border-[#2B434E]"
					>
						Cancel
					</button>
				</div>
			{:else}
				<button
					type="button"
					onclick={() => (confirmQuit = true)}
					class="rounded-xl px-3 py-2 text-xs font-extrabold text-muted-foreground hover:bg-muted hover:text-foreground"
				>
					Quit Exam
				</button>
			{/if}
		</div>
		</div>

		<!-- Jump to question sidebar -->
		<aside
			aria-label="Jump to question"
			class="rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-4 sm:p-5 xl:sticky xl:top-[calc(var(--header-h)+6.25rem)] dark:border-[#2B434E]"
		>
			<div class="mb-3 flex flex-wrap items-center justify-between gap-2">
				<h3 class="text-sm font-extrabold tracking-wide uppercase">Jump to question</h3>
				<ul class="flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-bold text-muted-foreground">
					{#if showAnswers}
						<li class="flex items-center gap-1.5"><span class="size-3 rounded-md border border-[#46A302] bg-[#58CC02]"></span> Correct</li>
						<li class="flex items-center gap-1.5"><span class="size-3 rounded-md border border-[#EA2B2B] bg-[#FF4B4B]"></span> Incorrect</li>
					{:else}
						<li class="flex items-center gap-1.5"><span class="size-3 rounded-md border border-[#1899D6] bg-[#DDF4FF]"></span> Answered</li>
					{/if}
					<li class="flex items-center gap-1.5"><span class="size-3 rounded-md border border-dashed border-slate-300 dark:border-[#2B434E]"></span> Unanswered</li>
					<li class="flex items-center gap-1.5"><span class="size-2.5 rounded-full bg-[#FF9600]"></span> Flagged</li>
					{#if session.items.some((it) => it.kind === 'mcq')}
						<li class="flex items-center gap-1.5"><span class="size-2.5 rounded-full bg-[#FFC800]"></span> Bookmarked</li>
					{/if}
				</ul>
			</div>

			{#if answeredCount < session.items.length}
				<button
					type="button"
					onclick={jumpToNextUnanswered}
					class="mb-3 inline-flex h-8 w-full items-center justify-center gap-1.5 rounded-xl border-2 border-slate-200 bg-slate-50 px-3 text-xs font-extrabold text-foreground transition-colors hover:border-[#1CB0F6] hover:bg-[#DDF4FF]/40 hover:text-[#1899D6] dark:border-[#2B434E] dark:bg-[#131F24] dark:hover:text-[#66D1FF]"
				>
					<SkipForward class="size-3.5" /> Next unanswered ({session.items.length - answeredCount} left)
				</button>
			{/if}

			<div class="flex max-h-[calc(100vh-20rem)] flex-col gap-3.5 overflow-y-auto pr-1">
				{#each activeParts as part (part.kind)}
					<div class="flex flex-col gap-2">
						{#if activeParts.length > 1}
							<span class="text-[0.68rem] font-extrabold tracking-wide text-muted-foreground uppercase">
								Part {part.roman} · {KIND_META[part.kind].short}
							</span>
						{/if}
						<div class="grid grid-cols-[repeat(auto-fill,minmax(2.5rem,1fr))] gap-2 xl:grid-cols-5">
							{#each part.items as entry, idx (entryKey(entry))}
								{@const k = entryKey(entry)}
								{@const st = mapItemState(entry)}
								{@const isCurrent = activeItemKey === k}
								{@const isFlagged = Boolean(session.flagged?.[k])}
								{@const isBookmarked = entry.kind === 'mcq' && userStorage.isBookmarked(entry.id)}
								<button
									type="button"
									onclick={() => {
										if (activeFilter !== 'all' && !matchesActiveFilter(entry)) activeFilter = 'all';
										activeItemKey = k;
										requestAnimationFrame(() => jumpToItem(k));
									}}
									aria-label="{KIND_META[part.kind].short} {idx + 1}{st === 'correct' ? ', correct' : st === 'incorrect' ? ', incorrect' : st === 'answered' ? ', answered' : ', unanswered'}{isFlagged ? ', flagged' : ''}{isBookmarked ? ', bookmarked' : ''}"
									aria-current={isCurrent ? 'true' : undefined}
									class={cn(
										'relative h-10 rounded-xl border-2 border-b-4 text-xs font-extrabold tabular-nums transition-all duration-150 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#1CB0F6] focus-visible:outline-none active:translate-y-0.5 active:border-b-2',
										isCurrent
											? 'z-10 scale-105 border-[#1899D6] bg-[#1CB0F6] text-white shadow-sm'
											: st === 'correct'
												? 'border-[#46A302] bg-[#58CC02] text-white'
												: st === 'incorrect'
													? 'border-[#EA2B2B] bg-[#FF4B4B] text-white'
													: st === 'answered'
														? 'border-[#1CB0F6] bg-[#DDF4FF] text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]'
														: 'border-dashed border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-[#2B434E] dark:bg-[#131F24] dark:text-slate-300 dark:hover:bg-[#223842]'
									)}
								>
									{idx + 1}
									{#if isFlagged}
										<span class="absolute top-0.5 left-0.5 size-2 rounded-full bg-[#FF9600] ring-1 ring-white dark:ring-[#131F24]"></span>
									{/if}
									{#if isBookmarked}
										<span class="absolute top-0.5 right-0.5 size-2 rounded-full bg-[#FFC800] ring-1 ring-white dark:ring-[#131F24]"></span>
									{/if}
								</button>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</aside>
		</div>
	</div>
{:else if totals}
	<!-- ==================== GRADING & RESULTS SCREEN ==================== -->
	{@const pct = totals.total ? Math.round((totals.score / totals.total) * 100) : 0}
	{@const elapsed = elapsedSecs}

	<div class="flex flex-col gap-6">
		{#if session.graded}
			<section class="flex flex-col gap-4 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-6 dark:border-[#2B434E]">
				<span class="text-xs font-extrabold tracking-wide text-muted-foreground uppercase">{session.label}</span>
				<div class="flex flex-wrap items-baseline gap-3">
					<b class="font-brand text-4xl font-extrabold text-foreground tabular-nums">
						{totals.score}<span class="ml-1 text-xl font-bold text-muted-foreground">/ {totals.total}</span>
					</b>
					<span
						class={cn(
							'rounded-full px-3 py-1 text-sm font-extrabold tabular-nums',
							pct >= 75
								? 'bg-[#D7FFB8] text-[#46A302] dark:bg-[#58CC02]/20 dark:text-[#7BE328]'
								: pct >= 50
									? 'bg-[#FFF5CC] text-[#946200] dark:bg-[#FFC800]/20 dark:text-[#FFD633]'
									: 'bg-[#FFDFE0] text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]'
						)}
					>
						{pct}%
					</span>
					<span class="text-xs font-bold text-muted-foreground tabular-nums">
						· {formatClock(elapsed)} used
					</span>
					{#if totals.mcqOnlyTotal && activeParts.some((p) => p.kind !== 'mcq')}
						<span class="text-[0.7rem] font-bold text-muted-foreground">
							Total counts MCQs only — written parts are self-graded below.
						</span>
					{/if}
				</div>

				<!-- Per-part score breakdown -->
				<div class="flex flex-wrap gap-2.5">
					{#each activeParts as part (part.kind)}
						{@const b = totals.byPart[part.kind]}
						<div class="inline-flex items-center gap-2 rounded-xl border-2 border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-extrabold dark:border-[#2B434E] dark:bg-[#131F24]">
							<span class="text-muted-foreground">{part.roman}. {KIND_META[part.kind].short}</span>
							<span class="text-foreground tabular-nums">{b.got}/{b.max}</span>
						</div>
					{/each}
				</div>

				<div class="flex flex-wrap gap-2.5 pt-1">
					<button
						type="button"
						onclick={retakeFresh20}
						class="inline-flex h-10 items-center gap-2 rounded-xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-4 text-xs font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#4EB802] active:translate-y-0.5 active:border-b-2"
					>
						<Sparkles class="size-3.5" /> New 20-Question Set
					</button>
					{#if boostedWeightCount > 0 || missedMcqCount > 0}
						<button
							type="button"
							onclick={takeAllMissedFromHistory}
							title="Redeem all 'More likely' (>1×) and missed questions from this exam and past history"
							class="inline-flex h-10 items-center gap-2 rounded-xl border-2 border-[#EA2B2B] border-b-4 bg-[#FF4B4B] px-4 text-xs font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#E03E3E] active:translate-y-0.5 active:border-b-2"
						>
							<RotateCcw class="size-3.5" /> Take All Missed ({Math.max(boostedWeightCount, missedMcqCount)})
						</button>
					{/if}
					{#if missedMcqsInSession > 0 && Math.max(boostedWeightCount, missedMcqCount) > missedMcqsInSession}
						<button
							type="button"
							onclick={retryMissedMcqs}
							class="inline-flex h-10 items-center gap-2 rounded-xl border-2 border-[#1899D6] border-b-4 bg-[#1CB0F6] px-4 text-xs font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#18A1E3] active:translate-y-0.5 active:border-b-2"
						>
							<RotateCcw class="size-3.5" /> Retake {missedMcqsInSession} Missed (This Exam)
						</button>
					{/if}
					{#if (finalsMcqCount || bank.mcqs.length) > 20}
						<button
							type="button"
							onclick={takeAllFinalsExam}
							class="inline-flex h-10 items-center gap-2 rounded-xl border-2 border-[#E5B400] border-b-4 bg-[#FFF5CC] px-4 text-xs font-extrabold tracking-wide text-[#946200] uppercase transition-all hover:bg-[#FFE899] active:translate-y-0.5 active:border-b-2 dark:border-[#FFC800]/50 dark:bg-[#FFC800]/20 dark:text-[#FFD633]"
						>
							Full {bank.hasFinalsPreset ? '★ Finals' : 'Pool'} ({finalsMcqCount || bank.mcqs.length})
						</button>
					{/if}
					<button
						type="button"
						onclick={resetExam}
						class="inline-flex h-10 items-center gap-2 rounded-xl border-2 border-slate-200 border-b-4 bg-white px-4 text-xs font-extrabold tracking-wide text-foreground uppercase hover:bg-muted dark:border-[#2B434E] dark:bg-[#1A2C34]"
					>
						Customize Exam
					</button>
				</div>

				{#if boostedWeightCount > 0}
					{@const moreLikelyRows = subjectModifiedWeights.filter((r) => r.weight > 1)}
					<div class="mt-2 flex flex-col gap-2.5 rounded-2xl border-2 border-[#EA2B2B]/35 bg-[#FFDFE0]/35 p-4 dark:border-[#FF4B4B]/35 dark:bg-[#FF4B4B]/10">
						<div class="flex flex-wrap items-center justify-between gap-2">
							<div class="flex flex-col gap-0.5">
								<span class="text-xs font-extrabold tracking-wide text-[#EA2B2B] uppercase dark:text-[#FF7878]">
									↑ {moreLikelyRows.length} “More Likely” {moreLikelyRows.length === 1 ? 'Question' : 'Questions'} Ready to Redeem
								</span>
								<p class="text-xs font-semibold text-muted-foreground">
									Includes mistakes from this exam and past history. Answer them right in a redemption run to reset their weight to base 1× and drop it by 50% (0.5×).
								</p>
							</div>
							<button
								type="button"
								onclick={takeAllMissedFromHistory}
								class="inline-flex h-9 items-center gap-1.5 rounded-xl border-2 border-[#EA2B2B] border-b-3 bg-[#FF4B4B] px-3.5 text-xs font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#E03E3E] active:translate-y-0.5 active:border-b-2"
							>
								<RotateCcw class="size-3.5" /> Redeem All {moreLikelyRows.length} Now
							</button>
						</div>
						<div class="max-h-56 divide-y divide-[#EA2B2B]/15 overflow-y-auto rounded-xl border border-[#EA2B2B]/25 bg-card/90 dark:divide-[#FF4B4B]/20 dark:border-[#FF4B4B]/25">
							{#each moreLikelyRows as row (row.id)}
								<div class="flex items-center justify-between gap-3 px-3 py-2 text-xs">
									<div class="flex min-w-0 flex-1 items-center gap-2">
										<span class="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[0.62rem] font-extrabold text-slate-600 uppercase dark:bg-[#223842] dark:text-slate-300">
											{row.kindLabel}
										</span>
										<span class="truncate font-semibold text-foreground">{row.prompt}</span>
									</div>
									<span class="shrink-0 rounded-full bg-[#FFDFE0] px-2 py-0.5 text-[0.7rem] font-extrabold text-[#EA2B2B] tabular-nums dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]">
										{formatWeightMultiplier(row.weight)} ({formatWeightDelta(row.weight)})
									</span>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</section>

			<!-- MCQ Topic Breakdown (weakest first) -->
			{#if mcqTopicBreakdown.length > 1}
				<section class="flex flex-col gap-2.5 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 dark:border-[#2B434E]">
					<h2 class="label-caps text-xs">MCQ Breakdown by Topic (Weakest First)</h2>
					<div class="flex flex-col divide-y divide-slate-200 dark:divide-[#2B434E]">
						{#each mcqTopicBreakdown as row (row.name)}
							<div class="flex items-center justify-between gap-3 py-2 text-sm">
								<span class="font-bold text-foreground">{row.name}</span>
								<span
									class={cn(
										'font-extrabold tabular-nums',
										row.ok === row.total ? 'text-[#58CC02]' : 'text-[#EA2B2B]'
									)}
								>
									{row.ok}/{row.total}
								</span>
							</div>
						{/each}
					</div>
				</section>
			{/if}
		{:else}
			<section class="flex flex-col gap-2 rounded-3xl border-2 border-b-4 border-[#1CB0F6]/50 bg-[#DDF4FF]/40 p-5 dark:bg-[#1CB0F6]/10">
				<span class="text-xs font-extrabold tracking-wide text-[#1899D6] uppercase dark:text-[#66D1FF]">Self-Grading Step</span>
				<h2 class="font-heading text-xl font-extrabold text-foreground">Mark your written answers against the model</h2>
				<p class="text-sm font-semibold text-muted-foreground">
					All MCQs are already auto-graded below. Compare your written answers against the model, mark each one strictly, then click <strong class="text-foreground">Finish &amp; Save Score</strong> at the bottom.
				</p>
			</section>
		{/if}

		<!-- Detailed Review & Self-Grading Per Section -->
		{#each activeParts as part (part.kind)}
			<section class="flex flex-col gap-3.5">
				<div class="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-200 pb-2 dark:border-[#2B434E]">
					<h2 class="font-heading text-xl font-extrabold text-foreground">
						Part {part.roman}. {part.title}
					</h2>
					{#if part.kind === 'mcq'}
						<div role="group" aria-label="Filter MCQ review" class="inline-flex rounded-xl border-2 border-slate-200 bg-slate-100 p-0.5 text-xs font-extrabold dark:border-[#2B434E] dark:bg-[#131F24]">
							<button
								type="button"
								onclick={() => (mcqReviewFilter = 'all')}
								class={cn('rounded-lg px-2.5 py-1', mcqReviewFilter === 'all' ? 'bg-[#1CB0F6] text-white' : 'text-muted-foreground')}
							>
								All ({part.items.length})
							</button>
							<button
								type="button"
								onclick={() => (mcqReviewFilter = 'missed')}
								class={cn('rounded-lg px-2.5 py-1', mcqReviewFilter === 'missed' ? 'bg-[#FF4B4B] text-white' : 'text-muted-foreground')}
							>
								Missed ({missedMcqsInSession})
							</button>
						</div>
					{/if}
				</div>

				{#each part.items as entry, idx (entryKey(entry))}
					{@const k = entryKey(entry)}
					{@const pts = pointsForEntry(session, entry, bank)}
					{@const max = maxPointsForEntry(entry, bank)}

					{#if entry.kind === 'mcq'}
						{@const q = bank.mcqById[entry.id]}
						{#if q && (mcqReviewFilter === 'all' || pts !== 1)}
							{@const order = entry.order ?? q.options.map((_, i) => i)}
							{@const correctIdx = resolveCorrectIndex(q)}
							{@const rawPick = session.answers[k]}
							{@const picked = rawPick !== undefined && rawPick !== '' ? Number(rawPick) : null}
							{@const ok = picked === correctIdx}
							<article class="flex flex-col gap-3 rounded-2xl border-2 border-b-4 border-slate-200 bg-card p-5 dark:border-[#2B434E]">
								<div class="flex items-start justify-between gap-3">
									<div class="flex items-start gap-2">
										{#if ok}
											<CheckCircle2 class="mt-0.5 size-5 shrink-0 text-[#58CC02]" />
										{:else}
											<XCircle class="mt-0.5 size-5 shrink-0 text-[#FF4B4B]" />
										{/if}
										<p class="text-sm leading-relaxed font-extrabold text-foreground">
											<span class="mr-1 text-muted-foreground tabular-nums">{idx + 1}.</span>
											{q.question}
										</p>
									</div>
									<span class={cn('shrink-0 rounded-full px-2.5 py-0.5 text-xs font-extrabold tabular-nums', ok ? 'bg-[#D7FFB8] text-[#46A302]' : 'bg-[#FFDFE0] text-[#EA2B2B]')}>
										{ok ? '1/1' : '0/1'}
									</span>
								</div>

								<div class="flex flex-col gap-1.5">
									{#each order as origIdx, displayIdx (origIdx)}
										{@const isPicked = picked === origIdx}
										{@const isRight = origIdx === correctIdx}
										<div
											class={cn(
												'flex items-start gap-2.5 rounded-xl border-2 px-3 py-2 text-xs font-semibold',
												isRight
													? 'border-[#58CC02] bg-[#D7FFB8]/50 text-foreground dark:bg-[#58CC02]/20'
													: isPicked
														? 'border-[#FF4B4B] bg-[#FFDFE0]/60 text-foreground dark:bg-[#FF4B4B]/20'
														: 'border-transparent bg-slate-50 text-muted-foreground dark:bg-[#131F24]'
											)}
										>
											<span class="font-extrabold">{LETTERS[displayIdx]}.</span>
											<div class="flex-1">
												<span>{q.options[origIdx]}</span>
												{#if q.optionExplanations?.[origIdx]}
													<p class="mt-0.5 text-[0.72rem] opacity-80">{q.optionExplanations[origIdx]}</p>
												{/if}
											</div>
										</div>
									{/each}
								</div>

								<div class="rounded-xl bg-slate-50 p-3 text-xs leading-relaxed font-semibold text-foreground dark:bg-[#131F24]">
									<span class="font-extrabold text-[#1899D6] dark:text-[#66D1FF]">Explanation:</span>
									{q.explanation}
									{#if q.legalBasis}
										<span class="ml-1 font-bold text-muted-foreground">({q.legalBasis})</span>
									{/if}
								</div>
							</article>
						{/if}
					{:else}
						<!-- Written Item Side-by-Side Grading Card -->
						<article class="flex flex-col gap-4 rounded-2xl border-2 border-b-4 border-slate-200 bg-card p-5 dark:border-[#2B434E]">
							<div class="flex items-start justify-between gap-3">
								<p class="text-sm font-extrabold text-foreground">
									<span class="mr-1.5 text-[#1CB0F6] tabular-nums">{idx + 1}.</span>
									{#if entry.kind === 'essay'}
										{bank.essayById[entry.id]?.title}
									{:else if entry.kind === 'enum'}
										{bank.enumById[entry.id]?.title}
									{:else if entry.kind === 'term'}
										Define: {bank.termById[entry.id]?.term}
									{:else if entry.kind === 'req'}
										{bank.reqById[entry.id]?.question}
									{:else if entry.kind === 'num'}
										{bank.numById[entry.id]?.prompt}
									{/if}
								</p>
								<span
									class={cn(
										'shrink-0 rounded-full px-2.5 py-0.5 text-xs font-extrabold tabular-nums',
										pts === null
											? 'bg-slate-100 text-muted-foreground dark:bg-[#223842]'
											: pts === max
												? 'bg-[#D7FFB8] text-[#46A302]'
												: pts > 0
													? 'bg-[#FFF5CC] text-[#946200]'
													: 'bg-[#FFDFE0] text-[#EA2B2B]'
									)}
								>
									{pts === null ? '–' : pts}/{max}
								</span>
							</div>

							<div class="grid gap-3 md:grid-cols-2">
								<!-- User Answer Pane -->
								<div class="flex flex-col gap-2 rounded-xl bg-slate-50 p-3.5 text-sm dark:bg-[#131F24]">
									<span class="text-[0.68rem] font-extrabold tracking-wide text-muted-foreground uppercase">Your Answer</span>
									{#if entry.kind === 'essay' && bank.essayById[entry.id]?.format === 'alac'}
										{@const freeformText = session.answers[k]?.trim() ?? ''}
										{@const hasAlacText = ALAC_FIELDS.some((f) => Boolean(session?.answers[`${k}:${f.key}`]?.trim()))}
										{#if (essayFreeform && freeformText) || (!hasAlacText && freeformText)}
											<p class="leading-relaxed whitespace-pre-wrap">{freeformText}</p>
										{:else if hasAlacText}
											{#each ALAC_FIELDS as f (f.key)}
												<p class="leading-relaxed">
													<strong class="text-[#8930C9] dark:text-[#DDA6FF]">{f.letter}.</strong>
													{session.answers[`${k}:${f.key}`]?.trim() || '(blank)'}
												</p>
											{/each}
										{:else}
											<p class="leading-relaxed text-muted-foreground">(blank)</p>
										{/if}
									{:else}
										<p class="leading-relaxed whitespace-pre-wrap">{session.answers[k]?.trim() || '(blank)'}</p>
									{/if}
								</div>

								<!-- Model Answer Pane -->
								<div class="flex flex-col gap-2 rounded-xl border border-[#58CC02]/30 bg-[#D7FFB8]/25 p-3.5 text-sm dark:bg-[#58CC02]/10">
									<span class="text-[0.68rem] font-extrabold tracking-wide text-[#46A302] uppercase dark:text-[#7BE328]">Model Answer</span>

									{#if entry.kind === 'essay'}
										{@const e = bank.essayById[entry.id]}
										{#if e?.modelAnswer}
											<p><strong>A.</strong> {e.modelAnswer.answer}</p>
											<p><strong>L.</strong> {e.modelAnswer.legalBasis}</p>
											<p><strong>A.</strong> {e.modelAnswer.application}</p>
											<p><strong>C.</strong> {e.modelAnswer.conclusion}</p>
										{:else if e?.modelParagraphs}
											{#each e.modelParagraphs as para, pi (pi)}
												<p class="leading-relaxed">{@html md(para)}</p>
											{/each}
										{/if}
										{#if e?.references}
											<p class="rounded-lg bg-slate-100/90 p-2.5 text-xs leading-relaxed font-semibold text-muted-foreground dark:bg-[#131F24]">
												<strong class="text-foreground">Sources &amp; Attribution:</strong> {@html e.references}
											</p>
										{/if}
										{#if e?.keyPoint}
											<p class="rounded-lg bg-[#FFF5CC]/60 p-2 text-xs font-bold text-[#946200] dark:bg-[#FFC800]/15 dark:text-[#FFD633]">
												Key point: {e.keyPoint}
											</p>
										{/if}
									{:else if entry.kind === 'enum'}
										{@const en = bank.enumById[entry.id]}
										{#if en}
											<ol class="flex flex-col gap-1.5">
												{#each en.items as [itemText, why], si (si)}
													<li>
														<label class="flex cursor-pointer items-start gap-2">
															<input
																type="checkbox"
																																checked={session.marks[subTickKey(entry, si)] === 1}
																onchange={(ev) => (session!.marks[subTickKey(entry, si)] = (ev.currentTarget as HTMLInputElement).checked ? 1 : 0)}
																class="mt-1 size-4 accent-[#58CC02]"
															/>
															<span><strong>{@html md(itemText)}</strong>{#if why} — {@html md(why)}{/if}</span>
														</label>
													</li>
												{/each}
											</ol>
										{/if}
									{:else if entry.kind === 'term'}
										{@const tm = bank.termById[entry.id]}
										{#if tm}
											<p class="leading-relaxed">{tm.definition}</p>
											{#if tm.dontConfuse}
												<p class="text-xs font-semibold text-muted-foreground"><strong>Don't confuse:</strong> {tm.dontConfuse}</p>
											{/if}
										{/if}
									{:else if entry.kind === 'req'}
										{@const rq = bank.reqById[entry.id]}
										{#if rq}
											<ol class="flex flex-col gap-1.5">
												{#each rq.answers as ansText, si (si)}
													<li>
														<label class="flex cursor-pointer items-start gap-2">
															<input
																type="checkbox"
																																checked={session.marks[subTickKey(entry, si)] === 1}
																onchange={(ev) => (session!.marks[subTickKey(entry, si)] = (ev.currentTarget as HTMLInputElement).checked ? 1 : 0)}
																class="mt-1 size-4 accent-[#58CC02]"
															/>
															<span class="font-bold">{rq.answers.length > 1 ? `${si + 1}. ` : ''}{ansText}</span>
														</label>
													</li>
												{/each}
											</ol>
											{#if rq.note}
												<p class="mt-1 text-xs font-semibold text-muted-foreground">
													<strong>{rq.noteLabel ?? 'Note'}:</strong> {rq.note}
												</p>
											{/if}
										{/if}
									{:else if entry.kind === 'num'}
										{@const nm = bank.numById[entry.id]}
										{#if nm}
											<p class="text-base font-extrabold text-foreground">{nm.value}</p>
											<p class="text-xs font-bold text-muted-foreground">{nm.source}</p>
											{#if nm.note}<p class="text-xs font-semibold text-muted-foreground">{nm.note}</p>{/if}
										{/if}
									{/if}
								</div>
							</div>

							<!-- Self-grading controls -->
							{#if session.finishedAt}
								{#if entry.kind === 'essay'}
									<ScoreScale
										score={session.marks[k] ?? -1}
										onpick={(v) => (session!.marks[k] = v)}
									/>
								{:else if entry.kind === 'term'}
									<div role="group" aria-label="Grade definition" class="flex flex-wrap gap-2">
										{#each [[2, 'Got it (2)'], [1, 'Partly (1)'], [0, 'Missed (0)']] as [v, lbl] (v)}
											<button
												type="button"
												aria-pressed={session.marks[k] === v}
												onclick={() => (session!.marks[k] = v as number)}
												class={cn(
													'h-9 rounded-xl border-2 px-3 text-xs font-extrabold transition-all',
													session.marks[k] === v
														? 'border-[#1899D6] bg-[#1CB0F6] text-white'
														: 'border-slate-200 bg-white text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
												)}
											>
												{lbl}
											</button>
										{/each}
									</div>
								{:else if entry.kind === 'num'}
									<div role="group" aria-label="Grade number" class="flex flex-wrap gap-2">
										{#each [[1, 'Got it (1)'], [0, 'Missed (0)']] as [v, lbl] (v)}
											<button
												type="button"
												aria-pressed={session.marks[k] === v}
												onclick={() => (session!.marks[k] = v as number)}
												class={cn(
													'h-9 rounded-xl border-2 px-3 text-xs font-extrabold transition-all',
													session.marks[k] === v
														? 'border-[#58CC02] bg-[#58CC02] text-white'
														: 'border-slate-200 bg-white text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
												)}
											>
												{lbl}
											</button>
										{/each}
									</div>
								{:else}
									<p class="text-xs font-semibold text-muted-foreground">
										Tick each item above that you recalled accurately.
									</p>
								{/if}
							{/if}
						</article>
					{/if}
				{/each}
			</section>
		{/each}

	</div>
{/if}
