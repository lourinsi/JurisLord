<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import AppHeader from '$lib/components/shell/AppHeader.svelte';
	import SearchPalette from '$lib/components/shell/SearchPalette.svelte';
	import Toaster from '$lib/components/shell/Toaster.svelte';
	import Disclaimer from '$lib/components/Disclaimer.svelte';
	import Mascot from '$lib/components/Mascot.svelte';
	import { answerKey } from '$lib/answerkey.svelte';
	import { userStorage } from '$lib/stores/storage.svelte';
	import { textSize } from '$lib/stores/textSize.svelte';
	import { theme } from '$lib/stores/theme.svelte';
	import { prefs, LINE_HEIGHT, LINE_WIDTH_REM } from '$lib/stores/prefs.svelte';
	import { isStudyPath } from '$lib/subtabs';
	import { ui } from '$lib/stores/ui.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
	let showDisclaimer = $state(false);

	// Touch the stores once so persistence, theme and text-size listeners are live app-wide.
	$effect(() => {
		void userStorage.isLoaded;
		void theme.resolved;
		void textSize.size;
	});

	// Reading preferences become CSS variables the reader and study guides use.
	$effect(() => {
		const root = document.documentElement.style;
		root.setProperty('--measure', `${LINE_WIDTH_REM[prefs.value.lineWidth]}rem`);
		root.setProperty('--leading', String(LINE_HEIGHT[prefs.value.lineSpacing]));
	});

	// ---- Atty. Hoot easter egg & answer key ----
	const quips = [
		'Built by Sero & amended by lourinsi, fueled by coffee and reasonable doubt.',
		'Made for 1L quests. Objection overruled.',
		'Res ipsa loquitur: the doctrines speak for themselves.',
		'Handcrafted for finals prep. No bar exam was harmed.',
		'Bail was posted, the code was pushed.',
		'Habeas corpus, but for study features.',
		'Coded between cases and cramming.',
		'Your honor, I rest my commit.'
	];
	const quip = quips[Math.floor(Math.random() * quips.length)];
	const side = Math.random() < 0.5 ? 'left' : 'right';
	let eggOpen = $state(false);

	let hootToast = $state('');
	let toastTimer: ReturnType<typeof setTimeout> | undefined;
	function flipAnswerKey() {
		answerKey.toggle();
		hootToast = answerKey.on ? 'Hoot! Answer key unlocked. Model answers are now showing.' : 'Answer key off. Back to honest practice.';
		clearTimeout(toastTimer);
		toastTimer = setTimeout(() => (hootToast = ''), 3500);
	}
	let taps: number[] = [];
	let owlBump = $state(false);
	const replies = ['Hoot?', 'Hoot hoot?', 'Two more…', 'One more!'];
	let owlSays = $state('');
	let saysTimer: ReturnType<typeof setTimeout> | undefined;
	function tapOwl() {
		const t = Date.now();
		taps = [...taps.filter((x) => t - x < 2500), t];
		owlBump = false;
		requestAnimationFrame(() => (owlBump = true));
		clearTimeout(saysTimer);
		if (taps.length >= 5) {
			taps = [];
			owlSays = '';
			flipAnswerKey();
			return;
		}
		owlSays = replies[taps.length - 1];
		saysTimer = setTimeout(() => (owlSays = ''), 2500);
	}
	const riddle = $derived(
		answerKey.on
			? 'Atty. Hoot is showing you the answers. Poke him five times to make him stop.'
			: 'Atty. Hoot knows every model answer. Poke him five times and he might share.'
	);

	let typed = '';

	/** ⌘K / Ctrl+K anywhere, or "/" when not typing, opens search; typing "hoot" toggles answer key. */
	function onKey(e: KeyboardEvent) {
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			if (ui.searchOpen) ui.searchOpen = false;
			else ui.openSearch('', page.params.slug ? 'subject' : '');
			return;
		}
		const t = e.target as HTMLElement | null;
		const inInput = t && (t.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.tagName) || !!t.closest('input, textarea, select, [contenteditable]'));
		if (!inInput && !e.metaKey && !e.ctrlKey && !e.altKey && e.key.length === 1) {
			typed = (typed + e.key.toLowerCase()).slice(-6);
			if (typed.endsWith('hoot')) {
				typed = '';
				flipAnswerKey();
				return;
			}
		}
		if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey || ui.searchOpen || inInput) return;
		if (document.querySelector('[role="dialog"]')) return;
		e.preventDefault();
		ui.openSearch('', page.params.part ? 'part' : page.params.slug ? 'subject' : '');
	}

	const study = $derived(isStudyPath(page.url.pathname));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Juris Lord — Philippine Law Study Guide</title>
</svelte:head>

<svelte:window onkeydown={onKey} />

<a href="#main" class="sr-only z-50 rounded-md bg-primary px-3 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2">Skip to content</a>
<AppHeader />
<main id="main" class="@container/main w-full min-w-0">
	{@render children()}
</main>
{#if !study}
	<footer class="no-print mx-auto max-w-[75rem] space-y-1.5 px-4 pt-6 pb-10 text-center text-xs text-muted-foreground sm:px-8">
		<p>
			Study aid only — not a substitute for the full codal text. All review material and model answers are AI-generated and may contain errors.
			<button type="button" onclick={() => (showDisclaimer = true)} class="cursor-pointer font-bold text-[#1CB0F6] underline underline-offset-2 hover:text-foreground">
				Read the disclaimer
			</button>
			·
			<a href="/legacy/index.html" class="underline underline-offset-2 hover:text-foreground">Previous version</a>
		</p>
		<p>amended by lourinsi · original code from serocode</p>
	</footer>
{/if}
<Disclaimer bind:open={showDisclaimer} />
<SearchPalette />
<Toaster />

<aside class="egg no-print {side}" class:open={eggOpen} aria-label="About the developer">
	<button
		type="button"
		class="egg-tab"
		aria-expanded={eggOpen}
		aria-label="Psst, a message from the developer"
		onclick={() => (eggOpen = !eggOpen)}
	>
		✦
	</button>
	<div class="egg-card">
		<button type="button" class="owl-btn" class:bump={owlBump} onclick={tapOwl} onanimationend={() => (owlBump = false)} aria-label="Atty. Hoot">
			<Mascot size={56} />
		</button>
		{#if owlSays}<span class="says" role="status">{owlSays}</span>{/if}
		<div>
			<p>{quip}</p>
			<p class="riddle">{riddle}</p>
			<button type="button" class="cursor-pointer border-0 bg-transparent p-0 text-xs font-extrabold text-[#1CB0F6] underline" onclick={() => { eggOpen = false; showDisclaimer = true; }}>
				Hoot hoot! Before you start
			</button>
		</div>
	</div>
</aside>

{#if hootToast}
	<div class="fixed bottom-5 left-1/2 z-50 max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-4 py-2.5 text-sm font-extrabold text-white shadow-xl" role="status">
		{hootToast}
	</div>
{/if}

{#if userStorage.persistError}
	<p role="alert" class="no-print fixed inset-x-0 bottom-0 z-50 bg-destructive px-4 py-2 text-center text-sm text-white">
		This browser is blocking saves (private mode or full storage). Progress will be lost when you close the tab — export a backup from Settings.
	</p>
{/if}

<style>
	.owl-btn {
		padding: 0;
		border: 0;
		background: none;
		cursor: pointer;
		flex: none;
		border-radius: 50%;
	}
	.owl-btn.bump {
		animation: bump 0.25s ease;
	}
	@keyframes bump {
		50% {
			transform: scale(1.12) rotate(-6deg);
		}
	}
	.egg {
		position: fixed;
		top: 62%;
		z-index: 35;
		display: flex;
		align-items: center;
		transition: transform 0.25s ease;
	}
	.egg.left {
		left: 0;
		flex-direction: row-reverse;
		transform: translateX(calc(-100% + 22px));
	}
	.egg.right {
		right: 0;
		flex-direction: row;
		transform: translateX(calc(100% - 22px));
	}
	.egg:hover,
	.egg:focus-within,
	.egg.open {
		transform: none;
	}
	.egg-tab {
		width: 22px;
		height: 44px;
		padding: 0;
		border: 2px solid var(--border);
		background: var(--card);
		color: #1cb0f6;
		font-size: 12px;
		font-weight: 800;
		cursor: pointer;
		opacity: 0.55;
		transition: opacity 0.2s;
	}
	.left .egg-tab {
		border-left: 0;
		border-radius: 0 10px 10px 0;
	}
	.right .egg-tab {
		border-right: 0;
		border-radius: 10px 0 0 10px;
	}
	.egg:hover .egg-tab,
	.egg-tab:focus-visible,
	.egg.open .egg-tab {
		opacity: 1;
	}
	.egg-card {
		position: relative;
		display: flex;
		gap: 10px;
		align-items: flex-start;
		width: 280px;
		padding: 12px 14px;
		background: var(--card);
		border: 2px solid var(--border);
		border-bottom-width: 4px;
		font-size: 13px;
		line-height: 1.45;
		color: var(--foreground);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	}
	.left .egg-card {
		border-left: 0;
		border-radius: 0 16px 16px 0;
	}
	.right .egg-card {
		border-right: 0;
		border-radius: 16px 0 0 16px;
	}
	.egg-card p {
		margin: 0 0 6px;
	}
	.says {
		position: absolute;
		top: -14px;
		left: 34px;
		padding: 3px 9px;
		border-radius: 999px 999px 999px 4px;
		background: #1cb0f6;
		color: #fff;
		font-size: 12px;
		font-weight: 800;
		white-space: nowrap;
		pointer-events: none;
	}
	.riddle {
		font-size: 12px;
		font-style: italic;
		color: var(--muted-foreground);
	}
</style>
