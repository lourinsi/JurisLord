/** A multiple-choice question as shown everywhere in the app (Crim Pro twists, PFR drills, mock exams). */
export interface Mcq {
	q: string;
	o: string[];
	/** Index into `o` of the correct choice. */
	a: number;
	/** Exact text of the correct choice (matches `o[a]`). Drives dynamic option ordering & grading. */
	key?: string;
	/** Explanation shown after answering. */
	ex: string;
	/** Authoritative legal basis (articles, rules, statutes, jurisprudence, treatises). */
	lb?: string;
	/** Why each choice is wrong, by index into `o` (empty for the correct choice). */
	why: string[];
}

export type KeyedMcqLike =
	| { options: readonly string[]; correctIndex: number; key?: string }
	| { o: readonly string[]; a: number; key?: string };

/**
 * Resolves the index of the correct option dynamically from `key` (exact choice text),
 * falling back to `correctIndex` / `a` when `key` is absent or unmatched.
 */
export function resolveCorrectIndex(q: KeyedMcqLike): number {
	const opts = 'options' in q ? q.options : q.o;
	const fallback = 'correctIndex' in q ? q.correctIndex : q.a;
	if (typeof q.key === 'string' && q.key.length > 0) {
		if (opts[fallback] === q.key) return fallback;
		const idx = opts.indexOf(q.key);
		if (idx !== -1) return idx;
	}
	return fallback;
}

/** Returns the exact text of the correct option (`key` if present, otherwise the option at `resolveCorrectIndex`). */
export function resolveCorrectKey(q: KeyedMcqLike): string {
	const opts = 'options' in q ? q.options : q.o;
	if (typeof q.key === 'string' && q.key.length > 0) return q.key;
	return opts[resolveCorrectIndex(q)] ?? '';
}

/** Matches options that point to other options by letter (e.g. "Both B and C", "a and b are true"). */
const LETTER_REF_RE =
	/\b(?:both|either|neither|only)\s+\(?[A-G]\)?\s+(?:and|or|nor)\s+\(?[A-G]\)?\b|\b[a-c](?:,\s*[a-c],?)?\s+and\s+[a-c]\s+are\s+true\b|\b[a-c]\s+is\s+true\b|\boption\s+[A-G]\b/i;

/** Matches positional summary options that should stay pinned at the bottom ("None of the above", "All of the choices"). */
const POSITIONAL_LAST_RE =
	/^(?:none|all)\s+of\s+the\s+(?:above|choices|foregoing|options)\b|^none\.?$/i;

/**
 * Whether a question's choices may be dynamically shuffled.
 * False for 2-choice True/False items or when a choice points at other choices by letter
 * ("Both B and C are correct", "a and b are true"), because moving those choices would break letter references.
 * Questions whose only positional option is "None of the above" / "All of the above" still shuffle the remaining
 * choices above it while pinning the summary option at the end.
 */
export function canShuffle(q: Pick<Mcq, 'o'> | { options: readonly string[] }): boolean {
	const opts = 'o' in q ? q.o : q.options;
	if (opts.length <= 2) return false;
	if (opts.some((o) => LETTER_REF_RE.test(o))) return false;
	const movableCount = opts.filter((o) => !POSITIONAL_LAST_RE.test(o.trim())).length;
	return movableCount >= 2;
}

function fisherYates<T>(items: T[], rand: () => number): T[] {
	for (let i = items.length - 1; i > 0; i--) {
		const j = Math.floor(rand() * (i + 1));
		[items[i], items[j]] = [items[j], items[i]];
	}
	return items;
}

/**
 * Builds a dynamic display order (array of original option indices) for an MCQ's choices.
 * - Keeps `[0, ..., n-1]` for True/False (`<= 2` options) and letter-referencing choices (`Both B and C`, `a and b are true`).
 * - Pins positional summary choices (`None of the above`, `None of the choices`, `All of the above`) at the bottom
 *   while shuffling all other options above them.
 * - Shuffles all options randomly using `rand` (defaults to `Math.random`).
 * - When `avoid` is provided (e.g. on Retry / Retake), retries a few times to avoid repeating the exact prior order.
 */
export function dynamicOptionOrder(
	options: readonly string[],
	rand: () => number = Math.random,
	avoid?: readonly number[]
): number[] {
	const identity = options.map((_, i) => i);
	if (!canShuffle({ options })) return identity;

	const movable: number[] = [];
	const pinned: number[] = [];
	options.forEach((opt, idx) => {
		if (POSITIONAL_LAST_RE.test(opt.trim())) pinned.push(idx);
		else movable.push(idx);
	});

	const build = () => [...fisherYates([...movable], rand), ...pinned];
	let order = build();
	if (avoid && avoid.length === order.length && movable.length >= 2) {
		for (let tries = 0; tries < 6 && order.every((v, i) => v === avoid[i]); tries++) {
			order = build();
		}
	}
	return order;
}
