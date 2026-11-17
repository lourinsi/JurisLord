<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import CaseDigests from '$lib/components/CaseDigests.svelte';
	import { getModule } from '$lib/data/modules';
	import rawConstiDigests from '$lib/data/kit/consti-digests.json';
	import type { Digest } from '$lib/digest';
	import { LIKELY_CASES } from '$lib/focus/consti';
	import { CASES as CONSTI_CASES, PARTS, PART_SHORT, type PartNo } from '$lib/problems';
	import { DIGESTS as PFR_DIGESTS, GROUP_LABEL, PFR } from '$lib/pfr';
	import { CASES as STATCON_CASES } from '$lib/statcon';
	import { CASES as PHILO_CASES, TENSIONS } from '$lib/philo-content';
	import { fmt } from '$lib/philo';
	import { store } from '$lib/store.svelte';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);

	// Consti I
	const D = rawConstiDigests as Record<string, { facts: string; issue: string; ruling: string }>;
	const constiCases: Digest[] = CONSTI_CASES.map((c) => ({
		id: c.id,
		name: c.name,
		cite: c.cite,
		group: c.part,
		...D[c.id],
		doctrine: c.rule,
		star: LIKELY_CASES[c.id],
		points: c.doc,
		trap: c.key,
		practice: { href: `/module/consti1/problems/${c.id}-drill`, label: 'Practice the case drill' },
		hook: c.hook
	}));
	const constiGroups = ([1, 2, 3, 4] as PartNo[]).map((n) => ({ id: n, label: PART_SHORT[n], title: PARTS[n] }));

	// PFR
	const pfrGroups = PFR.groups.filter((g) => PFR_DIGESTS.some((c) => c.group === g.id)).map((g) => ({ id: g.id, label: GROUP_LABEL[g.id], title: g.title }));

	// StatCon
	const statconCases: Digest[] = STATCON_CASES.map((c) => ({
		id: c.id,
		name: c.name,
		cite: c.cite,
		facts: c.facts,
		issue: c.issue,
		ruling: c.ruling,
		doctrine: c.doc,
		link: c.ch,
		trap: c.trap
	}));
</script>

<svelte:head><title>Case Digests — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'Case digests' }]} />
	<header class="flex flex-col gap-1.5">
		<p class="label-caps">Facts · Issue · Ruling · Doctrine</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">Case Digests</h1>
	</header>

	{#if slug === 'consti1'}
		<CaseDigests
			cases={constiCases}
			groups={constiGroups}
			intro="Each of the 28 cases in four parts: Facts, Issue, Ruling, and Doctrine. The digests are short on purpose; read the full text of the ★ Likely cases."
		/>
	{:else if slug === 'pfr'}
		<CaseDigests cases={PFR_DIGESTS} groups={pfrGroups} ratings={store.pfr.ratings} />
	{:else if slug === 'statcon'}
		<CaseDigests
			cases={statconCases}
			ratings={store.statcon.ratings}
			intro="The five assigned cases in four parts: Facts, Issue, Ruling, and Doctrine, plus the chapter rule each illustrates. Cite the case for its doctrine in your Legal Basis."
		/>
	{:else if slug === 'philo'}
		<div class="stack" style="gap:20px">
			<CaseDigests
				cases={PHILO_CASES}
				ratings={store.philo.ratings}
				intro="The Philippine jurisprudence handouts, plus Philippine Blooming Mills. Each case shows the legal-philosophy idea it illustrates: cite it to prove a thinker’s idea is living Philippine doctrine."
			/>
			<section class="stack" style="gap:8px">
				<h2 style="font-size:18px;font-weight:800">Tensions worth raising in an essay</h2>
				<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr));gap:10px">
					{#each TENSIONS as [t, d] (t)}
						<div class="blk plain">
							<h4>{t}</h4>
							<p>{@html fmt(d)}</p>
						</div>
					{/each}
				</div>
			</section>
		</div>
	{/if}
</div>
