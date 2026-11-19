import type { AlacEssay, LawModule, McqQuestion, ModuleTopic } from '$lib/types';

const ID = 'crimpro';

/**
 * Lightweight Criminal Procedure shell (metadata, intro, and color legend).
 * Individual sub-features (`studyGuideHtml`, `mcqs`, `essays`) are lazy-loaded on demand
 * via `loadCrimproGuide()`, `loadCrimproMcqs()`, and `loadCrimproEssays()`.
 */
export const crimproShell: LawModule = {
	id: ID,
	title: 'Criminal Procedure (Rules 110–127)',
	subjectCategory: 'Remedial Law',
	eyebrow: 'Rules 110–127 · Tiu Notes · Situational Reviewer',
	description:
		'Prosecution of offenses through appeal and search and seizure: institution and prescription, the civil action, preliminary investigation, arrest, bail, rights of the accused, arraignment, motion to quash, pre-trial, trial, judgment, new trial, appeal, appellate procedure, search warrants and provisional remedies — Rule by Rule, with deadlines, traps, problem banks, four practice quizzes and a mock exam.',
	legalScope:
		'Revised Rules of Criminal Procedure, Rules 110–127; Tiu, Criminal Procedure notes (Ateneo, 2017); later rulings and issuances flagged where they change the notes',
	studyGuideIntro:
		'Exam method and updates since Tiu, the topic map, one chapter per Rule (prescription module after Rule 110), the deadlines matrix, case review, consolidated comparisons, the mock exam with its separate answer key, the four practice quizzes with their key, and the last-minute sheet.',
	legend: [
		{ color: 'yellow', label: 'Memorize — rules, plain English & memory aids' },
		{ color: 'green', label: 'Requisites, model answers & waivable defects' },
		{ color: 'blue', label: 'Exceptions, updates since Tiu & curable defects' },
		{ color: 'orange', label: 'Exam traps & items to verify' },
		{ color: 'red', label: 'Case doctrine & jurisdictional defects' },
		{ color: 'purple', label: 'Hypotheticals & Level 4–5 problems' }
	],
	studyGuideHtml: '',
	mcqs: [],
	essays: []
};

let cachedGuidePromise: Promise<string> | null = null;
let cachedMcqsPromise: Promise<{
	mcqs: McqQuestion[];
	watchFor: Record<string, string>;
	topics: ModuleTopic[];
}> | null = null;
let cachedEssaysPromise: Promise<AlacEssay[]> | null = null;

/** Loads ONLY the Criminal Procedure ALAC essays (~85 KB) without loading the study guide or MCQs. */
export function loadCrimproEssays(): Promise<AlacEssay[]> {
	if (!cachedEssaysPromise) {
		cachedEssaysPromise = Promise.all([
			import('./rule_essays'),
			import('./finals_essays')
		]).then(([{ ruleSituationalEssays }, { crimproFinalsEssays }]) => [
			...ruleSituationalEssays,
			...crimproFinalsEssays
		]);
	}
	return cachedEssaysPromise;
}

/** Loads ONLY the Criminal Procedure MCQs, topics, and watchFor callouts without loading the study guide or essays. */
export function loadCrimproMcqs(): Promise<{
	mcqs: McqQuestion[];
	watchFor: Record<string, string>;
	topics: ModuleTopic[];
}> {
	if (!cachedMcqsPromise) {
		cachedMcqsPromise = Promise.all([
			import('./rule_mcqs'),
			import('./quizzes'),
			import('./twists_ext'),
			import('./finals_mcqs')
		]).then(
			([
				{ crimproTopics, ruleTrueFalseMcqs, ruleWatchFor },
				{ quizMcqs, quizWatchFor },
				{ crimproTwistMcqs, crimproTwistWatchFor },
				{ crimproFinalsMcqs, crimproFinalsWatchFor }
			]) => ({
				topics: crimproTopics,
				mcqs: [
					...ruleTrueFalseMcqs,
					...quizMcqs(ID),
					...crimproTwistMcqs,
					...crimproFinalsMcqs
				],
				watchFor: {
					finals: crimproFinalsWatchFor,
					...ruleWatchFor,
					...quizWatchFor,
					twists_kit: crimproTwistWatchFor
				}
			})
		);
	}
	return cachedMcqsPromise;
}

/** Loads ONLY the Criminal Procedure study guide HTML (split across two parallel rule chunks). */
export function loadCrimproGuide(): Promise<string> {
	if (!cachedGuidePromise) {
		cachedGuidePromise = Promise.all([
			import('./guide_part1'),
			import('./guide_part2')
		]).then(([{ rulesPart1, renderRulesPart1 }, { assembleCrimproGuide }]) =>
			assembleCrimproGuide(rulesPart1, renderRulesPart1())
		);
	}
	return cachedGuidePromise;
}

/** Loads all Criminal Procedure sections (guide + MCQs + essays) in parallel. */
export async function loadCrimproFull(): Promise<LawModule> {
	const [studyGuideHtml, mcqData, essays] = await Promise.all([
		loadCrimproGuide(),
		loadCrimproMcqs(),
		loadCrimproEssays()
	]);
	return {
		...crimproShell,
		topics: mcqData.topics,
		watchFor: mcqData.watchFor,
		studyGuideHtml,
		mcqs: mcqData.mcqs,
		essays
	};
}
