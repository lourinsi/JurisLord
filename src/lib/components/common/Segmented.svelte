<script lang="ts" generics="T extends string">
	import { cn } from '$lib/utils';

	let {
		options,
		value,
		onchange,
		label,
		size = 'default',
		disabled = false,
		class: className = ''
	}: {
		options: { value: T; label: string; count?: number }[];
		value: T;
		onchange: (v: T) => void;
		label: string;
		size?: 'default' | 'sm';
		disabled?: boolean;
		class?: string;
	} = $props();
</script>

<div role="group" aria-label={label} class={cn('inline-flex max-w-full gap-1 rounded-2xl border-2 border-slate-200 dark:border-[#2B434E] bg-slate-100 dark:bg-[#131F24] p-1', className)}>
	{#each options as o (o.value)}
		<button
			type="button"
			aria-pressed={value === o.value}
			{disabled}
			onclick={() => onchange(o.value)}
			class={cn(
				'inline-flex min-w-0 items-center justify-center gap-1.5 rounded-xl border-2 border-transparent px-3.5 font-extrabold tracking-wide whitespace-nowrap transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50',
				size === 'sm' ? 'h-8 text-xs' : 'h-9 text-xs sm:text-sm',
				value === o.value
					? 'border-[#1899D6] border-b-4 bg-[#1CB0F6] text-white shadow-xs active:border-b-2 active:translate-y-0.5'
					: 'text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-[#1A2C34] hover:text-foreground'
			)}
		>
			{o.label}
			{#if o.count !== undefined}
				<span class={cn('rounded-full px-1.5 py-px text-[0.7rem] font-extrabold tabular-nums', value === o.value ? 'bg-white/25 text-white' : 'bg-slate-200 dark:bg-[#2B434E] text-slate-600 dark:text-slate-300')}>{o.count}</span>
			{/if}
		</button>
	{/each}
</div>
