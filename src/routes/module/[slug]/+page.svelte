<script lang="ts">
	import { ArrowRight, BookOpen, Bookmark, Flag, PenLine, Search, Target } from '@lucide/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import StudyBar from '$lib/components/common/StudyBar.svelte';
	import { CATEGORY_ACCENT, getModule } from '$lib/data/modules';
	import { getParts, groupedParts, partForAnchor, readHref, subjectUnits, unitKey } from '$lib/content';
	import { subtabsForSubject } from '$lib/subtabs';
	import { essayStatus } from '$lib/alac';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { cn, pct } from '$lib/utils';

	const subject = $derived(getModule(page.params.slug ?? '')!);
	const accent = $derived(CATEGORY_ACCENT[subject.subjectCategory]);
	const parts = $derived(getParts(subject));
	const groups = $derived(groupedParts(subject));

	const PRIORITY_ORDER: Record<string, number> = {
		exam: 1,
		focus: 2,
		numbers: 3,
		enumerations: 4
	};
	const kitTabs = $derived(
		subtabsForSubject(subject.id)
			.filter((t) => !['read', 'practice', 'essays'].includes(t.id) || (t.id === 'essays' && subject.id === 'philo'))
			.sort((a, b) => (PRIORITY_ORDER[a.id] ?? 99) - (PRIORITY_ORDER[b.id] ?? 99))
	);

	let showAllKitTabs = $state(false);
	let kitGridEl = $state<HTMLDivElement | null>(null);
	let oneRowCols = $state(4);

	$effect(() => {
		// Reset collapsed state when navigating between modules
		subject.id;
		showAllKitTabs = false;
	});

	$effect(() => {
		if (!kitGridEl) return;
		const updateCols = () => {
			if (!kitGridEl) return;
			const cols = getComputedStyle(kitGridEl).gridTemplateColumns.split(' ').filter(Boolean).length;
			oneRowCols = Math.max(1, Math.min(4, cols || 4));
		};
		updateCols();
		const ro = new ResizeObserver(updateCols);
		ro.observe(kitGridEl);
		return () => ro.disconnect();
	});

	const visibleKitTabs = $derived(showAllKitTabs ? kitTabs : kitTabs.slice(0, oneRowCols));
	const hiddenKitCount = $derived(Math.max(0, kitTabs.length - oneRowCols));

	// Old links: /module/x?tab=mcq, ?tab=alac, and /module/x#some-anchor from the single-page guide.
	$effect(() => {
		const tab = page.url.searchParams.get('tab');
		if (tab === 'mcq' && subject.mcqs.length) goto(`/module/${subject.id}/practice`, { replace: true });
		else if (tab === 'alac' && subject.essays.length) goto(`/module/${subject.id}/essays`, { replace: true });
		else if (page.url.hash.length > 1) {
			const anchor = decodeURIComponent(page.url.hash.slice(1));
			const part = partForAnchor(subject, anchor);
			if (part) goto(readHref(subject.id, part.id, anchor === part.id ? undefined : anchor), { replace: true });
		}
	});

	const units = $derived(subjectUnits(subject));
	const reading = $derived(userStorage.readingProgress(units));
	const stats = $derived(userStorage.stats(subject.legacyIds));
	const last = $derived(userStorage.reading.lastBySubject[subject.id]);
	const recent = $derived(userStorage.reading.recent.filter((r) => r.subjectId === subject.id).slice(0, 4));
	const bookmarks = $derived(userStorage.reading.bookmarks.filter((b) => b.subjectId === subject.id).slice(0, 5));

	// Practice topics answered wrong most recently, and essays flagged for review.
	const needsReview = $derived.by(() => {
		const wrong = new Map<string, { name: string; topicId: string; n: number }>();
		for (const q of subject.mcqs) {
			const a = userStorage.mcqAttempts[q.id];
			if (!a || a.isCorrect) continue;
			const id = q.topicId ?? 'all';
			const row = wrong.get(id) ?? { name: subject.topics?.find((t) => t.id === id)?.name ?? q.topic, topicId: id, n: 0 };
			row.n++;
			wrong.set(id, row);
		}
		const flagged = subject.essays.filter((e) => essayStatus(userStorage.essayDrafts[e.id]) === 'review');
		return { topics: [...wrong.values()].sort((a, b) => b.n - a.n).slice(0, 4), essays: flagged.slice(0, 4) };
	});

	const mcqCount = (topicId: string) => subject.mcqs.filter((q) => q.topicId === topicId).length;
	const essayCount = (title: string) => subject.essays.filter((e) => e.topic === title).length;
	const essaysMastered = $derived(stats.mastered);

	const CATEGORY_PILL: Record<string, string> = {
		'Civil Law': 'border-[#1899D6] bg-[#1CB0F6] text-white',
		'Civil Law — Supplement': 'border-[#1899D6] bg-[#1CB0F6] text-white',
		'Political Law': 'border-[#E5B400] bg-[#FFC800] text-slate-900',
		'Criminal Law': 'border-[#EA2B2B] bg-[#FF4B4B] text-white',
		'Remedial Law': 'border-[#46A302] bg-[#58CC02] text-white',
		'Legal Method': 'border-[#A55EEA] bg-[#CE82FF] text-white'
	};
</script>

<svelte:head><title>{subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[75rem] flex-col gap-9 px-4 pt-7 pb-16 sm:px-8">
	<div class="flex flex-col gap-4">
		<Breadcrumbs items={[{ label: 'Subjects', href: '/#subjects' }, { label: subject.title }]} />
		<div class="flex flex-wrap items-end gap-x-8 gap-y-5">
			<div class="flex min-w-0 flex-[1_1_34rem] flex-col gap-3">
				<p class={cn('inline-flex w-fit items-center rounded-full border-2 border-b-3 px-3 py-0.5 text-xs font-extrabold tracking-wide uppercase', CATEGORY_PILL[subject.subjectCategory] ?? 'border-slate-200 bg-muted text-foreground')}>
					{subject.subjectCategory.replace(' — Supplement', '')}
				</p>
				<h1 class="font-brand text-3xl leading-[1.12] font-extrabold sm:text-[2.65rem]">{subject.title}</h1>
				<p class="text-sm font-bold text-muted-foreground">{subject.legalScope}</p>
				<p class="max-w-3xl text-base leading-relaxed font-semibold text-muted-foreground sm:text-lg">{subject.description}</p>
			</div>
			<div class="flex flex-wrap gap-2.5">
				{#if last}
					<a href={readHref(subject.id, last.partId, last.anchor)} class="inline-flex h-12 items-center gap-2.5 rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-5 text-sm font-extrabold tracking-wide text-white uppercase no-underline transition-all hover:bg-[#4EB802] active:border-b-2 active:translate-y-0.5">
						Continue · {last.title.length > 28 ? last.title.slice(0, 26) + '…' : last.title} <ArrowRight class="size-4" strokeWidth={3} />
					</a>
				{:else if parts[0]}
					<a href={readHref(subject.id, parts[0].id)} class="inline-flex h-12 items-center gap-2.5 rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-5 text-sm font-extrabold tracking-wide text-white uppercase no-underline transition-all hover:bg-[#4EB802] active:border-b-2 active:translate-y-0.5">
						Start reading <ArrowRight class="size-4" strokeWidth={3} />
					</a>
				{/if}
				<button type="button" onclick={() => ui.openSearch('', 'subject')} class="inline-flex h-12 items-center gap-2 rounded-2xl border-2 border-b-4 border-slate-200 bg-white px-4 text-sm font-extrabold text-slate-700 transition-all hover:bg-slate-50 active:border-b-2 active:translate-y-0.5 dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-slate-200 dark:hover:bg-[#223842]">
					<Search class="size-4 text-[#1CB0F6]" strokeWidth={2.5} /> Search {subject.title.split(' (')[0]}
				</button>
			</div>
		</div>
	</div>

	<div class="grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
		<a href={last ? readHref(subject.id, last.partId, last.anchor) : readHref(subject.id, parts[0]?.id ?? '')} class="flex flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 text-foreground no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-[#58CC02]/70 dark:border-[#2B434E]">
			<span class="flex items-center gap-2 text-sm font-extrabold tracking-wide uppercase"><BookOpen class="size-4 text-[#58CC02]" strokeWidth={2.5} /> Study guide</span>
			<StudyBar studied={reading.studied} visited={reading.visited} total={reading.total} label="Study guide" />
			<span class="text-[0.8125rem] font-bold text-muted-foreground">{reading.studied} of {reading.total} topics studied{reading.visited ? ` · ${reading.visited} visited` : ''}</span>
		</a>
		{#if subject.mcqs.length}
			<a href="/module/{subject.id}/practice" class="flex flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 text-foreground no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-[#1CB0F6]/70 dark:border-[#2B434E]">
				<span class="flex items-center gap-2 text-sm font-extrabold tracking-wide uppercase"><Target class="size-4 text-[#1CB0F6]" strokeWidth={2.5} /> MCQs &amp; timed exams</span>
				<div class="flex h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-[#2B434E]">
					<span class="relative rounded-full bg-[#1CB0F6] transition-all duration-500 after:pointer-events-none after:absolute after:inset-x-1 after:top-[2px] after:h-[28%] after:rounded-full after:bg-white/30" style="width:{pct(stats.attempted, subject.mcqs.length)}%"></span>
				</div>
				<span class="text-[0.8125rem] font-bold text-muted-foreground">{stats.attempted} of {subject.mcqs.length} answered{stats.attempted ? ` · ${stats.accuracy}% correct` : ''}</span>
			</a>
		{/if}
		{#if subject.essays.length}
			<a href="/module/{subject.id}/essays" class="flex flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 text-foreground no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-[#CE82FF]/70 dark:border-[#2B434E]">
				<span class="flex items-center gap-2 text-sm font-extrabold tracking-wide uppercase"><PenLine class="size-4 text-[#CE82FF]" strokeWidth={2.5} /> {subject.id === 'philo' ? 'Essay practice' : 'ALAC essays'}</span>
				<div class="flex h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-[#2B434E]">
					<span class="relative rounded-full bg-[#CE82FF] transition-all duration-500 after:pointer-events-none after:absolute after:inset-x-1 after:top-[2px] after:h-[28%] after:rounded-full after:bg-white/30" style="width:{pct(essaysMastered, subject.essays.length)}%"></span>
				</div>
				<span class="text-[0.8125rem] font-bold text-muted-foreground">{essaysMastered} of {subject.essays.length} mastered{stats.needsReview ? ` · ${stats.needsReview} to review` : ''}</span>
			</a>
		{/if}
	</div>

	{#if kitTabs.length}
		<section aria-labelledby="finals-kit-h" class="flex flex-col gap-3.5">
			<div class="flex flex-wrap items-center justify-between gap-2">
				<h2 id="finals-kit-h" class="font-heading text-xl font-extrabold">Finals Kit &amp; Study Subtabs</h2>
				<div class="flex flex-wrap items-center gap-2">
					{#if hiddenKitCount > 0}
						<button
							type="button"
							onclick={() => (showAllKitTabs = !showAllKitTabs)}
							class="inline-flex items-center gap-1.5 rounded-full border-2 border-slate-200 bg-card px-3 py-1 text-xs font-extrabold tracking-wide text-slate-700 uppercase transition-all hover:border-[#1CB0F6]/70 hover:text-[#1CB0F6] dark:border-[#2B434E] dark:text-slate-200"
						>
							{showAllKitTabs ? 'Show less' : `See more (${hiddenKitCount} more)`}
						</button>
					{/if}
					<a href="/module/{subject.id}/exam" class="inline-flex items-center gap-1.5 rounded-full border-2 border-[#E5B400] bg-[#FFC800] px-3 py-1 text-xs font-extrabold tracking-wide text-slate-900 uppercase no-underline transition-transform hover:scale-105">
						★ Start with Mock Exam <ArrowRight class="size-3.5" strokeWidth={2.5} />
					</a>
				</div>
			</div>
			<div bind:this={kitGridEl} class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
				{#each visibleKitTabs as t (t.id)}
					<a
						href="/module/{subject.id}/{t.path}"
						class={cn(
							'group flex flex-col justify-between gap-1.5 rounded-2xl border-2 border-b-4 p-4 text-foreground no-underline transition-all duration-150 hover:-translate-y-0.5',
							t.star
								? 'border-[#E5B400] bg-[#FFF5CC]/60 hover:border-[#E5B400] dark:border-[#FFC800]/50 dark:bg-[#FFC800]/15'
								: 'border-slate-200 bg-card hover:border-[#1CB0F6]/70 dark:border-[#2B434E] dark:hover:border-[#1CB0F6]/70'
						)}
					>
						<span class="flex items-center justify-between gap-2 text-sm font-extrabold tracking-wide uppercase group-hover:text-[#1CB0F6]">
							{t.label}
							<ArrowRight class="size-3.5 shrink-0 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100" strokeWidth={2.5} />
						</span>
						{#if t.desc}<span class="text-xs leading-snug font-semibold text-muted-foreground">{t.desc}</span>{/if}
					</a>
				{/each}
			</div>
			{#if hiddenKitCount > 0}
				<button
					type="button"
					onclick={() => (showAllKitTabs = !showAllKitTabs)}
					class="self-center rounded-xl border-2 border-slate-200 bg-card px-4 py-1.5 text-xs font-extrabold tracking-wide text-muted-foreground uppercase transition-all hover:border-[#1CB0F6]/70 hover:text-foreground dark:border-[#2B434E]"
				>
					{showAllKitTabs ? 'Show fewer subtabs' : `See more (${hiddenKitCount} more)`}
				</button>
			{/if}
		</section>
	{/if}

	<div class="flex flex-wrap items-start gap-8">
		<section aria-labelledby="contents" class="flex min-w-0 flex-[999_1_36rem] flex-col gap-4">
			<h2 id="contents" class="font-heading text-2xl font-extrabold">Contents</h2>
			{#if subject.studyGuideIntro}<p class="text-[0.9375rem] leading-relaxed font-semibold text-muted-foreground">{subject.studyGuideIntro}</p>{/if}
			<div class="overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-card dark:border-[#2B434E]">
				{#each groups as g, gi (g.title)}
					{#if groups.length > 1}<p class={cn('label-caps bg-slate-50 px-5 py-3 text-[0.72rem] dark:bg-[#15242B]', gi > 0 && 'border-t-2 border-slate-100 dark:border-[#2B434E]')}>{g.title}</p>{/if}
					{#each g.parts as p (p.id)}
						{@const prog = userStorage.readingProgress(p.units.map((u) => unitKey(subject.id, p.id, u)))}
						{@const mcqs = mcqCount(p.id)}
						{@const essays = essayCount(p.title)}
						<a href={readHref(subject.id, p.id)} class="grid grid-cols-[minmax(0,1fr)_5.5rem] items-center gap-4 border-t-2 border-slate-100 px-5 py-3.5 text-foreground no-underline transition-colors first:border-t-0 hover:bg-slate-50 sm:grid-cols-[minmax(0,1fr)_auto_6.5rem] dark:border-[#2B434E] dark:hover:bg-[#223842]">
							<span class="font-sans text-base leading-snug font-bold">
								{#if p.label}<strong class="font-extrabold text-[#1899D6] dark:text-[#66D1FF]">{p.label}</strong> — {p.name}{:else}{p.title}{/if}
							</span>
							<span class="text-[0.8125rem] font-bold whitespace-nowrap text-muted-foreground tabular-nums max-sm:hidden">
								{p.kind === 'cases' ? `${p.caseGroups.reduce((n, cg) => n + cg.cases.length, 0)} digests` : p.topics.length ? `${p.topics.length} topics` : 'Single section'}{mcqs ? ` · ${mcqs} MCQs` : ''}{essays ? ` · ${essays} essays` : ''}
							</span>
							<span class="flex flex-col gap-1.5">
								<StudyBar studied={prog.studied} visited={prog.visited} total={prog.total} label={p.title} />
								<span class="text-right text-xs font-extrabold text-muted-foreground tabular-nums">{prog.studied === prog.total ? 'Studied' : `${prog.studied}/${prog.total}`}</span>
							</span>
						</a>
					{/each}
				{/each}
			</div>
		</section>

		<aside class="flex min-w-0 flex-[1_1_18rem] flex-col gap-5">
			<section aria-labelledby="recent" class="overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-card dark:border-[#2B434E]">
				<h2 id="recent" class="label-caps px-4 py-3 text-[0.72rem]">Recently read</h2>
				{#each recent as r (r.partId)}
					<a href={readHref(subject.id, r.partId, r.anchor)} class="flex flex-col gap-0.5 border-t-2 border-slate-100 px-4 py-3 text-foreground no-underline hover:bg-slate-50 dark:border-[#2B434E] dark:hover:bg-[#223842]">
						<span class="text-sm font-extrabold">{r.title}</span>
						<span class="text-xs font-bold text-muted-foreground">{new Date(r.at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
					</a>
				{:else}
					<p class="border-t-2 border-slate-100 px-4 py-3 text-sm font-semibold text-muted-foreground dark:border-[#2B434E]">Nothing yet. Your place is remembered as you read.</p>
				{/each}
			</section>

			{#if needsReview.topics.length || needsReview.essays.length}
				<section aria-labelledby="review" class="overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-card dark:border-[#2B434E]">
					<h2 id="review" class="label-caps px-4 py-3 text-[0.72rem]">Needs review</h2>
					{#each needsReview.topics as t (t.topicId)}
						<a href="/module/{subject.id}/practice?topic={t.topicId}&filter=incorrect" class="flex items-start gap-3 border-t-2 border-slate-100 px-4 py-3 text-foreground no-underline hover:bg-slate-50 dark:border-[#2B434E] dark:hover:bg-[#223842]">
							<span class="mt-0.5 shrink-0 rounded-full border border-[#EA2B2B]/40 bg-[#FFDFE0] px-2 py-0.5 text-xs font-extrabold text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]">{t.n} wrong</span>
							<span class="text-sm font-extrabold">{t.name}</span>
						</a>
					{/each}
					{#each needsReview.essays as e (e.id)}
						<a href="/module/{subject.id}/essays?essay={encodeURIComponent(e.id)}" class="flex items-start gap-3 border-t-2 border-slate-100 px-4 py-3 text-foreground no-underline hover:bg-slate-50 dark:border-[#2B434E] dark:hover:bg-[#223842]">
							<Flag class="mt-0.5 size-4 shrink-0 text-[#FF9600]" />
							<span class="flex flex-col gap-0.5"><span class="text-sm font-extrabold">{e.title}</span><span class="text-xs font-bold text-muted-foreground">ALAC · {e.topic}</span></span>
						</a>
					{/each}
				</section>
			{/if}

			<section aria-labelledby="bm" class="overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-card dark:border-[#2B434E]">
				<h2 id="bm" class="label-caps px-4 py-3 text-[0.72rem]">Bookmarked</h2>
				{#each bookmarks as b (b.id)}
					<a href={readHref(subject.id, b.partId, b.anchor)} class="flex items-start gap-3 border-t-2 border-slate-100 px-4 py-3 text-foreground no-underline hover:bg-slate-50 dark:border-[#2B434E] dark:hover:bg-[#223842]">
						<Bookmark class="mt-0.5 size-4 shrink-0 fill-[#FFC800] text-[#E5B400]" />
						<span class="text-sm font-extrabold">{b.title}</span>
					</a>
				{:else}
					<p class="border-t-2 border-slate-100 px-4 py-3 text-sm font-semibold text-muted-foreground dark:border-[#2B434E]">Bookmark a part or topic from the reader to keep it here.</p>
				{/each}
			</section>

			{#if subject.sources.some((s) => s.legend?.length)}
				<section aria-labelledby="legend" class="flex flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-4 dark:border-[#2B434E]">
					<h2 id="legend" class="label-caps text-[0.72rem]">Color legend</h2>
					{#each subject.sources.filter((s) => s.legend?.length) as src (src.id)}
						{#if subject.sources.length > 1}<p class="text-xs font-extrabold text-foreground">{src.eyebrow ?? src.title}</p>{/if}
						<ul class="flex flex-col gap-2 text-[0.8125rem] font-semibold text-muted-foreground">
							{#each src.legend ?? [] as item (item.label)}
								<li class="flex items-center gap-2.5"><span class="size-3.5 shrink-0 rounded-md" style="background:color-mix(in oklab, var(--{item.color}) 25%, transparent); border:2px solid var(--{item.color})"></span>{item.label}</li>
							{/each}
						</ul>
					{/each}
				</section>
			{/if}
		</aside>
	</div>
</div>
