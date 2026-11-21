import type { LawModule } from '$lib/types';

export const crim1Lloren: LawModule = {
	id: 'crim1_lloren',
	title: 'Criminal Law 1 - Justice lloren',
	subjectCategory: 'Criminal Law',
	eyebrow: 'Revised Penal Code · Book One · Whole Book',
	description:
		'Whole-book coverage for Criminal Law 1 under Justice lloren: corrected quiz and answer key, plus the complete Indeterminate Sentence Law (ISLAW) computation guide, penalty graduation, modifying circumstances, stages of execution, civil liability, extinction of criminal liability, and probation.',
	legalScope: 'Whole book — Revised Penal Code, Book One (Arts. 1–113), Indeterminate Sentence Law (Act No. 4103) & Probation Law (P.D. No. 968, as amended by R.A. No. 10707)',
	topics: [
		{
			id: 'tf',
			name: 'True or False (Q1–Q38)',
			eyebrow: 'PART I · TRUE OR FALSE',
			desc: '38 true-or-false items covering positivist theory, territoriality, mala in se vs. mala prohibita, stages of execution, modifying circumstances, penalties, prescription, and civil liability.'
		},
		{
			id: 'mcq',
			name: 'Multiple Choice (Q39–Q56+)',
			eyebrow: 'PART I · MULTIPLE CHOICE',
			desc: '20 multiple-choice items on recidivism, pecuniary vs. civil liabilities, minority and discernment, impossible crimes vs. attempted robbery, extinction of liability, indivisible penalties, and loose firearms.'
		},
		{
			id: 'problems',
			name: 'ISLAW, Penalties & Case Problems (Q57–Q63)',
			eyebrow: 'PART I · PROBLEMS & ESSAYS',
			desc: '8 application items on Indeterminate Sentence Law penalty periods, suicide and impossible crimes, Probation Law (Colinares doctrine), the Flag State Rule, and the Three-Fold Rule.'
		}
	],
	studyGuideIntro:
		'Whole-book Criminal Law 1 reviewer for Justice lloren: Part 1 presents the corrected quiz and answer key (checked against Reyes, RPC Book 1, with original key discrepancies flagged), and Part 2 presents the complete Indeterminate Sentence Law (Act No. 4103) computation guide, penalty duration tables, and worked scenarios.',
	legend: [
		{ color: 'yellow', label: 'Correct rule / memorize' },
		{ color: 'green', label: 'Reyes / statutory basis' },
		{ color: 'red', label: 'Key was wrong — corrected answer' },
		{ color: 'orange', label: 'Needs a fix / check with professor' },
		{ color: 'blue', label: 'Answer added (missing in key)' },
		{ color: 'purple', label: 'ISLAW & penalty computation' }
	],
	watchFor: {
		all: `<ul>
<li><strong>Attempted Robbery vs. Impossible Crime (Q44, Q46, Q48):</strong> When A points a gun at B to rob him of his watch or phone, but B left it at home or lent it to his sister/wife, <strong>Reyes (p. 88)</strong> classifies this as <strong>attempted robbery</strong> (the object was missing by accident, not inherent impossibility, and pointing a gun is already grave threats under Art. 282). However, the <strong>original quiz key</strong> classified it as an <strong>impossible crime</strong> (following <em>Intod v. CA</em>). Check which approach Justice lloren grades by.</li>
<li><strong>Accomplice in Frustrated Felony (Q18) &amp; Destierro (Q29):</strong> Art. 54 expressly gives the accomplice in a frustrated felony the penalty next lower than that for the frustrated felony (TRUE), and Art. 71 places <em>destierro</em> immediately one degree below <em>arresto mayor</em> (TRUE). The original key marked both False.</li>
<li><strong>Light Felonies Against Persons (Q21):</strong> Under Art. 7, light felonies against persons or property are punishable even in the attempted or frustrated stage (so the statement that there is no attempted/frustrated stage is FALSE under Art. 7, though slight physical injuries is punished by result).</li>
<li><strong>Recovery of Stolen Property from a Good-Faith Buyer (Q35):</strong> Under Art. 105 RPC and Art. 559 Civil Code, the owner <strong>can recover</strong> stolen property even from an innocent buyer in good faith (TRUE), unless bought at a public sale (where reimbursement is required).</li>
<li><strong>Driving Without a License (Q52) &amp; Palay Thief (Q53):</strong> Violating R.A. 4136 is an <strong>offense</strong> (special law), though the original key called it an "infraction." Shooting a suspected palay thief after a warning shot is <strong>murder</strong> (<em>People v. Apolinar</em>: defense of property can be invoked as a justifying circumstance only when coupled with an attack on the person entrusted with said property; life is more important than property).</li>
</ul>`,
		tf: `<ul>
<li><strong>Correctional penalties prescription (Q3):</strong> Correctional penalties prescribe in <strong>10 years</strong> (arresto mayor in 5 years), not 15 years. Fifteen years is for afflictive penalties.</li>
<li><strong>Malaria &amp; Somnambulism (Q4, Q31):</strong> Ordinary malaria is not mitigating; malignant malaria causing insanity-like delirium is <strong>exempting</strong> (<em>People v. Lacena</em>). Somnambulism is also <strong>exempting</strong>, not mitigating.</li>
<li><strong>Subsidiary liability of employer (Q23):</strong> Art. 103 requires that the employee commit the crime <em>in the discharge of his duties</em>, not merely during duty hours. A hotel guard who robs a neighboring 7-Eleven does not make the hotel employer subsidiarily liable (<em>Baza Marketing v. Bolinao Security</em>).</li>
<li><strong>Graduated scale under Art. 71 (Q29):</strong> One degree below <em>arresto mayor</em> is <strong>destierro</strong>, followed by <em>arresto menor</em> (<em>Uy Chin Hua v. Dinglasan</em>).</li>
</ul>`,
		mcq: `<ul>
<li><strong>Pecuniary liabilities (Art. 38) vs. Civil liability (Art. 104) (Q40):</strong> Art. 38 covers reparation, indemnification, fine, and costs. <strong>Restitution</strong> is civil liability under Arts. 104–105, not a pecuniary liability under Art. 38.</li>
<li><strong>Minority thresholds under R.A. 9344 as amended by R.A. 10630 (Q41, Q54):</strong> 15 and below = completely exempt. Above 15 and below 18 = exempt unless acting with discernment (if with discernment, liable with privileged mitigation, diversion, and suspended sentence).</li>
<li><strong>Watch/Phone Robbery Hypotheticals (Q44, Q46, Q48):</strong> Reyes (p. 88) treats pointing a gun at a victim who forgot his watch/phone as <strong>attempted robbery</strong>; the original quiz key marked <strong>impossible crime</strong> (or "none of the above" in Q48).</li>
<li><strong>Loose Firearm (R.A. 10591, Sec. 29):</strong> When inherent in the crime (e.g., homicide or murder), use of an unlicensed firearm is a <strong>special aggravating circumstance</strong> that cannot be offset by ordinary mitigating circumstances, fixing the penalty in its <strong>maximum period</strong> (<em>Palaganas v. People</em>).</li>
</ul>`,
		problems: `<ul>
<li><strong>Probation on Appeal (Q60a vs. Q60b — R.A. 10707 &amp; <em>Colinares v. People</em>):</strong> If the original sentence was already probationable (e.g., 6 years) and the accused appealed, he is <strong>barred</strong> from probation. If the original sentence was non-probationable (e.g., 8–14 years) and the appellate court lowered it to a probationable penalty (e.g., 4 years), he <strong>may apply</strong> for probation before the modified decision becomes final.</li>
<li><strong>ISLAW Offsetting (Q62):</strong> Apply privileged mitigating circumstances <strong>first</strong> to lower the degree (they can never be offset by aggravating circumstances). Then offset ordinary mitigating against generic aggravating circumstances to find the period of the maximum term. Take the minimum term from the penalty one degree lower than the lowered penalty.</li>
<li><strong>Three-Fold Rule (Q63 — Art. 70):</strong> When serving multiple penalties, the maximum duration shall not exceed <strong>three times</strong> the most severe penalty imposed (3 × 11 days = 33 days).</li>
</ul>`
	},
	studyGuideHtml: `<div class="sg-notes">
<h2 class="sg-h2" id="part-1-corrected-quiz">Part 1 — Crimlaw Quiz: Corrected Answer Key</h2>
<p class="sg-intro">Checked against Reyes (<em>Revised Penal Code, Book One</em>), the Condensed Reviewer, and Supreme Court jurisprudence. Items where the original answer key was wrong, missing, or needs verification with your professor are explicitly flagged.</p>

<h3 class="sg-h3" id="quiz-true-or-false">True or False (Questions 1–38)</h3>
<div class="table-scroll"><table class="sg-table">
  <thead>
    <tr><th>#</th><th>Question</th><th>Correct Answer &amp; Explanation</th></tr>
  </thead>
  <tbody>
    <tr>
      <td class="art">1</td>
      <td>Under the positivist theory of criminal law, crime is a natural and social phenomenon.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> Positivist school: crime is a natural and social phenomenon; the offender is a product of social and environmental circumstances.</td>
    </tr>
    <tr>
      <td class="art">2</td>
      <td>AA, as principal by induction, commanded BB and CC to kill DD. Then BB and CC killed DD by treachery to insure its execution without prior knowledge of AA. Ergo, the aggravating circumstance of treachery should not be applied to all the accused even if "the act of one is the act of all."</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> Art. 62(4): aggravating circumstances consisting in the material execution of the act or in the means employed affect only those who had knowledge of them at the time of execution or cooperation therein.</td>
    </tr>
    <tr>
      <td class="art">3</td>
      <td>Correctional penalties, except <em>arresto mayor</em>, will be prescribed in 15 years.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> Correctional penalties prescribe in <strong>10 years</strong>, not 15; <em>arresto mayor</em> prescribes in <strong>5 years</strong> (Art. 90 for crimes; Art. 92 for penalties). 15 years is for afflictive penalties.</td>
    </tr>
    <tr>
      <td class="art">4</td>
      <td>Is malaria a mitigating circumstance?</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE ("Malignant" malaria).</strong> Ordinary malaria is not mitigating. Malignant malaria that affects the nervous system and causes insanity-like delirium is <strong>exempting</strong> (<em>People v. Lacena</em>; Reyes pp. 223–224).</td>
    </tr>
    <tr>
      <td class="art">5</td>
      <td>Ignorance of the law excuses no one from compliance therewith; however, ignorance or mistake of facts relieves the accused of criminal liability.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> Honest mistake of fact (<em>ignorantia facti excusat</em>) relieves criminal liability by negating criminal intent; ignorance of the law (<em>ignorantia legis non excusat</em>) does not.</td>
    </tr>
    <tr>
      <td class="art">6</td>
      <td>When a Philippine vessel is within the territory of a foreign country, crimes committed on board are subject to the laws of that foreign country.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> While the RPC generally applies to offenses committed on a Philippine ship or airship (registered with MARINA/Bureau of Customs) outside Philippine jurisdiction, when the vessel is within the territory of a foreign country, the laws of that foreign country govern (Reyes, p. 25).</td>
    </tr>
    <tr>
      <td class="art">7</td>
      <td>In vindication, the offended party must have done a grave offense, while in provocation, the cause that brought about the provocation need not be a grave offense. <em>(Original: "Vindication the offended must has not done grave offense while provocation the cause that brought about the provocation need not")</em></td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> In vindication (Art. 13[5]), the offended party must have committed a grave offense; in sufficient provocation (Art. 13[4]), the cause need not be a grave offense.</td>
    </tr>
    <tr>
      <td class="art">8</td>
      <td>Formal crimes are consummated with one instant act.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> Formal crimes are consummated by a single act, with no attempted or frustrated stage.</td>
    </tr>
    <tr>
      <td class="art">9</td>
      <td>Penal laws are generally not given retroactive effect, EVEN IF IT IS ADVANTAGEOUS TO THE ACCUSED.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> Art. 22: penal laws have retroactive effect when favorable to the accused who is not a habitual delinquent.</td>
    </tr>
    <tr>
      <td class="art">10</td>
      <td><em>Ex post facto</em> means "retroactivity makes the act a crime."</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> An <em>ex post facto</em> law makes criminal an act that was innocent when done.</td>
    </tr>
    <tr>
      <td class="art">11</td>
      <td>The test in reasonableness of means employed in self-defense is that imperfect equality of weapon used by the accused and the aggressor is allowed.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> The test is rational equivalence of the means, not perfect equality of weapons.</td>
    </tr>
    <tr>
      <td class="art">12</td>
      <td>Does an <em>ex post facto</em> law aggravate the penalty?</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> An <em>ex post facto</em> law includes one that aggravates a crime or changes the punishment to inflict a greater penalty than that annexed when committed.</td>
    </tr>
    <tr>
      <td class="art">13</td>
      <td>Should the principal of a frustrated felony be given a penalty 2 degrees lower?</td>
      <td><span class="sg-dot" style="background:var(--blue)"></span><strong>FALSE (Added answer).</strong> The principal in a frustrated felony gets the penalty <strong>one degree lower</strong> than the consummated felony (Art. 50). Two degrees lower is for the principal in an attempted felony (Art. 51) or the accomplice in a frustrated felony (Art. 54).</td>
    </tr>
    <tr>
      <td class="art">14</td>
      <td>Discernment of children means they misunderstood the wrongfulness of the act.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> Discernment is the mental capacity to understand the difference between right and wrong and the consequences of the act.</td>
    </tr>
    <tr>
      <td class="art">15</td>
      <td><em>Actus Reus</em> means criminal act. <em>Mens Rea</em> means guilty mind.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong></td>
    </tr>
    <tr>
      <td class="art">16</td>
      <td>A first-time recidivist can avail of the Indeterminate Sentence Law (ISLAW), but a habitual delinquent cannot.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> Sec. 2 of the ISLAW excludes habitual delinquents, not recidivists.</td>
    </tr>
    <tr>
      <td class="art">17</td>
      <td><em>Dolo</em> is required in special laws.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> Intent is generally immaterial in <em>mala prohibita</em>; the prohibited act need only be done voluntarily.</td>
    </tr>
    <tr>
      <td class="art">18</td>
      <td>The penalty next lower than the one prescribed by law for a frustrated felony shall be imposed on the accomplice for the commission of a frustrated felony.</td>
      <td><span class="sg-dot" style="background:var(--red)"></span><strong>TRUE (Corrected from key's False).</strong> Art. 54: the accomplice in a frustrated felony gets the penalty next lower than that prescribed for the frustrated felony (i.e., two degrees below the consummated felony).</td>
    </tr>
    <tr>
      <td class="art">19</td>
      <td><em>Mala in se</em> is a crime of evil and <em>mala prohibita</em> is prohibited by law.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong></td>
    </tr>
    <tr>
      <td class="art">20</td>
      <td>A person is not obligated to satisfy his civil liability resulting from crime if his sentence was commuted.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> Art. 113: the offender continues to be obliged to satisfy civil liability despite commutation, pardon, amnesty, or service of sentence.</td>
    </tr>
    <tr>
      <td class="art">21</td>
      <td>There is no attempted nor frustrated stage on light felonies committed against persons.</td>
      <td><span class="sg-dot" style="background:var(--red)"></span><strong>FALSE (Corrected from key's True).</strong> Art. 7: light felonies are punishable only when consummated, <strong>EXCEPT</strong> those committed against persons or property (Reyes, p. 123). <em>Note:</em> The original key marked True because slight physical injuries is punished by its result and thus has no attempted stage; verify which rule your professor emphasizes.</td>
    </tr>
    <tr>
      <td class="art">22</td>
      <td>Reparation is under civil liability.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> Art. 104: civil liability includes restitution, reparation of the damage caused, and indemnification for consequential damages.</td>
    </tr>
    <tr>
      <td class="art">23</td>
      <td>Is an employer of a hotel establishment subsidiarily liable if his security guard commits robbery in a 7-Eleven beside the hotel while in the performance of his duty?</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> Art. 103 requires that the crime be committed "in the discharge of his duties," not merely "while in the discharge" (during duty hours). A guard who robs a neighboring establishment does not make his employer subsidiarily liable (<em>Baza Marketing v. Bolinao Security</em>; Reyes, p. 905).</td>
    </tr>
    <tr>
      <td class="art">24</td>
      <td><em>Nullum crimen</em> means "without law no punishment."</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> <em>Nullum crimen</em> = "no crime"; <em>nulla poena</em> = "no penalty/punishment."</td>
    </tr>
    <tr>
      <td class="art">25</td>
      <td><em>In dubio pro reo</em> is for the favor of the accused, irrespective of the crimes committed.</td>
      <td><span class="sg-dot" style="background:var(--orange)"></span><strong>TRUE (Key marked False — check with professor).</strong> <em>In dubio pro reo</em> applies to every crime regardless of gravity whenever there is genuine doubt on the facts or an ambiguous penal statute, though it does not apply where the law and evidence are clear.</td>
    </tr>
    <tr>
      <td class="art">26</td>
      <td><em>Nulla poena sine lege</em> means "no crime without law."</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> It means "no penalty/punishment without law."</td>
    </tr>
    <tr>
      <td class="art">27</td>
      <td>Philippine criminal law follows the principle of <em>Nullum Crimen Sine Poena Lege</em> / <em>Nullum Crimen, Nulla Poena Sine Lege</em>.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> Art. 21 RPC and the constitutional ban on <em>ex post facto</em> laws.</td>
    </tr>
    <tr>
      <td class="art">28</td>
      <td><em>Mala in se</em> are generally felonies and offenses penalized by special laws.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> <em>Mala in se</em> are generally felonies under the RPC; <em>mala prohibita</em> are generally offenses under special laws.</td>
    </tr>
    <tr>
      <td class="art">29</td>
      <td>Is one degree below <em>arresto mayor</em> <em>destierro</em>?</td>
      <td><span class="sg-dot" style="background:var(--red)"></span><strong>TRUE (Corrected from key's False).</strong> Under the Art. 71 graduated scale: <em>arresto mayor</em>, then <em>destierro</em>, then <em>arresto menor</em>. <em>Destierro</em> is the penalty one degree below <em>arresto mayor</em> (<em>Uy Chin Hua v. Dinglasan</em>; Reyes, p. 758).</td>
    </tr>
    <tr>
      <td class="art">30</td>
      <td>AA wanted to kill his father, but due to the dark of the night, by mistake, killed his brother. Thus, AA is entitled to the mitigating circumstance of <em>praeter intentionem</em>.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE (<em>Error in personae</em>).</strong> <em>Praeter intentionem</em> requires a resulting injury graver than intended. Here it is mistake in identity (<em>error in personae</em>, Art. 49).</td>
    </tr>
    <tr>
      <td class="art">31</td>
      <td>A person with somnambulism cannot invoke it as a mitigating circumstance.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> Somnambulism is not mitigating; it is <strong>exempting</strong> (absence of voluntariness/intelligence) when clearly proven (<em>People v. Gimena</em>; <em>U.S. v. Odicta</em>; Reyes, p. 223).</td>
    </tr>
    <tr>
      <td class="art">32</td>
      <td>The offender knows the combination to the safe, opens it, but it is empty ("walay sulod"). Is it attempted or frustrated theft?</td>
      <td><span class="sg-dot" style="background:var(--orange)"></span><strong>FALSE.</strong> It is neither attempted nor frustrated theft; it is an <strong>impossible crime</strong> (Art. 4[2]; <em>Intod v. CA</em>) because the safe was empty.</td>
    </tr>
    <tr>
      <td class="art">33</td>
      <td>A 180 kg man who attacks a 70 kg woman automatically incurs the aggravating circumstance of "abuse of superior strength."</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> Abuse of superior strength requires deliberate use of excessive force out of proportion to the victim's means of defense, not mere physical disparity.</td>
    </tr>
    <tr>
      <td class="art">34</td>
      <td>Do formal crimes have attempted and frustrated stages?</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> Formal crimes are consummated in one instant by a single act.</td>
    </tr>
    <tr>
      <td class="art">35</td>
      <td>Jewelry was stolen, and a third party bought it in good faith. Can the owner claim/recover their jewelry from the buyer in good faith?</td>
      <td><span class="sg-dot" style="background:var(--red)"></span><strong>TRUE (Corrected from key's False).</strong> Under Art. 105 RPC and Art. 559 Civil Code, the owner can recover stolen property even from a third-party buyer in good faith (who may then proceed against the seller). The only exception is when bought at a public sale, where the owner must reimburse the price paid (Reyes, pp. 913–914).</td>
    </tr>
    <tr>
      <td class="art">36</td>
      <td>Ignominy is one of moral suffering.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>TRUE.</strong> Ignominy (Art. 14[17]) pertains to moral suffering/humiliation; cruelty (Art. 14[21]) pertains to physical suffering.</td>
    </tr>
    <tr>
      <td class="art">37</td>
      <td>Does indemnity refer to crimes against property?</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE (Against persons).</strong> Indemnification for consequential damages (Art. 107) generally refers to crimes against persons; reparation (Art. 106) refers to crimes against property (Reyes, p. 920).</td>
    </tr>
    <tr>
      <td class="art">38</td>
      <td><em>Praeter intentionem</em> is when one mistakenly commits a crime intended for another person.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>FALSE.</strong> That describes <em>error in personae</em>. <em>Praeter intentionem</em> is a result graver than what was intended.</td>
    </tr>
  </tbody>
</table></div>

<h3 class="sg-h3" id="quiz-multiple-choice">Multiple Choice (Questions 39–56 &amp; Loose Firearm Rules)</h3>
<div class="table-scroll"><table class="sg-table">
  <thead>
    <tr><th>#</th><th>Question &amp; Options</th><th>Correct Answer &amp; Explanation</th></tr>
  </thead>
  <tbody>
    <tr>
      <td class="art">39</td>
      <td>A person who, at the time of his trial for one crime, shall have been previously convicted by final judgment of another crime embraced in the same title of this Code.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>RECIDIVISM.</strong> Art. 14(9), RPC.</td>
    </tr>
    <tr>
      <td class="art">40</td>
      <td>Which is not included in pecuniary liabilities?<br><em>Options:</em> Fine, Costs of Proceedings, Indemnification of consequential damages, Restitution</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>RESTITUTION.</strong> Art. 38 lists reparation, indemnification of consequential damages, fine, and costs. Restitution is civil liability under Arts. 104–105.</td>
    </tr>
    <tr>
      <td class="art">41</td>
      <td>Is a 16-year-old liable for committing serious physical injuries?</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>LIABLE WITH CONDITIONS (if acting with discernment).</strong> Under R.A. 9344 as amended by R.A. 10630, a child above 15 and under 18 is exempt unless acting with discernment. Privileged mitigation (Art. 68[2]), diversion, and suspended sentence may apply.</td>
    </tr>
    <tr>
      <td class="art">42</td>
      <td>Which is not included as a mitigating circumstance?<br>a. Vindication · b. Passion or Obfuscation · c. Sufficient Provocation · d. Incomplete Justifying Circumstance · e. Illness Depriving/diminishing of Willpower</td>
      <td><span class="sg-dot" style="background:var(--orange)"></span><strong>All five are mitigating if (e) says "diminishing" willpower (Art. 13).</strong> However, if choice (e) says <strong>"depriving"</strong> of willpower/intelligence, then <strong>(e)</strong> is the odd one out because complete deprivation is <strong>exempting</strong> (Art. 12), not mitigating.</td>
    </tr>
    <tr>
      <td class="art">43</td>
      <td>In criminal law, the primary function of punishment is to prevent potential and actual wrongdoers based on what theory?</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>UTILITARIAN THEORY.</strong></td>
    </tr>
    <tr>
      <td class="art">44</td>
      <td>Mr. BB pointed his gun at Ms. CC and asked for her phone, but she did not have it with her because her sister borrowed it. What was the crime committed?</td>
      <td><span class="sg-dot" style="background:var(--red)"></span><strong>ATTEMPTED ROBBERY (per Reyes, p. 88)</strong> / <em>Original Key: Impossible Crime</em>.<br>Under Reyes (Art. 4, watch example), pointing a gun at B to rob him when B forgot the watch is <strong>attempted robbery</strong> with intimidation, not an impossible crime, because the object was missing by accident (not inherent impossibility under Art. 6, par. 3) and pointing the gun is already grave threats (Art. 282), violating Art. 4(2)'s requirement that the act not constitute another RPC offense. <em>Check with your professor which answer he grades by.</em></td>
    </tr>
    <tr>
      <td class="art">45</td>
      <td><em>Pro reo</em> principle relates to:<br>A. Retroactivity · B. Repeal/amendments · C. Suppletory application · D. Extraterritoriality · E. In case of doubt for the accused · F. None</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>E. IN CASE OF DOUBT FOR THE ACCUSED.</strong> Doubt in the law or evidence is resolved in favor of the accused.</td>
    </tr>
    <tr>
      <td class="art">46</td>
      <td>A wants to rob B of his Rolex watch. Upon meeting, A pointed his gun at B, but B was not wearing his watch that day. Is there a crime committed?<br>A. Impossible crime · B. Attempted robbery · C. Frustrated robbery · D. None of the above</td>
      <td><span class="sg-dot" style="background:var(--red)"></span><strong>B. ATTEMPTED ROBBERY (per Reyes, p. 88)</strong> / <em>Original Key: G. Impossible Crime</em>.<br>This is Reyes' exact textbook example. See explanation in Q44.</td>
    </tr>
    <tr>
      <td class="art">47</td>
      <td>Budoy may avail of a mitigating circumstance because he was threatened his father's house would be burned if he didn't kill his father.<br>A. Budoy is under exempting from uncontrollable fear, not liable · B. Budoy is not under exempting from uncontrollable fear, but criminally liable for killing · C. Boboy is not under exempting circumstance, but criminally liable for killing his father · D. None of the above</td>
      <td><span class="sg-dot" style="background:var(--blue)"></span><strong>B (Added answer).</strong> Art. 12(6) requires a threat of an evil equal to or greater than the evil committed. Burning a house is a lesser evil than killing one's father (parricide), so Budoy is not exempt and is criminally liable, but gets an incomplete exempting / ordinary mitigating circumstance under Art. 13(1) (Reyes, p. 260). Option C names "Boboy," so B is the exact match.</td>
    </tr>
    <tr>
      <td class="art">48</td>
      <td>Mr. CC demanded Mr. BB's phone at gunpoint, but the phone was not with him because his wife borrowed it.<br>A. Attempted robbery · B. Frustrated robbery · C. None of the above</td>
      <td><span class="sg-dot" style="background:var(--red)"></span><strong>A. ATTEMPTED ROBBERY (per Reyes)</strong> / <em>Original Key: C. None of the above (implying impossible crime)</em>. Same rule as Q44 and Q46.</td>
    </tr>
    <tr>
      <td class="art">49</td>
      <td>The house burned only 10%. What stage of arson is it?<br>A. Frustrated Arson · B. Consummated Arson · C. Attempted Arson · D. None of the Above</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>B. CONSUMMATED ARSON.</strong> Arson is consummated even if only a small portion of the house is burned.</td>
    </tr>
    <tr>
      <td class="art">50</td>
      <td>Which does not belong in total extinction of criminal liability?<br>A. Death of the accused · B. Recognizance · C. Prescription of the crime · D. Amnesty · E. None</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>B. RECOGNIZANCE.</strong> Art. 89 grounds are death, service of sentence, amnesty, absolute pardon, prescription of crime, prescription of penalty, and marriage of the offended woman (Art. 344).</td>
    </tr>
    <tr>
      <td class="art">51</td>
      <td>BB committed rape against CC (under 12 years old), with a penalty of <em>reclusion perpetua</em> (20–40 years), attended by voluntary surrender. What is the correct penalty?<br>a. Reclusion p max · b. Reclusion p med · c. Reclusion p min · d. None of the choices</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>d. NONE OF THE CHOICES.</strong> <em>Reclusion perpetua</em> is a single indivisible penalty (Art. 63) and has no periods, so modifying circumstances do not alter it (<em>People v. Gamboa</em>; <em>People v. Lucas</em>).</td>
    </tr>
    <tr>
      <td class="art">52</td>
      <td>Mr. B drove without a driver's license. What did he commit?<br>A) Felony · B) Offense · C) Infraction · D) None of the above</td>
      <td><span class="sg-dot" style="background:var(--red)"></span><strong>B) OFFENSE (per Reyes, Art. 3)</strong> / <em>Original Key: C) Infraction</em>.<br>Driving without a license violates a special national law (R.A. 4136). A felony violates the RPC; an offense violates a special law; an infraction violates a local ordinance.</td>
    </tr>
    <tr>
      <td class="art">53</td>
      <td>AA shot a man who he thought was stealing palay from his land after firing a warning shot. The shot resulted in the death of the victim.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>LIABLE FOR MURDER (<em>People v. Apolinar</em>).</strong> Held: Defense of property is not as important as the right to life, and defense of property can be invoked as a justifying circumstance ONLY when it is coupled with an attack on the person of one entrusted with said property. Life is more important than property; therefore, liable for murder.</td>
    </tr>
    <tr>
      <td class="art">54</td>
      <td>A 15-year-old committed rape. What type of mitigating circumstance can be invoked?</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>NONE OF THE CHOICES — completely EXEMPT from criminal liability.</strong> Under R.A. 9344 as amended by R.A. 10630, a child 15 years old or under is completely exempt (intervention program applies).</td>
    </tr>
    <tr>
      <td class="art">55</td>
      <td>Mistake of the blow is:<br>A. Aberratio Ictus · B. Praeter Intentionem · C. Error in personae · D. None of the above</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>A. ABERRATIO ICTUS.</strong></td>
    </tr>
    <tr>
      <td class="art">56</td>
      <td>Mistake in identity is:<br>A. Aberratio Ictus · B. Praeter Intentionem · C. Error in personae</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>C. ERROR IN PERSONAE.</strong></td>
    </tr>
    <tr>
      <td class="art">56a</td>
      <td>AA shot BB with the use of an unlicensed firearm.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>Special aggravating circumstance — always MAXIMUM.</strong> (R.A. 10591, Sec. 29; <em>Palaganas v. People</em>). Cannot be offset by ordinary mitigating circumstances.</td>
    </tr>
    <tr>
      <td class="art">56b</td>
      <td>Loose firearm (when inherent in the crime).</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>Aggravating circumstance</strong> (R.A. 10591, Sec. 29).</td>
    </tr>
  </tbody>
</table></div>

<h3 class="sg-h3" id="quiz-essay-problems">Essay &amp; Application Problems (Questions 57–63)</h3>
<div class="table-scroll"><table class="sg-table">
  <thead>
    <tr><th>#</th><th>Problem</th><th>Model Answer &amp; Legal Basis</th></tr>
  </thead>
  <tbody>
    <tr>
      <td class="art">57</td>
      <td>A crime of homicide is committed with a prescribed penalty of <em>reclusion temporal</em>, without aggravating or mitigating circumstances. Applying the Indeterminate Sentence Law, what is the maximum penalty?</td>
      <td><span class="sg-dot" style="background:var(--purple)"></span><strong>Reclusion Temporal Medium</strong> (14 yrs 8 mos 1 day to 17 yrs 4 mos). The minimum term is anywhere within <em>prision mayor</em> (6 yrs 1 day to 12 yrs). (Art. 64[1], RPC; Sec. 1, Act No. 4103).</td>
    </tr>
    <tr>
      <td class="art">58</td>
      <td>Mr. Hopeless committed suicide by jumping and fell onto his wife, causing her death. Is he liable for parricide?</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>No, Mr. Hopeless is not liable for parricide.</strong> Under Art. 4(1) RPC, liability for a wrongful act different from that intended requires that the offender be "committing a felony." Attempting suicide is not a felony under the RPC (Art. 253 punishes only giving assistance to suicide). (Reyes, pp. 68–69).</td>
    </tr>
    <tr>
      <td class="art">59</td>
      <td>A wife intended to use powdered rat poison to kill her husband, but she mistakenly used Ajinomoto ("powder rat poison pero ajinomoto iya na gamit"). What crime is the wife liable for?</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span><strong>Impossible crime (employment of ineffectual means).</strong> Art. 4(2), RPC; Reyes, p. 87 (mistaking sugar for arsenic).</td>
    </tr>
    <tr>
      <td class="art">60(a)</td>
      <td>Mr. CC was convicted of theft by a first-level court and sentenced to 6 years of <em>prision correccional</em> maximum. He appealed to the second-level court, which affirmed the sentence <em>in toto</em>. Can he apply for probation?</td>
      <td><span class="sg-dot" style="background:var(--red)"></span><strong>NO.</strong> Under Sec. 4 of P.D. 968 as amended by R.A. 10707, no application for probation shall be entertained if the defendant has perfected an appeal from the judgment of conviction. Because his original 6-year penalty was already probationable and he chose to appeal, the exception does not apply.</td>
    </tr>
    <tr>
      <td class="art">60(b)</td>
      <td>A was convicted of frustrated murder by a second-level court and sentenced to 8 to 14 years. He appealed to the Court of Appeals, which modified the penalty to 4 years of <em>prision correccional</em>. Can he apply for probation?</td>
      <td><span class="sg-dot" style="background:var(--blue)"></span><strong>YES.</strong> Under R.A. 10707 and <em>Colinares v. People</em> (G.R. No. 182748, Dec. 13, 2011), when an appeal modifies a non-probationable penalty into a probationable one (not exceeding 6 years), the accused may apply for probation based on the modified decision before it becomes final, in the trial court that convicted him.</td>
    </tr>
    <tr>
      <td class="art">61</td>
      <td>Explain the Flag State Rule.</td>
      <td><span class="sg-dot" style="background:var(--yellow)"></span>The <strong>flag state rule</strong> means that a ship on the high seas is governed by the laws of the country whose flag it flies, because that country has jurisdiction and control over the vessel. The flag of the ship is the nationality under which it is registered.</td>
    </tr>
    <tr>
      <td class="art">62</td>
      <td>Homicide with 1 aggravating circumstance, 2 privileged mitigating circumstances, and 1 ordinary mitigating circumstance — what are the periods?</td>
      <td><span class="sg-dot" style="background:var(--purple)"></span>Homicide is <em>reclusion temporal</em>. Two privileged mitigating circumstances lower it by two degrees: <em>prision mayor</em>, then <strong><em>prision correccional</em></strong>. The 1 aggravating and 1 ordinary mitigating circumstance offset each other (Art. 64[4]), fixing the <strong>maximum term</strong> at <strong><em>prision correccional</em> medium</strong> (2 yrs 4 mos 1 day to 4 yrs 2 mos). The <strong>minimum term</strong> comes from the penalty next lower, <strong><em>arresto mayor</em></strong> (1 mo 1 day to 6 mos).</td>
    </tr>
    <tr>
      <td class="art">63</td>
      <td>RRR was convicted of 11 counts of unjust vexation and sentenced to 11 days of <em>arresto menor</em> per count. How many days of imprisonment shall be imposed, and why?</td>
      <td><span class="sg-dot" style="background:var(--purple)"></span><strong>33 days — Three-Fold Rule (Art. 70, RPC).</strong> The maximum duration of the convict's sentence shall not be more than three-fold the length of time corresponding to the most severe of the penalties imposed (3 × 11 days = 33 days).</td>
    </tr>
  </tbody>
</table></div>
</div>

<h2 class="sg-h2" id="part-2-islaw-guide">Part 2 — Indeterminate Sentence Law (ISLAW) Complete Guide</h2>
<p class="sg-intro">Act No. 4103 as amended by Act No. 4225 (Secs. 1–8), based on Reyes (RPC Book 1, pp. 772–794) and Supreme Court decisions. Running example: <strong>Homicide</strong>, punishable by <em>reclusion temporal</em> (RT, 12 yrs 1 day to 20 yrs), where the penalty next lower is <em>prision mayor</em> (PM, 6 yrs 1 day to 12 yrs).</p>

<h3 class="sg-h3" id="islaw-rule-in-one-box">1 · The Rule in One Box</h3>
<div class="case-card">
  <div class="cname">Offense under the Revised Penal Code (Sec. 1)</div>
  <div class="cdoc">
    <strong>MAXIMUM term</strong> = the penalty that could properly be imposed under the RPC rules, taking into account the attending circumstances (Arts. 46, 48, 50–57, 61, 62 except par. 5, 64, 65, 68, 69, 71).<br>
    <strong>MINIMUM term</strong> = anywhere within the range of the <strong>penalty next lower</strong> to that prescribed by the Code for the offense. The court has wide discretion and may pick any point in that range, without regard to its periods. Ordinary mitigating and aggravating circumstances are considered only for the maximum term (Reyes, p. 776; <em>People v. De Joya</em>; <em>People v. Gabres</em>). The minimum cannot be in the same period and degree as the maximum (Reyes, p. 775).
  </div>
</div>
<div class="case-card">
  <div class="cname">Offense under a Special Law (Sec. 1)</div>
  <div class="cdoc">
    <strong>MAXIMUM term</strong> must not exceed the maximum fixed by the special law, and <strong>MINIMUM term</strong> must not be less than the minimum fixed by the special law.
  </div>
</div>
<div class="case-card">
  <div class="cname">Exception to the Minimum Rule (Privileged Mitigating or Art. 64[5])</div>
  <div class="cdoc">
    When a privileged mitigating circumstance, or two or more ordinary mitigating circumstances with no aggravating circumstance (Art. 64[5]), lowers the penalty by a degree, the <strong>lowered penalty is the starting point</strong>, and the minimum term is taken from the penalty next lower from that lowered penalty (Reyes, pp. 782–783, 785, 788; <em>People v. Gonzales</em>).
  </div>
</div>
<div class="case-card">
  <div class="cname">Purpose of the ISLAW (Secs. 5 &amp; 8)</div>
  <div class="cdoc">
    After serving the minimum term, the Board of Pardons and Parole may release the prisoner on parole (Sec. 5). If he violates parole, he is rearrested to serve the unexpired portion of the maximum term (Sec. 8).
  </div>
</div>

<h3 class="sg-h3" id="islaw-duration-table">2 · Duration of Each Period (Arts. 76, 65 &amp; 71)</h3>
<div class="table-scroll"><table class="sg-table">
  <thead>
    <tr><th>Penalty</th><th>Full Duration</th><th>Minimum Period</th><th>Medium Period</th><th>Maximum Period</th></tr>
  </thead>
  <tbody>
    <tr>
      <td class="art"><span class="sg-dot" style="background:var(--purple)"></span>Reclusion temporal (RT)</td>
      <td>12 y 1 d – 20 y</td>
      <td>12 y 1 d – 14 y 8 m</td>
      <td>14 y 8 m 1 d – 17 y 4 m</td>
      <td>17 y 4 m 1 d – 20 y</td>
    </tr>
    <tr>
      <td class="art"><span class="sg-dot" style="background:var(--purple)"></span>Prision mayor (PM)</td>
      <td>6 y 1 d – 12 y</td>
      <td>6 y 1 d – 8 y</td>
      <td>8 y 1 d – 10 y</td>
      <td>10 y 1 d – 12 y</td>
    </tr>
    <tr>
      <td class="art"><span class="sg-dot" style="background:var(--purple)"></span>Prision correccional (PC) &amp; Destierro</td>
      <td>6 m 1 d – 6 y</td>
      <td>6 m 1 d – 2 y 4 m</td>
      <td>2 y 4 m 1 d – 4 y 2 m</td>
      <td>4 y 2 m 1 d – 6 y</td>
    </tr>
    <tr>
      <td class="art"><span class="sg-dot" style="background:var(--purple)"></span>Arresto mayor (AM)</td>
      <td>1 m 1 d – 6 m</td>
      <td>1 m 1 d – 2 m</td>
      <td>2 m 1 d – 4 m</td>
      <td>4 m 1 d – 6 m</td>
    </tr>
    <tr>
      <td class="art"><span class="sg-dot" style="background:var(--purple)"></span>Arresto menor</td>
      <td>1 – 30 days</td>
      <td>1 – 10 days</td>
      <td>11 – 20 days</td>
      <td>21 – 30 days</td>
    </tr>
    <tr>
      <td class="art"><span class="sg-dot" style="background:var(--yellow)"></span>Reclusion perpetua (indivisible)</td>
      <td>20 y 1 d – 40 y</td>
      <td colspan="3">No periods. Art. 63 applies (imposed regardless of modifying circumstances).</td>
    </tr>
    <tr>
      <td class="art"><span class="sg-dot" style="background:var(--blue)"></span>PM max to RT med (Art. 61[3], murder lowered 1 degree)</td>
      <td>10 y 1 d – 17 y 4 m</td>
      <td>10 y 1 d – 12 y 5 m 10 d</td>
      <td>12 y 5 m 11 d – 14 y 10 m 20 d</td>
      <td>14 y 10 m 21 d – 17 y 4 m</td>
    </tr>
  </tbody>
</table></div>
<div class="exoex-box">
  <span class="exoex-label">Graduated Scale of Penalties (Art. 71, RPC)</span>
  1. Death &rarr; 2. <em>Reclusion perpetua</em> &rarr; 3. <em>Reclusion temporal</em> &rarr; 4. <em>Prision mayor</em> &rarr; 5. <em>Prision correccional</em> &rarr; 6. <em>Arresto mayor</em> &rarr; 7. <em>Destierro</em> &rarr; 8. <em>Arresto menor</em> &rarr; 9. Public censure &rarr; 10. Fine.
</div>

<h3 class="sg-h3" id="islaw-step-by-step">3 · Step-by-Step Computation Method</h3>
<div class="table-scroll"><table class="sg-table">
  <thead>
    <tr><th>Step</th><th>Rule</th></tr>
  </thead>
  <tbody>
    <tr><td class="art">Step 1</td><td>Find the penalty prescribed for the felony (Art. 46). Note the stage of execution and degree of participation (Arts. 50–57) and whether it is a complex crime (Art. 48).</td></tr>
    <tr><td class="art">Step 2</td><td>Apply <strong>privileged mitigating circumstances</strong> first (Arts. 68, 69, etc.). They lower the penalty by one or more degrees and <strong>cannot be offset</strong> by any aggravating circumstance.</td></tr>
    <tr><td class="art">Step 3</td><td>Apply <strong>Art. 64</strong> to the penalty as lowered, using only the ordinary mitigating and generic aggravating circumstances. This gives the period for the maximum term.</td></tr>
    <tr><td class="art">Step 4</td><td><strong>Maximum term</strong> = the penalty and period resulting from Step 3.</td></tr>
    <tr><td class="art">Step 5</td><td><strong>Minimum term</strong> = anywhere within the range of the penalty next lower to the penalty prescribed for the offense. If Step 2 or Art. 64(5) lowered the penalty by degree(s), start from the lowered penalty and go one degree lower.</td></tr>
    <tr><td class="art">Step 6</td><td>Verify that the Indeterminate Sentence Law applies (check Sec. 2 disqualifications).</td></tr>
  </tbody>
</table></div>

<h3 class="sg-h3" id="islaw-ordinary-aggravating">4 · Ordinary Mitigating &amp; Aggravating Circumstances Only (Scenarios A1–A13)</h3>
<p class="sg-intro">Running example: Homicide (prescribed penalty: <em>Reclusion Temporal</em> [RT]; next lower: <em>Prision Mayor</em> [PM]).</p>
<div class="table-scroll"><table class="sg-table">
  <thead>
    <tr><th>#</th><th>Scenario</th><th>Maximum Term</th><th>Minimum Term</th></tr>
  </thead>
  <tbody>
    <tr><td class="art">A1</td><td>No mitigating, no aggravating (Art. 64[1])</td><td>RT medium: 14 y 8 m 1 d – 17 y 4 m</td><td>PM: any point from 6 y 1 d to 12 y</td></tr>
    <tr><td class="art">A2</td><td>One ordinary mitigating, no aggravating (Art. 64[2])</td><td>RT minimum: 12 y 1 d – 14 y 8 m</td><td>PM (any)</td></tr>
    <tr><td class="art">A3</td><td>One or more aggravating, no mitigating (Art. 64[3]). Whether 2, 5, or 100 aggravating, the penalty stays in the maximum period and is never raised by a degree.</td><td>RT maximum: 17 y 4 m 1 d – 20 y</td><td>PM (any)</td></tr>
    <tr><td class="art">A4</td><td>1 mitigating vs. 1 aggravating: they offset each other (Art. 64[4])</td><td>RT medium</td><td>PM (any)</td></tr>
    <tr><td class="art">A5</td><td>2 mitigating vs. 1 aggravating: 1 mitigating left (e.g., voluntary surrender + plea vs. nighttime)</td><td>RT minimum</td><td>PM (any)</td></tr>
    <tr><td class="art">A6</td><td>1 mitigating vs. 2 aggravating: 1 aggravating left</td><td>RT maximum</td><td>PM (any)</td></tr>
    <tr><td class="art">A7</td><td>2 vs. 2, or any equal number: all offset</td><td>RT medium</td><td>PM (any)</td></tr>
    <tr><td class="art">A8</td><td><strong>2 or more mitigating left, no aggravating (Art. 64[5]).</strong> Penalty is lowered <strong>one degree only</strong>, to PM.</td><td>In PM. Reyes (p. 788, <em>People v. Soriano</em>) puts it in <strong>PM medium</strong> (8 y 1 d – 10 y) because the mitigating circumstances were already used to lower the degree; some decisions choose the period according to the number and nature of circumstances.</td><td>Start from the lowered penalty: <strong>PC (any, 6 m 1 d – 6 y)</strong></td></tr>
    <tr><td class="art">A9</td><td>100 mitigating vs. 2 aggravating (offset 2 vs. 2, leaving 98 mitigating and no aggravating). Only lowers by <strong>one degree</strong> regardless of how many ordinary mitigating remain.</td><td>Same as A8 (PM medium)</td><td>Same as A8 (PC any)</td></tr>
    <tr><td class="art">A10</td><td>3 mitigating vs. 1 aggravating: 2 mitigating left, no aggravating remaining</td><td>Same as A8 (PM medium)</td><td>Same as A8 (PC any)</td></tr>
    <tr><td class="art">A11</td><td>100 aggravating vs. 1 mitigating: 99 aggravating left</td><td>RT maximum (same as A3)</td><td>PM (any)</td></tr>
    <tr><td class="art">A12</td><td>Penalty is a single indivisible penalty such as <em>reclusion perpetua</em> (Art. 63[1])</td><td>Applied as is, regardless of mitigating or aggravating circumstances</td><td><strong>ISLAW does not apply</strong></td></tr>
    <tr><td class="art">A13</td><td>Penalty is two indivisible penalties, <em>reclusion perpetua</em> to death (Art. 63[2])</td><td>Death cannot be imposed (R.A. 9346); result is <em>reclusion perpetua</em></td><td><strong>ISLAW does not apply</strong></td></tr>
  </tbody>
</table></div>

<h3 class="sg-h3" id="islaw-privileged-special">5 · Privileged Mitigating &amp; Special Aggravating Circumstances (Scenarios B1–B11)</h3>
<div class="table-scroll"><table class="sg-table">
  <thead>
    <tr><th>#</th><th>Scenario</th><th>Maximum Term</th><th>Minimum Term</th></tr>
  </thead>
  <tbody>
    <tr><td class="art">B1</td><td><strong>Special aggravating circumstance</strong> (e.g., use of an unlicensed firearm in homicide/murder under R.A. 10591 Sec. 29; Art. 62[1] public position / organized crime group). Cannot be offset by ordinary mitigating (<em>Palaganas v. People</em>).</td><td>RT maximum: 17 y 4 m 1 d – 20 y</td><td>PM (any)</td></tr>
    <tr><td class="art">B2</td><td><strong>One privileged mitigating</strong> (minority above 15 and under 18 with discernment, Art. 68[2]; incomplete self-defense with majority of requisites, Art. 69). Lowers by 1 degree to PM.</td><td>PM medium: 8 y 1 d – 10 y</td><td>PC (any, 6 m 1 d – 6 y)</td></tr>
    <tr><td class="art">B3</td><td>One privileged + 1 ordinary mitigating</td><td>PM minimum: 6 y 1 d – 8 y</td><td>PC (any)</td></tr>
    <tr><td class="art">B4</td><td>One privileged + 1 generic aggravating (aggravating cannot offset the privileged one; apply it to the lowered penalty)</td><td>PM maximum: 10 y 1 d – 12 y</td><td>PC (any)</td></tr>
    <tr><td class="art">B5</td><td>One privileged + 1 ordinary mitigating + 1 generic aggravating (ordinary and aggravating offset each other)</td><td>PM medium: 8 y 1 d – 10 y</td><td>PC (any)</td></tr>
    <tr><td class="art">B6</td><td>One privileged + special aggravating (e.g., unlicensed firearm)</td><td>PM maximum: 10 y 1 d – 12 y</td><td>PC (any)</td></tr>
    <tr><td class="art">B7</td><td><strong>Two privileged mitigating</strong> (e.g., minority + incomplete self-defense). Lowered two degrees to PC.</td><td>PC medium: 2 y 4 m 1 d – 4 y 2 m</td><td>AM (any, 1 m 1 d – 6 m)</td></tr>
    <tr><td class="art">B8</td><td>Two privileged + 1 ordinary mitigating</td><td>PC minimum: 6 m 1 d – 2 y 4 m</td><td>AM (any)</td></tr>
    <tr><td class="art">B9</td><td>Two privileged + 1 generic aggravating</td><td>PC maximum: 4 y 2 m 1 d – 6 y</td><td>AM (any)</td></tr>
    <tr><td class="art">B10</td><td><strong>Two privileged + 1 ordinary mitigating + 1 aggravating (Quiz Q62).</strong> Ordinary and aggravating offset.</td><td>PC medium: 2 y 4 m 1 d – 4 y 2 m</td><td>AM (any, 1 m 1 d – 6 m)</td></tr>
    <tr><td class="art">B11</td><td>Two privileged + 2 or more ordinary mitigating, no aggravating (further degree down under Art. 64[5] to AM)</td><td>AM medium: 2 m 1 d – 4 m (<em>People v. Nicolas</em>)</td><td>Max term does not exceed 1 year (or next lower is <em>destierro</em>), so check ISLAW applicability with professor.</td></tr>
  </tbody>
</table></div>

<h3 class="sg-h3" id="islaw-stage-participation-complex">6 · Stage, Participation, Complex Crimes &amp; Special Laws (Arts. 50–57 &amp; Scenarios C1–C8)</h3>
<div class="table-scroll"><table class="sg-table">
  <thead>
    <tr><th>Participation</th><th>Consummated</th><th>Frustrated</th><th>Attempted</th></tr>
  </thead>
  <tbody>
    <tr><td class="art">Principal</td><td>0 degrees lower (RT)</td><td>1 degree lower (Art. 50): PM</td><td>2 degrees lower (Art. 51): PC</td></tr>
    <tr><td class="art">Accomplice</td><td>1 degree lower (Art. 52): PM</td><td>2 degrees lower (Art. 54): PC</td><td>3 degrees lower (Art. 56): AM</td></tr>
    <tr><td class="art">Accessory</td><td>2 degrees lower (Art. 53): PC</td><td>3 degrees lower (Art. 55): AM</td><td>4 degrees lower (Art. 57): Destierro</td></tr>
  </tbody>
</table></div>

<div class="table-scroll"><table class="sg-table">
  <thead>
    <tr><th>#</th><th>Scenario</th><th>Maximum Term</th><th>Minimum Term</th></tr>
  </thead>
  <tbody>
    <tr><td class="art">C1</td><td>Frustrated homicide, no other circumstance</td><td>PM medium: 8 y 1 d – 10 y</td><td>PC (any)</td></tr>
    <tr><td class="art">C2</td><td>Attempted homicide, no other circumstance</td><td>PC medium: 2 y 4 m 1 d – 4 y 2 m</td><td>AM (any)</td></tr>
    <tr><td class="art">C3</td><td>Stage + privileged mitigating (add the degrees): Frustrated homicide by a 16-year-old with discernment = 2 degrees lower</td><td>PC medium</td><td>AM (any)</td></tr>
    <tr><td class="art">C4</td><td><strong>Complex crime (Art. 48):</strong> penalty for the most serious crime, in its maximum period (e.g., frustrated homicide with assault on an agent of a person in authority; graver penalty is PM)</td><td>PM maximum: 10 y 1 d – 12 y</td><td>PC, next lower from the graver crime's penalty</td></tr>
    <tr><td class="art">C5</td><td>Complex crime + 2 mitigating, no aggravating (e.g., estafa through falsification, where falsification is PM)</td><td>PC maximum (one degree lower from PM)</td><td>AM (any) — start from the whole PM, not PM maximum</td></tr>
    <tr><td class="art">C6</td><td>Murder (RT max to death) with privileged mitigating of minority (lowered 1 degree under Art. 61[3]: PM max to RT med)</td><td>Medium of that range: 12 y 5 m 11 d – 14 y 10 m 20 d</td><td>PC max to PM med: 4 y 2 m 1 d – 10 y</td></tr>
    <tr><td class="art">C7</td><td><strong>Special law</strong> (e.g., illegal possession punished by 1 y 1 d to 5 y)</td><td>Not more than 5 y (e.g., 4 y)</td><td>Not less than 1 y 1 d (e.g., 2 y 1 d)</td></tr>
    <tr><td class="art">C8</td><td><strong>Special law that borrows RPC penalty names</strong> (e.g., "prision mayor in its maximum period")</td><td>RPC rules on periods and modifying circumstances apply suppletorily (Art. 10; <em>People v. Simon</em>)</td><td>Within the penalty next lower / range stated</td></tr>
  </tbody>
</table></div>

<h3 class="sg-h3" id="islaw-disqualifications">7 · When the ISLAW Does NOT Apply (Sec. 2) &amp; Related Rules</h3>
<div class="table-scroll"><table class="sg-table">
  <thead>
    <tr><th>Persons / Offenses Disqualified</th><th>Important Qualifications &amp; Notes</th></tr>
  </thead>
  <tbody>
    <tr><td class="art"><span class="sg-dot" style="background:var(--red)"></span>1. Offenses punished with death or life imprisonment (<em>reclusion perpetua</em>)</td><td>It is the penalty <strong>actually imposed</strong> (after privileged mitigating circumstances) that controls, not the penalty prescribed (<em>People v. Moises</em>; Reyes, p. 790). A 17-year-old convicted of murder whose penalty is lowered to a divisible penalty is covered.</td></tr>
    <tr><td class="art"><span class="sg-dot" style="background:var(--red)"></span>2. Treason, conspiracy or proposal to commit treason; misprision of treason, rebellion, sedition, espionage; piracy</td><td>Crimes against national security and public order expressly excluded by Sec. 2.</td></tr>
    <tr><td class="art"><span class="sg-dot" style="background:var(--red)"></span>3. Habitual delinquents</td><td>A <strong>recidivist</strong> (even a first-time one) is <strong>NOT</strong> excluded and can still avail of the ISLAW (<em>People v. Yu Lian</em>; <em>People v. Venus</em>). Habitual delinquency (Art. 62[5]) adds extra penalties and disqualifies the convict from ISLAW.</td></tr>
    <tr><td class="art"><span class="sg-dot" style="background:var(--red)"></span>4. Those who escaped from confinement or evaded sentence</td><td>A minor who escaped from a training school or a patient who escaped from a mental hospital is <strong>not</strong> an escaped prisoner (Reyes, p. 792).</td></tr>
    <tr><td class="art"><span class="sg-dot" style="background:var(--red)"></span>5. Those who violated the terms of a conditional pardon</td><td>Granted by the Chief Executive.</td></tr>
    <tr><td class="art"><span class="sg-dot" style="background:var(--red)"></span>6. Maximum term of imprisonment does not exceed one (1) year</td><td>Based on the penalty actually imposed (e.g., a straight penalty of 8 months of <em>prision correccional</em> or 6 months of <em>arresto mayor</em>).</td></tr>
    <tr><td class="art"><span class="sg-dot" style="background:var(--red)"></span>7. Sentenced to <em>destierro</em> or suspension only</td><td>Not penalties of imprisonment.</td></tr>
    <tr><td class="art"><span class="sg-dot" style="background:var(--red)"></span>8. Already sentenced by final judgment when the Act took effect</td><td>Historical transition clause under Sec. 2.</td></tr>
    <tr><td class="art"><span class="sg-dot" style="background:var(--red)"></span>9. When application of the ISLAW would work against the accused</td><td>Not applied if it would lengthen the sentence (<em>People v. Nang Kay</em>; Reyes, p. 789).</td></tr>
  </tbody>
</table></div>
<div class="exoex-box">
  <span class="exoex-label">Related Points to Remember</span>
  <strong>Mandatory application:</strong> Whenever the ISLAW applies, the court <em>must</em> impose an indeterminate sentence (Reyes, p. 794). · <strong>Probation threshold:</strong> Probation depends on the maximum term actually imposed — allowed only when the sentence does not exceed <strong>6 years</strong> (P.D. 968, as amended by R.A. 10707).
</div>`,
	mcqs: [
		// ---- PART I: TRUE OR FALSE (Q1–Q38) — strictly True or False options ----
		{
			id: 'crim1_lloren:tf:1',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Under the positivist theory of criminal law, crime is regarded as a natural and social phenomenon.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Under the positivist (or realistic) school of criminal law, crime is viewed as essentially a natural and social phenomenon, and the offender is regarded as a product of social and environmental circumstances.',
			legalBasis: 'Positivist Theory of Criminal Law (Reyes, p. 24)'
		},
		{
			id: 'crim1_lloren:tf:2',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'effects',
			question:
				'AA, as principal by induction, commanded BB and CC to kill DD. Then BB and CC killed DD by treachery to insure its execution without prior knowledge of AA. Ergo, the aggravating circumstance of treachery should not be applied to all the accused even if "the act of one is the act of all."',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Under Art. 62(4) of the RPC, aggravating circumstances which consist in the material execution of the act, or in the means employed to accomplish it (such as treachery), affect only those persons who had knowledge of them at the time of the execution of the act or their cooperation therein.',
			legalBasis: 'Art. 62(4), RPC — People v. De Otero; U.S. v. Gamao (Reyes, p. 712)'
		},
		{
			id: 'crim1_lloren:tf:3',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Correctional penalties, except arresto mayor, will be prescribed in 15 years.',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Correctional penalties prescribe in 10 years, not 15 years; arresto mayor prescribes in 5 years (Art. 90 for crimes; Art. 92 for penalties). The 15-year period applies to afflictive penalties (for crimes under Art. 90, those punishable by death, reclusion perpetua or reclusion temporal prescribe in 20 years; other afflictive penalties in 15 years).',
			legalBasis: 'Arts. 90 & 92, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:4',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'jurisprudence',
			question: 'Is malaria a mitigating circumstance?',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Ordinary malaria is not a mitigating circumstance. "Malignant" malaria that affects the nervous system and causes insanity-like delirium is an exempting circumstance under Art. 12(1) (People v. Lacena, 69 Phil. 350; Reyes, pp. 223–224). What is required is MALIGNANT malaria — it is not mitigating, but exempting, because it affects the nervous system and causes complications such as acute melancholia and insanity at times.',
			legalBasis: 'Art. 12(1), RPC — People v. Lacena, 69 Phil. 350 (Reyes, pp. 223–224)'
		},
		{
			id: 'crim1_lloren:tf:5',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question:
				'Ignorance of the law excuses no one from compliance therewith; however, ignorance or mistake of facts relieves the accused of criminal liability.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Honest mistake of fact (ignorantia facti excusat) negates criminal intent (dolo) and relieves the accused of criminal liability, whereas ignorance of the law (ignorantia legis non excusat) excuses no one.',
			legalBasis: 'Art. 3, Civil Code (ignorantia legis); Art. 3, RPC — U.S. v. Ah Chong (Reyes, p. 44)'
		},
		{
			id: 'crim1_lloren:tf:6',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'exceptions',
			question:
				'When a Philippine vessel is within the territory of a foreign country, crimes committed on board are subject to the laws of that foreign country.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. While the RPC generally applies to offenses committed on a Philippine ship or airship (registered with MARINA or the Philippine Bureau of Customs) while on the high seas, when the Philippine vessel or aircraft is inside the territory of a foreign country, crimes committed on board are subject to the laws of that foreign country (Reyes, p. 25).',
			legalBasis: 'Art. 2(1), Revised Penal Code (Reyes, p. 25)'
		},
		{
			id: 'crim1_lloren:tf:7',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'requisites',
			question:
				'In vindication of a grave offense, the offended party must have done a grave offense, while in provocation, the cause that brought about the provocation need not be a grave offense.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. In immediate vindication (Art. 13[5]), the offended party must have committed a grave offense against the offender or his specified relatives; in sufficient provocation (Art. 13[4]), the cause that brought about the provocation need not be a grave offense.',
			legalBasis: 'Art. 13(4) & (5), Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:8',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Formal crimes are consummated with one instant act.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Formal crimes are consummated by a single act in one instant and therefore have no attempted or frustrated stage.',
			legalBasis: 'Art. 6, Revised Penal Code (Reyes, p. 118)'
		},
		{
			id: 'crim1_lloren:tf:9',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'exceptions',
			question: 'Penal laws are generally not given retroactive effect, EVEN IF IT IS ADVANTAGEOUS TO THE ACCUSED.',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Under Art. 22 of the RPC, penal laws shall have a retroactive effect insofar as they favor the accused (advantageous to the accused), provided he is not a habitual delinquent.',
			legalBasis: 'Art. 22, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:10',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Ex post facto means "retroactivity makes the act a crime."',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. An ex post facto law is one that, among others, makes criminal an act done before the passage of the law which was innocent when done.',
			legalBasis: 'Art. III, Sec. 22, 1987 Constitution; Arts. 21–22, RPC (Reyes, pp. 2, 591)'
		},
		{
			id: 'crim1_lloren:tf:11',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'requisites',
			question:
				'The test in reasonableness of means employed in self-defense is that imperfect equality of weapon used by the accused and the aggressor is allowed.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Perfect equality of weapons is not required; the test is rational equivalence of the means employed.',
			legalBasis: 'Art. 11(1), Revised Penal Code — rational equivalence (Reyes, p. 180)'
		},
		{
			id: 'crim1_lloren:tf:12',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Does an ex post facto law aggravate the penalty?',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. An ex post facto law includes one that aggravates a crime or changes the punishment and inflicts a greater penalty than the law annexed to the crime when committed.',
			legalBasis: 'Art. III, Sec. 22, 1987 Constitution (Reyes, p. 2)'
		},
		{
			id: 'crim1_lloren:tf:13',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'effects',
			question: 'Should the penalty for the principal of a frustrated felony be 2 degrees lower than the consummated felony?',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Under Art. 50 of the RPC, the principal in a frustrated felony receives the penalty one degree lower than the consummated felony. Two degrees lower is imposed on the principal in an attempted felony (Art. 51) or the accomplice in a frustrated felony (Art. 54).',
			legalBasis: 'Arts. 50, 51 & 54, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:14',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Discernment of children means they misunderstood the wrongfulness of the act.',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Discernment is the mental capacity of a child to understand the difference between right and wrong and the consequences of his or her act.',
			legalBasis: 'Art. 12(3), RPC, as modified by Sec. 6, R.A. No. 9344 (as amended by R.A. No. 10630) — People v. Doquena (Reyes, p. 226)'
		},
		{
			id: 'crim1_lloren:tf:15',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Actus Reus means criminal act. Mens Rea means guilty mind.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation: 'TRUE. Actus reus refers to the physical criminal act, while mens rea refers to the guilty mind or criminal intent.',
			legalBasis: 'Art. 3, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:16',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'exceptions',
			question: 'A first-time recidivist can avail of the Indeterminate Sentence Law (ISLAW), but a habitual delinquent cannot.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Section 2 of the Indeterminate Sentence Law disqualifies habitual delinquents, not recidivists (People v. Yu Lian; People v. Venus).',
			legalBasis: 'Sec. 2, Act No. 4103 (ISLAW) — People v. Yu Lian; People v. Venus (Reyes, p. 791)'
		},
		{
			id: 'crim1_lloren:tf:17',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Dolo is required in special laws.',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Offenses under special laws are generally mala prohibita, where criminal intent (dolo) is immaterial; the prohibited act need only be done voluntarily.',
			legalBasis: 'Arts. 3 & 10, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:18',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'effects',
			question:
				'The penalty next lower than the one prescribed by law for a frustrated felony shall be imposed on the accomplice for the commission of a frustrated felony.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Art. 54 of the RPC expressly provides that the penalty next lower in degree than that prescribed by law for the frustrated felony shall be imposed upon the accomplices in the commission of a frustrated felony (which is two degrees below the consummated felony). (Note: The original key erroneously marked this False.)',
			legalBasis: 'Art. 54, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:19',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Mala in se is a crime of evil and mala prohibita is prohibited by law.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Mala in se are acts inherently evil or wrong by nature, whereas mala prohibita are acts that are wrong only because they are prohibited by statute.',
			legalBasis: 'Art. 3, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:20',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'effects',
			question: 'A person is not obligated to satisfy his civil liability resulting from crime if his sentence was commuted.',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Under Art. 113 of the RPC, the offender continues to be obliged to satisfy the civil liability resulting from the crime despite service of sentence, commutation, pardon, or amnesty.',
			legalBasis: 'Art. 113, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:21',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'exceptions',
			question: 'There is no attempted nor frustrated stage on light felonies committed against persons.',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Under Art. 7 of the RPC, light felonies are punishable only when consummated, EXCEPT those committed against persons or property. Thus, attempted and frustrated light felonies against persons or property are punishable (Reyes, p. 122). (Note: The original key marked True because slight physical injuries — the common light felony against persons — is punished according to the resulting injury.)',
			legalBasis: 'Art. 7, Revised Penal Code (Reyes, p. 122)'
		},
		{
			id: 'crim1_lloren:tf:22',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Reparation is under civil liability.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Under Art. 104 of the RPC, civil liability includes restitution, reparation of the damage caused, and indemnification for consequential damages.',
			legalBasis: 'Art. 104, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:23',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'jurisprudence',
			question:
				'Is an employer of a hotel establishment subsidiarily liable if his security guard commits robbery in a 7-Eleven beside the hotel while in the performance of his duty?',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Art. 103 requires that the crime be committed by the employee "in the discharge of his duties" — the law does not say "while in the discharge of his duties," so a crime merely committed during duty hours is not enough. A hotel guard who robs a neighboring establishment does not make his employer subsidiarily liable (Baza Marketing v. Bolinao Security; Reyes, p. 905).',
			legalBasis: 'Art. 103, RPC — Baza Marketing v. Bolinao Security (Reyes, p. 905)'
		},
		{
			id: 'crim1_lloren:tf:24',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Nullum crimen means "without law no punishment."',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. "Nullum crimen" means "no crime" (nullum crimen sine lege = no crime without law), whereas "nulla poena sine lege" means "no penalty/punishment without law."',
			legalBasis: 'Art. 21, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:25',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'In dubio pro reo is for the favor of the accused, irrespective of the crimes committed.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE (Note: check with your professor, as the original key marked False). In dubio pro reo applies in favor of the accused across all crimes whenever there is real doubt on the facts or an ambiguity in the law, though it does not apply where the law and evidence are clear.',
			legalBasis: 'In dubio pro reo principle; Art. III, Sec. 14(2), 1987 Constitution (presumption of innocence); Rule 133, Sec. 2, Rules of Court'
		},
		{
			id: 'crim1_lloren:tf:26',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Nulla poena sine lege means "no crime without law."',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation: 'FALSE. "Nulla poena sine lege" means "no penalty/punishment without law."',
			legalBasis: 'Art. 21, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:27',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Philippine criminal law follows the principle of Nullum Crimen Sine Poena Lege / Nullum Crimen, Nulla Poena Sine Lege.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Reflected in Art. 21 of the RPC and the constitutional prohibition against ex post facto laws.',
			legalBasis: 'Art. 21, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:28',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Mala in se is generally felonies and offenses penalized by special laws.',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Mala in se are generally felonies penalized by the Revised Penal Code, while mala prohibita are generally offenses penalized by special laws.',
			legalBasis: 'Arts. 3 & 10, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:29',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'jurisprudence',
			question: 'Is one degree below arresto mayor destierro?',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Under the graduated scale in Art. 71 of the RPC, the order is arresto mayor, then destierro, then arresto menor. Destierro is the penalty one degree below arresto mayor (Uy Chin Hua v. Dinglasan; Reyes, p. 758). (Note: The original key marked this False.)',
			legalBasis: 'Art. 71, RPC — Uy Chin Hua v. Dinglasan (Reyes, p. 758)'
		},
		{
			id: 'crim1_lloren:tf:30',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'exceptions',
			question:
				'AA wanted to kill his father, but due to the dark of the night, by mistake, killed his brother. Thus, AA is entitled to the mitigating circumstance of praeter intentionem.',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. This is error in personae (mistake in identity, Art. 49), not praeter intentionem (Art. 13[3]). Praeter intentionem requires an injurious result graver than intended.',
			legalBasis: 'Arts. 4(1), 13(3) & 49, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:tf:31',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'jurisprudence',
			question: 'A person with somnambulism cannot invoke it as a mitigating circumstance.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Somnambulism (sleepwalking) is not a mitigating circumstance; when clearly proven, it is an exempting circumstance because the actor lacks voluntariness and intelligence (People v. Gimena; U.S. v. Odicta; Reyes, p. 223).',
			legalBasis: 'Art. 12(1), RPC — People v. Gimena; U.S. v. Odicta (Reyes, p. 223)'
		},
		{
			id: 'crim1_lloren:tf:32',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'jurisprudence',
			question:
				'The offender knows the combination to the safe and opens it, but the safe is empty ("walay sulod"). Is it attempted or frustrated theft?',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. It is neither attempted nor frustrated theft; it is an impossible crime under Art. 4(2) of the RPC because the safe was empty (Intod v. CA).',
			legalBasis: 'Art. 4(2), RPC — Intod v. Court of Appeals, G.R. No. 103119, Oct. 21, 1992'
		},
		{
			id: 'crim1_lloren:tf:33',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'requisites',
			question:
				'A 180 kg man who attacks a 70 kg woman automatically incurs the aggravating circumstance of "abuse of superior strength."',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Abuse of superior strength is not automatic from physical or weight disparity; it requires proof of deliberate use of excessive force out of proportion to the means of defense available to the victim.',
			legalBasis: 'Art. 14(15), RPC — People v. Cabiling (Reyes, p. 409)'
		},
		{
			id: 'crim1_lloren:tf:34',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Do formal crimes have attempted and frustrated stages?',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Formal crimes are consummated in one instant by a single act and have no attempted or frustrated stage.',
			legalBasis: 'Art. 6, Revised Penal Code (Reyes, p. 118)'
		},
		{
			id: 'crim1_lloren:tf:35',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'effects',
			question:
				'Jewelry was stolen, and a third party bought it in good faith. Can the owner claim and recover their jewelry from the buyer in good faith?',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Under Art. 105 of the RPC and Art. 559 of the Civil Code, the owner of stolen property can recover it even from a third person who acquired it in good faith (who may then go after the seller). The only exception is if the buyer acquired it at a public sale, in which case the owner must reimburse the price paid to recover it (Reyes, pp. 913–914). (Note: The original key marked this False.)',
			legalBasis: 'Art. 105, RPC; Art. 559, Civil Code (Reyes, pp. 913–914)'
		},
		{
			id: 'crim1_lloren:tf:36',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Ignominy is one of moral suffering.',
			options: ['True', 'False'],
			correctIndex: 0,
			key: 'True',
			explanation:
				'TRUE. Ignominy (Art. 14[17]) pertains to the moral order (moral suffering/humiliation), whereas cruelty (Art. 14[21]) pertains to physical suffering.',
			legalBasis: 'Art. 14(17) & (21), RPC — U.S. v. Abaigar (Reyes, p. 455)'
		},
		{
			id: 'crim1_lloren:tf:37',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Does indemnity refer to a crime against property?',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Indemnification for consequential damages (Art. 107) generally refers to crimes against persons, whereas reparation of the damage caused (Art. 106) refers to crimes against property (Reyes, p. 920).',
			legalBasis: 'Arts. 106 & 107, Revised Penal Code (Reyes, p. 920)'
		},
		{
			id: 'crim1_lloren:tf:38',
			topicId: 'tf',
			topic: 'True or False (Q1–Q38)',
			tag: 'memorization',
			question: 'Praeter intentionem occurs when one mistakenly commits a crime intended for another person.',
			options: ['True', 'False'],
			correctIndex: 1,
			key: 'False',
			explanation:
				'FALSE. Mistakenly committing a crime on a person other than the intended victim is error in personae (mistake in identity). Praeter intentionem is the lack of intent to commit so grave a wrong as that committed.',
			legalBasis: 'Arts. 4(1), 13(3) & 49, Revised Penal Code'
		},

		// ---- PART II: MULTIPLE CHOICE (Q39–Q56 + Loose Firearm items) ----
		{
			id: 'crim1_lloren:mcq:39',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'memorization',
			question:
				'A person who, at the time of his trial for one crime, shall have been previously convicted by final judgment of another crime embraced in the same title of the Revised Penal Code incurs what circumstance?',
			options: ['Recidivism', 'Reiteracion (Habituality)', 'Habitual delinquency', 'Quasi-recidivism'],
			optionExplanations: [
				'Art. 14(9): applies when the previous final conviction is for a crime embraced in the same title of the RPC.',
				'Art. 14(10): requires prior service of sentence for an offense carrying an equal or greater penalty (or two or more lighter ones), not necessarily under the same title.',
				'Art. 62(5): requires a third or subsequent conviction within 10 years for specific crimes (serious/less serious physical injuries, robbery, theft, estafa, falsification).',
				'Art. 160: applies when a person commits a new felony after conviction by final judgment, before beginning to serve or while serving sentence.'
			],
			correctIndex: 0,
			key: 'Recidivism',
			explanation:
				'Recidivism (Art. 14[9], RPC). A recidivist is one who, at the time of his trial for one crime, shall have been previously convicted by final judgment of another crime embraced in the same title of the Code.',
			legalBasis: 'Art. 14(9), Revised Penal Code'
		},
		{
			id: 'crim1_lloren:mcq:40',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'exceptions',
			question: 'Which of the following is NOT included in the pecuniary liabilities of the offender under Article 38 of the Revised Penal Code?',
			options: ['Fine', 'Costs of the proceedings', 'Indemnification of consequential damages', 'Restitution'],
			optionExplanations: [
				'Fine is the fourth pecuniary liability listed under Art. 38.',
				'Costs of the proceedings is the third pecuniary liability listed under Art. 38.',
				'Indemnification of consequential damages is the second pecuniary liability listed under Art. 38.',
				'Restitution (returning the very thing itself) is a civil liability under Arts. 104–105, not a pecuniary liability under Art. 38.'
			],
			correctIndex: 3,
			key: 'Restitution',
			explanation:
				'Restitution. Art. 38 lists reparation of the damage caused, indemnification of consequential damages, fine, and costs of the proceedings as pecuniary liabilities. Restitution (returning the very thing itself) is a civil liability under Arts. 104–105, not a pecuniary liability under Art. 38.',
			legalBasis: 'Art. 38 & Arts. 104–105, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:mcq:41',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'effects',
			question: 'Is a 16-year-old criminally liable for committing serious physical injuries?',
			options: [
				'Liable if acting with discernment',
				'Completely exempt regardless of discernment',
				'Liable as an adult with full penalty',
				'Liable only for civil damages'
			],
			optionExplanations: [
				'Under R.A. 9344 (as amended by R.A. 10630), a child above 15 and under 18 is liable if acting with discernment, subject to privileged mitigation, diversion, and suspended sentence.',
				'Total exemption regardless of discernment applies only to children 15 years old or younger.',
				'A minor above 15 and under 18 who acts with discernment is entitled to the privileged mitigating circumstance of minority (Art. 68[2]), not the full adult penalty.',
				'Criminal liability still attaches if the child acted with discernment; civil liability only applies when discernment is absent.'
			],
			correctIndex: 0,
			key: 'Liable if acting with discernment',
			explanation:
				'Liable with conditions (if acting with discernment). Under R.A. 9344 as amended by R.A. 10630, a child above 15 and under 18 is exempt from criminal liability unless he or she acted with discernment. If acting with discernment, the child is liable but entitled to the privileged mitigating circumstance of minority (Art. 68[2]), diversion, and suspended sentence.',
			legalBasis: 'Secs. 6, 23 & 38, R.A. No. 9344, as amended by R.A. No. 10630; Art. 68(2), RPC'
		},
		{
			id: 'crim1_lloren:mcq:42',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'exceptions',
			question: 'Which of the following is NOT included as a mitigating circumstance under Article 13 of the Revised Penal Code?',
			options: [
				'Vindication of a grave offense',
				'Passion or obfuscation',
				'Sufficient provocation',
				'Incomplete justifying circumstance',
				'Illness depriving the offender of willpower'
			],
			optionExplanations: [
				'Immediate vindication of a grave offense is mitigating under Art. 13(5).',
				'Acting upon an impulse so powerful as naturally to produce passion or obfuscation is mitigating under Art. 13(6).',
				'Sufficient provocation or threat immediately preceding the act is mitigating under Art. 13(4).',
				'Incomplete justifying or exempting circumstances are mitigating under Art. 13(1).',
				'Illness that completely deprives the offender of willpower/intelligence is an exempting circumstance (Art. 12[1]), whereas Art. 13(9) only mitigates illness that diminishes willpower.'
			],
			correctIndex: 4,
			key: 'Illness depriving the offender of willpower',
			explanation:
				'Art. 13 covers all five if option (e) refers to an illness that only "diminishes" the exercise of willpower without depriving the offender of consciousness of his acts (Art. 13[9]). However, when an illness completely "deprives" the offender of willpower/intelligence, it is an exempting circumstance under Art. 12, making (e) the odd one out.',
			legalBasis: 'Art. 13(1), (4), (5), (6) & (9); Art. 12(1), RPC (Reyes, p. 255)'
		},
		{
			id: 'crim1_lloren:mcq:43',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'memorization',
			question:
				'In criminal law, the primary function of punishment is to prevent potential and actual wrongdoers from committing crimes based on what theory?',
			options: ['Utilitarian theory', 'Retributive theory', 'Absolutist theory', 'Restorative justice theory'],
			optionExplanations: [
				'Under the utilitarian theory, penalties are forward-looking and justified by deterrence and prevention of future crimes.',
				'Retributive theory focuses on punishing offenders because they deserve it for past moral guilt, not primarily for deterrence.',
				'Absolutist theory treats punishment as an end in itself (justice for its own sake), independent of future utility or prevention.',
				'Restorative justice focuses on repairing harm and reconciling the offender, victim, and community rather than deterrence.'
			],
			correctIndex: 0,
			key: 'Utilitarian theory',
			explanation:
				'Utilitarian theory. Under the utilitarian theory of punishment, the primary purpose of penalties is forward-looking deterrence and prevention of potential and actual wrongdoers.',
			legalBasis: 'Theories justifying penalty — Prevention & Exemplarity (Reyes, p. 585)'
		},
		{
			id: 'crim1_lloren:mcq:44',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'jurisprudence',
			question:
				'Mr. BB pointed his gun at Ms. CC and asked for her phone, but she did not have it with her because her sister borrowed it. What was the crime committed?',
			options: ['Attempted robbery', 'Impossible crime', 'Frustrated robbery', 'Grave coercion'],
			optionExplanations: [
				'Per Reyes (p. 88), the phone was absent only by accident (with her sister), and pointing a gun already constitutes grave threats (Art. 282), making it attempted robbery with intimidation.',
				'Art. 4(2) requires inherent impossibility and that the act not violate another RPC provision; pointing a gun violates Art. 282 (note: the original quiz key marked Impossible crime under Intod).',
				'Robbery is not frustrated here because the offender did not perform all acts of execution to take the property.',
				'Grave coercion involves compelling another to do something against their will without authority of law, not an intent to gain by taking property.'
			],
			correctIndex: 0,
			key: 'Attempted robbery',
			explanation:
				'Attempted robbery (per Reyes, Art. 4, p. 88). In Reyes\' watch example, pointing a gun at B to rob him when B forgot his watch is attempted robbery with intimidation, not an impossible crime, because the object was missing by accident (with her sister), not by inherent impossibility (Art. 6, par. 3), and pointing a gun already constitutes grave threats (Art. 282), whereas Art. 4(2) requires that the act not violate another RPC provision. (Note: Check with your professor — the original quiz key answered "Impossible crime" following Intod v. CA.)',
			legalBasis: 'Art. 4(2), Art. 6, par. 3 & Art. 282(2), RPC (Reyes, p. 88)',
			hint: 'Reyes treats an accidentally absent object at gunpoint as attempted robbery; the original key marked impossible crime.'
		},
		{
			id: 'crim1_lloren:mcq:45',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'memorization',
			question: 'The pro reo principle relates to:',
			options: [
				'Retroactivity of penal laws',
				'Effects of repeal or amendments',
				'Suppletory application of the RPC',
				'Extraterritoriality',
				'In case of doubt, for the accused',
				'None'
			],
			optionExplanations: [
				'Retroactivity of favorable penal laws is governed by Art. 22, which is distinct from the pro reo rule of construction.',
				'Effects of repeal or amendment concern whether criminal liability is extinguished, not resolving doubt in favor of the accused.',
				'Suppletory application is governed by Art. 10 of the RPC.',
				'Extraterritoriality is governed by Art. 2 of the RPC.',
				'In dubio pro reo means that in case of doubt in penal laws or evidence, the doubt is resolved in favor of the accused.',
				'One of the listed choices ("In case of doubt, for the accused") accurately states the principle.'
			],
			correctIndex: 4,
			key: 'In case of doubt, for the accused',
			explanation:
				'In case of doubt, for the accused (in dubio pro reo). Penal laws and reasonable doubts in evidence are resolved liberally in favor of the accused and strictly against the State.',
			legalBasis: 'In dubio pro reo doctrine'
		},
		{
			id: 'crim1_lloren:mcq:46',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'jurisprudence',
			question:
				'A wants to rob B of his Rolex watch. Upon meeting, A pointed his gun at B, but B was not wearing his watch that day. Is there a crime committed?',
			options: ['Impossible crime', 'Attempted robbery', 'Frustrated robbery', 'None of the above'],
			optionExplanations: [
				'Under Reyes (p. 88), the watch was missing by accident rather than inherent impossibility, and pointing the gun already constitutes grave threats (though the original key marked Impossible crime).',
				'This is Reyes\' exact textbook example: pointing a gun to rob when the watch is accidentally absent constitutes attempted robbery with intimidation.',
				'A did not perform all acts of execution of taking the watch, so robbery is not frustrated.',
				'A crime was committed (attempted robbery under Reyes).'
			],
			correctIndex: 1,
			key: 'Attempted robbery',
			explanation:
				'B. Attempted robbery (per Reyes, Art. 4, p. 88). This is Reyes\' own textbook example: A points his gun at B to rob him of his watch, but B forgot to carry it. The watch was missing by accident, not inherent impossibility (Art. 6, par. 3), and pointing the gun is already grave threats (Art. 282), so Art. 4(2) does not apply. (Note: Check with your professor — the original key wrote "G. Impossible crime.")',
			legalBasis: 'Art. 4(2), Art. 6, par. 3 & Art. 282(2), RPC (Reyes, p. 88)'
		},
		{
			id: 'crim1_lloren:mcq:47',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'requisites',
			question:
				"Budoy may avail of a mitigating circumstance because he was threatened that his father's house would be burned if he didn't kill his father (uncontrollable force/fear). Which is correct?",
			options: [
				'Budoy is exempt under uncontrollable fear',
				'Budoy is not exempt, but criminally liable',
				'Boboy is not exempt, but criminally liable',
				'None of the above'
			],
			optionExplanations: [
				'Art. 12(6) requires the threatened evil to be equal to or greater than the crime committed; burning a house is a lesser evil than parricide.',
				'Budoy is not exempt under Art. 12(6) because the threatened evil is lesser, so he is criminally liable (with an incomplete exempting/mitigating circumstance under Art. 13[1]).',
				'This option misnames the accused as "Boboy" instead of Budoy.',
				'The second option accurately states Budoy\'s liability.'
			],
			correctIndex: 1,
			key: 'Budoy is not exempt, but criminally liable',
			explanation:
				'B. Under Art. 12(6), exemption for uncontrollable fear requires a threat of an evil equal to or greater than the evil committed. Burning a house is a lesser evil than killing one\'s father (parricide), so Budoy is not exempt and is criminally liable. However, because one requisite of Art. 12(6) is present, it is appreciated as an incomplete exempting (ordinary mitigating) circumstance under Art. 13(1) (Reyes, p. 260). Option C names "Boboy," making B the right choice.',
			legalBasis: 'Art. 12(6) & Art. 13(1), RPC (Reyes, p. 260)'
		},
		{
			id: 'crim1_lloren:mcq:48',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'jurisprudence',
			question: "Mr. CC demanded Mr. BB's phone at gunpoint, but the phone was not with him because his wife borrowed it.",
			options: ['Attempted robbery', 'Frustrated robbery', 'None of the above'],
			optionExplanations: [
				'Per Reyes (p. 88), pointing a gun to rob when the item is accidentally absent is attempted robbery with intimidation.',
				'The offender did not perform all acts of execution of taking the phone.',
				'Attempted robbery is committed under Reyes (though the original key implied impossible crime).'
			],
			correctIndex: 0,
			key: 'Attempted robbery',
			explanation:
				'A. Attempted robbery (per Reyes, Art. 4, p. 88). Same facts as Reyes\' watch example: a gun is pointed to rob the victim, but the object is absent by accident (borrowed by his wife). Under Reyes, it is attempted robbery with intimidation (Art. 6, par. 3), not an impossible crime. (Note: Check with your professor — the original key marked "C. None of the above," implying impossible crime.)',
			legalBasis: 'Art. 4(2), Art. 6, par. 3 & Art. 282(2), RPC (Reyes, p. 88)'
		},
		{
			id: 'crim1_lloren:mcq:49',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'jurisprudence',
			question: 'The house burned only 10%. What stage of arson is it?',
			options: ['Frustrated Arson', 'Consummated Arson', 'Attempted Arson', 'None of the Above'],
			optionExplanations: [
				'Arson is frustrated only when a blaze is set (all acts of execution performed) but no part of the house actually catches fire.',
				'Under People v. Hernandez, arson is consummated the moment any part of the house, however small (even 10%), is burned.',
				'Arson is attempted only when the offender starts setting up the fire but has not yet set the blaze itself.',
				'Consummated arson applies once any part of the building is burned.'
			],
			correctIndex: 1,
			key: 'Consummated Arson',
			explanation:
				'B. Consummated Arson. Arson is consummated the moment any part of the house, however small (even 10% or a slight charring of the wall), is burned (People v. Hernandez, 54 Phil. 122; Reyes, p. 113).',
			legalBasis: 'Art. 6, RPC; P.D. No. 1613 — People v. Hernandez, 54 Phil. 122 (Reyes, p. 113)'
		},
		{
			id: 'crim1_lloren:mcq:50',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'memorization',
			question: 'Which does NOT belong in the grounds for total extinction of criminal liability?',
			options: ['Death of the accused', 'Recognizance', 'Prescription of the crime', 'Amnesty', 'None'],
			optionExplanations: [
				'Death of the convict totally extinguishes criminal liability under Art. 89(1).',
				'Recognizance is a mode of provisional release pending trial, not a ground for extinction of criminal liability under Art. 89.',
				'Prescription of the crime totally extinguishes criminal liability under Art. 89(5).',
				'Amnesty totally extinguishes criminal liability under Art. 89(3).',
				'Recognizance is not an Art. 89 ground, so it is the correct exclusion.'
			],
			correctIndex: 1,
			key: 'Recognizance',
			explanation:
				'B. Recognizance. Under Art. 89 of the RPC, total extinction of criminal liability occurs by: death of the convict, service of sentence, amnesty, absolute pardon, prescription of the crime, prescription of the penalty, and marriage of the offended woman under Art. 344. Recognizance is a mode of release pending trial, not extinction of criminal liability.',
			legalBasis: 'Art. 89, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:mcq:51',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'effects',
			question:
				'BB committed rape against CC, who is under 12 years old, with a penalty of reclusion perpetua of 20–40 years, attended by the mitigating circumstance of voluntary surrender. What is the correct penalty to be imposed?',
			options: ['Reclusion perpetua max', 'Reclusion perpetua med', 'Reclusion perpetua min', 'None of the choices'],
			optionExplanations: [
				'Reclusion perpetua is an indivisible penalty and has no maximum, medium, or minimum periods.',
				'Even with a 20–40 year duration under R.A. 7659, reclusion perpetua remains indivisible (People v. Lucas) and is not divided into periods.',
				'Mitigating circumstances do not lower a single indivisible penalty into a "minimum" period under Art. 63(1).',
				'Under Art. 63(1), a single indivisible penalty like reclusion perpetua is applied regardless of any mitigating or aggravating circumstances.'
			],
			correctIndex: 3,
			key: 'None of the choices',
			explanation:
				'd. None of the choices (Reclusion perpetua). Under Art. 63 of the RPC, a single indivisible penalty like reclusion perpetua is applied regardless of any mitigating or aggravating circumstances. Even though R.A. 7659 set its duration at 20 years and 1 day to 40 years, reclusion perpetua remains an indivisible penalty and has no periods (People v. Lucas, G.R. Nos. 108172-73, Jan. 9, 1995).',
			legalBasis: 'Art. 63(1) & Art. 266-B, RPC; Art. 27, RPC as amended by R.A. No. 7659 (Reyes, p. 604) — People v. Lucas (1995)'
		},
		{
			id: 'crim1_lloren:mcq:52',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'memorization',
			question: "Mr. B drove without a driver's license. What did he commit?",
			options: ['Felony', 'Offense', 'Infraction', 'None of the above'],
			optionExplanations: [
				'A felony is an act or omission punishable by the Revised Penal Code (Art. 3), not a special law.',
				'Driving without a license violates a national special law (R.A. 4136), which is classified as an offense.',
				'An infraction is a violation of a city or municipal ordinance (though the original key marked Infraction).',
				'It is an offense under R.A. 4136.'
			],
			correctIndex: 1,
			key: 'Offense',
			explanation:
				'B) Offense (per Reyes, Art. 3). Driving without a license violates a national special law (R.A. 4136). A "felony" is a violation of the RPC; an "offense" is a violation of a special law; an "infraction" is a violation of a city or municipal ordinance. (Note: The original key marked "Infraction" — follow your professor if he classifies traffic violations as infractions.)',
			legalBasis: 'Art. 3, RPC; Sec. 19, R.A. No. 4136 (Land Transportation and Traffic Code)'
		},
		{
			id: 'crim1_lloren:mcq:53',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'jurisprudence',
			question:
				'AA shot a man who he thought was stealing palay from his land after firing a warning shot. The shot resulted in the death of the victim. What is AA liable for?',
			options: [
				'None of the above',
				'Liable for Murder',
				'Exempt under complete defense of property',
				'Liable for Death Committed in a Tumultuous Affray'
			],
			optionExplanations: [
				'Correct — AA is liable for Homicide (not Murder). Defense of property does not justify killing unless coupled with an attack on the person, and there was no treachery because he shouted a warning and fired in the air first (People v. Anastacio Apolinar, 38 O.G. 2870).',
				'Incorrect — There was no treachery (alevosia) or other qualifying circumstance to elevate the killing to Murder, because AA shouted a warning and fired a warning shot in the air first.',
				'Complete defense of property does not justify taking a human life unless coupled with unlawful aggression against the person.',
				'Death in a tumultuous affray (Art. 251) requires a confused, disorderly fight among several persons where the actual killer cannot be ascertained.'
			],
			correctIndex: 0,
			key: 'None of the above',
			explanation:
				'None of the above — AA is liable for HOMICIDE. In People v. Anastacio Apolinar (38 O.G. 2870), the Court of Appeals held that defense of property does not justify killing unless coupled with an attack on the person of one entrusted with said property, as life is more important than property. However, there was no Murder because AA shouted a warning and fired in the air first, negating treachery.',
			legalBasis: 'Art. 11(1) & Art. 249, RPC — People v. Anastacio Apolinar, C.A., 38 O.G. 2870 (Reyes, pp. 167, 169)'
		},
		{
			id: 'crim1_lloren:mcq:54',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'exceptions',
			question: 'A 15-year-old committed rape. What type of mitigating circumstance can be invoked?',
			options: [
				'Ordinary mitigating circumstance',
				'Privileged mitigating circumstance',
				'Alternative circumstance',
				'None of the choices'
			],
			optionExplanations: [
				'Ordinary mitigating only lowers the penalty to the minimum period; it does not apply because the child is exempt.',
				'Privileged mitigating (Art. 68[2]) applies to minors above 15 and under 18 who acted with discernment.',
				'Alternative circumstances (Art. 15) are relationship, intoxication, and degree of instruction/education.',
				'A child 15 years old or under is completely EXEMPT from criminal liability under R.A. 9344 (as amended by R.A. 10630).'
			],
			correctIndex: 3,
			key: 'None of the choices',
			explanation:
				'None of the choices — completely EXEMPT from criminal liability. Under R.A. 9344 as amended by R.A. 10630, a child 15 years of age or under at the time of the commission of the offense is completely exempt from criminal liability and undergoes an intervention program. (Under Sec. 20-A, as added by R.A. 10630, a child above 12 up to 15 who commits a serious crime such as rape is deemed a neglected child and placed in a Bahay Pag-asa intensive juvenile intervention program — but still exempt from criminal liability.)',
			legalBasis: 'Secs. 6 & 20-A, R.A. No. 9344, as amended by R.A. No. 10630'
		},
		{
			id: 'crim1_lloren:mcq:55',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'memorization',
			question: 'Mistake of the blow is:',
			options: ['Aberratio Ictus', 'Praeter Intentionem', 'Error in personae', 'None of the above'],
			optionExplanations: [
				'Aberratio ictus is mistake in the blow — aiming at one person but hitting another due to lack of precision.',
				'Praeter intentionem means the injurious result is greater than that intended.',
				'Error in personae is mistake in identity of the victim.',
				'Aberratio ictus is the exact Latin term for mistake in the blow.'
			],
			correctIndex: 0,
			key: 'Aberratio Ictus',
			explanation:
				'A. Aberratio Ictus. Mistake in the blow occurs when the offender aims at one person but hits another due to lack of precision.',
			legalBasis: 'Art. 4(1) & Art. 48, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:mcq:56',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'memorization',
			question: 'Mistake in identity is:',
			options: ['Aberratio Ictus', 'Praeter Intentionem', 'Error in personae', 'None of the above'],
			optionExplanations: [
				'Aberratio ictus is mistake in the blow, not mistake in identity.',
				'Praeter intentionem means lack of intent to commit so grave a wrong as that committed.',
				'Error in personae is mistake in identity — harming someone mistaken for the intended victim.',
				'Error in personae is the exact Latin term for mistake in identity.'
			],
			correctIndex: 2,
			key: 'Error in personae',
			explanation:
				'C. Error in personae. Mistake in identity occurs when the offender inflicts injury on someone whom he mistook for his intended victim.',
			legalBasis: 'Art. 4(1) & Art. 49, Revised Penal Code'
		},
		{
			id: 'crim1_lloren:mcq:57',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'effects',
			question:
				'AA shot BB with the use of an unlicensed firearm. How is the use of the unlicensed firearm appreciated, and what period of the penalty is imposed?',
			options: [
				'Special aggravating circumstance',
				'Qualifying circumstance',
				'Separate offense of illegal possession',
				'Generic aggravating circumstance'
			],
			optionExplanations: [
				'Always imposed in the MAXIMUM period (cannot be offset by ordinary mitigating circumstances under Palaganas v. People).',
				'It does not qualify homicide into murder; it aggravates the crime committed.',
				'When used in the commission of another crime, illegal possession is not prosecuted as a separate offense under Sec. 29 of R.A. 10591.',
				'Generic aggravating can be offset by ordinary mitigating circumstances, whereas this special aggravating treatment fixes the penalty in the maximum.'
			],
			correctIndex: 0,
			key: 'Special aggravating circumstance',
			explanation:
				'Special aggravating circumstance — always MAXIMUM (R.A. 10591, Sec. 29; Palaganas v. People). When the use of a loose firearm is inherent in the commission of a crime, it is appreciated as a special aggravating circumstance that cannot be offset by an ordinary mitigating circumstance, fixing the penalty in its maximum period. However, Sec. 29 of R.A. 10591 itself only says "aggravating circumstance"; the "special" aggravating treatment comes from jurisprudence under the old law, R.A. 8294 (Palaganas v. People; People v. Castillo — Reyes, pp. 672–673). Sec. 29 also provides that if the crime committed carries a maximum penalty lower than that for illegal possession of firearms, the penalty for illegal possession is imposed instead — please consult with GOD LLOREN.',
			legalBasis: 'Sec. 29, R.A. No. 10591; Palaganas v. People, G.R. No. 165483, Sept. 12, 2006 (decided under R.A. 8294)'
		},
		{
			id: 'crim1_lloren:mcq:58',
			topicId: 'mcq',
			topic: 'Multiple Choice (Q39–Q56+)',
			tag: 'memorization',
			question: 'Under R.A. No. 10591 (Sec. 29), when the use of a loose firearm is inherent in the commission of a crime, how is the loose firearm treated?',
			options: ['Aggravating circumstance', 'Mitigating circumstance', 'Exempting circumstance', 'Absolutory cause'],
			optionExplanations: [
				'Sec. 29 of R.A. 10591 expressly treats the use of a loose firearm, when inherent in the crime, as an aggravating circumstance.',
				'Using an unlicensed firearm increases rather than reduces criminal liability.',
				'It does not exempt the offender from criminal liability.',
				'An absolutory cause exempts an offender for policy reasons; a loose firearm instead aggravates the penalty.'
			],
			correctIndex: 0,
			key: 'Aggravating circumstance',
			explanation:
				'Aggravating circumstance. Under Sec. 29 of R.A. 10591, the use of a loose firearm, when inherent in the commission of a crime, shall be considered as an aggravating circumstance.',
			legalBasis: 'Sec. 29, R.A. No. 10591'
		},

		// ---- PART III: PENALTIES, ISLAW & CASE PROBLEMS (Q57–Q63) ----
		{
			id: 'crim1_lloren:problems:59',
			topicId: 'problems',
			topic: 'ISLAW, Penalties & Case Problems (Q57–Q63)',
			tag: 'effects',
			question:
				'A crime of homicide is committed with a prescribed penalty of reclusion temporal. The crime is committed without any aggravating or mitigating circumstance. Applying the Indeterminate Sentence Law, what is the maximum penalty (maximum term)?',
			options: [
				'Reclusion Temporal Medium',
				'Reclusion Temporal Minimum',
				'Reclusion Temporal Maximum',
				'Prision Mayor Medium'
			],
			optionExplanations: [
				'14 years, 8 months and 1 day to 17 years and 4 months — imposed in the medium period under Art. 64(1) when there are no modifying circumstances.',
				'12 years and 1 day to 14 years and 8 months — applies only when there is a mitigating circumstance with no aggravating.',
				'17 years, 4 months and 1 day to 20 years — applies only when there is an aggravating circumstance with no mitigating.',
				'8 years and 1 day to 10 years — prision mayor is the range for the minimum term (next lower in degree), not the maximum term.'
			],
			correctIndex: 0,
			key: 'Reclusion Temporal Medium',
			explanation:
				'Reclusion Temporal Medium. Under Sec. 1 of the ISLAW and Art. 64(1) of the RPC, when there are neither mitigating nor aggravating circumstances, the maximum term is imposed in the medium period of the prescribed penalty: reclusion temporal medium (14 yrs 8 mos 1 day to 17 yrs 4 mos), while the minimum term is anywhere within prision mayor (6 yrs 1 day to 12 yrs).',
			legalBasis: 'Sec. 1, Act No. 4103 (ISLAW); Art. 64(1), RPC'
		},
		{
			id: 'crim1_lloren:problems:60',
			topicId: 'problems',
			topic: 'ISLAW, Penalties & Case Problems (Q57–Q63)',
			tag: 'exceptions',
			question: 'Mr. Hopeless committed suicide by jumping and fell onto his wife, causing her death. Is he liable for parricide?',
			options: [
				'No, not liable for parricide',
				'Yes, liable under Art. 4(1)',
				'Yes, liable with praeter intentionem',
				'No, liable for an impossible crime'
			],
			optionExplanations: [
				'Attempting suicide is not a felony under the RPC (Art. 253 only punishes assisting suicide), so Art. 4(1) does not apply.',
				'Art. 4(1) applies only when the offender is committing an intentional felony (dolo); suicide is not a felony.',
				'Praeter intentionem is a mitigating circumstance that presupposes a felony was being committed.',
				'Impossible crime (Art. 4[2]) requires intent to commit an offense against persons or property.'
			],
			correctIndex: 0,
			key: 'No, not liable for parricide',
			explanation:
				'No, Mr. Hopeless is not liable for parricide (Reyes, Art. 4, p. 69). Art. 4(1) requires that the offender be "committing a felony" (dolo). Attempting suicide is not a felony under the RPC (Art. 253 only punishes giving assistance to suicide), so Art. 4(1) does not apply.',
			legalBasis: 'Art. 4(1) & Art. 253, RPC (Reyes, p. 69)'
		},
		{
			id: 'crim1_lloren:problems:61',
			topicId: 'problems',
			topic: 'ISLAW, Penalties & Case Problems (Q57–Q63)',
			tag: 'jurisprudence',
			question:
				'A wife intended to poison her husband with powdered rat poison, but she mistakenly used Ajinomoto ("powder rat poison pero ajinomoto iya na gamit"). What crime is the wife liable for?',
			options: [
				'Impossible crime',
				'Attempted parricide',
				'Frustrated parricide',
				'No crime at all'
			],
			optionExplanations: [
				'Under Art. 4(2), she intended a crime against persons (parricide) but employed ineffectual means (harmless Ajinomoto).',
				'Attempted parricide requires means capable of producing death; harmless seasoning cannot consummate parricide.',
				'Frustrated parricide requires acts that would produce death as a consequence.',
				'Art. 4(2) specifically punishes impossible crimes to suppress criminal tendencies even when the means fail.'
			],
			correctIndex: 0,
			key: 'Impossible crime',
			explanation:
				'Impossible crime (ineffectual means) under Art. 4(2) of the RPC. Reyes (p. 87) gives the exact same example where a person mistakes sugar for arsenic.',
			legalBasis: 'Art. 4(2), Revised Penal Code (Reyes, p. 87)'
		},
		{
			id: 'crim1_lloren:problems:62',
			topicId: 'problems',
			topic: 'ISLAW, Penalties & Case Problems (Q57–Q63)',
			tag: 'exceptions',
			question:
				'Mr. CC was convicted of theft by a first-level court and sentenced to 6 years of prision correccional in its maximum period. He appealed to the second-level court, which affirmed the sentence in toto. Can he apply for probation?',
			options: [
				'No, because he perfected an appeal',
				'Yes, because 6 years is probationable',
				'Yes, because the sentence was affirmed',
				'No, because theft is disqualified'
			],
			optionExplanations: [
				'His original 6-year sentence was already probationable; perfecting an appeal bars probation under Sec. 4 of P.D. 968 (R.A. 10707 exception applies only when a non-probationable penalty is lowered on appeal).',
				'Even though 6 years is within the probationable ceiling, appealing an already probationable sentence forfeits the right to apply.',
				'Affirmance of a probationable sentence on appeal does not restore the right to apply for probation.',
				'Theft is not among the crimes disqualified from probation under Sec. 9 of P.D. 968.'
			],
			correctIndex: 0,
			key: 'No, because he perfected an appeal',
			explanation:
				'No. Under Sec. 4 of P.D. 968 as amended by R.A. 10707, no application for probation shall be entertained or granted if the defendant has perfected an appeal from the judgment of conviction. The exception under R.A. 10707 only applies when an appeal modifies a non-probationable penalty into a probationable one. Here, his 6-year sentence was already probationable, and he chose to appeal.',
			legalBasis: 'Secs. 4 & 9(a), P.D. No. 968, as amended by R.A. No. 10707'
		},
		{
			id: 'crim1_lloren:problems:63',
			topicId: 'problems',
			topic: 'ISLAW, Penalties & Case Problems (Q57–Q63)',
			tag: 'jurisprudence',
			question:
				'A was convicted of frustrated murder by a second-level court and was sentenced to 8 years to 14 years of imprisonment. He appealed to the Court of Appeals, which modified the penalty and sentenced him to 4 years of prision correccional. Can he apply for probation?',
			options: [
				'Yes, he may apply for probation',
				'No, appeal permanently waives probation',
				'No, frustrated murder is disqualified',
				'Yes, after serving the minimum term'
			],
			optionExplanations: [
				'Under R.A. 10707 and Colinares v. People, when an appeal modifies a non-probationable penalty (8–14 yrs) into a probationable one (4 yrs), the accused may apply before finality.',
				'R.A. 10707 carved out an express exception when the original sentence was non-probationable and was lowered on appeal.',
				'Frustrated murder is not categorically excluded once the final modified penalty is within the 6-year probationable limit.',
				'Probation is applied for before serving the sentence, within 15 days from notice of the modified judgment.'
			],
			correctIndex: 0,
			key: 'Yes, he may apply for probation',
			explanation:
				'Yes. Under R.A. 10707 and Colinares v. People (G.R. No. 182748, Dec. 13, 2011), when a judgment of conviction imposing a non-probationable penalty (8–14 years) is appealed and modified through the imposition of a probationable penalty (4 years of prision correccional), the accused may apply for probation based on the modified decision before it becomes final, in the trial court that convicted him.',
			legalBasis: 'Sec. 4, P.D. No. 968, as amended by R.A. No. 10707; Colinares v. People'
		},
		{
			id: 'crim1_lloren:problems:64',
			topicId: 'problems',
			topic: 'ISLAW, Penalties & Case Problems (Q57–Q63)',
			tag: 'memorization',
			question: 'Under the Flag State Rule in criminal law, what law governs a ship sailing on the high seas?',
			options: [
				'Law of the country whose flag it flies',
				'Law of the ship captain\'s nationality',
				'Law of the last port of call',
				'Law of the passengers\' majority nationality'
			],
			optionExplanations: [
				'The country of registration (whose flag the vessel flies) exercises jurisdiction and control over the vessel on the high seas.',
				'Jurisdiction follows the vessel\'s registration/flag, not the personal nationality of its captain.',
				'The last port of call loses territorial jurisdiction once the vessel sails onto the high seas.',
				'Passenger nationality does not determine the governing law of a ship on the high seas.'
			],
			correctIndex: 0,
			key: 'Law of the country whose flag it flies',
			explanation:
				'The flag state rule means that a ship on the high seas is governed by the laws of the country whose flag it flies, because that country has jurisdiction and control over the vessel. The flag of the ship is the nationality it registers under.',
			legalBasis: 'Art. 2(1), RPC (Reyes, p. 25); Flag State Rule — Art. 92, UNCLOS'
		},
		{
			id: 'crim1_lloren:problems:65',
			topicId: 'problems',
			topic: 'ISLAW, Penalties & Case Problems (Q57–Q63)',
			tag: 'effects',
			question:
				'Homicide (reclusion temporal) is committed with 1 generic aggravating circumstance, 2 privileged mitigating circumstances, and 1 ordinary mitigating circumstance. Applying the Indeterminate Sentence Law, what are the minimum and maximum terms?',
			options: [
				'Min: arresto mayor; Max: prision correccional med',
				'Min: prision correccional; Max: prision mayor med',
				'Min: prision mayor; Max: reclusion temporal min',
				'Min: arresto menor; Max: arresto mayor max'
			],
			optionExplanations: [
				'Two privileged mitigating lower reclusion temporal by 2 degrees to prision correccional; 1 aggravating and 1 ordinary mitigating offset (medium); minimum is 1 degree lower (arresto mayor).',
				'This lowers the penalty by only 1 degree instead of 2 degrees for the two privileged mitigating circumstances.',
				'This fails to apply the two privileged mitigating circumstances before determining the minimum and maximum terms.',
				'This lowers the penalty by 3 degrees instead of 2 degrees.'
			],
			correctIndex: 0,
			key: 'Min: arresto mayor; Max: prision correccional med',
			explanation:
				'Homicide is prescribed reclusion temporal. Two privileged mitigating circumstances lower it two degrees: prision mayor, then prision correccional. The 1 aggravating and 1 ordinary mitigating circumstance offset each other (Art. 64[4]), so the maximum term is prision correccional medium (2 yrs 4 mos 1 day to 4 yrs 2 mos). The minimum term comes from the penalty next lower to the lowered penalty, which is arresto mayor (1 mo 1 day to 6 mos).',
			legalBasis: 'Sec. 1, Act No. 4103 (ISLAW); Arts. 61, 64(4), 68 & 69, RPC'
		},
		{
			id: 'crim1_lloren:problems:66',
			topicId: 'problems',
			topic: 'ISLAW, Penalties & Case Problems (Q57–Q63)',
			tag: 'effects',
			question:
				'RRR was convicted of 11 counts of unjust vexation, and the sentence imposed upon him is 11 days of arresto menor per count. How many days of imprisonment shall be imposed, and why?',
			options: [
				'33 days',
				'121 days',
				'30 days',
				'40 years'
			],
			optionExplanations: [
				'Under the three-fold rule (Art. 70), the maximum duration of the sentence shall not exceed three times the most severe penalty imposed (3 × 11 days).',
				'The offender must serve all 11 counts in full (11 × 11 days) without limitation.',
				'Arresto menor cannot exceed 30 days even for multiple convictions.',
				'The absolute maximum limit under Art. 70 applies instead of the three-fold rule.'
			],
			correctIndex: 0,
			key: '33 days',
			explanation:
				'33 days under the Three-Fold Rule (Art. 70, RPC). When a convict has to serve two or more penalties, the maximum duration of the sentence shall not be more than three-fold the length of time corresponding to the most severe of the penalties imposed upon him: 3 × 11 days = 33 days.',
			legalBasis: 'Art. 70, Revised Penal Code (Three-Fold Rule) (Reyes, pp. 748–749)'
		}
	],
	essays: [
		{
			id: 'crim1_lloren:alac:1',
			title: 'Q57 — Homicide Under the Indeterminate Sentence Law',
			topic: 'Indeterminate Sentence Law & Penalties',
			factPattern:
				'A crime of homicide is committed with a prescribed penalty of reclusion temporal. The crime is committed without any aggravating or mitigating circumstance.',
			question: 'Applying the Indeterminate Sentence Law, what are the minimum and maximum penalties to be imposed? Explain.',
			modelAnswer: {
				answer:
					'The maximum term is reclusion temporal in its medium period (14 years, 8 months and 1 day to 17 years and 4 months), and the minimum term is anywhere within the range of prision mayor (6 years and 1 day to 12 years).',
				legalBasis:
					'Under Section 1 of the Indeterminate Sentence Law (Act No. 4103, as amended), for an offense punishable under the Revised Penal Code, the court shall sentence the accused to an indeterminate sentence the maximum term of which shall be that which, in view of the attending circumstances, could be properly imposed under the rules of the Code, and the minimum which shall be within the range of the penalty next lower to that prescribed by the Code for the offense. Under Article 64(1) of the RPC, when there are neither aggravating nor mitigating circumstances, the penalty prescribed by law shall be imposed in its medium period.',
				application:
					'Homicide under Article 249 of the RPC is punishable by reclusion temporal. Since no modifying circumstances attended the crime, Article 64(1) places the maximum term in the medium period of reclusion temporal (14 years, 8 months and 1 day to 17 years and 4 months). The penalty next lower in degree to reclusion temporal is prision mayor, so the minimum term may be fixed anywhere within the full range of prision mayor (6 years and 1 day to 12 years).',
				conclusion:
					'The proper indeterminate penalty has a minimum anywhere within prision mayor and a maximum of reclusion temporal in its medium period.'
			}
		},
		{
			id: 'crim1_lloren:alac:2',
			title: 'Q58 — Suicide Falling on Spouse (Mr. Hopeless)',
			topic: 'Felonies & Criminal Liability (Art. 4)',
			factPattern: 'Mr. Hopeless attempted to commit suicide by jumping from a height, and he fell onto his wife, causing her death.',
			question: 'Is Mr. Hopeless liable for parricide? Explain.',
			modelAnswer: {
				answer: 'No, Mr. Hopeless is not liable for parricide.',
				legalBasis:
					'Under Article 4(1) of the Revised Penal Code, criminal liability shall be incurred by any person committing a felony (delito) although the wrongful act done be different from that which he intended. For Article 4(1) to apply, the offender must be performing an intentional felony (dolo) that is the proximate cause of the resulting injury. Under Article 253 of the RPC, only giving assistance to suicide is punishable; attempting suicide itself is not a felony.',
				application:
					'When Mr. Hopeless jumped to take his own life, he was not committing a felony because attempting suicide is not penalized by the Revised Penal Code. Since the first requisite of Article 4(1) — that an intentional felony was being committed — is absent, he cannot be held liable for the unintended death of his wife as an intentional felony of parricide.',
				conclusion: 'Mr. Hopeless is not criminally liable for parricide.'
			}
		},
		{
			id: 'crim1_lloren:alac:3',
			title: 'Q59 — Ajinomoto Mistaken for Rat Poison',
			topic: 'Impossible Crimes (Art. 4[2])',
			factPattern:
				'A wife intended to kill her husband by mixing powdered rat poison into his food, but by mistake she used Ajinomoto (MSG seasoning) instead ("powder rat poison pero ajinomoto iya na gamit"). The husband suffered no harm.',
			question: 'What crime is the wife liable for? Explain.',
			modelAnswer: {
				answer: 'The wife is liable for an impossible crime.',
				legalBasis:
					'Under Article 4(2) of the Revised Penal Code, criminal liability is incurred by any person performing an act which would be an offense against persons or property, were it not for the inherent impossibility of its accomplishment or on account of the employment of inadequate or ineffectual means, provided the act does not constitute a violation of another provision of the Code.',
				application:
					'The wife acted with intent to kill her husband, which would have been parricide (a crime against persons). However, because she mistakenly used harmless Ajinomoto seasoning instead of rat poison, the means she employed was completely ineffectual to cause death. Her act also does not violate any other provision of the RPC.',
				conclusion: 'The wife is criminally liable for an impossible crime due to the employment of ineffectual means.'
			}
		},
		{
			id: 'crim1_lloren:alac:4',
			title: 'Q60(a) — Probation After Appealing a Probationable Penalty',
			topic: 'Probation Law (P.D. 968 & R.A. 10707)',
			factPattern:
				'Mr. CC was convicted of the crime of theft by a first-level court and was sentenced to 6 years of prision correccional in its maximum period. He appealed to the second-level court, which affirmed the sentence in toto.',
			question: 'Can Mr. CC apply for probation? Explain.',
			modelAnswer: {
				answer: 'No, Mr. CC can no longer apply for probation.',
				legalBasis:
					'Under Section 4 of the Probation Law (P.D. No. 968, as amended by R.A. No. 10707), no application for probation shall be entertained or granted if the defendant has perfected an appeal from the judgment of conviction. The sole exception under R.A. No. 10707 applies when a judgment imposing a non-probationable penalty is appealed and is modified into a probationable penalty.',
				application:
					'Here, Mr. CC was initially sentenced to 6 years of prision correccional, which does not exceed 6 years and was therefore already a probationable penalty at the time of his conviction by the first-level court. Instead of applying for probation, he chose to perfect an appeal. Because his original sentence was already probationable, the exception under R.A. No. 10707 does not apply.',
				conclusion: 'Mr. CC is disqualified from applying for probation because he perfected an appeal from an already probationable sentence.'
			}
		},
		{
			id: 'crim1_lloren:alac:5',
			title: 'Q60(b) — Probation After Appeal Modifies Penalty (Colinares Doctrine)',
			topic: 'Probation Law (P.D. 968 & R.A. 10707)',
			factPattern:
				'A was convicted of frustrated murder by a second-level court and was sentenced to 8 years to 14 years of imprisonment. He appealed to the Court of Appeals, which modified the penalty and sentenced him to 4 years of prision correccional.',
			question: 'Can A apply for probation? Explain.',
			modelAnswer: {
				answer: 'Yes, A can apply for probation.',
				legalBasis:
					'Under Section 4 of P.D. No. 968, as amended by R.A. No. 10707 (adopting the doctrine in Colinares v. People, G.R. No. 182748, December 13, 2011), when a judgment of conviction imposing a non-probationable penalty is appealed or reviewed, and such judgment is modified through the imposition of a probationable penalty (not exceeding 6 years) or conviction for a lesser offense, the defendant shall be allowed to apply for probation based on the modified decision before such decision becomes final, in the trial court where the judgment of conviction was rendered.',
				application:
					'A was originally sentenced by the trial court to 8 to 14 years of imprisonment, a non-probationable penalty that gave him no right to apply for probation at the time. On appeal, the Court of Appeals lowered his sentence to 4 years of prision correccional, which is within the 6-year probationable threshold.',
				conclusion:
					'A may file an application for probation in the trial court based on the modified decision of the Court of Appeals before it becomes final.'
			}
		},
		{
			id: 'crim1_lloren:alac:6',
			title: 'Q61 — The Flag State Rule',
			topic: 'Territoriality & Extraterritoriality (Art. 2)',
			factPattern: 'A merchant vessel registered in the Philippines is sailing on the high seas when a felony is committed on board.',
			question: 'Explain the Flag State Rule and how it governs jurisdiction over the vessel.',
			modelAnswer: {
				answer:
					'Under the Flag State Rule, a vessel on the high seas is governed by the laws of the country whose flag it flies — that is, the country where it is officially registered.',
				legalBasis:
					'Under Article 2(1) of the Revised Penal Code and principles of public international law, Philippine penal laws are enforceable outside Philippine territory against those who commit an offense while on a Philippine ship or airship. The Flag State Rule provides that the country of registration (whose flag the vessel flies) exercises jurisdiction and control over the ship while on the high seas.',
				application:
					'Because the high seas are outside the territorial jurisdiction of any sovereign state, the nationality of the vessel — determined by its registration (in the Philippines, with MARINA) — supplies the governing law for the ship, its crew, and acts committed on board while at sea.',
				conclusion:
					'Under the Flag State Rule, the country of registration whose flag the ship flies has jurisdiction over crimes committed aboard the vessel on the high seas.'
			}
		},
		{
			id: 'crim1_lloren:alac:7',
			title: 'Q62 — Homicide with 2 Privileged Mitigating, 1 Ordinary Mitigating & 1 Aggravating',
			topic: 'Indeterminate Sentence Law & Penalties',
			factPattern:
				'The accused was convicted of homicide (punishable by reclusion temporal), attended by one (1) generic aggravating circumstance, two (2) privileged mitigating circumstances, and one (1) ordinary mitigating circumstance.',
			question: 'Applying the Indeterminate Sentence Law, what are the minimum and maximum periods of the penalty to be imposed? Explain.',
			modelAnswer: {
				answer:
					'The maximum term is prision correccional in its medium period (2 years, 4 months and 1 day to 4 years and 2 months), and the minimum term is anywhere within the range of arresto mayor (1 month and 1 day to 6 months).',
				legalBasis:
					'Under Articles 68, 69, and 64 of the Revised Penal Code, privileged mitigating circumstances are applied first to lower the prescribed penalty by degrees and can never be offset by aggravating circumstances. Ordinary mitigating and generic aggravating circumstances are then offset against each other under Article 64(4) to determine the period of the lowered penalty for the maximum term. Under Section 1 of the Indeterminate Sentence Law, when the penalty is lowered by a privileged mitigating circumstance, the lowered penalty is the starting point and the minimum term is taken from the penalty next lower in degree.',
				application:
					'Homicide is punishable by reclusion temporal. Lowering reclusion temporal by two degrees on account of the two privileged mitigating circumstances yields prision mayor (one degree lower) and then prision correccional (two degrees lower). Next, the one generic aggravating circumstance and the one ordinary mitigating circumstance offset each other under Article 64(4), placing the maximum term in the medium period of prision correccional (2 years, 4 months and 1 day to 4 years and 2 months). Starting from the lowered penalty of prision correccional, the penalty next lower in degree is arresto mayor (1 month and 1 day to 6 months), from which the minimum term is taken.',
				conclusion:
					'The indeterminate sentence is a minimum term anywhere within arresto mayor (1 month and 1 day to 6 months) to a maximum term of prision correccional in its medium period (2 years, 4 months and 1 day to 4 years and 2 months).'
			}
		},
		{
			id: 'crim1_lloren:alac:8',
			title: 'Q63 — Three-Fold Rule on 11 Counts of Unjust Vexation',
			topic: 'Service of Sentence (Art. 70)',
			factPattern:
				'RRR was convicted of 11 counts of unjust vexation, and the sentence imposed upon him is 11 days of arresto menor for each count.',
			question: 'How many days of imprisonment shall be imposed upon RRR, and why?',
			modelAnswer: {
				answer: '33 days of arresto menor shall be imposed upon RRR under the Three-Fold Rule.',
				legalBasis:
					'Under Article 70 of the Revised Penal Code (the Three-Fold Rule), when the culprit has to serve two or more penalties, the maximum duration of the convict\'s sentence shall not be more than three-fold the length of time corresponding to the most severe of the penalties imposed upon him, and in no case to exceed 40 years.',
				application:
					'RRR was sentenced to 11 days of arresto menor for each of the 11 counts, which would total 121 days if served in full. Because 121 days exceeds three times the most severe penalty (11 days), the Three-Fold Rule caps his service of sentence at 3 × 11 days = 33 days.',
				conclusion: 'RRR shall serve a maximum of 33 days of imprisonment pursuant to the Three-Fold Rule under Article 70 of the RPC.'
			}
		},
		{
			id: 'crim1_lloren:alac:9',
			title: '2026 Bar Q1 — Quasi-Recidivism Does Not Require the Same Title of the RPC',
			topic: 'Quasi-Recidivism & Recidivism (Art. 160 & Art. 14[9])',
			source: 'Bar Exam',
			factPattern:
				'Alfie, convicted of homicide, served his full sentence, reformed, and later voluntarily surrendered after a stabbing incident, pleading guilty to the resulting murder charge. The RTC refused to appreciate voluntary surrender and plea of guilt, reasoning that Alfie is a special aggravated repeat offender since homicide and murder fall under the same Title of the Revised Penal Code.',
			question: 'Is the RTC correct?',
			modelAnswer: {
				answer: 'No, the RTC is not correct.',
				legalBasis:
					'Article 160 of the Revised Penal Code defines quasi-recidivism as the commission of a felony by one who has not yet begun serving, or is still serving, a sentence imposed by final judgment for a prior offense; nothing in Article 160 requires that the two offenses belong to the same Title of the Code. That same-Title requirement belongs to ordinary recidivism under Article 14, paragraph 9, an entirely separate aggravating circumstance. Article 160 further provides that a quasi-recidivist shall be punished in the maximum period of the penalty prescribed for the new felony, and jurisprudence has consistently held that this special aggravating circumstance cannot be offset by an ordinary mitigating circumstance (People v. Layson, G.R. No. L-25177, October 31, 1969; People v. Retania, G.R. No. L-34841, January 22, 1980).',
				application:
					'Here, Alfie had already completed service of his sentence for homicide before he committed the killing that led to his murder conviction, which places him outside Article 160 altogether, since quasi-recidivism applies only to one who commits a new felony before beginning or while still serving a prior sentence, not to one who had already finished serving it. At most, Alfie is an ordinary recidivist considering that homicide and murder are embraced in the same Title of the RPC, which has the effect of offsetting only one of the ordinary mitigating circumstances invoked by him.',
				conclusion:
					'Therefore, the RTC is incorrect: Alfie is not a quasi-recidivist because he had already fully served his homicide sentence when he committed the killing that led to his murder charge, and quasi-recidivism never required that the offenses share the same Title of the Code.'
			}
		},
		{
			id: 'crim1_lloren:alac:10',
			title: '2026 Bar Q3 — Territorial Jurisdiction Over Psychological Violence Under RA 9262 Committed Partly Abroad',
			topic: 'Territoriality & Jurisdiction (Art. 2 & RA 9262)',
			source: 'Bar Exam',
			factPattern:
				'Seth, a Filipino who acquired permanent residency in the Netherlands, had an affair with Noor there. His wife Maggie, in Quezon City, filed a case against him for psychological violence under RA 9262, citing the mental and emotional anguish she suffered because of his infidelity. Seth moved to quash for lack of territorial jurisdiction since the affair occurred abroad. The RTC granted the motion.',
			question: 'Is the RTC correct?',
			modelAnswer: {
				answer: 'No, the RTC is incorrect.',
				legalBasis:
					'Under RA 9262, psychological violence is the means employed by the offender, while mental or emotional anguish is the essential element of the offense of violation of Section 5(i); where the offender\'s acts abroad, such as marital infidelity, caused the psychological or emotional harm actually suffered by the wife within Philippine territory, the crime is considered committed, in whole or in part, within the Philippines, since the essential element of mental and emotional anguish—without which there is no completed offense—occurred where the wife resided and suffered that harm (AAA v. BBB, G.R. No. 212448, January 11, 2018).',
				application:
					'Here, Maggie resided in Quezon City throughout the period in question and it was there that she experienced the mental and emotional anguish resulting from Seth\'s marital infidelity committed abroad. Since this suffering—the very element that completes the offense under Section 5(i)—took place within Quezon City, the RTC of Quezon City has territorial jurisdiction to try the case, notwithstanding that the underlying infidelity itself physically occurred in the Netherlands. Territorial jurisdiction in a continuing or transitory offense attaches wherever any essential element of the crime took place.',
				conclusion:
					'Hence, the RTC is incorrect in dismissing the case for lack of jurisdiction: since Maggie\'s psychological and emotional suffering, an essential element of the offense under Section 5(i) of RA 9262, occurred within Quezon City, the RTC of Quezon City retains jurisdiction over the offense.'
			}
		},
		{
			id: 'crim1_lloren:alac:11',
			title: '2026 Bar Q4 — Reckless Imprudence With Multiple Consequences Is Not a Complex Crime Under Article 48',
			topic: 'Complex Crimes & Quasi-Offenses (Art. 48 & Art. 365)',
			source: 'Bar Exam',
			factPattern:
				'Michael\'s single act of reckless driving caused a collision resulting in injuries to Moe, Larry, and Curly and PHP 390,000 in damage to the company vehicle. A single Information charged him with reckless imprudence resulting in multiple injuries and damage to property. Michael moved to quash for duplicity. The prosecution argued this was properly a complex crime under Article 48, with the penalty for the most serious offense imposed in its maximum period.',
			question: 'Is the prosecution correct?',
			modelAnswer: {
				answer: 'No, the prosecution is incorrect.',
				legalBasis:
					'Reckless imprudence under Article 365 is not a mere means of committing separate intentional felonies but a single, distinct quasi-offense in itself, the gravamen of which is the mental attitude of the offender—his lack of precaution—rather than the various resulting harms. Article 48 on complex crimes, designed for the complexing of intentional felonies arising from a single act, is conceptually incompatible with and does not apply to quasi-offenses under Article 365, since the multiple consequences of a single reckless act are not separate felonies to be complexed but merely factors that determine the appropriate penalty for the single quasi-crime under Article 365\'s own graduated scheme (Ivler v. Modesto-San Pedro, G.R. No. 172716, November 17, 2010; Morales v. People, G.R. No. 240337-38, January 4, 2022).',
				application:
					'Here, Michael\'s single reckless act in driving gave rise to multiple consequences—injuries to three individuals and damage to the company vehicle—but these consequences do not transform the offense into two or more complexed felonies; they remain relevant only to computing the appropriate single penalty under Article 365. The Information charging Michael in a single count for reckless imprudence resulting in multiple injuries and damage to property is not defective for duplicity, since all consequences of a single quasi-offense must be alleged together in one Information, but the prosecution is wrong in invoking Article 48\'s complex-crime framework and its "most serious crime in its maximum period" formula to compute the penalty.',
				conclusion:
					'Therefore, the prosecution is incorrect: Michael\'s single act of reckless imprudence with multiple consequences is properly charged as one offense under Article 365, not as a complex crime under Article 48, and the applicable penalty must be determined under Article 365\'s own rules.'
			}
		},
		{
			id: 'crim1_lloren:alac:12',
			title: '2026 Bar Q6 — The Three-Fold Rule Under Article 70 Governs Service, Not Imposition, of Multiple Penalties',
			topic: 'Service of Sentence (Art. 70)',
			source: 'Bar Exam',
			factPattern:
				'Rico was convicted of four counts of sexual abuse under Section 5(b) of RA 7610, each penalized with an indeterminate sentence of 11 years of prision mayor to 18 years of reclusion temporal. He argues that, applying the three-fold rule and the 40-year cap, the trial court should have imposed a maximum penalty of 40 years across all four cases.',
			question: 'Is Rico correct?',
			modelAnswer: {
				answer: 'No, Rico is incorrect.',
				legalBasis:
					'The three-fold rule under Article 70 of the Revised Penal Code governs only the service of multiple penalties already validly imposed for separate convictions; it does not limit or alter the penalty that a court must impose for each individual crime of which an accused is found guilty. The trial court has no discretion to disregard the proper indeterminate penalty prescribed by law for each count simply because the accused faces multiple counts; each count must be penalized on its own terms, and it is only when the convict actually serves these several sentences that Article 70 operates to cap the total period of imprisonment actually served at three times the most severe penalty imposed, and in no case more than 40 years.',
				application:
					'Here, the trial court correctly imposed the indeterminate penalty of 11 years of prision mayor, as minimum, to 18 years of reclusion temporal, as maximum, for each of Rico\'s four separate counts of sexual abuse, since Article 70 has no bearing on how the court fixes the penalty at the point of conviction and sentencing. It is only at the point when Rico begins serving these four separate sentences successively that the three-fold rule will operate to ensure that he does not actually serve more than three times 18 years, or 40 years, whichever is lower.',
				conclusion:
					'Hence, Rico is incorrect: the trial court properly imposed the full indeterminate penalty for each of the four counts, and the three-fold rule and 40-year cap under Article 70 apply only at the stage of actually serving the aggregate sentences, not at the stage of imposing the penalty for each conviction.'
			}
		},
		{
			id: 'crim1_lloren:alac:13',
			title: '2026 Bar Q7 — Recidivist Status Excludes an Accused from Crediting Preventive Imprisonment Under RA 10592',
			topic: 'Preventive Imprisonment & Recidivism (Art. 29 & RA 10592)',
			source: 'Bar Exam',
			factPattern:
				'Kardo, previously convicted of serious physical injuries, was charged with murder and detained without bail for three years before the trial court granted his belated Petition for Bail. He was ultimately convicted only of homicide and sentenced to nine years of prision mayor to fifteen years of reclusion temporal.',
			question: 'Is Kardo entitled to credit for his three years of preventive imprisonment?',
			modelAnswer: {
				answer: 'No, Kardo is not entitled to any credit for his three years of preventive imprisonment.',
				legalBasis:
					'Article 29 of the Revised Penal Code, as amended by Republic Act No. 10592, grants an accused who has undergone preventive imprisonment full credit for that period in the service of his sentence, provided he agrees in writing, after being informed of the effects and with the assistance of counsel, to abide by the same disciplinary rules imposed on convicted prisoners; if he declines to so agree, he is credited only four-fifths of the preventive imprisonment period. Both of these crediting options, however, apply only to detainees who are not recidivists; the amended provision expressly excepts from the entire crediting scheme those who are recidivists or have been previously convicted twice or more of any crime, disqualifying a recidivist from both full credit and the four-fifths fallback.',
				application:
					'Here, Kardo\'s prior conviction for serious physical injuries and his present conviction for homicide both fall under Title Eight of the Revised Penal Code (Crimes Against Persons), satisfying the definition of recidivism under Article 14, paragraph 9. While recidivism must be specifically alleged in the Information before a court may appreciate it as an aggravating circumstance affecting the imposable penalty for the new crime, Article 29\'s exclusion of recidivists from crediting preventive imprisonment is not conditioned on such an allegation; the exclusion operates simply by virtue of the accused\'s status as a recidivist established by his own record of prior conviction. Since Kardo is a recidivist, he falls outside Article 29\'s crediting scheme entirely.',
				conclusion:
					'Therefore, Kardo is not entitled to any credit for his three years of preventive imprisonment against his homicide sentence, since his status as a recidivist excludes him altogether from Article 29\'s crediting provisions under RA 10592.'
			}
		},
		{
			id: 'crim1_lloren:alac:14',
			title: '2026 Bar Q8 — Indeterminate Sentence Law Does Not Apply Where the Special Law Prescribes a Single, Fixed Penalty',
			topic: 'Indeterminate Sentence Law & Penalties',
			source: 'Bar Exam',
			factPattern:
				'Abeto was convicted of trafficking in persons under Section 4(c) of RA 9208, which Section 10(a) penalizes with a single fixed term of twenty years imprisonment. The trial court imposed a straight 20-year penalty. Abeto argues he should have received a minimum and maximum term to be eligible for parole under the Indeterminate Sentence Law.',
			question: 'Is Abeto correct?',
			modelAnswer: {
				answer: 'No, Abeto is incorrect.',
				legalBasis:
					'The Indeterminate Sentence Law, as applied to offenses punished under special laws, requires the court to impose a maximum term that shall not exceed the maximum fixed by the special law and a minimum term that shall not be less than the minimum prescribed by the same law; this mechanism presupposes that the special law itself provides a range—a minimum and a maximum—from which the court may draw the two terms of the indeterminate sentence. Where the special law instead prescribes only a single, fixed penalty with no range at all, there is no minimum or maximum for the court to select from, and the straight penalty as written in the law must be imposed exactly as prescribed (People v. Ducosin, 59 Phil. 109 [1933]).',
				application:
					'Here, Section 10(a) of RA 9208 fixes the penalty for a violation of Section 4 at a single term of twenty years imprisonment, without providing any range of years from which a minimum and maximum could be derived. Since there is no statutory range to work with, the trial court had no basis to construct an indeterminate sentence and correctly imposed the straight penalty of 20 years exactly as the law provides.',
				conclusion:
					'Thus, Abeto is incorrect: the Indeterminate Sentence Law cannot apply where the special law prescribes only a single, fixed penalty rather than a range of penalties, leaving the trial court no option but to impose the straight statutory penalty of 20 years.'
			}
		},
		{
			id: 'crim1_lloren:alac:15',
			title: '2026 Bar Q9 — Fixing the Penalty for Reckless Imprudence Resulting in Homicide With a Privileged Mitigating Circumstance',
			topic: 'Indeterminate Sentence Law & Penalties',
			source: 'Bar Exam',
			factPattern:
				'Tom, 17 years old, was convicted of reckless imprudence resulting in homicide, punishable by prision correccional in its medium and maximum periods. Considering the privileged mitigating circumstance of minority, the trial court imposed a straight penalty of four months and one day of arresto mayor.',
			question: 'Is the trial court correct?',
			modelAnswer: {
				answer: 'No, the trial court is incorrect.',
				legalBasis:
					'Where the penalty prescribed by law is a divisible one composed of distinct periods, the court cannot simply impose a straight penalty even after applying the privileged mitigating circumstance of minority. Article 365 offenses, though found in the Revised Penal Code, must still be penalized applying the Indeterminate Sentence Law\'s rule for felonies under the Code, requiring both a minimum and a maximum term.',
				application:
					'Here, the privileged mitigating circumstance of minority properly lowers the imposable penalty by one degree, since Tom was seventeen years old at the time of the incident. Prision correccional in its medium and maximum periods, lowered by one degree, becomes arresto mayor in its maximum period to prision correccional in its minimum period. Applying the Indeterminate Sentence Law, the maximum term of the indeterminate sentence should be taken from this new range, while the minimum term should be taken from the range next lower still—arresto mayor in its minimum and medium periods. A straight penalty of four months and one day, being merely the minimum extreme of the arresto mayor maximum to prision correccional minimum range, is not an indeterminate sentence with a proper minimum and maximum term as the law requires.',
				conclusion:
					'Hence, the trial court is incorrect: after applying the privileged mitigating circumstance of minority to lower the penalty by one degree to arresto mayor in its maximum period to prision correccional in its minimum period, the court should have imposed an indeterminate sentence with a minimum from arresto mayor in its minimum and medium periods and a maximum from arresto mayor in its maximum period to prision correccional in its minimum period.'
			}
		},
		{
			id: 'crim1_lloren:alac:16',
			title: '2026 Bar Q10 — Prescription of a Light Offense Discovered Years Later and the Effect of the Offenders\' Absence from the Philippines',
			topic: 'Prescription of Crimes (Arts. 90–91)',
			source: 'Bar Exam',
			factPattern:
				'Manuel was mugged by unknown assailants and suffered injuries requiring 10 days of medical attention. Six years later, he learned from a former classmate that siblings Lucio and Dencio committed the mugging before immediately leaving for the United States, only recently returning to the Philippines. Charges for less serious physical injuries, punishable by arresto mayor, were filed against them. They invoke prescription; Manuel argues the period only began upon his recent discovery of their identities, and that their absence abroad, given the Philippines\' extradition treaty with the United States, should not have tolled prescription in their favor.',
			question: 'As the trial judge, how would you rule on the issue of prescription?',
			modelAnswer: {
				answer:
					'As the trial judge, I would rule that the prescriptive period commenced to run only upon Manuel\'s actual discovery of the identity of his offenders, and that the offenders\' absence from the Philippines properly tolled the running of prescription regardless of any extradition treaty.',
				legalBasis:
					'Under Article 91 of the Revised Penal Code, the period of prescription for a crime begins to run from the day of its discovery by the offended party, the authorities, or their agents, not merely from the day the crime was committed, particularly where the identity of the offender was genuinely unknown to the offended party despite the commission of the crime being known. Under the same article, prescription does not run while the offender is absent from the Philippine Archipelago, a rule that applies regardless of whether an extradition treaty exists between the Philippines and the country where the offender is staying, since Article 91 draws no such distinction (People v. Alagao, G.R. No. L-20721, April 30, 1966; Del Rosario v. People, G.R. No. 235739, July 22, 2019).',
				application:
					'Here, less serious physical injuries, punishable by arresto mayor, prescribes in five years under Article 90. The prescriptive period began to run only when Manuel actually discovered the identity of Lucio and Dencio as his attackers, since before that, despite knowing a crime had been committed against him, he had no means of identifying who to charge. Furthermore, Lucio and Dencio\'s immediate departure for the United States the day after the mugging tolled the running of the prescriptive period for the entire duration of their stay abroad, regardless of the extradition treaty between the Philippines and the United States.',
				conclusion:
					'Therefore, I would rule that the prescriptive period began only upon Manuel\'s discovery of the identities of Lucio and Dencio, and that this same period was tolled for the entire duration of their absence in the United States regardless of the extradition treaty, meaning prescription has not set in against them.'
			}
		}
	]
};

export default crim1Lloren;
