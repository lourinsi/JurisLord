<script lang="ts">
	import { SvelteSet } from 'svelte/reactivity';
	import {
		clusterNumberRows,
		collectSourceTags,
		extractSourceTag,
		type AnyNumberRow
	} from '$lib/cluster-numbers';
	import type { FinalsTopic } from '$lib/crimpro-finals';

	/** [number, what it is for, source, optional note]. In self-test mode the numbers blur until tapped. */
	let {
		rows,
		title = 'Numbers to memorize',
		defaultClustered = false,
		finalsTopics
	}: {
		rows: readonly AnyNumberRow[];
		title?: string;
		defaultClustered?: boolean;
		finalsTopics?: readonly FinalsTopic[];
	} = $props();

	let hide = $state(false);
	// svelte-ignore state_referenced_locally
	let clustered = $state(defaultClustered);
	let sortMode = $state<'common' | 'scale'>('common');
	let activeClusterId = $state<string>('all');

	// Filter state: 'all' | 'custom' | 'finals'
	let filterMode = $state<'all' | 'custom' | 'finals'>('all');
	const selectedSources = new SvelteSet<string>();
	const selectedFinalsTopics = new SvelteSet<string>();

	const sourceTags = $derived(collectSourceTags(rows));
	const ruleTags = $derived(sourceTags.filter((t) => t.ruleNum !== undefined));

	let rangeFrom = $state<number>(110);
	let rangeTo = $state<number>(120);

	// Initialize range bounds when ruleTags exist
	$effect(() => {
		if (ruleTags.length >= 2) {
			const minR = ruleTags[0].ruleNum!;
			const maxR = ruleTags[ruleTags.length - 1].ruleNum!;
			if (rangeFrom < minR || rangeFrom > maxR) rangeFrom = minR;
			if (rangeTo < minR || rangeTo > maxR) rangeTo = Math.min(120, maxR);
		}
	});

	const shown = new SvelteSet<string>();
	function setHide(v: boolean) {
		hide = v;
		shown.clear();
	}
	function toggleShown(key: string) {
		if (shown.has(key)) shown.delete(key);
		else shown.add(key);
	}

	function enterCustomFilter() {
		if (filterMode !== 'custom') {
			filterMode = 'custom';
			activeClusterId = 'all';
			if (selectedSources.size === 0) {
				for (const t of sourceTags) selectedSources.add(t.id);
			}
		}
	}

	function enterFinalsFilter() {
		filterMode = 'finals';
		activeClusterId = 'all';
		if (finalsTopics && selectedFinalsTopics.size === 0) {
			for (const t of finalsTopics) selectedFinalsTopics.add(t.id);
		}
	}

	function toggleSource(id: string) {
		if (selectedSources.has(id)) selectedSources.delete(id);
		else selectedSources.add(id);
		activeClusterId = 'all';
	}

	function applyRuleRange(fromNum: number, toNum: number) {
		const lo = Math.min(fromNum, toNum);
		const hi = Math.max(fromNum, toNum);
		filterMode = 'custom';
		selectedSources.clear();
		for (const t of sourceTags) {
			if (t.ruleNum !== undefined && t.ruleNum >= lo && t.ruleNum <= hi) {
				selectedSources.add(t.id);
			}
		}
		activeClusterId = 'all';
	}

	function selectAllSources() {
		for (const t of sourceTags) selectedSources.add(t.id);
		activeClusterId = 'all';
	}

	function clearAllSources() {
		selectedSources.clear();
		activeClusterId = 'all';
	}

	function toggleFinalsTopic(id: string) {
		if (selectedFinalsTopics.has(id)) selectedFinalsTopics.delete(id);
		else selectedFinalsTopics.add(id);
		activeClusterId = 'all';
	}

	const activeFinalsTopics = $derived(
		finalsTopics ? finalsTopics.filter((t) => selectedFinalsTopics.has(t.id)) : []
	);

	const totalFinalsCount = $derived(
		finalsTopics
			? finalsTopics.reduce(
					(acc, t) => acc + t.subtopics.reduce((sAcc, st) => sAcc + st.rows.length, 0),
					0
				)
			: 0
	);

	const activeRows = $derived.by((): AnyNumberRow[] => {
		if (filterMode === 'finals' && finalsTopics) {
			return activeFinalsTopics.flatMap((t) => t.subtopics.flatMap((st) => st.rows));
		}
		if (filterMode === 'custom') {
			return rows.filter((r) => selectedSources.has(extractSourceTag(r[2]).id));
		}
		return [...rows];
	});

	const rawClusters = $derived(clusterNumberRows(activeRows));

	const sortedClusters = $derived.by(() => {
		const list = [...rawClusters];
		if (sortMode === 'common') {
			list.sort((a, b) => {
				if (a.exact !== b.exact) return a.exact ? -1 : 1;
				if (b.items.length !== a.items.length) return b.items.length - a.items.length;
				return a.scaleOrder - b.scaleOrder;
			});
		} else {
			list.sort((a, b) => a.scaleOrder - b.scaleOrder);
		}
		return list;
	});

	const visibleClusters = $derived(
		activeClusterId === 'all' || !sortedClusters.some((c) => c.id === activeClusterId)
			? sortedClusters
			: sortedClusters.filter((c) => c.id === activeClusterId)
	);
</script>

{#snippet rowItem(row: AnyNumberRow, key: string)}
	{@const [n, what, src, note] = row}
	{@const blurred = hide && !shown.has(key)}
	<tr>
		<td class="n num">
			{#if hide}
				<button
					class:blurred
					onclick={() => toggleShown(key)}
					aria-label={blurred ? `Reveal the number for: ${what}` : undefined}>{n}</button
				>
			{:else}{n}{/if}
		</td>
		<td>
			<div>{what}</div>
			{#if note}
				<p class="note"><span class="note-label">Note:</span> {note}</p>
			{/if}
		</td>
		<td class="muted src">{src}</td>
	</tr>
{/snippet}

<div class="stack" style="gap:12px">
	<div class="between wrap" style="gap:8px">
		<h2 class="eyebrow">{title}</h2>
		<div class="controls-row">
			{#if sourceTags.length > 1 || finalsTopics}
				<div class="seg" role="group" aria-label="Filter scope">
					<button
						aria-pressed={filterMode === 'all'}
						onclick={() => {
							filterMode = 'all';
							activeClusterId = 'all';
						}}>All ({rows.length})</button
					>
					{#if finalsTopics}
						<button
							class="finals-btn"
							aria-pressed={filterMode === 'finals'}
							onclick={enterFinalsFilter}>★ FINALS ({totalFinalsCount})</button
						>
					{/if}
					{#if sourceTags.length > 1}
						<button aria-pressed={filterMode === 'custom'} onclick={enterCustomFilter}>
							{filterMode === 'custom'
								? `Filter Rules (${activeRows.length})`
								: 'Filter by Rule / Source'}
						</button>
					{/if}
				</div>
			{/if}
			<div class="seg" role="group" aria-label="Grouping mode">
				<button
					aria-pressed={!clustered}
					onclick={() => {
						clustered = false;
						activeClusterId = 'all';
					}}>{filterMode === 'finals' ? 'By Finals Topic' : 'Default order'}</button
				>
				<button aria-pressed={clustered} onclick={() => (clustered = true)}>Cluster similar</button>
			</div>
			<div class="seg" role="group" aria-label="Number visibility">
				<button aria-pressed={!hide} onclick={() => setHide(false)}>Show numbers</button>
				<button aria-pressed={hide} onclick={() => setHide(true)}>Hide numbers (self-test)</button>
			</div>
		</div>
	</div>

	{#if filterMode === 'custom'}
		<div class="card filter-panel">
			{#if ruleTags.length >= 2}
				<div class="range-bar">
					<span class="range-label">Rule Range:</span>
					<label class="range-select-label">
						<span>From</span>
						<select bind:value={rangeFrom} class="range-select">
							{#each ruleTags as rt (rt.id)}
								<option value={rt.ruleNum}>{rt.label}</option>
							{/each}
						</select>
					</label>
					<label class="range-select-label">
						<span>To</span>
						<select bind:value={rangeTo} class="range-select">
							{#each ruleTags as rt (rt.id)}
								<option value={rt.ruleNum}>{rt.label}</option>
							{/each}
						</select>
					</label>
					<button class="action-pill primary" onclick={() => applyRuleRange(rangeFrom, rangeTo)}>
						Apply Rule {Math.min(rangeFrom, rangeTo)}–{Math.max(rangeFrom, rangeTo)}
					</button>
					<div class="preset-group">
						{#if ruleTags.some((r) => r.ruleNum === 110) && ruleTags.some((r) => r.ruleNum === 120)}
							<button
								class="action-pill"
								onclick={() => {
									rangeFrom = 110;
									rangeTo = 120;
									applyRuleRange(110, 120);
								}}>Rules 110–120</button
							>
						{/if}
						{#if ruleTags.some((r) => r.ruleNum === 110) && ruleTags.some((r) => r.ruleNum === 127)}
							<button
								class="action-pill"
								onclick={() => {
									rangeFrom = 110;
									rangeTo = 127;
									applyRuleRange(110, 127);
								}}>Rules 110–127</button
							>
						{/if}
						<button class="action-pill" onclick={selectAllSources}>Select all</button>
						<button class="action-pill" onclick={clearAllSources}>Clear</button>
					</div>
				</div>
			{:else}
				<div class="range-bar">
					<span class="range-label">Toggle sources to include:</span>
					<div class="preset-group">
						<button class="action-pill" onclick={selectAllSources}>Select all</button>
						<button class="action-pill" onclick={clearAllSources}>Clear</button>
					</div>
				</div>
			{/if}

			<div class="source-chips" role="group" aria-label="Select rules or sources to include">
				{#each sourceTags as tag (tag.id)}
					{@const active = selectedSources.has(tag.id)}
					<button
						class="chip"
						class:active
						aria-pressed={active}
						onclick={() => toggleSource(tag.id)}
					>
						{tag.label}
						<span class="chip-count">{tag.count}</span>
					</button>
				{/each}
			</div>
		</div>
	{/if}

	{#if filterMode === 'finals' && finalsTopics}
		<div class="card filter-panel finals-panel">
			<div class="range-bar">
				<span class="range-label">★ Final Exam Notes — 5 Topics (toggle topics to include):</span>
				<div class="preset-group">
					<button
						class="action-pill"
						onclick={() => {
							for (const t of finalsTopics) selectedFinalsTopics.add(t.id);
							activeClusterId = 'all';
						}}>All 5 topics</button
					>
					<button
						class="action-pill"
						onclick={() => {
							selectedFinalsTopics.clear();
							activeClusterId = 'all';
						}}>Clear</button
					>
				</div>
			</div>
			<div class="source-chips" role="group" aria-label="Select Finals topics">
				{#each finalsTopics as topic (topic.id)}
					{@const active = selectedFinalsTopics.has(topic.id)}
					{@const count = topic.subtopics.reduce((a, st) => a + st.rows.length, 0)}
					<button
						class="chip"
						class:active
						aria-pressed={active}
						onclick={() => toggleFinalsTopic(topic.id)}
					>
						{topic.shortTitle}
						<span class="chip-count">{count}</span>
					</button>
				{/each}
			</div>
		</div>
	{/if}

	{#if activeRows.length === 0}
		<div class="card empty-box muted">
			No items match your current filter selection. Select at least one rule or topic above.
		</div>
	{:else if !clustered}
		{#if filterMode === 'finals' && finalsTopics}
			<div class="clusters-stack">
				{#each activeFinalsTopics as topic (topic.id)}
					{@const topicCount = topic.subtopics.reduce((a, st) => a + st.rows.length, 0)}
					<section class="card cluster-card">
						<header class="cluster-header finals-topic-header">
							<div class="cluster-title-wrap">
								<h3 class="cluster-title">{topic.title}</h3>
							</div>
							<span class="cluster-badge">{topicCount} items</span>
						</header>
						{#each topic.subtopics as sub, sIdx (sub.title)}
							<div class="subtopic-block" class:has-top-border={sIdx > 0}>
								<h4 class="subtopic-title">{sub.title}</h4>
								<div style="overflow-x:auto">
									<table>
										<thead><tr><th>Number / Rule</th><th>What it is for</th><th>Source</th></tr></thead>
										<tbody>
											{#each sub.rows as row, rIdx (rIdx)}
												{@render rowItem(row, `finals-${topic.id}-${sIdx}-${rIdx}`)}
											{/each}
										</tbody>
									</table>
								</div>
							</div>
						{/each}
					</section>
				{/each}
			</div>
		{:else}
			<div class="card" style="overflow-x:auto">
				<table>
					<thead><tr><th>Number</th><th>What it is for</th><th>Source</th></tr></thead>
					<tbody>
						{#each activeRows as row, k (k)}
							{@render rowItem(row, `row-${k}`)}
						{/each}
					</tbody>
				</table>
			</div>
		{/if}
	{:else}
		<div class="cluster-toolbar">
			<div class="cluster-chips" role="group" aria-label="Filter by cluster">
				<button
					class="chip"
					class:active={activeClusterId === 'all'}
					onclick={() => (activeClusterId = 'all')}
				>
					All clusters <span class="chip-count">{activeRows.length}</span>
				</button>
				{#each sortedClusters as c (c.id)}
					<button
						class="chip"
						class:active={activeClusterId === c.id}
						onclick={() => (activeClusterId = activeClusterId === c.id ? 'all' : c.id)}
					>
						{c.title.replace(/ Cluster$/, '').replace(/ \(.*\)$/, '')}
						<span class="chip-count">{c.items.length}</span>
					</button>
				{/each}
			</div>
			{#if sortedClusters.length > 2}
				<div class="seg sort-seg" role="group" aria-label="Cluster sort order">
					<button aria-pressed={sortMode === 'common'} onclick={() => (sortMode = 'common')}
						>Most common</button
					>
					<button aria-pressed={sortMode === 'scale'} onclick={() => (sortMode = 'scale')}
						>By time / scale</button
					>
				</div>
			{/if}
		</div>

		<div class="clusters-stack">
			{#each visibleClusters as cluster (cluster.id)}
				<section class="card cluster-card">
					<header class="cluster-header">
						<div class="cluster-title-wrap">
							<h3 class="cluster-title">{cluster.title}</h3>
							{#if cluster.subtitle}
								<p class="cluster-sub muted">{cluster.subtitle}</p>
							{/if}
						</div>
						<span class="cluster-badge"
							>{cluster.items.length} {cluster.items.length === 1 ? 'item' : 'items'}</span
						>
					</header>
					<div style="overflow-x:auto">
						<table>
							<thead><tr><th>Number</th><th>What it is for</th><th>Source</th></tr></thead>
							<tbody>
								{#each cluster.items as item (item.index)}
									{@render rowItem(item.row, `cluster-${item.index}`)}
								{/each}
							</tbody>
						</table>
					</div>
				</section>
			{/each}
		</div>
	{/if}
</div>

<style>
	.controls-row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: center;
	}
	.finals-btn {
		font-weight: 700;
	}
	.filter-panel {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 12px 14px;
	}
	.range-bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 8px;
	}
	.range-label {
		font-size: 12.5px;
		font-weight: 600;
		color: var(--text-2);
	}
	.range-select-label {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		font-size: 12px;
		color: var(--text-2);
	}
	.range-select {
		padding: 3px 8px;
		border-radius: 6px;
		border: 1px solid var(--border);
		background: var(--bg, transparent);
		color: var(--text);
		font-size: 12.5px;
		font-weight: 600;
	}
	.preset-group {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		margin-left: auto;
	}
	.action-pill {
		padding: 4px 10px;
		border-radius: 6px;
		border: 1px solid var(--border);
		background: var(--surface, transparent);
		color: var(--text-2);
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		transition:
			background 0.15s,
			color 0.15s,
			border-color 0.15s;
	}
	.action-pill:hover {
		border-color: var(--text-2);
		color: var(--text);
	}
	.action-pill.primary {
		background: var(--text);
		color: var(--bg, #fff);
		border-color: var(--text);
	}
	.source-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.empty-box {
		padding: 20px;
		text-align: center;
		font-size: 14px;
	}
	.subtopic-block.has-top-border {
		border-top: 1px solid var(--border);
	}
	.subtopic-title {
		margin: 0;
		padding: 8px 14px 6px;
		font-size: 12.5px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--text-2);
		background: color-mix(in srgb, var(--border) 14%, transparent);
		border-bottom: 1px solid var(--border);
	}
	.cluster-toolbar {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		gap: 10px;
	}
	.cluster-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		flex: 1 1 420px;
	}
	.chip {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 4px 10px;
		border-radius: 999px;
		border: 1px solid var(--border);
		background: var(--surface, transparent);
		color: var(--text-2);
		font-size: 12px;
		font-weight: 500;
		cursor: pointer;
		transition:
			background 0.15s,
			color 0.15s,
			border-color 0.15s;
	}
	.chip:hover {
		border-color: var(--text-2);
		color: var(--text);
	}
	.chip.active {
		background: var(--text);
		color: var(--bg, #fff);
		border-color: var(--text);
	}
	.chip-count {
		font-size: 11px;
		font-weight: 700;
		opacity: 0.75;
		font-variant-numeric: tabular-nums;
	}
	.sort-seg {
		flex-shrink: 0;
	}
	.clusters-stack {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.cluster-card {
		padding: 0;
		overflow: hidden;
	}
	.cluster-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 12px;
		padding: 12px 14px 10px;
		border-bottom: 1px solid var(--border);
		background: color-mix(in srgb, var(--border) 28%, transparent);
	}
	.cluster-title-wrap {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.cluster-title {
		margin: 0;
		font-size: 15px;
		font-weight: 700;
		line-height: 1.25;
	}
	.cluster-sub {
		margin: 0;
		font-size: 12px;
		line-height: 1.35;
	}
	.cluster-badge {
		flex-shrink: 0;
		font-size: 11.5px;
		font-weight: 600;
		padding: 2px 8px;
		border-radius: 999px;
		border: 1px solid var(--border);
		color: var(--text-2);
		font-variant-numeric: tabular-nums;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		font-size: 14px;
	}
	th,
	td {
		border-bottom: 1px solid var(--border);
		padding: 8px 12px;
		text-align: left;
		vertical-align: top;
	}
	tbody tr:last-child td {
		border-bottom: 0;
	}
	th {
		font-size: 13px;
		font-weight: 600;
		color: var(--text-2);
	}
	.n {
		font-family: var(--legal);
		font-weight: 600;
		min-width: 9ch;
	}
	.n button {
		padding: 0;
		border: 0;
		background: none;
		font: inherit;
		text-align: left;
		cursor: pointer;
		transition: filter 0.15s;
	}
	.n button.blurred {
		filter: blur(6px);
		user-select: none;
	}
	.src {
		font-size: 13px;
	}
	.note {
		margin: 4px 0 0;
		font-size: 11.5px;
		line-height: 1.4;
		color: var(--text-2);
	}
	.note-label {
		font-weight: 600;
	}
</style>
