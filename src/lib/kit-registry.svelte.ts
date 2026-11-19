import type { Kit } from './kit';

const loadedKits = $state<Record<string, Kit>>({});
const pendingKits = new Map<string, Promise<Kit | undefined>>();

/**
 * Dynamically loads the Kit data for a single subject slug on demand.
 * Each subject's kit JSON is split into its own Vite chunk and only downloaded when needed.
 */
export async function loadKitForSubject(slug: string): Promise<Kit | undefined> {
	if (loadedKits[slug]) return loadedKits[slug];
	const existing = pendingKits.get(slug);
	if (existing) return existing;

	const promise = (async (): Promise<Kit | undefined> => {
		switch (slug) {
			case 'crim1':
			case 'crim1_lloren': {
				const { CRIMLAW } = await import('./crimlaw');
				const kit: Kit = { ...CRIMLAW, base: `/module/${slug}` };
				loadedKits[slug] = kit;
				return kit;
			}
			case 'pfr': {
				const { PFR } = await import('./pfr');
				loadedKits.pfr = PFR;
				return PFR;
			}
			case 'statcon': {
				const { STATCON } = await import('./statcon');
				loadedKits.statcon = STATCON;
				return STATCON;
			}
			case 'philo': {
				const { PHILO } = await import('./philo');
				loadedKits.philo = PHILO;
				return PHILO;
			}
			default:
				return undefined;
		}
	})();

	pendingKits.set(slug, promise);
	try {
		return await promise;
	} finally {
		pendingKits.delete(slug);
	}
}

/**
 * Synchronous reactive reader for a subject's Kit (populated by `+layout.ts` before kit routes render,
 * or kicks off a background load if called before preloading).
 */
export function kitForSubject(slug: string): Kit | undefined {
	if (!loadedKits[slug]) {
		void loadKitForSubject(slug);
	}
	return loadedKits[slug];
}
