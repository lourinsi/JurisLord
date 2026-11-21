import type { McqQuestion, ModuleTopic, Subject } from '$lib/types';

/**
 * Whether an MCQ belongs to a given topic filter.
 * `finals` also includes `finals_cases` so Cases questions appear under both `CASES` and `FINALS`.
 */
export function mcqMatchesTopic(q: Pick<McqQuestion, 'topicId'>, topicId: string): boolean {
	if (topicId === 'all') return true;
	if (q.topicId === topicId) return true;
	if (topicId === 'finals' && q.topicId === 'finals_cases') return true;
	return false;
}

/**
 * Returns all MCQ topic filters for any subject:
 * 1. Explicit `subject.topics` that have at least one MCQ (preserving curated order, eyebrow, and desc).
 * 2. Auto-discovered `topicId`s present in `subject.mcqs` that weren't manually listed in `subject.topics`.
 *
 * Used by SubjectNav, practice/+page.svelte, and McqQuizEngine so adding a new MCQ bank or exam filter
 * to ANY subject automatically works everywhere.
 */
export function topicsForSubject(subject: Pick<Subject, 'topics' | 'mcqs'>): ModuleTopic[] {
	const counts = new Map<string, { total: number; sampleLabel: string }>();
	for (const q of subject.mcqs) {
		const k = q.topicId ?? 'other';
		const row = counts.get(k) ?? { total: 0, sampleLabel: q.topic || k };
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
