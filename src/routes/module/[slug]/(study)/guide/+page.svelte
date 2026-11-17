<script lang="ts">
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import { getModule } from '$lib/data/modules';
	import { SPOT as CRIM_SPOT } from '$lib/crimlaw';
	import { SPOT as PFR_SPOT } from '$lib/pfr';
	import { kinds, moves, fmt } from '$lib/philo';
	import { CAREFUL, FIVE, WHY_MATTERS } from '$lib/philo-content';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);

	// Crim Law I ladder
	const crimLadder: [string, string][] = [
		['Find the penalty prescribed', 'for the consummated crime (e.g., homicide = reclusion temporal).'],
		['Adjust for stage and participation', 'using Arts. 50–57 and Scale No. 1 (frustrated −1, attempted −2; accomplice −1, accessory −2).'],
		['Apply privileged mitigating', 'to lower the degree: minority (Art. 68), incomplete justifying or exempting (Art. 69), or 2+ mitigating with no aggravating (Art. 64(5)).'],
		['Apply ordinary circumstances', 'to pick the period (Art. 64): none = medium, mitigating = minimum, aggravating = maximum. This gives the ISLaw maximum.'],
		['Fix the ISLaw minimum', 'anywhere within the penalty one degree lower than the one in step 3.']
	];

	// PFR guide
	const pfrFirst: [string, string][] = [
		['Find the regime first.', 'Married before or after August 3, 1988? Any marriage settlement? Valid marriage, void marriage, or no marriage at all (Art. 147 or 148)?'],
		['Then name the topic.', 'Use the topic spotter below.'],
		['Then write ALAC.', 'A: one short answer (“Community property.” “Revocable.”). L: “The law provides that…”. A: “Here,…” and match each requisite to a fact. C: “Therefore,…”.']
	];
	const pfrMcq: [string, string][] = [
		['Read the call first.', 'NOT, FALSE, TRUE, or “does not belong.” Circle it.'],
		['Test every option against the codal list.', 'Mark each one true or false.'],
		['Before choosing “None of the choices,”', 'make sure every option belongs or is true.']
	];
	const pfrTricks = [
		'“Which does NOT belong” often has “None of the choices” as the answer. Check every option against the codal list before picking one.',
		'One word changes the answer: “all conjugal property” vs. conjugal and exclusive; “both spouses” vs. one spouse; “legitimate” vs. illegitimate descendants; “used by the family.”',
		'Sequence questions ask for the exact next step, not a later one.',
		'Donation status has four possible answers: void, revocable, revoked by operation of law, irrevocable. Look for bad faith, and for who is innocent.'
	];

	// StatCon finder
	const statconFinder: [string, string, string][] = [
		['Two sections of one law conflict; two laws on the same subject; special vs. general law; a law that copies or refers to another', 'Ch. VI', 'whole statute, in pari materia, generalia specialibus'],
		['Penal law, tax, tax exemption, privilege, grant to a city, social legislation, LGU power, election law, amnesty', 'Ch. VII', 'strict or liberal, and in whose favor'],
		['“Shall” or “may,” a missed deadline, a skipped notice, an irregular ballot, “deemed approved”', 'Ch. VIII', 'mandatory or directory'],
		['A new law applied to an old act or a pending case; a reduced penalty; an overruled doctrine; a curative law', 'Ch. IX', 'prospective or retroactive'],
		['An amendment, a code that omits a provision, “all laws inconsistent herewith are repealed,” a repealed penal law', 'Ch. X', 'amendment and repeal'],
		['A constitutional provision with no implementing law; framers’ debates; “as may be provided by law”', 'Ch. XI', 'constitutional construction']
	];

	// Legal Philo habits
	const philoHabits: [string, string][] = [
		['Name the thinker and the phrase.', '“Ehrlich’s living law”, “Pound’s social engineering”. Precision reads as mastery.'],
		['Anchor in a Philippine case or Civil Code article.', 'The jurisprudence handouts exist for that purpose.'],
		['Take a side.', 'End every differentiate, critique and opinion answer with your own position and one reason.']
	];
</script>

<svelte:head><title>Answer Guide — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'Answer guide' }]} />
	<header class="flex flex-col gap-1.5">
		<p class="label-caps">Templates · Spotters · Exam Strategy</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">Answer Guide</h1>
	</header>

	<p class="note card muted" style="font-size:13.5px">
		Went blank? The routine is the same for every subject: see <a href="/exam-day#blank">Exam day → If I go blank</a>. This
		page keeps what is specific to {subject.title}.
	</p>

	{#if slug === 'crim1' || slug === 'crim1_lloren'}
		<div class="stack" style="gap:16px">
			<section class="grid">
				<div class="blk plain">
					<h4>Enumeration answer</h4>
					<p class="legal">“There are <b>[number]</b> [name of the list]. They are:</p>
					<p class="legal">(1) <b>[item]</b> — this means [one line].<br />(2) <b>[item]</b> — this means [one line].”</p>
				</div>
				<div class="blk plain">
					<h4>Definition of terms</h4>
					<p class="legal">“<b>[Term]</b> is [what it is] that [what sets it apart].” Cite the article when you know it.</p>
				</div>
				<div class="blk plain">
					<h4>ALAC skeleton</h4>
					<p class="legal"><b>A.</b> Yes / No / the liability or penalty.</p>
					<p class="legal"><b>L.</b> The law provides that [rule]. Jurisprudence provides that [court-made rule].</p>
					<p class="legal"><b>A.</b> Here, [fact]. This means [requisite present / absent] because [reason].</p>
					<p class="legal"><b>C.</b> Therefore, [repeat your answer].</p>
				</div>
			</section>

			<section class="stack" style="gap:8px">
				<h2 class="h">Penalty computation ladder</h2>
				<p class="muted">For any “what penalty?” question, climb in this order.</p>
				<ol class="steps">
					{#each crimLadder as [t, d], k (k)}
						<li class="card"><span class="n" aria-hidden="true">{k + 1}</span><div><strong>{t}</strong> {d}</div></li>
					{/each}
				</ol>
			</section>

			<section class="stack" style="gap:8px">
				<h2 class="h">Topic spotter</h2>
				<p class="muted">Find the clue in the facts. Tap it to practice that topic’s problems.</p>
				<div class="spot">
					{#each CRIM_SPOT as s (s.topic.id)}
						<a class="card" href="/module/{slug}/problems#t-{s.topic.id}">
							<span>{s.clue}</span>
							<span class="go legal">{s.topic.title} →</span>
						</a>
					{/each}
				</div>
			</section>
		</div>
	{:else if slug === 'pfr'}
		<div class="stack" style="gap:16px">
			<section class="grid">
				<div class="blk plain">
					<h4>Scenario: in this order</h4>
					<ol>{#each pfrFirst as [t, d] (t)}<li><b>{t}</b> {d}</li>{/each}</ol>
				</div>
				<div class="blk plain">
					<h4>Multiple choice routine</h4>
					<ol>{#each pfrMcq as [t, d] (t)}<li><b>{t}</b> {d}</li>{/each}</ol>
				</div>
			</section>

			<section class="blk trap">
				<h4>How these MCQs trick you</h4>
				<ul>{#each pfrTricks as t (t)}<li>{t}</li>{/each}</ul>
			</section>

			<section class="stack" style="gap:8px">
				<h2 class="h">Topic spotter</h2>
				<p class="muted">Find the clue in the facts. Tap it to practice that topic’s problems.</p>
				<div class="spot">
					{#each PFR_SPOT as s (s.topic.id + s.clue)}
						<a class="card" href="/module/pfr/problems#t-{s.topic.id}">
							<span>{s.clue}</span>
							<span class="go legal">{s.topic.title} →</span>
						</a>
					{/each}
				</div>
			</section>
		</div>
	{:else if slug === 'statcon'}
		<div class="stack" style="gap:14px">
			<section class="grid">
				<div class="blk plain">
					<h4>Enumeration answer</h4>
					<p class="legal">“There are <b>[number]</b> [name of the list]. They are:</p>
					<p class="legal">(1) <b>[item]</b> — this means [one line].<br />(2) <b>[item]</b> — this means [one line].<br />(3) <b>[item]</b> — for example, [one line].”</p>
				</div>
				<div class="blk plain">
					<h4>Definition of terms</h4>
					<p class="legal">“<b>[Term]</b> is [the class it belongs to] that [what sets it apart].”</p>
					<p class="legal">Add one line that keeps it from being confused with its neighbor: “Unlike [other term], it…”</p>
				</div>
				<div class="blk plain">
					<h4>ALAC skeleton</h4>
					<p class="legal"><b>A.</b> Yes / No / Valid / Invalid.</p>
					<p class="legal"><b>L.</b> Jurisprudence provides that [rule]. The exception is when [exception].</p>
					<p class="legal"><b>A.</b> Here, [fact]. This means [rule is met / not met] because [reason].</p>
					<p class="legal"><b>C.</b> Therefore, [repeat answer].</p>
				</div>
			</section>

			<section class="stack" style="gap:8px">
				<h2 class="h">Which chapter is this problem from?</h2>
				<p class="muted">Spot the clue in the facts.</p>
				<div class="card" style="overflow-x:auto">
					<table>
						<thead><tr><th>If the facts say…</th><th>Think</th></tr></thead>
						<tbody>
							{#each statconFinder as [clue, ch, what] (ch)}
								<tr><td>{clue}</td><td><b>{ch}</b> — {what}</td></tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	{:else if slug === 'philo'}
		<div class="stack" style="gap:20px">
			<section class="stack" style="gap:8px">
				<h2 class="h">How to think philosophically</h2>
				<p class="muted" style="max-width:68ch">The professor tests thinking, not recall. Five habits work for every question type.</p>
				<ol class="steps">
					{#each moves as [t, d], i (t)}
						<li class="card"><span class="n num" aria-hidden="true">{i + 1}</span><div><b>{t}</b> {@html fmt(d)}</div></li>
					{/each}
				</ol>
			</section>

			<section class="stack" style="gap:8px">
				<h2 class="h">The four question types</h2>
				<div class="grid">
					{#each kinds as k (k.id)}
						<div class="blk plain" style="display:flex;flex-direction:column;gap:8px">
							<h4>{k.name}</h4>
							<p class="muted">{k.tests}</p>
							<ol>{#each k.formula as f (f)}<li>{f}</li>{/each}</ol>
							<p class="legal" style="font-size:15.5px;font-style:italic">{k.first}</p>
							<p style="font-size:13.5px;color:var(--error)"><b>Trap:</b> {k.trap}</p>
							<a class="btn btn-secondary btn-sm" style="align-self:flex-start" href="/module/philo/essays">Practice {k.name.toLowerCase()} questions</a>
						</div>
					{/each}
				</div>
			</section>

			<section class="blk k-doc">
				<h4>Three habits that earn marks</h4>
				<ul>{#each philoHabits as [t, d] (t)}<li><b>{t}</b> {d}</li>{/each}</ul>
			</section>

			<section class="stack" style="gap:8px">
				<h2 class="h">Why this matters to a law student</h2>
				<p class="muted" style="max-width:68ch">
					Material for the opinion question the midterm asked. Pick two or three, make them concrete, and add one sentence from your
					own experience.
				</p>
				<div class="grid">
					{#each WHY_MATTERS as [t, src, eff] (t)}
						<div class="card" style="padding:12px 14px;display:flex;flex-direction:column;gap:4px">
							<b>{t}</b>
							<span class="muted" style="font-size:13.5px">{@html fmt(src)}</span>
							<span style="font-size:13.5px;color:var(--accent-text);font-weight:700">{@html fmt(eff)}</span>
						</div>
					{/each}
				</div>
			</section>

			<section class="card" style="padding:16px 18px">
				<h2 class="eyebrow">If you remember only five sentences</h2>
				<ol style="margin-top:8px;padding-left:1.3em;display:grid;gap:6px;font-size:16px">{#each FIVE as f (f)}<li class="legal">{f}</li>{/each}</ol>
			</section>

			<section class="blk trap">
				<h4>Handle with care: where the handout differs from the usual account</h4>
				<ul>{#each CAREFUL as c (c)}<li>{@html fmt(c)}</li>{/each}</ul>
			</section>
		</div>
	{/if}
</div>

<style>
	.h {
		font-size: 18px;
		font-weight: 800;
	}
	.steps {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.steps li {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 12px;
		align-items: start;
		padding: 12px 14px;
	}
	.steps strong {
		display: block;
	}
	.n {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		font-weight: 800;
		background: var(--accent-soft);
		color: var(--accent-text);
		border: 1px solid var(--accent-line);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
		gap: 12px;
	}
	.grid p + p {
		margin-top: 6px;
	}
	.spot {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.spot a {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 12px;
		align-items: center;
		padding: 10px 14px;
		color: var(--text);
		text-decoration: none;
		font-size: 14.5px;
	}
	.spot a:hover {
		border-color: var(--border-strong);
		background: var(--surface-2);
	}
	.go {
		font-weight: 700;
		color: var(--accent-text);
		text-align: right;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		font-size: 14px;
	}
	th,
	td {
		border-bottom: 1px solid var(--border);
		padding: 8px 10px;
		text-align: left;
		vertical-align: top;
	}
	tbody tr:last-child td {
		border-bottom: 0;
	}
	td:first-child {
		width: 58%;
	}
	th {
		font-size: 13px;
		color: var(--text-2);
	}
	@media (max-width: 560px) {
		.spot a {
			grid-template-columns: 1fr;
		}
		.go {
			text-align: left;
		}
	}
</style>
