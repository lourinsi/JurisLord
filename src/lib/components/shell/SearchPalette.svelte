<script lang="ts">
	import { BookOpen, CornerDownLeft, FileText, GraduationCap, History, PenLine, Search, SearchX, Target, X } from '@lucide/svelte';
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { CATEGORY_ACCENT, getModule, loadAllSubjects } from '$lib/data/modules';
	import { getPart, readHref } from '$lib/content';
	import { buildIndex, search, searchSubjects, suggest, KIND_LABEL, type SearchHit } from '$lib/search';
	import { prefs } from '$lib/stores/prefs.svelte';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { cn } from '$lib/utils';

	let query = $state('');
	let debounced = $state('');
	let ready = $state(false);
	let active = $state(0);
	let scope = $state<'all' | 'subject' | 'part'>('all');
	let input: HTMLInputElement | null = $state(null);
	let listEl: HTMLElement | null = $state(null);

	const subject = $derived(page.params.slug ? getModule(page.params.slug) : undefined);
	const part = $derived(subject && page.params.part ? getPart(subject, decodeURIComponent(page.params.part)) : undefined);

	// Opening: take the seed and scope, load subjects on demand and build the index off the main path so the dialog paints first.
	$effect(() => {
		if (!ui.searchOpen) return;
		query = ui.searchSeed;
		debounced = ui.searchSeed;
		scope = ui.searchScope === 'part' && part ? 'part' : ui.searchScope === 'subject' && subject ? 'subject' : 'all';
		active = 0;
		ready = false;
		setTimeout(() => {
			void loadAllSubjects().then(() => {
				buildIndex();
				ready = true;
			});
		}, 0);
	});

	$effect(() => {
		const v = query;
		const t = setTimeout(() => {
			debounced = v;
			active = 0;
		}, 90);
		return () => clearTimeout(t);
	});

	const opts = $derived({
		subjects: scope !== 'all' && subject ? [subject.id] : undefined,
		part: scope === 'part' && part ? part.id : undefined
	});
	const subjectHits = $derived(
		debounced.trim().length >= 2
			? searchSubjects(debounced, scope === 'part' && subject ? { subjects: [subject.id] } : {})
			: []
	);
	const hits = $derived(ready && debounced.trim().length >= 2 ? search(debounced, { ...opts, limit: 60 }) : []);
	const headingHits = $derived(
		hits
			.filter((h) => h.headingMatch && h.doc.kind !== 'mcq' && h.doc.kind !== 'subject')
			.slice(0, Math.max(2, 4 - subjectHits.length))
	);
	const goTo = $derived([...subjectHits, ...headingHits]);
	const inText = $derived(hits.filter((h) => !headingHits.includes(h) && h.doc.kind !== 'subject').slice(0, 6));
	const flat = $derived([...goTo, ...inText]);
	const suggestion = $derived(ready && debounced.trim().length >= 3 && !flat.length ? suggest(debounced) : null);
	const recent = $derived(prefs.value.keepRecentSearches ? userStorage.reading.recentSearches.slice(0, 5) : []);
	const recentRead = $derived(userStorage.reading.recent.slice(0, 4));

	function hrefFor(h: SearchHit) {
		if (h.doc.kind !== 'guide' && h.doc.kind !== 'case') return h.doc.href;
		const [path, hash] = h.doc.href.split('#');
		return `${path}?q=${encodeURIComponent(debounced.trim())}${hash ? `#${hash}` : ''}`;
	}

	function remember() {
		if (prefs.value.keepRecentSearches) userStorage.addRecentSearch(debounced);
	}

	function open(href: string, save = true) {
		if (save) remember();
		ui.searchOpen = false;
		goto(href);
	}

	function allResultsHref() {
		const p = new URLSearchParams({ q: debounced.trim() || query.trim() });
		if (opts.subjects) p.set('s', opts.subjects.join(','));
		return `/search?${p}`;
	}

	function onKey(e: KeyboardEvent) {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			active = Math.min(active + 1, Math.max(0, flat.length - 1));
			scrollActive();
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			active = Math.max(active - 1, 0);
			scrollActive();
		} else if (e.key === 'Enter') {
			e.preventDefault();
			if (e.metaKey || e.ctrlKey || !flat.length) {
				if (query.trim().length >= 2) open(allResultsHref());
			} else open(hrefFor(flat[Math.min(active, flat.length - 1)]));
		}
	}

	function scrollActive() {
		requestAnimationFrame(() => listEl?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' }));
	}

	const ICON = { subject: GraduationCap, guide: BookOpen, case: FileText, mcq: Target, essay: PenLine } as const;
	const where = (h: SearchHit) =>
		h.doc.kind === 'subject'
			? h.doc.path.join(' · ')
			: [scope === 'all' ? h.doc.subjectTitle : '', ...h.doc.path].filter(Boolean).join(' · ');
	const scopeBtn = (on: boolean) => cn('h-8 rounded-xl border-2 border-b-3 px-3 text-xs font-extrabold tracking-wide uppercase transition-all', on ? 'border-[#1899D6] bg-[#1CB0F6] text-white' : 'border-slate-200 bg-white text-muted-foreground hover:text-foreground dark:border-[#2B434E] dark:bg-[#1A2C34]');
</script>

<DialogPrimitive.Root bind:open={ui.searchOpen}>
	<DialogPrimitive.Portal>
		<DialogPrimitive.Overlay class="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]" />
		<DialogPrimitive.Content
			class="fixed top-[8vh] left-1/2 z-50 flex max-h-[84dvh] w-[min(46rem,calc(100vw-1.5rem))] -translate-x-1/2 flex-col overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-popover shadow-2xl outline-none max-sm:top-2 max-sm:max-h-[calc(100dvh-1rem)] dark:border-[#2B434E]"
			onOpenAutoFocus={(e) => {
				e.preventDefault();
				input?.focus();
				input?.select();
			}}
		>
			<DialogPrimitive.Title class="sr-only">Search</DialogPrimitive.Title>
			<div class="flex h-14 shrink-0 items-center gap-3 border-b-2 border-slate-100 px-4 dark:border-[#2B434E]">
				<Search class="size-5 shrink-0 text-[#1CB0F6]" strokeWidth={2.5} />
				<input
					bind:this={input}
					bind:value={query}
					onkeydown={onKey}
					type="search"
					autocomplete="off"
					spellcheck="false"
					placeholder="Search subjects (crim pro, consti…), rules, cases, questions"
					aria-label="Search"
					aria-controls="palette-results"
					aria-activedescendant={flat.length ? `palette-opt-${active}` : undefined}
					class="h-full min-w-0 flex-1 bg-transparent text-[1.0625rem] font-bold text-foreground outline-none placeholder:font-semibold placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
				/>
				{#if query}
					<button type="button" onclick={() => ((query = ''), input?.focus())} class="grid size-8 place-items-center rounded-xl text-muted-foreground hover:bg-muted" aria-label="Clear search"><X class="size-4" /></button>
				{/if}
				<DialogPrimitive.Close class="rounded-xl border-2 border-b-3 border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-extrabold text-muted-foreground hover:text-foreground dark:border-[#2B434E] dark:bg-[#131F24]">Esc</DialogPrimitive.Close>
			</div>

			{#if subject}
				<div role="group" aria-label="Search in" class="flex shrink-0 flex-wrap gap-1.5 border-b-2 border-slate-100 px-4 py-2.5 dark:border-[#2B434E]">
					<button type="button" class={scopeBtn(scope === 'all')} aria-pressed={scope === 'all'} onclick={() => ((scope = 'all'), input?.focus())}>All subjects</button>
					<button type="button" class={scopeBtn(scope === 'subject')} aria-pressed={scope === 'subject'} onclick={() => ((scope = 'subject'), input?.focus())}>{subject.title}</button>
					{#if part}
						<button type="button" class={scopeBtn(scope === 'part')} aria-pressed={scope === 'part'} onclick={() => ((scope = 'part'), input?.focus())}>{part.label || part.title}</button>
					{/if}
				</div>
			{/if}

			<div bind:this={listEl} id="palette-results" role="listbox" aria-label="Results" class="hit-text min-h-0 flex-1 overflow-y-auto p-2">
				{#if !ready && !subjectHits.length && query.trim().length >= 2}
					<div class="space-y-2 p-2" aria-busy="true" aria-label="Preparing search">
						{#each [0, 1, 2] as i (i)}<div class="h-12 animate-pulse rounded-lg bg-muted"></div>{/each}
					</div>
				{:else if debounced.trim().length < 2}
					{#if recent.length}
						<div class="flex items-center justify-between px-3 pt-2 pb-1">
							<p class="label-caps text-[0.7rem]">Recent searches</p>
							<button type="button" class="text-xs text-muted-foreground hover:text-foreground" onclick={() => userStorage.clearRecentSearches()}>Clear</button>
						</div>
						{#each recent as r (r.q)}
							<button type="button" class="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-[0.9375rem] hover:bg-muted" onclick={() => ((query = r.q), input?.focus())}>
								<History class="size-4 shrink-0 text-muted-foreground" /><span class="truncate">{r.q}</span>
							</button>
						{/each}
					{/if}
					{#if recentRead.length}
						<p class="label-caps px-3 pt-3 pb-1 text-[0.7rem]">Recently read</p>
						{#each recentRead as loc (loc.subjectId + loc.partId)}
							<button type="button" class="flex min-h-11 w-full items-center gap-3 rounded-lg px-3 py-1.5 text-left hover:bg-muted" onclick={() => open(readHref(loc.subjectId, loc.partId, loc.anchor), false)}>
								<BookOpen class="size-4 shrink-0 text-muted-foreground" />
								<span class="flex min-w-0 flex-col">
									<span class="truncate text-[0.9375rem] font-medium">{loc.title}</span>
									<span class="truncate text-xs text-muted-foreground">{getModule(loc.subjectId)?.title}</span>
								</span>
							</button>
						{/each}
					{/if}
					{#if !recent.length && !recentRead.length}
						<p class="px-3 py-6 text-center text-sm text-muted-foreground">Search subjects (e.g. crim pro, consti, pfr, statcon), guides, case digests, MCQs and ALAC essays.</p>
					{/if}
				{:else if !flat.length}
					<div role="status" class="flex flex-col items-center gap-2 px-4 py-8 text-center">
						<SearchX class="size-7 text-muted-foreground" />
						<p class="font-semibold">Nothing {scope === 'all' ? '' : `in ${scope === 'part' ? (part?.label || part?.title) : subject?.title} `}matches “{debounced.trim()}”</p>
						{#if suggestion}
							<p class="text-sm text-muted-foreground">Did you mean <button type="button" class="font-semibold text-blue underline-offset-2 hover:underline" onclick={() => ((query = suggestion ?? ''), input?.focus())}>{suggestion}</button>?</p>
						{/if}
						{#if scope !== 'all'}
							<button type="button" class="mt-1 h-9 rounded-lg border px-3 text-sm font-medium hover:bg-muted" onclick={() => ((scope = 'all'), input?.focus())}>Search all subjects instead</button>
						{:else if !suggestion}
							<p class="text-sm text-muted-foreground">Try fewer words, a subject acronym (crim pro, consti, pfr), an article number, or a case name.</p>
						{/if}
					</div>
				{:else}
					{#each [{ label: 'Go to', items: goTo }, { label: 'In the text', items: inText }] as group (group.label)}
						{#if group.items.length}
							<p class="label-caps px-3 pt-2 pb-1 text-[0.7rem]">{group.label}</p>
							{#each group.items as h (h.doc.id)}
								{@const i = flat.indexOf(h)}
								{@const Icon = ICON[h.doc.kind]}
								{@const isSubject = h.doc.kind === 'subject'}
								{@const sub = isSubject ? getModule(h.doc.subjectId) : undefined}
								<a
									id="palette-opt-{i}"
									role="option"
									aria-selected={i === active}
									href={hrefFor(h)}
									onclick={(e) => {
										e.preventDefault();
										open(hrefFor(h));
									}}
									onmousemove={() => (active = i)}
									class={cn(
										'flex min-h-11 items-start gap-3 rounded-xl px-3 py-2 text-foreground no-underline transition-colors',
										isSubject && 'items-center py-2.5',
										i === active && 'bg-muted ring-1 ring-input'
									)}
								>
									{#if isSubject}
										<span
											class="grid size-8 shrink-0 place-items-center rounded-xl text-white shadow-xs"
											style="background:var(--{sub ? CATEGORY_ACCENT[sub.subjectCategory] : 'blue'})"
										>
											<Icon class="size-4" strokeWidth={2.5} />
										</span>
									{:else}
										<Icon class="mt-0.5 size-4 shrink-0 text-muted-foreground" />
									{/if}
									<span class="flex min-w-0 flex-1 flex-col gap-0.5">
										{#if isSubject}
											<span class="flex items-center gap-2">
												<span class="truncate text-[0.95rem] font-extrabold">{@html h.titleHtml}</span>
												<span class="shrink-0 rounded-full bg-[#DDF4FF] px-2 py-0.5 text-[0.65rem] font-extrabold tracking-wide text-[#1899D6] uppercase dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]">
													Subject
												</span>
											</span>
											<span class="truncate text-xs font-semibold text-muted-foreground">{where(h)}</span>
										{:else if group.label === 'Go to'}
											<span class="truncate text-[0.9375rem] font-medium">{@html h.titleHtml}</span>
											<span class="truncate text-xs text-muted-foreground">{KIND_LABEL[h.doc.kind]} · {where(h)}</span>
										{:else}
											<span class="line-clamp-2 font-serif text-[0.9375rem] text-muted-foreground">{@html h.excerpt}</span>
											<span class="truncate text-xs text-muted-foreground">{KIND_LABEL[h.doc.kind]} · {where(h)}</span>
										{/if}
									</span>
									{#if i === active}<CornerDownLeft class="mt-1 size-3.5 shrink-0 text-muted-foreground" />{/if}
								</a>
							{/each}
						{/if}
					{/each}
				{/if}
			</div>

			{#if debounced.trim().length >= 2 && flat.length}
				<div class="flex shrink-0 items-center gap-4 border-t bg-background/60 px-4 py-2.5 text-xs text-muted-foreground">
					{#if hits.length}
						<a href={allResultsHref()} onclick={(e) => (e.preventDefault(), open(allResultsHref()))} class="flex-1 text-sm font-medium text-blue no-underline hover:underline">See all {hits.length >= 60 ? '60+' : hits.length} results</a>
					{:else}
						<span class="flex-1 text-xs font-semibold text-muted-foreground">Press Enter to open subject</span>
					{/if}
					<span class="max-sm:hidden"><kbd class="rounded border px-1">↑</kbd> <kbd class="rounded border px-1">↓</kbd> move</span>
					<span class="max-sm:hidden"><kbd class="rounded border px-1">↵</kbd> open</span>
				</div>
			{/if}
		</DialogPrimitive.Content>
	</DialogPrimitive.Portal>
</DialogPrimitive.Root>
