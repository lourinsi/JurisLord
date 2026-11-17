<script lang="ts">
	import { BookCheck, ChevronLeft, ChevronRight, CircleCheck, Eraser, EyeOff, Eye, Flag, Save, ScrollText } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Switch } from '$lib/components/ui/switch';
	import * as Card from '$lib/components/ui/card';
	import * as Dialog from '$lib/components/ui/dialog';
	import { ALAC_FIELDS, ESSAY_STATUS, draftHasContent, draftWordCount, essayStatus, type AlacKey, type EssayStatus } from '$lib/alac';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { cn } from '$lib/utils';
	import type { LawModule } from '$lib/types';

	/** The essay and the status filter come from the URL (the navigator lists the problems); `onselect` changes them. */
	let {
		lawModule,
		selectedId,
		filter = 'all',
		onselect
	}: { lawModule: LawModule; selectedId: string; filter?: 'all' | EssayStatus; onselect: (id: string) => void } = $props();

	const statusOf = (id: string): EssayStatus => essayStatus(userStorage.essayDrafts[id]);
	const STATUS_UI = ESSAY_STATUS;

	let showModel = $state(false);
	let confirmClear = $state(false);

	/** Previous/next follow the filtered list, keeping the open essay in it even if its status changed. */
	const visible = $derived(lawModule.essays.filter((e) => filter === 'all' || statusOf(e.id) === filter || e.id === selectedId));
	const essay = $derived(lawModule.essays.find((e) => e.id === selectedId) ?? lawModule.essays[0]);
	const position = $derived(visible.findIndex((e) => e.id === essay?.id));
	const draft = $derived(essay ? userStorage.essayDrafts[essay.id] : undefined);
	const words = $derived(draftWordCount(draft));
	const savedAt = $derived(draft ? new Date(draft.updatedAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) : '');

	function step(delta: number) {
		const next = visible[position + delta];
		if (next) {
			showModel = false;
			onselect(next.id);
		}
	}

	function onInput(key: AlacKey, e: Event) {
		if (!essay) return;
		userStorage.saveEssayDraft(essay.id, { [key]: (e.currentTarget as HTMLTextAreaElement).value });
	}

	function setMastery(kind: 'mastered' | 'review') {
		if (!essay) return;
		const s = statusOf(essay.id);
		if (kind === 'mastered') userStorage.saveEssayDraft(essay.id, { isMastered: s !== 'mastered', needsReview: false });
		else userStorage.saveEssayDraft(essay.id, { needsReview: s !== 'review', isMastered: false });
	}

	function clearDraft() {
		if (essay) userStorage.clearEssayDraft(essay.id);
		confirmClear = false;
	}

</script>

{#if !essay}
	<p class="rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-8 text-center font-bold text-muted-foreground dark:border-[#2B434E]">No ALAC essay exercises for this subject.</p>
{:else}
	<div>
		<!-- Workspace -->
		<div class="min-w-0 space-y-5">
			{#key essay.id}
				<header class="flex flex-wrap items-center justify-between gap-2">
					<div class="flex flex-col gap-1.5">
						<p class="label-caps">{essay.topic}</p>
						<h1 class="font-heading text-3xl leading-tight font-extrabold">{essay.title}</h1>
					</div>
					<Badge variant="outline" class="gap-1.5 py-1 uppercase"><span class={cn('size-2.5 rounded-full', STATUS_UI[statusOf(essay.id)].dot)}></span>{STATUS_UI[statusOf(essay.id)].label}</Badge>
				</header>

				<!-- Fact pattern -->
				<section aria-label="Facts and question" class="flex flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-6 sm:p-7 dark:border-[#2B434E]">
					<p class="label-caps flex items-center gap-2 text-[0.72rem] text-[#1CB0F6]"><ScrollText class="size-4" /> Facts</p>
					<p class="rich font-sans text-[1.0625rem] leading-relaxed font-semibold">{@html essay.factPattern}</p>
					{#if essay.question}
						<p class="border-t-2 border-slate-100 pt-3 font-sans text-[1.0625rem] leading-relaxed font-extrabold dark:border-[#2B434E]">{essay.question}</p>
					{/if}
				</section>

				<!-- Toolbar -->
				<div class="flex flex-wrap items-center gap-x-4 gap-y-3 rounded-2xl border-2 border-b-4 border-slate-200 bg-card px-4 py-3 dark:border-[#2B434E]">
					<p class="flex items-center gap-1.5 text-sm font-bold text-muted-foreground" aria-live="off">
						{#if draft && draftHasContent(draft)}
							<Save class="size-4 text-[#58CC02]" /> Draft saved · {savedAt}
						{:else}
							<Save class="size-4" /> Your answer saves automatically as you type
						{/if}
					</p>
					<p class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-extrabold text-muted-foreground tabular-nums dark:bg-[#223842]">{words} word{words === 1 ? '' : 's'}</p>

					<div class="ml-auto flex flex-wrap items-center gap-2">
						<Button variant={statusOf(essay.id) === 'review' ? 'secondary' : 'outline'} size="sm" aria-pressed={statusOf(essay.id) === 'review'} onclick={() => setMastery('review')}>
							<Flag /> Needs review
						</Button>
						<Button variant={statusOf(essay.id) === 'mastered' ? 'default' : 'outline'} size="sm" aria-pressed={statusOf(essay.id) === 'mastered'} onclick={() => setMastery('mastered')}>
							<BookCheck /> Mastered
						</Button>
						{#if draftHasContent(draft)}
							<Button variant="ghost" size="sm" onclick={() => (confirmClear = true)}><Eraser /> Clear</Button>
						{/if}
					</div>
				</div>

				<div class="flex items-center gap-3">
					<Switch id="reveal-{essay.id}" checked={showModel} onCheckedChange={(v) => (showModel = v)} />
					<label for="reveal-{essay.id}" class="flex cursor-pointer items-center gap-1.5 text-sm font-extrabold">
						{#if showModel}<EyeOff class="size-4 text-[#1CB0F6]" />{:else}<Eye class="size-4 text-[#1CB0F6]" />{/if}
						Reveal model ALAC answer
					</label>
					<span class="text-xs font-bold text-muted-foreground">Try it yourself first.</span>
				</div>

				<section aria-label={showModel ? 'Your answer beside the model answer' : 'Your answer'} class="overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-card dark:border-[#2B434E]">
					{#if showModel}
						<div class="grid grid-cols-2 border-b-2 border-slate-100 bg-slate-50 max-md:hidden dark:border-[#2B434E] dark:bg-[#15242B]">
							<p class="label-caps px-4 py-2.5 text-[0.7rem]">Your answer</p>
							<p class="label-caps border-l-2 border-slate-100 px-4 py-2.5 text-[0.7rem] dark:border-[#2B434E]">Model ALAC answer</p>
						</div>
					{/if}
					{#each ALAC_FIELDS as f, fi (f.key)}
						<div class={cn('grid', fi > 0 && 'border-t-2 border-slate-100 dark:border-[#2B434E]', showModel && 'md:grid-cols-2')}>
							<div class="flex min-w-0 flex-col gap-2 p-4 sm:p-5">
								<label for="{essay.id}-{f.key}" class="flex flex-wrap items-center gap-x-2 gap-y-0.5">
									<span class={cn('grid size-8 place-items-center rounded-xl border-2 border-b-3 font-sans text-sm font-extrabold', f.badge)} aria-hidden="true">{f.letter}</span>
									<span class="text-sm font-extrabold">{f.name}</span>
									<span class="text-xs font-semibold text-muted-foreground">{f.prompt}</span>
								</label>
								<Textarea
									id="{essay.id}-{f.key}"
									value={draft?.[f.key] ?? ''}
									oninput={(e) => onInput(f.key, e)}
									placeholder={f.placeholder}
									rows={f.key === 'answer' || f.key === 'conclusion' ? 2 : 4}
									spellcheck="true"
									class={cn('min-h-20 rounded-2xl border-2 bg-slate-50 font-sans text-base leading-relaxed font-semibold md:text-base dark:bg-[#131F24]', f.ring)}
								/>
							</div>
							{#if showModel}
								<div class="animate-duo-bounce-in flex min-w-0 flex-col gap-2 border-dashed bg-slate-50/70 p-4 max-md:border-t-2 sm:p-5 md:border-l-2 md:border-solid md:border-slate-100 dark:bg-[#15242B] dark:md:border-[#2B434E]">
									<p class="flex items-center gap-2 text-sm font-extrabold"><span class="md:hidden">Model · </span>{f.name}</p>
									<div class="rich font-sans text-[0.9875rem] leading-relaxed font-semibold">{@html essay.modelAnswer[f.key]}</div>
								</div>
							{/if}
						</div>
					{/each}
				</section>
				{#if showModel}
					<p class="flex items-center gap-1.5 text-xs font-bold text-[#46A302] dark:text-[#7BE328]"><CircleCheck class="size-4" /> Compare your Legal Basis and Application line by line, then mark how it went.</p>
				{/if}

				<div class="flex justify-between gap-2 border-t-2 border-slate-200 pt-4 dark:border-[#2B434E]">
					<Button variant="outline" onclick={() => step(-1)} disabled={position <= 0}><ChevronLeft /> Previous</Button>
					<span class="self-center text-sm font-extrabold text-muted-foreground tabular-nums">{position + 1} / {visible.length}</span>
					<Button onclick={() => step(1)} disabled={position < 0 || position >= visible.length - 1}>Next <ChevronRight /></Button>
				</div>
			{/key}
		</div>
	</div>

	<Dialog.Root bind:open={confirmClear}>
		<Dialog.Content class="sm:max-w-sm">
			<Dialog.Header>
				<Dialog.Title>Clear this draft?</Dialog.Title>
				<Dialog.Description>Your four answer boxes and the mastery mark for this problem will be erased. This can't be undone.</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<Button variant="outline" onclick={() => (confirmClear = false)}>Keep it</Button>
				<Button variant="destructive" onclick={clearDraft}>Clear draft</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
{/if}
