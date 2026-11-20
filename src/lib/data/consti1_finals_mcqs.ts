import type { McqQuestion, ModuleTopic } from '$lib/types';

export const constiFinalsTopic: ModuleTopic = {
	id: 'finals',
	name: 'FINALS',
	eyebrow: 'COMPREHENSIVE MASTER DRILL · 210 ITEMS',
	desc: '210 multiple-choice and true-or-false questions based on Justice Isagani A. Cruz’s Philippine Political Law, the 1987 Philippine Constitution, and Supreme Court jurisprudence.'
};

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
const P5_12 = 'FINALS — Part 5: Jurisprudence · Ch. 12 Judicial Department';
const P5_13 = 'FINALS — Part 5: Jurisprudence · Ch. 13 Constitutional Commissions & CSC';
const P5_14 = 'FINALS — Part 5: Jurisprudence · Ch. 14 Commission on Elections';
const P5_15 = 'FINALS — Part 5: Jurisprudence · Ch. 15 Commission on Audit';
const P5_16 = 'FINALS — Part 5: Jurisprudence · Ch. 16/17 Accountability of Public Officers';
const P5_17 = 'FINALS — Part 5: Jurisprudence · Ch. 17/18 Amendment or Revision';
const P5_18 = 'FINALS — Part 5: Jurisprudence · Ch. 18/19 National Economy, Citizenship & Elections';

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
		explanation:
			'F (a, b, and c are true). Article VIII, Section 1, Paragraph 2 of the 1987 Philippine Constitution provides that judicial power includes the duty of the courts of justice to settle actual controversies involving rights which are legally demandable and enforceable, and to determine whether or not there has been a grave abuse of discretion amounting to lack or excess of jurisdiction on the part of any branch or instrumentality of the Government. This expanded concept of judicial review was deliberately incorporated to restrict the invocation of the political question doctrine and ensure that no governmental act remains completely immune from constitutional scrutiny when tainted with arbitrariness or grave abuse (Tañada v. Angara, G.R. No. 118295, 1997; Francisco v. House of Representatives, 415 SCRA 44, 2003).',
		legalBasis: 'Art. VIII, Sec. 1, par. 2, 1987 Constitution; Tañada v. Angara (1997); Francisco v. House of Representatives (2003)'
	},
	{
		id: 'consti1:finals:2',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question: 'Under Article VIII, Section 4(1), the Supreme Court is composed of and may sit in:',
		options: [
			'A Chief Justice and fourteen Associate Justices',
			'Divisions of three, five, or seven Members',
			'Divisions of four or six Members',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the constitutional composition is permanently fixed at fifteen members.',
			'True because these are the only division sizes authorized by the Constitution.',
			'False because even-numbered divisions are not recognized by the fundamental law.',
			'False because option c is unconstitutional.',
			'True because both a and b accurately reflect Section 4(1).',
			'False because option c is unconstitutional.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		explanation:
			'E (a and b are true). Article VIII, Section 4(1) provides: "The Supreme Court shall be composed of a Chief Justice and fourteen Associate Justices. It may sit en banc or in its discretion, in division of three, five, or seven Members. Any vacancy shall be filled within ninety days from the occurrence thereof." The Constitution intentionally excludes even-numbered divisions to prevent persistent ties in judicial deliberations.',
		legalBasis: 'Art. VIII, Sec. 4(1), 1987 Constitution'
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
		explanation:
			'C (90 days from occurrence). Article VIII, Section 4(1) explicitly commands that "Any vacancy shall be filled within ninety days from the occurrence thereof." In De Castro v. Judicial and Bar Council (G.R. No. 191002, March 17, 2010), the Supreme Court ruled that this ninety-day mandate operates as an exception to the midnight appointments ban under Article VII, Section 15, obligating the President to fill vacancies in the Supreme Court within the prescribed period.',
		legalBasis: 'Art. VIII, Sec. 4(1), 1987 Constitution; De Castro v. Judicial and Bar Council (2010)'
	},
	{
		id: 'consti1:finals:4',
		topicId: 'finals',
		topic: P1,
		tag: 'requisites',
		question: 'Under Article VIII, Section 7(1), to be appointed a Member of the Supreme Court, a person must be:',
		options: [
			'A natural-born citizen of the Philippines',
			'At least 40 years of age at the time of appointment',
			'A judge of a lower court or engaged in law practice in the Philippines for at least 15 years',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because naturalized citizens are disqualified from appointment to the Supreme Court.',
			'True because forty is the minimum constitutional age requirement.',
			'True because fifteen years of judicial service or law practice is an express constitutional requirement.',
			'False because option b is also an express constitutional qualification.',
			'False because option c is equally an indispensable qualification.',
			'True because all three options accurately articulate the constitutional qualifications under Section 7(1).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		explanation:
			'F (a, b, and c are true). Article VIII, Section 7(1) states: "No person shall be appointed Member of the Supreme Court or any lower collegiate court unless he is a natural-born citizen of the Philippines. A Member of the Supreme Court must be at least forty years of age, and must have been for fifteen years or more a judge of a lower court or engaged in the practice of law in the Philippines."',
		legalBasis: 'Art. VIII, Sec. 7(1), 1987 Constitution'
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
		explanation:
			'B (Congress as a bicameral institution is entitled to only one representative with one vote). In Chavez v. Judicial and Bar Council (676 SCRA 579, 2012; Resolution on Motion for Reconsideration, 696 SCRA 496, 2013), the Supreme Court held that the phrase "a representative of the Congress" in Section 8(1) is singular. Permitting one Senator and one Representative to sit with one full vote each gave Congress two votes, altering the constitutional composition of the JBC. Congress is entitled to only one representative and one vote.',
		legalBasis: 'Art. VIII, Sec. 8(1), 1987 Constitution; Chavez v. Judicial and Bar Council (2012, 2013)'
	},
	{
		id: 'consti1:finals:10',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question: 'Under Article VIII, Section 9, appointments of Justices of the Supreme Court and judges of lower courts:',
		options: [
			'Are made by the President from a list of at least three nominees prepared by the JBC',
			'Require confirmation by the Commission on Appointments',
			'Must be issued within ninety (90) days from the submission of the list for lower courts',
			'a and b are true',
			'a and c are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the JBC shortlist must contain at least three names per vacancy.',
			'False because judicial appointments do not undergo Commission on Appointments confirmation.',
			'True because Section 9 mandates a ninety-day period for lower court appointments.',
			'False because option b is incorrect.',
			'True because both nomination from the JBC list and the ninety-day period are correct.',
			'False because option b is completely inaccurate.',
			'False because options a and c are true.'
		],
		correctIndex: 4,
		explanation:
			'E (a and c are true). Article VIII, Section 9 provides: "The Members of the Supreme Court and judges of lower courts shall be appointed by the President from a list of at least three nominees prepared by the Judicial and Bar Council for every vacancy. Such appointments need no confirmation. For the lower courts, the President shall issue the appointments within ninety days from the submission of the list."',
		legalBasis: 'Art. VIII, Sec. 9, 1987 Constitution'
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
		explanation:
			'A (Belongs exclusively to the Supreme Court). Article VIII, Section 6 vests exclusive administrative supervision over all courts in the Supreme Court. Section 11 specifies that no lower court judge shall be dismissed except by the Court sitting En Banc. In Maceda v. Vasquez (221 SCRA 464, 1993), the Court ruled that the Ombudsman cannot initiate an investigation against a judge for acts related to judicial functions without the Supreme Court first determining that an administrative violation was committed.',
		legalBasis: 'Art. VIII, Secs. 6 & 11, 1987 Constitution; Maceda v. Vasquez (1993)'
	},
	{
		id: 'consti1:finals:13',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question: 'Under Article VIII, Section 15(1), what are the maximum periods prescribed to decide or resolve cases from the date of submission?',
		options: [
			'24 months for the Supreme Court',
			'12 months for all lower collegiate courts',
			'3 months for all other lower courts',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Section 15(1) assigns twenty-four months to the Supreme Court.',
			'True because the Court of Appeals, CTA, and Sandiganbayan are given twelve months.',
			'True because trial courts like RTCs and MTCs are bound by a three-month deadline.',
			'False because option b is also an exact constitutional period.',
			'False because option c is equally an accurate constitutional timeframe.',
			'True because all three periods are precisely stated in Section 15(1).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		explanation:
			'F (a, b, and c are true). Article VIII, Section 15(1) provides: "All cases or matters filed after the effectivity of this Constitution must be decided or resolved within twenty-four months from date of submission for the Supreme Court, and, unless reduced by the Supreme Court, twelve months for all lower collegiate courts, and three months for all other lower courts."',
		legalBasis: 'Art. VIII, Sec. 15(1), 1987 Constitution'
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
		explanation:
			'C (The constitutional periods are directory upon the court\'s adjudicative authority). In Sesbreño v. Court of Appeals (556 SCRA 715, 2008), the Supreme Court reiterated that constitutional periods for deciding cases are directory upon the court\'s adjudicative power. Failure to render a decision within the prescribed period does not strip the court of jurisdiction nor render the belated decision void, although the delayed judge may face administrative sanctions.',
		legalBasis: 'Art. VIII, Sec. 15, 1987 Constitution; Sesbreño v. Court of Appeals (2008)'
	},
	{
		id: 'consti1:finals:15',
		topicId: 'finals',
		topic: P1,
		tag: 'memorization',
		question: 'Under Article VIII, Section 3, the fiscal autonomy of the Judiciary guarantees that:',
		options: [
			'Appropriations for the Judiciary cannot be reduced below the amount appropriated for the previous year',
			'Approved judicial appropriations shall be automatically and regularly released',
			'The Judiciary is exempt from submitting an annual proposed budget to Congress',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the non-diminution rule prevents legislative budgetary leverage.',
			'True because funds cannot be impounded or subjected to conditions by the DBM.',
			'False because the judiciary must still submit its budget proposal to Congress.',
			'False because option c is incorrect.',
			'True because both non-diminution and automatic release are guaranteed.',
			'False because option c is incorrect.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		explanation:
			'E (a and b are true). Article VIII, Section 3 provides: "The Judiciary shall enjoy fiscal autonomy. Appropriations for the Judiciary may not be reduced by the legislature below the amount appropriated for the previous year and, after approval, shall be automatically and regularly released." In Bengzon v. Drilon (208 SCRA 133, 1992), the Court held that the President\'s veto of provisions regarding judicial pensions unconstitutionally undermined fiscal autonomy.',
		legalBasis: 'Art. VIII, Sec. 3, 1987 Constitution; Bengzon v. Drilon (1992)'
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
		question: 'Under Article IX-A, Section 1, the Independent Constitutional Commissions are:',
		options: [
			'The Civil Service Commission',
			'The Commission on Elections',
			'The Commission on Audit',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the CSC is established under Article IX-B.',
			'True because the COMELEC is established under Article IX-C.',
			'True because the COA is established under Article IX-D.',
			'False because option b is also a constitutional commission.',
			'False because option c is equally an independent commission.',
			'True because all three bodies are the independent commissions created under Article IX-A.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		explanation:
			'F (a, b, and c are true). Article IX-A, Section 1 provides: "The Constitutional Commissions, which shall be independent, are the Civil Service Commission, the Commission on Elections, and the Commission on Audit." Other bodies like the Commission on Human Rights are constitutional offices, but they are not Article IX commissions.',
		legalBasis: 'Art. IX-A, Sec. 1, 1987 Constitution'
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
			'Under Article IX-A, Section 7, each Commission shall decide by a majority vote of all its Members any case or matter brought before it within:',
		options: [
			'30 days from submission',
			'60 days from submission',
			'90 days from submission',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because thirty days is the period to elevate a decision to the Supreme Court on certiorari.',
			'True because Section 7 mandates deciding cases within sixty days from submission.',
			'False because ninety days applies to judicial appointments and lower court decisions.',
			'False because options a and c are incorrect.',
			'False because option a is incorrect.',
			'False because only option b (60 days) is correct.',
			'False because option b is true.'
		],
		correctIndex: 1,
		explanation:
			'B (60 days from submission). Article IX-A, Section 7 provides: "Each Commission shall decide by a majority vote of all its Members, any case or matter brought before it within sixty days from the date of its submission for decision or resolution. A case or matter is deemed submitted for decision or resolution upon the filing of the last pleading, brief, or memorandum required by the rules of the Commission or by the Commission itself."',
		legalBasis: 'Art. IX-A, Sec. 7, 1987 Constitution'
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
		explanation:
			'C (No, because it undermines the independence of the Constitutional Commission). In Brillantes v. Yorac (192 SCRA 358, 1990), President Corazon Aquino designated Associate Commissioner Haydee Yorac as Acting Chairman of the COMELEC. The Supreme Court struck down the designation, holding that the President has no power to designate an Acting Chairman of a Constitutional Commission. Allowing the President to appoint an acting head creates an implied dependence, violating the institutional independence guaranteed by Article IX-A, Section 1.',
		legalBasis: 'Art. IX-A, Sec. 1 & Art. IX-C, Sec. 1(2), 1987 Constitution; Brillantes v. Yorac (1990)'
	},
	{
		id: 'consti1:finals:32',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question: 'Under Article IX-B, Section 1(1), the Civil Service Commission is composed of:',
		options: [
			'A Chairman and two Commissioners',
			'Appointees who must be at least thirty-five (35) years of age at the time of appointment',
			'Appointees with proven capacity for public administration',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the CSC is a three-member collegiate body.',
			'True because thirty-five is the minimum age prescribed by Section 1(1).',
			'True because proven administrative capacity is an express constitutional requirement.',
			'False because option b is also an express constitutional qualification.',
			'False because option c is equally an express constitutional qualification.',
			'True because all three options accurately articulate Section 1(1).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		explanation:
			'F (a, b, and c are true). Article IX-B, Section 1(1) provides: "The Civil Service Commission shall be composed of a Chairman and two Commissioners who shall be natural-born citizens of the Philippines and, at the time of their appointment, at least thirty-five years of age, with proven capacity for public administration, and must not have been candidates for any elective position in the elections immediately preceding their appointment."',
		legalBasis: 'Art. IX-B, Sec. 1(1), 1987 Constitution'
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
		explanation:
			'A (Any electioneering or partisan political campaign). Article IX-B, Section 2(4) states: "No officer or employee in the civil service shall engage, directly or indirectly, in any electioneering or partisan political campaign." Civil servants may vote and express private views, but they are barred from active participation in partisan political operations (Santos v. Yatco, 106 Phil. 745).',
		legalBasis: 'Art. IX-B, Sec. 2(4), 1987 Constitution; Santos v. Yatco'
	},
	{
		id: 'consti1:finals:38',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question: 'Under Article IX-C, Section 1(1), the Commission on Elections is composed of:',
		options: [
			'A Chairman and six Commissioners',
			'Appointees a majority of whom, including the Chairman, must be members of the Philippine Bar practicing law for at least ten (10) years',
			'Appointees who must be at least thirty-five (35) years of age at the time of appointment',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the COMELEC consists of seven members.',
			'True because a lawyer majority with ten years of practice is required.',
			'True because thirty-five is the minimum age requirement.',
			'False because option b is also an express constitutional qualification.',
			'False because option c is equally an accurate constitutional qualification.',
			'True because all three options accurately articulate Section 1(1).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		explanation:
			'F (a, b, and c are true). Article IX-C, Section 1(1) provides: "The Commission on Elections shall be composed of a Chairman and six Commissioners who shall be natural-born citizens of the Philippines and, at the time of their appointment, at least thirty-five years of age, holders of a college degree, and must not have been candidates for any elective position in the election immediately preceding their appointment. However, a majority thereof, including the Chairman, shall be members of the Philippine Bar who have been engaged in the practice of law for at least ten years."',
		legalBasis: 'Art. IX-C, Sec. 1(1), 1987 Constitution'
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
		explanation:
			'B (The decision is null and void for lack of jurisdiction). Under Article IX-C, Section 3, as applied in Sarmiento v. COMELEC (212 SCRA 307, 1992) and Cagas v. COMELEC (664 SCRA 333, 2012), hearing and deciding election cases in division first is a mandatory jurisdictional requirement. The COMELEC En Banc has no authority to hear and decide an election case at first instance; any resolution or decision rendered directly by the COMELEC En Banc without passing through a Division is void for lack of jurisdiction.',
		legalBasis: 'Art. IX-C, Sec. 3, 1987 Constitution; Sarmiento v. COMELEC (1992); Cagas v. COMELEC (2012)'
	},
	{
		id: 'consti1:finals:41',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question: 'Under Article IX-C, Section 2(2), the COMELEC exercises exclusive original jurisdiction over all election contests relating to:',
		options: [
			'Regional elective officials',
			'Provincial elective officials',
			'City elective officials',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because regional elective offices fall under COMELEC original jurisdiction.',
			'True because provincial contests fall under COMELEC original jurisdiction.',
			'True because city elective contests fall under COMELEC original jurisdiction.',
			'False because option b is also within exclusive original jurisdiction.',
			'False because option c is equally an original jurisdiction contest.',
			'True because regional, provincial, and city contests are all within COMELEC exclusive original jurisdiction.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		explanation:
			'F (a, b, and c are true). Article IX-C, Section 2(2) provides that the COMELEC shall "Exercise exclusive original jurisdiction over all contests relating to the elections, returns, and qualifications of all elective regional, provincial, and city officials, and appellate jurisdiction over all contests involving elective municipal officials decided by trial courts of general jurisdiction, or involving elective barangay officials decided by trial courts of limited jurisdiction."',
		legalBasis: 'Art. IX-C, Sec. 2(2), 1987 Constitution'
	},
	{
		id: 'consti1:finals:42',
		topicId: 'finals',
		topic: P2,
		tag: 'requisites',
		question: 'Under Article IX-D, Section 1(1), the Commission on Audit is composed of:',
		options: [
			'A Chairman and two Commissioners',
			'Certified public accountants with at least ten (10) years of auditing experience or members of the Philippine Bar practicing law for at least ten (10) years',
			'Appointees who must not all belong to the same professional discipline',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because COA is a three-member collegiate body.',
			'True because Section 1(1) prescribes these alternative professional backgrounds.',
			'True because the Constitution prohibits all three members from belonging to the same profession.',
			'False because option b is also an express constitutional qualification.',
			'False because option c is equally an express constitutional limitation.',
			'True because all three options accurately articulate Section 1(1).',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		explanation:
			'F (a, b, and c are true). Article IX-D, Section 1(1) provides: "The Commission on Audit shall be composed of a Chairman and two Commissioners... who shall be certified public accountants with not less than ten years of auditing experience, or members of the Philippine Bar who have been engaged in the practice of law for at least ten years, and at no time shall all Members of the Commission belong to the same profession."',
		legalBasis: 'Art. IX-D, Sec. 1(1), 1987 Constitution'
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
		explanation:
			'B (Only at the start of the official campaign period prescribed by law). In Penera v. Commission on Elections (605 SCRA 574, 2009), the Supreme Court ruled that under Section 15 of Republic Act No. 9369, a person who files a certificate of candidacy is deemed a candidate only at the start of the campaign period. Consequently, political acts performed prior to the official campaign period cannot be penalized as premature campaigning.',
		legalBasis: 'Sec. 15, R.A. No. 9369; Penera v. COMELEC (2009)'
	},
	{
		id: 'consti1:finals:55',
		topicId: 'finals',
		topic: P2,
		tag: 'exceptions',
		question: 'Under Article IX-B, Section 7, what are the constitutional restrictions on holding dual public offices?',
		options: [
			'No elective official shall be eligible for appointment or designation to any public office during tenure',
			'No appointive official shall hold any other office in Government unless allowed by law or the primary functions of his position',
			'An elective official may accept an executive post provided he waives his legislative salary',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because elective officials face an absolute ban on appointments during their tenure.',
			'True because appointive officials cannot hold dual offices without statutory/functional authorization.',
			'False because elective officials cannot accept executive posts during their tenure.',
			'False because option c violates Article IX-B, Section 7.',
			'True because both elective and appointive office-holding rules are correctly stated.',
			'False because option c violates Article IX-B, Section 7.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		explanation:
			'E (a and b are true). Article IX-B, Section 7 provides: "No elective official shall be eligible for appointment or designation in any capacity to any public office or position during his tenure. Unless otherwise allowed by law or by the primary functions of his position, no appointive official shall hold any other office or employment in the Government or any subdivision, agency or instrumentality thereof, including government-owned or controlled corporations or their subsidiaries."',
		legalBasis: 'Art. IX-B, Sec. 7, 1987 Constitution'
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
		explanation:
			'E (a and b are true). Article IX-C, Section 10 explicitly provides: "Bona fide candidates for any public office shall be free from any form of harassment and discrimination." Registered political parties, organizations, or coalitions under the supervision and registration of the COMELEC enjoy legal protection over their registered party names and symbols.',
		legalBasis: 'Art. IX-C, Secs. 2(5) & 10, 1987 Constitution'
	},
	{
		id: 'consti1:finals:58',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question: 'Under Article IX-D, Section 4, the Commission on Audit is required to submit an annual report to:',
		options: [
			'The President of the Philippines',
			'The Congress of the Philippines',
			'The Chief Justice of the Supreme Court',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the President receives the annual financial condition report.',
			'True because Congress receives the annual financial condition report.',
			'False because the annual report is submitted to the political branches, not the judiciary.',
			'False because the Chief Justice is not a designated recipient under Section 4.',
			'True because the report is submitted to both the President and the Congress.',
			'False because the Chief Justice is not a designated recipient under Section 4.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		explanation:
			'E (a and b are true). Article IX-D, Section 4 provides: "The Commission shall submit to the President and the Congress, within the time fixed by law, an annual report covering the financial condition and operation of the Government, its subdivisions, agencies, and instrumentalities, including government-owned or controlled corporations, and other non-governmental entities subject to its audit, and recommend measures necessary to improve their efficiency and effectiveness."',
		legalBasis: 'Art. IX-D, Sec. 4, 1987 Constitution'
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
		explanation:
			'B (No pardon, amnesty, parole, or suspension of sentence for violation of election laws shall be granted without the favorable recommendation of the COMELEC). Article IX-C, Section 5 explicitly provides: "No pardon, amnesty, parole, or suspension of sentence for violation of election laws, rules, and regulations shall be granted by the President without the favorable recommendation of the Commission."',
		legalBasis: 'Art. IX-C, Sec. 5, 1987 Constitution'
	},
	{
		id: 'consti1:finals:62',
		topicId: 'finals',
		topic: P2,
		tag: 'memorization',
		question: 'Under Article IX-C, Section 9, unless otherwise fixed by the Commission in special cases, the election period shall commence:',
		options: [
			'60 days before the election and end 30 days thereafter',
			'90 days before the day of election and end 30 days thereafter',
			'120 days before the election and end 60 days thereafter',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because sixty days is not the standard election period baseline.',
			'True because Section 9 defines the standard election period as 90 days before and 30 days after.',
			'False because one hundred twenty days is not the constitutional baseline.',
			'False because options a and c are incorrect.',
			'False because option a is incorrect.',
			'False because only option b is the constitutional period.',
			'False because option b is true.'
		],
		correctIndex: 1,
		explanation:
			'B (90 days before the day of election and end 30 days thereafter). Article IX-C, Section 9 provides: "Unless otherwise fixed by the Commission in special cases, the election period shall commence ninety days before the day of election and shall end thirty days thereafter."',
		legalBasis: 'Art. IX-C, Sec. 9, 1987 Constitution'
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
		question: 'Under Article XI, Section 2, which of the following public officials are removable from office exclusively by impeachment?',
		options: [
			'The President and the Vice-President',
			'Members of the Supreme Court and Members of the Constitutional Commissions',
			'The Ombudsman',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the executive leaders are impeachable officials.',
			'True because Justices and Commissioners are expressly enumerated.',
			'True because the Ombudsman is an impeachable officer under Section 2.',
			'False because option b also lists impeachable officials.',
			'False because option c is equally an impeachable official.',
			'True because all three groups constitute the exclusive list of impeachable officers.',
			'False because options a, b, and c are all true.'
		],
		correctIndex: 5,
		explanation:
			'F (a, b, and c are true). Article XI, Section 2 explicitly provides: "The President, the Vice-President, the Members of the Supreme Court, the Members of the Constitutional Commissions, and the Ombudsman may be removed from office on impeachment for, and conviction of, culpable violation of the Constitution, treason, bribery, graft and corruption, other high crimes, or betrayal of public trust. All other public officers and employees may be removed from office as provided by law, but not by impeachment."',
		legalBasis: 'Art. XI, Sec. 2, 1987 Constitution'
	},
	{
		id: 'consti1:finals:77',
		topicId: 'finals',
		topic: P3,
		tag: 'memorization',
		question: 'Under Article XI, Section 3, what voting thresholds are required in the impeachment process?',
		options: [
			'A vote of at least one-third (1/3) of all the Members of the House to affirm a favorable resolution or override an unfavorable committee report',
			'A vote of at least two-thirds (2/3) of all the Members of the Senate to convict',
			'A unanimous vote of the Supreme Court to affirm the conviction',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because one-third of the House affirms the Articles of Impeachment.',
			'True because conviction in the Senate requires a two-thirds supermajority.',
			'False because the Supreme Court plays no role in voting to affirm impeachment verdicts.',
			'False because option c is completely inaccurate.',
			'True because both the one-third House and two-thirds Senate thresholds are correct.',
			'False because option c is completely inaccurate.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		explanation:
			'E (a and b are true). Under Article XI, Section 3(3)–(4), a vote of at least one-third of all the Members of the House of Representatives is necessary to affirm a favorable resolution with the Articles of Impeachment of the Committee, or override its contrary resolution. Under Section 3(6), no person shall be convicted in an impeachment trial without the concurrence of two-thirds of all the Members of the Senate.',
		legalBasis: 'Art. XI, Sec. 3(3), (4) & (6), 1987 Constitution'
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
		explanation:
			'B (Struck down because granting the President power to remove a Deputy Ombudsman violates the constitutional independence of the Office of the Ombudsman). In Gonzales III v. Office of the President (G.R. No. 196231, September 4, 2012; Resolution on Motion for Reconsideration, January 28, 2014), the Supreme Court declared unconstitutional Section 8(2) of Republic Act No. 6770 insofar as it granted the President disciplinary authority over the Deputy Ombudsman. The Court held that subjecting the Deputy Ombudsman to presidential discipline destroys the political and functional independence guaranteed to the Office under Article XI.',
		legalBasis: 'Art. XI, Sec. 5, 1987 Constitution; Gonzales III v. Office of the President (2012, 2014)'
	},
	{
		id: 'consti1:finals:86',
		topicId: 'finals',
		topic: P3,
		tag: 'memorization',
		question: 'Under Article XVII, Section 1, amendments to, or revision of, the Constitution may be proposed by:',
		options: [
			'The Congress, upon a vote of three-fourths (3/4) of all its Members',
			'A constitutional convention',
			'The President of the Philippines through an executive proclamation',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Congress acting as a Constituent Assembly requires a three-fourths vote.',
			'True because a Constitutional Convention is an authorized mode of proposal under Section 1.',
			'False because the President has no constitutional power to propose constitutional amendments.',
			'False because presidential proclamations cannot propose constitutional amendments.',
			'True because both Constituent Assembly and Constitutional Convention are authorized under Section 1.',
			'False because presidential proclamations cannot propose constitutional amendments.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		explanation:
			'E (a and b are true). Article XVII, Section 1 provides: "Any amendment to, or revision of, this Constitution may be proposed by: (1) The Congress, upon a vote of three-fourths of all its Members; or (2) A constitutional convention."',
		legalBasis: 'Art. XVII, Sec. 1, 1987 Constitution'
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
			'Under Article XVII, Section 4, a plebiscite to ratify proposed constitutional amendments or revisions proposed by Congress or a Constitutional Convention must be held:',
		options: [
			'Not earlier than 30 days nor later than 60 days after approval',
			'Not earlier than 60 days nor later than 90 days after approval',
			'Simultaneously with the next general local elections regardless of timing',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because thirty to sixty days is not the constitutional window.',
			'True because Section 4 mandates holding the plebiscite between 60 and 90 days after approval.',
			'False because the 60-to-90-day window controls.',
			'False because options a and c are incorrect.',
			'False because option a is incorrect.',
			'False because only option b is the constitutional timeframe.',
			'False because option b is true.'
		],
		correctIndex: 1,
		explanation:
			'B (Not earlier than 60 days nor later than 90 days after approval). Article XVII, Section 4 provides: "Any amendment to, or revision of, this Constitution under Section 1 hereof shall be valid when ratified by a majority of the votes cast in a plebiscite which shall be held not earlier than sixty days nor later than ninety days after the approval of such amendment or revision."',
		legalBasis: 'Art. XVII, Sec. 4, 1987 Constitution'
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
		explanation:
			'B (Sovereignty itself was not suspended; only the exercise of sovereign power was temporarily suspended). In Laurel v. Misa (77 Phil. 856, 1947), the Supreme Court ruled that belligerent occupation does not transfer sovereignty nor suspend it. Sovereignty itself was not suspended; only the exercise of sovereign rights was temporarily suspended. Allegiance to the legitimate government remains continuous; hence, citizens who adhered to the enemy giving aid and comfort could be prosecuted for treason.',
		legalBasis: 'Laurel v. Misa (1947)'
	},
	{
		id: 'consti1:finals:100',
		topicId: 'finals',
		topic: P4,
		tag: 'requisites',
		question: 'Under Pelaez v. Auditor General (1965), a statute delegating legislative authority to the Executive must satisfy:',
		options: [
			'The Completeness Test only',
			'The Sufficient Standard Test only',
			'Both the Completeness Test and the Sufficient Standard Test concurrently',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because the completeness test cannot validate a delegation on its own.',
			'False because a standard without a completed policy is unconstitutional.',
			'True because under the Pelaez Rule, both tests must be satisfied simultaneously.',
			'False because option a is insufficient.',
			'False because neither test alone is sufficient.',
			'False because options a and b are false.',
			'False because option c is true.'
		],
		correctIndex: 2,
		explanation:
			'C (Both the Completeness Test and the Sufficient Standard Test concurrently). In Pelaez v. Auditor General (15 SCRA 569, 1965), the Supreme Court declared Section 68 of the Revised Administrative Code unconstitutional. The Court established that a valid delegation must satisfy both tests concurrently: (1) The law must be complete in itself, setting forth the policy to be executed, and (2) The law must fix a sufficient standard to map the boundaries of administrative discretion.',
		legalBasis: 'Art. VI, Sec. 1, 1987 Constitution; Pelaez v. Auditor General (1965)'
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
			'Under Article VII, Section 18, what are the constitutional powers of Congress when the President proclaims martial law or suspends the privilege of the writ of habeas corpus?',
		options: [
			'Congress, voting jointly by a majority of all its Members, may revoke the proclamation or suspension',
			'A revocation by Congress cannot be set aside or vetoed by the President',
			'Congress can only revoke the proclamation if concurred in by the Supreme Court',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because Congress voting jointly by a majority of all its Members can revoke the proclamation.',
			'True because congressional revocation is absolute and cannot be set aside by the President.',
			'False because congressional revocation is completely independent of the judiciary.',
			'False because option c is inaccurate.',
			'True because both the majority joint vote and non-vetoable character are correct.',
			'False because option c is inaccurate.',
			'False because options a and b are true.'
		],
		correctIndex: 4,
		explanation:
			'E (a and b are true). Article VII, Section 18 provides: "The Congress, voting jointly, by a vote of at least a majority of all its Members in regular or special session, may revoke such proclamation or suspension, which revocation shall not be set aside by the President."',
		legalBasis: 'Art. VII, Sec. 18, 1987 Constitution'
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
			'Under Republic v. Villasor (1973), can public funds deposited in government depository banks be garnished to satisfy a money judgment against the State?',
		options: [
			'Yes, because a court judgment immediately waives state immunity from execution',
			'No, because public funds cannot be garnished without an appropriation made by law passed by Congress',
			'Yes, provided the bank account is labeled as an operational account',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'False because suability does not imply liability or authorize garnishment of public funds.',
			'True because disbursements from the treasury require specific legislative appropriation under Art. VI, Sec. 29(1).',
			'False because operational public funds remain immune from garnishment.',
			'False because options a and c are incorrect.',
			'False because option a is incorrect.',
			'False because options a and c are false.',
			'False because option b is true.'
		],
		correctIndex: 1,
		explanation:
			'B (No, because public funds cannot be garnished without an appropriation made by law passed by Congress). In Republic v. Villasor (54 SCRA 83, 1973), the Supreme Court held that public funds in the custody of government officials or depository banks cannot be garnished to satisfy a court judgment against the State. Under Article VI, Section 29(1), no money shall be paid out of the Treasury except in pursuance of an appropriation made by law.',
		legalBasis: 'Art. VI, Sec. 29(1) & Art. XVI, Sec. 3, 1987 Constitution; Republic v. Villasor (1973)'
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
		explanation:
			'B (No, civilians cannot be tried by military tribunals as long as regular civil courts are open and functioning). In Olaguer v. Military Commission No. 34 (150 SCRA 144, 1987), the Supreme Court overruled Aquino v. Military Commission No. 2, ruling that military tribunals have no jurisdiction to try civilians for alleged offenses as long as regular civil courts are open and functioning. This doctrine was elevated to an express constitutional rule in Article VII, Section 18 of the 1987 Constitution.',
		legalBasis: 'Art. VII, Sec. 18, 1987 Constitution; Olaguer v. Military Commission No. 34 (1987)'
	},
	{
		id: 'consti1:finals:113',
		topicId: 'finals',
		topic: P4,
		tag: 'memorization',
		question: "Under Article VI, Section 11, what is the scope of a legislator's parliamentary immunity from arrest?",
		options: [
			'Immunity from arrest in all offenses punishable by not more than six (6) years imprisonment while Congress is in session',
			'Immunity from arrest in all treason, felony, and breach of the peace offenses',
			'Absolute lifetime immunity from criminal arrest for any offense committed while in office',
			'a and c are true',
			'a and b are true',
			'a, b, and c are true',
			'none of the above'
		],
		optionExplanations: [
			'True because the six-year penalty ceiling while Congress is in session defines the constitutional privilege.',
			'False because serious offenses punishable by more than six years imprisonment are excluded from the privilege.',
			'False because the immunity applies only while Congress is in session and for offenses punishable by not more than six years.',
			'False because option c is incorrect.',
			'False because option b is incorrect.',
			'False because options b and c are false.',
			'False because option a is true.'
		],
		correctIndex: 0,
		explanation:
			'A (Immunity from arrest in all offenses punishable by not more than six [6] years imprisonment while Congress is in session). Article VI, Section 11 provides: "A Senator or Member of the House of Representatives shall, in all offenses punishable by not more than six years imprisonment, be privileged from arrest while the Congress is in session. No Member shall be questioned nor be held liable in any other place for any speech or debate in the Congress or in any committee thereof" (People v. Jalosjos, 324 SCRA 689).',
		legalBasis: 'Art. VI, Sec. 11, 1987 Constitution; People v. Jalosjos (2000)'
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
		explanation:
			'FALSE. In Abakada Guro Party List v. Executive Secretary (469 SCRA 1, 2005), the Supreme Court upheld Republic Act No. 9337. The Court held that granting standby authority to the President to raise the VAT rate from 10% to 12% upon verification of specific revenue thresholds was valid contingent legislation. Congress enacted a complete policy and set exact mathematical triggers; the Executive exercised no legislative discretion and merely verified the factual contingency upon which the statutory rate took effect.',
		legalBasis: 'Art. VI, Secs. 1 & 28, 1987 Constitution; Abakada Guro Party List v. Executive Secretary (2005)'
	},

	// =========================================================================
	// PART 5: JURISPRUDENCE MASTER DRILL — CHAPTERS 12–19 (Q121–Q210)
	// =========================================================================

	// ---- Chapter 12: The Judicial Department (Q121–Q145) ----
	{
		id: 'consti1:finals:121',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Angara v. Electoral Commission (63 Phil. 139), Justice Jose P. Laurel delivered the definitive ruling on the nature of judicial power under the Philippine presidential system. When courts strike down unconstitutional legislative or executive acts, they do not assert supremacy over coordinate departments; they merely enforce the ordained will of the sovereign people embodied in the Constitution.',
		legalBasis: 'Angara v. Electoral Commission (63 Phil. 139, 1936)'
	},
	{
		id: 'consti1:finals:122',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Tañada v. Angara (272 SCRA 18), the Supreme Court held that while courts cannot question the wisdom of entering into treaties (such as the WTO Agreement), Article VIII, Section 1 expressly obligates the judiciary to determine whether the political branches acted with grave abuse of discretion amounting to lack or excess of jurisdiction.',
		legalBasis: 'Art. VIII, Sec. 1(2), 1987 Constitution; Tañada v. Angara (272 SCRA 18, 1997)'
	},
	{
		id: 'consti1:finals:123',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In the resolution on the temporary restraining order in Echegaray v. Secretary of Justice (301 SCRA 96), the Court held that the 1987 Constitution completely removed the authority previously granted to Congress under the 1935 and 1973 charters to alter or modify procedural rules, making judicial rule-making purely independent and exclusive.',
		legalBasis: 'Art. VIII, Sec. 5(5), 1987 Constitution; Echegaray v. Secretary of Justice (301 SCRA 96, 1999)'
	},
	{
		id: 'consti1:finals:124',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Abellana v. Marave (57 SCRA 106), the Supreme Court held that procedural rules requiring reservation of an independent civil action arising from physical injuries cannot defeat or extinguish the substantive right granted to the victim under the Civil Code. Procedural powers cannot modify or impair substantive rights.',
		legalBasis: 'Art. VIII, Sec. 5(5), 1987 Constitution; Abellana v. Marave (57 SCRA 106, 1974)'
	},
	{
		id: 'consti1:finals:125',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Maceda v. Vasquez (221 SCRA 464), the Court ruled that Article VIII, Section 6 vests exclusive administrative supervision over all courts in the Supreme Court. The Ombudsman cannot investigate a judge for offenses connected with judicial functions unless the Supreme Court first finds that an administrative violation occurred.',
		legalBasis: 'Art. VIII, Sec. 6, 1987 Constitution; Maceda v. Vasquez (221 SCRA 464, 1993)'
	},
	{
		id: 'consti1:finals:126',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Judge Caoibes, Jr. v. Ombudsman (361 SCRA 395), the Supreme Court held that the Ombudsman cannot arrogate unto itself the authority to determine whether a complaint against a judge or court personnel involves an administrative matter. The Ombudsman must refer such complaints to the Supreme Court for determination.',
		legalBasis: 'Art. VIII, Sec. 6, 1987 Constitution; Judge Caoibes, Jr. v. Ombudsman (361 SCRA 395, 2001)'
	},
	{
		id: 'consti1:finals:127',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Chavez v. Judicial and Bar Council (676 SCRA 579), the Court ruled that Article VIII, Section 8(1) uses the singular noun "a representative of the Congress." Giving one full vote to the Senate and another to the House unconstitutionally expanded legislative influence in the 7-member constitutional council.',
		legalBasis: 'Art. VIII, Sec. 8(1), 1987 Constitution; Chavez v. JBC (676 SCRA 579, 2012)'
	},
	{
		id: 'consti1:finals:128',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In De Castro v. Judicial and Bar Council (615 SCRA 666), the Court ruled that Section 15, Article VII (prohibiting appointments two months before a presidential election) applies exclusively to executive appointments and does not restrict appointments to the Supreme Court, which are governed by the strict 90-day mandate in Article VIII, Section 4(1).',
		legalBasis: 'Art. VII, Sec. 15 & Art. VIII, Sec. 4(1), 1987 Constitution; De Castro v. JBC (615 SCRA 666, 2010)'
	},
	{
		id: 'consti1:finals:129',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Aguinaldo v. Aquino (G.R. No. 224302, 2016), the Court held that while the JBC screens and nominates, it cannot restrict the President\'s constitutional appointing prerogative by clustering nominees into specific vacancies when multiple seats in the same collegiate court are open simultaneously.',
		legalBasis: 'Art. VIII, Sec. 9, 1987 Constitution; Aguinaldo v. Aquino (G.R. No. 224302, 2016)'
	},
	{
		id: 'consti1:finals:130',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Sesbreño v. Court of Appeals (556 SCRA 715), the Court ruled that the lapse of the 24-, 12-, or 3-month constitutional periods does not divest the court of jurisdiction nor void the delayed judgment; it merely exposes the negligent judge to potential administrative sanctions.',
		legalBasis: 'Art. VIII, Sec. 15, 1987 Constitution; Sesbreño v. Court of Appeals (556 SCRA 715, 2008)'
	},
	{
		id: 'consti1:finals:131',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Bengzon v. Drilon (208 SCRA 133), the Supreme Court held that the President\'s veto of provisions funding retired judges\' pensions violated the fiscal autonomy of the Judiciary, which guarantees non-diminution of judicial appropriations and automatic release of funds.',
		legalBasis: 'Art. VIII, Sec. 3, 1987 Constitution; Bengzon v. Drilon (208 SCRA 133, 1992)'
	},
	{
		id: 'consti1:finals:132',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Nitafan v. Commissioner of Internal Revenue (152 SCRA 284), the Court examined the deliberations of the 1986 Constitutional Commission and concluded that the framers intended to subject judicial salaries to the payment of general income taxes paid by all public servants, discarding the old tax-exemption doctrine.',
		legalBasis: 'Art. VIII, Sec. 10, 1987 Constitution; Nitafan v. CIR (152 SCRA 284, 1987)'
	},
	{
		id: 'consti1:finals:133',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Oposa v. Factoran (224 SCRA 792), the Court ruled that Article II, Section 16 is a self-executing right, and that minors have locus standi to protect the rights of unborn generations to a balanced and healthful ecology.',
		legalBasis: 'Art. II, Sec. 16, 1987 Constitution; Oposa v. Factoran (224 SCRA 792, 1993)'
	},
	{
		id: 'consti1:finals:134',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In the first Kilosbayan case (Kilosbayan v. Guingona, 232 SCRA 110, 1994), the Court relaxed procedural barriers regarding standing because of the paramount moral, economic, and constitutional importance of the on-line lottery controversy.',
		legalBasis: 'Art. VIII, Sec. 1, 1987 Constitution; Kilosbayan v. Guingona (232 SCRA 110, 1994)'
	},
	{
		id: 'consti1:finals:135',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Kilosbayan v. Morato (246 SCRA 540, 1995), the Court held that the petitioners lacked standing to challenge the renegotiated equipment lease agreement, stressing that locus standi requires a personal and substantial interest rather than a generalized grievance.',
		legalBasis: 'Kilosbayan v. Morato (246 SCRA 540, 1995)'
	},
	{
		id: 'consti1:finals:136',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In IBP v. Zamora (338 SCRA 81), the Court found that the IBP failed to demonstrate direct injury to its members resulting from military patrols. However, the Court relaxed the procedural barrier to settle the constitutional boundaries of the President\'s calling-out powers.',
		legalBasis: 'Art. VII, Sec. 18 & Art. VIII, Sec. 1, 1987 Constitution; IBP v. Zamora (338 SCRA 81, 2000)'
	},
	{
		id: 'consti1:finals:137',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Dela Llana v. Alba (112 SCRA 292), the Court upheld the abolition of Courts of First Instance by Batas Pambansa Blg. 129. In response, the 1987 framers added the explicit restriction in Article VIII, Section 2: "No law shall be passed reorganizing the Judiciary when it undermines the security of tenure of its Members."',
		legalBasis: 'Art. VIII, Sec. 2, 1987 Constitution; Dela Llana v. Alba (112 SCRA 292, 1982)'
	},
	{
		id: 'consti1:finals:138',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In People v. Judge Gacott (246 SCRA 52), the Court clarified that under Article VIII, Section 11, lower court judges can only be dismissed or removed by the Supreme Court sitting En Banc, whereas ordinary administrative sanctions (e.g., fines or reprimands) can be meted out by a Division.',
		legalBasis: 'Art. VIII, Sec. 11, 1987 Constitution; People v. Judge Gacott (246 SCRA 52, 1995)'
	},
	{
		id: 'consti1:finals:139',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Borromeo v. Court of Appeals (186 SCRA 1), the Supreme Court held that the minute resolution dismissing a petition for lack of reversible error or failure to show merit satisfies the mandate of Article VIII, Section 14, paragraph 2, which requires only the statement of legal basis.',
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution; Borromeo v. Court of Appeals (186 SCRA 1, 1990)'
	},
	{
		id: 'consti1:finals:140',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Yao v. Court of Appeals (344 SCRA 202), the Court struck down a decision that merely copied excerpts without articulating independent findings of fact and law, declaring it void for denying litigants the opportunity to understand the basis of the judgment.',
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution; Yao v. Court of Appeals (344 SCRA 202, 2000)'
	},
	{
		id: 'consti1:finals:141',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			"In Francisco v. Permskul (173 SCRA 324), the Court held that memorandum decisions adopting the lower court's findings do not violate Article VIII, Section 14, provided they are resorted to with caution and sufficiently apprise the parties of the factual and legal basis.",
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution; Francisco v. Permskul (173 SCRA 324, 1989)'
	},
	{
		id: 'consti1:finals:142',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Dumlao v. COMELEC (95 SCRA 392), the Supreme Court set forth the standards for the four essential requisites of judicial review, refusing to pass upon hypothetical or academic constitutional challenges.',
		legalBasis: 'Art. VIII, Sec. 1, 1987 Constitution; Dumlao v. COMELEC (95 SCRA 392, 1980)'
	},
	{
		id: 'consti1:finals:143',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Laurel v. Garcia (187 SCRA 797), the Supreme Court ruled that public properties intended for public service or national pride remain part of the public domain; the Executive has no authority to convey them without an enabling statute from Congress.',
		legalBasis: 'Laurel v. Garcia (187 SCRA 797, 1990)'
	},
	{
		id: 'consti1:finals:144',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Mahawan v. People (G.R. No. 176609, 2008), the Court held that the legal requirement under Section 14, paragraph 2 is met when the denial of a motion for reconsideration indicates that the grounds raised were already evaluated in the main decision.',
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution; Mahawan v. People (G.R. No. 176609, 2008)'
	},
	{
		id: 'consti1:finals:145',
		topicId: 'finals',
		topic: P5_12,
		tag: 'jurisprudence',
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
		explanation:
			'In Albana v. Belo (G.R. No. 158734, 2009), the Court held that administrative and quasi-judicial resolutions comply with constitutional notice standards when they contain sufficient findings of fact to enable an aggrieved party to formulate errors on appeal.',
		legalBasis: 'Art. VIII, Sec. 14, 1987 Constitution; Albana v. Belo (G.R. No. 158734, 2009)'
	},

	// ---- Chapter 13: Constitutional Commissions & CSC (Q146–Q158) ----
	{
		id: 'consti1:finals:146',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In Gaminde v. Commission on Audit (347 SCRA 655, 2000), the Court held that the staggered terms under the 1987 Constitution run from a common starting point of February 2, 1987 and expire every seven, five, and three years on February 2. An appointment extended after the start of a term runs only for the remaining portion of that term to preserve the constitutional rotational cycle.',
		legalBasis: 'Art. IX-B, C & D, Sec. 1(2), 1987 Constitution; Gaminde v. COA (347 SCRA 655, 2000)'
	},
	{
		id: 'consti1:finals:147',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In Brillantes v. Yorac (192 SCRA 358), the Court ruled that Article IX-A, Section 1 guarantees the institutional independence of the Commissions. Allowing the Executive to designate an acting chairman undermines independence by fostering presidential subservience.',
		legalBasis: 'Art. IX-A, Sec. 1 & Art. IX-C, Sec. 1(2), 1987 Constitution; Brillantes v. Yorac (192 SCRA 358, 1990)'
	},
	{
		id: 'consti1:finals:148',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In Republic v. Imperial (96 Phil. 770), the Supreme Court held that the constitutional rotational system requires that vacancies caused by death, resignation, or disability be filled only for the unexpired portion to preserve the staggered appointment cycle.',
		legalBasis: 'Republic v. Imperial (96 Phil. 770, 1955)'
	},
	{
		id: 'consti1:finals:149',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In Funa v. Villar (670 SCRA 579, 2012), the Court ruled that promoting a sitting Commissioner to Chairman is a new appointment rather than a prohibited reappointment, but only if the Chairman\'s seat became vacant due to death, resignation, disability, or impeachment (unexpired term) AND total aggregate service does not exceed seven years. Because Chairman Carague\'s term expired normally, the new Chairman had to serve a full 7-year term, rendering Villar\'s appointment unconstitutional.',
		legalBasis: 'Art. IX-D, Sec. 1(2), 1987 Constitution; Funa v. Villar (670 SCRA 579, 2012)'
	},
	{
		id: 'consti1:finals:150',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			"In Luego v. Civil Service Commission (143 SCRA 327), the Court ruled that the CSC's power is limited to approving an appointment if the appointee is qualified. It has no discretionary authority to revoke an appointment simply because it believes another applicant is better qualified.",
		legalBasis: 'Art. IX-B, Sec. 2(2), 1987 Constitution; Luego v. CSC (143 SCRA 327, 1986)'
	},
	{
		id: 'consti1:finals:151',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In Dario v. Mison (176 SCRA 84), the Court ordered the reinstatement of hundreds of Customs employees, holding that an overhaul or abolition of offices tainted with bad faith or political patronage violates the civil service guarantee of security of tenure.',
		legalBasis: 'Art. IX-B, Sec. 2(3), 1987 Constitution; Dario v. Mison (176 SCRA 84, 1989)'
	},
	{
		id: 'consti1:finals:152',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In NASECO v. NLRC (168 SCRA 122), the Court interpreted Article IX-B, Section 2(1) as restricting the scope of the Civil Service to GOCCs with original charters (created by special laws). Corporate subsidiaries formed under the Corporation Code fall under the Labor Code and NLRC jurisdiction.',
		legalBasis: 'Art. IX-B, Sec. 2(1), 1987 Constitution; NASECO v. NLRC (168 SCRA 122, 1988)'
	},
	{
		id: 'consti1:finals:153',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In Lumanta v. NLRC (170 SCRA 79), the Court reiterated that the test of civil service coverage for GOCCs is the manner of their creation: entities organized under the general Corporation Code are private in corporate structure and governed by the Labor Code.',
		legalBasis: 'Art. IX-B, Sec. 2(1), 1987 Constitution; Lumanta v. NLRC (170 SCRA 79, 1989)'
	},
	{
		id: 'consti1:finals:154',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In SSS Employees Association v. Court of Appeals (175 SCRA 686), the Court held that while public employees have the right to organize under Article IX-B, Section 2(5), they cannot strike because the terms and conditions of government employment are fixed by law, not by collective bargaining.',
		legalBasis: 'Art. IX-B, Sec. 2(5), 1987 Constitution; SSS Employees Association v. CA (175 SCRA 686, 1989)'
	},
	{
		id: 'consti1:finals:155',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In Camacho v. Gloria (G.R. No. 138862, 2003), the Court held that while the Board of Regents has disciplinary authority over university officers, complaints may also be lodged directly with the CSC as the central personnel agency of the Government.',
		legalBasis: 'Art. IX-B, Sec. 3, 1987 Constitution; Camacho v. Gloria (G.R. No. 138862, 2003)'
	},
	{
		id: 'consti1:finals:156',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In CSC v. Court of Appeals (G.R. No. 176162, 2012), the Court ruled that statutory committees created under the Magna Carta for Public School Teachers cannot be interpreted to divest the CSC of its constitutional mandate to enforce administrative discipline across the civil service.',
		legalBasis: 'Art. IX-B, Sec. 3, 1987 Constitution; CSC v. Court of Appeals (G.R. No. 176162, 2012)'
	},
	{
		id: 'consti1:finals:157',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In Mateo v. Court of Appeals (247 SCRA 284, 1995), the Supreme Court held that local water districts created under P.D. No. 198 are quasi-public corporations with original charters embraced in the Civil Service. Consequently, regular courts like the RTC have no jurisdiction over their employees\' dismissal disputes, which belong exclusively to the Civil Service Commission (whose final rulings are appealed to the Court of Appeals under Rule 43).',
		legalBasis: 'Art. IX-B, Sec. 2(1), 1987 Constitution; Mateo v. Court of Appeals (247 SCRA 284, 1995)'
	},
	{
		id: 'consti1:finals:158',
		topicId: 'finals',
		topic: P5_13,
		tag: 'jurisprudence',
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
		explanation:
			'In St. Martin Funeral Home v. NLRC (295 SCRA 494), the Court established the procedural rule that petitions for certiorari assailing decisions of the NLRC must be filed in the Court of Appeals, reinforcing the doctrine of hierarchy of courts.',
		legalBasis: 'B.P. Blg. 129, Sec. 9 (as amended by R.A. 7902); St. Martin Funeral Home v. NLRC (295 SCRA 494, 1998)'
	},

	// ---- Chapter 14: The Commission on Elections (Q159–Q171) ----
	{
		id: 'consti1:finals:159',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In Canicosa v. COMELEC (282 SCRA 512), the Court held that administrative matters, such as the correction of clerical errors or administrative supervision of elections, may be handled directly by the Commission En Banc; the division rule is mandatory only when the COMELEC acts in a quasi-judicial capacity.',
		legalBasis: 'Art. IX-C, Sec. 3, 1987 Constitution; Canicosa v. COMELEC (282 SCRA 512, 1997)'
	},
	{
		id: 'consti1:finals:160',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In Cagas v. COMELEC (664 SCRA 333), the Court held that the two-tiered division procedure in Article IX-C, Section 3 is a mandatory jurisdictional condition precedent. A decision rendered directly En Banc at first instance is void.',
		legalBasis: 'Art. IX-C, Sec. 3, 1987 Constitution; Cagas v. COMELEC (664 SCRA 333, 2012)'
	},
	{
		id: 'consti1:finals:161',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In Philippine Press Institute v. COMELEC (244 SCRA 272), the Court held that coercing print publishers to donate advertising space constitutes an unconstitutional exercise of eminent domain without just compensation and violates the constitutional protection of property rights.',
		legalBasis: 'Art. III, Sec. 9 & Art. IX-C, Sec. 4, 1987 Constitution; Philippine Press Institute v. COMELEC (244 SCRA 272, 1995)'
	},
	{
		id: 'consti1:finals:162',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In National Press Club v. COMELEC (207 SCRA 1), the Court ruled that the prohibition was a valid regulation of the election process designed to equalize media exposure between affluent and poor candidates pursuant to Article IX-C, Section 4.',
		legalBasis: 'Art. IX-C, Sec. 4, 1987 Constitution; National Press Club v. COMELEC (207 SCRA 1, 1992)'
	},
	{
		id: 'consti1:finals:163',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In ABS-CBN Broadcasting Corp. v. COMELEC (323 SCRA 611), the Court held that exit polls are protected free speech and provide valuable public information. Total prohibition is an unconstitutional prior restraint that fails the clear and present danger test.',
		legalBasis: 'Art. III, Sec. 4 & Art. IX-C, Sec. 4, 1987 Constitution; ABS-CBN v. COMELEC (323 SCRA 611, 2000)'
	},
	{
		id: 'consti1:finals:164',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			"In Social Weather Stations v. COMELEC (357 SCRA 496), the Court ruled that the statutory ban on survey publication was unconstitutional because it aimed to suppress speech based on content without satisfying the O'Brien standard of valid incidental limitation.",
		legalBasis: 'Art. III, Sec. 4 & Art. IX-C, Sec. 4, 1987 Constitution; SWS v. COMELEC (357 SCRA 496, 2001)'
	},
	{
		id: 'consti1:finals:165',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In Penera v. COMELEC (G.R. No. 181613, 2009), the Court ruled that under the Automated Election System law, a person who files a certificate of candidacy does not become a candidate until the campaign period begins; therefore, pre-campaign partisan acts cannot constitute premature campaigning.',
		legalBasis: 'Sec. 15, R.A. No. 9369; Penera v. COMELEC (605 SCRA 574, 2009)'
	},
	{
		id: 'consti1:finals:166',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In Macalintal v. COMELEC (405 SCRA 614), the Court struck down the Joint Congressional Oversight Committee\'s power to approve COMELEC regulations, ruling that legislative oversight cannot interfere with the independent rule-making power guaranteed by Article IX-A, Section 6.',
		legalBasis: 'Art. IX-A, Secs. 1 & 6, 1987 Constitution; Macalintal v. COMELEC (405 SCRA 614, 2003)'
	},
	{
		id: 'consti1:finals:167',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In Guevara v. COMELEC (104 Phil. 268), the Court held that the contempt power is an inherent judicial attribute; hence, an administrative commission cannot cite a person in contempt while performing purely ministerial or investigative functions.',
		legalBasis: 'Guevara v. COMELEC (104 Phil. 268, 1958)'
	},
	{
		id: 'consti1:finals:168',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In People v. Delgado (189 SCRA 715), the Court clarified that under Section 268 of the Omnibus Election Code, trial courts of general jurisdiction (RTCs) have exclusive jurisdiction to try criminal election offenses, even though the COMELEC conducts the preliminary investigation.',
		legalBasis: 'Art. IX-C, Sec. 2(6), 1987 Constitution; Sec. 268, Omnibus Election Code; People v. Delgado (189 SCRA 715, 1990)'
	},
	{
		id: 'consti1:finals:169',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In Aratuc v. COMELEC (88 SCRA 251), the Court affirmed that review of COMELEC decisions by the Supreme Court is not an ordinary appeal on errors of fact or law, but an extraordinary inquiry via certiorari into whether the Commission acted with grave abuse of discretion.',
		legalBasis: 'Art. IX-A, Sec. 7, 1987 Constitution; Aratuc v. COMELEC (88 SCRA 251, 1979)'
	},
	{
		id: 'consti1:finals:170',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In Flores v. COMELEC (184 SCRA 484), the Court held that Article IX-C, Section 2(2) expressly confers appellate jurisdiction on the COMELEC over all election contests involving elective barangay officials decided by lower trial courts. Congress cannot redirect those appeals to the RTC.',
		legalBasis: 'Art. IX-C, Sec. 2(2), 1987 Constitution; Flores v. COMELEC (184 SCRA 484, 1990)'
	},
	{
		id: 'consti1:finals:171',
		topicId: 'finals',
		topic: P5_14,
		tag: 'jurisprudence',
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
		explanation:
			'In Soller v. COMELEC (339 SCRA 685), the Court reaffirmed that the COMELEC En Banc has no jurisdiction to entertain an appeal from an RTC decision in a municipal election protest without the appeal being resolved first by one of its Divisions.',
		legalBasis: 'Art. IX-C, Sec. 3, 1987 Constitution; Soller v. COMELEC (339 SCRA 685, 2000)'
	},

	// ---- Chapter 15: The Commission on Audit (Q172–Q180) ----
	{
		id: 'consti1:finals:172',
		topicId: 'finals',
		topic: P5_15,
		tag: 'jurisprudence',
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
		explanation:
			'In Pacete v. Acting Chairman of COA (185 SCRA 1), the Court ruled that money claims against the State must first be presented to the Commission on Audit. If the Commission fails to act within the statutory period, the proper remedy is mandamus to compel the rendition of a decision, not a judicial order for immediate payment.',
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution; P.D. 1445; Pacete v. Acting Chairman of COA (185 SCRA 1, 1990)'
	},
	{
		id: 'consti1:finals:173',
		topicId: 'finals',
		topic: P5_15,
		tag: 'jurisprudence',
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
		explanation:
			'In UP v. Dizon (G.R. No. 171182, 2012), the Supreme Court held that all money judgments rendered by regular courts against government entities and state institutions must be filed with the COA, which retains primary jurisdiction to determine whether public funds are legally available for disbursement.',
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution; UP v. Dizon (G.R. No. 171182, 2012)'
	},
	{
		id: 'consti1:finals:174',
		topicId: 'finals',
		topic: P5_15,
		tag: 'jurisprudence',
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
		explanation:
			"In COCOFED v. Republic (G.R. Nos. 177857-58, 2012), the Supreme Court ruled that coconut levy funds were collected pursuant to the State's police and taxing powers. They are public funds held in trust for the public, meaning assets bought with them are subject to COA audit.",
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution; COCOFED v. Republic (G.R. Nos. 177857-58, 2012)'
	},
	{
		id: 'consti1:finals:175',
		topicId: 'finals',
		topic: P5_15,
		tag: 'jurisprudence',
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
		explanation:
			"In Caltex Philippines, Inc. v. Commission on Audit (208 SCRA 726), the Court held that the OPSF collections were public funds raised under the police and taxing powers of the State, and that the Commission on Audit has the constitutional authority to audit their collection and disbursement.",
		legalBasis: 'Art. IX-D, Sec. 2(1), 1987 Constitution; Caltex Philippines, Inc. v. COA (208 SCRA 726, 1992)'
	},
	{
		id: 'consti1:finals:176',
		topicId: 'finals',
		topic: P5_15,
		tag: 'jurisprudence',
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
		explanation:
			'In Riel v. Wright (49 Phil. 195), the Supreme Court held that the Auditor has the quasi-judicial duty to disallow unlawful expenditures. Courts will not substitute their judgment for that of the Auditor through mandamus absent a showing of arbitrary grave abuse of discretion.',
		legalBasis: 'Riel v. Wright (49 Phil. 195, 1926)'
	},
	{
		id: 'consti1:finals:177',
		topicId: 'finals',
		topic: P5_15,
		tag: 'jurisprudence',
		question:
			"In which case did the Supreme Court rule that the Cooperative Development Authority's procurement of office equipment and computers is subject to the COA's auditing rules for the prevention and disallowance of irregular, unnecessary, excessive, extravagant, or unconscionable (IUEEU) expenditures?",
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
		explanation:
			'In Verzosa v. Carague (G.R. No. 157838, 2011; Resolution Feb. 7, 2012), the Court upheld COA disallowances on government computer purchases at the Cooperative Development Authority, confirming that the Commission on Audit has constitutional authority to set benchmarks preventing excessive and extravagant spending by government agencies.',
		legalBasis: 'Art. IX-D, Sec. 2(2), 1987 Constitution; Verzosa v. Carague (G.R. No. 157838, 2011)'
	},
	{
		id: 'consti1:finals:178',
		topicId: 'finals',
		topic: P5_15,
		tag: 'jurisprudence',
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
		explanation:
			'In GSIS v. Commission on Audit (G.R. No. 162372, 2011), the Court affirmed the disallowance of monetary incentives approved by the GSIS Board, ruling that public corporations cannot create new retirement allowances without statutory authority enacted by Congress.',
		legalBasis: 'Art. IX-D, Sec. 2(1)–(2), 1987 Constitution; GSIS v. COA (G.R. No. 162372, 2011)'
	},
	{
		id: 'consti1:finals:179',
		topicId: 'finals',
		topic: P5_15,
		tag: 'jurisprudence',
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
		explanation:
			'In Guevara v. Gimenez (6 SCRA 813), the Court clarified the boundaries of audit authority, holding that an auditor cannot arbitrarily veto a valid executive contract when funds have been legally appropriated and the contract is lawful on its face.',
		legalBasis: 'Guevara v. Gimenez (6 SCRA 813, 1962)'
	},
	{
		id: 'consti1:finals:180',
		topicId: 'finals',
		topic: P5_15,
		tag: 'jurisprudence',
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
		explanation:
			'In Salazar v. Mathay (73 SCRA 275), the Court held that while the Auditor audits financial disbursements, he cannot sit in review of judicial decisions or override judicial orders directing the payment of funds properly adjudicated by a court of competent jurisdiction.',
		legalBasis: 'Salazar v. Mathay (73 SCRA 275, 1976)'
	},

	// ---- Chapter 16/17: Accountability of Public Officers (Q181–Q193) ----
	{
		id: 'consti1:finals:181',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Francisco v. House of Representatives (415 SCRA 44), the Supreme Court held that the constitutional term "initiate" means the filing of a verified impeachment complaint coupled with its referral to the Committee on Justice. A second complaint referred within one year violates Article XI, Section 3(5).',
		legalBasis: 'Art. XI, Sec. 3(5), 1987 Constitution; Francisco v. House of Representatives (415 SCRA 44, 2003)'
	},
	{
		id: 'consti1:finals:182',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Gutierrez v. House of Representatives (643 SCRA 198), the Court ruled that the one-year bar prohibits subsequent initiated proceedings, not multi-count complaints or separate complaints initiated simultaneously in a single, consolidated proceeding.',
		legalBasis: 'Art. XI, Sec. 3(5), 1987 Constitution; Gutierrez v. House of Representatives (643 SCRA 198, 2011)'
	},
	{
		id: 'consti1:finals:183',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Republic v. Sereno (G.R. No. 237428, 2018), the Court held that quo warranto inquires into the validity of title to public office at its inception based on qualifications, whereas impeachment is a political mechanism to remove a validly seated officer for offenses committed during tenure.',
		legalBasis: 'Art. VIII, Sec. 5(1) & Art. XI, Sec. 2, 1987 Constitution; Republic v. Sereno (G.R. No. 237428, 2018)'
	},
	{
		id: 'consti1:finals:184',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Gonzales III v. Office of the President (G.R. No. 196231, 2012 & 2014), the Court held that subjecting the Deputy Ombudsman to the disciplinary power of the President directly undermines the institutional independence guaranteed to the Ombudsman under Article XI.',
		legalBasis: 'Art. XI, Sec. 5, 1987 Constitution; Gonzales III v. Office of the President (2012, 2014)'
	},
	{
		id: 'consti1:finals:185',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Zaldivar v. Gonzales (166 SCRA 316), the Court held that the 1987 Constitution converted the Tanodbayan into the Office of the Special Prosecutor under the exclusive authority and control of the Ombudsman; hence, the Special Prosecutor cannot initiate criminal cases on his own.',
		legalBasis: 'Art. XI, Secs. 5 & 7, 1987 Constitution; Zaldivar v. Gonzales (166 SCRA 316, 1988)'
	},
	{
		id: 'consti1:finals:186',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Nuñez v. Sandiganbayan (111 SCRA 433), the Supreme Court held that the creation of the Sandiganbayan was specifically mandated by the Constitution to combat public corruption, which represents a valid classification justifying specialized procedures.',
		legalBasis: 'Art. XI, Sec. 4, 1987 Constitution; Nuñez v. Sandiganbayan (111 SCRA 433, 1982)'
	},
	{
		id: 'consti1:finals:187',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In PCGG v. Peña (159 SCRA 556), the Court affirmed that under Article XI, Section 15, the right of the State to recover ill-gotten wealth from public officials, their nominees, or transferees cannot be barred by prescription, laches, or estoppel.',
		legalBasis: 'Art. XI, Sec. 15, 1987 Constitution; PCGG v. Peña (159 SCRA 556, 1988)'
	},
	{
		id: 'consti1:finals:188',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Santiago v. Sandiganbayan (356 SCRA 636), the Court held that the preventive suspension under R.A. 3019 is not a penalty, but a precautionary measure to prevent tampering with evidence, and applies to legislators without infringing upon internal legislative discipline.',
		legalBasis: 'Sec. 13, R.A. No. 3019; Santiago v. Sandiganbayan (356 SCRA 636, 2001)'
	},
	{
		id: 'consti1:finals:189',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Estrada v. Desierto (353 SCRA 452), the Court held that presidential immunity lasts only during incumbency; once tenure ends, post-tenure immunity extends only to lawful official acts, never to criminal offenses.',
		legalBasis: 'Art. VII, Sec. 1, 1987 Constitution; Estrada v. Desierto (353 SCRA 452, 2001)'
	},
	{
		id: 'consti1:finals:190',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Matute v. Hernandez (66 Phil. 68), the Supreme Court ruled that an individual claiming title to public office must institute quo warranto; one cannot demand salaries or emoluments through collateral proceedings.',
		legalBasis: 'Matute v. Hernandez (66 Phil. 68, 1938)'
	},
	{
		id: 'consti1:finals:191',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Balmadrid v. Sandiganbayan (195 SCRA 497, 1991), the Court recognized that the anti-graft jurisdiction of the Sandiganbayan extends to private individuals who conspire with public officers in committing offenses defined under R.A. 3019 (note: on motion for reconsideration in June 1992, the spouses were acquitted on the factual merits because conspiracy was not proven beyond reasonable doubt).',
		legalBasis: 'P.D. 1606; R.A. No. 3019; Balmadrid v. Sandiganbayan (195 SCRA 497, 1991)'
	},
	{
		id: 'consti1:finals:192',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Inting v. Tanodbayan (97 SCRA 494), the Court examined the investigative authority of the Tanodbayan under martial law decrees prior to the reorganization of the Ombudsman under Article XI of the 1987 Constitution.',
		legalBasis: 'P.D. No. 1630; Inting v. Tanodbayan (97 SCRA 494, 1980)'
	},
	{
		id: 'consti1:finals:193',
		topicId: 'finals',
		topic: P5_16,
		tag: 'jurisprudence',
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
		explanation:
			'In Orap v. Sandiganbayan (139 SCRA 252), the Court ruled that prosecutorial discretion in filing charges before the Sandiganbayan belongs to the Ombudsman, and courts will refrain from interfering in preliminary investigations except for jurisdictional grave abuse.',
		legalBasis: 'Orap v. Sandiganbayan (139 SCRA 252, 1985)'
	},

	// ---- Chapter 17/18: Amendment or Revision of the Constitution (Q194–Q202) ----
	{
		id: 'consti1:finals:194',
		topicId: 'finals',
		topic: P5_17,
		tag: 'jurisprudence',
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
		explanation:
			'In Gonzales v. COMELEC (21 SCRA 774), the Court ruled that constituent power is not ordinary lawmaking power; when Congress proposes amendments, it acts as a constituent body whose adherence to constitutional rules is justiciable.',
		legalBasis: 'Art. XVII, Sec. 1, 1987 Constitution; Gonzales v. COMELEC (21 SCRA 774, 1967)'
	},
	{
		id: 'consti1:finals:195',
		topicId: 'finals',
		topic: P5_17,
		tag: 'jurisprudence',
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
		explanation:
			"In Tolentino v. COMELEC (41 SCRA 702), the Court struck down the 1971 Con-Con's advance plebiscite lowering the voting age, holding that the electorate must be given the full design of all proposals in a single plebiscite to make an intelligent choice.",
		legalBasis: 'Art. XVII, Sec. 4, 1987 Constitution; Tolentino v. COMELEC (41 SCRA 702, 1971)'
	},
	{
		id: 'consti1:finals:196',
		topicId: 'finals',
		topic: P5_17,
		tag: 'jurisprudence',
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
		explanation:
			'In Sanidad v. COMELEC (73 SCRA 333), the Court rejected the political question defense regarding constitutional amendments, holding that courts have the duty to review amendatory compliance, though it sustained presidential emergency authority under martial law conditions.',
		legalBasis: 'Sanidad v. COMELEC (73 SCRA 333, 1976)'
	},
	{
		id: 'consti1:finals:197',
		topicId: 'finals',
		topic: P5_17,
		tag: 'jurisprudence',
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
		explanation:
			'In Defensor-Santiago v. COMELEC (270 SCRA 106), the Court held that R.A. 6735 provided for initiatives on statutes and local ordinances, but omitted the necessary statutory standards and subtitles to govern initiatives on constitutional amendments.',
		legalBasis: 'Art. XVII, Sec. 2, 1987 Constitution; Defensor-Santiago v. COMELEC (270 SCRA 106, 1997)'
	},
	{
		id: 'consti1:finals:198',
		topicId: 'finals',
		topic: P5_17,
		tag: 'jurisprudence',
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
		explanation:
			"In Lambino v. COMELEC (505 SCRA 160), the Court struck down the initiative seeking to shift the government from presidential-bicameral to parliamentary-unicameral, holding that such structural alterations constitute a revision, which is barred from people's initiatives.",
		legalBasis: 'Art. XVII, Secs. 1–2, 1987 Constitution; Lambino v. COMELEC (505 SCRA 160, 2006)'
	},
	{
		id: 'consti1:finals:199',
		topicId: 'finals',
		topic: P5_17,
		tag: 'jurisprudence',
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
		explanation:
			'In Imbong v. COMELEC (35 SCRA 28), the Court confirmed that because the legislature is bicameral, proposals passed as a Constituent Assembly require the separate concurrence of 3/4 of the Senate and 3/4 of the House of Representatives.',
		legalBasis: 'Art. XVII, Secs. 1 & 3, 1987 Constitution; Imbong v. COMELEC (35 SCRA 28, 1970)'
	},
	{
		id: 'consti1:finals:200',
		topicId: 'finals',
		topic: P5_17,
		tag: 'jurisprudence',
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
		explanation:
			'In the Ratification Cases (Javellana v. Executive Secretary, 50 SCRA 30, 1973), a divided Court ruled that while the 1973 Constitution was not validly ratified in accordance with the 1935 charter, a majority held that it had been accepted or there was no further judicial obstacle, resulting in the dismissal of the petitions.',
		legalBasis: 'Javellana v. Executive Secretary (50 SCRA 30, 1973)'
	},
	{
		id: 'consti1:finals:201',
		topicId: 'finals',
		topic: P5_17,
		tag: 'jurisprudence',
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
		explanation:
			'In Occeña v. COMELEC (95 SCRA 755), the Supreme Court upheld the constituent power of the interim Batasang Pambansa to propose amendments changing the nature of executive power in the 1973 Constitution.',
		legalBasis: 'Occeña v. COMELEC (95 SCRA 755, 1980 / 104 SCRA 1, 1981)'
	},
	{
		id: 'consti1:finals:202',
		topicId: 'finals',
		topic: P5_17,
		tag: 'jurisprudence',
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
		explanation:
			'In Almario v. Alba (127 SCRA 69), the Court distinguished the 1984 plebiscite from Tolentino, ruling that the amendments were submitted together in a single plebiscite, affording the electorate the opportunity to evaluate the proposals as a whole.',
		legalBasis: 'Almario v. Alba (127 SCRA 69, 1984)'
	},

	// ---- Chapters 18/19: National Economy, Patrimony, Citizenship & Elections (Q203–Q210) ----
	{
		id: 'consti1:finals:203',
		topicId: 'finals',
		topic: P5_18,
		tag: 'jurisprudence',
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
		explanation:
			'In Manila Prince Hotel v. GSIS (267 SCRA 408), the Court ruled that the historic Manila Hotel forms part of the national patrimony, and that under Article XII, Section 10, a Filipino corporation matching the bid of a foreign bidder is constitutionally entitled to the award.',
		legalBasis: 'Art. XII, Sec. 10, 1987 Constitution; Manila Prince Hotel v. GSIS (267 SCRA 408, 1997)'
	},
	{
		id: 'consti1:finals:204',
		topicId: 'finals',
		topic: P5_18,
		tag: 'jurisprudence',
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
		explanation:
			'In Miners Association of the Philippines v. Factoran (240 SCRA 100), the Court held that the 1987 Constitution eliminated the concession system; mineral exploration and utilization must proceed under joint ventures, co-production, or production-sharing agreements under full State supervision.',
		legalBasis: 'Art. XII, Sec. 2, 1987 Constitution; Miners Association of the Philippines v. Factoran (240 SCRA 100, 1995)'
	},
	{
		id: 'consti1:finals:205',
		topicId: 'finals',
		topic: P5_18,
		tag: 'jurisprudence',
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
		explanation:
			"In La Bugal-B'laan Tribal Association v. Ramos (445 SCRA 1, 2004), the Court reversed its initial ruling, confirming that foreign corporations can participate in large-scale mining operations through FTAAs where the foreign entity acts as a service contractor under ultimate State direction.",
		legalBasis: 'Art. XII, Sec. 2, 1987 Constitution; La Bugal-B’laan Tribal Association v. Ramos (445 SCRA 1, 2004)'
	},
	{
		id: 'consti1:finals:206',
		topicId: 'finals',
		topic: P5_18,
		tag: 'jurisprudence',
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
		explanation:
			'In League of Cities of the Philippines v. COMELEC (2011; 643 SCRA 150 / 648 SCRA 400 / 656 SCRA 316), after initially striking down the 16 cityhood laws in 2008 for violating Article X, Section 10 and equal protection, the Supreme Court ultimately reversed itself and upheld all 16 cityhood laws as constitutional, finding substantial distinctions for municipalities whose cityhood bills were already pending prior to R.A. 9009.',
		legalBasis: 'Art. X, Sec. 10, 1987 Constitution; League of Cities of the Philippines v. COMELEC (2011)'
	},
	{
		id: 'consti1:finals:207',
		topicId: 'finals',
		topic: P5_18,
		tag: 'jurisprudence',
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
		explanation:
			'In Cruz v. Secretary of Environment and Natural Resources (347 SCRA 128), former Justice Isagani Cruz challenged the IPRA law as violative of the Regalian Doctrine. The Court tied 7-7, meaning the constitutionality of the statute was sustained under the Rules of Court.',
		legalBasis: 'Art. XII, Secs. 2 & 5, 1987 Constitution; Cruz v. Secretary of Environment and Natural Resources (347 SCRA 128, 2000)'
	},
	{
		id: 'consti1:finals:208',
		topicId: 'finals',
		topic: P5_18,
		tag: 'jurisprudence',
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
		explanation:
			'In Bengzon v. Cruz (G.R. No. 142840, 2001), the Court ruled that repatriation restores a person to his original citizenship status; since respondent was natural-born prior to losing citizenship, repatriation returned him to natural-born status, qualifying him for the House of Representatives.',
		legalBasis: 'Art. IV, Sec. 2, 1987 Constitution; Bengzon v. Cruz (357 SCRA 545, 2001)'
	},
	{
		id: 'consti1:finals:209',
		topicId: 'finals',
		topic: P5_18,
		tag: 'jurisprudence',
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
		explanation:
			'In Altarejos v. COMELEC (G.R. No. 163256, 2004), the Court disqualified a candidate who failed to register his certificate of repatriation in the civil registry, holding that administrative registration is a mandatory statutory condition to complete repatriation.',
		legalBasis: 'R.A. No. 8171; Altarejos v. COMELEC (441 SCRA 655, 2004)'
	},
	{
		id: 'consti1:finals:210',
		topicId: 'finals',
		topic: P5_18,
		tag: 'jurisprudence',
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
		explanation:
			'In Romualdez v. COMELEC (G.R. No. 167011, 2008), the Supreme Court held that ordinary penal statutes cannot be subjected to facial invalidation; an accused challenging a criminal election statute can only mount an "as-applied" challenge based on the specific facts charged.',
		legalBasis: 'Omnibus Election Code; Romualdez v. COMELEC (553 SCRA 370, 2008)'
	}
];
