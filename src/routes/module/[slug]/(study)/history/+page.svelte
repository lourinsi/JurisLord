<script lang="ts">
	import { History, RotateCcw, Search, Sparkles, Trash2 } from '@lucide/svelte';
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import EmptyState from '$lib/components/common/EmptyState.svelte';
	import { Button } from '$lib/components/ui/button';
	import { canonicalModuleId } from '$lib/data/aliases';
	import { getModule } from '$lib/data/modules';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { buildSubjectExamBank, formatWeightDelta, formatWeightMultiplier } from '$lib/unified-exam';
	import { cn, formatClock } from '$lib/utils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);

	const bank = $derived(
		buildSubjectExamBank({
			subject,
			kit: data.kit,
			numbers: data.numbers,
			requisites: data.requisites,
			constiProblems: data.constiProblems,
			philoEssays: data.philoEssays
		})
	);

	let filter = $state('');
	let weightFilter = $state<'all' | 'boosted' | 'lowered'>('all');
	const q = $derived(filter.trim().toLowerCase());

	const subjectHistory = $derived(
		userStorage.testHistory.filter((h) => {
			if (canonicalModuleId(h.subjectId) !== canonicalModuleId(subject.id)) return false;
			if (!q) return true;
			return `${h.topicName} ${h.mode}`.toLowerCase().includes(q);
		})
	);

	const totalSubjectHistoryCount = $derived(
		userStorage.testHistory.filter((h) => canonicalModuleId(h.subjectId) === canonicalModuleId(subject.id)).length
	);

	function resolveItemMeta(id: string): { kindLabel: string; prompt: string; topic: string; topicId: string; isMcq: boolean } {
		const mcq = bank.mcqById[id];
		if (mcq) return { kindLabel: 'MCQ', prompt: mcq.question, topic: mcq.topicName, topicId: mcq.topicId || 'all', isMcq: true };
		const essay = bank.essayById[id];
		if (essay) return { kindLabel: 'Essay', prompt: essay.title, topic: essay.topic, topicId: '', isMcq: false };
		const en = bank.enumById[id];
		if (en) return { kindLabel: 'Enum', prompt: en.title, topic: en.src, topicId: '', isMcq: false };
		const tm = bank.termById[id];
		if (tm) return { kindLabel: 'Term', prompt: tm.term, topic: tm.src, topicId: '', isMcq: false };
		const rq = bank.reqById[id];
		if (rq) return { kindLabel: 'Requisite', prompt: rq.question, topic: rq.topicTitle, topicId: '', isMcq: false };
		const nm = bank.numById[id];
		if (nm) return { kindLabel: 'Number', prompt: nm.prompt, topic: nm.group, topicId: '', isMcq: false };
		return { kindLabel: 'Item', prompt: id, topic: '', topicId: 'all', isMcq: false };
	}

	const allModifiedWeights = $derived.by(() => {
		const targetSubject = canonicalModuleId(subject.id);
		const rows: {
			id: string;
			weight: number;
			streak: number;
			kindLabel: string;
			prompt: string;
			topic: string;
			topicId: string;
			isMcq: boolean;
			updatedAt: number;
		}[] = [];
		for (const [id, rec] of Object.entries(userStorage.examWeights)) {
			if (!rec || rec.weight === 1) continue;
			const owner = canonicalModuleId(rec.subjectId ?? id.split(':')[0]);
			const inBank =
				Boolean(bank.mcqById[id]) ||
				Boolean(bank.essayById[id]) ||
				Boolean(bank.enumById[id]) ||
				Boolean(bank.termById[id]) ||
				Boolean(bank.reqById[id]) ||
				Boolean(bank.numById[id]);
			if (owner !== targetSubject && !inBank) continue;
			const meta = resolveItemMeta(id);
			rows.push({
				id,
				weight: rec.weight,
				streak: rec.streak,
				kindLabel: meta.prompt !== id ? meta.kindLabel : (rec.kind?.toUpperCase() ?? 'Item'),
				prompt: meta.prompt !== id ? meta.prompt : (rec.prompt ?? id),
				topic: meta.topic || rec.topic || '',
				topicId: meta.topicId,
				isMcq: meta.isMcq || rec.kind === 'mcq',
				updatedAt: rec.updatedAt
			});
		}
		return rows.sort((a, b) => b.weight - a.weight || b.updatedAt - a.updatedAt);
	});

	const boostedCount = $derived(allModifiedWeights.filter((r) => r.weight > 1).length);
	const loweredCount = $derived(allModifiedWeights.filter((r) => r.weight < 1).length);

	const visibleWeights = $derived(
		allModifiedWeights.filter((row) => {
			if (weightFilter === 'boosted' && row.weight <= 1) return false;
			if (weightFilter === 'lowered' && row.weight >= 1) return false;
			if (q && !`${row.prompt} ${row.topic} ${row.kindLabel}`.toLowerCase().includes(q)) return false;
			return true;
		})
	);

	function fmtDate(ts: number): string {
		return new Date(ts).toLocaleString(undefined, {
			month: 'short',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: '2-digit'
		});
	}
</script>

<svelte:head><title>History — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-6 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'History' }]} />

	<header class="flex flex-wrap items-end justify-between gap-4">
		<div class="flex flex-col gap-1.5">
			<p class="label-caps">Subject History &amp; Adaptive Weights</p>
			<h1 class="font-heading text-3xl leading-tight font-extrabold">History</h1>
		</div>
		{#if totalSubjectHistoryCount > 0 || allModifiedWeights.length > 0}
			<label class="flex h-10 min-w-0 flex-[1_1_14rem] items-center gap-2 rounded-2xl border-2 border-b-4 border-slate-200 bg-white px-3.5 text-muted-foreground focus-within:border-[#1CB0F6] sm:max-w-xs dark:border-[#2B434E] dark:bg-[#1A2C34]">
				<Search class="size-4 shrink-0 text-[#1CB0F6]" />
				<input
					bind:value={filter}
					type="search"
					placeholder="Filter {subject.title} history"
					aria-label="Filter {subject.title} history"
					class="min-w-0 flex-1 bg-transparent text-sm font-bold text-foreground outline-none placeholder:font-semibold placeholder:text-muted-foreground"
				/>
			</label>
		{/if}
	</header>

	{#if totalSubjectHistoryCount === 0 && allModifiedWeights.length === 0}
		<EmptyState icon={History} title="No history for {subject.title} yet">
			Submit a Mock Exam or Practice Run to record your scores and adaptive question weights here.
			{#snippet actions()}
				<Button href="/module/{subject.id}/exam"><Sparkles class="size-4" /> Start Mock Exam</Button>
			{/snippet}
		</EmptyState>
	{:else}
		<!-- Recent Exams & Practice Runs -->
		{#if totalSubjectHistoryCount > 0}
			<section class="flex flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 dark:border-[#2B434E]">
				<div class="flex flex-wrap items-center justify-between gap-2">
					<h2 class="label-caps text-xs">Past Exams &amp; Practice Runs · {totalSubjectHistoryCount}</h2>
					<button
						type="button"
						onclick={() => {
							userStorage.clearTestHistory(subject.id);
							ui.toast(`Cleared exam history for ${subject.title}`);
						}}
						class="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-background px-2.5 py-1 text-[0.7rem] font-extrabold tracking-wide text-muted-foreground uppercase transition-colors hover:border-[#EA2B2B]/50 hover:text-[#EA2B2B] dark:border-[#2B434E]"
					>
						<Trash2 class="size-3" /> Clear scores
					</button>
				</div>
				{#if !subjectHistory.length}
					<p class="py-4 text-center text-xs font-bold text-muted-foreground">No exam scores match “{filter}”.</p>
				{:else}
					<div class="overflow-x-auto">
						<table class="w-full border-collapse text-sm">
							<tbody>
								{#each subjectHistory as h (h.id)}
									{@const p = h.total ? Math.round((h.correct / h.total) * 100) : 0}
									<tr class="border-t border-slate-200 first:border-t-0 dark:border-[#2B434E]">
										<td class="py-2.5 pr-3 text-xs font-bold whitespace-nowrap text-muted-foreground">{fmtDate(h.at)}</td>
										<td class="py-2.5 pr-3">
											<span class={cn('rounded-full px-2 py-0.5 text-[0.68rem] font-extrabold tracking-wide uppercase', h.mode === 'exam' ? 'bg-[#F3E8FF] text-[#8930C9] dark:bg-[#CE82FF]/20 dark:text-[#DDA6FF]' : 'bg-[#DDF4FF] text-[#1899D6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]')}>
												{h.mode === 'exam' ? 'Exam' : 'Practice'}
											</span>
										</td>
										<td class="py-2.5 pr-3 font-extrabold text-foreground tabular-nums">{h.correct}/{h.total}</td>
										<td class="py-2.5 pr-3">
											<span
												class={cn(
													'inline-flex rounded-full px-2.5 py-0.5 text-xs font-extrabold tabular-nums',
													p >= 75
														? 'bg-[#D7FFB8] text-[#46A302] dark:bg-[#58CC02]/20 dark:text-[#7BE328]'
														: p >= 50
															? 'bg-[#FFF5CC] text-[#946200] dark:bg-[#FFC800]/20 dark:text-[#FFD633]'
															: 'bg-[#FFDFE0] text-[#EA2B2B] dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]'
												)}
											>
												{p}%
											</span>
										</td>
										<td class="py-2.5 pr-3 text-xs font-semibold text-muted-foreground">{h.topicName}</td>
										<td class="py-2.5 text-right text-xs font-bold whitespace-nowrap text-muted-foreground tabular-nums max-sm:hidden">
											{h.secondsUsed ? formatClock(h.secondsUsed) : '—'}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
			</section>
		{/if}

		<!-- Adaptive Mock Exam Question Weights -->
		<section class="flex flex-col gap-3 rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 dark:border-[#2B434E]">
			<div class="flex flex-wrap items-center justify-between gap-2">
				<div class="flex flex-wrap items-center gap-2">
					<h2 class="label-caps text-xs">Modified Question Weights · {allModifiedWeights.length}</h2>
					{#if boostedCount > 0}
						<span class="rounded-full bg-[#FFDFE0] px-2.5 py-0.5 text-[0.7rem] font-extrabold text-[#EA2B2B] tabular-nums dark:bg-[#FF4B4B]/20 dark:text-[#FF7878]">
							↑ {boostedCount} boosted
						</span>
					{/if}
					{#if loweredCount > 0}
						<span class="rounded-full bg-[#D7FFB8] px-2.5 py-0.5 text-[0.7rem] font-extrabold text-[#46A302] tabular-nums dark:bg-[#58CC02]/20 dark:text-[#7BE328]">
							↓ {loweredCount} lowered
						</span>
					{/if}
				</div>
				{#if allModifiedWeights.length > 0}
					<div class="flex flex-wrap items-center gap-2">
						{#if boostedCount > 0}
							<a
								href="/module/{subject.id}/exam?redeem=1"
								class="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#EA2B2B] border-b-3 bg-[#FF4B4B] px-3 py-1 text-[0.7rem] font-extrabold tracking-wide text-white uppercase no-underline transition-all hover:bg-[#E03E3E] active:translate-y-0.5 active:border-b-2"
							>
								<RotateCcw class="size-3" strokeWidth={2.5} /> Take All Missed ({boostedCount})
							</a>
						{/if}
						<button
							type="button"
							onclick={() => {
								userStorage.clearExamWeights(subject.id);
								weightFilter = 'all';
								ui.toast(`Reset mock-exam weights for ${subject.title}`);
							}}
							class="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-background px-2.5 py-1 text-[0.7rem] font-extrabold tracking-wide text-muted-foreground uppercase transition-colors hover:border-[#EA2B2B]/50 hover:text-[#EA2B2B] dark:border-[#2B434E]"
						>
							<RotateCcw class="size-3" /> Reset all to 1×
						</button>
					</div>
				{/if}
			</div>
			<p class="text-xs font-semibold text-muted-foreground">
				Only questions with modified weights are shown (base 1× unchanged questions are hidden). In subset mock exams (e.g. 20, 40 items), right answers halve weight (never 0), while flipping right ↔ wrong resets to base 1× first, then applies ±50%.
			</p>

			{#if allModifiedWeights.length === 0}
				<p class="rounded-2xl border border-dashed border-slate-200 px-4 py-6 text-center text-xs font-bold text-muted-foreground dark:border-[#2B434E]">
					All {subject.title} questions are currently at base weight (1×). Submit a Mock Exam to track adaptive weights here.
				</p>
			{:else}
				{#if boostedCount > 0 && loweredCount > 0}
					<div class="flex flex-wrap gap-1.5" role="group" aria-label="Filter modified weights">
						{#each [
							{ id: 'all', label: `All (${allModifiedWeights.length})` },
							{ id: 'boosted', label: `More likely (${boostedCount})` },
							{ id: 'lowered', label: `Less likely (${loweredCount})` }
						] as tab (tab.id)}
							<button
								type="button"
								aria-pressed={weightFilter === tab.id}
								onclick={() => (weightFilter = tab.id as 'all' | 'boosted' | 'lowered')}
								class={cn(
									'rounded-xl border-2 px-2.5 py-1 text-[0.7rem] font-extrabold tracking-wide uppercase transition-colors',
									weightFilter === tab.id
										? 'border-[#1899D6] bg-[#1CB0F6] text-white'
										: 'border-slate-200 bg-background text-muted-foreground hover:text-foreground dark:border-[#2B434E]'
								)}
							>
								{tab.label}
							</button>
						{/each}
					</div>
				{/if}

				{#if !visibleWeights.length}
					<p class="py-4 text-center text-xs font-bold text-muted-foreground">No modified questions match “{filter}”.</p>
				{:else}
					<div class="divide-y divide-slate-200 rounded-2xl border border-slate-200 dark:divide-[#2B434E] dark:border-[#2B434E]">
						{#each visibleWeights as row (row.id)}
							{@const boosted = row.weight > 1}
							<div class="flex items-start justify-between gap-3 px-4 py-3">
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
										<a
											href="/module/{subject.id}/practice?topic={row.topicId}&question={encodeURIComponent(row.id)}"
											class="line-clamp-2 text-xs leading-snug font-semibold text-foreground no-underline hover:underline"
										>
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
							</div>
						{/each}
					</div>
				{/if}
			{/if}
		</section>
	{/if}
</div>
