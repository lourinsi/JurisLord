<script lang="ts">
	import { PenLine } from '@lucide/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import AlacBanner from '$lib/components/AlacBanner.svelte';
	import AlacEssayEditor from '$lib/components/AlacEssayEditor.svelte';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import EmptyState from '$lib/components/common/EmptyState.svelte';
	import { getModule } from '$lib/data/modules';
	import type { EssayStatus } from '$lib/alac';

	const subject = $derived(getModule(page.params.slug ?? '')!);
	const essayId = $derived(page.url.searchParams.get('essay') ?? subject.essays[0]?.id ?? '');
	const status = $derived.by(() => {
		const s = page.url.searchParams.get('status') ?? 'all';
		return (['new', 'drafted', 'review', 'mastered'].includes(s) ? s : 'all') as 'all' | EssayStatus;
	});
	const essay = $derived(subject.essays.find((e) => e.id === essayId));

	function onselect(id: string) {
		const url = new URL(page.url.href);
		url.searchParams.set('essay', id);
		goto(url);
	}
</script>

<svelte:head><title>{essay ? `${essay.title} — ` : ''}ALAC essays — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'ALAC essays', href: `/module/${subject.id}/essays` }, ...(essay ? [{ label: essay.topic }] : [])]} />
	{#if !subject.essays.length}
		<EmptyState icon={PenLine} title="No ALAC essays in {subject.title} yet" />
	{:else}
		<details class="group rounded-2xl border-2 border-b-4 border-slate-200 bg-card dark:border-[#2B434E]">
			<summary class="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-extrabold">
				The ALAC method: Answer, Legal basis, Application, Conclusion
				<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-extrabold text-muted-foreground uppercase group-open:hidden dark:bg-[#223842]">Show</span><span class="hidden rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-extrabold text-muted-foreground uppercase group-open:inline dark:bg-[#223842]">Hide</span>
			</summary>
			<div class="border-t-2 border-slate-100 p-4 dark:border-[#2B434E]"><AlacBanner bare /></div>
		</details>
		{#key essayId}
			<AlacEssayEditor lawModule={subject} selectedId={essayId} filter={status} {onselect} />
		{/key}
	{/if}
</div>
