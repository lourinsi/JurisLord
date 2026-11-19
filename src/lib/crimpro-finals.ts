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
						'6 years (≤ 6 yrs: MTC; > 6 yrs: RTC)',
						'Imposable imprisonment threshold dividing exclusive original criminal jurisdiction between First-Level Courts (MTC/MeTC/MTCC/MCTC) and Regional Trial Courts (RTC)',
						'Rule 110; B.P. Blg. 129 / R.A. 11576',
						'Offenses punishable by imprisonment not exceeding 6 years fall under First-Level Courts; offenses punishable by more than 6 years fall under the RTC, regardless of the fine or accessory penalties.'
					],
					[
						'Salary Grade 27 (SG 27)',
						'Minimum salary grade threshold for public officers to fall under the exclusive original jurisdiction of the Sandiganbayan for offenses committed in relation to office',
						'Rule 110; P.D. 1606 / R.A. 10660',
						'Certain enumerated officials (e.g., provincial governors, city mayors, city/provincial prosecutors, PNP provincial directors) fall under Sandiganbayan jurisdiction regardless of Salary Grade.'
					],
					[
						'₱1,000,000.00',
						'Monetary threshold of government damage or bribe separating Sandiganbayan from RTC original jurisdiction (for SG 27+ officials), and principal tax/fees threshold for Court of Tax Appeals (CTA) exclusive original criminal jurisdiction',
						'Rule 110; R.A. 10660 / NIRC / R.A. 9282',
						'In graft/bribery cases where the official is SG 27+, government damage or bribe must exceed ₱1,000,000.00 for Sandiganbayan original jurisdiction (if ≤ ₱1,000,000.00 or unspecified, RTC has original jurisdiction and Sandiganbayan has appellate jurisdiction). For criminal tax/customs violations, principal taxes/fees claimed must be ≥ ₱1,000,000.00 for CTA exclusive original jurisdiction.'
					],
					[
						'Imprisonment ≤ 1 year, or Fine ≤ ₱50,000',
						'Maximum imposable criminal penalty threshold (imprisonment or fine) for general criminal offenses to be covered under Summary Procedure in First-Level Courts',
						'Rule 123; A.M. No. 08-8-7-SC'
					],
					[
						'₱150,000.00',
						'Maximum imposable fine limit for damage to property through criminal negligence under Article 365 of the RPC to be covered by Summary Procedure',
						'Rule 123; Art. 365, RPC; A.M. No. 08-8-7-SC'
					],
					[
						'1 year or ₱5,000.00 fine',
						'Maximum imposable penalty threshold (imprisonment or fine) under the Katarungang Pambarangay Law for offenses between neighbors in the same city or municipality requiring mandatory prior barangay conciliation as a condition precedent',
						'Rule 118; R.A. 7160',
						'Offenses punishable by 1 year or less or a fine of ₱5,000.00 or less between actual residents of the same city/municipality require prior Lupon conciliation, unless an exception applies (e.g., warrantless arrest/detention, where one party is the government, or offenses with no private offended party).'
					]
				]
			},
			{
				title: 'Prescriptive Periods (Commencement & Tolling)',
				rows: [
					[
						'Prosecutor filing (filing the complaint before the Office of the City or Provincial Prosecutor)',
						'Act that interrupts the prescriptive period for RPC felonies and special penal laws (General Tolling Rule)',
						'Rule 110, Sec. 1; People v. Consebido (En Banc, April 2, 2025)',
						'Prescription begins to run from the day of commission, or from discovery by the offended party, authorities, or their agents if concealed (Blameless Ignorance Doctrine, Art. 91, RPC / Sec. 2, Act No. 3326). Filing the complaint for preliminary investigation with the prosecutor tolls prescription for both RPC crimes and special penal laws.'
					],
					[
						'Direct court filing only (filing the Complaint or Information directly in court)',
						'Exclusive act that interrupts the prescriptive period for violations of City or Municipal Ordinances (Exception to the General Tolling Rule)',
						'Rule 110; Act No. 3326; Zaldivia v. Reyes; Jadewell v. Lidua',
						'Filing a complaint with the Prosecutor’s Office does NOT toll ordinance prescription; only judicial proceedings filed directly in court interrupt the 2-month prescriptive period.'
					],
					[
						'20 years',
						'Prescriptive period for RPC crimes punishable by death, reclusion perpetua, or reclusion temporal',
						'Rule 110; Art. 90, RPC'
					],
					[
						'20 years',
						'Prescriptive period for Treason penalized under Act No. 3326',
						'Rule 110; Act No. 3326'
					],
					[
						'15 years',
						'Prescriptive period for RPC crimes punishable by other afflictive penalties (prision mayor, perpetual or temporary disqualification)',
						'Rule 110; Art. 90, RPC'
					],
					[
						'15 years',
						'Prescriptive period for Cyberlibel under R.A. 10175 in relation to Article 90 of the RPC, counted from discovery',
						'Rule 110; R.A. 10175; Causing v. People',
						'Because Sec. 6 of R.A. 10175 raises the penalty one degree higher than traditional RPC libel (making it prision correccional in its maximum period to prision mayor in its minimum period, an afflictive penalty), Cyberlibel prescribes in 15 years rather than 1 year.'
					],
					[
						'12 years',
						'Prescriptive period for special penal law offenses punishable by imprisonment for 6 years or more',
						'Rule 110; Act No. 3326'
					],
					[
						'10 years',
						'Prescriptive period for RPC crimes punishable by correctional penalties (prision correccional, suspension, destierro), except arresto mayor and libel',
						'Rule 110; Art. 90, RPC'
					],
					[
						'8 years',
						'Prescriptive period for special penal law offenses punishable by imprisonment for 2 years or more but less than 6 years',
						'Rule 110; Act No. 3326'
					],
					[
						'5 years',
						'Prescriptive period for RPC crimes punishable by arresto mayor',
						'Rule 110; Art. 90, RPC'
					],
					[
						'4 years',
						'Prescriptive period for special penal law offenses punishable by imprisonment for more than 1 month but less than 2 years, including B.P. Blg. 22 (Bouncing Checks Law)',
						'Rule 110; Act No. 3326',
						'For B.P. Blg. 22, the 4-year period is counted from the lapse of 5 banking days from the drawer’s receipt of written notice of dishonor, and is interrupted by filing the complaint with the prosecutor (People v. Consebido).'
					],
					[
						'1 year',
						'Prescriptive period for traditional Libel and other similar offenses under Article 90 of the RPC',
						'Rule 110; Art. 90, RPC'
					],
					[
						'1 year',
						'Prescriptive period for special penal law offenses punishable only by a fine or by imprisonment for not more than 1 month, or both',
						'Rule 110; Act No. 3326'
					],
					[
						'6 months',
						'Prescriptive period for Oral Defamation (Slander) and Slander by Deed under Article 90 of the RPC',
						'Rule 110; Art. 90, RPC'
					],
					[
						'2 months',
						'Prescriptive period for Light Offenses under Article 90 of the RPC',
						'Rule 110; Art. 90, RPC',
						'Under jurisprudence (Yapdiangco v. Buencamino), the 2-month prescriptive period for light offenses is computed as 60 days.'
					],
					[
						'2 months',
						'Prescriptive period for violations of City or Municipal Ordinances under Act No. 3326',
						'Rule 110; Act No. 3326; Zaldivia v. Reyes',
						'THE CRITICAL EXEMPTION: Tolled ONLY by filing the complaint or Information directly in court per Zaldivia v. Reyes, NOT by filing with the Prosecutor’s Office.'
					]
				]
			},
			{
				title: 'Civil Liability & Provisional Remedies (Rule 111 & Rule 127)',
				rows: [
					[
						'Prior to prosecution presenting evidence',
						'Exclusive procedural window for the private offended party to make a timely reservation of the right to institute a separate civil action',
						'Rule 111, Sec. 1(a)',
						'Reservation is prohibited in B.P. Blg. 22 cases: the civil action for the face value of the check is mandatorily included in the criminal action.'
					],
					[
						'Arts. 32, 33, 34 & 2176, Civil Code (independent civil actions survive against the estate)',
						'Sources of civil obligation that survive against the estate or legal representative of the accused when death after arraignment or pending appeal extinguishes criminal and civil liability ex delicto',
						'Rule 111, Sec. 4; People v. Bayotas',
						'If the accused dies before final judgment, criminal liability and civil liability ex delicto (solely based on the crime under Art. 100, RPC) are extinguished, but independent civil actions predicated on law, contracts, quasi-contracts, and quasi-delicts (Arts. 32, 33, 34, and 2176) may proceed against the estate.'
					],
					[
						'Rule 57 (Preliminary Attachment)',
						'Rule of the 1997 Rules of Civil Procedure that governs the standards, grounds, and procedure for preliminary attachment as a provisional remedy in criminal cases',
						'Rule 127, Secs. 1–2',
						'Available only when the civil action is impliedly instituted with the criminal action (not waived, reserved, or independently instituted) and one of the specific grounds under Rule 127, Sec. 2 is present.'
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
						'Period counted from receipt of the warrant of arrest within which the head of the executing office must cause the warrant to be executed',
						'Rule 113, Sec. 4'
					],
					[
						'10 days after expiration',
						'Period counted after the expiration of the execution period within which the assigned officer must make a formal return/report to the issuing judge if the arrest warrant is executed or unexecuted',
						'Rule 113, Sec. 4',
						'Arrest warrants do NOT expire after 10 days; unlike search warrants, they remain valid indefinitely until served or lifted by the court.'
					],
					[
						'12 hours',
						'Maximum custodial detention period without judicial filing (delivery to judicial authorities) for warrantless arrests involving offenses punishable by light penalties or their equivalent',
						'Rule 112; Art. 125, RPC',
						'Counted by the hour from the start of detention (weekends and holidays do not stop the clock). Failure to deliver the suspect or file an Information in court within this period makes the officer liable for Arbitrary Detention under Art. 125, RPC.'
					],
					[
						'18 hours',
						'Maximum custodial detention period without judicial filing (delivery to judicial authorities) for warrantless arrests involving offenses punishable by correctional penalties or their equivalent',
						'Rule 112; Art. 125, RPC'
					],
					[
						'36 hours',
						'Maximum custodial detention period without judicial filing (delivery to judicial authorities) for warrantless arrests involving offenses punishable by afflictive or capital penalties, or their equivalent',
						'Rule 112; Art. 125, RPC'
					],
					[
						'14 calendar days (extendible by 10 calendar days)',
						'Maximum custodial detention period without judicial charge (and maximum additional extension) for suspects arrested under Section 29 of R.A. 11479 (Anti-Terrorism Act of 2020)',
						'Rule 112; R.A. 11479, Sec. 29',
						'Requires written authorization from the Anti-Terrorism Council (ATC) and immediate written notification to the nearest judge of the place of apprehension.'
					],
					[
						'15 calendar days',
						'Maximum period from inception within which a regular preliminary investigation must be terminated if an arrested person signs an Article 125 waiver in writing and with assistance of counsel',
						'Rule 112, Sec. 6',
						'An Art. 125 waiver is void unless executed in writing and signed by the detained suspect in the presence and with the assistance of counsel.'
					]
				]
			},
			{
				title: 'Search Warrants (Rule 126)',
				rows: [
					[
						'10 calendar days',
						'Statutory period of validity of a search warrant counted from its date of issuance',
						'Rule 126, Sec. 10',
						'Becomes functus officio and void on the 11th day from issuance; any search conducted thereafter is a warrantless search.'
					],
					[
						'Daytime',
						'Presumptive period of the day during which a search warrant must be served, unless expressly authorized in the warrant for a nighttime search',
						'Rule 126, Sec. 9',
						'A search warrant may be served at any time of the day or night only if the supporting affidavits positively assert that the property is on the person or in the place ordered to be searched, and the judge inserts an express nighttime direction in the warrant.'
					],
					[
						'4 constitutional requisites',
						'Number of mandatory constitutional and statutory requisites that must concur for the issuance of a valid search warrant',
						'Rule 126, Secs. 4–5; Const., Art. III, Sec. 2',
						'The 4 requisites: (1) Probable cause in connection with one specific offense; (2) Personally determined by the judge; (3) After examination under oath or affirmation, in searching questions and answers, of the complainant and the witnesses; (4) Particularly describing the place to be searched and the things to be seized.'
					]
				]
			},
			{
				title: 'Body-Worn Camera (BWC) Rules (A.M. No. 21-06-08-SC)',
				rows: [
					[
						'At least 2 devices (1 BWC + 1 ARD, or ≥ 2 ARDs)',
						'Mandatory minimum number and combination of recording devices required to be worn and activated by executing officers during the service of an arrest or search warrant',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'Prior court authorization (ARD)',
						'Mandatory judicial prerequisite before law enforcement officers may use Alternative Recording Devices (ARDs) when Body-Worn Cameras are unavailable during warrant execution',
						'A.M. No. 21-06-08-SC (BWC)',
						'For Arrest Warrants: Officers must file an ex parte motion for authority to use ARDs. For Search Warrants: Request to use ARDs must be stated in the search warrant application. On-the-spot malfunction: ARDs may be used immediately, but officers must submit an explanatory affidavit under oath with the return.'
					],
					[
						'720p',
						'Minimum video resolution required for an Alternative Recording Device (ARD) under the BWC Rules',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'30 frames per second (fps)',
						'Minimum standard video frame rate required for an Alternative Recording Device (ARD) under the BWC Rules',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'8 hours continuous',
						'Minimum continuous battery life required for an Alternative Recording Device (ARD) under the BWC Rules',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'8 hours continuous',
						'Minimum continuous audio-video storage capacity required for an Alternative Recording Device (ARD) under the BWC Rules',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'24 hours',
						'Period counted from the time of capture within which recorded BWC/ARD data must be downloaded by the designated Data Custodian to an external media storage device',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'5 calendar days',
						'Period counted from data downloading within which authorized persons (subject, counsel, spouse, or next of kin) may review and obtain a copy of the BWC/ARD recording, provided consent is given',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'15 calendar days',
						'Maximum period an executing officer may retain a backup copy of BWC/ARD recordings when allowed with leave of court',
						'A.M. No. 21-06-08-SC (BWC)'
					],
					[
						'30 calendar days',
						'Period under the BWC Rules within which the executing officer must file a report with the judge stating the reasons why an arrest warrant remained unexecuted',
						'A.M. No. 21-06-08-SC (BWC)'
					]
				]
			},
			{
				title: 'Cybercrime Warrants (A.M. No. 17-11-03-SC / R.A. 10175)',
				rows: [
					[
						'6 months',
						'Minimum period counted from the date of the transaction that service providers must preserve traffic data and subscriber information',
						'A.M. No. 17-11-03-SC; R.A. 10175, Sec. 13'
					],
					[
						'6 months',
						'Minimum period counted from receipt of a preservation order from law enforcement that service providers must preserve content data',
						'A.M. No. 17-11-03-SC; R.A. 10175, Sec. 13'
					],
					[
						'6 months (one-time extension)',
						'Maximum extension period that law enforcement authorities may order for the preservation of computer data',
						'A.M. No. 17-11-03-SC; R.A. 10175, Sec. 13'
					],
					[
						'10 calendar days',
						'Maximum initial validity period of any cybercrime warrant (WSSECD, WDCD, WICD, WECD) counted from its date of issuance',
						'A.M. No. 17-11-03-SC, Sec. 2.5'
					],
					[
						'10 calendar days',
						'Maximum one-time extension period grantable by the issuing cybercrime court for the validity of a cybercrime warrant upon motion for justifiable reasons',
						'A.M. No. 17-11-03-SC, Sec. 2.5'
					],
					[
						'72 hours',
						'Period counted from receipt of a Warrant to Disclose Computer Data (WDCD) within which a service provider or person must disclose or submit the required computer data',
						'A.M. No. 17-11-03-SC, Sec. 4.2'
					],
					[
						'48 hours',
						'Period counted from implementation or expiration of a Warrant to Disclose Computer Data (WDCD) within which law enforcement must submit a return to the issuing court',
						'A.M. No. 17-11-03-SC, Sec. 4.5'
					],
					[
						'48 hours',
						'Period counted from implementation of a WSSECD or WECD within which law enforcement must file an Initial Return with the issuing cybercrime court',
						'A.M. No. 17-11-03-SC, Sec. 6.5'
					],
					[
						'30 calendar days',
						'Period counted from implementation of a WSSECD or WECD within which law enforcement must file a Final Return with the issuing cybercrime court',
						'A.M. No. 17-11-03-SC, Sec. 6.7'
					],
					[
						'10 calendar days',
						'Period counted after a criminal action is instituted within which a motion must be filed for the deposit or custody of seized computer data with the trial court',
						'A.M. No. 17-11-03-SC, Sec. 7.2'
					],
					[
						'5 calendar days',
						'Period counted from filing within which the court must act on a motion for custody or deposit of seized digital data',
						'A.M. No. 17-11-03-SC, Sec. 7.2'
					],
					[
						'30 to 31 days',
						'Time window after deposit of seized digital data after which stored digital data must be returned or destroyed if no formal criminal case has been instituted',
						'A.M. No. 17-11-03-SC'
					],
					[
						'4 holes',
						'Mandatory physical destruction standard (number of holes drilled completely through magnetic hard drive platters) when the court orders destruction of seized computer data',
						'A.M. No. 17-11-03-SC, Sec. 8.3'
					],
					[
						'8 cities',
						'Number of special regional hub cities whose designated Cybercrime Courts possess authority to issue cybercrime warrants enforceable nationwide and outside Philippine territory',
						'A.M. No. 17-11-03-SC, Sec. 2.2',
						'The 8 regional hub cities: Quezon City, Manila, Makati City, Pasig City, Cebu City, Iloilo City, Davao City, and Cagayan de Oro City.'
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
						'Exceeding 6 years (6 years & 1 day or more)',
						'Imposable penalty threshold requiring a mandatory full Preliminary Investigation under DOJ Department Circular No. 15',
						'Rule 112, Sec. 1; DOJ DC 15 (2024)',
						'Supersedes the old 4 years, 2 months, and 1 day threshold. Quantum of evidence required: Prima Facie Case with Reasonable Certainty of Conviction (PFC+RCC).'
					],
					[
						'1 year & 1 day – 6 years',
						'Imposable penalty range threshold for Expedited Preliminary Investigation (EPI) under DOJ Department Circular No. 28',
						'Rule 112; DOJ DC 28 (2024)'
					],
					[
						'1 day – 1 year',
						'Imposable penalty range threshold for Summary Investigation (SI) by the prosecutor under DOJ Department Circular No. 28',
						'Rule 112; DOJ DC 28 (2024)'
					],
					[
						'10 calendar days',
						'Period counted from receipt of the subpoena and complaint within which the respondent must submit Counter-Affidavits in a preliminary investigation',
						'Rule 112, Sec. 3(b)',
						'A Motion to Dismiss is prohibited; if filed, it is treated as a counter-affidavit.'
					],
					[
						'10 days',
						'Maximum allowable extension period granted to a respondent to file a Counter-Affidavit, allowed only once and strictly in the interest of justice',
						'Rule 112, Sec. 3; DOJ DC 15'
					],
					[
						'10 calendar days',
						'Period counted from the filing of the Information within which the judge must personally evaluate the prosecutor’s resolution and supporting evidence to dismiss the case or issue a warrant of arrest or commitment order',
						'Rule 112, Sec. 5(a)',
						'A Commitment Order is issued if the accused is already detained (e.g., inquest); a Warrant of Arrest is issued if the accused is at large.'
					],
					[
						'5 calendar days',
						'Period counted from the court’s order within which the prosecutor must submit additional evidence if the judge is in doubt regarding probable cause',
						'Rule 112, Sec. 5(a)',
						'The entire judicial determination of probable cause must be resolved by the judge within 30 days from the filing of the Information.'
					]
				]
			},
			{
				title: 'Bail (Rule 114)',
				rows: [
					[
						'Matter of right (before/after MTC conviction; before RTC conviction of non-capital offense)',
						'Legal nature of bail (a) before or after conviction by First-Level Courts (MTC/MeTC/MTCC/MCTC), and (b) before conviction by the RTC of an offense not punishable by death, reclusion perpetua, or life imprisonment',
						'Rule 114, Sec. 4'
					],
					[
						'Matter of discretion (after RTC conviction of non-capital offense)',
						'Legal nature of bail upon conviction by the Regional Trial Court (RTC) of an offense not punishable by death, reclusion perpetua, or life imprisonment',
						'Rule 114, Sec. 5'
					],
					[
						'Exceeding 6 years',
						'Imposable penalty threshold upon RTC conviction where bail pending appeal becomes discretionary and must be denied or cancelled if any of the 5 bail-negating circumstances are present',
						'Rule 114, Sec. 5',
						'The 5 bail-negating circumstances: (1) Recidivism, quasi-recidivism, habitual delinquency, or reiteration; (2) Previous escape, evading sentence, or violation of bail conditions (bail jump) without justification; (3) Commission of the offense while under probation, parole, or conditional pardon; (4) Probability of flight; (5) Undue risk that the accused may commit another crime during the pendency of the appeal.'
					],
					[
						'50 percent',
						'Standard bail reduction percentage recommended for qualified indigent litigants under DOJ Department Circular No. 11 (2023)',
						'Rule 114; DOJ Circ. No. 11 (2023)'
					]
				]
			},
			{
				title: 'Amendment of Information (Rule 110, Sec. 14)',
				rows: [
					[
						'Before plea (as a matter of right, without leave of court)',
						'Procedural stage at which both formal and substantial amendments to the Complaint or Information may generally be made without leave of court',
						'Rule 110, Sec. 14',
						'Exception before plea: Any amendment that downgrades the nature of the offense charged or excludes any accused from the Complaint or Information requires a motion by the prosecutor, notice to the offended party, and leave of court.'
					],
					[
						'After plea (formal amendments only with leave of court and no prejudice; substantial prohibited)',
						'Procedural stage during which substantial amendments to the Information are strictly prohibited, and only formal amendments are permitted with leave of court and if it causes no prejudice to the rights of the accused',
						'Rule 110, Sec. 14'
					]
				]
			},
			{
				title: 'Motion to Quash & Provisional Dismissal (Rule 117)',
				rows: [
					[
						'Before plea (before entering a plea at arraignment)',
						'General procedural cutoff for the accused to move to quash the Complaint or Information, after which waivable grounds are deemed waived under the Omnibus Motion Rule',
						'Rule 117, Secs. 1, 9'
					],
					[
						'4 non-waivable grounds',
						'Number of specific grounds of a Motion to Quash that are not waived even if the accused fails to file a motion to quash before plea (may be raised at any stage of the proceedings)',
						'Rule 117, Sec. 9',
						'The 4 non-waivable grounds: (1) The facts charged do not constitute an offense; (2) Lack of jurisdiction over the offense charged; (3) Extinction of the offense or criminal liability; (4) Double jeopardy.'
					],
					[
						'1 year',
						'Time-bar period counted from issuance of the order of provisional dismissal after which the dismissal becomes permanent without revival, for offenses punishable by imprisonment not exceeding 6 years or a fine of any amount',
						'Rule 117, Sec. 8',
						'Requires the express consent of the accused and notice to the offended party.'
					],
					[
						'2 years',
						'Time-bar period counted from issuance of the order of provisional dismissal after which the dismissal becomes permanent without revival, for offenses punishable by imprisonment of more than 6 years',
						'Rule 117, Sec. 8'
					]
				]
			},
			{
				title: 'Arraignment & Pre-Trial (Rule 116 & Rule 118)',
				rows: [
					[
						'30 calendar days',
						'General period within which the court must arraign the accused (if not preventively detained), counted from the date the court acquires jurisdiction over the person of the accused',
						'Rule 116, Sec. 1(g)'
					],
					[
						'10 calendar days',
						'Shortened period within which the court must arraign the accused if preventively detained, counted from the clerk’s receipt of the raffled case records',
						'Rule 116, Sec. 1(e)'
					],
					[
						'15 calendar days',
						'Minimum period granted to the accused after entering a plea of not guilty to prepare for trial',
						'Rule 116, Sec. 1(e); Rule 119, Sec. 1'
					],
					[
						'60 calendar days',
						'Maximum allowable period of suspension of arraignment due to a pending Petition for Review with the DOJ or the Office of the President, counted from the filing of the petition with the reviewing office',
						'Rule 116, Sec. 11(c)',
						'Upon expiration of this period, the trial court must proceed with arraignment even if the DOJ or Office of the President has not yet resolved the petition.'
					],
					[
						'30 calendar days',
						'General period within which pre-trial must be held (if the accused is not preventively detained), counted after the court acquires jurisdiction over the person of the accused',
						'Rule 118, Sec. 1'
					],
					[
						'10 calendar days',
						'Shortened period within which pre-trial must be held if the accused is under preventive detention',
						'Rule 118, Sec. 1; Rule 116, Sec. 1(e)'
					],
					[
						'10 calendar days',
						'Period counted after the termination of the pre-trial conference within which the trial judge must issue the Pre-Trial Order',
						'Rule 118, Sec. 4'
					],
					[
						'Both accused & counsel (in writing and signed by both)',
						'Mandatory formal requirement for all agreements or admissions made or entered during the pre-trial conference to be admissible in evidence against the accused',
						'Rule 118, Sec. 2',
						'If a pre-trial agreement or admission is not reduced to writing and signed by BOTH the accused and defense counsel, it cannot be used against the accused.'
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
				title: 'Trial Timelines & Speedy Trial (Rule 115 & Rule 119)',
				rows: [
					[
						'15 calendar days',
						'Minimum preparation time for the accused after plea before trial starts',
						'Rule 119, Sec. 1'
					],
					[
						'30 calendar days',
						'Maximum period within which trial must commence, counted from receipt of the Pre-Trial Order',
						'Rule 119, Sec. 1'
					],
					[
						'30 calendar days',
						'Maximum excluded delay resulting from pre-trial proceedings in computing speedy trial time limits',
						'Rule 119, Sec. 3'
					],
					[
						'180 calendar days',
						'Maximum total duration of a regular trial, counted from the first day of trial',
						'Rule 119, Sec. 2'
					],
					[
						'60 calendar days',
						'Maximum total duration of trial conducted via the Judicial Affidavit Rule',
						'Rule 119; A.M. No. 12-8-8-SC'
					],
					[
						'More than 100 kilometers',
						'Distance of a defense witness’s residence from the place of trial that justifies their conditional examination before trial',
						'Rule 115; Rule 119, Sec. 12'
					],
					[
						'5 requisites',
						'Number of strict statutory conditions required under Rule 119, Section 17 to discharge an accused to be utilized as a State Witness',
						'Rule 119, Sec. 17',
						'The 5 requisites: (1) Absolute necessity for the testimony of the accused whose discharge is requested; (2) No other direct evidence available for the proper prosecution of the offense committed, except his testimony; (3) Testimony can be substantially corroborated in its material points; (4) Said accused does not appear to be the most guilty; and (5) Said accused has not at any time been convicted of any offense involving moral turpitude.'
					]
				]
			},
			{
				title: 'Demurrer to Evidence (Rule 119, Sec. 23)',
				rows: [
					[
						'5 calendar days',
						'Non-extendible period counted after the prosecution rests its case for the accused to file a Motion for Leave of Court to file Demurrer to Evidence',
						'Rule 119, Sec. 23'
					],
					[
						'5 calendar days',
						'Non-extendible period counted from receipt of the motion for leave for the prosecution to comment on or oppose the Motion for Leave to file Demurrer to Evidence',
						'Rule 119, Sec. 23'
					],
					[
						'10 calendar days',
						'Non-extendible period counted from notice of the order granting leave of court for the accused to file the actual Demurrer to Evidence',
						'Rule 119, Sec. 23'
					],
					[
						'10 calendar days',
						'Non-extendible period counted from receipt of the demurrer for the prosecution to file its opposition to the Demurrer to Evidence',
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
				title: 'Promulgation, Finality, Probation & New Trial (Rule 120 & Rule 121)',
				rows: [
					[
						'15 calendar days',
						'Period counted from promulgation of judgment after which a judgment of conviction becomes final and executory (absent a timely appeal, MNT/MR, probation application, waiver, or service of sentence)',
						'Rule 120, Sec. 7'
					],
					[
						'15 calendar days',
						'Period counted from promulgation/recording in the criminal docket within which an accused convicted in absentia must surrender and file a motion for leave of court to regain statutory remedies against the judgment',
						'Rule 120, Sec. 6'
					],
					[
						'15 calendar days',
						'Period counted from notice/promulgation of judgment (within the period for perfecting an appeal) within which an accused may apply for probation',
						'Rule 120, Sec. 7; P.D. 968',
						'Applying for probation waives the right to appeal.'
					],
					[
						'15 calendar days (R.A. 10707)',
						'Special window counted from notice/promulgation of the modified appellate judgment allowing an accused to apply for probation if an appellate court modifies a non-probationable sentence into a probationable penalty',
						'Rule 120; R.A. 10707'
					],
					[
						'Exceeding 6 years',
						'Imposable imprisonment penalty threshold that disqualifies an offender from probation under P.D. 968 / R.A. 10707',
						'Rule 120; P.D. 968 / R.A. 10707'
					],
					[
						'15 calendar days',
						'Period counted from promulgation of a judgment of conviction (before it becomes final) within which the accused must file a Motion for New Trial or Motion for Reconsideration',
						'Rule 121, Sec. 1',
						'Exclusively available to the accused; the prosecution cannot move for reconsideration or new trial of an acquittal due to double jeopardy.'
					],
					[
						'Fresh 15 days',
						'New period to file an appeal granted under the Neypes / Judith Yu v. Samson-Tatad rule, counted from receipt of the order denying a timely Motion for New Trial or Motion for Reconsideration',
						'Rule 121; Rule 122, Sec. 6; Neypes; Yu v. Samson-Tatad',
						'Pro forma motions do not toll the appeal period and do not trigger a fresh period.'
					]
				]
			},
			{
				title: 'Appeals & Appellate Procedure (Rules 122, 123, 124, 125)',
				rows: [
					[
						'15 calendar days',
						'Standard reglementary period counted from promulgation or notice of judgment (or from notice of denial of MNT/MR) to file a Notice of Appeal (MTC to RTC under Rule 40; RTC original to CA under Rule 41)',
						'Rule 122, Sec. 6'
					],
					[
						'15 calendar days',
						'Reglementary period counted from notice of the decision (or denial of MNT/MR) to file a Petition for Review from the RTC’s appellate decision to the Court of Appeals (Rule 42)',
						'Rule 122, Sec. 3(b); Rule 42, Sec. 1'
					],
					[
						'15 calendar days',
						'Extension period grantable by the Court of Appeals under Rule 42 upon proper motion and payment of docket fees before expiration of the reglementary period',
						'Rule 122; Rule 42, Sec. 1',
						'Further extendible only for the most compelling reason by a maximum of another 15 days (30 days maximum total extension).'
					],
					[
						'15 calendar days',
						'Reglementary period counted from notice of judgment or final order (or denial of MNT/MR) to file an Appeal by Certiorari on pure questions of law with the Supreme Court (Rule 45)',
						'Rule 122, Sec. 3(e); Rule 45, Sec. 2'
					],
					[
						'30 calendar days',
						'Maximum extension period granted by the Supreme Court for justifiable reasons upon motion and payment of fees for filing a Rule 45 petition',
						'Rule 122; Rule 45, Sec. 2'
					],
					[
						'15 calendar days',
						'Reglementary period counted from notice of judgment to appeal a Court of Appeals judgment imposing reclusion perpetua or life imprisonment to the Supreme Court via Notice of Appeal',
						'Rule 124, Sec. 13(c)'
					],
					[
						'5 calendar days',
						'Period counted after perfection of the appeal within which the Clerk of Court of the trial court must transmit the complete records and TSNs to the appellate court',
						'Rule 122, Sec. 8'
					],
					[
						'15 calendar days',
						'Period counted from receipt of notice from the RTC clerk of court for the appellant to submit an Appeal Memorandum to the RTC under Rule 122, Section 9',
						'Rule 122, Sec. 9(c)',
						'Failure to file an appeal memorandum is NOT a ground for dismissal in criminal appeals, unlike in civil cases (Sanico v. People).'
					],
					[
						'15 calendar days',
						'Period counted from receipt of the appellant’s memorandum (or expiration of the period to file it) for the appellee to submit a Counter-Memorandum to the RTC under Rule 122, Section 9',
						'Rule 122, Sec. 9(c)'
					],
					[
						'10 calendar days',
						'Period counted from notice of the CA’s resolution under People v. Olpindo (2022) for an accused to file a manifestation adopting an erroneous motu proprio elevation as a timely Notice of Appeal',
						'Rule 122; People v. Olpindo (En Banc, 2022)'
					],
					[
						'10 calendar days',
						'Period counted from receipt of summons under the Rules on Summary Procedure for the defendant to file counter-affidavits and judicial affidavits',
						'Rule 123; A.M. No. 08-8-7-SC'
					],
					[
						'30 calendar days',
						'Period counted following receipt of the affidavits under the Rules on Summary Procedure within which the preliminary conference must be held',
						'Rule 123; A.M. No. 08-8-7-SC'
					],
					[
						'30 calendar days',
						'Period counted following the termination of the preliminary conference (or trial) under the Rules on Summary Procedure within which the first-level court must render judgment',
						'Rule 123; A.M. No. 08-8-7-SC'
					],
					[
						'3 Justices',
						'Quorum of a regular Division in the Court of Appeals, and the unanimous vote required for a Division to pronounce a judgment',
						'Rule 124, Sec. 11'
					],
					[
						'5 Justices',
						'Composition of the Special Division of the Court of Appeals convened when unanimity in a regular Division is not reached',
						'Rule 124, Sec. 11',
						'A majority vote of 3 Justices in the Special Division of 5 is needed to decide the case.'
					],
					[
						'30 calendar days',
						'Period counted from receipt of notice from the CA clerk that the records are complete within which the appellant must file the Appellant’s Brief in the Court of Appeals',
						'Rule 124, Sec. 3'
					],
					[
						'30 calendar days',
						'Period counted from receipt of the Appellant’s Brief within which the appellee must file the Appellee’s Brief in the Court of Appeals',
						'Rule 124, Sec. 4'
					],
					[
						'20 calendar days',
						'Period counted from receipt of the Appellee’s Brief within which the appellant may file a Reply Brief in the Court of Appeals',
						'Rule 124, Sec. 4'
					],
					[
						'45 calendar days',
						'Maximum cumulative extension of time permitted for filing briefs in the Court of Appeals',
						'Rule 124, Sec. 5'
					],
					[
						'15 calendar days',
						'Period counted from notice of the decision or final resolution within which to file a Motion for Reconsideration in the Court of Appeals',
						'Rule 124, Sec. 16'
					],
					[
						'15 Justices',
						'Total constitutional membership of the Supreme Court (1 Chief Justice and 14 Associate Justices)',
						'Rule 125; Const., Art. VIII, Sec. 4(1)'
					],
					[
						'3 Divisions',
						'Number of operating divisions of the Supreme Court when sitting in Divisions',
						'Rule 125; Const., Art. VIII, Sec. 4(1)',
						'Each Supreme Court Division consists of 5 Justices.'
					],
					[
						'3 Justices',
						'Quorum of a Supreme Court Division, and the minimum number of concurring votes required in a Division to pronounce a judgment',
						'Rule 125; Const., Art. VIII, Sec. 4(3)'
					],
					[
						'8 Justices',
						'Quorum required for Supreme Court En Banc sessions',
						'Rule 125, Sec. 3',
						'Mandatory Acquittal on Tie Vote: If the Supreme Court En Banc is equally divided in opinion (a tie vote) after re-deliberation on a criminal appeal, the conviction is reversed and the accused is acquitted under the equipoise rule.'
					]
				]
			}
		]
	}
];
