<script lang="ts">
	import { Menu, PanelLeft, X } from '@lucide/svelte';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { page } from '$app/state';
	import SubjectNav from '$lib/components/shell/SubjectNav.svelte';
	import { getModule } from '$lib/data/modules';
	import { getPart } from '$lib/content';
	import { prefs } from '$lib/stores/prefs.svelte';
	import { ui } from '$lib/stores/ui.svelte';

	let { children } = $props();

	const subject = $derived(getModule(page.params.slug ?? '')!);
	const mode = $derived<'read' | 'practice' | 'essays' | 'subtab'>(
		page.url.pathname.includes('/practice')
			? 'practice'
			: page.url.pathname.includes('/essays')
				? 'essays'
				: page.url.pathname.includes('/read')
					? 'read'
					: 'subtab'
	);
	const part = $derived(page.params.part ? getPart(subject, decodeURIComponent(page.params.part)) : undefined);
	const where = $derived(mode === 'practice' ? 'MCQ practice' : mode === 'essays' ? 'ALAC essays' : part ? part.label || part.title : 'Study tools');
	const showNav = $derived(!prefs.value.navCollapsed && !ui.focusMode);

	// Close the phone sheet whenever the page changes.
	$effect(() => {
		void page.url.href;
		ui.navOpen = false;
	});
</script>

<div class="flex min-h-[calc(100dvh-var(--header-h))] items-stretch">
	{#if showNav}
		<aside aria-label="Subject navigator" class="no-print sticky top-(--header-h) h-[calc(100dvh-var(--header-h))] w-(--nav-w) shrink-0 overflow-y-auto overscroll-contain border-r-2 border-slate-200 bg-card px-3.5 pt-4 pb-10 max-lg:hidden dark:border-[#2B434E]">
			<SubjectNav {subject} {mode} />
		</aside>
	{/if}

	<div class="flex min-w-0 flex-1 flex-col">
		<!-- Phones and tablets: the navigator lives in a sheet behind this bar. -->
		<div class="no-print sticky top-(--header-h) z-30 flex h-13 items-center gap-2.5 border-b-2 border-slate-200 bg-background/95 px-3 backdrop-blur lg:hidden dark:border-[#2B434E]" class:hidden={ui.focusMode}>
			<button type="button" onclick={() => (ui.navOpen = true)} class="inline-flex h-9 items-center gap-2 rounded-xl border-2 border-b-3 border-slate-200 bg-white px-3 text-xs font-extrabold tracking-wide uppercase dark:border-[#2B434E] dark:bg-[#1A2C34]">
				<Menu class="size-4" /> Contents
			</button>
			<span class="min-w-0 flex-1 truncate text-sm font-bold text-muted-foreground">{subject.title} · <span class="font-extrabold text-foreground">{where}</span></span>
		</div>
		{#if prefs.value.navCollapsed && !ui.focusMode}
			<button
				type="button"
				onclick={() => prefs.set('navCollapsed', false)}
				class="no-print fixed top-[calc(var(--header-h)+0.75rem)] left-3 z-30 inline-flex h-10 items-center gap-2 rounded-2xl border-2 border-b-4 border-slate-200 bg-card px-3.5 text-xs font-extrabold tracking-wide uppercase shadow-sm max-lg:hidden dark:border-[#2B434E]"
				aria-label="Show navigator"
			>
				<PanelLeft class="size-4" /> Contents
			</button>
		{/if}
		<div class="flex-1">
			{@render children()}
		</div>
		<footer class="no-print px-4 pt-2 pb-6 text-center text-[0.6875rem] font-medium tracking-wide text-muted-foreground/55 select-none">
			amended by lourinsi · original code from serocode
		</footer>
	</div>
</div>

<DialogPrimitive.Root bind:open={ui.navOpen}>
	<DialogPrimitive.Portal>
		<DialogPrimitive.Overlay class="fixed inset-0 z-50 bg-black/40" />
		<DialogPrimitive.Content class="fixed inset-y-0 left-0 z-50 w-[min(22rem,90vw)] overflow-y-auto border-r bg-background p-3 pb-10 shadow-xl outline-none">
			<div class="mb-3 flex items-center justify-between">
				<DialogPrimitive.Title class="px-1 text-sm font-semibold">Contents</DialogPrimitive.Title>
				<DialogPrimitive.Close class="grid size-10 place-items-center rounded-lg text-muted-foreground hover:bg-muted" aria-label="Close contents"><X class="size-5" /></DialogPrimitive.Close>
			</div>
			<SubjectNav {subject} {mode} collapsible={false} onnavigate={() => (ui.navOpen = false)} />
		</DialogPrimitive.Content>
	</DialogPrimitive.Portal>
</DialogPrimitive.Root>
