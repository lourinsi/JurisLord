<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import DrillView from '$lib/components/kit/DrillView.svelte';
	import { getModule } from '$lib/data/modules';
	import { kitForSubject } from '$lib/subtabs';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);
	const kit = $derived(kitForSubject(slug));
</script>

<svelte:head><title>Flashcards — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'Flashcards' }]} />
	<header class="flex flex-col gap-1.5">
		<p class="label-caps">Spaced repetition recall</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">Flashcards</h1>
	</header>
	{#if kit}
		{#key kit.id}<DrillView {kit} />{/key}
	{/if}
</div>
