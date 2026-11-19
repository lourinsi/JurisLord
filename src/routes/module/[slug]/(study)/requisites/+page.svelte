<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import RequisitesTable from '$lib/components/RequisitesTable.svelte';
	import { getModule } from '$lib/data/modules';
	import { loadRequisitesForSubject, type SubjectRequisitesConfig } from '$lib/requisites';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);
	let reqConfig = $state<SubjectRequisitesConfig | undefined>(undefined);

	$effect(() => {
		const s = slug;
		reqConfig = undefined;
		void loadRequisitesForSubject(s).then((cfg) => {
			if (slug === s) reqConfig = cfg;
		});
	});
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

	{#if reqConfig}
		<div class="stack" style="gap:12px">
			<p class="muted" style="max-width:66ch">{reqConfig.intro}</p>
			<RequisitesTable topics={reqConfig.topics} title={reqConfig.title} />
		</div>
	{:else}
		<div class="card p-6 text-sm text-muted-foreground">
			No requisites drill is configured for this subject yet.
		</div>
	{/if}
</div>
