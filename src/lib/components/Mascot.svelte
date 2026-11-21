<script lang="ts">
	import knightLogo from '$lib/assets/juris-lord.png';

	/**
	 * "Juris Lord" — Official Royal Knight mascot & logo with background removed,
	 * idle head movement, hover salute, and synchronized blinking eyelids over the exact eye coordinates.
	 */
	let { size = 64, label = '' }: { size?: number; label?: string } = $props();
</script>

<svg
	class="knight"
	width={size}
	height={size}
	viewBox="0 0 774 774"
	fill="none"
	role={label ? 'img' : undefined}
	aria-label={label || undefined}
	aria-hidden={label ? undefined : true}
>
	<defs>
		<clipPath id="jl-left-eye">
			<ellipse cx="304" cy="497" rx="51" ry="47" />
		</clipPath>
		<clipPath id="jl-right-eye">
			<ellipse cx="471" cy="497" rx="51" ry="47" />
		</clipPath>
	</defs>

	<g class="knight-head">
		<!-- Official Juris Lord Knight (transparent background) -->
		<image
			href={knightLogo}
			x="0"
			y="0"
			width="774"
			height="774"
			preserveAspectRatio="xMidYMid meet"
		/>

		<!-- Blinking left eyelid (exact pixel coordinates: X=259..349, Y=455..539) -->
		<g clip-path="url(#jl-left-eye)">
			<g class="lid-left">
				<ellipse
					cx="304"
					cy="497"
					rx="53"
					ry="49"
					fill="#FCC4A1"
					stroke="#1B2C3B"
					stroke-width="14"
				/>
				<path
					d="M256 503C275 516 333 516 352 503"
					stroke="#1B2C3B"
					stroke-width="14"
					stroke-linecap="round"
				/>
			</g>
		</g>

		<!-- Blinking right eyelid (exact pixel coordinates: X=426..516, Y=455..539) -->
		<g clip-path="url(#jl-right-eye)">
			<g class="lid-right">
				<ellipse
					cx="471"
					cy="497"
					rx="53"
					ry="49"
					fill="#FCC4A1"
					stroke="#1B2C3B"
					stroke-width="14"
				/>
				<path
					d="M423 503C442 516 500 516 519 503"
					stroke="#1B2C3B"
					stroke-width="14"
					stroke-linecap="round"
				/>
			</g>
		</g>
	</g>
</svg>

<style>
	.knight {
		display: block;
		flex: none;
		overflow: visible;
	}
	.knight-head {
		transform-origin: 387px 450px;
		animation: knight-bob 3.6s ease-in-out infinite;
	}
	.knight:hover .knight-head {
		animation: knight-salute 0.55s ease-in-out;
	}
	.lid-left,
	.lid-right {
		transform-box: fill-box;
		transform-origin: center top;
		transform: scaleY(0);
		animation: blink 4.5s infinite;
	}
	@keyframes knight-bob {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-16px) rotate(1.4deg);
		}
	}
	@keyframes knight-salute {
		0%,
		100% {
			transform: rotate(0deg) scale(1);
		}
		35% {
			transform: rotate(-6deg) scale(1.06);
		}
		70% {
			transform: rotate(4deg) scale(1.04);
		}
	}
	@keyframes blink {
		0%,
		91%,
		100% {
			transform: scaleY(0);
		}
		95% {
			transform: scaleY(1);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.knight-head,
		.lid-left,
		.lid-right {
			animation: none;
		}
	}
</style>
