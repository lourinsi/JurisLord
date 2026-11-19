import { prefs } from '$lib/stores/prefs.svelte';

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
	if (typeof window === 'undefined') return null;
	if (!audioCtx) {
		const Ctx =
			window.AudioContext ||
			(window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
		if (!Ctx) return null;
		audioCtx = new Ctx();
	}
	if (audioCtx.state === 'suspended') {
		void audioCtx.resume();
	}
	return audioCtx;
}

/**
 * Plays a short, pleasant Web Audio feedback sound for MCQ answers.
 * - `isCorrect = true`: crisp ascending two-note "ting" chime
 * - `isCorrect = false`: soft descending two-tone error thud
 * - `force = true`: plays even when sound is muted (used for volume preview in Settings)
 */
export function playMcqSound(isCorrect: boolean, force = false): void {
	if (!force && !prefs.value.soundEnabled) return;
	const volPct = Math.max(0, Math.min(100, prefs.value.soundVolume));
	if (volPct === 0) return;

	const ctx = getAudioContext();
	if (!ctx) return;

	// Scale 0..100 to a comfortable peak gain (max 0.35 so it's never clipping or harsh)
	const peak = (volPct / 100) * 0.32;
	const now = ctx.currentTime;

	if (isCorrect) {
		// Bright two-note bell "ting": A5 (880 Hz) -> E6 (1318.5 Hz)
		const notes: [number, number, number][] = [
			[880, 0, 0.14],
			[1318.51, 0.065, 0.24]
		];
		for (const [freq, offset, dur] of notes) {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = 'sine';
			osc.frequency.setValueAtTime(freq, now + offset);

			gain.gain.setValueAtTime(0.0001, now + offset);
			gain.gain.linearRampToValueAtTime(peak, now + offset + 0.01);
			gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + dur);

			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(now + offset);
			osc.stop(now + offset + dur + 0.01);
		}
	} else {
		// Soft descending error double-tone: 310 Hz -> 220 Hz
		const notes: [number, number, number][] = [
			[310, 0, 0.11],
			[220, 0.095, 0.17]
		];
		for (const [freq, offset, dur] of notes) {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = 'triangle';
			osc.frequency.setValueAtTime(freq, now + offset);

			gain.gain.setValueAtTime(0.0001, now + offset);
			gain.gain.linearRampToValueAtTime(peak * 0.85, now + offset + 0.01);
			gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + dur);

			osc.connect(gain);
			gain.connect(ctx.destination);
			osc.start(now + offset);
			osc.stop(now + offset + dur + 0.01);
		}
	}
}
