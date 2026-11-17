<script lang="ts">
	import { page } from '$app/state';
	import { tick } from 'svelte';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import RuleBody from '$lib/components/crimpro/RuleBody.svelte';
	import { getModule } from '$lib/data/modules';
	import { RULES as CP_RULES } from '$lib/crimpro';
	import { LIKELY_RULES } from '$lib/focus/crimpro';
	import { CHAPTERS, CH_TITLE, ROMAN, RULES as SC_RULES, TRAPS } from '$lib/statcon';
	import { store } from '$lib/store.svelte';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);

	// Crim Pro rules search & accordion
	let query = $state('');
	let open: string | null = $state(null);

	const haystack = CP_RULES.map((r) => ({ r, text: ('rule ' + r.id + ' ' + JSON.stringify(r)).toLowerCase() }));
	const list = $derived.by(() => {
		const q = query.trim().toLowerCase();
		return q ? haystack.filter((h) => h.text.includes(q)).map((h) => h.r) : CP_RULES;
	});

	$effect(() => {
		if (slug !== 'crimpro') return;
		const m = /^#r(\d+)$/.exec(page.url.hash);
		if (!m) return;
		open = m[1];
		tick().then(() => document.getElementById('r' + m[1])?.scrollIntoView({ block: 'start' }));
	});

	async function toggle(id: string) {
		open = open === id ? null : id;
		if (open) {
			await tick();
			document.getElementById('r' + id)?.scrollIntoView({ block: 'nearest' });
		}
	}

	const legend: [string, string][] = [
		['tag-bad', 'Memorize'],
		['tag-en', 'Requisites'],
		['tag-ok', 'Exceptions'],
		['tag-warn', 'Exception to exception'],
		['tag-purple', 'Doctrine / rule'],
		['tag-teal', 'Classification'],
		['tag-accent', 'Exam trap']
	];
</script>

<svelte:head><title>{slug === 'crimpro' ? 'Rules 110–127' : 'Rules and Traps'} — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: slug === 'crimpro' ? 'Rules 110–127' : 'Rules and traps' }]} />
	<header class="flex flex-col gap-1.5">
		<p class="label-caps">{slug === 'crimpro' ? 'Color-coded rule cards' : 'Rules, limits & examiner traps'}</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">{slug === 'crimpro' ? 'Rules 110–127' : 'Rules and Traps'}</h1>
	</header>

	{#if slug === 'crimpro'}
		<div class="stack" style="gap:12px">
			<p class="muted" style="max-width:64ch">
				Each rule opens to color-coded notes. Read the hook first and try to recall what it covers before you open the card.
			</p>
			<div class="row wrap" aria-label="Color code" style="gap:6px">
				{#each legend as [cls, label] (label)}<span class="tag {cls}">{label}</span>{/each}
			</div>
			<input type="search" bind:value={query} placeholder="Search a rule or word (e.g. bail, demurrer, inquest)" aria-label="Search rules" />

			{#if !list.length}
				<div class="card empty">Nothing matches “{query}”. Try a shorter word.</div>
			{:else}
				<div class="stack" style="gap:10px">
					{#each list as r (r.id)}
						{@const o = open === r.id}
						<article class="card rule" id="r{r.id}">
							<button class="head" aria-expanded={o} onclick={() => toggle(r.id)}>
								<span class="muted num rn">R {r.id}</span>
								<span class="t">
									<span class="name">{r.name}{#if LIKELY_RULES[r.id]} <span class="tag tag-star" title={LIKELY_RULES[r.id]}>★ Likely</span>{/if}</span>
									<span class="hook">{r.hook}</span>
								</span>
								<span class="chev" aria-hidden="true">{o ? '−' : '+'}</span>
							</button>
							{#if o}
								<div class="body">
									{#if LIKELY_RULES[r.id]}<p class="why-star"><b>★ Likely.</b> {LIKELY_RULES[r.id]}</p>{/if}
									<RuleBody rule={r} />
								</div>
							{/if}
						</article>
					{/each}
				</div>
			{/if}

			<p class="note muted card" style="font-size:13px">
				Based on the 2000 Revised Rules of Criminal Procedure as amended, and the 2017 Revised Guidelines for Continuous Trial.
				The Supreme Court has been revising these rules; ask your professor which version your exam covers.
			</p>
		</div>
	{:else if slug === 'statcon'}
		<div class="stack" style="gap:12px">
			<p class="muted" style="max-width:66ch">
				Each row is a rule (purple) with its limit (green). The traps are the wrong answers examiners expect students to give.
			</p>
			{#each CHAPTERS as c (c)}
				<section class="stack" style="gap:10px" id="ch-{c}">
					<h2 class="ch">{CH_TITLE[c]}</h2>
					<div class="card" style="overflow-x:auto">
						<table>
							<thead><tr><th>Rule</th><th>In short</th><th>Limit</th></tr></thead>
							<tbody>
								{#each SC_RULES[c] as [r, s, l] (r)}
									<tr><th scope="row" class="r">{r}</th><td>{s}</td><td class="l">{l}</td></tr>
								{/each}
							</tbody>
						</table>
					</div>
					<div class="blk trap">
						<h4>Wrong answers examiners expect</h4>
						<ul>{#each TRAPS[c] as t (t)}<li>{t}</li>{/each}</ul>
					</div>
					<div class="row wrap">
						<a class="btn btn-secondary btn-sm" href="/module/statcon/enumerations#ch-{c}">Ch. {ROMAN[c]} enumerations</a>
						<a class="btn btn-ghost btn-sm" href="/module/statcon/problems" onclick={() => (store.statcon.ch = String(c))}>Ch. {ROMAN[c]} problems</a>
					</div>
				</section>
			{/each}
		</div>
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
	.rule {
		scroll-margin-top: 80px;
	}
	.head {
		width: 100%;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 12px;
		align-items: start;
		padding: 14px 16px;
		background: none;
		border: 0;
		border-radius: 12px;
		text-align: left;
		cursor: pointer;
	}
	.head:hover {
		background: var(--surface-2);
	}
	.rn {
		font-size: 12.5px;
		padding-top: 3px;
		min-width: 3.6ch;
	}
	.t {
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
	}
	.name {
		font-size: 17px;
		font-weight: 800;
		line-height: 1.3;
	}
	.hook {
		font-style: italic;
		color: var(--text-2);
	}
	.chev {
		color: var(--text-2);
		font-size: 18px;
		line-height: 1.2;
	}
	.body {
		padding: 12px 16px 16px;
		border-top: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.empty {
		padding: 24px;
		text-align: center;
		color: var(--text-2);
	}
	.ch {
		font-size: 16px;
		font-weight: 800;
		margin-top: 10px;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		font-size: 14px;
	}
	th,
	td {
		border-bottom: 1px solid var(--border);
		padding: 8px 10px;
		text-align: left;
		vertical-align: top;
	}
	tbody tr:last-child > * {
		border-bottom: 0;
	}
	thead th {
		font-size: 13px;
		color: var(--text-2);
	}
	.r {
		background: var(--purple-soft);
		font-weight: 700;
		min-width: 180px;
	}
	.l {
		background: var(--success-soft);
	}
</style>
