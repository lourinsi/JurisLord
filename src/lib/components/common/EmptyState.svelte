<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	let {
		icon: Icon,
		title,
		children,
		actions,
		class: className = ''
	}: { icon?: Component<{ class?: string }>; title: string; children?: Snippet; actions?: Snippet; class?: string } = $props();
</script>

<div role="status" class={cn('flex flex-col items-center gap-3 rounded-3xl border-2 border-dashed border-slate-300 bg-card/60 px-6 py-12 text-center dark:border-[#2B434E]', className)}>
	{#if Icon}<span class="grid size-14 place-items-center rounded-2xl border-2 border-b-4 border-slate-200 bg-white text-[#1CB0F6] dark:border-[#2B434E] dark:bg-[#1A2C34]"><Icon class="size-7" /></span>{/if}
	<p class="text-lg font-extrabold text-foreground">{title}</p>
	{#if children}<div class="max-w-md text-sm leading-relaxed font-semibold text-muted-foreground">{@render children()}</div>{/if}
	{#if actions}<div class="mt-2 flex flex-wrap justify-center gap-2">{@render actions()}</div>{/if}
</div>
