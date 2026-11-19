<script lang="ts">
	import { SvelteSet } from 'svelte/reactivity';
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import NumberTable from '$lib/components/NumberTable.svelte';
	import { getModule } from '$lib/data/modules';
	import { NUMBERS_BY_SUBJECT } from '$lib/numbers-registry';
	import type { AnyNumberRow } from '$lib/cluster-numbers';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);
	const config = $derived(NUMBERS_BY_SUBJECT[slug]);

	let gridHide = $state(false);
	let gridClustered = $state(false);
	const gridShown = new SvelteSet<string>();

	$effect(() => {
		void slug;
		gridHide = false;
		gridClustered = false;
		gridShown.clear();
	});

	function setGridHide(v: boolean) {
		gridHide = v;
		gridShown.clear();
	}
	function toggleGrid(id: string) {
		if (gridShown.has(id)) gridShown.delete(id);
		else gridShown.add(id);
	}

	const gridClusterRows: AnyNumberRow[] = $derived.by(() => {
		const grid = config?.topicGrid;
		if (!grid) return [];
		const out: AnyNumberRow[] = [];
		for (const t of grid.tables) {
			const [topic, srcPart] = t.title.split('·').map((s) => s.trim());
			const src = srcPart || topic;
			for (const [label, ...vals] of t.rows) {
				if (t.head && t.head.length > 2) {
					vals.forEach((v, idx) => {
						if (v && v !== '—') {
							const col = t.head![idx + 1];
							let prompt = `${topic} — ${label} (${col})`;
							if (topic.startsWith('Periods of divisible penalties')) {
								prompt = `${col} period duration of ${label}`;
							} else if (topic.startsWith('Degrees lower')) {
								prompt = `Number of degrees lower than the prescribed penalty for a ${col.toLowerCase()} felony committed by a ${label.toLowerCase()}`;
							} else if (topic.startsWith('Prescription')) {
								prompt = `Prescriptive period (${col.toLowerCase()}) for felonies punishable by ${label}`;
							}
							out.push([v, prompt, src]);
						}
					});
				} else if (vals[0]) {
					let prompt = `${topic}: ${label}`;
					if (topic.startsWith('Duration of penalties')) {
						prompt = `Statutory duration of the penalty of ${label}`;
					} else if (topic.startsWith('Fines')) {
						prompt = `Statutory fine range for ${label} penalties or felonies under R.A. 10951`;
					} else if (topic.startsWith('Good conduct time allowance')) {
						prompt = label.startsWith('STAL')
							? 'Special Time Allowance for Loyalty (STAL) deduction on sentence during calamity or catastrophe'
							: `Good Conduct Time Allowance (GCTA) monthly deduction during ${label} of imprisonment`;
					}
					out.push([vals[0], prompt, src]);
				}
			}
		}
		for (const row of grid.other) {
			out.push(row);
		}
		return out;
	});
</script>

<svelte:head><title>Numbers to Memorize — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'Numbers to memorize' }]} />

	<header class="flex flex-col gap-1.5">
		<p class="label-caps">Self-test recall</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">Numbers to Memorize</h1>
	</header>

	{#if !config}
		<div class="card p-6 text-sm text-muted-foreground">
			No numbers list is configured for this subject yet.
		</div>
	{:else if config.topicGrid}
		<div class="stack" style="gap:12px">
			<p class="muted" style="max-width:66ch">{config.intro}</p>
			{#if gridClustered}
				<div class="seg" role="group" aria-label="Grouping mode" style="align-self:flex-start">
					<button aria-pressed={!gridClustered} onclick={() => (gridClustered = false)}>Topic tables</button>
					<button aria-pressed={gridClustered} onclick={() => (gridClustered = true)}>Cluster similar</button>
				</div>
				<NumberTable rows={gridClusterRows} title={config.topicGrid.clusterTitle} defaultClustered={true} />
			{:else}
				<div class="between wrap" style="gap:8px">
					<div class="seg" role="group" aria-label="Grouping mode">
						<button aria-pressed={!gridClustered} onclick={() => (gridClustered = false)}>Topic tables</button>
						<button aria-pressed={gridClustered} onclick={() => (gridClustered = true)}>Cluster similar</button>
					</div>
					<div class="seg" role="group" aria-label="Number visibility">
						<button aria-pressed={!gridHide} onclick={() => setGridHide(false)}>Show numbers</button>
						<button aria-pressed={gridHide} onclick={() => setGridHide(true)}>Hide numbers (self-test)</button>
					</div>
				</div>

				{#snippet val(id: string, v: string)}
					{#if gridHide}
						{@const isBlurred = !gridShown.has(id)}
						<button class="v" class:blur={isBlurred} onclick={() => toggleGrid(id)} aria-label={isBlurred ? 'Reveal this number' : v}
							>{isBlurred ? '••••••••••••' : v}</button
						>
					{:else}{v}{/if}
				{/snippet}

				<div class="crim-grid">
					{#each config.topicGrid.tables as t (t.title)}
						<section class="blk k-mem">
							<h4>{t.title}</h4>
							<div style="overflow-x:auto">
								<table>
									{#if t.head}<thead><tr>{#each t.head as h, i (i)}<th>{h}</th>{/each}</tr></thead>{/if}
									<tbody>
										{#each t.rows as [label, ...vals] (label)}
											<tr>
												<th scope="row">{label}</th>
												{#each vals as v, i (i)}<td>{@render val(`${t.title}|${label}|${i}`, v)}</td>{/each}
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
							{#if t.note && !gridHide}<p class="muted note-s">{t.note}</p>{/if}
						</section>
					{/each}
					<section class="blk k-mem wide">
						<h4>Other numbers</h4>
						<ul>
							{#each config.topicGrid.other as [ans, what, , note] (what)}
								<li>
									<b>{what}:</b> {@render val(what, ans)}
									{#if note && (!gridHide || gridShown.has(what))}
										<span class="muted note-s"> — {note}</span>
									{/if}
								</li>
							{/each}
						</ul>
					</section>
				</div>
			{/if}
		</div>
	{:else if config.sections}
		<div class="stack" style="gap:{config.sections.length > 1 ? '18px' : '12px'}">
			<p class="muted" style="max-width:66ch">{config.intro}</p>
			{#each config.sections as sec, idx (sec.title ?? idx)}
				<NumberTable rows={sec.rows} title={sec.title} finalsTopics={sec.finalsTopics} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.crim-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(380px, 100%), 1fr));
		gap: 12px;
	}
	.wide {
		grid-column: 1 / -1;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		font-size: 14px;
	}
	th,
	td {
		border-bottom: 1px solid color-mix(in srgb, var(--fg-k, var(--border)) 22%, transparent);
		padding: 6px 8px;
		text-align: left;
		vertical-align: top;
	}
	tbody tr:last-child > * {
		border-bottom: 0;
	}
	thead th {
		font-size: 12.5px;
		color: var(--text-2);
	}
	tbody th {
		font-weight: 700;
	}
	td {
		font-variant-numeric: tabular-nums;
	}
	.note-s {
		font-size: 12.5px;
		margin-top: 6px;
	}
	.v {
		padding: 0;
		border: 0;
		background: none;
		font: inherit;
		text-align: left;
		cursor: pointer;
		transition: filter 0.15s;
	}
	.v.blur {
		display: inline-block;
		width: 12ch;
		overflow: hidden;
		white-space: nowrap;
		filter: blur(5px);
		user-select: none;
	}
</style>
