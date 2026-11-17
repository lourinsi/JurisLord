<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import McqView from '$lib/components/kit/McqView.svelte';
	import { getModule } from '$lib/data/modules';
	import { kitForSubject } from '$lib/subtabs';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);
	const kit = $derived(kitForSubject(slug));
</script>

<svelte:head><title>MCQ Drill &amp; Linked Chains — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'MCQ drill & chains' }]} />
	<header class="flex flex-col gap-1.5">
		<p class="label-caps">Per-choice explanations &amp; linked chains</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">MCQ Drill &amp; Linked Chains</h1>
	</header>
	{#if kit}
		{#key kit.id}<McqView {kit} />{/key}
	{/if}
</div>
