<script lang="ts">
	import { ChevronDown, ChevronRight, ChevronsUpDown, ListFilter, PanelLeft } from '@lucide/svelte';
	import { Popover } from 'bits-ui';
	import { page } from '$app/state';
	import { CATEGORY_ACCENT, modules } from '$lib/data/modules';
	import { groupedParts, readHref, unitKey, type Part } from '$lib/content';
	import { ESSAY_STATUS, essayStatus, type EssayStatus } from '$lib/alac';
	import { prefs } from '$lib/stores/prefs.svelte';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { cn } from '$lib/utils';
	import { activeSubtabId, subtabsForSubject } from '$lib/subtabs';
	import { topicsForSubject } from '$lib/topics';
	import type { AlacEssay, Subject } from '$lib/types';

	let {
		subject,
		mode,
		onnavigate,
		collapsible = true
	}: { subject: Subject; mode: 'read' | 'practice' | 'essays' | 'subtab'; onnavigate?: () => void; collapsible?: boolean } = $props();

	const subtabs = $derived(subtabsForSubject(subject.id).filter((t) => !['read', 'practice', 'essays'].includes(t.id) || (t.id === 'essays' && subject.id === 'philo')));
	const activeSubtab = $derived(activeSubtabId(page.url.pathname, subject.id));

	const partId = $derived(page.params.part ? decodeURIComponent(page.params.part) : '');
	const hash = $derived(page.url.hash.slice(1));
	const accent = $derived(CATEGORY_ACCENT[subject.subjectCategory]);
	const subjectMcqTotal = $derived(subject.mcqs.length || subject.mcqCount || 0);
	const subjectEssayTotal = $derived(subject.essays.length || subject.essayCount || 0);

	// ---- Read: groups → parts → topics ----
	let filter = $state('');
	let expanded = $state<Record<string, boolean>>({});
	const groups = $derived(groupedParts(subject));
	const f = $derived(filter.trim().toLowerCase());
	const shownGroups = $derived(
		f
			? groups
					.map((g) => ({
						...g,
						parts: g.parts.filter((p) => p.title.toLowerCase().includes(f) || p.topics.some((t) => t.title.toLowerCase().includes(f)))
					}))
					.filter((g) => g.parts.length)
			: groups
	);
	const isOpen = (p: Part) => (f ? true : (expanded[p.id] ?? p.id === partId));
	const unitKeys = (p: Part) => p.units.map((u) => unitKey(subject.id, p.id, u));
	const unitState = (p: Part, u: string) => {
		const k = unitKey(subject.id, p.id, u);
		return userStorage.reading.studied[k] ? 'studied' : userStorage.reading.visited[k] ? 'visited' : 'none';
	};

	// ---- Practice: topics ----
	const topicParam = $derived(page.url.searchParams.get('topic') ?? 'all');
	function practiceHref(topic: string) {
		const u = new URLSearchParams(page.url.search);
		u.delete('question');
		if (topic === 'all') u.delete('topic');
		else u.set('topic', topic);
		const s = u.toString();
		return `/module/${subject.id}/practice${s ? `?${s}` : ''}`;
	}
	const topicCounts = $derived.by(() => {
		const out = new Map<string, { total: number; answered: number }>();
		for (const q of subject.mcqs) {
			const k = q.topicId ?? 'other';
			const row = out.get(k) ?? { total: 0, answered: 0 };
			row.total++;
			if (userStorage.mcqAttempts[q.id]) row.answered++;
			out.set(k, row);
		}
		return out;
	});
	const practiceTopics = $derived(topicsForSubject(subject));

	// ---- Essays: status + source + list ----
	const STATUSES: ('all' | EssayStatus)[] = ['all', 'new', 'drafted', 'review', 'mastered'];
	const statusParam = $derived((page.url.searchParams.get('status') ?? 'all') as 'all' | EssayStatus);
	const sourceParam = $derived(page.url.searchParams.get('source') ?? 'all');
	const rawEssayParam = $derived(page.url.searchParams.get('essay') ?? '');
	const essayParam = $derived.by(() => {
		const found = subject.essays.find((e) => e.id === rawEssayParam);
		if (found && (sourceParam === 'all' || found.source === sourceParam)) return found.id;
		const firstMatch = subject.essays.find((e) => sourceParam === 'all' || e.source === sourceParam);
		return firstMatch?.id ?? subject.essays[0]?.id ?? '';
	});
	const statusOf = (e: AlacEssay) => essayStatus(userStorage.essayDrafts[e.id]);
	const sources = $derived.by(() => {
		const s = new Set<string>();
		for (const e of subject.essays) if (e.source) s.add(e.source);
		return s.size > 0 ? ['all', ...s] : [];
	});
	const sourceCounts = $derived.by(() => {
		const c: Record<string, number> = { all: subject.essays.length };
		for (const e of subject.essays) {
			if (e.source) c[e.source] = (c[e.source] ?? 0) + 1;
		}
		return c;
	});
	const statusCounts = $derived.by(() => {
		const c: Record<'all' | EssayStatus, number> = { all: 0, new: 0, drafted: 0, review: 0, mastered: 0 };
		for (const e of subject.essays) {
			if (sourceParam !== 'all' && e.source !== sourceParam) continue;
			c.all++;
			c[statusOf(e)]++;
		}
		return c;
	});
	const essayGroups = $derived.by(() => {
		const map = new Map<string, AlacEssay[]>();
		for (const e of subject.essays) {
			if (sourceParam !== 'all' && e.source !== sourceParam && e.id !== essayParam) continue;
			if (statusParam !== 'all' && statusOf(e) !== statusParam && e.id !== essayParam) continue;
			map.set(e.topic, [...(map.get(e.topic) ?? []), e]);
		}
		return [...map.entries()];
	});
	const essayHref = (id: string, status = statusParam, source = sourceParam) =>
		`/module/${subject.id}/essays?essay=${encodeURIComponent(id)}${status !== 'all' ? `&status=${status}` : ''}${source !== 'all' ? `&source=${encodeURIComponent(source)}` : ''}`;
	const statusHref = (s: 'all' | EssayStatus) => essayHref(essayParam, s, sourceParam);
	const sourceHref = (src: string) => {
		const current = subject.essays.find((e) => e.id === essayParam);
		const target =
			current && (src === 'all' || current.source === src)
				? current.id
				: (subject.essays.find((e) => src === 'all' || e.source === src)?.id ?? essayParam);
		return essayHref(target, statusParam, src);
	};

	let switcherOpen = $state(false);
	const tabHref = (m: 'read' | 'practice' | 'essays') => {
		if (m === 'read') {
			const last = userStorage.reading.lastBySubject[subject.id];
			return last ? readHref(subject.id, last.partId, last.anchor) : `/module/${subject.id}/read`;
		}
		return `/module/${subject.id}/${m}`;
	};
	const tab = (on: boolean) =>
		cn(
			'flex h-9 min-w-0 items-center justify-center gap-1 rounded-xl border-2 border-transparent px-2 text-xs font-extrabold tracking-wide uppercase no-underline transition-all duration-150',
			on ? 'border-[#1899D6] border-b-4 bg-[#1CB0F6] text-white' : 'text-muted-foreground hover:text-foreground'
		);
	const row = 'flex min-h-9 w-full min-w-0 items-center gap-2 rounded-xl border-2 border-transparent px-2.5 text-sm font-bold no-underline transition-all';
</script>

<div class="flex flex-col gap-3.5">
	<div class="flex items-center gap-1.5">
		<Popover.Root bind:open={switcherOpen}>
			<Popover.Trigger class="flex h-12 min-w-0 flex-1 items-center gap-2.5 rounded-2xl border-2 border-b-4 border-slate-200 bg-white px-3 text-left transition-colors hover:border-[#1CB0F6]/60 dark:border-[#2B434E] dark:bg-[#131F24]" aria-label="Switch subject: {subject.title}">
				<span class="h-6 w-1.5 shrink-0 rounded-full" style="background:var(--{accent})"></span>
				<span class="flex min-w-0 flex-1 flex-col">
					<span class="truncate text-sm font-extrabold text-foreground">{subject.title}</span>
					<span class="truncate text-[0.7rem] font-extrabold tracking-wide text-muted-foreground uppercase">{subject.subjectCategory.replace(' — Supplement', '')}</span>
				</span>
				<ChevronsUpDown class="size-4 shrink-0 text-muted-foreground" />
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Content sideOffset={6} align="start" class="z-[60] w-72 rounded-2xl border-2 border-b-4 border-slate-200 bg-popover p-1.5 shadow-xl outline-none dark:border-[#2B434E]">
					{#each modules as m (m.id)}
						{@const mMcqs = m.mcqs.length || m.mcqCount || 0}
						{@const mEssays = m.essays.length || m.essayCount || 0}
						<a
							href={mode === 'read' ? `/module/${m.id}/read` : `/module/${m.id}/${mode === 'practice' && mMcqs ? 'practice' : mode === 'essays' && mEssays ? 'essays' : 'read'}`}
							onclick={() => ((switcherOpen = false), onnavigate?.())}
							aria-current={m.id === subject.id ? 'page' : undefined}
							class={cn('flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-bold text-foreground no-underline hover:bg-muted', m.id === subject.id && 'bg-[#DDF4FF] font-extrabold text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]')}
						>
							<span class="h-4 w-1.5 shrink-0 rounded-full" style="background:var(--{CATEGORY_ACCENT[m.subjectCategory]})"></span>
							{m.title}
						</a>
					{/each}
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
		{#if collapsible}
			<button type="button" onclick={() => prefs.set('navCollapsed', true)} aria-label="Hide navigator" title="Hide navigator" class="grid size-10 shrink-0 place-items-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground">
				<PanelLeft class="size-[1.1rem]" />
			</button>
		{/if}
	</div>

	<nav aria-label="{subject.title} sections" class="grid grid-cols-3 gap-1 rounded-2xl border-2 border-slate-200 bg-slate-100 p-1 dark:border-[#2B434E] dark:bg-[#131F24]">
		<a href={tabHref('read')} onclick={() => onnavigate?.()} aria-current={mode === 'read' ? 'page' : undefined} class={tab(mode === 'read')}>Read</a>
		{#if subjectMcqTotal}
			<a href={tabHref('practice')} onclick={() => onnavigate?.()} aria-current={mode === 'practice' ? 'page' : undefined} class={tab(mode === 'practice')}>MCQs <span class={cn('text-[0.7rem] font-extrabold tabular-nums', mode === 'practice' ? 'opacity-90' : 'opacity-70')}>{subjectMcqTotal}</span></a>
		{:else}
			<span class={cn(tab(false), 'opacity-50')} aria-disabled="true">MCQs</span>
		{/if}
		{#if subjectEssayTotal}
			<a href={tabHref('essays')} onclick={() => onnavigate?.()} aria-current={mode === 'essays' ? 'page' : undefined} class={tab(mode === 'essays')}>Essays <span class={cn('text-[0.7rem] font-extrabold tabular-nums', mode === 'essays' ? 'opacity-90' : 'opacity-70')}>{subjectEssayTotal}</span></a>
		{:else}
			<span class={cn(tab(false), 'opacity-50')} aria-disabled="true">Essays</span>
		{/if}
	</nav>

	{#if mode === 'read'}
		<label class="flex h-10 items-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-3 text-muted-foreground focus-within:border-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#131F24]">
			<ListFilter class="size-3.5 shrink-0" />
			<input bind:value={filter} type="text" placeholder="Filter parts and topics" aria-label="Filter parts and topics" class="min-w-0 flex-1 bg-transparent text-[0.8125rem] font-semibold text-foreground outline-none placeholder:text-muted-foreground" />
		</label>
		<nav aria-label="{subject.title} contents" class="flex flex-col gap-0.5">
			{#if !shownGroups.length}
				<p class="px-2.5 py-3 text-sm font-semibold text-muted-foreground">Nothing matches “{filter}”.</p>
			{/if}
			{#each shownGroups as g (g.title)}
				{#if groups.length > 1}<p class="label-caps px-2.5 pt-3 pb-1 text-[0.6875rem]">{g.title}</p>{/if}
				{#each g.parts as p (p.id)}
					{@const open = isOpen(p)}
					{@const prog = userStorage.readingProgress(unitKeys(p))}
					{@const current = p.id === partId}
					<div class="flex items-center">
						{#if p.topics.length}
							<button
								type="button"
								onclick={() => (expanded[p.id] = !open)}
								aria-expanded={open}
								aria-label="{open ? 'Collapse' : 'Expand'} {p.title}"
								class="grid size-8 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
							>
								{#if open}<ChevronDown class="size-3.5" />{:else}<ChevronRight class="size-3.5" />{/if}
							</button>
						{:else}
							<span class="grid size-8 shrink-0 place-items-center" aria-hidden="true">
								<span class={cn('size-2.5 rounded-full border-2 border-slate-300 dark:border-[#36525F]', prog.studied ? 'border-[#58CC02] bg-[#58CC02]' : prog.visited && 'border-[#58CC02]')}></span>
							</span>
						{/if}
						<a
							href={readHref(subject.id, p.id)}
							onclick={() => onnavigate?.()}
							aria-current={current && !hash ? 'page' : current ? 'location' : undefined}
							class={cn(row, 'pl-1.5', current ? 'border-[#1CB0F6] bg-[#DDF4FF] font-extrabold text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]' : 'text-muted-foreground hover:bg-muted hover:text-foreground')}
							title={p.title}
						>
							<span class="min-w-0 flex-1 truncate">
								{#if p.label}<span class="font-extrabold">{p.label}</span> {p.name}{:else}{p.title}{/if}
							</span>
							{#if p.units.length > 1}<span class="shrink-0 text-xs font-extrabold tabular-nums opacity-75">{prog.studied}/{prog.total}</span>{/if}
						</a>
					</div>
					{#if open && p.topics.length}
						<ul class="mb-1 ml-[1.0625rem] flex flex-col gap-px border-l-2 border-slate-200 pl-2 dark:border-[#2B434E]">
							{#each p.topics as t (t.id)}
								{@const st = unitState(p, t.id)}
								<li>
									<a
										href={readHref(subject.id, p.id, t.id)}
										onclick={() => onnavigate?.()}
										aria-current={current && hash === t.id ? 'location' : undefined}
										class={cn(row, 'min-h-8 text-[0.8125rem]', current && hash === t.id ? 'bg-[#DDF4FF] font-extrabold text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]' : 'text-muted-foreground hover:bg-muted hover:text-foreground')}
									>
										<span
											class={cn('size-2.5 shrink-0 rounded-full border-2 border-slate-300 dark:border-[#36525F]', st === 'studied' && 'border-[#58CC02] bg-[#58CC02]', st === 'visited' && 'border-[#58CC02]')}
											aria-hidden="true"
										></span>
										<span class="truncate">{t.title}</span>
										<span class="sr-only">{st === 'studied' ? '(studied)' : st === 'visited' ? '(visited)' : ''}</span>
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				{/each}
			{/each}
		</nav>
	{:else if mode === 'practice'}
		<nav aria-label="Question topics" class="flex flex-col gap-1">
			<a href={practiceHref('all')} onclick={() => onnavigate?.()} aria-current={topicParam === 'all' ? 'page' : undefined} class={cn(row, topicParam === 'all' ? 'border-[#1CB0F6] bg-[#DDF4FF] font-extrabold text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]' : 'text-muted-foreground hover:bg-muted hover:text-foreground')}>
				<span class="flex-1 truncate">All questions</span><span class="text-xs font-extrabold tabular-nums">{subject.mcqs.length}</span>
			</a>
			<p class="label-caps px-2.5 pt-3 pb-1 text-[0.6875rem]">Topics</p>
			{#each practiceTopics as t (t.id)}
				{@const c = topicCounts.get(t.id)}
				<a
					href={practiceHref(t.id)}
					onclick={() => onnavigate?.()}
					aria-current={topicParam === t.id ? 'page' : undefined}
					title={t.desc}
					class={cn(row, topicParam === t.id ? 'border-[#1CB0F6] bg-[#DDF4FF] font-extrabold text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]' : 'text-muted-foreground hover:bg-muted hover:text-foreground')}
				>
					<span class="flex-1 truncate">{t.name}</span>
					<span class="shrink-0 text-xs font-extrabold tabular-nums">{c?.answered ?? 0}/{c?.total ?? 0}</span>
				</a>
			{/each}
		</nav>
	{:else if mode === 'essays'}
		{#if sources.length > 0}
			<div role="group" aria-label="Filter essays by source" class="mb-1.5 flex flex-wrap gap-1.5">
				{#each sources as src (src)}
					<a
						href={sourceHref(src)}
						aria-current={sourceParam === src ? 'true' : undefined}
						class={cn('inline-flex h-8 items-center gap-1.5 rounded-xl border-2 border-b-3 px-2.5 text-xs font-extrabold tracking-wide uppercase no-underline transition-all', sourceParam === src ? 'border-[#1899D6] bg-[#1CB0F6] text-white' : 'border-slate-200 bg-white text-foreground hover:bg-muted dark:border-[#2B434E] dark:bg-[#131F24]')}
					>
						{src === 'all' ? 'All' : src} <span class="tabular-nums opacity-75">{sourceCounts[src] ?? 0}</span>
					</a>
				{/each}
			</div>
		{/if}
		<div role="group" aria-label="Filter essays by status" class="flex flex-wrap gap-1.5">
			{#each STATUSES as s (s)}
				<a
					href={statusHref(s)}
					aria-current={statusParam === s ? 'true' : undefined}
					class={cn('inline-flex h-8 items-center gap-1.5 rounded-xl border-2 border-b-3 px-2.5 text-xs font-extrabold tracking-wide uppercase no-underline transition-all', statusParam === s ? 'border-[#1899D6] bg-[#1CB0F6] text-white' : 'border-slate-200 bg-white text-foreground hover:bg-muted dark:border-[#2B434E] dark:bg-[#131F24]')}
				>
					{s === 'all' ? 'All' : ESSAY_STATUS[s].label} <span class="tabular-nums opacity-75">{statusCounts[s]}</span>
				</a>
			{/each}
		</div>
		<nav aria-label="Essay problems" class="flex flex-col gap-0.5">
			{#each essayGroups as [topic, items] (topic)}
				<p class="label-caps px-2.5 pt-3 pb-1 text-[0.6875rem]">{topic}</p>
				{#each items as e (e.id)}
					{@const st = statusOf(e)}
					<a
						href={essayHref(e.id)}
						onclick={() => onnavigate?.()}
						aria-current={e.id === essayParam ? 'page' : undefined}
						class={cn(row, e.id === essayParam ? 'border-[#1CB0F6] bg-[#DDF4FF] font-extrabold text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]' : 'text-muted-foreground hover:bg-muted hover:text-foreground')}
					>
						<span class={cn('size-2.5 shrink-0 rounded-full', ESSAY_STATUS[st].dot)} aria-hidden="true"></span>
						<span class="truncate">{e.title.replace(/^.*— (Problem \d+)$/, '$1')}</span>
						<span class="sr-only">({ESSAY_STATUS[st].label})</span>
					</a>
				{/each}
			{:else}
				<p class="px-2.5 py-3 text-sm font-semibold text-muted-foreground">No essays with this status.</p>
			{/each}
		</nav>
	{:else}
		<nav aria-label="{subject.title} study tools" class="flex flex-col gap-1">
			<p class="label-caps px-2.5 pt-1 pb-1 text-[0.6875rem]">Finals Kit &amp; Subtabs</p>
			{#each subtabs as t (t.id)}
				<a
					href="/module/{subject.id}/{t.path}"
					onclick={() => onnavigate?.()}
					aria-current={activeSubtab === t.id ? 'page' : undefined}
					class={cn(
						row,
						'flex-col items-start gap-0.5 py-2',
						activeSubtab === t.id
							? 'border-[#1CB0F6] bg-[#DDF4FF] font-extrabold text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]'
							: 'text-muted-foreground hover:bg-muted hover:text-foreground'
					)}
				>
					<span class="truncate text-sm font-extrabold">{t.label}</span>
					{#if t.desc}<span class="truncate text-[0.72rem] font-semibold opacity-80">{t.desc}</span>{/if}
				</a>
			{/each}
		</nav>
	{/if}
</div>
