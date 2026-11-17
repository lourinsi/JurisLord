<script lang="ts">
	import { PenLine } from '@lucide/svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { tick } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import AlacBanner from '$lib/components/AlacBanner.svelte';
	import AlacEssayEditor from '$lib/components/AlacEssayEditor.svelte';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import EmptyState from '$lib/components/common/EmptyState.svelte';
	import RateBar from '$lib/components/kit/RateBar.svelte';
	import RatingTag from '$lib/components/kit/RatingTag.svelte';
	import ModelAnswer from '$lib/components/philo/ModelAnswer.svelte';
	import { getModule } from '$lib/data/modules';
	import type { EssayStatus } from '$lib/alac';
	import { answerKey } from '$lib/answerkey.svelte';
	import { ESSAYS, essayKey, kinds, fmt, words, type PhiloType } from '$lib/philo';
	import { store } from '$lib/store.svelte';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);
	const essayId = $derived(page.url.searchParams.get('essay') ?? subject.essays[0]?.id ?? '');
	const status = $derived.by(() => {
		const s = page.url.searchParams.get('status') ?? 'all';
		return (['new', 'drafted', 'review', 'mastered'].includes(s) ? s : 'all') as 'all' | EssayStatus;
	});
	const essay = $derived(subject.essays.find((e) => e.id === essayId));

	function onselect(id: string) {
		const url = new URL(page.url.href);
		url.searchParams.set('essay', id);
		goto(url);
	}

	// Legal Philo 4-type Essay practice
	const st = $derived(store.philo);
	let type: 'all' | PhiloType = $state('all');
	let write = $state(true);
	let star = $state(false);
	let query = $state('');
	const shown = new SvelteSet<string>();
	const open = (id: string) => !write || answerKey.on || shown.has(id);

	const q = $derived(query.trim().toLowerCase());
	const groups = $derived(
		kinds
			.filter((k) => type === 'all' || k.id === type)
			.map((k) => ({
				k,
				items: ESSAYS.filter((e) => e.type === k.id && (!star || e.star) && (!q || `${e.q} ${e.a.join(' ')}`.toLowerCase().includes(q)))
			}))
			.filter((g) => g.items.length)
	);
	const TAG: Record<PhiloType, string> = { define: 'tag-en', differentiate: 'tag-teal', critique: 'tag-purple', opinion: 'tag-accent' };

	$effect(() => {
		if (slug !== 'philo') return;
		const m = /^#q-(.+)$/.exec(page.url.hash);
		if (!m) return;
		type = 'all';
		star = false;
		tick().then(() => document.getElementById('q-' + m[1])?.scrollIntoView({ block: 'start' }));
	});
</script>

<svelte:head><title>{slug === 'philo' ? 'Essay Practice' : essay ? `${essay.title} — ALAC Essays` : 'ALAC Essays'} — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs
		items={[
			{ label: subject.title, href: `/module/${subject.id}` },
			{ label: slug === 'philo' ? 'Essay practice' : 'ALAC essays', href: `/module/${subject.id}/essays` },
			...(slug !== 'philo' && essay ? [{ label: essay.topic }] : [])
		]}
	/>

	{#if slug === 'philo'}
		<header class="flex flex-col gap-1.5">
			<p class="label-caps">Define · Differentiate · Critique · Opinion</p>
			<h1 class="font-heading text-3xl leading-tight font-extrabold">Essay Practice</h1>
		</header>
		<div class="stack" style="gap:12px">
			<p class="muted" style="max-width:68ch">
				The professor’s last exam asked four kinds of question: <b>define, differentiate, critique, and give your opinion</b>.
				In <b>Write</b> mode, write your answer first (it is saved on this device), then open the model and tick off the formula.
				Model answers are one paragraph, about what you can write in 8 to 10 minutes.
			</p>
			<input type="search" bind:value={query} placeholder="Search a question, thinker or case" aria-label="Search essay questions" />
			<div class="row wrap" style="gap:10px">
				<div class="seg" role="group" aria-label="Question type">
					<button aria-pressed={type === 'all'} onclick={() => (type = 'all')}>All</button>
					{#each kinds as k (k.id)}
						<button aria-pressed={type === k.id} onclick={() => (type = k.id)}>{k.name}</button>
					{/each}
				</div>
				<div class="seg" role="group" aria-label="Mode">
					<button aria-pressed={write} onclick={() => ((write = true), shown.clear())}>Write</button>
					<button aria-pressed={!write} onclick={() => (write = false)}>Study</button>
				</div>
				<div class="seg" role="group" aria-label="Which questions">
					<button aria-pressed={!star} onclick={() => (star = false)}>All</button>
					<button aria-pressed={star} onclick={() => (star = true)}>★ Likely only ({ESSAYS.filter((e) => e.star).length})</button>
				</div>
			</div>

			{#if !groups.length}<div class="card empty">Nothing matches “{query}”.</div>{/if}

			{#each groups as { k, items } (k.id)}
				<section class="stack" style="gap:10px">
					<h2 class="eyebrow grp">{k.name} ({items.length})</h2>
					<div class="blk plain kind">
						<h4>{k.tests}</h4>
						<ol>{#each k.formula as f (f)}<li>{f}</li>{/each}</ol>
						<p class="muted s"><b>First line:</b> {k.first} &nbsp;·&nbsp; <b>Trap:</b> {k.trap}</p>
					</div>
					{#each items as e (e.id)}
						{@const key = essayKey(e.id)}
						<article class="card es" id="q-{e.id}">
							<div class="between" style="align-items:flex-start;gap:10px">
								<h3 class="legal">{@html fmt(e.q)}</h3>
								<span class="row" style="gap:4px;flex:none">
									{#if e.star}<span class="tag tag-star" title="Ranked in the exam focus">★</span>{/if}
									<RatingTag ratings={st.ratings} k={key} />
									<span class="tag {TAG[e.type]}">{k.name}</span>
								</span>
							</div>
							{#if write}
								<textarea rows="5" bind:value={st.essays[e.id]} placeholder={k.first} aria-label="Your answer"></textarea>
								<span class="faint num s">{words(st.essays[e.id] ?? '')} words</span>
							{/if}
							{#if open(e.id)}
								<ModelAnswer q={e} />
								<RateBar ratings={st.ratings} k={key} prompt="Could you write this?" />
							{:else}
								<button class="btn btn-secondary btn-sm" style="align-self:flex-start" onclick={() => shown.add(e.id)}>Show model answer</button>
							{/if}
						</article>
					{/each}
				</section>
			{/each}
		</div>
	{:else if !subject.essays.length}
		<EmptyState icon={PenLine} title="No ALAC essays in {subject.title} yet" />
	{:else}
		<details class="group rounded-2xl border-2 border-b-4 border-slate-200 bg-card dark:border-[#2B434E]">
			<summary class="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-extrabold">
				The ALAC method: Answer, Legal basis, Application, Conclusion
				<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-extrabold text-muted-foreground uppercase group-open:hidden dark:bg-[#223842]">Show</span><span class="hidden rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-extrabold text-muted-foreground uppercase group-open:inline dark:bg-[#223842]">Hide</span>
			</summary>
			<div class="border-t-2 border-slate-100 p-4 dark:border-[#2B434E]"><AlacBanner bare /></div>
		</details>
		{#key essayId}
			<AlacEssayEditor lawModule={subject} selectedId={essayId} filter={status} {onselect} />
		{/key}
	{/if}
</div>

<style>
	input[type='search'] {
		width: 100%;
		min-height: 42px;
		padding: 0 12px;
		background: var(--surface);
		border: 1px solid var(--border-strong);
		border-radius: 12px;
	}
	input[type='search']:focus {
		outline: none;
		border-color: var(--accent);
		box-shadow: var(--focus);
	}
	.grp {
		margin-top: 10px;
	}
	.kind ol {
		padding-left: 1.3em;
		display: grid;
		gap: 2px;
		font-size: 14px;
	}
	.s {
		font-size: 13px;
	}
	.es {
		padding: 14px 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		scroll-margin-top: 80px;
	}
	h3 {
		font-size: 17px;
		font-weight: 800;
		line-height: 1.35;
	}
	.empty {
		padding: 20px;
		text-align: center;
		color: var(--text-2);
	}
</style>
