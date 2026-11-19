<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import UnifiedMockExam from '$lib/components/exam/UnifiedMockExam.svelte';
	import { getModule } from '$lib/data/modules';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);
</script>

<svelte:head><title>Mock Exam — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'Mock exam' }]} />
	<header class="flex flex-col gap-1.5">
		<p class="label-caps">Dynamic Mock Exam · All Available Test Types</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">Mock Exam</h1>
	</header>

	{#key subject.id}
		<UnifiedMockExam
			{subject}
			kit={data.kit}
			numbers={data.numbers}
			requisites={data.requisites}
			constiProblems={data.constiProblems}
			philoEssays={data.philoEssays}
		/>
	{/key}
</div>
