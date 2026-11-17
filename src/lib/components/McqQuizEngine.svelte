<script lang="ts">
	import {
		Bookmark,
		BookmarkCheck,
		ChevronLeft,
		ChevronRight,
		CircleCheck,
		CircleX,
		Clock,
		Lightbulb,
		RotateCcw,
		Play,
		Send,
		TriangleAlert,
		Trophy,
		Eye,
		Inbox,
		Flag,
		BookOpen,
		History
	} from '@lucide/svelte';
	import { onDestroy, untrack } from 'svelte';
	import EmptyState from '$lib/components/common/EmptyState.svelte';
	import Segmented from '$lib/components/common/Segmented.svelte';
	import { getPart, readHref } from '$lib/content';
	import { ui } from '$lib/stores/ui.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';
	import * as Card from '$lib/components/ui/card';
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { cn, formatClock, pct, seededOrder } from '$lib/utils';
	import type { McqQuestion, McqTag, Subject } from '$lib/types';

	type Mode = 'practice' | 'exam';
	type Filter = 'all' | 'unanswered' | 'incorrect' | 'bookmarked';

	let {
		lawModule,
		topicId = 'all',
		initialMode = 'practice',
		initialFilter = 'all',
		initialQuestion = '',
		onchange
	}: {
		lawModule: Subject;
		/** Set by the navigator (?topic=); the page re-mounts the engine when it changes. */
		topicId?: string;
		initialMode?: Mode;
		initialFilter?: Filter;
		/** Open at this question (?question=), e.g. from search. */
		initialQuestion?: string;
		/** Mode and filter go back into the URL, so a refresh or a shared link keeps them. */
		onchange?: (s: { mode: Mode; filter: Filter; question?: string }) => void;
	} = $props();

	type Phase = 'setup' | 'running' | 'submitted';

	const FILTERS: { id: Filter; label: string }[] = [
		{ id: 'all', label: 'All' },
		{ id: 'unanswered', label: 'Unanswered' },
		{ id: 'incorrect', label: 'Incorrect' },
		{ id: 'bookmarked', label: 'Bookmarked' }
	];

	const TAGS: Record<McqTag, { label: string; cls: string }> = {
		memorization: { label: 'Memorization', cls: 'border-[#E5B400] bg-[#FFF5CC] text-[#946200] dark:border-[#FFC800]/50 dark:bg-[#FFC800]/20 dark:text-[#FFD633]' },
		requisites: { label: 'Requisites', cls: 'border-[#46A302]/50 bg-[#D7FFB8] text-[#46A302] dark:border-[#58CC02]/50 dark:bg-[#58CC02]/20 dark:text-[#7BE328]' },
		exceptions: { label: 'Exceptions', cls: 'border-[#1899D6]/50 bg-[#DDF4FF] text-[#1899D6] dark:border-[#1CB0F6]/50 dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]' },
		effects: { label: 'Effects', cls: 'border-[#A55EEA]/50 bg-[#F3E8FF] text-[#8930C9] dark:border-[#CE82FF]/50 dark:bg-[#CE82FF]/20 dark:text-[#DDA6FF]' },
		jurisprudence: { label: 'Jurisprudence', cls: 'border-[#EA2B2B]/50 bg-[#FFDFE0] text-[#EA2B2B] dark:border-[#FF4B4B]/50 dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]' }
	};

	const byId = $derived(new Map(lawModule.mcqs.map((q) => [q.id, q])));
	const topics = $derived(lawModule.topics ?? []);

	// svelte-ignore state_referenced_locally — the page re-mounts the engine per topic
	let mode = $state<Mode>(initialMode);
	// svelte-ignore state_referenced_locally
	let filter = $state<Filter>(initialFilter);
	let phase = $state<Phase>('setup');
	/** Frozen list of question ids for this session, so answering never reshuffles the list under you. */
	let sessionIds = $state<string[]>([]);
	let index = $state(0);
	let hintOpen = $state(false);

	// Exam state
	let examAnswers = $state<Record<string, number>>({});
	let examMinutes = $state(1);
	let deadline = $state(0);
	let startedAt = $state(0);
	let secondsLeft = $state(0);
	let secondsUsed = $state(0);
	let confirmSubmit = $state(false);
	let confirmResetSet = $state(false);
	/** Exam: questions marked to come back to. */
	let flagged = $state<Record<string, boolean>>({});

	let cardEl: HTMLElement | undefined = $state();
	let rootEl: HTMLElement | undefined = $state();

	// ---- derived ----
	const total = $derived(sessionIds.length);
	const current = $derived<McqQuestion | undefined>(byId.get(sessionIds[index]));
	const order = $derived.by(() => {
		if (!current) return [];
		const opts = current.options;
		if (opts.length <= 2) return opts.map((_, i) => i);
		if (/^(none\b|illness depriving)/i.test(opts[opts.length - 1])) {
			return [...seededOrder(opts.length - 1, current.id), opts.length - 1];
		}
		return seededOrder(opts.length, current.id);
	});
	const attempt = $derived(current ? userStorage.mcqAttempts[current.id] : undefined);
	const selected = $derived.by(() => {
		if (!current) return undefined;
		return mode === 'exam' ? examAnswers[current.id] : attempt?.selectedIndex;
	});
	const revealed = $derived(mode === 'practice' ? !!attempt : phase === 'submitted' && current !== undefined);
	const examRunning = $derived(mode === 'exam' && phase === 'running');

	const answeredInSet = $derived(
		sessionIds.reduce((n, id) => n + ((mode === 'exam' ? examAnswers[id] !== undefined : !!userStorage.mcqAttempts[id]) ? 1 : 0), 0)
	);
	const progressValue = $derived(pct(answeredInSet, total));

	const filterCounts = $derived.by(() => {
		const scope = lawModule.mcqs.filter((q) => topicId === 'all' || q.topicId === topicId);
		return {
			all: scope.length,
			unanswered: scope.filter((q) => !userStorage.mcqAttempts[q.id]).length,
			incorrect: scope.filter((q) => userStorage.mcqAttempts[q.id] && !userStorage.mcqAttempts[q.id].isCorrect).length,
			bookmarked: scope.filter((q) => userStorage.isBookmarked(q.id)).length
		} satisfies Record<Filter, number>;
	});

	const watchFor = $derived(lawModule.watchFor?.[topicId === 'all' ? 'all' : topicId]);
	/** The guide part a question's topic matches (Criminal Procedure: Rule 110 questions → Rule 110). */
	const guidePart = $derived(current?.topicId ? getPart(lawModule, current.topicId) : undefined);
	const unansweredNumbers = $derived(sessionIds.map((id, i) => (examAnswers[id] === undefined ? i + 1 : 0)).filter(Boolean));
	const flaggedCount = $derived(sessionIds.filter((id) => flagged[id]).length);

	const result = $derived.by(() => {
		if (phase !== 'submitted') return null;
		const qs = sessionIds.map((id) => byId.get(id)!).filter(Boolean);
		const correct = qs.filter((q) => examAnswers[q.id] === q.correctIndex).length;
		const answered = qs.filter((q) => examAnswers[q.id] !== undefined).length;
		const byTopic = new Map<string, { name: string; correct: number; total: number }>();
		for (const q of qs) {
			const row = byTopic.get(q.topic) ?? { name: q.topic, correct: 0, total: 0 };
			row.total++;
			if (examAnswers[q.id] === q.correctIndex) row.correct++;
			byTopic.set(q.topic, row);
		}
		return { total: qs.length, correct, answered, skipped: qs.length - answered, byTopic: [...byTopic.values()] };
	});

	// ---- session building ----
	function matches(q: McqQuestion) {
		if (topicId !== 'all' && q.topicId !== topicId) return false;
		const a = userStorage.mcqAttempts[q.id];
		switch (filter) {
			case 'unanswered':
				return !a;
			case 'incorrect':
				return !!a && !a.isCorrect;
			case 'bookmarked':
				return userStorage.isBookmarked(q.id);
			default:
				return true;
		}
	}

	function rebuild() {
		sessionIds = lawModule.mcqs.filter(matches).map((q) => q.id);
		index = 0;
		hintOpen = false;
		examAnswers = {};
		flagged = {};
		phase = 'setup';
		examMinutes = Math.max(1, sessionIds.length);
		confirmSubmit = false;
	}
	// One-time setup: the parent remounts the engine (it is keyed) when the topic or target question changes.
	untrack(() => {
		rebuild();
		// Arriving at a specific question: show it, even if the filter would have hidden it.
		if (initialQuestion && byId.has(initialQuestion)) {
			if (!sessionIds.includes(initialQuestion)) {
				filter = 'all';
				rebuild();
			}
			index = Math.max(0, sessionIds.indexOf(initialQuestion));
		}
	});

	function report() {
		onchange?.({ mode, filter });
	}
	function setMode(m: Mode) {
		if (m === mode || examRunning) return;
		mode = m;
		rebuild();
		report();
	}
	function setFilter(f: Filter) {
		if (examRunning) return;
		filter = f;
		rebuild();
		report();
	}

	$effect(() => {
		ui.focusMode = mode === 'exam' && phase === 'running';
	});
	onDestroy(() => (ui.focusMode = false));

	// ---- navigation ----
	function go(i: number) {
		if (i < 0 || i >= total || (mode === 'exam' && phase === 'setup')) return;
		index = i;
		hintOpen = false;
		if (cardEl && cardEl.getBoundingClientRect().top < 56) cardEl.scrollIntoView({ block: 'start', behavior: 'smooth' });
	}

	// ---- answering ----
	function choose(optionIndex: number) {
		if (!current || revealed) return;
		if (mode === 'practice') {
			userStorage.recordMcqAttempt(current.id, optionIndex, optionIndex === current.correctIndex);
		} else if (examRunning) {
			examAnswers[current.id] = optionIndex;
		}
	}

	function retry() {
		if (current) userStorage.clearMcqAttempt(current.id);
		hintOpen = false;
	}

	const topicLabel = $derived(topicId === 'all' ? 'All topics' : (topics.find((t) => t.id === topicId)?.name ?? 'Topic'));
	const subjectHistory = $derived(
		userStorage.testHistory.filter((h) => h.subjectId === lawModule.id && (topicId === 'all' || h.topicId === topicId))
	);

	function resetTest() {
		const scope = lawModule.mcqs.filter((q) => topicId === 'all' || q.topicId === topicId);
		const attempted = scope.filter((q) => !!userStorage.mcqAttempts[q.id]);
		if (attempted.length > 0) {
			const correct = attempted.filter((q) => userStorage.mcqAttempts[q.id]?.isCorrect).length;
			userStorage.recordTestHistory({
				subjectId: lawModule.id,
				subjectTitle: lawModule.title,
				topicId,
				topicName: topicLabel,
				mode: 'practice',
				correct,
				answered: attempted.length,
				total: scope.length
			});
		}
		for (const q of scope) {
			userStorage.clearMcqAttempt(q.id);
		}
		filter = 'all';
		rebuild();
		report();
		confirmResetSet = false;
		ui.toast('Test progress reset (score saved to history)');
	}

	function resetWrongInPractice() {
		const scope = lawModule.mcqs.filter((q) => topicId === 'all' || q.topicId === topicId);
		let cleared = 0;
		for (const q of scope) {
			const att = userStorage.mcqAttempts[q.id];
			if (att && !att.isCorrect) {
				userStorage.clearMcqAttempt(q.id);
				cleared++;
			}
		}
		if (filter === 'incorrect') filter = 'all';
		rebuild();
		report();
		ui.toast(`Reset ${cleared} wrong answer${cleared === 1 ? '' : 's'} (correct answers kept)`);
	}

	// ---- exam ----
	function startExam() {
		if (!total) return;
		examAnswers = {};
		index = 0;
		startedAt = Date.now();
		deadline = startedAt + Math.max(1, examMinutes) * 60_000;
		secondsLeft = Math.ceil((deadline - Date.now()) / 1000);
		phase = 'running';
	}

	function retakeWrongInExam() {
		if (!total) return;
		const nextAnswers: Record<string, number> = {};
		let kept = 0;
		let firstWrongIndex = -1;
		sessionIds.forEach((id, i) => {
			const q = byId.get(id);
			if (q && examAnswers[id] === q.correctIndex) {
				nextAnswers[id] = examAnswers[id];
				kept++;
			} else if (firstWrongIndex === -1) {
				firstWrongIndex = i;
			}
		});
		examAnswers = nextAnswers;
		flagged = {};
		index = firstWrongIndex >= 0 ? firstWrongIndex : 0;
		startedAt = Date.now();
		deadline = startedAt + Math.max(1, examMinutes) * 60_000;
		secondsLeft = Math.ceil((deadline - Date.now()) / 1000);
		phase = 'running';
		ui.toast(`Retaking ${total - kept} wrong/unanswered — ${kept} correct kept`);
	}

	function submitExam() {
		if (phase !== 'running') return;
		secondsUsed = Math.round((Math.min(Date.now(), deadline) - startedAt) / 1000);
		let correct = 0;
		let answered = 0;
		for (const id of sessionIds) {
			const q = byId.get(id);
			const sel = examAnswers[id];
			if (q && sel !== undefined) {
				answered++;
				const ok = sel === q.correctIndex;
				if (ok) correct++;
				userStorage.recordMcqAttempt(id, sel, ok);
			}
		}
		userStorage.recordTestHistory({
			subjectId: lawModule.id,
			subjectTitle: lawModule.title,
			topicId,
			topicName: topicLabel,
			mode: 'exam',
			correct,
			answered,
			total: sessionIds.length,
			secondsUsed
		});
		phase = 'submitted';
		confirmSubmit = false;
		index = 0;
	}

	function requestSubmit() {
		if (answeredInSet < total) confirmSubmit = true;
		else submitExam();
	}

	$effect(() => {
		if (phase !== 'running') return;
		const id = setInterval(() => {
			secondsLeft = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
			if (secondsLeft <= 0) submitExam();
		}, 250);
		return () => clearInterval(id);
	});

	function onBeforeUnload(e: BeforeUnloadEvent) {
		if (examRunning) e.preventDefault();
	}

	// ---- keyboard ----
	function onKey(e: KeyboardEvent) {
		if (e.metaKey || e.ctrlKey || e.altKey || !rootEl || rootEl.closest('[hidden]')) return;
		const t = e.target as HTMLElement | null;
		if (t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName))) return;
		if (document.querySelector('[role="dialog"]')) return;
		if (e.key === 'ArrowRight') go(index + 1);
		else if (e.key === 'ArrowLeft') go(index - 1);
		else if (current && !(mode === 'exam' && phase === 'setup')) {
			const n = e.key.length === 1 ? 'abcdefgh'.indexOf(e.key.toLowerCase()) : -1;
			const num = /^[1-8]$/.test(e.key) ? Number(e.key) - 1 : -1;
			const pos = n >= 0 ? n : num;
			if (pos >= 0 && pos < order.length) choose(order[pos]);
			else if (e.key.toLowerCase() === 'n' && revealed) go(index + 1);
		} else return;
		if (['ArrowRight', 'ArrowLeft'].includes(e.key)) e.preventDefault();
	}

	function mapState(id: string): 'correct' | 'incorrect' | 'answered' | 'none' {
		const q = byId.get(id);
		if (!q) return 'none';
		if (mode === 'practice') {
			const a = userStorage.mcqAttempts[id];
			return !a ? 'none' : a.isCorrect ? 'correct' : 'incorrect';
		}
		const s = examAnswers[id];
		if (s === undefined) return 'none';
		if (phase === 'submitted') return s === q.correctIndex ? 'correct' : 'incorrect';
		return 'answered';
	}

	const letter = (i: number) => String.fromCharCode(65 + i);
</script>

<svelte:window onkeydown={onKey} onbeforeunload={onBeforeUnload} />

<div bind:this={rootEl} class="flex flex-col gap-5">
	<!-- Controls -->
	{#if !examRunning}
		<div class="flex flex-wrap items-center justify-between gap-3">
			<Segmented
				label="Mode"
				value={mode}
				onchange={(m: Mode) => setMode(m)}
				options={[
					{ value: 'practice', label: 'Practice' },
					{ value: 'exam', label: 'Timed exam' }
				]}
			/>
			<div role="group" aria-label="Show questions" class="flex flex-wrap gap-2">
				{#each FILTERS as f (f.id)}
					<button
						type="button"
						aria-pressed={filter === f.id}
						onclick={() => setFilter(f.id)}
						class={cn(
							'inline-flex h-9 items-center gap-1.5 rounded-xl border-2 border-b-4 px-3.5 text-xs font-extrabold tracking-wide uppercase transition-all duration-150 active:border-b-2 active:translate-y-0.5',
							filter === f.id
								? 'border-[#1899D6] bg-[#1CB0F6] text-white'
								: 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-slate-300 dark:hover:bg-[#223842]'
						)}
					>
						{f.label}
						<span class={cn('rounded-full px-1.5 py-px text-[0.7rem] font-extrabold tabular-nums', filter === f.id ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500 dark:bg-[#223842] dark:text-slate-300')}>{filterCounts[f.id]}</span>
					</button>
				{/each}
				{#if filterCounts.incorrect > 0}
					<button
						type="button"
						onclick={resetWrongInPractice}
						class="inline-flex h-9 items-center gap-1.5 rounded-xl border-2 border-b-4 border-[#FF9600]/40 bg-[#FFF4E5] px-3 text-xs font-extrabold tracking-wide text-[#C96B00] uppercase transition-all duration-150 hover:bg-[#FF9600] hover:text-white active:border-b-2 active:translate-y-0.5 dark:border-[#FF9600]/40 dark:bg-[#FF9600]/15 dark:text-[#FFAD33] dark:hover:bg-[#FF9600] dark:hover:text-white"
						title="Reset only wrong answers and keep correct ones"
					>
						<RotateCcw class="size-3.5" strokeWidth={2.5} /> Reset wrong ({filterCounts.incorrect})
					</button>
				{/if}
				{#if filterCounts.all - filterCounts.unanswered > 0}
					<button
						type="button"
						onclick={() => (confirmResetSet = true)}
						class="inline-flex h-9 items-center gap-1.5 rounded-xl border-2 border-b-4 border-[#EA2B2B]/40 bg-[#FFDFE0] px-3 text-xs font-extrabold tracking-wide text-[#EA2B2B] uppercase transition-all duration-150 hover:bg-[#FF4B4B] hover:text-white active:border-b-2 active:translate-y-0.5 dark:border-[#FF4B4B]/40 dark:bg-[#FF4B4B]/15 dark:text-[#FF7878] dark:hover:bg-[#FF4B4B] dark:hover:text-white"
						title="Clear all answers in this test"
					>
						<RotateCcw class="size-3.5" strokeWidth={2.5} /> Reset
					</button>
				{/if}
			</div>
		</div>
	{/if}

	{#if total === 0}
		<EmptyState
			icon={Inbox}
			title={filter === 'unanswered' ? "You've answered everything here." : filter === 'incorrect' ? 'No incorrect answers in this set — yet.' : filter === 'bookmarked' ? 'No bookmarked questions here.' : 'No questions match.'}
		>
			{#if filter === 'bookmarked'}Tap the bookmark on any question to save it here.{/if}
			{#snippet actions()}
				<Button variant="outline" onclick={() => setFilter('all')}>Show all questions</Button>
			{/snippet}
		</EmptyState>
	{:else if mode === 'exam' && phase === 'setup'}
		<Card.Root class="p-2">
			<Card.Header>
				<Card.Title class="font-heading text-xl font-extrabold">Timed exam</Card.Title>
				<Card.Description class="font-semibold">
					{total} question{total === 1 ? '' : 's'}. No feedback until you submit — answers are scored and added to your progress at the end.
				</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-4">
				<label class="flex flex-wrap items-center gap-3 text-sm">
					<span class="font-extrabold">Time allowed</span>
					<Input type="number" min="1" max="360" bind:value={examMinutes} class="h-10 w-24 rounded-xl border-2 font-extrabold" aria-label="Minutes allowed" />
					<span class="font-semibold text-muted-foreground">minutes · about {Math.max(1, Math.round((examMinutes * 60) / total))}s per question</span>
				</label>
				<Button size="lg" onclick={startExam} disabled={!examMinutes || examMinutes < 1}><Play /> Start exam</Button>
			</Card.Content>
		</Card.Root>
	{:else if current}
		{#if phase === 'submitted' && result}
			<Card.Root class="border-[#58CC02] p-2">
				<Card.Header>
					<Card.Title class="flex items-center gap-2 font-heading text-xl font-extrabold"><Trophy class="size-6 text-[#FFC800]" /> Exam results</Card.Title>
				</Card.Header>
				<Card.Content class="space-y-5">
					<div class="flex flex-wrap items-end gap-x-6 gap-y-2">
						<p class="text-5xl font-extrabold text-[#58CC02] tabular-nums">{pct(result.correct, result.total)}<span class="text-2xl text-muted-foreground">%</span></p>
						<p class="pb-1 text-sm font-bold text-muted-foreground">
							<span class="font-extrabold text-foreground tabular-nums">{result.correct}</span> of {result.total} correct ·
							{result.skipped} unanswered · {formatClock(secondsUsed)} used
						</p>
					</div>
					{#if result.byTopic.length > 1}
						<ul class="space-y-2.5">
							{#each result.byTopic as t (t.name)}
								<li>
									<div class="mb-1 flex justify-between gap-3 text-xs font-bold">
										<span class="truncate">{t.name}</span>
										<span class="shrink-0 tabular-nums text-muted-foreground">{t.correct}/{t.total}</span>
									</div>
									<Progress value={pct(t.correct, t.total)} class="h-3" aria-label="{t.name}: {t.correct} of {t.total} correct" />
								</li>
							{/each}
						</ul>
					{/if}
					<div class="flex flex-wrap items-center gap-3">
						{#if result.correct < result.total}
							<Button onclick={retakeWrongInExam}><RotateCcw /> Retake wrong ({result.total - result.correct})</Button>
						{/if}
						<Button variant={result.correct < result.total ? 'outline' : 'default'} onclick={rebuild}><RotateCcw /> New exam</Button>
						<p class="text-sm font-semibold text-muted-foreground">Review each question below — explanations are unlocked.</p>
					</div>
				</Card.Content>
			</Card.Root>
		{/if}

		{#if examRunning}
			<div class="sticky top-[calc(var(--header-h)+0.5rem)] z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-b-4 border-slate-200 bg-card px-4 py-3 shadow-md dark:border-[#2B434E]">
				<span role="timer" aria-live="off" class={cn('inline-flex items-center gap-2 rounded-xl border-2 border-b-3 border-slate-200 bg-slate-50 px-3 py-1 text-xl font-extrabold tabular-nums dark:border-[#2B434E] dark:bg-[#131F24]', secondsLeft <= 60 && 'border-[#EA2B2B] bg-[#FFDFE0] text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]')}>
					<Clock class="size-[1.1rem]" strokeWidth={2.5} />
					{formatClock(secondsLeft)}
					<span class="sr-only">remaining</span>
				</span>
				<span class="text-sm font-extrabold text-muted-foreground tabular-nums">{answeredInSet} of {total} answered{flaggedCount ? ` · ${flaggedCount} flagged` : ''}</span>
				<Button onclick={requestSubmit}><Send /> Submit exam</Button>
			</div>
		{/if}

		{#if mode === 'practice' && watchFor}
			<details class="group rounded-2xl border-2 border-[#FF9600] border-b-4 bg-[#FFF4E5] px-4 py-3.5 text-sm dark:bg-[#FF9600]/15">
				<summary class="flex cursor-pointer list-none items-center gap-2.5 font-extrabold text-[#C96B00] dark:text-[#FFAD33]">
					<span class="grid size-7 shrink-0 place-items-center rounded-xl border-2 border-[#E07D00] bg-[#FF9600] text-white">
						<TriangleAlert class="size-4" strokeWidth={2.5} />
					</span>
					<span>Watch for — common traps in {topicId === 'all' ? 'this subject' : (topics.find((t) => t.id === topicId)?.name ?? 'this topic')}</span>
				</summary>
				<div class="rich mt-3 leading-relaxed font-semibold text-slate-800 dark:text-slate-100">{@html watchFor}</div>
			</details>
		{/if}

		<div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_17.5rem]">
		<div class="flex min-w-0 flex-col gap-5">
		<!-- Progress + navigation -->
		<div class="space-y-2.5">
			<div class="flex flex-wrap items-center justify-between gap-3 text-sm">
				<p class="font-extrabold tracking-wide uppercase">Question <span class="tabular-nums text-[#1CB0F6]">{index + 1}</span> of <span class="tabular-nums">{total}</span></p>
				<span class="inline-flex items-center rounded-full border-2 border-[#46A302]/30 bg-[#D7FFB8] px-3 py-0.5 text-xs font-extrabold text-[#46A302] tabular-nums dark:border-[#58CC02]/40 dark:bg-[#58CC02]/20 dark:text-[#7BE328]">
					{answeredInSet} / {total} · {progressValue}%
				</span>
			</div>
			<Progress value={progressValue} class="h-4" aria-label="Questions answered in this set" />
		</div>

		<div bind:this={cardEl} class="scroll-mt-20">
			{#key current.id}
				<Card.Root class="py-0">
					<Card.Header class="gap-3.5 p-6 pb-4 md:p-8 md:pb-5">
						<div class="flex items-start justify-between gap-3">
							<div class="flex flex-wrap items-center gap-2">
								<Badge variant="secondary" class="h-auto max-w-full py-1 whitespace-normal uppercase">{current.topic}</Badge>
								{#if current.tag}
									<Badge variant="outline" class={cn('h-auto py-1 uppercase', TAGS[current.tag].cls)}>{TAGS[current.tag].label}</Badge>
								{/if}
							</div>
							<div class="flex shrink-0 items-center gap-1">
								{#if examRunning}
									<Button
										variant={flagged[current.id] ? 'outline' : 'ghost'}
										size="sm"
										class={cn('-mt-1 shrink-0', flagged[current.id] && 'border-[#FF9600] bg-[#FFF4E5] text-[#C96B00] dark:bg-[#FF9600]/20 dark:text-[#FFAD33]')}
										aria-pressed={!!flagged[current.id]}
										onclick={() => current && (flagged[current.id] = !flagged[current.id])}
									>
										<Flag /> {flagged[current.id] ? 'Flagged' : 'Flag for review'}
									</Button>
								{/if}
								<Button
									variant="ghost"
									size="icon"
									class={cn('-mt-1 -mr-2 shrink-0 rounded-xl', userStorage.isBookmarked(current.id) && 'bg-[#FFF5CC] text-[#E5A000] dark:bg-[#FFC800]/20 dark:text-[#FFC800]')}
									aria-pressed={userStorage.isBookmarked(current.id)}
									aria-label={userStorage.isBookmarked(current.id) ? 'Remove bookmark' : 'Bookmark this question'}
									title="Bookmark"
									onclick={() => userStorage.toggleBookmark(current.id)}
								>
									{#if userStorage.isBookmarked(current.id)}<BookmarkCheck class="size-5" />{:else}<Bookmark class="size-5" />{/if}
								</Button>
							</div>
						</div>
						<Card.Title class="font-sans text-[1.15rem] leading-relaxed font-extrabold text-foreground sm:text-xl">{current.question}</Card.Title>
					</Card.Header>

					<Card.Content class="space-y-4 px-6 pb-6 md:px-8">
						<div role="group" aria-label="Answer choices" class="space-y-3">
							{#each order as optIdx, pos (optIdx)}
								{@const isSel = selected === optIdx}
								{@const isRight = optIdx === current.correctIndex}
								<button
									type="button"
									aria-pressed={isSel}
									aria-disabled={revealed}
									onclick={() => choose(optIdx)}
									class={cn(
										'group flex w-full items-start gap-3.5 rounded-2xl border-2 border-b-4 bg-white p-4 text-left text-[0.96rem] leading-relaxed font-bold transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#1CB0F6] focus-visible:outline-none dark:bg-[#1A2C34]',
										!revealed && 'border-slate-200 hover:bg-slate-50 active:border-b-2 active:translate-y-0.5 dark:border-[#2B434E] dark:hover:bg-[#223842]',
										!revealed && isSel && 'animate-duo-pop border-[#1CB0F6] bg-[#DDF4FF] text-[#1899D6] dark:border-[#1CB0F6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]',
										revealed && 'cursor-default',
										revealed && isRight && 'animate-duo-pop border-[#58CC02] bg-[#D7FFB8] text-[#46A302] dark:border-[#58CC02] dark:bg-[#58CC02]/20 dark:text-[#7BE328]',
										revealed && isSel && !isRight && 'animate-duo-shake border-[#FF4B4B] bg-[#FFDFE0] text-[#EA2B2B] dark:border-[#FF4B4B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]',
										revealed && !isRight && !isSel && 'border-slate-200 opacity-65 dark:border-[#2B434E]'
									)}
								>
									<span
										class={cn(
											'mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl border-2 border-b-3 text-xs font-extrabold transition-colors',
											!isSel && !revealed && 'border-slate-200 bg-slate-50 text-slate-500 group-hover:border-[#1CB0F6]/60 group-hover:text-[#1899D6] dark:border-[#2B434E] dark:bg-[#131F24] dark:text-slate-300',
											isSel && !revealed && 'border-[#1899D6] bg-[#1CB0F6] text-white',
											revealed && isRight && 'border-[#46A302] bg-[#58CC02] text-white',
											revealed && isSel && !isRight && 'border-[#EA2B2B] bg-[#FF4B4B] text-white',
											revealed && !isRight && !isSel && 'border-slate-200 bg-slate-50 text-slate-400 dark:border-[#2B434E] dark:bg-[#131F24]'
										)}
										aria-hidden="true"
									>
										{#if revealed && isRight}<CircleCheck class="size-4" strokeWidth={3} />{:else if revealed && isSel}<CircleX class="size-4" strokeWidth={3} />{:else}{letter(pos)}{/if}
									</span>
									<span class="min-w-0 flex-1 pt-0.5">
										<span class="block">{current.options[optIdx]}</span>
										{#if revealed && isRight}<span class="sr-only"> — correct answer</span>{/if}
										{#if revealed && isSel && !isRight}<span class="sr-only"> — your answer, incorrect</span>{/if}
										{#if revealed && current.optionExplanations?.[optIdx]}
											<span class={cn('mt-1.5 block text-xs leading-relaxed font-semibold', isRight ? 'text-[#46A302] dark:text-[#7BE328]' : isSel ? 'text-[#EA2B2B] dark:text-[#FF7878]' : 'text-muted-foreground')}>
												{#if isRight}<span class="mr-1 font-extrabold">✓ That's right!</span>{/if}{current.optionExplanations[optIdx]}
											</span>
										{/if}
									</span>
								</button>
							{/each}
						</div>

						{#if mode === 'practice' && !revealed && current.hint}
							<div>
								<Button variant="ghost" size="sm" onclick={() => (hintOpen = !hintOpen)} aria-expanded={hintOpen} class="font-extrabold text-[#C96B00] hover:bg-[#FFF4E5] dark:text-[#FFAD33] dark:hover:bg-[#FF9600]/15">
									<Lightbulb /> {hintOpen ? 'Hide hint' : 'Show hint'}
								</Button>
								{#if hintOpen}
									<p class="animate-duo-bounce-in mt-2 rounded-2xl border-2 border-[#E5B400] border-b-4 bg-[#FFF5CC] px-4 py-3 text-sm font-bold text-[#946200] dark:border-[#FFC800]/50 dark:bg-[#FFC800]/15 dark:text-[#FFD633]">{current.hint}</p>
								{/if}
							</div>
						{/if}

						{#if revealed}
							{@const isCorrectAnswer = selected === current.correctIndex}
							<div
								class={cn(
									'animate-duo-bounce-in space-y-3 rounded-2xl border-2 border-b-4 p-4 sm:p-5',
									selected !== undefined && isCorrectAnswer && 'border-[#58CC02] bg-[#D7FFB8]/60 dark:border-[#58CC02] dark:bg-[#58CC02]/15',
									selected !== undefined && !isCorrectAnswer && 'border-[#FF4B4B] bg-[#FFDFE0]/70 dark:border-[#FF4B4B] dark:bg-[#FF4B4B]/15',
									selected === undefined && 'border-slate-200 bg-slate-50 dark:border-[#2B434E] dark:bg-[#131F24]'
								)}
								role="status"
							>
								{#if selected !== undefined}
									<div class="flex flex-wrap items-center gap-2.5">
										{#if isCorrectAnswer}
											<span class="inline-flex items-center gap-1.5 rounded-full border-2 border-[#46A302] bg-[#58CC02] px-3 py-1 text-xs font-extrabold tracking-wide text-white uppercase">
												<CircleCheck class="size-4" strokeWidth={2.75} /> Awesome! Correct
											</span>
										{:else}
											<span class="inline-flex items-center gap-1.5 rounded-full border-2 border-[#EA2B2B] bg-[#FF4B4B] px-3 py-1 text-xs font-extrabold tracking-wide text-white uppercase">
												<CircleX class="size-4" strokeWidth={2.75} /> Not quite
											</span>
											<span class="text-sm font-extrabold text-[#EA2B2B] dark:text-[#FF7878]">
												The correct answer is {letter(order.indexOf(current.correctIndex))}.
											</span>
										{/if}
									</div>
								{:else}
									<p class="flex items-center gap-2 text-sm font-extrabold text-muted-foreground"><Eye class="size-4" /> Not answered — the correct answer is {letter(order.indexOf(current.correctIndex))}.</p>
								{/if}
								<Accordion.Root type="single" value="explain" class="rounded-2xl border-2 border-slate-200/80 bg-white/90 px-4 dark:border-[#2B434E] dark:bg-[#1A2C34]/90">
									<Accordion.Item value="explain" class="border-b-0">
										<Accordion.Trigger class="py-3 text-sm font-extrabold tracking-wide uppercase">Codal basis &amp; explanation</Accordion.Trigger>
										<Accordion.Content>
											<div class="space-y-3 pb-3 text-sm leading-relaxed">
												{#if current.legalBasis}
													<div class="rounded-xl bg-slate-50 p-3 dark:bg-[#131F24]">
														<p class="text-xs font-extrabold tracking-wider text-[#1899D6] uppercase dark:text-[#66D1FF]">Legal basis</p>
														<p class="mt-1 font-bold text-foreground">{current.legalBasis}</p>
													</div>
												{/if}
												<div>
													<p class="text-xs font-extrabold tracking-wider text-muted-foreground uppercase">Explanation</p>
													<p class="mt-1 font-semibold text-foreground">{current.explanation}</p>
												</div>
												{#if guidePart}
													<a href={readHref(lawModule.id, guidePart.id)} class="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#1CB0F6] no-underline hover:underline">
														<BookOpen class="size-4" /> Read {guidePart.label || guidePart.title} in the guide
													</a>
												{/if}
											</div>
										</Accordion.Content>
									</Accordion.Item>
								</Accordion.Root>
							</div>
						{/if}
					</Card.Content>

					<Card.Footer class="flex-wrap justify-between gap-3 border-t-2 border-slate-100 bg-slate-50/70 px-6 py-4 md:px-8 dark:border-[#2B434E] dark:bg-[#15242B]">
						<Button variant="outline" onclick={() => go(index - 1)} disabled={index === 0}><ChevronLeft /> Previous</Button>
						<div class="flex gap-2.5">
							{#if mode === 'practice' && revealed}
								<Button variant="outline" onclick={retry}><RotateCcw /> Try again</Button>
							{/if}
							<Button onclick={() => go(index + 1)} disabled={index >= total - 1}>Next <ChevronRight /></Button>
						</div>
					</Card.Footer>
				</Card.Root>
			{/key}
		</div>

		</div>
		<!-- Question map -->
		<section aria-label="Question map" class="rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-4 sm:p-5 xl:sticky xl:top-[calc(var(--header-h)+1.5rem)] dark:border-[#2B434E]">
			<div class="mb-3.5 flex flex-wrap items-center justify-between gap-2">
				<h3 class="text-sm font-extrabold tracking-wide uppercase">Jump to question</h3>
				<ul class="flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-bold text-muted-foreground">
					<li class="flex items-center gap-1.5"><span class="size-3 rounded-md border border-[#46A302] bg-[#58CC02]"></span> Correct</li>
					<li class="flex items-center gap-1.5"><span class="size-3 rounded-md border border-[#EA2B2B] bg-[#FF4B4B]"></span> Incorrect</li>
					{#if examRunning}
						<li class="flex items-center gap-1.5"><span class="size-3 rounded-md border border-[#1899D6] bg-[#DDF4FF]"></span> Answered</li>
						<li class="flex items-center gap-1.5"><span class="size-3 rounded-md border border-dashed border-slate-300 dark:border-[#2B434E]"></span> Unanswered</li>
						<li class="flex items-center gap-1.5"><span class="size-2.5 rounded-full bg-[#FF9600]"></span> Flagged</li>
					{/if}
					<li class="flex items-center gap-1.5"><span class="size-2 rounded-full bg-[#FFC800]"></span> Bookmarked</li>
				</ul>
			</div>
			<div class="grid grid-cols-[repeat(auto-fill,minmax(2.5rem,1fr))] gap-2 xl:grid-cols-5">
				{#each sessionIds as id, i (id)}
					{@const st = mapState(id)}
					<button
						type="button"
						onclick={() => go(i)}
						aria-label="Question {i + 1}{st === 'correct' ? ', correct' : st === 'incorrect' ? ', incorrect' : st === 'answered' ? ', answered' : examRunning ? ', unanswered' : ''}{flagged[id] ? ', flagged' : ''}{userStorage.isBookmarked(id) ? ', bookmarked' : ''}"
						aria-current={i === index ? 'true' : undefined}
						class={cn(
							'relative h-10 rounded-xl border-2 border-b-4 text-xs font-extrabold tabular-nums transition-all duration-150 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#1CB0F6] focus-visible:outline-none active:border-b-2 active:translate-y-0.5',
							i === index
								? 'z-10 scale-105 border-[#1899D6] bg-[#1CB0F6] text-white shadow-sm'
								: st === 'correct'
									? 'border-[#46A302] bg-[#58CC02] text-white'
									: st === 'incorrect'
										? 'border-[#EA2B2B] bg-[#FF4B4B] text-white'
										: st === 'answered'
											? 'border-[#1CB0F6] bg-[#DDF4FF] text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]'
											: cn('border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-[#2B434E] dark:bg-[#131F24] dark:text-slate-300 dark:hover:bg-[#223842]', examRunning && 'border-dashed')
						)}
					>
						{i + 1}
						{#if i === index && (st === 'correct' || st === 'incorrect')}
							<span class={cn('absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rounded-full border border-white', st === 'correct' ? 'bg-[#58CC02]' : 'bg-[#FF4B4B]')} aria-hidden="true"></span>
						{/if}
						{#if userStorage.isBookmarked(id)}<span class="absolute top-0.5 right-0.5 size-2 rounded-full border border-white bg-[#FFC800]"></span>{/if}
						{#if flagged[id]}<span class="absolute -top-1 -left-1 size-2.5 rounded-full border-2 border-card bg-[#FF9600]" aria-hidden="true"></span>{/if}
					</button>
				{/each}
			</div>
			<p class="mt-4 hidden text-xs font-bold text-muted-foreground sm:block">
				Keyboard:
				<kbd class="rounded-lg border-2 border-b-3 border-slate-200 bg-slate-50 px-1.5 py-0.5 font-extrabold text-slate-700 dark:border-[#2B434E] dark:bg-[#131F24] dark:text-slate-200">←</kbd>
				<kbd class="rounded-lg border-2 border-b-3 border-slate-200 bg-slate-50 px-1.5 py-0.5 font-extrabold text-slate-700 dark:border-[#2B434E] dark:bg-[#131F24] dark:text-slate-200">→</kbd>
				to move,
				<kbd class="rounded-lg border-2 border-b-3 border-slate-200 bg-slate-50 px-1.5 py-0.5 font-extrabold text-slate-700 dark:border-[#2B434E] dark:bg-[#131F24] dark:text-slate-200">A</kbd>–<kbd class="rounded-lg border-2 border-b-3 border-slate-200 bg-slate-50 px-1.5 py-0.5 font-extrabold text-slate-700 dark:border-[#2B434E] dark:bg-[#131F24] dark:text-slate-200">D</kbd>
				or
				<kbd class="rounded-lg border-2 border-b-3 border-slate-200 bg-slate-50 px-1.5 py-0.5 font-extrabold text-slate-700 dark:border-[#2B434E] dark:bg-[#131F24] dark:text-slate-200">1</kbd>–<kbd class="rounded-lg border-2 border-b-3 border-slate-200 bg-slate-50 px-1.5 py-0.5 font-extrabold text-slate-700 dark:border-[#2B434E] dark:bg-[#131F24] dark:text-slate-200">4</kbd>
				to answer.
			</p>
		</section>
		</div>
	{/if}

	{#if !examRunning && subjectHistory.length > 0}
		<details class="group rounded-3xl border-2 border-b-4 border-slate-200 bg-card px-5 py-3.5 dark:border-[#2B434E]">
			<summary class="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-extrabold">
				<span class="flex items-center gap-2">
					<History class="size-4 text-[#1CB0F6]" strokeWidth={2.5} />
					Past scores &amp; exam history
					<span class="rounded-full bg-[#DDF4FF] px-2.5 py-0.5 text-xs font-extrabold text-[#1899D6] tabular-nums dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]">{subjectHistory.length}</span>
				</span>
				<span class="text-xs font-extrabold tracking-wide text-muted-foreground uppercase group-open:hidden">Show</span>
				<span class="hidden text-xs font-extrabold tracking-wide text-muted-foreground uppercase group-open:inline">Hide</span>
			</summary>
			<div class="mt-3 space-y-2 border-t-2 border-slate-100 pt-3 dark:border-[#2B434E]">
				{#each subjectHistory.slice(0, 10) as h (h.id)}
					{@const scorePct = pct(h.correct, h.total)}
					<div class="flex flex-wrap items-center justify-between gap-2 rounded-2xl border-2 border-slate-100 bg-slate-50/70 px-3.5 py-2.5 text-xs dark:border-[#2B434E] dark:bg-[#131F24]">
						<div class="flex flex-wrap items-center gap-2">
							<span class={cn('rounded-full px-2 py-0.5 text-[0.68rem] font-extrabold tracking-wide uppercase', h.mode === 'exam' ? 'bg-[#F3E8FF] text-[#8930C9] dark:bg-[#CE82FF]/20 dark:text-[#DDA6FF]' : 'bg-[#DDF4FF] text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]')}>
								{h.mode === 'exam' ? 'Timed exam' : 'Practice'}
							</span>
							<span class="font-extrabold text-foreground">{h.topicName}</span>
							<span class="font-bold text-muted-foreground">· {new Date(h.at).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</span>
							{#if h.secondsUsed !== undefined}
								<span class="font-bold text-muted-foreground tabular-nums">· {formatClock(h.secondsUsed)}</span>
							{/if}
						</div>
						<div class="flex items-center gap-2">
							<span class="font-extrabold text-muted-foreground tabular-nums">{h.correct}/{h.total} ({h.answered} answered)</span>
							<span class={cn('rounded-full px-2.5 py-0.5 font-extrabold tabular-nums', scorePct >= 75 ? 'bg-[#D7FFB8] text-[#46A302] dark:bg-[#58CC02]/20 dark:text-[#7BE328]' : scorePct >= 50 ? 'bg-[#FFF5CC] text-[#946200] dark:bg-[#FFC800]/20 dark:text-[#FFD633]' : 'bg-[#FFDFE0] text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]')}>
								{scorePct}%
							</span>
						</div>
					</div>
				{/each}
			</div>
		</details>
	{/if}
</div>

<Dialog.Root bind:open={confirmSubmit}>
	<Dialog.Content class="sm:max-w-sm">
		<Dialog.Header>
			<Dialog.Title>Submit with {total - answeredInSet} unanswered?</Dialog.Title>
			<Dialog.Description>
				Question{unansweredNumbers.length === 1 ? '' : 's'} {unansweredNumbers.length > 12 ? `${unansweredNumbers.slice(0, 12).join(', ')} and ${unansweredNumbers.length - 12} more` : unansweredNumbers.join(', ')}
				{unansweredNumbers.length === 1 ? 'has' : 'have'} no answer and will count as wrong.{flaggedCount ? ` ${flaggedCount} ${flaggedCount === 1 ? 'is' : 'are'} flagged for review.` : ''}
			</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Button variant="outline" onclick={() => (confirmSubmit = false)}>Keep working</Button>
			<Button onclick={submitExam}>Submit anyway</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

<Dialog.Root bind:open={confirmResetSet}>
	<Dialog.Content class="sm:max-w-sm">
		<Dialog.Header>
			<Dialog.Title>Reset this test?</Dialog.Title>
			<Dialog.Description>
				This clears all {filterCounts.all - filterCounts.unanswered} saved answer{filterCounts.all - filterCounts.unanswered === 1 ? '' : 's'} in {topicId === 'all' ? lawModule.title : (topics.find((t) => t.id === topicId)?.name ?? 'this topic')} so you can start fresh. Bookmarks stay saved.
			</Dialog.Description>
		</Dialog.Header>
		<Dialog.Footer>
			<Button variant="outline" onclick={() => (confirmResetSet = false)}>Cancel</Button>
			<Button variant="destructive" onclick={resetTest}>Reset test</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
