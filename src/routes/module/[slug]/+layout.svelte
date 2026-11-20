<script lang="ts">
	import { ArrowLeft, Lock } from '@lucide/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import SubjectSubtabs from '$lib/components/shell/SubjectSubtabs.svelte';
	import SubjectEntryModal from '$lib/components/SubjectEntryModal.svelte';
	import { getModule } from '$lib/data/modules';
	import { prefs } from '$lib/stores/prefs.svelte';
	import { ui } from '$lib/stores/ui.svelte';

	let { children } = $props();

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug));

	let passwordInput = $state('');
	let passwordError = $state(false);
	let promptedSubjectId = $state('');
	let showEntryModal = $state(false);

	$effect(() => {
		if (!subject || subject.id !== slug) return;
		if (slug === 'crim1_lloren' && !ui.llorenUnlocked) return;
		if (promptedSubjectId === subject.id) return;
		promptedSubjectId = subject.id;
		const params = page.url.searchParams;
		if (!prefs.value.showSubjectEntryModal || params.get('autostart') === '1' || params.get('setup') === '1') {
			showEntryModal = false;
			return;
		}
		showEntryModal = true;
	});

	function submitPassword(e: SubmitEvent) {
		e.preventDefault();
		if (passwordInput.trim().toUpperCase() === 'UFAKMAIWAYP') {
			ui.llorenUnlocked = true;
			passwordError = false;
			passwordInput = '';
		} else {
			passwordError = true;
		}
	}

	// Old slugs of merged subjects (/module/statcon2, /module/pfr_cases) move to the subject they are part of.
	$effect(() => {
		if (subject && subject.id !== slug) {
			const url = new URL(page.url.href);
			url.pathname = url.pathname.replace(`/module/${slug}`, `/module/${subject.id}`);
			goto(url, { replace: true });
		}
	});
</script>

<svelte:head>
	{#if !subject}<title>Subject not found — Juris Lord</title>{/if}
</svelte:head>

{#if !subject}
	<div class="mx-auto max-w-md space-y-4 px-4 py-20 text-center">
		<h1 class="font-heading text-2xl font-semibold">Subject not found</h1>
		<p class="text-muted-foreground">There's no subject called “{slug}”.</p>
		<Button href="/"><ArrowLeft /> Back home</Button>
	</div>
{:else if slug === 'crim1_lloren' && !ui.llorenUnlocked}
	<div class="mx-auto flex max-w-md flex-col items-center gap-5 px-4 py-20 text-center">
		<div class="grid size-14 place-items-center rounded-2xl border-2 border-[#EA2B2B] border-b-4 bg-[#FF4B4B] text-white shadow-sm">
			<Lock class="size-7" strokeWidth={2.5} />
		</div>
		<div class="space-y-1.5">
			<p class="label-caps text-[#EA2B2B] dark:text-[#FF6B6B]">Restricted Module</p>
			<h1 class="font-heading text-2xl font-extrabold">{subject.title}</h1>
			<p class="text-sm font-semibold text-muted-foreground">
				Enter the access password to unlock this study module.
			</p>
		</div>
		<form onsubmit={submitPassword} class="flex w-full flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-6 dark:border-[#2B434E]">
			<input
				type="password"
				bind:value={passwordInput}
				oninput={() => (passwordError = false)}
				placeholder="Enter password…"
				aria-label="Module password"
				autofocus
				class="h-11 w-full rounded-xl border-2 border-slate-200 bg-background px-4 text-center font-mono text-sm font-bold tracking-widest uppercase outline-none focus:border-[#1CB0F6] dark:border-[#2B434E]"
			/>
			{#if passwordError}
				<p class="text-xs font-extrabold text-[#EA2B2B] dark:text-[#FF6B6B]">
					Incorrect password. Please try again.
				</p>
			{/if}
			<button
				type="submit"
				class="inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-5 text-xs font-extrabold tracking-wide text-white uppercase transition-all hover:bg-[#4EB802] active:translate-y-0.5 active:border-b-2"
			>
				Unlock Module
			</button>
		</form>
		<Button variant="ghost" href="/"><ArrowLeft class="size-4" /> Back home</Button>
	</div>
{:else if subject.id === slug}
	{#if subject.id === 'crim1_lloren' && page.url.pathname.startsWith('/module/crim1_lloren/practice')}
		<div
			aria-hidden="true"
			class="pointer-events-none fixed inset-0 z-30 flex items-center justify-center overflow-hidden select-none"
		>
			<div class="-rotate-45 flex flex-col items-center gap-48 text-center font-sans font-black tracking-wider uppercase whitespace-nowrap text-rose-600/12 dark:text-rose-400/12">
				<span class="text-[clamp(1.75rem,5vw,4.5rem)]">DO NOT DISTRIBUTE!!! 1LA 26-27'</span>
				<span class="text-[clamp(1.75rem,5vw,4.5rem)]">DO NOT DISTRIBUTE!!! 1LA 26-27'</span>
				<span class="text-[clamp(1.75rem,5vw,4.5rem)]">DO NOT DISTRIBUTE!!! 1LA 26-27'</span>
			</div>
		</div>
	{/if}
	<SubjectSubtabs slug={subject.id} />
	{@render children()}
	<SubjectEntryModal {subject} bind:open={showEntryModal} />
{/if}
