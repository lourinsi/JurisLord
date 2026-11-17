import type { AnyNumberRow } from './cluster-numbers';

export interface FinalsSubtopic {
	title: string;
	rows: AnyNumberRow[];
}

export interface FinalsTopic {
	id: string;
	num: number;
	title: string;
	shortTitle: string;
	subtopics: FinalsSubtopic[];
}

export const CRIMPRO_FINALS_TOPICS: FinalsTopic[] = [
	{
		id: 'topic-1',
		num: 1,
		title: '1. Jurisdiction, Prescription & Civil Liability',
		shortTitle: '1. Jurisdiction & Prescription',
		subtopics: [
			{
				title: 'Jurisdiction Thresholds',
				rows: [
					[
						'6 years (≤ 6y vs > 6y)',
						'Major dividing line between First-Level Courts and Regional Trial Courts: ≤ 6 years is exclusive original jurisdiction of First-Level Courts (MTC / MeTC / MTCC / MCTC); > 6 years is exclusive original jurisdiction of the RTC',
						'B.P. Blg. 129 / R.A. 11576'
					],
					[
						'Salary Grade 27 (SG 27)',
						'Threshold for public officers covered under the original jurisdiction of the Sandiganbayan (in relation to office)',
						'P.D. 1606 / R.A. 10660'
					],
					[
						'₱1,000,000.00',
						'Damage/bribe threshold under R.A. 10660 & tax/customs threshold for CTA',
						'R.A. 10660 / NIRC / R.A. 9282',
						'In graft/bribery/plunder cases where official is SG 27+, damage must exceed ₱1,000,000.00 for Sandiganbayan jurisdiction (if ≤ ₱1,000,000.00, it goes to the RTC). For criminal tax/customs violations, principal taxes/fees claimed must be ≥ ₱1,000,000.00 for CTA exclusive original jurisdiction.'
					],
					[
						'₱150,000.00',
						'Maximum fine limit for damage to property through criminal negligence under Art. 365 of the RPC covered by Summary Procedure',
						'Rule 123; Art. 365, RPC'
					],
					[
						'1 year or ₱5,000.00 fine',
						'Statutory threshold for Katarungang Pambarangay; offenses punishable by ≤ 1 year or fine ≤ ₱5,000 between neighbors require mandatory barangay conciliation as a condition precedent',
						'R.A. 7160'
					]
				]
			},
			{
				title: 'Prescriptive Periods (Commencement & Tolling)',
				rows: [
					[
						'Prosecutor filing',
						'General Tolling Rule: Prescription is interrupted by filing the complaint before the Office of the City or Provincial Prosecutor',
						'Rule 110; People v. Consebido (En Banc, April 2, 2025)'
					],
					[
						'2 months',
						'Prescription of violations of City or Municipal Ordinances',
						'Act No. 3326',
						'THE CRITICAL EXEMPTION: Filing with the Prosecutor’s Office does NOT toll ordinance prescription. It is interrupted ONLY by filing directly in COURT (Zaldivia v. Reyes; Jadewell v. Lidua).'
					],
					[
						'2 months',
						'Prescription of Light Offenses',
						'Art. 90, RPC'
					],
					[
						'6 months',
						'Prescription of Oral Defamation (Slander) and Slander by Deed',
						'Art. 90, RPC'
					],
					[
						'1 year',
						'Prescription of Traditional Libel (Art. 90, RPC) and special law offenses punishable only by fine or up to 1 month imprisonment (Act No. 3326)',
						'Art. 90, RPC / Act No. 3326'
					],
					[
						'4 years',
						'Prescription of special law offenses punishable by > 1 month to < 2 years—this includes B.P. Blg. 22 (Bouncing Checks Law)',
						'Act No. 3326'
					],
					[
						'5 years',
						'Prescription of crimes punishable by arresto mayor',
						'Art. 90, RPC'
					],
					[
						'8 years',
						'Prescription of special law offenses punishable by 2 years to < 6 years',
						'Act No. 3326'
					],
					[
						'10 years',
						'Prescription of crimes punishable by correctional penalties, except arresto mayor and libel',
						'Art. 90, RPC'
					],
					[
						'12 years',
						'Prescription of special law offenses punishable by 6 years or more',
						'Act No. 3326'
					],
					[
						'15 years',
						'Prescription of crimes punishable by other afflictive penalties',
						'Art. 90, RPC'
					],
					[
						'15 years',
						'Prescription of Cyberlibel under R.A. 10175 in relation to Art. 90, RPC',
						'R.A. 10175; Causing v. People'
					],
					[
						'20 years',
						'Prescription of crimes punishable by death, reclusion perpetua, or reclusion temporal (Art. 90, RPC); and Treason under Act No. 3326',
						'Art. 90, RPC / Act No. 3326'
					]
				]
			},
			{
				title: 'Civil Liability Rules',
				rows: [
					[
						'Before prosecution presents evidence',
						'Exclusive window for the private offended party to make a reservation to file an independent civil action',
						'Rule 111, Sec. 1',
						'Prohibited in B.P. 22: The civil action for the face value of the check is mandatorily instituted; no reservation is allowed.'
					],
					[
						'Arts. 32, 33, 34, 2176',
						'Effect of Death: If the accused dies after arraignment or pending appeal, civil liability ex delicto is extinguished, but independent civil actions survive against the estate',
						'Rule 111; People v. Bayotas'
					]
				]
			}
		]
	},
	{
		id: 'topic-2',
		num: 2,
		title: '2. Arrests, Searches & Warrants',
		shortTitle: '2. Arrests, Searches & Warrants',
		subtopics: [
			{
				title: 'Arrest Warrants & Article 125 RPC Custodial Detention',
				rows: [
					[
						'10 days from receipt',
						'Statutory period for the head of office to cause a warrant of arrest to be executed',
						'Rule 113, Sec. 4'
					],
					[
						'10 days after expiration',
						'Period for the executing officer to file a formal return to the issuing judge explaining why the arrest warrant was or was not executed',
						'Rule 113, Sec. 4',
						'Arrest warrants do NOT expire after 10 days; they remain valid indefinitely until served or recalled.'
					],
					[
						'12 hours',
						'Maximum detention without judicial charge for light offenses',
						'Art. 125, RPC'
					],
					[
						'18 hours',
						'Maximum detention without judicial charge for correctional offenses',
						'Art. 125, RPC'
					],
					[
						'36 hours',
						'Maximum detention without judicial charge for afflictive or capital offenses',
						'Art. 125, RPC'
					],
					[
						'14 calendar days (+10 days)',
						'Maximum detention period for suspects under Section 29 of the Anti-Terrorism Act (extendible by 10 calendar days)',
						'R.A. 11479, Sec. 29'
					],
					[
						'15 calendar days',
						'Maximum period within which a regular preliminary investigation must be completed if an arrested suspect signs an Article 125 waiver with assistance of counsel',
						'Rule 112, Sec. 6'
					]
				]
			},
			{
				title: 'Search Warrants (Rule 126)',
				rows: [
					[
						'10 calendar days',
						'Statutory validity period of a search warrant from issuance',
						'Rule 126, Sec. 10',
						'On the 11th day, it becomes functus officio and void.'
					],
					[
						'Daytime',
						'Presumptive period during which a search warrant must be served, unless expressly authorized in the warrant for nighttime search',
						'Rule 126, Sec. 9'
					],
					[
						'4 constitutional requisites',
						'(1) Probable cause; (2) Personally determined by the judge; (3) After examination under oath of complainant and witnesses; (4) Particularly describing the place to be searched and things to be seized',
						'Rule 126, Secs. 4–5'
					]
				]
			},
			{
				title: 'Body-Worn Camera (BWC) Rules (A.M. No. 21-06-08-SC)',
				rows: [
					[
						'At least 2 devices',
						'Mandatory minimum number of recording devices required during warrant execution (1 BWC and 1 ARD, or at least 2 ARDs if BWCs are unavailable)',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'Court authorization (ARD)',
						'Required authorization before using Alternative Recording Devices (ARDs)',
						'A.M. No. 21-06-08-SC (BWC)',
						'For Arrest Warrants: Officers must file an ex parte motion for authority to use ARDs. For Search Warrants: Request to use ARDs must be stated in the search warrant application. On-the-spot malfunction: ARDs can be used immediately, but officers must submit an explanatory affidavit under oath with the return.'
					],
					[
						'720p / 30 fps',
						'Minimum video resolution and frame rate for an Alternative Recording Device (ARD)',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'8 hours continuous',
						'Minimum battery life and audio-video storage capacity for an ARD',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'24 hours',
						'Period within which recorded BWC/ARD data must be downloaded by the Data Custodian',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'5 calendar days',
						'Window from downloading for authorized persons (accused, counsel, next of kin) to obtain a copy with consent',
						'A.M. No. 21-06-08-SC (BWC)'
					]
				]
			},
			{
				title: 'Cybercrime Warrants (A.M. No. 17-11-03-SC / R.A. 10175)',
				rows: [
					[
						'10 calendar days',
						'Validity of all cybercrime warrants (WSSECD, WDCD, WICD, WECD) from issuance (extendible once for another 10 days)',
						'A.M. No. 17-11-03-SC'
					],
					[
						'72 hours',
						'Compliance period to disclose computer data under a Warrant to Disclose Computer Data (WDCD)',
						'A.M. No. 17-11-03-SC'
					],
					[
						'48 hours',
						'Time to file the Initial Return from implementation of WSSECD, WECD, or WDCD',
						'A.M. No. 17-11-03-SC'
					],
					[
						'30 calendar days',
						'Time to file the Final Return on WSSECD or WECD',
						'A.M. No. 17-11-03-SC'
					],
					[
						'6 months',
						'Minimum period service providers must preserve traffic data and subscriber information (extendible once for 6 months)',
						'A.M. No. 17-11-03-SC / R.A. 10175'
					],
					[
						'30 to 31 days',
						'Time limit after which stored seized digital data must be returned or destroyed if no criminal case is filed',
						'A.M. No. 17-11-03-SC'
					],
					[
						'4 holes',
						'Physical destruction standard requiring four holes drilled through magnetic hard drive platters',
						'A.M. No. 17-11-03-SC'
					],
					[
						'8 regional hub cities',
						'Special cities whose designated Cybercrime Executive Judges can issue nationwide cybercrime warrants',
						'A.M. No. 17-11-03-SC',
						'Quezon City, Manila, Makati City, Pasig City, Cebu City, Iloilo City, Davao City, and Cagayan de Oro City.'
					]
				]
			}
		]
	},
	{
		id: 'topic-3',
		num: 3,
		title: '3. Pre-Trial Proceedings & Bail',
		shortTitle: '3. Pre-Trial & Bail',
		subtopics: [
			{
				title: 'Preliminary Investigation Thresholds (DOJ DC 15 & DC 28)',
				rows: [
					[
						'Exceeding 6 years (6y 1d+)',
						'Threshold requiring mandatory full Preliminary Investigation under DOJ Department Circular No. 15',
						'Rule 112; DOJ DC 15',
						'Quantum: Prima Facie Case with Reasonable Certainty of Conviction (PFC+RCC).'
					],
					[
						'1 year 1 day – 6 years',
						'Threshold for Expedited Preliminary Investigation (EPI)',
						'Rule 112; DOJ DC 28'
					],
					[
						'1 day – 1 year',
						'Threshold for Summary Investigation (SI)',
						'Rule 112; DOJ DC 28'
					],
					[
						'10 calendar days',
						'Period for respondent to submit Counter-Affidavits from receipt of subpoena (extendible once by a maximum of 10 days)',
						'Rule 112, Sec. 3'
					],
					[
						'10 calendar days',
						'Judge’s duty from filing of the Information to personally evaluate the record and issue an arrest warrant or commitment order',
						'Rule 112, Sec. 5'
					],
					[
						'5 calendar days',
						'Period for prosecutor to submit additional evidence if the judge has doubt on probable cause',
						'Rule 112, Sec. 5'
					]
				]
			},
			{
				title: 'Bail (Rule 114)',
				rows: [
					[
						'Matter of right',
						'Before or after conviction by First-Level Courts (MTC/MeTC/MTCC/MCTC); and before conviction by the RTC for offenses not punishable by death, reclusion perpetua, or life imprisonment',
						'Rule 114, Sec. 4'
					],
					[
						'Matter of discretion',
						'After conviction by the RTC of an offense not punishable by death, reclusion perpetua, or life imprisonment',
						'Rule 114, Sec. 5'
					],
					[
						'Exceeding 6 years',
						'Threshold where bail pending appeal from RTC conviction is denied if any of the 5 bail-negating circumstances exist',
						'Rule 114, Sec. 5',
						'5 bail-negating circumstances: (1) Recidivism/habituality, (2) escape, (3) offense committed while on probation/parole, (4) flight risk, (5) undue risk of another crime.'
					],
					[
						'50 percent',
						'Standard bail reduction recommended for qualified indigent litigants',
						'Rule 114; DOJ Circ. No. 11 (2023)'
					]
				]
			},
			{
				title: 'Amendment of Information (Rule 110, Sec. 14)',
				rows: [
					[
						'Before plea',
						'Formal or substantial amendments are allowed as a matter of right without leave of court',
						'Rule 110, Sec. 14',
						'Exception: Requires leave of court + notice to offended party if it downgrades the offense or excludes an accused.'
					],
					[
						'After plea',
						'Formal amendments are allowed only with leave of court and if it causes no prejudice to the accused; Substantial amendments are strictly prohibited',
						'Rule 110, Sec. 14'
					]
				]
			},
			{
				title: 'Motion to Quash & Provisional Dismissal (Rule 117)',
				rows: [
					[
						'Before plea',
						'General rule on when a Motion to Quash must be filed; failure to file operates as a waiver under the Omnibus Motion Rule',
						'Rule 117, Secs. 1, 9'
					],
					[
						'4 non-waivable grounds',
						'Can be raised at ANY stage of the proceedings: (1) Facts charged do not constitute an offense; (2) Lack of jurisdiction over the offense charged; (3) Extinction of the offense or criminal liability; (4) Double jeopardy',
						'Rule 117, Sec. 9'
					],
					[
						'1 year',
						'Time-bar for provisional dismissal of offenses punishable by imprisonment not exceeding 6 years or a fine of any amount (becomes permanent after 1 year without revival)',
						'Rule 117, Sec. 8'
					],
					[
						'2 years',
						'Time-bar for provisional dismissal of offenses punishable by imprisonment of more than 6 years (becomes permanent after 2 years without revival)',
						'Rule 117, Sec. 8'
					]
				]
			},
			{
				title: 'Arraignment & Pre-Trial (Rule 116 & Rule 118)',
				rows: [
					[
						'30 calendar days (10 if detained)',
						'Period within which the court must arraign the accused from acquiring jurisdiction (shortened to 10 calendar days if preventively detained)',
						'Rule 116, Sec. 1(e), (g)'
					],
					[
						'15 calendar days',
						'Minimum period granted to the accused after plea to prepare for trial',
						'Rule 116, Sec. 1(e); Rule 119, Sec. 1'
					],
					[
						'60 calendar days',
						'Maximum suspension of arraignment due to a pending Petition for Review with the DOJ',
						'Rule 116, Sec. 11(c)'
					],
					[
						'30 calendar days (10 if detained)',
						'Period within which pre-trial must be held from acquiring jurisdiction (shortened to 10 calendar days if preventively detained)',
						'Rule 118, Sec. 1'
					],
					[
						'10 calendar days',
						'Period for the judge to issue the Pre-Trial Order after termination of the pre-trial conference',
						'Rule 118, Sec. 4'
					],
					[
						'Both accused & counsel',
						'Written & Signed Requirement: Pre-trial agreements and admissions must be in writing and signed by both accused AND counsel; otherwise, they cannot be used in evidence against the accused',
						'Rule 118, Sec. 2'
					]
				]
			}
		]
	},
	{
		id: 'topic-4',
		num: 4,
		title: '4. Trial, Evidence & Demurrer',
		shortTitle: '4. Trial & Demurrer',
		subtopics: [
			{
				title: 'Trial Timelines & Speedy Trial (Rule 119)',
				rows: [
					[
						'30 calendar days',
						'Trial must commence within 30 days from receipt of the Pre-Trial Order',
						'Rule 119, Sec. 1'
					],
					[
						'30 calendar days',
						'Maximum excluded delay resulting from pre-trial proceedings in speedy trial computations',
						'Rule 119, Sec. 3'
					],
					[
						'180 calendar days',
						'Maximum total duration of regular trial from the first day of trial',
						'Rule 119, Sec. 2'
					],
					[
						'60 calendar days',
						'Maximum trial duration if proceeding under the Judicial Affidavit Rule',
						'Rule 119; A.M. No. 12-8-8-SC'
					],
					[
						'More than 100 km',
						'Distance of a defense witness’s residence from the court justifying conditional examination before trial',
						'Rule 119, Sec. 12'
					],
					[
						'5 strict requisites',
						'Discharge as State Witness: (1) Absolute necessity of the testimony; (2) No other direct evidence available; (3) Testimony can be substantially corroborated; (4) Accused does not appear to be the most guilty; (5) Never convicted of an offense involving moral turpitude',
						'Rule 119, Sec. 17'
					]
				]
			},
			{
				title: 'Demurrer to Evidence (Rule 119, Sec. 23)',
				rows: [
					[
						'5 calendar days',
						'Period after prosecution rests for the accused to file a Motion for Leave of Court to file Demurrer to Evidence (prosecution has 5 days to oppose)',
						'Rule 119, Sec. 23'
					],
					[
						'10 calendar days',
						'Period for the accused to file the Demurrer to Evidence from notice granting leave (prosecution has 10 days to oppose)',
						'Rule 119, Sec. 23'
					],
					[
						'30 calendar days',
						'Period within which the trial court must resolve the Demurrer to Evidence',
						'Rule 119, Sec. 23',
						'The Leave Trap: With Leave (Denied) → accused presents defense evidence. Without Leave (Denied) → accused unconditionally waives the right to present evidence and submits the case for judgment (GMA v. People). Granted (With or Without Leave) → immediate acquittal, double jeopardy attaches, State cannot appeal.'
					]
				]
			}
		]
	},
	{
		id: 'topic-5',
		num: 5,
		title: '5. Judgment & Post-Judgment Remedies',
		shortTitle: '5. Judgment & Appeals',
		subtopics: [
			{
				title: 'Promulgation & Finality (Rule 120 & Rule 121)',
				rows: [
					[
						'15 calendar days',
						'Period within which a judgment of conviction becomes final and executory',
						'Rule 120, Sec. 7'
					],
					[
						'15 calendar days',
						'Period to file a Motion for New Trial or Motion for Reconsideration',
						'Rule 121, Sec. 1',
						'Exclusively available to the accused; the prosecution cannot move for reconsideration of an acquittal due to double jeopardy.'
					],
					[
						'Fresh 15 days',
						'Neypes / Judith Yu Doctrine: Denial of a motion for new trial or reconsideration grants a fresh 15-day period to file an appeal',
						'Rule 121; Neypes; Yu v. Samson-Tatad'
					],
					[
						'15 calendar days',
						'Window from promulgation for an accused convicted in absentia to surrender and show justifiable cause to regain statutory remedies against the judgment',
						'Rule 120, Sec. 6'
					],
					[
						'15 calendar days',
						'Window to apply for probation (applying for probation waives the right to appeal)',
						'Rule 120; P.D. 968'
					],
					[
						'15 calendar days (R.A. 10707)',
						'Special window allowing an accused to apply for probation if an appellate court modifies a non-probationable sentence (> 6 yrs) into a probationable penalty (≤ 6 yrs)',
						'Rule 120; R.A. 10707'
					],
					[
						'Exceeding 6 years',
						'Imposable sentence that strictly disqualifies an offender from probation',
						'P.D. 968 / R.A. 10707'
					]
				]
			},
			{
				title: 'Appeals (Rule 122, Rule 124, Rule 125)',
				rows: [
					[
						'15 calendar days',
						'Universal reglementary period to file all standard appeals (Rule 40 MTC→RTC; Rule 41 RTC→CA; Rule 42 Petition for Review; Rule 45 Certiorari to SC; Rule 124 Sec. 13[c] CA→SC for RP/Life)',
						'Rules 40, 41, 42, 45, 122, 124'
					],
					[
						'5 calendar days',
						'Period for Clerk of Court to transmit complete trial records and TSNs to the appellate court after perfection of appeal',
						'Rule 122, Sec. 8'
					],
					[
						'10 calendar days',
						'Period under People v. Olpindo (En Banc, 2022) for an accused to file a manifestation adopting an erroneous motu proprio elevation as a timely Notice of Appeal',
						'Rule 122; People v. Olpindo'
					],
					[
						'15 calendar days',
						'Period to submit the Appeal Memorandum to the RTC under Rule 122, Sec. 9',
						'Rule 122, Sec. 9',
						'Failure to file an appeal memorandum is NOT a ground for dismissal in criminal appeals, unlike in civil cases (Sanico v. People).'
					],
					[
						'30 / 30 / 20 calendar days',
						'CA Briefs: 30 days for Appellant’s Brief; 30 days for Appellee’s Brief; 20 calendar days for Reply Brief',
						'Rule 124, Secs. 3–4'
					],
					[
						'30 calendar days',
						'Maximum extension period granted by the CA under Rule 42 (15 days initial + 15 days compelling) or by the Supreme Court under Rule 45',
						'Rules 42, 45'
					],
					[
						'3 Justices / 5 Justices',
						'Court of Appeals Division quorum and voting: Quorum of 3 and unanimous vote of 3 required; if no unanimity, Special Division of 5 where majority vote of 3 decides',
						'Rule 124, Sec. 11'
					],
					[
						'8 Justices',
						'Quorum required for Supreme Court En Banc sessions',
						'Rule 125',
						'Mandatory Acquittal on Tie: If the Supreme Court En Banc is equally divided in opinion (a tie vote) after re-deliberation, the conviction is reversed and the accused is acquitted under the equipoise rule.'
					]
				]
			}
		]
	}
];
