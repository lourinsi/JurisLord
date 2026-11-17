<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import { getModule } from '$lib/data/modules';
	import { QUESTION_COUNT, RULES, SETS } from '$lib/crimpro';
	import { pool, setProgress, startFrom } from '$lib/crimpro-exam';
	import { store } from '$lib/store.svelte';
	import { LIKELY_SETS } from '$lib/focus/crimpro';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);

	let rule = $state('all');
	const list = $derived(SETS.filter((s) => rule === 'all' || s.rules.includes(rule)));
	const questions = $derived(list.reduce((n, s) => n + s.qs.length, 0));

	const prog = $derived(setProgress());
	const progById = $derived(Object.fromEntries(prog.map((p) => [p.id, p])));
	const seen = $derived(prog.reduce((n, p) => n + p.seen, 0));
	const right = $derived(prog.reduce((n, p) => n + p.right, 0));
	const missed = $derived(pool('missed').length);
	const lastExam = $derived(store.crimpro.exams.at(-1));
	const session = $derived(store.crimpro.session);
	const weakest = $derived(
		prog
			.filter((p) => p.seen && p.right < p.seen)
			.sort((a, b) => a.right / a.seen - b.right / b.seen)
			.slice(0, 3)
	);
	const next = $derived(SETS.find((s) => store.crimpro.best[s.id] == null) ?? SETS.find((s) => s.id === weakest[0]?.id));

	function reviewMisses() {
		if (session && !session.finished && !confirm('Discard your unfinished run and review your misses instead?')) return;
		if (startFrom('practice', 'missed', missed)) goto('/module/crimpro/exam');
	}
</script>

<svelte:head><title>Twist Drills — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'Twist drills' }]} />
	<header class="flex flex-col gap-1.5">
		<p class="label-caps">Linked case-file drills</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">Twist Drills</h1>
	</header>

	{#if session && !session.finished}
		<div class="note note-warn between wrap">
			<span>You have an unfinished {session.kind === 'exam' ? 'mock exam' : 'practice run'}.</span>
			<a class="btn btn-primary btn-sm" href="/module/crimpro/exam">Resume</a>
		</div>
	{/if}

	<section class="kpis card" aria-label="Your Crim Pro progress">
		<div class="kpi">
			<span class="k">Questions answered</span>
			<b class="num">{seen}<small>/ {QUESTION_COUNT}</small></b>
			<div class="bar"><i style="width:{(seen / QUESTION_COUNT) * 100}%"></i></div>
		</div>
		<div class="kpi">
			<span class="k">Right on latest try</span>
			<b class="num">{seen ? Math.round((right / seen) * 100) + '%' : '—'}</b>
			<span class="s">{seen ? `${right} of ${seen} answered` : 'Answer one to see it'}</span>
		</div>
		<div class="kpi">
			<span class="k">Missed, not yet fixed</span>
			<b class="num">{missed}</b>
			{#if missed}<button class="btn-link s" onclick={reviewMisses}>Review them now →</button>{:else}<span class="s">Wrong answers land here</span>{/if}
		</div>
		<div class="kpi">
			<span class="k">Last mock exam</span>
			<b class="num">{lastExam ? Math.round((lastExam.score / lastExam.total) * 100) + '%' : '—'}</b>
			<span class="s num">{lastExam ? `${lastExam.score} of ${lastExam.total}` : 'Not taken yet'}</span>
		</div>
	</section>

	<div class="row wrap">
		{#if next}<a class="btn btn-primary" href="/module/crimpro/twists/{next.id}">{seen ? 'Continue' : 'Start'}: {next.title}</a>{/if}
		<a class="btn btn-secondary" href="/module/crimpro/exam">Mock exam</a>
		{#if missed}<button class="btn btn-secondary" onclick={reviewMisses}>Review misses ({missed})</button>{/if}
	</div>

	{#if weakest.length}
		<div class="weak">
			<span class="eyebrow">Weakest topics</span>
			<div class="row wrap" style="gap:6px">
				{#each weakest as w (w.id)}
					<a class="tag tag-bad weak-a" href="/module/crimpro/twists/{w.id}">{w.title} · <span class="num">{w.right}/{w.seen}</span></a>
				{/each}
			</div>
		</div>
	{/if}

	<p class="muted lead">
		Each set is one case file. Every new question changes <b>one fact</b>, and that change may flip the answer. Before you
		answer, read the “What changed” box and ask yourself what the change does.
	</p>

	<div class="seg filter" role="group" aria-label="Filter sets by rule">
		<button aria-pressed={rule === 'all'} onclick={() => (rule = 'all')}>All rules</button>
		{#each RULES as r (r.id)}
			<button aria-pressed={rule === r.id} onclick={() => (rule = r.id)}>{r.id}</button>
		{/each}
	</div>

	<p class="muted num count">
		{list.length} set{list.length === 1 ? '' : 's'} · {questions} questions{rule === 'all' ? '' : ` touching Rule ${rule}`}
	</p>

	{#if !list.length}
		<div class="card empty">No set drills Rule {rule} directly yet. Review it under <a href="/module/crimpro/rules#r{rule}">Rules 110–127</a>.</div>
	{:else}
		<div class="sets">
			{#each list as s (s.id)}
				{@const b = store.crimpro.best[s.id]}
				{@const p = progById[s.id]}
				<a class="card set" href="/module/crimpro/twists/{s.id}">
					{#if LIKELY_SETS[s.id]}<span class="tag tag-star" title={LIKELY_SETS[s.id]}>★ Likely</span>{/if}
					<span class="muted num" style="font-size:12px">Rule {s.rules.join(', ')}</span>
					<span class="st">{s.title}</span>
					<span class="muted num" style="font-size:13px">{s.qs.length} linked questions{p.seen ? ` · ${p.right}/${s.qs.length} right` : ''}</span>
					<span class="tag num {b == null ? '' : b === s.qs.length ? 'tag-ok' : 'tag-warn'}">
						{b == null ? 'Not tried' : `Best: ${b} / ${s.qs.length}`}
					</span>
				</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	.kpis {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(170px, 100%), 1fr));
		overflow: hidden;
	}
	.kpi {
		padding: 14px 18px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
		border-right: 1px solid var(--border);
	}
	.kpi:last-child {
		border-right: 0;
	}
	.kpi .bar {
		align-self: stretch;
	}
	.kpi .k {
		font-size: 13px;
		color: var(--text-2);
	}
	.kpi .s {
		font-size: 12px;
		color: var(--text-2);
	}
	.kpi b {
		font-size: 26px;
		line-height: 1.1;
		font-weight: 800;
		letter-spacing: -0.02em;
	}
	.kpi b small {
		font-size: 13px;
		color: var(--text-2);
		font-weight: 600;
		margin-left: 3px;
	}
	.btn-link {
		background: none;
		border: 0;
		padding: 0;
		color: var(--accent-text) !important;
		font-weight: 700;
		cursor: pointer;
		text-decoration: underline;
	}
	.weak {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.weak-a {
		text-decoration: none;
	}
	.weak-a:hover {
		text-decoration: underline;
	}
	@media (max-width: 640px) {
		.kpi {
			border-right: 0;
			border-bottom: 1px solid var(--border);
		}
	}
	.lead {
		max-width: 64ch;
	}
	.filter button {
		min-width: 40px;
	}
	.count {
		font-size: 13px;
	}
	.sets {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr));
		gap: 10px;
	}
	.set {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
		padding: 14px;
		color: var(--text);
		text-decoration: none;
		min-width: 0;
	}
	.set:hover {
		border-color: var(--border-strong);
		background: var(--surface-2);
	}
	.st {
		font-weight: 800;
		font-size: 16.5px;
		line-height: 1.3;
	}
	.set .tag {
		margin-top: 4px;
	}
	.empty {
		padding: 24px;
		text-align: center;
		color: var(--text-2);
	}
</style>
