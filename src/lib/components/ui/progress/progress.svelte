<script lang="ts">
	import { Progress as ProgressPrimitive } from "bits-ui";
	import { cn, type WithoutChildrenOrChild } from "$lib/utils";

	let {
		ref = $bindable(null),
		class: className,
		max = 100,
		value,
		...restProps
	}: WithoutChildrenOrChild<ProgressPrimitive.RootProps> = $props();
</script>

<ProgressPrimitive.Root
	bind:ref
	data-slot="progress"
	class={cn("bg-slate-200 dark:bg-[#2B434E] h-3.5 rounded-full relative flex w-full items-center overflow-hidden", className)}
	{value}
	{max}
	{...restProps}
>
	<div
		data-slot="progress-indicator"
		class="relative bg-[#58CC02] size-full flex-1 rounded-full transition-all duration-500 ease-out after:pointer-events-none after:absolute after:inset-x-2 after:top-[2px] after:h-[25%] after:rounded-full after:bg-white/30"
		style="transform: translateX(-{100 - (100 * (value ?? 0)) / (max ?? 1)}%)"
	></div>
</ProgressPrimitive.Root>
