<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";
	import { cn, type WithElementRef } from "$lib/utils";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";

	export const buttonVariants = tv({
		base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-2xl border-2 border-transparent bg-clip-padding text-sm font-extrabold tracking-wide focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-all duration-150 outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
		variants: {
			variant: {
				default: "bg-[#58CC02] text-white border-[#46A302] border-b-4 uppercase hover:bg-[#4EB802] active:not-aria-[haspopup]:border-b-2 active:not-aria-[haspopup]:translate-y-[2px]",
				outline: "border-slate-200 dark:border-[#2B434E] border-b-4 bg-white dark:bg-[#1A2C34] text-foreground hover:bg-slate-50 dark:hover:bg-[#223842] active:not-aria-[haspopup]:border-b-2 active:not-aria-[haspopup]:translate-y-[2px]",
				secondary: "bg-[#1CB0F6] text-white border-[#1899D6] border-b-4 uppercase hover:bg-[#18A2E4] active:not-aria-[haspopup]:border-b-2 active:not-aria-[haspopup]:translate-y-[2px]",
				ghost: "border-transparent font-bold hover:bg-slate-100 hover:text-foreground dark:hover:bg-[#223842] aria-expanded:bg-slate-100 dark:aria-expanded:bg-[#223842] aria-expanded:text-foreground active:not-aria-[haspopup]:translate-y-px",
				destructive: "bg-[#FF4B4B] hover:bg-[#EA2B2B] border-[#EA2B2B] border-b-4 text-white uppercase focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 active:not-aria-[haspopup]:border-b-2 active:not-aria-[haspopup]:translate-y-[2px]",
				link: "border-transparent font-bold text-[#1CB0F6] underline-offset-4 hover:underline",
			},
			size: {
				// Design system: 40px default, 32px small, 28px extra-small, 44px large (touch); rem, so they scale with text size.
				default: "h-10 gap-2 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
				xs: "h-7 gap-1 rounded-xl px-2.5 text-xs in-data-[slot=button-group]:rounded-xl has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
				sm: "h-9 gap-1.5 rounded-xl px-3.5 text-xs in-data-[slot=button-group]:rounded-xl has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-3.5",
				lg: "h-12 gap-2.5 px-6 text-[0.9375rem] has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
				icon: "size-10 rounded-xl",
				"icon-xs": "size-7 rounded-xl in-data-[slot=button-group]:rounded-xl [&_svg:not([class*='size-'])]:size-3.5",
				"icon-sm": "size-8 rounded-xl in-data-[slot=button-group]:rounded-xl",
				"icon-lg": "size-11 rounded-2xl",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		href={disabled ? undefined : href}
		aria-disabled={disabled}
		role={disabled ? "link" : undefined}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		data-slot="button"
		class={cn(buttonVariants({ variant, size }), className)}
		{type}
		{disabled}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
