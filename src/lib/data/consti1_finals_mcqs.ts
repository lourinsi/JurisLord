import type { McqQuestion, ModuleTopic } from '$lib/types';

export const constiFinalsTopic: ModuleTopic = {
	id: 'finals',
	name: 'FINALS',
	eyebrow: 'COMPREHENSIVE MASTER DRILL · 267 ITEMS',
	desc: '267 multiple-choice and true-or-false questions based on Justice Isagani A. Cruz’s Philippine Political Law, the 1987 Philippine Constitution, and Supreme Court jurisprudence.'
};

export const constiFinalsCasesTopic: ModuleTopic = {
	id: 'finals_cases',
	name: 'CASES',
	eyebrow: 'FINALS · CASES · 90 ITEMS',
	desc: '90 landmark Supreme Court case questions (Chapters 12–19) — also included in the FINALS filter.'
};

export const constiFinalsCasesWatchFor = `<strong>Watch for: paired cases that flip or qualify each other (Q121–Q210).</strong>
<ul>
  <li><strong>Standing &amp; Judicial Review:</strong> <em>Kilosbayan v. Guingona</em> (relaxed standing) vs. <em>Kilosbayan v. Morato</em> (strict standing); <em>David v. Arroyo</em> (mootness exceptions); <em>Romualdez v. COMELEC</em> (no facial challenge to penal election laws).</li>
  <li><strong>Judicial Independence &amp; Fiscal Autonomy:</strong> <em>Perfecto v. Meer / Endencia</em> vs. <em>Nitafan v. CIR</em> (judicial income tax); <em>Borromeo / Mahawan</em> (minute resolutions) vs. <em>Yao</em> (void decisions); <em>De Castro v. JBC</em> (90-day SC vacancy rule prevails over Sec. 15 midnight ban).</li>
  <li><strong>Constitutional Commissions &amp; Elections:</strong> <em>Gaminde v. COA</em> (Feb. 2 reckoning date); <em>Funa v. Villar</em> (7-year aggregate cap); <em>Lanot</em> vs. <em>Penera</em> (campaign period start); <em>League of Cities v. COMELEC</em> (2011 final resolution upholding the 16 cityhood laws).</li>
</ul>`;

export const constiFinalsWatchFor = `<strong>Watch for: combination choices (A–G), numbers &amp; voting thresholds, and landmark jurisprudence traps.</strong>
<ul>
  <li><strong>Part 1 (Judicial Department — Art. VIII, Q1–Q25):</strong> SC has 15 Members (CJ + 14 Associate Justices) sitting En Banc or in divisions of 3, 5, or 7 (never even numbers). Vacancies filled within 90 days (exception to Art. VII, Sec. 15 midnight ban under <em>De Castro v. JBC</em>). Congress gets only 1 representative with 1 vote in the JBC (<em>Chavez v. JBC</em>). Decision periods (24m SC / 12m collegiate / 3m lower) are directory on adjudicative authority (<em>Sesbreño v. CA</em>).</li>
  <li><strong>Part 2 (Constitutional Commissions — Art. IX, Q26–Q75):</strong> Staggered 7-year terms without reappointment run from Feb. 2, 1987 (<em>Gaminde v. COA</em>); promotion of a Commissioner to Chairman cannot exceed 7 years aggregate tenure (<em>Funa v. Villar</em>). No acting Chairman by presidential designation (<em>Brillantes v. Yorac</em>). COMELEC must hear election cases in Division first before En Banc on MR (<em>Cagas v. COMELEC</em>). Decisions require a majority vote of <em>all</em> Members within 60 days; certiorari to SC within 30 days.</li>
  <li><strong>Part 3 (Accountability, Amendments &amp; Elections — Arts. V, XI &amp; XVII, Q76–Q95):</strong> Impeachment is initiated by filing + referral to the Justice Committee (<em>Francisco</em>); multiple complaints referred simultaneously count as one proceeding (<em>Gutierrez</em>). 1/3 House vote to impeach; 2/3 Senate vote to convict. People’s Initiative applies to amendments only, never revisions under the quantitative/qualitative tests (<em>Lambino</em>), and amendments must be submitted in a single plebiscite 60–90 days after approval (<em>Tolentino</em>).</li>
  <li><strong>Part 4 (General Principles to Powers of the President — Q96–Q120):</strong> Change of sovereignty abrogates political laws but preserves municipal laws (<em>People v. Perfecto</em>); belligerent occupation suspends only the exercise of sovereignty while allegiance continues (<em>Laurel v. Misa</em>). Valid delegation requires both the Completeness Test and Sufficient Standard Test concurrently (<em>Pelaez</em>). Congress voting jointly by a majority of all its Members may revoke martial law or suspension of the writ.</li>
  <li><strong>Part 5 (Jurisprudence Master Drill — Ch. 12–19, Q121–Q210):</strong> Watch paired cases that flip or qualify each other — <em>Kilosbayan v. Guingona</em> (relaxed standing) vs. <em>Kilosbayan v. Morato</em> (strict standing); <em>Perfecto v. Meer / Endencia</em> vs. <em>Nitafan v. CIR</em> (judicial income tax); <em>Lanot</em> vs. <em>Penera</em> (campaign period start); <em>Borromeo / Mahawan</em> (minute resolutions) vs. <em>Yao</em> (void decisions); and <em>League of Cities v. COMELEC</em> (2011 final resolution upholding the 16 cityhood laws).</li>
</ul>`;

const P1 = 'FINALS — Part 1: The Judicial Department (Ch. 12)';
const P2 = 'FINALS — Part 2: The Constitutional Commissions (Ch. 13–16)';
const P3 = 'FINALS — Part 3: Accountability, Amendments & Elections (Ch. 17–19)';
const P4 = 'FINALS — Part 4: General Principles to Powers of the President (Ch. 1–11)';
const P6_1 = 'FINALS — Supplemental I: Judicial Department & Supreme Court';
const P6_2 = 'FINALS — Supplemental II: Constitutional Commissions (Structure & Procedure)';
const P6_3 = 'FINALS — Supplemental III: CSC, COA, COMELEC, Certiorari & OSG';
const P6_4 = 'FINALS — Supplemental IV: Accountability, Impeachment & Ombudsman';
const P6_5 = 'FINALS — Supplemental V: Delegation, Congress, Electoral Tribunals, Martial Law & LGUs';
const P5_12 = 'CASES (FINALS) — Ch. 12: Judicial Department';
const P5_13 = 'CASES (FINALS) — Ch. 13: Constitutional Commissions & CSC';
const P5_14 = 'CASES (FINALS) — Ch. 14: Commission on Elections';
const P5_15 = 'CASES (FINALS) — Ch. 15: Commission on Audit';
const P5_16 = 'CASES (FINALS) — Ch. 16/17: Accountability of Public Officers';
const P5_17 = 'CASES (FINALS) — Ch. 17/18: Amendment or Revision';
const P5_18 = 'CASES (FINALS) — Ch. 18/19: National Economy, Citizenship & Elections';

export const constiFinalsMcqs: McqQuestion[] = [
	// =========================================================================
	// PART 1: CHAPTER 12 — THE JUDICIAL DEPARTMENT (Q1–Q25)
	// =========================================================================
	{
		id: 'consti1:finals:1',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question:
			'Under Article VIII, Section 1, judicial power includes the duty of the courts of justice to settle actual controversies and to determine whether there has been grave abuse of discretion amounting to lack or excess of jurisdiction on the part of:',
		options: [
			'The Legislative Department',
			'The Executive Department',
			'Any branch or instrumentality of the Government',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the expanded certiorari jurisdiction applies directly to unconstitutional acts of Congress.',
			'True because official acts, orders, and proclamations of the President and Cabinet are reviewable.',
			'True because this is the verbatim constitutional scope covering all public departments and agencies.',
			'False because option b is also true.',
			'False because option c is equally an explicit constitutional category.',
			'True because all three options accurately articulate the scope of expanded judicial power.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article VIII, Section 1, Paragraph 2 of the 1987 Philippine Constitution provides that judicial power includes the duty of the courts of justice to settle actual controversies involving rights which are legally demandable and enforceable, and to determine whether or not there has been a grave abuse of discretion amounting to lack or excess of jurisdiction on the part of any branch or instrumentality of the Government. This expanded concept of judicial review was deliberately incorporated to restrict the invocation of the political question doctrine and ensure that no governmental act remains completely immune from constitutional scrutiny when tainted with arbitrariness or grave abuse (Tañada v. Angara, G.R. No. 118295, 1997; Francisco v. House of Representatives, 415 SCRA 44, 2003).',
		legalBasis: 'Art. VIII, Sec. 1, par. 2, 1987 Constitution; Tañada v. Angara (1997); Francisco v. House of Representatives (2003)'
	},
	{
		id: 'consti1:finals:2',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question:
			"Under Article VIII, Section 4(1), the Supreme Court is composed of and may sit in:",
		options: [
			"A Chief Justice and fifteen Associate Justices",
			"Divisions of three, five, or nine Members",
			"Divisions of four or six Members",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the Supreme Court is composed of a Chief Justice and fourteen (not fifteen) Associate Justices, totaling fifteen members.",
			"False because divisions may only consist of three, five, or seven Members—never nine.",
			"False because even-numbered divisions are not recognized by the fundamental law.",
			"False because options a and c are both unconstitutional.",
			"False because options a and b both misstate Section 4(1).",
			"False because options a, b, and c are all false.",
			"True because none of the listed compositions or division sizes match Article VIII, Section 4(1)."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article VIII, Section 4(1) provides: \"The Supreme Court shall be composed of a Chief Justice and fourteen Associate Justices. It may sit en banc or in its discretion, in division of three, five, or seven Members. Any vacancy shall be filled within ninety days from the occurrence thereof.\" Option a erroneously states fifteen Associate Justices (which would total sixteen members), option b erroneously includes nine-member divisions, and option c lists prohibited even-numbered divisions.",
		legalBasis:
			"Art. VIII, Sec. 4(1), 1987 Constitution"
	},
	{
		id: 'consti1:finals:3',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question: 'Under Article VIII, Section 4(1), any vacancy in the Supreme Court must be filled by the President within:',
		options: [
			'30 days from occurrence',
			'60 days from occurrence',
			'90 days from occurrence',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because thirty days is not the period prescribed for judicial appointments.',
			'False because sixty days applies to deciding commission cases, not filling Supreme Court seats.',
			'True because Section 4(1) explicitly establishes a ninety-day deadline for Supreme Court vacancies.',
			'False because option a is incorrect.',
			'False because options a and b are incorrect.',
			'False because only option c (90 days) is the constitutional period.',
			'False because option c is true.'
		],
		correctIndex: 2,
		key: '90 days from occurrence',
		explanation:
			'C (90 days from occurrence). Article VIII, Section 4(1) explicitly commands that "Any vacancy shall be filled within ninety days from the occurrence thereof." In De Castro v. Judicial and Bar Council (G.R. No. 191002, March 17, 2010), the Supreme Court ruled that this ninety-day mandate operates as an exception to the midnight appointments ban under Article VII, Section 15, obligating the President to fill vacancies in the Supreme Court within the prescribed period.',
		legalBasis: 'Art. VIII, Sec. 4(1), 1987 Constitution; De Castro v. Judicial and Bar Council (2010)'
	},
	{
		id: 'consti1:finals:4',
		topicId: 'finals',
		topic: P1,
		tag: 'requisites',
		question:
			"Under Article VIII, Section 7(1), to be appointed a Member of the Supreme Court, a person must be:",
		options: [
			"A citizen of the Philippines, whether natural-born or naturalized",
			"At least 35 years of age at the time of appointment",
			"A judge of a lower court or engaged in law practice in the Philippines for at least 10 years",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because naturalized citizens are disqualified; appointees must strictly be natural-born citizens.",
			"False because the minimum constitutional age for Supreme Court Justices is 40, not 35.",
			"False because Supreme Court Justices must have at least 15 years (not 10) of judicial service or law practice.",
			"False because both a and c misstate the constitutional qualifications.",
			"False because both a and b are constitutionally inaccurate.",
			"False because all three options misstate Section 7(1).",
			"True because none of the choices accurately state the mandatory qualifications under Section 7(1)."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article VIII, Section 7(1) states: \"No person shall be appointed Member of the Supreme Court or any lower collegiate court unless he is a natural-born citizen of the Philippines. A Member of the Supreme Court must be at least forty years of age, and must have been for fifteen years or more a judge of a lower court or engaged in the practice of law in the Philippines.\" All three choices fail these requirements by allowing naturalized citizens, lowering the age to 35, and reducing required legal experience to 10 years.",
		legalBasis:
			"Art. VIII, Sec. 7(1), 1987 Constitution"
	},
	{
		id: 'consti1:finals:5',
		topicId: 'finals',
		topic: P1,
		tag: 'requisites',
		question:
			'Under Article VIII, Section 7(1)–(2), the non-negotiable minimum constitutional requirements for a person to be appointed judge of a lower trial court (e.g., RTC or MTC) include:',
		options: [
			'Citizen of the Philippines',
			'Member of the Philippine Bar',
			'Holder of an advanced postgraduate law degree (LL.M. or S.J.D.)',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because naturalized citizens may qualify unless a statute requires natural-born status.',
			'True because membership in the bar is an irreducible constitutional baseline.',
			'False because an advanced law degree is not a constitutional qualification.',
			'False because option c is not constitutionally required.',
			'True because both citizenship and bar membership are the minimum constitutional baselines.',
			'False because option c is not constitutionally required.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article VIII, Section 7(2) provides: "The Congress shall prescribe the qualifications of judges of lower courts, but no person may be appointed judge thereof unless he is a citizen of the Philippines and a member of the Philippine Bar." While Congress may prescribe additional statutory criteria under Batas Pambansa Blg. 129, it cannot dispense with Philippine citizenship and Bar membership.',
		legalBasis: 'Art. VIII, Sec. 7(2), 1987 Constitution; B.P. Blg. 129'
	},
	{
		id: 'consti1:finals:6',
		topicId: 'finals',
		topic: P1,
		tag: 'requisites',
		question: 'Under Article VIII, Section 7(3), a Member of the Judiciary must be a person of proven:',
		options: [
			'Competence and integrity',
			'Probity',
			'Independence',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because these are part of the moral and professional qualifications under Section 7(3).',
			'True because probity is explicitly required by the Constitution.',
			'True because institutional independence is a mandatory qualification.',
			'False because option b is also a constitutional requirement.',
			'False because option c is equally an express requirement.',
			'True because all three options accurately articulate the verbatim constitutional standards.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article VIII, Section 7(3) explicitly dictates: "A Member of the Judiciary must be a person of proven competence, integrity, probity, and independence." In Republic v. Sereno (G.R. No. 237428, May 11, 2018), the Supreme Court emphasized that these four qualifications are continuing constitutional requirements for judicial office.',
		legalBasis: 'Art. VIII, Sec. 7(3), 1987 Constitution; Republic v. Sereno (2018)'
	},
	{
		id: 'consti1:finals:7',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question: 'Under Article VIII, Section 8(1), which public officials serve as ex officio members of the Judicial and Bar Council?',
		options: [
			'The Chief Justice as ex officio Chairman',
			'The Secretary of Justice',
			'A representative of the Congress',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the Chief Justice heads the Council ex officio.',
			'True because the Justice Secretary represents the Executive branch ex officio.',
			'True because Congress is entitled to a representative ex officio.',
			'False because option b is also an ex officio member.',
			'False because option c is equally an ex officio member.',
			'True because all three options accurately state the ex officio members under Section 8(1).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article VIII, Section 8(1) provides: "A Judicial and Bar Council is hereby created under the supervision of the Supreme Court, composed of the Chief Justice as ex officio Chairman, the Secretary of Justice, and a representative of the Congress as ex officio Members, a representative of the Integrated Bar, a professor of law, a retired Member of the Supreme Court, and a representative of the private sector."',
		legalBasis: 'Art. VIII, Sec. 8(1), 1987 Constitution'
	},
	{
		id: 'consti1:finals:8',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question: 'Under Article VIII, Section 8(1), which sectors are represented by regular members on the Judicial and Bar Council?',
		options: [
			'The Integrated Bar of the Philippines',
			'A professor of law and a retired Member of the Supreme Court',
			'The private sector',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the organized bar is entitled to a regular member.',
			'True because legal academia and the retired judiciary have seats.',
			'True because the private sector is entitled to one regular member.',
			'False because option b also lists regular members.',
			'False because option c is equally a regular member.',
			'True because all three options accurately articulate the four regular members.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article VIII, Section 8(1) enumerates the four regular members appointed by the President with Commission on Appointments consent: (1) a representative of the Integrated Bar of the Philippines, (2) a professor of law, (3) a retired Member of the Supreme Court, and (4) a representative of the private sector.',
		legalBasis: 'Art. VIII, Sec. 8(1), 1987 Constitution'
	},
	{
		id: 'consti1:finals:9',
		topicId: 'finals',
		topic: P1,
		tag: 'jurisprudence',
		question:
			'In Chavez v. Judicial and Bar Council (2012 and 2013), the Supreme Court ruled on congressional representation in the JBC by holding that:',
		options: [
			'The Senate and the House are each entitled to seat one member with one full vote',
			'Congress as a bicameral institution is entitled to only one representative with one vote',
			'The JBC may divide one vote into half-votes (1/2 vote each) between the two chambers',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because giving two votes to Congress was declared unconstitutional.',
			'True because the constitutional term "a representative of the Congress" is singular.',
			'False because fractional voting was rejected by the Court.',
			'False because options a and c were both disallowed.',
			'False because option a was struck down as unconstitutional.',
			'False because only option b is constitutional.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'Congress as a bicameral institution is entitled to only one representative with one vote',
		explanation:
			'B (Congress as a bicameral institution is entitled to only one representative with one vote). In Chavez v. Judicial and Bar Council (676 SCRA 579, 2012; Resolution on Motion for Reconsideration, 696 SCRA 496, 2013), the Supreme Court held that the phrase "a representative of the Congress" in Section 8(1) is singular. Permitting one Senator and one Representative to sit with one full vote each gave Congress two votes, altering the constitutional composition of the JBC. Congress is entitled to only one representative and one vote.',
		legalBasis: 'Art. VIII, Sec. 8(1), 1987 Constitution; Chavez v. Judicial and Bar Council (2012, 2013)'
	},
	{
		id: 'consti1:finals:10',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question:
			"Under Article VIII, Section 9, appointments of Justices of the Supreme Court and judges of lower courts:",
		options: [
			"Are made by the President from a list of at least five nominees prepared by the JBC",
			"Require confirmation by the Commission on Appointments",
			"Must be issued within sixty (60) days from the submission of the list for lower courts",
			"a and b are true",
			"a and c are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the JBC shortlist must contain at least three (not five) nominees per vacancy.",
			"False because judicial appointments do not undergo Commission on Appointments confirmation.",
			"False because Section 9 mandates a ninety-day (not sixty-day) period for lower court appointments.",
			"False because both a and b are inaccurate.",
			"False because both a and c misstate the constitutional numbers.",
			"False because options a, b, and c are all false.",
			"True because none of the statements accurately state Article VIII, Section 9."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article VIII, Section 9 provides: \"The Members of the Supreme Court and judges of lower courts shall be appointed by the President from a list of at least three nominees prepared by the Judicial and Bar Council for every vacancy. Such appointments need no confirmation. For the lower courts, the President shall issue the appointments within ninety days from the submission of the list.\" Every option contains a constitutional error (five instead of three nominees, CA confirmation instead of none, and 60 instead of 90 days).",
		legalBasis:
			"Art. VIII, Sec. 9, 1987 Constitution"
	},
	{
		id: 'consti1:finals:11',
		topicId: 'finals',
		topic: P1,
		tag: 'requisites',
		question: 'Under Article VIII, Section 5(5), what limitations govern the procedural rule-making power of the Supreme Court?',
		options: [
			'Rules shall provide a simplified and inexpensive procedure for the speedy disposition of cases',
			'Rules shall be uniform for all courts of the same grade',
			'Rules shall not diminish, increase, or modify substantive rights',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because this is an express constitutional goal under Section 5(5).',
			'True because procedural uniformity across equal-level courts is mandated.',
			'True because procedural rules cannot alter substantive rights created by statute.',
			'False because option b is also a constitutional limit.',
			'False because option c is equally an express constitutional limitation.',
			'True because all three options accurately articulate the limitations under Section 5(5).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article VIII, Section 5(5) authorizes the Supreme Court to promulgate rules of pleading, practice, and procedure in all courts, providing that: "Such rules shall provide a simplified and inexpensive procedure for the speedy disposition of cases, shall be uniform for all courts of the same grade, and shall not diminish, increase, or modify substantive rights" (Abellana v. Marave, 57 SCRA 106; Echegaray v. Secretary of Justice, 301 SCRA 96).',
		legalBasis: 'Art. VIII, Sec. 5(5), 1987 Constitution; Echegaray v. Secretary of Justice'
	},
	{
		id: 'consti1:finals:12',
		topicId: 'finals',
		topic: P1,
		tag: 'exceptions',
		question: 'Under Article VIII, Section 6 and Section 11, the administrative supervision and discipline of lower court judges:',
		options: [
			'Belongs exclusively to the Supreme Court',
			'Authorizes dismissal of a lower court judge by a simple majority vote of an SC Division',
			'Permits the Ombudsman to investigate judges for official judicial acts without SC clearance',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because no other branch or agency shares administrative authority over courts.',
			'False because dismissal requires a vote of the Court sitting En Banc.',
			'False because the Ombudsman must secure prior referral/clearance from the SC under Maceda v. Vasquez.',
			'False because option c violates Maceda v. Vasquez.',
			'False because option b violates Section 11.',
			'False because options b and c are false.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Belongs exclusively to the Supreme Court',
		explanation:
			'A (Belongs exclusively to the Supreme Court). Article VIII, Section 6 vests exclusive administrative supervision over all courts in the Supreme Court. Section 11 specifies that no lower court judge shall be dismissed except by the Court sitting En Banc. In Maceda v. Vasquez (221 SCRA 464, 1993), the Court ruled that the Ombudsman cannot initiate an investigation against a judge for acts related to judicial functions without the Supreme Court first determining that an administrative violation was committed.',
		legalBasis: 'Art. VIII, Secs. 6 & 11, 1987 Constitution; Maceda v. Vasquez (1993)'
	},
	{
		id: 'consti1:finals:13',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question:
			"Under Article VIII, Section 15(1), what are the maximum periods prescribed to decide or resolve cases from the date of submission?",
		options: [
			"18 months for the Supreme Court",
			"6 months for all lower collegiate courts",
			"60 days for all other lower courts",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because Section 15(1) assigns 24 months (not 18) to the Supreme Court.",
			"False because lower collegiate courts (CA, CTA, Sandiganbayan) are given 12 months (not 6).",
			"False because trial courts are given 3 months (not 60 days; 60 days applies to Constitutional Commissions).",
			"False because both a and c are incorrect.",
			"False because both a and b are incorrect.",
			"False because none of the listed timeframes match Section 15(1).",
			"True because the correct constitutional periods are 24 months, 12 months, and 3 months."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article VIII, Section 15(1) provides: \"All cases or matters filed after the effectivity of this Constitution must be decided or resolved within twenty-four months from date of submission for the Supreme Court, and, unless reduced by the Supreme Court, twelve months for all lower collegiate courts, and three months for all other lower courts.\" None of the choices match the 24–12–3 month periods.",
		legalBasis:
			"Art. VIII, Sec. 15(1), 1987 Constitution"
	},
	{
		id: 'consti1:finals:14',
		topicId: 'finals',
		topic: P1,
		tag: 'jurisprudence',
		question:
			'Under Sesbreño v. Court of Appeals (2008), what happens if a court fails to decide a case within the constitutional periods set in Article VIII, Section 15?',
		options: [
			'The court immediately forfeits jurisdiction over the controversy',
			'The judgment rendered after the expiration of the period is null and void',
			"The constitutional periods are directory upon the court's adjudicative authority",
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because the expiration of the period does not divest the court of jurisdiction.',
			'False because subsequent judgments remain valid and enforceable.',
			'True because the periods direct judicial action without invalidating late decisions or divesting jurisdiction.',
			'False because option a is incorrect (jurisdiction is retained).',
			'False because options a and b are incorrect.',
			'False because options a and b are incorrect.',
			'False because option c is true.'
		],
		correctIndex: 2,
		key: 'The constitutional periods are directory upon the court\'s adjudicative authority',
		explanation:
			'C (The constitutional periods are directory upon the court\'s adjudicative authority). In Sesbreño v. Court of Appeals (556 SCRA 715, 2008), the Supreme Court reiterated that constitutional periods for deciding cases are directory upon the court\'s adjudicative power. Failure to render a decision within the prescribed period does not strip the court of jurisdiction nor render the belated decision void, although the delayed judge may face administrative sanctions.',
		legalBasis: 'Art. VIII, Sec. 15, 1987 Constitution; Sesbreño v. Court of Appeals (2008)'
	},
	{
		id: 'consti1:finals:15',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question:
			"Under Article VIII, Section 3, the fiscal autonomy of the Judiciary guarantees that:",
		options: [
			"Appropriations for the Judiciary may be reduced by Congress below the previous year's amount during fiscal emergencies",
			"Approved judicial appropriations shall be released upon discretionary clearance by the Department of Budget and Management",
			"The Judiciary is exempt from submitting an annual proposed budget to Congress",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because appropriations for the Judiciary may never be reduced by the legislature below the previous year's amount.",
			"False because approved funds must be automatically and regularly released without DBM impoundment or conditions.",
			"False because the Judiciary must still submit its proposed annual budget to Congress.",
			"False because both a and c are inaccurate.",
			"False because both a and b contradict judicial fiscal autonomy.",
			"False because options a, b, and c are all false.",
			"True because none of the statements accurately express fiscal autonomy under Section 3."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article VIII, Section 3 provides: \"The Judiciary shall enjoy fiscal autonomy. Appropriations for the Judiciary may not be reduced by the legislature below the amount appropriated for the previous year and, after approval, shall be automatically and regularly released.\" (Bengzon v. Drilon, 208 SCRA 133, 1992). None of the choices accurately state these guarantees.",
		legalBasis:
			"Art. VIII, Sec. 3, 1987 Constitution; Bengzon v. Drilon (1992)"
	},
	{
		id: 'consti1:finals:16',
		topicId: 'finals',
		topic: P1,
		tag: 'requisites',
		question: 'Under Article VIII, Section 4(2), the Supreme Court MUST hear and decide a case En Banc when it involves:',
		options: [
			'The constitutionality of a treaty, international or executive agreement, or law',
			'The constitutionality, application, or operation of presidential decrees, proclamations, or orders',
			'The constitutionality of a local ordinance',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because treaty and statutory constitutionality questions are reserved for the En Banc.',
			'True because presidential edicts of general application must be evaluated En Banc.',
			'True because Section 4(2) includes ordinances among matters required to be heard En Banc.',
			'False because option b is also listed under Section 4(2).',
			'False because option c is equally included in the text.',
			'True because all three categories are explicitly enumerated in Section 4(2).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article VIII, Section 4(2) provides: "All cases involving the constitutionality of a treaty, international or executive agreement, or law, which shall be heard by the Supreme Court en banc, and all other cases which under the Rules of Court are required to be heard en banc, including those involving the constitutionality, application, or operation of presidential decrees, proclamations, orders, instructions, ordinances, and other regulations, shall be decided with the concurrence of a majority of the Members who actually took part in the deliberations on the issues in the case and voted thereon."',
		legalBasis: 'Art. VIII, Sec. 4(2), 1987 Constitution'
	},
	{
		id: 'consti1:finals:17',
		topicId: 'finals',
		topic: P1,
		tag: 'exceptions',
		question: 'Under Article VIII, Section 4(3), a legal doctrine or principle of law laid down by the Supreme Court:',
		options: [
			'In division may be modified or reversed by the same division in a subsequent case',
			'Can only be modified or reversed by the Supreme Court sitting En Banc',
			'May be reversed by the Court of Appeals if the doctrine was established more than twenty years ago',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because no division can modify or reverse a doctrine laid down by the Court.',
			'True because doctrine reversal is an exclusive prerogative of the En Banc.',
			'False because lower courts cannot overturn Supreme Court doctrines.',
			'False because options a and c are unconstitutional.',
			'False because option a violates Section 4(3).',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'Can only be modified or reversed by the Supreme Court sitting En Banc',
		explanation:
			'B (Can only be modified or reversed by the Supreme Court sitting En Banc). Article VIII, Section 4(3) explicitly dictates: "Provided, that no doctrine or principle of law laid down by the court in a decision rendered en banc or in division may be modified or reversed except by the court sitting en banc."',
		legalBasis: 'Art. VIII, Sec. 4(3), 1987 Constitution'
	},
	{
		id: 'consti1:finals:18',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question: 'Under Article VIII, Section 5(1), the Supreme Court exercises original jurisdiction over:',
		options: [
			'Cases affecting ambassadors, other public ministers, and consuls',
			'Petitions for certiorari, prohibition, mandamus, quo warranto, and habeas corpus',
			'Actions for boundary disputes between municipalities',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because diplomatic representatives fall under original jurisdiction.',
			'True because extraordinary prerogative writs fall under original jurisdiction.',
			'False because municipal boundary disputes fall under the Local Government Code and trial courts.',
			'False because option c is excluded.',
			'True because both diplomatic cases and extraordinary writs are covered.',
			'False because municipal boundary disputes are excluded.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article VIII, Section 5(1) grants the Supreme Court original jurisdiction over "cases affecting ambassadors, other public ministers and consuls, and over petitions for certiorari, prohibition, mandamus, quo warranto, and habeas corpus." Under the doctrine of hierarchy of courts, this jurisdiction over extraordinary writs is shared concurrently with Regional Trial Courts and the Court of Appeals (Gios-Samar v. DOTC, G.R. No. 217158, 2019).',
		legalBasis: 'Art. VIII, Sec. 5(1), 1987 Constitution; Gios-Samar v. DOTC (2019)'
	},
	{
		id: 'consti1:finals:19',
		topicId: 'finals',
		topic: P1,
		tag: 'requisites',
		question: 'Under Article VIII, Section 14, what requirements are constitutionally mandated for judicial decisions and resolutions?',
		options: [
			'Full decisions must express clearly and distinctly the facts and the law on which they are based',
			'Denials of petitions for review or motions for reconsideration must state the legal basis thereof',
			'All judicial decisions must be signed by the President before becoming executory',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Paragraph 1 requires explicit factual and legal findings.',
			'True because Paragraph 2 requires stating the legal basis for denials.',
			'False because the executive has no role in signing court judgments.',
			'False because option c is completely inaccurate.',
			'True because both statements a and b accurately reflect Section 14.',
			'False because option c is completely inaccurate.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article VIII, Section 14 provides: "No decision shall be rendered by any court without expressing therein clearly and distinctly the facts and the law on which it is based. No petition for review or motion for reconsideration of a decision of the court shall be refused due course or denied without stating the legal basis thereof."',
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution'
	},
	{
		id: 'consti1:finals:20',
		topicId: 'finals',
		topic: P1,
		tag: 'exceptions',
		question: 'Under Article VIII, Section 12, what is the rule regarding the designation of judges to non-judicial agencies?',
		options: [
			'Judges may be designated to executive administrative agencies provided they receive no extra salary',
			'Members of the Supreme Court and lower courts shall not be designated to any agency performing quasi-judicial or administrative functions',
			'Trial court judges may sit on provincial election canvassing boards as regular members',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because non-judicial designations are prohibited regardless of salary.',
			'True because Section 12 contains an absolute prohibition against non-judicial designations.',
			'False because canvassing boards perform administrative election functions.',
			'False because options a and c violate Section 12.',
			'False because option a violates Section 12.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'Members of the Supreme Court and lower courts shall not be designated to any agency performing quasi-judicial or administrative functions',
		explanation:
			'B (Members of the Supreme Court and lower courts shall not be designated to any agency performing quasi-judicial or administrative functions). Article VIII, Section 12 explicitly dictates: "The Members of the Supreme Court and of other courts established by law shall not be designated to any agency performing quasi-judicial or administrative functions." In In re Judge Manzano (166 SCRA 246), the Court held that designating a judge to an executive administrative committee undermines judicial independence and violates the separation of powers.',
		legalBasis: 'Art. VIII, Sec. 12, 1987 Constitution; In re Judge Manzano (1988)'
	},
	{
		id: 'consti1:finals:21',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question:
			'Under Article VIII, Section 11, Members of the Supreme Court and judges of lower courts hold office during good behavior until they reach the mandatory retirement age of seventy (70) years or become incapacitated to discharge the duties of their office.',
		options: ['True', 'False'],
		optionExplanations: [
			'This is an exact transcription of the constitutional tenure and retirement mandate under Section 11.',
			'Incorrect because seventy years is the mandatory constitutional retirement age for the judiciary.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Article VIII, Section 11 provides: "The Members of the Supreme Court and judges of lower courts shall hold office during good behavior until they reach the age of seventy years or become incapacitated to discharge the duties of their office."',
		legalBasis: 'Art. VIII, Sec. 11, 1987 Constitution'
	},
	{
		id: 'consti1:finals:22',
		topicId: 'finals',
		topic: P1,
		tag: 'exceptions',
		question:
			'Under Article VIII, Section 2, Congress has the plenary constitutional authority to pass a law reorganizing the judiciary even if such law undermines the security of tenure of incumbent judges.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because the Constitution expressly forbids passing reorganization laws that undermine security of tenure.',
			'Correct because Section 2 explicitly prohibits undermining security of tenure through judicial reorganization.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article VIII, Section 2 explicitly provides: "The Congress shall have the power to define, prescribe, and apportion the jurisdiction of the various courts, but may not deprive the Supreme Court of its jurisdiction over cases enumerated in Section 5 hereof. No law shall be passed reorganizing the Judiciary when it undermines the security of tenure of its Members" (De la Llana v. Alba, 112 SCRA 294).',
		legalBasis: 'Art. VIII, Sec. 2, 1987 Constitution; De la Llana v. Alba'
	},
	{
		id: 'consti1:finals:23',
		topicId: 'finals',
		topic: P1,
		tag: 'exceptions',
		question:
			'Under Article VIII, Section 10, the salary of the Chief Justice and Associate Justices of the Supreme Court, and of judges of lower courts, may be decreased by legislative enactment during their continuance in office.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because decreasing judicial salaries during tenure is strictly unconstitutional.',
			'Correct because Section 10 contains an express guarantee against the diminution of judicial compensation.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article VIII, Section 10 states: "The salary of the Chief Justice and of the Associate Justices of the Supreme Court, and of judges of lower courts shall be fixed by law. During their continuance in office, their salary shall not be decreased." While judges pay general income taxes (Nitafan v. CIR, 152 SCRA 284), Congress cannot enact targeted laws reducing base judicial compensation.',
		legalBasis: 'Art. VIII, Sec. 10, 1987 Constitution; Nitafan v. CIR (1987)'
	},
	{
		id: 'consti1:finals:24',
		topicId: 'finals',
		topic: P1,
		tag: 'exceptions',
		question:
			'Under Article VI, Section 30, Congress may pass a law increasing the appellate jurisdiction of the Supreme Court without the advice and concurrence of the Court.',
		options: ['True', 'False'],
		optionExplanations: [
			"Incorrect because expanding the Supreme Court's appellate jurisdiction strictly requires its advice and concurrence.",
			'Correct because Article VI, Section 30 explicitly prohibits expanding appellate jurisdiction without Court concurrence.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article VI, Section 30 provides: "No law shall be passed increasing the appellate jurisdiction of the Supreme Court as provided in this Constitution without its advice and concurrence."',
		legalBasis: 'Art. VI, Sec. 30, 1987 Constitution'
	},
	{
		id: 'consti1:finals:25',
		topicId: 'finals',
		topic: P1,
		tag: 'jurisprudence',
		question:
			'In Vargas v. Rilloraza (80 Phil. 297), the Supreme Court ruled that Congress cannot create an ad hoc temporary parallel Supreme Court or designate temporary justices to sit in place of disqualified regular justices.',
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because the Constitution establishes "one Supreme Court" whose membership cannot be altered by statute.',
			'Incorrect because creating an ad hoc substitute Supreme Court was held unconstitutional.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. In Vargas v. Rilloraza (80 Phil. 297, 1948), the Supreme Court invalidated Section 14 of the People\'s Court Act, which authorized the President to designate temporary judges to sit as a special Division of the Supreme Court when regular justices were disqualified. The Court ruled that the Constitution vests judicial power in "one Supreme Court"; Congress has no power to create an alternate or temporary Supreme Court.',
		legalBasis: 'Art. VIII, Sec. 1, 1987 Constitution; Vargas v. Rilloraza (1948)'
	},

	// =========================================================================
	// PART 2: CHAPTERS 13–16 — THE CONSTITUTIONAL COMMISSIONS (Q26–Q75)
	// =========================================================================
	{
		id: 'consti1:finals:26',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			"Under Article IX-A, Section 1, the Independent Constitutional Commissions are:",
		options: [
			"The Commission on Human Rights",
			"The Commission on Appointments",
			"The Office of the Ombudsman",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the CHR is an independent office under Article XIII, not an Article IX Constitutional Commission.",
			"False because the Commission on Appointments is a constitutional legislative body under Article VI, Section 18.",
			"False because the Office of the Ombudsman is an independent constitutional office under Article XI.",
			"False because neither the CHR nor the Ombudsman is an Article IX Commission.",
			"False because neither a nor b is an Article IX Commission.",
			"False because none of these three bodies are Article IX Constitutional Commissions.",
			"True because the three Article IX Constitutional Commissions are strictly the CSC, COMELEC, and COA."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article IX-A, Section 1 provides: \"The Constitutional Commissions, which shall be independent, are the Civil Service Commission, the Commission on Elections, and the Commission on Audit.\" While the CHR (Art. XIII), Commission on Appointments (Art. VI), and Ombudsman (Art. XI) are constitutional bodies, none of them are Article IX Constitutional Commissions.",
		legalBasis:
			"Art. IX-A, Sec. 1, 1987 Constitution"
	},
	{
		id: 'consti1:finals:27',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question: 'Under Article IX-A, Section 2, no member of a Constitutional Commission shall, during his tenure:',
		options: [
			'Hold any other office or employment',
			'Engage in the practice of any profession',
			'Be financially interested in any government contract, franchise, or privilege',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because dual office-holding is strictly forbidden.',
			'True because practicing law or any profession is banned during tenure.',
			'True because financial interest in public contracts or franchises is prohibited.',
			'False because option b is also an express constitutional prohibition.',
			'False because option c is equally prohibited.',
			'True because all three options accurately articulate the strict inhibitions under Section 2.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article IX-A, Section 2 states: "No member of a Constitutional Commission shall, during his tenure, hold any other office or employment. Neither shall he engage in the practice of any profession or in the active management or control of any business which, in any way, may be affected by the functions of his office, nor shall he be financially interested, directly or indirectly, in any contract with, or in any franchise or privilege granted by the Government, any of its subdivisions, agencies, or instrumentalities, including government-owned or controlled corporations or their subsidiaries."',
		legalBasis: 'Art. IX-A, Sec. 2, 1987 Constitution'
	},
	{
		id: 'consti1:finals:28',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			"Under Article IX-A, Section 7, each Commission shall decide by a majority vote of all its Members any case or matter brought before it within:",
		options: [
			"30 days from submission",
			"45 days from submission",
			"90 days from submission",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because 30 days is the period to elevate a final decision to the Supreme Court on certiorari.",
			"False because 45 days is not the constitutional period prescribed under Section 7.",
			"False because 90 days applies to judicial appointments and lower court decisions, not Commission cases.",
			"False because both a and c are incorrect.",
			"False because both a and b are incorrect.",
			"False because options a, b, and c are all incorrect.",
			"True because Article IX-A, Section 7 mandates deciding cases within sixty (60) days from submission."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article IX-A, Section 7 provides: \"Each Commission shall decide by a majority vote of all its Members, any case or matter brought before it within sixty days from the date of its submission for decision or resolution.\" Because 60 days is not among options a, b, or c, none of the above is correct.",
		legalBasis:
			"Art. IX-A, Sec. 7, 1987 Constitution"
	},
	{
		id: 'consti1:finals:29',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			'Under Article IX-A, Section 7, an aggrieved party may bring a final decision, order, or ruling of the COMELEC or COA to the Supreme Court on certiorari within:',
		options: [
			'15 days from notice',
			'30 days from notice',
			'60 days from notice',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because fifteen days applies to Rule 43 appeals from the CSC to the Court of Appeals.',
			'True because Section 7 sets a thirty-day window for certiorari under Rule 64.',
			'False because sixty days is the general Rule 65 period, whereas Rule 64 sets thirty days.',
			'False because options a and c are incorrect.',
			'False because option a is incorrect.',
			'False because only option b (30 days) is correct.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: '30 days from notice',
		explanation:
			'B (30 days from notice). Article IX-A, Section 7 states: "Unless otherwise provided by this Constitution or by law, any decision, order, or ruling of each Commission may be brought to the Supreme Court on certiorari by the aggrieved party within thirty days from receipt of a copy thereof." Under the Rules of Court, this review is governed by Rule 64. Final decisions of the Civil Service Commission are appealed to the Court of Appeals under Rule 43 pursuant to Fabian v. Desierto (295 SCRA 470).',
		legalBasis: 'Art. IX-A, Sec. 7, 1987 Constitution; Rule 64, Rules of Court; Fabian v. Desierto (1998)'
	},
	{
		id: 'consti1:finals:30',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question: 'Under Gaminde v. Commission on Audit (2000), how are the staggered terms of members of the Constitutional Commissions reckoned?',
		options: [
			'From the date of actual issuance of the appointment',
			'From the date of assumption of office by the appointee',
			'From a common fixed constitutional starting date of February 2, 1987',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because counting from appointment disrupts the rotational scheme.',
			'False because counting from assumption would defeat fixed expiration dates.',
			'True because all term cycles run from the fixed constitutional baseline of February 2, 1987.',
			'False because option a is incorrect.',
			'False because neither appointment date nor assumption date is the anchor.',
			'False because options a and b are incorrect.',
			'False because option c is true.'
		],
		correctIndex: 2,
		key: 'From a common fixed constitutional starting date of February 2, 1987',
		explanation:
			'C (From a common fixed constitutional starting date of February 2, 1987). In Gaminde v. Commission on Audit (347 SCRA 655, 2000), the Supreme Court ruled that the terms of office of the Commissioners under the 3-5-7 staggered rotation scheme have a common starting point: February 2, 1987. The term of an appointee chosen to fill a regular vacancy or a delayed vacancy runs only for the unexpired portion of the term; it does not start anew from the date of appointment or assumption.',
		legalBasis: 'Art. IX-D, Sec. 1(2), 1987 Constitution; Gaminde v. Commission on Audit (2000)'
	},
	{
		id: 'consti1:finals:31',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question: 'Under Brillantes v. Yorac (1990), can the President appoint an Associate Commissioner of the COMELEC as "Acting Chairman"?',
		options: [
			"Yes, under the President's constitutional power of control",
			"Yes, under the President's residual executive authority",
			'No, because it undermines the independence of the Constitutional Commission',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because the President has no power of control over independent commissions.',
			'False because residual authority cannot override express constitutional independence.',
			'True because the President cannot designate an acting head of an independent commission.',
			'False because option a is incorrect.',
			'False because options a and b are both unconstitutional.',
			'False because options a and b are false.',
			'False because option c is true.'
		],
		correctIndex: 2,
		key: 'No, because it undermines the independence of the Constitutional Commission',
		explanation:
			'C (No, because it undermines the independence of the Constitutional Commission). In Brillantes v. Yorac (192 SCRA 358, 1990), President Corazon Aquino designated Associate Commissioner Haydee Yorac as Acting Chairman of the COMELEC. The Supreme Court struck down the designation, holding that the President has no power to designate an Acting Chairman of a Constitutional Commission. Allowing the President to appoint an acting head creates an implied dependence, violating the institutional independence guaranteed by Article IX-A, Section 1.',
		legalBasis: 'Art. IX-A, Sec. 1 & Art. IX-C, Sec. 1(2), 1987 Constitution; Brillantes v. Yorac (1990)'
	},
	{
		id: 'consti1:finals:32',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question:
			"Under Article IX-B, Section 1(1), the Civil Service Commission is composed of:",
		options: [
			"A Chairman and four Commissioners",
			"Appointees who must be at least forty (40) years of age at the time of appointment",
			"Appointees who must all be members of the Philippine Bar with ten (10) years of practice",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the CSC is composed of a Chairman and two (not four) Commissioners.",
			"False because the minimum constitutional age is 35 (not 40) years of age.",
			"False because CSC appointees need proven capacity for public administration, not Bar membership.",
			"False because both a and c misstate Section 1(1).",
			"False because both a and b misstate Section 1(1).",
			"False because options a, b, and c are all false.",
			"True because none of the choices accurately reflect the composition or qualifications of the CSC."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article IX-B, Section 1(1) provides: \"The Civil Service Commission shall be composed of a Chairman and two Commissioners who shall be natural-born citizens of the Philippines and, at the time of their appointment, at least thirty-five years of age, with proven capacity for public administration, and must not have been candidates for any elective position in the elections immediately preceding their appointment.\"",
		legalBasis:
			"Art. IX-B, Sec. 1(1), 1987 Constitution"
	},
	{
		id: 'consti1:finals:33',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question: 'Under Article IX-B, Section 2(1), the Civil Service embraces:',
		options: [
			'All branches, subdivisions, instrumentalities, and agencies of the Government',
			'Government-owned or controlled corporations with original charters',
			'Corporate subsidiaries organized under the general Corporation Code',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the civil service covers the entire public machinery.',
			'True because chartered GOCCs are expressly included in the civil service.',
			'False because non-chartered corporations are governed by the Labor Code.',
			'False because option c is excluded under NASECO v. NLRC.',
			'True because both governmental departments and chartered GOCCs are embraced.',
			'False because non-chartered corporate subsidiaries are excluded under NASECO v. NLRC.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article IX-B, Section 2(1) provides: "The civil service embraces all branches, subdivisions, instrumentalities, and agencies of the Government, including government-owned or controlled corporations with original charters." In NASECO v. NLRC (168 SCRA 122) and Lumanta v. NLRC (170 SCRA 79), the Court held that GOCCs incorporated under the general Corporation Code are governed by the Labor Code, not by the Civil Service Commission.',
		legalBasis: 'Art. IX-B, Sec. 2(1), 1987 Constitution; NASECO v. NLRC; Lumanta v. NLRC'
	},
	{
		id: 'consti1:finals:34',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question:
			'Under Article IX-B, Section 2(2), appointments in the civil service are made according to merit and fitness determined by competitive examination, EXCEPT to positions which are:',
		options: [
			'Policy-determining',
			'Primarily confidential',
			'Highly technical',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because policy-determining positions are exempt from competitive exams.',
			'True because confidential positions requiring personal trust are exempt.',
			'True because highly technical positions requiring specialized skills are exempt.',
			'False because option b is also a non-competitive class.',
			'False because option c is equally an exempt non-competitive class.',
			'True because all three non-competitive classes are explicitly enumerated in Section 2(2).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article IX-B, Section 2(2) states: "Appointments in the civil service shall be made only according to merit and fitness to be determined, as far as practicable, and, except to positions which are policy-determining, primarily confidential or highly technical, by competitive examination."',
		legalBasis: 'Art. IX-B, Sec. 2(2), 1987 Constitution'
	},
	{
		id: 'consti1:finals:35',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'Under Luego v. Civil Service Commission (1986), what is the extent of the authority of the CSC over appointments made by an appointing authority?',
		options: [
			'It can revoke an appointment and substitute its own preferred candidate',
			'It can only determine whether the appointee possesses the legal qualifications for the post',
			'It can order the appointing power to select the candidate with the highest exam score',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because the CSC cannot dictate who should be selected for appointment.',
			"True because the CSC's approval power is limited to verifying legal qualifications.",
			'False because the appointing officer retains discretion among eligible candidates.',
			'False because options a and c were explicitly prohibited.',
			'False because option a is incorrect.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'It can only determine whether the appointee possesses the legal qualifications for the post',
		explanation:
			'B (It can only determine whether the appointee possesses the legal qualifications for the post). In Luego v. Civil Service Commission (143 SCRA 327, 1986), the Supreme Court ruled that the CSC is not an appointing authority. Its power is limited to determining whether the appointee possesses the qualifications required by law. If the appointee is legally qualified, the CSC has the ministerial duty to attest the appointment; it has no power to revoke an appointment simply because it believes another candidate is better qualified.',
		legalBasis: 'Art. IX-B, Sec. 2(2), 1987 Constitution; Luego v. Civil Service Commission (1986)'
	},
	{
		id: 'consti1:finals:36',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'Under Dario v. Mison (1989), can career civil service employees be separated from office pursuant to government reorganization?',
		options: [
			'Yes, but the reorganization must be pursued in good faith',
			'No, because constitutional security of tenure absolutely prohibits abolition of office',
			'Yes, and bad faith in separation is cured if the agency pays separation benefits',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because a bona fide reorganization resulting in abolition of office is valid.',
			'False because genuine reorganizations done in good faith are permissible.',
			'False because bad-faith removals violate security of tenure and entitle employees to reinstatement.',
			'False because separation pay cannot cure bad-faith dismissals.',
			'False because option b is incorrect.',
			'False because options b and c are false.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Yes, but the reorganization must be pursued in good faith',
		explanation:
			'A (Yes, but the reorganization must be pursued in good faith). In Dario v. Mison (176 SCRA 84, 1989), the Supreme Court held that while the State may reorganize the bureaucracy, such reorganization must be carried out in good faith. A reorganization is considered in bad faith when employees are separated to create vacancies for political protégés or when newly created positions perform essentially the same duties as abolished posts. Removals tainted with bad faith violate constitutional security of tenure.',
		legalBasis: 'Art. IX-B, Sec. 2(3), 1987 Constitution; Dario v. Mison (1989)'
	},
	{
		id: 'consti1:finals:37',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question: 'Under Article IX-B, Section 2(4), no officer or employee in the civil service shall engage, directly or indirectly, in:',
		options: [
			'Any electioneering or partisan political campaign',
			'Voting in an election',
			'Expressing private personal opinions on political matters',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because partisan campaigning is strictly prohibited for career civil servants.',
			'False because civil servants retain their democratic right of suffrage.',
			'False because expressing private views without organized campaigning is permitted.',
			'False because option c is not prohibited.',
			'False because voting is constitutionally protected.',
			'False because options b and c are not prohibited.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Any electioneering or partisan political campaign',
		explanation:
			'A (Any electioneering or partisan political campaign). Article IX-B, Section 2(4) states: "No officer or employee in the civil service shall engage, directly or indirectly, in any electioneering or partisan political campaign." Civil servants may vote and express private views, but they are barred from active participation in partisan political operations (Santos v. Yatco, 106 Phil. 745).',
		legalBasis: 'Art. IX-B, Sec. 2(4), 1987 Constitution; Santos v. Yatco'
	},
	{
		id: 'consti1:finals:38',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question:
			"Under Article IX-C, Section 1(1), the Commission on Elections is composed of:",
		options: [
			"A Chairman and four Commissioners",
			"Appointees all of whom must be members of the Philippine Bar practicing law for at least fifteen (15) years",
			"Appointees who must be at least forty (40) years of age at the time of appointment",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the COMELEC is composed of a Chairman and six (not four) Commissioners.",
			"False because only a majority (including the Chairman)—not all—must be lawyers, and the required practice is at least 10 (not 15) years.",
			"False because the minimum age for COMELEC members is 35 (not 40) years of age.",
			"False because both a and c are inaccurate.",
			"False because both a and b are inaccurate.",
			"False because options a, b, and c are all false.",
			"True because none of the choices accurately reflect Article IX-C, Section 1(1)."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article IX-C, Section 1(1) provides that the COMELEC is composed of a Chairman and six Commissioners, at least 35 years of age, holders of a college degree, and that a majority thereof, including the Chairman, shall be members of the Philippine Bar engaged in the practice of law for at least ten years.",
		legalBasis:
			"Art. IX-C, Sec. 1(1), 1987 Constitution"
	},
	{
		id: 'consti1:finals:39',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question:
			'Under Article IX-C, Section 3, how must election cases and pre-proclamation controversies be heard and decided by the COMELEC?',
		options: [
			'Directly by the Commission En Banc at first instance',
			'First in Division, with motions for reconsideration resolved by the Commission En Banc',
			'Exclusively by the Chairman acting alone',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because adjudicatory election cases cannot be decided En Banc at first instance.',
			'True because division adjudication at first instance is a mandatory jurisdictional requirement.',
			'False because COMELEC is a collegial body and individual members cannot decide cases.',
			'False because options a and c are unconstitutional.',
			'False because En Banc at first instance is unconstitutional.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'First in Division, with motions for reconsideration resolved by the Commission En Banc',
		explanation:
			'B (First in Division, with motions for reconsideration resolved by the Commission En Banc). Article IX-C, Section 3 explicitly provides: "The Commission on Elections may sit en banc or in two divisions, and shall promulgate its rules of procedure in order to expedite disposition of election cases, including pre-proclamation controversies. All such election cases shall be heard and decided in division, provided that motions for reconsideration of decisions shall be decided by the Commission en banc" (Canicosa v. COMELEC, 282 SCRA 512; Cagas v. COMELEC, G.R. No. 194139, 2012).',
		legalBasis: 'Art. IX-C, Sec. 3, 1987 Constitution; Canicosa v. COMELEC; Cagas v. COMELEC (2012)'
	},
	{
		id: 'consti1:finals:40',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'Under Cagas v. Commission on Elections (2012) and Sarmiento v. COMELEC (1992), what is the legal consequence if the COMELEC En Banc directly decides an election protest without it being heard and decided first by a Division?',
		options: [
			'The decision is valid under the doctrine of primary jurisdiction',
			'The decision is null and void for lack of jurisdiction',
			'The decision is valid provided all seven Commissioners unanimously sign it',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because bypassing the division violates Section 3.',
			'True because hearing in division is a mandatory jurisdictional prerequisite.',
			'False because unanimity cannot cure a constitutional jurisdictional defect.',
			'False because options a and c are incorrect.',
			'False because option a is incorrect.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'The decision is null and void for lack of jurisdiction',
		explanation:
			'B (The decision is null and void for lack of jurisdiction). Under Article IX-C, Section 3, as applied in Sarmiento v. COMELEC (212 SCRA 307, 1992) and Cagas v. COMELEC (664 SCRA 333, 2012), hearing and deciding election cases in division first is a mandatory jurisdictional requirement. The COMELEC En Banc has no authority to hear and decide an election case at first instance; any resolution or decision rendered directly by the COMELEC En Banc without passing through a Division is void for lack of jurisdiction.',
		legalBasis: 'Art. IX-C, Sec. 3, 1987 Constitution; Sarmiento v. COMELEC (1992); Cagas v. COMELEC (2012)'
	},
	{
		id: 'consti1:finals:41',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			"Under Article IX-C, Section 2(2), the COMELEC exercises exclusive original jurisdiction over all election contests relating to:",
		options: [
			"Municipal elective officials",
			"Barangay elective officials",
			"Senators and Members of the House of Representatives after proclamation, oath, and assumption",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because municipal election contests originate in the RTC; COMELEC exercises only appellate jurisdiction over them.",
			"False because barangay election contests originate in the MTC; COMELEC exercises only appellate jurisdiction over them.",
			"False because once proclaimed, sworn in, and seated, congressional contests fall exclusively under the SET or HRET.",
			"False because neither a nor c falls under COMELEC original jurisdiction.",
			"False because both municipal and barangay contests fall under COMELEC appellate, not original, jurisdiction.",
			"False because none of these categories fall under COMELEC exclusive original jurisdiction.",
			"True because COMELEC exclusive original jurisdiction covers only elective regional, provincial, and city officials."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article IX-C, Section 2(2) grants the COMELEC exclusive original jurisdiction strictly over all contests relating to the elections, returns, and qualifications of elective regional, provincial, and city officials. Municipal contests originate in the RTC, barangay contests originate in the MTC, and seated congressional members fall under the SET/HRET (Art. VI, Sec. 17; Reyes v. COMELEC).",
		legalBasis:
			"Art. IX-C, Sec. 2(2) & Art. VI, Sec. 17, 1987 Constitution; Reyes v. COMELEC"
	},
	{
		id: 'consti1:finals:42',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question:
			"Under Article IX-D, Section 1(1), the Commission on Audit is composed of:",
		options: [
			"A Chairman and six Commissioners",
			"Certified public accountants with at least five (5) years of auditing experience or members of the Philippine Bar practicing law for at least five (5) years",
			"Appointees all of whom must belong to the certified public accounting profession",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because COA is composed of a Chairman and two (not six) Commissioners.",
			"False because Section 1(1) requires at least ten (not five) years of auditing or law practice experience.",
			"False because the Constitution expressly mandates that at no time shall all Members of COA belong to the same profession.",
			"False because both a and c violate Section 1(1).",
			"False because both a and b misstate Section 1(1).",
			"False because options a, b, and c are all false.",
			"True because none of the choices accurately reflect Article IX-D, Section 1(1)."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article IX-D, Section 1(1) provides that COA consists of a Chairman and two Commissioners who are CPAs with not less than ten years of auditing experience or members of the Philippine Bar practicing law for at least ten years, and explicitly commands that \"at no time shall all Members of the Commission belong to the same profession.\"",
		legalBasis:
			"Art. IX-D, Sec. 1(1), 1987 Constitution"
	},
	{
		id: 'consti1:finals:43',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			'Under Article IX-D, Section 2(1), the Commission on Audit has the power, authority, and duty to examine, audit, and settle all accounts pertaining to:',
		options: [
			'The revenue and receipts of the Government',
			'The expenditures or uses of funds and property owned or held in trust by the Government',
			'Purely private commercial enterprises that handle no public funds or subsidies',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			"True because state collections are under COA's audit authority.",
			'True because state spending and property use are audited by COA.',
			'False because COA does not audit private entities that do not handle public funds.',
			'False because option c is excluded.',
			'True because both state revenues and expenditures are covered.',
			'False because purely private enterprises are excluded.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article IX-D, Section 2(1) explicitly provides: "The Commission on Audit shall have the power, authority, and duty to examine, audit, and settle all accounts pertaining to the revenue and receipts of, and expenditures or uses of funds and property, owned or held in trust by, or pertaining to, the Government, or any of its subdivisions, agencies, or instrumentalities, including government-owned or controlled corporations with original charters..."',
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution'
	},
	{
		id: 'consti1:finals:44',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			'Under Article IX-D, Section 2(2), the COA has exclusive authority to promulgate accounting and auditing rules and regulations, including those for the prevention and disallowance of:',
		options: [
			'Irregular and unnecessary expenditures',
			'Excessive and extravagant expenditures',
			'Unconscionable expenditures',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because irregular and unnecessary spending are prohibited categories.',
			'True because excessive and extravagant spending are prohibited categories.',
			'True because unconscionable spending is an express prohibited category.',
			'False because option b also lists explicit prohibited categories.',
			'False because option c is equally an express constitutional category.',
			'True because all three options accurately articulate the five prohibited categories (IUEEU).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article IX-D, Section 2(2) explicitly mandates that COA shall promulgate "accounting and auditing rules and regulations, including those for the prevention and disallowance of irregular, unnecessary, excessive, extravagant, or unconscionable expenditures or uses of government funds and properties."',
		legalBasis: 'Art. IX-D, Sec. 2(2), 1987 Constitution'
	},
	{
		id: 'consti1:finals:45',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'Under Caltex Philippines, Inc. v. Commission on Audit (1992), what is the legal character of collections under the Oil Price Stabilization Fund (OPSF)?',
		options: [
			'Private funds held by oil companies exempt from COA audit',
			'Public trust funds subject to the full audit and settlement jurisdiction of COA',
			'Foreign loan advances exempt from government accounting rules',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because OPSF levies are public monies collected under state police power.',
			'True because public special levies fall squarely within COA audit jurisdiction.',
			'False because OPSF levies are domestic public taxes/levies, not foreign loans.',
			'False because options a and c are incorrect.',
			'False because option a is incorrect.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'Public trust funds subject to the full audit and settlement jurisdiction of COA',
		explanation:
			'B (Public trust funds subject to the full audit and settlement jurisdiction of COA). In Caltex Philippines, Inc. v. Commission on Audit (208 SCRA 726, 1992), the Supreme Court ruled that OPSF levies are collected through the State\'s police and taxing powers. They constitute public funds held in trust for a public purpose and are subject to the examination, audit, and settlement jurisdiction of the Commission on Audit.',
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution; Caltex Philippines, Inc. v. COA (1992)'
	},
	{
		id: 'consti1:finals:46',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question: "Under Article IX-D, Section 3, what is the constitutional limitation on legislative power regarding COA's audit jurisdiction?",
		options: [
			'Congress may exempt any government corporation from audit by a two-thirds vote',
			'No law shall be passed exempting any entity of the Government or its subsidiary in any guise whatever from COA jurisdiction',
			'The President may suspend COA audits of defense corporations during states of emergency',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because Congress is absolutely prohibited from granting audit exemptions.',
			'True because Section 3 contains an absolute prohibition against statutory audit exemptions.',
			'False because executive suspension of audit jurisdiction is unconstitutional.',
			'False because options a and c are unconstitutional.',
			'False because option a is unconstitutional.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'No law shall be passed exempting any entity of the Government or its subsidiary in any guise whatever from COA jurisdiction',
		explanation:
			'B (No law shall be passed exempting any entity of the Government or its subsidiary in any guise whatever from COA jurisdiction). Article IX-D, Section 3 commands: "No law shall be passed exempting any entity of the Government or its subsidiary in any guise whatever, or any investment of public funds, from the jurisdiction of the Commission on Audit."',
		legalBasis: 'Art. IX-D, Sec. 3, 1987 Constitution'
	},
	{
		id: 'consti1:finals:47',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question: 'Under Article IX-A, Section 6, the rule-making power of each Constitutional Commission allows it to:',
		options: [
			'Promulgate its own rules concerning pleadings and practice before it or before any of its offices',
			'Enact rules that alter or expand substantive statutory rights',
			'Enact rules governing trial court procedure in the Regional Trial Courts',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because commissions have self-executing authority to enact internal procedural rules.',
			'False because administrative rules cannot diminish, increase, or modify substantive rights.',
			'False because rule-making for trial courts belongs exclusively to the Supreme Court.',
			'False because option c belongs exclusively to the Supreme Court.',
			'False because option b is unconstitutional under Section 6.',
			'False because options b and c are false.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Promulgate its own rules concerning pleadings and practice before it or before any of its offices',
		explanation:
			'A (Promulgate its own rules concerning pleadings and practice before it or before any of its offices). Article IX-A, Section 6 provides: "Each Commission en banc may promulgate its own rules concerning pleadings and practice before it or before any of its offices. Such rules, however, shall not diminish, increase, or modify substantive rights." In Aruelo v. Court of Appeals (227 SCRA 311), the Court emphasized that commission rules apply only to proceedings before the commission itself, not to proceedings before regular judicial courts.',
		legalBasis: 'Art. IX-A, Sec. 6, 1987 Constitution; Aruelo v. Court of Appeals'
	},
	{
		id: 'consti1:finals:48',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'Under Macalintal v. Commission on Elections (2003), was the provision in the Overseas Absentee Voting Act subjecting COMELEC rules to congressional oversight constitutional?',
		options: [
			'Yes, because Congress has plenary power to supervise statutory implementation',
			'No, because legislative review and approval of COMELEC rules violates its constitutional independence',
			'Yes, provided the Joint Congressional Oversight Committee acted unanimously',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because legislative veto mechanisms over independent commissions are void.',
			'True because Congress cannot arrogate review power over independent commission rules.',
			'False because unanimity cannot validate an unconstitutional legislative encroachment.',
			'False because options a and c were rejected by the Court.',
			'False because option a is incorrect.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'No, because legislative review and approval of COMELEC rules violates its constitutional independence',
		explanation:
			'B (No, because legislative review and approval of COMELEC rules violates its constitutional independence). In Macalintal v. Commission on Elections (405 SCRA 614, 2003), the Supreme Court struck down Section 19 of Republic Act No. 9189, which required the COMELEC to submit its implementing rules to a Joint Congressional Oversight Committee for approval. The Court held that this legislative veto mechanism infringed upon the constitutional independence of the COMELEC and violated Article IX-A, Section 6.',
		legalBasis: 'Art. IX-A, Secs. 1 & 6, 1987 Constitution; Macalintal v. COMELEC (2003)'
	},
	{
		id: 'consti1:finals:49',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question: 'Under Article IX-A, Section 5, the fiscal autonomy of the Constitutional Commissions guarantees that:',
		options: [
			'Approved annual appropriations shall be automatically and regularly released',
			'Appropriations cannot be reduced by the legislature below the amount for the previous year',
			'The Commissions may impose private business taxes to finance operations',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because automatic release protects commissions from executive impoundment.',
			'True because non-diminution is a core attribute of constitutional fiscal autonomy.',
			'False because commissions have no independent taxing authority.',
			'False because option c is unconstitutional.',
			'True because both automatic release and non-diminution protect fiscal autonomy.',
			'False because option c is unconstitutional.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article IX-A, Section 5 states: "The Commission shall enjoy fiscal autonomy. Their approved annual appropriations shall be automatically and regularly released." In Civil Service Commission v. Department of Budget and Management (464 SCRA 115, 2005), the Court confirmed that automatic release means funds cannot be subjected to executive clearance or DBM withholding.',
		legalBasis: 'Art. IX-A, Sec. 5, 1987 Constitution; CSC v. DBM (2005)'
	},
	{
		id: 'consti1:finals:50',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'Under Civil Liberties Union v. Executive Secretary (1991), does the exception under Article IX-B, Section 7 permit Cabinet members to hold multiple corporate directorships in government corporations?',
		options: [
			'Yes, because Article IX-B is a general provision governing all appointive officials',
			'No, because Cabinet members are governed by the strict prohibition under Article VII, Section 13',
			'Yes, provided they waive all per diems and allowances',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because Cabinet members are governed by the stricter rule under Article VII, Section 13.',
			'True because Article VII, Section 13 prohibits Cabinet members from holding any other office unless otherwise provided in the Constitution.',
			'False because waiving compensation does not validate an unconstitutional post.',
			'False because options a and c are unconstitutional.',
			'False because option a is incorrect.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'No, because Cabinet members are governed by the strict prohibition under Article VII, Section 13',
		explanation:
			'B (No, because Cabinet members are governed by the strict prohibition under Article VII, Section 13). In Civil Liberties Union v. Executive Secretary (194 SCRA 317, 1991), the Supreme Court held that Executive Order No. 284, which allowed Cabinet members to hold up to two additional government positions, was unconstitutional. The Court held that while Article IX-B, Section 7 allows exceptions by law for ordinary appointive officials, the President, Vice-President, and Cabinet are governed by the stricter prohibition under Article VII, Section 13 ("unless otherwise provided in this Constitution").',
		legalBasis: 'Art. VII, Sec. 13 & Art. IX-B, Sec. 7, 1987 Constitution; Civil Liberties Union v. Executive Secretary (1991)'
	},
	{
		id: 'consti1:finals:51',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question: 'Under Article IX-C, Section 4, the COMELEC may, during the election period, supervise or regulate:',
		options: [
			'The enjoyment or utilization of all franchises or permits for transportation and public utilities',
			'Media of communication or information to ensure equal opportunity, time, and space',
			'Internal religious worship services conducted by churches',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because public transport franchises are subject to election supervision.',
			'True because broadcast and print media space may be regulated to guarantee equality.',
			'False because religious worship is protected by the non-establishment and free exercise clauses.',
			'False because religious worship cannot be regulated by COMELEC.',
			'True because both public utility and media franchise regulations are authorized.',
			'False because religious worship cannot be regulated by COMELEC.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article IX-C, Section 4 authorizes the Commission during the election period to supervise or regulate the enjoyment or utilization of all franchises or permits for the operation of transportation and other public utilities, media of communication or information, to guarantee equal opportunity, time, and space, and equal rates therefor, for public information campaigns (National Press Club v. COMELEC, 207 SCRA 1).',
		legalBasis: 'Art. IX-C, Sec. 4, 1987 Constitution; National Press Club v. COMELEC'
	},
	{
		id: 'consti1:finals:52',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'Under Philippine Press Institute v. Commission on Elections (1995), was the COMELEC resolution requiring print newspapers to donate free advertising space ("COMELEC space") constitutional?',
		options: [
			'Yes, under the exercise of police power to ensure equal opportunity',
			'No, because it constitutes an unconstitutional taking of private property without just compensation',
			'Yes, because news organizations operate under government licenses',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because compulsory donation of media space constitutes taking without compensation.',
			'True because requiring free space without payment violates eminent domain protections.',
			'False because print newspapers do not operate under government broadcast franchises.',
			'False because options a and c are incorrect.',
			'False because option a was rejected by the Court.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'No, because it constitutes an unconstitutional taking of private property without just compensation',
		explanation:
			'B (No, because it constitutes an unconstitutional taking of private property without just compensation). In Philippine Press Institute v. COMELEC (244 SCRA 272, 1995), the Supreme Court declared unconstitutional a COMELEC resolution directing newspapers to provide free "COMELEC space." The Court held that forcing private publishers to donate advertising space without payment constituted an unconstitutional taking of private property without just compensation.',
		legalBasis: 'Art. III, Sec. 9 & Art. IX-C, Sec. 4, 1987 Constitution; Philippine Press Institute v. COMELEC (1995)'
	},
	{
		id: 'consti1:finals:53',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'Under Social Weather Stations v. Commission on Elections (2001), what was the ruling on statutory bans prohibiting the publication of pre-election surveys?',
		options: [
			'Upheld as a valid measure to prevent bandwagon voting effects',
			'Struck down as an unconstitutional prior restraint on freedom of speech and the press',
			'Upheld provided the ban applied only during the final 48 hours before voting',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because total bans on publishing survey results violate freedom of speech.',
			'True because prohibiting the publication of truthful survey data is an invalid prior restraint.',
			'False because the entire pre-election survey publication ban was declared void.',
			'False because options a and c are incorrect.',
			'False because option a was rejected by the Court.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'Struck down as an unconstitutional prior restraint on freedom of speech and the press',
		explanation:
			'B (Struck down as an unconstitutional prior restraint on freedom of speech and the press). In Social Weather Stations v. COMELEC (357 SCRA 496, 2001), the Supreme Court invalidated Section 5.4 of Republic Act No. 9006, which banned the publication of election surveys fifteen days before national elections and seven days before local elections. The Court ruled that the prohibition amounted to an unconstitutional prior restraint on freedom of expression.',
		legalBasis: 'Art. III, Sec. 4 & Art. IX-C, Sec. 4, 1987 Constitution; Social Weather Stations v. COMELEC (2001)'
	},
	{
		id: 'consti1:finals:54',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'Under Penera v. Commission on Elections (2009), when does a person who files a certificate of candidacy legally become a "candidate" subject to election offenses like premature campaigning?',
		options: [
			'On the date the certificate of candidacy is filed with the election officer',
			'Only at the start of the official campaign period prescribed by law',
			"Upon approval of the candidate's certificate by the COMELEC En Banc",
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because filing the certificate does not immediately confer candidate status under RA 9369.',
			'True because under RA 9369, candidate status for election offense purposes begins at the official campaign period.',
			'False because approval does not accelerate candidate status before the campaign starts.',
			'False because options a and c are incorrect.',
			'False because option a was abandoned under the amended statute.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'Only at the start of the official campaign period prescribed by law',
		explanation:
			'B (Only at the start of the official campaign period prescribed by law). In Penera v. Commission on Elections (605 SCRA 574, 2009), the Supreme Court ruled that under Section 15 of Republic Act No. 9369, a person who files a certificate of candidacy is deemed a candidate only at the start of the campaign period. Consequently, political acts performed prior to the official campaign period cannot be penalized as premature campaigning.',
		legalBasis: 'Sec. 15, R.A. No. 9369; Penera v. COMELEC (2009)'
	},
	{
		id: 'consti1:finals:55',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question:
			"Under Article IX-B, Section 7, which of the following statements accurately reflect the constitutional rules on holding dual public offices?",
		options: [
			"An elective local official (such as a Governor or Mayor) may be appointed to a Cabinet post during his tenure provided he takes a leave of absence",
			"An appointive official may hold any other office in Government even without authorization by law or the primary functions of his position",
			"An elective official may accept an executive post provided he waives his legislative salary",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because no elective official is eligible for appointment or designation to any public office during his tenure (save for express constitutional exceptions like the Vice-President as Cabinet Member under Art. VII, Sec. 3); a leave of absence does not terminate tenure.",
			"False because an appointive official cannot hold any other government office unless expressly allowed by law or by the primary functions of his position.",
			"False because waiving compensation does not lift the constitutional prohibition against elective officials accepting executive appointments.",
			"False because both a and c violate Article IX-B, Section 7.",
			"False because both a and b violate Article IX-B, Section 7.",
			"False because options a, b, and c are all unconstitutional.",
			"True because every listed statement contradicts Article IX-B, Section 7."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article IX-B, Section 7 provides: \"No elective official shall be eligible for appointment or designation in any capacity to any public office or position during his tenure. Unless otherwise allowed by law or by the primary functions of his position, no appointive official shall hold any other office or employment in the Government or any subdivision, agency or instrumentality thereof, including government-owned or controlled corporations or their subsidiaries.\" Unlike the Vice-President (who is expressly permitted to serve in the Cabinet under Art. VII, Sec. 3), local elective officials and legislators cannot accept appointive executive posts during their tenure without forfeiting or resigning from office (Flores v. Drilon, 223 SCRA 568).",
		legalBasis:
			"Art. IX-B, Sec. 7 & Art. VII, Sec. 3, 1987 Constitution; Flores v. Drilon (1993)"
	},
	{
		id: 'consti1:finals:56',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			'Under Article IX-B, Section 3, the Civil Service Commission serves as the central personnel agency of the Government and is mandated to:',
		options: [
			'Establish a career service and adopt measures to promote morale, efficiency, integrity, and responsiveness',
			'Strengthen the merit and rewards system in the bureaucracy',
			'Authorize and supervise collective bargaining strikes in public hospitals',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because this is the core mandate of the CSC under Section 3.',
			'True because professionalizing the civil service is a constitutional objective.',
			'False because government employees have no constitutional right to strike.',
			'False because public sector strikes are prohibited.',
			'True because both career service promotion and merit systems are explicitly covered.',
			'False because public sector strikes are prohibited.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article IX-B, Section 3 establishes the CSC as the central personnel agency of the Government. Under SSS Employees Association v. Court of Appeals (175 SCRA 686), government employees may organize unions, but they do not possess the right to strike or negotiate terms that are fixed by law.',
		legalBasis: 'Art. IX-B, Sec. 3, 1987 Constitution; SSS Employees Association v. Court of Appeals (1989)'
	},
	{
		id: 'consti1:finals:57',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question: 'Under Article IX-C, Section 10 and election laws, what protection is afforded to candidates and registered political parties?',
		options: [
			'Registered political parties and coalitions have the right to exclusive use of their registered names, logos, and symbols',
			'Bona fide candidates for any public office shall be free from any form of harassment and discrimination',
			"The COMELEC may reassign a registered party's name to a rival faction during campaigns",
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because registered political parties are protected in the exclusive use of their registered names and symbols.',
			'True because non-harassment and non-discrimination of bona fide candidates is expressly guaranteed by Section 10.',
			'False because exclusive registration prevents name appropriation by rival factions.',
			'False because option c is unlawful.',
			'True because both exclusive use of names and non-harassment of candidates are protected.',
			'False because option c is unlawful.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article IX-C, Section 10 explicitly provides: "Bona fide candidates for any public office shall be free from any form of harassment and discrimination." Registered political parties, organizations, or coalitions under the supervision and registration of the COMELEC enjoy legal protection over their registered party names and symbols.',
		legalBasis: 'Art. IX-C, Secs. 2(5) & 10, 1987 Constitution'
	},
	{
		id: 'consti1:finals:58',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			"Under Article IX-D, Section 4, the Commission on Audit is constitutionally required to submit its annual report to:",
		options: [
			"The Chief Justice of the Supreme Court",
			"The Office of the Ombudsman",
			"The Secretary of Finance",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the annual financial condition report is submitted to the political branches, not the Chief Justice.",
			"False because the Ombudsman is not a designated recipient under Article IX-D, Section 4.",
			"False because Section 4 specifies the President and the Congress, not the Secretary of Finance.",
			"False because neither a nor c is designated by Section 4.",
			"False because neither a nor b is designated by Section 4.",
			"False because none of the listed officials are designated recipients under Section 4.",
			"True because Section 4 mandates submission strictly to the President and the Congress."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article IX-D, Section 4 provides: \"The Commission shall submit to the President and the Congress, within the time fixed by law, an annual report covering the financial condition and operation of the Government...\" Because neither the President nor Congress appears in options a, b, or c, none of the above is correct.",
		legalBasis:
			"Art. IX-D, Sec. 4, 1987 Constitution"
	},
	{
		id: 'consti1:finals:59',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'Under Funa v. Commission on Audit Chairman (2012), what is the rule regarding the promotion of an incumbent Commissioner to Chairman of a Constitutional Commission?',
		options: [
			'The promoted appointee receives a fresh seven-year term as Chairman regardless of prior service',
			"The appointment is valid only for the unexpired portion of the departing Chairman's term, provided total service does not exceed seven years",
			'Promotional appointments within a Constitutional Commission are absolutely prohibited',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because granting a fresh seven-year term violates the constitutional rotation scheme and seven-year cap.',
			'True because aggregate service across both positions cannot exceed seven years.',
			'False because promotional appointments are permissible subject to the unexpired term and seven-year ceiling.',
			'False because options a and c are incorrect.',
			'False because option a was struck down as unconstitutional.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'The appointment is valid only for the unexpired portion of the departing Chairman\'s term, provided total service does not exceed seven years',
		explanation:
			'B (The appointment is valid only for the unexpired portion of the departing Chairman\'s term, provided total service does not exceed seven years). In Funa v. Villar / Funa v. Commission on Audit Chairman (670 SCRA 579, 2012), the Supreme Court ruled that promoting a sitting Commissioner to Chairman is a new appointment rather than a prohibited reappointment. However, the appointee can serve as Chairman only for the unexpired portion of the departing Chairman\'s term, and the aggregate period of service as Commissioner and Chairman cannot exceed seven (7) years.',
		legalBasis: 'Art. IX-D, Sec. 1(2), 1987 Constitution; Funa v. Villar (2012)'
	},
	{
		id: 'consti1:finals:60',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question: 'Under Article IX-A, Section 3, the salaries of the Chairman and Commissioners of the Constitutional Commissions:',
		options: [
			'Shall be fixed by law',
			'Shall not be decreased during their continuance in office',
			'May be reduced by executive order during national economic downturns',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because salaries are established by statutory law.',
			'True because non-diminution during tenure protects institutional independence.',
			'False because the executive has no power to reduce commission salaries.',
			'False because option c is unconstitutional.',
			'True because both fixing by law and non-diminution are guaranteed.',
			'False because option c is unconstitutional.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article IX-A, Section 3 provides: "The salary of the Chairman and the Commissioners shall be fixed by law and shall not be decreased during their tenure."',
		legalBasis: 'Art. IX-A, Sec. 3, 1987 Constitution'
	},
	{
		id: 'consti1:finals:61',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question: 'Under Article IX-C, Section 5, how does the presidential pardoning power operate with respect to violations of election laws?',
		options: [
			'The President can grant pardons for election offenses without limitation',
			'No pardon, amnesty, parole, or suspension of sentence for violation of election laws shall be granted without the favorable recommendation of the COMELEC',
			'The President must secure the consent of the Senate before pardoning election violators',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because presidential clemency for election offenses requires COMELEC recommendation.',
			'True because Section 5 explicitly requires favorable COMELEC recommendation.',
			'False because Senate concurrence applies to treaties (and congressional concurrence to amnesties), not individual election pardons.',
			'False because options a and c are incorrect.',
			'False because option a violates Section 5.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'No pardon, amnesty, parole, or suspension of sentence for violation of election laws shall be granted without the favorable recommendation of the COMELEC',
		explanation:
			'B (No pardon, amnesty, parole, or suspension of sentence for violation of election laws shall be granted without the favorable recommendation of the COMELEC). Article IX-C, Section 5 explicitly provides: "No pardon, amnesty, parole, or suspension of sentence for violation of election laws, rules, and regulations shall be granted by the President without the favorable recommendation of the Commission."',
		legalBasis: 'Art. IX-C, Sec. 5, 1987 Constitution'
	},
	{
		id: 'consti1:finals:62',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			"Under Article IX-C, Section 9, unless otherwise fixed by the Commission in special cases, the election period shall commence:",
		options: [
			"60 days before the election and end 30 days thereafter",
			"90 days before the day of election and end 60 days thereafter",
			"120 days before the election and end 60 days thereafter",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the standard election period begins 90 days before election day, not 60.",
			"False because the election period ends 30 days (not 60 days) after election day.",
			"False because 120 days before and 60 days after is not the constitutional baseline.",
			"False because both a and c are incorrect.",
			"False because both a and b are incorrect.",
			"False because options a, b, and c are all incorrect.",
			"True because Section 9 fixes the election period at 90 days before and 30 days after election day."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article IX-C, Section 9 provides: \"Unless otherwise fixed by the Commission in special cases, the election period shall commence ninety days before the day of election and shall end thirty days thereafter.\" Option b subtly alters the end date to 60 days thereafter, making all listed options false.",
		legalBasis:
			"Art. IX-C, Sec. 9, 1987 Constitution"
	},
	{
		id: 'consti1:finals:63',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question: 'Under Article IX-C, Section 7, votes cast in favor of political parties are governed by which constitutional rule?',
		options: [
			'Block voting for political party slates is mandatory in all national elections',
			'No votes cast in favor of a political party, organization, or coalition shall be valid, except for those registered under the party-list system',
			'Voters may cast straight-party tickets for all elective national and local positions',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because block voting is prohibited except under the party-list system.',
			'True because Section 7 prohibits block voting outside the party-list system.',
			'False because straight-party ticket voting is unconstitutional.',
			'False because options a and c are unconstitutional.',
			'False because block voting is prohibited.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'No votes cast in favor of a political party, organization, or coalition shall be valid, except for those registered under the party-list system',
		explanation:
			'B (No votes cast in favor of a political party, organization, or coalition shall be valid, except for those registered under the party-list system). Article IX-C, Section 7 states: "No votes cast in favor of a political party, organization, or coalition shall be valid, except for those registered under the party-list system as provided in this Constitution."',
		legalBasis: 'Art. IX-C, Sec. 7, 1987 Constitution'
	},
	{
		id: 'consti1:finals:64',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question: 'Under Article IX-C, Section 8, political parties registered under the party-list system:',
		options: [
			"Shall be represented in the voters' registration boards and boards of election inspectors",
			"Shall not be represented in voters' registration boards, boards of election inspectors, or boards of canvassers",
			'Shall be entitled to appoint poll watchers in accordance with law',
			'a and b are true',
			'b and c are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because political parties are barred from representation in election boards.',
			'True because Section 8 prohibits party representation in election administration boards.',
			'True because appointing poll watchers is an express constitutional right.',
			'False because option a violates Section 8.',
			'True because both non-representation on boards and the right to appoint poll watchers are correct.',
			'False because option a is unconstitutional.',
			'False because options b and c are true.'
		],
		correctIndex: 4,
		key: 'b and c are true',
		explanation:
			'E (b and c are true). Article IX-C, Section 8 provides: "Political parties, or organizations or coalitions registered under the party-list system, shall not be represented in the voters\' registration boards, boards of election inspectors, boards of canvassers, or other similar bodies. However, they shall be entitled to appoint poll watchers in accordance with law."',
		legalBasis: 'Art. IX-C, Sec. 8, 1987 Constitution'
	},
	{
		id: 'consti1:finals:65',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question: 'Under Article IX-D, Section 2(1), where the internal control system of an audited agency is inadequate, the COA:',
		options: [
			'Can only perform post-audit and is absolutely barred from instituting pre-audit measures',
			'May adopt such measures, including temporary or special pre-audit, as are necessary and appropriate to correct deficiencies',
			'Must file an immediate petition for receivership before the Regional Trial Court',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because Section 2(1) explicitly allows temporary pre-audit when internal control is inadequate.',
			'True because temporary or special pre-audit is expressly authorized.',
			'False because COA possesses direct administrative authority and does not file for receivership.',
			'False because options a and c are incorrect.',
			'False because option a is incorrect.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'May adopt such measures, including temporary or special pre-audit, as are necessary and appropriate to correct deficiencies',
		explanation:
			'B (May adopt such measures, including temporary or special pre-audit, as are necessary and appropriate to correct deficiencies). Article IX-D, Section 2(1) states: "However, where the internal control system of the audited agencies is inadequate, the Commission may adopt such measures, including temporary or special pre-audit, as are necessary and appropriate to correct the deficiencies."',
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution'
	},
	{
		id: 'consti1:finals:66',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			'Under Article IX-B, Section 2(3), no officer or employee of the civil service shall be removed or suspended except for cause provided by law.',
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because constitutional security of tenure protects civil servants from arbitrary removal.',
			'Incorrect because cause provided by law is an express constitutional requirement.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Article IX-B, Section 2(3) explicitly provides: "No officer or employee of the civil service shall be removed or suspended except for cause provided by law."',
		legalBasis: 'Art. IX-B, Sec. 2(3), 1987 Constitution'
	},
	{
		id: 'consti1:finals:67',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			'Under Article IX-C, Section 2(2), the COMELEC has exclusive original jurisdiction over all election contests involving elective municipal officials.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because municipal election contests fall under the exclusive original jurisdiction of Regional Trial Courts.',
			'Correct because COMELEC exercises appellate jurisdiction over municipal election contests decided by RTCs.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article IX-C, Section 2(2) states that the COMELEC exercises exclusive original jurisdiction over all contests relating to elective regional, provincial, and city officials, but exercises appellate jurisdiction over municipal contests decided by Regional Trial Courts and barangay contests decided by Municipal Trial Courts.',
		legalBasis: 'Art. IX-C, Sec. 2(2), 1987 Constitution'
	},
	{
		id: 'consti1:finals:68',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question:
			'Under Article IX-A, Section 1, the Chairman and Members of the Constitutional Commissions may be removed from office by the President for gross inefficiency.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because members of Constitutional Commissions cannot be removed by the President.',
			'Correct because they are impeachable officials who can only be removed via impeachment by Congress under Article XI.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Under Article XI, Section 2, the Members of the Constitutional Commissions are impeachable officials. They cannot be dismissed or removed by the President, but can only be removed on impeachment for, and conviction of, culpable violation of the Constitution, treason, bribery, graft and corruption, other high crimes, or betrayal of public trust.',
		legalBasis: 'Art. IX-A, Sec. 1 & Art. XI, Sec. 2, 1987 Constitution'
	},
	{
		id: 'consti1:finals:69',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question:
			'Under Article IX-C, Section 2(5), religious denominations and sects are prohibited from being registered as political parties with the COMELEC.',
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because religious sects are expressly barred from registering as political parties.',
			'Incorrect because the prohibition against religious parties is explicitly stated in the text.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Article IX-C, Section 2(5) authorizes the COMELEC to register political parties, but explicitly specifies: "Provided, that no religious denomination or sect shall be registered."',
		legalBasis: 'Art. IX-C, Sec. 2(5), 1987 Constitution'
	},
	{
		id: 'consti1:finals:70',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question:
			'Under Article IX-B, Section 5, Congress is constitutionally mandated to provide for the standardization of compensation of government officials and employees, taking into account the nature of responsibilities and qualifications required.',
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because salary standardization by Congress is explicitly commanded under Section 5.',
			'Incorrect because the Compensation and Position Classification Act fulfills this constitutional command.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Article IX-B, Section 5 provides: "The Congress shall provide for the standardization of compensation of government officials and employees, including those in government-owned or controlled corporations with original charters, taking into account the nature of the responsibilities pertaining to, and the qualifications required for, their positions."',
		legalBasis: 'Art. IX-B, Sec. 5, 1987 Constitution'
	},
	{
		id: 'consti1:finals:71',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question:
			'Under Article IX-A, Section 7, each Commission may decide cases by a simple majority vote of a quorum present during a session.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because decisions require a majority vote of all members of the Commission, not a mere quorum.',
			'Correct because Section 7 strictly requires a majority vote of all its Members.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article IX-A, Section 7 commands: "Each Commission shall decide by a majority vote of all its Members, any case or matter brought before it within sixty days from the date of its submission for decision or resolution." For example, in the 7-member COMELEC, a valid decision requires at least four affirmative votes regardless of attendance.',
		legalBasis: 'Art. IX-A, Sec. 7, 1987 Constitution'
	},
	{
		id: 'consti1:finals:72',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question:
			'Under Article IX-C, Section 2(4), the COMELEC has the authority to deputize law enforcement agencies, including the Armed Forces of the Philippines, without the consent of the President.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because deputizing law enforcement agencies strictly requires the concurrence of the President.',
			'Correct because Section 2(4) explicitly requires the concurrence of the President for deputation.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article IX-C, Section 2(4) explicitly empowers the COMELEC to: "Deputize, with the concurrence of the President, law enforcement agencies and instrumentalities of the Government, including the Armed Forces of the Philippines, for the exclusive purpose of ensuring free, orderly, honest, peaceful, and credible elections."',
		legalBasis: 'Art. IX-C, Sec. 2(4), 1987 Constitution'
	},
	{
		id: 'consti1:finals:73',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question:
			'Under Article IX-B, Section 8, an appointive public official may accept a title, present, or office from a foreign government without the consent of Congress.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because accepting foreign gifts, titles, or offices without congressional consent is prohibited.',
			'Correct because Section 8 strictly requires the consent of Congress to accept foreign emoluments.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article IX-B, Section 8 provides: "No elective or appointive public officer or employee shall, without the consent of the Congress, accept any present, emolument, office, or title of any kind from any foreign government."',
		legalBasis: 'Art. IX-B, Sec. 8, 1987 Constitution'
	},
	{
		id: 'consti1:finals:74',
		topicId: 'finals',
		topic: P2,
		tag: 'jurisprudence',
		question:
			'In Ampong v. Civil Service Commission (2008), the Supreme Court ruled that administrative disciplinary jurisdiction over court personnel belongs exclusively to the Supreme Court, even if the offense was committed before employment in the judiciary.',
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because administrative supervision over all court employees is an exclusive judicial power.',
			'Incorrect because the Supreme Court confirmed its exclusive jurisdiction over court employees.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. In Ampong v. Civil Service Commission (563 SCRA 293, 2008), the Supreme Court held that under Article VIII, Section 6, the Supreme Court exercises exclusive administrative supervision over all courts and their personnel. The Civil Service Commission has no administrative jurisdiction to discipline a judicial employee, regardless of whether the administrative offense occurred before or after employment in the judiciary.',
		legalBasis: 'Art. VIII, Sec. 6, 1987 Constitution; Ampong v. Civil Service Commission (2008)'
	},
	{
		id: 'consti1:finals:75',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question:
			'Under Article IX-D, Section 1(2), appointments of the Chairman and Commissioners of the Commission on Audit require the consent of the Commission on Appointments.',
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because members of the Constitutional Commissions must be confirmed by the CA.',
			'Incorrect because CA confirmation is required under Article IX-D, Section 1(2).'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Article IX-D, Section 1(2) provides: "The Chairman and the Commissioners shall be appointed by the President with the consent of the Commission on Appointments for a term of seven years without reappointment."',
		legalBasis: 'Art. IX-D, Sec. 1(2), 1987 Constitution'
	},

	// =========================================================================
	// PART 3: CHAPTERS 17–19 — ACCOUNTABILITY, AMENDMENTS, & ELECTIONS (Q76–Q95)
	// =========================================================================
	{
		id: 'consti1:finals:76',
		topicId: 'finals',
		topic: P3,
		tag: 'memorization',
		question:
			"Under Article XI, Section 2, which of the following public officials are removable from office exclusively by impeachment?",
		options: [
			"The Secretary of Justice and Members of the Cabinet",
			"The Presiding Justice of the Court of Appeals and the Sandiganbayan",
			"The Chairperson of the Commission on Human Rights and the Deputy Ombudsman",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because Cabinet members serve at the pleasure of the President and are not impeachable officers.",
			"False because only Members of the Supreme Court—not lower collegiate courts—are impeachable.",
			"False because only the Ombudsman (not the Deputy Ombudsman or CHR Chairperson) is impeachable.",
			"False because neither a nor c lists impeachable officers.",
			"False because neither a nor b lists impeachable officers.",
			"False because none of the listed officers fall under the exclusive enumeration of Section 2.",
			"True because the exclusive list covers only the President, Vice-President, Supreme Court Justices, Members of the Constitutional Commissions, and the Ombudsman."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article XI, Section 2 provides an exclusive list of impeachable officers: the President, the Vice-President, the Members of the Supreme Court, the Members of the Constitutional Commissions, and the Ombudsman. Cabinet secretaries, appellate justices, the CHR Chairperson, and Deputy Ombudsmen are removed as provided by law, not by impeachment.",
		legalBasis:
			"Art. XI, Sec. 2, 1987 Constitution"
	},
	{
		id: 'consti1:finals:77',
		topicId: 'finals',
		topic: P3,
		tag: 'memorization',
		question:
			"Under Article XI, Section 3, what voting thresholds are required in the impeachment process?",
		options: [
			"A vote of at least one-half (1/2) of all the Members of the House to affirm a favorable resolution or override an unfavorable committee report",
			"A vote of at least three-fourths (3/4) of all the Members of the Senate to convict",
			"A unanimous vote of the Supreme Court to affirm the conviction",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because affirming or overriding Articles of Impeachment requires at least one-third (1/3), not one-half, of all House Members.",
			"False because conviction in the Senate requires two-thirds (2/3), not three-fourths, of all Senators.",
			"False because the Supreme Court plays no role in voting to affirm impeachment verdicts.",
			"False because both a and c are inaccurate.",
			"False because both a and b misstate the constitutional voting fractions.",
			"False because options a, b, and c are all false.",
			"True because the exact thresholds are 1/3 of all House Members and 2/3 of all Senators."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Under Article XI, Section 3(3)–(4), a vote of at least one-third (1/3) of all the Members of the House of Representatives is required to affirm a favorable resolution with the Articles of Impeachment or override a contrary committee report. Under Section 3(6), conviction requires the concurrence of two-thirds (2/3) of all the Members of the Senate. None of the choices state these exact constitutional thresholds.",
		legalBasis:
			"Art. XI, Sec. 3(3), (4) & (6), 1987 Constitution"
	},
	{
		id: 'consti1:finals:78',
		topicId: 'finals',
		topic: P3,
		tag: 'jurisprudence',
		question:
			'Under Francisco v. House of Representatives (2003), how is the one-year ban on initiating impeachment proceedings under Article XI, Section 3(5) interpreted?',
		options: [
			'The proceeding is initiated upon transmittal of Articles of Impeachment to the Senate',
			'The proceeding is initiated upon the filing of a verified complaint and its referral to the House Committee on Justice',
			'The proceeding is initiated only when the House takes a final plenary floor vote',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because initiation begins in the House, not upon Senate transmittal.',
			'True because filing coupled with referral constitutes initiation that triggers the one-year bar.',
			'False because floor voting occurs long after initiation has commenced.',
			'False because neither Senate transmittal nor floor voting is the initiation point.',
			'False because option a is incorrect.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'The proceeding is initiated upon the filing of a verified complaint and its referral to the House Committee on Justice',
		explanation:
			'B (The proceeding is initiated upon the filing of a verified complaint and its referral to the House Committee on Justice). In Francisco v. House of Representatives (415 SCRA 44, 2003), the Supreme Court ruled that an impeachment proceeding is initiated when a verified complaint is filed by any Member of the House or by any citizen endorsed by a Member, and is referred to the House Committee on Justice under Section 3(2) (or when filed by at least 1/3 of all House Members). Once initiated, no second impeachment proceeding can be initiated against the same official within a period of one year.',
		legalBasis: 'Art. XI, Sec. 3(5), 1987 Constitution; Francisco v. House of Representatives (2003)'
	},
	{
		id: 'consti1:finals:79',
		topicId: 'finals',
		topic: P3,
		tag: 'jurisprudence',
		question:
			'Under Gutierrez v. House of Representatives (2011), can a single initiated impeachment proceeding encompass multiple complaints referred simultaneously?',
		options: [
			'Yes, because multiple complaints referred together on the same day constitute a single initiated proceeding',
			'No, because each individual complaint requires a separate proceeding separated by one year',
			'Yes, but only if approved by a two-thirds vote of the Senate',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because simultaneous referral does not violate the one-year bar rule.',
			'False because the one-year bar applies to proceedings, not individual complaints.',
			'False because Senate concurrence is not required to initiate House complaints.',
			'False because option c is incorrect.',
			'False because option b was rejected by the Court.',
			'False because options b and c are false.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Yes, because multiple complaints referred together on the same day constitute a single initiated proceeding',
		explanation:
			'A (Yes, because multiple complaints referred together on the same day constitute a single initiated proceeding). In Gutierrez v. House of Representatives (643 SCRA 198, 2011), the Supreme Court clarified that the one-year bar rule prohibits the initiation of more than one impeachment proceeding within a year. When multiple impeachment complaints are filed and referred together to the Committee on Justice on the same day, they form part of a single proceeding and do not violate Article XI, Section 3(5).',
		legalBasis: 'Art. XI, Sec. 3(5), 1987 Constitution; Gutierrez v. House of Representatives (2011)'
	},
	{
		id: 'consti1:finals:80',
		topicId: 'finals',
		topic: P3,
		tag: 'jurisprudence',
		question: 'Under Republic v. Sereno (2018), what is the distinction between Impeachment and Quo Warranto?',
		options: [
			'Impeachment tests continuing fitness during tenure, while Quo Warranto assails eligibility and validity of title at inception',
			'Impeachment is a judicial proceeding, while Quo Warranto is a purely political inquest',
			'Impeachment can be filed against any public employee, while Quo Warranto applies only to the President',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because impeachment addresses tenure misconduct, whereas quo warranto tests title and eligibility at inception.',
			'False because impeachment is political and quo warranto is a judicial action.',
			'False because impeachment applies only to the enumerated high officers under Article XI, Section 2.',
			'False because option c is incorrect.',
			'False because option b reverses the characterizations.',
			'False because options b and c are false.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Impeachment tests continuing fitness during tenure, while Quo Warranto assails eligibility and validity of title at inception',
		explanation:
			"A (Impeachment tests continuing fitness during tenure, while Quo Warranto assails eligibility and validity of title at inception). In Republic v. Sereno (G.R. No. 237428, May 11, 2018), the Supreme Court ruled that quo warranto and impeachment are concurrent, distinct remedies. Impeachment is a political process to remove a validly appointed public officer for impeachable offenses committed during tenure, whereas quo warranto is a judicial proceeding to determine the validity of an appointee's title and eligibility at inception.",
		legalBasis: 'Art. VIII, Sec. 5(1) & Art. XI, Sec. 2, 1987 Constitution; Republic v. Sereno (2018)'
	},
	{
		id: 'consti1:finals:81',
		topicId: 'finals',
		topic: P3,
		tag: 'exceptions',
		question:
			'Under Article XI, Section 15, does the right of the State to recover ill-gotten wealth unlawfully acquired by public officials prescribe?',
		options: [
			'Yes, it prescribes after 10 years',
			'Yes, it prescribes after 20 years',
			'No, the right of the State to recover ill-gotten wealth is not barred by prescription, laches, or estoppel',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because civil actions to recover ill-gotten wealth do not prescribe.',
			'False because prescription does not apply.',
			'True because Section 15 explicitly establishes imprescriptibility.',
			'False because option a is incorrect.',
			'False because options a and b are incorrect.',
			'False because options a and b are false.',
			'False because option c is true.'
		],
		correctIndex: 2,
		key: 'No, the right of the State to recover ill-gotten wealth is not barred by prescription, laches, or estoppel',
		explanation:
			'C (No, the right of the State to recover ill-gotten wealth is not barred by prescription, laches, or estoppel). Article XI, Section 15 explicitly provides: "The right of the State to recover properties unlawfully acquired by public officials or employees, from them or from their nominees or transferees, shall not be barred by prescription, laches, or estoppel." Under Presidential Commission on Good Government v. Peña (159 SCRA 556), this imprescriptibility applies strictly to civil actions for asset recovery, whereas criminal actions remain subject to statutory prescription.',
		legalBasis: 'Art. XI, Sec. 15, 1987 Constitution; PCGG v. Peña'
	},
	{
		id: 'consti1:finals:82',
		topicId: 'finals',
		topic: P3,
		tag: 'exceptions',
		question: 'Under Article XI, Section 16, what is the constitutional rule regarding business loans and financial accommodations?',
		options: [
			'High public officials may obtain commercial business loans from private banks',
			'No loan, guaranty, or financial accommodation for any business purpose may be granted by any government bank to high constitutional officers during tenure',
			'Government banks may lend business funds to Cabinet members provided the interest rate is above market rates',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because private bank loans are not prohibited by Section 16.',
			'True because Section 16 prohibits business loans from government-owned or controlled financial institutions.',
			'False because the constitutional prohibition against government business loans is absolute during tenure.',
			'False because option c violates Section 16.',
			'True because both private borrowing and the ban on government business loans are correct.',
			'False because option c violates Section 16.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article XI, Section 16 provides: "No loan, guaranty, or other form of financial accommodation for any business purpose may be granted, directly or indirectly, by any government-owned or controlled bank or financial institution to the President, the Vice-President, the Members of the Cabinet, the Congress, the Supreme Court, and the Constitutional Commissions, the Ombudsman, or to any firm or entity in which they have controlling interest, during their tenure."',
		legalBasis: 'Art. XI, Sec. 16, 1987 Constitution'
	},
	{
		id: 'consti1:finals:83',
		topicId: 'finals',
		topic: P3,
		tag: 'memorization',
		question: 'Under Article XI, Section 17, who is required to declare under oath their Assets, Liabilities, and Net Worth (SALN)?',
		options: [
			'The President, Vice-President, Cabinet Members, and Members of Congress',
			'Members of the Supreme Court, Constitutional Commissions, and flag officers of the armed forces',
			'All public officers and employees upon assumption of office and as required by law',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because high-ranking constitutional officers must file SALNs.',
			'True because justices, commissioners, and military generals/flag officers must file SALNs.',
			'True because the SALN obligation applies across the entire civil service.',
			'False because option b is also true.',
			'False because option c covers every public servant without exception.',
			'True because Section 17 applies to all public officers, with public disclosure rules for the enumerated high officials.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article XI, Section 17 explicitly mandates: "A public officer or employee shall, upon assumption of office and as often thereafter as may be required by law, submit a declaration under oath of his assets, liabilities, and net worth. In the case of the President, the Vice-President, the Members of the Cabinet, the Congress, the Supreme Court, the Constitutional Commissions and other constitutional offices, and officers of the armed forces with general or flag rank, the declaration shall be disclosed to the public in the manner provided by law."',
		legalBasis: 'Art. XI, Sec. 17, 1987 Constitution'
	},
	{
		id: 'consti1:finals:84',
		topicId: 'finals',
		topic: P3,
		tag: 'effects',
		question: 'Under Article XI, Section 18, what is the consequence when a public officer or employee seeks to change citizenship during tenure?',
		options: [
			"The officer incurs an administrative fine equal to six months' salary",
			'The officer forfeits public office and shall be dealt with by law',
			'The officer may retain office provided he takes a dual citizenship oath',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because changing citizenship or acquiring immigrant status carries loss of office as dealt with by law.',
			'True because public officers owe undivided allegiance to the State and Constitution at all times.',
			'False because acquiring immigrant or foreign citizenship during tenure forfeits public office.',
			'False because options a and c are incorrect.',
			'False because option a is incorrect.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'The officer forfeits public office and shall be dealt with by law',
		explanation:
			'B (The officer forfeits public office and shall be dealt with by law). Article XI, Section 18 dictates: "Public officers and employees owe the State and this Constitution allegiance at all times and any public officer or employee who seeks to change his citizenship or acquire the status of an immigrant of another country during his tenure shall be dealt with by law." Seeking immigrant status or foreign citizenship during tenure operates as a forfeiture of public office.',
		legalBasis: 'Art. XI, Sec. 18, 1987 Constitution'
	},
	{
		id: 'consti1:finals:85',
		topicId: 'finals',
		topic: P3,
		tag: 'jurisprudence',
		question:
			'Under Gonzales III v. Office of the President (2012 and 2014), what was the ruling regarding presidential disciplinary authority over the Deputy Ombudsman?',
		options: [
			'Upheld because the President has inherent power to remove officials he appoints',
			'Struck down because granting the President power to remove a Deputy Ombudsman violates the constitutional independence of the Office of the Ombudsman',
			'Upheld provided the removal is concurred in by the Judicial and Bar Council',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because the statutory removal power over the Deputy Ombudsman was declared unconstitutional.',
			'True because executive disciplinary power over the Deputy Ombudsman destroys the independence of the Office of the Ombudsman.',
			'False because JBC concurrence cannot validate an unconstitutional executive power.',
			'False because options a and c are incorrect.',
			'False because option a was rejected by the Court.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'Struck down because granting the President power to remove a Deputy Ombudsman violates the constitutional independence of the Office of the Ombudsman',
		explanation:
			'B (Struck down because granting the President power to remove a Deputy Ombudsman violates the constitutional independence of the Office of the Ombudsman). In Gonzales III v. Office of the President (G.R. No. 196231, September 4, 2012; Resolution on Motion for Reconsideration, January 28, 2014), the Supreme Court declared unconstitutional Section 8(2) of Republic Act No. 6770 insofar as it granted the President disciplinary authority over the Deputy Ombudsman. The Court held that subjecting the Deputy Ombudsman to presidential discipline destroys the political and functional independence guaranteed to the Office under Article XI.',
		legalBasis: 'Art. XI, Sec. 5, 1987 Constitution; Gonzales III v. Office of the President (2012, 2014)'
	},
	{
		id: 'consti1:finals:86',
		topicId: 'finals',
		topic: P3,
		tag: 'memorization',
		question:
			"Under Article XVII, Section 1, amendments to, or revision of, the Constitution may be proposed by:",
		options: [
			"The Congress, upon a vote of two-thirds (2/3) of all its Members",
			"A People's Initiative for both isolated amendments and full structural revisions",
			"The President of the Philippines through an executive proclamation",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because Congress acting as a Constituent Assembly requires a vote of three-fourths (3/4)—not two-thirds—of all its Members (2/3 is for calling a Con-Con under Section 3).",
			"False because a People's Initiative under Section 2 may only propose amendments, never revisions (Lambino v. COMELEC).",
			"False because the President has no constitutional power to propose constitutional amendments or revisions.",
			"False because both a and c are unconstitutional.",
			"False because both a and b misstate Article XVII.",
			"False because options a, b, and c are all false.",
			"True because Section 1 authorizes only Congress by a 3/4 vote of all its Members or a Constitutional Convention."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article XVII, Section 1 provides: \"Any amendment to, or revision of, this Constitution may be proposed by: (1) The Congress, upon a vote of three-fourths of all its Members; or (2) A constitutional convention.\" Option a traps readers by substituting the 2/3 vote required to call a Constitutional Convention under Section 3, while option b falsely extends People's Initiative to revisions.",
		legalBasis:
			"Art. XVII, Secs. 1–3, 1987 Constitution; Lambino v. COMELEC (2006)"
	},
	{
		id: 'consti1:finals:87',
		topicId: 'finals',
		topic: P3,
		tag: 'jurisprudence',
		question:
			'Under Lambino v. Commission on Elections (2006), what legal tests determine whether a proposed constitutional change is an Amendment or a Revision?',
		options: [
			'The Quantitative Test',
			'The Qualitative Test',
			'The Clear and Present Danger Test',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the quantitative test examines the number of provisions altered or deleted.',
			"True because the qualitative test examines the change's impact on basic governmental structure.",
			'False because clear and present danger applies to freedom of speech cases.',
			'False because clear and present danger is not an amendatory test.',
			'True because both the quantitative and qualitative tests govern.',
			'False because clear and present danger is not an amendatory test.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			"E (a and b are true). In Lambino v. Commission on Elections (505 SCRA 160, 2006), the Supreme Court established two tests: (1) The Quantitative Test, which inquires whether the proposed change is so extensive as to overhaul the substantial entirety of the Constitution, and (2) The Qualitative Test, which inquires whether the change accomplishes far-reaching structural alterations in the basic governmental plan (such as changing from presidential-bicameral to parliamentary-unicameral). A People's Initiative can only propose amendments, never revisions.",
		legalBasis: 'Art. XVII, Secs. 1–2, 1987 Constitution; Lambino v. COMELEC (2006)'
	},
	{
		id: 'consti1:finals:88',
		topicId: 'finals',
		topic: P3,
		tag: 'jurisprudence',
		question: 'Under Tolentino v. Commission on Elections (1971), how must proposed constitutional amendments be submitted to the people for ratification?',
		options: [
			'Through piecemeal plebiscites conducted across several election years',
			'In a single, unified plebiscite for all proposals',
			'At the discretion of the Constitutional Convention at any time it chooses',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because piecemeal submission of constitutional amendments is unconstitutional.',
			'True because the single submission rule requires the electorate to see the entire charter framework as a whole.',
			'False because the convention cannot bypass the single submission requirement.',
			'False because options a and c were invalidated.',
			'False because piecemeal plebiscites were invalidated.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'In a single, unified plebiscite for all proposals',
		explanation:
			'B (In a single, unified plebiscite for all proposals). In Tolentino v. Commission on Elections (41 SCRA 702, 1971), the 1971 Constitutional Convention attempted to hold an advance plebiscite on lowering the voting age to 18 before completing the rest of the draft charter. The Supreme Court prohibited the plebiscite, establishing the Doctrine of Single Submission: all constitutional amendments or revisions must be submitted for ratification in a single, unified plebiscite so the electorate can evaluate the changes as an integrated whole.',
		legalBasis: 'Art. XVII, Sec. 4, 1987 Constitution; Tolentino v. COMELEC (1971)'
	},
	{
		id: 'consti1:finals:89',
		topicId: 'finals',
		topic: P3,
		tag: 'memorization',
		question:
			"Under Article XVII, Section 4, a plebiscite to ratify proposed constitutional amendments or revisions proposed by Congress or a Constitutional Convention must be held:",
		options: [
			"Not earlier than 30 days nor later than 60 days after approval",
			"Not earlier than 60 days nor later than 120 days after approval",
			"Simultaneously with the next general local elections regardless of timing",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because 30 to 60 days is not the constitutional ratification window.",
			"False because Section 4 sets the deadline at not later than 90 days—not 120 days—after approval.",
			"False because the mandatory 60-to-90-day window controls.",
			"False because both a and c are incorrect.",
			"False because both a and b are incorrect.",
			"False because options a, b, and c are all false.",
			"True because Article XVII, Section 4 requires the plebiscite to be held not earlier than 60 days nor later than 90 days after approval."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article XVII, Section 4 provides: \"Any amendment to, or revision of, this Constitution under Section 1 hereof shall be valid when ratified by a majority of the votes cast in a plebiscite which shall be held not earlier than sixty days nor later than ninety days after the approval of such amendment or revision.\" Because option b alters the upper limit to 120 days, none of the choices are correct.",
		legalBasis:
			"Art. XVII, Sec. 4, 1987 Constitution"
	},
	{
		id: 'consti1:finals:90',
		topicId: 'finals',
		topic: P3,
		tag: 'requisites',
		question: 'Under Article V, Section 1, which of the following are constitutional qualifications for the exercise of suffrage?',
		options: [
			'Citizen of the Philippines',
			'At least eighteen (18) years of age',
			'Ownership of real property or payment of minimum taxes',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because citizenship is an indispensable requirement for voting.',
			'True because eighteen is the minimum voting age under Section 1.',
			'False because property qualifications are expressly prohibited.',
			'False because option c is an express constitutional prohibition.',
			'True because both citizenship and age are mandatory constitutional qualifications.',
			'False because option c is an express constitutional prohibition.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article V, Section 1 provides: "Suffrage may be exercised by all citizens of the Philippines not otherwise disqualified by law, who are at least eighteen years of age, and who shall have resided in the Philippines for at least one year and in the place wherein they propose to vote for at least six months immediately preceding the election. No literacy, property, or other substantive requirement shall be imposed on the exercise of suffrage."',
		legalBasis: 'Art. V, Sec. 1, 1987 Constitution'
	},
	{
		id: 'consti1:finals:91',
		topicId: 'finals',
		topic: P3,
		tag: 'effects',
		question:
			'Under Article XI, Section 3(7), judgment in cases of impeachment shall not extend further than removal from office and disqualification to hold any office of honor, trust, or profit under the Republic, but the party convicted remains liable to criminal prosecution, trial, and punishment according to law.',
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because impeachment judgment is purely political, preserving subsequent criminal liability.',
			'Incorrect because double jeopardy does not protect an impeached official from criminal prosecution.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Article XI, Section 3(7) explicitly provides: "Judgment in cases of impeachment shall not extend further than removal from office and disqualification to hold any office of honor, trust, or profit under the Republic of the Philippines, but the party convicted shall nevertheless be liable and subject to prosecution, trial, and punishment according to law."',
		legalBasis: 'Art. XI, Sec. 3(7), 1987 Constitution'
	},
	{
		id: 'consti1:finals:92',
		topicId: 'finals',
		topic: P3,
		tag: 'exceptions',
		question:
			'Under Article XI, Section 9, appointments of the Ombudsman and his Deputies are made by the President from a list of nominees prepared by the Judicial and Bar Council, and such appointments require confirmation by the Commission on Appointments.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because appointments to the Office of the Ombudsman do not require CA confirmation.',
			'Correct because Section 9 explicitly commands that such appointments need no confirmation.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article XI, Section 9 states: "The Ombudsman and his Deputies shall be appointed by the President from a list of at least six nominees prepared by the Judicial and Bar Council, and from a list of three nominees for every vacancy thereafter. Such appointments shall require no confirmation. All vacancies shall be filled within three months after they occur."',
		legalBasis: 'Art. XI, Sec. 9, 1987 Constitution'
	},
	{
		id: 'consti1:finals:93',
		topicId: 'finals',
		topic: P3,
		tag: 'memorization',
		question:
			'Under Article XVII, Section 3, Congress may, by a vote of two-thirds of all its Members, call a constitutional convention, or by a majority vote of all its Members, submit to the electorate the question of calling such a convention.',
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because Section 3 establishes these exact alternative voting thresholds for a Constitutional Convention.',
			'Incorrect because these are the verbatim constitutional thresholds.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Article XVII, Section 3 provides: "The Congress may, by a vote of two-thirds of all its Members, call a constitutional convention, or by a majority vote of all its Members, submit to the electorate the question of calling such a convention."',
		legalBasis: 'Art. XVII, Sec. 3, 1987 Constitution'
	},
	{
		id: 'consti1:finals:94',
		topicId: 'finals',
		topic: P3,
		tag: 'jurisprudence',
		question:
			'Under Sanidad v. Commission on Elections (1976), the power to amend or revise the Constitution is a purely political question that is completely beyond the reach of judicial review.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because the amending process presents a justiciable controversy reviewable by the courts.',
			'Correct because Sanidad established that whether constitutional amendatory procedures were observed is justiciable.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. In Sanidad v. Commission on Elections (73 SCRA 333, 1976), the Supreme Court held that the process of amending the Constitution is not a purely political question. The courts have the jurisdiction and duty to determine whether the constitutional provisions governing the amendatory process have been observed.',
		legalBasis: 'Art. VIII, Sec. 1 & Art. XVII, 1987 Constitution; Sanidad v. COMELEC (1976)'
	},
	{
		id: 'consti1:finals:95',
		topicId: 'finals',
		topic: P3,
		tag: 'exceptions',
		question:
			"Under Article XVII, Section 2, a People's Initiative may directly propose both amendments and full structural revisions of the Constitution.",
		options: ['True', 'False'],
		optionExplanations: [
			"Incorrect because a People's Initiative can only propose amendments, never revisions.",
			'Correct because Section 2 allows initiatives on amendments only, as affirmed in Lambino v. COMELEC.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article XVII, Section 2 explicitly limits popular initiative: "Amendments to this Constitution may likewise be directly proposed by the people through initiative..." In Lambino v. COMELEC (505 SCRA 160, 2006) and Defensor-Santiago v. COMELEC (270 SCRA 106, 1997), the Supreme Court ruled that a People\'s Initiative can only propose amendments and cannot be utilized for constitutional revisions.',
		legalBasis: 'Art. XVII, Sec. 2, 1987 Constitution; Lambino v. COMELEC (2006); Defensor-Santiago v. COMELEC (1997)'
	},

	// =========================================================================
	// PART 4: CHAPTERS 1–11 — GENERAL PRINCIPLES TO POWERS OF THE PRESIDENT (Q96–Q120)
	// =========================================================================
	{
		id: 'consti1:finals:96',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question:
			'Under People v. Gregorio Perfecto (1922), what is the legal effect on existing laws when there is a change of sovereignty over a territory?',
		options: [
			'Political laws of the former sovereign are automatically abrogated',
			'Non-political municipal/civil laws remain in force until repealed',
			'All laws of every character are immediately null and void',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because political laws governing relations between sovereign and subject die with the displaced sovereign.',
			'True because private domestic civil laws continue in operation under the new sovereign.',
			'False because municipal private laws survive a change of sovereignty.',
			'False because municipal laws do not become void.',
			'True because both the abrogation of political laws and the survival of municipal laws are correct.',
			'False because municipal laws do not become void.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). In People v. Perfecto (43 Phil. 887, 1922), the Supreme Court held that upon a change of sovereignty (from Spain to the United States), all political laws of the former sovereign are automatically abrogated (ipso facto abolished) because they owe their existence to political allegiance to the displaced sovereign. In contrast, municipal laws regulating private domestic relations remain in force until altered or repealed (Macariola v. Asuncion, 114 SCRA 77).',
		legalBasis: 'People v. Perfecto (1922); Macariola v. Asuncion'
	},
	{
		id: 'consti1:finals:97',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question: 'Under Co Kim Chan v. Valdez Tan Keh (1945), what was the legal status of the Japanese-sponsored government during World War II?',
		options: [
			'A de jure government of lawful title',
			'A de facto government of paramount force',
			'An unlawful band of usurpers whose judicial acts were void ab initio',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because the legitimate Commonwealth government remained the de jure sovereign.',
			'True because the military occupation established effective civil control through paramount force.',
			'False because judicial acts and municipal proceedings of de facto governments remain valid.',
			'False because options a and c are incorrect.',
			'False because de jure status belongs to the lawful Commonwealth government.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'A de facto government of paramount force',
		explanation:
			'B (A de facto government of paramount force). In Co Kim Chan v. Valdez Tan Keh (75 Phil. 113, 1945), the Supreme Court recognized that the government established in the Philippines by the Japanese military was a de facto government of paramount force. Under international law and the principle of state continuity, judicial acts and municipal proceedings of that government which were not of a political complexion remained valid and survived the liberation of the Philippines.',
		legalBasis: 'Co Kim Chan v. Valdez Tan Keh (1945)'
	},
	{
		id: 'consti1:finals:98',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question:
			'Under Tañada v. Tuvera (1985 and 1986), what is the constitutional prerequisite for laws, presidential decrees, and administrative rules with penal sanctions to become effective?',
		options: [
			'Publication in full in the Official Gazette or in a newspaper of general circulation',
			'Approval by a majority of the Supreme Court',
			'A broadcast reading over nationwide radio and television',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because publication in full is an indispensable prerequisite of due process.',
			'False because the judiciary does not vote to approve statutes for effectivity.',
			'False because broadcast announcement cannot substitute for print publication.',
			'False because broadcast announcement cannot substitute for publication.',
			'False because the Court does not vote to make laws effective.',
			'False because options b and c are false.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Publication in full in the Official Gazette or in a newspaper of general circulation',
		explanation:
			'A (Publication in full in the Official Gazette or in a newspaper of general circulation). In Tañada v. Tuvera (146 SCRA 446, 1986), the Supreme Court held that Article 2 of the Civil Code requires all laws, presidential decrees, executive orders, and administrative circulars enforcing penal sanctions to be published in full in the Official Gazette or in a newspaper of general circulation as a condition precedent to their effectivity. The clause "unless it is otherwise provided" refers to the date of effectivity, but never dispenses with publication itself.',
		legalBasis: 'Art. III, Sec. 1, 1987 Constitution; Art. 2, Civil Code; Tañada v. Tuvera (1985, 1986)'
	},
	{
		id: 'consti1:finals:99',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question:
			'Under Laurel v. Misa (1947), what happened to the sovereignty of the legitimate government and the allegiance of Filipino citizens during the Japanese belligerent occupation?',
		options: [
			'Sovereignty was suspended and political allegiance was extinguished',
			'Sovereignty itself was not suspended; only the exercise of sovereign power was temporarily suspended',
			'Citizens were permanently absolved of their allegiance to the Commonwealth Government',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because sovereignty is permanent and continues despite foreign occupation.',
			'True because belligerent occupation merely interrupts the exercise of sovereign rights.',
			'False because political allegiance is continuous and permanent.',
			'False because options a and c are incorrect.',
			'False because sovereignty was not suspended.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'Sovereignty itself was not suspended; only the exercise of sovereign power was temporarily suspended',
		explanation:
			'B (Sovereignty itself was not suspended; only the exercise of sovereign power was temporarily suspended). In Laurel v. Misa (77 Phil. 856, 1947), the Supreme Court ruled that belligerent occupation does not transfer sovereignty nor suspend it. Sovereignty itself was not suspended; only the exercise of sovereign rights was temporarily suspended. Allegiance to the legitimate government remains continuous; hence, citizens who adhered to the enemy giving aid and comfort could be prosecuted for treason.',
		legalBasis: 'Laurel v. Misa (1947)'
	},
	{
		id: 'consti1:finals:100',
		topicId: 'finals',
		topic: P4,
		tag: 'requisites',
		question:
			"Under Pelaez v. Auditor General (1965), a statute delegating legislative authority to the Executive must satisfy:",
		options: [
			"The Completeness Test only",
			"The Sufficient Standard Test only",
			"Either the Completeness Test or the Sufficient Standard Test, whichever is more practical",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the Completeness Test alone cannot validate a delegation.",
			"False because the Sufficient Standard Test alone cannot validate a delegation.",
			"False because the two tests are cumulative, not alternative.",
			"False because both a and c are incorrect.",
			"False because neither test suffices by itself.",
			"False because options a, b, and c all misstate the concurrent requirement.",
			"True because under Pelaez v. Auditor General, BOTH tests must be satisfied concurrently."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). In Pelaez v. Auditor General (15 SCRA 569, 1965), the Supreme Court held that a valid delegation of legislative power must satisfy BOTH the Completeness Test and the Sufficient Standard Test concurrently—never one alone or either in the alternative.",
		legalBasis:
			"Art. VI, Sec. 1, 1987 Constitution; Pelaez v. Auditor General (1965)"
	},
	{
		id: 'consti1:finals:101',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question: 'Under Araneta v. Gatmaitan (1957), why was the Fisheries Act upheld as a valid, complete statute?',
		options: [
			'Because Congress enacted the policy (protecting fish fry and eggs) and left only technical net regulations to the department head',
			'Because the Secretary of Agriculture possessed inherent constitutional power to define penal offenses',
			'Because the President ratified the regulation through an unwritten proclamation',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Congress made the policy choice and delegated only the execution of details.',
			'False because department secretaries have no legislative power to define crimes.',
			'False because executive proclamations must be written and published.',
			'False because option c is incorrect.',
			'False because administrative heads cannot invent crimes.',
			'False because options b and c are false.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Because Congress enacted the policy (protecting fish fry and eggs) and left only technical net regulations to the department head',
		explanation:
			'A (Because Congress enacted the policy [protecting fish fry and eggs] and left only technical net regulations to the department head). In Araneta v. Gatmaitan (101 Phil. 328, 1957), the Supreme Court upheld executive orders banning trawl fishing in San Miguel Bay issued under the Fisheries Act. The Court held that the law was complete in itself because Congress declared the basic policy—to protect fish fry and fish eggs—leaving the administrative agency merely to ascertain which technical devices destroyed them.',
		legalBasis: 'Araneta v. Gatmaitan (1957)'
	},
	{
		id: 'consti1:finals:102',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question: 'Under Angara v. Electoral Commission (1936), what is the function of the Supreme Court in the constitutional system of separation of powers?',
		options: [
			'It acts as an assertive superior department with supremacy over the legislature and executive',
			'It acts as a constitutional arbiter to enforce the supremacy of the Constitution',
			'It can veto bills passed by the National Assembly before presidential signature',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because the judiciary is a coordinate, equal branch, not a superior one.',
			'True because judicial review checks adherence to constitutional boundaries.',
			'False because the judiciary has no pre-enactment veto power.',
			'False because options a and c are incorrect.',
			'False because the judiciary is not superior to other branches.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'It acts as a constitutional arbiter to enforce the supremacy of the Constitution',
		explanation:
			'B (It acts as a constitutional arbiter to enforce the supremacy of the Constitution). In Angara v. Electoral Commission (63 Phil. 139, 1936), Justice Jose P. Laurel established that the judiciary does not assert superiority over coordinate branches; when it exercises judicial review, it is merely enforcing the supremacy of the Constitution as the ordained will of the people. The Court functions as a constitutional mediator to allocate power and ensure each branch remains within its constitutional boundaries.',
		legalBasis: 'Art. VIII, Sec. 1, 1987 Constitution; Angara v. Electoral Commission (1936)'
	},
	{
		id: 'consti1:finals:103',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question:
			'Under Astorga v. Villegas (1974), what happens when the presiding officers of Congress repudiate and withdraw their signatures from an enrolled bill?',
		options: [
			'The bill remains conclusive upon the courts under the Enrolled Bill Doctrine',
			'The document loses its status as an enrolled bill, and the court can examine the Legislative Journal',
			'The bill automatically becomes law by operation of law after thirty days',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because repudiation strips the measure of its enrolled bill status.',
			'True because withdrawal of authentication allows the journal entry to control.',
			'False because unauthenticated bills cannot lapse into law.',
			'False because options a and c are incorrect.',
			'False because the enrolled bill doctrine no longer applies once authentication is withdrawn.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'The document loses its status as an enrolled bill, and the court can examine the Legislative Journal',
		explanation:
			'B (The document loses its status as an enrolled bill, and the court can examine the Legislative Journal). In Astorga v. Villegas (56 SCRA 714, 1974), the presiding officers of Congress withdrew their signatures from House Bill No. 9266 after discovering that amendments approved by the Senate were omitted from the printed text. The Supreme Court held that because the authentication was retracted, the bill ceased to be an enrolled bill; hence, the Court consulted the Legislative Journal, which proved that the text signed by the President was never passed by Congress, rendering the measure void.',
		legalBasis: 'Art. VI, Sec. 16(4), 1987 Constitution; Astorga v. Villegas (1974)'
	},
	{
		id: 'consti1:finals:104',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question: 'Under Marcos v. Manglapus (1989), what is the scope of Executive Power vested in the President under Article VII, Section 1?',
		options: [
			'It is limited strictly and exclusively to the express powers enumerated in Article VII',
			'It includes residual, unstated powers necessary to safeguard public welfare and national security',
			'It authorizes the President to unilaterally suspend the Constitution during economic crises',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because executive power is not an exhaustive list of enumerated items.',
			'True because the presidency possesses broad residual authority as Chief Executive.',
			'False because the President remains subordinate to the Constitution at all times.',
			'False because options a and c are incorrect.',
			'False because the presidency is not limited only to enumerated items.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'It includes residual, unstated powers necessary to safeguard public welfare and national security',
		explanation:
			'B (It includes residual, unstated powers necessary to safeguard public welfare and national security). In Marcos v. Manglapus (177 SCRA 668, 1989), the Supreme Court ruled that the powers of the President are not confined strictly to those specifically enumerated in Article VII. Executive power is a grant of broad authority, which includes residual unstated powers inherent in the office of the Chief Executive necessary to protect the peace, safety, and general welfare of the nation.',
		legalBasis: 'Art. VII, Sec. 1, 1987 Constitution; Marcos v. Manglapus (1989)'
	},
	{
		id: 'consti1:finals:105',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question:
			"Under Lansang v. Garcia (1971), does the Supreme Court have the authority to review the factual basis of the President's suspension of the privilege of the writ of habeas corpus?",
		options: [
			'No, because the declaration of emergency is a non-justiciable political question',
			'Yes, the Court has the jurisdiction to inquire into whether the President acted with arbitrary factual basis',
			'Yes, but only if Congress grants express permission through a concurrent resolution',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because Lansang explicitly abandoned the political question defense in emergency cases.',
			'True because the Court can examine the sufficiency of the factual basis to check arbitrariness.',
			'False because judicial review derives from the Constitution, not congressional permission.',
			'False because options a and c are incorrect.',
			'False because Barcelon v. Baker and Montenegro v. Castañeda were abandoned.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'Yes, the Court has the jurisdiction to inquire into whether the President acted with arbitrary factual basis',
		explanation:
			'B (Yes, the Court has the jurisdiction to inquire into whether the President acted with arbitrary factual basis). In Lansang v. Garcia (42 SCRA 448, 1971), the Supreme Court abandoned the old doctrine of Barcelon v. Baker and Montenegro v. Castañeda (which treated suspension of the writ as an unreviewable political question). The Court held that the judiciary has the jurisdiction to review the sufficiency of the factual basis of the suspension of the privilege of the writ of habeas corpus to determine whether the President acted arbitrarily. This doctrine was subsequently elevated to an express constitutional rule in Article VII, Section 18 of the 1987 Constitution.',
		legalBasis: 'Art. VII, Sec. 18, 1987 Constitution; Lansang v. Garcia (1971)'
	},
	{
		id: 'consti1:finals:106',
		topicId: 'finals',
		topic: P4,
		tag: 'memorization',
		question:
			"Under Article VII, Section 18, what are the constitutional powers of Congress when the President proclaims martial law or suspends the privilege of the writ of habeas corpus?",
		options: [
			"Congress, voting separately by a two-thirds (2/3) vote of all its Members, may revoke the proclamation or suspension",
			"A revocation by Congress may be set aside by the President upon certification of continuing rebellion",
			"Congress can only revoke the proclamation if concurred in by the Supreme Court",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because Congress revokes martial law by voting JOINTLY (not separately) by at least a MAJORITY (not 2/3) of all its Members.",
			"False because Section 18 expressly decrees that congressional revocation shall not be set aside by the President.",
			"False because congressional revocation is independent of Supreme Court review.",
			"False because both a and c violate Section 18.",
			"False because both a and b misstate Section 18.",
			"False because options a, b, and c are all false.",
			"True because none of the statements accurately reflect the revocation mechanism under Article VII, Section 18."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article VII, Section 18 provides: \"The Congress, voting jointly, by a vote of at least a majority of all its Members in regular or special session, may revoke such proclamation or suspension, which revocation shall not be set aside by the President.\" Option a falsely states separate voting and a 2/3 threshold, option b allows presidential override, and option c adds a non-existent judicial concurrence requirement.",
		legalBasis:
			"Art. VII, Sec. 18, 1987 Constitution"
	},
	{
		id: 'consti1:finals:107',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question: 'Under U.S. v. Ang Tang Ho (43 Phil. 1), why was Act No. 2868 delegating price-fixing authority to the Governor-General invalidated?',
		options: [
			'Because the Legislature failed to define what constituted an "extraordinary rise" in rice prices, failing the Completeness Test',
			'Because the Governor-General was a foreign national',
			'Because the price of rice was below market cost',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the statute surrendered fundamental policy formulation to the executive.',
			'False because nationality was not the basis of the ruling.',
			'False because commercial cost was not the constitutional issue.',
			'False because option c is incorrect.',
			'False because option b is incorrect.',
			'False because options b and c are false.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Because the Legislature failed to define what constituted an "extraordinary rise" in rice prices, failing the Completeness Test',
		explanation:
			'A (Because the Legislature failed to define what constituted an "extraordinary rise" in rice prices, failing the Completeness Test). In U.S. v. Ang Tang Ho (43 Phil. 1, 1922), the Supreme Court struck down Act No. 2868, which authorized the Governor-General to fix rice prices whenever conditions arose resulting in an "extraordinary rise." The Court held that the Legislature failed to establish what constituted an extraordinary rise, leaving the executive to determine what the policy should be, which violated the non-delegation doctrine.',
		legalBasis: 'Art. VI, Sec. 1, 1987 Constitution; U.S. v. Ang Tang Ho (1922)'
	},
	{
		id: 'consti1:finals:108',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question: 'Under Calalang v. Williams (70 Phil. 726), how did the Supreme Court define Social Justice?',
		options: [
			'Equal division of all private landholdings among the poor',
			'The humanization of laws and the equalization of social and economic forces by the State',
			'Total immunity of labor unions from civil and criminal liability',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because social justice does not mandate communist expropriation of private property.',
			"True because this is Justice Laurel's classic definition of social justice.",
			'False because labor unions remain subject to law.',
			'False because options a and c are incorrect.',
			'False because option a is incorrect.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'The humanization of laws and the equalization of social and economic forces by the State',
		explanation:
			'B (The humanization of laws and the equalization of social and economic forces by the State). In Calalang v. Williams (70 Phil. 726, 1940), Justice Jose P. Laurel defined social justice: "Social justice is \'neither communism, nor despotism, nor atomism, nor anarchy,\' but the humanization of laws and the equalization of social and economic forces by the State so that justice in its rational and objectively secular conception may at least be approximated."',
		legalBasis: 'Art. II, Sec. 10, 1987 Constitution; Calalang v. Williams (1940)'
	},
	{
		id: 'consti1:finals:109',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question: 'Under Oposa v. Factoran (224 SCRA 792, 1993), what was the doctrine established regarding environmental rights and legal standing?',
		options: [
			'The right to a balanced and healthful ecology is a self-executing constitutional right',
			'Minor children have legal standing to sue on behalf of themselves and future generations under the doctrine of Intergenerational Responsibility',
			'Timber licensing agreements are permanent private contracts protected from cancellation by the Contract Clause',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Article II, Section 16 is self-executing and actionable.',
			'True because intergenerational standing was recognized in Oposa.',
			'False because timber licenses are mere privileges subject to police power regulation, not contracts under the non-impairment clause.',
			'False because timber licenses are not protected contracts.',
			'True because both the self-executing right to ecology and intergenerational standing are correct.',
			'False because timber licenses are not protected contracts.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). In Oposa v. Factoran (224 SCRA 792, 1993), the Supreme Court ruled that Article II, Section 16 (the right to a balanced and healthful ecology) is a self-executing provision that does not require implementing legislation. The Court recognized that minor children possess legal standing to sue on behalf of themselves and succeeding generations under the doctrine of Intergenerational Responsibility, and held that timber license agreements are revocable privileges rather than contracts protected by the non-impairment clause.',
		legalBasis: 'Art. II, Sec. 16, 1987 Constitution; Oposa v. Factoran (1993)'
	},
	{
		id: 'consti1:finals:110',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question:
			"Under Republic v. Villasor (1973), can public funds deposited in government depository banks be garnished to satisfy a money judgment against the State?",
		options: [
			"Yes, because a court judgment immediately waives state immunity from execution",
			"Yes, without need of legislative appropriation once the judgment becomes final and executory",
			"Yes, provided the bank account is labeled as an operational account",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because suability does not imply liability or authorize garnishment of public funds.",
			"False because disbursements from the treasury strictly require an appropriation made by law under Art. VI, Sec. 29(1).",
			"False because operational public funds remain immune from garnishment.",
			"False because both a and c are incorrect.",
			"False because both a and b are incorrect.",
			"False because options a, b, and c are all false.",
			"True because public funds cannot be garnished without an appropriation made by law passed by Congress."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). In Republic v. Villasor (54 SCRA 83, 1973), the Supreme Court held that public funds in the custody of government officials or depository banks cannot be garnished to satisfy a court judgment against the State. Under Article VI, Section 29(1), no money shall be paid out of the Treasury except in pursuance of an appropriation made by law.",
		legalBasis:
			"Art. VI, Sec. 29(1) & Art. XVI, Sec. 3, 1987 Constitution; Republic v. Villasor (1973)"
	},
	{
		id: 'consti1:finals:111',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question: 'Under Estrada v. Desierto (2001), what is the extent of presidential immunity from suit after leaving office?',
		options: [
			'Absolute immunity from all civil and criminal suits for acts committed during life',
			'Immunity covers only official acts performed during tenure, and does not shield a former President from prosecution for non-official or criminal acts',
			'Former presidents can never be prosecuted unless first impeached by Congress',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because absolute presidential immunity from suit ends upon cessation from office.',
			'True because unlawful or criminal offenses like plunder are not official acts of the presidency and are prosecutable after tenure.',
			'False because an official who has resigned or left office is no longer subject to impeachment as a prerequisite to prosecution.',
			'False because options a and c were rejected in Estrada v. Desierto.',
			'False because absolute lifetime immunity was rejected.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'Immunity covers only official acts performed during tenure, and does not shield a former President from prosecution for non-official or criminal acts',
		explanation:
			'B (Immunity covers only official acts performed during tenure, and does not shield a former President from prosecution for non-official or criminal acts). In Estrada v. Desierto (353 SCRA 452, 2001), the Supreme Court held that absolute presidential immunity from suit applies only during incumbency. Once a president ceases to hold office, unlawful, non-official, or criminal acts committed while in office (such as plunder) are not protected by post-tenure immunity.',
		legalBasis: 'Art. VII, Sec. 1, 1987 Constitution; Estrada v. Desierto (2001)'
	},
	{
		id: 'consti1:finals:112',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question:
			'Under Olaguer v. Military Commission No. 34 (1987), do military commissions have jurisdiction to try civilians when civil courts are open and functioning?',
		options: [
			'Yes, during any proclaimed state of martial law',
			'No, civilians cannot be tried by military tribunals as long as regular civil courts are open and functioning',
			'Yes, provided the civilian is charged with rebellion or sedition',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because martial law does not confer military jurisdiction over civilians when civil courts are functioning.',
			'True because the "open court doctrine" guarantees civilian due process.',
			'False because rebellion cases involving civilians must be tried in regular civil courts when open.',
			'False because options a and c were expressly overruled.',
			'False because option a was expressly overruled.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'No, civilians cannot be tried by military tribunals as long as regular civil courts are open and functioning',
		explanation:
			'B (No, civilians cannot be tried by military tribunals as long as regular civil courts are open and functioning). In Olaguer v. Military Commission No. 34 (150 SCRA 144, 1987), the Supreme Court overruled Aquino v. Military Commission No. 2, ruling that military tribunals have no jurisdiction to try civilians for alleged offenses as long as regular civil courts are open and functioning. This doctrine was elevated to an express constitutional rule in Article VII, Section 18 of the 1987 Constitution.',
		legalBasis: 'Art. VII, Sec. 18, 1987 Constitution; Olaguer v. Military Commission No. 34 (1987)'
	},
	{
		id: 'consti1:finals:113',
		topicId: 'finals',
		topic: P4,
		tag: 'memorization',
		question:
			"Under Article VI, Section 11, what is the scope of a legislator's parliamentary immunity from arrest?",
		options: [
			"Immunity from arrest in all offenses punishable by not more than six (6) years imprisonment even while Congress is in recess",
			"Immunity from arrest in all offenses punishable by up to twelve (12) years imprisonment while Congress is in session",
			"Absolute lifetime immunity from criminal arrest for any offense committed while in office",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because parliamentary immunity from arrest applies only while Congress is in session, never during recess.",
			"False because the constitutional penalty ceiling is not more than six (6) years, not twelve.",
			"False because the privilege is neither absolute nor lifetime.",
			"False because both a and c are incorrect.",
			"False because both a and b misstate Section 11.",
			"False because options a, b, and c are all false.",
			"True because immunity applies strictly to offenses punishable by not more than 6 years imprisonment while Congress is in session."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article VI, Section 11 provides: \"A Senator or Member of the House of Representatives shall, in all offenses punishable by not more than six years imprisonment, be privileged from arrest while the Congress is in session.\" (People v. Jalosjos, 324 SCRA 689). Option a fails by extending the privilege to congressional recess, while option b doubles the 6-year threshold.",
		legalBasis:
			"Art. VI, Sec. 11, 1987 Constitution; People v. Jalosjos (2000)"
	},
	{
		id: 'consti1:finals:114',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question:
			'Under Osmeña v. Pendatun (109 Phil. 863), does the constitutional speech and debate privilege protect a legislator from internal disciplinary sanctions imposed by his own legislative chamber?',
		options: [
			'Yes, because speech on the floor of Congress is completely immune from any sanction',
			'No, because the speech and debate clause protects legislators from liability in outside forums, but does not bar internal discipline by their own house',
			'Yes, unless the speech constitutes treason against the Republic',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because the privilege protects against outside bodies ("in any other place"), not internal discipline.',
			'True because each house has constitutional authority to discipline its members for disorderly behavior under Art. VI, Sec. 16(3).',
			'False because the house may discipline members for disorderly behavior regardless of treason.',
			'False because options a and c are incorrect.',
			'False because option a was rejected by the Court.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		key: 'No, because the speech and debate clause protects legislators from liability in outside forums, but does not bar internal discipline by their own house',
		explanation:
			'B (No, because the speech and debate clause protects legislators from liability in outside forums, but does not bar internal discipline by their own house). In Osmeña v. Pendatun (109 Phil. 863, 1960), the Supreme Court held that the constitutional parliamentary immunity for speech and debate protects members from being questioned in "any other place," but does not shield a legislator from disciplinary action (such as suspension or expulsion) by his own legislative chamber under Article VI, Section 16(3) for disorderly behavior.',
		legalBasis: 'Art. VI, Secs. 11 & 16(3), 1987 Constitution; Osmeña v. Pendatun (1960)'
	},
	{
		id: 'consti1:finals:115',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question: 'Under Belgica v. Ochoa (2013), why was the legislative Pork Barrel System (PDAF) declared unconstitutional?',
		options: [
			'It allowed individual legislators to participate in post-enactment budget execution, violating separation of powers',
			'It conferred lump-sum appropriation authority to individual lawmakers, violating the non-delegation doctrine',
			'It authorized the Supreme Court to identify public infrastructure projects',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because budget implementation belongs exclusively to the Executive branch.',
			'True because legislative appropriation cannot be delegated to individual members.',
			'False because the judiciary was not involved in project identification.',
			'False because option c is incorrect.',
			'True because both separation of powers and non-delegation violations were central grounds.',
			'False because option c is incorrect.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). In Belgica v. Ochoa (G.R. No. 208566, November 19, 2013), the Supreme Court struck down the Priority Development Assistance Fund (PDAF). The Court held that allowing legislators to identify projects post-enactment violated the separation of powers, as the power of Congress ends at budget enactment, leaving execution exclusively to the Executive. Additionally, conferring lump-sum funds for individual allocation violated the non-delegation doctrine.',
		legalBasis: 'Art. VI, Secs. 1 & 27(2), Art. VII, Sec. 17, 1987 Constitution; Belgica v. Ochoa (2013)'
	},
	{
		id: 'consti1:finals:116',
		topicId: 'finals',
		topic: P4,
		tag: 'exceptions',
		question:
			'Under Article VI, Section 13, a Senator or Member of the House of Representatives may be validly appointed to any civil office created during the term for which he was elected, provided he resigns from Congress prior to accepting the appointment.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because forbidden offices cannot be accepted during the elected term even if the member resigns.',
			"Correct because Section 13 establishes an absolute ban on appointments to offices created during the member's elected term."
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article VI, Section 13 creates two distinct prohibitions: (1) Incompatible offices, which a legislator cannot hold without forfeiting his seat; and (2) Forbidden offices, which provides: "Neither shall he be appointed to any office which may have been created or the emoluments whereof increased during the term for which he was elected." A legislator cannot accept a forbidden office during the term for which he was elected even if he resigns from Congress before accepting the appointment.',
		legalBasis: 'Art. VI, Sec. 13, 1987 Constitution'
	},
	{
		id: 'consti1:finals:117',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question:
			'Under Endencia v. David (93 Phil. 696), Congress has the constitutional power to enact an interpretive statute overriding a prior constitutional interpretation rendered by the Supreme Court.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because the power of constitutional and statutory interpretation belongs exclusively to the judiciary.',
			'Correct because Endencia established that Congress cannot reverse judicial interpretations by legislative fiat.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. In Endencia v. David (93 Phil. 696, 1953), the Supreme Court declared unconstitutional Section 13 of Republic Act No. 590, in which Congress declared that taxing judicial salaries did not constitute a diminution of compensation. The Court held that the power to interpret and construe the Constitution belongs exclusively to the Judiciary; Congress cannot usurp this function by passing an interpretive statute overriding a judicial decision.',
		legalBasis: 'Art. VIII, Sec. 1, 1987 Constitution; Endencia v. David (1953)'
	},
	{
		id: 'consti1:finals:118',
		topicId: 'finals',
		topic: P4,
		tag: 'exceptions',
		question:
			'Under Article VI, Section 28(2), Congress may, by law, authorize the President to fix within specified limits, and subject to such limitations and restrictions as it may impose, tariff rates, import and export quotas, and tonnage dues.',
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because Section 28(2) explicitly authorizes delegating flexible tariff powers to the President.',
			'Incorrect because this flexible tariff delegation is expressly provided in the Constitution.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Article VI, Section 28(2) provides: "The Congress may, by law, authorize the President to fix within specified limits, and subject to such limitations and restrictions as it may impose, tariff rates, import and export quotas, tonnage and wharfage dues, and other duties or imposts within the framework of the national development program of the Government."',
		legalBasis: 'Art. VI, Sec. 28(2), 1987 Constitution'
	},
	{
		id: 'consti1:finals:119',
		topicId: 'finals',
		topic: P4,
		tag: 'memorization',
		question:
			"Under Article VII, Section 17, the President's power of control over executive departments means the President may alter, modify, or nullify decisions of subordinate executive officers and substitute his own judgment.",
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because the power of control includes the authority to alter or reverse subordinate actions.',
			'Incorrect because control permits substituting executive judgment.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Article VII, Section 17 provides: "The President shall have control of all the executive departments, bureaus, and offices. He shall ensure that the laws be faithfully executed." Under Mondano v. Silvosa (97 Phil. 143), control is the power of an officer to alter, modify, or set aside what a subordinate officer has done and substitute the superior\'s own judgment.',
		legalBasis: 'Art. VII, Sec. 17, 1987 Constitution; Mondano v. Silvosa (1955)'
	},
	{
		id: 'consti1:finals:120',
		topicId: 'finals',
		topic: P4,
		tag: 'jurisprudence',
		question:
			'Under Abakada Guro Party List v. Executive Secretary (2005), standby authority granted to the President to increase the Value-Added Tax rate upon verification of statutory deficit and revenue thresholds was declared unconstitutional as an invalid delegation of the taxing power.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because the standby authority was upheld as valid contingent legislation.',
			'Correct because the Court ruled that the provision was valid contingent legislation where the executive merely verified factual triggers.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. In Abakada Guro Party List v. Executive Secretary (469 SCRA 1, 2005), the Supreme Court upheld Republic Act No. 9337. The Court held that granting standby authority to the President to raise the VAT rate from 10% to 12% upon verification of specific revenue thresholds was valid contingent legislation. Congress enacted a complete policy and set exact mathematical triggers; the Executive exercised no legislative discretion and merely verified the factual contingency upon which the statutory rate took effect.',
		legalBasis: 'Art. VI, Secs. 1 & 28, 1987 Constitution; Abakada Guro Party List v. Executive Secretary (2005)'
	},

	// =========================================================================
	// SUPPLEMENTAL FINALS DRILL — SECTIONS I–V (55 ITEMS, IDs 211–265)
	// =========================================================================

	// ---- Section I: Judicial Department & Supreme Court (14 Items) ----
	{
		id: 'consti1:finals:211',
		topicId: 'finals',
		topic: P6_1,
		tag: 'requisites',
		question:
			"Under the 1987 Constitution and statutory laws governing the Philippine Judiciary, appointees to which of the following courts are required to have fifteen (15) years or more of service as a lower court judge or in the practice of law in the Philippines?",
		options: [
			"Sandiganbayan",
			"Regional Trial Courts (RTC)",
			"Metropolitan and Municipal Trial Courts (MeTC/MTC)",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the Sandiganbayan charter requires only at least 10 years of judicial service or law practice.",
			"False because B.P. Blg. 129, Sec. 15 requires only at least 10 years of law practice or public office requiring Bar admission for RTC judges.",
			"False because B.P. Blg. 129, Sec. 26 requires only at least 5 years of law practice or qualifying public office for first-level court judges.",
			"False because neither a nor c requires 15 years.",
			"False because both Sandiganbayan and RTC require 10 years, not 15.",
			"False because none of the listed courts require 15 years.",
			"True because the 15-year requirement applies to the Supreme Court, Court of Appeals, Court of Tax Appeals, and Shari’ah High Court—not to any of the courts listed above."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). The 15-year judicial service or law practice requirement applies to the Supreme Court (Art. VIII, Sec. 7(1)), Court of Appeals (B.P. Blg. 129, Sec. 7), Court of Tax Appeals (R.A. 1125, as amended by R.A. 9282), and Shari’ah High Court (R.A. 11054). In contrast, the Sandiganbayan (P.D. 1606, as amended by R.A. 10660) and Regional Trial Courts (B.P. 129, Sec. 15) require at least 10 years, while MeTCs/MTCs (B.P. 129, Sec. 26) require at least 5 years.",
		legalBasis:
			"Art. VIII, Sec. 7(1); B.P. Blg. 129, Secs. 7, 15 & 26; R.A. 9282; P.D. 1606 (as amended by R.A. 10660)"
	},
	{
		id: 'consti1:finals:212',
		topicId: 'finals',
		topic: P6_1,
		tag: 'exceptions',
		question:
			'Under the 1987 Constitution, judicial and adjudicatory power is vested exclusively in the Supreme Court and statutory lower courts, to the total exclusion of special constitutional bodies.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because the Constitution directly vests specific adjudicatory authority over election contests in bodies outside the regular courts.',
			'Correct because while plenary judicial power rests in regular courts, the Constitution delegates election adjudication to COMELEC, SET, HRET, and PET.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article VIII, Section 1 vests plenary judicial power in one Supreme Court and lower statutory courts, but the Constitution expressly confers adjudicatory jurisdiction over election contests upon the COMELEC (Article IX-C, Section 2(2)), the Senate and House Electoral Tribunals (Article VI, Section 17), and the Supreme Court sitting en banc as the Presidential Electoral Tribunal (Article VII, Section 4). In Macalintal v. PET (G.R. No. 191618, Nov. 23, 2010), the Supreme Court affirmed that these bodies exercise essentially judicial functions by express constitutional mandate, subject to Supreme Court review via certiorari for grave abuse of discretion.',
		legalBasis: 'Art. VIII, Sec. 1; Art. VI, Sec. 17; Art. VII, Sec. 4; Art. IX-C, Sec. 2(2); Macalintal v. PET (2010)'
	},
	{
		id: 'consti1:finals:213',
		topicId: 'finals',
		topic: P6_1,
		tag: 'memorization',
		question:
			'The Supreme Court derives its existence and judicial power directly from the sovereign Filipino people through the 1987 Constitution rather than from an ordinary statutory act of Congress.',
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because the sovereign people directly ordained the Supreme Court and vested it with judicial power through the Constitution.',
			'Incorrect because only lower courts are created by Congress; the Supreme Court is the sole constitutional court.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Under the Preamble and Article II, Section 1 of the 1987 Constitution, sovereignty resides in the people and all government authority emanates from them. Through Article VIII, Section 1, the people directly established one Supreme Court and vested judicial power in it, making it a co-equal constitutional creation that Congress cannot abolish or dismantle by ordinary statute (Angara v. Electoral Commission, 63 Phil. 139).',
		legalBasis: 'Preamble; Art. II, Sec. 1; Art. VIII, Sec. 1, 1987 Constitution; Angara v. Electoral Commission'
	},
	{
		id: 'consti1:finals:214',
		topicId: 'finals',
		topic: P6_1,
		tag: 'memorization',
		question:
			"Under Article VIII, Section 5(1) of the 1987 Constitution, the Supreme Court's original jurisdiction—exercised concurrently with lower courts subject to the Doctrine of Hierarchy of Courts—covers:",
		options: [
			'Cases affecting ambassadors, other public ministers, and consuls',
			'Petitions for certiorari, prohibition, and mandamus',
			'Petitions for quo warranto and habeas corpus',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because foreign diplomats are expressly enumerated to prevent diplomatic embarrassment and protect foreign relations.',
			'True because these extraordinary writs are expressly listed under Section 5(1).',
			'True because both special remedies are likewise expressly enumerated in Section 5(1).',
			'False because option b is also expressly covered by Section 5(1).',
			'False because option c is equally enumerated.',
			'True because all three options accurately enumerate the Supreme Court’s constitutional original jurisdiction.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article VIII, Section 5(1) grants the Supreme Court original jurisdiction over cases affecting ambassadors, other public ministers, and consuls (to ensure high-level handling of delicate international law and diplomatic immunity matters, as noted in The Holy See v. Rosario), and over petitions for certiorari, prohibition, mandamus, quo warranto, and habeas corpus. Under B.P. Blg. 129, this original jurisdiction is concurrent with the Court of Appeals and Regional Trial Courts, making direct filing with the Supreme Court subject to the Doctrine of Hierarchy of Courts (Gios-Samar v. DOTC, G.R. No. 217158, Mar. 12, 2019; Bañez v. Concepcion, G.R. No. 159508, Aug. 29, 2012).',
		legalBasis: 'Art. VIII, Sec. 5(1), 1987 Constitution; B.P. Blg. 129; Gios-Samar v. DOTC (2019)'
	},
	{
		id: 'consti1:finals:215',
		topicId: 'finals',
		topic: P6_1,
		tag: 'memorization',
		question:
			'Under Article VIII, Section 5(2) of the 1987 Constitution, Congress cannot deprive the Supreme Court of its irreducible appellate jurisdiction to review final judgments and orders of lower courts in cases involving:',
		options: [
			'Constitutionality of laws or treaties',
			'Tax legality or lower court jurisdiction',
			'Reclusion perpetua or higher penalties, and pure questions of law',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Section 5(2)(a) covers the validity of any treaty, law, proclamation, ordinance, or regulation.',
			'True because Section 5(2)(b) and (c) explicitly cover tax legality and lower court jurisdictional disputes.',
			'True because Section 5(2)(d) and (e) explicitly enumerate both categories.',
			'False because option b is also part of Section 5(2).',
			'False because option c is equally part of Section 5(2).',
			'True because all three options complete the five irreducible appellate categories under Section 5(2).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article VIII, Section 5(2) explicitly vests the Supreme Court with irreducible appellate jurisdiction to review, revise, reverse, modify, or affirm final judgments of lower courts involving: (a) constitutionality or validity of any treaty, international or executive agreement, law, presidential decree, proclamation, order, instruction, ordinance, or regulation; (b) legality of any tax, impost, assessment, or toll; (c) jurisdiction of any lower court; (d) criminal cases imposing reclusion perpetua or higher; and (e) pure errors or questions of law. While conceptually referred to as judicial review, "appellate jurisdiction" is the formal constitutional vehicle for reviewing lower court judgments.',
		legalBasis: 'Art. VIII, Sec. 5(2), 1987 Constitution'
	},
	{
		id: 'consti1:finals:216',
		topicId: 'finals',
		topic: P6_1,
		tag: 'exceptions',
		question:
			'Under Article VIII, Section 2 and Article VI, Section 30 of the 1987 Constitution, which of the following legislative actions regarding court jurisdiction is Congress constitutionally permitted to perform?',
		options: [
			'Define, prescribe, and apportion court jurisdiction',
			'Deprive the Supreme Court of Section 5 jurisdiction',
			'Increase Supreme Court appellate jurisdiction without its concurrence',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Congress has general statutory authority to allocate jurisdiction among courts within constitutional guardrails.',
			'False because Section 2 expressly forbids depriving the Supreme Court of its irreducible Section 5 jurisdiction.',
			'False because Article VI, Section 30 prohibits increasing SC appellate jurisdiction without its advice and concurrence.',
			'False because option c violates Article VI, Section 30.',
			'False because option b is expressly unconstitutional.',
			'False because options b and c violate express constitutional limits.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Define, prescribe, and apportion court jurisdiction',
		explanation:
			'A (Define, prescribe, and apportion court jurisdiction). Article VIII, Section 2 vests Congress with plenary power to define, prescribe, and apportion the jurisdiction of the various courts (such as through B.P. Blg. 129), but explicitly establishes an irreducible minimum guardrail barring Congress from stripping the Supreme Court of its Section 5 jurisdiction or undermining judicial security of tenure. Furthermore, Article VI, Section 30 prohibits Congress from passing any law increasing the Supreme Court’s appellate jurisdiction without its advice and concurrence.',
		legalBasis: 'Art. VIII, Sec. 2 & Art. VI, Sec. 30, 1987 Constitution'
	},
	{
		id: 'consti1:finals:217',
		topicId: 'finals',
		topic: P6_1,
		tag: 'effects',
		question:
			"The Supreme Court's exclusive rule-making power under Article VIII, Section 5(5) is classified as a quasi-legislative (subordinate legislative) power delegated by Congress.",
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because quasi-legislative power is delegated to executive administrative agencies, not the Judiciary.',
			'Correct because the Supreme Court’s rule-making power is strictly an auxiliary administrative and procedural power, not quasi-legislative.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Under the separation of powers, plenary legislative power belongs exclusively to Congress under Article VI, Section 1, while quasi-legislative power (subordinate legislation) is delegated to administrative agencies to issue implementing rules. In contrast, the Supreme Court’s authority under Article VIII, Section 5(5) is purely procedural and auxiliary administrative in nature, expressly barred from creating, modifying, or diminishing substantive rights (Manila Electric Co. v. Pasay Transportation Co., 57 Phil. 600; Endencia v. David, 93 Phil. 696).',
		legalBasis: 'Art. VI, Sec. 1; Art. VIII, Sec. 5(5); Manila Electric Co. v. Pasay Transportation Co.; Endencia v. David'
	},
	{
		id: 'consti1:finals:218',
		topicId: 'finals',
		topic: P6_1,
		tag: 'effects',
		question:
			'When the Supreme Court adjudicates actual controversies and checks grave abuse of discretion, it is exercising quasi-judicial power.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because quasi-judicial power belongs only to administrative agencies performing adjudicatory tasks.',
			'Correct because the Supreme Court exercises true judicial power, and its members are constitutionally barred from designation to quasi-judicial agencies.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article VIII, Section 1 vests pure judicial power in the Supreme Court and lower courts, whereas quasi-judicial power refers to adjudicatory authority granted to executive or administrative bodies (such as the NLRC, SEC, or COA). Moreover, Article VIII, Section 12 explicitly prohibits Members of the Supreme Court and other courts from being designated to any agency performing quasi-judicial or administrative functions (In re Judge Manzano, 166 SCRA 246, 1988; Noblejas v. Teehankee, 23 SCRA 405, 1968).',
		legalBasis: 'Art. VIII, Secs. 1 & 12, 1987 Constitution; In re Judge Manzano (1988); Noblejas v. Teehankee (1968)'
	},
	{
		id: 'consti1:finals:219',
		topicId: 'finals',
		topic: P6_1,
		tag: 'requisites',
		question:
			"Under Article VIII, Section 5(5) of the 1987 Constitution, which of the following statements accurately describe the Supreme Court's procedural rule-making power?",
		options: [
			"Congress retains the constitutional power to repeal, alter, or supplement the Rules of Court",
			"Procedural rules may vary across courts of the same grade depending on regional caseload",
			"Procedural rules may modify substantive rights when necessary for the speedy disposition of cases",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the 1987 Constitution stripped Congress of its former power under the 1935 and 1973 charters to repeal, alter, or supplement judicial rules.",
			"False because Section 5(5) mandates that rules shall be uniform for all courts of the same grade.",
			"False because Section 5(5) strictly prohibits rules from diminishing, increasing, or modifying substantive rights.",
			"False because both a and c violate Section 5(5).",
			"False because both a and b are unconstitutional.",
			"False because options a, b, and c are all false.",
			"True because every listed statement contradicts the constitutional limits on judicial rule-making."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article VIII, Section 5(5) vests exclusive rule-making power in the Supreme Court—removing Congress’s former power to alter or repeal the Rules of Court (Echegaray v. Secretary of Justice; Baguio Market Vendors Multi-Purpose Cooperative v. Cabato-Cortes, G.R. No. 165922, Feb. 26, 2010)—and mandates that such rules must be uniform for all courts of the same grade and shall not diminish, increase, or modify substantive rights.",
		legalBasis:
			"Art. VIII, Sec. 5(5), 1987 Constitution; Baguio Market Vendors Multi-Purpose Cooperative v. Cabato-Cortes (2010); Echegaray v. Secretary of Justice"
	},
	{
		id: 'consti1:finals:220',
		topicId: 'finals',
		topic: P6_1,
		tag: 'memorization',
		question:
			'Beyond interpreting laws and adjudicating disputes, which of the following are auxiliary administrative powers vested directly in the Supreme Court under Article VIII, Sections 5 and 6?',
		options: [
			'Administrative supervision over all courts and personnel',
			'Temporary detail of judges and change of venue',
			'Appointment of judicial officials and employees',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Section 6 grants the Supreme Court exclusive administrative supervision over the entire Judiciary.',
			'True because Section 5(3) and (4) empower the Court to temporarily assign judges up to 6 months and order changes of venue.',
			'True because Section 5(6) empowers the Court to appoint all Judiciary personnel under Civil Service Law.',
			'False because option b is also an auxiliary administrative power under Section 5(3)–(4).',
			'False because option c is equally granted under Section 5(6).',
			'True because all three are explicit non-adjudicatory administrative powers of the Supreme Court.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article VIII, Sections 5(3)–(6) and 6 vest the Supreme Court with auxiliary administrative powers, including temporary assignment of lower court judges (not exceeding 6 months without consent), ordering a change of venue to avoid a miscarriage of justice, promulgating procedural rules, appointing all officials and employees of the Judiciary, and exercising exclusive administrative supervision over all courts and judicial personnel (requiring referral of complaints against judges to the SC first under Caoibes v. Ombudsman and Maceda v. Vasquez).',
		legalBasis: 'Art. VIII, Secs. 5(3)–(6) & 6, 1987 Constitution; Caoibes v. Ombudsman; Maceda v. Vasquez'
	},
	{
		id: 'consti1:finals:221',
		topicId: 'finals',
		topic: P6_1,
		tag: 'effects',
		question:
			'Under Article VIII, Section 3 of the 1987 Constitution, the guarantee of "fiscal autonomy" granted to the Judiciary ensures:',
		options: [
			"Non-reduction below the previous year's appropriation",
			'Automatic and regular release of approved funds',
			'Exemption from Commission on Audit post-audit',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Congress may not reduce the Judiciary’s budget below the prior year’s appropriation.',
			'True because approved appropriations must be released automatically without executive interference or DBM delays.',
			'False because fiscally autonomous constitutional bodies remain subject to COA post-audit under Article IX-D.',
			'False because option c violates Article IX-D, Sections 2 and 3.',
			'True because both accurately reflect judicial fiscal autonomy, while COA post-audit still applies.',
			'False because option c violates Article IX-D, Sections 2 and 3.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article VIII, Section 3 expressly decrees that the Judiciary shall enjoy fiscal autonomy, that its appropriations may not be reduced by the legislature below the amount appropriated for the previous year, and that after approval, such funds shall be automatically and regularly released (Bengzon v. Drilon, 208 SCRA 133; CSC v. DBM). However, under Article IX-D, Sections 2(1) and 3, constitutional bodies granted fiscal autonomy remain strictly subject to COA post-audit.',
		legalBasis: 'Art. VIII, Sec. 3 & Art. IX-D, Secs. 2–3, 1987 Constitution; Bengzon v. Drilon; CSC v. DBM'
	},
	{
		id: 'consti1:finals:222',
		topicId: 'finals',
		topic: P6_1,
		tag: 'memorization',
		question:
			'Which of the following constitutional characteristics are shared by BOTH the Supreme Court and the three Independent Constitutional Commissions (CSC, COMELEC, and COA)?',
		options: [
			'Direct constitutional creation and fiscal autonomy',
			'Independent rule-making, staff appointment, salary protection, and impeachability',
			'Mandatory confirmation by the Commission on Appointments',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because both are directly created by the Constitution and enjoy automatic release of appropriations.',
			'True because both share procedural rule-making, internal staffing, non-diminution of pay, and impeachment removal.',
			'False because Constitutional Commissioners require CA confirmation, whereas Supreme Court Justices do not.',
			'False because option c does not apply to the Supreme Court.',
			'True because options a and b represent shared safeguards, while option c is a major distinction.',
			'False because option c does not apply to the Supreme Court.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Articles VIII (Secs. 1, 3, 5(5)–(6), 10) and IX-A (Secs. 1, 3–6), together with Article VI, Section 25(5) (budgetary augmentation) and Article XI, Section 2 (impeachment), bestow parallel structural independence upon both the Supreme Court and the Constitutional Commissions. However, under Article VIII, Section 9, Supreme Court Justices are appointed from a JBC shortlist without CA confirmation, unlike Article IX Commissioners who require CA consent.',
		legalBasis: 'Art. VIII, Secs. 1, 3, 5, 9–10; Art. IX-A, Secs. 1, 3–6; Art. VI, Sec. 25(5); Art. XI, Sec. 2'
	},
	{
		id: 'consti1:finals:223',
		topicId: 'finals',
		topic: P6_1,
		tag: 'exceptions',
		question:
			'After initial administrative investigation by the Office of the Court Administrator (OCA), which body holds the exclusive constitutional authority to order the dismissal of a lower court judge?',
		options: [
			'The Supreme Court sitting en banc',
			'A Division of the Supreme Court',
			'The Office of the Ombudsman',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Article VIII, Section 11 reserves dismissal of lower court judges strictly to the Supreme Court en banc.',
			'False because a Division may only impose lesser administrative sanctions, never dismissal.',
			'False because the Ombudsman lacks disciplinary authority over judges and must refer complaints to the Supreme Court.',
			'False because option c is false.',
			'False because option b cannot order dismissal.',
			'False because options b and c are false.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'The Supreme Court sitting en banc',
		explanation:
			'A (The Supreme Court sitting en banc). Article VIII, Section 11 mandates that the Supreme Court en banc has the power to discipline judges of lower courts or order their dismissal by a vote of a majority of the Members who actually took part in the deliberations and voted thereon. In People v. Gacott (246 SCRA 14), the Court clarified that while Divisions may impose minor disciplinary penalties, dismissal of a judge or severe suspension exceeding one year requires en banc action; complaints against judges filed with the Ombudsman must likewise be referred to the Supreme Court first (Caoibes v. Ombudsman; Maceda v. Vasquez).',
		legalBasis: 'Art. VIII, Sec. 11, 1987 Constitution; People v. Gacott; Caoibes v. Ombudsman; Maceda v. Vasquez'
	},
	{
		id: 'consti1:finals:224',
		topicId: 'finals',
		topic: P6_1,
		tag: 'memorization',
		question:
			'Presidential appointments of the Chief Justice and Associate Justices of the Supreme Court require the consent and confirmation of the Commission on Appointments (CA).',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because the 1987 Constitution removed CA confirmation for judicial appointments to insulate the courts from politics.',
			'Correct because Justices and judges are appointed by the President solely from a JBC shortlist without needing CA confirmation.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article VIII, Section 9 explicitly mandates that Members of the Supreme Court and judges of lower courts shall be appointed by the President from a list of at least three nominees prepared by the Judicial and Bar Council (JBC) for every vacancy, and that "such appointments need no confirmation."',
		legalBasis: 'Art. VIII, Sec. 9, 1987 Constitution'
	},

	// ---- Section II: Constitutional Commissions — Structure, Staggering, Reappointment & Procedure (9 Items) ----
	{
		id: 'consti1:finals:225',
		topicId: 'finals',
		topic: P6_2,
		tag: 'memorization',
		question:
			'Under Article IX of the 1987 Constitution, which of the Independent Constitutional Commissions are constitutionally composed of a Chairman and two (2) Commissioners (three members in total)?',
		options: [
			'Civil Service Commission',
			'Commission on Audit',
			'Commission on Elections',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Article IX-B, Section 1(1) provides for 1 Chairman and 2 Commissioners.',
			'True because Article IX-D, Section 1(1) provides for 1 Chairman and 2 Commissioners.',
			'False because Article IX-C, Section 1(1) composes COMELEC of 1 Chairman and 6 Commissioners, totaling 7 members.',
			'False because COMELEC has 7 members, not 3.',
			'True because both CSC and COA have 3 members, whereas COMELEC has 7.',
			'False because COMELEC has 7 members, not 3.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article IX-B, Section 1(1) establishes the Civil Service Commission with 1 Chairman and 2 Commissioners; Article IX-D, Section 1(1) establishes the Commission on Audit with 1 Chairman and 2 Commissioners; and Article IX-C, Section 1(1) establishes the Commission on Elections with 1 Chairman and 6 Commissioners so it may sit in two Divisions of three members each.',
		legalBasis: 'Art. IX-B, Sec. 1(1); Art. IX-C, Sec. 1(1); Art. IX-D, Sec. 1(1), 1987 Constitution'
	},
	{
		id: 'consti1:finals:226',
		topicId: 'finals',
		topic: P6_2,
		tag: 'effects',
		question:
			'Although the CSC, COMELEC, and COA do not belong to the Legislative Department, they operate as independent constitutional agencies under Article IX exercising which combination of functions?',
		options: [
			'Administrative or executive functions',
			'Quasi-legislative functions',
			'Quasi-judicial functions',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because each Commission administers specialized mandates in personnel, elections, or auditing.',
			'True because each exercises subordinate rule-making power to issue implementing rules and circulars having the force of law.',
			'True because each resolves contested cases, appeals, or disputes within its specialized sphere.',
			'False because option b is also exercised by all three Commissions.',
			'False because option c is also exercised by all three Commissions.',
			'True because all three Commissions exercise administrative, quasi-legislative, and quasi-judicial powers.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Under Article IX, the CSC, COMELEC, and COA are independent constitutional bodies separate from the three traditional branches. While plenary lawmaking belongs exclusively to Congress under Article VI, Section 1, each Commission performs executive/administrative tasks, quasi-legislative subordinate rule-making ("filling in the details" with regulations having the force of law, City Government of Makati v. CSC), and quasi-judicial adjudication (disciplinary appeals for CSC, election contests for COMELEC, and audit disallowance appeals for COA).',
		legalBasis: 'Art. IX, 1987 Constitution; City Government of Makati v. CSC'
	},
	{
		id: 'consti1:finals:227',
		topicId: 'finals',
		topic: P6_2,
		tag: 'requisites',
		question:
			'Under the 3–5–7 rotational scheme (staggering of terms) governing Constitutional Commissions under Article IX, which of the following structural rules maintain the staggered intervals?',
		options: [
			'Fixed reckoning date on February 2, 1987',
			'Unexpired balance only for mid-term vacancies',
			'Regular vacancies every two years',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because all 7-year term cycles are counted uniformly from February 2, 1987 regardless of late assumption.',
			'True because an appointee filling a premature vacancy serves only the predecessor’s remaining term.',
			'True because initial 3-, 5-, and 7-year terms followed by full 7-year regular terms produce 2-year vacancy intervals.',
			'False because option b is also a mandatory component of the rotational scheme.',
			'False because option c is likewise an essential design feature.',
			'True because all three rules operate together to preserve institutional continuity and prevent day-one commission packing.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article IX-B, C, and D, Section 1(2) prescribe initial uneven terms of 7, 5, and 3 years, full 7-year regular terms thereafter, and unexpired-portion-only appointments for mid-term vacancies. In Gaminde v. Commission on Audit (347 SCRA 655, 2000), the Supreme Court held that all 7-year term cycles are reckoned strictly from February 2, 1987, ensuring staggered 2-year intervals remain unbroken even when an appointee assumes office late.',
		legalBasis: 'Art. IX-B, C & D, Sec. 1(2), 1987 Constitution; Gaminde v. COA (2000)'
	},
	{
		id: 'consti1:finals:228',
		topicId: 'finals',
		topic: P6_2,
		tag: 'effects',
		question:
			'Under the 3–5–7 rotational scheme for a 3-member Constitutional Commission, if the Chairman is already in Year 6 going into Year 7 when a new President assumes office, it is mathematically impossible for that President to appoint all three members during a single 6-year term.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because vacancies occurring in Years 1, 3, and 5 all fall within a single 6-year presidency.',
			'Correct because if Seat 1 expires in Year 1, Seat 2 expires in Year 3, and Seat 3 expires in Year 5, one President appoints all three members.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Because regular vacancies under the 3–5–7 scheme recur every two (2) years, when a Chairman’s 7th year ends during the President’s Year 1 (Month 12), the second seat naturally expires in Year 3 (Month 36), and the third seat expires in Year 5 (Month 60)—all within the President’s 72-month term. The rotational system is thus designed not to make appointing all three mathematically impossible, but to prevent day-one "commission packing" by spacing appointments across the presidency.',
		legalBasis: 'Art. IX-B & IX-D, Sec. 1(2), 1987 Constitution'
	},
	{
		id: 'consti1:finals:229',
		topicId: 'finals',
		topic: P6_2,
		tag: 'exceptions',
		question:
			'The constitutional staggering of 7-year terms under Article IX applies equally to the Senate Electoral Tribunal (SET) and House of Representatives Electoral Tribunal (HRET).',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because staggered 7-year terms apply exclusively to the three Constitutional Commissions under Article IX.',
			'Correct because SET and HRET members serve co-terminus with their congressional terms or judicial designations.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. The 3–5–7 staggered 7-year rotational scheme is prescribed strictly for the CSC, COMELEC, and COA under Article IX. In contrast, Electoral Tribunals are constituted under Article VI, Section 17 after each Congress organizes, and their members serve co-terminus with their legislative tenure or judicial designation.',
		legalBasis: 'Art. VI, Sec. 17 & Art. IX, 1987 Constitution'
	},
	{
		id: 'consti1:finals:230',
		topicId: 'finals',
		topic: P6_2,
		tag: 'exceptions',
		question:
			"Applying the constitutional ban against reappointment in Constitutional Commissions (Article IX) and the parallel ban against presidential reelection (Article VII), which of the following movements are constitutionally ALLOWED?",
		options: [
			"Commissioner promoted to Chairman for a fresh, full seven-year term regardless of prior years served",
			"Elected President running for immediate reelection to a second consecutive six-year term",
			"Resigned Chairman appointed as Commissioner",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because under Funa v. Villar, promotion to Chairman is valid only for the unexpired term of a premature vacancy and aggregate service can never exceed 7 years.",
			"False because Article VII, Section 4 absolutely bars an elected President from any reelection.",
			"False because resignation does not reset eligibility, and moving down to a lower post is a prohibited reappointment.",
			"False because both a and c are unconstitutional.",
			"False because both a and b are unconstitutional.",
			"False because options a, b, and c are all prohibited.",
			"True because all three listed movements violate express constitutional bans."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Under Article IX, Section 1(2) and Funa v. COA Chairman / Villar (670 SCRA 579, 2012), promoting a sitting Commissioner to Chairman cannot confer a fresh 7-year term and is capped at an aggregate 7-year ceiling, while moving down from Chairman to Commissioner is a prohibited reappointment. Similarly, Article VII, Section 4 expressly declares that \"The President shall not be eligible for any reelection.\"",
		legalBasis:
			"Art. VII, Sec. 4; Art. IX-C & IX-D, Sec. 1(2); Matibag v. Benipayo; Funa v. Villar (2012)"
	},
	{
		id: 'consti1:finals:231',
		topicId: 'finals',
		topic: P6_2,
		tag: 'requisites',
		question:
			'Under Article IX-A, Section 6 of the 1987 Constitution, which of the following rules govern the promulgation and scope of rules on pleadings and practice issued by the CSC, COMELEC, and COA?',
		options: [
			'Promulgation strictly en banc',
			'Non-modification of substantive rights',
			'Binding effect over regular trial courts',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because individual divisions or members cannot issue procedural rules; only the Commission en banc may do so.',
			'True because Section 6 expressly forbids Commission rules from diminishing, increasing, or modifying substantive rights.',
			'False because Commission rules apply strictly before the Commission itself; the Rules of Court prevail in regular courts.',
			'False because option c violates Aruelo v. CA.',
			'True because options a and b accurately state Section 6, whereas option c violates Aruelo v. CA.',
			'False because option c is false.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article IX-A, Section 6 empowers each Commission en banc to promulgate its own rules concerning pleadings and practice before it or any of its offices, provided they do not diminish, increase, or modify substantive rights. In Aruelo v. Court of Appeals, the Supreme Court ruled that Commission procedural rules apply strictly to proceedings before the Commission and cannot restrict pleadings in regular courts, where the Supreme Court’s Rules of Court prevail. Under Article IX-A, Section 7, all Commission decisions require a collegial majority vote of ALL its Members (Orocio v. COA).',
		legalBasis: 'Art. IX-A, Secs. 6–7, 1987 Constitution; Aruelo v. CA; Orocio v. COA'
	},
	{
		id: 'consti1:finals:232',
		topicId: 'finals',
		topic: P6_2,
		tag: 'memorization',
		question:
			'The constitutional rule that a case or matter is "deemed submitted for decision or resolution upon the filing of the last pleading, brief, or memorandum" applies to which of the following bodies?',
		options: [
			'The Judiciary',
			'The Constitutional Commissions',
			'Congress in enacting general statutes',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Article VIII, Section 15(2) applies this rule to trigger the 24-, 12-, and 3-month judicial decision deadlines.',
			'True because Article IX-A, Section 7 uses the exact same rule to trigger their mandatory 60-day period to decide.',
			'False because Congress follows legislative readings and committee rules rather than adjudicatory pleadings.',
			'False because option c does not apply.',
			'True because the rule applies to judicial and quasi-judicial constitutional adjudicators, not general lawmaking.',
			'False because option c does not apply.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article VIII, Section 15(1)–(2) establishes that a case is deemed submitted upon filing of the last pleading, brief, or memorandum, requiring decisions within 24 months (Supreme Court), 12 months (lower collegiate courts), and 3 months (all other lower courts). Article IX-A, Section 7 mirrors this exact trigger for the CSC, COMELEC, and COA, mandating resolution within 60 days from submission. This adjudicatory rule does not govern general legislative enactments or routine executive acts.',
		legalBasis: 'Art. VIII, Sec. 15(1)–(2) & Art. IX-A, Sec. 7, 1987 Constitution'
	},
	{
		id: 'consti1:finals:233',
		topicId: 'finals',
		topic: P6_2,
		tag: 'exceptions',
		question:
			"If an aggrieved party seeks judicial review of a final decision rendered by a Constitutional Commission, which of the following remedies and deadlines accurately reflect Article IX-A, Section 7 and the Rules of Court?",
		options: [
			"Final CSC decisions are elevated directly to the Supreme Court via Rule 64 within 30 days",
			"Final COMELEC En Banc rulings are elevated to the Supreme Court via Rule 65 within 60 days from notice",
			"Final decisions of a COMELEC Division may be elevated directly to the Supreme Court via Rule 64 without first filing a Motion for Reconsideration before the COMELEC En Banc",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because final CSC decisions are appealed to the Court of Appeals under Rule 43 within 15 days (R.A. 7902; Fabian v. Desierto).",
			"False because final COMELEC and COA En Banc rulings are governed by Rule 64, which sets a strict 30-day—not 60-day—period.",
			"False because a Motion for Reconsideration before the Commission En Banc is a mandatory prerequisite; the SC only reviews final En Banc rulings via Rule 64 (Esteves v. Sarmiento).",
			"False because both a and c are procedurally erroneous.",
			"False because both a and b misstate the proper court or reglementary period.",
			"False because options a, b, and c are all false.",
			"True because none of the listed remedies or periods accurately state the rules on judicial review of Commission rulings."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Under Article IX-A, Section 7 and Rule 64 (in relation to Rule 65), final en banc decisions of COMELEC and COA are brought to the Supreme Court within 30 days (not 60) after a mandatory Motion for Reconsideration before the COMELEC En Banc (Esteves v. Sarmiento, G.R. No. 182374, Nov. 11, 2008; Ambil v. COMELEC), whereas final CSC decisions are appealed to the Court of Appeals under Rule 43 within 15 days (R.A. 7902; Fabian v. Desierto).",
		legalBasis:
			"Art. IX-A, Sec. 7; Rules 64, 65 & 43; R.A. 7902; Fabian v. Desierto; Esteves v. Sarmiento (2008)"
	},

	// ---- Section III: CSC, COA, COMELEC, Certiorari & Solicitor General (15 Items) ----
	{
		id: 'consti1:finals:234',
		topicId: 'finals',
		topic: P6_3,
		tag: 'exceptions',
		question:
			"Under Article IX-B, Section 2(1) of the 1987 Constitution, which of the following entities are embraced by the Civil Service System?",
		options: [
			"Non-chartered GOCCs incorporated under the general Corporation Code",
			"Private corporate subsidiaries of chartered GOCCs organized under the Corporation Code",
			"Private corporations operating public utilities under a legislative franchise",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because GOCCs without original charters are governed by the Labor Code, not the Civil Service.",
			"False because corporate subsidiaries organized under the Corporation Code are excluded from Civil Service jurisdiction (NASECO v. NLRC).",
			"False because private utility franchisees remain private employers governed by the Labor Code.",
			"False because neither a nor c is embraced by the Civil Service.",
			"False because neither a nor b has an original legislative charter.",
			"False because all three entities are governed by the Labor Code.",
			"True because Article IX-B, Section 2(1) embraces only government branches/agencies and GOCCs with original charters."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article IX-B, Section 2(1) states that the civil service embraces all branches, subdivisions, instrumentalities, and agencies of the Government, including GOCCs with original charters. Non-chartered GOCCs, corporate subsidiaries formed under the Corporation Code (NASECO v. NLRC; Lumanta v. NLRC), and private utility franchisees are all governed by the Labor Code.",
		legalBasis:
			"Art. IX-B, Sec. 2(1), 1987 Constitution; NASECO v. NLRC; Lumanta v. NLRC"
	},
	{
		id: 'consti1:finals:235',
		topicId: 'finals',
		topic: P6_3,
		tag: 'memorization',
		question:
			'Under Article IX-D, Section 2(1) of the 1987 Constitution, the Commission on Audit’s constitutional duty to "examine, audit, and settle" all public accounts extends to:',
		options: [
			'All government branches, LGUs, and fiscally autonomous bodies',
			'Chartered and non-chartered GOCCs and their subsidiaries',
			'Subsidized NGOs and special public funds',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because all departments, local governments, and independent commissions are subject to COA audit.',
			'True because COA’s jurisdiction covers both chartered and non-chartered GOCCs, including local water districts.',
			'True because non-governmental entities receiving public subsidy/equity and special statutory levies are subject to audit.',
			'False because option b is also covered by COA’s audit jurisdiction.',
			'False because option c is likewise subject to post-audit.',
			'True because all three categories fall squarely under COA’s comprehensive audit jurisdiction.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article IX-D, Section 2(1) vests COA with power to examine, audit, and settle all accounts pertaining to government revenues, receipts, expenditures, and uses of funds/property across all branches, LGUs, fiscally autonomous bodies, state universities, GOCCs and their subsidiaries (Davao City Water District v. COA), subsidized NGOs, and special statutory funds (COCOFED v. Republic; Caltex v. COA). Under Section 2(2), COA has exclusive power to disallow Irregular, Unnecessary, Excessive, Extravagant, or Unconscionable (IUEEU) expenditures.',
		legalBasis: 'Art. IX-D, Sec. 2(1)–(2), 1987 Constitution; Davao City Water District v. COA; COCOFED v. Republic'
	},
	{
		id: 'consti1:finals:236',
		topicId: 'finals',
		topic: P6_3,
		tag: 'exceptions',
		question:
			'To promote commercial flexibility, Congress may validly pass a statute exempting a government subsidiary or a special public levy fund invested in private corporate shares from the audit jurisdiction of the Commission on Audit.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because Article IX-D, Section 3 imposes an absolute ban on any statutory exemption from COA audit.',
			'Correct because no law may exempt any government entity, subsidiary, or investment of public funds "in any guise whatever" from COA.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article IX-D, Section 3 expressly commands that "no law shall be passed exempting any entity of the Government or its subsidiary in any guise whatever, or any investment of public funds, from the jurisdiction of the Commission on Audit." In COCOFED v. Republic, the Supreme Court invalidated statutory attempts to reclassify public coconut levy funds invested in UCPB shares as private property to evade COA audit.',
		legalBasis: 'Art. IX-D, Sec. 3, 1987 Constitution; COCOFED v. Republic'
	},
	{
		id: 'consti1:finals:237',
		topicId: 'finals',
		topic: P6_3,
		tag: 'memorization',
		question:
			'Under Article IX-C of the 1987 Constitution and election statutes, which of the following bodies participate in enforcing election laws or prosecuting election offenses?',
		options: [
			'Commission on Elections',
			'Deputized AFP and PNP',
			'Department of Justice',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because COMELEC is the primary executive and administrative enforcer of all election laws.',
			'True because COMELEC may deputize law enforcement agencies and the AFP with the President’s concurrence.',
			'True because the DOJ shares concurrent jurisdiction with COMELEC to investigate and prosecute election offenses.',
			'False because option b also exercises deputized enforcement roles.',
			'False because option c shares concurrent prosecutorial authority.',
			'True because all three participate in election law enforcement and prosecution.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article IX-C, Section 2(1), (4), and (6) designate COMELEC as primary enforcer of election laws, authorize it to deputize the AFP and PNP with Presidential concurrence, and empower it to investigate and prosecute election offenses (concurrently with the DOJ under R.A. No. 9369 and Arroyo v. DOJ). However, Congress—not COMELEC—remains the exclusive canvassing body for President and Vice-President (Art. VII, Sec. 4; Macalintal v. COMELEC).',
		legalBasis: 'Art. IX-C, Sec. 2(1), (4) & (6); R.A. 9369; Arroyo v. DOJ'
	},
	{
		id: 'consti1:finals:238',
		topicId: 'finals',
		topic: P6_3,
		tag: 'requisites',
		question:
			'When exercising its quasi-judicial authority over an election protest or pre-proclamation controversy, the COMELEC En Banc may validly hear and decide the case directly at first instance without prior adjudication by a COMELEC Division.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because only purely administrative election matters may be handled directly en banc at first instance.',
			'Correct because Article IX-C, Section 3 mandates that all adjudicatory election cases be heard and decided first in Division.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article IX-C, Section 3 mandates that COMELEC may sit en banc or in two divisions, provided that all election cases shall be heard and decided in Division, and Motions for Reconsideration shall be decided by the Commission en banc. Adjudicating an election contest directly en banc at first instance is void for lack of jurisdiction (Soller v. COMELEC; Canicosa v. COMELEC).',
		legalBasis: 'Art. IX-C, Sec. 3, 1987 Constitution; Soller v. COMELEC; Canicosa v. COMELEC'
	},
	{
		id: 'consti1:finals:239',
		topicId: 'finals',
		topic: P6_3,
		tag: 'exceptions',
		question:
			"A journalist published a newspaper article criticizing the COMELEC's bidding and purchase of ballot boxes, prompting the COMELEC to cite him in contempt. Under Philippine jurisprudence, in which of the following proceedings may the COMELEC validly exercise contempt powers?",
		options: [
			'Election contests',
			'Pre-proclamation or disqualification adjudications',
			'Administrative procurement of ballot boxes',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because trying election protests is a quasi-judicial function where contempt power applies.',
			'True because adjudicatory and quasi-judicial fact-finding proceedings validly support contempt powers.',
			'False because purchasing supplies is purely administrative, where COMELEC has no contempt power.',
			'False because option c is purely administrative.',
			'True because contempt power is valid only in quasi-judicial functions and void in purely administrative tasks.',
			'False because option c is purely administrative.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). In Guevara v. COMELEC (104 Phil. 268, 1958)—the exact ballot-box procurement criticism case—and Masangcay v. COMELEC (6 SCRA 27, 1962), the Supreme Court held that contempt power is inherently judicial and cannot be exercised by COMELEC in purely administrative or ministerial tasks such as purchasing election supplies; a contempt order issued therein is null and void and challengeable via certiorari. Conversely, COMELEC may validly cite persons for contempt during quasi-judicial proceedings or adjudicatory fact-finding (Bedol v. COMELEC).',
		legalBasis: 'Guevara v. COMELEC (1958); Masangcay v. COMELEC (1962); Bedol v. COMELEC'
	},
	{
		id: 'consti1:finals:240',
		topicId: 'finals',
		topic: P6_3,
		tag: 'memorization',
		question:
			'Under Article IX-C, Section 2(2) of the 1987 Constitution and Javier v. COMELEC, an election "contest" encompasses any dispute affecting a candidate’s lawful title to elective office relating to:',
		options: [
			'Qualifications',
			'Returns',
			'Elections',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because challenges to eligibility, citizenship, age, or domicile via quo warranto fall under qualifications.',
			'True because disputes over canvassing, Board of Canvassers proceedings, or tampered returns fall under returns.',
			'True because protests over poll conduct, ballot counting, appreciation, fraud, or terrorism fall under elections.',
			'False because option b (Returns) is also a core element of a contest.',
			'False because option c is equally part of the constitutional phrase.',
			'True because "elections, returns, and qualifications" form the three integrated elements of an election contest.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article IX-C, Section 2(2), Article VI, Section 17, and Article VII, Section 4 use the comprehensive phrase "elections, returns, and qualifications." In Javier v. COMELEC (G.R. Nos. L-68379-81), the Supreme Court held that "contest" is liberally construed to cover any matter involving the title or claim of title to an elective office, made before or after proclamation, materialized through election protests, quo warranto petitions, pre-proclamation controversies, or COC cancellations.',
		legalBasis:
			'Art. IX-C, Sec. 2(2); Art. VI, Sec. 17; Art. VII, Sec. 4; Javier v. COMELEC (Mnemonic: Q-R-E — Qualifications, Returns, Elections)'
	},
	{
		id: 'consti1:finals:241',
		topicId: 'finals',
		topic: P6_3,
		tag: 'memorization',
		question:
			'Under Article IX-C, Section 2(2) of the 1987 Constitution, election contests involving which of the following elective local officials fall within the exclusive ORIGINAL jurisdiction of the COMELEC?',
		options: [
			'Regional, provincial, and city officials',
			'Municipal officials',
			'Barangay and SK officials',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Section 2(2) expressly vests exclusive original jurisdiction over these three levels in the COMELEC.',
			'False because municipal election contests fall under the exclusive original jurisdiction of the RTC, with COMELEC exercising appellate jurisdiction.',
			'False because barangay and SK contests fall under the exclusive original jurisdiction of the MTC, with COMELEC exercising appellate jurisdiction.',
			'False because barangay and SK contests originate in the MTC, not the COMELEC.',
			'False because municipal contests originate in the RTC.',
			'False because municipal and barangay contests fall under COMELEC’s appellate, not original, jurisdiction.',
			'False because option a is true.'
		],
		correctIndex: 0,
		key: 'Regional, provincial, and city officials',
		explanation:
			'A (Regional, provincial, and city officials). Article IX-C, Section 2(2) vests COMELEC with exclusive original jurisdiction over all contests relating to elective regional, provincial, and city officials, and exclusive appellate jurisdiction over all contests involving elective municipal officials decided by trial courts of general jurisdiction (RTC) and elective barangay officials decided by trial courts of limited jurisdiction (MTC/MeTC, governed by A.M. No. 07-4-15-SC).',
		legalBasis: 'Art. IX-C, Sec. 2(2), 1987 Constitution; A.M. No. 07-4-15-SC'
	},
	{
		id: 'consti1:finals:242',
		topicId: 'finals',
		topic: P6_3,
		tag: 'exceptions',
		question:
			'In election matters, the Regional Trial Court (RTC) exercises appellate jurisdiction over barangay election contests originally decided by the Municipal Trial Court (MTC).',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because barangay election contests are appealable exclusively to the COMELEC, never to the RTC.',
			'Correct because the RTC’s sole appellate jurisdiction in election matters is limited to voter inclusion and exclusion cases from the MTC.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Under Article IX-C, Section 2(2) and Flores v. COMELEC (184 SCRA 484), any statute routing barangay election contest appeals from the MTC to the RTC is unconstitutional because COMELEC holds exclusive appellate jurisdiction over them. The RTC’s narrow election-related appellate jurisdiction applies solely to voter inclusion and exclusion petitions originally tried by the MTC (B.P. Blg. 881, Secs. 138–139; R.A. No. 8189, Sec. 33), where the RTC’s ruling is final and executory.',
		legalBasis: 'Art. IX-C, Sec. 2(2); Flores v. COMELEC (184 SCRA 484); B.P. 881, Secs. 138–139; R.A. 8189, Sec. 33'
	},
	{
		id: 'consti1:finals:243',
		topicId: 'finals',
		topic: P6_3,
		tag: 'exceptions',
		question:
			"Under Article IX-C, Section 2(3), the COMELEC has direct administrative jurisdiction to adjudicate individual petitions for voter inclusion or exclusion involving a citizen's right to vote.",
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because the Constitution explicitly excludes questions involving the right to vote from COMELEC’s administrative powers.',
			'Correct because determining an individual citizen’s right to vote is a purely judicial question reserved exclusively for regular courts.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Article IX-C, Section 2(3) empowers the COMELEC to decide all administrative questions affecting elections "except those involving the right to vote." In Pungutan v. Abubakar, the Supreme Court held that voter eligibility is a purely judicial question cognizable exclusively by regular trial courts (MTC originally, RTC on appeal) via inclusion/exclusion proceedings, preventing administrative disenfranchisement by the COMELEC.',
		legalBasis: 'Art. IX-C, Sec. 2(3), 1987 Constitution; Pungutan v. Abubakar'
	},
	{
		id: 'consti1:finals:244',
		topicId: 'finals',
		topic: P6_3,
		tag: 'requisites',
		question:
			'After precinct tabulation and canvassing by the Board of Canvassers (or COMELEC En Banc as NBOC for Senators/Party-Lists), which requisites must concur before sole jurisdiction over election contests involving a winning Member of Congress transfers from the COMELEC to the SET or HRET?',
		options: [
			'Valid proclamation',
			'Proper oath of office',
			'Assumption of office',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because a candidate must first be validly proclaimed elected by the proper canvassing board.',
			'True because taking a valid oath of office is the second mandatory step to become a Member.',
			'True because actual assumption of office completes the transfer of jurisdiction to the Electoral Tribunal.',
			'False because taking a proper oath of office (option b) must also concur.',
			'False because assumption of office must also occur.',
			'True because all three requisites must concur under Reyes v. COMELEC.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Under Article VI, Section 17 and Reyes v. COMELEC, the HRET and SET acquire exclusive jurisdiction as sole judge of contests relating to their respective members only after the winning candidate becomes a full "Member" through the concurrence of three requisites: (1) valid proclamation, (2) proper oath of office, and (3) assumption of office. Prior to all three, COMELEC retains jurisdiction over pre-proclamation controversies and COC cancellations.',
		legalBasis: 'Art. VI, Sec. 17, 1987 Constitution; Reyes v. COMELEC'
	},
	{
		id: 'consti1:finals:245',
		topicId: 'finals',
		topic: P6_3,
		tag: 'memorization',
		question:
			'Distinguishing the "election period" from the "campaign period" under Philippine election law, which of the following statements are accurate?',
		options: [
			'Fixed 120-day election period',
			'Varying 90-, 45-, or 15-day campaign periods',
			'Premature campaigning liability upon COC filing',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because unless otherwise fixed by COMELEC, it starts 90 days before and ends 30 days after election day.',
			'True because campaign windows vary by office and end two days before election day.',
			'False because under Penera v. COMELEC, a COC filer is legally a candidate only at the start of the campaign period.',
			'False because option c contradicts Penera v. COMELEC.',
			'True because options a and b match constitutional and statutory periods, whereas option c contradicts Penera.',
			'False because option c is false.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article IX-C, Section 9 and B.P. Blg. 881, Section 3 fix the election period at 90 days before to 30 days after election day (120 days total, governing gun bans and personnel transfers). R.A. No. 7166, Section 5 sets campaign periods at 90 days (President, VP, Senators, Party-List), 45 days (House and local officials), and 15 days (barangay), ending 2 days before election day. Under R.A. No. 9369 and Penera v. COMELEC (G.R. No. 181613), candidate liability for unlawful acts begins only upon the start of the official campaign period.',
		legalBasis: 'Art. IX-C, Sec. 9; B.P. 881, Sec. 3; R.A. 7166, Sec. 5; R.A. 9369; Penera v. COMELEC'
	},
	{
		id: 'consti1:finals:246',
		topicId: 'finals',
		topic: P6_3,
		tag: 'exceptions',
		question:
			'Which of the following features are expressly established by Article IX-C, Sections 6 and 7 of the 1987 Constitution regarding political parties and voting systems?',
		options: [
			'Free and open multi-party system',
			'General prohibition on block voting',
			'Exception for registered party-list groups',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Section 6 promotes a free and open party system evolving according to the people’s free choice.',
			'True because Section 7 invalidates block votes cast for political parties in regular candidate elections.',
			'True because Section 7 expressly exempts political parties registered under the party-list system from the block-voting ban.',
			'False because option b (general prohibition on block voting) is also mandated by Section 7.',
			'False because option c is an express textual exception.',
			'True because all three accurately state the constitutional rules on parties and block voting.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article IX-C, Section 6 mandates a free and open party system allowed to evolve according to the free choice of the people (broadening democratization and representation, though carrying practical risks of candidate proliferation and coalition instability). Article IX-C, Section 7 decrees that no votes cast in favor of a political party, organization, or coalition shall be valid, except for those registered under the party-list system.',
		legalBasis: 'Art. IX-C, Secs. 6 & 7, 1987 Constitution'
	},
	{
		id: 'consti1:finals:247',
		topicId: 'finals',
		topic: P6_3,
		tag: 'requisites',
		question:
			'Whereas an ordinary appeal reviews errors of judgment involving both facts and law, a Special Civil Action for Certiorari under Rule 65 (and Rule 64 for COMELEC/COA En Banc rulings) is strictly limited to which jurisdictional grounds?',
		options: [
			'Lack of jurisdiction',
			'Excess of jurisdiction',
			'Grave abuse of discretion',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because acting without legal authority from the outset is a ground for certiorari.',
			'True because exceeding statutory or constitutional bounds during proceedings is a ground for certiorari.',
			'True because whimsical, capricious, or despotic abuse amounting to lack or excess of jurisdiction warrants certiorari.',
			'False because option b (excess of jurisdiction) is also an explicit Rule 65 ground.',
			'False because option c is the primary constitutional ground for reviewing COMELEC rulings.',
			'True because all three constitute the exclusive jurisdictional grounds under Rule 65.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Under Rule 65, Section 1 (in relation to Rule 64 and Article IX-A, Section 7), certiorari corrects only errors of jurisdiction—without jurisdiction, in excess of jurisdiction, or grave abuse of discretion amounting to lack or excess of jurisdiction—and cannot be used to re-evaluate facts or ordinary errors of law (Aratuc v. COMELEC; Mendoza v. COMELEC, G.R. No. 188308, Oct. 15, 2009). Even where COMELEC decisions in municipal and barangay contests are declared "final, executory, and non-appealable" under Article IX-C, Section 2(2), the aggrieved party (the losing litigant suffering legal injury) may still elevate the En Banc decision to the Supreme Court via Rule 64/65 certiorari (Galido v. COMELEC).',
		legalBasis: 'Art. IX-A, Sec. 7; Rules 64 & 65, Sec. 1; Aratuc v. COMELEC; Mendoza v. COMELEC; Galido v. COMELEC'
	},
	{
		id: 'consti1:finals:248',
		topicId: 'finals',
		topic: P6_3,
		tag: 'memorization',
		question:
			'Under the Administrative Code of 1987 (E.O. No. 292), which of the following are official statutory duties of the Office of the Solicitor General (OSG)?',
		options: [
			'Representing the Government in civil and international suits',
			'Handling criminal appeals before the CA and SC',
			'Filing quo warranto suits and defending marriage validity',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the OSG is the principal legal counsel of the Republic in civil, land, money, and international cases.',
			'True because the OSG represents the People of the Philippines in all appellate criminal proceedings.',
			'True because the OSG institutes quo warranto actions and appears in marriage nullity cases to prevent collusion.',
			'False because option b is also a primary OSG function.',
			'False because option c is equally part of the OSG’s mandate.',
			'True because all three accurately summarize the Solicitor General’s duties.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Section 35, Chapter 12, Title III, Book IV of Executive Order No. 292 (Administrative Code of 1987) designates the Solicitor General as the principal law officer of the Government, tasked with representing the State in civil, land registration, expropriation, money claims, and international litigation; representing the People in all criminal appeals before the Court of Appeals and Supreme Court; filing quo warranto proceedings (Rule 66); appearing in annulment/nullity cases to protect marriage; and rendering legal opinions to government agencies.',
		legalBasis: 'E.O. No. 292 (Administrative Code of 1987), Book IV, Title III, Ch. 12, Sec. 35; Rule 66'
	},

	// ---- Section IV: Accountability of Public Officers — Impeachment & Ombudsman (5 Items) ----
	{
		id: 'consti1:finals:249',
		topicId: 'finals',
		topic: P6_4,
		tag: 'memorization',
		question:
			'Under Article XI, Section 1 of the 1987 Constitution, because "public office is a public trust," public officers and employees must at all times remain accountable to the people and serve them with:',
		options: [
			'Utmost responsibility and integrity',
			'Loyalty and efficiency',
			'Patriotism, justice, and modest lives',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because both are verbatim ethical duties mandated by Section 1.',
			'True because loyalty and efficiency are explicitly required alongside responsibility and integrity.',
			'True because acting with patriotism and justice and leading modest lives complete the constitutional mandate.',
			'False because option b (loyalty and efficiency) is also a verbatim requirement.',
			'False because option c is equally mandated by Section 1.',
			'True because all three options accurately reproduce the constitutional standard of public accountability.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article XI, Section 1 explicitly states: "Public office is a public trust. Public officers and employees must, at all times, be accountable to the people, serve them with utmost responsibility, integrity, loyalty, and efficiency; act with patriotism and justice, and lead modest lives." As held in Cornejo v. Gabriel, public officers are mere agents and trustees of the people who hold no proprietary right to their offices, enforced through SALNs (Sec. 17), anti-graft laws, impeachment, and the Ombudsman.',
		legalBasis: 'Art. XI, Secs. 1 & 17, 1987 Constitution; Cornejo v. Gabriel'
	},
	{
		id: 'consti1:finals:250',
		topicId: 'finals',
		topic: P6_4,
		tag: 'memorization',
		question:
			'Under Article XI, Section 2 of the 1987 Constitution, Members of the Constitutional Commissions and other impeachable officers may be removed from office on impeachment for, and conviction of, which exclusive constitutional grounds?',
		options: [
			'Culpable violation of the Constitution and treason',
			'Bribery and graft and corruption',
			'Other high crimes and betrayal of public trust',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because both are expressly listed among the six impeachment grounds.',
			'True because both are expressly enumerated under Section 2.',
			'True because both complete the exclusive constitutional list of six impeachable offenses.',
			'False because option b is also enumerated under Section 2.',
			'False because option c is equally listed in Section 2.',
			'True because all three options encompass all six exclusive constitutional grounds for impeachment.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article XI, Section 2 enumerates six exclusive grounds for impeachment: culpable violation of the Constitution, treason, bribery, graft and corruption, other high crimes, and betrayal of public trust (covering gross faithlessness or abuse of power short of crime, Gonzales v. Office of the President). Separately, an official’s lack of constitutional qualification at the inception of appointment may be challenged via a Petition for Quo Warranto filed by the Solicitor General (Republic v. Sereno, G.R. No. 237428, May 11, 2018).',
		legalBasis: 'Art. XI, Sec. 2, 1987 Constitution; Gonzales v. Office of the President; Republic v. Sereno (2018)'
	},
	{
		id: 'consti1:finals:251',
		topicId: 'finals',
		topic: P6_4,
		tag: 'effects',
		question:
			'Under Article XI, Section 3 of the 1987 Constitution, which of the following accurately state the roles and legal effects in an impeachment proceeding?',
		options: [
			'House of Representatives as initiator and prosecutor',
			'Senate as sole judge requiring a 2/3 vote to convict',
			'Verdict limited to removal and perpetual disqualification',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the House initiates impeachment by a 1/3 vote of all members and prosecutes before the Senate.',
			'True because Senators sit as Senator-Judges, presided over by the Chief Justice for the President and the Senate President for all others.',
			'True because judgment cannot impose prison or fines, cannot be pardoned, and does not bar subsequent criminal prosecution.',
			'False because option b is also a verbatim rule under Section 3.',
			'False because option c accurately states Section 3(7).',
			'True because all three accurately summarize impeachment procedure and judgment.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article XI, Section 3 grants the House exclusive power to initiate and prosecute impeachment (1/3 vote of all members; subject to the one-year bar rule in Francisco v. House of Representatives, 415 SCRA 44, 2003) and grants the Senate sole power to try and decide (2/3 vote of all members; Chief Justice presides without voting when the President is on trial). Under Section 3(7) and Article VII, Section 19, conviction extends only to removal and perpetual disqualification, is beyond presidential pardon, and leaves the official liable to ordinary criminal, civil, or administrative prosecution.',
		legalBasis: 'Art. XI, Sec. 3 & Art. VII, Sec. 19, 1987 Constitution; Francisco v. House of Representatives (2003)'
	},
	{
		id: 'consti1:finals:252',
		topicId: 'finals',
		topic: P6_4,
		tag: 'memorization',
		question:
			'Under the 1987 Philippine Constitution, impeachable officers such as Supreme Court Justices, Constitutional Commissioners, and the Ombudsman are "jury appointed" by randomly selected citizens.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because the Philippine constitutional system has no jury system and vests appointive power in the Executive.',
			'Correct because appointive impeachable officers are appointed by the President via JBC shortlists or CA confirmation, while the President and VP are elected by suffrage.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. The Philippines does not utilize citizen juries for either trials or public appointments. Under Article VII, Section 16; Article VIII, Section 9; Article IX; and Article XI, Section 9, appointment is an executive power vested in the President (from JBC shortlists without CA confirmation for Justices and the Ombudsman, and with CA confirmation for Constitutional Commissioners).',
		legalBasis: 'Art. VII, Sec. 16; Art. VIII, Sec. 9; Art. IX; Art. XI, Sec. 9, 1987 Constitution'
	},
	{
		id: 'consti1:finals:253',
		topicId: 'finals',
		topic: P6_4,
		tag: 'effects',
		question:
			'Regarding the institutional independence, core mandate, and judicial forum of the Office of the Ombudsman under Article XI of the 1987 Constitution, which of the following statements are true?',
		options: [
			'Constitutional creation, fiscal autonomy, and JBC appointment without CA confirmation',
			'Investigative, prosecutorial, and corrective mandate as "protector of the people"',
			'Operation of its own exclusive criminal trial court',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because these structural safeguards—plus fixed 7-year tenure and impeachability—guarantee political independence.',
			'True because Section 13 empowers the Ombudsman to investigate, prosecute, and discipline public malfeasance.',
			'False because the Ombudsman has no trial court of its own and prosecutes cases before the Sandiganbayan or regular courts.',
			'False because option c is false.',
			'True because options a and b reflect the Ombudsman’s independence and mandate, while option c is false.',
			'False because option c is false.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article XI, Sections 5 and 8–14 create the independent Office of the Ombudsman with fiscal autonomy, JBC nomination without CA confirmation, fixed 7-year non-renewable term, salary protection, and impeachment security (Gonzales v. Office of the President). As "protector of the people," it investigates and prosecutes public malfeasance (R.A. No. 6770), filing criminal cases before the Sandiganbayan (for Salary Grade 27+ officials under Art. XI, Sec. 4; R.A. 8249/10660) or regular courts, while its administrative disciplinary rulings are appealable to the Court of Appeals under Rule 43.',
		legalBasis: 'Art. XI, Secs. 4–5 & 8–14; R.A. 6770; R.A. 8249/10660; Gonzales v. Office of the President'
	},

	// ---- Section V: Delegation of Powers, Congress, Electoral Tribunals, Martial Law & LGUs (12 Items) ----
	{
		id: 'consti1:finals:254',
		topicId: 'finals',
		topic: P6_5,
		tag: 'requisites',
		question:
			'Under Pelaez v. Auditor General, a statute delegating subordinate rule-making power to an administrative agency is constitutionally valid as long as it satisfies the Sufficient Standard Test, even if it fails the Completeness Test.',
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because a sufficient standard cannot stand alone without a complete legislative policy to limit.',
			'Correct because both the Completeness Test and the Sufficient Standard Test must concur for a valid delegation.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. In Pelaez v. Auditor General (15 SCRA 569), the Supreme Court laid down the concurrent rule that every valid delegation of legislative power must satisfy BOTH the Completeness Test (the law must be complete in all its essential terms and conditions when it leaves Congress) and the Sufficient Standard Test (sufficiently determinate guidelines must map out the delegate’s boundaries so administrative discretion does not overflow). Failing either test renders the delegation unconstitutional and void.',
		legalBasis: 'Art. VI, Sec. 1, 1987 Constitution; Pelaez v. Auditor General (15 SCRA 569)'
	},
	{
		id: 'consti1:finals:255',
		topicId: 'finals',
		topic: P6_5,
		tag: 'effects',
		question:
			'Once Congress enacts a valid delegating statute satisfying both constitutional tests, why does the Executive branch have no discretion to ignore or refuse to enforce it?',
		options: [
			'The Faithful Execution Clause',
			'The Rule of Law',
			'Purely subordinate, ministerial nature of execution',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Article VII, Section 17 imposes a mandatory constitutional duty on the President to ensure laws are faithfully executed.',
			'True because as held in Gonzalez v. Hechanova, the Executive cannot disregard valid statutes due to policy disagreement.',
			'True because Congress has already fixed the legislative policy, leaving the Executive only to execute details or verify factual triggers.',
			'False because option b (Rule of Law) is equally a foundational reason.',
			'False because option c also explains why no legislative discretion remains.',
			'True because all three constitutional imperatives compel faithful executive implementation.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Article VII, Section 17 commands that the President "shall ensure that the laws be faithfully executed." Because Congress already exercised legislative discretion in establishing a complete policy with sufficient standards (Abakada Guro v. Executive Secretary), the Executive’s delegated authority is purely subordinate execution, bound by the rule of law (Gonzalez v. Hechanova).',
		legalBasis: 'Art. VII, Sec. 17, 1987 Constitution; Abakada Guro v. Executive Secretary; Gonzalez v. Hechanova'
	},
	{
		id: 'consti1:finals:256',
		topicId: 'finals',
		topic: P6_5,
		tag: 'effects',
		question:
			'Under Article VI, Section 13 of the 1987 Constitution, which of the following legal rules distinguish an "Incompatible Office" from a "Forbidden Office" for Members of Congress?',
		options: [
			'Automatic forfeiture of congressional seat for an incompatible office',
			'Absolute voidness of appointment to a forbidden office for the entire elected term',
			'Lifting of the forbidden office ban upon early resignation',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because accepting another government or GOCC office automatically vacates the legislative seat upon taking the oath.',
			'True because no legislator may be appointed to an office created or given higher pay during their term, preventing office trafficking.',
			'False because resignation does not cure the disqualification until the full 3- or 6-year elected term expires.',
			'False because option c is false.',
			'True because options a and b accurately distinguish both bars, whereas early resignation cannot evade a forbidden office.',
			'False because option c is false.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article VI, Section 13 bars legislators from holding any other government or GOCC post during their term without forfeiting their seat (incompatible office, preserving legislative independence and taking effect automatically upon oath under Adaza v. Pacana, 135 SCRA 431; see also common-law incompatibility in Public Interest Center v. Elma), and strictly prohibits appointment to any office created or whose emoluments were increased during the term for which they were elected (forbidden office, remaining void for the entire elected term even after early resignation).',
		legalBasis: 'Art. VI, Sec. 13, 1987 Constitution; Adaza v. Pacana (135 SCRA 431); Public Interest Center v. Elma'
	},
	{
		id: 'consti1:finals:257',
		topicId: 'finals',
		topic: P6_5,
		tag: 'memorization',
		question:
			"Under Article VI, Section 17 of the 1987 Constitution, the 9-member Senate Electoral Tribunal (SET) and House of Representatives Electoral Tribunal (HRET) are characterized by:",
		options: [
			"3 Supreme Court Justices appointed by the President with Commission on Appointments consent",
			"6 legislators selected by the Senate President or Speaker based solely on seniority",
			"A violation of the separation of powers whenever legislators cast votes on election protests",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the 3 Justices are designated by the Chief Justice—never appointed by the President or confirmed by the CA.",
			"False because the 6 legislators are chosen by their respective House based on proportional representation of political parties and party-list organizations.",
			"False because legislative membership is a constitutionally mandated blending of powers, not a violation of separation of powers.",
			"False because both a and c misstate Section 17.",
			"False because both a and b misstate how tribunal members are placed.",
			"False because options a, b, and c are all false.",
			"True because none of the statements accurately describe the SET and HRET under Article VI, Section 17."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article VI, Section 17 constitutes each Electoral Tribunal with 3 Supreme Court Justices \"designated\" by the Chief Justice and 6 Members of the respective House \"chosen\" on the basis of proportional representation of political parties and party-list organizations (Tañada v. Cuenco; Abbas v. SET). This explicit blending of powers creates an independent quasi-judicial body whose legislator-members enjoy security of tenure against party removal for independent votes (Bondoc v. Pineda, 201 SCRA 792).",
		legalBasis:
			"Art. VI, Sec. 17, 1987 Constitution; Tañada v. Cuenco; Abbas v. SET; Bondoc v. Pineda (1991)"
	},
	{
		id: 'consti1:finals:258',
		topicId: 'finals',
		topic: P6_5,
		tag: 'effects',
		question:
			'Why did the framers of the 1987 Constitution retain Article IV, Section 1(3)—"Those born before January 17, 1973, of Filipino mothers, who elect Philippine citizenship upon reaching the age of majority"?',
		options: [
			"Non-retroactivity of the 1973 Constitution's maternal citizenship rule",
			'Protection of inchoate rights of minors born under the 1935 Constitution',
			'Equalization as natural-born citizens under Article IV, Section 2',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because automatic citizenship through Filipino mothers effective January 17, 1973 applied only prospectively.',
			'True because minors born before January 17, 1973 still needed to reach majority age into the 1990s to elect citizenship.',
			'True because Section 2 explicitly deems those who elect under Section 1(3) to be natural-born citizens.',
			'False because option b is also an essential reason for retaining Section 1(3).',
			'False because option c accurately states Section 2’s equalizing clause.',
			'True because all three explain the historical origin, transitory function, and equalized status of Section 1(3).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Under the 1935 Constitution, children of Filipino mothers and alien fathers were not automatically Filipino at birth and had to elect citizenship upon majority. Because the 1973 Constitution’s equalizing rule (effective January 17, 1973) was non-retroactive, Article IV, Section 1(3) was carried over into the 1987 Constitution as a transitory safeguard for minors born before that date, and Article IV, Section 2 (second sentence) expressly declared them "natural-born citizens" to equalize their legal status.',
		legalBasis: 'Art. IV, Secs. 1(3) & 2, 1987 Constitution'
	},
	{
		id: 'consti1:finals:259',
		topicId: 'finals',
		topic: P6_5,
		tag: 'requisites',
		question:
			"Because qualifications for national elective offices are fixed exclusively by the Constitution, which of the following minimum age and residency requirements are constitutionally accurate?",
		options: [
			"President and Vice-President: 35 years old, 10-year Philippine resident",
			"Senator: 35 years old, 5-year Philippine resident",
			"District Representative: 25 years old, 2-year district resident",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because the President and Vice-President must be at least 40 (not 35) years old on election day.",
			"False because a Senator only needs 2 years (not 5) of Philippine residency immediately preceding election day.",
			"False because a District Representative only needs 1 year (not 2) of district residency immediately preceding election day.",
			"False because both a and c contain wrong numbers.",
			"False because both a and b contain wrong numbers.",
			"False because all three options misstate the age or residency figures.",
			"True because the exact thresholds are 40/10 years (President & VP), 35/2 years (Senator), and 25/1 year (District Representative)."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Under Article VII, Sections 2–3 (President/VP: 40 years old, 10-year PH resident), Article VI, Section 3 (Senator: 35 years old, 2-year PH resident), and Article VI, Section 6 (District Representative: 25 years old, 1-year district resident), every choice alters either the minimum age or the residency period.",
		legalBasis:
			"Art. VI, Secs. 3 & 6; Art. VII, Secs. 2–3, 1987 Constitution; R.A. 9225"
	},
	{
		id: 'consti1:finals:260',
		topicId: 'finals',
		topic: P6_5,
		tag: 'effects',
		question:
			"Under Article VI, Section 10 of the 1987 Constitution, an increase in the compensation of Senators and Members of the House of Representatives takes effect:",
		options: [
			"Immediately upon signing of the law by the President",
			"Immediately after the 3-year House term expires",
			"Retroactively for computing legislators' retirement benefits",
			"a and c are true",
			"a and b are true",
			"a, b, and c are true",
			"none of the above"
		],
		optionExplanations: [
			"False because Section 10 bars any salary increase from taking effect during the term of the approving legislators.",
			"False because the House cannot receive the increase while approving Senators are still serving their 6-year terms.",
			"False because retirement gratuities must be computed strictly on the salary actually received during service (Ligot v. Mathay).",
			"False because both a and c violate Section 10.",
			"False because both a and b violate Section 10.",
			"False because options a, b, and c are all unconstitutional.",
			"True because an increase takes effect only after the expiration of the full term of ALL approving Senators and Representatives."
		],
		correctIndex: 6,
		key: "none of the above",
		explanation:
			"G (none of the above). Article VI, Section 10 decrees that \"no increase in said compensation shall take effect until after the expiration of the full term of all the Members of the Senate and the House of Representatives approving such increase\" (Philconsa v. Mathay, 18 SCRA 300), and retirement gratuities cannot be retroactively pegged to the unimplemented higher rate (Ligot v. Mathay, 56 SCRA 823).",
		legalBasis:
			"Art. VI, Sec. 10, 1987 Constitution; Philconsa v. Mathay (18 SCRA 300); Ligot v. Mathay (56 SCRA 823)"
	},
	{
		id: 'consti1:finals:261',
		topicId: 'finals',
		topic: P6_5,
		tag: 'exceptions',
		question:
			'Regarding legislative "consolidated bills" and the Enrolled Bill Doctrine, which of the following principles are legally correct?',
		options: [
			'Bicameral Conference Committees reconcile differing House and Senate versions into one identical consolidated bill',
			'Signature withdrawal by the Senate President and President destroys enrolled bill status',
			'Upon withdrawal of signatures, courts consult the Legislative Journal as conclusive proof',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because both chambers must approve one identical text under Article VI, Section 27(1), valid even for House-originated revenue bills under Tolentino.',
			'True because once repudiated by certifying officers for omitted amendments, no enrolled bill legally exists.',
			'True because the constitutionally mandated Journal is the next best conclusive record to avoid sacrificing truth to fiction.',
			'False because option b is also a settled doctrine under Astorga v. Villegas.',
			'False because option c accurately states the Astorga consequence.',
			'True because all three accurately capture bicameral consolidation and the Astorga v. Villegas exception.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		key: 'a, b, and c are true',
		explanation:
			'F (a, b, and c are true). Under Article VI, Sections 24 and 27(1) and Tolentino v. Secretary of Finance (235 SCRA 630), consolidating parallel committee measures or differing House and Senate bills into one identical consolidated text is constitutionally valid. While an enrolled bill is generally conclusive upon courts (Mabanag v. Lopez Vito), Astorga v. Villegas (56 SCRA 714) held that when the Senate President and President withdraw their signatures due to omitted floor amendments, the enrolled bill ceases to exist and courts must follow the Legislative Journal mandated by Article VI, Section 16(4) (U.S. v. Pons, 34 Phil. 729).',
		legalBasis: 'Art. VI, Secs. 16(4), 24 & 27(1); Tolentino v. Sec. of Finance; Astorga v. Villegas; U.S. v. Pons'
	},
	{
		id: 'consti1:finals:262',
		topicId: 'finals',
		topic: P6_5,
		tag: 'effects',
		question:
			"Under Article VII, Section 18 of the 1987 Constitution, Congress—voting jointly by at least a majority of all its Members—may revoke the President's proclamation of martial law, and such revocation cannot be set aside by the President.",
		options: ['True', 'False'],
		optionExplanations: [
			'Correct because Article VII, Section 18 expressly makes congressional revocation by majority joint vote final and binding on the President.',
			'Incorrect because the President has no constitutional power to override Congress’s revocation of martial law.'
		],
		correctIndex: 0,
		key: 'True',
		explanation:
			'TRUE. Article VII, Section 18, Paragraph 1 of the 1987 Constitution expressly provides that Congress, voting jointly by a vote of at least a majority of all its Members in regular or special session, may revoke a proclamation of martial law or suspension of the privilege of the writ of habeas corpus, which revocation shall not be set aside by the President. Separately, Paragraph 3 empowers the Supreme Court to review the sufficiency of its factual basis upon petition by any citizen (Lagman v. Medialdea).',
		legalBasis: 'Art. VII, Sec. 18, 1987 Constitution; Lagman v. Medialdea'
	},
	{
		id: 'consti1:finals:263',
		topicId: 'finals',
		topic: P6_5,
		tag: 'memorization',
		question:
			"Under the 1973 Philippine Constitution's modified parliamentary framework, the Commission on Appointments (CA) existed as a legislative confirmation body over presidential appointments.",
		options: ['True', 'False'],
		optionExplanations: [
			'Incorrect because the 1973 Constitution abolished the Commission on Appointments, vesting unhampered appointing authority in the President.',
			'Correct because no Commission on Appointments existed under the 1973 Constitution; it was restored only under the 1987 Constitution.'
		],
		correctIndex: 1,
		key: 'False',
		explanation:
			'FALSE. Unlike the 1935 Constitution and the 1987 Constitution (Article VI, Section 18 and Article VII, Section 16), the 1973 Constitution abolished the Commission on Appointments, leaving the President with unhampered appointing power without confirmation by the Batasang Pambansa.',
		legalBasis: '1973 Constitution; Art. VI, Sec. 18 & Art. VII, Sec. 16, 1987 Constitution'
	},
	{
		id: 'consti1:finals:264',
		topicId: 'finals',
		topic: P6_5,
		tag: 'requisites',
		question:
			'Under Article X, Sections 1 and 10 of the 1987 Constitution, local governments consist of provinces, cities, municipalities, barangays, and autonomous regions (Muslim Mindanao and the Cordilleras). Creating a municipality constitutionally requires:',
		options: [
			'An Act of Congress (statutory charter) meeting Local Government Code criteria',
			'Majority approval in a plebiscite of directly affected political units',
			'A Presidential Executive Order',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because creating a municipality is a purely legislative act requiring a statutory charter.',
			'True because Section 10 mandates ratification by a majority of votes cast in a plebiscite.',
			'False because under Pelaez v. Auditor General, the President cannot create municipalities by executive order.',
			'False because option c is unconstitutional.',
			'True because both a congressional charter and plebiscite ratification are mandatory, whereas executive creation is void.',
			'False because option c is unconstitutional.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Article X, Section 10 mandates that no province, city, municipality, or barangay may be created, divided, merged, abolished, or its boundary substantially altered except in accordance with the criteria established in the Local Government Code (R.A. No. 7160) and subject to approval by a majority of votes cast in a plebiscite in the political units directly affected; under Pelaez v. Auditor General (15 SCRA 569), creating municipalities is exclusively legislative. Autonomous regions are separately created through an Organic Act passed by Congress with a Regional Consultative Commission and ratified by plebiscite, including only favorably voting units (Art. X, Secs. 15 & 18).',
		legalBasis: 'Art. X, Secs. 1, 10, 15 & 18, 1987 Constitution; R.A. 7160; Pelaez v. Auditor General'
	},
	{
		id: 'consti1:finals:265',
		topicId: 'finals',
		topic: P6_5,
		tag: 'effects',
		question:
			'In Philippine administrative and constitutional law, which of the following are classic examples of "hybrid" administrative agencies exercising a combination of executive/administrative, quasi-legislative, and quasi-judicial powers?',
		options: [
			'Constitutional Commissions (CSC, COMELEC, COA)',
			'Specialized regulatory commissions like the SEC, NLRC, and ERC',
			'Executive line departments like the DPWH',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because all three administer specialized mandates, issue subordinate rules, and adjudicate disputes.',
			'True because these administrative agencies combine regulatory enforcement, rule-making, and dispute adjudication.',
			'False because the DPWH is primarily a pure executive line department focused on infrastructure execution rather than a hybrid adjudicatory commission.',
			'False because option c is primarily an executive line department.',
			'True because both Constitutional Commissions and specialized regulatory boards blend all three powers, unlike line departments such as DPWH.',
			'False because option c is primarily an executive line department.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Under modern administrative law, hybrid administrative agencies exercise executive administration, delegated quasi-legislative rule-making (subordinate legislation), and quasi-judicial adjudication within technical domains—exemplified by the Constitutional Commissions (Article IX) and statutory regulatory bodies such as the SEC, NLRC, ERC, and NTC. In contrast, executive line departments like the Department of Public Works and Highways (E.O. No. 292, Book IV, Title V) primarily execute infrastructure and administrative programs rather than adjudicating adversarial controversies.',
		legalBasis: 'Art. IX, 1987 Constitution; E.O. No. 292, Book IV, Title V'
	},

	// =========================================================================
	// NEW MIRROR / EXCEPTION QUESTIONS — 2 ITEMS (IDs 266–267)
	// =========================================================================
	{
		id: 'consti1:finals:266',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question:
			'As express constitutional exceptions to the general rule under Article IX-B, Section 7 barring elective officials from appointment or designation to any other public office during their tenure, which of the following are constitutionally ALLOWED?',
		options: [
			'Appointment of the Vice-President as a Member of the Cabinet without need of Commission on Appointments confirmation',
			'Designation of a Member of Congress as ex officio representative in the Judicial and Bar Council',
			'Appointment of an incumbent City Mayor as Chairman of a statutory development authority when expressly authorized by an Act of Congress',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Article VII, Section 3, par. 2 expressly authorizes the Vice-President to be appointed as a Cabinet Member without CA confirmation.',
			'True because Article VIII, Section 8(1) expressly designates a representative of Congress as an ex officio member of the JBC.',
			'False because Congress cannot create statutory exceptions to the constitutional ban on elective officials (Flores v. Drilon).',
			'False because option c is unconstitutional under Flores v. Drilon.',
			'True because both the Vice-President in the Cabinet and a congressional representative in the JBC are express constitutional exceptions.',
			'False because option c is unconstitutional.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). While Article IX-B, Section 7, par. 1 generally bars elective officials from being appointed or designated to any public office during their tenure—and Congress has no power to create statutory exceptions to this ban (Flores v. Drilon, G.R. No. 104732, June 22, 1993)—the 1987 Constitution itself carves out express exceptions: (1) the Vice-President may be appointed as a Member of the Cabinet without Commission on Appointments confirmation (Art. VII, Sec. 3, par. 2), and (2) a Member of Congress sits as ex officio representative in the Judicial and Bar Council (Art. VIII, Sec. 8(1)).',
		legalBasis: 'Art. IX-B, Sec. 7; Art. VII, Sec. 3, par. 2; Art. VIII, Sec. 8(1), 1987 Constitution; Flores v. Drilon (1993)'
	},
	{
		id: 'consti1:finals:267',
		topicId: 'finals',
		topic: P6_2,
		tag: 'exceptions',
		question:
			'In contrast to the general rule that motions for reconsideration of COMELEC Division decisions go to the COMELEC En Banc and that only final En Banc resolutions are reviewable by the Supreme Court, which of the following statements regarding INTERLOCUTORY ORDERS of a COMELEC Division are legally accurate?',
		options: [
			'A motion for reconsideration of an interlocutory order of a COMELEC Division is resolved by the Division itself, unless all members of the Division decide to refer it to the COMELEC En Banc',
			'An interlocutory order of a COMELEC Division may be brought directly to the Supreme Court on certiorari as a narrow exception when it is a patent nullity issued without jurisdiction',
			'An ordinary interlocutory order of a COMELEC Division (such as denying special affirmative defenses) may be elevated directly to the Supreme Court via Rule 64 as a matter of right',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because under Rule 3, Sec. 5(c) of the COMELEC Rules of Procedure and Cayetano v. COMELEC (2011), motions to reconsider interlocutory orders are resolved by the issuing Division unless unanimously referred to the En Banc.',
			'True because under Kho v. COMELEC (1997) and Repol v. COMELEC, direct certiorari to the Supreme Court is permitted when a Division’s interlocutory order is a patent nullity for absence of jurisdiction and the En Banc cannot take cognizance of it.',
			'False because under Cagas v. COMELEC (2012), ordinary interlocutory orders (like denying special affirmative defenses) cannot be directly assailed before the Supreme Court; the party must await final Division judgment and elevate errors via MR to the En Banc.',
			'False because option c is barred under Cagas v. COMELEC.',
			'True because both the Division-level MR rule and the narrow Kho/Repol patent-nullity exception are accurate.',
			'False because option c contradicts Cagas v. COMELEC.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		key: 'a and b are true',
		explanation:
			'E (a and b are true). Under Rule 3, Section 5(c) of the COMELEC Rules of Procedure, Cayetano v. COMELEC (G.R. No. 193846, April 12, 2011), and Cagas v. COMELEC (G.R. No. 194139, Jan. 24, 2012), only final decisions of a COMELEC Division are elevated via Motion for Reconsideration to the COMELEC En Banc; motions to reconsider interlocutory orders are resolved by the issuing Division itself unless all Division members unanimously refer the matter to the En Banc. While ordinary interlocutory orders (such as denying special affirmative defenses in Cagas) cannot be directly elevated to the Supreme Court, Kho v. COMELEC (G.R. No. 124033, Sept. 25, 1997) and Repol v. COMELEC recognize a narrow exception allowing direct Rule 65 certiorari where the Division’s interlocutory order is a patent nullity issued without jurisdiction.',
		legalBasis:
			'Art. IX-A, Sec. 7 & Art. IX-C, Sec. 3, 1987 Constitution; Rule 3, Sec. 5(c), COMELEC Rules; Kho v. COMELEC (1997); Cayetano v. COMELEC (2011); Cagas v. COMELEC (2012)'
	},

	// =========================================================================
	// PART 5: JURISPRUDENCE MASTER DRILL — CHAPTERS 12–19 (Q121–Q210)
	// =========================================================================

	// ---- Chapter 12: The Judicial Department (Q121–Q145) ----
	{
		id: 'consti1:finals:121',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which landmark case did the Supreme Court define the classic nature of judicial review, ruling that the Judiciary does not assert superiority over coordinate branches, but merely acts as a constitutional mediator to enforce the supremacy of the fundamental law?',
		options: [
			'Angara v. Electoral Commission (63 Phil. 139)',
			'Tañada v. Cuenco (103 Phil. 1051)',
			'Casibang v. Aquino (92 SCRA 77)',
			'Mabanag v. Lopez Vito (78 Phil. 1)',
			'Avelino v. Cuenco (83 Phil. 17)'
		],
		optionExplanations: [
			'Correct — Justice Jose P. Laurel articulated that judicial review enforces the supremacy of the Constitution, not judicial superiority over coordinate branches.',
			'Incorrect — Tañada v. Cuenco defined the classic meaning of a political question.',
			'Incorrect — Casibang v. Aquino involved an election protest during the 1973 Constitution transition.',
			'Incorrect — Mabanag v. Lopez Vito applied the political question and enrolled bill doctrines to a constitutional amendment resolution.',
			'Incorrect — Avelino v. Cuenco addressed Senate quorum and leadership disputes as an internal political question.'
		],
		correctIndex: 0,
		key: 'Angara v. Electoral Commission (63 Phil. 139)',
		explanation:
			'In Angara v. Electoral Commission (63 Phil. 139), Justice Jose P. Laurel delivered the definitive ruling on the nature of judicial power under the Philippine presidential system. When courts strike down unconstitutional legislative or executive acts, they do not assert supremacy over coordinate departments; they merely enforce the ordained will of the sovereign people embodied in the Constitution.',
		legalBasis: 'Angara v. Electoral Commission (63 Phil. 139, 1936)'
	},
	{
		id: 'consti1:finals:122',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'Which landmark post-1986 decision firmly established that the "expanded certiorari jurisdiction" under Article VIII, Section 1(2) imposes an active constitutional duty on courts to strike down arbitrary acts of political departments tainted with grave abuse of discretion, thereby restricting the traditional "political question" defense?',
		options: [
			'Tañada v. Angara (272 SCRA 18)',
			'Daza v. Singson (180 SCRA 496)',
			'Coseteng v. Mitra (187 SCRA 377)',
			'Guingona v. Carague (196 SCRA 221)',
			'Gonzales v. Macaraig (191 SCRA 452)'
		],
		optionExplanations: [
			'Correct — Tañada v. Angara confirmed that while policy wisdom is non-justiciable, Art. VIII, Sec. 1 obligates the Court to review grave abuse of discretion.',
			'Incorrect — Daza v. Singson concerned political party realignment and proportional representation in the Commission on Appointments.',
			'Incorrect — Coseteng v. Mitra involved membership representation in the Commission on Appointments.',
			'Incorrect — Guingona v. Carague upheld automatic debt-service appropriations.',
			'Incorrect — Gonzales v. Macaraig addressed the President’s item veto power over general appropriations.'
		],
		correctIndex: 0,
		key: 'Tañada v. Angara (272 SCRA 18)',
		explanation:
			'In Tañada v. Angara (272 SCRA 18), the Supreme Court held that while courts cannot question the wisdom of entering into treaties (such as the WTO Agreement), Article VIII, Section 1 expressly obligates the judiciary to determine whether the political branches acted with grave abuse of discretion amounting to lack or excess of jurisdiction.',
		legalBasis: 'Art. VIII, Sec. 1(2), 1987 Constitution; Tañada v. Angara (272 SCRA 18, 1997)'
	},
	{
		id: 'consti1:finals:123',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which case did the Supreme Court rule that the power to promulgate rules of pleading, practice, and procedure in all courts is an exclusive constitutional prerogative of the Supreme Court that cannot be altered, amended, or repealed by Congress?',
		options: [
			'Echegaray v. Secretary of Justice (301 SCRA 96)',
			'In re Cunanan (94 Phil. 534)',
			'Bustos v. Lucero (81 Phil. 640)',
			'Javellana v. Executive Secretary (50 SCRA 30)',
			'Sanidad v. COMELEC (73 SCRA 333)'
		],
		optionExplanations: [
			'Correct — In the 1999 TRO resolution in Echegaray, the Court held that the 1987 Constitution removed Congress’s former power to repeal, alter, or supplement the Rules of Court.',
			'Incorrect — In re Cunanan invalidated the Bar Flunkers Act as an encroachment on judicial control over bar admission under the 1935 Constitution.',
			'Incorrect — Bustos v. Lucero addressed preliminary investigation as a procedural right under the 1935 Constitution.',
			'Incorrect — Javellana v. Executive Secretary involved the ratification of the 1973 Constitution.',
			'Incorrect — Sanidad v. COMELEC involved constitutional amendments during martial law.'
		],
		correctIndex: 0,
		key: 'Echegaray v. Secretary of Justice (301 SCRA 96)',
		explanation:
			'In the resolution on the temporary restraining order in Echegaray v. Secretary of Justice (301 SCRA 96), the Court held that the 1987 Constitution completely removed the authority previously granted to Congress under the 1935 and 1973 charters to alter or modify procedural rules, making judicial rule-making purely independent and exclusive.',
		legalBasis: 'Art. VIII, Sec. 5(5), 1987 Constitution; Echegaray v. Secretary of Justice (301 SCRA 96, 1999)'
	},
	{
		id: 'consti1:finals:124',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which case did the Supreme Court establish that procedural rules promulgated by courts cannot diminish, increase, or modify substantive rights created by statutory law?',
		options: [
			'Abellana v. Marave (57 SCRA 106)',
			'Primicias v. Ocampo (93 Phil. 451)',
			'Talabon v. Warden (44 O.G. 4326)',
			'Bernabe v. Geraldez (51 SCRA 369)',
			'De Guzman v. People (119 SCRA 337)'
		],
		optionExplanations: [
			'Correct — Abellana held that procedural rules on reservation cannot extinguish an independent civil action granted by the Civil Code.',
			'Incorrect — Primicias v. Ocampo dealt with the right to trial with assessors under the Manila Charter.',
			'Incorrect — Talabon v. Warden involved habeas corpus and validity of court judgments during occupation.',
			'Incorrect — Bernabe v. Geraldez addressed procedural deadlines in civil litigation.',
			'Incorrect — De Guzman v. People involved Sandiganbayan jurisdiction and procedural equality.'
		],
		correctIndex: 0,
		key: 'Abellana v. Marave (57 SCRA 106)',
		explanation:
			'In Abellana v. Marave (57 SCRA 106), the Supreme Court held that procedural rules requiring reservation of an independent civil action arising from physical injuries cannot defeat or extinguish the substantive right granted to the victim under the Civil Code. Procedural powers cannot modify or impair substantive rights.',
		legalBasis: 'Art. VIII, Sec. 5(5), 1987 Constitution; Abellana v. Marave (57 SCRA 106, 1974)'
	},
	{
		id: 'consti1:finals:125',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'Which case established that the administrative supervision and discipline of lower court judges and judicial personnel belongs exclusively to the Supreme Court, barring the Ombudsman from investigating judicial acts without prior Supreme Court clearance?',
		options: [
			'Maceda v. Vasquez (221 SCRA 464)',
			'Judge Caoibes, Jr. v. Ombudsman (361 SCRA 395)',
			'Noblejas v. Teehankee (23 SCRA 405)',
			'De la Llana v. Alba (112 SCRA 292)',
			'People v. Judge Gacott (246 SCRA 52)'
		],
		optionExplanations: [
			'Correct — Maceda v. Vasquez is the foundational ruling barring the Ombudsman from investigating a judge for acts linked to judicial duties without prior Supreme Court determination.',
			'Incorrect — Caoibes later reiterated and applied Maceda to an intra-court altercation between judicial employees.',
			'Incorrect — Noblejas v. Teehankee held that the Commissioner of Land Registration is an executive officer not within SC disciplinary jurisdiction despite having the rank of a CFI judge.',
			'Incorrect — De la Llana v. Alba upheld the B.P. Blg. 129 judicial reorganization.',
			'Incorrect — People v. Judge Gacott held that only the Supreme Court En Banc may dismiss a lower court judge.'
		],
		correctIndex: 0,
		key: 'Maceda v. Vasquez (221 SCRA 464)',
		explanation:
			'In Maceda v. Vasquez (221 SCRA 464), the Court ruled that Article VIII, Section 6 vests exclusive administrative supervision over all courts in the Supreme Court. The Ombudsman cannot investigate a judge for offenses connected with judicial functions unless the Supreme Court first finds that an administrative violation occurred.',
		legalBasis: 'Art. VIII, Sec. 6, 1987 Constitution; Maceda v. Vasquez (221 SCRA 464, 1993)'
	},
	{
		id: 'consti1:finals:126',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'Which case reiterated the Maceda doctrine by holding that when an intra-court physical altercation occurs between judicial employees on court premises, the Ombudsman must defer to the primary administrative authority of the Supreme Court?',
		options: [
			'Judge Caoibes, Jr. v. Ombudsman (361 SCRA 395)',
			'Sinsuat v. Hidalgo (A.M. No. RTJ-08-2133)',
			'Raquiza v. Ocampo (A.M. No. 112)',
			'Bañez v. Gallegos (A.M. No. P-90-410)',
			'Garcia v. Miro (G.R. No. 167389)'
		],
		optionExplanations: [
			'Correct — In Judge Caoibes, Jr. v. Ombudsman, the Court directed the Ombudsman to refer complaints involving court personnel to the Supreme Court.',
			'Incorrect — Sinsuat v. Hidalgo is an administrative matter involving judicial misconduct.',
			'Incorrect — Raquiza v. Ocampo does not state this Ombudsman referral rule.',
			'Incorrect — Bañez v. Gallegos does not establish the Caoibes referral doctrine.',
			'Incorrect — Garcia v. Miro involved criminal procedure and appeals in reckless imprudence cases.'
		],
		correctIndex: 0,
		key: 'Judge Caoibes, Jr. v. Ombudsman (361 SCRA 395)',
		explanation:
			'In Judge Caoibes, Jr. v. Ombudsman (361 SCRA 395), the Supreme Court held that the Ombudsman cannot arrogate unto itself the authority to determine whether a complaint against a judge or court personnel involves an administrative matter. The Ombudsman must refer such complaints to the Supreme Court for determination.',
		legalBasis: 'Art. VIII, Sec. 6, 1987 Constitution; Judge Caoibes, Jr. v. Ombudsman (361 SCRA 395, 2001)'
	},
	{
		id: 'consti1:finals:127',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which landmark case did the Supreme Court strike down the practice of seating two representatives from Congress in the Judicial and Bar Council (JBC), ruling that Congress is constitutionally entitled to only one representative with one single vote?',
		options: [
			'Chavez v. Judicial and Bar Council (676 SCRA 579)',
			'Kilosbayan v. Guingona (232 SCRA 110)',
			'De Castro v. Judicial and Bar Council (615 SCRA 666)',
			'Aguinaldo v. Aquino (G.R. No. 224302, 2016)',
			'Jardeleza v. Sereno (733 SCRA 279)'
		],
		optionExplanations: [
			'Correct — Chavez v. JBC ruled that "a representative of the Congress" means one representative with one vote.',
			'Incorrect — Kilosbayan v. Guingona addressed taxpayer standing and the PCSO lottery contract.',
			'Incorrect — De Castro v. JBC addressed the midnight appointments ban vis-à-vis SC vacancies.',
			'Incorrect — Aguinaldo v. Aquino invalidated JBC clustering of nominees for simultaneous vacancies.',
			'Incorrect — Jardeleza v. Sereno addressed due process and the unanimity rule inside the JBC.'
		],
		correctIndex: 0,
		key: 'Chavez v. Judicial and Bar Council (676 SCRA 579)',
		explanation:
			'In Chavez v. Judicial and Bar Council (676 SCRA 579), the Court ruled that Article VIII, Section 8(1) uses the singular noun "a representative of the Congress." Giving one full vote to the Senate and another to the House unconstitutionally expanded legislative influence in the 7-member constitutional council.',
		legalBasis: 'Art. VIII, Sec. 8(1), 1987 Constitution; Chavez v. JBC (676 SCRA 579, 2012)'
	},
	{
		id: 'consti1:finals:128',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			"In which ruling did the Supreme Court hold that the President's constitutional obligation to fill vacancies in the Supreme Court within ninety (90) days under Article VIII, Section 4(1) operates as an exception to the midnight appointments ban under Article VII, Section 15?",
		options: [
			'De Castro v. Judicial and Bar Council (615 SCRA 666)',
			'Aytona v. Castillo (4 SCRA 1)',
			'Chavez v. JBC (676 SCRA 579)',
			'Poe-Llamanzares v. COMELEC (786 SCRA 1)',
			'Matibag v. Benipayo (380 SCRA 49)'
		],
		optionExplanations: [
			'Correct — De Castro v. JBC reversed In re Valenzuela and held that Art. VII, Sec. 15 does not apply to Supreme Court appointments.',
			'Incorrect — Aytona v. Castillo is the 1962 ruling that originally coined the midnight appointments doctrine for executive mass appointments.',
			'Incorrect — Chavez v. JBC addressed congressional representation in the JBC.',
			'Incorrect — Poe-Llamanzares v. COMELEC concerned natural-born citizenship of foundlings and residency.',
			'Incorrect — Matibag v. Benipayo upheld the renewal of bypassed ad interim appointments in the COMELEC.'
		],
		correctIndex: 0,
		key: 'De Castro v. Judicial and Bar Council (615 SCRA 666)',
		explanation:
			'In De Castro v. Judicial and Bar Council (615 SCRA 666), the Court ruled that Section 15, Article VII (prohibiting appointments two months before a presidential election) applies exclusively to executive appointments and does not restrict appointments to the Supreme Court, which are governed by the strict 90-day mandate in Article VIII, Section 4(1).',
		legalBasis: 'Art. VII, Sec. 15 & Art. VIII, Sec. 4(1), 1987 Constitution; De Castro v. JBC (615 SCRA 666, 2010)'
	},
	{
		id: 'consti1:finals:129',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which case did the Supreme Court invalidate the JBC\'s practice of "clustering" nominees into separate shortlists for simultaneous collegiate court vacancies, affirming the President\'s discretion to choose from any qualified candidate across all shortlists submitted?',
		options: [
			'Aguinaldo v. Aquino (G.R. No. 224302, 2016)',
			'Chavez v. JBC (676 SCRA 579)',
			'De Castro v. JBC (615 SCRA 666)',
			'Jardeleza v. Sereno (733 SCRA 279)',
			'Villanueva v. JBC (755 SCRA 182)'
		],
		optionExplanations: [
			'Correct — In Aguinaldo v. Aquino, the Court ruled that clustering nominees for simultaneous Sandiganbayan vacancies unduly restricted presidential appointing power.',
			'Incorrect — Chavez v. JBC dealt with congressional seats in the JBC.',
			'Incorrect — De Castro v. JBC dealt with the 90-day SC vacancy rule vs. the midnight appointments ban.',
			'Incorrect — Jardeleza v. Sereno dealt with integrity objections and due process in JBC nominations.',
			'Incorrect — Villanueva v. JBC upheld the JBC’s five-year service policy for trial judges seeking promotion.'
		],
		correctIndex: 0,
		key: 'Aguinaldo v. Aquino (G.R. No. 224302, 2016)',
		explanation:
			'In Aguinaldo v. Aquino (G.R. No. 224302, 2016), the Court held that while the JBC screens and nominates, it cannot restrict the President\'s constitutional appointing prerogative by clustering nominees into specific vacancies when multiple seats in the same collegiate court are open simultaneously.',
		legalBasis: 'Art. VIII, Sec. 9, 1987 Constitution; Aguinaldo v. Aquino (G.R. No. 224302, 2016)'
	},
	{
		id: 'consti1:finals:130',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'Which case established that the constitutional periods prescribed under Article VIII, Section 15 for courts to decide cases are directory rather than mandatory in the jurisdictional sense, meaning a late judgment is not void?',
		options: [
			'Sesbreño v. Court of Appeals (556 SCRA 715)',
			'Malacora v. Court of Appeals (117 SCRA 435)',
			'Borromeo v. Court of Appeals (186 SCRA 1)',
			'Yao v. Court of Appeals (344 SCRA 202)',
			'Coscolluela v. Sandiganbayan (701 SCRA 188)'
		],
		optionExplanations: [
			'Correct — Sesbreño v. CA confirmed that expiration of the decision periods under Art. VIII, Sec. 15 does not strip the court of jurisdiction or void the decision.',
			'Incorrect — Malacora v. CA involved appellate procedure and court rules.',
			'Incorrect — Borromeo v. CA upheld minute resolutions denying petitions for lack of merit.',
			'Incorrect — Yao v. CA invalidated a decision lacking independent findings of fact and law.',
			'Incorrect — Coscolluela v. Sandiganbayan involved the right to speedy disposition of cases in Ombudsman investigations.'
		],
		correctIndex: 0,
		key: 'Sesbreño v. Court of Appeals (556 SCRA 715)',
		explanation:
			'In Sesbreño v. Court of Appeals (556 SCRA 715), the Court ruled that the lapse of the 24-, 12-, or 3-month constitutional periods does not divest the court of jurisdiction nor void the delayed judgment; it merely exposes the negligent judge to potential administrative sanctions.',
		legalBasis: 'Art. VIII, Sec. 15, 1987 Constitution; Sesbreño v. Court of Appeals (556 SCRA 715, 2008)'
	},
	{
		id: 'consti1:finals:131',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which case did the Supreme Court strike down a presidential veto of legislative appropriations for judicial pensions, holding that the veto violated the constitutional guarantee of fiscal autonomy under Article VIII, Section 3?',
		options: [
			'Bengzon v. Drilon (208 SCRA 133)',
			'Gonzales v. Macaraig (191 SCRA 452)',
			'PHILCONSA v. Enriquez (235 SCRA 506)',
			'Araullo v. Aquino (728 SCRA 1)',
			'Demetria v. Alba (148 SCRA 208)'
		],
		optionExplanations: [
			'Correct — Bengzon v. Drilon invalidated the veto of funds for retired Justices’ and judges’ pensions as an infringement on judicial fiscal autonomy.',
			'Incorrect — Gonzales v. Macaraig upheld the President’s veto of a general provision restricting budget augmentation.',
			'Incorrect — PHILCONSA v. Enriquez addressed the Countrywide Development Fund and congressional veto rules.',
			'Incorrect — Araullo v. Aquino struck down unconstitutional practices under the Disbursement Acceleration Program (DAP).',
			'Incorrect — Demetria v. Alba invalidated a P.D. provision granting unlimited presidential power to transfer appropriations.'
		],
		correctIndex: 0,
		key: 'Bengzon v. Drilon (208 SCRA 133)',
		explanation:
			'In Bengzon v. Drilon (208 SCRA 133), the Supreme Court held that the President\'s veto of provisions funding retired judges\' pensions violated the fiscal autonomy of the Judiciary, which guarantees non-diminution of judicial appropriations and automatic release of funds.',
		legalBasis: 'Art. VIII, Sec. 3, 1987 Constitution; Bengzon v. Drilon (208 SCRA 133, 1992)'
	},
	{
		id: 'consti1:finals:132',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which ruling did the Supreme Court clarify that under the 1987 Constitution, the salaries of Justices and judges are subject to general income taxation, thereby explicitly abandoning the old doctrine of Perfecto v. Meer and Endencia v. David?',
		options: [
			'Nitafan v. Commissioner of Internal Revenue (152 SCRA 284)',
			'Perfecto v. Meer (85 Phil. 552)',
			'Endencia v. David (93 Phil. 696)',
			'Pascual v. Secretary of Public Works (110 Phil. 331)',
			'Lladoc v. Commissioner of Internal Revenue (14 SCRA 292)'
		],
		optionExplanations: [
			'Correct — Nitafan v. CIR held that subjecting judicial salaries to general income tax does not violate the non-diminution clause under Art. VIII, Sec. 10.',
			'Incorrect — Perfecto v. Meer was the earlier 1950 ruling that exempted judges’ salaries from income tax under the 1935 Constitution.',
			'Incorrect — Endencia v. David reiterated Perfecto v. Meer in 1953 before the 1987 Constitution’s deliberations settled the issue in Nitafan.',
			'Incorrect — Pascual v. Secretary of Public Works struck down appropriations for private feeder roads for lack of public purpose.',
			'Incorrect — Lladoc v. CIR held that a donee’s gift tax is an excise tax, not a property tax exempt under the Constitution.'
		],
		correctIndex: 0,
		key: 'Nitafan v. Commissioner of Internal Revenue (152 SCRA 284)',
		explanation:
			'In Nitafan v. Commissioner of Internal Revenue (152 SCRA 284), the Court examined the deliberations of the 1986 Constitutional Commission and concluded that the framers intended to subject judicial salaries to the payment of general income taxes paid by all public servants, discarding the old tax-exemption doctrine.',
		legalBasis: 'Art. VIII, Sec. 10, 1987 Constitution; Nitafan v. CIR (152 SCRA 284, 1987)'
	},
	{
		id: 'consti1:finals:133',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'Which landmark case held that minors, represented by their parents, have legal standing to sue on behalf of future generations to preserve ecological balance under the doctrine of "Intergenerational Responsibility"?',
		options: [
			'Oposa v. Factoran (224 SCRA 792)',
			'Lagman v. Medialdea (G.R. No. 231658, 2017)',
			'Kilosbayan v. Guingona (232 SCRA 110)',
			'Resident Marine Mammals v. Reyes (756 SCRA 513)',
			'MMDA v. Concerned Residents of Manila Bay (574 SCRA 661)'
		],
		optionExplanations: [
			'Correct — Oposa v. Factoran recognized minors’ standing under intergenerational responsibility and held Art. II, Sec. 16 to be self-executing.',
			'Incorrect — Lagman v. Medialdea reviewed the factual basis of the 2017 Mindanao martial law proclamation.',
			'Incorrect — Kilosbayan v. Guingona concerned taxpayer standing in the PCSO lottery contract.',
			'Incorrect — Resident Marine Mammals v. Reyes held that human stewards, not whales/dolphins themselves, had standing under the Rules of Procedure for Environmental Cases.',
			'Incorrect — MMDA v. Concerned Residents of Manila Bay issued continuing mandamus for Manila Bay cleanup.'
		],
		correctIndex: 0,
		key: 'Oposa v. Factoran (224 SCRA 792)',
		explanation:
			'In Oposa v. Factoran (224 SCRA 792), the Court ruled that Article II, Section 16 is a self-executing right, and that minors have locus standi to protect the rights of unborn generations to a balanced and healthful ecology.',
		legalBasis: 'Art. II, Sec. 16, 1987 Constitution; Oposa v. Factoran (224 SCRA 792, 1993)'
	},
	{
		id: 'consti1:finals:134',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which case did the Supreme Court hold that an association of concerned citizens and taxpayers had locus standi to challenge the PCSO on-line lottery contract due to the "transcendental importance" of the constitutional issues raised?',
		options: [
			'Kilosbayan v. Guingona (232 SCRA 110)',
			'Kilosbayan v. Morato (246 SCRA 540)',
			'IBP v. Zamora (338 SCRA 81)',
			'Tatad v. Garcia (243 SCRA 436)',
			'Joya v. PCGG (225 SCRA 568)'
		],
		optionExplanations: [
			'Correct — In the 1994 Kilosbayan v. Guingona decision, the Court relaxed standing requirements due to transcendental importance.',
			'Incorrect — In the 1995 Kilosbayan v. Morato decision, the Court reversed course and held petitioners lacked standing to assail the amended lease contract.',
			'Incorrect — IBP v. Zamora found the IBP lacked standing, though the Court still decided the calling-out power issue.',
			'Incorrect — Tatad v. Garcia upheld the EDSA LRT-III build-lease-transfer contract.',
			'Incorrect — Joya v. PCGG dismissed the petition for lack of legal standing to stop the auction of Marcos artworks.'
		],
		correctIndex: 0,
		key: 'Kilosbayan v. Guingona (232 SCRA 110)',
		explanation:
			'In the first Kilosbayan case (Kilosbayan v. Guingona, 232 SCRA 110, 1994), the Court relaxed procedural barriers regarding standing because of the paramount moral, economic, and constitutional importance of the on-line lottery controversy.',
		legalBasis: 'Art. VIII, Sec. 1, 1987 Constitution; Kilosbayan v. Guingona (232 SCRA 110, 1994)'
	},
	{
		id: 'consti1:finals:135',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which subsequent case did the Supreme Court reverse its earlier liberal stance, ruling that locus standi is a procedural requirement that cannot be invoked when the petitioner does not suffer direct, material injury from an amended lease contract?',
		options: [
			'Kilosbayan v. Morato (246 SCRA 540)',
			'Kilosbayan v. Guingona (232 SCRA 110)',
			'IBP v. Zamora (338 SCRA 81)',
			'David v. Arroyo (489 SCRA 160)',
			'Francisco v. House of Representatives (415 SCRA 44)'
		],
		optionExplanations: [
			'Correct — In Kilosbayan v. Morato (1995), the Court held that petitioners were not real parties-in-interest and lacked standing to challenge the renegotiated ELA.',
			'Incorrect — Kilosbayan v. Guingona (1994) had previously granted standing based on transcendental importance.',
			'Incorrect — IBP v. Zamora addressed the Marine deployment patrols.',
			'Incorrect — David v. Arroyo laid down the four exceptions to the mootness doctrine.',
			'Incorrect — Francisco v. House of Representatives defined initiation of impeachment proceedings.'
		],
		correctIndex: 0,
		key: 'Kilosbayan v. Morato (246 SCRA 540)',
		explanation:
			'In Kilosbayan v. Morato (246 SCRA 540, 1995), the Court held that the petitioners lacked standing to challenge the renegotiated equipment lease agreement, stressing that locus standi requires a personal and substantial interest rather than a generalized grievance.',
		legalBasis: 'Kilosbayan v. Morato (246 SCRA 540, 1995)'
	},
	{
		id: 'consti1:finals:136',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'Which case established that the Integrated Bar of the Philippines (IBP) lacked direct legal standing to question the deployment of the Philippine Marines in anti-crime visibility patrols, although the Court chose to resolve the issue on the merits?',
		options: [
			'IBP v. Zamora (338 SCRA 81)',
			'Kilosbayan v. Guingona (232 SCRA 110)',
			'Bayan v. Zamora (342 SCRA 449)',
			'Tatad v. Secretary of Energy (281 SCRA 330)',
			'David v. Macapagal-Arroyo (489 SCRA 160)'
		],
		optionExplanations: [
			'Correct — IBP v. Zamora held that the IBP showed no direct injury from the patrols, yet relaxed standing to clarify the President’s calling-out power.',
			'Incorrect — Kilosbayan v. Guingona involved the PCSO on-line lottery contract.',
			'Incorrect — Bayan v. Zamora upheld the Visiting Forces Agreement (VFA).',
			'Incorrect — Tatad v. Secretary of Energy struck down the first Oil Deregulation Law.',
			'Incorrect — David v. Macapagal-Arroyo addressed PP 1017 and the mootness exceptions.'
		],
		correctIndex: 0,
		key: 'IBP v. Zamora (338 SCRA 81)',
		explanation:
			'In IBP v. Zamora (338 SCRA 81), the Court found that the IBP failed to demonstrate direct injury to its members resulting from military patrols. However, the Court relaxed the procedural barrier to settle the constitutional boundaries of the President\'s calling-out powers.',
		legalBasis: 'Art. VII, Sec. 18 & Art. VIII, Sec. 1, 1987 Constitution; IBP v. Zamora (338 SCRA 81, 2000)'
	},
	{
		id: 'consti1:finals:137',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which ruling did the Supreme Court hold that under Batas Pambansa Blg. 129, statutory inferior courts may be abolished by Congress pursuant to a bona fide judicial reorganization, a ruling later constitutionally qualified by Article VIII, Section 2?',
		options: [
			'Dela Llana v. Alba (112 SCRA 292)',
			'Ocampo v. Secretary of Justice (G.R. No. L-7918, 1955)',
			'Dario v. Mison (176 SCRA 84)',
			'Pelaez v. Auditor General (15 SCRA 569)',
			'Bautista v. Salonga (172 SCRA 160)'
		],
		optionExplanations: [
			'Correct — Dela Llana v. Alba upheld the abolition of Courts of First Instance under B.P. 129, prompting the 1987 safeguard in Art. VIII, Sec. 2.',
			'Incorrect — Ocampo v. Secretary of Justice involved an earlier 1955 reorganization of judges-at-large where no majority declared the law unconstitutional.',
			'Incorrect — Dario v. Mison involved civil service reorganizations in the Bureau of Customs.',
			'Incorrect — Pelaez v. Auditor General invalidated executive creation of municipalities under Sec. 68, RAC.',
			'Incorrect — Bautista v. Salonga involved CA confirmation of the CHR Chairperson.'
		],
		correctIndex: 0,
		key: 'Dela Llana v. Alba (112 SCRA 292)',
		explanation:
			'In Dela Llana v. Alba (112 SCRA 292), the Court upheld the abolition of Courts of First Instance by Batas Pambansa Blg. 129. In response, the 1987 framers added the explicit restriction in Article VIII, Section 2: "No law shall be passed reorganizing the Judiciary when it undermines the security of tenure of its Members."',
		legalBasis: 'Art. VIII, Sec. 2, 1987 Constitution; Dela Llana v. Alba (112 SCRA 292, 1982)'
	},
	{
		id: 'consti1:finals:138',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which case did the Supreme Court affirm that a Supreme Court Division has no authority to dismiss or remove a lower court judge from service, as dismissal requires an affirmative vote of the Court sitting En Banc?',
		options: [
			'People v. Judge Gacott (246 SCRA 52)',
			'Maceda v. Vasquez (221 SCRA 464)',
			'Judge Caoibes, Jr. v. Ombudsman (361 SCRA 395)',
			'In re Cunanan (94 Phil. 534)',
			'Prudential Bank v. Castro (158 SCRA 646)'
		],
		optionExplanations: [
			'Correct — People v. Judge Gacott clarified that Art. VIII, Sec. 11 reserves dismissal of judges exclusively to the Court En Banc, while Divisions may impose lesser penalties.',
			'Incorrect — Maceda v. Vasquez barred Ombudsman investigation of judges without prior SC clearance.',
			'Incorrect — Judge Caoibes v. Ombudsman applied Maceda to court personnel.',
			'Incorrect — In re Cunanan struck down the Bar Flunkers Act.',
			'Incorrect — Prudential Bank v. Castro was an administrative discipline case involving a judge.'
		],
		correctIndex: 0,
		key: 'People v. Judge Gacott (246 SCRA 52)',
		explanation:
			'In People v. Judge Gacott (246 SCRA 52), the Court clarified that under Article VIII, Section 11, lower court judges can only be dismissed or removed by the Supreme Court sitting En Banc, whereas ordinary administrative sanctions (e.g., fines or reprimands) can be meted out by a Division.',
		legalBasis: 'Art. VIII, Sec. 11, 1987 Constitution; People v. Judge Gacott (246 SCRA 52, 1995)'
	},
	{
		id: 'consti1:finals:139',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'Which case established that the dismissal of an appeal via an unreasoned minute resolution stating that "the petition lacks merit" does not violate Article VIII, Section 14, because the full statement of facts and law is required only for full decisions?',
		options: [
			'Borromeo v. Court of Appeals (186 SCRA 1)',
			'Yao v. Court of Appeals (344 SCRA 202)',
			'Nicos Industrial Corp. v. Court of Appeals (206 SCRA 127)',
			'Francisco v. Permskul (173 SCRA 324)',
			'Prudential Bank v. Castro (158 SCRA 646)'
		],
		optionExplanations: [
			'Correct — Borromeo v. CA held that a minute resolution denying a petition for lack of merit satisfies Art. VIII, Sec. 14, par. 2.',
			'Incorrect — Yao v. CA invalidated a decision for failing to state independent findings of fact and law.',
			'Incorrect — Nicos Industrial Corp. v. CA invalidated a memorandum decision that failed to satisfy the Permskul standards.',
			'Incorrect — Francisco v. Permskul upheld memorandum decisions that adopt lower court findings by reference.',
			'Incorrect — Prudential Bank v. Castro was an administrative case against a trial judge.'
		],
		correctIndex: 0,
		key: 'Borromeo v. Court of Appeals (186 SCRA 1)',
		explanation:
			'In Borromeo v. Court of Appeals (186 SCRA 1), the Supreme Court held that the minute resolution dismissing a petition for lack of reversible error or failure to show merit satisfies the mandate of Article VIII, Section 14, paragraph 2, which requires only the statement of legal basis.',
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution; Borromeo v. Court of Appeals (186 SCRA 1, 1990)'
	},
	{
		id: 'consti1:finals:140',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'Which case held that a judicial decision that fails to set forth the factual findings and legal conclusions upon which it is based is completely void for violating constitutional due process and Article VIII, Section 14?',
		options: [
			'Yao v. Court of Appeals (344 SCRA 202)',
			'Borromeo v. Court of Appeals (186 SCRA 1)',
			'Sesbreño v. Court of Appeals (556 SCRA 715)',
			'Alba Patio de Makati v. Alba Patio Employees (128 SCRA 253)',
			'Francisco v. Permskul (173 SCRA 324)'
		],
		optionExplanations: [
			'Correct — Yao v. CA declared a judgment void for failing to articulate the facts and law required by Art. VIII, Sec. 14.',
			'Incorrect — Borromeo v. CA upheld minute resolutions refusing due course to petitions.',
			'Incorrect — Sesbreño v. CA held that decision periods under Sec. 15 are directory on adjudicative authority.',
			'Incorrect — Alba Patio de Makati involved labor union registration and NLRC decisions.',
			'Incorrect — Francisco v. Permskul sustained properly referenced memorandum decisions.'
		],
		correctIndex: 0,
		key: 'Yao v. Court of Appeals (344 SCRA 202)',
		explanation:
			'In Yao v. Court of Appeals (344 SCRA 202), the Court struck down a decision that merely copied excerpts without articulating independent findings of fact and law, declaring it void for denying litigants the opportunity to understand the basis of the judgment.',
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution; Yao v. Court of Appeals (344 SCRA 202, 2000)'
	},
	{
		id: 'consti1:finals:141',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which case did the Supreme Court sustain the validity of a "memorandum decision" by an appellate court adopting by reference the findings of fact and law of the lower court, provided the adopted decision is attached or fully quoted?',
		options: [
			'Francisco v. Permskul (173 SCRA 324)',
			'Yao v. Court of Appeals (344 SCRA 202)',
			'Borromeo v. Court of Appeals (186 SCRA 1)',
			'Nicos Industrial Corp. v. Court of Appeals (206 SCRA 127)',
			'Solid Homes, Inc. v. Laserna (550 SCRA 613)'
		],
		optionExplanations: [
			'Correct — Francisco v. Permskul established the conditions under which memorandum decisions satisfy Art. VIII, Sec. 14.',
			'Incorrect — Yao v. CA struck down a decision devoid of independent factual and legal findings.',
			'Incorrect — Borromeo v. CA upheld minute resolutions denying petitions for review.',
			'Incorrect — Nicos Industrial Corp. v. CA voided a decision that failed to comply with Permskul safeguards.',
			'Incorrect — Solid Homes, Inc. v. Laserna discussed constitutional decision standards in administrative/quasi-judicial rulings.'
		],
		correctIndex: 0,
		key: 'Francisco v. Permskul (173 SCRA 324)',
		explanation:
			"In Francisco v. Permskul (173 SCRA 324), the Court held that memorandum decisions adopting the lower court's findings do not violate Article VIII, Section 14, provided they are resorted to with caution and sufficiently apprise the parties of the factual and legal basis.",
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution; Francisco v. Permskul (173 SCRA 324, 1989)'
	},
	{
		id: 'consti1:finals:142',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'Which case established that the constitutional question must be raised at the earliest opportunity, by a party with locus standi, in an actual case or controversy where its resolution is the very lis mota of the litigation?',
		options: [
			'Dumlao v. COMELEC (95 SCRA 392)',
			'PACU v. Secretary of Education (97 Phil. 806)',
			'Laurel v. Garcia (187 SCRA 797)',
			'Montesclaros v. COMELEC (384 SCRA 269)',
			'Arceta v. Mangrobang (432 SCRA 236)'
		],
		optionExplanations: [
			'Correct — Dumlao v. COMELEC set forth the classic four requisites of judicial review.',
			'Incorrect — PACU v. Secretary of Education dismissed a challenge for lack of an actual justiciable controversy (no injury yet).',
			'Incorrect — Laurel v. Garcia involved the proposed sale of the Roppongi property in Tokyo.',
			'Incorrect — Montesclaros v. COMELEC involved age limits and SK elections.',
			'Incorrect — Arceta v. Mangrobang upheld B.P. 22 against constitutional challenges where lis mota was questioned.'
		],
		correctIndex: 0,
		key: 'Dumlao v. COMELEC (95 SCRA 392)',
		explanation:
			'In Dumlao v. COMELEC (95 SCRA 392), the Supreme Court set forth the standards for the four essential requisites of judicial review, refusing to pass upon hypothetical or academic constitutional challenges.',
		legalBasis: 'Art. VIII, Sec. 1, 1987 Constitution; Dumlao v. COMELEC (95 SCRA 392, 1980)'
	},
	{
		id: 'consti1:finals:143',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which case did the Supreme Court reiterate that the Roppongi property in Japan belongs to the public domain and cannot be sold or disposed of by executive officials without express statutory authority enacted by Congress?',
		options: [
			'Laurel v. Garcia (187 SCRA 797)',
			'Manila Prince Hotel v. GSIS (267 SCRA 408)',
			'Cebu Oxygen & Acetylene Co. v. Bercilles (66 SCRA 481)',
			'Mun. of San Fernando v. Firme (195 SCRA 692)',
			'Ignacio v. Director of Lands (108 Phil. 335)'
		],
		optionExplanations: [
			'Correct — Laurel v. Garcia barred the executive sale of the Roppongi property in Japan absent congressional authorization.',
			'Incorrect — Manila Prince Hotel v. GSIS enforced the Filipino First Policy under Art. XII, Sec. 10.',
			'Incorrect — Cebu Oxygen involved municipal closure and conversion of a city street into patrimonial property.',
			'Incorrect — Municipality of San Fernando v. Firme addressed municipal tort liability and governmental vs. proprietary functions.',
			'Incorrect — Ignacio v. Director of Lands addressed foreshore lands as property of the public dominion.'
		],
		correctIndex: 0,
		key: 'Laurel v. Garcia (187 SCRA 797)',
		explanation:
			'In Laurel v. Garcia (187 SCRA 797), the Supreme Court ruled that public properties intended for public service or national pride remain part of the public domain; the Executive has no authority to convey them without an enabling statute from Congress.',
		legalBasis: 'Laurel v. Garcia (187 SCRA 797, 1990)'
	},
	{
		id: 'consti1:finals:144',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'In which case did the Supreme Court establish that a resolution of the Court of Appeals denying a motion for reconsideration on the ground that "no cogent reason was presented to depart from earlier findings" satisfies Article VIII, Section 14?',
		options: [
			'Mahawan v. People (G.R. No. 176609, 2008)',
			'Yao v. Court of Appeals (344 SCRA 202)',
			'Albana v. Belo (G.R. No. 158734, 2009)',
			'Borromeo v. Court of Appeals (186 SCRA 1)',
			'Vios v. Pantangco (G.R. No. 163103, 2009)'
		],
		optionExplanations: [
			'Correct — Mahawan v. People held that stating no cogent reason was presented to depart from the main decision satisfies Art. VIII, Sec. 14, par. 2.',
			'Incorrect — Yao v. CA invalidated a main decision lacking factual and legal analysis.',
			'Incorrect — Albana v. Belo evaluated administrative resolutions recommending candidate disqualification.',
			'Incorrect — Borromeo v. CA involved Supreme Court minute resolutions dismissing petitions.',
			'Incorrect — Vios v. Pantangco involved procedural rules and due process.'
		],
		correctIndex: 0,
		key: 'Mahawan v. People (G.R. No. 176609, 2008)',
		explanation:
			'In Mahawan v. People (G.R. No. 176609, 2008), the Court held that the legal requirement under Section 14, paragraph 2 is met when the denial of a motion for reconsideration indicates that the grounds raised were already evaluated in the main decision.',
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution; Mahawan v. People (G.R. No. 176609, 2008)'
	},
	{
		id: 'consti1:finals:145',
		topicId: 'finals_cases',
		topic: P5_12,
		tag: 'cases',
		question:
			'Which case held that an administrative resolution of the COMELEC recommending the disqualification of a candidate substantially complies with Article VIII, Section 14 if it sufficiently apprises the party so that specific errors can be assigned on appeal?',
		options: [
			'Albana v. Belo (G.R. No. 158734, 2009)',
			'Canicosa v. COMELEC (282 SCRA 512)',
			'Cagas v. COMELEC (664 SCRA 333)',
			'Mahawan v. People (G.R. No. 176609, 2008)',
			'Soller v. COMELEC (339 SCRA 685)'
		],
		optionExplanations: [
			'Correct — Albana v. Belo held that administrative/quasi-judicial resolutions comply when they contain sufficient factual findings to enable error assignment on appeal.',
			'Incorrect — Canicosa v. COMELEC distinguished administrative from quasi-judicial functions of the COMELEC.',
			'Incorrect — Cagas v. COMELEC voided an En Banc decision rendered at first instance without passing through a Division.',
			'Incorrect — Mahawan v. People addressed denials of motions for reconsideration in criminal appeals.',
			'Incorrect — Soller v. COMELEC involved municipal election protests routed directly to the En Banc.'
		],
		correctIndex: 0,
		key: 'Albana v. Belo (G.R. No. 158734, 2009)',
		explanation:
			'In Albana v. Belo (G.R. No. 158734, 2009), the Court held that administrative and quasi-judicial resolutions comply with constitutional notice standards when they contain sufficient findings of fact to enable an aggrieved party to formulate errors on appeal.',
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution; Albana v. Belo (G.R. No. 158734, 2009)'
	},

	// ---- Chapter 13: Constitutional Commissions & CSC (Q146–Q158) ----
	{
		id: 'consti1:finals:146',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'In which landmark case did the Supreme Court establish the definitive calculation of the 3-5-7 rotational scheme for Constitutional Commissions, holding that terms have a common fixed starting baseline (February 2, 1987) and that late appointments run only for the unexpired portion?',
		options: [
			'Gaminde v. Commission on Audit (347 SCRA 655)',
			'Brillantes v. Yorac (192 SCRA 358)',
			'Republic v. Imperial (96 Phil. 770)',
			'Funa v. Villar (670 SCRA 579)',
			'Nacionalista Party v. De Vera (85 Phil. 126)'
		],
		optionExplanations: [
			'Correct — Gaminde v. COA established that all staggered 3-5-7 term cycles under the 1987 Constitution run from February 2, 1987 and expire on February 2.',
			'Incorrect — Brillantes v. Yorac barred the President from designating an Acting Chairman of a Constitutional Commission.',
			'Incorrect — Republic v. Imperial applied the rotational scheme under the 1935 Constitution.',
			'Incorrect — Funa v. Villar imposed the 7-year aggregate ceiling on promotions from Commissioner to Chairman.',
			'Incorrect — Nacionalista Party v. De Vera addressed temporary appointments in the COMELEC under the 1935 Constitution.'
		],
		correctIndex: 0,
		key: 'Gaminde v. Commission on Audit (347 SCRA 655)',
		explanation:
			'In Gaminde v. Commission on Audit (347 SCRA 655, 2000), the Court held that the staggered terms under the 1987 Constitution run from a common starting point of February 2, 1987 and expire every seven, five, and three years on February 2. An appointment extended after the start of a term runs only for the remaining portion of that term to preserve the constitutional rotational cycle.',
		legalBasis: 'Art. IX-B, C & D, Sec. 1(2), 1987 Constitution; Gaminde v. COA (347 SCRA 655, 2000)'
	},
	{
		id: 'consti1:finals:147',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'In which landmark case did the Supreme Court invalidate President Corazon Aquino\'s designation of Associate Commissioner Haydee Yorac as Acting Chairman of the COMELEC, holding that the President cannot designate an acting head of an independent constitutional commission?',
		options: [
			'Brillantes v. Yorac (192 SCRA 358)',
			'Gaminde v. COA (347 SCRA 655)',
			'Funa v. Villar (670 SCRA 579)',
			'Republic v. Imperial (96 Phil. 770)',
			'Nacionalista Party v. Bautista (85 Phil. 101)'
		],
		optionExplanations: [
			'Correct — Brillantes v. Yorac struck down the presidential designation of an Acting Chairman of the COMELEC.',
			'Incorrect — Gaminde v. COA fixed the February 2, 1987 baseline for staggered commission terms.',
			'Incorrect — Funa v. Villar ruled on promotion from Commissioner to Chairman and the 7-year total service cap.',
			'Incorrect — Republic v. Imperial addressed rotational term expirations under the 1935 Charter.',
			'Incorrect — Nacionalista Party v. Bautista barred the designation of the Solicitor General as an acting COMELEC member.'
		],
		correctIndex: 0,
		key: 'Brillantes v. Yorac (192 SCRA 358)',
		explanation:
			'In Brillantes v. Yorac (192 SCRA 358), the Court ruled that Article IX-A, Section 1 guarantees the institutional independence of the Commissions. Allowing the Executive to designate an acting chairman undermines independence by fostering presidential subservience.',
		legalBasis: 'Art. IX-A, Sec. 1 & Art. IX-C, Sec. 1(2), 1987 Constitution; Brillantes v. Yorac (192 SCRA 358, 1990)'
	},
	{
		id: 'consti1:finals:148',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			"Which early case under the 1935 Constitution established the foundational rule that the rotational scheme for constitutional commissioners is disrupted if an appointment is made for a full term instead of the unexpired balance of a predecessor's term?",
		options: [
			'Republic v. Imperial (96 Phil. 770)',
			'Gaminde v. COA (347 SCRA 655)',
			'Nacionalista Party v. De Vera (85 Phil. 126)',
			'Brillantes v. Yorac (192 SCRA 358)',
			'Funa v. Villar (670 SCRA 579)'
		],
		optionExplanations: [
			'Correct — Republic v. Imperial laid down the 1935 Charter rotational principle that appointments to vacancies run only for the unexpired portion.',
			'Incorrect — Gaminde v. COA applied and updated the rotational calculation under the 1987 Constitution.',
			'Incorrect — Nacionalista Party v. De Vera upheld a COMELEC Chairman’s appointment under the 1935 Constitution.',
			'Incorrect — Brillantes v. Yorac invalidated acting designations by the President.',
			'Incorrect — Funa v. Villar governed promotions from Commissioner to Chairman under the 1987 Constitution.'
		],
		correctIndex: 0,
		key: 'Republic v. Imperial (96 Phil. 770)',
		explanation:
			'In Republic v. Imperial (96 Phil. 770), the Supreme Court held that the constitutional rotational system requires that vacancies caused by death, resignation, or disability be filled only for the unexpired portion to preserve the staggered appointment cycle.',
		legalBasis: 'Republic v. Imperial (96 Phil. 770, 1955)'
	},
	{
		id: 'consti1:finals:149',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			"In which case did the Supreme Court rule that an incumbent COA Commissioner cannot be promoted to Chairman to serve a fresh seven-year term upon the expiration of the previous Chairman's term, and that total aggregate service as Commissioner and Chairman can never exceed seven years?",
		options: [
			'Funa v. Villar (670 SCRA 579)',
			'Gaminde v. COA (347 SCRA 655)',
			'Brillantes v. Yorac (192 SCRA 358)',
			'Republic v. Imperial (96 Phil. 770)',
			'Matibag v. Benipayo (380 SCRA 49)'
		],
		optionExplanations: [
			'Correct — Funa v. Villar held that promoting a Commissioner to Chairman is allowed only for an unexpired vacancy and within the 7-year aggregate cap; appointing Villar to a full 7-year term after Carague’s term expired was void.',
			'Incorrect — Gaminde v. COA fixed the February 2, 1987 baseline for staggered terms.',
			'Incorrect — Brillantes v. Yorac invalidated presidential designation of an Acting Chairman.',
			'Incorrect — Republic v. Imperial established the 1935 rotational term rules.',
			'Incorrect — Matibag v. Benipayo upheld renewal of bypassed ad interim appointments.'
		],
		correctIndex: 0,
		key: 'Funa v. Villar (670 SCRA 579)',
		explanation:
			'In Funa v. Villar (670 SCRA 579, 2012), the Court ruled that promoting a sitting Commissioner to Chairman is a new appointment rather than a prohibited reappointment, but only if the Chairman\'s seat became vacant due to death, resignation, disability, or impeachment (unexpired term) AND total aggregate service does not exceed seven years. Because Chairman Carague\'s term expired normally, the new Chairman had to serve a full 7-year term, rendering Villar\'s appointment unconstitutional.',
		legalBasis: 'Art. IX-D, Sec. 1(2), 1987 Constitution; Funa v. Villar (670 SCRA 579, 2012)'
	},
	{
		id: 'consti1:finals:150',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'In which landmark civil service case did the Supreme Court rule that the CSC is not an appointing authority and cannot substitute its own choice for that of the appointing officer once the appointee possesses the minimum legal qualifications?',
		options: [
			'Luego v. Civil Service Commission (143 SCRA 327)',
			'Dario v. Mison (176 SCRA 84)',
			'De los Santos v. Mallare (87 Phil. 289)',
			'Pangilinan v. Maglaya (225 SCRA 511)',
			'Lapinid v. Civil Service Commission (197 SCRA 106)'
		],
		optionExplanations: [
			'Correct — Luego v. CSC held that attestation is ministerial once the appointee meets the legal qualifications.',
			'Incorrect — Dario v. Mison invalidated bad-faith separations disguised as reorganization.',
			'Incorrect — De los Santos v. Mallare held that classification as primarily confidential depends on the nature of functions, not the label.',
			'Incorrect — Pangilinan v. Maglaya addressed summary removal and appointment of executive officials.',
			'Incorrect — Lapinid v. CSC reiterated Luego that the CSC cannot revoke an appointment in favor of a "better qualified" candidate.'
		],
		correctIndex: 0,
		key: 'Luego v. Civil Service Commission (143 SCRA 327)',
		explanation:
			"In Luego v. Civil Service Commission (143 SCRA 327), the Court ruled that the CSC's power is limited to approving an appointment if the appointee is qualified. It has no discretionary authority to revoke an appointment simply because it believes another applicant is better qualified.",
		legalBasis: 'Art. IX-B, Sec. 2(2), 1987 Constitution; Luego v. CSC (143 SCRA 327, 1986)'
	},
	{
		id: 'consti1:finals:151',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'Which landmark case held that government reorganizations pursuant to post-1986 executive orders must be executed in good faith, and that summary separations of career personnel in bad faith violate constitutional security of tenure?',
		options: [
			'Dario v. Mison (176 SCRA 84)',
			'Luego v. Civil Service Commission (143 SCRA 327)',
			'Mendoza v. Quisumbing (186 SCRA 108)',
			'De la Llana v. Alba (112 SCRA 292)',
			'Bustos v. Lucero (81 Phil. 640)'
		],
		optionExplanations: [
			'Correct — Dario v. Mison reinstated separated Customs personnel because the reorganization was tainted with bad faith.',
			'Incorrect — Luego v. CSC limited the CSC’s review of appointments to checking legal qualifications.',
			'Incorrect — Mendoza v. Quisumbing involved DECS reorganization and security of tenure.',
			'Incorrect — De la Llana v. Alba involved judicial reorganization under B.P. Blg. 129.',
			'Incorrect — Bustos v. Lucero involved preliminary investigation procedures under the 1935 Charter.'
		],
		correctIndex: 0,
		key: 'Dario v. Mison (176 SCRA 84)',
		explanation:
			'In Dario v. Mison (176 SCRA 84), the Court ordered the reinstatement of hundreds of Customs employees, holding that an overhaul or abolition of offices tainted with bad faith or political patronage violates the civil service guarantee of security of tenure.',
		legalBasis: 'Art. IX-B, Sec. 2(3), 1987 Constitution; Dario v. Mison (176 SCRA 84, 1989)'
	},
	{
		id: 'consti1:finals:152',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'Which ruling established that government-owned or controlled corporations created under the general Corporation Code (without original legislative charters) are governed by the Labor Code, not Civil Service Law?',
		options: [
			'NASECO v. NLRC (168 SCRA 122)',
			'Lumanta v. NLRC (170 SCRA 79)',
			'Postigo v. Philippine Tuberculosis Society (479 SCRA 628)',
			'Juco v. NLRC (277 SCRA 528)',
			'Camporedondo v. NLRC (312 SCRA 47)'
		],
		optionExplanations: [
			'Correct — NASECO v. NLRC established that only GOCCs with original charters fall under the Civil Service; subsidiaries under the Corporation Code fall under the Labor Code.',
			'Incorrect — Lumanta v. NLRC later confirmed and applied the NASECO doctrine to Food Terminal, Inc.',
			'Incorrect — Postigo addressed whether PTSI was governed by the Labor Code or Civil Service.',
			'Incorrect — Juco v. NLRC reversed earlier 1973-Charter doctrine and applied the 1987 "original charter" test to NHC.',
			'Incorrect — Camporedondo v. NLRC held that the Philippine National Red Cross was governed by Civil Service/special charter criteria at that time.'
		],
		correctIndex: 0,
		key: 'NASECO v. NLRC (168 SCRA 122)',
		explanation:
			'In NASECO v. NLRC (168 SCRA 122), the Court interpreted Article IX-B, Section 2(1) as restricting the scope of the Civil Service to GOCCs with original charters (created by special laws). Corporate subsidiaries formed under the Corporation Code fall under the Labor Code and NLRC jurisdiction.',
		legalBasis: 'Art. IX-B, Sec. 2(1), 1987 Constitution; NASECO v. NLRC (168 SCRA 122, 1988)'
	},
	{
		id: 'consti1:finals:153',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'Which subsequent case confirmed the NASECO doctrine, holding that employees of the Food Terminal, Inc. (FTI), a non-chartered corporation, fall under the jurisdiction of the Labor Code?',
		options: [
			'Lumanta v. NLRC (170 SCRA 79)',
			'NASECO v. NLRC (168 SCRA 122)',
			'SSS Employees Association v. CA (175 SCRA 686)',
			'Alliance of Government Workers v. Minister of Labor (124 SCRA 1)',
			'Feliciano v. Commission on Audit (419 SCRA 363)'
		],
		optionExplanations: [
			'Correct — Lumanta v. NLRC reaffirmed NASECO specifically with respect to Food Terminal, Inc. (FTI).',
			'Incorrect — NASECO v. NLRC is the original precedent involving National Service Corporation, not FTI.',
			'Incorrect — SSSEA v. CA held that government employees have no right to strike.',
			'Incorrect — Alliance of Government Workers addressed collective bargaining and 13th month pay in GOCCs.',
			'Incorrect — Feliciano v. COA held that local water districts are GOCCs with original charters subject to COA audit.'
		],
		correctIndex: 0,
		key: 'Lumanta v. NLRC (170 SCRA 79)',
		explanation:
			'In Lumanta v. NLRC (170 SCRA 79), the Court reiterated that the test of civil service coverage for GOCCs is the manner of their creation: entities organized under the general Corporation Code are private in corporate structure and governed by the Labor Code.',
		legalBasis: 'Art. IX-B, Sec. 2(1), 1987 Constitution; Lumanta v. NLRC (170 SCRA 79, 1989)'
	},
	{
		id: 'consti1:finals:154',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'In which case did the Supreme Court hold that government employees in the public sector do not have the right to strike or stage concerted work stoppages to compel collective bargaining?',
		options: [
			'SSS Employees Association v. Court of Appeals (175 SCRA 686)',
			'Alliance of Government Workers v. Minister of Labor (124 SCRA 1)',
			'Victoriano v. Elizalde Rope Workers Union (59 SCRA 54)',
			'GSIS v. Kapisanan ng mga Manggagawa (510 SCRA 622)',
			'Bangalisan v. Court of Appeals (276 SCRA 619)'
		],
		optionExplanations: [
			'Correct — SSSEA v. CA is the landmark 1989 ruling holding that the right of government employees to self-organization does not include the right to strike.',
			'Incorrect — Alliance of Government Workers (1983) ruled on 13th month pay and collective bargaining in GOCCs under P.D. 851.',
			'Incorrect — Victoriano v. Elizalde upheld religious freedom exemptions from union closed-shop agreements.',
			'Incorrect — GSIS v. Kapisanan ng mga Manggagawa applied the no-strike rule to GSIS employees.',
			'Incorrect — Bangalisan v. CA applied the public-sector strike ban to public school teachers.'
		],
		correctIndex: 0,
		key: 'SSS Employees Association v. Court of Appeals (175 SCRA 686)',
		explanation:
			'In SSS Employees Association v. Court of Appeals (175 SCRA 686), the Court held that while public employees have the right to organize under Article IX-B, Section 2(5), they cannot strike because the terms and conditions of government employment are fixed by law, not by collective bargaining.',
		legalBasis: 'Art. IX-B, Sec. 2(5), 1987 Constitution; SSS Employees Association v. CA (175 SCRA 686, 1989)'
	},
	{
		id: 'consti1:finals:155',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'Which case established that the Civil Service Commission has concurrent jurisdiction with state university governing boards to investigate administrative charges against university personnel?',
		options: [
			'Camacho v. Gloria (G.R. No. 138862, 2003)',
			'CSC v. Court of Appeals (G.R. No. 176162, 2012)',
			'University of the Philippines v. Regino (221 SCRA 598)',
			'UP v. Dizon (G.R. No. 171182, 2012)',
			'Feliciano v. COA (419 SCRA 363)'
		],
		optionExplanations: [
			'Correct — Camacho v. Gloria confirmed the CSC’s concurrent disciplinary jurisdiction alongside state university boards.',
			'Incorrect — CSC v. CA (2012) addressed R.A. 4670 grievance committees for public school teachers.',
			'Incorrect — UP v. Regino involved academic freedom and student/faculty discipline within UP.',
			'Incorrect — UP v. Dizon barred execution/garnishment of UP funds without prior COA approval.',
			'Incorrect — Feliciano v. COA held that local water districts are subject to COA audit.'
		],
		correctIndex: 0,
		key: 'Camacho v. Gloria (G.R. No. 138862, 2003)',
		explanation:
			'In Camacho v. Gloria (G.R. No. 138862, 2003), the Court held that while the Board of Regents has disciplinary authority over university officers, complaints may also be lodged directly with the CSC as the central personnel agency of the Government.',
		legalBasis: 'Art. IX-B, Sec. 3, 1987 Constitution; Camacho v. Gloria (G.R. No. 138862, 2003)'
	},
	{
		id: 'consti1:finals:156',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'In which ruling did the Supreme Court hold that Special Education Laws (such as R.A. 4670) establishing specific grievance committees cannot divest the CSC of its constitutionally anchored supervisory and disciplinary jurisdiction over public school employees?',
		options: [
			'CSC v. Court of Appeals (G.R. No. 176162, 2012)',
			'Camacho v. Gloria (G.R. No. 138862, 2003)',
			'Fabella v. Court of Appeals (282 SCRA 256)',
			'Almero v. Montejo (G.R. No. 165643)',
			'Emin v. De Leon (378 SCRA 143)'
		],
		optionExplanations: [
			'Correct — CSC v. CA (2012) affirmed that R.A. 4670 does not strip the CSC of its constitutional disciplinary jurisdiction over public school teachers.',
			'Incorrect — Camacho v. Gloria addressed concurrent jurisdiction over state university personnel.',
			'Incorrect — Fabella v. CA upheld due process requirements for investigating committees under R.A. 4670.',
			'Incorrect — Almero v. Montejo dealt with procedural administrative appeals.',
			'Incorrect — Emin v. De Leon held that an aggrieved party may be estopped from questioning CSC jurisdiction after actively participating.'
		],
		correctIndex: 0,
		key: 'CSC v. Court of Appeals (G.R. No. 176162, 2012)',
		explanation:
			'In CSC v. Court of Appeals (G.R. No. 176162, 2012), the Court ruled that statutory committees created under the Magna Carta for Public School Teachers cannot be interpreted to divest the CSC of its constitutional mandate to enforce administrative discipline across the civil service.',
		legalBasis: 'Art. IX-B, Sec. 3, 1987 Constitution; CSC v. Court of Appeals (G.R. No. 176162, 2012)'
	},
	{
		id: 'consti1:finals:157',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'In which ruling did the Supreme Court hold that Regional Trial Courts have no jurisdiction over the dismissal of employees of local water districts (GOCCs with original charters under P.D. 198), because disciplinary matters fall within the exclusive jurisdiction of the Civil Service Commission?',
		options: [
			'Mateo v. Court of Appeals (247 SCRA 284)',
			'St. Martin Funeral Home v. NLRC (295 SCRA 494)',
			'Gaminde v. COA (347 SCRA 655)',
			'Canicosa v. COMELEC (282 SCRA 512)',
			'Mendoza v. Civil Service Commission (G.R. No. 119857)'
		],
		optionExplanations: [
			'Correct — Mateo v. CA (1995) ruled that water districts are GOCCs with original charters whose dismissal cases belong to the CSC, not the RTC (and CSC rulings are subsequently reviewable by the Court of Appeals under Rule 43).',
			'Incorrect — St. Martin Funeral Home v. NLRC routed Rule 65 certiorari petitions against NLRC decisions to the Court of Appeals.',
			'Incorrect — Gaminde v. COA fixed the February 2, 1987 baseline for staggered commission terms.',
			'Incorrect — Canicosa v. COMELEC distinguished administrative and quasi-judicial powers of the COMELEC.',
			'Incorrect — Mendoza v. CSC addressed civil service dismissal and appellate procedures.'
		],
		correctIndex: 0,
		key: 'Mateo v. Court of Appeals (247 SCRA 284)',
		explanation:
			'In Mateo v. Court of Appeals (247 SCRA 284, 1995), the Supreme Court held that local water districts created under P.D. No. 198 are quasi-public corporations with original charters embraced in the Civil Service. Consequently, regular courts like the RTC have no jurisdiction over their employees\' dismissal disputes, which belong exclusively to the Civil Service Commission (whose final rulings are appealed to the Court of Appeals under Rule 43).',
		legalBasis: 'Art. IX-B, Sec. 2(1), 1987 Constitution; Mateo v. Court of Appeals (247 SCRA 284, 1995)'
	},
	{
		id: 'consti1:finals:158',
		topicId: 'finals_cases',
		topic: P5_13,
		tag: 'cases',
		question:
			'Which landmark labor law case established the general procedural principle that petitions for certiorari under Rule 65 assailing NLRC decisions should be brought initially to the Court of Appeals to maintain the hierarchy of courts?',
		options: [
			'St. Martin Funeral Home v. NLRC (295 SCRA 494)',
			'Mateo v. Court of Appeals (247 SCRA 284)',
			'Canicosa v. COMELEC (282 SCRA 512)',
			'Cagas v. COMELEC (664 SCRA 333)',
			'Caltex Philippines, Inc. v. COA (208 SCRA 726)'
		],
		optionExplanations: [
			'Correct — St. Martin Funeral Home v. NLRC routed Rule 65 petitions against NLRC decisions to the Court of Appeals first.',
			'Incorrect — Mateo v. CA held that water district dismissal disputes fall under CSC, not RTC, jurisdiction.',
			'Incorrect — Canicosa v. COMELEC dealt with COMELEC En Banc vs. Division authority.',
			'Incorrect — Cagas v. COMELEC voided a first-instance COMELEC En Banc decision in an election protest.',
			'Incorrect — Caltex Philippines, Inc. v. COA upheld COA audit over OPSF collections.'
		],
		correctIndex: 0,
		key: 'St. Martin Funeral Home v. NLRC (295 SCRA 494)',
		explanation:
			'In St. Martin Funeral Home v. NLRC (295 SCRA 494), the Court established the procedural rule that petitions for certiorari assailing decisions of the NLRC must be filed in the Court of Appeals, reinforcing the doctrine of hierarchy of courts.',
		legalBasis: 'B.P. Blg. 129, Sec. 9 (as amended by R.A. 7902); St. Martin Funeral Home v. NLRC (295 SCRA 494, 1998)'
	},

	// ---- Chapter 14: The Commission on Elections (Q159–Q171) ----
	{
		id: 'consti1:finals:159',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'In which case did the Supreme Court rule that the constitutional requirement under Article IX-C, Section 3 that election cases be heard first in Division applies strictly to adjudicatory/quasi-judicial functions, while purely administrative matters are decided directly En Banc?',
		options: [
			'Canicosa v. COMELEC (282 SCRA 512)',
			'Cagas v. COMELEC (664 SCRA 333)',
			'Soller v. COMELEC (339 SCRA 685)',
			'Sarmiento v. COMELEC (212 SCRA 307)',
			'Garces v. Court of Appeals (259 SCRA 99)'
		],
		optionExplanations: [
			'Correct — Canicosa v. COMELEC held that administrative matters may be resolved directly by the COMELEC En Banc.',
			'Incorrect — Cagas v. COMELEC applied the division-first rule to adjudicatory election protests.',
			'Incorrect — Soller v. COMELEC invalidated an En Banc first-instance ruling in a municipal election protest.',
			'Incorrect — Sarmiento v. COMELEC voided pre-proclamation controversies decided directly En Banc.',
			'Incorrect — Garces v. CA involved RTC jurisdiction over disputes involving non-election administrative assignments of an election registrar.'
		],
		correctIndex: 0,
		key: 'Canicosa v. COMELEC (282 SCRA 512)',
		explanation:
			'In Canicosa v. COMELEC (282 SCRA 512), the Court held that administrative matters, such as the correction of clerical errors or administrative supervision of elections, may be handled directly by the Commission En Banc; the division rule is mandatory only when the COMELEC acts in a quasi-judicial capacity.',
		legalBasis: 'Art. IX-C, Sec. 3, 1987 Constitution; Canicosa v. COMELEC (282 SCRA 512, 1997)'
	},
	{
		id: 'consti1:finals:160',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'Which landmark case held that any decision or resolution rendered directly by the COMELEC En Banc in an election contest without it being heard and decided first by a Division is null and void for lack of jurisdiction?',
		options: [
			'Cagas v. COMELEC (664 SCRA 333)',
			'Canicosa v. COMELEC (282 SCRA 512)',
			'Soller v. COMELEC (339 SCRA 685)',
			'Aratuc v. COMELEC (88 SCRA 251)',
			'Flores v. COMELEC (184 SCRA 484)'
		],
		optionExplanations: [
			'Correct — Cagas v. COMELEC reaffirmed that bypassing a Division renders an En Banc election ruling void for lack of jurisdiction.',
			'Incorrect — Canicosa v. COMELEC dealt with administrative powers exercised directly En Banc.',
			'Incorrect — Soller v. COMELEC specifically addressed municipal election protests appealed from an RTC.',
			'Incorrect — Aratuc v. COMELEC established the certiorari standard for reviewing COMELEC decisions.',
			'Incorrect — Flores v. COMELEC invalidated a statute routing barangay election appeals to the RTC instead of COMELEC.'
		],
		correctIndex: 0,
		key: 'Cagas v. COMELEC (664 SCRA 333)',
		explanation:
			'In Cagas v. COMELEC (664 SCRA 333), the Court held that the two-tiered division procedure in Article IX-C, Section 3 is a mandatory jurisdictional condition precedent. A decision rendered directly En Banc at first instance is void.',
		legalBasis: 'Art. IX-C, Sec. 3, 1987 Constitution; Cagas v. COMELEC (664 SCRA 333, 2012)'
	},
	{
		id: 'consti1:finals:161',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'In which case did the Supreme Court strike down a COMELEC resolution requiring print media publishers to donate free advertising space ("COMELEC Space") for political candidates, declaring it an unconstitutional taking of private property without just compensation?',
		options: [
			'Philippine Press Institute v. COMELEC (244 SCRA 272)',
			'National Press Club v. COMELEC (207 SCRA 1)',
			'ABS-CBN Broadcasting Corp. v. COMELEC (323 SCRA 611)',
			'Social Weather Stations v. COMELEC (357 SCRA 496)',
			'Telecommunications and Broadcast Attorneys v. COMELEC (289 SCRA 337)'
		],
		optionExplanations: [
			'Correct — PPI v. COMELEC struck down mandatory free "COMELEC Space" in print newspapers as an invalid taking without compensation.',
			'Incorrect — National Press Club v. COMELEC upheld Sec. 11(b) of R.A. 6646 regulating paid political ads.',
			'Incorrect — ABS-CBN v. COMELEC invalidated the ban on conducting exit polls.',
			'Incorrect — SWS v. COMELEC invalidated the ban on publishing pre-election surveys.',
			'Incorrect — TELEBAP v. COMELEC upheld free "COMELEC Time" for broadcast stations because radio/TV operate on public airwaves under legislative franchises.'
		],
		correctIndex: 0,
		key: 'Philippine Press Institute v. COMELEC (244 SCRA 272)',
		explanation:
			'In Philippine Press Institute v. COMELEC (244 SCRA 272), the Court held that coercing print publishers to donate advertising space constitutes an unconstitutional exercise of eminent domain without just compensation and violates the constitutional protection of property rights.',
		legalBasis: 'Art. III, Sec. 9 & Art. IX-C, Sec. 4, 1987 Constitution; Philippine Press Institute v. COMELEC (244 SCRA 272, 1995)'
	},
	{
		id: 'consti1:finals:162',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'In which case did the Supreme Court uphold the validity of Section 11(b) of Republic Act No. 6646 prohibiting the sale or donation of print space and broadcast time for political campaigns except through the COMELEC, classifying it as a valid regulatory exercise under Article IX-C, Section 4?',
		options: [
			'National Press Club v. COMELEC (207 SCRA 1)',
			'Philippine Press Institute v. COMELEC (244 SCRA 272)',
			'ABS-CBN Broadcasting Corp. v. COMELEC (323 SCRA 611)',
			'Social Weather Stations v. COMELEC (357 SCRA 496)',
			'Chavez v. COMELEC (437 SCRA 415)'
		],
		optionExplanations: [
			'Correct — National Press Club v. COMELEC upheld Sec. 11(b) of R.A. 6646 as a valid regulation to equalize media access.',
			'Incorrect — PPI v. COMELEC struck down compulsory free print space without compensation.',
			'Incorrect — ABS-CBN v. COMELEC invalidated the ban on exit polls.',
			'Incorrect — SWS v. COMELEC invalidated the ban on pre-election survey publication.',
			'Incorrect — Chavez v. COMELEC struck down COMELEC’s prohibition against movie/TV appearances of candidate-endorsers.'
		],
		correctIndex: 0,
		key: 'National Press Club v. COMELEC (207 SCRA 1)',
		explanation:
			'In National Press Club v. COMELEC (207 SCRA 1), the Court ruled that the prohibition was a valid regulation of the election process designed to equalize media exposure between affluent and poor candidates pursuant to Article IX-C, Section 4.',
		legalBasis: 'Art. IX-C, Sec. 4, 1987 Constitution; National Press Club v. COMELEC (207 SCRA 1, 1992)'
	},
	{
		id: 'consti1:finals:163',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'In which case did the Supreme Court invalidate a COMELEC resolution prohibiting the conduct of exit polls, holding that exit polling forms part of the constitutionally protected freedom of speech and the press?',
		options: [
			'ABS-CBN Broadcasting Corp. v. COMELEC (323 SCRA 611)',
			'Social Weather Stations v. COMELEC (357 SCRA 496)',
			'Philippine Press Institute v. COMELEC (244 SCRA 272)',
			'National Press Club v. COMELEC (207 SCRA 1)',
			'Guevara v. COMELEC (104 Phil. 268)'
		],
		optionExplanations: [
			'Correct — ABS-CBN v. COMELEC struck down the COMELEC ban on exit polls as an unconstitutional prior restraint.',
			'Incorrect — SWS v. COMELEC struck down the statutory ban on publishing pre-election surveys.',
			'Incorrect — PPI v. COMELEC invalidated mandatory free newspaper ad space.',
			'Incorrect — NPC v. COMELEC upheld R.A. 6646 Sec. 11(b) regulating media space.',
			'Incorrect — Guevara v. COMELEC restricted COMELEC’s contempt power to quasi-judicial proceedings.'
		],
		correctIndex: 0,
		key: 'ABS-CBN Broadcasting Corp. v. COMELEC (323 SCRA 611)',
		explanation:
			'In ABS-CBN Broadcasting Corp. v. COMELEC (323 SCRA 611), the Court held that exit polls are protected free speech and provide valuable public information. Total prohibition is an unconstitutional prior restraint that fails the clear and present danger test.',
		legalBasis: 'Art. III, Sec. 4 & Art. IX-C, Sec. 4, 1987 Constitution; ABS-CBN v. COMELEC (323 SCRA 611, 2000)'
	},
	{
		id: 'consti1:finals:164',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'In which ruling did the Supreme Court invalidate Section 5.4 of Republic Act No. 9006, which banned the publication of election surveys within 15 days before national elections and 7 days before local elections, holding that it constituted an invalid prior restraint on expression?',
		options: [
			'Social Weather Stations v. COMELEC (357 SCRA 496)',
			'ABS-CBN Broadcasting Corp. v. COMELEC (323 SCRA 611)',
			'Philippine Press Institute v. COMELEC (244 SCRA 272)',
			'Chavez v. COMELEC (437 SCRA 415)',
			'Telecommunications and Broadcast Attorneys v. COMELEC (289 SCRA 337)'
		],
		optionExplanations: [
			'Correct — SWS v. COMELEC struck down Sec. 5.4 of the Fair Election Act banning pre-election survey publication.',
			'Incorrect — ABS-CBN v. COMELEC struck down the ban on exit polls.',
			'Incorrect — PPI v. COMELEC invalidated compulsory free newspaper space.',
			'Incorrect — Chavez v. COMELEC struck down restrictions on media personalities’ endorsements.',
			'Incorrect — TELEBAP v. COMELEC upheld free broadcast air time for COMELEC.'
		],
		correctIndex: 0,
		key: 'Social Weather Stations v. COMELEC (357 SCRA 496)',
		explanation:
			"In Social Weather Stations v. COMELEC (357 SCRA 496), the Court ruled that the statutory ban on survey publication was unconstitutional because it aimed to suppress speech based on content without satisfying the O'Brien standard of valid incidental limitation.",
		legalBasis: 'Art. III, Sec. 4 & Art. IX-C, Sec. 4, 1987 Constitution; SWS v. COMELEC (357 SCRA 496, 2001)'
	},
	{
		id: 'consti1:finals:165',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'Which landmark case reversed Lanot v. COMELEC and established that under Section 15 of Republic Act No. 9369, premature campaigning is no longer an election offense because an aspirant is deemed a candidate only upon the commencement of the official campaign period?',
		options: [
			'Penera v. COMELEC (G.R. No. 181613, 2009)',
			'Lanot v. COMELEC (507 SCRA 114)',
			'Chavez v. COMELEC (437 SCRA 415)',
			'Flores v. COMELEC (184 SCRA 484)',
			'Sinsuat v. COMELEC (492 SCRA 264)'
		],
		optionExplanations: [
			'Correct — Penera v. COMELEC (MR Resolution, Nov. 2009) held that candidate liability under Sec. 15 of R.A. 9369 attaches only at the start of the campaign period.',
			'Incorrect — Lanot v. COMELEC was the earlier ruling under the old law before R.A. 9369.',
			'Incorrect — Chavez v. COMELEC involved removal of campaign billboards/ads.',
			'Incorrect — Flores v. COMELEC invalidated a statute diverting barangay election appeals to the RTC.',
			'Incorrect — Sinsuat v. COMELEC involved substitution of candidates and election offenses.'
		],
		correctIndex: 0,
		key: 'Penera v. COMELEC (G.R. No. 181613, 2009)',
		explanation:
			'In Penera v. COMELEC (G.R. No. 181613, 2009), the Court ruled that under the Automated Election System law, a person who files a certificate of candidacy does not become a candidate until the campaign period begins; therefore, pre-campaign partisan acts cannot constitute premature campaigning.',
		legalBasis: 'Sec. 15, R.A. No. 9369; Penera v. COMELEC (605 SCRA 574, 2009)'
	},
	{
		id: 'consti1:finals:166',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			"In which ruling did the Supreme Court invalidate statutory provisions in the Overseas Absentee Voting Act (R.A. 9189) that subjected COMELEC's implementing rules to prior congressional approval, holding that such a legislative veto violated COMELEC's constitutional independence?",
		options: [
			'Macalintal v. COMELEC (405 SCRA 614)',
			'Penera v. COMELEC (G.R. No. 181613, 2009)',
			'Abakada Guro Party List v. Purisima (562 SCRA 251)',
			'Belgica v. Ochoa (710 SCRA 1)',
			'Chavez v. JBC (676 SCRA 579)'
		],
		optionExplanations: [
			'Correct — Macalintal v. COMELEC struck down the Joint Congressional Oversight Committee’s review/approval power over COMELEC rules.',
			'Incorrect — Penera v. COMELEC addressed premature campaigning under R.A. 9369.',
			'Incorrect — Abakada Guro v. Purisima struck down legislative veto provisions over the Attrition Act IRR.',
			'Incorrect — Belgica v. Ochoa invalidated the PDAF Pork Barrel system.',
			'Incorrect — Chavez v. JBC invalidated dual congressional representation in the JBC.'
		],
		correctIndex: 0,
		key: 'Macalintal v. COMELEC (405 SCRA 614)',
		explanation:
			'In Macalintal v. COMELEC (405 SCRA 614), the Court struck down the Joint Congressional Oversight Committee\'s power to approve COMELEC regulations, ruling that legislative oversight cannot interfere with the independent rule-making power guaranteed by Article IX-A, Section 6.',
		legalBasis: 'Art. IX-A, Secs. 1 & 6, 1987 Constitution; Macalintal v. COMELEC (405 SCRA 614, 2003)'
	},
	{
		id: 'consti1:finals:167',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			"In which case did the Supreme Court rule that the COMELEC's contempt power is limited to proceedings where it exercises quasi-judicial authority, and cannot be invoked in purely administrative or ministerial inquiries?",
		options: [
			'Guevara v. COMELEC (104 Phil. 268)',
			'Canicosa v. COMELEC (282 SCRA 512)',
			'People v. Delgado (189 SCRA 715)',
			'Aratuc v. COMELEC (88 SCRA 251)',
			'Bedol v. COMELEC (606 SCRA 554)'
		],
		optionExplanations: [
			'Correct — Guevara v. COMELEC limited the COMELEC’s contempt power to quasi-judicial proceedings.',
			'Incorrect — Canicosa v. COMELEC held that administrative matters are decided directly En Banc.',
			'Incorrect — People v. Delgado addressed RTC exclusive jurisdiction over criminal election offenses.',
			'Incorrect — Aratuc v. COMELEC defined Supreme Court certiorari review over COMELEC rulings.',
			'Incorrect — Bedol v. COMELEC later upheld indirect contempt in election-related investigations.'
		],
		correctIndex: 0,
		key: 'Guevara v. COMELEC (104 Phil. 268)',
		explanation:
			'In Guevara v. COMELEC (104 Phil. 268), the Court held that the contempt power is an inherent judicial attribute; hence, an administrative commission cannot cite a person in contempt while performing purely ministerial or investigative functions.',
		legalBasis: 'Guevara v. COMELEC (104 Phil. 268, 1958)'
	},
	{
		id: 'consti1:finals:168',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'Which case established that the power to conduct preliminary investigation of election offenses is vested in the COMELEC, but the exclusive original jurisdiction to try and decide criminal prosecutions for election offenses belongs to the Regional Trial Courts?',
		options: [
			'People v. Delgado (189 SCRA 715)',
			'Guevara v. COMELEC (104 Phil. 268)',
			'Canicosa v. COMELEC (282 SCRA 512)',
			'Flores v. COMELEC (184 SCRA 484)',
			'Soller v. COMELEC (339 SCRA 685)'
		],
		optionExplanations: [
			'Correct — People v. Delgado confirmed that RTCs have exclusive jurisdiction to try and decide criminal election offenses.',
			'Incorrect — Guevara v. COMELEC restricted COMELEC’s contempt power to quasi-judicial proceedings.',
			'Incorrect — Canicosa v. COMELEC distinguished administrative vs. quasi-judicial functions.',
			'Incorrect — Flores v. COMELEC struck down diverting barangay election appeals away from COMELEC.',
			'Incorrect — Soller v. COMELEC dealt with municipal election protest appeals inside COMELEC.'
		],
		correctIndex: 0,
		key: 'People v. Delgado (189 SCRA 715)',
		explanation:
			'In People v. Delgado (189 SCRA 715), the Court clarified that under Section 268 of the Omnibus Election Code, trial courts of general jurisdiction (RTCs) have exclusive jurisdiction to try criminal election offenses, even though the COMELEC conducts the preliminary investigation.',
		legalBasis: 'Art. IX-C, Sec. 2(6), 1987 Constitution; Sec. 268, Omnibus Election Code; People v. Delgado (189 SCRA 715, 1990)'
	},
	{
		id: 'consti1:finals:169',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'In which early post-1973 case did the Supreme Court hold that under the Constitution, judgments and final orders of the Commission on Elections can only be reviewed by the Supreme Court on certiorari upon a showing of grave abuse of discretion?',
		options: [
			'Aratuc v. COMELEC (88 SCRA 251)',
			'Flores v. COMELEC (184 SCRA 484)',
			'Canicosa v. COMELEC (282 SCRA 512)',
			'Cagas v. COMELEC (664 SCRA 333)',
			'Soller v. COMELEC (339 SCRA 685)'
		],
		optionExplanations: [
			'Correct — Aratuc v. COMELEC established that Supreme Court review of COMELEC decisions is limited to certiorari for grave abuse of discretion, not ordinary appeal.',
			'Incorrect — Flores v. COMELEC invalidated RTC appellate jurisdiction over barangay election contests.',
			'Incorrect — Canicosa v. COMELEC addressed administrative vs. quasi-judicial authority.',
			'Incorrect — Cagas v. COMELEC voided first-instance En Banc decisions in election cases.',
			'Incorrect — Soller v. COMELEC applied the division-first rule to municipal election appeals.'
		],
		correctIndex: 0,
		key: 'Aratuc v. COMELEC (88 SCRA 251)',
		explanation:
			'In Aratuc v. COMELEC (88 SCRA 251), the Court affirmed that review of COMELEC decisions by the Supreme Court is not an ordinary appeal on errors of fact or law, but an extraordinary inquiry via certiorari into whether the Commission acted with grave abuse of discretion.',
		legalBasis: 'Art. IX-A, Sec. 7, 1987 Constitution; Aratuc v. COMELEC (88 SCRA 251, 1979)'
	},
	{
		id: 'consti1:finals:170',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'In which case did the Supreme Court strike down Section 9 of Republic Act No. 6679, which provided that decisions of municipal trial courts in barangay election contests shall be appealable to the Regional Trial Courts, holding that it unconstitutionally bypassed the appellate jurisdiction of the COMELEC under Article IX-C, Section 2(2)?',
		options: [
			'Flores v. COMELEC (184 SCRA 484)',
			'Aratuc v. COMELEC (88 SCRA 251)',
			'Canicosa v. COMELEC (282 SCRA 512)',
			'Soller v. COMELEC (339 SCRA 685)',
			'Cagas v. COMELEC (664 SCRA 333)'
		],
		optionExplanations: [
			'Correct — Flores v. COMELEC struck down Sec. 9 of R.A. 6679 for depriving the COMELEC of its constitutional appellate jurisdiction over barangay election contests.',
			'Incorrect — Aratuc v. COMELEC defined the scope of SC certiorari review over COMELEC.',
			'Incorrect — Canicosa v. COMELEC addressed administrative decisions by COMELEC En Banc.',
			'Incorrect — Soller v. COMELEC dealt with municipal election protest appeals inside COMELEC.',
			'Incorrect — Cagas v. COMELEC addressed first-instance En Banc decisions.'
		],
		correctIndex: 0,
		key: 'Flores v. COMELEC (184 SCRA 484)',
		explanation:
			'In Flores v. COMELEC (184 SCRA 484), the Court held that Article IX-C, Section 2(2) expressly confers appellate jurisdiction on the COMELEC over all election contests involving elective barangay officials decided by lower trial courts. Congress cannot redirect those appeals to the RTC.',
		legalBasis: 'Art. IX-C, Sec. 2(2), 1987 Constitution; Flores v. COMELEC (184 SCRA 484, 1990)'
	},
	{
		id: 'consti1:finals:171',
		topicId: 'finals_cases',
		topic: P5_14,
		tag: 'cases',
		question:
			'In which case did the Supreme Court reiterate that an election protest involving an elective municipal official must be heard and decided by a COMELEC Division on appeal before any motion for reconsideration can be brought to the COMELEC En Banc?',
		options: [
			'Soller v. COMELEC (339 SCRA 685)',
			'Flores v. COMELEC (184 SCRA 484)',
			'Canicosa v. COMELEC (282 SCRA 512)',
			'Cagas v. COMELEC (664 SCRA 333)',
			'Aratuc v. COMELEC (88 SCRA 251)'
		],
		optionExplanations: [
			'Correct — Soller v. COMELEC voided an En Banc ruling on an appealed municipal election contest that skipped Division resolution.',
			'Incorrect — Flores v. COMELEC invalidated routing barangay election appeals to the RTC.',
			'Incorrect — Canicosa v. COMELEC involved administrative decisions directly by the En Banc.',
			'Incorrect — Cagas v. COMELEC involved a COMELEC En Banc ruling on an interlocutory/protest order.',
			'Incorrect — Aratuc v. COMELEC defined certiorari review over COMELEC.'
		],
		correctIndex: 0,
		key: 'Soller v. COMELEC (339 SCRA 685)',
		explanation:
			'In Soller v. COMELEC (339 SCRA 685), the Court reaffirmed that the COMELEC En Banc has no jurisdiction to entertain an appeal from an RTC decision in a municipal election protest without the appeal being resolved first by one of its Divisions.',
		legalBasis: 'Art. IX-C, Sec. 3, 1987 Constitution; Soller v. COMELEC (339 SCRA 685, 2000)'
	},

	// ---- Chapter 15: The Commission on Audit (Q172–Q180) ----
	{
		id: 'consti1:finals:172',
		topicId: 'finals_cases',
		topic: P5_15,
		tag: 'cases',
		question:
			"In which case did the Supreme Court affirm that under Presidential Decree No. 1445, the Commission on Audit has primary jurisdiction over all moneyed claims against the Government, and that an auditor's delay gives rise to mandamus to compel decision, not an order of automatic execution?",
		options: [
			'Pacete v. Acting Chairman of COA (185 SCRA 1)',
			'UP v. Dizon (G.R. No. 171182, 2012)',
			'Caltex Philippines, Inc. v. COA (208 SCRA 726)',
			'Riel v. Wright (49 Phil. 195)',
			'Guevara v. Gimenez (6 SCRA 813)'
		],
		optionExplanations: [
			'Correct — Pacete v. Acting Chairman of COA held that COA delay in resolving a money claim warrants mandamus to decide, not automatic execution.',
			'Incorrect — UP v. Dizon prohibited execution/garnishment of UP bank funds without first filing the claim before COA.',
			'Incorrect — Caltex v. COA held OPSF levies are public funds subject to COA audit.',
			'Incorrect — Riel v. Wright held that the Auditor exercises quasi-judicial discretion in disallowing illegal outlays.',
			'Incorrect — Guevara v. Gimenez barred the Auditor from arbitrarily disallowing a valid contract supported by appropriations.'
		],
		correctIndex: 0,
		key: 'Pacete v. Acting Chairman of COA (185 SCRA 1)',
		explanation:
			'In Pacete v. Acting Chairman of COA (185 SCRA 1), the Court ruled that money claims against the State must first be presented to the Commission on Audit. If the Commission fails to act within the statutory period, the proper remedy is mandamus to compel the rendition of a decision, not a judicial order for immediate payment.',
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution; P.D. 1445; Pacete v. Acting Chairman of COA (185 SCRA 1, 1990)'
	},
	{
		id: 'consti1:finals:173',
		topicId: 'finals_cases',
		topic: P5_15,
		tag: 'cases',
		question:
			'Which landmark case held that trial courts cannot issue writs of execution or garnishment against the funds and bank accounts of state universities without the judgment creditor first submitting the claim to the Commission on Audit for audit approval?',
		options: [
			'UP v. Dizon (G.R. No. 171182, 2012)',
			'Pacete v. Acting Chairman of COA (185 SCRA 1)',
			'Republic v. Villasor (54 SCRA 84)',
			'Amigable v. Cuenca (43 SCRA 360)',
			'Department of Agriculture v. NLRC (227 SCRA 693)'
		],
		optionExplanations: [
			'Correct — UP v. Dizon ruled that final money judgments against state universities like UP must still be filed with the COA before disbursement.',
			'Incorrect — Pacete v. Acting Chairman of COA addressed mandamus when COA delays deciding a claim.',
			'Incorrect — Republic v. Villasor barred garnishment of AFP public funds on judgment execution.',
			'Incorrect — Amigable v. Cuenca allowed suit against the State when property was taken without expropriation or compensation.',
			'Incorrect — DA v. NLRC held that while NLRC has jurisdiction over labor claims, enforcement of money judgments still requires COA filing.'
		],
		correctIndex: 0,
		key: 'UP v. Dizon (G.R. No. 171182, 2012)',
		explanation:
			'In UP v. Dizon (G.R. No. 171182, 2012), the Supreme Court held that all money judgments rendered by regular courts against government entities and state institutions must be filed with the COA, which retains primary jurisdiction to determine whether public funds are legally available for disbursement.',
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution; UP v. Dizon (G.R. No. 171182, 2012)'
	},
	{
		id: 'consti1:finals:174',
		topicId: 'finals_cases',
		topic: P5_15,
		tag: 'cases',
		question:
			'In which landmark decision did the Supreme Court declare that coconut levy funds are special public funds, thereby placing shares of stock and corporations acquired using those funds under the audit jurisdiction of the Commission on Audit?',
		options: [
			'COCOFED v. Republic (G.R. Nos. 177857-58, 2012)',
			'Caltex Philippines, Inc. v. COA (208 SCRA 726)',
			'Verzosa v. Carague (G.R. No. 157838, 2011)',
			'Republic v. COCOFED (372 SCRA 462)',
			'PCGG v. COCOFED (G.R. No. 147062)'
		],
		optionExplanations: [
			'Correct — COCOFED v. Republic (2012) definitively declared coconut levy funds and the UCPB/CIIF assets acquired therewith to be public funds.',
			'Incorrect — Caltex v. COA addressed Oil Price Stabilization Fund (OPSF) levies.',
			'Incorrect — Verzosa v. Carague involved COA disallowance of overpriced computer procurement at CDA.',
			'Incorrect — Republic v. COCOFED (2001) earlier ruled on voting rights of sequestered coconut levy shares.',
			'Incorrect — PCGG v. COCOFED concerned interlocutory sequestration orders.'
		],
		correctIndex: 0,
		key: 'COCOFED v. Republic (G.R. Nos. 177857-58, 2012)',
		explanation:
			"In COCOFED v. Republic (G.R. Nos. 177857-58, 2012), the Supreme Court ruled that coconut levy funds were collected pursuant to the State's police and taxing powers. They are public funds held in trust for the public, meaning assets bought with them are subject to COA audit.",
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution; COCOFED v. Republic (G.R. Nos. 177857-58, 2012)'
	},
	{
		id: 'consti1:finals:175',
		topicId: 'finals_cases',
		topic: P5_15,
		tag: 'cases',
		question:
			'Which case held that taxes collected for the Oil Price Stabilization Fund (OPSF) constitute special public funds, and that oil companies holding these collections are accountable public agents subject to COA audit and disallowance?',
		options: [
			'Caltex Philippines, Inc. v. Commission on Audit (208 SCRA 726)',
			'COCOFED v. Republic (G.R. Nos. 177857-58, 2012)',
			'Osmeña v. Orbos (220 SCRA 703)',
			'Guevara v. Gimenez (6 SCRA 813)',
			'Pacete v. Acting Chairman of COA (185 SCRA 1)'
		],
		optionExplanations: [
			'Correct — Caltex v. COA held that OPSF levies are public funds subject to COA examination and settlement.',
			'Incorrect — COCOFED v. Republic addressed coconut levy funds.',
			'Incorrect — Osmeña v. Orbos upheld the Energy Regulatory Board’s authority over the OPSF against undue delegation claims.',
			'Incorrect — Guevara v. Gimenez involved disallowance of valid executive contracts.',
			'Incorrect — Pacete v. COA addressed mandamus against COA inaction.'
		],
		correctIndex: 0,
		key: 'Caltex Philippines, Inc. v. Commission on Audit (208 SCRA 726)',
		explanation:
			"In Caltex Philippines, Inc. v. Commission on Audit (208 SCRA 726), the Court held that the OPSF collections were public funds raised under the police and taxing powers of the State, and that the Commission on Audit has the constitutional authority to audit their collection and disbursement.",
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution; Caltex Philippines, Inc. v. COA (208 SCRA 726, 1992)'
	},
	{
		id: 'consti1:finals:176',
		topicId: 'finals_cases',
		topic: P5_15,
		tag: 'cases',
		question:
			'In which early landmark case did the Supreme Court hold that the Insular Auditor is not a mere ministerial officer, and that mandamus will not issue to compel the approval of a public expenditure when the auditor has exercised discretion in determining that the expenditure was unauthorized by law?',
		options: [
			'Riel v. Wright (49 Phil. 195)',
			'Guevara v. Gimenez (6 SCRA 813)',
			'Pacete v. Acting Chairman of COA (185 SCRA 1)',
			'Caltex Philippines, Inc. v. COA (208 SCRA 726)',
			'Salazar v. Mathay (73 SCRA 275)'
		],
		optionExplanations: [
			'Correct — Riel v. Wright confirmed that the Auditor exercises quasi-judicial discretion in passing upon the legality of expenditures.',
			'Incorrect — Guevara v. Gimenez curtailed the Auditor from disallowing a valid contract authorized by appropriation.',
			'Incorrect — Pacete v. COA involved mandamus to compel a decision after inaction.',
			'Incorrect — Caltex v. COA involved OPSF audit jurisdiction.',
			'Incorrect — Salazar v. Mathay involved audit power vis-à-vis court-adjudicated payments.'
		],
		correctIndex: 0,
		key: 'Riel v. Wright (49 Phil. 195)',
		explanation:
			'In Riel v. Wright (49 Phil. 195), the Supreme Court held that the Auditor has the quasi-judicial duty to disallow unlawful expenditures. Courts will not substitute their judgment for that of the Auditor through mandamus absent a showing of arbitrary grave abuse of discretion.',
		legalBasis: 'Riel v. Wright (49 Phil. 195, 1926)'
	},
	{
		id: 'consti1:finals:177',
		topicId: 'finals_cases',
		topic: P5_15,
		tag: 'cases',
		question:
			"In which case did the Supreme Court rule that the Cooperative Development Authority's procurement of office equipment and computers is subject to the COA's auditing rules for the prevention and disallowance of irregular, unnecessary, excessive, extravagant, or unconscionable expenditures?",
		options: [
			'Verzosa v. Carague (G.R. No. 157838, 2011)',
			'COCOFED v. Republic (G.R. Nos. 177857-58, 2012)',
			'Caltex Philippines, Inc. v. COA (208 SCRA 726)',
			'GSIS v. COA (G.R. No. 162372, 2011)',
			'Feliciano v. COA (419 SCRA 363)'
		],
		optionExplanations: [
			'Correct — Verzosa v. Carague upheld COA disallowance of overpriced computer procurement at CDA and affirmed solidary liability for bad-faith bid manipulation.',
			'Incorrect — COCOFED v. Republic addressed coconut levy funds.',
			'Incorrect — Caltex v. COA addressed OPSF levies.',
			'Incorrect — GSIS v. COA invalidated unauthorized early retirement incentives granted by the GSIS Board.',
			'Incorrect — Feliciano v. COA affirmed COA’s audit jurisdiction over local water districts.'
		],
		correctIndex: 0,
		key: 'Verzosa v. Carague (G.R. No. 157838, 2011)',
		explanation:
			'In Verzosa v. Carague (G.R. No. 157838, 2011; Resolution Feb. 7, 2012), the Court upheld COA disallowances on government computer purchases at the Cooperative Development Authority, confirming that the Commission on Audit has constitutional authority to set benchmarks preventing excessive and extravagant spending by government agencies.',
		legalBasis:
			'Art. IX-D, Sec. 2(2), 1987 Constitution; Verzosa v. Carague (G.R. No. 157838, 2011) (Mnemonic: IUEEU — Irregular, Unnecessary, Excessive, Extravagant, Unconscionable)'
	},
	{
		id: 'consti1:finals:178',
		topicId: 'finals_cases',
		topic: P5_15,
		tag: 'cases',
		question:
			'In which case did the Supreme Court strike down an administrative resolution passed by the GSIS Board granting additional early retirement incentives to its employees without express statutory authorization, holding that it constituted unauthorized expenditure of public funds subject to COA disallowance?',
		options: [
			'GSIS v. Commission on Audit (G.R. No. 162372, 2011)',
			'Verzosa v. Carague (G.R. No. 157838, 2011)',
			'Caltex Philippines, Inc. v. COA (208 SCRA 726)',
			'Bengzon v. Drilon (208 SCRA 133)',
			'Pangilinan v. Maglaya (225 SCRA 511)'
		],
		optionExplanations: [
			'Correct — GSIS v. COA affirmed COA disallowance of the GSIS Board’s unauthorized early retirement incentive program.',
			'Incorrect — Verzosa v. Carague upheld COA disallowance of overpriced CDA computer purchases.',
			'Incorrect — Caltex v. COA addressed OPSF collections.',
			'Incorrect — Bengzon v. Drilon invalidated the presidential veto of judicial pensions.',
			'Incorrect — Pangilinan v. Maglaya addressed executive removals and appointments.'
		],
		correctIndex: 0,
		key: 'GSIS v. Commission on Audit (G.R. No. 162372, 2011)',
		explanation:
			'In GSIS v. Commission on Audit (G.R. No. 162372, 2011), the Court affirmed the disallowance of monetary incentives approved by the GSIS Board, ruling that public corporations cannot create new retirement allowances without statutory authority enacted by Congress.',
		legalBasis: 'Art. IX-D, Sec. 2(1)–(2), 1987 Constitution; GSIS v. COA (G.R. No. 162372, 2011)'
	},
	{
		id: 'consti1:finals:179',
		topicId: 'finals_cases',
		topic: P5_15,
		tag: 'cases',
		question:
			'In which early case did the Supreme Court rule that while the Auditor General has the constitutional power to examine and audit accounts, he cannot refuse to pass in audit an expenditure authorized by a valid, existing contract unless it is shown to be illegal or contrary to statutory appropriations?',
		options: [
			'Guevara v. Gimenez (6 SCRA 813)',
			'Riel v. Wright (49 Phil. 195)',
			'Salazar v. Mathay (73 SCRA 275)',
			'Pacete v. Acting Chairman of COA (185 SCRA 1)',
			'Caltex Philippines, Inc. v. COA (208 SCRA 726)'
		],
		optionExplanations: [
			'Correct — Guevara v. Gimenez held that an auditor cannot arbitrarily veto a lawful contract supported by valid appropriations.',
			'Incorrect — Riel v. Wright held that mandamus does not lie when an auditor exercises discretion to disallow an illegal outlay.',
			'Incorrect — Salazar v. Mathay barred the Auditor from reviewing judicial judgments.',
			'Incorrect — Pacete v. COA involved COA delay on money claims.',
			'Incorrect — Caltex v. COA addressed OPSF levies.'
		],
		correctIndex: 0,
		key: 'Guevara v. Gimenez (6 SCRA 813)',
		explanation:
			'In Guevara v. Gimenez (6 SCRA 813), the Court clarified the boundaries of audit authority, holding that an auditor cannot arbitrarily veto a valid executive contract when funds have been legally appropriated and the contract is lawful on its face.',
		legalBasis: 'Guevara v. Gimenez (6 SCRA 813, 1962)'
	},
	{
		id: 'consti1:finals:180',
		topicId: 'finals_cases',
		topic: P5_15,
		tag: 'cases',
		question:
			"Which case established that the Auditor General's authority to disallow irregular or illegal accounts does not authorize him to review the correctness of judicial determinations on matters within the exclusive jurisdiction of the courts?",
		options: [
			'Salazar v. Mathay (73 SCRA 275)',
			'Riel v. Wright (49 Phil. 195)',
			'Guevara v. Gimenez (6 SCRA 813)',
			'Pacete v. Acting Chairman of COA (185 SCRA 1)',
			'Bengzon v. Drilon (208 SCRA 133)'
		],
		optionExplanations: [
			'Correct — Salazar v. Mathay confirmed that the Auditor cannot sit in review of final judicial rulings.',
			'Incorrect — Riel v. Wright involved quasi-judicial audit discretion over executive disbursements.',
			'Incorrect — Guevara v. Gimenez barred vetoing valid executive contracts.',
			'Incorrect — Pacete v. COA involved delay in resolving money claims.',
			'Incorrect — Bengzon v. Drilon involved presidential veto of judicial pensions.'
		],
		correctIndex: 0,
		key: 'Salazar v. Mathay (73 SCRA 275)',
		explanation:
			'In Salazar v. Mathay (73 SCRA 275), the Court held that while the Auditor audits financial disbursements, he cannot sit in review of judicial decisions or override judicial orders directing the payment of funds properly adjudicated by a court of competent jurisdiction.',
		legalBasis: 'Salazar v. Mathay (73 SCRA 275, 1976)'
	},

	// ---- Chapter 16/17: Accountability of Public Officers (Q181–Q193) ----
	{
		id: 'consti1:finals:181',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'In which landmark decision did the Supreme Court define the word "initiate" in Article XI, Section 3(5) of the Constitution, holding that an impeachment proceeding is initiated upon the filing of the complaint and its referral to the House Committee on Justice, thereby triggering the one-year ban?',
		options: [
			'Francisco v. House of Representatives (415 SCRA 44)',
			'Gutierrez v. House of Representatives (643 SCRA 198)',
			'Republic v. Sereno (G.R. No. 237428, 2018)',
			'Romulo v. Yñiguez (141 SCRA 263)',
			'De Castro v. Committee on Justice (G.R. No. 71688)'
		],
		optionExplanations: [
			'Correct — Francisco v. House of Representatives defined "initiate" as filing plus referral to the House Committee on Justice.',
			'Incorrect — Gutierrez v. House of Representatives allowed multiple complaints referred together on the same day as one proceeding.',
			'Incorrect — Republic v. Sereno distinguished quo warranto from impeachment.',
			'Incorrect — Romulo v. Yñiguez involved an earlier impeachment attempt under the 1973 Constitution.',
			'Incorrect — De Castro v. Committee on Justice involved an earlier 1985 impeachment complaint dismissal.'
		],
		correctIndex: 0,
		key: 'Francisco v. House of Representatives (415 SCRA 44)',
		explanation:
			'In Francisco v. House of Representatives (415 SCRA 44), the Supreme Court held that the constitutional term "initiate" means the filing of a verified impeachment complaint coupled with its referral to the Committee on Justice. A second complaint referred within one year violates Article XI, Section 3(5).',
		legalBasis: 'Art. XI, Sec. 3(5), 1987 Constitution; Francisco v. House of Representatives (415 SCRA 44, 2003)'
	},
	{
		id: 'consti1:finals:182',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'Which case established that the simultaneous filing and consolidation of multiple impeachment complaints that are referred to the Committee on Justice on the exact same day does not violate the one-year bar rule?',
		options: [
			'Gutierrez v. House of Representatives (643 SCRA 198)',
			'Francisco v. House of Representatives (415 SCRA 44)',
			'Republic v. Sereno (G.R. No. 237428, 2018)',
			'Gonzales v. Office of the President (G.R. No. 196231)',
			'Corona v. Senate (676 SCRA 563)'
		],
		optionExplanations: [
			'Correct — Gutierrez v. House of Representatives held that simultaneous referral of multiple complaints forms one single impeachment proceeding.',
			'Incorrect — Francisco v. House of Representatives established the filing-plus-referral test for initiation.',
			'Incorrect — Republic v. Sereno held that quo warranto is concurrent with impeachment.',
			'Incorrect — Gonzales v. OP invalidated presidential disciplinary power over the Deputy Ombudsman.',
			'Incorrect — Corona v. Senate involved judicial review of Senate impeachment proceedings.'
		],
		correctIndex: 0,
		key: 'Gutierrez v. House of Representatives (643 SCRA 198)',
		explanation:
			'In Gutierrez v. House of Representatives (643 SCRA 198), the Court ruled that the one-year bar prohibits subsequent initiated proceedings, not multi-count complaints or separate complaints initiated simultaneously in a single, consolidated proceeding.',
		legalBasis: 'Art. XI, Sec. 3(5), 1987 Constitution; Gutierrez v. House of Representatives (643 SCRA 198, 2011)'
	},
	{
		id: 'consti1:finals:183',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'In which landmark ruling did the Supreme Court hold that quo warranto and impeachment are distinct legal remedies, and that an impeachable officer may be ousted via a petition for quo warranto for lack of constitutional qualifications at the time of appointment?',
		options: [
			'Republic v. Sereno (G.R. No. 237428, 2018)',
			'Francisco v. House of Representatives (415 SCRA 44)',
			'Gutierrez v. House of Representatives (643 SCRA 198)',
			'Estrada v. Desierto (353 SCRA 452)',
			'Gonzales v. Office of the President (G.R. No. 196231)'
		],
		optionExplanations: [
			'Correct — Republic v. Sereno held that quo warranto tests validity of title and eligibility at inception, distinct from impeachment.',
			'Incorrect — Francisco v. House of Representatives addressed the one-year impeachment ban.',
			'Incorrect — Gutierrez v. House of Representatives addressed simultaneous impeachment complaints.',
			'Incorrect — Estrada v. Desierto addressed resignation and post-tenure presidential immunity.',
			'Incorrect — Gonzales v. OP addressed Ombudsman independence from executive discipline.'
		],
		correctIndex: 0,
		key: 'Republic v. Sereno (G.R. No. 237428, 2018)',
		explanation:
			'In Republic v. Sereno (G.R. No. 237428, 2018), the Court held that quo warranto inquires into the validity of title to public office at its inception based on qualifications, whereas impeachment is a political mechanism to remove a validly seated officer for offenses committed during tenure.',
		legalBasis: 'Art. VIII, Sec. 5(1) & Art. XI, Sec. 2, 1987 Constitution; Republic v. Sereno (G.R. No. 237428, 2018)'
	},
	{
		id: 'consti1:finals:184',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'In which case did the Supreme Court strike down Section 8(2) of Republic Act No. 6770, which granted the President disciplinary authority over the Deputy Ombudsman, declaring it an unconstitutional encroachment on the independence of the Ombudsman?',
		options: [
			'Gonzales v. Office of the President (G.R. No. 196231, 2012 & 2014)',
			'Zaldivar v. Gonzales (166 SCRA 316)',
			'Republic v. Sereno (G.R. No. 237428, 2018)',
			'Perez v. Office of the Ombudsman (429 SCRA 357)',
			'Uy v. Commission on Audit (328 SCRA 607)'
		],
		optionExplanations: [
			'Correct — On reconsideration in 2014, Gonzales v. OP invalidated presidential disciplinary power over the Deputy Ombudsman under Sec. 8(2) of R.A. 6770.',
			'Incorrect — Zaldivar v. Gonzales held that the Special Prosecutor is subordinate to the Ombudsman.',
			'Incorrect — Republic v. Sereno involved quo warranto against an impeachable official.',
			'Incorrect — Perez v. Ombudsman addressed judicial review of Ombudsman probable-cause findings.',
			'Incorrect — Uy v. COA involved COA audit disallowances and public officers’ liability.'
		],
		correctIndex: 0,
		key: 'Gonzales v. Office of the President (G.R. No. 196231, 2012 & 2014)',
		explanation:
			'In Gonzales III v. Office of the President (G.R. No. 196231, 2012 & 2014), the Court held that subjecting the Deputy Ombudsman to the disciplinary power of the President directly undermines the institutional independence guaranteed to the Ombudsman under Article XI.',
		legalBasis: 'Art. XI, Sec. 5, 1987 Constitution; Gonzales III v. Office of the President (2012, 2014)'
	},
	{
		id: 'consti1:finals:185',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			"Which case established that under the 1987 Constitution, the Ombudsman is the primary constitutional officer vested with investigative and prosecutorial authority, and that the Special Prosecutor is an organic subordinate who cannot file criminal informations without the Ombudsman's authorization?",
		options: [
			'Zaldivar v. Gonzales (166 SCRA 316)',
			'Gonzales v. Office of the President (G.R. No. 196231)',
			'Nuñez v. Sandiganbayan (111 SCRA 433)',
			'Inting v. Tanodbayan (97 SCRA 494)',
			'Orap v. Sandiganbayan (139 SCRA 252)'
		],
		optionExplanations: [
			'Correct — Zaldivar v. Gonzales held that the 1987 Constitution absorbed the old Tanodbayan into the Office of the Special Prosecutor under the Ombudsman.',
			'Incorrect — Gonzales v. OP struck down presidential removal power over the Deputy Ombudsman.',
			'Incorrect — Nuñez v. Sandiganbayan upheld the creation of the Sandiganbayan.',
			'Incorrect — Inting v. Tanodbayan addressed Tanodbayan powers prior to the 1987 Constitution.',
			'Incorrect — Orap v. Sandiganbayan dealt with non-interference in preliminary investigations.'
		],
		correctIndex: 0,
		key: 'Zaldivar v. Gonzales (166 SCRA 316)',
		explanation:
			'In Zaldivar v. Gonzales (166 SCRA 316), the Court held that the 1987 Constitution converted the Tanodbayan into the Office of the Special Prosecutor under the exclusive authority and control of the Ombudsman; hence, the Special Prosecutor cannot initiate criminal cases on his own.',
		legalBasis: 'Art. XI, Secs. 5 & 7, 1987 Constitution; Zaldivar v. Gonzales (166 SCRA 316, 1988)'
	},
	{
		id: 'consti1:finals:186',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'In which case did the Supreme Court uphold the constitutionality of Presidential Decree No. 1486 creating the Sandiganbayan as a specialized anti-graft court, holding that it does not violate equal protection guarantees?',
		options: [
			'Nuñez v. Sandiganbayan (111 SCRA 433)',
			'Zaldivar v. Gonzales (166 SCRA 316)',
			'Rodriguez v. Sandiganbayan (120 SCRA 659)',
			'Alviar v. Sandiganbayan (137 SCRA 63)',
			'De Guzman v. People (119 SCRA 337)'
		],
		optionExplanations: [
			'Correct — Nuñez v. Sandiganbayan upheld P.D. 1486/1606 creating the Sandiganbayan against equal protection and ex post facto challenges.',
			'Incorrect — Zaldivar v. Gonzales defined the Ombudsman’s control over the Special Prosecutor.',
			'Incorrect — Rodriguez v. Sandiganbayan applied Nuñez to later prosecutions.',
			'Incorrect — Alviar v. Sandiganbayan involved Sandiganbayan criminal procedure.',
			'Incorrect — De Guzman v. People reiterated Nuñez on Sandiganbayan jurisdiction.'
		],
		correctIndex: 0,
		key: 'Nuñez v. Sandiganbayan (111 SCRA 433)',
		explanation:
			'In Nuñez v. Sandiganbayan (111 SCRA 433), the Supreme Court held that the creation of the Sandiganbayan was specifically mandated by the Constitution to combat public corruption, which represents a valid classification justifying specialized procedures.',
		legalBasis: 'Art. XI, Sec. 4, 1987 Constitution; Nuñez v. Sandiganbayan (111 SCRA 433, 1982)'
	},
	{
		id: 'consti1:finals:187',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'Which ruling established that actions filed by the State through the Presidential Commission on Good Government (PCGG) for the recovery of ill-gotten wealth unlawfully acquired by public officials are imprescriptible under Article XI, Section 15?',
		options: [
			'PCGG v. Peña (159 SCRA 556)',
			'Republic v. Sandiganbayan (200 SCRA 667)',
			'Nuñez v. Sandiganbayan (111 SCRA 433)',
			'Zaldivar v. Gonzales (166 SCRA 316)',
			'Chavez v. PCGG (299 SCRA 744)'
		],
		optionExplanations: [
			'Correct — PCGG v. Peña affirmed the Sandiganbayan’s exclusive jurisdiction over PCGG ill-gotten wealth cases and their imprescriptibility under Art. XI, Sec. 15.',
			'Incorrect — Republic v. Sandiganbayan addressed discovery procedures and recovery proceedings.',
			'Incorrect — Nuñez v. Sandiganbayan upheld the Sandiganbayan’s constitutionality.',
			'Incorrect — Zaldivar v. Gonzales addressed Ombudsman/Special Prosecutor powers.',
			'Incorrect — Chavez v. PCGG enforced the right to information on ill-gotten wealth compromise deals.'
		],
		correctIndex: 0,
		key: 'PCGG v. Peña (159 SCRA 556)',
		explanation:
			'In PCGG v. Peña (159 SCRA 556), the Court affirmed that under Article XI, Section 15, the right of the State to recover ill-gotten wealth from public officials, their nominees, or transferees cannot be barred by prescription, laches, or estoppel.',
		legalBasis: 'Art. XI, Sec. 15, 1987 Constitution; PCGG v. Peña (159 SCRA 556, 1988)'
	},
	{
		id: 'consti1:finals:188',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'In which case did the Supreme Court hold that the mandatory 90-day preventive suspension under Section 13 of Republic Act No. 3019 (Anti-Graft and Corrupt Practices Act) applies to all public officers indicted under a valid information, including incumbent Members of Congress?',
		options: [
			'Santiago v. Sandiganbayan (356 SCRA 636)',
			'Paredes v. Sandiganbayan (252 SCRA 641)',
			'Defensor-Santiago v. Vasquez (217 SCRA 633)',
			'Bolastig v. Sandiganbayan (235 SCRA 103)',
			'Segovia v. Sandiganbayan (288 SCRA 328)'
		],
		optionExplanations: [
			'Correct — Santiago v. Sandiganbayan upheld the Sandiganbayan’s authority to impose preventive suspension on an incumbent Senator under Sec. 13 of R.A. 3019.',
			'Incorrect — Paredes v. Sandiganbayan involved criminal prosecution and hold-departure/suspension orders.',
			'Incorrect — Defensor-Santiago v. Vasquez addressed hold-departure orders and Sandiganbayan bail.',
			'Incorrect — Bolastig v. Sandiganbayan confirmed that the 90-day preventive suspension under R.A. 3019 applies to local elective officials.',
			'Incorrect — Segovia v. Sandiganbayan addressed preventive suspension of officials in another office.'
		],
		correctIndex: 0,
		key: 'Santiago v. Sandiganbayan (356 SCRA 636)',
		explanation:
			'In Santiago v. Sandiganbayan (356 SCRA 636), the Court held that the preventive suspension under R.A. 3019 is not a penalty, but a precautionary measure to prevent tampering with evidence, and applies to legislators without infringing upon internal legislative discipline.',
		legalBasis: 'Sec. 13, R.A. No. 3019; Santiago v. Sandiganbayan (356 SCRA 636, 2001)'
	},
	{
		id: 'consti1:finals:189',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'In which landmark ruling did the Supreme Court hold that a non-sitting President loses executive immunity from suit and can be criminally prosecuted before the Sandiganbayan for non-official criminal acts like plunder and bribery?',
		options: [
			'Estrada v. Desierto (353 SCRA 452)',
			'Republic v. Sereno (G.R. No. 237428, 2018)',
			'Romualdez v. Sandiganbayan (435 SCRA 371)',
			'In re Saturnino Bermudez (145 SCRA 160)',
			'Soliven v. Makasiar (167 SCRA 393)'
		],
		optionExplanations: [
			'Correct — Estrada v. Desierto held that presidential immunity does not survive tenure to shield a former President from criminal prosecution.',
			'Incorrect — Republic v. Sereno dealt with quo warranto against an impeachable officer.',
			'Incorrect — Romualdez v. Sandiganbayan upheld anti-graft charges involving unexplained wealth.',
			'Incorrect — In re Saturnino Bermudez confirmed that a sitting President cannot be sued even for declaratory relief.',
			'Incorrect — Soliven v. Makasiar clarified that presidential immunity may be waived or invoked only by the incumbent President.'
		],
		correctIndex: 0,
		key: 'Estrada v. Desierto (353 SCRA 452)',
		explanation:
			'In Estrada v. Desierto (353 SCRA 452), the Court held that presidential immunity lasts only during incumbency; once tenure ends, post-tenure immunity extends only to lawful official acts, never to criminal offenses.',
		legalBasis: 'Art. VII, Sec. 1, 1987 Constitution; Estrada v. Desierto (353 SCRA 452, 2001)'
	},
	{
		id: 'consti1:finals:190',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'Which case established that the right to receive the salary and emoluments of a public office is strictly an incident to legal title to the office, which can only be litigated through a direct action for quo warranto?',
		options: [
			'Matute v. Hernandez (66 Phil. 68)',
			'Nuñez v. Sandiganbayan (111 SCRA 433)',
			'De los Santos v. Mallare (87 Phil. 289)',
			'Luego v. CSC (143 SCRA 327)',
			'Dario v. Mison (176 SCRA 84)'
		],
		optionExplanations: [
			'Correct — Matute v. Hernandez established that salary follows legal title to office, which must be asserted via quo warranto rather than collateral suits.',
			'Incorrect — Nuñez v. Sandiganbayan upheld the Sandiganbayan.',
			'Incorrect — De los Santos v. Mallare addressed security of tenure of a city engineer.',
			'Incorrect — Luego v. CSC limited CSC review of appointments.',
			'Incorrect — Dario v. Mison invalidated bad-faith civil service reorganizations.'
		],
		correctIndex: 0,
		key: 'Matute v. Hernandez (66 Phil. 68)',
		explanation:
			'In Matute v. Hernandez (66 Phil. 68), the Supreme Court ruled that an individual claiming title to public office must institute quo warranto; one cannot demand salaries or emoluments through collateral proceedings.',
		legalBasis: 'Matute v. Hernandez (66 Phil. 68, 1938)'
	},
	{
		id: 'consti1:finals:191',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'In which case did the Supreme Court hold that private individuals who act in conspiracy with public officials in violating Section 3(e) of Republic Act No. 3019 may be validly tried by the Sandiganbayan?',
		options: [
			'Balmadrid v. Sandiganbayan (195 SCRA 497)',
			'Nuñez v. Sandiganbayan (111 SCRA 433)',
			'PCGG v. Peña (159 SCRA 556)',
			'Zaldivar v. Gonzales (166 SCRA 316)',
			'Go v. Sandiganbayan (G.R. No. 172602)'
		],
		optionExplanations: [
			'Correct — Balmadrid v. Sandiganbayan confirmed that private persons charged in conspiracy with public officers under R.A. 3019 fall within Sandiganbayan jurisdiction (though on later reconsideration in 1992 the Balmadrids were acquitted on the merits for lack of proof of conspiracy).',
			'Incorrect — Nuñez v. Sandiganbayan upheld the creation of the Sandiganbayan.',
			'Incorrect — PCGG v. Peña addressed PCGG ill-gotten wealth jurisdiction.',
			'Incorrect — Zaldivar v. Gonzales addressed Ombudsman control over the Special Prosecutor.',
			'Incorrect — Go v. Sandiganbayan (2007) likewise affirmed that private persons may be charged under Sec. 3(g) of R.A. 3019.'
		],
		correctIndex: 0,
		key: 'Balmadrid v. Sandiganbayan (195 SCRA 497)',
		explanation:
			'In Balmadrid v. Sandiganbayan (195 SCRA 497, 1991), the Court recognized that the anti-graft jurisdiction of the Sandiganbayan extends to private individuals who conspire with public officers in committing offenses defined under R.A. 3019 (note: on motion for reconsideration in June 1992, the spouses were acquitted on the factual merits because conspiracy was not proven beyond reasonable doubt).',
		legalBasis: 'P.D. 1606; R.A. No. 3019; Balmadrid v. Sandiganbayan (195 SCRA 497, 1991)'
	},
	{
		id: 'consti1:finals:192',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'In which early ruling did the Supreme Court define the jurisdiction of the Tanodbayan under Presidential Decree No. 1630 before the ratification of the 1987 Constitution?',
		options: [
			'Inting v. Tanodbayan (97 SCRA 494)',
			'Zaldivar v. Gonzales (166 SCRA 316)',
			'Orap v. Sandiganbayan (139 SCRA 252)',
			'Nuñez v. Sandiganbayan (111 SCRA 433)',
			'De Guzman v. People (119 SCRA 337)'
		],
		optionExplanations: [
			'Correct — Inting v. Tanodbayan examined the prosecutorial and investigative authority of the Tanodbayan under P.D. 1630.',
			'Incorrect — Zaldivar v. Gonzales interpreted the 1987 Constitution’s reorganization of the Tanodbayan into the Special Prosecutor.',
			'Incorrect — Orap v. Sandiganbayan dealt with non-interference in preliminary investigations.',
			'Incorrect — Nuñez v. Sandiganbayan upheld P.D. 1486.',
			'Incorrect — De Guzman v. People upheld Sandiganbayan jurisdiction.'
		],
		correctIndex: 0,
		key: 'Inting v. Tanodbayan (97 SCRA 494)',
		explanation:
			'In Inting v. Tanodbayan (97 SCRA 494), the Court examined the investigative authority of the Tanodbayan under martial law decrees prior to the reorganization of the Ombudsman under Article XI of the 1987 Constitution.',
		legalBasis: 'P.D. No. 1630; Inting v. Tanodbayan (97 SCRA 494, 1980)'
	},
	{
		id: 'consti1:finals:193',
		topicId: 'finals_cases',
		topic: P5_16,
		tag: 'cases',
		question:
			'Which case established that the preliminary investigation conducted by the Tanodbayan/Ombudsman is an executive function that will not be enjoined by courts absent a showing of arbitrary grave abuse of discretion?',
		options: [
			'Orap v. Sandiganbayan (139 SCRA 252)',
			'Zaldivar v. Gonzales (166 SCRA 316)',
			'Inting v. Tanodbayan (97 SCRA 494)',
			'Francisco v. House of Representatives (415 SCRA 44)',
			'Santiago v. Vasquez (217 SCRA 633)'
		],
		optionExplanations: [
			'Correct — Orap v. Sandiganbayan upheld prosecutorial non-interference in Tanodbayan/Ombudsman preliminary investigations absent grave abuse.',
			'Incorrect — Zaldivar v. Gonzales addressed Ombudsman control over the Special Prosecutor.',
			'Incorrect — Inting v. Tanodbayan examined Tanodbayan powers under P.D. 1630.',
			'Incorrect — Francisco v. House of Representatives addressed impeachment initiation.',
			'Incorrect — Santiago v. Vasquez addressed hold-departure orders and voluntary surrender/bail.'
		],
		correctIndex: 0,
		key: 'Orap v. Sandiganbayan (139 SCRA 252)',
		explanation:
			'In Orap v. Sandiganbayan (139 SCRA 252), the Court ruled that prosecutorial discretion in filing charges before the Sandiganbayan belongs to the Ombudsman, and courts will refrain from interfering in preliminary investigations except for jurisdictional grave abuse.',
		legalBasis: 'Orap v. Sandiganbayan (139 SCRA 252, 1985)'
	},

	// ---- Chapter 17/18: Amendment or Revision of the Constitution (Q194–Q202) ----
	{
		id: 'consti1:finals:194',
		topicId: 'finals_cases',
		topic: P5_17,
		tag: 'cases',
		question:
			'In which landmark case did the Supreme Court rule that Congress, when sitting as a Constituent Assembly, exercises constituent power derived directly from the Constitution, and that its proposals are justiciable questions subject to judicial review?',
		options: [
			'Gonzales v. COMELEC (21 SCRA 774)',
			'Tolentino v. COMELEC (41 SCRA 702)',
			'Sanidad v. COMELEC (73 SCRA 333)',
			'Imbong v. COMELEC (35 SCRA 28)',
			'Lambino v. COMELEC (505 SCRA 160)'
		],
		optionExplanations: [
			'Correct — Gonzales v. COMELEC held that constitutional amendment procedures are justiciable, not political questions, and distinguished constituent power from ordinary legislative power.',
			'Incorrect — Tolentino v. COMELEC established the Doctrine of Single Submission.',
			'Incorrect — Sanidad v. COMELEC addressed presidential amendment proposals during martial law.',
			'Incorrect — Imbong v. COMELEC confirmed separate voting by each chamber when Congress sits as a Constituent Assembly.',
			'Incorrect — Lambino v. COMELEC distinguished amendments from revisions in People’s Initiatives.'
		],
		correctIndex: 0,
		key: 'Gonzales v. COMELEC (21 SCRA 774)',
		explanation:
			'In Gonzales v. COMELEC (21 SCRA 774), the Court ruled that constituent power is not ordinary lawmaking power; when Congress proposes amendments, it acts as a constituent body whose adherence to constitutional rules is justiciable.',
		legalBasis: 'Art. XVII, Sec. 1, 1987 Constitution; Gonzales v. COMELEC (21 SCRA 774, 1967)'
	},
	{
		id: 'consti1:finals:195',
		topicId: 'finals_cases',
		topic: P5_17,
		tag: 'cases',
		question:
			'Which landmark case established the "Doctrine of Single Submission," holding that all proposed constitutional amendments must be submitted to the electorate in a single, unified plebiscite and invalidating piecemeal plebiscites?',
		options: [
			'Tolentino v. COMELEC (41 SCRA 702)',
			'Gonzales v. COMELEC (21 SCRA 774)',
			'Sanidad v. COMELEC (73 SCRA 333)',
			'Lambino v. COMELEC (505 SCRA 160)',
			'Almario v. Alba (127 SCRA 69)'
		],
		optionExplanations: [
			'Correct — Tolentino v. COMELEC struck down the 1971 Con-Con’s attempt to hold an advance piecemeal plebiscite on lowering the voting age to 18.',
			'Incorrect — Gonzales v. COMELEC established the justiciability of constitutional amendment proposals.',
			'Incorrect — Sanidad v. COMELEC sustained crisis-era amendment proposals in 1976.',
			'Incorrect — Lambino v. COMELEC barred People’s Initiatives from proposing constitutional revisions.',
			'Incorrect — Almario v. Alba upheld multiple amendments submitted together in one 1984 plebiscite.'
		],
		correctIndex: 0,
		key: 'Tolentino v. COMELEC (41 SCRA 702)',
		explanation:
			"In Tolentino v. COMELEC (41 SCRA 702), the Court struck down the 1971 Con-Con's advance plebiscite lowering the voting age, holding that the electorate must be given the full design of all proposals in a single plebiscite to make an intelligent choice.",
		legalBasis: 'Art. XVII, Sec. 4, 1987 Constitution; Tolentino v. COMELEC (41 SCRA 702, 1971)'
	},
	{
		id: 'consti1:finals:196',
		topicId: 'finals_cases',
		topic: P5_17,
		tag: 'cases',
		question:
			'In which case did the Supreme Court rule that the amending process is justiciable, and that in an extraordinary period of crisis government where the legislature does not exist, the President may propose constitutional amendments in a plebiscite?',
		options: [
			'Sanidad v. COMELEC (73 SCRA 333)',
			'Tolentino v. COMELEC (41 SCRA 702)',
			'Javellana v. Executive Secretary (50 SCRA 30)',
			'Gonzales v. COMELEC (21 SCRA 774)',
			'Occeña v. COMELEC (95 SCRA 755)'
		],
		optionExplanations: [
			'Correct — Sanidad v. COMELEC rejected the political question bar on amendatory review while upholding emergency-era presidential proposals in 1976.',
			'Incorrect — Tolentino v. COMELEC struck down piecemeal submission of amendments.',
			'Incorrect — Javellana v. Executive Secretary dismissed challenges to the 1973 Constitution’s ratification.',
			'Incorrect — Gonzales v. COMELEC dealt with the 1967 congressional amendment resolutions.',
			'Incorrect — Occeña v. COMELEC upheld the interim Batasang Pambansa’s constituent power in 1981.'
		],
		correctIndex: 0,
		key: 'Sanidad v. COMELEC (73 SCRA 333)',
		explanation:
			'In Sanidad v. COMELEC (73 SCRA 333), the Court rejected the political question defense regarding constitutional amendments, holding that courts have the duty to review amendatory compliance, though it sustained presidential emergency authority under martial law conditions.',
		legalBasis: 'Sanidad v. COMELEC (73 SCRA 333, 1976)'
	},
	{
		id: 'consti1:finals:197',
		topicId: 'finals_cases',
		topic: P5_17,
		tag: 'cases',
		question:
			"Which landmark case held that Republic Act No. 6735 was incomplete, inadequate, and insufficient to implement the system of People's Initiative on amendments to the Constitution under Article XVII, Section 2?",
		options: [
			'Defensor-Santiago v. COMELEC (270 SCRA 106)',
			'Lambino v. COMELEC (505 SCRA 160)',
			'Tolentino v. COMELEC (41 SCRA 702)',
			'Gonzales v. COMELEC (21 SCRA 774)',
			'Sanidad v. COMELEC (73 SCRA 333)'
		],
		optionExplanations: [
			'Correct — Defensor-Santiago v. COMELEC (1997) declared R.A. 6735 inadequate to implement a People’s Initiative to amend the Constitution.',
			'Incorrect — Lambino v. COMELEC (2006) invalidated an initiative for failing the direct-proposal requirement and for proposing a revision.',
			'Incorrect — Tolentino v. COMELEC established the single submission rule.',
			'Incorrect — Gonzales v. COMELEC involved Constituent Assembly proposals.',
			'Incorrect — Sanidad v. COMELEC involved 1976 martial-law constitutional amendments.'
		],
		correctIndex: 0,
		key: 'Defensor-Santiago v. COMELEC (270 SCRA 106)',
		explanation:
			'In Defensor-Santiago v. COMELEC (270 SCRA 106), the Court held that R.A. 6735 provided for initiatives on statutes and local ordinances, but omitted the necessary statutory standards and subtitles to govern initiatives on constitutional amendments.',
		legalBasis: 'Art. XVII, Sec. 2, 1987 Constitution; Defensor-Santiago v. COMELEC (270 SCRA 106, 1997)'
	},
	{
		id: 'consti1:finals:198',
		topicId: 'finals_cases',
		topic: P5_17,
		tag: 'cases',
		question:
			"In which landmark decision did the Supreme Court establish the \"Quantitative\" and \"Qualitative\" tests to distinguish an Amendment from a Revision, ruling that a People's Initiative can only propose amendments, never revisions?",
		options: [
			'Lambino v. COMELEC (505 SCRA 160)',
			'Defensor-Santiago v. COMELEC (270 SCRA 106)',
			'Tolentino v. COMELEC (41 SCRA 702)',
			'Gonzales v. COMELEC (21 SCRA 774)',
			'Sanidad v. COMELEC (73 SCRA 333)'
		],
		optionExplanations: [
			'Correct — Lambino v. COMELEC established the Quantitative and Qualitative tests and held that a People’s Initiative cannot propose a revision.',
			'Incorrect — Defensor-Santiago v. COMELEC ruled that R.A. 6735 was inadequate for constitutional initiatives.',
			'Incorrect — Tolentino v. COMELEC established the single submission doctrine.',
			'Incorrect — Gonzales v. COMELEC addressed Constituent Assembly proposals.',
			'Incorrect — Sanidad v. COMELEC addressed 1976 amendments.'
		],
		correctIndex: 0,
		key: 'Lambino v. COMELEC (505 SCRA 160)',
		explanation:
			"In Lambino v. COMELEC (505 SCRA 160), the Court struck down the initiative seeking to shift the government from presidential-bicameral to parliamentary-unicameral, holding that such structural alterations constitute a revision, which is barred from people's initiatives.",
		legalBasis: 'Art. XVII, Secs. 1–2, 1987 Constitution; Lambino v. COMELEC (505 SCRA 160, 2006)'
	},
	{
		id: 'consti1:finals:199',
		topicId: 'finals_cases',
		topic: P5_17,
		tag: 'cases',
		question:
			'Which case established that when Congress acts as a Constituent Assembly to call a Constitutional Convention or propose amendments, the Senate and the House of Representatives assemble jointly but must vote separately?',
		options: [
			'Imbong v. COMELEC (35 SCRA 28)',
			'Gonzales v. COMELEC (21 SCRA 774)',
			'Tolentino v. COMELEC (41 SCRA 702)',
			'Sanidad v. COMELEC (73 SCRA 333)',
			'Lambino v. COMELEC (505 SCRA 160)'
		],
		optionExplanations: [
			'Correct — Imbong v. COMELEC confirmed that Congress, sitting as a bicameral Constituent Assembly, votes separately by chamber.',
			'Incorrect — Gonzales v. COMELEC established judicial review over amendment procedures.',
			'Incorrect — Tolentino v. COMELEC established the single submission rule.',
			'Incorrect — Sanidad v. COMELEC addressed 1976 emergency amendments.',
			'Incorrect — Lambino v. COMELEC distinguished amendments from revisions.'
		],
		correctIndex: 0,
		key: 'Imbong v. COMELEC (35 SCRA 28)',
		explanation:
			'In Imbong v. COMELEC (35 SCRA 28), the Court confirmed that because the legislature is bicameral, proposals passed as a Constituent Assembly require the separate concurrence of 3/4 of the Senate and 3/4 of the House of Representatives.',
		legalBasis: 'Art. XVII, Secs. 1 & 3, 1987 Constitution; Imbong v. COMELEC (35 SCRA 28, 1970)'
	},
	{
		id: 'consti1:finals:200',
		topicId: 'finals_cases',
		topic: P5_17,
		tag: 'cases',
		question:
			"In which historic ruling did the Supreme Court dismiss petitions challenging the ratification of the 1973 Constitution via Citizens' Assemblies (viva voce voting), concluding that there was no further judicial obstacle to the new charter being in force?",
		options: [
			'Javellana v. Executive Secretary (50 SCRA 30)',
			'Sanidad v. COMELEC (73 SCRA 333)',
			'Planas v. COMELEC (49 SCRA 105)',
			'Tolentino v. COMELEC (41 SCRA 702)',
			'Gonzales v. COMELEC (21 SCRA 774)'
		],
		optionExplanations: [
			'Correct — Javellana v. Executive Secretary (the Ratification Cases) dismissed challenges to the 1973 Constitution’s effectivity.',
			'Incorrect — Sanidad v. COMELEC addressed the 1976 amendments to the 1973 Constitution.',
			'Incorrect — Planas v. COMELEC (the Plebiscite Cases) became moot upon proclamation of ratification.',
			'Incorrect — Tolentino v. COMELEC invalidated the 1971 advance plebiscite.',
			'Incorrect — Gonzales v. COMELEC involved 1967 proposed amendments.'
		],
		correctIndex: 0,
		key: 'Javellana v. Executive Secretary (50 SCRA 30)',
		explanation:
			'In the Ratification Cases (Javellana v. Executive Secretary, 50 SCRA 30, 1973), a divided Court ruled that while the 1973 Constitution was not validly ratified in accordance with the 1935 charter, a majority held that it had been accepted or there was no further judicial obstacle, resulting in the dismissal of the petitions.',
		legalBasis: 'Javellana v. Executive Secretary (50 SCRA 30, 1973)'
	},
	{
		id: 'consti1:finals:201',
		topicId: 'finals_cases',
		topic: P5_17,
		tag: 'cases',
		question:
			'Which case upheld the authority of the interim Batasang Pambansa sitting as a Constituent Assembly under the 1973 Constitution to propose amendments modifying the parliamentary framework to create an executive presidency?',
		options: [
			'Occeña v. COMELEC (95 SCRA 755)',
			'Sanidad v. COMELEC (73 SCRA 333)',
			'Almario v. Alba (127 SCRA 69)',
			'Tolentino v. COMELEC (41 SCRA 702)',
			'Gonzales v. COMELEC (21 SCRA 774)'
		],
		optionExplanations: [
			'Correct — Occeña v. COMELEC upheld the constituent power of the interim Batasang Pambansa to propose the 1981 amendments.',
			'Incorrect — Sanidad v. COMELEC upheld the 1976 emergency amendments.',
			'Incorrect — Almario v. Alba upheld the 1984 plebiscite on succession and agrarian reform.',
			'Incorrect — Tolentino v. COMELEC involved the 1971 Con-Con advance plebiscite.',
			'Incorrect — Gonzales v. COMELEC involved 1967 congressional amendments.'
		],
		correctIndex: 0,
		key: 'Occeña v. COMELEC (95 SCRA 755)',
		explanation:
			'In Occeña v. COMELEC (95 SCRA 755), the Supreme Court upheld the constituent power of the interim Batasang Pambansa to propose amendments changing the nature of executive power in the 1973 Constitution.',
		legalBasis: 'Occeña v. COMELEC (95 SCRA 755, 1980 / 104 SCRA 1, 1981)'
	},
	{
		id: 'consti1:finals:202',
		topicId: 'finals_cases',
		topic: P5_17,
		tag: 'cases',
		question:
			'In which case did the Supreme Court uphold the submission of multiple constitutional amendments regarding presidential succession and agrarian reform to the electorate in a plebiscite, rejecting claims of piecemeal ratification?',
		options: [
			'Almario v. Alba (127 SCRA 69)',
			'Tolentino v. COMELEC (41 SCRA 702)',
			'Sanidad v. COMELEC (73 SCRA 333)',
			'Occeña v. COMELEC (95 SCRA 755)',
			'Lambino v. COMELEC (505 SCRA 160)'
		],
		optionExplanations: [
			'Correct — Almario v. Alba upheld the 1984 plebiscite because the proposed amendments were submitted together in a single plebiscite.',
			'Incorrect — Tolentino v. COMELEC invalidated a piecemeal advance plebiscite.',
			'Incorrect — Sanidad v. COMELEC upheld the 1976 martial-law proposals.',
			'Incorrect — Occeña v. COMELEC involved the 1981 amendments.',
			'Incorrect — Lambino v. COMELEC involved a 2006 People’s Initiative.'
		],
		correctIndex: 0,
		key: 'Almario v. Alba (127 SCRA 69)',
		explanation:
			'In Almario v. Alba (127 SCRA 69), the Court distinguished the 1984 plebiscite from Tolentino, ruling that the amendments were submitted together in a single plebiscite, affording the electorate the opportunity to evaluate the proposals as a whole.',
		legalBasis: 'Almario v. Alba (127 SCRA 69, 1984)'
	},

	// ---- Chapters 18/19: National Economy, Patrimony, Citizenship & Elections (Q203–Q210) ----
	{
		id: 'consti1:finals:203',
		topicId: 'finals_cases',
		topic: P5_18,
		tag: 'cases',
		question:
			'In which landmark decision did the Supreme Court declare that Article XII, Section 10 (the "Filipino First Policy") is a self-executing constitutional provision that gives qualified Filipinos a preference in the acquisition of assets forming part of the national patrimony?',
		options: [
			'Manila Prince Hotel v. GSIS (267 SCRA 408)',
			'Miners Association of the Philippines v. Factoran (240 SCRA 100)',
			"La Bugal-B'laan Tribal Association v. Ramos (445 SCRA 1)",
			'Tañada v. Angara (272 SCRA 18)',
			'Chavez v. Public Estates Authority (384 SCRA 152)'
		],
		optionExplanations: [
			'Correct — Manila Prince Hotel v. GSIS held that Art. XII, Sec. 10 is self-executing and awarded Manila Hotel to the Filipino bidder who matched the highest foreign bid.',
			'Incorrect — Miners Association v. Factoran upheld the transition from mining leases to production-sharing agreements.',
			'Incorrect — La Bugal-B’laan v. Ramos upheld FTAAs with foreign mining corporations under full State control.',
			'Incorrect — Tañada v. Angara upheld WTO accession and explained Art. XII, Sec. 10 in relation to foreign trade.',
			'Incorrect — Chavez v. PEA barred alienating reclaimed foreshore public land to private corporations.'
		],
		correctIndex: 0,
		key: 'Manila Prince Hotel v. GSIS (267 SCRA 408)',
		explanation:
			'In Manila Prince Hotel v. GSIS (267 SCRA 408), the Court ruled that the historic Manila Hotel forms part of the national patrimony, and that under Article XII, Section 10, a Filipino corporation matching the bid of a foreign bidder is constitutionally entitled to the award.',
		legalBasis: 'Art. XII, Sec. 10, 1987 Constitution; Manila Prince Hotel v. GSIS (267 SCRA 408, 1997)'
	},
	{
		id: 'consti1:finals:204',
		topicId: 'finals_cases',
		topic: P5_18,
		tag: 'cases',
		question:
			'Which landmark case held that under the Regalian Doctrine (Article XII, Section 2), all natural resources belong to the State, and that the 1987 Constitution completely abandoned the old system of commercial leases and concessions in favor of production-sharing agreements?',
		options: [
			'Miners Association of the Philippines v. Factoran (240 SCRA 100)',
			"La Bugal-B'laan Tribal Association v. Ramos (445 SCRA 1)",
			'Manila Prince Hotel v. GSIS (267 SCRA 408)',
			'Cruz v. Secretary of Environment (347 SCRA 128)',
			'Oposa v. Factoran (224 SCRA 792)'
		],
		optionExplanations: [
			'Correct — Miners Association v. Factoran upheld the conversion of old mining leases into co-production, joint venture, or production-sharing agreements.',
			'Incorrect — La Bugal-B’laan v. Ramos upheld FTAAs under the Philippine Mining Act of 1995.',
			'Incorrect — Manila Prince Hotel v. GSIS enforced the Filipino First Policy.',
			'Incorrect — Cruz v. Secretary of Environment upheld the IPRA law on a 7–7 tie vote.',
			'Incorrect — Oposa v. Factoran recognized minors’ standing under Art. II, Sec. 16.'
		],
		correctIndex: 0,
		key: 'Miners Association of the Philippines v. Factoran (240 SCRA 100)',
		explanation:
			'In Miners Association of the Philippines v. Factoran (240 SCRA 100), the Court held that the 1987 Constitution eliminated the concession system; mineral exploration and utilization must proceed under joint ventures, co-production, or production-sharing agreements under full State supervision.',
		legalBasis: 'Art. XII, Sec. 2, 1987 Constitution; Miners Association of the Philippines v. Factoran (240 SCRA 100, 1995)'
	},
	{
		id: 'consti1:finals:205',
		topicId: 'finals_cases',
		topic: P5_18,
		tag: 'cases',
		question:
			'In which landmark ruling on reconsideration did the Supreme Court uphold the constitutionality of the Philippine Mining Act of 1995 (R.A. 7942), holding that Article XII, Section 2 permits foreign corporations to enter into Financial or Technical Assistance Agreements (FTAAs) provided real management control remains with the State?',
		options: [
			"La Bugal-B'laan Tribal Association v. Ramos (445 SCRA 1)",
			'Miners Association of the Philippines v. Factoran (240 SCRA 100)',
			'Cruz v. Secretary of Environment (347 SCRA 128)',
			'Manila Prince Hotel v. GSIS (267 SCRA 408)',
			'Didipio Earth-Savers v. Gozun (485 SCRA 586)'
		],
		optionExplanations: [
			'Correct — La Bugal-B’laan v. Ramos (Dec. 2004 Resolution) upheld FTAAs under R.A. 7942 involving foreign technical/financial assistance under State control.',
			'Incorrect — Miners Association v. Factoran addressed the shift from mining leases to production-sharing agreements.',
			'Incorrect — Cruz v. Secretary of Environment involved ancestral domain under IPRA.',
			'Incorrect — Manila Prince Hotel v. GSIS enforced the Filipino First Policy.',
			'Incorrect — Didipio Earth-Savers v. Gozun upheld FTAA easement/entry provisions and rejected takings challenges.'
		],
		correctIndex: 0,
		key: 'La Bugal-B\'laan Tribal Association v. Ramos (445 SCRA 1)',
		explanation:
			"In La Bugal-B'laan Tribal Association v. Ramos (445 SCRA 1, 2004), the Court reversed its initial ruling, confirming that foreign corporations can participate in large-scale mining operations through FTAAs where the foreign entity acts as a service contractor under ultimate State direction.",
		legalBasis: 'Art. XII, Sec. 2, 1987 Constitution; La Bugal-B’laan Tribal Association v. Ramos (445 SCRA 1, 2004)'
	},
	{
		id: 'consti1:finals:206',
		topicId: 'finals_cases',
		topic: P5_18,
		tag: 'cases',
		question:
			'In which historic series of rulings (culminating in its final 2011 resolution) did the Supreme Court ultimately reverse its earlier 2008 invalidation and uphold the constitutionality of sixteen cityhood laws that exempted specific municipalities from the increased ₱100 million income threshold under R.A. 9009?',
		options: [
			'League of Cities of the Philippines v. COMELEC (656 SCRA 316)',
			'Pelaez v. Auditor General (15 SCRA 569)',
			'Torio v. Fontanilla (85 SCRA 599)',
			'Vilas v. City of Manila (42 Phil. 953)',
			'Municipality of Kapalong v. Moya (166 SCRA 70)'
		],
		optionExplanations: [
			'Correct — After several reversals between 2008 and 2011, the Court finally upheld the 16 cityhood laws in League of Cities v. COMELEC (2011) as a valid legislative classification for bills already pending before R.A. 9009.',
			'Incorrect — Pelaez v. Auditor General struck down executive creation of municipalities under Sec. 68, RAC.',
			'Incorrect — Torio v. Fontanilla addressed municipal tort liability in holding a town fiesta.',
			'Incorrect — Vilas v. City of Manila addressed corporate continuity of Manila after change of sovereignty.',
			'Incorrect — Municipality of Kapalong v. Moya held that a municipality created by void executive order had no legal personality.'
		],
		correctIndex: 0,
		key: 'League of Cities of the Philippines v. COMELEC (656 SCRA 316)',
		explanation:
			'In League of Cities of the Philippines v. COMELEC (2011; 643 SCRA 150 / 648 SCRA 400 / 656 SCRA 316), after initially striking down the 16 cityhood laws in 2008 for violating Article X, Section 10 and equal protection, the Supreme Court ultimately reversed itself and upheld all 16 cityhood laws as constitutional, finding substantial distinctions for municipalities whose cityhood bills were already pending prior to R.A. 9009.',
		legalBasis: 'Art. X, Sec. 10, 1987 Constitution; League of Cities of the Philippines v. COMELEC (2011)'
	},
	{
		id: 'consti1:finals:207',
		topicId: 'finals_cases',
		topic: P5_18,
		tag: 'cases',
		question:
			"Which historic case saw the Supreme Court split equally (7-7), resulting in the dismissal of the petition and the upholding of Republic Act No. 8371 (Indigenous Peoples' Rights Act) recognizing ancestral domain rights?",
		options: [
			'Cruz v. Secretary of Environment and Natural Resources (347 SCRA 128)',
			'Miners Association of the Philippines v. Factoran (240 SCRA 100)',
			"La Bugal-B'laan Tribal Association v. Ramos (445 SCRA 1)",
			'Cariño v. Insular Government (212 U.S. 449)',
			'Oposa v. Factoran (224 SCRA 792)'
		],
		optionExplanations: [
			'Correct — Cruz v. DENR ended in a 7–7 tie vote, leaving the constitutionality of IPRA (R.A. 8371) upheld.',
			'Incorrect — Miners Association v. Factoran addressed mining production-sharing agreements.',
			'Incorrect — La Bugal-B’laan v. Ramos addressed mining FTAAs.',
			'Incorrect — Cariño v. Insular Government recognized native title to land held since time immemorial.',
			'Incorrect — Oposa v. Factoran addressed environmental standing and timber licenses.'
		],
		correctIndex: 0,
		key: 'Cruz v. Secretary of Environment and Natural Resources (347 SCRA 128)',
		explanation:
			'In Cruz v. Secretary of Environment and Natural Resources (347 SCRA 128), former Justice Isagani Cruz challenged the IPRA law as violative of the Regalian Doctrine. The Court tied 7-7, meaning the constitutionality of the statute was sustained under the Rules of Court.',
		legalBasis: 'Art. XII, Secs. 2 & 5, 1987 Constitution; Cruz v. Secretary of Environment and Natural Resources (347 SCRA 128, 2000)'
	},
	{
		id: 'consti1:finals:208',
		topicId: 'finals_cases',
		topic: P5_18,
		tag: 'cases',
		question:
			'Which case held that a natural-born Filipino citizen who lost his citizenship by serving in the U.S. Armed Forces and subsequently reacquired it via statutory repatriation under R.A. 2630 is deemed to have recovered his original status as a natural-born citizen?',
		options: [
			'Bengzon v. Cruz (G.R. No. 142840, 2001)',
			'Frivaldo v. COMELEC (257 SCRA 727)',
			'Labo v. COMELEC (176 SCRA 1)',
			'Roa v. Insular Collector of Customs (23 Phil. 315)',
			'Mercado v. Manzano (307 SCRA 630)'
		],
		optionExplanations: [
			'Correct — Bengzon v. Cruz ruled that repatriation restores the original citizenship status (natural-born) rather than making the person a naturalized citizen.',
			'Incorrect — Frivaldo v. COMELEC held that repatriation under P.D. 725 takes effect upon filing/taking the oath and cured lack of citizenship at the time of filing.',
			'Incorrect — Labo v. COMELEC held that a candidate disqualified for foreign citizenship cannot assume office and the second-placer does not win.',
			'Incorrect — Roa v. Insular Collector applied jus soli during the early American period.',
			'Incorrect — Mercado v. Manzano distinguished dual citizenship from dual allegiance.'
		],
		correctIndex: 0,
		key: 'Bengzon v. Cruz (G.R. No. 142840, 2001)',
		explanation:
			'In Bengzon v. Cruz (G.R. No. 142840, 2001), the Court ruled that repatriation restores a person to his original citizenship status; since respondent was natural-born prior to losing citizenship, repatriation returned him to natural-born status, qualifying him for the House of Representatives.',
		legalBasis: 'Art. IV, Sec. 2, 1987 Constitution; Bengzon v. Cruz (357 SCRA 545, 2001)'
	},
	{
		id: 'consti1:finals:209',
		topicId: 'finals_cases',
		topic: P5_18,
		tag: 'cases',
		question:
			'In which case did the Supreme Court rule that statutory requirements for repatriation must be strictly complied with, and that taking an oath of allegiance without officially registering it in the proper local civil registry fails to restore citizenship for elective office?',
		options: [
			'Altarejos v. COMELEC (G.R. No. 163256, 2004)',
			'Bengzon v. Cruz (G.R. No. 142840, 2001)',
			'Frivaldo v. COMELEC (257 SCRA 727)',
			'Labo v. COMELEC (176 SCRA 1)',
			'Maquiling v. COMELEC (700 SCRA 367)'
		],
		optionExplanations: [
			'Correct — Altarejos v. COMELEC disqualified a candidate who failed to register his certificate of repatriation and oath with the local civil registrar and Bureau of Immigration prior to election.',
			'Incorrect — Bengzon v. Cruz ruled that repatriation restores natural-born status.',
			'Incorrect — Frivaldo v. COMELEC involved retroactive effect of repatriation completed before assumption.',
			'Incorrect — Labo v. COMELEC involved an Australian citizen who failed to validly reacquire Philippine citizenship.',
			'Incorrect — Maquiling v. COMELEC held that using a foreign passport after executing an affidavit of renunciation under R.A. 9225 recants the renunciation.'
		],
		correctIndex: 0,
		key: 'Altarejos v. COMELEC (G.R. No. 163256, 2004)',
		explanation:
			'In Altarejos v. COMELEC (G.R. No. 163256, 2004), the Court disqualified a candidate who failed to register his certificate of repatriation in the civil registry, holding that administrative registration is a mandatory statutory condition to complete repatriation.',
		legalBasis: 'R.A. No. 8171; Altarejos v. COMELEC (441 SCRA 655, 2004)'
	},
	{
		id: 'consti1:finals:210',
		topicId: 'finals_cases',
		topic: P5_18,
		tag: 'cases',
		question:
			'Which case established that penal statutes relating to election offenses (under the Omnibus Election Code) cannot be challenged through a facial challenge on grounds of vagueness or overbreadth, as facial challenges apply strictly to free speech cases?',
		options: [
			'Romualdez v. COMELEC (G.R. No. 167011, 2008)',
			'Estrada v. Sandiganbayan (369 SCRA 394)',
			'David v. Arroyo (489 SCRA 160)',
			'Penera v. COMELEC (G.R. No. 181613, 2009)',
			'Southern Hemisphere Engagement Network v. Anti-Terrorism Council (632 SCRA 146)'
		],
		optionExplanations: [
			'Correct — Romualdez v. COMELEC held that penal election provisions cannot be challenged on their face for vagueness or overbreadth, only as applied.',
			'Incorrect — Estrada v. Sandiganbayan earlier rejected a facial vagueness/overbreadth challenge against the Plunder Law.',
			'Incorrect — David v. Arroyo addressed PP 1017 and the mootness exceptions.',
			'Incorrect — Penera v. COMELEC addressed premature campaigning under R.A. 9369.',
			'Incorrect — Southern Hemisphere later applied the free-speech limitation on facial challenges to the Human Security Act.'
		],
		correctIndex: 0,
		key: 'Romualdez v. COMELEC (G.R. No. 167011, 2008)',
		explanation:
			'In Romualdez v. COMELEC (G.R. No. 167011, 2008), the Supreme Court held that ordinary penal statutes cannot be subjected to facial invalidation; an accused challenging a criminal election statute can only mount an "as-applied" challenge based on the specific facts charged.',
		legalBasis: 'Omnibus Election Code; Romualdez v. COMELEC (553 SCRA 370, 2008)'
	}
];
