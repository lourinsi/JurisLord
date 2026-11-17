<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import EmptyState from '$lib/components/common/EmptyState.svelte';
	import McqQuizEngine from '$lib/components/McqQuizEngine.svelte';
	import { getModule } from '$lib/data/modules';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { Target } from '@lucide/svelte';

	type Mode = 'practice' | 'exam';
	type Filter = 'all' | 'unanswered' | 'incorrect' | 'bookmarked';

	const subject = $derived(getModule(page.params.slug ?? '')!);
	const topicId = $derived(page.url.searchParams.get('topic') ?? 'all');
	const topic = $derived(subject.topics?.find((t) => t.id === topicId));
	const mode = $derived((page.url.searchParams.get('mode') === 'exam' ? 'exam' : 'practice') as Mode);
	const filter = $derived.by(() => {
		const f = page.url.searchParams.get('filter') ?? '';
		return (['unanswered', 'incorrect', 'bookmarked'].includes(f) ? f : 'all') as Filter;
	});
	const question = $derived(page.url.searchParams.get('question') ?? '');
	const stats = $derived(userStorage.stats(subject.legacyIds));

	function onchange(s: { mode: Mode; filter: Filter }) {
		const url = new URL(page.url.href);
		if (s.mode === 'exam') url.searchParams.set('mode', 'exam');
		else url.searchParams.delete('mode');
		if (s.filter === 'all') url.searchParams.delete('filter');
		else url.searchParams.set('filter', s.filter);
		url.searchParams.delete('question');
		goto(url, { replace: true, reset: false });
	}
</script>

<svelte:head><title>MCQ practice — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<header class="flex flex-col gap-3">
		<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'MCQs', href: `/module/${subject.id}/practice` }, ...(topic ? [{ label: topic.name }] : [])]} />
		<div class="flex flex-wrap items-end justify-between gap-3">
			<div class="flex flex-col gap-1.5">
				<p class="label-caps">{topic?.eyebrow ?? 'All topics'}</p>
				<h1 class="font-heading text-3xl leading-tight font-extrabold">{topic?.name ?? 'MCQ practice'}</h1>
				{#if topic?.desc}<p class="max-w-2xl text-[0.9375rem] font-semibold text-muted-foreground">{topic.desc}</p>{/if}
			</div>
			<p class="inline-flex items-center rounded-full border-2 border-[#1899D6]/30 bg-[#DDF4FF] px-3.5 py-1 text-xs font-extrabold text-[#1899D6] tabular-nums dark:border-[#1CB0F6]/40 dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]">
				{stats.attempted} / {subject.mcqs.length} answered{stats.attempted ? ` · ${stats.accuracy}% correct` : ''}
			</p>
		</div>
	</header>

	{#if !subject.mcqs.length}
		<EmptyState icon={Target} title="No practice questions in {subject.title} yet">
			This subject is reference material. Its guide and case digests are in Read.
		</EmptyState>
	{:else}
		{#key `${topicId}|${question}`}
			<McqQuizEngine lawModule={subject} {topicId} initialMode={mode} initialFilter={filter} initialQuestion={question} {onchange} />
		{/key}
	{/if}
</div>
