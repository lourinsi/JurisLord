import { loadSubject } from '$lib/data/modules';
import { loadKitForSubject } from '$lib/kit-registry.svelte';
import { loadNumbersForSubject } from '$lib/numbers-registry';
import { loadRequisitesForSubject } from '$lib/requisites';
import { KIT_SUBTAB_PATHS, activeSubtabId } from '$lib/subtabs';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params, url }) => {
	const slug = params.slug;
	const subtab = activeSubtabId(url.pathname, slug);
	const tasks: Promise<unknown>[] = [];

	if (subtab === 'overview') {
		tasks.push(loadSubject(slug, 'all'));
	} else if (subtab === 'read') {
		tasks.push(loadSubject(slug, 'read'));
	} else if (subtab === 'practice') {
		tasks.push(loadSubject(slug, 'practice'));
	} else if (subtab === 'essays') {
		if (slug === 'philo') {
			tasks.push(loadKitForSubject(slug));
		} else {
			tasks.push(loadSubject(slug, 'essays'));
		}
	} else if (subtab === 'numbers') {
		tasks.push(loadNumbersForSubject(slug));
	} else if (subtab === 'requisites') {
		tasks.push(loadRequisitesForSubject(slug));
	} else if (KIT_SUBTAB_PATHS.has(subtab) || subtab === 'twists' || subtab === 'flips') {
		tasks.push(loadKitForSubject(slug));
		if (subtab === 'exam' && slug === 'consti1') {
			tasks.push(loadSubject(slug, 'practice'));
		}
	} else {
		tasks.push(loadSubject(slug, 'all'));
	}

	await Promise.all(tasks);
	return {};
};
