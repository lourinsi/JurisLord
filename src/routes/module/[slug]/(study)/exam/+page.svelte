<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import ExamView from '$lib/components/kit/ExamView.svelte';
	import McqQuizEngine from '$lib/components/McqQuizEngine.svelte';
	import CrimProExamResults from '$lib/components/crimpro/ExamResults.svelte';
	import CrimProExamRun from '$lib/components/crimpro/ExamRun.svelte';
	import CrimProExamSetup from '$lib/components/crimpro/ExamSetup.svelte';
	import ModelAnswer from '$lib/components/philo/ModelAnswer.svelte';
	import { getModule } from '$lib/data/modules';
	import { kitForSubject } from '$lib/subtabs';
	import { ESSAYS, ESSAY_BY_ID, KIND_OF, essayKey, fmt, kinds, words } from '$lib/philo';
	import { store } from '$lib/store.svelte';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);
	const kit = $derived(kitForSubject(slug));

	// Crim Pro exam session
	const cpSession = $derived(store.crimpro.session);

	// Legal Philo mock exam (4 essays, 40 minutes)
	const MINUTES = 40;
	const philoSt = $derived(store.philo);
	const x = $derived(philoSt.pexam);
	const qs = $derived((x?.ids ?? []).map((id) => ESSAY_BY_ID[id]).filter(Boolean));
	let likelyOnly = $state(false);

	const ans = (id: string) => `x:${id}`;
	function startPhilo() {
		const ids = kinds.map((k) => {
			const pool = ESSAYS.filter((e) => e.type === k.id && (!likelyOnly || e.star));
			return pool[Math.floor(Math.random() * pool.length)].id;
		});
		for (const id of ids) delete philoSt.essays[ans(id)];
		philoSt.pexam = { ids, started: Date.now(), finished: null, marks: {}, graded: false };
		scrollTo({ top: 0 });
	}
	function finishPhilo() {
		if (!x) return;
		x.finished = Date.now();
		scrollTo({ top: 0 });
	}
	function discardPhilo() {
		if (confirm('Discard this mock exam and your answers?')) philoSt.pexam = null;
	}

	let now = $state(Date.now());
	$effect(() => {
		if (!x || x.finished) return;
		const t = setInterval(() => (now = Date.now()), 1000);
		return () => clearInterval(t);
	});
	const secs = $derived(x ? Math.max(0, Math.round(((x.finished ?? now) - x.started) / 1000)) : 0);
	const left = $derived(MINUTES * 60 - secs);
	const clock = (s: number) => `${s < 0 ? '−' : ''}${Math.floor(Math.abs(s) / 60)}:${String(Math.abs(s) % 60).padStart(2, '0')}`;

	const total = $derived(qs.length * 5);
	const score = $derived(qs.reduce((n, q) => n + (x?.marks[q.id] ?? 0), 0));
	const allMarked = $derived(qs.every((q) => x?.marks[q.id] !== undefined));
	function savePhilo() {
		if (!x) return;
		for (const q of qs) {
			const m = x.marks[q.id] ?? 0;
			philoSt.ratings[essayKey(q.id)] = m >= 4 ? 'got' : m >= 2 ? 'shaky' : 'blank';
		}
		philoSt.exams.push({ at: Date.now(), label: 'Mock exam', score, total, secs });
		x.graded = true;
		scrollTo({ top: 0 });
	}
	const TAG = { define: 'tag-en', differentiate: 'tag-teal', critique: 'tag-purple', opinion: 'tag-accent' } as const;
</script>

<svelte:head><title>Mock Exam — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'Mock exam' }]} />
	<header class="flex flex-col gap-1.5">
		<p class="label-caps">Timed simulation &amp; self-grading</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">Mock Exam</h1>
	</header>

	{#if slug === 'crimpro'}
		{#if !cpSession}
			<CrimProExamSetup />
		{:else if cpSession.finished}
			{#key cpSession.started}<CrimProExamResults s={cpSession} />{/key}
		{:else}
			{#key cpSession.started}<CrimProExamRun s={cpSession} />{/key}
		{/if}
	{:else if slug === 'philo'}
		<div class="stack" style="gap:16px">
			{#if !x || x.graded}
				{#if x?.graded}
					<div class="card" style="padding:16px 18px;display:flex;flex-direction:column;gap:10px">
						<span class="eyebrow">Last mock exam</span>
						<b class="num" style="font-size:30px;font-weight:800">{score}<small style="font-size:14px;color:var(--text-2);margin-left:6px">/ {total} · {Math.round((score / total) * 100)}%</small></b>
						<span class="muted" style="font-size:13px">Took {clock(secs)}. Each question is now rated in Essay practice, so weak ones come up for review.</span>
					</div>
				{/if}
				<section class="card" style="padding:16px 18px;display:flex;flex-direction:column;gap:10px">
					<h2 style="font-size:18px;font-weight:800">Mock exam: one essay of each type</h2>
					<p class="muted" style="max-width:66ch">
						Four questions, picked at random: <b>define, differentiate, critique, opinion</b>. Give yourself {MINUTES} minutes, about
						ten per question. Then check each answer against the model and its formula, and mark it out of 5.
					</p>
					<div class="seg" role="group" aria-label="Questions from" style="align-self:flex-start">
						<button aria-pressed={!likelyOnly} onclick={() => (likelyOnly = false)}>All questions</button>
						<button aria-pressed={likelyOnly} onclick={() => (likelyOnly = true)}>★ Likely only</button>
					</div>
					<button class="btn btn-primary" style="align-self:flex-start" onclick={startPhilo}>{x ? 'Start a new exam' : 'Start the exam'}</button>
				</section>
				{#if philoSt.exams.length}
					<section class="stack" style="gap:6px">
						<h2 class="eyebrow">Past mock exams</h2>
						{#each philoSt.exams.slice().reverse().slice(0, 8) as e (e.at)}
							<div class="card between" style="padding:10px 14px;font-size:14px">
								<span>{new Date(e.at).toLocaleDateString()} · {clock(e.secs)}</span>
								<b class="num">{e.score}/{e.total}</b>
							</div>
						{/each}
					</section>
				{/if}
			{:else if !x.finished}
				<div class="note between wrap" class:note-bad={left < 0} style="background:var(--surface);border:1px solid var(--border)">
					<span><b class="num">{clock(left)}</b> {left < 0 ? 'over time' : 'left'} · write one paragraph per question</span>
					<button class="btn btn-ghost btn-sm" onclick={discardPhilo}>Discard</button>
				</div>
				{#each qs as q, i (q.id)}
					<article class="card" style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
						<div class="between" style="align-items:flex-start;gap:10px">
							<h3 class="legal" style="font-size:17px;font-weight:700"><span class="num" style="color:var(--accent-text)">{i + 1}.</span> {@html fmt(q.q)}</h3>
							<span class="tag {TAG[q.type]}">{KIND_OF[q.type].name}</span>
						</div>
						<textarea rows="7" bind:value={philoSt.essays[ans(q.id)]} placeholder={KIND_OF[q.type].first} aria-label="Answer to question {i + 1}"></textarea>
						<span class="faint num" style="font-size:13px">{words(philoSt.essays[ans(q.id)] ?? '')} words</span>
					</article>
				{/each}
				<button class="btn btn-primary" style="align-self:flex-start" onclick={finishPhilo}>Finish and check</button>
			{:else}
				<div class="note between wrap" style="background:var(--surface);border:1px solid var(--border)">
					<span>Check each answer against the model. Ticking the formula sets a mark; adjust it if you need to.</span>
					<b class="num">{score}/{total}</b>
				</div>
				{#each qs as q, i (q.id)}
					<article class="card" style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
						<div class="between" style="align-items:flex-start;gap:10px">
							<h3 class="legal" style="font-size:17px;font-weight:700"><span class="num" style="color:var(--accent-text)">{i + 1}.</span> {@html fmt(q.q)}</h3>
							<span class="tag {TAG[q.type]}">{KIND_OF[q.type].name}</span>
						</div>
						<div class="blk plain">
							<h4>Your answer <span class="faint num">· {words(philoSt.essays[ans(q.id)] ?? '')} words</span></h4>
							<p class="legal" style="white-space:pre-wrap;font-size:16px">{philoSt.essays[ans(q.id)]?.trim() || '(blank)'}</p>
						</div>
						<ModelAnswer {q} onticks={(t, of) => (x.marks[q.id] = Math.round((t / of) * 5))} />
						<div class="row wrap" style="gap:8px">
							<span class="muted" style="font-size:13px">Mark</span>
							<div class="seg" role="group" aria-label="Mark for question {i + 1}">
								{#each [0, 1, 2, 3, 4, 5] as n (n)}
									<button aria-pressed={x.marks[q.id] === n} onclick={() => (x.marks[q.id] = n)}>{n}</button>
								{/each}
							</div>
						</div>
					</article>
				{/each}
				<div class="row wrap">
					<button class="btn btn-primary" disabled={!allMarked} onclick={savePhilo}>Save result · {score}/{total}</button>
					{#if !allMarked}<span class="muted" style="font-size:13px">Mark every question first.</span>{/if}
				</div>
			{/if}
		</div>
	{:else if kit}
		<ExamView {kit} />
	{:else if subject.mcqs.length}
		<McqQuizEngine lawModule={subject} topicId="all" initialMode="exam" initialFilter="all" initialQuestion="" />
	{/if}
</div>
