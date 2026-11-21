/** App-wide interface state that isn't saved: the search palette, the mobile navigator, toasts, focus mode. */

export interface Toast {
	id: number;
	message: string;
	tone: 'default' | 'error';
	action?: { label: string; run: () => void };
}

const LLOREN_UNLOCKED_KEY = 'juris_lloren_unlocked';

function nextMidnightMs(): number {
	const now = new Date();
	return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0).getTime();
}

function readDailyFlag(key: string): boolean {
	if (typeof localStorage === 'undefined') return false;
	try {
		const raw = localStorage.getItem(key);
		if (!raw) return false;
		const parsed = JSON.parse(raw) as { expiresAt?: number };
		if (typeof parsed.expiresAt === 'number' && Date.now() < parsed.expiresAt) {
			return true;
		}
		localStorage.removeItem(key);
	} catch {
		localStorage.removeItem(key);
	}
	return false;
}

function writeDailyFlag(key: string, value: boolean): void {
	if (typeof localStorage === 'undefined') return;
	try {
		if (value) {
			localStorage.setItem(key, JSON.stringify({ expiresAt: nextMidnightMs() }));
		} else {
			localStorage.removeItem(key);
		}
	} catch {
		// Ignore storage quota / privacy mode errors
	}
}

class UiStore {
	searchOpen = $state(false);
	/** Text to start the palette with (from "/" or a "Search Rule 110" button). */
	searchSeed = $state('');
	/** Scope the palette opens with: a subject id, `subject:part`, or '' for everything. */
	searchScope = $state('');
	navOpen = $state(false);
	/** Whether the initial "Hear ye, my Lord! Before thy quest begins" disclaimer modal is currently open. */
	disclaimerOpen = $state(false);
	/** An exam in progress hides the navigator so nothing competes with the questions. */
	focusMode = $state(false);
	/** Whether the user has entered the password ("UFAKMAIWAYP") to access `/module/crim1_lloren` (persists until 12am). */
	#llorenUnlocked = $state(readDailyFlag(LLOREN_UNLOCKED_KEY));
	toasts = $state<Toast[]>([]);
	#next = 1;

	constructor() {
		if (typeof window !== 'undefined') {
			this.#scheduleMidnightReset();
		}
	}

	#scheduleMidnightReset() {
		const msUntilMidnight = Math.max(1000, nextMidnightMs() - Date.now());
		setTimeout(() => {
			this.llorenUnlocked = false;
			this.#scheduleMidnightReset();
		}, msUntilMidnight);
	}

	get llorenUnlocked() {
		return this.#llorenUnlocked;
	}

	set llorenUnlocked(v: boolean) {
		this.#llorenUnlocked = v;
		writeDailyFlag(LLOREN_UNLOCKED_KEY, v);
	}

	openSearch(seed = '', scope = '') {
		this.searchSeed = seed;
		this.searchScope = scope;
		this.searchOpen = true;
	}

	toast(message: string, opts: { tone?: Toast['tone']; action?: Toast['action']; ms?: number } = {}) {
		const id = this.#next++;
		this.toasts = [...this.toasts, { id, message, tone: opts.tone ?? 'default', action: opts.action }];
		setTimeout(() => this.dismiss(id), opts.ms ?? 4500);
	}

	dismiss(id: number) {
		this.toasts = this.toasts.filter((t) => t.id !== id);
	}
}

export const ui = new UiStore();
