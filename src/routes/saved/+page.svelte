<script lang="ts">
	import { Bookmark, Highlighter, History, Link2, NotebookPen, Pencil, Plus, RotateCcw, Search, Target, Trash2, TriangleAlert } from '@lucide/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import EmptyState from '$lib/components/common/EmptyState.svelte';
	import Segmented from '$lib/components/common/Segmented.svelte';
	import HighlightEditor from '$lib/components/HighlightEditor.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { canonicalModuleId } from '$lib/data/aliases';
	import { CATEGORY_ACCENT, getModule, modules, subjectForItem } from '$lib/data/modules';
	import { partForScope, readHref, type Part } from '$lib/content';
	import { userStorage, type ExamWeightRecord, type UserNote } from '$lib/stores/storage.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { formatWeightDelta, formatWeightMultiplier } from '$lib/unified-exam';
	import { cn, formatClock, pct } from '$lib/utils';
	import type { Subject, UserHighlight } from '$lib/types';

	type Tab = 'highlights' | 'notes' | 'bookmarks' | 'history';
	const tab = $derived((['notes', 'bookmarks', 'history'].includes(page.url.searchParams.get('tab') ?? '') ? page.url.searchParams.get('tab') : 'highlights') as Tab);
	const historyItems = $derived(
		userStorage.testHistory.filter((h) => !f || `${h.subjectTitle} ${h.topicName} ${h.mode}`.toLowerCase().includes(f))
	);
	const totalModifiedWeights = $derived(
		Object.values(userStorage.examWeights).filter((r) => r && r.weight !== 1).length
	);

	function resolveWeightPrompt(subject: Subject | undefined, id: string, rec: ExamWeightRecord) {
		const mcq = subject?.mcqs.find((x) => x.id === id);
		if (mcq) return { prompt: mcq.question, topic: mcq.topic, kindLabel: 'MCQ', isMcq: true, topicId: mcq.topicId ?? 'all' };
		const essay = subject?.essays.find((x) => x.id === id);
		if (essay) return { prompt: essay.title, topic: essay.topic, kindLabel: 'Essay', isMcq: false, topicId: '' };
		return {
			prompt: rec.prompt || id,
			topic: rec.topic || '',
			kindLabel: rec.kind ? rec.kind.toUpperCase() : 'Item',
			isMcq: rec.kind === 'mcq',
			topicId: 'all'
		};
	}

	const weightGroupsBySubject = $derived.by(() => {
		const map = new Map<
			string,
			{
				subject: Subject;
				boosted: number;
				lowered: number;
				items: {
					id: string;
					weight: number;
					streak: number;
					prompt: string;
					topic: string;
					kindLabel: string;
					isMcq: boolean;
					topicId: string;
					updatedAt: number;
				}[];
			}
		>();
		for (const [id, rec] of Object.entries(userStorage.examWeights)) {
			if (!rec || rec.weight === 1) continue;
			const subjectId = canonicalModuleId(rec.subjectId ?? id.split(':')[0]);
			const subject = getModule(subjectId) ?? subjectForItem(id);
			if (!subject) continue;
			const resolved = resolveWeightPrompt(subject, id, rec);
			if (
				f &&
				!`${subject.title} ${resolved.prompt} ${resolved.topic} ${resolved.kindLabel}`.toLowerCase().includes(f)
			) {
				continue;
			}
			let group = map.get(subject.id);
			if (!group) {
				group = { subject, boosted: 0, lowered: 0, items: [] };
				map.set(subject.id, group);
			}
			if (rec.weight > 1) group.boosted++;
			else group.lowered++;
			group.items.push({
				id,
				weight: rec.weight,
				streak: rec.streak,
				...resolved,
				updatedAt: rec.updatedAt
			});
		}
		const order = (s: Subject) => modules.indexOf(s);
		const groups = [...map.values()].sort((a, b) => order(a.subject) - order(b.subject));
		for (const g of groups) {
			g.items.sort((a, b) => b.weight - a.weight || b.updatedAt - a.updatedAt);
		}
		return groups;
	});
	const noteParam = $derived(page.url.searchParams.get('note') ?? '');
	let filter = $state('');
	const f = $derived(filter.trim().toLowerCase());

	function setTab(t: Tab) {
		const url = new URL(page.url.href);
		url.searchParams.set('tab', t);
		url.searchParams.delete('note');
		goto(url, { replace: true, reset: false });
	}

	// ---- highlights: by subject, then part; ones whose text is gone go to their own list ----
	const partText = new Map<string, string>();
	function textOfPart(subject: Subject, part: Part) {
		const k = `${subject.id}/${part.id}`;
		let t = partText.get(k);
		if (t === undefined) {
			// The same text the reader's highlighter sees: parsed like the DOM, whitespace collapsed.
			t =
				part.kind === 'guide'
					? (new DOMParser().parseFromString(part.chunks.map((c) => c.html).join(''), 'text/html').body.textContent ?? '')
					: part.caseGroups.flatMap((g) => g.cases.map((c) => `${c.title} ${c.citation} ${c.keyRule} ${c.summary}`)).join(' ');
			t = t.replace(/[\s\u00a0]+/g, ' ');
			partText.set(k, t);
		}
		return t;
	}

	const highlightGroups = $derived.by(() => {
		const found = new Map<string, { subject: Subject; part: Part; items: UserHighlight[] }>();
		const lost: { subject?: Subject; h: UserHighlight }[] = [];
		for (const h of Object.values(userStorage.highlights)) {
			if (f && !`${h.quote} ${h.note ?? ''} ${userStorage.highlightLabel(h.color)}`.toLowerCase().includes(f)) continue;
			const subject = getModule(h.moduleId);
			const part = subject && partForScope(subject, h.scope);
			if (!subject || !part || !textOfPart(subject, part).includes(h.quote)) {
				lost.push({ subject, h });
				continue;
			}
			const k = `${subject.id}/${part.id}`;
			const g = found.get(k) ?? { subject, part, items: [] };
			g.items.push(h);
			found.set(k, g);
		}
		const order = (s: Subject) => modules.indexOf(s);
		const groups = [...found.values()].sort((a, b) => order(a.subject) - order(b.subject) || a.part.index - b.part.index);
		for (const g of groups) g.items.sort((a, b) => a.start - b.start);
		return { groups, lost };
	});
	const highlightTotal = $derived(Object.keys(userStorage.highlights).length);
	let editing = $state<string | null>(null);

	// ---- notes ----
	const notes = $derived(userStorage.reading.notes.filter((n) => !f || `${n.title} ${n.body} ${n.link?.title ?? ''}`.toLowerCase().includes(f)));
	const openNote = $derived(userStorage.reading.notes.find((n) => n.id === noteParam));
	let confirmDelete = $state<UserNote | null>(null);
	let savedTick = $state(0);

	function newNote() {
		const id = userStorage.addNote();
		goto(`/saved?tab=notes&note=${encodeURIComponent(id)}`, { replace: true, reset: false });
	}
	function edit(id: string, patch: Partial<Pick<UserNote, 'title' | 'body'>>) {
		userStorage.updateNote(id, patch);
		savedTick = Date.now();
	}
	function deleteNote(n: UserNote) {
		userStorage.removeNote(n.id);
		confirmDelete = null;
		if (noteParam === n.id) goto('/saved?tab=notes', { replace: true, reset: false });
		ui.toast('Note deleted');
	}

	// ---- bookmarks: guide places and MCQs ----
	const guideBookmarks = $derived(userStorage.reading.bookmarks.filter((b) => !f || b.title.toLowerCase().includes(f)));
	const mcqBookmarks = $derived(
		userStorage.bookmarks
			.map((id) => {
				const s = subjectForItem(id);
				const q = s?.mcqs.find((x) => x.id === id);
				return s && q ? { id, s, q } : null;
			})
			.filter((x): x is NonNullable<typeof x> => !!x && (!f || x.q.question.toLowerCase().includes(f)))
	);

	const accentOf = (s?: Subject) => (s ? CATEGORY_ACCENT[s.subjectCategory] : 'border');
	const date = (t: number) => new Date(t).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
</script>

<svelte:head><title>Saved — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[75rem] flex-col gap-6 px-4 pt-8 pb-16 sm:px-8">
	<header class="flex flex-col gap-2">
		<h1 class="font-heading text-3xl font-extrabold">Saved</h1>
		<p class="text-[0.9375rem] font-semibold text-muted-foreground">Everything you've marked, across subjects. Each item opens where you saved it.</p>
	</header>

	<div class="flex flex-wrap items-center gap-3">
		<Segmented
			label="Saved items"
			value={tab}
			onchange={setTab}
			options={[
				{ value: 'highlights', label: 'Highlights', count: highlightTotal },
				{ value: 'notes', label: 'Notes', count: userStorage.reading.notes.length },
				{ value: 'bookmarks', label: 'Bookmarks', count: userStorage.reading.bookmarks.length + userStorage.bookmarks.length },
				{ value: 'history', label: 'History', count: userStorage.testHistory.length }
			]}
		/>
		<label class="flex h-11 min-w-0 flex-[1_1_16rem] items-center gap-2 rounded-2xl border-2 border-b-4 border-slate-200 bg-white px-3.5 text-muted-foreground focus-within:border-[#1CB0F6] sm:max-w-sm dark:border-[#2B434E] dark:bg-[#1A2C34]">
			<Search class="size-4 shrink-0 text-[#1CB0F6]" />
			<input bind:value={filter} type="search" placeholder="Search your {tab}" aria-label="Search your {tab}" class="min-w-0 flex-1 bg-transparent text-sm font-bold text-foreground outline-none placeholder:font-semibold placeholder:text-muted-foreground" />
		</label>
		{#if tab === 'notes'}<Button onclick={newNote} class="ml-auto"><Plus /> New note</Button>{/if}
		{#if tab === 'history' && userStorage.testHistory.length > 0}
			<Button variant="outline" onclick={() => (userStorage.clearTestHistory(), ui.toast('Test history cleared'))} class="ml-auto"><Trash2 /> Clear history</Button>
		{/if}
	</div>

	{#if tab === 'highlights'}
		{#if !highlightTotal}
			<EmptyState icon={Highlighter} title="No highlights yet">Select any text in a guide or case digest and pick a color. Highlights and their notes collect here.</EmptyState>
		{:else if !highlightGroups.groups.length && !highlightGroups.lost.length}
			<EmptyState icon={Search} title="No highlights match “{filter}”" />
		{:else}
			<div class="flex flex-col gap-5">
				{#each highlightGroups.groups as g (g.subject.id + g.part.id)}
					<section class="overflow-hidden rounded-xl border bg-card">
						<div class="flex flex-wrap items-center gap-x-3 gap-y-1 px-5 py-3">
							<span class="h-4 w-1 rounded-full" style="background:var(--{accentOf(g.subject)})"></span>
							<h2 class="min-w-0 flex-1 text-[0.9375rem] font-semibold">{g.subject.title} <span class="font-normal text-muted-foreground">· {g.part.label ? `${g.part.label} — ${g.part.name}` : g.part.title}</span></h2>
							<a href={readHref(g.subject.id, g.part.id)} class="text-[0.8125rem] font-medium no-underline hover:underline">Open</a>
						</div>
						<ul>
							{#each g.items as h (h.id)}
								<li class="border-t px-5 py-4">
									<div class="flex items-start gap-3">
										<a href="{readHref(g.subject.id, g.part.id)}?hl={encodeURIComponent(h.id)}" class="flex min-w-0 flex-1 flex-col gap-1.5 text-foreground no-underline">
											<span class="flex items-center gap-2 text-xs font-semibold text-muted-foreground"><span class="size-3 rounded" style="background:color-mix(in oklab, var(--hl-{h.color}) 75%, transparent)"></span>{userStorage.highlightLabel(h.color)}</span>
											<span class="font-serif text-[1.0625rem] leading-relaxed">{h.quote}</span>
											{#if h.note?.trim() && editing !== h.id}<span class="font-serif text-[0.9375rem] whitespace-pre-line text-muted-foreground italic">{h.note}</span>{/if}
										</a>
										<button type="button" onclick={() => (editing = editing === h.id ? null : h.id)} aria-expanded={editing === h.id} aria-label="Edit highlight" class="grid size-9 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-muted"><Pencil class="size-4" /></button>
									</div>
									{#if editing === h.id}
										<div class="mt-3 rounded-lg border bg-popover p-3">
											<HighlightEditor highlight={h} ondone={() => (editing = null)} onremove={() => (userStorage.removeHighlight(h.id), (editing = null), ui.toast('Highlight removed'))} />
										</div>
									{/if}
								</li>
							{/each}
						</ul>
					</section>
				{/each}
				{#if highlightGroups.lost.length}
					<section class="overflow-hidden rounded-xl border border-dashed">
						<div class="flex items-center gap-2 px-5 py-3"><TriangleAlert class="size-4 text-orange" /><h2 class="text-[0.9375rem] font-semibold">No longer in the guide <span class="font-normal text-muted-foreground">· {highlightGroups.lost.length}</span></h2></div>
						<ul>
							{#each highlightGroups.lost as { subject, h } (h.id)}
								{@const part = subject && partForScope(subject, h.scope)}
								<li class="flex flex-wrap items-start gap-3 border-t px-5 py-4">
									<div class="flex min-w-0 flex-1 flex-col gap-1.5">
										<span class="text-xs text-muted-foreground"><span class="font-semibold">{userStorage.highlightLabel(h.color)}</span> · was in {subject?.title ?? h.moduleId}{part ? ` · ${part.label || part.title}` : ''}</span>
										<span class="font-serif text-base text-muted-foreground">{h.quote}</span>
										{#if h.note?.trim()}<span class="font-serif text-[0.9375rem] whitespace-pre-line text-muted-foreground italic">{h.note}</span>{/if}
									</div>
									<div class="flex gap-1.5">
										{#if subject && part}<Button variant="outline" size="sm" href="{readHref(subject.id, part.id)}?hl={encodeURIComponent(h.id)}">Re-attach in guide</Button>{/if}
										<Button variant="ghost" size="sm" class="text-destructive" onclick={() => (userStorage.removeHighlight(h.id), ui.toast('Highlight removed'))}><Trash2 /> Remove</Button>
									</div>
								</li>
							{/each}
						</ul>
					</section>
				{/if}
			</div>
		{/if}
	{:else if tab === 'notes'}
		<div class="flex flex-wrap items-start gap-6">
			<section aria-label="Notes" class="flex min-w-0 flex-[1_1_18rem] flex-col overflow-hidden rounded-xl border bg-card md:max-w-sm">
				{#each notes as n (n.id)}
					<a href="/saved?tab=notes&note={encodeURIComponent(n.id)}" aria-current={n.id === noteParam ? 'page' : undefined} class={cn('flex flex-col gap-1 border-t px-4 py-3 text-foreground no-underline first:border-t-0 hover:bg-popover', n.id === noteParam && 'bg-popover ring-1 ring-input ring-inset')}>
						<span class="truncate text-sm font-semibold">{n.title.trim() || 'Untitled note'}</span>
						{#if n.body.trim()}<span class="line-clamp-2 text-[0.8125rem] text-muted-foreground">{n.body}</span>{/if}
						<span class="text-xs text-muted-foreground">{n.link ? `${getModule(n.link.subjectId)?.title} · ${n.link.title} · ` : ''}edited {date(n.updatedAt)}</span>
					</a>
				{:else}
					<div class="p-6"><EmptyState icon={NotebookPen} title={f ? `No notes match “${filter}”` : 'No notes yet'} class="border-0 p-0">{#if !f}Add one here, or from “Add a note to this part” in the reader, which links it to that place.{/if}</EmptyState></div>
				{/each}
			</section>
			<section aria-label="Note" class="flex min-w-0 flex-[999_1_28rem] flex-col">
				{#if openNote}
					{#key openNote.id}
						<div class="flex flex-col gap-3 rounded-xl border bg-card p-5">
							<label for="note-title" class="sr-only">Title</label>
							<input id="note-title" value={openNote.title} oninput={(e) => edit(openNote.id, { title: e.currentTarget.value })} placeholder="Untitled note" class="bg-transparent font-heading text-2xl font-semibold outline-none placeholder:text-muted-foreground" />
							{#if openNote.link}
								<a href={readHref(openNote.link.subjectId, openNote.link.partId, openNote.link.anchor)} class="inline-flex items-center gap-1.5 self-start text-[0.8125rem] font-medium no-underline hover:underline"><Link2 class="size-3.5" /> {getModule(openNote.link.subjectId)?.title} · {openNote.link.title}</a>
							{/if}
							<label for="note-body" class="sr-only">Note</label>
							<textarea id="note-body" value={openNote.body} oninput={(e) => edit(openNote.id, { body: e.currentTarget.value })} rows="14" placeholder="Write your note…" class="min-h-64 w-full resize-y rounded-lg border border-input bg-popover p-3 font-serif text-[1.0625rem] leading-relaxed outline-none focus:border-ring"></textarea>
							<div class="flex items-center justify-between gap-3 text-xs text-muted-foreground">
								<span role="status">{savedTick ? 'Saved' : 'Saves as you type'} · edited {date(openNote.updatedAt)}</span>
								<Button variant="ghost" size="sm" class="text-destructive" onclick={() => (confirmDelete = openNote ?? null)}><Trash2 /> Delete</Button>
							</div>
						</div>
					{/key}
				{:else if notes.length}
					<p class="rounded-xl border border-dashed px-6 py-10 text-center text-sm text-muted-foreground">Choose a note to read or edit it.</p>
				{/if}
			</section>
		</div>
	{:else if tab === 'history'}
		{#if !userStorage.testHistory.length && !totalModifiedWeights}
			<EmptyState icon={History} title="No test history yet">Submit a timed exam or mock exam to record your past scores and adaptive question weights here.</EmptyState>
		{:else if !historyItems.length && !weightGroupsBySubject.length}
			<EmptyState icon={Search} title="No history matches “{filter}”" />
		{:else}
			<div class="flex flex-col gap-6">
				{#if historyItems.length}
					<div class="flex flex-col gap-3">
						{#each historyItems as h (h.id)}
							{@const scorePct = pct(h.correct, h.total)}
							<a href="/module/{h.subjectId}/exam" class="flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-b-4 border-slate-200 bg-card px-5 py-4 text-foreground no-underline transition-all hover:-translate-y-0.5 hover:border-[#1CB0F6]/60 dark:border-[#2B434E]">
								<div class="flex min-w-0 flex-col gap-1">
									<div class="flex flex-wrap items-center gap-2">
										<span class={cn('rounded-full px-2.5 py-0.5 text-[0.7rem] font-extrabold tracking-wide uppercase', h.mode === 'exam' ? 'bg-[#F3E8FF] text-[#8930C9] dark:bg-[#CE82FF]/20 dark:text-[#DDA6FF]' : 'bg-[#DDF4FF] text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]')}>
											{h.mode === 'exam' ? 'Timed exam' : 'Practice'}
										</span>
										<span class="text-sm font-extrabold">{h.subjectTitle}</span>
										<span class="text-xs font-bold text-muted-foreground">· {h.topicName}</span>
									</div>
									<span class="text-xs font-bold text-muted-foreground">
										{new Date(h.at).toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
										{#if h.secondsUsed !== undefined}· {formatClock(h.secondsUsed)} used{/if}
									</span>
								</div>
								<div class="flex items-center gap-3">
									<span class="text-sm font-extrabold text-muted-foreground tabular-nums">{h.correct}/{h.total} ({h.answered} answered)</span>
									<span class={cn('rounded-full px-3 py-1 text-sm font-extrabold tabular-nums', scorePct >= 75 ? 'bg-[#D7FFB8] text-[#46A302] dark:bg-[#58CC02]/20 dark:text-[#7BE328]' : scorePct >= 50 ? 'bg-[#FFF5CC] text-[#946200] dark:bg-[#FFC800]/20 dark:text-[#FFD633]' : 'bg-[#FFDFE0] text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]')}>
										{scorePct}%
									</span>
								</div>
							</a>
						{/each}
					</div>
				{/if}

				{#if weightGroupsBySubject.length}
					<div class="flex flex-col gap-4">
						<div class="flex flex-wrap items-center justify-between gap-2">
							<div>
								<h2 class="font-heading text-lg font-extrabold">Adaptive Mock Exam Weights</h2>
								<p class="text-xs font-semibold text-muted-foreground">
									Only questions with modified weights are shown (base 1× unchanged questions are hidden). Applies to subset mock exams (e.g. 20, 40 items).
								</p>
							</div>
							<Button variant="outline" size="sm" onclick={() => (userStorage.clearExamWeights(), ui.toast('All mock-exam weights reset to 1×'))}>
								<RotateCcw class="size-3.5" /> Reset all weights
							</Button>
						</div>

						{#each weightGroupsBySubject as g (g.subject.id)}
							<section class="overflow-hidden rounded-2xl border-2 border-b-4 border-slate-200 bg-card dark:border-[#2B434E]">
								<div class="flex flex-wrap items-center gap-x-3 gap-y-2 px-5 py-3.5">
									<span class="h-4 w-1 rounded-full" style="background:var(--{accentOf(g.subject)})"></span>
									<h3 class="min-w-0 flex-1 text-sm font-extrabold">
										{g.subject.title}
										<span class="font-bold text-muted-foreground">· {g.items.length} modified</span>
									</h3>
									<div class="flex flex-wrap items-center gap-2">
										{#if g.boosted > 0}
											<span class="rounded-full bg-[#FFDFE0] px-2.5 py-0.5 text-[0.7rem] font-extrabold text-[#EA2B2B] tabular-nums dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]">
												↑ {g.boosted} boosted
											</span>
										{/if}
										{#if g.lowered > 0}
											<span class="rounded-full bg-[#D7FFB8] px-2.5 py-0.5 text-[0.7rem] font-extrabold text-[#46A302] tabular-nums dark:bg-[#58CC02]/20 dark:text-[#7BE328]">
												↓ {g.lowered} lowered
											</span>
										{/if}
										<a href="/module/{g.subject.id}/exam" class="text-xs font-extrabold text-[#1899D6] no-underline hover:underline dark:text-[#66D1FF]">Mock Exam</a>
										<button
											type="button"
											onclick={() => (userStorage.clearExamWeights(g.subject.id), ui.toast(`Reset weights for ${g.subject.title}`))}
											class="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-0.5 text-[0.7rem] font-extrabold text-muted-foreground hover:border-[#EA2B2B]/50 hover:text-[#EA2B2B] dark:border-[#2B434E]"
										>
											<RotateCcw class="size-3" /> Reset
										</button>
									</div>
								</div>
								<ul class="max-h-96 divide-y divide-slate-200 overflow-y-auto border-t border-slate-200 dark:divide-[#2B434E] dark:border-[#2B434E]">
									{#each g.items as row (row.id)}
										{@const boosted = row.weight > 1}
										<li class="flex items-start justify-between gap-3 px-5 py-3">
											<div class="flex min-w-0 flex-1 flex-col gap-0.5">
												<div class="flex flex-wrap items-center gap-1.5">
													<span class="rounded-md bg-slate-100 px-1.5 py-0.5 text-[0.65rem] font-extrabold tracking-wide text-slate-600 uppercase dark:bg-[#223842] dark:text-slate-300">
														{row.kindLabel}
													</span>
													{#if row.topic}
														<span class="truncate text-[0.7rem] font-bold text-muted-foreground">{row.topic}</span>
													{/if}
													{#if row.streak !== 0}
														<span class="text-[0.68rem] font-bold text-muted-foreground/80">
															· {Math.abs(row.streak)}× {row.streak > 0 ? 'right' : 'wrong'}
														</span>
													{/if}
												</div>
												{#if row.isMcq}
													<a href="/module/{g.subject.id}/practice?topic={row.topicId}&question={encodeURIComponent(row.id)}" class="line-clamp-2 text-xs leading-snug font-semibold text-foreground no-underline hover:underline">
														{row.prompt}
													</a>
												{:else}
													<p class="line-clamp-2 text-xs leading-snug font-semibold text-foreground">{row.prompt}</p>
												{/if}
											</div>
											<div class="flex shrink-0 items-center gap-1.5">
												<span
													class={cn(
														'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-extrabold tabular-nums',
														boosted
															? 'bg-[#FFDFE0] text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]'
															: 'bg-[#D7FFB8] text-[#46A302] dark:bg-[#58CC02]/20 dark:text-[#7BE328]'
													)}
												>
													{formatWeightMultiplier(row.weight)}
													<span class="text-[0.68rem] opacity-80">({formatWeightDelta(row.weight)})</span>
												</span>
												<button
													type="button"
													onclick={() => userStorage.resetExamWeight(row.id)}
													title="Reset this item back to base weight (1×)"
													aria-label="Reset item weight to 1x"
													class="grid size-7 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground dark:hover:bg-[#223842]"
												>
													<RotateCcw class="size-3.5" />
												</button>
											</div>
										</li>
									{/each}
								</ul>
							</section>
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	{:else}
		{#if !guideBookmarks.length && !mcqBookmarks.length}
			<EmptyState icon={Bookmark} title={f ? `No bookmarks match “${filter}”` : 'No bookmarks yet'}>{#if !f}Bookmark a part or topic from the reader, or a question in MCQ practice.{/if}</EmptyState>
		{:else}
			<div class="flex flex-wrap items-start gap-6">
				{#if guideBookmarks.length}
					<section aria-labelledby="bm-guide" class="flex min-w-0 flex-[1_1_22rem] flex-col overflow-hidden rounded-xl border bg-card">
						<h2 id="bm-guide" class="label-caps px-5 py-3 text-[0.7rem]">In the guides · {guideBookmarks.length}</h2>
						{#each guideBookmarks as b (b.id)}
							{@const s = getModule(b.subjectId)}
							<div class="flex items-start gap-3 border-t px-5 py-3">
								<a href={readHref(b.subjectId, b.partId, b.anchor)} class="flex min-w-0 flex-1 items-start gap-3 text-foreground no-underline">
									<Bookmark class="mt-0.5 size-4 shrink-0 fill-current text-muted-foreground" />
									<span class="flex flex-col gap-0.5"><span class="text-[0.9375rem] font-medium">{b.title}</span><span class="flex items-center gap-1.5 text-xs text-muted-foreground"><span class="h-3 w-[3px] rounded-full" style="background:var(--{accentOf(s)})"></span>{s?.title} · {date(b.at)}</span></span>
								</a>
								<button type="button" onclick={() => (userStorage.removeGuideBookmark(b.id), ui.toast('Bookmark removed'))} aria-label="Remove bookmark {b.title}" class="grid size-9 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-destructive"><Trash2 class="size-4" /></button>
							</div>
						{/each}
					</section>
				{/if}
				{#if mcqBookmarks.length}
					<section aria-labelledby="bm-mcq" class="flex min-w-0 flex-[1_1_22rem] flex-col overflow-hidden rounded-xl border bg-card">
						<h2 id="bm-mcq" class="label-caps px-5 py-3 text-[0.7rem]">Questions · {mcqBookmarks.length}</h2>
						{#each mcqBookmarks as { id, s, q } (id)}
							<div class="flex items-start gap-3 border-t px-5 py-3">
								<a href="/module/{s.id}/practice?topic={q.topicId ?? 'all'}&question={encodeURIComponent(id)}" class="flex min-w-0 flex-1 items-start gap-3 text-foreground no-underline">
									<Target class="mt-0.5 size-4 shrink-0 text-muted-foreground" />
									<span class="flex flex-col gap-0.5"><span class="line-clamp-2 font-serif text-[0.9375rem]">{q.question}</span><span class="text-xs text-muted-foreground">{s.title} · {q.topic}</span></span>
								</a>
								<button type="button" onclick={() => (userStorage.toggleBookmark(id), ui.toast('Bookmark removed'))} aria-label="Remove bookmark" class="grid size-9 shrink-0 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-destructive"><Trash2 class="size-4" /></button>
							</div>
						{/each}
					</section>
				{/if}
			</div>
		{/if}
	{/if}
</div>

<Dialog.Root open={!!confirmDelete} onOpenChange={(o) => !o && (confirmDelete = null)}>
	<Dialog.Content class="sm:max-w-sm">
		<Dialog.Header>
			<Dialog.Title>Delete this note?</Dialog.Title>
			<Dialog.Description>“{confirmDelete?.title.trim() || 'Untitled note'}” will be removed from this browser. This can't be undone.</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Button variant="outline" onclick={() => (confirmDelete = null)}>Keep it</Button>
			<Button variant="destructive" onclick={() => confirmDelete && deleteNote(confirmDelete)}>Delete note</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
