<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import { getModule } from '$lib/data/modules';
	import { FLIPS } from '$lib/crimpro';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);
</script>

<svelte:head><title>One Fact Flips It — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'One fact flips it' }]} />
	<header class="flex flex-col gap-1.5">
		<p class="label-caps">If … / But if … pairs</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">One Fact Flips It</h1>
	</header>

	<div class="stack" style="gap:12px">
		<p class="muted" style="max-width:64ch">
			These pairs are what tricky MCQs are built from. The facts are almost the same, and one detail changes the answer. Learn
			the detail that does the flipping.
		</p>
		{#each FLIPS as f (f.t)}
			<section class="card flip">
				<h2>{f.t}</h2>
				<div class="pair">
					<div class="side l">
						<span class="eyebrow">If</span>
						<p>{f.a[0]}</p>
						<p class="then">→ {f.a[1]}</p>
					</div>
					<div class="side r">
						<span class="eyebrow">But if</span>
						<p>{f.b[0]}</p>
						<p class="then">→ {f.b[1]}</p>
					</div>
				</div>
				<p class="muted ref">{f.ref}</p>
			</section>
		{/each}
	</div>
</div>

<style>
	.flip {
		padding: 14px 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	h2 {
		font-size: 17px;
		font-weight: 800;
	}
	.pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
	}
	.side {
		border-radius: 10px;
		padding: 10px 12px;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	.l {
		background: var(--english-soft);
	}
	.l .eyebrow {
		color: var(--english);
	}
	.r {
		background: var(--accent-soft);
	}
	.r .eyebrow {
		color: var(--accent-text);
	}
	.then {
		margin-top: 4px;
		font-weight: 800;
	}
	.ref {
		font-size: 12.5px;
	}
	@media (max-width: 560px) {
		.pair {
			grid-template-columns: 1fr;
		}
	}
</style>
