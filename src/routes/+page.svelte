<script lang="ts">
	import { ArrowRight, BookOpen, Bookmark, Flame, PenLine, Sparkles, Target, Zap } from '@lucide/svelte';
	import StudyBar from '$lib/components/common/StudyBar.svelte';
	import { CATEGORY_FILTERS, getModule, loadSubject, matchesCategory, modules, subjectForItem, totals, type CategoryFilter } from '$lib/data/modules';
	import { readHref, subjectUnits } from '$lib/content';
	import { draftHasContent } from '$lib/alac';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { cn, pct } from '$lib/utils';
	import type { Subject, SubjectCategory } from '$lib/types';

	let category = $state<CategoryFilter>('All');

	const stats = $derived(userStorage.stats());
	const shown = $derived(
		modules.filter((m) => matchesCategory(m.subjectCategory, category))
	);
	const last = $derived(userStorage.reading.last);
	const lastSubject = $derived(last ? getModule(last.subjectId) : undefined);
	const recent = $derived(userStorage.reading.recent.filter((r) => !(last && r.subjectId === last.subjectId && r.partId === last.partId)).slice(0, 4));
	const bookmarks = $derived(userStorage.reading.bookmarks.slice(0, 4));

	/** Where practice left off: the topic of the most recent answer. */
	const lastPractice = $derived.by(() => {
		let best: { id: string; at: number } | null = null;
		for (const a of Object.values(userStorage.mcqAttempts)) if (!best || a.timestamp > best.at) best = { id: a.questionId, at: a.timestamp };
		if (!best) return null;
		const subject = subjectForItem(best.id);
		if (subject && !subject.mcqs.length) {
			void loadSubject(subject.id, 'practice');
			return null;
		}
		const q = subject?.mcqs.find((x) => x.id === best.id);
		if (!subject || !q) return null;
		const inTopic = subject.mcqs.filter((x) => x.topicId === q.topicId);
		const answered = inTopic.filter((x) => userStorage.mcqAttempts[x.id]).length;
		return { subject, topicId: q.topicId ?? 'all', topic: subject.topics?.find((t) => t.id === q.topicId)?.name ?? q.topic, answered, total: inTopic.length };
	});

	/** The draft touched most recently that isn't mastered yet. */
	const lastDraft = $derived.by(() => {
		const d = Object.values(userStorage.essayDrafts)
			.filter((x) => !x.isMastered && draftHasContent(x))
			.sort((a, b) => b.updatedAt - a.updatedAt)[0];
		if (!d) return null;
		const subject = subjectForItem(d.essayId);
		if (subject && !subject.essays.length) {
			void loadSubject(subject.id, 'essays');
			return null;
		}
		const e = subject?.essays.find((x) => x.id === d.essayId);
		return subject && e ? { subject, essay: e, at: d.updatedAt } : null;
	});

	const when = (t: number) => {
		const days = Math.floor((Date.now() - t) / 86_400_000);
		return days <= 0 ? 'today' : days === 1 ? 'yesterday' : `${days} days ago`;
	};

	function subjectReadingProgress(m: Subject) {
		if (m.sources.length > 0) {
			return userStorage.readingProgress(subjectUnits(m));
		}
		const prefix = `${m.id}:`;
		let studied = 0;
		let visited = 0;
		for (const k of Object.keys(userStorage.reading.studied)) {
			if (k.startsWith(prefix)) studied++;
		}
		for (const k of Object.keys(userStorage.reading.visited)) {
			if (k.startsWith(prefix) && !userStorage.reading.studied[k]) visited++;
		}
		return { studied, visited, total: m.unitCount ?? 0 };
	}

	const CATEGORY_THEME: Record<SubjectCategory, { band: string; pill: string; bar: string }> = {
		'Civil Law': {
			band: 'bg-[#1CB0F6]',
			pill: 'border-[#1899D6] bg-[#1CB0F6] text-white',
			bar: 'bg-[#1CB0F6]'
		},
		'Civil Law — Supplement': {
			band: 'bg-[#1CB0F6]',
			pill: 'border-[#1899D6] bg-[#1CB0F6] text-white',
			bar: 'bg-[#1CB0F6]'
		},
		'Political Law': {
			band: 'bg-[#FFC800]',
			pill: 'border-[#E5B400] bg-[#FFC800] text-slate-900',
			bar: 'bg-[#FFC800]'
		},
		'Criminal Law': {
			band: 'bg-[#FF4B4B]',
			pill: 'border-[#EA2B2B] bg-[#FF4B4B] text-white',
			bar: 'bg-[#FF4B4B]'
		},
		'Remedial Law': {
			band: 'bg-[#58CC02]',
			pill: 'border-[#46A302] bg-[#58CC02] text-white',
			bar: 'bg-[#58CC02]'
		},
		'Legal Method': {
			band: 'bg-[#CE82FF]',
			pill: 'border-[#A55EEA] bg-[#CE82FF] text-white',
			bar: 'bg-[#CE82FF]'
		}
	};
</script>

<svelte:head><title>Juris Lord — Philippine Law Study Guide</title></svelte:head>

<div class="mx-auto flex max-w-[75rem] flex-col gap-10 px-4 pt-8 pb-14 sm:px-8 sm:pt-10">
	<h1 class="sr-only">Juris Lord</h1>

	<section aria-label="Pick up where you left off" class="flex flex-wrap gap-5">
		{#if last && lastSubject}
			{@const lastTheme = CATEGORY_THEME[lastSubject.subjectCategory]}
			<a href={readHref(last.subjectId, last.partId, last.anchor)} class="group relative flex min-w-0 flex-[2_1_30rem] flex-col justify-between gap-4 overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-6 text-foreground no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-[#58CC02]/70 sm:p-7 dark:border-[#2B434E] dark:hover:border-[#58CC02]/70">
				<div class="flex flex-col gap-3">
					<div class="flex items-center justify-between gap-3">
						<span class="inline-flex items-center gap-1.5 rounded-full border-2 border-[#46A302]/30 bg-[#D7FFB8] px-3 py-1 text-xs font-extrabold tracking-wide text-[#46A302] uppercase dark:border-[#58CC02]/40 dark:bg-[#58CC02]/20 dark:text-[#7BE328]">
							<Sparkles class="size-3.5" strokeWidth={2.5} /> Continue Reading Quest
						</span>
						<span class="grid size-12 shrink-0 place-items-center rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] text-white shadow-sm transition-transform group-hover:scale-105">
							<BookOpen class="size-6 drop-shadow-[0_0_6px_rgba(255,255,255,0.65)]" strokeWidth={2.5} />
						</span>
					</div>
					<p class="flex items-center gap-2 text-sm font-bold text-muted-foreground">
						<span class={cn('h-3.5 w-1.5 rounded-full', lastTheme.band)}></span>
						{lastSubject.title}
					</p>
					<h2 class="font-heading text-2xl leading-tight font-extrabold sm:text-3xl">{last.title}</h2>
				</div>
				<div class="mt-2 flex flex-wrap items-center gap-4">
					<span class="inline-flex h-12 items-center gap-2.5 rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-6 text-sm font-extrabold tracking-wide text-white uppercase transition-all group-hover:bg-[#4EB802] group-active:border-b-2 group-active:translate-y-0.5">
						Continue <ArrowRight class="size-4" strokeWidth={3} />
					</span>
					<span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold tracking-wide text-slate-600 uppercase dark:bg-[#223842] dark:text-slate-300">Read {when(last.at)}</span>
				</div>
			</a>
		{:else}
			<div class="relative flex min-w-0 flex-[2_1_30rem] flex-col justify-between gap-4 overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-6 sm:p-7 dark:border-[#2B434E]">
				<div class="flex items-start justify-between gap-4">
					<div class="flex flex-col gap-2">
						<span class="inline-flex w-fit items-center gap-1.5 rounded-full border-2 border-[#E5B400] bg-[#FFC800] px-3 py-1 text-xs font-extrabold tracking-wide text-slate-900 uppercase">
							<Flame class="size-3.5" strokeWidth={2.5} /> Philippine Law · 1L Quest
						</span>
						<h2 class="font-brand text-3xl leading-tight font-extrabold sm:text-4xl">
							Level up with <span class="text-[#58CC02]">Juris Lord</span>
						</h2>
					</div>
					<span class="grid size-14 shrink-0 place-items-center rounded-2xl border-2 border-[#1899D6] border-b-4 bg-[#1CB0F6] text-white">
						<BookOpen class="size-7 drop-shadow-[0_0_8px_rgba(255,255,255,0.65)]" strokeWidth={2.5} />
					</span>
				</div>
				<p class="max-w-xl text-base leading-relaxed font-semibold text-muted-foreground">
					Color-coded study guides, situational MCQs and ALAC essays for {totals.modules} subjects. Pick a subject below to start your streak; your place is saved automatically.
				</p>
			</div>
		{/if}
		{#if lastPractice || lastDraft}
			<div class="flex min-w-0 flex-[1_1_19rem] flex-col gap-5">
				{#if lastPractice}
					<a href="/module/{lastPractice.subject.id}/practice?topic={lastPractice.topicId}" class="group flex flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 text-foreground no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-[#1CB0F6]/70 dark:border-[#2B434E] dark:hover:border-[#1CB0F6]/70">
						<div class="flex items-center justify-between gap-3">
							<span class="inline-flex items-center gap-1.5 rounded-full border-2 border-[#1899D6]/30 bg-[#DDF4FF] px-2.5 py-0.5 text-[0.7rem] font-extrabold tracking-wide text-[#1899D6] uppercase dark:border-[#1CB0F6]/40 dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]">
								<Zap class="size-3.5" strokeWidth={2.5} /> Continue Practice
							</span>
							<span class="grid size-10 shrink-0 place-items-center rounded-2xl border-2 border-[#1899D6] border-b-4 bg-[#1CB0F6] text-white">
								<Target class="size-5" strokeWidth={2.5} />
							</span>
						</div>
						<span class="text-base leading-snug font-extrabold">{lastPractice.topic}</span>
						<div class="flex h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-[#2B434E]">
							<span class="relative rounded-full bg-[#1CB0F6] transition-all duration-500 after:pointer-events-none after:absolute after:inset-x-1 after:top-[2px] after:h-[28%] after:rounded-full after:bg-white/30" style="width:{pct(lastPractice.answered, lastPractice.total)}%"></span>
						</div>
						<div class="flex items-center justify-between gap-2">
							<span class="truncate text-xs font-bold text-muted-foreground">{lastPractice.subject.title} · {lastPractice.answered}/{lastPractice.total}</span>
							<span class="inline-flex h-8 shrink-0 items-center gap-1 rounded-xl border-2 border-[#1899D6] border-b-4 bg-[#1CB0F6] px-3 text-xs font-extrabold tracking-wide text-white uppercase group-hover:bg-[#18A2E4]">
								Practice <ArrowRight class="size-3.5" strokeWidth={3} />
							</span>
						</div>
					</a>
				{/if}
				{#if lastDraft}
					<a href="/module/{lastDraft.subject.id}/essays?essay={encodeURIComponent(lastDraft.essay.id)}" class="group flex flex-col gap-2.5 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 text-foreground no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-[#CE82FF] dark:border-[#2B434E]">
						<div class="flex items-center justify-between gap-2">
							<span class="inline-flex items-center gap-1.5 rounded-full border-2 border-[#A55EEA]/30 bg-[#F3E8FF] px-2.5 py-0.5 text-[0.7rem] font-extrabold tracking-wide text-[#8930C9] uppercase dark:border-[#CE82FF]/40 dark:bg-[#CE82FF]/20 dark:text-[#DDA6FF]">
								<PenLine class="size-3.5" strokeWidth={2.5} /> Draft in progress
							</span>
							<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[0.7rem] font-extrabold text-slate-600 dark:bg-[#223842] dark:text-slate-300">{when(lastDraft.at)}</span>
						</div>
						<span class="text-base font-extrabold">{lastDraft.essay.title}</span>
						<span class="text-xs font-bold text-muted-foreground">ALAC · {lastDraft.subject.title}</span>
					</a>
				{/if}
			</div>
		{/if}
	</section>

	{#if recent.length || bookmarks.length}
		<section aria-label="Recently viewed and bookmarks" class="flex flex-wrap gap-8">
			{#if recent.length}
				<div class="flex min-w-0 flex-[2_1_30rem] flex-col gap-3">
					<h2 class="font-heading text-xl font-extrabold">Recently viewed</h2>
					<div class="grid gap-3 sm:grid-cols-2">
						{#each recent as r (r.subjectId + r.partId)}
							{@const s = getModule(r.subjectId)}
							<a href={readHref(r.subjectId, r.partId, r.anchor)} class="flex flex-col gap-1.5 rounded-2xl border-2 border-b-4 border-slate-200 bg-card px-4 py-3.5 text-foreground no-underline transition-all duration-150 hover:-translate-y-0.5 hover:border-[#1CB0F6]/60 dark:border-[#2B434E]">
								<span class="flex items-center gap-2 text-xs font-extrabold tracking-wide text-muted-foreground uppercase">
									<span class={cn('h-3 w-1.5 rounded-full', s ? CATEGORY_THEME[s.subjectCategory].band : 'bg-border')}></span>
									{s?.title}
								</span>
								<span class="text-[0.9375rem] font-extrabold">{r.title}</span>
							</a>
						{/each}
					</div>
				</div>
			{/if}
			{#if bookmarks.length}
				<div class="flex min-w-0 flex-[1_1_18rem] flex-col gap-3">
					<div class="flex items-baseline justify-between">
						<h2 class="font-heading text-xl font-extrabold">Bookmarks</h2>
						<a href="/saved?tab=bookmarks" class="text-xs font-extrabold tracking-wide text-[#1CB0F6] uppercase no-underline hover:underline">All saved</a>
					</div>
					<ul class="flex flex-col overflow-hidden rounded-2xl border-2 border-b-4 border-slate-200 bg-card dark:border-[#2B434E]">
						{#each bookmarks as b (b.id)}
							<li class="border-t-2 border-slate-100 first:border-t-0 dark:border-[#2B434E]">
								<a href={readHref(b.subjectId, b.partId, b.anchor)} class="flex items-start gap-3 px-4 py-3 text-foreground no-underline transition-colors hover:bg-slate-50 dark:hover:bg-[#223842]">
									<Bookmark class="mt-0.5 size-4 shrink-0 fill-[#FFC800] text-[#E5B400]" />
									<span class="flex flex-col gap-0.5"><span class="text-sm font-extrabold">{b.title}</span><span class="text-xs font-bold text-muted-foreground">{getModule(b.subjectId)?.title}</span></span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
		</section>
	{/if}

	<section id="subjects" aria-labelledby="subjects-h" class="flex scroll-mt-20 flex-col gap-5">
		<div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
			<h2 id="subjects-h" class="font-heading text-2xl font-extrabold">Subjects</h2>
			<p class="inline-flex items-center gap-2 rounded-full border-2 border-[#E5B400]/50 bg-[#FFF5CC] px-3.5 py-1 text-xs font-extrabold tracking-wide text-[#946200] tabular-nums dark:border-[#FFC800]/40 dark:bg-[#FFC800]/15 dark:text-[#FFD633]">
				{stats.attempted} / {totals.mcqs} MCQs{stats.attempted ? ` · ${stats.accuracy}% correct` : ''} · {stats.mastered} / {totals.essays} essays mastered
			</p>
		</div>
		<div role="group" aria-label="Filter subjects by category" class="flex flex-wrap gap-2">
			{#each CATEGORY_FILTERS as c (c)}
				<button
					type="button"
					aria-pressed={category === c}
					onclick={() => (category = c)}
					class={cn(
						'h-9 rounded-xl border-2 border-b-4 px-3.5 text-xs font-extrabold tracking-wide uppercase transition-all duration-150 active:border-b-2 active:translate-y-0.5',
						category === c
							? 'border-[#1899D6] bg-[#1CB0F6] text-white'
							: 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-slate-300 dark:hover:bg-[#223842]'
					)}
				>
					{c}
				</button>
			{/each}
		</div>
		<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each shown as m (m.id)}
				{@const themeColor = CATEGORY_THEME[m.subjectCategory]}
				{@const s = userStorage.stats(m.legacyIds)}
				{@const r = subjectReadingProgress(m)}
				{@const mMcqs = m.mcqs.length || m.mcqCount || 0}
				{@const mEssays = m.essays.length || m.essayCount || 0}
				{@const cont = userStorage.reading.lastBySubject[m.id]}
				<article class="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-card transition-all duration-150 hover:-translate-y-0.5 hover:border-[#1CB0F6]/70 dark:border-[#2B434E] dark:hover:border-[#1CB0F6]/70">
					<!-- Colorful top header band -->
					<div class={cn('h-2.5 w-full', themeColor.band)}></div>
					<div class="flex flex-1 flex-col gap-4 p-5">
						<div class="flex items-center justify-between gap-2">
							<span class={cn('inline-flex items-center rounded-full border-2 border-b-3 px-3 py-0.5 text-[0.6875rem] font-extrabold tracking-wide uppercase', themeColor.pill)}>
								{m.subjectCategory.replace(' — Supplement', '')}
							</span>
						</div>
						<div class="flex flex-col gap-1.5">
							<h3 class="font-heading text-xl leading-snug font-extrabold">
								<a href="/module/{m.id}" class="text-foreground no-underline after:absolute after:inset-0 after:z-0 group-hover:text-[#1CB0F6]">{m.title}</a>
							</h3>
							<p class="text-[0.8125rem] leading-relaxed font-semibold text-muted-foreground">{m.legalScope.length > 110 ? m.legalScope.slice(0, 108) + '…' : m.legalScope}</p>
						</div>
						<dl class="mt-auto grid grid-cols-[4.75rem_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2.5 text-[0.8125rem]">
							<dt class="flex items-center gap-1.5 font-bold text-slate-600 dark:text-slate-300"><BookOpen class="size-3.5 text-[#58CC02]" strokeWidth={2.5} />Read</dt>
							<dd class="m-0"><StudyBar studied={r.studied} visited={r.visited} total={r.total} label="{m.title} reading" /></dd>
							<dd class="m-0 rounded-full bg-slate-100 px-2 py-0.5 text-[0.7rem] font-extrabold text-slate-700 tabular-nums dark:bg-[#223842] dark:text-slate-200">{r.studied}/{r.total}</dd>
							{#if mMcqs}
								<dt class="flex items-center gap-1.5 font-bold text-slate-600 dark:text-slate-300"><Target class="size-3.5 text-[#1CB0F6]" strokeWidth={2.5} />MCQs</dt>
								<dd class="m-0">
									<div class="flex h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-[#2B434E]">
										<span class="relative rounded-full bg-[#1CB0F6] transition-all duration-500 after:pointer-events-none after:absolute after:inset-x-1 after:top-[2px] after:h-[28%] after:rounded-full after:bg-white/30" style="width:{pct(s.attempted, mMcqs)}%"></span>
									</div>
								</dd>
								<dd class="m-0 rounded-full bg-[#DDF4FF] px-2 py-0.5 text-[0.7rem] font-extrabold text-[#1899D6] tabular-nums dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]">{s.attempted}/{mMcqs}</dd>
							{/if}
							{#if mEssays}
								<dt class="flex items-center gap-1.5 font-bold text-slate-600 dark:text-slate-300"><PenLine class="size-3.5 text-[#CE82FF]" strokeWidth={2.5} />Essays</dt>
								<dd class="m-0">
									<div class="flex h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-[#2B434E]">
										<span class="relative rounded-full bg-[#CE82FF] transition-all duration-500 after:pointer-events-none after:absolute after:inset-x-1 after:top-[2px] after:h-[28%] after:rounded-full after:bg-white/30" style="width:{pct(s.mastered, mEssays)}%"></span>
									</div>
								</dd>
								<dd class="m-0 rounded-full bg-[#F3E8FF] px-2 py-0.5 text-[0.7rem] font-extrabold text-[#8930C9] tabular-nums dark:bg-[#CE82FF]/20 dark:text-[#DDA6FF]">{s.mastered}/{mEssays}</dd>
							{/if}
						</dl>
					</div>
					<div class="relative z-10 flex flex-wrap gap-2 border-t-2 border-slate-100 bg-slate-50/70 px-5 py-3.5 dark:border-[#2B434E] dark:bg-[#15242B]">
						{#if cont}
							<a href={readHref(m.id, cont.partId, cont.anchor)} class="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-3 text-xs font-extrabold tracking-wide text-white uppercase no-underline transition-all hover:bg-[#4EB802] active:border-b-2 active:translate-y-0.5">Continue <ArrowRight class="size-3.5" strokeWidth={3} /></a>
						{:else}
							<a href="/module/{m.id}/read" class="inline-flex h-9 flex-1 items-center justify-center rounded-xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-3 text-xs font-extrabold tracking-wide text-white uppercase no-underline transition-all hover:bg-[#4EB802] active:border-b-2 active:translate-y-0.5">Start reading</a>
						{/if}
						<a href="/module/{m.id}" class="inline-flex h-9 items-center justify-center rounded-xl border-2 border-slate-200 border-b-4 bg-white px-3 text-xs font-extrabold tracking-wide text-slate-700 uppercase no-underline transition-all hover:bg-slate-50 active:border-b-2 active:translate-y-0.5 dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-slate-200 dark:hover:bg-[#223842]">Overview</a>
						{#if mMcqs}<a href="/module/{m.id}/practice" class="inline-flex h-9 items-center justify-center rounded-xl border-2 border-[#1899D6] border-b-4 bg-[#1CB0F6] px-3 text-xs font-extrabold tracking-wide text-white uppercase no-underline transition-all hover:bg-[#18A2E4] active:border-b-2 active:translate-y-0.5">Practice</a>{/if}
					</div>
				</article>
			{/each}
		</div>
	</section>
</div>
