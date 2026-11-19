export interface RequisiteItem {
	num: number;
	/** Standalone question / legal trigger displayed in the "What it is for" column. */
	question: string;
	/**
	 * Answer shown in the "Requisites" column.
	 * - Single item (`answers.length === 1`): renders as a concise 1-word / short-phrase answer.
	 * - Multiple items (`answers.length > 1`): renders as a numbered enumeration (1., 2., 3., ...).
	 */
	answers: string[];
	/** Optional callout label in "What it is for" (e.g. "Fatal Flaw", "Effect", "Ceiling"). */
	noteLabel?: string;
	/** Detailed explanation/caveat displayed under "What it is for" — hidden while blurred in self-test mode. */
	note?: string;
	source: string;
}

export interface RequisiteTopic {
	id: string;
	num: number;
	title: string;
	shortTitle: string;
	items: RequisiteItem[];
}

export interface SubjectRequisitesConfig {
	title: string;
	desc: string;
	intro: string;
	topics: readonly RequisiteTopic[];
}

/**
 * Dynamically loads a subject's Requisites dataset on demand when `/module/[slug]/requisites` is opened.
 */
export async function loadRequisitesForSubject(
	slug: string
): Promise<SubjectRequisitesConfig | undefined> {
	switch (slug) {
		case 'crimpro': {
			const { CRIMPRO_REQUISITE_TOPICS } = await import('./crimpro-requisites');
			return {
				title: 'CrimPro Finals Requisites Drill',
				desc: '47 Q&A requisites & rules drill (self-test)',
				intro:
					'Hide the requisites and test yourself across all five exam topics. Tap any blurred answer to reveal the requisites and notes, or switch to Shuffled drill to recite them out of order.',
				topics: CRIMPRO_REQUISITE_TOPICS
			};
		}
		default:
			return undefined;
	}
}
