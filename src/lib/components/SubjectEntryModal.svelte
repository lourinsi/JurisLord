<script lang="ts">
	import { BookOpen, SlidersHorizontal, Sparkles, X } from '@lucide/svelte';
	import { goto } from '$app/navigation';
	import Mascot from './Mascot.svelte';
	import { prefs } from '$lib/stores/prefs.svelte';
	import { hasCustomExamSettings, loadSavedExamSettings } from '$lib/unified-exam';
	import { ui } from '$lib/stores/ui.svelte';
	import type { Subject } from '$lib/types';

	let {
		subject,
		open = $bindable(false)
	}: {
		subject: Subject;
		open?: boolean;
	} = $props();

	let dialog: HTMLDialogElement | undefined = $state();

	const savedSettings = $derived.by(() => {
		void open;
		return loadSavedExamSettings(subject.id);
	});
	const isCustom = $derived.by(() => {
		void open;
		return hasCustomExamSettings(subject.id);
	});

	const presetSummary = $derived.by(() => {
		if (!savedSettings || !isCustom) return '★ FINALS';
		const scopeLabel =
			savedSettings.scopePreset === 'finals'
				? '★ FINALS'
				: savedSettings.scopePreset === 'missed'
					? 'Missed / Review'
					: savedSettings.scopePreset === 'new'
						? 'Unanswered'
						: 'All Topics';
		const modeLabel = savedSettings.mode === 'practice' ? 'Practice' : 'Exam';
		return `${scopeLabel} · ${modeLabel}`;
	});

	function justStudy() {
		open = false;
	}

	function takeMockExam() {
		open = false;
		goto(`/module/${subject.id}/exam?autostart=1`);
	}

	function modifyMockExam() {
		open = false;
		goto(`/module/${subject.id}/exam?setup=1`);
	}

	$effect(() => {
		if (!dialog) return;
		const shouldShow = open && !ui.disclaimerOpen;
		if (shouldShow && !dialog.open) dialog.showModal();
		else if (!shouldShow && dialog.open) dialog.close();
	});
</script>

<dialog
	bind:this={dialog}
	aria-labelledby="subj-modal-title"
	aria-describedby="subj-modal-body"
	oncancel={() => (open = false)}
	onclose={() => (open = false)}
	class="m-auto w-[min(30rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border-2 border-b-4 border-slate-200 bg-card p-0 text-foreground shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-[2px] dark:border-[#2B434E]"
>
	<div class="h-2.5 w-full bg-[#1CB0F6]"></div>
	<div class="flex flex-col gap-4 p-6">
		<div class="flex items-start justify-between gap-3">
			<div class="flex items-center gap-3.5">
				<Mascot size={56} />
				<div class="flex min-w-0 flex-col gap-0.5">
					<span class="text-[0.7rem] font-extrabold tracking-wide text-[#1899D6] uppercase dark:text-[#66D1FF]">
						{subject.title}
					</span>
					<h2 id="subj-modal-title" class="font-brand text-xl leading-tight font-extrabold">
						Shall we test your legal might today, my Lord?
					</h2>
				</div>
			</div>
			<button
				type="button"
				onclick={justStudy}
				aria-label="Close"
				title="Close"
				class="grid size-8 shrink-0 cursor-pointer place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
			>
				<X class="size-4" strokeWidth={2.5} />
			</button>
		</div>

		<p id="subj-modal-body" class="text-sm font-semibold text-muted-foreground">
			Ride forth into the <span class="font-extrabold text-foreground">{presetSummary}</span> trial by mock exam, or enter the chambers to study the codals and doctrines of the realm.
		</p>

		<div class="mt-1 flex items-center justify-between gap-2">
			<button
				type="button"
				onclick={justStudy}
				class="inline-flex h-11 cursor-pointer items-center justify-center gap-1.5 rounded-2xl border-2 border-[#46A302] border-b-4 bg-[#58CC02] px-4 text-xs font-extrabold tracking-wide whitespace-nowrap text-white uppercase transition-all hover:bg-[#4EB802] active:translate-y-0.5 active:border-b-2"
			>
				<BookOpen class="size-4 shrink-0" strokeWidth={2.5} /> Study Course
			</button>

			<div class="flex items-center gap-2">
				<button
					type="button"
					onclick={takeMockExam}
					class="inline-flex h-11 cursor-pointer items-center justify-center gap-1.5 rounded-2xl border-2 border-[#E5B400] border-b-4 bg-[#FFC800] px-4 text-xs font-extrabold tracking-wide whitespace-nowrap text-slate-900 uppercase transition-all hover:bg-[#F0BC00] active:translate-y-0.5 active:border-b-2"
				>
					<Sparkles class="size-3.5 shrink-0" strokeWidth={2.5} /> Take Mock Exam
				</button>
				<button
					type="button"
					onclick={modifyMockExam}
					title="Modify mock exam"
					aria-label="Modify mock exam"
					class="grid size-11 shrink-0 cursor-pointer place-items-center rounded-2xl border-2 border-slate-200 border-b-4 bg-white text-slate-700 transition-all hover:bg-slate-50 active:translate-y-0.5 active:border-b-2 dark:border-[#2B434E] dark:bg-[#1A2C34] dark:text-slate-200 dark:hover:bg-[#223842]"
				>
					<SlidersHorizontal class="size-4" strokeWidth={2.5} />
				</button>
			</div>
		</div>

		<label class="flex w-fit cursor-pointer items-center gap-2 text-xs font-bold text-muted-foreground select-none hover:text-foreground">
			<input
				type="checkbox"
				checked={!prefs.value.showSubjectEntryModal}
				onchange={(e) => prefs.set('showSubjectEntryModal', !e.currentTarget.checked)}
				class="size-3.5 cursor-pointer accent-[#1CB0F6]"
			/>
			Don't show again
		</label>
	</div>
</dialog>
