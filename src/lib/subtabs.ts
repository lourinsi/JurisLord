import { CRIMLAW } from './crimlaw';
import { PFR } from './pfr';
import { STATCON } from './statcon';
import { PHILO } from './philo';
import type { Kit } from './kit';

export interface SubtabItem {
	id: string;
	path: string;
	label: string;
	desc?: string;
	star?: boolean;
}

export function kitForSubject(slug: string): Kit | undefined {
	if (slug === 'crim1' || slug === 'crim1_lloren') return { ...CRIMLAW, base: `/module/${slug}` };
	if (slug === 'pfr') return PFR;
	if (slug === 'statcon') return STATCON;
	if (slug === 'philo') return PHILO;
	return undefined;
}

export function subtabsForSubject(slug: string): SubtabItem[] {
	switch (slug) {
		case 'consti1':
			return [
				{ id: 'read', path: 'read', label: 'Study guide', desc: '1987 Constitution full guide' },
				{ id: 'exam', path: 'exam', label: '★ Mock exam', desc: 'Timed mock exam & self-grading', star: true },
				{ id: 'practice', path: 'practice', label: 'MCQs', desc: 'Multiple choice & timed practice' },
				{ id: 'focus', path: 'focus', label: 'Exam focus', desc: '15 most likely questions & ★ cases' },
				{ id: 'numbers', path: 'numbers', label: 'Numbers', desc: 'Numbers to memorize (self-test)' },
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
				{ id: 'numbers', path: 'numbers', label: 'Numbers', desc: 'Penalties, fines, periods & prescription' },
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
				{ id: 'numbers', path: 'numbers', label: 'Numbers', desc: 'Numbers & deadlines to memorize' },
				{ id: 'requisites', path: 'requisites', label: 'Requisites', desc: '47 Q&A requisites & rules drill (self-test)' },
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
				{ id: 'numbers', path: 'numbers', label: 'Numbers', desc: 'Periods, amounts & ages to memorize' },
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
				{ id: 'numbers', path: 'numbers', label: 'Numbers', desc: 'Periods, dates & ★ list counts' },
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
				{ id: 'read', path: 'read', label: 'Study guide', desc: 'Lessons 10–13 & jurisprudence guide' },
				{ id: 'exam', path: 'exam', label: '★ Mock exam', desc: '40-minute 4-essay mock exam', star: true },
				{ id: 'practice', path: 'practice', label: 'MCQs', desc: 'Multiple choice check' },
				{ id: 'focus', path: 'focus', label: 'Exam focus', desc: '14 likely questions & #1 model essay' },
				{ id: 'enumerations', path: 'enumerations', label: 'Enumerations', desc: '16 lists in Recall & Study mode' },
				{ id: 'essays', path: 'essays', label: 'Essay practice', desc: 'Define, differentiate, critique & opinion' },
				{ id: 'terms', path: 'terms', label: 'Definitions', desc: '31 philosophical & doctrinal terms' },
				{ id: 'thinkers', path: 'thinkers', label: 'Thinkers', desc: '24 thinkers by lesson with self-test' },
				{ id: 'cases', path: 'cases', label: 'Case digests', desc: '10 Philippine cases & tensions' },
				{ id: 'compare', path: 'compare', label: 'Differentiate', desc: '4 schools, 15 pairings & 5 stage theories' },
				{ id: 'critiques', path: 'critiques', label: 'Critiques', desc: 'Reusable paragraph & 14 critiques' },
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
