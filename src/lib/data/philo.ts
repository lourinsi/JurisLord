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
		`<div class="rv-box rv-orange"><span class="rv-label">Handle with care</span><ul>${CAREFUL.map((c) => `<li>${fmt(c)}</li>`).join('')}</ul></div>`
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

const philoEssays: AlacEssay[] = ESSAYS.map((e, i) => {
	const k = KIND_OF[e.type];
	return {
		id: `${ID}:${e.id}`,
		title: `${k.name} — Question ${i + 1}`,
		topic: `${k.name} Questions`,
		factPattern: fmt(e.q),
		question: `${k.tests} (First line: ${k.first})`,
		modelAnswer: {
			answer: e.a[0]?.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1') ?? '',
			legalBasis: `Formula: ${k.formula.join(' → ')}`,
			application: `Avoid trap: ${k.trap}`,
			conclusion: e.a.slice(1).join(' ').replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1') || 'State your clear position and one supporting reason.'
		}
	};
});

const philoMcqs: McqQuestion[] = [
	{
		id: 'philo:l10:1',
		topic: 'Lesson 10 · Morals v. Force',
		topicId: 'l10',
		tag: 'memorization',
		question: 'Which thinker argued that without justice, a government is no more than “a band of robbers”?',
		options: ['St. Augustine', 'John Austin', 'Thomas Hobbes', 'Hans Kelsen'],
		correctIndex: 0,
		explanation: 'St. Augustine held that force is the antithesis of law: without justice, a government is no more than a band of robbers.',
		legalBasis: 'Lesson 10 · Morals v. Force'
	},
	{
		id: 'philo:l10:2',
		topic: 'Lesson 10 · Morals v. Force',
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
		explanation: 'Hart’s three objections to Austin are: (1) no single sovereign, (2) power-conferring rules, and (3) the gunman problem (threats oblige but do not create obligation). The volksgeist belongs to Savigny and the Historical School.',
		legalBasis: 'Lesson 10 · Hart v. Austin'
	},
	{
		id: 'philo:l10:3',
		topic: 'Lesson 10 · Morals v. Force',
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
		explanation: 'Weber’s three types of authority are charismatic, traditional, and rational-legal (C-T-R). Theological, metaphysical, and positive are Comte’s three stages.',
		legalBasis: 'Lessons 10 and 13 · Max Weber'
	},
	{
		id: 'philo:l11:1',
		topic: 'Lesson 11 · Shift to the Social Sciences',
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
		explanation: 'Comte’s law of three stages moves in order: (1) Theological (explained by God), (2) Metaphysical (explained by abstract universal rights), and (3) Positive/scientific (explained by observed facts).',
		legalBasis: 'Lesson 11 · Auguste Comte'
	},
	{
		id: 'philo:l12:1',
		topic: 'Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'For Friedrich Carl von Savigny and the Historical School, what is the true source of law?',
		options: [
			'The volksgeist (the spirit or common consciousness of a people), shown in custom',
			'The sovereign’s command backed by sanction',
			'Social engineering by courts weighing competing interests',
			'Rational codification designed by enlightened legislators'
		],
		correctIndex: 0,
		explanation: 'Savigny held that law grows out of the volksgeist (spirit of the people) the way language does: law is found, not made, and codification by abstract reason is distrusted.',
		legalBasis: 'Lesson 12 · Historical School'
	},
	{
		id: 'philo:l12:2',
		topic: 'Lesson 12 · Historical School',
		topicId: 'l12',
		tag: 'memorization',
		question: 'Who formulated the famous thesis that the movement of progressive societies has hitherto been a movement “from Status to Contract”?',
		options: ['Sir Henry Maine', 'Edmund Burke', 'Eugen Ehrlich', 'Rudolf von Jhering'],
		correctIndex: 0,
		explanation: 'Sir Henry Maine founded the English Historical School with Ancient Law (1861), arguing that legal relations evolve from status (fixed by family/birth) to contract (chosen by individual agreement).',
		legalBasis: 'Lesson 12 · Henry Maine'
	},
	{
		id: 'philo:l13:1',
		topic: 'Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'Which thinker coined the term “living law” and wrote that the center of gravity of legal development lies “not in legislation, nor in juristic science, nor in judicial decision, but in society itself”?',
		options: ['Eugen Ehrlich', 'Roscoe Pound', 'Émile Durkheim', 'Karl Marx'],
		correctIndex: 0,
		explanation: 'Eugen Ehrlich distinguished “living law” (the rules people actually follow in their social associations) from positive law enacted by the State.',
		legalBasis: 'Lesson 13 · Eugen Ehrlich'
	},
	{
		id: 'philo:l13:2',
		topic: 'Lesson 13 · Sociological School',
		topicId: 'l13',
		tag: 'memorization',
		question: 'In Émile Durkheim’s sociology of law, how does law change as society moves from mechanical solidarity to organic solidarity?',
		options: [
			'From repressive (penal) law to restitutive (civil/cooperative) law',
			'From restitutive law to repressive law',
			'From contract back to status',
			'From positive law to withering away of the state'
		],
		correctIndex: 0,
		explanation: 'Durkheim showed that simple societies with mechanical solidarity rely on repressive (penal) law, whereas complex interdependent societies with organic solidarity rely on restitutive law that restores relations.',
		legalBasis: 'Lesson 13 · Émile Durkheim'
	},
	{
		id: 'philo:l14:1',
		topic: 'Philippine Jurisprudence',
		topicId: 'l14',
		tag: 'jurisprudence',
		question: 'How do Floresca v. Philex Mining and Rodriguez v. Tan reconcile on whether judges may legislate?',
		options: [
			'Judges may legislate only “interstitially” to fill gaps inside an existing statute (Floresca), but may not import a whole common-law doctrine with no statutory basis (Rodriguez v. Tan).',
			'Floresca completely overruled Rodriguez v. Tan and allows courts to enact new statutes.',
			'Rodriguez v. Tan applies only to criminal cases, while Floresca applies to all civil cases.',
			'Both cases hold that judges may never go beyond the literal text of a statute.'
		],
		correctIndex: 0,
		explanation: 'Quoting Holmes, Floresca holds that judges “do and must legislate, but they can do so only interstitially” (filling gaps from molar to molecular motions), whereas Rodriguez v. Tan bars adopting a whole doctrine with no statutory anchor.',
		legalBasis: 'Floresca v. Philex Mining; Rodriguez v. Tan'
	},
	{
		id: 'philo:l14:2',
		topic: 'Philippine Jurisprudence',
		topicId: 'l14',
		tag: 'jurisprudence',
		question: 'How does the approach in PBMEO v. Philippine Blooming Mills differ from the balancing-of-interests test in Secretary of Justice v. Lantion and Soriano v. Laguardia?',
		options: [
			'Balancing weighs competing interests case by case on a level scale, whereas Philippine Blooming Mills establishes a hierarchy giving human rights primacy over property rights from the start.',
			'Philippine Blooming Mills holds that property rights always prevail over freedom of assembly under a CBA.',
			'Soriano v. Laguardia rejected balancing of interests in favor of absolute free speech.',
			'Both tests apply the dangerous tendency doctrine.'
		],
		correctIndex: 0,
		explanation: 'In PBMEO v. Philippine Blooming Mills, the Court ranked human rights above property rights in advance (preferred freedoms require clear and present danger, whereas property may be regulated on a rational basis), unlike open-ended balancing.',
		legalBasis: 'PBMEO v. Philippine Blooming Mills; Lantion; Soriano'
	}
];

export const philo: LawModule = {
	id: ID,
	title: 'Legal Philosophy',
	subjectCategory: 'Legal Method',
	eyebrow: 'Lessons 10–13 · Thinkers, Schools & Philippine Jurisprudence',
	description:
		'Morals v. force, the shift to the social sciences, the Historical School, the Sociological School, legal realism, and the Philippine Supreme Court cases that prove these theories are living doctrine — with thinkers, comparisons, critiques, definitions, enumerations, and four-type essay practice.',
	legalScope:
		'Legal Philosophy Lessons 10–13; Natural Law, Positivism, Historical & Sociological Schools; Alzua, Villaflor, Rodriguez v. Tan, Gonzales, PBMEO, Floresca, ABS-CBN, Lantion, Akbayan, Soriano',
	topics: [
		{ id: 'l10', name: 'Lesson 10 — Morals v. Force', eyebrow: 'LESSON 10', desc: 'Natural law, positivism, Austin, Hart, Kelsen, Weber, legitimacy' },
		{ id: 'l11', name: 'Lesson 11 — Shift to Social Sciences', eyebrow: 'LESSON 11', desc: 'Montesquieu, Comte, Rousseau, Burke, Hegel' },
		{ id: 'l12', name: 'Lesson 12 — Historical School', eyebrow: 'LESSON 12', desc: 'Hugo, Savigny’s volksgeist, Maine’s status to contract' },
		{ id: 'l13', name: 'Lesson 13 — Sociological School', eyebrow: 'LESSON 13', desc: 'Marx, Weber, Durkheim, Ehrlich, Jhering, Pound, Holmes' },
		{ id: 'l14', name: 'Philippine Jurisprudence', eyebrow: 'HANDOUTS', desc: 'Custom (Arts. 11–12), interstitial legislation, clear & present danger, balancing' }
	],
	studyGuideIntro:
		'Lessons 10 to 13 in order (each with its thesis, thinkers, enumerations, and definitions), followed by the four schools side by side, five stage theories, differentiate pairings, critiques, and the Philippine jurisprudence handouts.',
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
