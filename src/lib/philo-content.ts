/**
 * Legal Philo content, taken from the complete course handouts (Lessons 1 to 13 and the four Philippine
 * jurisprudence handouts). Groups: 1–13 are the lessons, 14 is Philippine jurisprudence.
 * Strings may use **bold**; essay and thinker strings may also use *italics* (see `fmt`).
 */
import type { Digest } from './digest';
import type { Group, KitEnum, KitTerm, TopQuestion } from './kit';

export const GROUPS: Group[] = [
	{ id: 1, short: 'L1', title: 'Lesson 1 · Why We Study Legal Philosophy' },
	{ id: 2, short: 'L2', title: 'Lesson 2 · Legal Philosophy: An Attempt at a Definition' },
	{ id: 3, short: 'L3', title: 'Lesson 3 · This Thing Called Law' },
	{ id: 4, short: 'L4', title: 'Lesson 4 · The Many-Splendored Thing' },
	{ id: 5, short: 'L5', title: 'Lesson 5 · Law versus No-Law' },
	{ id: 6, short: 'L6', title: 'Lesson 6 · A History of Natural Law' },
	{ id: 7, short: 'L7', title: 'Lesson 7 · Natural Law in Philippine Law & Jurisprudence' },
	{ id: 8, short: 'L8', title: 'Lesson 8 · Legal Positivism' },
	{ id: 9, short: 'L9', title: 'Lesson 9 · Legal Positivism in Philippine Law & Jurisprudence' },
	{ id: 10, short: 'L10', title: 'Lesson 10 · Morals v. Force' },
	{ id: 11, short: 'L11', title: 'Lesson 11 · The Shift to the Social Sciences' },
	{ id: 12, short: 'L12', title: 'Lesson 12 · Historical School' },
	{ id: 13, short: 'L13', title: 'Lesson 13 · Sociological School' },
	{ id: 14, short: 'PH', title: 'Philippine jurisprudence' }
];

// ---------- enumerations ----------

export const ENUMS: KitEnum[] = [
	{
		id: '1.1',
		group: 1,
		kind: 'list',
		t: 'Four reasons Legal Philosophy is essential to legal education',
		src: 'Lesson 1',
		mem: 'Novel · Construct · Consciousness · Premises',
		it: [
			['Novel questions & lacunae', '**Romulo Borja**: statutory law is never exhaustively interpreted; when precedent runs out, you must theorize and participate in legal development.'],
			['Rules reflect a working theory', '**Crisolito Pascual**: all legal rules are applications of a jurisprudential construct, acting as stabilizing factors or principles of change; without philosophy, law is a mere vocation, not a profession.'],
			['Brings assumptions to consciousness', '**Fr. Ranhilio Aquino**: mechanical judging is less fair; philosophy brings unarticulated assumptions about justice to consciousness for critical appraisal.'],
			['Makes implicit premises clear', '**Stuart Northrop**: the only difference between a lawyer “without a philosophy” and one with a philosophy is that the latter knows what his philosophy is and can justify his premises.']
		],
		trap: 'Borja disagrees with Fr. Aquino on one point: Legal Philosophy is essential to **legal education** (for all students and lawyers), not merely judicial education.'
	},
	{
		id: '2.1',
		group: 2,
		kind: 'req',
		t: 'Nietzsche’s three reasons Thales is the first philosopher',
		src: 'Lesson 2',
		mem: 'Origin · No Fable · Everything Is One',
		it: [
			['It enunciates something about the origin of things', 'Inquires into the ultimate nature or essence of things (still in the company of religion and superstition).'],
			['It does so without figure and fable', 'Matter-of-factual inquiry without poetry, myth, or fantasy narratives (makes him a natural scientist).'],
			['It contains the metaphysical thought: “Everything is one”', 'Reduces everything into one single unifying principle (makes him the **first Greek philosopher**).']
		],
		trap: 'Only the **third** reason (“Everything is one”) makes Thales the first philosopher rather than merely a natural scientist.'
	},
	{
		id: '2.2',
		group: 2,
		kind: 'cls',
		t: 'Seven traditional branches of Philosophy',
		src: 'Lesson 2',
		mem: 'M-A-L-A-E-E-P: Metaphysics, Axiology, Logic, Aesthetics, Epistemology, Ethics, Political',
		it: [
			['Metaphysics', 'First principles of things: being, knowing, substance, cause, identity, time and space.'],
			['Axiology', 'The nature of value and valuation, and of the kinds of things that are valuable.'],
			['Logic', 'The nature of correct thinking.'],
			['Aesthetics', 'The ultimate nature of beauty, especially in art.'],
			['Epistemology', 'Knowledge: its methods, validity and scope; what distinguishes justified belief from opinion.'],
			['Ethics', 'What constitutes correct or moral conduct.'],
			['Political philosophy', 'Fundamental questions about the state, government, politics, liberty, justice, property, rights, and **law**.']
		],
		trap: 'Law is **not** a separate traditional branch; it sits under Political Philosophy and is “**parasitic**” (Dworkin) on ethics, political philosophy, language, and metaphysics.'
	},
	{
		id: '3.1',
		group: 3,
		kind: 'cls',
		t: 'Types of prescriptive law',
		src: 'Lesson 3',
		mem: 'Natural · Moral · Justice · Reason · Custom · Positive',
		it: [
			['Natural law (jus naturalis / lex naturalis)', 'Universal and immutable rules inherent in human nature and discoverable through reason.'],
			['Moral law', 'Personal and societal notions of good and bad; indistinguishable from natural law only when universal.'],
			['Justice', 'Fairness, equality, impartiality, or giving to each person what is his due.'],
			['Law of reason', 'The human capacity for applying logical processes to discover truth.'],
			['Customary law', 'Rules growing out of habitual community practice.'],
			['Positive law (jus positum)', 'Man-made law formally enacted by a proper authority, habitually obeyed, backed by state coercion, and characterized by certainty.']
		],
		trap: 'Descriptive laws describe how things **do** behave (gravity, supply and demand); prescriptive laws set standards for how humans **should** behave.'
	},
	{
		id: '3.2',
		group: 3,
		kind: 'req',
		t: 'Four characteristics of positive law',
		src: 'Lesson 3',
		mem: 'Prescribes · Obligatory · Habitually Obeyed · Formally Enacted',
		it: [
			['Prescribes human conduct', 'Belongs to prescriptive law, not descriptive law.'],
			['Obligatory rule', 'Treated as having mandatory force and backed by an enforcement mechanism, not mere suggestion.'],
			['Habitually obeyed', 'Citizens and persons subject to it render habitual obedience.'],
			['Product of formal enactment', 'Promulgated by an institution constitutionally authorized to make law, giving it **certainty**.']
		],
		trap: '“Positive” comes from **to posit** (to establish or put forward), **not** positive acts as opposed to negative omissions.'
	},
	{
		id: '3.3',
		group: 3,
		kind: 'cls',
		t: 'Five classifications of statutory law',
		src: 'Lesson 3',
		mem: 'Relation · Subjects · Nature · Extent · Substantive/Procedural',
		it: [
			['As to relation governed: Public v. Private law', 'State-citizen relations v. relations between individuals.'],
			['As to subjects governed: National (domestic/ordinance) v. International law (jus gentium)', 'Within a state v. between states.'],
			['As to nature of statute: Constitutions v. Ordinary statutes', 'Fundamental law (government, liberty, sovereignty) v. laws enacted by Congress (Civil Code, Art. 7 hierarchy).'],
			['As to extent of subject matter: Codes v. Special laws', 'Scientifically and logically arranged system on a broad subject v. stand-alone statute on a limited subject (contrast a mere **compilation**).'],
			['As to function: Substantive v. Procedural (remedial) law', 'Creates rights and obligations v. establishes the process to enforce them.']
		]
	},
	{
		id: '3.4',
		group: 3,
		kind: 'cls',
		t: 'Parts and opinions in a Supreme Court decision',
		src: 'Lesson 3; Civil Code, Art. 8',
		mem: 'Fallo · Ratio · Judicial Dictum · Obiter Dictum',
		it: [
			['Fallo (dispositive portion)', 'The decision proper; binding on the **parties** to the case.'],
			['Ratio decidendi', 'The reason behind the decision; binding on the parties **and** controlling on future analogous cases under *stare decisis*. Ratio is law.'],
			['Judicial dictum', 'An aside not essential to the disposition of the main issue, but addressing an issue **raised by the parties**.'],
			['Obiter dictum', 'An aside disposing of a collateral issue **not raised by the parties**. Dicta are mere opinions.']
		],
		trap: 'Lower court decisions that become final are “the law between the parties” only; only **Supreme Court** decisions form part of positive case law under Art. 8.'
	},
	{
		id: '4.1',
		group: 4,
		kind: 'cls',
		t: 'Four basic perspectives on jural v. non-jural law (and their graph positions)',
		src: 'Lesson 4',
		mem: 'Top (Teleological) · Bottom (Historical) · Same Level (Sociological) · Insulated (Positivist)',
		it: [
			['Teleological (Natural Law / Philosophical) — Top of the graph', 'Non-jural norms (morals, justice, reason, divine law) stand **above** positive law as the touchstone of its validity.'],
			['Historical — Bottom of the graph', 'Positive law grows upward out of the soil of the **volksgeist** (shared culture, traditions, history); rejects a higher law.'],
			['Sociological — Same level as positive law', 'Law is the handmaiden of society; social sciences are **partners** with positive law in ordering society (includes Functional, Legal Realist, Policy Science).'],
			['Legal Positivist — Insulated (“neither here nor there”)', 'Positive law is completely **autonomous** and insulated from all non-jural norms; separation of law and morals.']
		]
	},
	{
		id: '4.2',
		group: 4,
		kind: 'cls',
		t: 'Sir Dennis Lloyd’s three contrasts between the schools',
		src: 'Lesson 4; Dennis Lloyd, The Idea of Law',
		mem: 'R-I-F v. N-C-N: Rationalist, Individualist, Formal',
		it: [
			['Rationalist v. Non-rationalist', 'Natural Law and Positivism rest on rational appreciation of the social contract; Historical and Sociological recognize irrational elements in human social behavior.'],
			['Individualist v. Collectivist', 'Natural Law and Positivism treat society as a collection of individuals; Historical and Sociological treat society as a living organism greater than the sum of its parts.'],
			['Formal v. Non-formal', 'Natural Law and Positivism formulate logical suppositions rather than actual history; Historical and Sociological root their ideas in historical and empirical facts.']
		],
		trap: 'Both Natural Law and Legal Positivism share the **same** R-I-F traits because both draw on the social contract; they diverge only on whether rights are wholly surrendered (**Hobbes**) or retained (**Locke**).'
	},
	{
		id: '5.1',
		group: 5,
		kind: 'cls',
		t: 'Thinkers on human nature and the necessity of law',
		src: 'Lesson 5',
		mem: 'Evil (Curb) · Fallen (Restore) · Social Animal (Beneficent) · Good (Abolish)',
		it: [
			['Man is intrinsically evil → law is a necessary restraint', '**Chinese Legists** (3rd c. BC), **Indian Shastra writers**, **Machiavelli** (*The Prince*), **Jean Bodin**, **Thomas Hobbes** (*Leviathan*), **David Hume**.'],
			['Man is fallen from a Golden Age → law curbs sin to restore him', '**Ovid** (*Metamorphoses*), **Seneca** (primitive innocence ruined by avarice), **St. Augustine** (law curbs man’s sinful nature).'],
			['Man is a social animal → law is a beneficent force for welfare', '**Aristotle** and **St. Thomas Aquinas** (mellowed Augustine’s view: law is not a necessary evil but a natural foundation for human flourishing).'],
			['Man is intrinsically good → law and state are evils or unnecessary', '**Plato** (*The Republic*’s philosopher-kings, though *The Laws* turns totalitarian), **William Godwin**, **Bakunin**, **Kropotkin**, **Tolstoy**, **Karl Marx** (in the final communist utopia).']
		],
		trap: '**Adam Smith** (*laissez-faire*), **Grafton Elliot Smith** (man is both good and bad), and **Sir Herbert Read** (decentralization to local courts) are **not** true anarchists: they retain a minimum set of laws.'
	},
	{
		id: '5.2',
		group: 5,
		kind: 'list',
		t: 'Philippine legal provisions and rulings rejecting anarchism',
		src: 'Lesson 5',
		mem: 'Art. II Sec. 1 · RA 2927 · Djumantan · RPC / PD 970',
		it: [
			['1987 Constitution, Art. II, Sec. 1', 'The Philippines is a **democratic and republican** state: ultimate power is in the people, but affairs are governed by the rule of law through government.'],
			['Republic Act No. 2927 (Naturalization Law)', 'Disqualifies from Filipino citizenship any person “**opposed to organized government**” or teaching doctrines opposing all organized government.'],
			['Djumantan v. Domingo (1995)', 'Immigration laws allow exclusion or deportation of aliens who advocate the overthrow of government or oppose organized government.'],
			['Revised Penal Code as amended by PD 970', 'Mere belief is not a crime, but acts of **inciting to rebellion** or publishing materials that incite rebellion are penalized.']
		]
	},
	{
		id: '6.1',
		group: 6,
		kind: 'cls',
		order: true,
		t: 'Historical evolution of Natural Law: from Divine Law to Human Rights',
		src: 'Lesson 6',
		mem: 'Sinai → Antigone → Aristotle → Stoics/Cicero → Paul/Augustine/Aquinas → Coke → Locke/Jefferson → UDHR',
		it: [
			['Hebrew divine law', 'Ten Commandments on Mt. Sinai and the **Torah**; prophets challenged royal edicts against God’s higher law.'],
			['Greek tragedy', '**Sophocles’ *Antigone*** defied King Creon’s burial ban by appealing to the eternal, unwritten laws of the gods.'],
			['Classical Greek philosophy', '**Aristotle** (“father of natural law”) secularized *Antigone* in *Rhetoric*, contrasting local conventional law with universal, immutable natural law.'],
			['Stoicism and Roman law', 'Cosmopolitan equality and the pantheistic “**divine spark**” of reason; **Cicero** (*De Legibus*, *De Re Publica*, *salus populi est suprema lex*).'],
			['Christian and Scholastic synthesis', '**St. Paul** (“law written in men’s hearts”); **St. Augustine** (prelapsarian natural law; *lex injusta non est lex*); **St. Thomas Aquinas** (rational creature’s participation in eternal law; do good and avoid evil).'],
			['English common law', '**Sir Edward Coke** in *Calvin’s Case* (1608): law is “perfect reason”; natural law is part of English law, immutable, and prior to municipal law.'],
			['Social contract and natural rights', '**John Locke** (*Two Treatises*: partial surrender; life, liberty, property; *Imago Dei*; consent of the governed) → **Thomas Jefferson** (Declaration of Independence) & US Bill of Rights.'],
			['Modern international human rights', '**Universal Declaration of Human Rights (UDHR)** adopted Dec. 10, 1948.']
		]
	},
	{
		id: '6.2',
		group: 6,
		kind: 'cls',
		t: 'Aquinas’s hierarchy of laws and precepts of natural law',
		src: 'Lesson 6',
		mem: 'Eternal · Natural · Divine · Human (General v. Secondary precepts)',
		it: [
			['Eternal law', 'God’s rational governance of the whole universe, which human reason cannot fully comprehend on its own.'],
			['Natural law', 'The rational creature’s participation in the eternal law; supreme principle: **good is to be done and evil avoided**.'],
			['Divine law', 'Revealed law in Scripture that supplements human reason where it cannot grasp the eternal law.'],
			['Human (positive) law', 'Must conform to natural law; an unjust law is a “**perversion of law**” retaining only the appearance of law.'],
			['General v. Secondary precepts', 'Most general precepts cannot be blotted out from men’s hearts in the abstract (only hindered in a particular act by passion); **secondary precepts** can be blotted out by evil persuasions or vicious customs.']
		]
	},
	{
		id: '7.1',
		group: 7,
		kind: 'doc',
		t: 'Natural law provisions in the Civil Code and the 1987 Constitution',
		src: 'Lesson 7',
		mem: 'Arts. 6, 9, 10, 19–21 · Preamble · Art. II Secs. 2, 5, 9–11 · Art. III Sec. 1',
		it: [
			['Civil Code, Art. 6', 'Waiver of rights is void if contrary to law, public order, public policy, **morals**, or good customs.'],
			['Civil Code, Arts. 9 and 10', 'Judges cannot decline to render judgment due to **lacunae** (silence, obscurity, insufficiency — Art. 9) and must presume the legislature intended **right and justice** to prevail (Art. 10).'],
			['Civil Code, Arts. 19, 20 and 21 (Human Relations)', 'Act with justice, give everyone his due, and observe honesty and good faith (Art. 19); indemnify damage caused contrary to law (Art. 20) or **morals, good customs, or public policy** (Art. 21).'],
			['1987 Constitution, Preamble and Art. II', 'Imploring Almighty God to build a **just and humane society** under a regime of truth, justice, freedom, love, equality, and peace; social justice (Sec. 10) and human dignity/rights (Sec. 11).'],
			['1987 Constitution, Art. III, Sec. 1 (Due Process)', '**Procedural due process** means fairness in proceedings; **substantive due process** means justice and reason.']
		],
		trap: 'Under *Imbong v. Ochoa*, natural law **cannot** invalidate a statute on its own unless transformed into written/constitutional law; it applies directly only sparingly in **lacunae** (*Republic v. Sandiganbayan*).'
	},
	{
		id: '8.1',
		group: 8,
		kind: 'doc',
		t: 'Austin’s three core tenets of Legal Positivism',
		src: 'Lesson 8',
		mem: 'Separation · Command of Sovereign · Analytical Jurisprudence',
		it: [
			['Separation of law and morals', '“The existence of law is one thing; its merit or demerit is another.” Positive law is autonomous from non-jural norms.'],
			['Imperative or command theory of law', 'Law is a general command issued by a **sovereign** (habitually obeyed by the bulk of the population and obeying no one else) backed by a **sanction** (threat of pain).'],
			['Analytical jurisprudence', 'Legal study is limited to logical analysis of the distinctive vocabulary and structure of existing positive law (*what law is*, not *what it ought to be*).']
		],
		trap: 'Later positivists (Kelsen, Hart) keep the **separation thesis** but reject the command theory.'
	},
	{
		id: '8.2',
		group: 8,
		kind: 'list',
		t: 'Five roads leading to Legal Positivism',
		src: 'Lesson 8',
		mem: 'Socrates · Epicureans/Bentham · Comte · Hume · Hobbes',
		it: [
			['Socrates in Plato’s Crito', 'Refused to escape an unjust death sentence; an unjust law still carries a moral duty of obedience under an early social contract.'],
			['Epicureanism and Bentham’s Utilitarianism', 'Pain-avoidance and pleasure-seeking measured in **utils** (“calculus of pleasure and pain”); Bentham mocked natural rights as “**nonsense on stilts**.”'],
			['Auguste Comte’s scientific positivism', 'Law of three stages moving from theological and metaphysical speculation to positive empirical science.'],
			['David Hume’s empiricism and is/ought injunction', 'One cannot logically derive a prescriptive “**ought**” conclusion from purely descriptive “**is**” premises.'],
			['Thomas Hobbes’s Leviathan', 'Total surrender of rights to the sovereign makes the sovereign’s commands just by definition, planting the seed of the command theory.']
		]
	},
	{
		id: '8.3',
		group: 8,
		kind: 'doc',
		t: 'Kelsen’s three theoretical functions of the Grundnorm and two system postulates',
		src: 'Lesson 8',
		mem: 'Validity · Normativity · Unity (+ Efficacy)',
		it: [
			['Non-reductive explanation of legal validity', 'Explains why a rule is valid law without reducing law to brute force or morality.'],
			['Non-reductive explanation of the normativity of law', 'Respects **Hume’s is/ought rule**: only a presupposed “ought” (the *Grundnorm*) can confer normative meaning on the “is” of legislative acts.'],
			['Explanation of the systematic unity of legal norms', 'Two postulates: (1) every two norms deriving validity from one *Grundnorm* belong to the same system, and (2) all norms of a system derive from one *Grundnorm* (criticized by **Joseph Raz** via orderly secession).']
		],
		trap: '**Efficacy** (actual practice by the population) is **not** required for a newly enacted individual norm to be valid, **but** the legal order as a whole—and the *Grundnorm* itself—must be efficacious.'
	},
	{
		id: '9.1',
		group: 9,
		kind: 'doc',
		t: 'Four manifestations of Legal Positivism in Philippine law and jurisprudence',
		src: 'Lesson 9',
		mem: 'Qualified Code · Secular Morality · State Immunity · Verba Legis',
		it: [
			['Qualified legal positivism in the Civil Code', 'Obligations require a recognized legal source, though the exercise of rights is bounded by morals, good customs, public order, and public policy.'],
			['Secular morality under Art. II, Sec. 6 (Separation of Church and State)', 'When Philippine law refers to “morality,” the standard is **secular public interest**, never the religious doctrine of a particular church.'],
			['Doctrine of non-suability of the State', '*Caltex v. Customs Arrastre* and *Santiago v. Republic* explicitly adopt the **Austinian/Holmesian positivist** view: there can be no legal right against the authority that makes the law on which the right depends.'],
			['Dura lex sed lex and verba legis (Plain Meaning Rule)', '*Macalintal v. Senate* (2025): when a statute is clear and unambiguous, courts must apply its literal text without construction, out of deference to Congress and separation of powers.']
		]
	},
	{
		id: '10.1',
		group: 10,
		kind: 'cls',
		t: 'Three attitudes to the relationship of law and morals',
		src: 'Lesson 10',
		mem: 'Same · Higher · Apart',
		it: [
			['Law is identical with morals', 'Hebrew and Calvinist theocracy; **Hobbes** (morality is obeying the sovereign); **Hegel** (no higher right than to obey the state).'],
			['Separate realms, moral law higher', 'Either the unjust law is nullified, or the citizen obeys and the matter is left between God and the ruler.'],
			['Legal positivism', 'Each is autonomous; neither settles validity outside its own sphere.']
		],
		trap: 'Hobbes and Hegel are on the “identical” side, not the positivist side.'
	},
	{
		id: '10.2',
		group: 10,
		kind: 'list',
		t: 'Why law and morals converge most in criminal law',
		src: 'Lesson 10',
		mem: 'Guilt · Mind · Measure',
		it: [
			['Guilt is tied to moral responsibility', ''],
			['Crimes require mens rea', 'A guilty mind.'],
			['Punishment is scaled to moral depravity', '']
		]
	},
	{
		id: '10.3',
		group: 10,
		kind: 'cls',
		t: 'Views on the relationship of force and law',
		src: 'Lesson 10',
		mem: 'Anti · Basis · Incidental · Irony',
		it: [
			['Force is the antithesis of law', '**St. Augustine**: without justice, a government is “a band of robbers.”'],
			['Force is the basis of law', '**Austin**: the command of a sovereign, habitually obeyed, backed by sanction.'],
			['Force is incidental', 'People consent, so force is rarely needed.'],
			['International law is the irony', 'It binds with no sovereign and no enforcer.']
		]
	},
	{
		id: '10.4',
		group: 10,
		kind: 'cls',
		t: 'Weber’s three types of authority',
		src: 'Lessons 10 and 13',
		mem: 'C-T-R: Charisma, Tradition, Rules',
		it: [
			['Charismatic', 'Obedience to the personal gifts of a leader.'],
			['Traditional', 'Obedience because it has always been so.'],
			['Rational-legal', 'Obedience to rules enacted by proper procedure. The modern form.']
		],
		trap: 'Weber explains obedience by **belief in legitimacy**, not fear of sanction (contrast Austin).'
	},
	{
		id: '10.5',
		group: 10,
		kind: 'list',
		t: 'Hart’s objections to Austin’s command theory',
		src: 'Lesson 10',
		mem: 'Sovereign · Powers · Gunman',
		it: [
			['No single sovereign', 'Modern states disperse power.'],
			['Many rules confer powers', 'Wills, marriage: they enable, they do not command.'],
			['Threats do not create obligations', 'Otherwise a statute would equal a gunman’s demand.']
		]
	},
	{
		id: '10.6',
		group: 10,
		kind: 'list',
		t: 'Critics of legal positivism',
		src: 'Lesson 10',
		it: [
			['H.L.A. Hart', 'Against Austin’s command theory: no single sovereign, power-conferring rules, the gunman.'],
			['Hans Kelsen', 'Against reliance on force: force is a sociological fact outside law. Validity comes from a higher norm, ending in the **Grundnorm**.'],
			['Holmes', 'Against separating law and morals: judges filling gaps (lacunae) draw on morals.'],
			['Nuremberg trials', '“Obeying the sovereign’s orders” rejected as a defense; led toward the UDHR.'],
			['Ronald Dworkin', 'Against Hart: law as integrity. Judges read past practice in its best moral light.']
		]
	},
	{
		id: '11.1',
		group: 11,
		kind: 'list',
		t: 'Forerunners of the shift to the social sciences',
		src: 'Lesson 11',
		mem: 'My Cat Runs Behind Hens',
		it: [
			['Montesquieu', 'The Spirit of Law: institutions must fit the society and geography; separation of powers.'],
			['Comte', 'Coined “sociology”; law of three stages.'],
			['Rousseau', 'The Social Contract: by obeying the general will, people obey themselves.'],
			['Burke', 'Constitutions grow from tradition, not rational design. For the American, against the French Revolution.'],
			['Hegel', 'The state is a real entity higher than its citizens, the embodiment of reason.']
		]
	},
	{
		id: '11.2',
		group: 11,
		kind: 'cls',
		order: true,
		t: 'Comte’s law of three stages',
		src: 'Lesson 11',
		mem: 'God → Ideas → Science',
		it: [
			['Theological', 'Events explained by God.'],
			['Metaphysical', 'Explained by abstract universal rights.'],
			['Positive (scientific)', 'Explained by observed facts.']
		],
		trap: 'Comte’s “positivism” is scientific method, not legal positivism.'
	},
	{
		id: '12.1',
		group: 12,
		kind: 'doc',
		t: 'Characteristics of law under the Historical School',
		src: 'Lesson 12',
		mem: 'National · Not universal · Stable · Custom · No code · Jurists',
		it: [
			['Specific to each nation', ''],
			['Not universal', ''],
			['Stable across generations', ''],
			['Custom is the most authentic law', ''],
			['Codification is frowned upon', ''],
			['Lawyers and judges carry and articulate the popular consciousness', '']
		]
	},
	{
		id: '12.2',
		group: 12,
		kind: 'list',
		t: 'Criticisms of the Historical School in the handout',
		src: 'Lesson 12',
		it: [
			['Conservatism', 'Tying law to the volksgeist limits its power to meet modern problems. Pound: “**juristic pessimism**.” It looks backward; the Functional School looks forward.'],
			['Holmes’s objection', '“Revolting” to have no better reason for a rule than that it was laid down in the time of Henry IV.'],
			['Who are the “folk”?', 'Few societies are homogeneous. The search for a national character slides into racial purification (Nazi Germany).']
		]
	},
	{
		id: '13.1',
		group: 13,
		kind: 'doc',
		t: 'Marx’s three ideas of law',
		src: 'Lesson 13',
		mem: 'Product · Tool · Wither',
		it: [
			['A product of economic forces', 'Law is superstructure on the economic base.'],
			['A tool of the ruling class', ''],
			['Destined to wither away', 'Under pure communism, law and state are no longer needed.']
		]
	},
	{
		id: '13.2',
		group: 13,
		kind: 'cls',
		t: 'Durkheim’s two types of solidarity and their law',
		src: 'Lesson 13',
		it: [
			['Mechanical solidarity → repressive law', 'Simple societies held together by sameness; penal law.'],
			['Organic solidarity → restitutive law', 'Complex societies held together by interdependence; civil law that restores.']
		]
	},
	{
		id: '13.3',
		group: 13,
		kind: 'mem',
		t: 'Pound’s eight jural postulates',
		src: 'Lesson 13',
		it: [
			['No intentional aggression', ''],
			['Control of what one has discovered, created or acquired', ''],
			['Good faith in dealings', ''],
			['Due care not to injure', ''],
			['Restraint of dangerous things', ''],
			['Burdens of social life borne by society', ''],
			['A standard human life assured', ''],
			['Enjoyment of beauty, nature and the arts', '']
		],
		intro: 'Jural postulates are a civilization’s reasonable expectations. They change as society changes.'
	},
	{
		id: '13.4',
		group: 13,
		kind: 'cls',
		t: 'Pound’s three ways courts resolve conflicts of interest',
		src: 'Lesson 13',
		mem: 'Past · Postulates · Instinct',
		it: [
			['Follow the patterns of the past', 'Risks tying the court to a bygone ideology.'],
			['Grasp the postulates of its own age', 'With help from jurists and sociologists.'],
			['Trust its own instinct', 'The commonest. Demands contact with the living law.']
		]
	},
	{
		id: '13.5',
		group: 13,
		kind: 'cls',
		t: 'Perspectives within the Sociological School (Pascual)',
		src: 'Lesson 13',
		it: [
			['Functional', 'Pound.'],
			['Legal Realist', 'Holmes.'],
			['Policy Science', '']
		],
		trap: 'The handout treats all three as Sociological.'
	},
	{
		id: '14.1',
		group: 14,
		kind: 'cls',
		t: 'Three classes of custom',
		src: 'Civil Code, Arts. 11 and 12',
		it: [
			['Contra legem', 'Against the written law. **Not recognized** (Art. 11).'],
			['Secundum legem', 'In line with the law and already embodied in it. Enforced as positive law; the court takes judicial notice of the statute.'],
			['Praeter legem', 'Beyond the law, where the law is silent. May be applied but **must be proved as a fact** (Art. 12).']
		]
	},
	{
		id: '14.2',
		group: 14,
		kind: 'req',
		t: 'When a custom may be applied under the Civil Code',
		src: 'Civil Code, Arts. 11 and 12',
		it: [
			['It is not contrary to law, public order or public policy', 'Art. 11.'],
			['It is proved as a fact under the rules of evidence', 'Art. 12.']
		],
		trap: 'This is the reverse of the Historical School: enacted law is superior to custom.'
	},
	{
		id: '14.3',
		group: 14,
		kind: 'req',
		t: 'The clear and present danger test',
		src: 'Gonzales v. Comelec; ABS-CBN v. Comelec',
		it: [
			['Clear', 'A causal connection between the speech and the evil.'],
			['Present', 'The danger is imminent, not merely a tendency.'],
			['Substantive evil', 'Grave enough to justify “a clamp over one’s mouth.”']
		],
		intro: 'From Holmes: “a question of proximity and degree.”',
		trap: 'Contrast the **dangerous tendency** doctrine, which needs only a tendency to cause the evil.'
	}
];

// ---------- definitions ----------

export const TERMS: KitTerm[] = [
	{ id: 'ratio-decidendi', group: 1, t: 'Ratio decidendi', d: 'The court’s reasoning in coming to its decision interpreting or applying the law. Once a Supreme Court decision becomes final and executory, the ratio forms part of the legal system as precedent under stare decisis.', src: 'Lessons 1, 3 and 7; Civil Code, Art. 8', x: 'The fallo (dispositive portion) binds only the parties; dicta (obiter and judicial) are mere side opinions.' },
	{ id: 'stare-decisis', group: 1, t: 'Stare decisis', d: 'Latin for “to stand by things decided” (the rule of precedence): the ratio decidendi of a final Supreme Court decision is controlling on all future cases of an analogous character.', src: 'Lessons 1, 3 and 7; Civil Code, Art. 8', x: 'Where a novel question of law arises with no precedent, stare decisis is no guide and the lawyer or judge must philosophize.' },
	{ id: 'philosophy', group: 2, t: 'Philosophy (Nietzsche on Thales)', d: 'An inquiry into the origin and ultimate nature (essence) of things, conducted without figure or fable (matter-of-factually), that reduces everything into one unifying principle (“Everything is one!”).', src: 'Lesson 2; Nietzsche on Thales of Miletus', x: 'A scientific hypothesis explains how one thing evolves from another empirically; philosophy leaps to a metaphysical concept of unity.' },
	{ id: 'legal-philosophy', group: 2, t: 'Legal Philosophy', d: 'The study or inquiry into the ultimate nature or essence of law without resort to figure or fable, reducing everything into a single concept or principle. Dworkin notes it has no distinct core of its own and is “parasitic” on ethics, political philosophy, metaphysics, and social sciences.', src: 'Lesson 2; Romulo Borja; R.M. Dworkin' },
	{ id: 'descriptive-prescriptive', group: 3, t: 'Descriptive v. prescriptive law', d: 'Descriptive laws describe how inanimate, animate, or human things actually do behave (e.g., gravity, law of supply and demand). Prescriptive laws lay down standards on how human beings should behave (natural law, moral law, customary law, positive law).', src: 'Lesson 3', x: 'Hume’s injunction: you cannot logically derive a prescriptive “ought” from purely descriptive “is” premises.' },
	{ id: 'positive-law', group: 3, t: 'Positive law (jus positum)', d: 'Man-made law actually and specifically enacted or adopted by a constitutionally recognized authority for the governance of an organized society, backed by state coercion, habitually obeyed, and characterized by certainty. Also called “lawyer’s law.”', src: 'Lesson 3', x: '“Positive” comes from the verb “to posit” (to establish or put forward), not positive acts as opposed to omissions.' },
	{ id: 'dictum', group: 3, t: 'Obiter dictum v. judicial dictum', d: 'Dicta are side comments in a decision not essential to the disposition of the main issue. An obiter dictum disposes of a collateral issue not raised by the parties; a judicial dictum addresses an issue raised by the parties that is still not essential to the disposition.', src: 'Lesson 3', x: 'Both are mere opinions; only the ratio decidendi is binding case law.' },
	{ id: 'jural-non-jural', group: 4, t: 'Jural v. non-jural law', d: 'Jural law corresponds to positive law created and enforced with legal sanctions by a politically organized state. Non-jural law refers to all other prescriptive norms—unenforced social norms, personal or group ethics, religious doctrines, or natural law and justice.', src: 'Lesson 4', x: 'Both jural and non-jural law are prescriptive laws; legal philosophy studies the relationship between them.' },
	{ id: 'teleological-perspective', group: 4, t: 'Teleological Perspective', d: 'The school of thought (“teleological” = relating to design or purpose, also called the Natural Law or Philosophical Perspective) that places non-jural norms at the top of the graph above positive law as the purpose and touchstone of positive law’s validity.', src: 'Lessons 4 and 6', x: 'The Historical School sits at the bottom (volksgeist), the Sociological School at the same level (partner), and Legal Positivism insulated from non-jural norms.' },
	{ id: 'anarchism', group: 5, t: 'Anarchism (“no-law”)', d: 'The view—arising from the premise that man is intrinsically good and corrupted only by social institutions—that the state, law, coercion, and private property are evils that should be abolished in favor of free cooperation and moral censure.', src: 'Lesson 5; Godwin, Bakunin, Kropotkin, Tolstoy', x: 'Adam Smith’s laissez-faire is not anarchism because markets require a minimum set of laws, especially on private property.' },
	{ id: 'republicanism', group: 5, t: 'Democratic and republican state', d: 'Under Art. II, Sec. 1 of the 1987 Constitution, democracy means ultimate sovereignty resides in the people, while republicanism means the nation’s affairs are governed by the rule of law enforced through an organized government—the antithesis of anarchy.', src: 'Lesson 5; 1987 Constitution, Art. II, Sec. 1' },
	{ id: 'salus-populi', group: 6, t: 'Salus populi est suprema lex', d: 'Cicero’s maxim: “The welfare of the people is the highest law.” It signifies a supreme natural law above positive statutes mandating governments to care for the general welfare—known today as police power or the general welfare clause.', src: 'Lessons 6 and 7; Cicero; Calalang v. Williams' },
	{ id: 'lex-injusta', group: 6, t: 'Lex injusta non est lex', d: 'St. Augustine’s maxim: “An unjust law is no law at all.” Aquinas refined this to mean that an unjust human law is a “perversion of law” that retains only the outward appearance of law.', src: 'Lesson 6; St. Augustine; St. Thomas Aquinas', x: 'Austin’s positivist reply: “A law, which actually exists, is a law, though we happen to dislike it.”' },
	{ id: 'prelapsarian', group: 6, t: 'Prelapsarian natural law', d: 'St. Augustine’s term for humanity’s state of innocence before the Fall of Man, when humans could live purely by natural law; after the Fall, law became a natural necessity to curb man’s sinful nature, supplemented by divine law and grace.', src: 'Lessons 5 and 6; St. Augustine' },
	{ id: 'imago-dei', group: 6, t: 'Imago Dei & unalienable rights', d: 'The theological doctrine (Genesis 1:26–28) from which John Locke derived fundamental human equality, including equality of the sexes: because all humans are created equally free, governments require the consent of the governed and citizens retain natural rights to life, liberty, and property.', src: 'Lesson 6; John Locke; Thomas Jefferson', x: 'Hobbes held that citizens surrender all rights to the sovereign; Locke held that the surrender is only partial.' },
	{ id: 'lacunae', group: 7, t: 'Lacunae (gaps in the law)', d: 'Instances of silence, obscurity, or insufficiency in statutory law. Under Civil Code Arts. 9 and 10, a judge may not decline to render judgment and must fill the gap presuming the legislature intended right and justice (natural law) to prevail.', src: 'Lessons 7 and 10; Civil Code, Arts. 9–10; Imbong v. Ochoa; Republic v. Sandiganbayan' },
	{ id: 'social-justice', group: 7, t: 'Social justice (Calalang v. Williams)', d: '“Neither communism, nor despotism, nor atomism, nor anarchy, but the humanization of laws and the equalization of social and economic forces by the State so that justice in its rational and objectively secular conception may at least be approximated.”', src: 'Lesson 7; Calalang v. Williams (Justice Laurel)' },
	{ id: 'utilitarianism', group: 8, t: 'Utilitarianism', d: 'Jeremy Bentham’s philosophy—reviving Roman Epicureanism on a scientific basis—that pain-avoidance and pleasure-seeking are universal, measurable in “utils,” and that law should maximize pleasure and minimize pain through a calculus of pleasure and pain.', src: 'Lesson 8; Jeremy Bentham', x: 'Bentham rejected natural law and natural rights as “nonsense on stilts” and inspired Austin’s sanction-backed command theory.' },
	{ id: 'analytical-jurisprudence', group: 8, t: 'Analytical jurisprudence', d: 'Austin’s third tenet of legal positivism: the task of the jurist is limited to logical analysis of the distinctive vocabulary (rights, duties, sovereignty) and structure of existing positive law, excluding questions of its wisdom, morality, or justness.', src: 'Lesson 8; John Austin' },
	{ id: 'is-ought', group: 8, t: 'Hume’s is/ought injunction', d: 'David Hume’s logical principle that no prescriptive conclusion (“ought”) can be derived from purely descriptive premises (“is”). Kelsen used this to show that because legislative acts are facts (“is”), a presupposed “ought” (the Grundnorm) is needed to confer legal validity.', src: 'Lesson 8; David Hume; Hans Kelsen' },
	{ id: 'efficacy', group: 8, t: 'Efficacy v. legal validity (Kelsen)', d: 'In Kelsen’s Pure Theory, a norm is efficacious if it is actually followed by the population. An individual norm can be valid even before anyone follows it, provided it belongs to a legal order—and rests on a Grundnorm—that is on the whole efficacious.', src: 'Lesson 8; Hans Kelsen', x: 'Kelsen’s admission that the Grundnorm depends on efficacy (a social fact) calls his strict anti-reductionism into question.' },
	{ id: 'secular-morality', group: 9, t: 'Secular morality', d: 'Because Art. II, Sec. 6 of the 1987 Constitution declares the separation of Church and State inviolable, whenever Philippine statutes or courts refer to “morality,” the standard must be secular public interest, not religious doctrine.', src: 'Lesson 9; 1987 Constitution, Art. II, Sec. 6' },
	{ id: 'state-immunity', group: 9, t: 'Non-suability of the State (positivist basis)', d: 'The doctrine that the State cannot be sued without its consent, grounded in the Austinian and Holmesian positivist premise that law is created only by the State, so there can be no legal right against the authority that makes the law on which the right depends.', src: 'Lesson 9; Caltex v. Customs Arrastre; Santiago v. Republic' },
	{ id: 'verba-legis', group: 9, t: 'Dura lex sed lex & verba legis', d: '“The law may be harsh, but it is the law” and the plain-meaning rule: when a statute is clear and unambiguous, courts must apply its literal text without interpretation, in deference to Congress’s plenary legislative power and separation of powers.', src: 'Lesson 9; Macalintal v. Senate (2025)', x: 'Has limited application: once a statute is ambiguous or silent (lacuna), courts must interpret it for right and justice (Art. 10).' },
	{ id: 'natural-law', group: 10, t: 'Natural law', d: 'The theory that a law is valid because it conforms to a higher rule, such as morals or a natural order.', src: 'Lessons 3, 6 and 10', x: 'Legal positivism asks where a rule came from, not whether it is just.' },
	{ id: 'legal-positivism', group: 10, t: 'Legal positivism', d: 'The theory that a rule is law because a recognized authority laid it down, not because it is morally right. Law and morals are autonomous.', src: 'Lesson 10; Austin, Kelsen, Hart', x: 'Comte’s positivism is a scientific method in sociology, not a theory of legal validity.' },
	{ id: 'command-theory', group: 10, t: 'Command theory', d: 'Austin’s view that law is the command of a sovereign, habitually obeyed and backed by a sanction.', src: 'Lesson 10; Austin', x: 'Hart: a command backed by a threat is what a gunman gives; it obliges, but it creates no obligation.' },
	{ id: 'legitimacy', group: 10, t: 'Legitimacy', d: 'The belief that whoever commands has the right to command. It is why we obey Congress and not a bank robber, though both take our money.', src: 'Lesson 10; Weber', x: 'Force gets compliance; legitimacy gets obedience.' },
	{ id: 'de-facto-jure', group: 10, t: 'De facto v. de jure government', d: 'A de facto government holds actual control by force; a de jure government holds the lawful right to govern. In the Japanese occupation the occupier was de facto, the government-in-exile de jure.', src: 'Lesson 10' },
	{ id: 'social-contract', group: 10, t: 'Social contract', d: 'The idea that people consented to surrender part of their freedom to a sovereign, which removes the moral stigma of force.', src: 'Lessons 10 and 11; Socrates, Hobbes, Rousseau', x: 'Burke rejects it: societies grow; they are not designed by agreement.' },
	{ id: 'grundnorm', group: 10, t: 'Grundnorm (basic norm)', d: 'Kelsen’s presupposed norm that the first historical constitution ought to be obeyed. Every norm in the system is valid because a higher norm authorizes it, ending here.', src: 'Lesson 10; Kelsen', x: 'It is neither enacted nor proved, only assumed.' },
	{ id: 'pure-theory', group: 10, t: 'Pure theory of law', d: 'Kelsen’s theory that studies law as a system of norms only, excluding force (a sociological fact) and morals.', src: 'Lesson 10; Kelsen' },
	{ id: 'integrity', group: 10, t: 'Law as integrity', d: 'Dworkin’s view that judges interpret past legal practice in its best moral light, so moral judgment is part of finding what the law is.', src: 'Lesson 10; Dworkin', x: 'Holmes says judges legislate in the gaps; Dworkin says they interpret, not invent.' },
	{ id: 'mens-rea', group: 10, t: 'Mens rea', d: 'A guilty mind. Its requirement for crimes is one reason law and morals converge most in criminal law.', src: 'Lesson 10' },
	{ id: 'sociology', group: 11, t: 'Sociology', d: 'The scientific study of society, a term coined by Comte. It treats society itself as the object of study, using scientific method instead of philosophical speculation.', src: 'Lesson 11; Comte' },
	{ id: 'general-will', group: 11, t: 'General will', d: 'Rousseau’s idea that by submitting to the general will people obey themselves, because they are collectively the authors of the law.', src: 'Lesson 11; Rousseau', x: 'The volksgeist is inherited and never chosen; the general will is formed by agreement.' },
	{ id: 'spirit-of-law', group: 11, t: 'The Spirit of Law', d: 'Montesquieu’s work holding that political institutions must reflect the social and geographic character of a community, and that social phenomena are interrelated.', src: 'Lesson 11; Montesquieu' },
	{ id: 'dialectic', group: 11, t: 'Dialectical idealism', d: 'Hegel’s view that history moves through the conflict of ideas toward reason, which is embodied in the state.', src: 'Lesson 11; Hegel', x: 'Marx’s dialectical materialism: material production, not ideas, drives history.' },
	{ id: 'volksgeist', group: 12, t: 'Volksgeist', d: 'The spirit or common consciousness of a people, from which law springs as language and custom do. Law is found, not made.', src: 'Lesson 12; Savigny', x: 'Ehrlich’s living law is plural and present; the volksgeist is one national spirit inherited from history.' },
	{ id: 'historical-school', group: 12, t: 'Historical School', d: 'The school that finds the source of law in a people’s history and custom, and distrusts codes imposed by reason. Founded in Germany by Hugo, consolidated by Savigny; in England, Maine.', src: 'Lesson 12' },
	{ id: 'status-contract', group: 12, t: 'From status to contract', d: 'Maine’s thesis that law and society move from relations fixed by birth and family to relations chosen by agreement.', src: 'Lesson 12; Maine, Ancient Law (1861)', x: 'Modern labor and consumer law bring status back: Floresca protects workers as workers.' },
	{ id: 'juristic-pessimism', group: 12, t: 'Juristic pessimism', d: 'Pound’s charge against the Historical School: tying law to the volksgeist leaves it powerless to meet modern problems.', src: 'Lesson 12; Pound' },
	{ id: 'law-society', group: 13, t: 'Law and Society movement', d: 'Friedman’s approach that looks outside the legal system, treats law’s autonomy as an empirical question, and studies the impact of laws once in force. “Law is too important to be left to lawyers.”', src: 'Lesson 13; Friedman' },
	{ id: 'base-superstructure', group: 13, t: 'Base and superstructure', d: 'Marx’s view that the economic base (mode of production) shapes the superstructure, which includes law, the state and ideas.', src: 'Lesson 13; Marx' },
	{ id: 'iron-cage', group: 13, t: 'Rationalization and the iron cage', d: 'Weber’s idea that modern authority becomes rule-bound and bureaucratic, freeing people from irrational tradition but trapping them as cogs in a machine.', src: 'Lesson 13; Weber' },
	{ id: 'social-facts', group: 13, t: 'Social facts', d: 'Durkheim’s term for ways of acting and thinking that exist outside individuals and constrain them. Society is an entity of its own.', src: 'Lesson 13; Durkheim' },
	{ id: 'living-law', group: 13, t: 'Living law', d: 'Ehrlich’s term for the rules people actually follow in their associations, as against positive law enacted by the State. The center of gravity of legal development lies in society itself.', src: 'Lesson 13; Ehrlich' },
	{ id: 'jurisprudence-interests', group: 13, t: 'Jurisprudence of interests', d: 'Jhering’s view that society is a mass of competing interests that cannot all be satisfied, and law is the impartial mediator among them.', src: 'Lesson 13; Jhering, The Struggle for Law' },
	{ id: 'social-engineering', group: 13, t: 'Social engineering', d: 'Pound’s view that the lawmaker and the judge use law as a tool to order society, weighing competing individual and social interests.', src: 'Lesson 13; Pound', x: 'Pound is prescriptive (what courts should do); Holmes is descriptive (what courts do).' },
	{ id: 'jural-postulates', group: 13, t: 'Jural postulates', d: 'Pound’s term for the reasonable expectations of a civilization at a given time and place. They change as society changes.', src: 'Lesson 13; Pound', x: 'Unlike the volksgeist, they are tools for reform, not limits on it.' },
	{ id: 'legal-realism', group: 13, t: 'Legal realism', d: 'The view that law is what courts do in fact. Holmes: “the prophecies of what the courts will do in fact, and nothing more pretentious.”', src: 'Lesson 13; Holmes' },
	{ id: 'interstitial', group: 14, t: 'Interstitial legislation', d: 'Lawmaking by judges inside the gaps of existing law. Holmes: judges “do and must legislate, but they can do so only interstitially,” confined from molar to molecular motions.', src: 'Floresca v. Philex Mining', x: 'Rodriguez v. Tan: importing a whole doctrine with no statute is “to legislate by judicial ruling.”' },
	{ id: 'cpd', group: 14, t: 'Clear and present danger', d: 'Holmes’s test: speech may be restricted only if it creates a clear (causally linked) and present (imminent) danger of a substantive evil. “A question of proximity and degree.”', src: 'Gonzales v. Comelec; ABS-CBN v. Comelec', x: 'The dangerous tendency doctrine needs only a tendency to cause the evil.' },
	{ id: 'balancing', group: 14, t: 'Balancing of interests', d: 'The test that weighs a constitutional right against the public interest served by restricting it. A “fundamental postulate of constitutional law.”', src: 'Lantion; Soriano; Akbayan', x: 'Clear and present danger asks only how near and grave the harm is.' },
	{ id: 'preferred-freedoms', group: 14, t: 'Primacy of human rights', d: 'The doctrine that freedoms of expression, assembly and petition hold a preferred position over property rights: property may be restricted on a rational basis, these freedoms only on clear and present danger.', src: 'PBMEO v. Philippine Blooming Mills (1973)', x: 'Balancing weighs case by case; this ranks the rights before the weighing begins.' }
];

// ---------- case digests ----------

export const CASES: Digest[] = [
	{
		id: 'floresca',
		name: 'Floresca v. Philex Mining Corp.',
		cite: 'G.R. No. L-30642, April 30, 1985',
		facts: 'Miners died in a cave-in at Philex’s mine. Their heirs sued the company in court for damages under the Civil Code, alleging its negligence. Philex argued that the heirs’ only remedy was workmen’s compensation.',
		issue: 'May the heirs sue for damages under the Civil Code, or are they limited to workmen’s compensation?',
		ruling: 'They may choose either remedy, but generally not both. The Court admitted it was filling a gap the law left open, to protect “the lowly workers.”',
		doctrine: 'Judges “**do and must legislate, but they can do so only interstitially**,” confined “from molar to molecular motions” (Holmes). The written word is no longer the “sovereign talisman” (Cardozo).',
		link: 'Judges make law in the gaps; anti-formalism; social engineering in action.',
		star: 'The clearest Philippine statement of judicial lawmaking. Pair it with Rodriguez v. Tan.',
		trap: 'Not a licence to legislate freely: “interstitially” is the limit.'
	},
	{
		id: 'rodriguez',
		name: 'Rodriguez v. Tan',
		cite: '91 Phil. 724 (1952)',
		facts: 'After winning an election protest for a Senate seat, Rodriguez sued Tan to recover the salary Tan had received while sitting in the seat. He relied on an American common-law rule that lets the rightful officer recover it.',
		issue: 'May the Court adopt the common-law rule though no Philippine statute provides for it?',
		ruling: 'No. Adopting a common-law doctrine with no statutory basis would be “**to legislate by judicial ruling**,” which is beyond the Court’s province.',
		doctrine: 'Courts may not import a whole doctrine that has no statute to attach to. Lawmaking belongs to the legislature.',
		link: 'The positivist counterweight to Floresca.',
		trap: 'Reconcile with Floresca through “interstitially”: filling a gap inside a statute is not importing a doctrine with no statute.'
	},
	{
		id: 'alzua',
		name: 'Alzua v. Johnson',
		cite: '21 Phil. 308 (1912)',
		facts: 'A suit for damages was brought against a Justice of the Supreme Court for acts done in deciding a case. The question turned on a rule that came from American common law.',
		issue: 'Do common-law rules apply in the Philippines?',
		ruling: 'The common law is not in force here, yet many of its rules came in with American-era laws and institutions and are needed to “breathe the breath of life” into them. They apply only if founded on sound principles, suited to local conditions, and not in conflict with existing law.',
		doctrine: 'A transplanted law carries its history with it; imported rules apply only if suited to **local conditions**.',
		link: 'Savigny (law carries its history), Montesquieu (fit the local society), Holmes in Gompers.'
	},
	{
		id: 'villaflor',
		name: 'Villaflor v. Summers',
		cite: '41 Phil. 62 (1920)',
		facts: 'A woman accused of adultery was ordered by the trial court to submit to a physical examination to determine whether she was pregnant. She refused, invoking the right against self-incrimination, and was held in contempt.',
		issue: 'Does a compelled physical examination violate the right against self-incrimination?',
		ruling: 'No. The right bars compelled testimony, not the use of the body as evidence, so an examination without force or torture is allowed.',
		doctrine: 'The privilege protects against testimonial compulsion, not the exhibition of the body. The Court relied on Holmes in Holt v. United States and called him “**the always forward looking jurist**.”',
		link: 'Holmes’s practical, experience-based reading of a right over an “extravagant extension” of its text.'
	},
	{
		id: 'gonzales',
		name: 'Gonzales v. Comelec',
		cite: 'G.R. No. L-27833, April 18, 1969',
		facts: 'Petitioners challenged a law limiting the period of election campaigning and partisan political activity as a violation of free speech, press, assembly and association.',
		issue: 'What test governs restrictions on these freedoms?',
		ruling: 'The Court explained Holmes’s clear and present danger test and contrasted it with the dangerous tendency doctrine. The law was sustained.',
		doctrine: 'Clear and present danger is “**a question of proximity and degree**.” The danger must be clear (causally linked) and present (imminent).',
		link: 'Rights are limited by real-world consequences, judged case by case.'
	},
	{
		id: 'abs-cbn',
		name: 'ABS-CBN v. Comelec',
		cite: 'G.R. No. 133486, January 28, 2000',
		facts: 'Comelec stopped ABS-CBN from conducting exit polls during the 1998 elections, saying they could confuse voters and undermine the official count.',
		issue: 'Is the ban a valid restraint on free speech and the press?',
		ruling: 'No. The feared harm was speculative. The Court struck the ban down.',
		doctrine: 'The Court “**adheres to**” clear and present danger; the evil must be substantive enough to justify “a clamp over one’s mouth.”',
		link: 'Shows Holmes is settled Philippine doctrine.'
	},
	{
		id: 'pbmeo',
		name: 'PBMEO v. Philippine Blooming Mills',
		cite: 'G.R. No. L-31195, June 5, 1973',
		facts: 'Workers joined a mass demonstration at Malacañang against alleged abuses of the Pasig police. The company warned that first-shift workers who joined would be dismissed under the no-strike clause of the CBA. The union officers were dismissed, and their motion for reconsideration was filed two days late.',
		issue: 'Do the employer’s contract and property rights, and a procedural deadline, prevail over the workers’ freedoms of expression, assembly and petition?',
		ruling: 'No. The demonstration was not a strike against the employer but a petition to government for redress. The dismissals were set aside and the officers reinstated with back pay.',
		doctrine: '**Primacy of human rights over property rights.** Property may be restricted on a rational basis; the preferred freedoms only on clear and present danger. Human rights are imprescriptible, so a procedural rule cannot defeat them.',
		link: 'A hierarchy of rights as the counterpoint to open-ended balancing.',
		star: 'The best case to set against balancing in a differentiate or critique answer.',
		trap: 'Not in the handouts: confirm the details against the full text.'
	},
	{
		id: 'lantion',
		name: 'Secretary of Justice v. Lantion',
		cite: 'G.R. No. 139465, January 18, 2000',
		facts: 'The United States asked for the extradition of a Filipino under the RP-US treaty. During the Department of Justice’s evaluation of the request, he asked for copies of the documents and a chance to answer them, and was refused.',
		issue: 'Does due process entitle him to notice and hearing at the evaluation stage?',
		ruling: 'The January 2000 decision said yes, weighing his due process right against the State’s treaty commitment and deference to the Executive in foreign affairs. On reconsideration in October 2000, the Court reversed and denied the right at that stage.',
		doctrine: 'Balancing of interests is a “**fundamental postulate of constitutional law**.”',
		link: 'Pound and Jhering: the court weighs individual against social interests.',
		star: 'The handout’s lead case for balancing.',
		trap: 'Cite it for the balancing method, not for the final result: the ruling was reversed on reconsideration.'
	},
	{
		id: 'soriano',
		name: 'Soriano v. Laguardia',
		cite: 'G.R. No. 164785, April 29, 2009',
		facts: 'On his television program Ang Dating Daan, Soriano used indecent language against a minister of another religious group. The MTRCB suspended him from the program for three months.',
		issue: 'Does the suspension violate his freedom of speech?',
		ruling: 'No. The State’s interest in the welfare of the youth, who could watch the program, outweighed his free speech claim. The Court chose balancing as “the more appropriate test.”',
		doctrine: '“**Constitutional freedoms are not absolute.**” Speech may yield to a weightier public interest.',
		link: 'Balancing of interests applied to speech.',
		star: 'The easiest example of weighing a right against a social interest.'
	},
	{
		id: 'akbayan',
		name: 'Akbayan v. Aquino',
		cite: 'G.R. No. 170516, July 16, 2008',
		facts: 'Petitioners asked for the documents of the Japan-Philippines Economic Partnership Agreement negotiations, including the offers exchanged. The government withheld them, invoking executive privilege.',
		issue: 'Does the right to information prevail over the privilege for diplomatic negotiations?',
		ruling: 'No. The negotiation documents were privileged, and petitioners failed to show a sufficient need to override it.',
		doctrine: 'The right to information yields to executive privilege over treaty negotiations unless a “**sufficient showing of need**” tips the balance.',
		link: 'Balancing, even where the word is not used.'
	},
	{
		id: 'imbong',
		name: 'Imbong v. Ochoa',
		cite: 'G.R. No. 204819, April 8, 2014',
		facts: 'Petitioners challenged provisions of the Reproductive Health (RH) Law, arguing among others that the statute violated natural law.',
		issue: 'May the Supreme Court invalidate a statute on the ground that it violates natural law?',
		ruling: 'No. The Court’s only guidepost in judicial review is the Constitution. Natural law is not enacted by a legitimate legislative body and consists of theoretical abstractions.',
		doctrine: '“**Unless a natural right has been transformed into a written law, it cannot serve as a basis to strike down a law.**” Natural law is used sparingly only in the most peculiar circumstances (lacunae) where no positive law applies.',
		link: 'Lesson 7 · Natural Law in Philippine Jurisprudence; positivist limit on natural law.',
		star: 'The definitive Philippine rule on when natural law can and cannot be invoked in court.',
		trap: 'Contrast Republic v. Sandiganbayan (where there was no Constitution in force during the post-EDSA hiatus).'
	},
	{
		id: 'sandiganbayan',
		name: 'Republic v. Sandiganbayan (Ramas & Dimaano)',
		cite: 'G.R. No. 104768, July 21, 2003',
		facts: 'During the revolutionary hiatus in March 1986—after the 1973 Constitution was abrogated by the EDSA Revolution and before the Freedom Constitution was promulgated—constabulary raiders searched Elizabeth Dimaano’s house and seized items without a valid warrant.',
		issue: 'Could Dimaano invoke the right against unreasonable searches and seizures during an interregnum when no Constitution or Bill of Rights was in force?',
		ruling: 'Yes. The majority (J. Carpio) held the revolutionary government bound by the UDHR and ICCPR. Justice Puno’s separate concurring opinion went further: the right against unreasonable searches and seizures is a **natural right** inherent in man that precedes constitutions and does not depend on positive law.',
		doctrine: 'In a constitutional vacuum or lacuna, fundamental rights endure under **international human rights law** (majority) and **natural law written in the hearts of men** (J. Puno).',
		link: 'Lesson 7 · The “most peculiar circumstance” where natural law directly supplies a right.',
		star: 'Pair with Imbong v. Ochoa to show the rule and the extraordinary exception.'
	},
	{
		id: 'calalang',
		name: 'Calalang v. Williams',
		cite: 'G.R. No. 47800, December 2, 1940',
		facts: 'Maximo Calalang challenged a regulatory ban on animal-drawn vehicles (*calesas*) along Rosario Street and Rizal Avenue in Manila during certain hours, claiming it violated social justice.',
		issue: 'Does the traffic restriction violate the constitutional mandate to promote social justice?',
		ruling: 'No. Justice Laurel explained that social justice is not mistaken sympathy for one group, but the promotion of the welfare of all the people under the time-honored natural-law maxim *salus populi est suprema lex*.',
		doctrine: 'Social justice is “**neither communism, nor despotism, nor atomism, nor anarchy, but the humanization of laws and the equalization of social and economic forces by the State** so that justice in its rational and objectively secular conception may at least be approximated.”',
		link: 'Lessons 6 & 7 · Cicero’s salus populi est suprema lex and natural law in Philippine constitutional doctrine.'
	},
	{
		id: 'caltex',
		name: 'Caltex (Phils.), Inc. v. Customs Arrastre Service',
		cite: 'G.R. No. L-26632, May 29, 1970 (with Santiago v. Republic, 1978)',
		facts: 'Caltex sued the Customs Arrastre Service, the Bureau of Customs, and the Republic for lost or undelivered cargo without the State’s consent to be sued.',
		issue: 'May the State be sued without its consent?',
		ruling: 'No. Following *Mobil Philippines*, the complaint was dismissed under the doctrine of state immunity from suit.',
		doctrine: 'State immunity represents “**our commitment, in this respect at least, to the Austinian or positivist concept of law**,” under which law is created only by the State, and there can be no legal right against the authority that makes the law on which the right depends (Holmes).',
		link: 'Lesson 9 · Explicit Philippine Supreme Court adoption of Austinian legal positivism.'
	},
	{
		id: 'macalintal',
		name: 'Macalintal v. Senate of the Philippines',
		cite: 'G.R. Nos. E-02002 et al., November 11, 2025',
		facts: 'Petitioners challenged Republic Act No. 12232, which set the term of office of Barangay and Sangguniang Kabataan (BSK) officials.',
		issue: 'How must the Court apply a statute whose text, structure, and language are clear and unambiguous?',
		ruling: 'The Court must apply the statute according to its plain meaning (*verba legis*) without construction or interpretation.',
		doctrine: 'When a statute is clear and free from ambiguity, courts must apply its literal meaning (**verba legis** / **dura lex sed lex**) in deference to the plenary legislative power of Congress and separation of powers.',
		link: 'Lesson 9 · Positivist textualism in Philippine statutory construction.'
	}
];

/** Tensions between the cases, for differentiate and critique answers. */
export const TENSIONS: [string, string][] = [
	['Imbong v. Ochoa v. Republic v. Sandiganbayan', 'Imbong holds natural law cannot strike down a statute because the Constitution is the sole guidepost; Justice Puno in Sandiganbayan invokes natural law directly. Reconcile them through *lacunae*: natural law yields when a written Constitution speaks, but steps in during an extraordinary constitutional hiatus.'],
	['Floresca v. Rodriguez v. Tan (and Macalintal)', 'Floresca says judges must legislate in the gaps; Rodriguez and Macalintal insist courts cannot legislate or deviate from clear statutory text. Reconcile them through Holmes’s word *interstitially*: verba legis rules when the statute is clear, and judicial lawmaking is confined to filling statutory gaps.'],
	['Two speech tests', 'Gonzales and ABS-CBN apply clear and present danger; Soriano prefers balancing. Both reject absolutes and look to consequences. They differ in how much weight speech starts with.'],
	['Balance or hierarchy', 'Lantion and Soriano weigh interests case by case; Philippine Blooming Mills ranks human rights above property rights before the weighing begins.'],
	['Custom in theory and in the Code', 'Savigny treats custom as the most authentic law; the Civil Code treats it as a fact to be proved. Does a country of many peoples with a colonial legal inheritance have a single volksgeist?']
];

// ---------- thinkers ----------

export interface Thinker {
	id: string;
	name: string;
	group: number;
	/** Key terms, shown as tags. */
	terms: string[];
	idea: string;
	/** One phrase to remember them by. */
	remember: string;
	/** Other lessons they reappear in. */
	also?: string;
}

/** What each lesson says, in one line, and the points to carry into the exam. */
export const LESSONS: Record<number, { thesis: string; points: string[] }> = {
	1: {
		thesis: 'Legal Philosophy is indispensable to legal education because statutory law is never exhaustively interpreted; when precedent runs out, lawyers and judges must theorize to participate in legal development.',
		points: [
			'Pascual: all legal rules are manifestations of some working jurisprudential theory; without philosophy, law shrinks from a profession to a mere vocation.',
			'Fr. Aquino: philosophy brings unarticulated assumptions about justice to consciousness so judging is not mechanical. Borja goes further: it is essential to **legal education**, not just judicial education.',
			'Northrop: everyone has a philosophy of law; the only difference is whether you know what yours is and can justify your implicit premises.'
		]
	},
	2: {
		thesis: 'Legal Philosophy is the inquiry into the ultimate nature or essence of law, without figure or fable, reducing everything into a single unifying principle.',
		points: [
			'Nietzsche on Thales (“everything is water”): (1) origin of things, (2) without figure or fable, and (3) “Everything is one!”',
			'Law is not one of the seven traditional branches of Philosophy; it sits under **Political Philosophy**.',
			'Dworkin: Legal Philosophy has no isolated core of its own—it is “**parasitic**” upon ethics, political philosophy, metaphysics, and the social sciences.'
		]
	},
	3: {
		thesis: 'All uses of the word “law” divide into descriptive laws (how things do behave) and prescriptive laws (how humans should behave); positive law is the man-made prescriptive law formally posited and enforced by the State.',
		points: [
			'Non-positive prescriptive laws—natural law, moral law, justice, and reason—overlap whenever a moral code claims universal and immutable applicability.',
			'Positive law (*jus positum*, from *to posit*) is distinguished by formal enactment, obligatory force, habitual obedience, state coercion, and **certainty**.',
			'Under Civil Code Art. 8, only the **ratio decidendi** of final Supreme Court decisions creates binding precedent under *stare decisis*; *obiter* and *judicial dicta* are mere opinions.'
		]
	},
	4: {
		thesis: 'Legal Philosophy asks how jural law (positive law) relates to non-jural law, and Western thought answers with four perspectives: Teleological (above), Historical (below), Sociological (beside), and Legal Positivist (insulated).',
		points: [
			'Chronologically, Natural Law came first (from divine law at Mt. Sinai and *Antigone* to Aristotle’s philosophical natural law); the other three schools arose as scientific reactions against it.',
			'Sir Dennis Lloyd: both Natural Law and Legal Positivism are **rationalist, individualist, and formal** (social contract), whereas the Historical and Sociological Schools are **non-rationalist, collectivist, and non-formal**.'
		]
	},
	5: {
		thesis: 'Whether a thinker views law as a necessary restraint, a beneficent guide, or an evil to be abolished depends on whether they view human nature as intrinsically evil, fallen, social, or intrinsically good.',
		points: [
			'Intrinsically evil (Legists, Shastra, Machiavelli, Bodin, Hobbes, Hume) or fallen (Ovid, Seneca, Augustine) → law is needed to curb dark impulses. Social animal (Aristotle, Aquinas) → law is a beneficent force for human welfare.',
			'Intrinsically good (Godwin, Bakunin, Kropotkin, Tolstoy, Marx’s final communist stage) → law and state are evils to abolish or let wither away.',
			'Philippine law rejects anarchism through republicanism (Art. II, Sec. 1), the Naturalization Law (RA 2927), immigration exclusion (*Djumantan*), and penal laws against inciting rebellion.'
		]
	},
	6: {
		thesis: 'Natural law evolved from divine commands (Mt. Sinai, Antigone) into secular universal reason (Aristotle, Stoics, Cicero), Scholastic theology (Augustine, Aquinas), and finally modern natural and human rights (Locke, Jefferson, UDHR).',
		points: [
			'From the beginning, natural law carried two attributes: **universality** and **immutability** (timelessness), standing as a higher touchstone over positive law.',
			'Hobbes and Locke both started from natural law and the social contract, but Hobbes’s total surrender birthed Legal Positivism, whereas Locke’s partial surrender birthed constitutional natural rights (*life, liberty, property* and consent of the governed).'
		]
	},
	7: {
		thesis: 'Philippine codes and the 1987 Constitution are infused with natural-law standards, yet courts cannot strike down a statute on natural law alone—natural law operates directly only in statutory or constitutional lacunae.',
		points: [
			'Civil Code Arts. 6, 9, 10, and 19–21 and the 1987 Constitution (Preamble, Art. II social justice and human dignity, Art. III substantive due process) embed morals, right, and justice into positive law.',
			'*Imbong v. Ochoa* vs. *Republic v. Sandiganbayan*: the Constitution is the sole guidepost for invalidating statutes (*Imbong*), save in an extraordinary constitutional vacuum where natural rights inherent in man apply directly (J. Puno in *Sandiganbayan*).'
		]
	},
	8: {
		thesis: 'Legal Positivism separates law from morals, treating law either as the sanction-backed command of a sovereign (Austin) or as a hierarchical system of norms resting on a presupposed Grundnorm (Kelsen).',
		points: [
			'Five roads prepared positivism: Socrates in *Crito*, Epicureanism/Bentham’s Utilitarianism (“nonsense on stilts”), Comte’s scientific stages, Hume’s *is/ought* barrier, and Hobbes’s *Leviathan*.',
			'Kelsen’s Pure Theory avoids reducing law to morals or force by tracing validity up a chain of norms to the *Grundnorm*, yet concedes that the system as a whole must be **efficacious**.'
		]
	},
	9: {
		thesis: 'Philippine law practices a qualified legal positivism: obligations require a legal source, statutory morality is strictly secular, State immunity rests on Austinian positivism, and clear statutes demand verba legis.',
		points: [
			'Art. II, Sec. 6 (Separation of Church and State) requires that any legal reference to “morality” mean **secular morality**, never religious doctrine.',
			'*Caltex* and *Santiago* ground the non-suability of the State in Austin and Holmes: no legal right can exist against the State that creates the law.',
			'*Macalintal v. Senate* (2025) enforces *dura lex sed lex* and *verba legis*: clear statutes must be applied literally without judicial construction.'
		]
	},
	10: {
		thesis: 'Natural law says a law is valid because it conforms to a higher rule such as morals; legal positivism says force is the basic element behind law.',
		points: [
			'An unjust law may still carry a moral duty to obey: Socrates in the *Crito*.',
			'Law and morals overlap, like a Venn diagram. Morals only: consensual sex between unmarried adults. Law only: which side of the road to drive on.',
			'Why we obey is legitimacy: Congress and a bank robber both take your money, but only Congress has authority.',
			'Test case: under the Japanese occupation the occupier was *de facto* with force; the government-in-exile was *de jure* with legitimacy. If the occupation became permanent and people accepted it, would might become right?'
		]
	},
	11: {
		thesis: 'Natural law and positivism both start from the individual. From the 17th century, thinkers began to study society itself, using scientific method instead of speculation.',
		points: ['The move is from the individual to the collective: Rousseau’s general will, Hegel’s state, later Durkheim’s social facts and Marx’s classes.']
	},
	12: {
		thesis: 'Law springs from the volksgeist, the spirit of a people, the way language and custom do. It is found, not made.',
		points: ['The Historical School looks backward; the Functional (Sociological) School looks forward.', 'The Philippine Supreme Court hardly ever cites the Historical School or its jurists.']
	},
	13: {
		thesis: 'Law is a set of institutional practices that develops with a society’s culture, economy and politics: “law is the handmaiden of society.”',
		points: ['Friedman’s Law and Society movement looks outside the legal system and studies the impact of laws once in force.']
	},
	14: {
		thesis: 'Our legal system is officially positivist on custom, yet borrows common-law reasoning and decides hard constitutional cases the way Holmes and Pound described.',
		points: []
	}
};

export const THINKERS: Thinker[] = [
	{ id: 'borja', name: 'Romulo V. Borja', group: 1, terms: ['novel questions of law', 'legal development'], idea: 'Because human language is imperfect and statutory law is never exhaustively interpreted, lawyers and judges facing novel questions where precedent runs out cannot avoid philosophizing. Legal Philosophy is essential to **legal education**, not just judicial education.', remember: 'When precedent runs out, you must philosophize', also: 'Author of Lessons 1–13' },
	{ id: 'pascual', name: 'Crisolito Pascual', group: 1, terms: ['working jurisprudential theory', 'profession v. vocation'], idea: 'All legal rules are applications of some working jurisprudential construct that serves as a stabilizing factor or principle of change. Without legal philosophy, law is hollow and shrinks from a profession to a mere vocation.', remember: 'Every rule reflects a theory; profession, not vocation', also: 'Lesson 13 (three sociological perspectives)' },
	{ id: 'aquino-ranhilio', name: 'Fr. Ranhilio Callangan Aquino', group: 1, terms: ['judicial education', 'telos of justice'], idea: 'The more mechanical judging is, the less fair it is. Legal philosophy brings to consciousness our unarticulated assumptions about what is fair and just so they can be critically appraised toward the *telos* of justice.', remember: 'Brings judicial assumptions about justice to consciousness' },
	{ id: 'northrop', name: 'F.S.C. (Stuart) Northrop', group: 1, terms: ['implicit premises'], idea: 'The only difference between a lawyer or judge “without a philosophy” and one with a philosophy is that the latter knows what his philosophy is, and can make clear and justify his implicit premises.', remember: 'Everyone has a philosophy; know yours so you can justify your premises' },
	{ id: 'thales', name: 'Thales of Miletus', group: 2, terms: ['everything is water', 'first philosopher'], idea: 'Mathematician, astronomer, and engineer who declared that everything in the universe is made of water (moisture), leaping beyond empirical observation to a unifying metaphysical principle.', remember: 'First philosopher: “Everything is water”' },
	{ id: 'nietzsche', name: 'Friedrich Nietzsche', group: 2, terms: ['without figure and fable', '*Everything is one!*'], idea: 'Explained why Thales is the first philosopher for three reasons: his proposition speaks of the origin of things, does so without figure or fable, and contains the metaphysical thought “Everything is one!”', remember: 'Three reasons Thales is the first philosopher' },
	{ id: 'lloyd', name: 'Sir Dennis Lloyd', group: 4, terms: ['*The Idea of Law*', 'rationalist, individualist, formal'], idea: 'Characterized both Natural Law and Legal Positivism as **rationalist, individualist, and formal** because both rest on the social contract, whereas the Historical and Sociological Schools are **non-rationalist, collectivist, and non-formal**.', remember: 'R-I-F (Natural Law & Positivism) v. N-C-N (Historical & Sociological)' },
	{ id: 'legists-shastra', name: 'Chinese Legists & Indian Shastra Writers', group: 5, terms: ['man is intrinsically evil', 'penal laws'], idea: '3rd-century BC thinkers who viewed man as intrinsically evil and covetous (“a devil’s workshop” if left alone), arguing that human good comes only from the restraint of social environment and penal laws.', remember: 'Earliest Eastern thinkers: man is evil, so penal law must restrain him' },
	{ id: 'machiavelli-bodin', name: 'Niccolò Machiavelli & Jean Bodin', group: 5, terms: ['*The Prince*', 'original disorder and violence'], idea: 'Machiavelli argued in *The Prince* that “men are naturally bad”; Bodin held that man’s original state was disorder, force, and violence, requiring sovereign law to keep order.', remember: 'Men are naturally bad; original state is violence' },
	{ id: 'ovid-seneca', name: 'Ovid & Seneca', group: 5, terms: ['Golden Age', 'Fall from primitive innocence'], idea: 'Ovid (*Metamorphoses*) and the Stoic Seneca described a primitive Golden Age of innocence where men lived in peace without laws until avarice ruined it, making law necessary to curb human vice.', remember: 'Golden Age of innocence lost to avarice' },
	{ id: 'plato', name: 'Plato', group: 5, terms: ['*The Republic*', 'philosopher-kings', '*The Laws*'], idea: 'In *The Republic*, leaned toward a society without laws ruled by the living reason of philosopher-kings; in his later work *The Laws*, swung to an inflexible, rigorously enforced legal system.', remember: 'Philosopher-kings without laws (*Republic*) v. strict code (*The Laws*)' },
	{ id: 'adam-smith', name: 'Adam Smith', group: 5, terms: ['*Wealth of Nations*', '*laissez-faire*'], idea: 'Advocated *laissez-faire* (“let them alone”) so free market forces can create wealth without government interference, but was **no anarchist**: markets require a minimum set of laws, especially protecting private property.', remember: 'Laissez-faire needs a minimum set of property laws (not an anarchist)' },
	{ id: 'godwin', name: 'William Godwin', group: 5, terms: ['*Political Justice*', 'first modern anarchist'], idea: 'First modern exponent of anarchism: man is endowed with reason and capable of progress, and coercive political institutions and laws only block him. Replace penal laws with free cooperation and moral censure.', remember: 'First modern anarchist; replace law with reason and moral censure' },
	{ id: 'bakunin-kropotkin', name: 'Mikhail Bakunin & Pyotr Kropotkin', group: 5, terms: ['revolutionary anarchism', 'mutual aid'], idea: 'Russian anarchists who viewed the state, law, coercion, and private property as enemies of human happiness, believing history trends inevitably toward mutual aid and common sharing of property.', remember: 'Russian anarchists: abolish state, law, and private property for mutual aid' },
	{ id: 'tolstoy', name: 'Leo Tolstoy', group: 5, terms: ['Christian anarchism', 'Tolstoy colonies'], idea: 'Advocated pacifist Christian anarchism modeled on the early Church without codes or courts. Most “Tolstoy colonies” failed because, as Aylmer Maude noted, they disdained the inherited legal system that lets people cooperate with minimum friction.', remember: 'Christian anarchism; Tolstoy colonies failed for lack of rules' },
	{ id: 'smith-read', name: 'Sir Grafton Elliot Smith & Sir Herbert Read', group: 5, terms: ['balanced human nature', 'decentralization'], idea: 'Elliot Smith argued man is both good and bad (cooperative and dark impulses on equal footing). Read proposed decentralizing authority from huge cities/states into local associations and local courts governed by common sense—scaling down, not pure anarchy.', remember: 'Man is both good and bad; scale law down to local associations' },
	{ id: 'sophocles', name: 'Sophocles', group: 6, terms: ['*Antigone*', 'laws of the gods'], idea: 'In the tragedy *Antigone*, Antigone defies King Creon’s edict forbidding the burial of her brother Polynices, appealing to the unwritten, eternal laws of the gods above any mortal ruler’s decree.', remember: 'Antigone: eternal divine law over King Creon’s edict', also: 'Lesson 4' },
	{ id: 'aristotle', name: 'Aristotle', group: 6, terms: ['father of natural law', '*Rhetoric*', 'man as social animal'], idea: 'Transmuted higher law from divine command to philosophical **natural law**: in *Rhetoric*, distinguished local conventional law from universal, immutable natural justice, citing *Antigone* and Empedocles.', remember: 'Father of natural law; universal and immutable justice by nature', also: 'Lessons 4 and 5' },
	{ id: 'stoics', name: 'The Stoics', group: 6, terms: ['cosmopolitan equality', 'pantheism', 'divine spark'], idea: 'Replaced city-state parochialism with cosmopolitan equality: the universe has a rational design, and every human carries a pantheistic “divine spark” of reason that accesses natural law to live in virtue.', remember: 'Cosmopolitan equality; “divine spark” of reason in every person', also: 'Lesson 8 (contrasted with Epicureans)' },
	{ id: 'cicero', name: 'Marcus Tullius Cicero', group: 6, terms: ['*De Legibus*', '*De Re Publica*', '*salus populi est suprema lex*'], idea: 'True law is “right reason in accordance with nature,” eternal and immutable at Rome or Athens. Wicked statutes are no laws at all, and the highest law is the welfare of the people (*salus populi est suprema lex*).', remember: 'Right reason in accordance with nature; salus populi est suprema lex', also: 'Lesson 7 (*Calalang v. Williams*)' },
	{ id: 'st-paul', name: 'St. Paul', group: 6, terms: ['*Epistle to the Romans*', 'law written in men’s hearts'], idea: 'Even Gentiles who do not have the revealed Mosaic law “do by nature the things contained in the law,” showing the work of natural law **written in their hearts** and witnessed by conscience.', remember: 'Natural law written in men’s hearts (Romans)', also: 'Lesson 7 (J. Puno in *Republic v. Sandiganbayan*)' },
	{ id: 'aquinas', name: 'St. Thomas Aquinas', group: 6, terms: ['Scholasticism', 'participation in eternal law', 'perversion of law'], idea: 'Restored natural law as distinct from divine law: it is the rational creature’s participation in Eternal Law, founded on the supreme principle that **good is to be done and evil avoided**. An unjust human law is a “**perversion of law**.”', remember: 'Rational participation in eternal law; do good and avoid evil; unjust law is a perversion of law', also: 'Lesson 5 (law as a beneficent force)' },
	{ id: 'coke', name: 'Sir Edward Coke', group: 6, terms: ['*Calvin’s Case* (1608)', 'perfect reason'], idea: 'Preeminent English jurist who defined law as “perfect reason” and reported in *Calvin’s Case* that the law of nature was infused by God into man’s heart, is part of the law of England, precedes all municipal law, and is immutable.', remember: 'Calvin’s Case: natural law is perfect reason, immutable, and prior to municipal law' },
	{ id: 'locke', name: 'John Locke', group: 6, terms: ['*Two Treatises of Government*', 'life, liberty, and property', '*Imago Dei*'], idea: 'Turned Hobbes around: in the social contract, people make only a **partial surrender** of rights, retaining natural rights to **life, liberty, and property** rooted in *Imago Dei*. Government requires the **consent of the governed**, and citizens may overthrow a tyrannical state.', remember: 'Partial surrender of rights; life, liberty, property; consent of the governed', also: 'Lesson 4; inspired Jefferson & the UDHR' },
	{ id: 'jefferson', name: 'Thomas Jefferson', group: 6, terms: ['*Declaration of Independence*', 'unalienable rights'], idea: 'Translated Locke’s natural rights into the American Declaration of Independence (1776): all men are created equal and endowed by their Creator with unalienable rights to **life, liberty and the pursuit of happiness**, and governments derive their just powers from the consent of the governed.', remember: 'Unalienable rights: life, liberty, and the pursuit of happiness' },
	{ id: 'bentham', name: 'Jeremy Bentham', group: 8, terms: ['Utilitarianism', 'calculus of pleasure and pain', 'nonsense on stilts'], idea: 'Rejected natural law and natural rights as “**nonsense on stilts**.” Built Utilitarianism on the scientific measurability of pleasure and pain (**utils**), advocating progressive legal reforms and rational codification.', remember: 'Utilitarianism; natural rights are “nonsense on stilts”', also: 'Lesson 12 (contrasted with Savigny)' },
	{ id: 'hume', name: 'David Hume', group: 8, terms: ['empiricism', 'is/ought injunction'], idea: 'Proponent of empiricism and skepticism who demonstrated that a prescriptive conclusion (“**ought**”) can never be logically deduced from purely descriptive premises (“**is**”)—the foundation of Kelsen’s *Grundnorm*.', remember: 'Cannot derive an “ought” from an “is”', also: 'Lessons 5 and 10' },
	{ id: 'raz', name: 'Joseph Raz', group: 8, terms: ['critique of Kelsen’s unity postulates', 'orderly secession'], idea: 'Criticized Kelsen’s two postulates of systematic unity: two norms can trace back to the same *Grundnorm* yet belong to different legal systems (as when a colony gains independence through **orderly secession** authorized by the mother country).', remember: 'Orderly secession disproves Kelsen’s single-Grundnorm unity postulate' },
	{ id: 'socrates', name: 'Socrates', group: 10, terms: ['*Crito*'], idea: 'Refused to escape an unjust death sentence, citing an early social contract: having accepted the benefits of the laws, he owed them obedience.', remember: 'Duty to obey even an unjust law', also: 'Lesson 8' },
	{ id: 'augustine', name: 'St. Augustine', group: 10, terms: ['band of robbers', '*lex injusta non est lex*'], idea: 'Force is the antithesis of law. Without justice, a government is no more than a band of robbers, and an unjust law is no law at all (*lex injusta non est lex*). After the Fall, law is needed to curb man’s sinful nature.', remember: 'Without justice, government is a band of robbers; lex injusta non est lex', also: 'Lessons 5 and 6; quoted twice in Lesson 10' },
	{ id: 'hobbes', name: 'Thomas Hobbes', group: 10, terms: ['*Leviathan*', 'social contract', 'sovereign'], idea: 'Life in the state of nature was “solitary, poor, nasty, brutish, and short,” so people surrendered their individual sovereignty to a single sovereign. Morality is obeying the sovereign’s law, birthing Legal Positivism.', remember: 'Social contract; morality is obeying the sovereign', also: 'Lessons 4, 5, 6, 8 and 11' },
	{ id: 'austin', name: 'John Austin', group: 10, terms: ['command', 'sovereign', 'sanction', 'analytical jurisprudence'], idea: 'Law is the command of a sovereign, habitually obeyed by the bulk of the population, backed by a sanction. “The existence of law is one thing; its merit or demerit is another.” Legal study is analytical jurisprudence.', remember: 'Law is a command backed by sanction; existence v. merit of law', also: 'Lessons 8 and 9 (*Caltex*)' },
	{ id: 'hart', name: 'H.L.A. Hart', group: 10, terms: ['rules', 'power-conferring rules', 'gunman'], idea: 'Positivist critic of Austin: no single sovereign, many rules confer powers, and a threat obliges without creating an obligation.', remember: 'Three objections to Austin; the gunman' },
	{ id: 'kelsen', name: 'Hans Kelsen', group: 10, terms: ['pure theory', '*Grundnorm*', 'efficacy'], idea: 'Force is a sociological fact outside law. Respecting Hume’s is/ought rule, each norm is valid under a higher norm, ending in a presupposed basic norm (*Grundnorm*) behind the first constitution, provided the legal order as a whole is efficacious.', remember: 'Pure theory; Grundnorm; validity v. efficacy', also: 'Lesson 8' },
	{ id: 'dworkin', name: 'Ronald Dworkin', group: 10, terms: ['law as integrity', 'parasitic discipline'], idea: 'In Lesson 2, showed that Legal Philosophy is “parasitic” on ethics, political philosophy, and metaphysics. Against Hart in Lesson 10: judges interpret past practice in its best moral light (*law as integrity*), so moral judgment is part of finding the law.', remember: 'Law as integrity; constructive interpretation; legal philosophy as parasitic', also: 'Lesson 2' },
	{ id: 'montesquieu', name: 'Montesquieu', group: 11, terms: ['*The Spirit of Law*', 'separation of powers'], idea: 'Political institutions must reflect the social and geographic character of the community; social phenomena are interrelated.', remember: 'Institutions fit their society; separation of powers' },
	{ id: 'comte', name: 'Auguste Comte', group: 11, terms: ['sociology', 'positivism', 'three stages'], idea: 'Coined “sociology.” Human thought passes through theological, metaphysical and positive (scientific) stages: the first theory of social evolution.', remember: 'Theological, metaphysical, positive', also: 'Lessons 4 and 8' },
	{ id: 'rousseau', name: 'Jean-Jacques Rousseau', group: 11, terms: ['*The Social Contract*', 'general will'], idea: 'By submitting to the general will, people obey themselves, because they are collectively the authors of the law.', remember: 'General will' },
	{ id: 'burke', name: 'Edmund Burke', group: 11, terms: ['conservatism', 'tradition'], idea: 'Father of British conservatism. Constitutions should grow from tradition, not rational design: society is not a Lego set. Supported the American Revolution, opposed the French.', remember: 'Organic society; for the American, against the French Revolution' },
	{ id: 'hegel', name: 'G.W.F. Hegel', group: 11, terms: ['dialectical idealism', 'the state'], idea: 'The state is a real entity higher than its citizens and the embodiment of reason. The dialectic is progressive; the state doctrine is conservative. Freedom becomes freedom to obey.', remember: 'State as reason embodied', also: 'Lessons 10, 12; Marx inverts him in 13' },
	{ id: 'hugo', name: 'Gustav Hugo', group: 12, terms: ['German Historical School'], idea: 'Founded the German school by opposing uncritical codification and separating native German from Roman elements.', remember: 'Founder of the German Historical School' },
	{ id: 'savigny', name: 'Friedrich Carl von Savigny', group: 12, terms: ['volksgeist', '1814 pamphlet'], idea: 'In *Of the Vocation of Our Age for Legislation and Legal Science* (1814) he argued against a unified German code and natural law’s “infinite arrogance.” Law cannot be imposed on a people regardless of its history.', remember: 'Volksgeist; against codification; law is found, not made' },
	{ id: 'maine', name: 'Henry Maine', group: 12, terms: ['*Ancient Law*', 'status to contract'], idea: 'Founded the English school with *Ancient Law* (1861), influenced by Darwin. Law and society move “from status to contract.” Broke with analysing law without history.', remember: 'From status to contract' },
	{ id: 'friedman', name: 'Lawrence Friedman', group: 13, terms: ['Law and Society'], idea: 'Looks outside the legal system and treats law’s autonomy as an empirical question. “Law is too important to be left to lawyers.”', remember: 'Law and Society; law is not autonomous' },
	{ id: 'marx', name: 'Karl Marx', group: 13, terms: ['dialectical materialism', 'base and superstructure', 'withering away'], idea: 'Turns Hegel upside down. Law is a product of economic forces, a tool of the ruling class, and destined to wither away under pure communism (after an intermediate socialist state with more law).', remember: 'Base and superstructure; withering away', also: 'Lessons 5 and 8' },
	{ id: 'weber', name: 'Max Weber', group: 13, terms: ['rationalization', 'bureaucracy', 'iron cage'], idea: 'Modern authority is rational-legal. Rationalization frees people from illogical tradition but makes them cogs in a machine.', remember: 'Charismatic, traditional, rational-legal; iron cage', also: 'Lesson 10' },
	{ id: 'durkheim', name: 'Émile Durkheim', group: 13, terms: ['social facts', 'solidarity'], idea: 'Society is an entity of its own. As it grows complex, law shifts from repressive (penal) to restitutive (civil). Law shows how a society is integrated.', remember: 'Social facts; repressive to restitutive' },
	{ id: 'ehrlich', name: 'Eugen Ehrlich', group: 13, terms: ['living law'], idea: 'The rules people actually follow matter more than State norms. The center of gravity of legal development lies in society itself.', remember: 'Living law; center of gravity in society' },
	{ id: 'jhering', name: 'Rudolf von Jhering', group: 13, terms: ['*The Struggle for Law*', 'interests'], idea: 'Law is an impartial mediator among competing interests that cannot all be satisfied. Lawyers must understand the social effects of rules.', remember: 'Law mediates competing interests' },
	{ id: 'pound', name: 'Roscoe Pound', group: 13, terms: ['social engineering', 'jural postulates'], idea: 'The lawmaker is a social engineer. Courts scrutinize and weigh competing interests, guided by jural postulates that change as society changes.', remember: 'Social engineering; jural postulates; “juristic pessimism”', also: 'Lesson 12; cited in Floresca' },
	{ id: 'holmes', name: 'Oliver Wendell Holmes Jr.', group: 13, terms: ['*The Common Law*', 'legal realism'], idea: '“The life of the law has not been logic: it has been experience.” Law is “the prophecies of what the courts will do in fact.” The common law is not “a brooding omnipresence in the sky.” “General propositions do not decide concrete cases.”', remember: 'Experience, not logic; interstitial legislation; clear and present danger', also: 'Lessons 1, 9, 10, 12 and the Holmes handout' },
	{ id: 'cardozo', name: 'Benjamin Cardozo', group: 13, terms: ['sovereign talisman'], idea: 'History built up the legal system, and law has outgrown formalism: the written word is no longer the “sovereign talisman.”', remember: '“Sovereign talisman”; history built the system', also: 'Lesson 12, Floresca, Gonzales' }
];

// ---------- differentiate ----------

export const SCHOOLS = ['Natural Law', 'Legal Positivism', 'Historical School', 'Sociological School'];
/** [axis, natural law, positivism, historical, sociological] */
export const SCHOOL_AXES: [string, string, string, string, string][] = [
	['Source of law', 'A higher moral or natural order', 'The sovereign’s command (Austin); a hierarchy of norms (Kelsen)', 'The volksgeist, shown in custom', 'Society: its economy, interests and actual practices'],
	['What makes a rule law', 'Conformity to morals', 'Enactment by proper authority, backed by sanction', 'Fit with the people’s historical consciousness', 'Its function and effect in society; what courts in fact do'],
	['Unit of analysis', 'The individual’s reason', 'The individual facing sanctions', 'A nation or people', 'Groups, classes, institutions'],
	['Method', 'Philosophical reasoning', 'Logical analysis of positive law', 'Historical research', 'Empirical social science'],
	['Time orientation', 'Timeless', 'Present (what is enacted now)', 'Backward-looking', 'Forward-looking'],
	['Role of judge or lawyer', 'Test law against justice', 'Apply the law as written', 'Discover and articulate the people’s law', 'Weigh interests; engineer social outcomes'],
	['Characteristic danger', 'Whose morals?', 'Nuremberg: unjust orders are still “law”', 'Stagnation; nationalism', 'Judicial discretion with no fixed scale']
];

/** [thinker, what moves, stages, attitude to the last stage] */
export const STAGES: [string, string, string, string][] = [
	['Comte', 'Human thought', 'Theological → metaphysical → positive', 'Optimistic: science solves social problems'],
	['Maine', 'Legal relations', 'Status → contract', 'Approving: individuals become autonomous agents'],
	['Durkheim', 'Social integration and type of law', 'Mechanical solidarity, repressive law → organic solidarity, restitutive law', 'Descriptive'],
	['Weber', 'Authority', 'Charismatic → traditional → rational-legal', 'Ambivalent: progress and the iron cage'],
	['Marx', 'Mode of production', 'Capitalism → socialism → pure communism', 'Law and state wither away']
];

export interface Pair {
	id: string;
	pair: string;
	common: string;
	diff: string;
	star?: boolean;
}

export const PAIRS: Pair[] = [
	{ id: 'hist-soc', pair: 'Historical v. Sociological School', common: 'Law is part of society, rooted in its culture, economy and values; not an abstract set of imposed rules.', diff: 'Historical justifies rules from the past; Sociological molds law for new problems.', star: true },
	{ id: 'bal-hier', pair: 'Balancing (Lantion, Soriano) v. hierarchy (Philippine Blooming Mills)', common: 'Both look at the real interests behind legal forms.', diff: 'Balancing weighs case by case on a level scale; the hierarchy gives human rights a preferred position over property rights from the start.', star: true },
	{ id: 'cpd-bal', pair: 'Clear and present danger v. balancing of interests', common: 'Rights are not absolute; context decides.', diff: 'Clear and present danger asks only how near and grave the harm is. Balancing weighs the right against any important public interest.', star: true },
	{ id: 'austin-hart-kelsen', pair: 'Austin v. Hart v. Kelsen', common: 'All positivists; all separate law from morals.', diff: 'Austin grounds law in force. Hart replaces commands with rules, including power-conferring ones. Kelsen grounds validity in a presupposed Basic Norm.', star: true },
	{ id: 'volk-living', pair: 'Savigny’s volksgeist v. Ehrlich’s living law', common: 'Real law lives among the people, not in State enactments.', diff: 'The volksgeist is one national spirit inherited from history; living law is the present practice of many social associations.', star: true },
	{ id: 'pound-holmes', pair: 'Pound v. Holmes', common: 'Law responds to social needs; judges do not just deduce.', diff: 'Pound is prescriptive (what courts should do). Holmes is descriptive and skeptical (what courts in fact do).' },
	{ id: 'holmes-dworkin', pair: 'Holmes v. Dworkin', common: 'Judges go beyond the text in hard cases.', diff: 'Holmes: they legislate in the gaps. Dworkin: they find the answer by interpreting existing law in its best moral light.' },
	{ id: 'volk-general', pair: 'Volksgeist v. Rousseau’s general will', common: 'Law expresses a collective will, not an individual’s.', diff: 'The general will is formed by agreement (contract); the volksgeist is inherited and never chosen.' },
	{ id: 'volk-postulates', pair: 'Volksgeist v. Pound’s jural postulates', common: 'Both look for a society’s underlying assumptions.', diff: 'Postulates belong to a time and place and change with society; they are tools for reform, not limits on it.' },
	{ id: 'savigny-bentham', pair: 'Savigny v. Bentham', common: 'Both reject natural law.', diff: 'Bentham: law can be rationally designed and codified for any nation. Savigny: law cannot be imposed regardless of a people’s history.' },
	{ id: 'burke-savigny', pair: 'Burke v. Savigny', common: 'Organic growth; distrust of abstract reason and sudden codes.', diff: 'Burke writes of politics and constitutions; Savigny builds a legal method carried out by jurists.' },
	{ id: 'hegel-marx', pair: 'Hegel v. Marx', common: 'History moves dialectically.', diff: 'Hegel: ideas drive history and the state is reason embodied. Marx: material production drives history and the state serves the ruling class.' },
	{ id: 'hobbes-rousseau', pair: 'Hobbes v. Rousseau', common: 'The social contract ends the state of nature.', diff: 'Hobbes: surrender to a sovereign whose command is moral. Rousseau: submit to the general will and so obey yourself.' },
	{ id: 'hobbes-locke', pair: 'Hobbes v. Locke on the social contract', common: 'Both start from natural law and rational individuals leaving the state of nature by agreement (Lloyd’s rationalist, individualist, formal traits).', diff: 'Hobbes: total surrender of sovereignty to the ruler, birthing Legal Positivism. Locke: partial surrender retaining natural rights to life, liberty, and property, with a right of revolution.', star: true },
	{ id: 'desc-presc', pair: 'Descriptive v. prescriptive law', common: 'Both are called “laws” and express a regularity or rule.', diff: 'Descriptive laws state how things in fact behave (*is*: gravity, supply and demand); prescriptive laws set standards for how humans ought to behave (*ought*: natural law, morals, positive law).' },
	{ id: 'jural-nonjural', pair: 'Jural (positive) v. non-jural law', common: 'Both are prescriptive laws that tell human beings how they ought to act.', diff: 'Jural law is formally posited and coercively enforced by a politically organized state with certainty; non-jural law (morals, natural law, custom) lacks formal legislation and state sanctions.' },
	{ id: 'ratio-dictum', pair: 'Ratio decidendi v. obiter and judicial dicta', common: 'All are statements or opinions expressed by the Supreme Court inside a decision.', diff: 'The *ratio decidendi* is the reasoning essential to the ruling and binds future analogous cases under *stare decisis*; *judicial dictum* (raised by parties) and *obiter dictum* (not raised) are non-essential side opinions.' },
	{ id: 'imbong-sandiganbayan', pair: 'Imbong v. Ochoa v. Republic v. Sandiganbayan', common: 'Both address whether natural law may be invoked before the Philippine Supreme Court.', diff: '*Imbong* holds natural law cannot invalidate a statute when the Constitution speaks; *Sandiganbayan* (J. Puno) applies natural law directly during an extraordinary constitutional vacuum (*lacuna*).', star: true },
	{ id: 'jhering-pound', pair: 'Jhering v. Pound', common: 'Law mediates competing interests.', diff: 'Jhering supplies the theory; Pound turns it into a programme for courts with classified interests and jural postulates.' },
	{ id: 'weber-austin', pair: 'Weber’s authority v. Austin’s sovereign', common: 'Both explain obedience.', diff: 'Austin: habit and fear of sanction. Weber: belief in legitimacy, which is why force alone is unstable.' }
];

// ---------- critiques ----------

export interface Critique {
	id: string;
	idea: string;
	right: string;
	/** What the handout itself says against it. */
	weak: string;
	/** Reasoning you can develop as your own. */
	push: string;
	star?: boolean;
}

export const CRITIQUES: Critique[] = [
	{ id: 'natural-law-critique', idea: 'Natural law as higher law', right: 'Provides an external moral standard (*lex injusta non est lex*) to judge tyranny, ground human rights (Locke, UDHR), and guide courts when statutes leave *lacunae* (Art. 10; *Sandiganbayan*).', weak: 'Non-jural rules are often hazy, vague, and lack consensus; Bentham mocked natural rights as “**nonsense on stilts**,” and *Imbong v. Ochoa* calls them theoretical abstractions not enacted by any legitimate body.', push: 'Whose reason defines “nature”? Without positive enactment, letting judges strike down statutes on unwritten natural law risks replacing the Constitution with each judge’s personal or religious conscience.', star: true },
	{ id: 'anarchism-critique', idea: 'Anarchism (“no-law”)', right: 'Exposes how coercive institutions can oppress and reminds us that human cooperation and local association matter (Elliot Smith, Herbert Read).', weak: 'Assumes man is purely good; **Tolstoy’s colonies failed** because, as Aylmer Maude observed, abolishing codes and courts discards the inherited system that lets people cooperate with minimum friction.', push: 'Even Marx conceded that before the state withers away, socialism requires *more* law, and Adam Smith’s *laissez-faire* still needs property and contract rules. Complex society without law collapses into Hobbes’s state of nature.' },
	{ id: 'separation', idea: 'Separation of law and morals (positivism)', right: 'Clarity: you can identify the law without first settling moral debates. The Venn diagram shows the two really do diverge.', weak: 'Does not account for how judges fill gaps (Holmes); Nuremberg rejected “I obeyed the sovereign”; Dworkin says moral judgment is part of finding the law.', push: 'Separation may be what *allows* moral criticism of law: you can only call a law unjust if “law” and “just” are different questions.', star: true },
	{ id: 'austin', idea: 'Austin’s command theory', right: 'Captures criminal law and the reality of sanctions.', weak: 'Hart’s three points: no single sovereign, power-conferring rules, the gunman problem. International law binds without a sovereign.', push: 'The 1987 Constitution disperses power and declares the people sovereign. Who then is Austin’s commander?', star: true },
	{ id: 'kelsen', idea: 'Kelsen’s Grundnorm', right: 'Explains validity without appeal to force or morals, respecting Hume’s *is/ought* barrier.', weak: 'Joseph Raz shows two systems can share one historical *Grundnorm* (orderly secession), and Kelsen himself concedes the *Grundnorm* is valid only if the legal order is **efficacious** (supported by social fact/force).', push: 'A norm that is merely *presupposed* is neither enacted nor proved. If efficacy is required for the *Grundnorm*, is the Pure Theory really “pure,” or has force been let back in through the basement?' },
	{ id: 'force', idea: 'Force as the essence of law', right: 'Without sanctions the recalcitrant ignore the law; “force and effect of law.”', weak: 'Augustine’s band of robbers; bank robber v. Congress; the occupations as exceptional events.', push: 'Weber shows force is unstable without belief in legitimacy. Yet the permanent-occupation hypothetical suggests legitimacy can grow out of force.', star: true },
	{ id: 'contract', idea: 'Social contract', right: 'Softens coercion through consent.', weak: 'Versions can justify totalitarianism as easily as democracy.', push: 'No one alive signed it. Burke’s objection: societies are not designed by agreement; they grow.' },
	{ id: 'hegel', idea: 'Hegel’s state', right: 'Sees society as more than a sum of individuals.', weak: 'Freedom shrinks to the freedom to obey; no point in rebelling; fed nationalist totalitarianism.', push: 'If the state is reason embodied, there is no standpoint from which to call a state unjust. Compare Nuremberg.' },
	{ id: 'volksgeist', idea: 'Volksgeist (Savigny)', right: 'Law that ignores a people’s culture is not obeyed; explains why legal transplants struggle.', weak: 'Conservative (“juristic pessimism”); backward-looking; the “folk” cannot be defined; slides toward racial purification.', push: 'In practice jurists decide what the people’s spirit says, so an elite speaks in the people’s name. And where is the single folk-soul of a multi-ethnic, twice-colonized country?', star: true },
	{ id: 'maine', idea: 'Maine’s status to contract', right: 'Captures a real historical shift toward individual autonomy.', weak: 'Not criticized in the handout.', push: 'Modern labor and consumer law re-impose protections based on status (worker, tenant). Floresca protects workers *as* workers. The movement is not one-way.' },
	{ id: 'marx', idea: 'Marx on law', right: 'Exposes whose interests a law serves; explains why formal equality can hide exploitation.', weak: 'Not criticized in the handout.', push: 'Economic determinism cannot explain laws that restrain the powerful (labor standards, agrarian reform). Law and state did not wither away under actual communist governments.' },
	{ id: 'weber', idea: 'Weber’s rationalization', right: 'Explains impersonal, rule-bound modern authority.', weak: 'Weber’s own worry: the iron cage, people as cogs.', push: 'Rational-legal form does not guarantee just content. A bureaucracy can administer injustice efficiently.' },
	{ id: 'ehrlich', idea: 'Ehrlich’s living law', right: 'Explains the gap between law in the books and conduct in fact.', weak: 'Not criticized in the handout.', push: 'If whatever people do is law, how do we tell law from custom or morals? Some living practices are unjust. Arts. 11 and 12 show the State refusing to defer.' },
	{ id: 'pound', idea: 'Pound’s social engineering and balancing', right: 'Makes courts face the real interests at stake; rights are not absolutes in a vacuum.', weak: 'Pound admits the commonest mode is rough-and-ready instinct.', push: 'There is no common scale: how much youth welfare equals how much free speech (Soriano)? Whoever frames the interests decides the case. Philippine Blooming Mills answers with a preferred position for human rights.', star: true },
	{ id: 'holmes', idea: 'Holmes’s realism', right: 'Honest about judicial lawmaking; frees law from dead rules (“Henry IV”).', weak: 'Floresca’s own list of critics warns of “judicial tyranny.”', push: 'A judge cannot decide a case by predicting what they themselves will do. “Prophecy” describes the lawyer’s view, not the judge’s. Rodriguez v. Tan shows the Court also fears legislating.', star: true },
	{ id: 'burke', idea: 'Burke’s traditionalism', right: 'Humility about what reason alone can design.', weak: 'Appeals to property owners and stability; accepts class hierarchy as natural.', push: 'Tradition preserved injustices too. “Things have always been that way” is Weber’s traditional authority, not an argument.' }
];

// ---------- exam focus ----------

export const TOP: TopQuestion[] = [
	{ q: 'Define the balancing of interests. Differentiate it from Philippine Blooming Mills. Critique it, and give your opinion.', type: 'critique', topic: 'Lesson 13 · Pound, Jhering; Lantion, Soriano, PBMEO', href: '/module/philo/focus#model' },
	{ q: 'Differentiate the Historical School and the Sociological School.', type: 'distinction', topic: 'Lessons 12 and 13', href: '/module/philo/essays#q-f-hist-soc' },
	{ q: 'Is force or morality the true basis of law? Give your opinion.', type: 'opinion', topic: 'Lesson 10', href: '/module/philo/essays#q-o-basis' },
	{ q: '“Law is the command of the sovereign backed by force.” Critique.', type: 'critique', topic: 'Lesson 10 · Austin, Hart, Kelsen', href: '/module/philo/essays#q-c-austin' },
	{ q: 'How has legal philosophy changed the way you think as a law student?', type: 'opinion', topic: 'All lessons (asked in the midterm)', href: '/module/philo/essays#q-o-student' },
	{ q: 'Critique the Historical School. Is it relevant to the Philippines?', type: 'critique', topic: 'Lesson 12 · Savigny; Arts. 11–12', href: '/module/philo/essays#q-c-historical' },
	{ q: 'Define the volksgeist.', type: 'definition', topic: 'Lesson 12 · Savigny', href: '/module/philo/essays#q-d-volksgeist' },
	{ q: 'Define Pound’s social engineering.', type: 'definition', topic: 'Lesson 13 · Pound', href: '/module/philo/essays#q-d-social-engineering' },
	{ q: 'Differentiate law and morals.', type: 'distinction', topic: 'Lesson 10 · Venn diagram', href: '/module/philo/essays#q-f-law-morals' },
	{ q: '“Judges should never legislate.” Critique, using Philippine cases.', type: 'critique', topic: 'Floresca v. Rodriguez v. Tan', href: '/module/philo/essays#q-c-judges' },
	{ q: 'Differentiate the clear and present danger test and balancing of interests.', type: 'distinction', topic: 'Gonzales, ABS-CBN, Soriano', href: '/module/philo/essays#q-f-cpd-balancing' },
	{ q: 'In your opinion, must we obey an unjust law?', type: 'opinion', topic: 'Lesson 10 · Socrates, Nuremberg', href: '/module/philo/essays#q-o-unjust' },
	{ q: 'Define legal realism.', type: 'definition', topic: 'Lesson 13 · Holmes', href: '/module/philo/essays#q-d-realism' },
	{ q: 'Differentiate Austin and Hart on what law is.', type: 'distinction', topic: 'Lesson 10', href: '/module/philo/essays#q-f-austin-hart' }
];

export const LIKELY_ENUMS: Record<string, string> = {
	'2.1': 'Nietzsche’s three criteria define both philosophy and legal philosophy.',
	'3.2': 'The four defining traits of positive law.',
	'4.1': 'The master map of all four schools and their graph positions.',
	'4.2': 'Sir Dennis Lloyd’s R-I-F vs. N-C-N contrast across the four schools.',
	'5.1': 'Connects every thinker’s view of law to their view of human nature.',
	'8.1': 'Austin’s three core tenets of Legal Positivism.',
	'10.1': 'The backbone of any law-and-morals answer.',
	'10.4': 'Appears in two lessons; explains why we obey.',
	'10.5': 'The standard critique of Austin.',
	'12.2': 'Ready-made critique of the Historical School.',
	'13.4': 'Pound’s own admission is the best critique of balancing.',
	'14.1': 'The handout’s only list on Philippine law.'
};

export const LIKELY_TERMS: Record<string, string> = {
	'positive-law': 'Foundation of Lessons 3, 4, 8 and 9.',
	'jural-non-jural': 'Frames the entire four-school graph in Lesson 4.',
	'lex-injusta': 'Natural law’s classic formula (Augustine & Aquinas).',
	'salus-populi': 'Cicero’s maxim applied in Calalang v. Williams.',
	'is-ought': 'Hume’s barrier that explains why Kelsen needs the Grundnorm.',
	'legal-positivism': 'Every critique question starts here.',
	legitimacy: 'The answer to “force or morals?”.',
	volksgeist: 'The Historical School in one word.',
	'living-law': 'Often confused with the volksgeist.',
	'social-engineering': 'Lesson 13’s core idea.',
	'legal-realism': 'Holmes appears in four readings.',
	interstitial: 'The key word that reconciles Floresca and Rodriguez.',
	balancing: 'Most likely essay topic.',
	'preferred-freedoms': 'The counterpoint to balancing.',
	grundnorm: 'Easy definition marks.'
};

/** Nine ideas that surface in more than one reading. */
export const RECURRING: [string, string, string][] = [
	['Law is not autonomous; it grows out of society', 'Montesquieu, Burke, Savigny, Ehrlich (“center of gravity … in society itself”), Marx, Friedman, Pound, Holmes', 'The thesis of the whole finals coverage. Open any essay with it.'],
	['From the individual to the collective', 'Natural law and positivism are individualistic; Rousseau’s general will, Hegel’s state, Durkheim’s social facts, Marx’s classes', 'Explains *why* the shift to social science happened.'],
	['Experience and history over logic', 'Burke; Savigny (law is found, not made); Holmes (“experience”); Gompers (“not mathematical formulas”); Cardozo’s “sovereign talisman”', 'Use against formalism and codification by pure reason.'],
	['Society and law evolve in stages', 'Comte, Weber, Durkheim, Maine, Marx, Hegel’s dialectic', 'A ready-made differentiate question.'],
	['Why do we obey? Force, morals or legitimacy', 'Lesson 10; Weber’s three types of authority; Augustine’s band of robbers; bank robber v. Congress; de facto v. de jure', 'The bridge between midterm and finals topics.'],
	['Judges make law in the gaps', 'Holmes on lacunae and “prophecies”; Floresca (“only interstitially”); Pound’s three modes; Dworkin; contrast Rodriguez v. Tan', 'Best source of Philippine examples.'],
	['Law as the balancing of competing interests', 'Jhering, Pound, Lantion, Soriano, Akbayan', 'Shows sociological jurisprudence is living Philippine doctrine.'],
	['Backward-looking v. forward-looking law', 'Historical v. Functional School; Pound’s “juristic pessimism”; Holmes’s “Henry IV”; Villaflor’s “always forward looking” Holmes', 'The cleanest differentiate question.'],
	['The collective can turn dangerous', 'Hegel’s state; volksgeist and racial “purification”; Nuremberg; occupation as force without legitimacy', 'Your strongest critique material.']
];

/** What the course changes for a law student: [lesson, source, effect]. */
export const WHY_MATTERS: [string, string, string][] = [
	['Every decision rests on a theory of law', 'Floresca reasons like Holmes; Rodriguez v. Tan like a positivist; Lantion like Pound', 'You read cases for the *why*, and can predict a ruling when the text runs out.'],
	['Text is where legal reasoning starts, not where it ends', '“Sovereign talisman”; the penumbra; “general propositions do not decide concrete cases”', 'You argue purpose, policy and consequence, not only the codal.'],
	['Rights are weighed, not recited', 'Balancing; clear and present danger as “proximity and degree”', 'Constitutional law becomes arguments about weight.'],
	['A law can be valid and still unjust', 'The Venn diagram; Nuremberg; Augustine', 'You keep a moral standpoint from which to criticize the law.'],
	['Law comes from somewhere', 'Alzua; Arts. 11 and 12; Maine', 'You see why Philippine law mixes civil-law codes and common-law reasoning.'],
	['Law serves interests', 'Marx; Jhering and Pound', 'You ask who gains and who pays under a rule before defending it.'],
	['Collective ideals need limits', 'Hegel’s state; volksgeist and the Holocaust', 'Wariness when someone says “the nation” demands a result.']
];

export const FIVE: string[] = [
	'Natural law and positivism argue over morals and force; both start from the individual.',
	'The social sciences moved the question to society: law is a product and a tool of collective life.',
	'The Historical School finds law in a people’s past; the Sociological School shapes law for a society’s future.',
	'Holmes and Pound made judges visible as lawmakers who weigh interests, and Philippine cases follow them.',
	'Every school has a danger: morals without agreement, force without justice, tradition without progress, discretion without limits.'
];

export const CAREFUL: string[] = [
	'Lesson 10 credits Holmes with “problems of the penumbra.” That exact phrase is usually tied to Hart. Holmes does use “penumbra” in *Springer*, quoted in Floresca, so the idea is safely his too.',
	'The paragraph beginning “Hart was a follower of Hume’s distinction” goes on to describe Kelsen’s chain of norms. Treat the is/ought point and the Grundnorm as Kelsen’s argument.',
	'Hobbes’s well-known phrase is that life in the state of nature was “solitary, poor, nasty, brutish, and short.”'
];
