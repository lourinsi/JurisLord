export interface RequisiteItem {
	num: number;
	/** Standalone question / legal trigger displayed in the "What it is for" column. */
	question: string;
	/**
	 * Answer shown in the "Requisites" column.
	 * - Single item (`items.length === 1`): renders as a concise 1-word / short-phrase answer.
	 * - Multiple items (`items.length > 1`): renders as a numbered enumeration (1., 2., 3., ...).
	 */
	answers: string[];
	/** Optional callout label in "What it is for" (e.g. "Fatal Flaw", "Effect", "Ceiling"). */
	noteLabel?: string;
	/** Detailed explanation/caveat displayed under "What it is for" — hidden while blurred in self-test mode. */
	note?: string;
	source: string;
}

export interface RequisiteTopic {
	id: string;
	num: number;
	title: string;
	shortTitle: string;
	items: RequisiteItem[];
}

export const CRIMPRO_REQUISITE_TOPICS: RequisiteTopic[] = [
	{
		id: 'topic-1',
		num: 1,
		title: 'Topic 1: Jurisdiction, Prescription & Civil Liability',
		shortTitle: '1. Jurisdiction & Prescription',
		items: [
			{
				num: 1,
				question:
					'What are the three (3) concurring requisites for the Sandiganbayan to exercise exclusive original jurisdiction?',
				answers: [
					'SG 27+ (or designated office)',
					'In relation to public office',
					'Damage / bribe > ₱1,000,000'
				],
				note: 'Designated offices include Provincial Governors, City/Municipal Mayors, Directors, and Members of Congress. The Information must specifically allege that the office is a constituent element or indispensable means of the crime. The > ₱1,000,000.00 threshold under R.A. 10660 applies to graft, bribery, or malversation.',
				source: 'P.D. 1606; R.A. 10660'
			},
			{
				num: 2,
				question:
					'What is the jurisdictional consequence if an SG 27+ official commits graft involving ₱1,000,000.00 or less?',
				answers: ['RTC'],
				note: 'The case is demoted down to the Regional Trial Court (RTC) under the statutory filter of R.A. 10660.',
				source: 'R.A. 10660'
			},
			{
				num: 3,
				question: 'What is the jurisdictional consequence if an official is Salary Grade 26 or below?',
				answers: ['RTC (or MTC if ≤ 6 yrs)'],
				note: 'The Sandiganbayan has no original jurisdiction, regardless of how high the amount is. Jurisdiction belongs to the RTC, or First-Level Courts if the penalty is 6 years or less.',
				source: 'P.D. 1606; B.P. Blg. 129'
			},
			{
				num: 4,
				question: 'What is the general requisite to interrupt the prescriptive period of an offense?',
				answers: ['Prosecutor filing'],
				note: 'Filing the criminal complaint with the Office of the City or Provincial Prosecutor for preliminary or summary investigation interrupts prescription (*People v. Consebido*, 2025).',
				source: 'Rule 110, Sec. 1; People v. Consebido (2025)'
			},
			{
				num: 5,
				question: 'What is the EXCEPTION to the general prescription tolling rule (Ordinance Offenses)?',
				answers: ['Direct court filing only'],
				note: 'For violations of municipal or city ordinances, prescription is interrupted ONLY by filing the complaint or Information directly in court (*Zaldivia v. Reyes*; *Jadewell v. Lidua*). Filing with the Prosecutor’s Office does **not** interrupt prescription.',
				source: 'Act No. 3326; Zaldivia v. Reyes; Jadewell v. Lidua'
			},
			{
				num: 6,
				question: 'What are the two (2) requisites to validly reserve a separate civil action ex delicto?',
				answers: ['Before prosecution presents evidence', 'Reasonable opportunity to reserve'],
				note: 'Must be made prior to the prosecution starting to present evidence and under circumstances affording the offended party a reasonable opportunity to make such reservation.',
				source: 'Rule 111, Sec. 1(a)'
			},
			{
				num: 7,
				question:
					'In what three (3) instances is a separate civil action absolutely prohibited from being reserved?',
				answers: ['B.P. Blg. 22', 'Sandiganbayan cases', 'CTA criminal tax / customs'],
				note: 'Reservation is prohibited in criminal violations of B.P. Blg. 22 (bouncing checks), cases under the exclusive jurisdiction of the Sandiganbayan, and criminal tax/customs cases before the Court of Tax Appeals.',
				source: 'Rule 111, Sec. 1(b); P.D. 1606; R.A. 9282'
			},
			{
				num: 8,
				question:
					'What is the requisite for death of the accused to extinguish criminal and civil liability ex delicto (People v. Bayotas)?',
				answers: ['Death after arraignment / pending appeal'],
				note: 'Applies when the accused dies before final judgment (after arraignment or while the case is pending appeal).',
				source: 'Rule 111, Sec. 4; People v. Bayotas'
			},
			{
				num: 9,
				question:
					'What is the legal effect of the death of the accused after arraignment or pending appeal on civil liability (People v. Bayotas)?',
				answers: ['Extinguishes criminal & ex delicto civil liability'],
				note: 'Independent civil actions (Articles 32, 33, 34, and 2176 of the Civil Code) **survive** and may be prosecuted against the estate.',
				source: 'Rule 111, Sec. 4; People v. Bayotas'
			}
		]
	},
	{
		id: 'topic-2',
		num: 2,
		title: 'Topic 2: Arrests, Searches & Warrants',
		shortTitle: '2. Arrests, Searches & Warrants',
		items: [
			{
				num: 10,
				question: 'What are the four (4) constitutional requisites for the issuance of a valid Search Warrant?',
				answers: [
					'Probable cause',
					'Personally determined by judge',
					'One specific offense',
					'Particularity of place & things'
				],
				note: 'Probable cause must be personally determined by the judge through searching questions and answers in writing and under oath, particularly describing the place to be searched and the persons or things to be seized.',
				source: 'Const., Art. III, Sec. 2; Rule 126, Secs. 4–5'
			},
			{
				num: 11,
				question: 'What is the statutory lifetime/validity of a Search Warrant?',
				answers: ['10 days (void on 11th)'],
				note: 'Valid strictly for 10 days from date of issuance; becomes *functus officio* and void on the 11th day.',
				source: 'Rule 126, Sec. 10'
			},
			{
				num: 12,
				question: 'What is the lifetime/validity of a Warrant of Arrest?',
				answers: ['Does NOT expire'],
				note: 'Remains valid indefinitely until executed, lifted, or recalled. The 10-day period in Rule 113 is merely an administrative status reporting deadline for police.',
				source: 'Rule 113, Sec. 4'
			},
			{
				num: 13,
				question: 'What are the two (2) requisites for an in flagrante delicto warrantless arrest (Rule 113, Sec. 5[a])?',
				answers: ['Overt criminal act', 'In presence / view of arrester'],
				note: 'The person arrested must execute an observable, overt criminal act showing a crime is being committed, has been committed, or is attempted (*People v. Comerciante*), in the presence or within the view of the arresting person.',
				source: 'Rule 113, Sec. 5(a); People v. Comerciante'
			},
			{
				num: 14,
				question: 'What are the two (2) requisites for a hot pursuit warrantless arrest (Rule 113, Sec. 5[b])?',
				answers: ['Offense just committed', 'Personal knowledge of facts'],
				note: 'Requires immediacy (offense has just been committed) and personal knowledge by the arresting officer of facts or circumstances indicating that the suspect committed it (*Pestilos v. Generoso*).',
				source: 'Rule 113, Sec. 5(b); Pestilos v. Generoso'
			},
			{
				num: 15,
				question: 'What is the legal requisite for a valid Stop-and-Frisk (Terry search)?',
				answers: ['Overt suspicious conduct + reasonable suspicion'],
				noteLabel: 'Fatal Flaw',
				note: 'The officer must personally observe unusual, overt suspicious conduct engendering genuine reasonable suspicion that criminal activity is afoot and the suspect is armed. It **cannot** be based solely on an anonymous tip or raw text message (*People v. Cogaed*).',
				source: 'People v. Cogaed; Terry v. Ohio'
			},
			{
				num: 16,
				question: 'What are the four (4) mandatory requisites of the Plain View Doctrine?',
				answers: [
					'Prior valid intrusion',
					'Inadvertent discovery',
					'Immediately apparent illicit character',
					'Open to eye and hand'
				],
				note: 'Must stem from a valid warrant or recognized warrantless search, without further search or opening closed doors, drawers, cabinets, or pouches (*United Laboratories v. Isip*; *Valeroso v. CA*).',
				source: 'United Laboratories v. Isip; Valeroso v. CA'
			},
			{
				num: 17,
				question:
					'What is the mandatory requirement when law enforcement officers have lawful custody of a phone or computer (LEO Got the Phone)?',
				answers: ['WECD'],
				note: 'Officers **cannot** browse, open, or examine the digital data without first applying for and obtaining a **Warrant to Examine Computer Data (WECD)** from a cybercrime court.',
				source: 'A.M. No. 17-11-03-SC'
			},
			{
				num: 18,
				question: 'What is the Patotoy v. People (En Banc, 2025) rule on waiver of an illegal arrest?',
				answers: ['Waives illegal arrest, NOT inadmissible evidence'],
				note: 'Entering a plea waives objections to the illegality of the arrest (court acquires jurisdiction over the person), but **does not waive** objection to the inadmissibility of seized evidence (items remain excluded as Fruit of the Poisonous Tree).',
				source: 'Patotoy v. People (En Banc, 2025)'
			},
			{
				num: 19,
				question: 'What is the mandatory equipment requirement under the Body-Worn Camera (BWC) Rules?',
				answers: ['≥ 2 devices (1 BWC + 1 ARD, or 2 ARDs)'],
				note: 'Officers executing an arrest or search warrant must use at least two (2) recording devices.',
				source: 'A.M. No. 21-06-08-SC (BWC Rules)'
			},
			{
				num: 20,
				question:
					'What is the legal consequence of failing to use a BWC/ARD during a Search Warrant execution WITHOUT a justifiable ground?',
				answers: ['Evidence inadmissible + contempt'],
				note: 'Seized evidence is suppressed under the Exclusionary Rule and the executing officers face contempt.',
				source: 'A.M. No. 21-06-08-SC (BWC Rules)'
			},
			{
				num: 21,
				question:
					'What is the legal consequence of failing to use a BWC/ARD during a Search Warrant execution WITH a sworn explanatory affidavit?',
				answers: ['Admissible, no presumption of regularity'],
				note: 'Evidence remains admissible, but officers lose the presumption of regularity in the performance of official duties.',
				source: 'A.M. No. 21-06-08-SC (BWC Rules)'
			},
			{
				num: 22,
				question: 'What is the legal consequence of failing to use a BWC/ARD during an Arrest Warrant execution?',
				answers: ['Arrest valid + contempt / admin'],
				note: 'The arrest remains valid and evidence is not automatically suppressed, but officers face contempt and administrative charges.',
				source: 'A.M. No. 21-06-08-SC (BWC Rules)'
			}
		]
	},
	{
		id: 'topic-3',
		num: 3,
		title: 'Topic 3: Pre-Trial Proceedings & Bail',
		shortTitle: '3. Pre-Trial & Bail',
		items: [
			{
				num: 23,
				question: 'What is the evidentiary quantum required in a preliminary investigation under DOJ DC 15?',
				answers: ['PFC + RCC'],
				note: '**Prima Facie Case with Reasonable Certainty of Conviction** (replaces probable cause in executive preliminary investigation under DOJ DC 15).',
				source: 'Rule 112; DOJ DC 15 (2024)'
			},
			{
				num: 24,
				question:
					'What is the imposable penalty threshold requiring mandatory full Preliminary Investigation under DOJ DC 15?',
				answers: ['≥ 6 yrs and 1 day (> 6 yrs)'],
				note: 'Supersedes the old 4 years, 2 months, and 1 day threshold under Rule 112.',
				source: 'Rule 112; DOJ DC 15 (2024)'
			},
			{
				num: 25,
				question: 'When is bail a matter of discretion under Rule 114, Sec. 5?',
				answers: ['After RTC conviction (non-capital)'],
				note: 'Applies upon conviction by the Regional Trial Court of an offense not punishable by death, *reclusion perpetua*, or life imprisonment.',
				source: 'Rule 114, Sec. 5'
			},
			{
				num: 26,
				question:
					'What are the five (5) bail-negating circumstances requiring mandatory denial of bail pending appeal when the penalty exceeds 6 years?',
				answers: [
					'Recidivism / habitual delinquency',
					'Previous escape',
					'Offense on probation / parole / pardon',
					'Probability of flight',
					'Undue risk of another crime'
				],
				note: 'If the RTC imposes a penalty exceeding 6 years and any one of these 5 circumstances is shown, bail pending appeal MUST be denied or cancelled.',
				source: 'Rule 114, Sec. 5'
			},
			{
				num: 27,
				question: 'What is the mandatory requisite in bail applications for capital offenses?',
				answers: ['Summary bail hearing'],
				note: 'A summary bail hearing is indispensable for the prosecution to show whether evidence of guilt is strong; granting bail without a hearing is null and void (*Narciso v. Santa Romana-Cruz*).',
				source: 'Rule 114, Secs. 7–8; Narciso v. Santa Romana-Cruz'
			},
			{
				num: 28,
				question: 'What is the general rule for amending an Information BEFORE plea (Rule 110, Sec. 14)?',
				answers: ['Matter of right (form or substance)'],
				note: 'Before the accused enters a plea, both formal and substantial amendments may be made without leave of court.',
				source: 'Rule 110, Sec. 14'
			},
			{
				num: 29,
				question:
					'What is the exception to amendment as a matter of right BEFORE plea when downgrading the offense or excluding an accused?',
				answers: ['Motion + notice + leave of court'],
				note: 'Any amendment before plea that downgrades the nature of the offense or excludes any accused requires a motion by the prosecutor, notice to the offended party, and leave of court.',
				source: 'Rule 110, Sec. 14'
			},
			{
				num: 30,
				question: 'What is the rule for amending an Information AFTER plea (Rule 110, Sec. 14)?',
				answers: ['Formal only (leave + no prejudice)'],
				note: 'Substantial amendments are **strictly prohibited** after plea; only formal amendments with leave of court and causing no prejudice to the rights of the accused are permitted.',
				source: 'Rule 110, Sec. 14'
			},
			{
				num: 31,
				question: 'What are the four (4) non-waivable grounds in a Motion to Quash (Rule 117)?',
				answers: [
					'Facts do not constitute an offense',
					'Lack of subject-matter jurisdiction',
					'Extinction of liability',
					'Double jeopardy'
				],
				note: 'Extinction of criminal action or liability includes prescription or death. These 4 grounds are not waived even if raised after plea.',
				source: 'Rule 117, Sec. 9'
			},
			{
				num: 32,
				question: 'What are the three (3) mandatory requisites for a valid Pre-Trial Agreement (Rule 118, Sec. 2)?',
				answers: ['In writing', 'Signed by BOTH accused & counsel', 'Approved by court'],
				noteLabel: 'Consequence if lacking',
				note: 'The admissions **cannot be used in evidence against the accused**.',
				source: 'Rule 118, Sec. 2'
			},
			{
				num: 33,
				question: 'What are the three (3) mandatory requisites for Plea Bargaining (Rule 116, Sec. 2)?',
				answers: ['Lesser offense necessarily included', 'Consent of prosecutor', 'Consent of offended party'],
				note: 'The accused pleads guilty to a lesser offense necessarily included in the offense charged, with the consent of both the trial prosecutor and the offended party.',
				source: 'Rule 116, Sec. 2'
			}
		]
	},
	{
		id: 'topic-4',
		num: 4,
		title: 'Topic 4: Trial, Evidence & Demurrer',
		shortTitle: '4. Trial & Demurrer',
		items: [
			{
				num: 34,
				question: 'What are the two (2) requisites for a Reverse / Modified Order of Trial (Rule 119, Sec. 11[e])?',
				answers: ['Admits act or omission', 'Interposes lawful / justifying defense'],
				note: 'When the accused admits the act or omission charged but interposes a lawful or justifying defense (e.g., self-defense), the defense must present evidence first.',
				source: 'Rule 119, Sec. 11(e)'
			},
			{
				num: 35,
				question: 'What is the scope of the right to a Speedy Trial?',
				answers: ['Accused only · criminal trials'],
				note: 'Protects the accused exclusively in criminal trials (from arraignment to promulgation).',
				source: 'Const., Art. III, Sec. 14(2)'
			},
			{
				num: 36,
				question: 'What is the scope of the right to Speedy Disposition of Cases?',
				answers: ['All parties · all proceedings'],
				note: 'Protects all parties across judicial, quasi-judicial, administrative proceedings, and preliminary investigations before the fiscal/Ombudsman (*Cagang*).',
				source: 'Const., Art. III, Sec. 16; Cagang'
			},
			{
				num: 37,
				question: 'What are the five (5) strict requisites to discharge an accused as a State Witness (Rule 119, Sec. 17)?',
				answers: [
					'Absolute necessity',
					'No other direct evidence',
					'Substantially corroborated',
					'Not the most guilty',
					'No moral turpitude conviction'
				],
				noteLabel: 'Effect',
				note: 'Operates as an **immediate acquittal** and double jeopardy bar.',
				source: 'Rule 119, Sec. 17'
			},
			{
				num: 38,
				question: 'What is the Variance Doctrine rule (Rule 120, Secs. 4 & 5)?',
				answers: ['Convict of included offense only'],
				noteLabel: 'Ceiling',
				note: 'An accused may be convicted of an offense proved which is included in the offense charged, or of an offense charged which is included in the offense proved — and can **never** be convicted of an offense graver than what was charged.',
				source: 'Rule 120, Secs. 4–5'
			},
			{
				num: 39,
				question:
					'What is the legal consequence if a Demurrer to Evidence filed WITH leave of court is DENIED (Rule 119, Sec. 23)?',
				answers: ['Retains right to present defense'],
				note: 'The accused may proceed to adduce defense evidence.',
				source: 'Rule 119, Sec. 23'
			},
			{
				num: 40,
				question:
					'What is the legal consequence if a Demurrer to Evidence filed WITHOUT leave of court is DENIED (Rule 119, Sec. 23)?',
				answers: ['Waives right to present defense'],
				note: 'The accused unconditionally waives the right to present evidence and submits the case for judgment solely on prosecution evidence.',
				source: 'Rule 119, Sec. 23'
			},
			{
				num: 41,
				question:
					'What is the legal consequence if a Demurrer to Evidence (with or without leave) is GRANTED (Rule 119, Sec. 23)?',
				answers: ['Acquittal + double jeopardy'],
				note: 'Operates as an acquittal on the merits; double jeopardy attaches immediately and it is unappealable by the State.',
				source: 'Rule 119, Sec. 23'
			}
		]
	},
	{
		id: 'topic-5',
		num: 5,
		title: 'Topic 5: Judgment & Post-Judgment Remedies',
		shortTitle: '5. Judgment & Appeals',
		items: [
			{
				num: 42,
				question: 'What are the two (2) requisites to regain remedies after a Promulgation in Absentia (Rule 120, Sec. 6)?',
				answers: ['Surrender within 15 days', 'Motion for leave + justifiable cause'],
				note: 'Must surrender within 15 days from promulgation and file a Motion for Leave to Avail of Remedies proving justifiable cause for the absence.',
				source: 'Rule 120, Sec. 6'
			},
			{
				num: 43,
				question: 'What are the three (3) constitutional requisites for a valid Trial in Absentia (Art. III, Sec. 14)?',
				answers: ['Validly arraigned', 'Duly notified', 'Unjustified absence'],
				note: 'All three constitutional requisites must concur for trial to proceed without the accused.',
				source: 'Const., Art. III, Sec. 14(2)'
			},
			{
				num: 44,
				question: 'What is the sole recognized exception to the finality and unappealability of an acquittal?',
				answers: ['Rule 65 Certiorari'],
				note: 'Strictly requires proof that the trial court acted with grave abuse of discretion amounting to lack of jurisdiction or conducted a sham trial / denial of due process (*Galman v. Sandiganbayan*).',
				source: 'Rule 65; Galman v. Sandiganbayan'
			},
			{
				num: 45,
				question: 'What are the four (4) mandatory requisites for Newly Discovered Evidence (NDE) under Rule 121?',
				answers: [
					'Discovered after trial',
					'Not discoverable with reasonable diligence',
					'Material (not cumulative / impeaching)',
					'Probably changes judgment'
				],
				noteLabel: 'Forgotten Evidence',
				note: 'Evidence known to counsel during trial but withheld due to strategy or negligence is **not** newly discovered evidence.',
				source: 'Rule 121, Sec. 2(b)'
			},
			{
				num: 46,
				question: 'What is the Sanico v. People rule regarding criminal appeals to the RTC?',
				answers: ['No Appeal Memo ≠ Dismissal'],
				note: 'Failure of the appellant to file an Appeal Memorandum is **not** a ground for dismissal of a criminal appeal; the RTC must decide the appeal on the merits based on the trial court records.',
				source: 'Rule 122, Sec. 9; Sanico v. People'
			},
			{
				num: 47,
				question: 'What are the three (3) requisites of the R.A. 10707 Exception (When an appellant CAN apply for probation)?',
				answers: ['Original penalty > 6 years', 'Accused appealed', 'Reduced to ≤ 6 years on appeal'],
				noteLabel: 'Disqualification Rule',
				note: 'If the trial court’s original sentence was **already probationable** (≤ 6 years) and the accused appealed anyway, probation is **permanently waived/forfeited**, even if the penalty is reduced further on appeal.',
				source: 'P.D. 968; R.A. 10707'
			}
		]
	}
];
