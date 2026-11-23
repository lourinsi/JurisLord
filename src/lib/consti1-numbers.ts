import type { AnyNumberRow } from '$lib/cluster-numbers';
import type { FinalsTopic } from '$lib/crimpro-finals';

/**
 * Constitutional Law I — Chapters 12–19 Numbers to Memorize (76 items),
 * grouped by chapter for the ★ FINALS filter view in the Numbers tab.
 */
export const CONSTI1_FINALS_TOPICS: FinalsTopic[] = [
	{
		id: 'ch-12',
		num: 12,
		title: 'Chapter 12: The Judicial Department (Article VIII)',
		shortTitle: 'Ch. 12: Judiciary',
		subtopics: [
			{
				title: 'Supreme Court Composition, Qualifications & Deadlines',
				rows: [
					[
						'15 Members',
						'Total membership comprising the Supreme Court',
						'Art. VIII, Sec. 4(1)',
						'One Chief Justice and fourteen Associate Justices.'
					],
					[
						'En Banc, or Divisions of 3, 5, or 7 Members',
						'Permissible sitting formats / division sizes for Supreme Court deliberations',
						'Art. VIII, Sec. 4(1)'
					],
					[
						'At least 3 Members',
						'Minimum concurring votes required to decide a case or matter heard by a Supreme Court Division',
						'Art. VIII, Sec. 4(3)',
						'Must also constitute a majority of the Members who actually took part in the deliberations and voted thereon.'
					],
					[
						'At least 40 years',
						'Minimum age requirement at the time of appointment for a Member of the Supreme Court',
						'Art. VIII, Sec. 7(1)'
					],
					[
						'15 years or more',
						'Minimum duration of law practice in the Philippines or service as a lower court judge required for appointment to the Supreme Court',
						'Art. VIII, Sec. 7(1)'
					],
					[
						'Within 90 days',
						'Period within which any vacancy in the Supreme Court must be filled by the President from the date the vacancy occurred',
						'Art. VIII, Sec. 4(1)'
					],
					[
						'Within 90 days',
						'Period within which the President must fill vacancies in lower courts from the submission of the JBC shortlist',
						'Art. VIII, Sec. 9'
					],
					[
						'70 years',
						'Mandatory retirement age for Members of the Supreme Court and all lower court judges',
						'Art. VIII, Sec. 11',
						'Members of the Supreme Court and judges of lower courts hold office during good behavior until age 70 or until incapacitated.'
					],
					[
						'Within 24 months',
						'Constitutional deadline for the Supreme Court to decide or resolve cases submitted for decision',
						'Art. VIII, Sec. 15(1)'
					],
					[
						'Within 12 months',
						'Constitutional deadline for lower collegiate courts (Court of Appeals, Sandiganbayan, CTA) to decide or resolve cases submitted for decision',
						'Art. VIII, Sec. 15(1)',
						'Unless reduced by the Supreme Court.'
					],
					[
						'Within 3 months',
						'Constitutional deadline for all other lower trial courts to decide or resolve cases submitted for decision',
						'Art. VIII, Sec. 15(1)'
					],
					[
						'Within 30 days',
						'Deadline from the opening of each regular session of Congress within which the Supreme Court must submit its annual report on the operations of the Judiciary to the President and Congress',
						'Art. VIII, Sec. 16'
					]
				]
			},
			{
				title: 'Judicial and Bar Council (JBC)',
				rows: [
					[
						'7 Members',
						'Total voting composition of the Judicial and Bar Council (JBC)',
						'Art. VIII, Sec. 8(1); Chavez v. JBC',
						'Under the constitutional single-representative rule, having one representative each from the Senate and House with separate votes or rotating half-votes violates the Constitution (Chavez v. JBC).'
					],
					[
						'3 Ex Officio Members',
						'Number and identity of Ex Officio Members in the Judicial and Bar Council (JBC)',
						'Art. VIII, Sec. 8(1)',
						'The Chief Justice as Ex Officio Chairman, the Secretary of Justice, and one Representative of Congress.'
					],
					[
						'4 Regular Members',
						'Number of Regular Members in the Judicial and Bar Council (JBC) appointed by the President with Commission on Appointments consent',
						'Art. VIII, Sec. 8(1)–(2)',
						'A representative of the Integrated Bar, a professor of law, a retired Supreme Court Justice, and a representative of the private sector.'
					],
					[
						'4, 3, 2, and 1 year (then 4 years)',
						'Staggered initial terms of the regular members of the Judicial and Bar Council (JBC)',
						'Art. VIII, Sec. 8(2)',
						'Initial appointees served 4 years, 3 years, 2 years, and 1 year; all succeeding appointments serve a full term of 4 years.'
					],
					[
						'At least 3 nominees',
						'Minimum number of vetted nominees the JBC must include on the shortlist submitted to the President for each judicial vacancy',
						'Art. VIII, Sec. 9'
					]
				]
			}
		]
	},
	{
		id: 'ch-13',
		num: 13,
		title: 'Chapter 13: Constitutional Commissions — Common Provisions (Article IX-A)',
		shortTitle: 'Ch. 13: ConComs (Common)',
		subtopics: [
			{
				title: 'Structure, Rotational Terms & Review',
				rows: [
					[
						'3 Commissions',
						'Number of independent Constitutional Commissions created directly by the Constitution',
						'Art. IX-A, Sec. 1',
						'Civil Service Commission (CSC), Commission on Elections (COMELEC), and Commission on Audit (COA).'
					],
					[
						'7 years (without reappointment)',
						'Fixed constitutional term of office for Chairmen and Commissioners of the Constitutional Commissions',
						'Art. IX-A; Art. IX-B, C, D, Sec. 1(2)'
					],
					[
						'7, 5, and 3 years',
						'Staggered rotational setup for the initial appointees to each Constitutional Commission under the 1987 Constitution',
						'Art. IX-A; Art. IX-B, C, D, Sec. 1(2)',
						'7 years (Chairman), 5 years (Member 1), and 3 years (Member 2).'
					],
					[
						'Every 2 years',
						'Fixed time interval at which regular vacancies naturally occur under the Constitutional Commissions rotational scheme',
						'Art. IX-A; Gaminde v. COA',
						'Resulting from the 7–5–3 staggered rotational scheme.'
					],
					[
						'February 2, 1987',
						'Universal starting date from which rotational term cycles are strictly reckoned across the Constitutional Commissions',
						'Art. IX-A; Gaminde v. COA'
					],
					[
						'7 aggregate years',
						'Maximum aggregate tenure any individual may serve in a Constitutional Commission, whether as Member, Chairman, or combination',
						'Art. IX-A; Funa v. COA',
						'Applies even upon promotion from Commissioner to Chairman (Funa v. COA / Funa v. Villar).'
					],
					[
						'Majority vote of all its members',
						'Voting threshold required for any Constitutional Commission sitting En Banc to render a decision, order, or ruling',
						'Art. IX-A, Sec. 7',
						'At least 2 out of 3 in CSC/COA; at least 4 out of 7 in COMELEC.'
					],
					[
						'Within 30 days',
						'Deadline from notice within which an aggrieved party must elevate a final decision or ruling of a Constitutional Commission to the Supreme Court via Rule 64 / certiorari',
						'Art. IX-A, Sec. 7; Rule 64'
					]
				]
			}
		]
	},
	{
		id: 'ch-14',
		num: 14,
		title: 'Chapter 14: The Civil Service Commission (Article IX-B)',
		shortTitle: 'Ch. 14: CSC',
		subtopics: [
			{
				title: 'Composition, Qualifications & Career Service Exemptions',
				rows: [
					[
						'3 Members',
						'Total composition of the Civil Service Commission (CSC)',
						'Art. IX-B, Sec. 1(1)',
						'One Chairman and two Commissioners.'
					],
					[
						'At least 35 years',
						'Minimum age requirement at the time of appointment for Civil Service Commission (CSC) members',
						'Art. IX-B, Sec. 1(1)'
					],
					[
						'Immediately preceding election',
						'Prior election disqualification window barring former political candidates from being appointed to the CSC',
						'Art. IX-B, Sec. 1(1)',
						'Must not have been a candidate in the election immediately preceding appointment.'
					],
					[
						'3 positions',
						'Number of constitutional categories of non-competitive / exempt positions not subject to ordinary competitive examination',
						'Art. IX-B, Sec. 2(2)',
						'Policy-determining, Primarily confidential, and Highly technical.'
					]
				]
			}
		]
	},
	{
		id: 'ch-15',
		num: 15,
		title: 'Chapter 15: The Commission on Elections (Article IX-C)',
		shortTitle: 'Ch. 15: COMELEC',
		subtopics: [
			{
				title: 'Composition, Divisions, Qualifications & Election Period',
				rows: [
					[
						'7 Members',
						'Total composition of the Commission on Elections (COMELEC)',
						'Art. IX-C, Sec. 1(1)',
						'One Chairman and six Commissioners.'
					],
					[
						'2 Divisions of 3 Members each',
						'Divisional sitting setup of the COMELEC for quasi-judicial / adjudicatory election cases',
						'Art. IX-C, Sec. 3',
						'The Chairman does not belong to any division.'
					],
					[
						'At least 35 years',
						'Minimum age requirement at the time of appointment for COMELEC members',
						'Art. IX-C, Sec. 1(1)'
					],
					[
						'Majority (at least 4 out of 7)',
						'Minimum proportion of COMELEC members required to be Philippine Bar members',
						'Art. IX-C, Sec. 1(1)',
						'A majority thereof (at least 4 out of 7), including the Chairman.'
					],
					[
						'At least 10 years',
						'Minimum duration of active practice of law required for lawyer-appointees to the COMELEC',
						'Art. IX-C, Sec. 1(1)'
					],
					[
						'3 for 7 yrs; 2 for 5 yrs; 2 for 3 yrs',
						'Initial staggered terms for the first appointees to the COMELEC under the 1987 Constitution',
						'Art. IX-C, Sec. 1(2)',
						'Three members for 7 years, two members for 5 years, and two members for 3 years.'
					],
					[
						'90 days before to 30 days after (120 days)',
						'Official election period duration established by the Constitution unless otherwise fixed by law in special cases',
						'Art. IX-C, Sec. 9',
						'90 days before election day up to 30 days after election day (a total of 120 days).'
					],
					[
						'Immediately preceding election',
						'Prior election disqualification window barring former political candidates from appointment to the COMELEC',
						'Art. IX-C, Sec. 1(1)'
					]
				]
			}
		]
	},
	{
		id: 'ch-16',
		num: 16,
		title: 'Chapter 16: The Commission on Audit (Article IX-D)',
		shortTitle: 'Ch. 16: COA',
		subtopics: [
			{
				title: 'Composition, Qualifications & Money Claims Deadline',
				rows: [
					[
						'3 Members',
						'Total composition of the Commission on Audit (COA)',
						'Art. IX-D, Sec. 1(1)',
						'One Chairman and two Commissioners.'
					],
					[
						'At least 35 years',
						'Minimum age requirement at the time of appointment for COA members',
						'Art. IX-D, Sec. 1(1)'
					],
					[
						'Not less than 10 years',
						'Minimum professional experience required for CPAs or lawyers appointed to the COA',
						'Art. IX-D, Sec. 1(1)',
						'Not less than 10 years of auditing experience (for CPAs) or at least 10 years of law practice (for Philippine Bar members).'
					],
					[
						'0 (never all 3 same profession)',
						'Maximum professional representation rule on the Commission on Audit (COA) bench',
						'Art. IX-D, Sec. 1(1)',
						'Zero allowance for all 3 members to belong to the same profession: at no time shall all Members be CPAs or all be lawyers.'
					],
					[
						'Immediately preceding election',
						'Prior election disqualification window barring former political candidates from appointment to the COA',
						'Art. IX-D, Sec. 1(1)'
					],
					[
						'Within 60 days',
						'Statutory timeframe within which the Commission on Audit must decide money claims submitted to it',
						'Art. IX-D; C.A. No. 327 / P.D. No. 1445'
					]
				]
			}
		]
	},
	{
		id: 'ch-17',
		num: 17,
		title: 'Chapter 17: Accountability of Public Officers (Article XI)',
		shortTitle: 'Ch. 17: Accountability',
		subtopics: [
			{
				title: 'Impeachment',
				rows: [
					[
						'5 offices',
						'Total categories of high officials subject to removal exclusively via impeachment',
						'Art. XI, Sec. 2',
						'The President, Vice-President, Members of the Supreme Court, Members of the Constitutional Commissions, and the Ombudsman.'
					],
					[
						'At least 1/3 of all House Members',
						'Vote threshold of the House of Representatives required to endorse and fast-track an impeachment complaint directly to the Senate without committee referral',
						'Art. XI, Sec. 3(4)'
					],
					[
						'At least 1/3 of all House Members',
						'Vote threshold of the House of Representatives required to affirm a favorable committee resolution or override a contrary resolution on impeachment',
						'Art. XI, Sec. 3(3)'
					],
					[
						'2/3 of all Senators (at least 16 of 24)',
						'Vote threshold of the Senate required to convict an impeached official in an impeachment trial',
						'Art. XI, Sec. 3(6)'
					],
					[
						'1 year',
						'Constitutional prohibition period barring the initiation of a second impeachment complaint against the same official',
						'Art. XI, Sec. 3(5)',
						'Known as the One-Year Bar Rule.'
					],
					[
						'Within 60 session days',
						'Constitutional deadline within which the House Committee on Justice must submit its report on an impeachment complaint',
						'Art. XI, Sec. 3(2)'
					],
					[
						'10 session days / 3 session days',
						'Deadlines within which an impeachment complaint must be included in the House Order of Business and subsequently referred to the proper committee',
						'Art. XI, Sec. 3(2)',
						'Within 10 session days for inclusion in the Order of Business, and within 3 session days thereafter for referral to the proper committee.'
					]
				]
			},
			{
				title: 'Ombudsman & Sandiganbayan',
				rows: [
					[
						'At least 40 years',
						'Minimum age requirement at the time of appointment for the Ombudsman and overall/regional Deputies',
						'Art. XI, Sec. 8'
					],
					[
						'10 years or more',
						'Minimum duration of law practice in the Philippines or service as a lower court judge required for appointment as Ombudsman or Deputy',
						'Art. XI, Sec. 8'
					],
					[
						'7 years (without reappointment)',
						'Fixed constitutional term of office for the Ombudsman and Deputies',
						'Art. XI, Sec. 11'
					],
					[
						'At least 6 nominees',
						'Minimum number of vetted nominees the JBC must include on the shortlist submitted to the President for appointment of the initial Ombudsman',
						'Art. XI, Sec. 9'
					],
					[
						'At least 3 nominees',
						'Minimum number of vetted nominees the JBC must include on the shortlist for subsequent Ombudsman vacancies',
						'Art. XI, Sec. 9'
					],
					[
						'21 Justices (7 Divisions of 3)',
						'Total regular membership and divisional composition of the Sandiganbayan anti-graft collegiate court',
						'Art. XI, Sec. 4; R.A. 10660',
						'One Presiding Justice and twenty Associate Justices, sitting in 7 Divisions of 3 Justices each.'
					],
					[
						'Salary Grade 27 (SG 27) and higher',
						'Salary Grade threshold that vests exclusive original jurisdiction in the Sandiganbayan over public officers accused of graft and corruption',
						'Art. XI, Sec. 4; R.A. 8249'
					]
				]
			}
		]
	},
	{
		id: 'ch-18',
		num: 18,
		title: 'Chapter 18: Amendment or Revision of the Constitution (Article XVII)',
		shortTitle: 'Ch. 18: Amendments',
		subtopics: [
			{
				title: 'Con-Ass, Con-Con, People’s Initiative & Plebiscite',
				rows: [
					[
						'3/4 of all Members of Congress',
						'Vote threshold of Congress acting as a Constituent Assembly (Con-Ass) required to propose constitutional amendments or revisions',
						'Art. XVII, Sec. 1(1)'
					],
					[
						'2/3 of all Members of Congress',
						'Vote threshold of Congress required to call a Constitutional Convention (Con-Con) directly',
						'Art. XVII, Sec. 3'
					],
					[
						'Majority of all Members of Congress',
						'Vote threshold of Congress required to submit the question of calling a Constitutional Convention (Con-Con) to the electorate via referendum',
						'Art. XVII, Sec. 3'
					],
					[
						'At least 12% of registered voters',
						'Total percentage of registered voters required nationwide to initiate a People’s Initiative petition',
						'Art. XVII, Sec. 2'
					],
					[
						'At least 3% per legislative district',
						'Minimum voter percentage required in each legislative district for a valid People’s Initiative petition',
						'Art. XVII, Sec. 2'
					],
					[
						'5 years following ratification',
						'Moratorium period barring any amendment via People’s Initiative following the ratification of the 1987 Constitution',
						'Art. XVII, Sec. 2',
						'No People’s Initiative was permitted before February 2, 1992.'
					],
					[
						'Not oftener than once every 5 years',
						'Frequency limit restricting how often an amendment via People’s Initiative may be initiated',
						'Art. XVII, Sec. 2'
					],
					[
						'60 to 90 days',
						'Mandatory plebiscite window within which any proposed amendment or revision must be submitted to the people for ratification',
						'Art. XVII, Sec. 4',
						'Not earlier than 60 days nor later than 90 days from approval of the proposal.'
					]
				]
			}
		]
	},
	{
		id: 'ch-19',
		num: 19,
		title: 'Chapter 19: Transitory Provisions & Suffrage / Elections (Articles XVIII & V)',
		shortTitle: 'Ch. 19: Transitory & Suffrage',
		subtopics: [
			{
				title: 'Effectivity, Suffrage, Congressional Term Limits & Party-List',
				rows: [
					[
						'February 2, 1987',
						'Exact date when the 1987 Philippine Constitution formally took effect by virtue of its popular ratification in the plebiscite',
						'Art. XVIII; De Leon v. Esguerra'
					],
					[
						'At least 18 years',
						'Minimum age qualification required to exercise the right of suffrage on election day',
						'Art. V, Sec. 1'
					],
					[
						'At least 1 year (PH) & 6 months (locality)',
						'Minimum residence requirements required of a citizen to vote',
						'Art. V, Sec. 1',
						'At least 1 year in the Philippines and at least 6 months in the locality/municipality wherein they propose to vote immediately preceding the election.'
					],
					[
						'5 years',
						'Duration of service of the first batch of Senators elected in 1987 to synchronize elections',
						'Art. XVIII, Sec. 2',
						'All 24 Senators elected in 1987 served 5 years, ending at noon of June 30, 1992.'
					],
					[
						'Top 12: 6 years; Bottom 12: 3 years',
						'Staggered terms of the Senators elected in 1992 to establish the permanent Senate rotational cycle',
						'Art. XVIII, Sec. 2',
						'Of the 24 Senators elected in 1992, the top 12 served 6 years (1992–1998) and the bottom 12 served 3 years (1992–1995).'
					],
					[
						'12 Senators',
						'Number of Senators elected at large in each regular senatorial election since 1995 to preserve the Senate as a continuing body',
						'Art. XVIII, Sec. 2; Art. VI, Sec. 4',
						'Elected every 3 years.'
					],
					[
						'2 consecutive terms (max 12 years)',
						'Maximum consecutive term limit for Senators',
						'Art. VI, Sec. 4'
					],
					[
						'3 consecutive terms (max 9 years)',
						'Maximum consecutive term limit for district and party-list Members of the House of Representatives',
						'Art. VI, Sec. 7'
					],
					[
						'20% of House membership',
						'Constitutional allocation of House of Representatives seats reserved for party-list representatives',
						'Art. VI, Sec. 5(2)'
					],
					[
						'At least 2% of party-list votes',
						'Statutory vote threshold under R.A. 7941 entitling a party-list group to a guaranteed seat in the first round of allocation',
						'Art. VI, Sec. 5(2); R.A. 7941; BANAT v. COMELEC'
					],
					[
						'Maximum of 3 seats',
						'Maximum seat cap any single party-list organization can win in the House regardless of total votes received',
						'Art. VI, Sec. 5(2); R.A. 7941'
					]
				]
			}
		]
	}
];

/**
 * Additional non-duplicate Constitutional Law I numbers (Executive Department & jurisprudence)
 * preserved alongside the Chapters 12–19 Finals numbers in the "All" view.
 */
export const CONSTI1_EXTRA_ROWS: AnyNumberRow[] = [
	[
		'2 months',
		'Window prior to the next presidential election (running until the end of the President’s term) during which the midnight appointment ban applies',
		'Art. VII, Sec. 15',
		'Applies to executive appointments by the President or Acting President, except temporary appointments to executive positions when continued vacancies will prejudice public service or endanger public safety. Does not apply to judicial appointments (De Castro v. JBC).'
	],
	[
		'4 steps',
		'Number of sequential stages required to complete a valid appointment before the appointment ban takes effect',
		'Art. VII, Sec. 15; Velicaria-Garafil v. OP',
		'The 4 steps: (1) Signing of the appointment; (2) Transmittal; (3) Receipt; and (4) Acceptance by the appointee.'
	],
	[
		'Majority of all Members of Congress',
		'Congressional voting threshold (concurrence) required for the President to grant an amnesty',
		'Art. VII, Sec. 19'
	],
	[
		'2/3 of all Members of the Senate',
		'Senate voting threshold (concurrence) required for a treaty or international agreement to be valid and effective',
		'Art. VII, Sec. 21'
	],
	[
		'30 days',
		'Period counted from the end of every quarter within which the Monetary Board must submit a complete report to Congress on foreign loans',
		'Art. VII, Sec. 20'
	],
	[
		'5 years',
		'Minimum service duration as a first-level court judge required before promotion to a second-level court (JBC policy)',
		'Art. VIII; Villanueva v. JBC'
	],
	[
		'60 days',
		'Constitutional period within which each Constitutional Commission must decide any case or matter brought before it, counted from the date of submission',
		'Art. IX-A, Sec. 7'
	],
	[
		'65 years',
		'Compulsory retirement age in the career civil service',
		'Art. IX-B; CSC v. Pililla Water District'
	],
	[
		'90 days / 45 days',
		'Campaign period duration before election day for (1) national positions (President, VP, Senators, Party-List) and (2) House of Representatives and local positions',
		'Omnibus Election Code, Sec. 3; Peñera'
	],
	[
		'1 year',
		'Reglementary period to file a petition for quo warranto, counted from ouster or when the right of action accrues',
		'Rule 66; Republic v. Sereno',
		'Prescription does not run against the State (Republic v. Sereno).'
	],
	[
		'3 bodies (Judiciary, Constitutional Commissions, Ombudsman)',
		'Number and identity of constitutional bodies granted fiscal autonomy under the 1987 Constitution',
		'Arts. VIII, IX-A, XI; CHREA v. CHR',
		'The Commission on Human Rights (CHR) does NOT enjoy fiscal autonomy (CHREA v. CHR).'
	]
];

export const CONSTI1_ALL_NUMBER_ROWS: AnyNumberRow[] = [
	...CONSTI1_FINALS_TOPICS.flatMap((topic) => topic.subtopics.flatMap((sub) => sub.rows)),
	...CONSTI1_EXTRA_ROWS
];
