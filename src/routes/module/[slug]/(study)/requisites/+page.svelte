<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import RequisitesTable from '$lib/components/RequisitesTable.svelte';
	import { getModule } from '$lib/data/modules';
	import { CRIMPRO_REQUISITE_TOPICS } from '$lib/crimpro-requisites';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);
</script>

<svelte:head><title>Requisites — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs
		items={[
			{ label: subject.title, href: `/module/${subject.id}` },
			{ label: 'Requisites' }
		]}
	/>

	<header class="flex flex-col gap-1.5">
		<p class="label-caps">Self-test recall</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">Requisites</h1>
	</header>

	{#if slug === 'crimpro'}
		<div class="stack" style="gap:12px">
			<p class="muted" style="max-width:66ch">
				Hide the requisites and test yourself across all five exam topics. Tap any blurred answer to reveal the
				requisites and notes, or switch to <b>Shuffled drill</b> to recite them out of order.
			</p>
			<RequisitesTable topics={CRIMPRO_REQUISITE_TOPICS} title="CrimPro Finals Requisites Drill" />
		</div>
	{:else}
		<div class="card p-6 text-sm text-muted-foreground">
			No requisites drill is configured for this subject yet.
		</div>
	{/if}
</div>
