import type { McqTag, ModuleTopic } from '$lib/types';

export type McqTopicCandidate = {
	topicId?: string;
	topic?: string;
	topicName?: string;
	options?: readonly string[];
	tag?: McqTag;
};

export type SubjectLikeForTopics = {
	topics?: ModuleTopic[];
	mcqs: readonly McqTopicCandidate[];
};

/** True when a question is a 2-option True / False item. */
export function isTrueFalseMcq(q: Pick<McqTopicCandidate, 'options'>): boolean {
	if (!q.options || q.options.length !== 2) return false;
	const a = q.options[0]?.trim().toLowerCase();
	const b = q.options[1]?.trim().toLowerCase();
	return (a === 'true' && b === 'false') || (a === 'false' && b === 'true');
}

const COMBO_OPTION_RE = /\b[a-c],\s*[a-c],?\s*and\s+[a-c]\s+are\s+true\b/i;

/** True when a question uses A–G multi-statement combination choices ("a and b are true", "a, b, and c are true", "none of the above"). */
export function isComboMcq(q: Pick<McqTopicCandidate, 'options'>): boolean {
	if (!q.options || q.options.length < 5) return false;
	return q.options.some((o) => COMBO_OPTION_RE.test(o));
}

/** True when a question belongs to a dedicated Cases drill (e.g. Consti 1 CASES or StatCon Five Cases). */
export function isCaseDrillMcq(q: Pick<McqTopicCandidate, 'topicId' | 'tag'>): boolean {
	return q.tag === 'cases' || q.topicId === 'finals_cases' || q.topicId === 'cases';
}

const FOCUS_TAG_META: { tag: McqTag; id: string; name: string; eyebrow: string; desc: string }[] = [
	{
		tag: 'bodies',
		id: 'tag:bodies',
		name: 'Constitutional Bodies',
		eyebrow: 'BY FOCUS · CONSTITUTIONAL BODIES',
		desc: 'Independent vs. attached and continuing vs. non-continuing constitutional bodies.'
	},
	{
		tag: 'jurisprudence',
		id: 'tag:jurisprudence',
		name: 'Jurisprudence',
		eyebrow: 'BY FOCUS · JURISPRUDENCE',
		desc: 'Landmark Supreme Court rulings, doctrinal applications, and controlling case holdings.'
	},
	{
		tag: 'requisites',
		id: 'tag:requisites',
		name: 'Requisites & Elements',
		eyebrow: 'BY FOCUS · REQUISITES',
		desc: 'Mandatory elements, constitutional and statutory qualifications, and concurring requisites.'
	},
	{
		tag: 'exceptions',
		id: 'tag:exceptions',
		name: 'Exceptions & Traps',
		eyebrow: 'BY FOCUS · EXCEPTIONS',
		desc: 'Carve-outs, disqualifications, limitations, and common bar-exam traps.'
	},
	{
		tag: 'effects',
		id: 'tag:effects',
		name: 'Effects & Remedies',
		eyebrow: 'BY FOCUS · EFFECTS',
		desc: 'Legal consequences, liabilities, sanctions, and procedural remedies.'
	},
	{
		tag: 'memorization',
		id: 'tag:memorization',
		name: 'Codal & Memorization',
		eyebrow: 'BY FOCUS · CODAL & MEMORIZATION',
		desc: 'Codal provisions, numbers, voting thresholds, periods, and definitions.'
	}
];

/**
 * Whether an MCQ belongs to a given topic, question type (`type:*`), or focus (`tag:*`) filter.
 * `finals` also includes `finals_cases` so Cases questions appear under both `CASES` and `FINALS`.
 */
export function mcqMatchesTopic(q: McqTopicCandidate, topicId: string): boolean {
	if (topicId === 'all') return true;
	if (topicId === 'type:tf') return isTrueFalseMcq(q);
	if (topicId === 'type:combo') return isComboMcq(q);
	if (topicId === 'type:mcq') return !isTrueFalseMcq(q) && !isCaseDrillMcq(q);
	if (topicId.startsWith('tag:')) {
		const targetTag = topicId.slice(4) as McqTag;
		return q.tag === targetTag;
	}
	if (q.topicId === topicId) return true;
	if (topicId === 'finals' && q.topicId === 'finals_cases') return true;
	return false;
}

/**
 * Returns the subject's syllabus/configured MCQ topic filters (explicit `subject.topics` + auto-discovered `topicId`s).
 */
export function topicsForSubject(subject: SubjectLikeForTopics): ModuleTopic[] {
	const counts = new Map<string, { total: number; sampleLabel: string }>();
	for (const q of subject.mcqs) {
		const k = q.topicId ?? 'other';
		const row = counts.get(k) ?? { total: 0, sampleLabel: q.topic || q.topicName || k };
		row.total++;
		counts.set(k, row);
	}

	const configured = (subject.topics ?? []).filter((t) => (counts.get(t.id)?.total ?? 0) > 0);
	const seen = new Set(configured.map((t) => t.id));

	const discovered: ModuleTopic[] = [];
	for (const [id, c] of counts.entries()) {
		if (id === 'other' || c.total === 0 || seen.has(id)) continue;
		discovered.push({
			id,
			name: c.sampleLabel.split(' — ')[0] || id.toUpperCase(),
			eyebrow: 'TOPIC FILTER',
			desc: `${c.total} question${c.total === 1 ? '' : 's'}`
		});
	}

	return [...configured, ...discovered];
}

/**
 * Groups all MCQ filters for any subject into:
 * - `formatTopics`: Question Types (True or False, Multiple Choice, Combination A–G, dedicated Cases drills)
 * - `focusTopics`: By Focus (Jurisprudence, Requisites & Elements, Exceptions & Traps, Effects & Remedies, Codal & Memorization)
 * - `syllabusTopics`: Curated chapter/unit/exam topics (excluding any case drill already surfaced under Question Types)
 *
 * Non-redundant: automatically omits any format or focus filter with 0 items or 100% of the subject's MCQs.
 */
export function subTopicsForSubject(subject: SubjectLikeForTopics): {
	formatTopics: ModuleTopic[];
	focusTopics: ModuleTopic[];
	syllabusTopics: ModuleTopic[];
} {
	const total = subject.mcqs.length;
	const baseTopics = topicsForSubject(subject);
	if (!total) return { formatTopics: [], focusTopics: [], syllabusTopics: baseTopics };

	const hasExplicitFormatTopics = baseTopics.some((t) => t.id === 'tf' || t.id === 'mcq');
	const caseTopic = baseTopics.find((t) => t.id === 'finals_cases' || t.id === 'cases');

	const formatTopics: ModuleTopic[] = [];
	if (!hasExplicitFormatTopics) {
		const tfCount = subject.mcqs.filter((q) => mcqMatchesTopic(q, 'type:tf')).length;
		const mcqCount = subject.mcqs.filter((q) => mcqMatchesTopic(q, 'type:mcq')).length;
		const comboCount = subject.mcqs.filter((q) => mcqMatchesTopic(q, 'type:combo')).length;

		if (tfCount > 0 && tfCount < total) {
			formatTopics.push({
				id: 'type:tf',
				name: 'True or False',
				eyebrow: 'QUESTION TYPE · TRUE OR FALSE',
				desc: `${tfCount} true-or-false questions across this subject.`
			});
		}
		if (mcqCount > 0 && mcqCount < total) {
			formatTopics.push({
				id: 'type:mcq',
				name: 'Multiple Choice',
				eyebrow: 'QUESTION TYPE · MULTIPLE CHOICE',
				desc: `${mcqCount} multiple-choice doctrinal and situational questions.`
			});
		}
		if (comboCount > 0 && comboCount < total) {
			formatTopics.push({
				id: 'type:combo',
				name: 'Combination (A–G)',
				eyebrow: 'QUESTION TYPE · COMBINATION (A–G)',
				desc: `${comboCount} multi-statement combination questions (including "none of the above" traps).`
			});
		}
	}
	if (caseTopic) {
		formatTopics.push(caseTopic);
	}

	const focusTopics: ModuleTopic[] = [];
	for (const meta of FOCUS_TAG_META) {
		const count = subject.mcqs.filter((q) => mcqMatchesTopic(q, meta.id)).length;
		if (count > 0 && count < total) {
			focusTopics.push({
				id: meta.id,
				name: meta.name,
				eyebrow: meta.eyebrow,
				desc: meta.desc
			});
		}
	}

	const promotedIds = new Set(formatTopics.map((t) => t.id));
	const syllabusTopics = baseTopics.filter((t) => !promotedIds.has(t.id));

	return { formatTopics, focusTopics, syllabusTopics };
}

/** Flat list of every valid MCQ filter (Question Types + By Focus + Topics) for resolving titles/metadata. */
export function allTopicsForSubject(subject: SubjectLikeForTopics): ModuleTopic[] {
	const { formatTopics, focusTopics, syllabusTopics } = subTopicsForSubject(subject);
	return [...formatTopics, ...focusTopics, ...syllabusTopics];
}
