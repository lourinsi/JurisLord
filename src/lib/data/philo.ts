import type { AlacEssay, CaseDigest, LawModule, McqQuestion } from '$lib/types';
import {
	CAREFUL,
	CASES,
	CRITIQUES,
	ENUMS,
	FIVE,
	GROUPS,
	LESSONS,
	PAIRS,
	RECURRING,
	SCHOOLS,
	SCHOOL_AXES,
	STAGES,
	TENSIONS,
	TERMS,
	THINKERS,
	WHY_MATTERS
} from '$lib/philo-content';
import { ESSAYS, KIND_OF, fmt, kinds, moves } from '$lib/philo';
import { esc } from '$lib/text';

const ID = 'philo';

function renderLesson(g: (typeof GROUPS)[number]): string {
	const l = LESSONS[g.id];
	const people = THINKERS.filter((t) => t.group === g.id);
	const enums = ENUMS.filter((e) => e.group === g.id);
	const terms = TERMS.filter((t) => t.group === g.id);
	const partId = `lesson-${g.id}`;

	const blocks: string[] = [
		`<h2 id="${partId}" class="sg-h2">${esc(g.title)}</h2>`,
		`<div class="rv-box rv-purple"><span class="rv-label">Thesis</span><p>${fmt(l.thesis)}</p>${
			l.points.length ? `<ul>${l.points.map((p) => `<li>${fmt(p)}</li>`).join('')}</ul>` : ''
		}</div>`
	];

	if (people.length) {
		blocks.push(
			`<h3 id="${partId}-thinkers" class="sg-h3">Key Thinkers (${esc(g.short)})</h3>`,
			...people.map(
				(t) =>
					`<div class="rv-card"><p class="rv-card-title">${esc(t.name)}</p><div class="rv-meta">${t.terms
						.map((tr) => `<span class="rv-badge rv-blue">${fmt(tr)}</span>`)
						.join('')}</div><p>${fmt(t.idea)}</p><div class="rv-box rv-yellow"><span class="rv-label">Remember as</span><p>${esc(
						t.remember
					)}</p></div>${t.also ? `<p class="rv-source">Also in: ${esc(t.also)}</p>` : ''}</div>`
			)
		);
	}

	if (enums.length) {
		blocks.push(
			`<h3 id="${partId}-enums" class="sg-h3">Enumerations (${esc(g.short)})</h3>`,
			...enums.map(
				(e) =>
					`<div class="rv-card"><p class="rv-card-title"><span class="rv-num">${esc(e.id)}</span>${esc(e.t)}</p>${
						e.mem ? `<div class="rv-box rv-yellow"><span class="rv-label">Memory aid</span><p>${esc(e.mem)}</p></div>` : ''
					}${e.intro ? `<p class="rv-source">${fmt(e.intro)}</p>` : ''}<ol>${e.it
						.map(([a, b]) => `<li><strong>${fmt(a)}</strong>${b ? ` — ${fmt(b)}` : ''}</li>`)
						.join('')}</ol>${
						e.trap ? `<div class="rv-box rv-orange"><span class="rv-label">Exam trap</span><p>${fmt(e.trap)}</p></div>` : ''
					}</div>`
			)
		);
	}

	if (terms.length) {
		blocks.push(
			`<h3 id="${partId}-terms" class="sg-h3">Definitions (${esc(g.short)})</h3>`,
			`<dl class="rv-dl">${terms
				.map(
					(t) =>
						`<dt>${esc(t.t)}</dt><dd><p>${esc(t.d)}</p>${
							t.x ? `<p class="rv-verify"><strong>Don’t confuse:</strong> ${esc(t.x)}</p>` : ''
						}<p class="rv-cite">${esc(t.src)}</p></dd>`
				)
				.join('')}</dl>`
		);
	}

	return blocks.join('\n');
}

function renderCompareAndCritique(): string {
	return [
		`<h2 id="schools-and-comparisons" class="sg-h2">Schools, Stage Theories &amp; Comparisons</h2>`,
		`<h3 id="four-schools" class="sg-h3">The Four Schools Side by Side</h3>`,
		`<div class="table-scroll"><table class="cmp-table"><thead><tr><th>Axis</th>${SCHOOLS.map((s) => `<th>${esc(s)}</th>`).join(
			''
		)}</tr></thead><tbody>${SCHOOL_AXES.map(
			([axis, ...cells]) => `<tr><td class="aspect">${esc(axis)}</td>${cells.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`
		).join('')}</tbody></table></div>`,
		`<h3 id="stage-theories" class="sg-h3">Five Stage Theories</h3>`,
		`<div class="table-scroll"><table class="cmp-table"><thead><tr><th>Thinker</th><th>What moves</th><th>Stages</th><th>Attitude to the last stage</th></tr></thead><tbody>${STAGES.map(
			([who, what, stages, att]) => `<tr><td class="aspect">${esc(who)}</td><td>${esc(what)}</td><td>${esc(stages)}</td><td>${esc(att)}</td></tr>`
		).join('')}</tbody></table></div>`,
		`<h3 id="likely-pairings" class="sg-h3">Likely Differentiate Pairings</h3>`,
		...PAIRS.map(
			(p) =>
				`<div class="rv-card"><p class="rv-card-title">${p.star ? '★ ' : ''}${esc(p.pair)}</p><div class="rv-box rv-green"><span class="rv-label">Common ground</span><p>${fmt(
					p.common
				)}</p></div><div class="rv-box rv-blue"><span class="rv-label">Key difference</span><p>${fmt(p.diff)}</p></div></div>`
		),
		`<h2 id="critiques-and-synthesis" class="sg-h2">Critiques, Recurring Ideas &amp; Exam Method</h2>`,
		`<h3 id="critiques-list" class="sg-h3">Critiques of Core Theories</h3>`,
		...CRITIQUES.map(
			(c) =>
				`<div class="rv-card"><p class="rv-card-title">${c.star ? '★ ' : ''}${esc(c.idea)}</p><div class="rv-box rv-green"><span class="rv-label">What it gets right</span><p>${fmt(
					c.right
				)}</p></div><div class="rv-box rv-orange"><span class="rv-label">The handout says</span><p>${fmt(
					c.weak
				)}</p></div><div class="rv-box rv-blue"><span class="rv-label">Push further</span><p>${fmt(c.push)}</p></div></div>`
		),
		`<h3 id="recurring-ideas" class="sg-h3">Nine Ideas That Keep Coming Back</h3>`,
		`<ol>${RECURRING.map(([idea, where, use]) => `<li><strong>${esc(idea)}</strong> — <em>${fmt(where)}</em>. ${fmt(use)}</li>`).join('')}</ol>`,
		`<h3 id="tensions" class="sg-h3">Tensions in Philippine Jurisprudence</h3>`,
		...TENSIONS.map(([t, d]) => `<div class="rv-box rv-red"><span class="rv-label">${esc(t)}</span><p>${fmt(d)}</p></div>`),
		`<h3 id="exam-method" class="sg-h3">How to Think Philosophically &amp; Answer Formulas</h3>`,
		`<ol>${moves.map(([t, d]) => `<li><strong>${esc(t)}</strong> ${fmt(d)}</li>`).join('')}</ol>`,
		...kinds.map(
			(k) =>
				`<div class="rv-card"><p class="rv-card-title">${esc(k.name)} — ${esc(k.tests)}</p><ol>${k.formula
					.map((f) => `<li>${esc(f)}</li>`)
					.join('')}</ol><p><strong>First line:</strong> ${esc(k.first)}</p><p class="rv-verify"><strong>Trap:</strong> ${esc(k.trap)}</p></div>`
		),
		`<h3 id="why-matters" class="sg-h3">Why Legal Philosophy Matters to a Law Student</h3>`,
		`<ul>${WHY_MATTERS.map(([t, src, eff]) => `<li><strong>${esc(t)}</strong> (${fmt(src)}) — ${fmt(eff)}</li>`).join('')}</ul>`,
		`<div class="rv-box rv-yellow"><span class="rv-label">If you remember only five sentences</span><ol>${FIVE.map((f) => `<li>${esc(f)}</li>`).join(
			''
		)}</ol></div>`,
		`<div class="rv-box rv-orange"><span class="rv-label">Handle with care</span><ul>${CAREFUL.map((c) => `<li>${fmt(c)}</li>`).join('')}</ul></div>`,
		`<h2 id="finals-alac-examinations" class="sg-h2">FINALS · Open-Ended ALAC Jurisprudential Examinations (Chapters 10–13)</h2>`,
		`<div class="rv-box rv-purple"><span class="rv-label">Examination Overview &amp; Professorial Instructions</span><p>Ten open-ended essay examination questions drawn from Chapters 10 through 13 of the legal philosophy curriculum. Each model answer follows the rigorous <strong>ALAC</strong> format (<strong>Answer</strong>, <strong>Legal Basis / Theory</strong>, <strong>Application</strong>, <strong>Conclusion</strong>) with specific textbook chapters, page citations (Pascual &amp; Borja handouts), primary philosophers, codal provisions, and Philippine Supreme Court jurisprudence.</p></div>`,
		`<h3 id="finals-alac-checklist" class="sg-h3">Summary Checklist for Examination Review</h3>`,
		`<div class="table-scroll"><table class="cmp-table"><thead><tr><th>Question Focus</th><th>Core Tenet Addressed</th><th>Primary Chapter &amp; Pages</th><th>Key Thinkers / Jurisprudence</th></tr></thead><tbody>${[
			['1. Law & Morals', 'Separability Thesis', 'Ch. 10 & 9 (pp. 139–156)', 'Austin, Hart, Bentham, Borja; Civil Code Arts. 10 & 19–21; Art. II Sec. 6; Estrada v. Escritor; Caltex; Macalintal'],
			['2. Coercion v. Legitimacy', 'Command & Sanction Theory', 'Ch. 10 & 13 (pp. 143–152)', 'Austin, Hart, Weber, St. Augustine, Rousseau, Kelsen; Art. II Sec. 1; Co Kim Cham'],
			['3. Unjust Statutes', 'Lex Injusta Non Est Lex & Radbruch Formula', 'Ch. 10, 6 & 7 (pp. 101–114, 148–156)', 'Aquinas, Augustine, Cicero, Radbruch, Fuller, Socrates; Nuremberg; UDHR; Republic v. Sandiganbayan (J. Puno); Imbong'],
			['4. Organic State', 'Organic Societal Continuity', 'Ch. 11 & 4 (pp. 157–168)', 'Montesquieu, Comte, Rousseau, Burke, Hegel, Dennis Lloyd; Oposa v. Factoran (C.J. Davide); Calalang'],
			['5. Historical Codification', 'Volksgeist & Customary Growth', 'Ch. 12 (pp. 173–184)', 'Savigny, Hugo, Thibaut, Bentham, Pound, Holmes, Villanueva; Civil Code Arts. 11–12; Alzua v. Johnson'],
			['6. Evolution of Status', '“From Status to Contract”', 'Ch. 12 & 13 (pp. 185–194)', 'Sir Henry Maine, Pound, Holmes, Laurel; Civil Code Art. 1700; Calalang v. Williams; Floresca v. Philex Mining'],
			['7. Social Engineering', 'Maximizing Human Wants / Balancing', 'Ch. 13 (pp. 205–218)', 'Pound, Jhering, Holmes, Laurel; Lantion; Soriano; Akbayan; Calalang; PBMEO v. Philippine Blooming Mills'],
			['8. Living Law', 'Inner Order of Associations', 'Ch. 13 (pp. 199–208)', 'Eugen Ehrlich, Friedman, Pound, Savigny; Civil Code Arts. 10–12; Art. XII Sec. 5; IPRA (RA 8371)'],
			['9. Marxist Critique', 'Law as Class Superstructure', 'Ch. 13 & 5 (pp. 195–202)', 'Marx, Engels, Hegel; Civil Code Art. 1700; Calalang; PBMEO; Floresca'],
			['10. Realist Prediction', '“Bad Man” Prophecy & Interstitial Lawmaking', 'Ch. 10 & 13 (pp. 144–146, 219–224)', 'Holmes, Cardozo, Hart, Dworkin; Civil Code Arts. 8–10; Floresca v. Philex Mining; Rodriguez v. Tan; Villaflor']
		]
			.map(([q, c, p, k]) => `<tr><td class="aspect">${esc(q)}</td><td>${esc(c)}</td><td>${esc(p)}</td><td>${esc(k)}</td></tr>`)
			.join('')}</tbody></table></div>`,
		...philoAlacExams.map(
			(e, idx) =>
				`<h3 id="finals-alac-q${idx + 1}" class="sg-h3">${esc(e.title)}</h3><div class="rv-card"><p class="rv-source">${e.factPattern}</p><p class="rv-card-title">${esc(
					e.question ?? ''
				)}</p><div class="rv-box rv-green"><span class="rv-label">A — Answer</span><p>${esc(
					e.modelAnswer.answer
				)}</p></div><div class="rv-box rv-blue"><span class="rv-label">L — Legal Basis &amp; Jurisprudential Theory</span><p>${esc(
					e.modelAnswer.legalBasis
				)}</p></div><div class="rv-box rv-yellow"><span class="rv-label">A — Application to Philippine Law &amp; Jurisprudence</span><p>${esc(
					e.modelAnswer.application
				)}</p></div><div class="rv-box rv-purple"><span class="rv-label">C — Conclusion</span><p>${esc(e.modelAnswer.conclusion)}</p></div></div>`
		)
	].join('\n');
}

const philoCases: CaseDigest[] = CASES.map((c) => ({
	id: `${ID}:${c.id}`,
	title: c.name,
	citation: c.cite,
	topic: c.link ?? 'Philippine Jurisprudence',
	part: 'Philippine Jurisprudence Handouts',
	keyRule: c.doctrine.replace(/\*\*(.+?)\*\*/g, '$1'),
	summary: `<strong>Facts:</strong> ${esc(c.facts)}<br/><strong>Issue:</strong> ${esc(c.issue)}<br/><strong>Ruling:</strong> ${esc(c.ruling)}${
		c.trap ? `<br/><strong>Exam trap:</strong> ${esc(c.trap)}` : ''
	}`
}));

const philoAlacExams: AlacEssay[] = [
	{
		id: 'philo:alac:1',
		title: 'FINALS ALAC 1 — Separability Thesis & Qualified Positivism in the Philippines',
		topic: 'FINALS · Open-Ended ALAC (Chapters 10–13)',
		source: 'FINALS · ALAC',
		factPattern:
			'What is the core tenet of legal positivism regarding the separation of law and morals, and does the Philippine legal system adopt it? Answer using the ALAC method (citing the chapter, pages, philosophers, codal provisions, and jurisprudence).',
		modelAnswer: {
			answer:
				'The Philippine legal system does not adopt a pure, uncompromising version of the separation of law and morals; instead, it practices a qualified legal positivism where the authority of enacted rules is structurally recognized under legislative supremacy and verba legis, but substantively circumscribed by moral, equitable, and secular constitutional principles. (Note: An alternative argument that the Philippines strictly adheres to positivism under the plain-meaning rule and state immunity doctrine is also fully defensible.)',
			legalBasis:
				'Under Chapter 10 (Morals v. Force, pp. 139–148, 151–156) and Chapter 9 (Legal Positivism in Philippine Jurisprudence), the foundational core tenet of classical legal positivism—formulated by John Austin in The Province of Jurisprudence Determined (1832), rooted in Jeremy Bentham’s utilitarian positivism, and refined by H.L.A. Hart in The Concept of Law (1961)—is the Separability Thesis: “The existence of law is one thing; its merit or demerit is another.” Under this tenet, positive law (jus positum) is a matter of social fact and sovereign enactment, autonomous from non-jural moral norms. In Philippine positive law, Caltex (Phils.), Inc. v. Customs Arrastre Service (G.R. No. L-26632, May 29, 1970) and Santiago v. Republic (G.R. No. L-48214, Dec. 19, 1978) expressly affirm “our commitment, in this respect at least, to the Austinian or positivist concept of law” on state immunity, while Macalintal v. Senate (G.R. Nos. E-02002 et al., Nov. 11, 2025) enforces verba legis and dura lex sed lex when statutory text is clear. Conversely, the Civil Code explicitly integrates moral boundaries into positive statutory rights: (1) Article 10 presumes that in case of doubt, the lawmaking body intended right and justice to prevail; (2) Article 19 (abuse of rights) mandates that every person must, in the exercise of rights and performance of duties, act with justice, give everyone his due, and observe honesty and good faith; and (3) Articles 20 and 21 impose civil liability for willful acts contrary to law, morals, good customs, or public policy. Furthermore, under Article II, Section 6 of the 1987 Constitution (inviolability of the separation of Church and State) and Estrada v. Escritor (A.M. No. P-02-1651, 2003/2006, penned by Justice Reynato S. Puno), while the State cannot enforce sectarian religious doctrine as law, it actively safeguards secular public morality.',
			application:
				'In practical Philippine adjudication, as Dean Romulo V. Borja explains in Chapter 9, while courts adhere to the verba legis doctrine when statutory language is clear and unambiguous (Macalintal v. Senate), the judiciary consistently refuses to enforce positive enactments in a moral vacuum. Where statutory grants of power clash with basic fairness or leave lacunae (Civil Code, Arts. 9–10), the Supreme Court invokes equity, criminal mens rea (Chapter 10, pp. 141–142), and the human-relations provisions of the Civil Code to soften mechanical rigidity. For instance, in evaluating contractual stipulations, waivers of right under Article 6, or administrative misconduct in Estrada v. Escritor, courts test whether an exercise of a positive right transgresses secular public morality or the ethical thresholds of Articles 19 to 21. Thus, positive legality serves as the mandatory starting baseline of judicial analysis, but secular moral rectitude remains an indispensable statutory and constitutional boundary condition.',
			conclusion:
				'Therefore, while the Philippine legal order relies on the structural machinery of legal positivism (Austin and Hart) for sovereign certainty and statutory fidelity, it rejects the core tenet of absolute moral separation, maintaining an enduring teleological commitment to right, justice, and secular ethical limits under Civil Code Articles 10 and 19–21 and the 1987 Constitution.'
		}
	},
	{
		id: 'philo:alac:2',
		title: 'FINALS ALAC 2 — Coercive Force v. Institutional Legitimacy as the Essence of Law',
		topic: 'FINALS · Open-Ended ALAC (Chapters 10–13)',
		source: 'FINALS · ALAC',
		factPattern:
			'Is the use of coercive force the core tenet that defines the nature of law, or is institutional legitimacy required? Answer using the ALAC method (citing the chapter, pages, philosophers, and constitutional/jurisprudential principles).',
		modelAnswer: {
			answer:
				'Coercive physical force is an indispensable instrument for the practical enforcement of municipal law against the recalcitrant, but it is not the defining core tenet of legal validity; authentic law requires institutional legitimacy and recognized normative authority. (Note: An alternative answer contending that coercive force is the ultimate defining reality of law under Austinian command theory and the de facto occupation doctrine is equally arguable.)',
			legalBasis:
				'Under Chapter 10 (Morals v. Force, pp. 143–152), classical analytical positivism championed by John Austin advanced the imperative or command theory: law is the general command of a sovereign, habitually obeyed by the bulk of the population and backed by the threat of sanction (coercive force). However, H.L.A. Hart in The Concept of Law dismantled this reductionist view on three grounds: (1) modern states disperse power with no single sovereign; (2) power-conferring rules (wills, contracts, marriage) enable rather than command; and (3) an Austinian command backed by force is indistinguishable from “the command of a gunman writ large,” which can make a victim feel obliged out of fear but can never create a genuine legal obligation. Hart emphasized that a legal system requires an internal point of view under a secondary rule of recognition, while Hans Kelsen treated force as a mere sociological fact outside the Pure Theory’s chain of norms ending in the Grundnorm. Centuries earlier, St. Augustine in The City of God (Book IV, Ch. 4) posed the classic natural-law objection: “Without justice, what are kingdoms but great bands of robbers?” Furthermore, sociologist Max Weber (Chapter 10, p. 147; Chapter 13, Economía y Sociedad) established that durable legal orders rest on belief in legitimate domination (Herrschaft)—charismatic, traditional, or modern rational-legal authority—just as Jean-Jacques Rousseau argued in The Social Contract (Chapter 11) that the strongest is never strong enough to be always master unless he transforms strength into right and obedience into duty.',
			application:
				'The inadequacy of raw force as the sole criterion of law is illustrated by Chapter 10’s two test cases: (1) a bank robber vs. Congress, and (2) the Japanese belligerent occupation of the Philippines (Co Kim Cham v. Valdez Tan Keh, 75 Phil. 113, 1945). Both an armed robber (or rebel commander collecting a “revolutionary tax” at gunpoint) and Congress demand your money under threat of adverse consequences, yet the robber commands only physical compliance (being obliged), whereas Congress commands normative duty (having an obligation) under Article II, Section 1 of the 1987 Constitution (“Sovereignty resides in the people and all governmental authority emanates from them”). Similarly, during World War II, the Japanese military administration held de facto control through superior force, while the Commonwealth government-in-exile retained de jure authority through constitutional legitimacy. Physical coercion ensures enforcement against deviants at the margin—hence the legal phrase “force and effect of law”—but Weberian rational-legal legitimacy is the systemic foundation that transforms naked power into lawful authority.',
			conclusion:
				'In conclusion, while physical coercion distinguishes positive jural systems from purely advisory non-jural codes, it is institutional legitimacy (Weber), normative obligation (Hart), and constitutional authority that elevate a coercive order from St. Augustine’s band of robbers into a genuine rule of law.'
		}
	},
	{
		id: 'philo:alac:3',
		title: 'FINALS ALAC 3 — Intolerably Unjust Statutes, Lex Injusta & the Radbruch Formula',
		topic: 'FINALS · Open-Ended ALAC (Chapters 10–13)',
		source: 'FINALS · ALAC',
		factPattern:
			'Can an intensely unjust statute violate the core tenet of natural law and thereby lose its character as valid law? Answer using the ALAC method (citing the chapter, pages, philosophers, and Philippine jurisprudence).',
		modelAnswer: {
			answer:
				'Yes, under classical natural law theory and modern post-Nuremberg jurisprudence, an intensely or intolerably unjust enactment violates the foundational moral touchstone of legal validity and forfeits its character as authentic law, creating no moral duty of judicial enforcement or citizen obedience. (Note: A strict positivist counter-argument—citing Socrates in the Crito, John Austin, and Imbong v. Ochoa—that formal statutory validity endures until legislative repeal or explicit constitutional invalidation remains legally defensible.)',
			legalBasis:
				'Under Chapter 6 (A History of Natural Law), Chapter 7 (Natural Law in Philippine Jurisprudence, pp. 101–114), and Chapter 10 (Morals v. Force, pp. 148–156), the teleological school places higher non-jural moral law above positive law. Marcus Tullius Cicero (De Legibus) declared that wicked and unjust statutes are “anything but laws”; St. Augustine formulated the maxim lex injusta non est lex (“an unjust law is no law at all”); and St. Thomas Aquinas (Summa Theologiae) taught that natural law is the rational creature’s participation in the Eternal Law (“good is to be done and evil avoided”), so a human statute that contravenes natural law is not law in the full sense but a “perversion of law” retaining only the outward appearance of law. Following World War II and the Nuremberg Trials (Chapter 10, p. 154)—which rejected the positivist defense of “I only obeyed the sovereign’s orders” and catalyzed the 1948 Universal Declaration of Human Rights (UDHR)—German jurist Gustav Radbruch formulated the Radbruch Formula (reinforced by Lon L. Fuller’s internal morality of law): while positive law enacted by proper authority ordinarily prevails to secure legal certainty even when flawed, whenever the conflict between a positive statute and justice reaches an “intolerable degree” (unerträgliches Maß), or where the statute deliberately disavows human equality, the statute is “flawed law” that must yield to justice. In Philippine jurisprudence, while Imbong v. Ochoa (G.R. No. 204819, Apr. 8, 2014) holds that natural law cannot ordinarily be used to invalidate a statute when the written Constitution speaks, Republic v. Sandiganbayan (G.R. No. 104768, July 21, 2003) demonstrates that inherent human rights bind the State even in the absence of positive constitutional text.',
			application:
				'In Philippine legal history, this conflict surfaced squarely during the 1986 post-EDSA revolutionary interregnum in Republic v. Sandiganbayan, when constabulary officers conducted warrantless searches and seizures after the 1973 Constitution had been abrogated and before the Freedom Constitution took effect. While the majority (Justice Carpio) applied the UDHR and ICCPR, Justice Reynato S. Puno’s separate concurring opinion invoked classical natural law and the Nuremberg precedent: fundamental rights against arbitrary state intrusion are “written in the hearts of men” (St. Paul, Epistle to the Romans), antedate all constitutions, and cannot be defeated by a positive-law vacuum. Conversely, while Socrates in Plato’s Crito (Chapters 8 & 10) obeyed an unjust Athenian sentence to preserve the social contract against ordinary injustice, that duty of obedience collapses when a regime crosses the Radbruch/Nuremberg threshold into crimes against humanity, summary execution, or arbitrary spoliation. At that extreme threshold, judges and citizens under Civil Code Article 10 and Article II, Section 11 of the 1987 Constitution (full respect for human dignity and human rights) cannot act as passive executioners of state-sponsored atrocity.',
			conclusion:
				'Therefore, while ordinary statutory defects are corrected through constitutional review (Imbong v. Ochoa), extreme and intolerable injustice strips a positive enactment of its claim to obedience under Aquinas’s lex injusta principle, the Radbruch Formula, the Nuremberg doctrine, and Justice Puno’s natural-law concurrence in Republic v. Sandiganbayan.'
		}
	},
	{
		id: 'philo:alac:4',
		title: 'FINALS ALAC 4 — The Organic View of Society v. Classical Legal Individualism',
		topic: 'FINALS · Open-Ended ALAC (Chapters 10–13)',
		source: 'FINALS · ALAC',
		factPattern:
			'How does the organic view of society challenge the core tenet of classical legal individualism? Answer using the ALAC method (citing the chapter, pages, philosophers, and Philippine constitutional jurisprudence).',
		modelAnswer: {
			answer:
				'The organic view of society challenges the core tenet of classical legal individualism by demonstrating that society is not an artificial, mechanical aggregate of self-interested contracting individuals, but a living, interdependent historical organism whose collective welfare and intergenerational continuity legitimately supersede atomistic private rights.',
			legalBasis:
				'As analyzed in Chapter 4 (The Many-Splendored Thing, citing Sir Dennis Lloyd’s The Idea of Law) and Chapter 11 (The Shift to the Social Sciences, pp. 157–168), 17th- and 18th-century Natural Law and Legal Positivism were rationalist, individualist, and formal: rooted in Thomas Hobbes and John Locke’s social contract theories, they treated society as a mere collection of autonomous individuals who entered a formal agreement to advance personal self-interest. Beginning in the 18th and 19th centuries, the five forerunners of the shift to the social sciences overturned this individualist premise in favor of a non-rationalist, collectivist, and non-formal (organic) view: (1) Montesquieu (The Spirit of Law, 1748) showed that laws and institutions are interrelated with a community’s geography, climate, and social character; (2) Auguste Comte coined “sociology” and formulated the Law of Three Stages (theological, metaphysical, positive/scientific) to study society itself empirically; (3) Jean-Jacques Rousseau (The Social Contract) subordinated individual wills to the collective “general will”; (4) Edmund Burke, father of British conservatism, rejected the idea that constitutions can be snapped together like a Lego set by abstract reason, viewing society as an organic partnership across generations—between the living, the dead, and those yet to be born; and (5) G.W.F. Hegel (dialectical idealism) conceptualized the State as a real, higher ethical organism (Sittlichkeit) embodying reason. In Philippine constitutional law, this organic, intergenerational conception is enshrined in Article II, Section 16 of the 1987 Constitution and Oposa v. Factoran (G.R. No. 101083, July 30, 1993, penned by Chief Justice Hilario G. Davide Jr.).',
			application:
				'In Oposa v. Factoran, Filipino minors sued on behalf of themselves and generations yet unborn to cancel timber license agreements (TLAs) destroying the country’s virgin rainforests. Under classical legal individualism, timber licensees could assert atomistic contractual and property rights under the non-impairment clause to exploit forest resources for immediate private profit. Applying an organic, collectivist paradigm echoing Edmund Burke’s transgenerational covenant and Cicero’s salus populi est suprema lex (Calalang v. Williams, 70 Phil. 726, 1940), the Supreme Court upheld the minors’ locus standi based on intergenerational responsibility and intergenerational justice, ruling that every generation holds the natural environment in trust for the next and that timber licenses are mere revocable privileges subordinate to the survival of the collective social organism.',
			conclusion:
				'In conclusion, the shift to the social sciences in Chapter 11 (Montesquieu, Comte, Rousseau, Burke, and Hegel) and Philippine doctrine in Oposa v. Factoran reframe law from a formal referee of atomistic individual contracts into the vital guardian of an organic, intergenerational community.'
		}
	},
	{
		id: 'philo:alac:5',
		title: 'FINALS ALAC 5 — Premature Codification & Savigny’s Volksgeist in the Philippines',
		topic: 'FINALS · Open-Ended ALAC (Chapters 10–13)',
		source: 'FINALS · ALAC',
		factPattern:
			'Does premature statutory codification undermine the core tenet of the Historical School regarding the Volksgeist? Answer using the ALAC method (citing the chapter, pages, philosophers, Civil Code provisions, and Philippine jurisprudence).',
		modelAnswer: {
			answer:
				'Yes, from the standpoint of the Historical School of Jurisprudence, premature top-down statutory codification fundamentally undermines the core tenet of the Volksgeist by freezing living customary traditions into rigid legislative abstractions and alienating the formal legal system from the organic consciousness of the people. (Note: The counter-argument—championed by Anton Thibaut, Jeremy Bentham, Roscoe Pound, and Articles 11–12 of the Philippine Civil Code—that systematic codification is essential for legal certainty, national unity, and forward-looking reform in a multi-ethnic society is equally defensible.)',
			legalBasis:
				'Under Chapter 12 (The Historical School of Thought, pp. 173–184), founded in Germany by Gustav Hugo and consolidated by Friedrich Carl von Savigny in his landmark 1814 pamphlet Of the Vocation of Our Age for Legislation and Legal Science (written against Anton Thibaut’s proposal for a unified German civil code inspired by the Napoleonic Code, and against Jeremy Bentham’s utilitarian codification), law springs organically from the Volksgeist—the folk-soul or common consciousness of a people—just as language, folklore, and manners do. For Savigny, law is “found, not made.” The six characteristics of law under the Historical School (Enum 12.1) are that law is: (1) specific to each nation, (2) not universal, (3) stable across generations, (4) most authentic in the form of custom, (5) hostile to premature codification (which Savigny condemned as natural law’s “infinite arrogance”), and (6) articulated by jurists and judges as trustees of popular consciousness. In contrast, Philippine positive law reverses Savigny’s hierarchy: under Articles 11 and 12 of the Civil Code, custom contra legem is rejected, custom secundum legem is enforced as statute, and custom praeter legem applies only where the law is silent and must be proved as a fact according to the rules of evidence. Nevertheless, in Alzua v. Johnson (21 Phil. 308, 1912), the Supreme Court recognized that transplanted Anglo-American common-law principles carry their historical background with them and apply only insofar as they are suited to “local conditions.”',
			application:
				'This clash between Savigny’s Volksgeist and top-down codification directly explains the structural tensions of Philippine law. Through double colonization, the Philippines inherited the Spanish Civil Code and wholesale American commercial statutes (the Negotiable Instruments Law, Corporation Law, and Insurance Law). As commercial-law scholar Dean Cesar L. Villanueva observed, this top-down legislative transplantation often clashed with local Filipino commercial and community practices, leaving “law on the books” detached from actual social conduct—requiring judicial adaptation to “local conditions” under Alzua v. Johnson. At the same time, Chapter 12 (pp. 181–184) highlights three sharp criticisms of the Volksgeist: (1) Roscoe Pound charged that tying law to past custom breeds “juristic pessimism” powerless to solve modern problems; (2) Justice Holmes declared it “revolting” to keep a rule merely because it was laid down in the time of Henry IV; and (3) in a multi-ethnic, twice-colonized archipelagic nation like the Philippines, there is no single homogeneous folk-soul (and the search for a pure folk spirit in Europe slid tragically into Nazi racial purification).',
			conclusion:
				'Therefore, while Savigny’s Volksgeist rightly warns legislators against blind legal transplants unsuited to local conditions (Alzua v. Johnson), the Philippine legal system properly subordinates custom to enacted codes under Civil Code Articles 11 and 12 to avoid juristic pessimism and govern a pluralistic nation.'
		}
	},
	{
		id: 'philo:alac:6',
		title: 'FINALS ALAC 6 — Sir Henry Maine’s “From Status to Contract” & Modern Social Legislation',
		topic: 'FINALS · Open-Ended ALAC (Chapters 10–13)',
		source: 'FINALS · ALAC',
		factPattern:
			'How has modern social legislation modified the core tenet of Sir Henry Maine’s thesis on the movement from Status to Contract? Answer using the ALAC method (citing the chapter, pages, philosophers, Civil Code provisions, and Philippine jurisprudence).',
		modelAnswer: {
			answer:
				'Modern social and labor legislation has modified the core tenet of Sir Henry Maine’s thesis by reversing unbridled laissez-faire contractualism and effecting a partial, protective return to status, wherein the State attaches mandatory rights and floors of protection to individuals by virtue of their socio-economic position (such as workers, tenants, and consumers) that cannot be bargained away by private contract.',
			legalBasis:
				'Under Chapter 12 (The Historical School of Thought, pp. 185–194), Sir Henry Maine founded the English Historical School with his 1861 classic Ancient Law (influenced by Darwinian evolutionary thought). Breaking with Austin’s ahistorical analytical positivism, Maine traced comparative legal history and formulated his famous thesis in Chapter V of Ancient Law: “The movement of the progressive societies has hitherto been a movement from Status to Contract.” In ancient societies, an individual’s rights and duties were fixed indelibly by birth and family position under patriarchal authority (patria potestas); as civilization progressed, the family unit dissolved into individual legal capacity, allowing autonomous persons to determine their own legal relations through free contractual agreement. However, under Chapter 13 (Sociological School) and Philippine social-justice doctrine, Article 1700 of the Civil Code expressly commands: “The relations between capital and labor are not merely contractual. They are so impressed with public interest that labor contracts must yield to the common good.” This statutory mandate operationalizes Article II, Section 10 and Article XIII, Section 3 of the 1987 Constitution, Justice Jose P. Laurel’s definition of social justice in Calalang v. Williams (70 Phil. 726, 1940), and the Supreme Court’s protective ruling in Floresca v. Philex Mining Corp. (G.R. No. L-30642, Apr. 30, 1985).',
			application:
				'While Maine’s “status to contract” thesis accurately described the 19th-century triumph of individual autonomy over feudal bondage, the Industrial Revolution revealed that formal freedom of contract between an impoverished miner and a giant corporation becomes an instrument of economic coercion. When the heirs of miners killed in a cave-in sued for Civil Code damages in Floresca v. Philex Mining Corp., the employer invoked the exclusivity of the Workmen’s Compensation Act. Exercising Justice Holmes’s “interstitial legislation” and Roscoe Pound’s sixth and seventh jural postulates (that the burdens of social life are borne by society and a standard human life is assured), the Supreme Court allowed the heirs to recover full damages under the Civil Code, explicitly protecting “the lowly workers” because of their vulnerable status as workers. Likewise, under Civil Code Article 1700, minimum wage laws, security of tenure, and agrarian reform statutes impose non-waivable statutory terms on every employment and tenancy relationship regardless of what the parties sign.',
			conclusion:
				'In conclusion, Maine’s historical trajectory from status to contract is not a one-way street: modern Philippine social legislation (Civil Code Art. 1700, Calalang v. Williams, and Floresca v. Philex Mining) has re-imposed a protective, humanitarian legal status so that formal contractual freedom cannot defeat social justice.'
		}
	},
	{
		id: 'philo:alac:7',
		title: 'FINALS ALAC 7 — Roscoe Pound’s Social Engineering & Balancing of Interests in Judicial Review',
		topic: 'FINALS · Open-Ended ALAC (Chapters 10–13)',
		source: 'FINALS · ALAC',
		factPattern:
			'Is the core tenet of social engineering an accurate framework for understanding the balancing of competing interests in judicial review? Answer using the ALAC method (citing the chapter, pages, philosophers, and Philippine Supreme Court cases).',
		modelAnswer: {
			answer:
				'Yes, Dean Roscoe Pound’s core tenet of social engineering provides an accurate and candid framework for understanding how Philippine courts weigh and harmonize competing individual, public, and social interests in constitutional adjudication, though it requires a baseline presumption in favor of fundamental human rights so that open-ended balancing does not erode constitutional guarantees. (Note: A formalist or hierarchy-of-rights counter-argument based on PBMEO v. Philippine Blooming Mills and Holmes’s Clear and Present Danger test is equally defensible.)',
			legalBasis:
				'Under Chapter 13 (The Sociological School of Thought, pp. 205–218) and the Philippine Jurisprudence on Balancing of Interests handout, the Functional Perspective builds on Rudolf von Jhering’s jurisprudence of interests (The Struggle for Law, holding that society is a mass of competing interests and law is their impartial mediator). Dean Roscoe Pound formulated the core tenet of “social engineering”: law is a tool used by lawmakers and judges to order society so as to satisfy the maximum of human wants with the least friction and waste. Pound identified eight jural postulates (the reasonable expectations of a civilized society at a given time and place, Enum 13.3) and noted three ways courts resolve conflicts of interest (Enum 13.4): following patterns of the past, grasping the jural postulates of their own age, or trusting rough-and-ready judicial instinct. Our Supreme Court has expressly adopted Pound’s balancing method: (1) Secretary of Justice v. Lantion (G.R. No. 139465, Jan. 18, 2000) declared balancing of interests a “fundamental postulate of constitutional law”; (2) Soriano v. Laguardia (G.R. No. 164785, Apr. 29, 2009) held that “constitutional freedoms are not absolute” and chose balancing as “the more appropriate test” to weigh broadcast free speech against youth welfare; (3) Akbayan v. Aquino (G.R. No. 170516, July 16, 2008) weighed the right to information against diplomatic executive privilege; and (4) Calalang v. Williams (70 Phil. 726, 1940) harmonized individual livelihood with public welfare through social justice. By contrast, PBMEO v. Philippine Blooming Mills (G.R. No. L-31195, June 5, 1973) established a pre-set hierarchy—the primacy of human rights over property rights—requiring Holmes’s clear and present danger test (Gonzales v. Comelec; ABS-CBN v. Comelec) before preferred freedoms may be curtailed.',
			application:
				'Philippine constitutional litigation repeatedly proves Pound’s thesis that rights do not exist in a vacuum. In Lantion, the Court weighed an extraditee’s individual interest in procedural due process against the public interest in honoring treaty obligations; in Soriano, the Court weighed a preacher’s free expression on television against the social interest in protecting children from indecent broadcast language; and in Calalang, Justice Laurel balanced the calesa drivers’ livelihood against traffic safety for the general public. Yet, as Pound himself admitted (Enum 13.4), courts often balance by rough-and-ready instinct because there is no common mathematical scale measuring how much youth welfare equals how much free speech. If the scale starts completely flat, whoever frames the state interest as “important” wins the case. Harmonizing Pound’s social engineering with Justice Makasiar’s rule in Philippine Blooming Mills resolves this flaw: courts weigh competing interests openly, but place a thumb on the scale for fundamental human rights so the government bears the heavy burden of justification.',
			conclusion:
				'Therefore, Pound’s social engineering and Jhering’s jurisprudence of interests accurately describe living Philippine constitutional adjudication in Lantion, Soriano, Akbayan, and Calalang, and work best when anchored by the preferred-freedoms presumption of Philippine Blooming Mills.'
		}
	},
	{
		id: 'philo:alac:8',
		title: 'FINALS ALAC 8 — Eugen Ehrlich’s “Living Law” v. Formal Positive State Law',
		topic: 'FINALS · Open-Ended ALAC (Chapters 10–13)',
		source: 'FINALS · ALAC',
		factPattern:
			'When formal positive law clashes with the core tenet of Eugen Ehrlich’s “living law,” which should prevail in judicial adjudication? Answer using the ALAC method (citing the chapter, pages, philosophers, and Civil Code provisions).',
		modelAnswer: {
			answer:
				'In formal Philippine judicial adjudication, enacted positive law technically prevails over contrary custom under Civil Code Article 11 (banning custom contra legem); however, effective and legitimate adjudication requires lawmakers and judges to harmonize state norms with Eugen Ehrlich’s “living law” wherever the statute leaves room (secundum legem and praeter legem under Articles 10 and 12), because positive law that ignores society’s living inner order becomes a dead letter.',
			legalBasis:
				'Under Chapter 13 (The Sociological School of Thought, pp. 199–208), Austrian legal sociologist Eugen Ehrlich in Fundamental Principles of the Sociology of Law (1913) formulated the core tenet that “the center of gravity of legal development lies not in legislation, nor in juristic science, nor in judicial decision, but in society itself.” Ehrlich distinguished positive law (“norms for decision” enacted by the State for courts) from the “living law” (das lebende Recht)—the rules people actually follow in their present, plural social associations (families, business guilds, communities, labor unions), which differs from Savigny’s Volksgeist by being plural and present rather than one national spirit inherited from the past. Lawrence M. Friedman’s Law and Society movement (Chapter 13, p. 196) similarly treats law’s autonomy as an empirical question and studies the actual impact of laws once in force (“Law is too important to be left to lawyers”). Under the Philippine Civil Code (Enum 14.1 & 14.2), custom is classified into three kinds: (1) contra legem (against written law, disallowed under Art. 11: “Customs which are contrary to law, public order or public policy shall not be countenanced”); (2) secundum legem (in accordance with and embodied in statutory law); and (3) praeter legem (filling gaps where the statute is silent, which may be applied if proved as a fact under the rules of evidence pursuant to Art. 12).',
			application:
				'When formal statutes attempt to erase entrenched social practices without community support, a wide gap opens between “law in the books” and conduct in fact. Conversely, some living practices may themselves be oppressive or contrary to public policy, which is why the State reserves the sovereign veto in Civil Code Article 11 against custom contra legem. Yet in commercial usages, informal community credit arrangements (paluwagan), and indigenous customary laws (expressly recognized secundum legem under Article XII, Section 5 of the 1987 Constitution and the Indigenous Peoples’ Rights Act, RA 8371), the living law supplies the actual order of daily life. Moreover, as Roscoe Pound noted in Enum 13.4, when courts resolve novel conflicts of interest by judicial instinct, their decisions succeed only if judges maintain close contact with Ehrlich’s living law and apply Civil Code Articles 10 and 12 to bridge statutory silence.',
			conclusion:
				'In conclusion, while positive statutory law holds formal supremacy over custom contra legem under Civil Code Article 11, Philippine courts and legislators must continually draw upon Ehrlich’s living law through custom praeter legem (Art. 12) and statutory incorporation (secundum legem) so that positive law remains efficacious in society.'
		}
	},
	{
		id: 'philo:alac:9',
		title: 'FINALS ALAC 9 — Karl Marx’s Dialectical Materialism & Law as Class Superstructure',
		topic: 'FINALS · Open-Ended ALAC (Chapters 10–13)',
		source: 'FINALS · ALAC',
		factPattern:
			'Does the core tenet of Marxist legal theory accurately explain law as an instrument of dominant class interests? Answer using the ALAC method (citing the chapter, pages, philosophers, and Philippine constitutional jurisprudence).',
		modelAnswer: {
			answer:
				'Karl Marx’s legal theory provides a powerful critical lens that unmasks how economic elites can capture formal legal rules to protect capital, but it is incomplete as a universal theory of law because modern constitutional democracies use law autonomously to restrain dominant economic classes, redistribute power, and nunca wither away.',
			legalBasis:
				'Under Chapter 13 (The Sociological School of Thought, pp. 195–202) and Chapter 5 (Law versus No-Law), Karl Marx and Friedrich Engels (The Communist Manifesto, 1848; Das Kapital) inverted G.W.F. Hegel’s dialectical idealism into dialectical materialism: material economic production, not abstract ideas, drives history. As summarized in Enum 13.1, Marx advanced three core ideas of law: (1) law is a product of economic forces—an ideological superstructure (Überbau) built upon and determined by the society’s economic base (mode of production); (2) law is a tool or weapon of the ruling class to maintain its dominance and mask exploitation behind formal legal equality; and (3) law and the State are destined to “wither away” once capitalism is replaced—after an intermediate socialist stage where government controls all production with more law—by a classless communist utopia without private property.',
			application:
				'Marx’s first two propositions rightly compel every law student to ask whose economic interests a legal rule serves: historically, strict property, contract, and anti-combination laws were repeatedly used to crush nascent labor unions and evict landless peasants under the banner of neutral “freedom of contract.” However, strict economic determinism fails on two counts. First, historically, under actual 20th-century communist regimes, the State and its coercive laws did not wither away; they expanded into totalitarian bureaucracies. Second, in Philippine constitutional jurisprudence, the legal superstructure frequently restrains the dominant capitalist class in favor of labor: (1) in PBMEO v. Philippine Blooming Mills (G.R. No. L-31195, June 5, 1973), the Supreme Court struck down a corporate employer’s dismissal of union workers and ranked fundamental human rights above property and contract rights; (2) in Floresca v. Philex Mining Corp. (G.R. No. L-30642, Apr. 30, 1985), the Court filled a statutory gap against a mining corporation to protect “the lowly workers”; and (3) in Calalang v. Williams (70 Phil. 726, 1940), Justice Laurel defined social justice under the Constitution as “neither communism, nor despotism, nor atomism, nor anarchy, but the humanization of laws and the equalization of social and economic forces by the State.”',
			conclusion:
				'Therefore, while Marx’s base-and-superstructure critique (Enum 13.1) remains an essential warning against elite capture of the law, Philippine social-justice jurisprudence (Calalang, PBMEO, and Floresca) proves that law is not a mere puppet of the ruling class, but an active instrument for equalizing social and economic forces.'
		}
	},
	{
		id: 'philo:alac:10',
		title: 'FINALS ALAC 10 — Justice Holmes’s Legal Realism, the “Bad Man” Prophecy & Interstitial Legislation',
		topic: 'FINALS · Open-Ended ALAC (Chapters 10–13)',
		source: 'FINALS · ALAC',
		factPattern:
			'Can Justice Holmes’s “Bad Man” prophecy model of Legal Realism serve as the core tenet of a complete theory of judicial interpretation? Answer using the ALAC method (citing the chapter, pages, philosophers, and Philippine Supreme Court cases).',
		modelAnswer: {
			answer:
				'No. While Justice Oliver Wendell Holmes Jr.’s Legal Realism and “Bad Man” prediction model provide an indispensable descriptive account of how practicing lawyers advise clients and how experience shapes judicial gap-filling, it cannot serve as a complete normative theory of judicial interpretation because a judge sitting on the bench cannot decide a hard case by predicting what the judge himself will do.',
			legalBasis:
				'Under Chapter 13 (The Sociological School of Thought, pp. 219–224), Chapter 10 (pp. 144–146), and the Philippine Jurisprudence on Oliver Wendell Holmes handout, Justice Holmes in The Common Law (1881) and The Path of the Law (1897) established the core tenets of American Legal Realism: (1) “The life of the law has not been logic: it has been experience”; (2) from the perspective of the “bad man” who cares only for material consequences, “The prophecies of what the courts will do in fact, and nothing more pretentious, are what I mean by the law”; (3) the common law is not “a brooding omnipresence in the sky” and “general propositions do not decide concrete cases” (Lochner dissent); and (4) as quoted by the Philippine Supreme Court in Floresca v. Philex Mining Corp. (G.R. No. L-30642, Apr. 30, 1985, citing Southern Pacific Co. v. Jensen), “judges do and must legislate, but they can do so only interstitially; they are confined from molar to molecular motions” (paired with Justice Benjamin Cardozo’s dictum that the written word is no longer the “sovereign talisman”). Conversely, in Rodriguez v. Tan (91 Phil. 724, 1952), the Supreme Court held that importing a common-law doctrine with no statutory basis would be “to legislate by judicial ruling,” while H.L.A. Hart (The Concept of Law) and Ronald Dworkin (Law’s Empire — “law as integrity,” Chapter 10, p. 155) demonstrated that judicial decision-making requires internal normative standards rather than external behavioral prediction.',
			application:
				'Holmes’s realism accurately describes the practicing counselor’s job (Lesson 1) and explains why the Philippine Supreme Court rejected mechanical formalism in Villaflor v. Summers (41 Phil. 62, 1920, calling Holmes “the always forward looking jurist”) and filled statutory lacunae in Floresca to protect injured miners. However, when viewed from the judge’s seat, the prophecy theory is circular: when the Justices of the Supreme Court deliberated in Floresca or Rodriguez v. Tan, they could not resolve the issue by asking, “What do we prophesy we will do in fact?” To decide a novel case without degenerating into what the Floresca dissenters feared as “judicial tyranny,” the Court had to apply normative standards—first respecting the limit between molecular gap-filling (Floresca) and molar judicial legislation without a statute (Rodriguez v. Tan), and second interpreting the existing legal system in light of right and justice under Civil Code Articles 9 and 10 (what Dworkin calls constructive interpretation or “law as integrity”).',
			conclusion:
				'In conclusion, Holmes’s Legal Realism is true as a descriptive theory of the practicing lawyer’s craft and sets the proper boundary for interstitial judicial lawmaking (Floresca v. Rodriguez v. Tan), but a complete theory of adjudication requires the normative principles of Hart’s rule-acceptance, Dworkin’s law as integrity, and Civil Code Article 10.'
		}
	}
];

const philoEssays: AlacEssay[] = [
	...philoAlacExams,
	...ESSAYS.map((e, i) => {
		const k = KIND_OF[e.type];
		return {
			id: `${ID}:${e.id}`,
			title: `${k.name} — Question ${i + 1}`,
			topic: `${k.name} Questions`,
			source: e.star ? 'FINALS · 4-Type ★ Focus' : 'FINALS · 4-Type Practice',
			factPattern: fmt(e.q),
			question: `${k.tests} (First line: ${k.first})`,
			modelAnswer: {
				answer: e.a[0]?.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1') ?? '',
				legalBasis: `Formula: ${k.formula.join(' → ')}`,
				application: `Avoid trap: ${k.trap}`,
				conclusion: e.a.slice(1).join(' ').replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1') || 'State your clear position and one supporting reason.'
			}
		};
	})
];

const philoMcqs: McqQuestion[] = [
	{
		id: 'philo:l1:1',
		topic: 'FINALS — Lesson 1 · Why We Study Legal Philosophy',
		topicId: 'l1',
		tag: 'memorization',
		question: 'Which thinker observed that the only difference between a lawyer or judge “without a philosophy” and someone with a philosophy is that the latter knows what his philosophy is and can justify his implicit premises?',
		options: ['F.S.C. (Stuart) Northrop', 'Crisolito Pascual', 'Fr. Ranhilio Callangan Aquino', 'Oliver Wendell Holmes Jr.'],
		correctIndex: 0,
		key: 'F.S.C. (Stuart) Northrop',
		explanation: 'Professor Stuart Northrop pointed out that everyone in law operates on philosophical premises; knowing one’s legal philosophy allows one to make clear and justify those implicit premises.',
		legalBasis: 'FINALS · Ch. 1 (Why We Study Legal Philosophy, Borja Handout 1, pp. 1–4; Pascual, pp. 1–12) — F.S.C. Northrop, The Complexity of Legal and Ethical Experience'
	},
	{
		id: 'philo:l2:1',
		topic: 'FINALS — Lesson 2 · An Attempt at a Definition',
		topicId: 'l2',
		tag: 'requisites',
		question: 'According to Friedrich Nietzsche, which of his three reasons specifically elevates Thales of Miletus (“everything is water”) beyond a natural scientist and makes him the first Greek philosopher?',
		options: [
			'His proposition contains the metaphysical thought: “Everything is one!”',
			'His proposition enunciates something about the origin of things.',
			'His proposition is stated without figure and fable.',
			'His proposition was proved through strict empirical laboratory observation.'
		],
		correctIndex: 0,
		key: 'His proposition contains the metaphysical thought: “Everything is one!”',
		explanation: 'Speaking of the origin of things leaves Thales with religious people; speaking without figure and fable makes him a natural scientist; leaping to the metaphysical unity “Everything is one!” makes him the first philosopher.',
		legalBasis: 'FINALS · Ch. 2 (Legal Philosophy: An Attempt at a Definition, Borja Handout 2, pp. 1–4) — Friedrich Nietzsche, Philosophy in the Tragic Age of the Greeks on Thales of Miletus'
	},
	{
		id: 'philo:l3:1',
		topic: 'FINALS — Lesson 3 · This Thing Called Law',
		topicId: 'l3',
		tag: 'memorization',
		question: 'In a Supreme Court decision, how does a judicial dictum differ from an obiter dictum?',
		options: [
			'A judicial dictum addresses an issue raised by the parties that is not essential to the disposition; an obiter dictum addresses an issue not raised by the parties.',
			'A judicial dictum is the binding ratio decidendi under stare decisis; an obiter dictum binds only the lower courts.',
			'A judicial dictum is the dispositive fallo of the decision; an obiter dictum is a dissenting opinion.',
			'A judicial dictum is issued by the Court of Appeals; an obiter dictum is issued only by the Supreme Court.'
		],
		correctIndex: 0,
		key: 'A judicial dictum addresses an issue raised by the parties that is not essential to the disposition; an obiter dictum addresses an issue not raised by the parties.',
		explanation: 'Both judicial dictum and obiter dictum are non-essential side comments (dicta, not binding ratio decidendi), but a judicial dictum addresses a point actually raised by the parties whereas an obiter dictum addresses a collateral issue not raised by them.',
		legalBasis: 'FINALS · Ch. 3 (This Thing Called Law, Borja Handout 3, pp. 1–6) — Ratio Decidendi vs. Obiter and Judicial Dicta; Civil Code of the Philippines, Arts. 7 & 8'
	},
	{
		id: 'philo:l4:1',
		topic: 'FINALS — Lesson 4 · The Many-Splendored Thing',
		topicId: 'l4',
		tag: 'memorization',
		question: 'In Sir Dennis Lloyd’s The Idea of Law, why are BOTH the Teleological (Natural Law) School and Legal Positivism characterized as “rationalist, individualist, and formal”?',
		options: [
			'Both draw heavily on the social contract theory, treating society as a formal agreement among rational individuals.',
			'Both hold that positive law grows organically out of the irrational volksgeist of a collective nation.',
			'Both insist that the validity of every statute depends on empirical sociological research.',
			'Both reject the existence of a sovereign and advocate the withering away of the state.'
		],
		correctIndex: 0,
		key: 'Both draw heavily on the social contract theory, treating society as a formal agreement among rational individuals.',
		explanation: 'Lloyd classifies Natural Law and Legal Positivism together as rationalist, individualist, and formal because both rely on the social contract (diverging only on Hobbes’s total surrender vs. Locke’s partial surrender), whereas the Historical and Sociological Schools are non-rationalist, collectivist, and non-formal.',
		legalBasis: 'FINALS · Ch. 4 (Law Is a Many-Splendored Thing, Borja Handout 4, pp. 1–4) — Sir Dennis Lloyd, The Idea of Law; Thomas Hobbes vs. John Locke'
	},
	{
		id: 'philo:l5:1',
		topic: 'FINALS — Lesson 5 · Law versus No-Law',
		topicId: 'l5',
		tag: 'memorization',
		question: 'Why does Lesson 5 conclude that Adam Smith, despite advocating laissez-faire (“let them alone”), was NOT an anarchist?',
		options: [
			'His economic system required a minimum set of laws—especially laws protecting private property—to ensure the orderly functioning of markets.',
			'He argued in The Laws that a totalitarian philosopher-king must regulate every price and wage.',
			'He believed that human beings are intrinsically evil and must be restrained by harsh penal codes.',
			'He established utopian communes in Russia that failed without a traditional peasant way of life.'
		],
		correctIndex: 0,
		key: 'His economic system required a minimum set of laws—especially laws protecting private property—to ensure the orderly functioning of markets.',
		explanation: 'While Adam Smith opposed unnecessary government interference in the market, his laissez-faire theory rested on a foundational minimum set of laws, particularly laws securing private property.',
		legalBasis: 'FINALS · Ch. 5 (Law versus No-Law, Borja Handout 5, pp. 1–5) — Adam Smith, The Wealth of Nations; 1987 Constitution, Art. II, Sec. 1; RA 2927; Djumantan v. Domingo (G.R. No. 99358, Jan. 30, 1995)'
	},
	{
		id: 'philo:l6:1',
		topic: 'FINALS — Lesson 6 · A History of Natural Law',
		topicId: 'l6',
		tag: 'memorization',
		question: 'How did St. Thomas Aquinas resolve the medieval confusion between natural law and divine law?',
		options: [
			'He restored natural law as distinct from divine law, defining natural law as the rational creature’s participation in the Eternal Law.',
			'He held that after the Fall of Man, natural law was completely blotted out and replaced by the Torah.',
			'He equated natural law with the pantheistic divine spark of Stoicism and rejected revealed Scripture.',
			'He argued that natural law is merely a command of the earthly sovereign backed by threats of punishment.'
		],
		correctIndex: 0,
		key: 'He restored natural law as distinct from divine law, defining natural law as the rational creature’s participation in the Eternal Law.',
		explanation: 'Aquinas distinguished Eternal Law, Natural Law (the rational creature’s participation in Eternal Law: do good and avoid evil), Divine Law (revealed law supplementing human reason), and Human Law.',
		legalBasis: 'FINALS · Ch. 6 (A History of Natural Law, Borja Handout 6, pp. 1–7; Pascual, pp. 65–98) — St. Thomas Aquinas, Summa Theologiae (Scholasticism)'
	},
	{
		id: 'philo:l7:1',
		topic: 'FINALS — Lesson 7 · Natural Law in Philippine Law',
		topicId: 'l7',
		tag: 'jurisprudence',
		question: 'How do Imbong v. Ochoa (2014) and Justice Puno’s separate opinion in Republic v. Sandiganbayan (2003) reconcile the direct invocation of natural law before Philippine courts?',
		options: [
			'Natural law cannot strike down a statute when the Constitution speaks (Imbong), but applies directly in an extraordinary constitutional vacuum or lacuna (Sandiganbayan).',
			'Imbong overruled Sandiganbayan and barred courts from ever considering right, justice, or morals even when a statute is silent.',
			'Sandiganbayan held that natural law automatically nullifies any tax or regulatory statute that conflicts with Church teaching.',
			'Both cases hold that natural law is enforced only by religious courts and never by the Supreme Court.'
		],
		correctIndex: 0,
		key: 'Natural law cannot strike down a statute when the Constitution speaks (Imbong), but applies directly in an extraordinary constitutional vacuum or lacuna (Sandiganbayan).',
		explanation: 'In Imbong v. Ochoa, the Court held that the Constitution is the only guidepost for invalidating a statute unless a natural right is written into law; natural law is reserved sparingly for peculiar circumstances where no positive law applies (lacunae), such as the 1986 post-EDSA constitutional hiatus in Republic v. Sandiganbayan.',
		legalBasis: 'FINALS · Ch. 7 (Natural Law in Philippine Law and Jurisprudence, pp. 101–114; Borja Handout 7) — Imbong v. Ochoa (G.R. No. 204819, Apr. 8, 2014); Republic v. Sandiganbayan (G.R. No. 104768, July 21, 2003, J. Puno concurring); Civil Code, Arts. 9–10'
	},
	{
		id: 'philo:l8:1',
		topic: 'FINALS — Lesson 8 · Legal Positivism',
		topicId: 'l8',
		tag: 'memorization',
		question: 'In Hans Kelsen’s Pure Theory of Law, what is the precise relationship between “efficacy” and the legal validity of norms?',
		options: [
			'An individual norm can be valid even before anyone follows it, provided it belongs to a legal system—and rests on a Grundnorm—that is on the whole efficacious.',
			'Every individual statute loses its validity the moment a single citizen violates it.',
			'Efficacy is completely irrelevant to both individual norms and the Grundnorm because law is pure logic.',
			'A norm is efficacious only when it conforms to the universal moral precepts of natural law.'
		],
		correctIndex: 0,
		key: 'An individual norm can be valid even before anyone follows it, provided it belongs to a legal system—and rests on a Grundnorm—that is on the whole efficacious.',
		explanation: 'Kelsen explains that efficacy (actual compliance by the population) is not a condition for the validity of an individual newly enacted norm, but is a condition for the validity of the legal order as a whole and of the Grundnorm itself.',
		legalBasis: 'FINALS · Ch. 8 (Legal Positivism, Borja Handout 8, pp. 1–6; Pascual, pp. 115–138) — Hans Kelsen, Pure Theory of Law (Reine Rechtslehre: Grundnorm, Validity, and Efficacy) & David Hume’s Is/Ought Injunction'
	},
	{
		id: 'philo:l9:1',
		topic: 'FINALS — Lesson 9 · Legal Positivism in Philippine Law',
		topicId: 'l9',
		tag: 'jurisprudence',
		question: 'In Caltex (Philippines), Inc. v. Customs Arrastre Service and Santiago v. Republic, which doctrine did the Supreme Court expressly identify as a manifestation of our commitment to the Austinian or positivist concept of law?',
		options: [
			'The doctrine of non-suability (immunity from suit) of the State without its consent',
			'The primacy of human rights over property rights',
			'The direct application of natural rights during a revolutionary interregnum',
			'The recognition of local custom praeter legem as a fact to be proved'
		],
		correctIndex: 0,
		key: 'The doctrine of non-suability (immunity from suit) of the State without its consent',
		explanation: 'Caltex and Santiago hold that state immunity from suit is a logical corollary of the Austinian/Holmesian positivist concept of law: because law is created only by the State, there can be no legal right against the authority that makes the law on which the right depends.',
		legalBasis: 'FINALS · Ch. 9 (Legal Positivism in Philippine Law and Jurisprudence, Borja Handout 9, pp. 1–3) — Caltex (Phils.), Inc. v. Customs Arrastre Service (G.R. No. L-26632, May 29, 1970); Santiago v. Republic (G.R. No. L-48214, Dec. 19, 1978); 1987 Constitution, Art. XVI, Sec. 3'
	},
	{
		id: 'philo:l10:1',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'Which thinker argued that without justice, a government is no more than “a band of robbers”?',
		options: ['St. Augustine', 'John Austin', 'Thomas Hobbes', 'Hans Kelsen'],
		correctIndex: 0,
		key: 'St. Augustine',
		explanation: 'St. Augustine held that force is the antithesis of law: without justice, a government is no more than a band of robbers.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 139–156) — St. Augustine of Hippo, The City of God (De Civitate Dei, Book IV, Ch. 4)'
	},
	{
		id: 'philo:l10:2',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'requisites',
		question: 'Which of the following is NOT one of H.L.A. Hart’s three objections to Austin’s command theory?',
		options: [
			'Modern states have no single sovereign.',
			'Many rules confer powers (such as wills and marriage) rather than imposing commands.',
			'Threats oblige a person (like a gunman) but do not create a legal obligation.',
			'Law is valid only when it conforms to the volksgeist of the nation.'
		],
		correctIndex: 3,
		key: 'Law is valid only when it conforms to the volksgeist of the nation.',
		explanation: 'Hart’s three objections to Austin are: (1) no single sovereign, (2) power-conferring rules, and (3) the gunman problem (threats oblige but do not create obligation). The volksgeist belongs to Savigny and the Historical School.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 143–152) — H.L.A. Hart, The Concept of Law (1961) vs. John Austin, The Province of Jurisprudence Determined (1832)'
	},
	{
		id: 'philo:l10:3',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'In Max Weber’s sociology of law, what are the three types of legitimate authority?',
		options: [
			'Charismatic, traditional, and rational-legal',
			'Theological, metaphysical, and positive',
			'Contra legem, secundum legem, and praeter legem',
			'Functional, legal realist, and policy science'
		],
		correctIndex: 0,
		key: 'Charismatic, traditional, and rational-legal',
		explanation: 'Weber’s three types of authority are charismatic, traditional, and rational-legal (C-T-R). Theological, metaphysical, and positive are Comte’s three stages.',
		legalBasis: 'FINALS · Ch. 10 & 13 (Morals v. Force & Sociological School, Pascual, pp. 147, 198–201) — Max Weber, Economy and Society (Three Pure Types of Legitimate Authority: Charismatic, Traditional, Rational-Legal)'
	},
	{
		id: 'philo:l11:1',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'In Auguste Comte’s law of three stages, human thought progresses in which exact order?',
		options: [
			'Theological → Metaphysical → Positive (scientific)',
			'Metaphysical → Theological → Positive (scientific)',
			'Status → Contract → Collectivism',
			'Mechanical solidarity → Organic solidarity → Rationalization'
		],
		correctIndex: 0,
		key: 'Theological → Metaphysical → Positive (scientific)',
		explanation: 'Comte’s law of three stages moves in order: (1) Theological (explained by God), (2) Metaphysical (explained by abstract universal rights), and (3) Positive/scientific (explained by observed facts).',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 157–168; Borja Handout 11) — Auguste Comte, Course of Positive Philosophy (Law of Three Stages)'
	},
	{
		id: 'philo:l12:1',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'For Friedrich Carl von Savigny and the Historical School, what is the true source of law?',
		options: [
			'The volksgeist expressed through a people’s custom',
			'The sovereign’s command backed by the threat of sanction',
			'Social engineering by courts weighing competing interests',
			'Rational codification designed by enlightened legislators'
		],
		correctIndex: 0,
		key: 'The volksgeist expressed through a people’s custom',
		explanation: 'Savigny held that law grows out of the volksgeist (spirit of the people) the way language does: law is found, not made, and codification by abstract reason is distrusted.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 173–184; Borja Handout 12) — Friedrich Carl von Savigny, Of the Vocation of Our Age for Legislation and Jurisprudence (1814) (Volksgeist)'
	},
	{
		id: 'philo:l12:2',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'Who formulated the famous thesis that the movement of progressive societies has hitherto been a movement “from Status to Contract”?',
		options: ['Sir Henry Maine', 'Edmund Burke', 'Eugen Ehrlich', 'Rudolf von Jhering'],
		correctIndex: 0,
		key: 'Sir Henry Maine',
		explanation: 'Sir Henry Maine founded the English Historical School with Ancient Law (1861), arguing that legal relations evolve from status (fixed by family/birth) to contract (chosen by individual agreement).',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 185–194; Borja Handout 12) — Sir Henry James Sumner Maine, Ancient Law (1861), Ch. V ("From Status to Contract")'
	},
	{
		id: 'philo:l13:1',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'Which thinker coined the term “living law” and wrote that the center of gravity of legal development lies “not in legislation, nor in juristic science, nor in judicial decision, but in society itself”?',
		options: ['Eugen Ehrlich', 'Roscoe Pound', 'Émile Durkheim', 'Karl Marx'],
		correctIndex: 0,
		key: 'Eugen Ehrlich',
		explanation: 'Eugen Ehrlich distinguished “living law” (the rules people actually follow in their social associations) from positive law enacted by the State.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 199–208; Borja Handout 13) — Eugen Ehrlich, Fundamental Principles of the Sociology of Law (1913) ("Living Law")'
	},
	{
		id: 'philo:l13:2',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'In Émile Durkheim’s sociology of law, how does law change as society moves from mechanical solidarity to organic solidarity?',
		options: [
			'From repressive law to restitutive law',
			'From restitutive law to repressive law',
			'From contract back to status',
			'From positive law to withering away of the state'
		],
		correctIndex: 0,
		key: 'From repressive law to restitutive law',
		explanation: 'Durkheim showed that simple societies with mechanical solidarity rely on repressive (penal) law, whereas complex interdependent societies with organic solidarity rely on restitutive law that restores relations.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 197–202; Borja Handout 13) — Émile Durkheim, The Division of Labor in Society (1893) (Mechanical vs. Organic Solidarity)'
	},
	{
		id: 'philo:l14:1',
		topic: 'FINALS — Philippine Jurisprudence',
		topicId: 'l14',
		tag: 'jurisprudence',
		question: 'How do Floresca v. Philex Mining and Rodriguez v. Tan reconcile on whether judges may legislate?',
		options: [
			'Judges may fill statutory gaps interstitially, not adopt doctrines lacking statutory basis.',
			'Floresca completely overruled Rodriguez v. Tan and allows courts to enact new statutes.',
			'Rodriguez v. Tan applies only to criminal cases, while Floresca applies to all civil cases.',
			'Both cases hold that judges may never go beyond the literal text of a statute.'
		],
		correctIndex: 0,
		key: 'Judges may fill statutory gaps interstitially, not adopt doctrines lacking statutory basis.',
		explanation: 'Quoting Holmes, Floresca holds that judges “do and must legislate, but they can do so only interstitially” (filling gaps from molar to molecular motions), whereas Rodriguez v. Tan bars adopting a whole doctrine with no statutory anchor.',
		legalBasis: 'FINALS · Ch. 13 & Philippine Jurisprudence Handouts (Pascual, pp. 219–224; Holmes & Common Law Handouts) — Floresca v. Philex Mining Corp. (G.R. No. L-30642, Apr. 30, 1985, citing Justice Holmes in Southern Pacific Co. v. Jensen); Rodriguez v. Tan (91 Phil. 724, 1952)'
	},
	{
		id: 'philo:l14:2',
		topic: 'FINALS — Philippine Jurisprudence',
		topicId: 'l14',
		tag: 'jurisprudence',
		question: 'How does the approach in PBMEO v. Philippine Blooming Mills differ from the balancing-of-interests test in Secretary of Justice v. Lantion and Soriano v. Laguardia?',
		options: [
			'PBMEO ranks human rights above property rights from the start; balancing weighs interests case by case.',
			'PBMEO holds that corporate property rights always prevail over freedom of assembly under a CBA.',
			'Lantion and Soriano rejected balancing of interests in favor of absolute protection for free speech.',
			'Both approaches apply the dangerous tendency test to all conflicts involving property and speech.'
		],
		correctIndex: 0,
		key: 'PBMEO ranks human rights above property rights from the start; balancing weighs interests case by case.',
		explanation: 'In PBMEO v. Philippine Blooming Mills, the Court ranked human rights above property rights in advance (preferred freedoms require clear and present danger, whereas property may be regulated on a rational basis), unlike open-ended balancing.',
		legalBasis: 'FINALS · Ch. 13 & Philippine Jurisprudence on Balancing of Interests (Pascual, pp. 205–218; Balancing Handout) — PBMEO v. Philippine Blooming Mills (G.R. No. L-31195, June 5, 1973); Secretary of Justice v. Lantion (G.R. No. 139465, Jan. 18, 2000); Soriano v. Laguardia (G.R. No. 164785, Apr. 29, 2009)'
	},
	// =========================================================================
	// COMPREHENSIVE MOCK EXAMINATION: CHAPTERS 10–13 (ITEMS 1–88)
	// Part I: Multiple Choice Questions (Items 1–67)
	// =========================================================================
	{
		id: 'philo:finals:1',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'In the debate between natural law and legal positivism, what is the core positivist premise regarding legal validity?',
		options: ['Autonomy of legal validity', 'Inherent moral rectitude', 'Divine cosmic alignment', 'Universal popular consensus'],
		correctIndex: 0,
		key: 'Autonomy of legal validity',
		explanation: 'Legal positivism is founded on the Separability Thesis: legal validity is autonomous and distinct from moral merit. A rule constitutes law if enacted by recognized sovereign authority, regardless of its ethical quality.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 139–141) — John Austin, Jeremy Bentham, H.L.A. Hart; Civil Code Arts. 10, 19 (contra); Estrada v. Escritor'
	},
	{
		id: 'philo:finals:2',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'In Plato’s dialogue Crito, on what philosophical ground did Socrates refuse to evade his death sentence?',
		options: ['Utilitarian calculus', 'Categorical imperative', 'Early social contract', 'Ancestral folk custom'],
		correctIndex: 2,
		key: 'Early social contract',
		explanation: 'Socrates invoked an early concept of the social contract: having enjoyed the benefits and protections of Athens, he was morally bound to obey its positive legal decrees, even when the verdict was substantively unjust.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 140–142) — Socrates, Plato (Crito)'
	},
	{
		id: 'philo:finals:3',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'In analyzing the relationship between law and morals, which legal field exhibits their closest convergence?',
		options: ['Maritime commerce', 'Criminal law', 'Administrative zoning', 'Civil procedure'],
		correctIndex: 1,
		key: 'Criminal law',
		explanation: 'Criminal law represents the closest convergence of law and morals; establishing criminal liability and sentencing depends fundamentally on moral blameworthiness and the subjective requirement of mens rea.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 141–143) — Dean Romulo V. Borja, H.L.A. Hart; Revised Penal Code, Art. 3 (Mens rea)'
	},
	{
		id: 'philo:finals:4',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'Under modern penal systems, why is the severity of statutory punishment keyed to moral blameworthiness?',
		options: ['Administrative convenience', 'Mutual reinforcement of law and morals', 'Total fiscal deterrence', 'Sovereign revenue generation'],
		correctIndex: 1,
		key: 'Mutual reinforcement of law and morals',
		explanation: 'Penal codes link the severity of penalties to moral depravity because positive law and societal morality reinforce each other, ensuring that punishment reflects the community’s ethical condemnation.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 142–144) — Dean Romulo V. Borja; Revised Penal Code, Arts. 13 & 14'
	},
	{
		id: 'philo:finals:5',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'exceptions',
		question: 'Which scenario illustrates a clear divergence where positive law operates without moral content?',
		options: ['Directional traffic regulations', 'Prohibition against murder', 'Sanctions against perjury', 'Bans on contractual deceit'],
		correctIndex: 0,
		key: 'Directional traffic regulations',
		explanation: 'Traffic rules (e.g. driving on the right versus left side of the road) are classic examples of morally indifferent technical conventions, demonstrating pure divergence between positive law and moral duties.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 142–143) — Dean Romulo V. Borja; Republic Act No. 4136 (Land Transportation and Traffic Code)'
	},
	{
		id: 'philo:finals:6',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'In which legal tradition is positive human law treated as strictly identical with divine moral law?',
		options: ['Scandinavian legal realism', 'Analytical positivism', 'Dialectical materialism', 'Theocratic legal orders'],
		correctIndex: 3,
		key: 'Theocratic legal orders',
		explanation: 'Theocratic systems (such as ancient Hebrew law and Calvinist Geneva) view human law as identical with divine moral law, rejecting any legitimate divergence between statutory mandates and religious morality.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 140–141) — Ancient Hebrew jurists, John Calvin'
	},
	{
		id: 'philo:finals:7',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'In Thomas Hobbes’ Leviathan, why is a sovereign’s statutory decree incapable of being unjust?',
		options: ['Infallibility of monarchs', 'Subjection to international courts', 'Surrender of natural rights to the sovereign', 'Universal legislative assemblies'],
		correctIndex: 2,
		key: 'Surrender of natural rights to the sovereign',
		explanation: 'Under Hobbes’ social contract, individuals surrender their sovereign natural rights to the Leviathan in exchange for physical security; because the ruler embodies their collective authorization, no sovereign act can be legally unjust.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 143–145) — Thomas Hobbes (Leviathan)'
	},
	{
		id: 'philo:finals:8',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'Which philosopher maintained that an individual citizen can achieve no higher right than obedience to the State?',
		options: ['John Locke', 'Arthur Schopenhauer', 'Thomas Paine', 'G.W.F. Hegel'],
		correctIndex: 3,
		key: 'G.W.F. Hegel',
		explanation: 'Hegel posited that the national State is the objective realization of the ethical Idea (Sittlichkeit); an individual’s highest moral and legal duty is to be an obedient member of the State.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 144–146) — Georg Wilhelm Friedrich Hegel (Philosophy of Right)'
	},
	{
		id: 'philo:finals:9',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'Which theologian declared that without justice, a government is nothing more than a “band of robbers”?',
		options: ['St. Augustine', 'Thomas Aquinas', 'John Calvin', 'Desiderius Erasmus'],
		correctIndex: 0,
		key: 'St. Augustine',
		explanation: 'In City of God, St. Augustine famously asked: “Set justice aside then, what are kingdoms but great bands of robbers?”, demonstrating that state power devoid of justice is merely organized extortion.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 146–147) — St. Augustine of Hippo (De Civitate Dei)'
	},
	{
		id: 'philo:finals:10',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'What standard phrase in legal practice reflects the perceived necessity of coercive power in positive law?',
		options: ['Due process of law', 'Presumption of regular performance', 'Force and effect of law', 'Clear and convincing evidence'],
		correctIndex: 2,
		key: 'Force and effect of law',
		explanation: 'The ubiquitous legal phrase “force and effect of law” reveals that lawyers and legislators regard organized physical coercion as an indispensable attribute of authentic positive legal rules.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 147–148) — Dean Romulo V. Borja; Civil Code, Art. 2'
	},
	{
		id: 'philo:finals:11',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'In Max Weber’s typology, which authority rests on personal devotion to an exemplary leader?',
		options: ['Charismatic authority', 'Bureaucratic authority', 'Rational-legal authority', 'Traditional authority'],
		correctIndex: 0,
		key: 'Charismatic authority',
		explanation: 'Max Weber defined charismatic domination as personal allegiance resting on devotion to the extraordinary heroism, perceived sanctity, or exemplary character of an individual.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 148–150) — Max Weber'
	},
	{
		id: 'philo:finals:12',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'What are the two primary historical streams of traditional authority identified by Max Weber?',
		options: ['Military conquest and judicial review', 'Hereditary lineage and communal wisdom', 'Statutory enactment and administrative rule', 'Secular treaties and papal bulls'],
		correctIndex: 1,
		key: 'Hereditary lineage and communal wisdom',
		explanation: 'Weber categorized traditional authority into two streams: rule based on blood or hereditary lineage (dynastic monarchies) and rule based on the learned and wise of the community (patriarchs and elders).',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 149–151) — Max Weber'
	},
	{
		id: 'philo:finals:13',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'In modern constitutional states, what provides the institutional foundation of rational-legal authority?',
		options: ['Hereditary royal decrees', 'Impersonal bureaucratic procedures', 'Supernatural theological miracles', 'Unwritten patriarchal customs'],
		correctIndex: 1,
		key: 'Impersonal bureaucratic procedures',
		explanation: 'Rational-legal authority derives legitimacy from formally enacted, impersonal legal procedures and statutory competence rather than personal loyalty to an individual or ancestral tradition.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 150–152) — Max Weber; 1987 Philippine Constitution, Art. II, Sec. 1'
	},
	{
		id: 'philo:finals:14',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'exceptions',
		question: 'What structural characteristic of international law challenges Austin’s imperative command theory?',
		options: ['Universal judicial tenure', 'Absence of a supreme sovereign', 'Absence of written agreements', 'Universal statutory codes'],
		correctIndex: 1,
		key: 'Absence of a supreme sovereign',
		explanation: 'Austin defined law as a sovereign’s command backed by sanctions. In international law, sovereign states are formally equal and no centralized global sovereign exists, yet international obligations are binding.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 152–154) — John Austin, H.L.A. Hart; 1987 Constitution, Art. II, Sec. 2 (Incorporation Clause)'
	},
	{
		id: 'philo:finals:15',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'requisites',
		question: 'What critical oversight did H.L.A. Hart point out in John Austin’s coercive command model of law?',
		options: ['Overreliance on natural rights', 'Failure to recognize secondary rules', 'Excessive biblical mysticism', 'Neglect of feudal customary rites'],
		correctIndex: 1,
		key: 'Failure to recognize secondary rules',
		explanation: 'Hart demonstrated that Austin’s model treated law as a gunman’s coercive command, ignoring power-conferring secondary rules that enable citizens to execute contracts, wills, and marriages.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 153–155) — H.L.A. Hart (The Concept of Law)'
	},
	{
		id: 'philo:finals:16',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'In Hans Kelsen’s Pure Theory of Law, what epistemological postulate validates the entire legal hierarchy?',
		options: ['Universal divine providence', 'The categorical imperative', 'The Grundnorm', 'Sovereign physical force'],
		correctIndex: 2,
		key: 'The Grundnorm',
		explanation: 'Kelsen traced the validity of legal norms up a pyramid to a presupposed, non-empirical Basic Norm (Grundnorm) that validates the foundational constitution.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 154–156) — Hans Kelsen (Reine Rechtslehre); Republic v. Sandiganbayan (Separate Opinion of Puno, J.)'
	},
	{
		id: 'philo:finals:17',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'jurisprudence',
		question: 'At the Nuremberg Trials, what classic positivist defense asserted by Nazi officials was rejected?',
		options: ['Diplomatic immunity', 'Superior orders', 'Lack of venue', 'Prescription of action'],
		correctIndex: 1,
		key: 'Superior orders',
		explanation: 'The Nuremberg tribunals rejected the defense of “superior orders” (Befehl ist Befehl), ruling that positive sovereign enactments that violate elementary humanity cannot excuse criminal liability.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 155–156) — Gustav Radbruch, Robert H. Jackson; London Charter of the International Military Tribunal, Art. 8'
	},
	{
		id: 'philo:finals:18',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'What foundational premise was shared by both classical Natural Law and early Legal Positivism?',
		options: ['Dialectical class conflict', 'Historical folk consciousness', 'Atomistic individualism', 'Biological evolutionism'],
		correctIndex: 2,
		key: 'Atomistic individualism',
		explanation: 'Both traditional Natural Law (contractarian theorists) and early Legal Positivism (Bentham/Austin) viewed society from an atomistic individualist standpoint—as a collection of autonomous individuals.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 157–159) — John Locke, Jeremy Bentham, John Austin'
	},
	{
		id: 'philo:finals:19',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'How did Jeremy Bentham’s utilitarianism measure the validity of legislative policy?',
		options: ['Scriptural orthodoxy', 'Ancestral customary pedigree', 'Individual pleasure-pain calculus', 'Feudal chivalric honors'],
		correctIndex: 2,
		key: 'Individual pleasure-pain calculus',
		explanation: 'Bentham evaluated legislation through an individualistic hedonic calculus, measuring utility as the net balance of pleasure over pain (“utils”) experienced by individual citizens.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 158–160) — Jeremy Bentham'
	},
	{
		id: 'philo:finals:20',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'What characterized the intellectual shift from speculative jurisprudence to the social sciences?',
		options: ['Revival of monastic scholasticism', 'Rejection of statutory codes', 'Universal adoption of canon law', 'Shift to empirical social inquiry'],
		correctIndex: 3,
		key: 'Shift to empirical social inquiry',
		explanation: 'The 18th- and 19th-century intellectual shift replaced abstract metaphysical speculation with empirical observation, comparative history, and scientific study of social facts.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 159–161) — Montesquieu, Auguste Comte'
	},
	{
		id: 'philo:finals:21',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'In The Spirit of Laws, what constitutional mechanism did Montesquieu champion to secure liberty?',
		options: ['Proletarian dictatorship', 'Tripartite separation of powers', 'Hereditary monarchical veto', 'Unrestricted administrative fiat'],
		correctIndex: 1,
		key: 'Tripartite separation of powers',
		explanation: 'Montesquieu formulated the separation of legislative, executive, and judicial powers into distinct branches to establish institutional checks and balances and prevent despotism.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 160–162) — Baron de Montesquieu; 1987 Philippine Constitution, Arts. VI, VII, VIII'
	},
	{
		id: 'philo:finals:22',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'Why do modern anthropologists consider Montesquieu a pioneer of their discipline?',
		options: ['Invention of algebraic logic', 'Comparative socio-environmental analysis', 'Advocacy of universal uniform codes', 'Promotion of monarchical absolutism'],
		correctIndex: 1,
		key: 'Comparative socio-environmental analysis',
		explanation: 'Anthropologists celebrate Montesquieu for conducting the first comprehensive comparative survey showing that laws must be relative to local climate, topography, economy, and cultural manners.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 161–163) — Montesquieu, Georges Balandier, D.F. Pocock'
	},
	{
		id: 'philo:finals:23',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'Which French philosopher coined the term “sociology” and established positivism in scientific philosophy?',
		options: ['Auguste Comte', 'Henri de Saint-Simon', 'René Descartes', 'Jean-Jacques Rousseau'],
		correctIndex: 0,
		key: 'Auguste Comte',
		explanation: 'Auguste Comte coined the term “sociology” and established positivism, treating the scientific empirical study of society as the culminating achievement of the sciences.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 162–164) — Auguste Comte'
	},
	{
		id: 'philo:finals:24',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'Under Auguste Comte’s Law of Three Stages, how are phenomena explained in the Theological Stage?',
		options: ['Abstract metaphysical rights', 'Empirical mathematical relations', 'Supernatural deities and spirits', 'Dialectical material conditions'],
		correctIndex: 2,
		key: 'Supernatural deities and spirits',
		explanation: 'In Comte’s Theological Stage, human beings explain nature and social structures by referencing supernatural forces, deities, and ancestral spirits.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 163–165) — Auguste Comte'
	},
	{
		id: 'philo:finals:25',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'What intellectual method defines Comte’s Metaphysical Stage of human development?',
		options: ['Scientific laboratory tests', 'Pure statistical surveys', 'Superstitious animistic rituals', 'Abstract philosophical principles'],
		correctIndex: 3,
		key: 'Abstract philosophical principles',
		explanation: 'In the Metaphysical Stage, explanations discard personal deities, relying instead on abstract entities such as “nature,” “reason,” and universal “human rights.”',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 164–166) — Auguste Comte'
	},
	{
		id: 'philo:finals:26',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'What methodology characterizes the Positive or Scientific Stage in Comte’s evolutionary framework?',
		options: ['Theological revelation', 'Pure metaphysical speculation', 'Feudal scholastic deduction', 'Empirical observation and facts'],
		correctIndex: 3,
		key: 'Empirical observation and facts',
		explanation: 'In the Positive Stage, thinkers abandon ultimate metaphysical causes and confine inquiry to empirically observed facts, scientific laws, and measurable social data.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 165–167) — Auguste Comte'
	},
	{
		id: 'philo:finals:27',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'How did Jean-Jacques Rousseau depict primitive humanity prior to civil society?',
		options: ['Violent brutes in perpetual war', 'Bureaucratic state officials', 'Commercial mercantilist traders', 'Peaceful noble savages'],
		correctIndex: 3,
		key: 'Peaceful noble savages',
		explanation: 'Rousseau depicted primitive humanity as “noble savages” living in solitary, peaceful harmony with nature, free from the corrupting vanities and inequalities of civilization.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 166–168) — Jean-Jacques Rousseau'
	},
	{
		id: 'philo:finals:28',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'According to Rousseau, what historical development introduced inequality and moral corruption?',
		options: ['Establishment of trial by jury', 'Discovery of writing', 'Invention of private property', 'Rise of representative voting'],
		correctIndex: 2,
		key: 'Invention of private property',
		explanation: 'Rousseau asserted that human misery, crime, and social inequality originated the moment an individual enclosed a piece of land and claimed: “This is mine”—founding private property.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 167–169) — Jean-Jacques Rousseau (Discourse on Inequality)'
	},
	{
		id: 'philo:finals:29',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'Under Rousseau’s social contract, what collective sovereign justifies compelling compliance with law?',
		options: ['The Royal Prerogative', 'The General Will', 'The Papal Hierarchy', 'The Corporate Board'],
		correctIndex: 1,
		key: 'The General Will',
		explanation: 'Rousseau posited that citizens submit to the General Will (volonté générale); because all participate in forming it, in obeying the law they obey only themselves, justifying “forcing them to be free.”',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 168–170) — Jean-Jacques Rousseau (The Social Contract)'
	},
	{
		id: 'philo:finals:30',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'Why did Edmund Burke endorse the American Revolution while opposing the French Revolution?',
		options: ['Transatlantic trade interests', 'Sectarian theological loyalties', 'Dynastic marital alliances', 'Preservation of chartered liberties versus abstract rationalism'],
		correctIndex: 3,
		key: 'Preservation of chartered liberties versus abstract rationalism',
		explanation: 'Burke defended the American Revolution for protecting established, historic English chartered liberties, but denounced the French Revolution for demolishing society based on abstract, untried dogmas.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 169–171) — Edmund Burke (Reflections on the Revolution in France)'
	},
	{
		id: 'philo:finals:31',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'According to Edmund Burke, what social role is served by hereditary property and social classes?',
		options: ['Stabilizing society and checking arbitrary power', 'Fomenting continuous civil strife', 'Eliminating industrial manufacturing', 'Abolishing constitutional government'],
		correctIndex: 0,
		key: 'Stabilizing society and checking arbitrary power',
		explanation: 'Burke viewed hereditary property and established social classes as natural stabilizing structures that preserve civil order, anchor traditions, and check despotic royal power.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 170–172) — Edmund Burke'
	},
	{
		id: 'philo:finals:32',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'jurisprudence',
		question: 'How did Edmund Burke define society across generational time?',
		options: ['A fleeting commercial bargain', 'An arena of material class warfare', 'An intergenerational partnership of the living, dead, and unborn', 'A sovereign monopoly on violence'],
		correctIndex: 2,
		key: 'An intergenerational partnership of the living, dead, and unborn',
		explanation: 'Burke defined society as an organic moral partnership not only between the living, but between the living, those who are dead, and those who are yet to be born.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 171–172) — Edmund Burke; Oposa v. Factoran (Intergenerational responsibility)'
	},
	{
		id: 'philo:finals:33',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'In G.W.F. Hegel’s political theory, how is the State conceptualized in relation to individual citizens?',
		options: ['A subordinate business agent', 'An organic ethical whole superior to individuals', 'A temporary coercive syndicate', 'An aggregate of private contracts'],
		correctIndex: 1,
		key: 'An organic ethical whole superior to individuals',
		explanation: 'Hegel conceptualized the State as an objective, living ethical organism (Sittlichkeit) that transcends individual citizens, who achieve authentic freedom only through communal life.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 171–172) — Georg Wilhelm Friedrich Hegel'
	},
	{
		id: 'philo:finals:34',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'For G.W.F. Hegel, what is the highest historical manifestation of objective reason and freedom?',
		options: ['An international stock exchange', 'Feudal agrarian bondage', 'A stateless communist commune', 'The national constitutional State'],
		correctIndex: 3,
		key: 'The national constitutional State',
		explanation: 'For Hegel, the national State represents the march of God in the world—the highest concrete embodiment of objective reason and genuine freedom in history.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, p. 172) — Georg Wilhelm Friedrich Hegel'
	},
	{
		id: 'philo:finals:35',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'What is the foundational thesis of the German Historical School of Jurisprudence?',
		options: ['Law reflects the Volksgeist', 'Law is sovereign command', 'Law is divine revelation', 'Law is pure economic power'],
		correctIndex: 0,
		key: 'Law reflects the Volksgeist',
		explanation: 'The Historical School posits that law is not manufactured de novo by legislatures, but grows organically out of the national consciousness or folk-soul (Volksgeist).',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 173–175) — Friedrich Karl von Savigny, Gustav von Hugo; Philippine Jurisprudence on the Historical School'
	},
	{
		id: 'philo:finals:36',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'Which German jurist pioneered the Historical School by challenging uncritical Roman law codification?',
		options: ['Gustav von Hugo', 'Anton Thibaut', 'Hans Kelsen', 'Rudolf von Jhering'],
		correctIndex: 0,
		key: 'Gustav von Hugo',
		explanation: 'Gustav von Hugo pioneered historical jurisprudence by challenging German jurists who uncritically attempted to codify laws without distinguishing native German customs from Roman imports.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 174–176) — Gustav von Hugo'
	},
	{
		id: 'philo:finals:37',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'What historical event prompted Savigny’s famous 1814 treatise against immediate codification?',
		options: ['The French invasion of Russia', 'Thibaut’s proposal for a German Civil Code', 'The American Declaration of Independence', 'The signing of Magna Carta'],
		correctIndex: 1,
		key: 'Thibaut’s proposal for a German Civil Code',
		explanation: 'Savigny published his 1814 treatise to oppose Anton Thibaut’s call for an immediate, uniform civil code for Germany, arguing Germany was not yet mature enough for codification.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 175–177) — Friedrich Karl von Savigny, Anton Friedrich Justus Thibaut'
	},
	{
		id: 'philo:finals:38',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'How did Savigny characterize the Natural Law philosophy that inspired the French Civil Code?',
		options: ['Divine scripture in secular form', 'The pinnacle of legal science', 'An indispensable commercial guide', 'Infinite arrogance and shallow philosophy'],
		correctIndex: 3,
		key: 'Infinite arrogance and shallow philosophy',
		explanation: 'Savigny condemned 18th-century Natural Law and the French Code for their “infinite arrogance” and shallow universalism, which presumed laws could be created from abstract reason.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 176–178) — Friedrich Karl von Savigny'
	},
	{
		id: 'philo:finals:39',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'Which celebrated aphorism encapsulates the Historical School’s view on the creation of law?',
		options: ['Law is commanded, not reasoned', 'Law is found, not made', 'Law is force without justice', 'Law is calculated utility'],
		correctIndex: 1,
		key: 'Law is found, not made',
		explanation: 'The Historical School maintains that “law is not made; it is found”—growing organically from popular custom and merely discovered and refined by scholars.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 177–179) — Friedrich Karl von Savigny; Civil Code, Arts. 11 & 12 (Customs)'
	},
	{
		id: 'philo:finals:40',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'requisites',
		question: 'Why does the Historical School reject the concept of universal, immutable positive laws?',
		options: ['Language translations are impossible', 'Monarchs refuse international arbitration', 'Laws are culturally and geographically unique', 'Trade tariffs require local currency'],
		correctIndex: 2,
		key: 'Laws are culturally and geographically unique',
		explanation: 'Historical jurists insist that law is national and non-universal—as intimately tied to a specific people and its history as its language, literature, and native customs.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 178–180) — Friedrich Karl von Savigny'
	},
	{
		id: 'philo:finals:41',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'According to Savigny, which source represents the most authentic manifestation of law?',
		options: ['Executive administrative orders', 'Customary law', 'Parliamentary statutory enactments', 'Foreign international treaties'],
		correctIndex: 1,
		key: 'Customary law',
		explanation: 'Customary law is regarded as the purest manifestation of the Volksgeist because it reflects the uncoerced, organic daily practices of the population over generations.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 179–181) — Friedrich Karl von Savigny; Civil Code, Art. 12'
	},
	{
		id: 'philo:finals:42',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'Why did Savigny oppose premature statutory codification?',
		options: ['Judges refused to follow written texts', 'Legislators lacked legal degrees', 'Publishing expenses were excessive', 'It freezes organic legal development'],
		correctIndex: 3,
		key: 'It freezes organic legal development',
		explanation: 'Savigny argued that premature statutory codification paralyzes organic legal growth, imposing a rigid mechanical straightjacket that arrests the natural evolution of custom.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 180–182) — Friedrich Karl von Savigny'
	},
	{
		id: 'philo:finals:43',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'In Savigny’s mature legal system, what role is performed by academic jurists?',
		options: ['Coercive sovereign rulers', 'Monopolistic corporate arbitrators', 'Articulators of the popular folk-soul', 'Tax assessors for the monarch'],
		correctIndex: 2,
		key: 'Articulators of the popular folk-soul',
		explanation: 'As legal systems mature, academic jurists represent the popular consciousness, tasked with scientifically articulating, refining, and systematizing the Volksgeist.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 181–183) — Friedrich Karl von Savigny'
	},
	{
		id: 'philo:finals:44',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'Which jurist observed that “the folk-soul awakens this conviction and is responsible for it”?',
		options: ['Rudolf Stammler', 'Eugen Ehrlich', 'Jeremy Bentham', 'John Austin'],
		correctIndex: 0,
		key: 'Rudolf Stammler',
		explanation: 'Neo-Kantian legal scholar Rudolf Stammler analyzed the Historical School, observing that for Savigny, the folk-soul directly awakens and shapes popular legal conviction.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 182–184) — Rudolf Stammler'
	},
	{
		id: 'philo:finals:45',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'jurisprudence',
		question: 'Which U.S. Supreme Court Justice affirmed that “history built up the system and the law that went with it”?',
		options: ['Clarence Thomas', 'Antonin Scalia', 'John Marshall', 'Benjamin N. Cardozo'],
		correctIndex: 3,
		key: 'Benjamin N. Cardozo',
		explanation: 'Justice Benjamin N. Cardozo recognized the historical roots of Anglo-American doctrine, observing that history built up the legal system and the doctrines that animate it.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 183–185) — Benjamin N. Cardozo; Philippine Jurisprudence on Common Law'
	},
	{
		id: 'philo:finals:46',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'exceptions',
		question: 'What phrase did Dean Roscoe Pound use to critique the Historical School’s backward-looking passivity?',
		options: ['Mechanical jurisprudence', 'Spurious interpretation', 'The living law', 'Juristic pessimism'],
		correctIndex: 3,
		key: 'Juristic pessimism',
		explanation: 'Dean Roscoe Pound coined the term “juristic pessimism” to criticize the Historical School’s fatalistic assumption that law cannot proactively reform society.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 184–186) — Roscoe Pound'
	},
	{
		id: 'philo:finals:47',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'What distinguishes the temporal orientation of the Historical School from the Sociological School?',
		options: ['Divine eternity versus secular civil procedure', 'Monarchical loyalty versus military dominance', 'Past pedigree versus forward-looking problem solving', 'Tribal feudalism versus absolute monarchy'],
		correctIndex: 2,
		key: 'Past pedigree versus forward-looking problem solving',
		explanation: 'The Historical School is backward-looking (seeking justification from ancestral pedigree), whereas the Sociological School is forward-looking (adapting law to solve social problems).',
		legalBasis: 'FINALS · Ch. 12 & 13 (Historical & Sociological Schools, Pascual, pp. 185–187, 195–197) — Roscoe Pound, Friedrich Karl von Savigny'
	},
	{
		id: 'philo:finals:48',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'jurisprudence',
		question: 'Which Justice wrote that it is revolting to follow a rule merely because it was laid down under Henry IV?',
		options: ['Felix Frankfurter', 'Oliver Wendell Holmes Jr.', 'Louis Brandeis', 'William O. Douglas'],
		correctIndex: 1,
		key: 'Oliver Wendell Holmes Jr.',
		explanation: 'Justice Oliver Wendell Holmes Jr. criticized blind historical imitation, declaring it revolting to adhere to a rule solely because it was established under Henry IV.',
		legalBasis: 'FINALS · Ch. 12 & 13 (Historical & Sociological Schools, Pascual, pp. 186–188) — Oliver Wendell Holmes Jr. (The Path of the Law); Philippine Jurisprudence on Oliver Wendell Holmes'
	},
	{
		id: 'philo:finals:49',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'exceptions',
		question: 'What dangerous political distortion arose from radicalizing the concept of the Volksgeist?',
		options: ['Universal human rights covenants', 'International commercial free trade', 'Complete judicial textualism', 'Extreme racial nationalism and totalitarianism'],
		correctIndex: 3,
		key: 'Extreme racial nationalism and totalitarianism',
		explanation: 'As jurist Lord Lloyd noted, romanticizing the Volksgeist into a mystical racial essence contributed to extreme German nationalism, ethnic purification, and totalitarian Nazi legalism.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 187–189) — Lord Lloyd of Hampstead'
	},
	{
		id: 'philo:finals:50',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'In Ancient Law, what celebrated thesis did Sir Henry Sumner Maine formulate?',
		options: ['From Status to Contract', 'From Contract to Status', 'From Reason to Force', 'From Custom to Tyranny'],
		correctIndex: 0,
		key: 'From Status to Contract',
		explanation: 'Sir Henry Maine famously observed that the progress of civilized societies has historically been a movement “from status to contract”—from hereditary family dependency to individual agreement.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 188–190) — Sir Henry Sumner Maine (Ancient Law); Civil Code, Art. 1700 (Social legislation qualification)'
	},
	{
		id: 'philo:finals:51',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'What is the primary premise of the Sociological School regarding the nature of law?',
		options: ['Law is an autonomous formalist system', 'Law is arbitrary royal whim', 'Law is divine scripture', 'Law is an interactive social instrument'],
		correctIndex: 3,
		key: 'Law is an interactive social instrument',
		explanation: 'The Sociological School views law not as an isolated set of formal rules, but as an interactive social institution serving human needs, public welfare, and community interests.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 195–197) — Roscoe Pound, Eugen Ehrlich, Max Weber; Calalang v. Williams'
	},
	{
		id: 'philo:finals:52',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'Which jurist proclaimed that the center of gravity of legal development lies in society itself?',
		options: ['Eugen Ehrlich', 'Hans Kelsen', 'John Austin', 'Jeremy Bentham'],
		correctIndex: 0,
		key: 'Eugen Ehrlich',
		explanation: 'Austrian jurist Eugen Ehrlich declared that the center of gravity of legal development lies not in legislation or judicial decisions, but in society itself.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 196–198) — Eugen Ehrlich (Fundamental Principles of the Sociology of Law)'
	},
	{
		id: 'philo:finals:53',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'In Eugen Ehrlich’s sociological jurisprudence, what constitutes the “living law”?',
		options: ['Norms spontaneously obeyed in social associations', 'State-enacted penal statutes', 'Natural moral codes written in heaven', 'International diplomatic treaties'],
		correctIndex: 0,
		key: 'Norms spontaneously obeyed in social associations',
		explanation: 'Ehrlich distinguished formal state “norms for decision” from the “living law” (das lebende Recht)—the actual, unwritten norms that spontaneously order human associations.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 197–199) — Eugen Ehrlich; Civil Code, Arts. 10, 19'
	},
	{
		id: 'philo:finals:54',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'What aphorism did legal historian Lawrence Meir Friedman coin regarding legal scholarship?',
		options: ['Law is logic without experience', 'Law is too important to be left to lawyers', 'Law is a divine sovereign mystery', 'Law is an unyielding fortress'],
		correctIndex: 1,
		key: 'Law is too important to be left to lawyers',
		explanation: 'Lawrence Meir Friedman coined the maxim “law is too important to be left to lawyers,” demanding interdisciplinary sociological study of legal systems.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 198–200) — Lawrence Meir Friedman'
	},
	{
		id: 'philo:finals:55',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'How did Justice Crisolito Pascual classify the branches of the Sociological Perspective?',
		options: ['Historical, Positivist, and Analytical', 'Theocratic, Scholastic, and Secular', 'Functional, Realist, and Policy Science', 'Textualist, Originalist, and Pragmatic'],
		correctIndex: 2,
		key: 'Functional, Realist, and Policy Science',
		explanation: 'Justice Crisolito Pascual categorized the Sociological Perspective into: (1) Functional Jurisprudence (Pound), (2) Legal Realism (Holmes), and (3) Policy Science.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 199–201) — Justice Crisolito Pascual'
	},
	{
		id: 'philo:finals:56',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'How did Karl Marx and Friedrich Engels transform G.W.F. Hegel’s dialectical philosophy?',
		options: ['Inverted idealism into dialectical materialism', 'Subordinated dialectics to theology', 'Replaced sociology with geometry', 'Adopted Savigny’s customary folk-soul'],
		correctIndex: 0,
		key: 'Inverted idealism into dialectical materialism',
		explanation: 'Marx and Engels inverted Hegelian idealism, establishing dialectical materialism: the concrete material modes of economic production shape human ideas and political institutions.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 200–202) — Karl Marx, Friedrich Engels'
	},
	{
		id: 'philo:finals:57',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'In Karl Marx’s social model, what constitutes the foundation conditioning the legal superstructure?',
		options: ['The judicial hierarchy', 'International diplomatic treaties', 'The economic relations of production', 'Constitutional bills of rights'],
		correctIndex: 2,
		key: 'The economic relations of production',
		explanation: 'Marx established that the economic base (relations of production) forms the material foundation that conditions the legal, political, and ideological superstructure.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 201–203) — Karl Marx (Preface to Critique of Political Economy)'
	},
	{
		id: 'philo:finals:58',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'In The Communist Manifesto, how did Marx characterize bourgeois jurisprudence?',
		options: ['The universal realization of justice', 'Organic evolution of ancestral customs', 'Neutral balancing of competing interests', 'The will of the ruling class made into law'],
		correctIndex: 3,
		key: 'The will of the ruling class made into law',
		explanation: 'Marx and Engels declared that bourgeois law is merely “the will of your class made into a law for all,” determined by the economic conditions of the ruling class.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 202–204) — Karl Marx, Friedrich Engels (The Communist Manifesto)'
	},
	{
		id: 'philo:finals:59',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'What did Karl Marx foresee regarding the ultimate fate of the State and law under pure communism?',
		options: ['Permanent bureaucratic expansion', 'Codification on stone tablets', 'They will wither away', 'Subordination to the Papacy'],
		correctIndex: 2,
		key: 'They will wither away',
		explanation: 'Under pure communism, with the abolition of class antagonisms and private ownership of means of production, the State and coercive positive law will “wither away.”',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 203–205) — Karl Marx, Friedrich Engels'
	},
	{
		id: 'philo:finals:60',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'exceptions',
		question: 'What sociological warning did Max Weber deliver regarding modern bureaucratic rationalization?',
		options: ['The “iron cage” of bureaucratic efficiency', 'Destruction of world trade', 'Collapse of written codes', 'Immediate reversion to tribal anarchy'],
		correctIndex: 0,
		key: 'The “iron cage” of bureaucratic efficiency',
		explanation: 'Max Weber warned that relentless bureaucratic rationalization, legalism, and specialization risk trapping humanity in a disenchanted “iron cage” (stahlhartes Gehäuse).',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 204–206) — Max Weber'
	},
	{
		id: 'philo:finals:61',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'Which French sociologist established sociology as an academic discipline analyzing “social facts”?',
		options: ['Michel Foucault', 'Jean Baudrillard', 'Émile Durkheim', 'Pierre Bourdieu'],
		correctIndex: 2,
		key: 'Émile Durkheim',
		explanation: 'Émile Durkheim established sociology as an autonomous empirical science, defining its domain as “social facts” that exercise coercive influence over individuals.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 205–207) — Émile Durkheim (The Rules of Sociological Method)'
	},
	{
		id: 'philo:finals:62',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'In The Division of Labour in Society, what legal evolution did Émile Durkheim document?',
		options: ['From repressive to restitutive law', 'From restitutive to repressive law', 'From written statutes to oral proverbs', 'From secular codes to canon law'],
		correctIndex: 0,
		key: 'From repressive to restitutive law',
		explanation: 'Durkheim demonstrated that as society transitions from mechanical to organic solidarity, legal systems evolve from repressive (penal) to restitutive (civil/compensatory) law.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 206–208) — Émile Durkheim (The Division of Labour in Society)'
	},
	{
		id: 'philo:finals:63',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'Which German jurist authored The Struggle for Law and founded the “jurisprudence of interests”?',
		options: ['Hans Kelsen', 'Gustav Radbruch', 'Friedrich Karl von Savigny', 'Rudolf von Jhering'],
		correctIndex: 3,
		key: 'Rudolf von Jhering',
		explanation: 'Rudolf von Jhering attacked rigid formalism and developed the “jurisprudence of interests,” asserting that law is forged through struggle and serves practical human purposes.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 207–209) — Rudolf von Jhering (Der Kampf ums Recht)'
	},
	{
		id: 'philo:finals:64',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'What famous metaphor did Dean Roscoe Pound use to describe the functional mission of law?',
		options: ['An iron cage of discipline', 'Social engineering', 'The mirror of the folk-soul', 'A band of robbers'],
		correctIndex: 1,
		key: 'Social engineering',
		explanation: 'Dean Roscoe Pound characterized jurisprudence as “social engineering”—the ordering of human relations and balancing of competing interests with minimum friction and waste.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 208–211) — Roscoe Pound; Calalang v. Williams'
	},
	{
		id: 'philo:finals:65',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'In Roscoe Pound’s framework, what are “jural postulates”?',
		options: ['Eternal divine dogmas revealed in scripture', 'Punitive criminal sanctions of sovereigns', 'Reasonable expectations of civilized society', 'Infallible royal decrees of monarchs'],
		correctIndex: 2,
		key: 'Reasonable expectations of civilized society',
		explanation: 'Pound defined jural postulates as the generalized presuppositions of reasonable expectations held by civilized human beings regarding security, property, and freedom from aggression.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 210–213) — Roscoe Pound; Philippine Jurisprudence on Balancing of Interests'
	},
	{
		id: 'philo:finals:66',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'requisites',
		question: 'According to Roscoe Pound, what are the three main classes of interests reconciled by legal systems?',
		options: ['Individual, public, and social', 'Theocratic, metaphysical, and scientific', 'Legislative, executive, and judicial', 'Mechanical, organic, and dialectical'],
		correctIndex: 0,
		key: 'Individual, public, and social',
		explanation: 'Pound classified all human claims into: (1) Individual interests, (2) Public interests (claims of the state as a juristic person), and (3) Social interests (general security, morals, health).',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 211–214) — Roscoe Pound; Philippine Jurisprudence on Balancing of Interests; Calalang v. Williams'
	},
	{
		id: 'philo:finals:67',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'jurisprudence',
		question: 'In The Common Law, what revolutionary thesis was articulated by Oliver Wendell Holmes Jr.?',
		options: ['The life of the law has been experience, not logic', 'Law is sovereign command backed by force', 'An unjust law is no law at all', 'Law is the class will of the bourgeoisie'],
		correctIndex: 0,
		key: 'The life of the law has been experience, not logic',
		explanation: 'Justice Oliver Wendell Holmes Jr. opened The Common Law with his celebrated dictum: “The life of the law has not been logic: it has been experience.”',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 214–216) — Oliver Wendell Holmes Jr. (The Common Law, 1881); Philippine Jurisprudence on Oliver Wendell Holmes'
	},
	// =========================================================================
	// Part II: True or False (Items 68–88)
	// =========================================================================
	{
		id: 'philo:finals:68',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'In Plato’s dialogue Crito, Socrates accepted his friends’ plan to escape execution, reasoning that an unjust conviction invalidates the duty of obedience.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. Socrates refused to flee Athens, holding that having enjoyed the benefits of the Athenian polis under an early social contract, he was morally bound to obey its positive legal verdict even when unjust.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 140–142) — Socrates, Plato (Crito)'
	},
	{
		id: 'philo:finals:69',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'Legal positivism maintains that the legal validity of a statute is conceptually autonomous from its moral merits.',
		options: ['True', 'False'],
		correctIndex: 0,
		key: 'True',
		explanation: 'TRUE. This expresses the foundational Separability Thesis of legal positivism—that the existence and validity of positive law is an empirical social fact distinct from its moral goodness or badness.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 139–141) — John Austin, H.L.A. Hart, Jeremy Bentham; Estrada v. Escritor'
	},
	{
		id: 'philo:finals:70',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'exceptions',
		question: 'In modern penal jurisprudence, the requirement of mens rea demonstrates that criminal liability is completely divorced from moral blameworthiness.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. Mens rea (“a guilty mind”) demonstrates the exact opposite: criminal liability is intimately linked to moral blameworthiness and fault, representing the close convergence of law and morals.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 141–143) — Dean Romulo V. Borja; Revised Penal Code, Art. 3'
	},
	{
		id: 'philo:finals:71',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'exceptions',
		question: 'In Hans Kelsen’s Pure Theory of Law, the Grundnorm is an empirically enacted statute passed by a national legislature.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. The Grundnorm is not an empirical statute, but an epistemologically presupposed basic norm that serves as the non-positive hypothesis validating the constitutional order.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 154–156) — Hans Kelsen (Reine Rechtslehre); Republic v. Sandiganbayan'
	},
	{
		id: 'philo:finals:72',
		topic: 'FINALS — Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'requisites',
		question: 'H.L.A. Hart criticized John Austin’s imperative theory on the ground that it reduces law to the command of a gunman backed by threats.',
		options: ['True', 'False'],
		correctIndex: 0,
		key: 'True',
		explanation: 'TRUE. Hart argued that Austin’s command model captures “being obliged” under physical coercion, but misses “having an obligation” under accepted social and legal rules.',
		legalBasis: 'FINALS · Ch. 10 (Morals v. Force, Pascual, pp. 153–155) — H.L.A. Hart (The Concept of Law)'
	},
	{
		id: 'philo:finals:73',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'Classical Natural Law and early Legal Positivism both originated from atomistic individualistic premises regarding society.',
		options: ['True', 'False'],
		correctIndex: 0,
		key: 'True',
		explanation: 'TRUE. Both traditions shared individualistic premises: Natural Law conceived society as a contract between autonomous individuals, while Benthamite positivism based law on individual hedonic utility.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 157–159) — John Locke, Jeremy Bentham, John Austin'
	},
	{
		id: 'philo:finals:74',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'exceptions',
		question: 'In The Spirit of Laws, Montesquieu argued that statutory laws must be identical across all nations regardless of climate, geography, or culture.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. Montesquieu rejected universal uniformity, maintaining that laws must be relative and tailored to the climate, geography, commerce, manners, and culture of each country.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 160–162) — Baron de Montesquieu'
	},
	{
		id: 'philo:finals:75',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'Under Auguste Comte’s Law of Three Stages, the Metaphysical Stage replaces supernatural deities with abstract philosophical concepts such as natural rights.',
		options: ['True', 'False'],
		correctIndex: 0,
		key: 'True',
		explanation: 'TRUE. In Comte’s Metaphysical Stage, explanations shift from supernatural deities to abstract, personified philosophical entities such as “Nature,” “Reason,” and universal “Human Rights.”',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 164–166) — Auguste Comte'
	},
	{
		id: 'philo:finals:76',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'exceptions',
		question: 'Edmund Burke advocated that national constitutions should be demolished and rebuilt from scratch based on pure abstract reason.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. Burke vehemently opposed rebuilding constitutions from abstract rational formulas, insisting that stable institutions must evolve organically from ancestral wisdom and historical heritage.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 169–171) — Edmund Burke'
	},
	{
		id: 'philo:finals:77',
		topic: 'FINALS — Lesson 11 · Shift to the Social Sciences',
		topicId: 'l11',
		tag: 'memorization',
		question: 'G.W.F. Hegel conceptualized the national State as an ethical organism distinct from and superior to the individual citizens who compose it.',
		options: ['True', 'False'],
		correctIndex: 0,
		key: 'True',
		explanation: 'TRUE. Hegel posited that the State is an ethical whole (Sittlichkeit) superior to atomistic individuals, who realize authentic freedom and reason only through participation in the State.',
		legalBasis: 'FINALS · Ch. 11 (The Shift to the Social Sciences, Pascual, pp. 171–172) — Georg Wilhelm Friedrich Hegel'
	},
	{
		id: 'philo:finals:78',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'exceptions',
		question: 'Friedrich Karl von Savigny published his 1814 treatise to support Anton Thibaut’s proposal for an immediate unified German Civil Code.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. Savigny published his 1814 treatise specifically to oppose Anton Thibaut’s call for immediate codification, arguing that German legal science was not yet mature enough.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 175–177) — Friedrich Karl von Savigny, Anton Friedrich Justus Thibaut'
	},
	{
		id: 'philo:finals:79',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'The German Historical School of Jurisprudence maintains that customary law is the purest manifestation of the Volksgeist.',
		options: ['True', 'False'],
		correctIndex: 0,
		key: 'True',
		explanation: 'TRUE. Savigny held that custom represents the authentic, uncoerced popular consciousness of a people, far superior to artificial, top-down legislative decrees.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 179–181) — Friedrich Karl von Savigny; Civil Code, Art. 12'
	},
	{
		id: 'philo:finals:80',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'According to Savigny, as civilization advances, academic jurists serve as specialized custodians who articulate the popular consciousness.',
		options: ['True', 'False'],
		correctIndex: 0,
		key: 'True',
		explanation: 'TRUE. In complex societies, the legal division of labor tasks academic lawyers and jurists with discovering, refining, and scientifically formulating the Volksgeist.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 181–183) — Friedrich Karl von Savigny'
	},
	{
		id: 'philo:finals:81',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'exceptions',
		question: 'In Ancient Law, Sir Henry Sumner Maine concluded that progressive legal systems evolve historically from contract to status.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. Maine’s celebrated formula is the exact reverse: the movement of progressive societies has hitherto been a movement “from Status to Contract.”',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 188–190) — Sir Henry Sumner Maine; Civil Code, Art. 1700 (Social legislation qualification)'
	},
	{
		id: 'philo:finals:82',
		topic: 'FINALS — Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'exceptions',
		question: 'Dean Roscoe Pound praised the Historical School for its forward-looking optimism in proactively resolving modern urban crises.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. Pound criticized the Historical School for its “juristic pessimism” and fatalistic backward-looking orientation, which discouraged proactive statutory reform.',
		legalBasis: 'FINALS · Ch. 12 (The Historical School of Thought, Pascual, pp. 184–186) — Roscoe Pound'
	},
	{
		id: 'philo:finals:83',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'exceptions',
		question: 'Eugen Ehrlich asserted that the center of gravity of legal development lies in formal state legislation rather than in the spontaneous inner order of society.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. Ehrlich held the exact opposite: the center of gravity of legal development lies in society itself and the “living law,” not in state legislation or judicial decrees.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 196–198) — Eugen Ehrlich'
	},
	{
		id: 'philo:finals:84',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'In Marxist legal theory, the legal and judicial system belongs to the ideological superstructure conditioned by the material economic base.',
		options: ['True', 'False'],
		correctIndex: 0,
		key: 'True',
		explanation: 'TRUE. Under historical materialism, economic forces and relations of production form the base, while law, politics, and ideology constitute the superstructure.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 201–203) — Karl Marx, Friedrich Engels'
	},
	{
		id: 'philo:finals:85',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'Max Weber warned that relentless bureaucratic rationalization threatens to confine modern human beings in an “iron cage.”',
		options: ['True', 'False'],
		correctIndex: 0,
		key: 'True',
		explanation: 'TRUE. Weber famously warned that the rationalization, formal legalism, and bureaucracy of modern society risk trapping humanity in an “iron cage” (stahlhartes Gehäuse).',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 204–206) — Max Weber'
	},
	{
		id: 'philo:finals:86',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'exceptions',
		question: 'Émile Durkheim observed that as societies advance toward organic solidarity, their legal systems shift from restitutive to repressive penal law.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. Durkheim documented the reverse: progressive societies evolve from repressive (punitive/penal) sanctions to restitutive (compensatory/civil) law.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 206–208) — Émile Durkheim'
	},
	{
		id: 'philo:finals:87',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'exceptions',
		question: 'Rudolf von Jhering’s “jurisprudence of interests” views law as an organic growth that emerges effortlessly without conflict or societal struggle.',
		options: ['True', 'False'],
		correctIndex: 1,
		key: 'False',
		explanation: 'FALSE. Jhering rejected passive organic growth, asserting in The Struggle for Law that legal rights and institutional progress are achieved only through continuous human struggle.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 207–209) — Rudolf von Jhering (Der Kampf ums Recht)'
	},
	{
		id: 'philo:finals:88',
		topic: 'FINALS — Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'jurisprudence',
		question: 'Justice Oliver Wendell Holmes Jr. introduced the “bad man model” to demonstrate that law should be studied through practical prediction of judicial consequences.',
		options: ['True', 'False'],
		correctIndex: 0,
		key: 'True',
		explanation: 'TRUE. Holmes argued that the “bad man” cares only about what courts will actually do in fact and the material consequences that follow, which constitutes the empirical reality of law.',
		legalBasis: 'FINALS · Ch. 13 (The Sociological School of Thought, Pascual, pp. 219–224) — Oliver Wendell Holmes Jr. (The Path of the Law); Philippine Jurisprudence on Oliver Wendell Holmes'
	}
];

export const philo: LawModule = {
	id: ID,
	title: 'Legal Philosophy',
	subjectCategory: 'Legal Method',
	eyebrow: 'Lessons 1–13 · Thinkers, Schools & Philippine Jurisprudence',
	description:
		'Why we study legal philosophy, jural v. non-jural law, law v. no-law, natural law, legal positivism, morals v. force, the shift to the social sciences, the Historical and Sociological Schools, legal realism, and the Philippine Supreme Court cases that prove these theories are living doctrine.',
	legalScope:
		'Legal Philosophy Lessons 1–13; Natural Law, Positivism, Historical & Sociological Schools; Imbong, Sandiganbayan, Calalang, Caltex, Macalintal, Alzua, Villaflor, Rodriguez v. Tan, Gonzales, PBMEO, Floresca, ABS-CBN, Lantion, Akbayan, Soriano',
	topics: [
		{ id: 'finals', name: 'FINALS', eyebrow: 'FINALS · ALL LEGAL PHILOSOPHY ITEMS', desc: 'Complete Legal Philosophy MCQ drill (Lessons 1–13 & Philippine Jurisprudence) labeled for Finals and Mock Exam.' },
		{ id: 'l1', name: 'FINALS — Lesson 1: Why We Study Legal Philosophy', eyebrow: 'FINALS · LESSON 1', desc: 'Borja, Pascual, Fr. Aquino, Holmes, Northrop' },
		{ id: 'l2', name: 'FINALS — Lesson 2: An Attempt at a Definition', eyebrow: 'FINALS · LESSON 2', desc: 'Thales, Nietzsche’s three reasons, 7 branches, Dworkin' },
		{ id: 'l3', name: 'FINALS — Lesson 3: This Thing Called Law', eyebrow: 'FINALS · LESSON 3', desc: 'Descriptive v. prescriptive, positive law, statutory classes, ratio v. dicta' },
		{ id: 'l4', name: 'FINALS — Lesson 4: The Many-Splendored Thing', eyebrow: 'FINALS · LESSON 4', desc: 'Jural v. non-jural law, 4 perspectives graph, Dennis Lloyd (R-I-F)' },
		{ id: 'l5', name: 'FINALS — Lesson 5: Law versus No-Law', eyebrow: 'FINALS · LESSON 5', desc: 'Human nature, necessity of law, anarchists, Philippine anti-anarchy law' },
		{ id: 'l6', name: 'FINALS — Lesson 6: A History of Natural Law', eyebrow: 'FINALS · LESSON 6', desc: 'Sinai, Antigone, Aristotle, Stoics, Cicero, Aquinas, Coke, Locke, UDHR' },
		{ id: 'l7', name: 'FINALS — Lesson 7: Natural Law in Philippine Law', eyebrow: 'FINALS · LESSON 7', desc: 'Civil Code & Constitution, Imbong v. Ochoa, Sandiganbayan, Calalang' },
		{ id: 'l8', name: 'FINALS — Lesson 8: Legal Positivism', eyebrow: 'FINALS · LESSON 8', desc: 'Socrates, Bentham, Hume, Hobbes, Austin’s 3 tenets, Kelsen’s Grundnorm' },
		{ id: 'l9', name: 'FINALS — Lesson 9: Legal Positivism in Philippine Law', eyebrow: 'FINALS · LESSON 9', desc: 'Secular morality, State immunity (Caltex, Santiago), verba legis (Macalintal)' },
		{ id: 'l10', name: 'FINALS — Lesson 10: Morals v. Force', eyebrow: 'FINALS · LESSON 10', desc: 'Natural law, positivism, Austin, Hart, Kelsen, Weber, legitimacy' },
		{ id: 'l11', name: 'FINALS — Lesson 11: Shift to Social Sciences', eyebrow: 'FINALS · LESSON 11', desc: 'Montesquieu, Comte, Rousseau, Burke, Hegel' },
		{ id: 'l12', name: 'FINALS — Lesson 12: Historical School', eyebrow: 'FINALS · LESSON 12', desc: 'Hugo, Savigny’s volksgeist, Maine’s status to contract' },
		{ id: 'l13', name: 'FINALS — Lesson 13: Sociological School', eyebrow: 'FINALS · LESSON 13', desc: 'Marx, Weber, Durkheim, Ehrlich, Jhering, Pound, Holmes' },
		{ id: 'l14', name: 'FINALS — Philippine Jurisprudence', eyebrow: 'FINALS · HANDOUTS', desc: 'Custom (Arts. 11–12), interstitial legislation, clear & present danger, balancing' }
	],
	studyGuideIntro:
		'Lessons 1 to 13 in order (each with its thesis, thinkers, enumerations, and definitions), followed by the four schools side by side, five stage theories, differentiate pairings, critiques, and the Philippine jurisprudence handouts.',
	legend: [
		{ color: 'yellow', label: 'Memorize — key phrases & five core sentences' },
		{ color: 'green', label: 'Common ground & what a theory gets right' },
		{ color: 'blue', label: 'Key differences, thinker terms & deeper push' },
		{ color: 'orange', label: 'Exam traps, handout critiques & careful notes' },
		{ color: 'red', label: 'Jurisprudential tensions' },
		{ color: 'purple', label: 'Lesson theses & philosophical doctrines' }
	],
	studyGuideHtml: [...GROUPS.map(renderLesson), renderCompareAndCritique()].join('\n'),
	mcqs: philoMcqs,
	essays: philoEssays,
	cases: philoCases
};

export default philo;
