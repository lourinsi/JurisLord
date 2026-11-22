import type { Kit } from '$lib/kit';
import { resolveCorrectIndex } from '$lib/mcq';
import type { SubjectNumbersConfig } from '$lib/numbers-registry';
import type { Essay as PhiloEssay } from '$lib/philo';
import type { Problem as ConstiProblem } from '$lib/problems';
import type { SubjectRequisitesConfig } from '$lib/requisites';
import { mcqMatchesTopic, subTopicsForSubject, topicsForSubject } from '$lib/topics';
import type { McqTag, Subject } from '$lib/types';

export type ExamItemKind = 'mcq' | 'essay' | 'enum' | 'term' | 'req' | 'num';

export interface UnifiedMcqItem {
	id: string;
	topicId: string;
	topicName: string;
	question: string;
	options: string[];
	optionExplanations?: string[];
	correctIndex: number;
	/** Exact text of the correct option (matches `options[correctIndex]`). */
	key?: string;
	explanation: string;
	legalBasis?: string;
	tag?: McqTag;
	hint?: string;
	isFinals?: boolean;
}

export interface UnifiedEssayItem {
	id: string;
	title: string;
	topic: string;
	source?: string;
	format: 'alac' | 'written';
	factPattern: string;
	question?: string;
	modelAnswer?: {
		answer: string;
		legalBasis: string;
		application: string;
		conclusion: string;
	};
	/** For non-ALAC written essays (e.g. Legal Philosophy paragraphs). */
	modelParagraphs?: string[];
	keyPoint?: string;
	isFinals?: boolean;
}

export interface UnifiedEnumItem {
	id: string;
	title: string;
	src: string;
	group?: string;
	order?: boolean;
	mem?: string;
	items: [string, string][];
	isFinals?: boolean;
}

export interface UnifiedTermItem {
	id: string;
	term: string;
	definition: string;
	src: string;
	dontConfuse?: string;
	isFinals?: boolean;
}

export interface UnifiedRequisiteItem {
	id: string;
	num: number;
	question: string;
	answers: string[];
	noteLabel?: string;
	note?: string;
	source: string;
	topicTitle: string;
	isFinals?: boolean;
}

export interface UnifiedNumberItem {
	id: string;
	value: string;
	prompt: string;
	source: string;
	note?: string;
	group: string;
	isFinals?: boolean;
}

export interface FilterOption {
	id: string;
	label: string;
	count: number;
	isFinals?: boolean;
}

export interface SubjectExamBank {
	subjectId: string;
	mcqs: UnifiedMcqItem[];
	mcqById: Record<string, UnifiedMcqItem>;
	mcqTopics: FilterOption[];
	essays: UnifiedEssayItem[];
	essayById: Record<string, UnifiedEssayItem>;
	essaySources: FilterOption[];
	enums: UnifiedEnumItem[];
	enumById: Record<string, UnifiedEnumItem>;
	terms: UnifiedTermItem[];
	termById: Record<string, UnifiedTermItem>;
	reqs: UnifiedRequisiteItem[];
	reqById: Record<string, UnifiedRequisiteItem>;
	nums: UnifiedNumberItem[];
	numById: Record<string, UnifiedNumberItem>;
	hasFinalsMcqs: boolean;
	hasFinalsEssays: boolean;
	hasFinalsEnums: boolean;
	hasFinalsTerms: boolean;
	hasFinalsReqs: boolean;
	hasFinalsNums: boolean;
	hasFinalsPreset: boolean;
}

export type ScopePreset = 'all' | 'finals' | 'missed' | 'new';

export interface UnifiedExamSettings {
	mode: 'exam' | 'practice';
	scopePreset: ScopePreset;
	mcqFilter: string;
	essayFilter: string;
	enumFilter: 'all' | 'finals';
	termFilter: 'all' | 'finals';
	numFilter: 'all' | 'finals';
	timerChoice: 'none' | 'auto' | '15' | '30' | '45' | '60' | '90';
	counts: Record<ExamItemKind, number>;
}

export interface UnifiedExamEntry {
	kind: ExamItemKind;
	id: string;
	/** Shuffled option index mapping for MCQs: displayIdx -> originalIdx. */
	order?: number[];
}

export interface UnifiedExamSession {
	subjectId: string;
	mode: 'exam' | 'practice';
	label: string;
	startedAt: number;
	deadlineAt: number | null;
	/** Original timer duration in ms (used when resetting the current exam). */
	durationMs?: number | null;
	/** Timestamp when the timer was paused, or null/undefined while running. */
	pausedAt?: number | null;
	/** Accumulated paused duration in ms (excluded from elapsed time). */
	pausedTotalMs?: number;
	/** When true (default), choosing an MCQ option immediately reveals the answer & explanation; when false, hidden until submission. */
	showAnswers?: boolean;
	/** When true (default), displays one question per page with Prev/Next navigation (MCQ style); when false, shows all items in full-exam scroll view. */
	singleQuestion?: boolean;
	/** Items flagged for review, keyed by `entryKey(entry)`. */
	flagged?: Record<string, boolean>;
	finishedAt: number | null;
	graded: boolean;
	items: UnifiedExamEntry[];
	/**
	 * User responses:
	 * - mcq: `"${kind}:${id}"` -> stringified original option index
	 * - essay (alac): `"${kind}:${id}:a|l|p|c"` -> text
	 * - essay (written), enum, term, req, num: `"${kind}:${id}"` -> text
	 */
	answers: Record<string, string>;
	/**
	 * Marks for written items:
	 * - essay: `"${kind}:${id}"` -> 0..5
	 * - enum / req: `"${kind}:${id}:${idx}"` -> 0 | 1
	 * - term: `"${kind}:${id}"` -> 0 | 1 | 2
	 * - num: `"${kind}:${id}"` -> 0 | 1
	 */
	marks: Record<string, number>;
}

export const KIND_META: Record<
	ExamItemKind,
	{ title: string; short: string; intro: string; setupHint: string; opts: number[]; defaultCount: number }
> = {
	mcq: {
		title: 'Multiple Choice',
		short: 'MCQs',
		intro: 'Select the best answer for each question. Choices are shuffled.',
		setupHint: 'Auto-graded immediately upon submission (1 pt each).',
		opts: [0, 5, 10, 20, 30, 40, 50, 100],
		defaultCount: 20
	},
	essay: {
		title: 'ALAC & Written Essays',
		short: 'Essays',
		intro: 'Answer each problem cleanly using ALAC (Answer, Legal Basis, Application, Conclusion).',
		setupHint: 'Self-graded on the 0–5 bar rubric (5 pts each).',
		opts: [0, 1, 2, 3, 5, 8],
		defaultCount: 2
	},
	enum: {
		title: 'Enumerations',
		short: 'Enumerations',
		intro: 'State the count first, then list and briefly explain each item.',
		setupHint: 'Tick each item you named and explained (1 pt per item).',
		opts: [0, 2, 3, 5, 8],
		defaultCount: 2
	},
	term: {
		title: 'Definitions',
		short: 'Definitions',
		intro: 'Give a crisp one- or two-sentence legal definition for each term.',
		setupHint: 'Self-graded as Got it (2), Partly (1), or Missed (0).',
		opts: [0, 2, 4, 6, 10],
		defaultCount: 2
	},
	req: {
		title: 'Requisites & Rules',
		short: 'Requisites',
		intro: 'State the concise rule, forum, or numbered requisites asked for.',
		setupHint: 'Tick each requisite / answer you recalled accurately (1 pt per item).',
		opts: [0, 3, 5, 10, 15],
		defaultCount: 3
	},
	num: {
		title: 'Numbers & Periods',
		short: 'Numbers',
		intro: 'Give the exact period, threshold, vote requirement, or amount.',
		setupHint: 'Self-graded as Got it (1) or Missed (0).',
		opts: [0, 5, 10, 15, 20],
		defaultCount: 0
	}
};

export const PART_ORDER: ExamItemKind[] = ['mcq', 'essay', 'enum', 'term', 'req', 'num'];

const isFinalsText = (s?: string) => !!s && /\bfinals?\b/i.test(s);

/**
 * Curated Finals topic IDs per subject so every subject has a starred ★ FINALS scope preset
 * covering its finals exam topics/materials.
 */
const FINALS_MCQ_TOPICS_BY_SUBJECT: Record<string, ReadonlySet<string>> = {
	pfr: new Set(['cpg_sep', 'family_filiation', 'adoption_support', 'parental_other']),
	consti1: new Set(['finals', 'finals_cases']),
	crim1: new Set(['persons_liable', 'penalties_general', 'penalties_application', 'extinction_civil']),
	crim1_lloren: new Set(['tf', 'mcq', 'problems']),
	crimpro: new Set(['finals', 'quiz_finals']),
	statcon: new Set(['ch6', 'ch7', 'ch8', 'ch9', 'ch10', 'ch11', 'cases', 'integrated']),
	philo: new Set(['finals', 'l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l11', 'l12', 'l13', 'l14'])
};

function isFinalsMcqForSubject(
	subjectId: string,
	q: { id: string; topicId: string; topicName: string; legalBasis?: string }
): boolean {
	if (FINALS_MCQ_TOPICS_BY_SUBJECT[subjectId]?.has(q.topicId)) return true;
	if (isFinalsText(q.topicId) || isFinalsText(q.topicName) || isFinalsText(q.legalBasis)) return true;
	if (q.id.includes(':kit:') || q.id.startsWith('statcon2:')) return true;
	return false;
}

function isFinalsEssayForSubject(
	subjectId: string,
	e: { id: string; topic: string; source?: string }
): boolean {
	if (isFinalsText(e.source) || isFinalsText(e.topic)) return true;
	if (e.id.includes(':kit:') || e.id.startsWith('statcon2:') || e.id.startsWith('pfr:ff:')) return true;
	if (subjectId === 'consti1') {
		const m = /^consti1:alac:(\d+)$/.exec(e.id);
		if (m && Number(m[1]) >= 32) return true;
	}
	if (subjectId === 'crim1_lloren' && e.source !== 'Bar Exam') return true;
	return false;
}

export function buildSubjectExamBank(opts: {
	subject: Subject;
	kit?: Kit;
	numbers?: SubjectNumbersConfig;
	requisites?: SubjectRequisitesConfig;
	constiProblems?: ConstiProblem[];
	philoEssays?: PhiloEssay[];
}): SubjectExamBank {
	const { subject, kit, numbers, requisites, constiProblems, philoEssays } = opts;

	// ---- 1. MCQs (subject.mcqs + optional kit.mcqs) ----
	const discoveredTopics = topicsForSubject(subject);
	const topicNameMap = new Map(discoveredTopics.map((t) => [t.id, t.name]));
	const mcqs: UnifiedMcqItem[] = [];
	const seenMcqIds = new Set<string>();

	for (const q of subject.mcqs) {
		if (seenMcqIds.has(q.id)) continue;
		seenMcqIds.add(q.id);
		const tid = q.topicId ?? 'general';
		const tname = topicNameMap.get(tid) ?? q.topic ?? 'General';
		const correctIndex = resolveCorrectIndex(q);
		mcqs.push({
			id: q.id,
			topicId: tid,
			topicName: tname,
			question: q.question,
			options: q.options,
			optionExplanations: q.optionExplanations,
			correctIndex,
			key: q.key ?? q.options[correctIndex],
			explanation: q.explanation,
			legalBasis: q.legalBasis,
			tag: q.tag,
			hint: q.hint,
			isFinals: isFinalsMcqForSubject(subject.id, {
				id: q.id,
				topicId: tid,
				topicName: tname,
				legalBasis: q.legalBasis
			})
		});
	}

	if (kit?.mcqs?.length) {
		const groupMap = new Map(kit.groups.map((g) => [g.id, g.short]));
		for (const km of kit.mcqs) {
			const id = `${subject.id}:kitmcq:${km.id}`;
			if (seenMcqIds.has(id) || seenMcqIds.has(`${subject.id}:kit:${km.id}`)) continue;
			seenMcqIds.add(id);
			const gName = groupMap.get(km.group) ?? `Group ${km.group}`;
			const correctIndex = resolveCorrectIndex(km);
			mcqs.push({
				id,
				topicId: 'kit_mcq',
				topicName: `Kit MCQ Drill`,
				question: km.q,
				options: km.o,
				optionExplanations: km.why,
				correctIndex,
				key: km.key ?? km.o[correctIndex],
				explanation: km.ex,
				legalBasis: gName,
				isFinals: true
			});
		}
	}

	// Build MCQ topic list preserving discovered order
	const subjectFinalsTopics = FINALS_MCQ_TOPICS_BY_SUBJECT[subject.id];
	const mcqTopicCounts = new Map<string, { name: string; count: number; isFinals: boolean }>();
	for (const t of discoveredTopics) {
		mcqTopicCounts.set(t.id, {
			name: t.name,
			count: 0,
			isFinals: Boolean(subjectFinalsTopics?.has(t.id) || isFinalsText(t.id) || isFinalsText(t.name))
		});
	}
	for (const q of mcqs) {
		const existing = mcqTopicCounts.get(q.topicId);
		if (existing) {
			existing.count++;
			if (q.isFinals && subjectFinalsTopics?.has(q.topicId)) existing.isFinals = true;
		} else {
			mcqTopicCounts.set(q.topicId, { name: q.topicName, count: 1, isFinals: !!q.isFinals });
		}
	}
	const mcqTopics: FilterOption[] = [...mcqTopicCounts.entries()]
		.filter(([, v]) => v.count > 0)
		.map(([id, v]) => ({ id, label: v.name, count: v.count, isFinals: v.isFinals }));

	// Also expose Question Type (True or False, Multiple Choice, Combination A–G) and Focus sub-topics in Mock Exam setup
	const { formatTopics, focusTopics } = subTopicsForSubject({ topics: subject.topics, mcqs });
	const seenTopicIds = new Set(mcqTopics.map((t) => t.id));
	for (const vt of [...formatTopics, ...focusTopics]) {
		if (seenTopicIds.has(vt.id)) continue;
		const count = mcqs.filter((q) => mcqMatchesTopic(q, vt.id)).length;
		if (count > 0 && count < mcqs.length) {
			seenTopicIds.add(vt.id);
			mcqTopics.push({ id: vt.id, label: vt.name, count, isFinals: false });
		}
	}

	// ---- 2. Essays (subject.essays + kit.problems + constiProblems + philoEssays) ----
	const essays: UnifiedEssayItem[] = [];
	const seenEssayIds = new Set<string>();

	for (const e of subject.essays) {
		if (seenEssayIds.has(e.id)) continue;
		// Philo: the 4-type questions come in natively below (written format); only take the ALAC exams here.
		if (subject.id === 'philo' && philoEssays?.length && e.source !== 'FINALS · ALAC') continue;
		seenEssayIds.add(e.id);
		const isFinals = subject.id === 'philo' ? true : isFinalsEssayForSubject(subject.id, e);
		const source = e.source ?? (isFinals ? 'Finals' : undefined);
		essays.push({
			id: e.id,
			title: e.title,
			topic: e.topic,
			source,
			format: 'alac',
			factPattern: e.factPattern,
			question: e.question,
			modelAnswer: e.modelAnswer,
			isFinals
		});
	}

	if (kit?.problems?.length) {
		for (const p of kit.problems) {
			const id = `${subject.id}:kitprob:${p.pid}`;
			if (
				seenEssayIds.has(id) ||
				seenEssayIds.has(`${subject.id}:kit:${p.pid}`) ||
				seenEssayIds.has(`statcon2:kit:${p.pid}`)
			) {
				continue;
			}
			seenEssayIds.add(id);
			essays.push({
				id,
				title: p.label,
				topic: p.topic.title,
				source: 'Finals Kit ALAC',
				format: 'alac',
				factPattern: p.facts,
				question: p.q,
				modelAnswer: {
					answer: p.alac[0] ?? '',
					legalBasis: p.alac[1] ?? '',
					application: p.alac[2] ?? '',
					conclusion: p.alac[3] ?? ''
				},
				keyPoint: p.key,
				isFinals: true
			});
		}
	}

	if (constiProblems?.length) {
		for (const p of constiProblems) {
			const id = `${subject.id}:constiprob:${p.pid}`;
			if (seenEssayIds.has(id) || seenEssayIds.has(`${subject.id}:kit:${p.pid}`)) continue;
			seenEssayIds.add(id);
			essays.push({
				id,
				title: `${p.c.name} — ${p.label}`,
				topic: p.c.name,
				source: p.type === 'drill' ? 'Case Drills' : 'Twin & Twist Problems',
				format: 'alac',
				factPattern: p.facts,
				question: p.q,
				modelAnswer: {
					answer: p.alac[0] ?? '',
					legalBasis: p.alac[1] ?? '',
					application: p.alac[2] ?? '',
					conclusion: p.alac[3] ?? ''
				},
				keyPoint: p.key,
				isFinals: true
			});
		}
	}

	if (philoEssays?.length && subject.id !== 'philo') {
		const typeLabels: Record<string, string> = {
			define: 'Define',
			differentiate: 'Differentiate',
			critique: 'Critique',
			opinion: 'Opinion'
		};
		for (const pe of philoEssays) {
			const id = `${subject.id}:philo:${pe.id}`;
			if (seenEssayIds.has(id)) continue;
			seenEssayIds.add(id);
			essays.push({
				id,
				title: `${typeLabels[pe.type] ?? pe.type}: ${pe.q.slice(0, 68)}${pe.q.length > 68 ? '…' : ''}`,
				topic: typeLabels[pe.type] ?? pe.type,
				source: pe.star ? 'Finals · 4-Type Focus' : 'Finals · 4-Type Essays',
				format: 'written',
				factPattern: pe.q,
				modelParagraphs: pe.a,
				isFinals: true
			});
		}
	}

	// Build Essay source / topic filter options
	const essaySourceCounts = new Map<string, { label: string; count: number; isFinals: boolean }>();
	for (const e of essays) {
		if (e.source) {
			const key = `src:${e.source}`;
			const cur = essaySourceCounts.get(key);
			if (cur) cur.count++;
			else essaySourceCounts.set(key, { label: e.source, count: 1, isFinals: isFinalsText(e.source) });
		}
	}
	// If subject has explicit source filters (like 'Finals'), also add a 'Subject Essays' option for un-sourced ones if mixed
	const unsourcedCount = essays.filter((e) => !e.source).length;
	if (essaySourceCounts.size > 0 && unsourcedCount > 0) {
		essaySourceCounts.set('src:__core__', {
			label: 'Core Subject Essays',
			count: unsourcedCount,
			isFinals: false
		});
	}
	const essaySources: FilterOption[] = [...essaySourceCounts.entries()]
		.sort((a, b) => Number(b[1].isFinals) - Number(a[1].isFinals))
		.map(([id, v]) => ({ id, label: v.label, count: v.count, isFinals: v.isFinals }));

	// ---- 3. Enumerations ----
	const likelyEnums = kit?.focus?.enums ?? {};
	const hasLikelyEnums = Object.keys(likelyEnums).length > 0;
	const enums: UnifiedEnumItem[] = (kit?.enums ?? []).map((e) => ({
		id: `${subject.id}:enum:${e.id}`,
		title: e.t,
		src: e.src,
		order: e.order,
		mem: e.mem,
		items: e.it,
		isFinals: subject.id === 'philo' ? true : hasLikelyEnums ? Boolean(likelyEnums[e.id]) : true
	}));

	// ---- 4. Definitions ----
	const likelyTerms = kit?.focus?.terms ?? {};
	const hasLikelyTerms = Object.keys(likelyTerms).length > 0;
	const terms: UnifiedTermItem[] = (kit?.terms ?? []).map((t) => ({
		id: `${subject.id}:term:${t.id}`,
		term: t.t,
		definition: t.d,
		src: t.src,
		dontConfuse: t.x,
		isFinals: subject.id === 'philo' ? true : hasLikelyTerms ? Boolean(likelyTerms[t.id]) : true
	}));

	// ---- 5. Requisites ----
	const reqs: UnifiedRequisiteItem[] = [];
	if (requisites?.topics?.length) {
		for (const topic of requisites.topics) {
			for (const item of topic.items) {
				reqs.push({
					id: `${subject.id}:req:${topic.id}-${item.num}`,
					num: item.num,
					question: item.question,
					answers: item.answers,
					noteLabel: item.noteLabel,
					note: item.note,
					source: item.source,
					topicTitle: topic.shortTitle || topic.title,
					isFinals: true
				});
			}
		}
	}

	// ---- 6. Numbers & Periods ----
	const nums: UnifiedNumberItem[] = [];
	if (numbers) {
		let idx = 0;
		const hasExplicitFinalsSections =
			(numbers.sections ?? []).some(
				(s) => (s.finalsTopics?.length ?? 0) > 0 || s.title?.includes('★') || isFinalsText(s.title)
			);
		for (const sec of numbers.sections ?? []) {
			const secIsFinals =
				!hasExplicitFinalsSections || Boolean(sec.title?.includes('★') || isFinalsText(sec.title));
			for (const row of sec.rows) {
				const [value, prompt, source, note] = row;
				nums.push({
					id: `${subject.id}:num:s${idx++}`,
					value,
					prompt,
					source,
					note,
					group: sec.title ?? 'Numbers',
					isFinals: secIsFinals
				});
			}
			for (const ft of sec.finalsTopics ?? []) {
				for (const sub of ft.subtopics) {
					for (const row of sub.rows) {
						const [value, prompt, source, note] = row;
						nums.push({
							id: `${subject.id}:num:f${idx++}`,
							value,
							prompt,
							source,
							note,
							group: `★ Finals · ${ft.shortTitle}`,
							isFinals: true
						});
					}
				}
			}
		}
		if (numbers.topicGrid) {
			for (const row of numbers.topicGrid.other) {
				const [value, prompt, source, note] = row;
				nums.push({
					id: `${subject.id}:num:g${idx++}`,
					value,
					prompt,
					source,
					note,
					group: numbers.topicGrid.clusterTitle,
					isFinals: true
				});
			}
		}
	}

	const hasFinalsMcqs = mcqs.some((q) => q.isFinals);
	const hasFinalsEssays = essays.some((e) => e.isFinals);
	const hasFinalsEnums = enums.some((e) => e.isFinals);
	const hasFinalsTerms = terms.some((t) => t.isFinals);
	const hasFinalsReqs = reqs.length > 0;
	const hasFinalsNums = nums.some((n) => n.isFinals);
	const hasFinalsPreset =
		hasFinalsMcqs ||
		hasFinalsEssays ||
		hasFinalsEnums ||
		hasFinalsTerms ||
		hasFinalsReqs ||
		hasFinalsNums;

	return {
		subjectId: subject.id,
		mcqs,
		mcqById: Object.fromEntries(mcqs.map((q) => [q.id, q])),
		mcqTopics,
		essays,
		essayById: Object.fromEntries(essays.map((e) => [e.id, e])),
		essaySources,
		enums,
		enumById: Object.fromEntries(enums.map((e) => [e.id, e])),
		terms,
		termById: Object.fromEntries(terms.map((t) => [t.id, t])),
		reqs,
		reqById: Object.fromEntries(reqs.map((r) => [r.id, r])),
		nums,
		numById: Object.fromEntries(nums.map((n) => [n.id, n])),
		hasFinalsMcqs,
		hasFinalsEssays,
		hasFinalsEnums,
		hasFinalsTerms,
		hasFinalsReqs,
		hasFinalsNums,
		hasFinalsPreset
	};
}

// ---------- Helpers ----------

export function shuffledIndices(len: number): number[] {
	const arr = Array.from({ length: len }, (_, i) => i);
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

export function sampleItems<T>(pool: readonly T[], count: number): T[] {
	const copy = [...pool];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy.slice(0, Math.min(count, copy.length));
}

/** Weighted sampling without replacement (e.g. weight 0.3 is 70% less likely to be drawn than weight 1). */
export function sampleWeightedItems<T>(
	pool: readonly T[],
	count: number,
	getWeight: (item: T) => number
): T[] {
	if (count >= pool.length) return sampleItems(pool, count);
	return [...pool]
		.map((item) => {
			const w = Math.max(0.0005, getWeight(item));
			const r = Math.max(1e-12, Math.random());
			return { item, key: Math.pow(r, 1 / w) };
		})
		.sort((a, b) => b.key - a.key)
		.slice(0, count)
		.map((x) => x.item);
}

/** Compact display multiplier (e.g. `1.5×`, `0.5×`, `0.25×`, `0.125×`) — never shows `0×`. */
export function formatWeightMultiplier(w: number): string {
	if (w >= 1) return `${Number(w.toFixed(2))}×`;
	if (w >= 0.1) return `${Number(w.toFixed(3))}×`;
	return `${Number(w.toFixed(4))}×`;
}

/** Percentage delta vs. base weight 1.0 (e.g. `+50%`, `-50%`, `-75%`; never claims `-100%`). */
export function formatWeightDelta(w: number): string {
	const pctDiff = Math.round((w - 1) * 100);
	if (w < 1) return `${Math.max(-99, pctDiff)}%`;
	return `+${pctDiff}%`;
}

export function entryKey(entry: Pick<UnifiedExamEntry, 'kind' | 'id'>): string {
	return `${entry.kind}:${entry.id}`;
}

export function subTickKey(entry: Pick<UnifiedExamEntry, 'kind' | 'id'>, idx: number): string {
	return `${entry.kind}:${entry.id}:${idx}`;
}

export function isEntryAnswered(session: UnifiedExamSession, entry: UnifiedExamEntry, bank: SubjectExamBank): boolean {
	const k = entryKey(entry);
	if (entry.kind === 'essay') {
		const e = bank.essayById[entry.id];
		if (e?.format === 'written') return (session.answers[k]?.trim().length ?? 0) > 0;
		return ['a', 'l', 'p', 'c'].some((part) => (session.answers[`${k}:${part}`]?.trim().length ?? 0) > 0);
	}
	return (session.answers[k]?.trim().length ?? 0) > 0;
}

export function maxPointsForEntry(entry: UnifiedExamEntry, bank: SubjectExamBank): number {
	switch (entry.kind) {
		case 'mcq':
			return 1;
		case 'essay':
			return 5;
		case 'enum':
			return bank.enumById[entry.id]?.items.length ?? 0;
		case 'term':
			return 2;
		case 'req':
			return bank.reqById[entry.id]?.answers.length ?? 1;
		case 'num':
			return 1;
	}
}

export function pointsForEntry(
	session: UnifiedExamSession,
	entry: UnifiedExamEntry,
	bank: SubjectExamBank
): number | null {
	const k = entryKey(entry);
	switch (entry.kind) {
		case 'mcq': {
			const q = bank.mcqById[entry.id];
			const raw = session.answers[k];
			if (!q || raw === undefined || raw === '') return 0;
			return Number(raw) === resolveCorrectIndex(q) ? 1 : 0;
		}
		case 'essay': {
			const m = session.marks[k];
			// Blank written answers are an automatic 0 (nothing for the user to self-mark)
			if (m === undefined) return isEntryAnswered(session, entry, bank) ? null : 0;
			return m;
		}
		case 'enum': {
			const e = bank.enumById[entry.id];
			if (!e) return 0;
			return e.items.reduce((sum, _, i) => sum + (session.marks[subTickKey(entry, i)] === 1 ? 1 : 0), 0);
		}
		case 'term': {
			const m = session.marks[k];
			if (m === undefined) return isEntryAnswered(session, entry, bank) ? null : 0;
			return m;
		}
		case 'req': {
			const r = bank.reqById[entry.id];
			if (!r) return 0;
			return r.answers.reduce((sum, _, i) => sum + (session.marks[subTickKey(entry, i)] === 1 ? 1 : 0), 0);
		}
		case 'num': {
			const m = session.marks[k];
			if (m === undefined) return isEntryAnswered(session, entry, bank) ? null : 0;
			return m;
		}
	}
}

export function unmarkedWrittenCount(session: UnifiedExamSession, bank: SubjectExamBank): number {
	let count = 0;
	for (const entry of session.items) {
		if (entry.kind === 'essay' || entry.kind === 'term' || entry.kind === 'num') {
			if (pointsForEntry(session, entry, bank) === null) count++;
		}
	}
	return count;
}

export function computeExamTotals(session: UnifiedExamSession, bank: SubjectExamBank) {
	const byPart: Record<ExamItemKind, { got: number; max: number; count: number }> = {
		mcq: { got: 0, max: 0, count: 0 },
		essay: { got: 0, max: 0, count: 0 },
		enum: { got: 0, max: 0, count: 0 },
		term: { got: 0, max: 0, count: 0 },
		req: { got: 0, max: 0, count: 0 },
		num: { got: 0, max: 0, count: 0 }
	};
	let score = 0;
	let total = 0;
	// Only objective (MCQ) items count toward the headline score. Essays, enumerations,
	// definitions, requisites and numbers are open to human interpretation, so they are
	// self-graded and shown per part but excluded from the total / history %.
	// (Written-only exams have no MCQs, so they fall back to counting everything.)
	const hasMcq = session.items.some((e) => e.kind === 'mcq');
	for (const entry of session.items) {
		const max = maxPointsForEntry(entry, bank);
		const got = pointsForEntry(session, entry, bank) ?? 0;
		byPart[entry.kind].count++;
		byPart[entry.kind].max += max;
		byPart[entry.kind].got += got;
		if (hasMcq && entry.kind !== 'mcq') continue;
		total += max;
		score += got;
	}
	return { score, total, byPart, mcqOnlyTotal: hasMcq };
}

export function formatClock(secs: number): string {
	const s = Math.max(0, Math.round(secs));
	const h = Math.floor(s / 3600);
	const m = Math.floor((s % 3600) / 60);
	const r = s % 60;
	if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
	return `${m}:${String(r).padStart(2, '0')}`;
}

// ---------- Per-subject session persistence ----------

const STORAGE_PREFIX = 'juris-lord-unified-exam-v1:';
const SETTINGS_PREFIX = 'juris-lord-unified-exam-settings-v1:';

export function defaultExamSettings(bank: SubjectExamBank): UnifiedExamSettings {
	const finalsMcqs = bank.mcqs.filter((q) => q.isFinals).length;
	const finalsEssays = bank.essays.filter((e) => e.isFinals).length;
	const finalsEnums = bank.enums.filter((e) => e.isFinals).length;
	const finalsTerms = bank.terms.filter((t) => t.isFinals).length;
	const pureFinalsMcqOnly = bank.subjectId === 'consti1';
	// Philo: default mock is 20 MCQs + 2 essays (ALAC included), no enumerations or definitions.
	const mcqEssayOnly = bank.subjectId === 'philo';

	return {
		mode: 'exam',
		scopePreset: bank.hasFinalsPreset ? 'finals' : 'all',
		mcqFilter: bank.hasFinalsMcqs ? 'finals_all' : 'all',
		essayFilter: bank.hasFinalsEssays ? 'finals_all' : 'all',
		enumFilter: bank.hasFinalsEnums ? 'finals' : 'all',
		termFilter: bank.hasFinalsTerms ? 'finals' : 'all',
		numFilter: bank.hasFinalsNums ? 'finals' : 'all',
		timerChoice: 'auto',
		counts: {
			mcq: bank.mcqs.length ? Math.min(20, finalsMcqs || bank.mcqs.length) : 0,
			essay: pureFinalsMcqOnly ? 0 : bank.essays.length ? Math.min(2, finalsEssays || bank.essays.length) : 0,
			enum: pureFinalsMcqOnly || mcqEssayOnly ? 0 : bank.enums.length ? Math.min(2, finalsEnums || bank.enums.length) : 0,
			term: pureFinalsMcqOnly || mcqEssayOnly ? 0 : bank.terms.length ? Math.min(2, finalsTerms || bank.terms.length) : 0,
			req: pureFinalsMcqOnly || mcqEssayOnly ? 0 : bank.reqs.length ? Math.min(3, bank.reqs.length) : 0,
			num: 0
		}
	};
}

export function loadSavedExamSettings(
	subjectId: string,
	bank?: SubjectExamBank
): UnifiedExamSettings | null {
	if (typeof window === 'undefined') return bank ? defaultExamSettings(bank) : null;
	try {
		const raw = localStorage.getItem(SETTINGS_PREFIX + subjectId);
		if (!raw) return bank ? defaultExamSettings(bank) : null;
		const parsed = JSON.parse(raw) as Partial<UnifiedExamSettings>;
		if (!parsed || typeof parsed !== 'object' || !parsed.counts) {
			return bank ? defaultExamSettings(bank) : null;
		}
		const fallback = bank
			? defaultExamSettings(bank)
			: {
					mode: 'exam' as const,
					scopePreset: 'finals' as const,
					mcqFilter: 'finals_all',
					essayFilter: 'finals_all',
					enumFilter: 'finals' as const,
					termFilter: 'finals' as const,
					numFilter: 'finals' as const,
					timerChoice: 'auto' as const,
					counts: { mcq: 20, essay: 2, enum: 2, term: 2, req: 3, num: 0 }
				};
		const scopePreset = parsed.scopePreset ?? fallback.scopePreset;
		const pureFinalsMcqOnly = subjectId === 'consti1' && scopePreset === 'finals';
		return {
			mode: parsed.mode === 'practice' ? 'practice' : 'exam',
			scopePreset,
			mcqFilter: parsed.mcqFilter ?? fallback.mcqFilter,
			essayFilter: parsed.essayFilter ?? fallback.essayFilter,
			enumFilter: parsed.enumFilter ?? fallback.enumFilter,
			termFilter: parsed.termFilter ?? fallback.termFilter,
			numFilter: parsed.numFilter ?? fallback.numFilter,
			timerChoice: parsed.timerChoice ?? fallback.timerChoice,
			counts: {
				mcq: parsed.counts.mcq ?? fallback.counts.mcq,
				essay: pureFinalsMcqOnly ? 0 : (parsed.counts.essay ?? fallback.counts.essay),
				enum: pureFinalsMcqOnly ? 0 : (parsed.counts.enum ?? fallback.counts.enum),
				term: pureFinalsMcqOnly ? 0 : (parsed.counts.term ?? fallback.counts.term),
				req: pureFinalsMcqOnly ? 0 : (parsed.counts.req ?? fallback.counts.req),
				num: pureFinalsMcqOnly ? 0 : (parsed.counts.num ?? fallback.counts.num)
			}
		};
	} catch {
		return bank ? defaultExamSettings(bank) : null;
	}
}

export function hasCustomExamSettings(subjectId: string): boolean {
	if (typeof window === 'undefined') return false;
	try {
		return localStorage.getItem(SETTINGS_PREFIX + subjectId) !== null;
	} catch {
		return false;
	}
}

export function saveExamSettings(
	subjectId: string,
	settings: UnifiedExamSettings | null
): void {
	if (typeof window === 'undefined') return;
	try {
		if (!settings) localStorage.removeItem(SETTINGS_PREFIX + subjectId);
		else localStorage.setItem(SETTINGS_PREFIX + subjectId, JSON.stringify(settings));
	} catch {
		// ignore quota errors
	}
}

export function loadSavedExamSession(subjectId: string): UnifiedExamSession | null {
	if (typeof window === 'undefined') return null;
	try {
		const raw = localStorage.getItem(STORAGE_PREFIX + subjectId);
		if (!raw) return null;
		const parsed = JSON.parse(raw) as UnifiedExamSession;
		if (!parsed || parsed.subjectId !== subjectId || !Array.isArray(parsed.items)) return null;
		return parsed;
	} catch {
		return null;
	}
}

export function saveExamSession(subjectId: string, session: UnifiedExamSession | null): void {
	if (typeof window === 'undefined') return;
	try {
		if (!session) localStorage.removeItem(STORAGE_PREFIX + subjectId);
		else localStorage.setItem(STORAGE_PREFIX + subjectId, JSON.stringify(session));
	} catch {
		// ignore quota errors
	}
}
