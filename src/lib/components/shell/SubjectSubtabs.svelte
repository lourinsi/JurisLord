<script lang="ts">
	import { page } from '$app/state';
	import { activeSubtabId, subtabsForSubject } from '$lib/subtabs';
	import { readHref } from '$lib/content';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { cn } from '$lib/utils';

	let { slug }: { slug: string } = $props();

	const tabs = $derived(subtabsForSubject(slug));
	const active = $derived(activeSubtabId(page.url.pathname, slug));

	function hrefFor(path: string): string {
		if (path === 'read') {
			const last = userStorage.reading.lastBySubject[slug];
			return last ? readHref(slug, last.partId, last.anchor) : `/module/${slug}/read`;
		}
		return `/module/${slug}/${path}`;
	}
</script>

<nav aria-label="Subject subtabs" class="no-print border-b-2 border-slate-200 bg-card/85 backdrop-blur dark:border-[#2B434E] dark:bg-[#1A2C34]/85">
	<div class="mx-auto flex max-w-[75rem] items-center gap-1.5 overflow-x-auto px-4 py-2.5 sm:px-6" style="scrollbar-width: none;">
		<a
			href="/module/{slug}"
			aria-current={active === 'overview' ? 'page' : undefined}
			class={cn(
				'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-xl border-2 px-3 text-xs font-extrabold tracking-wide uppercase no-underline transition-all duration-150',
				active === 'overview'
					? 'border-[#1899D6] border-b-3 bg-[#1CB0F6] text-white'
					: 'border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:border-[#2B434E] dark:hover:bg-[#223842] dark:hover:text-white'
			)}
		>
			Overview
		</a>
		{#each tabs as t (t.id)}
			{@const isCurrent = active === t.id}
			<a
				href={hrefFor(t.path)}
				aria-current={isCurrent ? 'page' : undefined}
				title={t.desc}
				class={cn(
					'inline-flex h-8 shrink-0 items-center gap-1.5 rounded-xl border-2 px-3 text-xs font-extrabold tracking-wide uppercase no-underline transition-all duration-150',
					isCurrent
						? t.star
							? 'border-[#E5B400] border-b-3 bg-[#FFC800] text-slate-900'
							: 'border-[#1899D6] border-b-3 bg-[#1CB0F6] text-white'
						: t.star
							? 'border-[#E5B400]/40 bg-[#FFF5CC]/70 text-[#946200] hover:bg-[#FFF5CC] dark:border-[#FFC800]/30 dark:bg-[#FFC800]/15 dark:text-[#FFD633]'
							: 'border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:border-[#2B434E] dark:hover:bg-[#223842] dark:hover:text-white'
				)}
			>
				{t.label}
			</a>
		{/each}
	</div>
</nav>
