<script lang="ts">
	import { Bookmark, BookOpen, ChevronDown, Flame, Home, Menu, Moon, Search, SlidersHorizontal, Sun, Volume2, VolumeX, X } from '@lucide/svelte';
	import { Popover, Dialog as DialogPrimitive } from 'bits-ui';
	import { page } from '$app/state';
	import { modules } from '$lib/data/modules';
	import { answerKey } from '$lib/answerkey.svelte';
	import { playMcqSound } from '$lib/sound';
	import { prefs } from '$lib/stores/prefs.svelte';
	import { theme } from '$lib/stores/theme.svelte';
	import { ui } from '$lib/stores/ui.svelte';
	import { cn } from '$lib/utils';

	const path = $derived(page.url.pathname);
	const inSubject = $derived(path.startsWith('/module/'));
	const currentSubject = $derived(inSubject ? page.params.slug : undefined);
	const visibleModules = modules;

	let subjectsOpen = $state(false);
	let menuOpen = $state(false);

	const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

	function toggleTheme() {
		theme.set(theme.resolved === 'dark' ? 'light' : 'dark');
	}

	const navLink = (active: boolean) =>
		cn(
			'inline-flex h-10 items-center gap-2 rounded-2xl border-2 px-3.5 text-xs font-extrabold tracking-wide uppercase transition-all duration-150',
			active
				? 'border-[#1CB0F6] border-b-4 bg-[#DDF4FF] text-[#1899D6] dark:border-[#1CB0F6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]'
				: 'border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:border-[#2B434E] dark:hover:bg-[#223842] dark:hover:text-white'
		);
</script>

<header class="no-print sticky top-0 z-40 h-(--header-h) border-b-2 border-slate-200 bg-white/95 backdrop-blur-md dark:border-[#2B434E] dark:bg-[#131F24]/95">
	<div class="mx-auto flex h-full max-w-[82rem] items-center gap-2.5 px-3 sm:gap-4 sm:px-6">
		<a href="/" aria-label="Juris Lord, home" class="group flex shrink-0 items-center gap-2.5 rounded-2xl py-1 text-foreground no-underline">
			<span class="grid size-10 place-items-center rounded-2xl border-2 border-[#1899D6] border-b-4 bg-[#1CB0F6] shadow-xs transition-transform group-hover:animate-duo-wiggle">
				<!-- Cute winking Judge Owl mascot wearing a tiny Bee Gold crown -->
				<svg viewBox="0 0 36 36" class="size-7" fill="none" aria-hidden="true">
					<!-- Tiny Gold Crown -->
					<path d="M11 9.5L13 4.5L18 7.5L23 4.5L25 9.5H11Z" fill="#FFC800" stroke="#946200" stroke-width="1.5" stroke-linejoin="round" />
					<!-- Owl Head / Body -->
					<rect x="7" y="9.5" width="22" height="21" rx="9.5" fill="#1CB0F6" stroke="#FFFFFF" stroke-width="1.8" />
					<!-- Fluffy Judge Wig Side Curls -->
					<circle cx="7.5" cy="18" r="3" fill="#FFFFFF" />
					<circle cx="28.5" cy="18" r="3" fill="#FFFFFF" />
					<!-- Big Eyes -->
					<circle cx="13.5" cy="18" r="4.2" fill="#FFFFFF" />
					<circle cx="22.5" cy="18" r="4.2" fill="#FFFFFF" />
					<!-- Left eye open, Right eye cheerful wink -->
					<circle cx="14" cy="18" r="2" fill="#131F24" />
					<circle cx="14.7" cy="17.2" r="0.7" fill="#FFFFFF" />
					<path d="M20.2 18.2C20.9 16.8 24.1 16.8 24.8 18.2" stroke="#131F24" stroke-width="2" stroke-linecap="round" />
					<!-- Cute Gold Beak -->
					<path d="M16 21.5L18 24.5L20 21.5H16Z" fill="#FFC800" stroke="#946200" stroke-width="1.2" stroke-linejoin="round" />
				</svg>
			</span>
			<span class="font-brand text-lg font-extrabold tracking-wide text-slate-900 uppercase max-md:hidden dark:text-white">
				Juris <span class="text-[#58CC02]">Lord</span>
			</span>
		</a>

		<nav aria-label="Primary" class="flex items-center gap-1.5 max-md:hidden">
			<a href="/" class={navLink(path === '/')} aria-current={path === '/' ? 'page' : undefined}>
				<Home class="size-4" strokeWidth={2.5} /> Home
			</a>
			<Popover.Root bind:open={subjectsOpen}>
				<Popover.Trigger class={navLink(inSubject)} aria-current={inSubject ? 'page' : undefined}>
					<BookOpen class="size-4" strokeWidth={2.5} /> Subjects <ChevronDown class="size-3.5" strokeWidth={2.5} />
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content sideOffset={8} align="start" class="z-50 w-80 rounded-3xl border-2 border-b-4 border-slate-200 bg-popover p-2 shadow-xl outline-none dark:border-[#2B434E]">
						<ul class="flex flex-col gap-1">
							{#each visibleModules as m (m.id)}
								<li>
									<a
										href="/module/{m.id}"
										onclick={() => (subjectsOpen = false)}
										aria-current={currentSubject === m.id ? 'page' : undefined}
										class={cn(
											'flex flex-col gap-0.5 rounded-2xl border-2 border-transparent px-3.5 py-2.5 no-underline transition-colors hover:bg-slate-100 dark:hover:bg-[#223842]',
											currentSubject === m.id && 'border-[#1CB0F6]/50 bg-[#DDF4FF] dark:bg-[#1CB0F6]/15'
										)}
									>
										<span class="text-sm font-extrabold text-foreground">{m.title}</span>
										<span class="text-xs font-bold tracking-wide text-muted-foreground uppercase">{m.subjectCategory.replace(' — Supplement', '')}</span>
									</a>
								</li>
							{/each}
						</ul>
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
			<a href="/saved" class={navLink(path.startsWith('/saved'))} aria-current={path.startsWith('/saved') ? 'page' : undefined}>
				<Bookmark class="size-4" strokeWidth={2.5} /> Saved
			</a>
			<a href="/exam-day" class={navLink(path.startsWith('/exam-day'))} aria-current={path.startsWith('/exam-day') ? 'page' : undefined}>
				<Flame class="size-4 text-[#FF9600]" strokeWidth={2.5} /> Exam day
			</a>
		</nav>

		<button
			type="button"
			onclick={() => ui.openSearch()}
			class="mx-auto flex h-10 min-w-0 flex-1 items-center gap-2.5 rounded-2xl border-2 border-b-4 border-slate-200 bg-slate-50 px-3.5 text-sm font-bold text-slate-500 transition-all hover:border-[#1CB0F6]/60 hover:bg-white active:border-b-2 active:translate-y-0.5 max-sm:hidden md:max-w-[30rem] dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-slate-300 dark:hover:border-[#1CB0F6]/60"
			aria-label="Search all subjects"
			aria-keyshortcuts="Control+K Meta+K /"
		>
			<Search class="size-4 shrink-0 text-[#1CB0F6]" strokeWidth={2.5} />
			<span class="flex-1 truncate text-left">Search all subjects</span>
			<kbd class="rounded-lg border-2 border-b-3 border-slate-200 bg-white px-2 py-0.5 text-[0.7rem] font-extrabold tracking-wide text-slate-500 uppercase max-lg:hidden dark:border-[#2B434E] dark:bg-[#131F24] dark:text-slate-300">{isMac ? '⌘' : 'Ctrl'} K</kbd>
		</button>

		<div class="ml-auto flex shrink-0 items-center gap-1.5 sm:ml-0">
			{#if answerKey.on}
				<button
					type="button"
					onclick={() => answerKey.toggle()}
					title="Model answers are showing everywhere. Click to turn off."
					class="inline-flex h-9 cursor-pointer items-center gap-1 rounded-full border-2 border-[#E5B400] border-b-3 bg-[#FFF5CC] px-3 text-xs font-extrabold text-[#946200] whitespace-nowrap dark:border-[#FFC800]/50 dark:bg-[#FFC800]/20 dark:text-[#FFD633]"
				>
					🔑 Answer key <span class="font-bold opacity-80">· Turn off</span>
				</button>
			{/if}
			<button type="button" onclick={() => ui.openSearch()} aria-label="Search" class="grid size-10 place-items-center rounded-2xl border-2 border-transparent text-slate-600 hover:bg-slate-100 hover:text-foreground sm:hidden dark:text-slate-300 dark:hover:bg-[#223842]">
				<Search class="size-5" strokeWidth={2.5} />
			</button>
			<button
				type="button"
				onclick={() => {
					const next = !prefs.value.soundEnabled;
					prefs.set('soundEnabled', next);
					if (next) playMcqSound(true, true);
				}}
				aria-label={prefs.value.soundEnabled ? 'Mute sound effects' : 'Turn on sound effects'}
				aria-pressed={prefs.value.soundEnabled}
				title={prefs.value.soundEnabled ? `Sound effects on (${prefs.value.soundVolume}%) — click to mute` : 'Sound effects muted — click to turn on'}
				class={cn(
					'grid size-10 place-items-center rounded-2xl border-2 border-b-4 border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-50 active:border-b-2 active:translate-y-0.5 dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-slate-200 dark:hover:bg-[#223842]',
					!prefs.value.soundEnabled && 'text-slate-400 dark:text-slate-500'
				)}
			>
				{#if prefs.value.soundEnabled}<Volume2 class="size-[1.15rem] text-[#58CC02]" strokeWidth={2.5} />{:else}<VolumeX class="size-[1.15rem]" strokeWidth={2.5} />{/if}
			</button>
			<button
				type="button"
				onclick={toggleTheme}
				aria-label={theme.resolved === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
				title={theme.resolved === 'dark' ? 'Light theme' : 'Dark theme'}
				class="grid size-10 place-items-center rounded-2xl border-2 border-b-4 border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-50 active:border-b-2 active:translate-y-0.5 dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-[#FFC800] dark:hover:bg-[#223842]"
			>
				{#if theme.resolved === 'dark'}<Sun class="size-[1.15rem]" strokeWidth={2.5} />{:else}<Moon class="size-[1.15rem]" strokeWidth={2.5} />{/if}
			</button>
			<a
				href="/settings"
				aria-label="Settings"
				title="Settings"
				aria-current={path.startsWith('/settings') ? 'page' : undefined}
				class={cn(
					'grid size-10 place-items-center rounded-2xl border-2 border-b-4 border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-50 active:border-b-2 active:translate-y-0.5 max-md:hidden dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-slate-200 dark:hover:bg-[#223842]',
					path.startsWith('/settings') && 'border-[#1CB0F6] bg-[#DDF4FF] text-[#1899D6] dark:border-[#1CB0F6] dark:bg-[#1CB0F6]/20 dark:text-[#66D1FF]'
				)}
			>
				<SlidersHorizontal class="size-[1.15rem]" strokeWidth={2.5} />
			</a>
			<button type="button" onclick={() => (menuOpen = true)} aria-label="Menu" class="grid size-10 place-items-center rounded-2xl border-2 border-b-4 border-slate-200 bg-white text-slate-700 transition-all hover:bg-slate-50 active:border-b-2 active:translate-y-0.5 md:hidden dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-slate-200">
				<Menu class="size-5" strokeWidth={2.5} />
			</button>
		</div>
	</div>
</header>

<!-- Phones: the primary navigation as a sheet. -->
<DialogPrimitive.Root bind:open={menuOpen}>
	<DialogPrimitive.Portal>
		<DialogPrimitive.Overlay class="fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px]" />
		<DialogPrimitive.Content class="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,88vw)] flex-col gap-1.5 overflow-y-auto border-l-2 border-slate-200 bg-background p-4 shadow-xl outline-none dark:border-[#2B434E]">
			<div class="mb-2 flex items-center justify-between">
				<DialogPrimitive.Title class="px-2 text-sm font-extrabold tracking-wide uppercase">Menu</DialogPrimitive.Title>
				<DialogPrimitive.Close class="grid size-10 place-items-center rounded-2xl border-2 border-b-4 border-slate-200 bg-card text-muted-foreground hover:bg-muted dark:border-[#2B434E]" aria-label="Close menu"><X class="size-5" /></DialogPrimitive.Close>
			</div>
			<a href="/" onclick={() => (menuOpen = false)} class={cn(navLink(path === '/'), 'h-11')}><Home class="size-4" /> Home</a>
			<a href="/saved" onclick={() => (menuOpen = false)} class={cn(navLink(path.startsWith('/saved')), 'h-11')}><Bookmark class="size-4" /> Saved</a>
			<a href="/exam-day" onclick={() => (menuOpen = false)} class={cn(navLink(path.startsWith('/exam-day')), 'h-11')}><Flame class="size-4 text-[#FF9600]" /> Exam day</a>
			<a href="/settings" onclick={() => (menuOpen = false)} class={cn(navLink(path.startsWith('/settings')), 'h-11')}><SlidersHorizontal class="size-4" /> Settings</a>
			<p class="label-caps mt-4 px-3 pb-1">Subjects</p>
			{#each visibleModules as m (m.id)}
				<a href="/module/{m.id}" onclick={() => (menuOpen = false)} class={cn(navLink(currentSubject === m.id), 'h-11 justify-start normal-case')}>{m.title}</a>
			{/each}
		</DialogPrimitive.Content>
	</DialogPrimitive.Portal>
</DialogPrimitive.Root>
