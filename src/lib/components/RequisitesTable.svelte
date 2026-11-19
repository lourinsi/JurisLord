<script lang="ts">
	import { SvelteSet } from 'svelte/reactivity';
	import type { RequisiteItem, RequisiteTopic } from '$lib/requisites';

	let {
		topics,
		title = 'Requisites & Q&A Drill'
	}: {
		topics: readonly RequisiteTopic[];
		title?: string;
	} = $props();

	let hide = $state(false);
	let shuffled = $state(false);
	let shuffleSeed = $state(0);

	const selectedTopics = new SvelteSet<string>();
	const shown = new SvelteSet<string>();

	let initialized = false;

	// Initialize all topics selected once on mount
	$effect(() => {
		if (!initialized && topics.length > 0) {
			initialized = true;
			for (const t of topics) selectedTopics.add(t.id);
		}
	});

	function setHide(v: boolean) {
		hide = v;
		shown.clear();
	}

	function toggleShown(key: string) {
		if (shown.has(key)) shown.delete(key);
		else shown.add(key);
	}

	function toggleTopic(id: string) {
		if (selectedTopics.has(id)) selectedTopics.delete(id);
		else selectedTopics.add(id);
	}

	function selectAllTopics() {
		for (const t of topics) selectedTopics.add(t.id);
	}

	function clearAllTopics() {
		selectedTopics.clear();
	}

	function enableShuffle() {
		shuffled = true;
		shuffleSeed += 1;
		shown.clear();
	}

	const totalCount = $derived(topics.reduce((acc, t) => acc + t.items.length, 0));

	const activeTopics = $derived(topics.filter((t) => selectedTopics.has(t.id)));

	const activeCount = $derived(activeTopics.reduce((acc, t) => acc + t.items.length, 0));

	const shuffledItems = $derived.by(() => {
		void shuffleSeed;
		const list = activeTopics.flatMap((t) =>
			t.items.map((item) => ({ item, topicShort: t.shortTitle }))
		);
		for (let i = list.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[list[i], list[j]] = [list[j], list[i]];
		}
		return list;
	});

	function formatInline(text: string): string {
		const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		return escaped
			.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
			.replace(/\*(.+?)\*/g, '<em>$1</em>');
	}
</script>

{#snippet requisitesContent(item: RequisiteItem)}
	{#if item.answers.length === 1}
		<div class="req-single">{item.answers[0]}</div>
	{:else}
		<ol class="req-list">
			{#each item.answers as ans, idx (idx)}
				<li class="req-li">
					<span class="req-idx">{idx + 1}.</span>
					<span>{ans}</span>
				</li>
			{/each}
		</ol>
	{/if}
{/snippet}

{#snippet rowItem(item: RequisiteItem, key: string, topicShort?: string)}
	{@const blurred = hide && !shown.has(key)}
	<tr>
		<td class="req-cell">
			{#if hide}
				<button
					type="button"
					class="req-toggle"
					class:blurred
					onclick={() => toggleShown(key)}
					aria-label={blurred
						? `Reveal requisites for question ${item.num}: ${item.question}`
						: `Hide requisites for question ${item.num}`}
					title={blurred ? 'Tap to reveal requisites' : 'Tap to hide requisites'}
				>
					{#if blurred}
						••••••••••••
					{:else}
						{@render requisitesContent(item)}
					{/if}
				</button>
			{:else}
				{@render requisitesContent(item)}
			{/if}
		</td>
		<td class="what-cell">
			<div class="q-wrap">
				<span class="q-num">#{item.num}</span>
				<div class="q-body">
					<div>{item.question}</div>
					{#if topicShort}
						<span class="topic-pill">{topicShort}</span>
					{/if}
					{#if item.note && !blurred}
						<p class="note">
							<span class="note-label">{item.noteLabel ?? 'Note'}:</span>
							{@html formatInline(item.note)}
						</p>
					{/if}
				</div>
			</div>
		</td>
		<td class="muted src">{item.source}</td>
	</tr>
{/snippet}

<div class="stack" style="gap:12px">
	<div class="between wrap" style="gap:8px">
		<h2 class="eyebrow">{title} ({activeCount}/{totalCount})</h2>
		<div class="controls-row">
			<div class="seg" role="group" aria-label="Ordering mode">
				<button
					type="button"
					aria-pressed={!shuffled}
					onclick={() => {
						shuffled = false;
						shown.clear();
					}}>By Topic</button
				>
				<button type="button" aria-pressed={shuffled} onclick={enableShuffle}>
					{shuffled ? 'Reshuffle' : 'Shuffled drill'}
				</button>
			</div>
			<div class="seg" role="group" aria-label="Requisites visibility">
				<button type="button" aria-pressed={!hide} onclick={() => setHide(false)}>Show requisites</button>
				<button type="button" aria-pressed={hide} onclick={() => setHide(true)}>Hide requisites (self-test)</button>
			</div>
		</div>
	</div>

	<div class="card filter-panel">
		<div class="range-bar">
			<span class="range-label">Filter by Exam Topic ({topics.length} topics):</span>
			<div class="preset-group">
				<button type="button" class="action-pill" onclick={selectAllTopics}>All {topics.length} topics</button>
				<button type="button" class="action-pill" onclick={clearAllTopics}>Clear</button>
			</div>
		</div>
		<div class="source-chips" role="group" aria-label="Select exam topics">
			{#each topics as topic (topic.id)}
				{@const active = selectedTopics.has(topic.id)}
				<button
					type="button"
					class="chip"
					class:active
					aria-pressed={active}
					onclick={() => toggleTopic(topic.id)}
				>
					{topic.shortTitle}
					<span class="chip-count">{topic.items.length}</span>
				</button>
			{/each}
		</div>
	</div>

	{#if activeCount === 0}
		<div class="card empty-box muted">
			No topics selected. Pick at least one topic above to study.
		</div>
	{:else if !shuffled}
		<div class="clusters-stack">
			{#each activeTopics as topic (topic.id)}
				<section class="card cluster-card">
					<header class="cluster-header">
						<div class="cluster-title-wrap">
							<h3 class="cluster-title">{topic.title}</h3>
						</div>
						<span class="cluster-badge"
							>{topic.items.length} {topic.items.length === 1 ? 'item' : 'items'}</span
						>
					</header>
					<div style="overflow-x:auto">
						<table>
							<thead>
								<tr>
									<th class="col-req">Requisites</th>
									<th class="col-what">What it is for</th>
									<th class="col-src">Source</th>
								</tr>
							</thead>
							<tbody>
								{#each topic.items as item (item.num)}
									{@render rowItem(item, `topic-${topic.id}-${item.num}`)}
								{/each}
							</tbody>
						</table>
					</div>
				</section>
			{/each}
		</div>
	{:else}
		<div class="card" style="overflow-x:auto">
			<table>
				<thead>
					<tr>
						<th class="col-req">Requisites</th>
						<th class="col-what">What it is for</th>
						<th class="col-src">Source</th>
					</tr>
				</thead>
				<tbody>
					{#each shuffledItems as entry (entry.item.num)}
						{@render rowItem(entry.item, `shuf-${shuffleSeed}-${entry.item.num}`, entry.topicShort)}
					{/each}
				</tbody>
			</table>
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
	.source-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
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
	.empty-box {
		padding: 20px;
		text-align: center;
		font-size: 14px;
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
		padding: 10px 12px;
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
	.col-req {
		width: 30%;
		min-width: 190px;
	}
	.col-what {
		width: 52%;
		min-width: 240px;
	}
	.col-src {
		width: 18%;
		min-width: 120px;
	}
	.req-cell {
		font-family: var(--legal);
		font-weight: 600;
	}
	.req-toggle {
		display: block;
		width: 100%;
		padding: 0;
		border: 0;
		background: none;
		font: inherit;
		color: inherit;
		text-align: left;
		cursor: pointer;
		transition: filter 0.15s;
	}
	.req-toggle.blurred {
		display: inline-block;
		width: 12ch;
		overflow: hidden;
		white-space: nowrap;
		font-family: var(--legal);
		font-weight: 600;
		filter: blur(5px);
		user-select: none;
	}
	.req-single {
		line-height: 1.45;
	}
	.req-list {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 4px;
		line-height: 1.45;
	}
	.req-li {
		display: flex;
		align-items: baseline;
		gap: 6px;
	}
	.req-idx {
		flex-shrink: 0;
		font-variant-numeric: tabular-nums;
		color: var(--text-2);
		font-weight: 700;
	}
	.q-wrap {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		line-height: 1.45;
	}
	.q-num {
		flex-shrink: 0;
		font-size: 11.5px;
		font-weight: 700;
		color: var(--text-2);
		padding: 1px 6px;
		margin-top: 2px;
		border-radius: 999px;
		border: 1px solid var(--border);
		font-variant-numeric: tabular-nums;
	}
	.q-body {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.topic-pill {
		align-self: flex-start;
		font-size: 11px;
		font-weight: 600;
		color: var(--text-2);
		padding: 1px 7px;
		border-radius: 999px;
		background: color-mix(in srgb, var(--border) 35%, transparent);
	}
	.src {
		font-size: 13px;
		line-height: 1.4;
	}
	.note {
		margin: 4px 0 0;
		font-size: 12px;
		line-height: 1.45;
		color: var(--text-2);
	}
	.note-label {
		font-weight: 700;
	}
</style>
