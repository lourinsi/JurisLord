<script lang="ts">
	import { ALAC_FIELDS } from '$lib/alac';
	import { cn } from '$lib/utils';

	let { compact = false, bare = false }: { compact?: boolean; bare?: boolean } = $props();

	const blurbs = [
		'Answer the question first — a direct "Yes" or "No", never "it depends".',
		'Cite the codal provision, statute, or doctrine that decides the issue.',
		'Weave the facts through each element of the rule, one element at a time.',
		'Close with the disposition: the result the examiner is waiting for.'
	];
</script>

<section aria-label="The ALAC method" class={cn(!bare && 'rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-5 sm:p-6 dark:border-[#2B434E]')}>
	{#if !bare}
		<div class="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
			<h2 class="font-heading text-lg font-extrabold">The ALAC Method</h2>
			<p class="text-sm font-semibold text-muted-foreground">The four-part structure every bar essay answer should follow.</p>
		</div>
	{/if}
	<ol class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
		{#each ALAC_FIELDS as f, i (f.key)}
			<li class="relative flex gap-3 rounded-2xl border-2 border-slate-200 bg-slate-50/80 p-3 dark:border-[#2B434E] dark:bg-[#131F24]">
				<span class={cn('grid size-9 shrink-0 place-items-center rounded-xl border-2 border-b-3 font-sans text-lg font-extrabold', f.badge)} aria-hidden="true">{f.letter}</span>
				<div class="min-w-0">
					<p class="text-sm font-extrabold">
						<span class="sr-only">{f.letter} — </span>{f.name}
					</p>
					{#if !compact}
						<p class="mt-0.5 text-[0.8rem] leading-snug font-semibold text-muted-foreground">{blurbs[i]}</p>
					{/if}
				</div>
			</li>
		{/each}
	</ol>
</section>
