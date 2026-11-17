<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import FocusView from '$lib/components/FocusView.svelte';
	import KitFocus from '$lib/components/kit/KitFocus.svelte';
	import { getModule } from '$lib/data/modules';
	import { kitForSubject } from '$lib/subtabs';
	import { LIKELY_CASES, TOP as CONSTI_TOP } from '$lib/focus/consti';
	import { CASES as CONSTI_CASES } from '$lib/problems';
	import { RULES as CP_RULES, SETS as CP_SETS } from '$lib/crimpro';
	import { LIKELY_RULES, LIKELY_SETS, TOP as CP_TOP } from '$lib/focus/crimpro';
	import { PHILO, ESSAYS, fmt } from '$lib/philo';
	import { RECURRING } from '$lib/philo-content';
	import { answerKey } from '$lib/answerkey.svelte';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);
	const kit = $derived(kitForSubject(slug));

	// Consti I
	const constiFlagged = CONSTI_CASES.filter((c) => LIKELY_CASES[c.id]);

	// Crim Pro
	const cpFive = [
		'Has the accused pleaded yet?',
		'Did the accused consent, or was it his own motion?',
		'Is the dismissal on the merits (evidence, speedy trial)?',
		'What is the penalty bracket?',
		'Is the judgment already final?'
	];

	// Legal Philo #1 model essay
	const philoQuestion =
		'Define the balancing-of-interests approach of the Sociological School. Differentiate it from the approach of the Supreme Court in *Philippine Blooming Mills*. Critique the approach. What is your own opinion, and how does it shape the way you read cases?';
	const philoModel: [string, string][] = [
		[
			'Define.',
			'The Sociological School holds that law is not a closed system of rules but the handmaiden of society. For **Jhering**, society is a mass of competing interests that cannot all be satisfied, and law stands as the impartial mediator among them. **Pound** built this into a method: the judge is a social engineer who scrutinizes, compares, and accepts or rejects conflicting individual and social interests. Our Supreme Court has adopted the method. *Lantion* calls balancing a “fundamental postulate of constitutional law.” *Soriano* weighed a broadcaster’s free speech against the State’s duty to protect the youth and held that constitutional freedoms are not absolute. *Akbayan* weighed the right to information against executive privilege.'
		],
		[
			'Differentiate.',
			'*Philippine Blooming Mills* faced the same kind of clash but resolved it differently. Workers left their shift to join a demonstration at Malacañang against alleged police abuses; the company invoked the no-strike clause, and the union officers were dismissed. The Court did not put the workers’ freedoms and the employer’s property rights on a level scale. It declared the **primacy of human rights over property rights**: property may be restricted on a rational basis, but the freedoms of expression, assembly and petition only on a showing of clear and present danger, which is Holmes’s test. Both approaches look past legal forms to the real interests at stake. They differ in structure: balancing weighs interests case by case; *Philippine Blooming Mills* ranks them in advance, and its language of imprescriptible rights has a natural-law ring.'
		],
		[
			'Critique.',
			'Balancing is honest and flexible: it admits what judges do when rights collide. Its weakness is that there is **no common scale**. How much welfare of the youth outweighs how much free speech? Pound concedes that courts mostly decide by instinct, so whoever frames the interests decides the case, and any right can yield to an interest labeled “important.” A hierarchy corrects this, but has its own difficulty: a worker’s wage or a farmer’s land is both property and the means to a dignified life, and a fixed ranking risks the rigidity Holmes warned against: “General propositions do not decide concrete cases.”'
		],
		[
			'Opinion.',
			'My position is that balancing is the right method, but it should begin from the presumption in *Philippine Blooming Mills* that human rights weigh more, so the burden lies on whoever would restrict them. This shows me that behind every decision lies a theory of law. When I read a case, I now ask whether the Court is applying a text, weighing interests, or ranking rights, because that tells me which argument will persuade it.'
		]
	];
	const philoAdapt = [
		'Asked only to differentiate the tests: use the Differentiate paragraph and add *Gonzales* and *ABS-CBN* for clear and present danger.',
		'Asked about judicial lawmaking: swap *Lantion* and *Soriano* for *Floresca* (interstitial legislation) and *Rodriguez v. Tan* as the counterweight.',
		'Asked about law and morals: use *Philippine Blooming Mills* as a case where a valid contract and a valid procedural rule yielded to a higher norm.'
	];
	let showPhiloModel = $state(false);
	const philoCounts = {
		enums: Object.keys(PHILO.focus.enums ?? {}).length,
		terms: Object.keys(PHILO.focus.terms ?? {}).length,
		essays: ESSAYS.filter((e) => e.star).length
	};
</script>

<svelte:head><title>★ Exam Focus — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: '★ Exam focus' }]} />

	{#if slug === 'consti1'}
		<FocusView top={CONSTI_TOP} subject="Consti I">
			<section class="card" style="padding:16px 18px;display:flex;flex-direction:column;gap:8px">
				<h2 class="eyebrow">★ Likely cases ({constiFlagged.length} of {CONSTI_CASES.length})</h2>
				<ul style="list-style:none;padding:0;display:grid;gap:6px;font-size:14.5px">
					{#each constiFlagged as c (c.id)}
						<li><a href="/module/consti1/cases#c-{c.id}"><i>{c.name}</i></a> <span class="muted">— {LIKELY_CASES[c.id]}</span></li>
					{/each}
				</ul>
			</section>
		</FocusView>
	{:else if slug === 'crimpro'}
		<FocusView top={CP_TOP} subject="Crim Pro">
			<div class="grid gap-3.5 sm:grid-cols-3">
				<section class="blk k-doc">
					<h4>Five questions that solve most twists</h4>
					<ol>{#each cpFive as f (f)}<li>{f}</li>{/each}</ol>
				</section>
				<section class="blk plain">
					<h4>★ Likely rules ({Object.keys(LIKELY_RULES).length} of {CP_RULES.length})</h4>
					<ul>
						{#each CP_RULES.filter((r) => LIKELY_RULES[r.id]) as r (r.id)}
							<li><a href="/module/crimpro/rules#r{r.id}">Rule {r.id} · {r.name}</a> — {LIKELY_RULES[r.id]}</li>
						{/each}
					</ul>
				</section>
				<section class="blk plain">
					<h4>★ Likely twist sets ({Object.keys(LIKELY_SETS).length} of {CP_SETS.length})</h4>
					<ul>
						{#each CP_SETS.filter((s) => LIKELY_SETS[s.id]) as s (s.id)}
							<li><a href="/module/crimpro/twists/{s.id}">{s.title}</a> — {LIKELY_SETS[s.id]}</li>
						{/each}
					</ul>
				</section>
			</div>
		</FocusView>
	{:else if slug === 'philo'}
		<FocusView
			top={PHILO.focus.top}
			subject="Legal Philo"
			flagged="The professor tests thinking: expect define, differentiate, critique and opinion, often in one question."
		>
			<section class="card" id="model" style="padding:16px 18px;display:flex;flex-direction:column;gap:10px;scroll-margin-top:80px">
				<div class="stack" style="gap:4px">
					<h2 class="eyebrow">#1 · The most likely essay, with a model answer</h2>
					<p class="muted" style="font-size:13.5px">
						Lesson 13 is the longest and last lesson, and two of the four case handouts (Holmes, Balancing) feed it. This is a
						prediction, not a certainty.
					</p>
				</div>
				<p class="legal" style="font-size:16.5px;font-style:italic;padding:10px 14px;border-left:3px solid var(--accent);background:var(--accent-soft);border-radius:0 8px 8px 0">
					{@html fmt(philoQuestion)}
				</p>
				{#if showPhiloModel || answerKey.on}
					{#each philoModel as [h, p] (h)}
						<p class="legal" style="font-size:16px;line-height:1.65"><b>{h}</b> {@html fmt(p)}</p>
					{/each}
					<div class="blk plain">
						<h4>Adapting this answer</h4>
						<ul>{#each philoAdapt as a (a)}<li>{@html fmt(a)}</li>{/each}</ul>
					</div>
				{:else}
					<p class="muted" style="font-size:13.5px">Outline your own answer first: one paragraph per verb.</p>
					<button class="btn btn-primary btn-sm" style="align-self:flex-start" onclick={() => (showPhiloModel = true)}>Show model answer</button>
				{/if}
			</section>

			<section class="card" style="padding:16px 18px;display:flex;flex-direction:column;gap:10px">
				<h2 class="eyebrow">★ Likely items in this subject</h2>
				<p style="font-size:14.5px">
					<b class="num">{philoCounts.essays}</b> of {ESSAYS.length} essay questions, <b class="num">{philoCounts.enums}</b> of {PHILO.enums.length} enumerations
					and <b class="num">{philoCounts.terms}</b> of {PHILO.terms.length} definitions are flagged. Each flag shows its reason.
				</p>
				<div class="row wrap">
					<a class="btn btn-secondary btn-sm" href="/module/philo/essays">Essay practice: “★ Likely only”</a>
					<a class="btn btn-secondary btn-sm" href="/module/philo/terms">Definitions: “★ Likely only”</a>
					<a class="btn btn-secondary btn-sm" href="/module/philo/drill">Flashcards: ★ deck</a>
				</div>
			</section>

			<section class="stack" style="gap:8px">
				<h2 style="font-size:18px;font-weight:800">Nine ideas that keep coming back</h2>
				<p class="muted" style="max-width:68ch">They surface in more than one reading, so they let the professor ask you to connect lessons.</p>
				<ol style="list-style:none;padding:0;display:flex;flex-direction:column;gap:8px">
					{#each RECURRING as [idea, where, use], i (idea)}
						<li class="card" style="display:grid;grid-template-columns:auto 1fr;gap:12px;padding:12px 14px">
							<span class="num" aria-hidden="true" style="width:28px;height:28px;border-radius:50%;display:grid;place-items:center;background:var(--accent-soft);color:var(--accent-text);font-size:13px;font-weight:800">{i + 1}</span>
							<div class="stack" style="gap:4px;min-width:0">
								<b>{idea}</b>
								<span class="muted" style="font-size:13.5px">{@html fmt(where)}</span>
								<span style="font-size:13.5px;color:var(--accent-text);font-weight:700">{@html fmt(use)}</span>
							</div>
						</li>
					{/each}
				</ol>
			</section>
		</FocusView>
	{:else if kit}
		<KitFocus {kit} />
	{/if}
</div>
