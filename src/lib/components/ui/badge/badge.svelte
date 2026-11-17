<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const badgeVariants = tv({
		base: "min-h-6 gap-1 rounded-full border-2 border-transparent px-2.5 py-0.5 text-xs font-extrabold tracking-wide transition-all has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&>svg]:size-3.5! group/badge inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none",
		variants: {
			variant: {
				default: "bg-[#58CC02] text-white border-[#46A302] [a]:hover:bg-[#46A302]",
				secondary: "bg-slate-100 dark:bg-[#223842] text-secondary-foreground border-slate-200 dark:border-[#2B434E] [a]:hover:bg-slate-200",
				destructive: "bg-[#FFDFE0] dark:bg-[#FF4B4B]/20 border-[#FF4B4B]/40 text-[#EA2B2B] dark:text-[#FF7878]",
				outline: "border-slate-200 dark:border-[#2B434E] bg-white dark:bg-[#1A2C34] text-foreground [a]:hover:bg-muted",
				ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
				link: "text-[#1CB0F6] underline-offset-4 hover:underline",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
</script>

<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		href,
		class: className,
		variant = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		variant?: BadgeVariant;
	} = $props();
</script>

<svelte:element
	this={href ? "a" : "span"}
	bind:this={ref}
	data-slot="badge"
	{href}
	class={cn(badgeVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</svelte:element>
