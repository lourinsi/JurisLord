<script lang="ts">
	import Mascot from './Mascot.svelte';

	const browser = typeof window !== 'undefined';

	/** Bump the version to show the notice again to everyone (e.g. when the wording changes). */
	const KEY = 'alac-consti:disclaimer:v1';

	let { open = $bindable(false) }: { open?: boolean } = $props();
	let dialog: HTMLDialogElement | undefined = $state();

	function nextMidnightMs(): number {
		const now = new Date();
		return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0).getTime();
	}

	function seen(): boolean {
		if (!browser) return true;
		try {
			const raw = localStorage.getItem(KEY);
			if (!raw) return false;
			const parsed = JSON.parse(raw) as { expiresAt?: number };
			if (typeof parsed.expiresAt === 'number' && Date.now() < parsed.expiresAt) {
				return true;
			}
			localStorage.removeItem(KEY);
		} catch {
			/* invalid or legacy value */
		}
		return false;
	}

	function accept() {
		try {
			localStorage.setItem(KEY, JSON.stringify({ expiresAt: nextMidnightMs() }));
		} catch {
			/* private mode: it will simply show again next visit */
		}
		open = false;
	}

	$effect(() => {
		if (!seen()) open = true;
	});

	$effect(() => {
		if (!dialog) return;
		if (open && !dialog.open) dialog.showModal();
		else if (!open && dialog.open) dialog.close();
	});
</script>

<dialog
	bind:this={dialog}
	aria-labelledby="disc-title"
	aria-describedby="disc-body"
	oncancel={(e) => {
		if (!seen()) e.preventDefault();
		else open = false;
	}}
	onclose={() => (open = false)}
	class="m-auto w-[min(31rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-0 text-foreground shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-[2px] dark:border-[#2B434E]"
>
	<div class="h-2.5 w-full bg-[#1CB0F6]"></div>
	<div class="flex flex-col gap-3.5 p-6">
		<div class="flex items-center gap-3.5">
			<Mascot size={52} />
			<h2 id="disc-title" class="font-brand text-xl font-extrabold">Hoot hoot! Before you start</h2>
		</div>
		<div id="disc-body" class="space-y-2.5 text-sm leading-relaxed font-semibold">
			<p>
				<b>The review material and the model answers in this app are AI-generated.</b> They may contain mistakes, outdated
				doctrine, misquoted provisions, or wrong case citations.
			</p>
			<ul class="list-disc space-y-1.5 pl-5 text-muted-foreground">
				<li>Treat them as a study aid, not as legal authority or legal advice.</li>
				<li>Verify every rule, article, and case against the Constitution, the Rules of Court, the decisions themselves, and your professor's materials.</li>
				<li>If your professor's view differs from the model answer, follow your professor.</li>
				<li>Your own answers, self-scores, and drill scores are saved only in this browser. The app counts visits anonymously (no cookies, no personal data), and never sends your answers.</li>
			</ul>
		</div>
		<p class="rounded-2xl border-2 border-[#E5B400]/50 bg-[#FFF5CC] px-3.5 py-2.5 text-sm leading-relaxed font-semibold text-slate-900 dark:border-[#FFC800]/40 dark:bg-[#FFC800]/15 dark:text-slate-100">
			<b>Best way to use this app:</b> start with each subject's <b>★ Exam focus</b>, then keep pressing
			<b>Random problem</b>. On the exam, you won't know which question is coming, so don't study the problems in order.
			See <b>Exam day</b> for the go-blank routine.
		</p>
		<div class="mt-1 flex justify-end">
			<button
				type="button"
				onclick={accept}
				class="inline-flex h-11 cursor-pointer items-center justify-center rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-6 text-sm font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#4EB802] active:border-b-2 active:translate-y-0.5"
			>
				I understand
			</button>
		</div>
	</div>
</dialog>
