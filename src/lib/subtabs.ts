import { kitForSubject, loadKitForSubject } from './kit-registry.svelte';

export { kitForSubject, loadKitForSubject };

export interface SubtabItem {
	id: string;
	path: string;
	label: string;
	desc?: string;
	star?: boolean;
}

/** Display priority on the subject overview Finals Kit grid. */
export const SUBTAB_PRIORITY: Record<string, number> = {
	exam: 1,
	focus: 2,
	numbers: 3,
	requisites: 4,
	enumerations: 5
};

/**
 * Lightweight subtab metadata registries for Numbers and Requisites.
 * Keeping the descriptions here avoids importing the heavy table datasets into the global layout chunk;
 * the actual datasets (`numbers-registry.ts` and `requisites.ts`) are only loaded when their tab is opened.
 */
export const NUMBERS_SUBTAB_META: Record<string, string> = {
	consti1: 'Numbers to memorize (self-test)',
	crim1: 'Penalties, fines, periods & prescription',
	crim1_lloren: 'Penalties, fines, periods & prescription',
	crimpro: 'Numbers & deadlines to memorize',
	pfr: 'Periods, amounts & ages to memorize',
	statcon: 'Periods, dates & ★ list counts'
};

export const REQUISITES_SUBTAB_META: Record<string, string> = {
	crimpro: '47 Q&A requisites & rules drill (self-test)'
};

/** Every study subtab route segment under `/module/[slug]/<segment>`. */
export const ALL_STUDY_SUBTAB_PATHS = new Set<string>([
	'read',
	'practice',
	'essays',
	'focus',
	'numbers',
	'requisites',
	'enumerations',
	'terms',
	'cases',
	'problems',
	'exam',
	'drill',
	'guide',
	'twists',
	'rules',
	'flips',
	'distinctions',
	'mcq',
	'past',
	'thinkers',
	'compare',
	'critiques',
	'history'
]);

/** Subtab paths that require the subject's `Kit` data to be loaded. */
export const KIT_SUBTAB_PATHS = new Set<string>([
	'exam',
	'focus',
	'enumerations',
	'terms',
	'problems',
	'drill',
	'guide',
	'mcq',
	'distinctions',
	'past',
	'thinkers',
	'compare',
	'critiques',
	'rules',
	'cases'
]);

/** Returns true when `pathname` is inside any study subtab route (`/module/<slug>/<subtab>`). */
export function isStudyPath(pathname: string): boolean {
	const m = /^\/module\/[^/]+\/([^/]+)/.exec(pathname);
	if (!m) return false;
	return ALL_STUDY_SUBTAB_PATHS.has(m[1]);
}

export function subtabsForSubject(slug: string): SubtabItem[] {
	const base = baseSubtabsForSubject(slug);

	const numDesc = NUMBERS_SUBTAB_META[slug];
	if (numDesc && !base.some((t) => t.id === 'numbers')) {
		const focusIdx = base.findIndex((t) => t.id === 'focus');
		const item: SubtabItem = { id: 'numbers', path: 'numbers', label: 'Numbers', desc: numDesc };
		if (focusIdx >= 0) base.splice(focusIdx + 1, 0, item);
		else base.push(item);
	}

	const reqDesc = REQUISITES_SUBTAB_META[slug];
	if (reqDesc && !base.some((t) => t.id === 'requisites')) {
		const numIdx = base.findIndex((t) => t.id === 'numbers');
		const item: SubtabItem = { id: 'requisites', path: 'requisites', label: 'Requisites', desc: reqDesc };
		if (numIdx >= 0) base.splice(numIdx + 1, 0, item);
		else base.push(item);
	}

	if (!base.some((t) => t.id === 'history')) {
		base.push({
			id: 'history',
			path: 'history',
			label: 'History',
			desc: 'Past scores & adaptive mock-exam weights'
		});
	}

	for (const t of base) ALL_STUDY_SUBTAB_PATHS.add(t.path);
	return base;
}

function baseSubtabsForSubject(slug: string): SubtabItem[] {
	switch (slug) {
		case 'consti1':
			return [
				{ id: 'read', path: 'read', label: 'Study guide', desc: '1987 Constitution full guide' },
				{ id: 'exam', path: 'exam', label: '★ Mock exam', desc: 'Timed mock exam & self-grading', star: true },
				{ id: 'practice', path: 'practice', label: 'MCQs', desc: 'Multiple choice & timed practice' },
				{ id: 'focus', path: 'focus', label: 'Exam focus', desc: '15 most likely questions & ★ cases' },
				{ id: 'problems', path: 'problems', label: 'ALAC problems', desc: '112 case drills & twin problems (0–5 rubric)' },
				{ id: 'cases', path: 'cases', label: 'Case digests', desc: '28 assigned cases with self-test' },
				{ id: 'essays', path: 'essays', label: 'Essays', desc: 'ALAC essay workspace' }
			];
		case 'crim1':
		case 'crim1_lloren':
			return [
				{ id: 'read', path: 'read', label: 'Study guide', desc: 'RPC Book One full guide' },
				{ id: 'exam', path: 'exam', label: '★ Mock exam', desc: 'Written mock exam with self-grading', star: true },
				{ id: 'practice', path: 'practice', label: 'MCQs', desc: 'Multiple choice & timed practice' },
				{ id: 'focus', path: 'focus', label: 'Exam focus', desc: '15 most likely questions & ★ items' },
				{ id: 'enumerations', path: 'enumerations', label: 'Enumerations', desc: '71 lists in Recall & Study mode' },
				{ id: 'terms', path: 'terms', label: 'Definitions', desc: '58 terms in Self-test & Study mode' },
				{ id: 'problems', path: 'problems', label: 'ALAC problems', desc: '75 scenarios (0–5 rubric)' },
				{ id: 'drill', path: 'drill', label: 'Flashcards', desc: 'Spaced-repetition flashcards' },
				{ id: 'guide', path: 'guide', label: 'Answer guide', desc: 'Penalty ladder & topic spotter' },
				{ id: 'essays', path: 'essays', label: 'Essays', desc: 'ALAC essay workspace' }
			];
		case 'crimpro':
			return [
				{ id: 'read', path: 'read', label: 'Study guide', desc: 'Rules 110–127 full guide' },
				{ id: 'exam', path: 'exam', label: '★ Mock exam', desc: 'Mixed-rule mock exam & practice runs', star: true },
				{ id: 'practice', path: 'practice', label: 'MCQs', desc: 'True/false & quiz bank' },
				{ id: 'focus', path: 'focus', label: 'Exam focus', desc: '15 most likely questions & 5 twist keys' },
				{ id: 'rules', path: 'rules', label: 'Rules 110–127', desc: 'Color-coded rule cards & hooks' },
				{ id: 'twists', path: 'twists', label: 'Twist drills', desc: '22 linked case-file sets' },
				{ id: 'flips', path: 'flips', label: 'One fact flips it', desc: '26 side-by-side flip pairs' },
				{ id: 'essays', path: 'essays', label: 'Essays', desc: 'Situational ALAC essays' }
			];
		case 'pfr':
			return [
				{ id: 'read', path: 'read', label: 'Study guide', desc: 'Civil Code, Family Code & pronouncements' },
				{ id: 'exam', path: 'exam', label: '★ Mock exam', desc: 'Written & MCQ mock exam', star: true },
				{ id: 'practice', path: 'practice', label: 'MCQs', desc: 'Situational MCQ bank' },
				{ id: 'focus', path: 'focus', label: 'Exam focus', desc: 'Most likely PFR questions & ★ items' },
				{ id: 'enumerations', path: 'enumerations', label: 'Enumerations', desc: '48 lists in Recall & Study mode' },
				{ id: 'terms', path: 'terms', label: 'Definitions', desc: '45 terms in Self-test & Study mode' },
				{ id: 'cases', path: 'cases', label: 'Case digests', desc: '25 case digests with self-test' },
				{ id: 'distinctions', path: 'distinctions', label: 'Distinctions', desc: '12 side-by-side comparison tables' },
				{ id: 'mcq', path: 'mcq', label: 'MCQ drill', desc: '100 MCQs & 11 linked chains' },
				{ id: 'problems', path: 'problems', label: 'ALAC problems', desc: '60 scenarios (0–5 rubric)' },
				{ id: 'drill', path: 'drill', label: 'Flashcards', desc: 'Spaced-repetition flashcards' },
				{ id: 'past', path: 'past', label: 'Past exam, checked', desc: 'Past exam items checked against codal' },
				{ id: 'guide', path: 'guide', label: 'Answer guide', desc: 'Scenario order, MCQ tricks & topic spotter' },
				{ id: 'essays', path: 'essays', label: 'Essays', desc: 'ALAC essay workspace' }
			];
		case 'statcon':
			return [
				{ id: 'read', path: 'read', label: 'Study guide', desc: 'Agpalo Chapters I–XI & 5 cases' },
				{ id: 'exam', path: 'exam', label: '★ Mock exam', desc: 'Written mock exam with self-grading', star: true },
				{ id: 'practice', path: 'practice', label: 'MCQs', desc: 'Multiple choice & case recall drill' },
				{ id: 'focus', path: 'focus', label: 'Exam focus', desc: '14 most likely StatCon questions' },
				{ id: 'enumerations', path: 'enumerations', label: 'Enumerations', desc: '48 lists in Recall & Study mode' },
				{ id: 'terms', path: 'terms', label: 'Definitions', desc: '35 terms & 26 Latin maxims' },
				{ id: 'cases', path: 'cases', label: 'Case digests', desc: 'The 5 assigned cases in 4 parts' },
				{ id: 'problems', path: 'problems', label: 'ALAC problems', desc: '24 scenarios (0–5 rubric)' },
				{ id: 'drill', path: 'drill', label: 'Flashcards', desc: 'Flashcards: lists, terms, maxims & cases' },
				{ id: 'rules', path: 'rules', label: 'Rules and traps', desc: 'Chapter rules, limits & examiner traps' },
				{ id: 'guide', path: 'guide', label: 'Answer guide', desc: 'Templates & chapter finder' },
				{ id: 'essays', path: 'essays', label: 'Essays', desc: 'ALAC essay workspace' }
			];
		case 'philo':
			return [
				{ id: 'read', path: 'read', label: 'Study guide', desc: 'Lessons 1–13 & jurisprudence guide' },
				{ id: 'exam', path: 'exam', label: '★ Mock exam', desc: '20 MCQs + 2 essays (incl. ALAC) by default', star: true },
				{ id: 'practice', path: 'practice', label: 'MCQs', desc: '107 MCQs & True/False' },
				{ id: 'focus', path: 'focus', label: 'Exam focus', desc: '14 likely questions & #1 model essay' },
				{ id: 'essays', path: 'essays', label: 'Essays & ALAC', desc: '10 ALAC exams (Ch. 10–13) & 23 4-type essays' },
				{ id: 'enumerations', path: 'enumerations', label: 'Enumerations', desc: '32 lists in Recall & Study mode' },
				{ id: 'terms', path: 'terms', label: 'Definitions', desc: '55 philosophical & doctrinal terms' },
				{ id: 'thinkers', path: 'thinkers', label: 'Thinkers', desc: '52 thinkers by lesson with self-test' },
				{ id: 'cases', path: 'cases', label: 'Case digests', desc: '15 Philippine cases & tensions' },
				{ id: 'compare', path: 'compare', label: 'Differentiate', desc: '4 schools, 20 pairings & 5 stage theories' },
				{ id: 'critiques', path: 'critiques', label: 'Critiques', desc: 'Reusable paragraph & 16 critiques' },
				{ id: 'drill', path: 'drill', label: 'Flashcards', desc: 'Flashcards: lists, terms & cases' },
				{ id: 'guide', path: 'guide', label: 'Answer guide', desc: '5 thinking moves & 4 question formulas' }
			];
		default:
			return [
				{ id: 'read', path: 'read', label: 'Study guide' },
				{ id: 'practice', path: 'practice', label: 'MCQs' },
				{ id: 'essays', path: 'essays', label: 'Essays' }
			];
	}
}

export function activeSubtabId(pathname: string, slug: string): string {
	const prefix = `/module/${slug}/`;
	if (!pathname.startsWith(prefix)) return 'overview';
	const rest = pathname.slice(prefix.length).split('/')[0];
	return rest || 'overview';
}
