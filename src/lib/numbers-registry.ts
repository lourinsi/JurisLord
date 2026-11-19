import type { AnyNumberRow } from '$lib/cluster-numbers';
import type { FinalsTopic } from '$lib/crimpro-finals';

export interface NumberSection {
	title?: string;
	rows: readonly AnyNumberRow[];
	finalsTopics?: readonly FinalsTopic[];
}

export interface TopicGridTable {
	title: string;
	head?: string[];
	rows: string[][];
	note?: string;
}

export interface SubjectNumbersConfig {
	/** Short subtab description shown in the overview and sidebar. */
	desc: string;
	/** Intro text displayed at the top of the Numbers page. */
	intro: string;
	/** Standard NumberTable sections (single or multiple). */
	sections?: NumberSection[];
	/** Optional topic-grid mode (like Criminal Law I penalty/fine/GCTA tables + Other numbers). */
	topicGrid?: {
		clusterTitle: string;
		tables: TopicGridTable[];
		other: readonly AnyNumberRow[];
	};
}

// ---- Constitutional Law I ----
const constiRows: AnyNumberRow[] = [
	[
		'2 months',
		'Window prior to the next presidential election (running until the end of the President’s term) during which the midnight appointment ban applies',
		'Art. VII, Sec. 15',
		'Applies to executive appointments by the President or Acting President, except temporary appointments to executive positions when continued vacancies will prejudice public service or endanger public safety. Does not apply to judicial appointments (De Castro v. JBC).'
	],
	[
		'4 steps',
		'Number of sequential stages required to complete a valid appointment before the appointment ban takes effect',
		'Velicaria-Garafil v. Office of the President',
		'The 4 steps: (1) Signing of the appointment; (2) Transmittal; (3) Receipt; and (4) Acceptance by the appointee.'
	],
	[
		'90 days',
		'Period within which the President must fill a vacancy in the Supreme Court, counted from when the vacancy occurs',
		'Art. VIII, Sec. 4(1)'
	],
	[
		'90 days',
		'Period within which the President must fill a vacancy in a lower court, counted from submission of the JBC list',
		'Art. VIII, Sec. 9'
	],
	[
		'7 members',
		'Total number of members composing the Judicial and Bar Council (JBC)',
		'Art. VIII, Sec. 8(1)',
		'3 ex officio (Chief Justice as Chair, Secretary of Justice, 1 representative of Congress) + 4 regular members (IBP representative, law professor, retired SC Justice, private sector representative).'
	],
	[
		'1 representative (1 vote)',
		'Number of representatives (and votes) Congress is entitled to in the Judicial and Bar Council (JBC)',
		'Art. VIII, Sec. 8(1); Chavez v. JBC',
		'Having one representative each from the Senate and House with separate votes or rotating half-votes violates the constitutional text.'
	],
	[
		'At least 3',
		'Minimum number of nominees the Judicial and Bar Council (JBC) must submit to the President for every judicial vacancy',
		'Art. VIII, Sec. 9'
	],
	[
		'4 years',
		'Term of office of the regular (non-ex officio) members of the Judicial and Bar Council (JBC)',
		'Art. VIII, Sec. 8(2)'
	],
	[
		'5 years',
		'Minimum years of service as a first-level court judge required before promotion to a second-level court (JBC policy)',
		'Villanueva v. JBC'
	],
	[
		'70 years',
		'Compulsory retirement age of Supreme Court Justices and judges of lower courts (during good behavior)',
		'Art. VIII, Sec. 11'
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
		'1/3 of all Members of the House',
		'House of Representatives voting threshold required to affirm a favorable resolution with the Articles of Impeachment (or verify an impeachment complaint)',
		'Art. XI, Sec. 3(3)'
	],
	[
		'2/3 of all Members of the Senate',
		'Senate voting threshold required to convict an impeachable official in an impeachment trial',
		'Art. XI, Sec. 3(6)'
	],
	[
		'1 year',
		'Reglementary period to file a petition for quo warranto, counted from ouster or when the right of action accrues',
		'Rule 66; Republic v. Sereno',
		'Prescription does not run against the State (Republic v. Sereno).'
	],
	[
		'7 years',
		'Full term of the Chairman and Commissioners of the CSC, COMELEC, and COA, without reappointment',
		'Art. IX-B, C, D, Sec. 1(2)'
	],
	[
		'Never over 7 years',
		'Maximum aggregate tenure a member of a Constitutional Commission may serve in total, including a promotion from Commissioner to Chairman',
		'Funa v. Villar'
	],
	[
		'7, 5, 3 years',
		'Staggered rotational terms of the first appointees to the Constitutional Commissions (Chairman / 1st Commissioner / 2nd Commissioner)',
		'Art. IX-B, C, D, Sec. 1(2)'
	],
	[
		'35 years old',
		'Minimum age qualification at the time of appointment for a Chairman or Commissioner of the CSC, COMELEC, or COA',
		'Art. IX-B, C, D, Sec. 1(1)'
	],
	[
		'60 days',
		'Period within which each Constitutional Commission must decide any case or matter brought before it, counted from the date of its submission for decision or resolution',
		'Art. IX-A, Sec. 7'
	],
	[
		'30 days',
		'Period within which an aggrieved party may bring a Constitutional Commission’s decision, order, or ruling to the Supreme Court on certiorari, counted from receipt of a copy thereof',
		'Art. IX-A, Sec. 7'
	],
	['65 years', 'Compulsory retirement age in the career civil service', 'CSC v. Pililla Water District'],
	[
		'90 days / 45 days',
		'Campaign period duration before election day for (1) national positions (President, VP, Senators, Party-List) and (2) House of Representatives and local positions',
		'Omnibus Election Code, Sec. 3; Peñera'
	],
	[
		'3 bodies (Judiciary, Constitutional Commissions, Ombudsman)',
		'Number and identity of constitutional bodies granted fiscal autonomy under the 1987 Constitution',
		'Arts. VIII, IX-A, XI; CHREA v. CHR',
		'The Commission on Human Rights (CHR) does NOT enjoy fiscal autonomy (CHREA v. CHR).'
	]
];

// ---- Persons and Family Relations ----
const pfrRows: AnyNumberRow[] = [
	[
		'1/5',
		'Maximum portion of present property that future spouses may donate to each other in their marriage settlements when the property regime is not Absolute Community of Property (ACP)',
		'Family Code, Art. 84'
	],
	[
		'5 years',
		'Prescriptive period counted from the date of the contract implementing the husband’s decision within which the wife may seek recourse from the court when his decision on ACP/CPG administration prevails',
		'Arts. 96, 124'
	],
	[
		'3 months',
		'Duration of a spouse’s absence from the conjugal dwelling without any information as to their whereabouts that creates a prima facie presumption of abandonment',
		'Art. 101'
	],
	[
		'1 year',
		'Period counted from the death of a spouse within which the surviving spouse must liquidate the ACP or CPG extrajudicially if no judicial settlement proceeding is instituted',
		'Arts. 103, 130'
	],
	[
		'Below 7',
		'Age threshold of children deemed by law to have chosen the mother when awarding the conjugal dwelling upon dissolution of the ACP or CPG',
		'Arts. 102(6), 129(9)'
	],
	[
		'At least 1 year',
		'Minimum duration of separation in fact between spouses (with reconciliation highly improbable) to constitute a sufficient cause for judicial separation of property',
		'Art. 135(6)'
	],
	[
		'5 years',
		'Period counted from the finality of the decree of legal separation within which the innocent spouse’s action to revoke a donation propter nuptias prescribes',
		'Art. 64'
	],
	[
		'₱300,000 / ₱200,000',
		'Maximum actual value limits of a family home at the time of constitution in (1) urban areas and (2) rural areas (codal limits)',
		'Art. 157'
	],
	[
		'10 years',
		'Minimum period the family home continues after the death of both spouses or the unmarried head of a family (or for as long as there is a minor beneficiary)',
		'Art. 159'
	],
	[
		'Majority of beneficiaries of legal age',
		'Proportion of beneficiaries of legal age whose written consent is required (in addition to the person who constituted it and their spouse) to sell, alienate, donate, assign, or encumber the family home',
		'Art. 158'
	],
	[
		'1',
		'Maximum number of family homes a person may constitute, or be a beneficiary of, for purposes of the Family Code exemption',
		'Art. 161'
	],
	[
		'August 3, 1988',
		'Effectivity date of the Family Code; debts contracted prior to this date are not covered by the automatic family-home execution exemption',
		'Art. 162; Modequillo'
	],
	[
		'120 days (first 120 of 300 days before birth)',
		'Window preceding the birth of a child during which physical impossibility of sexual intercourse between husband and wife must exist to impugn legitimacy',
		'Art. 166'
	],
	[
		'1 / 2 / 3 years',
		'Prescriptive periods to bring an action to impugn a child’s legitimacy, counted from knowledge of the birth or its recording in the civil register, if the husband or heirs reside in: (1) the same city/municipality; (2) elsewhere in the Philippines; or (3) abroad',
		'Art. 170'
	],
	[
		'180 and 300 days',
		'Critical day thresholds governing whether a child born after the mother’s subsequent marriage is presumed conceived during the former marriage or the subsequent marriage',
		'Art. 168',
		'Born before 180 days after the solemnization of the subsequent marriage (and within 300 days after termination of the former marriage) → presumed former marriage; born after 180 days following the subsequent marriage → presumed subsequent marriage.'
	],
	[
		'5 years',
		'Period within which the heirs of a child may file an action to claim legitimacy if the child dies during minority or in a state of insanity',
		'Art. 173'
	],
	[
		'5 years',
		'Prescriptive period within which prejudiced persons may bring an action to impugn legitimation, counted from the time their cause of action accrues',
		'Art. 182'
	],
	[
		'Below 18',
		'Age disqualification of parents at the time of conception that no longer bars legitimation of their child under R.A. 9858',
		'Art. 177 (R.A. 9858)'
	],
	[
		'25 years old (27 inter-country)',
		'Minimum age requirement for a domestic adopter (and for an inter-country adopter) under R.A. 11642',
		'R.A. 11642'
	],
	[
		'16 years',
		'Minimum required age gap between adopter and adoptee under R.A. 11642 (waived if the adopter is the biological parent or the spouse of the adoptee’s parent)',
		'R.A. 11642'
	],
	[
		'5 years',
		'Minimum continuous residence in the Philippines required of an alien/foreign adopter prior to filing a petition for domestic adoption under R.A. 11642',
		'R.A. 11642'
	],
	[
		'3 years',
		'Minimum period an adult adoptee must have been consistently considered and treated as the adopter’s own child since minority (or prior to filing) to be eligible for adoption under R.A. 11642',
		'R.A. 11642'
	],
	[
		'10 years or older',
		'Minimum age of an adoptee whose written consent to the adoption is required under R.A. 11642',
		'R.A. 11642'
	],
	[
		'6 months',
		'Mandatory waiting period after the death of the biological parents before adoption proceedings of an orphaned child may be initiated under R.A. 11642',
		'R.A. 11642'
	],
	[
		'Under 7',
		'Age threshold under the tender-age rule below which no child shall be separated from the mother unless the court finds compelling reasons',
		'Art. 213'
	],
	[
		'Over 7',
		'Age threshold above which the court must take into account the child’s choice of parent in custody disputes (unless the chosen parent is unfit)',
		'Art. 213'
	],
	[
		'Over 21',
		'Minimum age requirement for the oldest brother/sister or actual custodian to exercise substitute parental authority in default of parents or a judicially appointed guardian',
		'Art. 216'
	],
	[
		'₱50,000 / at least 10%',
		'Market value of a child’s property or annual income above which parents must furnish a judicial bond, and the minimum percentage of that value the bond must cover',
		'Art. 225'
	],
	[
		'18 / 21',
		'Age of majority/emancipation, and the age threshold below which parental consent is required for marriage',
		'Arts. 234, 236'
	],
	[
		'2 years (5 with administrator)',
		'Period of absence without news before a person may be judicially declared an absentee (or if the absentee left an administrator in charge of their property)',
		'Civil Code, Art. 384'
	],
	[
		'6 months',
		'Waiting period after publication in a newspaper of general circulation before a judicial declaration of absence takes effect',
		'Civil Code, Art. 386'
	],
	[
		'7 years (10 for succession; 5 if over 75)',
		'Period of ordinary absence required before a person is presumed dead for general purposes (and special periods for opening succession, or if the absentee disappeared after age 75)',
		'Civil Code, Art. 390'
	],
	[
		'4 years',
		'Period of qualified absence (disappearance in danger of death) required before a person is presumed dead under the Civil Code',
		'Civil Code, Art. 391'
	],
	[
		'4 years (2 in danger cases)',
		'Period of continuous absence (and shortened period in danger-of-death cases) required before the present spouse may contract a subsequent marriage upon a judicial declaration of presumptive death',
		'Family Code, Art. 41'
	],
	[
		'Day and month (excluding the year)',
		'Specific components of a person’s date of birth that the city or municipal civil registrar may administratively correct under R.A. 10172',
		'R.A. 10172'
	]
];

// ---- Statutory Construction ----
const statconFixed: AnyNumberRow[] = [
	[
		'24 months',
		'Maximum period within which the Supreme Court must decide or resolve a case or matter, counted from the date of its submission',
		'Art. VIII, Sec. 15(1)'
	],
	[
		'12 months',
		'Maximum period within which lower collegiate courts (e.g., Court of Appeals, Sandiganbayan, CTA) must decide or resolve a case from submission, unless reduced by the Supreme Court',
		'Art. VIII, Sec. 15(1)'
	],
	[
		'3 months',
		'Maximum period within which all other lower courts (RTC, MTC, etc.) must decide or resolve a case from submission',
		'Art. VIII, Sec. 15(1)'
	],
	[
		'60 days',
		'Maximum period within which each Constitutional Commission must decide or resolve any case or matter brought before it, counted from the date of submission',
		'Art. IX-A, Sec. 7'
	],
	[
		'1899 · 1935 · 1943 · 1973 · 1986 · 1987',
		'Chronological years of the six Philippine constitutions (including the provisional Freedom Constitution)',
		'Ch. XI',
		'1899 (Malolos), 1935, 1943, 1973, 1986 (Provisional Freedom Constitution), 1987.'
	]
];

function statconCountPrompt(title: string): string {
	const cleaned = title.replace(/^(?:Two|The three)\s+/i, '');
	const lowered = cleaned.charAt(0).toLowerCase() + cleaned.slice(1);
	return `Number of ${lowered}`;
}

// ---- Criminal Law I ----
const crimTables: TopicGridTable[] = [
	{
		title: 'Duration of penalties · Art. 27',
		rows: [
			['Reclusion perpetua', '20 years 1 day – 40 years'],
			['Reclusion temporal', '12 years 1 day – 20 years'],
			['Prision mayor; temporary disqualification', '6 years 1 day – 12 years'],
			['Prision correccional; suspension; destierro', '6 months 1 day – 6 years'],
			['Arresto mayor', '1 month 1 day – 6 months'],
			['Arresto menor', '1 day – 30 days'],
			['Bond to keep the peace', 'As the court fixes']
		]
	},
	{
		title: 'Fines · Art. 26 (RA 10951)',
		rows: [
			['Afflictive', 'More than P1,200,000'],
			['Correctional', 'P40,000 to P1,200,000'],
			['Light', 'Less than P40,000'],
			['Light felony (Art. 9)', 'Arresto menor or fine not over P40,000']
		],
		note: 'Older amounts in some notes: over P6,000 / P200–P6,000 / under P200.'
	},
	{
		title: 'Periods of divisible penalties · Art. 76',
		head: ['Penalty', 'Minimum', 'Medium', 'Maximum'],
		rows: [
			['Reclusion temporal', '12y 1d – 14y 8m', '14y 8m 1d – 17y 4m', '17y 4m 1d – 20y'],
			['Prision mayor', '6y 1d – 8y', '8y 1d – 10y', '10y 1d – 12y'],
			['Prision correccional, destierro', '6m 1d – 2y 4m', '2y 4m 1d – 4y 2m', '4y 2m 1d – 6y'],
			['Arresto mayor', '1m 1d – 2m', '2m 1d – 4m', '4m 1d – 6m'],
			['Arresto menor', '1 – 10 days', '11 – 20 days', '21 – 30 days']
		]
	},
	{
		title: 'Degrees lower · Arts. 50–57',
		head: ['', 'Consummated', 'Frustrated', 'Attempted'],
		rows: [
			['Principal', '0', '1', '2'],
			['Accomplice', '1', '2', '3'],
			['Accessory', '2', '3', '4']
		],
		note: 'Scale No. 1: RP → RT → PM → PC → arresto mayor → destierro → arresto menor → public censure → fine.'
	},
	{
		title: 'Prescription · Arts. 90 and 92',
		head: ['Penalty', 'Of the crime', 'Of the penalty'],
		rows: [
			['Death, reclusion perpetua', '20 years', '20 years'],
			['Reclusion temporal', '20 years', '15 years'],
			['Other afflictive', '15 years', '15 years'],
			['Correctional', '10 years', '10 years'],
			['Arresto mayor', '5 years', '5 years'],
			['Libel and similar', '1 year', '—'],
			['Oral defamation, slander by deed', '6 months', '—'],
			['Light', '2 months', '1 year']
		]
	},
	{
		title: 'Good conduct time allowance · Art. 97',
		rows: [
			['Years 1–2', '20 days per month'],
			['Years 3–5', '23 days per month'],
			['Years 6–10', '25 days per month'],
			['Year 11 on', '30 days per month'],
			['Study, teaching, mentoring', '+15 days per month'],
			['STAL (Art. 98)', '1/5 if back within 48 hours; 2/5 if he stayed']
		]
	}
];

const crimOther: AnyNumberRow[] = [
	[
		'Full (with written agreement); 4/5 (without); deducted from 30 years for RP',
		'Credit for preventive imprisonment toward service of sentence (and baseline deduction when penalty is reclusion perpetua)',
		'Art. 29',
		'Recidivists and those who failed to surrender voluntarily when summoned get no preventive imprisonment credit.'
	],
	[
		'Max 1/3 of term (never > 1 year); fine only: 6 months (grave/less grave) or 15 days (light)',
		'Maximum duration of subsidiary imprisonment when the convict has no property to pay the fine',
		'Art. 39',
		'Covers only the fine, never civil indemnity or reparation; never imposed when the principal penalty is higher than prision correccional.'
	],
	[
		'3× the most severe penalty, max 40 years',
		'Maximum aggregate duration of service of multiple penalties under the Three-Fold Rule',
		'Art. 70'
	],
	[
		'Within 10 years; 3rd conviction; total cap 30 years',
		'Timeframe from last release/conviction, conviction count, and total sentence cap for habitual delinquency',
		'Art. 62(5)',
		'Applies to robbery, estafa, theft, serious/less serious physical injuries, and falsification (R-E-T-S-F-L).'
	],
	[
		'Over 18 months',
		'Minimum duration of prision correccional that carries perpetual special disqualification from the right of suffrage',
		'Art. 43'
	],
	[
		'Up to 6 months (grave/less grave) or 30 days (light)',
		'Maximum detention period when an offender fails to post a bond to keep the peace',
		'Art. 35'
	],
	[
		'25 km to 250 km radius',
		'Prohibited entry radius from the designated place under the penalty of destierro',
		'Art. 87'
	],
	[
		'Imposable term ≤ 6 years; probation period up to 2 years (term ≤ 1 yr) or 6 years (term > 1 yr)',
		'Maximum imposable sentence eligible for probation, and the maximum duration of the probation period',
		'P.D. 968 / R.A. 10707'
	],
	[
		'More than 1 year (excluded if max term ≤ 1 year)',
		'Minimum imposable maximum term required for the Indeterminate Sentence Law (ISLaw) to apply',
		'Act No. 4103, Sec. 2'
	],
	[
		'15 or below: exempt; >15 to <18: exempt unless with discernment; suspended sentence until age 21',
		'Minimum age of criminal responsibility, discernment age bracket, and maximum age of suspended sentence for children in conflict with the law',
		'R.A. 9344'
	]
];

const crim1NumbersConfig: SubjectNumbersConfig = {
	desc: 'Penalties, fines, periods & prescription',
	intro:
		'Every number to memorize in Arts. 16–113. Fines follow RA 10951 (2017). Switch to self-test, say the number, then tap it to check.',
	topicGrid: {
		clusterTitle: 'Clustered numbers (Arts. 16–113)',
		tables: crimTables,
		other: crimOther
	}
};

/**
 * Dynamically loads the Numbers configuration for a single subject slug on demand,
 * so heavy subject datasets (`crimpro-finals`, `crimpro.json`, `statcon.json`) are only downloaded when that subject's Numbers tab is opened.
 */
export async function loadNumbersForSubject(slug: string): Promise<SubjectNumbersConfig | undefined> {
	switch (slug) {
		case 'consti1':
			return {
				desc: 'Numbers to memorize (self-test)',
				intro: 'Every period, vote, age and count you may be asked for in this coverage. Hide the numbers, say each one, then tap to check.',
				sections: [{ rows: constiRows }]
			};
		case 'pfr':
			return {
				desc: 'Periods, amounts & ages to memorize',
				intro: 'Every period, amount and age to memorize in this coverage. Hide the numbers, say each one, then tap to check.',
				sections: [{ rows: pfrRows }]
			};
		case 'crimpro': {
			const [{ NUMBERS: CRIMPRO_NUMBERS }, { CRIMPRO_FINALS_TOPICS }] = await Promise.all([
				import('$lib/crimpro'),
				import('$lib/crimpro-finals')
			]);
			const crimproRows: AnyNumberRow[] = CRIMPRO_NUMBERS.map(([n, what, rule, note]) => {
				const src = /^\d/.test(rule) ? `Rule ${rule}` : rule;
				return note ? [n, what, src, note] : [n, what, src];
			});
			return {
				desc: 'Numbers & deadlines to memorize',
				intro: 'Hide the numbers and test yourself. Tap a blurred number to check it. Filter by rule range, toggle custom rules, or select ★ FINALS for the 5 Final Exam Notes topics.',
				sections: [{ rows: crimproRows, finalsTopics: CRIMPRO_FINALS_TOPICS }]
			};
		}
		case 'statcon': {
			const { STATCON } = await import('$lib/statcon');
			const statconCounts: AnyNumberRow[] = STATCON.enums
				.filter((e) => STATCON.focus.enums?.[e.id])
				.map((e) => [
					String(e.it.length),
					statconCountPrompt(e.t),
					`List ${e.id}`,
					STATCON.focus.enums![e.id]
				]);
			return {
				desc: 'Periods, dates & ★ list counts',
				intro: 'StatCon has few numbers. Learn the periods, then the count of each ★ Likely list: writing “There are four…” first gives you the slots to fill.',
				sections: [
					{ title: 'Periods and dates', rows: statconFixed },
					{ title: 'How many items? (★ Likely lists)', rows: statconCounts }
				]
			};
		}
		case 'crim1':
		case 'crim1_lloren':
			return crim1NumbersConfig;
		default:
			return undefined;
	}
}
