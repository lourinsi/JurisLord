import type { AlacEssay, McqQuestion, ModuleTopic } from '$lib/types';
import { CRIMLAW, SPOT, TOPICS } from '$lib/crimlaw';
import type { Kind } from '$lib/kit';

const mdToHtml = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

const KIND_DOT: Record<Kind, string> = {
	req: 'green',
	exc: 'blue',
	exx: 'orange',
	cls: 'purple',
	doc: 'red',
	mem: 'yellow',
	list: 'yellow'
};

export const crim1ExtTopics: ModuleTopic[] = [
	{
		id: 'persons_liable',
		name: 'Persons Criminally Liable',
		eyebrow: 'RPC · ARTS. 16–20',
		desc: 'Principals (by direct participation, induction, indispensable cooperation), accomplices, accessories, and Art. 20 exempt relatives.'
	},
	{
		id: 'penalties_general',
		name: 'Penalties: General, Duration & Effects',
		eyebrow: 'RPC · ARTS. 21–45',
		desc: 'Retroactivity (Art. 22), classification & fines (RA 10951), durations (Art. 27), preventive imprisonment (Art. 29), accessory penalties, subsidiary penalty (Art. 39).'
	},
	{
		id: 'penalties_application',
		name: 'Application, Execution, ISLaw & Probation',
		eyebrow: 'RPC · ARTS. 46–88',
		desc: 'Degrees vs. periods, complex crimes (Art. 48), graduation rules (Arts. 61–64), three-fold rule (Art. 70), ISLaw (Act 4103), Probation Law (PD 968 / RA 10707), Art. 80/RA 9344.'
	},
	{
		id: 'extinction_civil',
		name: 'Extinction of Criminal & Civil Liability',
		eyebrow: 'RPC · ARTS. 89–113',
		desc: 'Total & partial extinction (death, pardon, amnesty, prescription of crime & penalty, GCTA/STAL) and civil liability (restitution, reparation, indemnification, Arts. 101–103).'
	}
];

function renderGroupSection(groupNo: number, partRoman: string, partId: string, title: string): string {
	const enums = CRIMLAW.enums.filter((e) => e.group === groupNo);
	const terms = CRIMLAW.terms.filter((t) => t.group === groupNo);
	const topics = TOPICS.filter((t) => t.group === groupNo);

	const topicCards = topics
		.map(
			(t) =>
				`<div class="case-card"><div class="cname">${t.title} <span style="font-weight:400;opacity:0.78">(${t.cite})</span></div><div class="cdoc">${mdToHtml(t.rule)}</div></div>`
		)
		.join('\n');

	const enumRows = enums
		.map((e) => {
			const dot = KIND_DOT[e.kind] ?? 'yellow';
			const exoex = e.kind === 'exx' ? ' class="sg-row-exoex"' : '';
			const itemsHtml = e.it
				.map(([h, d], i) => {
					const num = e.order ? `${i + 1}. ` : '• ';
					return `<div>${num}<strong>${mdToHtml(h)}</strong>${d ? ` — ${mdToHtml(d)}` : ''}</div>`;
				})
				.join('');
			return `  <tr${exoex}><td class="art"><span class="sg-dot" style="background:var(--${dot})"></span>${e.src}</td><td><strong>${mdToHtml(e.t)}</strong> (${e.it.length}${e.order ? ', in order' : ''})${e.intro ? `<div style="margin:2px 0 4px;opacity:0.85">${mdToHtml(e.intro)}</div>` : ''}<div style="margin-top:4px">${itemsHtml}</div></td></tr>`;
		})
		.join('\n');

	const termRows = terms
		.map(
			(t) =>
				`  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span><strong>${mdToHtml(t.t)}</strong><div style="font-size:0.8em;opacity:0.75">${t.src}</div></td><td>${mdToHtml(t.d)}</td></tr>`
		)
		.join('\n');

	return `
<h2 class="sg-h2" id="${partId}">Part ${partRoman} — ${title}</h2>
${topics.length ? `<h3 class="sg-h3" id="${partId}-rules">Core Rules &amp; Doctrines</h3>\n${topicCards}` : ''}
${
	enums.length
		? `<h3 class="sg-h3" id="${partId}-enumerations">Enumerations &amp; Requisites (${enums.length} lists)</h3>
<div class="table-scroll"><table class="sg-table">
  <tr><th>Art. / Source</th><th>Enumeration &amp; Requisites</th></tr>
${enumRows}
</table></div>`
		: ''
}
${
	terms.length
		? `<h3 class="sg-h3" id="${partId}-definitions">Definitions to Know Cold (${terms.length} terms)</h3>
<div class="table-scroll"><table class="sg-table">
  <tr><th>Term</th><th>Definition</th></tr>
${termRows}
</table></div>`
		: ''
}`;
}

const spotterRows = SPOT.map(
	({ clue, topic }) =>
		`  <tr><td class="art"><span class="sg-dot" style="background:var(--purple)"></span>${clue}</td><td><strong>${topic.title}</strong> (${topic.cite}) — ${mdToHtml(topic.rule)}</td></tr>`
).join('\n');

export const crim1ExtHtml = [
	renderGroupSection(1, 'V', 'part-v-persons-criminally-liable-arts-16-20', 'Persons Criminally Liable (Arts. 16–20)'),
	renderGroupSection(2, 'VI', 'part-vi-penalties-in-general-arts-21-26', 'Penalties in General (Arts. 21–26)'),
	renderGroupSection(3, 'VII', 'part-vii-duration-and-effects-of-penalties-arts-27-45', 'Duration & Effects of Penalties (Arts. 27–45)'),
	renderGroupSection(4, 'VIII', 'part-viii-application-of-penalties-arts-46-77', 'Application of Penalties, ISLaw & Probation (Arts. 46–77)'),
	renderGroupSection(5, 'IX', 'part-ix-execution-and-service-arts-78-88', 'Execution & Service of Penalties (Arts. 78–88)'),
	renderGroupSection(6, 'X', 'part-x-extinction-of-criminal-liability-arts-89-99', 'Extinction of Criminal Liability (Arts. 89–99)'),
	renderGroupSection(7, 'XI', 'part-xi-civil-liability-arts-100-113', 'Civil Liability (Arts. 100–113)'),
	`<h2 class="sg-h2" id="part-xii-numbers-ladder-and-spotter">Part XII — Numbers to Memorize, Penalty Ladder &amp; Topic Spotter</h2>
<h3 class="sg-h3" id="crim-penalty-computation-ladder">Penalty Computation Ladder (6 Steps in Order)</h3>
<div class="table-scroll"><table class="sg-table">
  <tr><th>Step</th><th>Action &amp; Rule</th></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span>1. Prescribed penalty</td><td>Start with the penalty the Code fixes for the consummated crime committed by a principal.</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--green)"></span>2. Stage &amp; participation</td><td>Lower by degree for frustrated (-1) or attempted (-2), and for accomplice (-1) or accessory (-2) under Arts. 50–57 (light felonies: Art. 57).</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--blue)"></span>3. Privileged mitigating</td><td>Lower by 1 or 2 degrees for minority (Art. 68), incomplete justification/exemption (Art. 69), or two or more mitigating with no aggravating (Art. 64[5]). Never offset by generic aggravating. This gives the <strong>imposable penalty</strong> (and the <strong>ISLaw maximum</strong>).</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--green)"></span>4. ISLaw minimum</td><td>Take <strong>one degree lower</strong> than the prescribed penalty (after privileged mitigating), in any period the court chooses, unless disqualified under Sec. 2 of Act No. 4103.</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--purple)"></span>5. Period of maximum</td><td>Apply Art. 64 (or Art. 63 for indivisible penalties) using ordinary mitigating and generic aggravating circumstances (offsetting 1-for-1) to fix the minimum, medium, or maximum period of the imposable penalty.</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--orange)"></span>6. Probation check</td><td>If the maximum term actually imposed is <strong>not more than 6 years</strong> and the offender is not disqualified under Sec. 9 of P.D. 968 as amended by R.A. 10707 (e.g., crimes against national security, prior conviction &gt; 6 months and 1 day or fine &gt; ₱1,000, prior probation, or perfecting an appeal except under <em>Colinares</em>), he may apply for probation within the period for perfecting an appeal.</td></tr>
</table></div>

<h3 class="sg-h3" id="crim-durations-and-periods">Durations (Art. 27), Fines (Art. 26 / RA 10951) &amp; Periods (Art. 76)</h3>
<div class="table-scroll"><table class="sg-table">
  <tr><th>Penalty</th><th>Duration</th><th>Minimum</th><th>Medium</th><th>Maximum</th></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span>Reclusion perpetua</td><td>20y 1d – 40y</td><td colspan="3">Indivisible (Art. 63 applies)</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span>Reclusion temporal</td><td>12y 1d – 20y</td><td>12y 1d – 14y 8m</td><td>14y 8m 1d – 17y 4m</td><td>17y 4m 1d – 20y</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span>Prision mayor / temp. disq.</td><td>6y 1d – 12y</td><td>6y 1d – 8y</td><td>8y 1d – 10y</td><td>10y 1d – 12y</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span>Prision correccional / susp. / destierro</td><td>6m 1d – 6y</td><td>6m 1d – 2y 4m</td><td>2y 4m 1d – 4y 2m</td><td>4y 2m 1d – 6y</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span>Arresto mayor</td><td>1m 1d – 6m</td><td>1m 1d – 2m</td><td>2m 1d – 4m</td><td>4m 1d – 6m</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span>Arresto menor</td><td>1d – 30d</td><td>1 – 10 days</td><td>11 – 20 days</td><td>21 – 30 days</td></tr>
  <tr><td class="art"><span class="sg-dot" style="background:var(--purple)"></span>Fines (Art. 26, RA 10951)</td><td colspan="4"><strong>Afflictive:</strong> over ₱1,200,000 · <strong>Correctional:</strong> ₱40,000 to ₱1,200,000 · <strong>Light:</strong> under ₱40,000 (Light felony under Art. 9: up to ₱40,000)</td></tr>
</table></div>

<h3 class="sg-h3" id="crim-topic-spotter">Fact-Pattern Spotter ("If the facts say…")</h3>
<div class="table-scroll"><table class="sg-table">
  <tr><th>If the facts say…</th><th>Spot this topic &amp; rule</th></tr>
${spotterRows}
</table></div>`
].join('\n');

export const crim1ExtWatchFor: Record<string, string> = {
	persons_liable: `<strong>Watch for: induction vs. proposal, indispensable vs. dispensable, and Art. 20 traps.</strong>
    <ul>
      <li><strong>Principal by induction</strong> requires that the inducement be the <em>determining cause</em> and precede the act; if the actor already had his own personal reason to kill, the inducer is not a principal by induction.</li>
      <li><strong>Indispensable cooperation</strong> vs. <strong>accomplice</strong>: if the crime could still have been committed without his act (e.g., lending a gun or acting as lookout), he is only an accomplice.</li>
      <li><strong>Art. 20 exempt relatives</strong>: spouses, ascendants, descendants, legitimate/natural/adopted brothers and sisters, or relatives by affinity in the same degrees are exempt as accessories — <strong>except</strong> when they profited or helped the offender profit (Art. 19[1]). Nephews, nieces, uncles, aunts, and cousins are <strong>never</strong> exempt.</li>
    </ul>`,
	penalties_general: `<strong>Watch for: habitual criminals, preventive detention credit, and subsidiary imprisonment caps.</strong>
    <ul>
      <li><strong>Art. 22 retroactivity</strong>: favorable penal laws retroact even to convicts serving final sentence — <strong>except</strong> when the offender is a habitual criminal or the new law expressly denies retroactivity.</li>
      <li><strong>Art. 29 preventive imprisonment</strong>: full credit if the detainee agrees <em>in writing</em> to abide by rules for convicted prisoners; 4/5 credit if he does not; recidivists and those who failed to surrender when summoned get <strong>no credit</strong>.</li>
      <li><strong>Art. 39 subsidiary imprisonment</strong>: covers <em>only</em> the fine (never civil indemnity/reparation); impossible when the principal penalty is higher than prision correccional; capped at 1/3 of the term and never more than 1 year.</li>
    </ul>`,
	penalties_application: `<strong>Watch for: privileged vs. ordinary mitigating, complex crimes, ISLaw, and Probation traps.</strong>
    <ul>
      <li><strong>Privileged mitigating</strong> lowers by <em>degree</em> FIRST and is never offset by generic aggravating; ordinary mitigating only moves the <em>period</em> under Art. 64.</li>
      <li><strong>Art. 48 complex crime</strong>: single act → 2+ grave/less grave felonies (light felonies are excluded!), OR one offense is a necessary means to commit the other; penalty is the <em>maximum period</em> of the more/most serious crime. Multiple shots from one firearm = multiple acts (not a compound crime).</li>
      <li><strong>ISLaw</strong>: does NOT apply when the maximum term does not exceed 1 year, or to reclusion perpetua, treason, rebellion, sedition, espionage, piracy, habitual delinquents, or escapees.</li>
      <li><strong>Probation</strong>: disqualified if maximum term exceeds 6 years, convicted of any crime against national security, previously convicted of an offense punished by imprisonment &gt; 6 months and 1 day and/or fine &gt; ₱1,000, once on probation, or perfected an appeal from a judgment on the merits — <strong>except</strong> when he appealed a non-probationable sentence and the appellate court lowered it to a probationable one (<em>Colinares v. People</em>; RA 10707).</li>
    </ul>`,
	extinction_civil: `<strong>Watch for: death before vs. after final judgment, prescription triggers, and survival of civil liability.</strong>
    <ul>
      <li><strong>Art. 89(1) death of the accused</strong>: death <em>before</em> final judgment extinguishes criminal liability AND civil liability <em>ex delicto</em>, but claims based on other sources of obligation (contract, quasi-contract, law, quasi-delict) survive against the estate (<em>People v. Bayotas</em>).</li>
      <li><strong>Prescription of crime (Arts. 90–91)</strong> vs. <strong>Prescription of penalty (Arts. 92–93)</strong>: prescription of the crime runs from discovery and is interrupted by filing the complaint; prescription of the penalty requires a <em>final sentence</em> that the convict <em>evaded</em>, and runs from the evasion.</li>
      <li><strong>Acquittal and civil liability</strong>: acquittal on reasonable doubt does NOT extinguish civil liability; only a finding that the act from which the civil liability might arise did not exist extinguishes it.</li>
    </ul>`
};

const GROUP_TO_TOPIC_ID: Record<number, string> = {
	1: 'persons_liable',
	2: 'penalties_general',
	3: 'penalties_general',
	4: 'penalties_application',
	5: 'penalties_application',
	6: 'extinction_civil',
	7: 'extinction_civil'
};

export const crim1ExtEssays: AlacEssay[] = CRIMLAW.problems.map((p) => ({
	id: `crim1:kit:${p.pid}`,
	title: `${p.topic.title} — ${p.label}`,
	topic: `${p.topic.title} (${p.topic.cite})`,
	factPattern: p.facts,
	question: p.q || 'Resolve the problem using the ALAC method.',
	modelAnswer: {
		answer: p.alac[0] ?? '',
		legalBasis: p.alac[1] ?? '',
		application: p.alac[2] ?? '',
		conclusion: p.alac[3] ?? ''
	}
}));

export const crim1ExtMcqs: McqQuestion[] = [
	{
		id: 'crim1:persons_liable:1',
		topicId: 'persons_liable',
		topic: 'Persons Criminally Liable',
		tag: 'requisites',
		question: 'Don Marcos offered Berto ₱50,000 to kill Lito. Unknown to Don Marcos, Berto had already decided the day before to kill Lito because Lito had seduced Berto’s sister. Berto killed Lito and collected the money. What is Don Marcos’s criminal liability?',
		options: [
			'Principal by induction, because he offered a price or reward that Berto accepted',
			'Not a principal by induction, as his offer was not the determining cause',
			'Principal by indispensable cooperation, because his money funded the killing',
			'Accessory, because he paid Berto the reward after the killing was consummated'
		],
		correctIndex: 1,
		key: 'Not a principal by induction, as his offer was not the determining cause',
		explanation: 'Under Art. 17(2), to hold one liable as a principal by induction, the inducement must precede the act and must be the determining cause of the commission of the crime — so influential that without it the crime would not have been committed. Since Berto had already resolved to kill Lito for his own personal reason, Don Marcos’s offer was not the determining cause.',
		legalBasis: 'Art. 17(2), RPC — Requisites of Principal by Induction',
		hint: 'Ask whether Berto would have killed Lito even without the ₱50,000 offer.'
	},
	{
		id: 'crim1:persons_liable:2',
		topicId: 'persons_liable',
		topic: 'Persons Criminally Liable',
		tag: 'exceptions',
		question: 'Knowing that his brother Juan had just stolen a gold watch, Pedro: (a) hid the watch inside a hollow post so the police could not find it, and (b) sold the watch the next day and kept half the proceeds. Which statement is CORRECT regarding Pedro’s liability as an accessory?',
		options: [
			'Completely exempt from accessory liability for both acts because Juan is his brother',
			'Exempt for hiding the watch, but liable for profiting and helping Juan profit',
			'Liable for both acts because the relative exemption excludes brothers and sisters',
			'Liable as a principal by indispensable cooperation for disposing of the stolen watch'
		],
		correctIndex: 1,
		key: 'Exempt for hiding the watch, but liable for profiting and helping Juan profit',
		explanation: 'Art. 20 exempts spouses, ascendants, descendants, legitimate/natural/adopted brothers and sisters, or relatives by affinity in the same degrees from criminal liability as accessories under Art. 19(2) (concealing the body or effects of the crime) and Art. 19(3) (harboring the offender), EXCEPT when they profited themselves or assisted the offender to profit by the effects of the crime under Art. 19(1).',
		legalBasis: 'Arts. 19–20, RPC — Exempt Relatives and the Art. 19(1) Exception',
		hint: 'Art. 20 covers brothers and sisters, but carves out one specific paragraph of Art. 19.'
	},
	{
		id: 'crim1:persons_liable:3',
		topicId: 'persons_liable',
		topic: 'Persons Criminally Liable',
		tag: 'requisites',
		question: 'Ramon wanted to shoot his rival, Tonio, so he borrowed a pistol from his friend Cesar, telling Cesar what he planned to do. Ramon could easily have used his own bolo or bought another gun, but used Cesar’s pistol to kill Tonio. Without prior conspiracy, what is Cesar’s liability?',
		options: [
			'Principal by indispensable cooperation, for supplying the murder weapon',
			'Accomplice, for previous cooperation that was not indispensable',
			'Accessory, for knowingly supplying the instrument used in the killing',
			'Not criminally liable at all in the absence of a prior conspiracy'
		],
		correctIndex: 1,
		key: 'Accomplice, for previous cooperation that was not indispensable',
		explanation: 'Under Arts. 17(3) and 18, a person who cooperates in the execution of the offense by previous or simultaneous acts, with knowledge of the criminal design, is an accomplice if his cooperation is NOT indispensable to the commission of the crime. Since Ramon could have committed the crime by other means, lending the pistol was not indispensable.',
		legalBasis: 'Arts. 17(3) & 18, RPC — Principal by Indispensable Cooperation vs. Accomplice',
		hint: 'Could the killing have been committed even without Cesar’s pistol?'
	},
	{
		id: 'crim1:penalties_general:1',
		topicId: 'penalties_general',
		topic: 'Penalties: General, Duration & Effects',
		tag: 'memorization',
		question: 'Under Art. 26 of the Revised Penal Code, as amended by R.A. 10951 (2017), how is a fine classified as afflictive, correctional, or light?',
		options: [
			'Afflictive: over ₱1,200,000; Correctional: ₱40,000 to ₱1,200,000; Light: under ₱40,000',
			'Afflictive: over ₱6,000; Correctional: ₱200 to ₱6,000; Light: under ₱200',
			'Afflictive: over ₱2,400,000; Correctional: ₱100,000 to ₱2,400,000; Light: under ₱100,000',
			'Afflictive: over ₱500,000; Correctional: ₱20,000 to ₱500,000; Light: under ₱20,000'
		],
		correctIndex: 0,
		key: 'Afflictive: over ₱1,200,000; Correctional: ₱40,000 to ₱1,200,000; Light: under ₱40,000',
		explanation: 'Under Art. 26 as amended by R.A. 10951, a fine is an afflictive penalty if it exceeds ₱1,200,000; correctional if it is from ₱40,000 to ₱1,200,000; and light if it is less than ₱40,000 (while under Art. 9, a light felony may be punished by a fine not exceeding ₱40,000).',
		legalBasis: 'Art. 26, RPC, as amended by R.A. 10951',
		hint: 'Remember the two key RA 10951 thresholds: ₱40,000 and ₱1,200,000.'
	},
	{
		id: 'crim1:penalties_general:2',
		topicId: 'penalties_general',
		topic: 'Penalties: General, Duration & Effects',
		tag: 'exceptions',
		question: 'Dante was detained for 10 months during trial. Upon entering jail, he refused to sign the written agreement to abide by the same disciplinary rules imposed upon convicted prisoners. He is not a recidivist. How much of his preventive imprisonment should be credited to his sentence under Art. 29?',
		options: [
			'Full time (10 months), as credit is automatic for non-recidivists',
			'Four-fifths of the time (8 months), for refusing to sign the agreement',
			'No credit at all, as refusing to sign forfeits preventive detention credit',
			'One-half of the time (5 months), as the default credit for detainees'
		],
		correctIndex: 1,
		key: 'Four-fifths of the time (8 months), for refusing to sign the agreement',
		explanation: 'Under Art. 29 (as amended by R.A. 10592), offenders who have undergone preventive imprisonment are credited with the FULL time if they agree voluntarily in writing to abide by the disciplinary rules imposed upon convicted prisoners, and with FOUR-FIFTHS (4/5) of the time if they do not agree in writing.',
		legalBasis: 'Art. 29, RPC, as amended by R.A. 10592',
		hint: 'Signing in writing = full credit; not signing in writing = 4/5 credit.'
	},
	{
		id: 'crim1:penalties_general:3',
		topicId: 'penalties_general',
		topic: 'Penalties: General, Duration & Effects',
		tag: 'exceptions',
		question: 'Marco was convicted of homicide and sentenced to an indeterminate penalty whose maximum is 14 years, 8 months, and 1 day of reclusion temporal, plus a fine of ₱100,000 and ₱75,000 civil indemnity. He is insolvent. May he be required to serve subsidiary imprisonment under Art. 39?',
		options: [
			'Yes, for both the ₱100,000 fine and the ₱75,000 civil indemnity, up to one full year',
			'Yes, but only for the ₱100,000 fine, since civil indemnity carries no subsidiary penalty',
			'No, since the principal penalty exceeds prision correccional and indemnity is excluded',
			'No, unless the court’s judgment omits an express stipulation of subsidiary imprisonment'
		],
		correctIndex: 2,
		key: 'No, since the principal penalty exceeds prision correccional and indemnity is excluded',
		explanation: 'Under Art. 39, subsidiary personal liability applies ONLY to the fine (never to reparation or indemnification), AND under Art. 39(3), when the principal penalty imposed is higher than prision correccional (here, reclusion temporal), no subsidiary imprisonment shall be imposed upon the culprit.',
		legalBasis: 'Art. 39, RPC — Rules on Subsidiary Penalty',
		hint: 'Check the ceiling on the principal penalty in Art. 39(3).'
	},
	{
		id: 'crim1:penalties_application:1',
		topicId: 'penalties_application',
		topic: 'Application, Execution, ISLaw & Probation',
		tag: 'effects',
		question: 'Using a single submachine gun, Gardo squeezed the trigger once in a continuous burst, firing twelve bullets that killed three bystanders. How should Gardo be charged and punished?',
		options: [
			'One compound crime of triple murder, as a single trigger pull is one act',
			'Three separate crimes of murder or homicide, as each bullet is a distinct act',
			'One continuing crime (delito continuado), punished in the medium period',
			'One special complex crime of multiple homicide, in the maximum period'
		],
		correctIndex: 1,
		key: 'Three separate crimes of murder or homicide, as each bullet is a distinct act',
		explanation: 'In People v. Tabaco and People v. Desierto, the Supreme Court held that where several victims die from multiple bullets — even from a single burst of an automatic weapon — there are as many crimes as there are victims, because what counts under Art. 48 is one single act, not a series of shots.',
		legalBasis: 'Art. 48, RPC — Compound Crime vs. Multiple Shots (People v. Tabaco)',
		hint: 'One bullet killing two people = compound crime; multiple bullets killing multiple people = separate crimes.'
	},
	{
		id: 'crim1:penalties_application:2',
		topicId: 'penalties_application',
		topic: 'Application, Execution, ISLaw & Probation',
		tag: 'exceptions',
		question: 'Arnel was charged with frustrated homicide, a non-probationable offense, and convicted by the RTC. He appealed to the Court of Appeals arguing that he was guilty only of attempted homicide. The CA agreed and lowered his sentence to a maximum of 2 years of prision correccional. May Arnel now apply for probation?',
		options: [
			'No, because perfecting an appeal from a conviction always bars probation without exception',
			'Yes, because the appeal reduced a non-probationable sentence to a probationable one',
			'Yes, because a convict may still apply for probation after appealing a probationable term',
			'No, because homicide in any stage of execution is strictly disqualified from probation'
		],
		correctIndex: 1,
		key: 'Yes, because the appeal reduced a non-probationable sentence to a probationable one',
		explanation: 'Under Colinares v. People, later codified in R.A. 10707 amending Sec. 4 of P.D. 968, while an appeal generally bars probation, when the trial court imposed a non-probationable penalty and the appellate court reduces it to a probationable penalty (not exceeding 6 years), the accused may apply for probation upon remand.',
		legalBasis: 'P.D. 968, Sec. 4, as amended by R.A. 10707; Colinares v. People',
		hint: 'Did Arnel have a chance to apply for probation when the RTC sentenced him to a non-probationable term?'
	},
	{
		id: 'crim1:penalties_application:3',
		topicId: 'penalties_application',
		topic: 'Application, Execution, ISLaw & Probation',
		tag: 'requisites',
		question: 'Lito, 17 years old acting with discernment, committed consummated homicide (prescribed penalty: reclusion temporal) with one generic aggravating circumstance (nighttime) and no ordinary mitigating circumstance. Applying Art. 68, Art. 64, and the Indeterminate Sentence Law, what are the correct degrees and periods?',
		options: [
			'Maximum in prision mayor maximum after minority lowers by one degree; minimum in prision correccional',
			'Maximum in reclusion temporal medium because minority offsets nighttime; minimum in prision mayor',
			'Maximum in reclusion temporal medium after nighttime raises then minority lowers; minimum in prision mayor',
			'No indeterminate penalty applies because Lito is a minor disqualified from the Indeterminate Sentence Law'
		],
		correctIndex: 0,
		key: 'Maximum in prision mayor maximum after minority lowers by one degree; minimum in prision correccional',
		explanation: 'Minority under Art. 68 is a privileged mitigating circumstance: it lowers the prescribed penalty by one degree (from reclusion temporal to prision mayor) BEFORE Art. 64 is applied, and it can never be offset by a generic aggravating circumstance. Then, under Art. 64(3), the generic aggravating circumstance of nighttime places the ISLaw maximum in prision mayor maximum, while the ISLaw minimum is taken from the penalty next lower in degree (prision correccional, in any period).',
		legalBasis: 'Arts. 64 & 68, RPC; Act No. 4103 (Indeterminate Sentence Law)',
		hint: 'Apply privileged mitigating by degree FIRST; never offset it with a generic aggravating circumstance.'
	},
	{
		id: 'crim1:extinction_civil:1',
		topicId: 'extinction_civil',
		topic: 'Extinction of Criminal & Civil Liability',
		tag: 'jurisprudence',
		question: 'Rico was convicted of rape and ordered to pay civil indemnity and moral damages. While his appeal was pending before the Court of Appeals, Rico died of cardiac arrest in prison. Under Art. 89(1) and People v. Bayotas, what happens to his criminal and civil liabilities?',
		options: [
			'Only criminal liability ends; civil liability ex delicto survives against his estate',
			'Criminal and civil liability ex delicto end; civil claims from other sources survive',
			'Neither liability ends because the trial court already rendered a judgment of conviction',
			'Criminal liability and all civil claims, regardless of their source, are forever barred'
		],
		correctIndex: 1,
		key: 'Criminal and civil liability ex delicto end; civil claims from other sources survive',
		explanation: 'Under Art. 89(1) and People v. Bayotas, the death of the accused pending appeal (before final judgment) extinguishes both his criminal liability and his civil liability ex delicto (based solely on the offense committed). However, if the offended party’s civil claim may also be predicated on another source of obligation (Art. 1157: law, contract, quasi-contract, or quasi-delict), it survives and may be enforced by a separate civil action against the executor/administrator or estate.',
		legalBasis: 'Art. 89(1), RPC — People v. Bayotas',
		hint: 'Distinguish civil liability ex delicto from independent civil liabilities arising from other sources of obligation.'
	},
	{
		id: 'crim1:extinction_civil:2',
		topicId: 'extinction_civil',
		topic: 'Extinction of Criminal & Civil Liability',
		tag: 'requisites',
		question: 'After being charged with estafa in court, Bruno jumped bail and hid in Mindanao for 16 years without ever being tried or convicted. When arrested, he moved to dismiss on the ground that the penalty had prescribed under Art. 92. Should the motion be granted?',
		options: [
			'Yes, because 16 years exceeds the 15-year prescriptive period for afflictive penalties',
			'No, because prescription of penalty requires evasion of a final sentence',
			'Yes, because jumping bail while on trial amounts to evasion of service of sentence',
			'No, because prescription of penalties applies strictly to light felonies and fines'
		],
		correctIndex: 1,
		key: 'No, because prescription of penalty requires evasion of a final sentence',
		explanation: 'Under Arts. 92 and 93 (Pangan v. Gatbalite; Del Castillo v. Torrecampo), prescription of the PENALTY requires that there be a final sentence which the convict has begun to serve or evaded. Since Bruno jumped bail before conviction, there was no final sentence to evade, and prescription of the crime had already been interrupted by the filing of the information.',
		legalBasis: 'Arts. 90–93, RPC — Prescription of Crime vs. Prescription of Penalty',
		hint: 'Can a penalty prescribe before a final sentence imposes it?'
	},
	{
		id: 'crim1:extinction_civil:3',
		topicId: 'extinction_civil',
		topic: 'Extinction of Criminal & Civil Liability',
		tag: 'requisites',
		question: 'An employee of a bus company, while driving a passenger bus on his assigned route, recklessly ran over a pedestrian and was convicted of reckless imprudence resulting in homicide. The driver is insolvent. Under Art. 103, when is the bus company subsidiary liable?',
		options: [
			'Only if the company was negligent in hiring or supervising him, with due diligence as a defense',
			'Once employment, industry, discharge of duty, and insolvency are shown; diligence is no defense',
			'Only if the offended party files a separate civil action for quasi-delict against the bus company',
			'Primarily and solidarily with the driver from the moment of conviction, regardless of insolvency'
		],
		correctIndex: 1,
		key: 'Once employment, industry, discharge of duty, and insolvency are shown; diligence is no defense',
		explanation: 'Under Art. 103 of the RPC, an employer’s subsidiary civil liability ex delicto attaches when: (1) the employer-employee relationship exists; (2) the employer is engaged in an industry; (3) the employee committed the felony in the discharge of his duties; and (4) the employee is insolvent (proven by an unsatisfied writ of execution). Unlike quasi-delict under Art. 2180 of the Civil Code, diligence in the selection and supervision of employees is NOT a defense to Art. 103 subsidiary liability.',
		legalBasis: 'Art. 103, RPC — Subsidiary Civil Liability of Employers',
		hint: 'Don’t confuse Art. 103 RPC (subsidiary, no diligence defense) with Art. 2180 Civil Code (primary/solidary, diligence is a defense).'
	}
];
