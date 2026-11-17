<script lang="ts">
	import { pct } from '$lib/utils';
	import { cn } from '$lib/utils';

	/** Reading progress: studied (solid), visited only (pale), not started (empty). Visited never counts as studied. */
	let { studied, visited = 0, total, label, class: className = '' }: { studied: number; visited?: number; total: number; label: string; class?: string } = $props();
</script>

<div
	role="img"
	aria-label="{label}: {studied} of {total} studied{visited ? `, ${visited} visited` : ''}"
	class={cn('flex h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-[#2B434E]', className)}
>
	<span class="relative bg-[#58CC02] transition-all duration-500 ease-out after:pointer-events-none after:absolute after:inset-x-1 after:top-[2px] after:h-[28%] after:rounded-full after:bg-white/30" style="width:{pct(studied, total)}%"></span>
	<span class="bg-[#58CC02]/30 transition-all duration-500 ease-out" style="width:{pct(visited, total)}%"></span>
</div>
