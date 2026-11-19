import { loadSubject } from '$lib/data/modules';
import { loadKitForSubject } from '$lib/kit-registry.svelte';
import { loadNumbersForSubject } from '$lib/numbers-registry';
import { loadRequisitesForSubject } from '$lib/requisites';
import type { PageLoad } from './$types';

/**
 * Dynamically loads all available assessment pools for the active subject's Mock Exam:
 * MCQs, ALAC essays, Kit (enumerations/definitions/problems/kit MCQs), Numbers, and Requisites.
 * Skips heavy study guide HTML (such as CrimPro's 18-rule study guide) and never loads other subjects.
 */
export const load: PageLoad = async ({ params }) => {
	const slug = params.slug;
	const [, , kit, numbers, requisites, constiMod, philoMod] = await Promise.all([
		loadSubject(slug, 'practice'),
		loadSubject(slug, 'essays'),
		loadKitForSubject(slug),
		loadNumbersForSubject(slug),
		loadRequisitesForSubject(slug),
		slug === 'consti1' ? import('$lib/problems') : Promise.resolve(undefined),
		slug === 'philo' ? import('$lib/philo') : Promise.resolve(undefined)
	]);

	return {
		kit,
		numbers,
		requisites,
		constiProblems: constiMod?.PROBLEMS,
		philoEssays: philoMod?.ESSAYS
	};
};
