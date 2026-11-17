<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import Practice from '$lib/components/Practice.svelte';
	import { getModule } from '$lib/data/modules';
	import { BY_PID as CONSTI_BY_PID } from '$lib/problems';
	import { PROBLEM_BY_PID as CRIMLAW_BY_PID } from '$lib/crimlaw';
	import { PROBLEM_BY_PID as PFR_BY_PID } from '$lib/pfr';
	import { PROBLEM_BY_PID as STATCON_BY_PID } from '$lib/statcon';

	const slug = $derived(page.params.slug ?? '');
	const pid = $derived(page.params.pid ?? '');
	const subject = $derived(getModule(slug)!);

	const problem = $derived(
		CONSTI_BY_PID[pid] ?? CRIMLAW_BY_PID[pid] ?? PFR_BY_PID[pid] ?? STATCON_BY_PID[pid]
	);
</script>

<svelte:head><title>{problem ? `${problem.label} — ` : ''}ALAC Problem — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs
		items={[
			{ label: subject.title, href: `/module/${subject.id}` },
			{ label: 'ALAC problems', href: `/module/${subject.id}/problems` },
			...(problem ? [{ label: `Problem ${problem.no}` }] : [])
		]}
	/>
	{#if problem}
		{#key problem.pid}
			<Practice {problem} />
		{/key}
	{:else}
		<div class="card" style="padding:32px;text-align:center">
			<p style="font-weight:700">Problem not found.</p>
			<a class="btn btn-primary btn-sm" style="margin-top:12px" href="/module/{subject.id}/problems">Back to ALAC problems</a>
		</div>
	{/if}
</div>
