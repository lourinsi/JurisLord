<script lang="ts">
	import { onDestroy } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import {
		CheckCircle2,
		Clock,
		RotateCcw,
		Sparkles,
		Volume2,
		VolumeX,
		XCircle
	} from '@lucide/svelte';
	import ScoreScale from '$lib/components/ScoreScale.svelte';
	import { essayStatus } from '$lib/alac';
	import type { Kit } from '$lib/kit';
	import { canShuffle } from '$lib/mcq';
	import type { SubjectNumbersConfig } from '$lib/numbers-registry';
	import type { Essay as PhiloEssay } from '$lib/philo';
	import type { Problem as ConstiProblem } from '$lib/problems';
	import type { SubjectRequisitesConfig } from '$lib/requisites';
	import { playMcqSound } from '$lib/sound';
	import { prefs } from '$lib/stores/prefs.svelte';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { md } from '$lib/text';
	import type { Subject } from '$lib/types';
	import {
		KIND_META,
		PART_ORDER,
		buildSubjectExamBank,
		computeExamTotals,
		defaultExamSettings,
		entryKey,
		formatClock,
		isEntryAnswered,
		loadSavedExamSession,
		loadSavedExamSettings,
		maxPointsForEntry,
		pointsForEntry,
		sampleItems,
		saveExamSession,
		saveExamSettings,
		shuffledIndices,
		subTickKey,
		unmarkedWrittenCount,
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
		session = loadSavedExamSession(id);
	});

	$effect(() => {
		if (!loadedSubjectId || loadedSubjectId !== subject.id) return;
		// Track deep mutations on session before persisting
		if (session) {
			void JSON.stringify(session.answers);
			void JSON.stringify(session.marks);
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
		mcq: 10,
		essay: 2,
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
			if (bank.hasFinalsEssays && counts.essay === 0) counts.essay = Math.min(2, bank.essays.filter((e) => e.isFinals).length);
			if (bank.hasFinalsEnums && counts.enum === 0) counts.enum = Math.min(2, bank.enums.filter((e) => e.isFinals).length);
			if (bank.hasFinalsTerms && counts.term === 0) counts.term = Math.min(2, bank.terms.filter((t) => t.isFinals).length);
			if (bank.reqs.length && counts.req === 0) counts.req = Math.min(3, bank.reqs.length);
		} else if (preset === 'missed') {
			mcqFilter = 'missed';
			essayFilter = 'review';
			enumFilter = 'all';
			termFilter = 'all';
			numFilter = 'all';
		} else if (preset === 'new') {
			mcqFilter = 'new';
			essayFilter = 'unmastered';
			enumFilter = 'all';
			termFilter = 'all';
			numFilter = 'all';
		}
	}

	// ---- Filtered pools ----
	const filteredMcqs = $derived.by(() => {
		if (mcqFilter === 'missed') return bank.mcqs.filter((q) => userStorage.mcqAttempts[q.id]?.isCorrect === false);
		if (mcqFilter === 'new') return bank.mcqs.filter((q) => !userStorage.mcqAttempts[q.id]);
		if (mcqFilter === 'finals_all') return bank.mcqs.filter((q) => q.isFinals);
		if (mcqFilter === 'all') return bank.mcqs;
		return bank.mcqs.filter((q) => q.topicId === mcqFilter);
	});

	const filteredEssays = $derived.by(() => {
		if (essayFilter === 'finals_all') return bank.essays.filter((e) => e.isFinals);
		if (essayFilter === 'review') return bank.essays.filter((e) => essayStatus(userStorage.essayDrafts[e.id]) === 'review');
		if (essayFilter === 'unmastered') return bank.essays.filter((e) => !userStorage.essayDrafts[e.id]?.isMastered);
		if (essayFilter === 'src:__core__') return bank.essays.filter((e) => !e.source);
		if (essayFilter.startsWith('src:')) {
			const src = essayFilter.slice(4);
			return bank.essays.filter((e) => e.source === src);
		}
		return bank.essays;
	});

	const filteredEnums = $derived.by(() => {
		if (enumFilter === 'finals' && bank.hasFinalsEnums) return bank.enums.filter((e) => e.isFinals);
		return bank.enums;
	});

	const filteredTerms = $derived.by(() => {
		if (termFilter === 'finals' && bank.hasFinalsTerms) return bank.terms.filter((t) => t.isFinals);
		return bank.terms;
	});

	const filteredNums = $derived.by(() => {
		if (numFilter === 'finals' && bank.hasFinalsNums) return bank.nums.filter((n) => n.isFinals);
		return bank.nums;
	});

	const availableCounts = $derived<Record<ExamItemKind, number>>({
		mcq: filteredMcqs.length,
		essay: filteredEssays.length,
		enum: filteredEnums.length,
		term: filteredTerms.length,
		req: bank.reqs.length,
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
		bank.mcqs.filter((q) => userStorage.mcqAttempts[q.id]?.isCorrect === false).length
	);
	const newMcqCount = $derived(bank.mcqs.filter((q) => !userStorage.mcqAttempts[q.id]).length);
	const finalsMcqCount = $derived(bank.mcqs.filter((q) => q.isFinals).length);
	const finalsEssayCount = $derived(bank.essays.filter((e) => e.isFinals).length);
	const finalsEnumCount = $derived(bank.enums.filter((e) => e.isFinals).length);
	const finalsTermCount = $derived(bank.terms.filter((t) => t.isFinals).length);
	const finalsNumCount = $derived(bank.nums.filter((n) => n.isFinals).length);
	const reviewEssayCount = $derived(
		bank.essays.filter((e) => essayStatus(userStorage.essayDrafts[e.id]) === 'review').length
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
			for (const q of sampleItems(filteredMcqs, effectiveCounts.mcq)) {
				const order = canShuffle({ o: q.options })
					? shuffledIndices(q.options.length)
					: q.options.map((_, i) => i);
				items.push({ kind: 'mcq', id: q.id, order });
			}
		}
		if (effectiveCounts.essay > 0) {
			for (const e of sampleItems(filteredEssays, effectiveCounts.essay)) {
				items.push({ kind: 'essay', id: e.id });
			}
		}
		if (effectiveCounts.enum > 0) {
			for (const en of sampleItems(filteredEnums, effectiveCounts.enum)) {
				items.push({ kind: 'enum', id: en.id });
			}
		}
		if (effectiveCounts.term > 0) {
			for (const tm of sampleItems(filteredTerms, effectiveCounts.term)) {
				items.push({ kind: 'term', id: tm.id });
			}
		}
		if (effectiveCounts.req > 0) {
			for (const rq of sampleItems(bank.reqs, effectiveCounts.req)) {
				items.push({ kind: 'req', id: rq.id });
			}
		}
		if (effectiveCounts.num > 0) {
			for (const nm of sampleItems(filteredNums, effectiveCounts.num)) {
				items.push({ kind: 'num', id: nm.id });
			}
		}

		if (!items.length) return;
		const now = Date.now();
		session = {
			subjectId: subject.id,
			mode,
			label: buildLabel(),
			startedAt: now,
			deadlineAt: computedTimerSecs ? now + computedTimerSecs * 1000 : null,
			finishedAt: null,
			graded: false,
			items,
			answers: {},
			marks: {}
		};
		confirmSubmit = false;
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
		session = {
			subjectId: subject.id,
			mode: 'practice',
			label: `Retry Missed · ${missedEntries.length} MCQs`,
			startedAt: now,
			deadlineAt: null,
			finishedAt: null,
			graded: false,
			items: missedEntries.map((it) => {
				const q = bank.mcqById[it.id];
				const opts = q?.options ?? [];
				const order = canShuffle({ o: opts })
					? shuffledIndices(opts.length || 4)
					: opts.map((_, i) => i);
				return { kind: 'mcq', id: it.id, order };
			}),
			answers: {},
			marks: {}
		};
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function pickMcqOption(entry: UnifiedExamEntry, originalIndex: number) {
		if (!session || session.finishedAt) return;
		const k = entryKey(entry);
		const q = bank.mcqById[entry.id];
		if (!q) return;

		if (session.mode === 'practice') {
			if (session.answers[k] !== undefined && session.answers[k] !== '') return;
			session.answers[k] = String(originalIndex);
			const ok = originalIndex === q.correctIndex;
			userStorage.recordMcqAttempt(q.id, originalIndex, ok);
			playMcqSound(ok);
		} else {
			session.answers[k] = String(originalIndex);
		}
	}

	function submitExam() {
		if (!session || session.finishedAt) return;
		const end = session.deadlineAt ? Math.min(Date.now(), session.deadlineAt) : Date.now();
		session.finishedAt = end;
		confirmSubmit = false;

		// Record all answered MCQs into userStorage
		let mcqCount = 0;
		let mcqCorrect = 0;
		for (const it of session.items) {
			if (it.kind !== 'mcq') continue;
			const q = bank.mcqById[it.id];
			if (!q) continue;
			mcqCount++;
			const raw = session.answers[entryKey(it)];
			if (raw !== undefined && raw !== '') {
				const picked = Number(raw);
				const ok = picked === q.correctIndex;
				if (ok) mcqCorrect++;
				userStorage.recordMcqAttempt(q.id, picked, ok);
			}
		}

		// If the exam contains ONLY MCQs, auto-finalize grading immediately
		const hasWritten = session.items.some((it) => it.kind !== 'mcq');
		if (!hasWritten) {
			session.graded = true;
			const totals = computeExamTotals(session, bank);
			userStorage.recordTestHistory({
				subjectId: subject.id,
				subjectTitle: subject.title,
				topicId: scopePreset === 'finals' ? 'finals' : mcqFilter,
				topicName: session.label,
				mode: session.mode,
				correct: totals.score,
				answered: answeredCount,
				total: totals.total,
				secondsUsed: Math.round((end - session.startedAt) / 1000)
			});
			if (mcqCount > 0) playMcqSound(mcqCorrect >= Math.ceil(mcqCount / 2));
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	function finalizeWrittenGrading() {
		if (!session || session.graded) return;
		session.graded = true;
		const totals = computeExamTotals(session, bank);
		const end = session.finishedAt ?? Date.now();
		userStorage.recordTestHistory({
			subjectId: subject.id,
			subjectTitle: subject.title,
			topicId: scopePreset === 'finals' ? 'finals' : 'mock_exam',
			topicName: session.label,
			mode: session.mode,
			correct: totals.score,
			answered: answeredCount,
			total: totals.total,
			secondsUsed: Math.round((end - session.startedAt) / 1000)
		});
		if (totals.total > 0) playMcqSound(totals.score / totals.total >= 0.6);
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
		if (autostart === '1') {
			const url = new URL(page.url.href);
			url.searchParams.delete('autostart');
			goto(url, { replace: true });
			startExam();
		} else if (forceSetup === '1') {
			const url = new URL(page.url.href);
			url.searchParams.delete('setup');
			goto(url, { replace: true });
			session = null;
		}
	});

	// ---- Live clock ----
	let now = $state(Date.now());
	const tickTimer = setInterval(() => {
		now = Date.now();
	}, 500);
	onDestroy(() => clearInterval(tickTimer));

	const secsLeft = $derived(
		session && !session.finishedAt && session.deadlineAt
			? (session.deadlineAt - now) / 1000
			: null
	);
	$effect(() => {
		if (secsLeft !== null && secsLeft <= 0 && session && !session.finishedAt) {
			submitExam();
		}
	});

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

	const answeredCount = $derived(
		session ? session.items.filter((it) => isEntryAnswered(session!, it, bank)).length : 0
	);
	const totals = $derived(session ? computeExamTotals(session, bank) : null);
	const unmarkedLeft = $derived(session ? unmarkedWrittenCount(session, bank) : 0);
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
							disabled={!missedMcqCount && !reviewEssayCount}
							onclick={() => applyScopePreset('missed')}
							class={cn(
								'inline-flex h-9 items-center gap-1.5 rounded-xl border-2 border-b-3 px-3 text-xs font-extrabold tracking-wide uppercase transition-all disabled:opacity-40',
								scopePreset === 'missed'
									? 'border-[#EA2B2B] bg-[#FF4B4B] text-white'
									: 'border-slate-200 bg-white text-foreground hover:bg-muted dark:border-[#2B434E] dark:bg-[#131F24]'
							)}
						>
							Missed / Review ({missedMcqCount + reviewEssayCount})
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
	</div>
{:else if !session.finishedAt}
	<!-- ==================== ACTIVE EXAM PAPER ==================== -->
	<div class="flex flex-col gap-6">
		<!-- Sticky header bar -->
		<div class="sticky top-[calc(var(--header-h)+0.5rem)] z-20 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-b-4 border-slate-200 bg-card/95 px-4 py-3 shadow-sm backdrop-blur dark:border-[#2B434E]">
			<div class="flex min-w-0 flex-col gap-0.5">
				<span class="truncate text-[0.7rem] font-extrabold tracking-wide text-muted-foreground uppercase">{session.label}</span>
				<span class="text-sm font-extrabold text-foreground tabular-nums">
					{answeredCount} of {session.items.length} answered
				</span>
			</div>
			<div class="flex flex-wrap items-center gap-2">
				{#if activeParts.length > 1}
					<div class="hidden flex-wrap gap-1 md:flex">
						{#each activeParts as part (part.kind)}
							<a
								href="#exam-part-{part.kind}"
								class="rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-[0.7rem] font-extrabold text-foreground no-underline hover:border-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#131F24]"
							>
								{part.roman}. {KIND_META[part.kind].short}
							</a>
						{/each}
					</div>
				{/if}
				<button
					type="button"
					onclick={() => prefs.set('soundEnabled', !prefs.value.soundEnabled)}
					title={prefs.value.soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
					aria-label={prefs.value.soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
					class="grid size-9 place-items-center rounded-xl border-2 border-slate-200 bg-white text-muted-foreground hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]"
				>
					{#if prefs.value.soundEnabled}
						<Volume2 class="size-4 text-[#1CB0F6]" />
					{:else}
						<VolumeX class="size-4" />
					{/if}
				</button>
				<span
					class={cn(
						'inline-flex h-9 items-center gap-1.5 rounded-xl border-2 px-3 text-sm font-extrabold tabular-nums',
						secsLeft !== null && secsLeft < 60
							? 'animate-pulse border-[#EA2B2B] bg-[#FFDFE0] text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]'
							: 'border-slate-200 bg-slate-100 text-foreground dark:border-[#2B434E] dark:bg-[#131F24]'
					)}
				>
					<Clock class="size-4" />
					{#if secsLeft !== null}
						{formatClock(secsLeft)}
					{:else}
						{formatClock((now - session.startedAt) / 1000)}
					{/if}
				</span>
			</div>
		</div>

		<!-- Exam Sections -->
		{#each activeParts as part (part.kind)}
			<section id="exam-part-{part.kind}" class="flex scroll-mt-32 flex-col gap-4">
				<div class="flex flex-col gap-0.5 border-b-2 border-slate-200 pb-2 dark:border-[#2B434E]">
					<h2 class="font-heading text-xl font-extrabold text-foreground">
						Part {part.roman}. {part.title}
					</h2>
					<p class="text-xs font-semibold text-muted-foreground">{KIND_META[part.kind].intro}</p>
				</div>

				{#each part.items as entry, idx (entryKey(entry))}
					{@const k = entryKey(entry)}
					<article class="flex flex-col gap-3 rounded-2xl border-2 border-b-4 border-slate-200 bg-card p-5 dark:border-[#2B434E]">
						{#if entry.kind === 'mcq'}
							{@const q = bank.mcqById[entry.id]}
							{#if q}
								{@const order = entry.order ?? q.options.map((_, i) => i)}
								{@const rawPick = session.answers[k]}
								{@const picked = rawPick !== undefined && rawPick !== '' ? Number(rawPick) : null}
								{@const reveal = session.mode === 'practice' && picked !== null}
								<div class="flex items-start justify-between gap-3">
									<p class="text-[0.95rem] leading-relaxed font-bold text-foreground">
										<span class="mr-1.5 font-extrabold text-[#1CB0F6] tabular-nums">{idx + 1}.</span>
										{q.question}
									</p>
									<span class="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.68rem] font-extrabold text-muted-foreground dark:bg-[#223842]">
										{q.topicName}
									</span>
								</div>
								<div class="flex flex-col gap-2">
									{#each order as origIdx, displayIdx (origIdx)}
										{@const isPicked = picked === origIdx}
										{@const isCorrect = origIdx === q.correctIndex}
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
											<span class="min-w-0 flex-1 leading-snug">{q.options[origIdx]}</span>
										</button>
									{/each}
								</div>
								{#if reveal}
									<div
										class={cn(
											'mt-1 rounded-xl border-2 p-3.5 text-xs leading-relaxed font-semibold',
											picked === q.correctIndex
												? 'border-[#58CC02]/50 bg-[#D7FFB8]/40 text-foreground dark:bg-[#58CC02]/15'
												: 'border-[#FF4B4B]/50 bg-[#FFDFE0]/40 text-foreground dark:bg-[#FF4B4B]/15'
										)}
									>
										<p class="font-extrabold">
											{picked === q.correctIndex ? '✓ Correct!' : '✗ Incorrect.'}
											{#if q.legalBasis}<span class="ml-1 font-bold text-muted-foreground">({q.legalBasis})</span>{/if}
										</p>
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
									<span class="rounded-full bg-[#F3E8FF] px-2.5 py-0.5 text-[0.68rem] font-extrabold text-[#8930C9] dark:bg-[#CE82FF]/20 dark:text-[#DDA6FF]">
										{e.source ?? e.topic}
									</span>
								</div>
								<p class="legal rounded-xl bg-slate-50 p-3.5 text-[0.94rem] leading-relaxed whitespace-pre-line text-foreground dark:bg-[#131F24]">
									{e.factPattern}
								</p>
								{#if e.question}
									<p class="text-sm font-extrabold text-foreground">{e.question}</p>
								{/if}
								{#if e.format === 'alac'}
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
										rows="6"
										bind:value={session.answers[k]}
										placeholder="Write your answer clearly in one or two paragraphs…"
										aria-label="Answer for essay {idx + 1}"
										class="w-full rounded-xl border-2 border-slate-200 bg-white p-3 text-sm font-medium text-foreground outline-none focus:border-[#CE82FF] dark:border-[#2B434E] dark:bg-[#131F24]"
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
									<span class="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.68rem] font-extrabold text-muted-foreground dark:bg-[#223842]">
										{en.items.length} items · {en.src}
									</span>
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
									<span class="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.68rem] font-extrabold text-muted-foreground dark:bg-[#223842]">
										{tm.src}
									</span>
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
									<span class="shrink-0 rounded-full bg-[#FFF5CC] px-2.5 py-0.5 text-[0.68rem] font-extrabold text-[#946200] dark:bg-[#FFC800]/20 dark:text-[#FFD633]">
										{rq.answers.length > 1 ? `${rq.answers.length} requisites` : 'Short rule'} · {rq.topicTitle}
									</span>
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
									<span class="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.68rem] font-extrabold text-muted-foreground dark:bg-[#223842]">
										{nm.source}
									</span>
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
				onclick={() => {
					if (answeredCount < session!.items.length && !confirmSubmit) confirmSubmit = true;
					else submitExam();
				}}
				class="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-6 text-sm font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#4EB802] active:translate-y-0.5 active:border-b-2"
			>
				Submit &amp; Check Answers
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
{:else if totals}
	<!-- ==================== GRADING & RESULTS SCREEN ==================== -->
	{@const pct = totals.total ? Math.round((totals.score / totals.total) * 100) : 0}
	{@const elapsed = ((session.finishedAt ?? session.startedAt) - session.startedAt) / 1000}

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
					{#if missedMcqsInSession > 0}
						<button
							type="button"
							onclick={retryMissedMcqs}
							class="inline-flex h-10 items-center gap-2 rounded-xl border-2 border-[#1899D6] border-b-4 bg-[#1CB0F6] px-4 text-xs font-extrabold tracking-wide text-white uppercase"
						>
							<RotateCcw class="size-3.5" /> Practice {missedMcqsInSession} Missed MCQs
						</button>
					{/if}
					<button
						type="button"
						onclick={resetExam}
						class="inline-flex h-10 items-center gap-2 rounded-xl border-2 border-slate-200 border-b-4 bg-white px-4 text-xs font-extrabold tracking-wide text-foreground uppercase hover:bg-muted dark:border-[#2B434E] dark:bg-[#1A2C34]"
					>
						New Mock Exam
					</button>
				</div>
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
							{@const rawPick = session.answers[k]}
							{@const picked = rawPick !== undefined && rawPick !== '' ? Number(rawPick) : null}
							{@const ok = picked === q.correctIndex}
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
										{@const isRight = origIdx === q.correctIndex}
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
										{#each ALAC_FIELDS as f (f.key)}
											<p class="leading-relaxed">
												<strong class="text-[#8930C9] dark:text-[#DDA6FF]">{f.letter}.</strong>
												{session.answers[`${k}:${f.key}`]?.trim() || '(blank)'}
											</p>
										{/each}
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
																disabled={session.graded}
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
																disabled={session.graded}
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
							{#if !session.graded}
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

		{#if !session.graded}
			<div class="flex flex-wrap items-center gap-3 border-t-2 border-slate-200 pt-4 dark:border-[#2B434E]">
				<button
					type="button"
					disabled={unmarkedLeft > 0}
					onclick={finalizeWrittenGrading}
					class="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-6 text-sm font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#4EB802] disabled:opacity-40"
				>
					Finish &amp; Save Score
				</button>
				{#if unmarkedLeft > 0}
					<span class="text-xs font-bold text-muted-foreground">
						Mark {unmarkedLeft} more {unmarkedLeft === 1 ? 'answer' : 'answers'} first.
					</span>
				{/if}
			</div>
		{/if}
	</div>
{/if}
