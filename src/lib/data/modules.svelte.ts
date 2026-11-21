import type { LawModule, Subject, SubjectCategory } from '$lib/types';
import { canonicalModuleId } from './aliases';

export type SubjectSection = 'all' | 'read' | 'practice' | 'essays' | 'shell';

const single = (m: LawModule, counts?: { mcqCount?: number; essayCount?: number; unitCount?: number }): Subject => ({
	...m,
	mcqCount: m.mcqs.length || counts?.mcqCount,
	essayCount: m.essays.length || counts?.essayCount,
	unitCount: counts?.unitCount ?? m.unitCount,
	sources: m.studyGuideHtml || (m.cases && m.cases.length) ? [m] : [],
	legacyIds: [m.id]
});

function makeShell(
	id: string,
	title: string,
	subjectCategory: SubjectCategory,
	eyebrow: string,
	description: string,
	legalScope: string,
	counts: { mcqCount: number; essayCount: number; unitCount: number },
	legacyIds: string[] = [id]
): Subject {
	return {
		id,
		title,
		subjectCategory,
		eyebrow,
		description,
		legalScope,
		studyGuideHtml: '',
		mcqs: [],
		essays: [],
		cases: [],
		mcqCount: counts.mcqCount,
		essayCount: counts.essayCount,
		unitCount: counts.unitCount,
		sources: [],
		legacyIds
	};
}

/**
 * Lightweight initial metadata shells in dashboard order.
 * Full subject content (`studyGuideHtml`, `mcqs`, `essays`, `cases`) is lazy-loaded per subject
 * and per section via `loadSubject(slug, section)`.
 */
const INITIAL_SHELLS: Subject[] = [
	makeShell(
		'pfr',
		'Persons and Family Relations',
		'Civil Law',
		'Civil Code · Family Code · Case pronouncements',
		'Civil personality, marriage, legal separation, property relations, family home, paternity and filiation, adoption, support, parental authority, emancipation, and absence.',
		'New Civil Code (Preliminary Title & Book I); Family Code of the Philippines (E.O. 209); R.A. 8552 / 11642, 9255, 9858, 9048 / 10172',
		{ mcqCount: 236, essayCount: 127, unitCount: 137 },
		['pfr', 'pfr_cases']
	),
	makeShell(
		'consti1',
		'Constitutional Law I',
		'Political Law',
		'1987 Constitution · Structure of Government',
		'Preliminary concepts, national territory, declaration of principles, citizenship, legislative, executive, judicial departments, constitutional commissions, and accountability of public officers.',
		'1987 Constitution of the Republic of the Philippines, Articles I–II, IV, VI–XI',
		{ mcqCount: 336, essayCount: 166, unitCount: 31 }
	),
	makeShell(
		'crim1',
		'Criminal Law I',
		'Criminal Law',
		'Revised Penal Code · Book One (Arts. 1–113)',
		'Fundamental principles, felonies, circumstances affecting criminal liability, persons criminally liable, penalties, execution and service, extinction of criminal liability, and civil liability.',
		'Act No. 3815 (Revised Penal Code, Book One, Arts. 1–113); R.A. 10951; Act No. 4103 (ISLaw); P.D. 968 / R.A. 10707; R.A. 9344',
		{ mcqCount: 104, essayCount: 86, unitCount: 41 }
	),
	makeShell(
		'crim1_lloren',
		'Criminal Law I (Judge Lloren)',
		'Criminal Law',
		'Judge Lloren Finals Reviewer & ISLaw Guide',
		'Focused quiz and corrected answer key, penalty computation, and Indeterminate Sentence Law (ISLaw) mastery guide.',
		'Revised Penal Code, Book One; Act No. 4103 (Indeterminate Sentence Law)',
		{ mcqCount: 66, essayCount: 16, unitCount: 10 }
	),
	makeShell(
		'crimpro',
		'Criminal Procedure (Rules 110–127)',
		'Remedial Law',
		'Rules 110–127 · Tiu Notes · Situational Reviewer',
		'Prosecution of offenses through appeal and search and seizure: institution and prescription, the civil action, preliminary investigation, arrest, bail, rights of the accused, arraignment, motion to quash, pre-trial, trial, judgment, new trial, appeal, appellate procedure, search warrants and provisional remedies.',
		'Revised Rules of Criminal Procedure, Rules 110–127; BWC Rules (A.M. No. 21-06-08-SC); Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		{ mcqCount: 503, essayCount: 145, unitCount: 276 }
	),
	makeShell(
		'statcon',
		'Statutory Construction',
		'Legal Method',
		'Agpalo · Chapters I–XI · Five Cases',
		'Kinds of statutes, construction and interpretation, aids to construction, literal language, words and phrases; then statutes read as a whole, strict and liberal construction, mandatory and directory statutes, prospective and retroactive laws, amendment and repeal, and constitutional construction.',
		'Agpalo, Statutory Construction, Chapters I–XI; Catiis, Aquino, Manila Lodge, Corona, Magtajas',
		{ mcqCount: 177, essayCount: 69, unitCount: 112 },
		['statcon', 'statcon2']
	),
	makeShell(
		'philo',
		'Philosophy of Law',
		'Legal Method',
		'Lessons 10–13 · Schools of Jurisprudence & Philippine Cases',
		'Historical, positivist, realist, natural-law, and critical schools of jurisprudence, stage theories, and 10 Philippine Supreme Court cases.',
		'Lessons 10–13 Jurisprudence Syllabus & 10 Philippine Supreme Court Decisions',
		{ mcqCount: 10, essayCount: 23, unitCount: 32 }
	)
];

/** Reactive master index in dashboard order. Starts with lightweight shells and populates each slot as subjects load. */
export const modules = $state<Subject[]>([...INITIAL_SHELLS]);

/** Reactive aggregate counts across all modules (accurate immediately before any full subject chunks load). */
export const totals = $state({
	modules: INITIAL_SHELLS.length,
	mcqs: 1432,
	essays: 632,
	cases: 192
});

const fullyLoadedSet = new Set<string>();
const pendingLoads = new Map<string, Promise<Subject | undefined>>();

function recomputeTotals() {
	if (fullyLoadedSet.size < INITIAL_SHELLS.length) return;
	totals.modules = modules.length;
	totals.mcqs = modules.reduce((n, m) => n + m.mcqs.length, 0);
	totals.essays = modules.reduce((n, m) => n + m.essays.length, 0);
	totals.cases = modules.reduce((n, m) => n + (m.cases?.length ?? 0), 0);
}

/**
 * Dynamically loads a subject's data `.ts` module(s) on demand.
 * For large multi-part subjects like `crimpro`, `section` (`'essays' | 'practice' | 'read' | 'all'`)
 * loads ONLY the requested sub-feature chunk(s) so opening ALAC essays does not download MCQs or the study guide.
 */
export async function loadSubject(
	slug: string,
	section: SubjectSection = 'all'
): Promise<Subject | undefined> {
	const id = canonicalModuleId(slug);
	const idx = modules.findIndex((m) => m.id === id);
	const current = idx >= 0 ? modules[idx] : undefined;
	if (!current || section === 'shell') return current;

	if (fullyLoadedSet.has(id)) {
		return current;
	}

	// Section-level lazy loading for Criminal Procedure
	if (id === 'crimpro' && section !== 'all') {
		if (section === 'essays' && current.essays.length > 0) return current;
		if (section === 'practice' && current.mcqs.length > 0) return current;
		if (section === 'read' && current.studyGuideHtml.length > 0) return current;

		const key = `${id}:${section}`;
		const existing = pendingLoads.get(key);
		if (existing) return existing;

		const promise = (async (): Promise<Subject | undefined> => {
			const { crimproShell, loadCrimproEssays, loadCrimproGuide, loadCrimproMcqs } =
				await import('./crimpro');

			if (section === 'essays') {
				const essays = await loadCrimproEssays();
				const latest = modules[idx];
				const updated: Subject = {
					...crimproShell,
					...latest,
					legend: crimproShell.legend,
					studyGuideIntro: crimproShell.studyGuideIntro,
					essays
				};
				modules[idx] = updated;
				return updated;
			}

			if (section === 'practice') {
				const mcqData = await loadCrimproMcqs();
				const latest = modules[idx];
				const updated: Subject = {
					...crimproShell,
					...latest,
					legend: crimproShell.legend,
					studyGuideIntro: crimproShell.studyGuideIntro,
					topics: mcqData.topics,
					watchFor: mcqData.watchFor,
					mcqs: mcqData.mcqs
				};
				modules[idx] = updated;
				return updated;
			}

			if (section === 'read') {
				const studyGuideHtml = await loadCrimproGuide();
				const latest = modules[idx];
				const src: LawModule = {
					...crimproShell,
					...latest,
					legend: crimproShell.legend,
					studyGuideIntro: crimproShell.studyGuideIntro,
					studyGuideHtml
				};
				const updated: Subject = {
					...src,
					mcqCount: latest.mcqCount,
					essayCount: latest.essayCount,
					unitCount: latest.unitCount,
					sources: [src],
					legacyIds: [ID_CRIMPRO]
				};
				modules[idx] = updated;
				return updated;
			}

			return modules[idx];
		})();

		pendingLoads.set(key, promise);
		try {
			return await promise;
		} finally {
			pendingLoads.delete(key);
		}
	}

	const pending = pendingLoads.get(id);
	if (pending) return pending;

	const promise = (async (): Promise<Subject | undefined> => {
		const counts = {
			mcqCount: current.mcqCount,
			essayCount: current.essayCount,
			unitCount: current.unitCount
		};
		let built: Subject | undefined;
		switch (id) {
			case 'pfr': {
				const [{ pfr }, { pfrCases }] = await Promise.all([
					import('./pfr'),
					import('./pfr_cases')
				]);
				built = {
					...pfr,
					...counts,
					eyebrow: 'Civil Code · Family Code · Case pronouncements',
					description: `${pfr.description} The ${pfrCases.cases?.length ?? 0} case pronouncements follow the syllabus order and sit in the same guide.`,
					legalScope: `${pfr.legalScope} · ${pfrCases.legalScope}`,
					studyGuideHtml: '',
					cases: [...(pfr.cases ?? []), ...(pfrCases.cases ?? [])],
					sources: [pfr, pfrCases],
					legacyIds: [pfr.id, pfrCases.id]
				};
				break;
			}
			case 'consti1': {
				const { consti1 } = await import('./consti1');
				built = single(consti1, counts);
				break;
			}
			case 'crim1': {
				const { crim1 } = await import('./crim1');
				built = single(crim1, counts);
				break;
			}
			case 'crim1_lloren': {
				const { crim1Lloren } = await import('./crim1_lloren');
				built = single(crim1Lloren, counts);
				break;
			}
			case 'crimpro': {
				const { loadCrimproFull } = await import('./crimpro');
				const crimpro = await loadCrimproFull();
				built = single(crimpro, counts);
				break;
			}
			case 'statcon': {
				const [{ statcon }, { statcon2 }] = await Promise.all([
					import('./statcon'),
					import('./statcon2')
				]);
				built = {
					...statcon,
					...counts,
					eyebrow: 'Agpalo · Chapters I–XI · Five Cases',
					description:
						'Kinds of statutes, construction and interpretation, aids to construction, literal language, words and phrases; then statutes read as a whole, strict and liberal construction, mandatory and directory statutes, prospective and retroactive laws, amendment and repeal, and constitutional construction, with the five assigned cases.',
					legalScope:
						'Agpalo, Statutory Construction, Chapters I–XI; Catiis, Aquino, Manila Lodge, Corona, Magtajas',
					studyGuideIntro:
						'Agpalo in order: Chapters I–V, then Chapters VI–XI (each in the same thirteen parts, from overview to mastery checklist), the five assigned cases, and the review material for both halves.',
					topics: [
						...(statcon.topics ?? []).map((t, i) => ({
							...t,
							name: `Ch. ${['I', 'II', 'III', 'IV', 'V'][i] ?? i + 1} — ${t.name}`
						})),
						...(statcon2.topics ?? [])
					],
					studyGuideHtml: '',
					watchFor: { ...statcon.watchFor, ...statcon2.watchFor },
					mcqs: [...statcon.mcqs, ...statcon2.mcqs],
					essays: [...statcon.essays, ...statcon2.essays],
					cases: [...(statcon.cases ?? []), ...(statcon2.cases ?? [])],
					sources: [statcon, statcon2],
					legacyIds: [statcon.id, statcon2.id]
				};
				break;
			}
			case 'philo': {
				const { philo } = await import('./philo');
				built = single(philo, counts);
				break;
			}
		}

		if (built) {
			modules[idx] = built;
			fullyLoadedSet.add(id);
			recomputeTotals();
		}
		return built;
	})();

	pendingLoads.set(id, promise);
	try {
		return await promise;
	} finally {
		pendingLoads.delete(id);
	}
}

const ID_CRIMPRO = 'crimpro';

/** Loads all subjects in parallel (used for Saved items and cross-subject Search). */
export async function loadAllSubjects(): Promise<void> {
	await Promise.all(INITIAL_SHELLS.map((s) => loadSubject(s.id, 'all')));
}

/** Number of subjects whose full data has been loaded so far. */
export function loadedSubjectCount(): number {
	return fullyLoadedSet.size;
}

/** Looks a subject up by slug, accepting the old slugs of merged subjects (`statcon2`, `pfr_cases`). */
export function getModule(slug: string): Subject | undefined {
	if (!slug) return undefined;
	const id = canonicalModuleId(slug);
	return modules.find((m) => m.id === id);
}

/** The subject a saved question, essay, case or highlight id belongs to (`<moduleId>:…`). */
export function subjectForItem(itemId: string): Subject | undefined {
	return getModule(itemId.split(':')[0]);
}

export type CategoryFilter =
	| 'All'
	| 'Civil Law'
	| 'Political Law'
	| 'Criminal Law'
	| 'Remedial Law'
	| 'Legal Method';
export const CATEGORY_FILTERS: CategoryFilter[] = [
	'All',
	'Civil Law',
	'Political Law',
	'Criminal Law',
	'Remedial Law',
	'Legal Method'
];

/** The supplement category is kept in the type for old data; it filters under Civil Law. */
export function matchesCategory(category: SubjectCategory, filter: CategoryFilter) {
	return (
		filter === 'All' ||
		category === filter ||
		(filter === 'Civil Law' && category === 'Civil Law — Supplement')
	);
}

/** Accent color token per category, resolved to CSS variables in app.css. */
export const CATEGORY_ACCENT: Record<
	SubjectCategory,
	'blue' | 'purple' | 'red' | 'orange' | 'green'
> = {
	'Civil Law': 'blue',
	'Civil Law — Supplement': 'blue',
	'Political Law': 'purple',
	'Criminal Law': 'red',
	'Remedial Law': 'orange',
	'Legal Method': 'green'
};
