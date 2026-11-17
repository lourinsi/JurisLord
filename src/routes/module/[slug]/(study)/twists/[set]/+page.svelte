<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import TwistDrill from '$lib/components/crimpro/TwistDrill.svelte';
	import { getModule } from '$lib/data/modules';
	import { SET_BY_ID } from '$lib/crimpro';

	const slug = $derived(page.params.slug ?? '');
	const setId = $derived(page.params.set ?? '');
	const subject = $derived(getModule(slug)!);
	const set = $derived(SET_BY_ID[setId]);
</script>

<svelte:head><title>{set ? `${set.title} — ` : ''}Twist Drill — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs
		items={[
			{ label: subject.title, href: `/module/${subject.id}` },
			{ label: 'Twist drills', href: `/module/${subject.id}/twists` },
			...(set ? [{ label: set.title }] : [])
		]}
	/>
	{#if set}
		{#key set.id}
			<TwistDrill {set} />
		{/key}
	{:else}
		<div class="card" style="padding:24px;text-align:center">
			<p>Twist set not found.</p>
			<a class="btn btn-primary btn-sm" style="margin-top:10px" href="/module/crimpro/twists">Back to Twist drills</a>
		</div>
	{/if}
</div>
