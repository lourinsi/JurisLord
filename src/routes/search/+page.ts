import { loadAllSubjects } from '$lib/data/modules';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	await loadAllSubjects();
	return {};
};
