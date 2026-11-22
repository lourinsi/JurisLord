import type { McqQuestion, ModuleTopic } from '$lib/types';

export const crimproFinalsTopic: ModuleTopic = {
	id: 'finals',
	name: 'FINALS',
	eyebrow: 'REQUISITES & RULES DRILL',
	desc: '47 high-yield multiple-choice questions based on all 5 Criminal Procedure Finals Requisites topics.'
};

export const crimproFinalsWatchFor = `<strong>Watch for: exact requisites, threshold traps, and single-fact flips.</strong>
<ul>
  <li><strong>Topic 1 (Jurisdiction, Prescription &amp; Civil Liability):</strong> Sandiganbayan requires ALL THREE — SG 27+, office nexus, and damage/bribe <em>exceeding</em> ₱1,000,000 (≤ ₱1M drops to RTC). Prosecutor filing tolls prescription generally (<em>Consebido</em>), EXCEPT ordinances which require <em>direct court filing</em> (<em>Zaldivia</em>).</li>
  <li><strong>Topic 2 (Arrests, Searches &amp; Warrants):</strong> Search warrants expire after 10 days; arrest warrants never expire. Entering a plea waives illegal arrest, NOT inadmissible evidence (<em>Patotoy</em>, 2025). Phone in police custody still needs a WECD.</li>
  <li><strong>Topic 3–5 (Bail, Amendment, Demurrer, Appeals &amp; Probation):</strong> Check before vs. after plea; demurrer with vs. without leave; acquittal is reviewable only via Rule 65 (GADALEJ / sham trial); R.A. 10707 probation after appeal applies ONLY when the original penalty was non-probationable (&gt; 6 yrs) and reduced on appeal to ≤ 6 yrs.</li>
</ul>`;

export const crimproFinalsMcqs: McqQuestion[] = [
	// =========================================================================
	// TOPIC 1: JURISDICTION, PRESCRIPTION & CIVIL LIABILITY (#1–#9)
	// =========================================================================
	{
		id: 'crimpro:finals:1',
		topicId: 'finals',
		topic: 'FINALS — Topic 1: Jurisdiction, Prescription & Civil Liability',
		tag: 'requisites',
		question:
			'Which of the following is NOT one of the three (3) concurring requisites for the Sandiganbayan to exercise exclusive original jurisdiction over graft, bribery, or malversation cases under P.D. 1606, as amended by R.A. 10660?',
		options: [
			'The accused occupies a position classified as Salary Grade 27 or higher, or an office specifically enumerated by statute',
			'The Information specifically alleges factual averments showing that the offense was committed in relation to public office',
			'The Information alleges damage to the government or a bribe in an amount exceeding ₱1,000,000.00 under R.A. 10660',
			'The imposable penalty prescribed by law for the offense charged exceeds six (6) years of prision correccional'
		],
		optionExplanations: [
			'Incorrect — Status (SG 27+ or designated office like Governors, Mayors, Directors, Members of Congress) is the 1st concurring requisite.',
			'Incorrect — Office Nexus (specifically alleged in the Information that the crime was committed in relation to public office) is the 2nd concurring requisite.',
			'Incorrect — Damage or bribe exceeding ₱1,000,000.00 under R.A. 10660 is the 3rd concurring requisite.',
			'Correct! Sandiganbayan original jurisdiction hinges on (1) SG 27+ / designated office, (2) office nexus, and (3) > ₱1,000,000.00 damage/bribe under R.A. 10660 — NOT the 6-year RTC/MTC penalty dividing line.'
		],
		correctIndex: 3,
		key: 'The imposable penalty prescribed by law for the offense charged exceeds six (6) years of prision correccional',
		explanation:
			'The three concurring requisites for Sandiganbayan exclusive original jurisdiction in graft, bribery, or malversation are: (1) SG 27+ or designated office; (2) committed in relation to public office (alleged in the Information); and (3) damage to government or bribe exceeding ₱1,000,000.00.',
		legalBasis: 'P.D. No. 1606, Sec. 4, as amended by R.A. No. 10660 (Sandiganbayan Jurisdiction)',
		hint: 'Recall the 3-part test: Status + Office Nexus + R.A. 10660 monetary threshold.'
	},
	{
		id: 'crimpro:finals:2',
		topicId: 'finals',
		topic: 'FINALS — Topic 1: Jurisdiction, Prescription & Civil Liability',
		tag: 'effects',
		question:
			'A Regional Director (Salary Grade 28) is charged with graft committed in relation to office, where the alleged damage to the government is exactly ₱1,000,000.00. Which court has exclusive original jurisdiction?',
		options: [
			'Regional Trial Court (RTC), sitting in a judicial region outside where the official holds office',
			'Sandiganbayan, since the accused holds an executive position classified above Salary Grade 27',
			'Municipal Trial Court (MTC), provided the imposable imprisonment does not exceed six years',
			'Court of Tax Appeals (CTA), since the government pecuniary claim reaches one million pesos'
		],
		optionExplanations: [
			'Correct! Under R.A. 10660, when an SG 27+ official commits graft involving ₱1,000,000.00 or less (not exceeding ₱1M), the case is demoted down to the RTC.',
			'Incorrect — Sandiganbayan original jurisdiction requires damage or bribe strictly EXCEEDING ₱1,000,000.00 (at least ₱1,000,000.01).',
			'Incorrect — The R.A. 10660 statutory filter demotes the case to the RTC, not the MTC.',
			'Incorrect — CTA handles criminal tax and customs violations (principal taxes/fees ≥ ₱1,000,000.00), not graft cases.'
		],
		correctIndex: 0,
		key: 'Regional Trial Court (RTC), sitting in a judicial region outside where the official holds office',
		explanation:
			'Under R.A. 10660, if an SG 27+ official commits graft involving ₱1,000,000.00 or less (or no damage/bribe is alleged), exclusive original jurisdiction is demoted to the Regional Trial Court (RTC).',
		legalBasis: 'P.D. No. 1606, Sec. 4, as amended by R.A. No. 10660 (₱1,000,000.00 Threshold for RTC Jurisdiction)',
		hint: 'Watch the strict inequality: Sandiganbayan requires damage/bribe EXCEEDING ₱1,000,000.00.'
	},
	{
		id: 'crimpro:finals:3',
		topicId: 'finals',
		topic: 'FINALS — Topic 1: Jurisdiction, Prescription & Civil Liability',
		tag: 'effects',
		question:
			'A public officer holding Salary Grade 26 (and not occupying a specifically designated office) commits malversation in relation to office involving ₱50,000,000.00, punishable by reclusion temporal. Which court has exclusive original jurisdiction?',
		options: [
			'Sandiganbayan, because the alleged damage to the government exceeds the ₱1,000,000.00 threshold',
			'Court of Appeals, because the misappropriated public funds exceed twenty million pesos',
			'Regional Trial Court, because the accused is below Salary Grade 27 and the penalty exceeds six years',
			'Municipal Trial Court, because all public officers below Salary Grade 27 are tried in first-level courts'
		],
		optionExplanations: [
			'Incorrect — Amount alone never confers Sandiganbayan jurisdiction if the official is SG 26 or below (and not a designated officer or co-conspirator of an SG 27+ official).',
			'Incorrect — The Court of Appeals does not exercise original jurisdiction over malversation prosecutions.',
			'Correct! If the official is SG 26 or below, the Sandiganbayan has no original jurisdiction regardless of amount; jurisdiction goes to the RTC (or MTC if penalty ≤ 6 years).',
			'Incorrect — First-Level Courts only take cases where the imposable penalty does not exceed 6 years; reclusion temporal exceeds 6 years, so it goes to the RTC.'
		],
		correctIndex: 2,
		key: 'Regional Trial Court, because the accused is below Salary Grade 27 and the penalty exceeds six years',
		explanation:
			'For officials with Salary Grade 26 or below (outside specifically designated offices), the Sandiganbayan has NO original jurisdiction regardless of how high the amount is. Jurisdiction belongs to the RTC (or First-Level Courts if the penalty is 6 years or less).',
		legalBasis: 'P.D. No. 1606, Sec. 4, as amended by R.A. No. 10660; B.P. Blg. 129, Sec. 20 (RTC Original Jurisdiction)',
		hint: 'Check Salary Grade first before looking at the peso amount.'
	},
	{
		id: 'crimpro:finals:4',
		topicId: 'finals',
		topic: 'FINALS — Topic 1: Jurisdiction, Prescription & Civil Liability',
		tag: 'jurisprudence',
		question:
			'Under the General Tolling Rule reaffirmed in People v. Consebido (En Banc, 2025), what act interrupts the running of the prescriptive period for RPC felonies and special penal law offenses?',
		options: [
			'Recording the sworn statement of the complainant in the official police blotter',
			'Filing the criminal complaint with the Office of the City or Provincial Prosecutor',
			'Issuance of a warrant of arrest by the judge after finding probable cause in court',
			'Entering of a plea by the accused during formal arraignment before the trial court'
		],
		optionExplanations: [
			'Incorrect — A police blotter does not institute criminal proceedings and does not toll prescription.',
			'Correct! Under People v. Consebido (En Banc, 2025), filing the criminal complaint with the Office of the City or Provincial Prosecutor for preliminary or summary investigation interrupts prescription for both RPC felonies and special penal laws.',
			'Incorrect — Prescription is already interrupted long before a warrant of arrest issues.',
			'Incorrect — Arraignment is not the tolling event for prescription.'
		],
		correctIndex: 1,
		key: 'Filing the criminal complaint with the Office of the City or Provincial Prosecutor',
		explanation:
			'As a general rule, prescription of RPC felonies and special penal laws is interrupted by filing the criminal complaint with the Office of the City or Provincial Prosecutor for preliminary or summary investigation (People v. Consebido, 2025).',
		legalBasis: 'Rule 110, Sec. 1; People v. Consebido (2025)',
		hint: 'General Tolling Rule = Prosecutor filing.'
	},
	{
		id: 'crimpro:finals:5',
		topicId: 'finals',
		topic: 'FINALS — Topic 1: Jurisdiction, Prescription & Civil Liability',
		tag: 'exceptions',
		question:
			'X violates a City Ordinance. Five days before the 2-month prescriptive period lapses, the complainant files a complaint with the City Prosecutor’s Office. The Prosecutor files the Information in the MeTC 10 days after the 2-month period expired. Has the offense prescribed?',
		options: [
			'No, because filing a complaint with the City Prosecutor tolls prescription for all local offenses',
			'No, because preliminary investigation suspends the running of all statutory prescriptive periods',
			'Yes, because local ordinance violations prescribe within fifteen days from date of commission',
			'Yes, because prescription of local ordinance violations is interrupted solely by direct court filing'
		],
		optionExplanations: [
			'Incorrect — Ordinance violations are the critical exception to the general prosecutor-filing tolling rule.',
			'Incorrect — Filing with the Prosecutor’s Office does NOT interrupt prescription of city or municipal ordinances.',
			'Incorrect — Ordinances prescribe in 2 months under Act No. 3326, not 15 days.',
			'Correct! Under Zaldivia v. Reyes and Jadewell v. Lidua, prescription for city or municipal ordinances is tolled ONLY by filing the complaint or Information directly in court.'
		],
		correctIndex: 3,
		key: 'Yes, because prescription of local ordinance violations is interrupted solely by direct court filing',
		explanation:
			'Exception to the General Tolling Rule: for violations of municipal or city ordinances, prescription is interrupted ONLY by filing the complaint or Information directly in court (Zaldivia v. Reyes; Jadewell v. Lidua). Filing with the Prosecutor’s Office does not stop the clock. Note: while People v. Consebido (G.R. No. 258563, April 2, 2025, En Banc) prospectively abandoned Desierto and Corpus for expedited-procedure offenses, it did not expressly overturn Zaldivia or Jadewell for local ordinances.',
		legalBasis: 'Act No. 3326; Zaldivia v. Reyes; Jadewell v. Lidua; cf. People v. Consebido (2025)',
		hint: 'Ordinance exception = direct court filing ONLY.'
	},
	{
		id: 'crimpro:finals:6',
		topicId: 'finals',
		topic: 'FINALS — Topic 1: Jurisdiction, Prescription & Civil Liability',
		tag: 'requisites',
		question:
			'Under Rule 111, Sec. 1(a), which two (2) requisites must concur for the private offended party to validly reserve the right to institute a separate civil action ex delicto?',
		options: [
			'Made before the prosecution presents evidence, under circumstances affording reasonable opportunity',
			'Made prior to the arraignment of the accused, with the express written conformity of defense counsel',
			'Made at any stage prior to final judgment, accompanied by payment of double docket filing fees',
			'Made during preliminary investigation before the prosecutor, subject to approval by the DOJ'
		],
		optionExplanations: [
			'Correct! Both requisites under Rule 111, Sec. 1(a) must concur: (1) before the prosecution starts presenting evidence, and (2) under circumstances affording the offended party a reasonable opportunity to make such reservation.',
			'Incorrect — Reservation is allowed up until the prosecution starts presenting evidence (not cut off at arraignment), and does not require the accused’s consent.',
			'Incorrect — Once the prosecution begins presenting evidence, reservation is already too late.',
			'Incorrect — Reservation is made before the trial court, not approved by the DOJ.'
		],
		correctIndex: 0,
		key: 'Made before the prosecution presents evidence, under circumstances affording reasonable opportunity',
		explanation:
			'To validly reserve a separate civil action ex delicto: (1) reservation must be made prior to the prosecution presenting evidence, and (2) under circumstances affording the offended party a reasonable opportunity to make such reservation.',
		legalBasis: 'Rule 111, Sec. 1(a), Revised Rules of Criminal Procedure (Reservation of Separate Civil Action Ex Delicto)',
		hint: 'Cutoff window = prior to prosecution presenting evidence.'
	},
	{
		id: 'crimpro:finals:7',
		topicId: 'finals',
		topic: 'FINALS — Topic 1: Jurisdiction, Prescription & Civil Liability',
		tag: 'exceptions',
		question:
			'In which three (3) categories of criminal cases is the reservation of a separate civil action ex delicto strictly prohibited?',
		options: [
			'Estafa through false pretenses, qualified theft, and reckless imprudence resulting in damage',
			'Parricide, murder, homicide, and serious physical injuries committed through intentional felony',
			'B.P. Blg. 22 bouncing check cases, Sandiganbayan cases, and CTA criminal tax or customs cases',
			'Written defamation, cyberlibel under R.A. 10175, and grave oral defamation under the Penal Code'
		],
		optionExplanations: [
			'Incorrect — Separate civil actions may generally be reserved in these ordinary RPC offenses.',
			'Incorrect — Reservation is not prohibited in these crimes against persons.',
			'Correct! Reservation to file a separate civil action is absolutely prohibited in: (1) B.P. Blg. 22, (2) Sandiganbayan cases, and (3) CTA criminal tax and customs cases.',
			'Incorrect — Defamation cases allow separate civil actions (and Art. 33 independent civil actions).'
		],
		correctIndex: 2,
		key: 'B.P. Blg. 22 bouncing check cases, Sandiganbayan cases, and CTA criminal tax or customs cases',
		explanation:
			'A separate civil action cannot be reserved in (1) B.P. Blg. 22 violations, (2) criminal cases under the exclusive jurisdiction of the Sandiganbayan, and (3) criminal tax and customs cases before the Court of Tax Appeals.',
		legalBasis: 'Rule 111, Sec. 1(b), Revised Rules of Criminal Procedure; P.D. No. 1606; R.A. No. 9282',
		hint: 'Think of the 3 statutory mandatory-inclusion exceptions: BP 22, SB, CTA.'
	},
	{
		id: 'crimpro:finals:8',
		topicId: 'finals',
		topic: 'FINALS — Topic 1: Jurisdiction, Prescription & Civil Liability',
		tag: 'requisites',
		question:
			'Under People v. Bayotas (Rule 111, Sec. 4), when must the death of the accused occur for it to extinguish criminal liability and civil liability ex delicto?',
		options: [
			'Prior to the filing of the criminal Information before the trial court of competent jurisdiction',
			'After arraignment or while the appeal is pending, before the judgment of conviction becomes final',
			'After the judgment of conviction has already become final and executory upon entry of judgment',
			'During the conduct of preliminary investigation before the Office of the City or Provincial Prosecutor'
		],
		optionExplanations: [
			'Incorrect — Death before arraignment causes dismissal without prejudice to filing a civil action against the estate; Bayotas governs death after arraignment or pending appeal before finality.',
			'Correct! The requisite under People v. Bayotas is that death of the accused occurs after arraignment or pending appeal (prior to final judgment).',
			'Incorrect — After final judgment, pecuniary/civil liability is NOT extinguished by death (only personal criminal penalties are extinguished under Art. 89, RPC).',
			'Incorrect — Preliminary investigation is prior to arraignment.'
		],
		correctIndex: 1,
		key: 'After arraignment or while the appeal is pending, before the judgment of conviction becomes final',
		explanation:
			'Under Rule 111, Sec. 4 and People v. Bayotas, death of the accused after arraignment or pending appeal (before finality of judgment) extinguishes criminal liability and civil liability ex delicto.',
		legalBasis: 'Rule 111, Sec. 4, Revised Rules of Criminal Procedure; Art. 89(1), Revised Penal Code; People v. Bayotas (G.R. No. 102007, Sept. 2, 1994, En Banc)',
		hint: 'Requisite timing = death after arraignment / pending appeal.'
	},
	{
		id: 'crimpro:finals:9',
		topicId: 'finals',
		topic: 'FINALS — Topic 1: Jurisdiction, Prescription & Civil Liability',
		tag: 'effects',
		question:
			'The accused dies while his appeal from a conviction for homicide is pending before the Court of Appeals. Under People v. Bayotas, what is the legal effect on criminal and civil liability?',
		options: [
			'Criminal liability is extinguished, while civil liability ex delicto continues automatically in the appeal',
			'Criminal liability and all forms of civil liability, including quasi-delicts, are permanently extinguished',
			'Criminal liability survives against the compulsory heirs, while civil liability ex delicto is extinguished',
			'Criminal and civil liability ex delicto end, while independent civil actions survive against the estate'
		],
		optionExplanations: [
			'Incorrect — Civil liability solely predicated on the crime (ex delicto) is extinguished together with criminal liability.',
			'Incorrect — Civil liabilities based on other sources of obligation (law, contracts, quasi-contracts, and independent civil actions under Arts. 32, 33, 34, and 2176) survive.',
			'Incorrect — Criminal liability is purely personal and never survives the death of the accused.',
			'Correct! Under Bayotas, death pending appeal extinguishes criminal liability and civil liability ex delicto, but independent civil actions (Arts. 32, 33, 34, and 2176 of the Civil Code) survive and may be prosecuted against the estate.'
		],
		correctIndex: 3,
		key: 'Criminal and civil liability ex delicto end, while independent civil actions survive against the estate',
		explanation:
			'Death of the accused after arraignment or pending appeal extinguishes both criminal liability and civil liability ex delicto. However, independent civil actions predicated on Arts. 32, 33, 34, and 2176 of the Civil Code survive against the estate.',
		legalBasis: 'Rule 111, Sec. 4, Revised Rules of Criminal Procedure; Art. 89(1), Revised Penal Code; People v. Bayotas (G.R. No. 102007, Sept. 2, 1994, En Banc)',
		hint: 'Ex delicto dies with the crime; independent Civil Code actions survive.'
	},

	// =========================================================================
	// TOPIC 2: ARRESTS, SEARCHES & WARRANTS (#10–#22)
	// =========================================================================
	{
		id: 'crimpro:finals:10',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'requisites',
		question:
			'All of the following are among the four (4) constitutional requisites for the issuance of a valid Search Warrant EXCEPT:',
		options: [
			'Prior written consent of the lawful occupant or barangay chairman obtained before filing the application',
			'Existence of probable cause established in connection with one specific offense defined by penal law',
			'Probable cause personally determined by the judge through searching questions and answers under oath',
			'Particular description of the specific place to be searched and the persons or things to be seized'
		],
		optionExplanations: [
			'Correct! Search warrant applications are ex parte; prior consent of the occupant or barangay chairman is NOT a constitutional requisite.',
			'Incorrect — Probable cause in connection with one specific offense combines two of the four constitutional requisites.',
			'Incorrect — Personal judicial determination through searching questions and answers in writing and under oath is a mandatory requisite.',
			'Incorrect — Particularity of description of the place to be searched and things to be seized is the 4th constitutional requisite.'
		],
		correctIndex: 0,
		key: 'Prior written consent of the lawful occupant or barangay chairman obtained before filing the application',
		explanation:
			'The 4 constitutional requisites for a valid search warrant are: (1) probable cause; (2) personally determined by the judge via searching questions and answers in writing and under oath; (3) one specific offense; and (4) particularity of place and things.',
		legalBasis: 'Const., Art. III, Sec. 2; Rule 126, Secs. 4–5',
		hint: 'Think: probable cause + personal determination + one specific offense + particularity.'
	},
	{
		id: 'crimpro:finals:11',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'memorization',
		question:
			'A Search Warrant was issued on April 1 and implemented by police officers on April 12 (the 11th day from issuance). What is the legal status of the search warrant on the 11th day?',
		options: [
			'It remains valid for thirty days provided the officer explains the delay in the warrant return',
			'It remains valid indefinitely until served upon the occupant or recalled by the issuing judge',
			'It becomes functus officio and void because a search warrant is valid strictly for ten days only',
			'It is merely procedurally irregular and does not affect the admissibility of the seized items'
		],
		optionExplanations: [
			'Incorrect — Rule 126, Sec. 10 fixes strict 10-day validity; an explanation cannot revive an expired search warrant.',
			'Incorrect — Indefinite validity applies to a Warrant of Arrest, NOT a Search Warrant.',
			'Correct! A search warrant is valid strictly for 10 days from its date of issuance and becomes functus officio and void on the 11th day.',
			'Incorrect — A search conducted after the 10-day period is an illegal warrantless search and renders seized evidence inadmissible.'
		],
		correctIndex: 2,
		key: 'It becomes functus officio and void because a search warrant is valid strictly for ten days only',
		explanation:
			'Under Rule 126, Sec. 10, a search warrant is valid strictly for 10 days from its date. Thereafter (on the 11th day), it becomes functus officio and void.',
		legalBasis: 'Rule 126, Sec. 10, Revised Rules of Criminal Procedure (10-Day Validity of Search Warrant)',
		hint: 'Search warrant = 10 days (void on the 11th day).'
	},
	{
		id: 'crimpro:finals:12',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'memorization',
		question:
			'Six months after a Warrant of Arrest was issued, police officers locate and arrest the accused using that same warrant without securing a new one. The accused argues the warrant expired after 10 days under Rule 113, Sec. 4. Is he correct?',
		options: [
			'Yes, because arrest warrants become void on the eleventh day in the same manner as search warrants',
			'No, because an arrest warrant does not expire and remains enforceable until executed or recalled',
			'Yes, because arrest warrants automatically lapse after thirty days unless renewed by the court',
			'No, because arrest warrants remain enforceable for a fixed statutory period of sixty days'
		],
		optionExplanations: [
			'Incorrect — That 10-day expiry rule applies only to search warrants (Rule 126, Sec. 10).',
			'Correct! A warrant of arrest does NOT expire; it remains enforceable indefinitely until served, lifted, or recalled. The 10-day period in Rule 113 is merely an administrative reporting deadline for police.',
			'Incorrect — Arrest warrants do not expire after 30 days.',
			'Incorrect — Arrest warrants have no 60-day expiration.'
		],
		correctIndex: 1,
		key: 'No, because an arrest warrant does not expire and remains enforceable until executed or recalled',
		explanation:
			'Unlike a search warrant, a Warrant of Arrest does NOT expire. It remains valid indefinitely until executed, lifted, or recalled. The 10-day period in Rule 113, Sec. 4 is solely an administrative execution/status-report deadline.',
		legalBasis: 'Rule 113, Sec. 4, Revised Rules of Criminal Procedure (Execution and Non-Expiration of Warrant of Arrest)',
		hint: 'Search warrant = 10 days; Arrest warrant = does NOT expire.'
	},
	{
		id: 'crimpro:finals:13',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'requisites',
		question:
			'Under Rule 113, Sec. 5(a) and People v. Comerciante, what two (2) requisites must concur for a valid in flagrante delicto warrantless arrest?',
		options: [
			'An offense has just been committed, and a reliable confidential informant identified the suspect',
			'A sworn complaint has been filed with the prosecutor, and the suspect poses a clear flight risk',
			'The officer receives a verified radio dispatch, and the suspect appears nervous when approached',
			'The person arrested executes an overt criminal act, committed in the presence or view of the officer'
		],
		optionExplanations: [
			'Incorrect — "Just been committed" belongs to hot pursuit (Sec. 5[b]), and a tip alone never supplies personal knowledge.',
			'Incorrect — Filing with the prosecutor does not authorize a warrantless arrest.',
			'Incorrect — Nervousness and a text tip do not constitute an overt criminal act (People v. Comerciante).',
			'Correct! In flagrante delicto requires: (1) an observable overt criminal act showing a crime is being committed, has been committed, or is attempted, and (2) committed in the presence or within the view of the arresting person.'
		],
		correctIndex: 3,
		key: 'The person arrested executes an overt criminal act, committed in the presence or view of the officer',
		explanation:
			'For an in flagrante delicto warrantless arrest under Rule 113, Sec. 5(a): (1) the person arrested must execute an overt criminal act, and (2) the overt act must occur in the presence or within the view of the arresting person (People v. Comerciante).',
		legalBasis: 'Rule 113, Sec. 5(a); People v. Comerciante',
		hint: 'Two words to anchor Sec. 5(a): overt act + presence/view.'
	},
	{
		id: 'crimpro:finals:14',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'requisites',
		question:
			'Under Rule 113, Sec. 5(b) and Pestilos v. Generoso, what two (2) requisites must concur for a valid "hot pursuit" warrantless arrest?',
		options: [
			'An offense has just been committed, and the officer has personal knowledge of facts pointing to the suspect',
			'The offense was committed within the past thirty days, and the offended party executed a sworn affidavit',
			'The officer personally witnessed the crime occur, and pursued the fleeing suspect without losing sight',
			'The suspect is a known habitual delinquent, and an anonymous caller reported his current location'
		],
		optionExplanations: [
			'Correct! Hot pursuit requires: (1) immediacy — an offense has just been committed, and (2) probable cause based on the arresting officer’s personal knowledge of facts or circumstances indicating the suspect committed it (Pestilos v. Generoso).',
			'Incorrect — A 30-day gap destroys the element of immediacy ("just been committed").',
			'Incorrect — Personally witnessing the crime is in flagrante delicto (Sec. 5[a]); hot pursuit does not require witnessing the act itself.',
			'Incorrect — Recidivism and anonymous tips do not satisfy Sec. 5(b).'
		],
		correctIndex: 0,
		key: 'An offense has just been committed, and the officer has personal knowledge of facts pointing to the suspect',
		explanation:
			'A hot pursuit warrantless arrest under Rule 113, Sec. 5(b) requires: (1) an offense has just been committed (immediacy), and (2) the arresting officer has personal knowledge of facts or circumstances indicating that the person to be arrested committed it (Pestilos v. Generoso).',
		legalBasis: 'Rule 113, Sec. 5(b); Pestilos v. Generoso',
		hint: 'Hot pursuit = offense just committed + personal knowledge of facts.'
	},
	{
		id: 'crimpro:finals:15',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'jurisprudence',
		question:
			'Acting solely on an anonymous text message claiming a man in a blue jacket at a bus terminal was carrying marijuana, police immediately frisked him while he was merely standing quietly waiting for a bus. Under People v. Cogaed, is this Stop-and-Frisk (Terry search) valid?',
		options: [
			'Yes, because a specific description from an anonymous tip supplies genuine reasonable suspicion',
			'Yes, because commuters inside public transport terminals have reduced expectations of privacy',
			'No, because a valid frisk requires personally observed overt suspicious conduct, not a mere tip',
			'No, because a protective frisk is valid only when preceded by a lawful warrantless arrest'
		],
		optionExplanations: [
			'Incorrect — Under People v. Cogaed, an anonymous tip or raw text message alone is a fatal flaw.',
			'Incorrect — Being in a public terminal does not authorize suspicionless Terry frisks.',
			'Correct! A valid stop-and-frisk requires the officer to personally observe unusual, overt suspicious conduct that engenders genuine reasonable suspicion that criminal activity is afoot and the suspect is armed; an anonymous tip alone is fatal (People v. Cogaed).',
			'Incorrect — Stop-and-frisk is distinct from a search incident to a lawful arrest and does not require a prior arrest.'
		],
		correctIndex: 2,
		key: 'No, because a valid frisk requires personally observed overt suspicious conduct, not a mere tip',
		explanation:
			'Stop-and-Frisk (Terry search) requires personally observed overt suspicious conduct + genuine reasonable suspicion that criminal activity is afoot and the suspect is armed. Fatal flaw: it CANNOT rest solely on an anonymous tip or raw text message (People v. Cogaed).',
		legalBasis: 'Art. III, Sec. 2, 1987 Constitution; People v. Cogaed (G.R. No. 200334, July 30, 2014); Malacat v. Court of Appeals (1997); Terry v. Ohio (392 U.S. 1, 1968)',
		hint: 'Remember the Fatal Flaw in People v. Cogaed: anonymous tips alone fail.'
	},
	{
		id: 'crimpro:finals:16',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'requisites',
		question:
			'While serving a valid search warrant strictly for unlicensed rifles, an officer opens a small zippered pouch tucked inside a closed drawer and finds sachets of shabu. Why does the Plain View Doctrine FAIL to justify the seizure?',
		options: [
			'The arresting officer lacked a prior valid intrusion into the premises being searched',
			'Plain view requires items open to eye and hand without opening closed drawers or small pouches',
			'The plain view doctrine never applies during the implementation of a judicial search warrant',
			'Seized narcotics do not possess an immediately apparent illicit character under the doctrine'
		],
		optionExplanations: [
			'Incorrect — The officer had a prior valid intrusion by virtue of the valid search warrant for rifles.',
			'Correct! Plain View requires (1) prior valid intrusion, (2) inadvertent discovery, (3) immediately apparent illicit character, and (4) open to eye and hand — NOT rummaging inside closed drawers or small pouches (United Laboratories v. Isip; Valeroso v. CA).',
			'Incorrect — Plain View can apply during a valid search warrant execution if all 4 requisites concur.',
			'Incorrect — Contraband like shabu has an immediately apparent illicit character once legitimately exposed.'
		],
		correctIndex: 1,
		key: 'Plain view requires items open to eye and hand without opening closed drawers or small pouches',
		explanation:
			'The 4 mandatory requisites of Plain View are: (1) prior valid intrusion; (2) inadvertent discovery; (3) immediately apparent illicit character; and (4) open to eye and hand without opening closed doors, drawers, cabinets, or pouches (United Laboratories v. Isip; Valeroso v. CA).',
		legalBasis: 'United Laboratories v. Isip; Valeroso v. CA',
		hint: 'Check the 4th requisite: open to eye and hand.'
	},
	{
		id: 'crimpro:finals:17',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'requisites',
		question:
			'Police officers have lawful custody of a suspect’s smartphone seized incident to a valid arrest ("LEO Got the Phone"). Before browsing or examining its stored digital data, what must the officers first obtain from a cybercrime court?',
		options: [
			'Warrant to Disclose Computer Data (WDCD) directed against the subscriber or service provider',
			'Warrant to Intercept Computer Data (WICD) authorizing real-time monitoring of transmissions',
			'No cybercrime warrant is needed because the physical phone is already in lawful police custody',
			'Warrant to Examine Computer Data (WECD) authorizing forensic search of the seized device'
		],
		optionExplanations: [
			'Incorrect — A WDCD compels a service provider or person to disclose/submit computer data, not to examine a device already in police custody.',
			'Incorrect — A WICD authorizes listening to, recording, or monitoring live communications/data in transit.',
			'Incorrect — Lawful custody of the physical device does NOT authorize browsing its digital contents.',
			'Correct! When law enforcement already has lawful custody of a phone or computer, officers CANNOT browse or examine the digital data without first obtaining a Warrant to Examine Computer Data (WECD).'
		],
		correctIndex: 3,
		key: 'Warrant to Examine Computer Data (WECD) authorizing forensic search of the seized device',
		explanation:
			'Under A.M. No. 17-11-03-SC, lawful custody of a phone or computer does not authorize browsing its contents; officers must first apply for and obtain a Warrant to Examine Computer Data (WECD).',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 6.9 (Rule on Cybercrime Warrants — Warrant to Examine Computer Data); R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'LEO Got the Phone → WECD.'
	},
	{
		id: 'crimpro:finals:18',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'jurisprudence',
		question:
			'An accused who was illegally arrested without a warrant enters a "not guilty" plea at arraignment without moving to quash the arrest. At trial, he objects to the admissibility of the contraband seized from him during that illegal arrest. Under Patotoy v. People (En Banc, 2025), how should the court rule?',
		options: [
			'Entering a plea waives defects in the arrest, but does not waive objection to seized evidence',
			'Entering a plea waives both the illegality of the arrest and any objection to seized evidence',
			'Entering a plea waives neither defect, depriving the trial court of personal jurisdiction',
			'Objecting to the seized evidence is barred because it was not raised during investigation'
		],
		optionExplanations: [
			'Correct! Under Patotoy v. People (En Banc, 2025), entering a plea waives objections to the illegality of the arrest (court acquires jurisdiction over the person), but does NOT waive objection to the inadmissibility of seized evidence (which remains excluded as Fruit of the Poisonous Tree).',
			'Incorrect — Patotoy expressly clarifies that waiving the illegal arrest does NOT validate an illegal search or waive the exclusionary rule.',
			'Incorrect — Entering a plea submits the accused to the jurisdiction of the court over his person, waiving the arrest illegality.',
			'Incorrect — Objections to admissibility of evidence are properly raised when the evidence is offered at trial.'
		],
		correctIndex: 0,
		key: 'Entering a plea waives defects in the arrest, but does not waive objection to seized evidence',
		explanation:
			'Patotoy v. People (En Banc, 2025): entering a plea waives objections to the illegality of the arrest, but DOES NOT waive objection to the inadmissibility of evidence seized during the unlawful arrest (Fruit of the Poisonous Tree).',
		legalBasis: 'Rule 114, Sec. 26 & Rule 117, Sec. 9, Revised Rules of Criminal Procedure; Art. III, Sec. 3(2), 1987 Constitution; Patotoy v. People (En Banc, 2025)',
		hint: 'Waives illegal arrest, NOT inadmissible evidence.'
	},
	{
		id: 'crimpro:finals:19',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'memorization',
		question:
			'Under the Body-Worn Camera (BWC) Rules (A.M. No. 21-06-08-SC), what is the mandatory minimum equipment requirement during the execution of an arrest or search warrant?',
		options: [
			'At least one body-worn camera worn by the arresting police team leader throughout the operation',
			'At least three body-worn cameras plus one vehicle dashboard camera recording the perimeter',
			'At least two recording devices, consisting of one BWC and one ARD, or at least two ARDs',
			'Optional recording unless the issuing judge expressly mandates cameras in the warrant text'
		],
		optionExplanations: [
			'Incorrect — A single recording device is insufficient under the BWC Rules.',
			'Incorrect — The required minimum is 2 devices, not 3 plus a dashcam.',
			'Correct! A.M. No. 21-06-08-SC requires at least two (2) recording devices: 1 BWC + 1 ARD, or at least 2 ARDs when BWCs are unavailable.',
			'Incorrect — Use of recording devices is mandatory in warrant executions under A.M. No. 21-06-08-SC.'
		],
		correctIndex: 2,
		key: 'At least two recording devices, consisting of one BWC and one ARD, or at least two ARDs',
		explanation:
			'Under A.M. No. 21-06-08-SC, executing officers must wear and activate at least two (2) recording devices (1 BWC + 1 ARD, or at least 2 ARDs).',
		legalBasis: 'A.M. No. 21-06-08-SC (Rules on the Use of Body-Worn Cameras in the Execution of Warrants)',
		hint: 'Minimum equipment = ≥ 2 devices.'
	},
	{
		id: 'crimpro:finals:20',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'effects',
		question:
			'Police officers execute a Search Warrant without using any BWC or ARD and fail to show any justifiable ground for non-compliance. Under the BWC Rules, what is the legal consequence?',
		options: [
			'The seized items remain admissible in court, and the officers are merely given a reprimand',
			'The seized items are inadmissible under the exclusionary rule, and the officers face contempt',
			'The seized items remain admissible provided barangay witnesses sign the inventory receipt',
			'The court grants a fresh ten-day extension to re-serve the warrant with proper cameras'
		],
		optionExplanations: [
			'Incorrect — Unjustified failure in a search warrant triggers suppression of evidence, not mere reprimand.',
			'Correct! Under A.M. No. 21-06-08-SC, failing to use BWC/ARD during a search warrant execution without justifiable ground renders the seized evidence inadmissible under the Exclusionary Rule, plus officers face contempt.',
			'Incorrect — Barangay witnesses do not cure an unjustified failure to use BWC/ARD during a search warrant execution.',
			'Incorrect — An invalid search cannot be cured by re-serving the warrant.'
		],
		correctIndex: 1,
		key: 'The seized items are inadmissible under the exclusionary rule, and the officers face contempt',
		explanation:
			'Search Warrant failure (no BWC/ARD + no justifiable ground): seized evidence is inadmissible under the Exclusionary Rule, and executing officers face liability for contempt.',
		legalBasis: 'A.M. No. 21-06-08-SC (Rules on the Use of Body-Worn Cameras in the Execution of Warrants)',
		hint: 'Search Warrant without BWC & no ground = Inadmissible + contempt.'
	},
	{
		id: 'crimpro:finals:21',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'effects',
		question:
			'During the execution of a Search Warrant, officers fail to record with a BWC/ARD due to a justifiable ground supported by a sworn explanatory affidavit submitted with the return. What is the legal consequence?',
		options: [
			'The seized items are automatically suppressed as inadmissible fruit of an illegal search',
			'The seized items are admissible and the officers retain the presumption of regularity',
			'The search warrant is retroactively declared void ab initio for procedural non-compliance',
			'The seized items remain admissible, but the officers lose the presumption of regularity'
		],
		optionExplanations: [
			'Incorrect — Automatic suppression occurs when there is NO justifiable ground; a justifiable ground with a sworn explanatory affidavit preserves admissibility.',
			'Incorrect — While the evidence remains admissible, officers do NOT retain the presumption of regularity.',
			'Incorrect — A justifiable, sworn explanation avoids voiding the search.',
			'Correct! When search warrant non-recording is backed by a justifiable ground and a sworn explanatory affidavit, the evidence remains admissible, but the officers lose the presumption of regularity.'
		],
		correctIndex: 3,
		key: 'The seized items remain admissible, but the officers lose the presumption of regularity',
		explanation:
			'Search Warrant failure with a justifiable ground and sworn explanatory affidavit: seized evidence remains admissible, but officers lose the presumption of regularity in the performance of official duties.',
		legalBasis: 'A.M. No. 21-06-08-SC (Rules on the Use of Body-Worn Cameras in the Execution of Warrants)',
		hint: 'Sworn explanatory affidavit saves admissibility, but costs presumption of regularity.'
	},
	{
		id: 'crimpro:finals:22',
		topicId: 'finals',
		topic: 'FINALS — Topic 2: Arrests, Searches & Warrants',
		tag: 'effects',
		question:
			'Police officers execute a valid Warrant of Arrest without using any BWC or ARD. Under A.M. No. 21-06-08-SC, what is the legal consequence?',
		options: [
			'The arrest remains valid and evidence is not automatically suppressed, though officers face contempt',
			'The arrest is declared void and the accused must be immediately released from police custody',
			'All items seized incident to the arrest are automatically excluded as inadmissible evidence',
			'No sanction attaches because the body-worn camera rules apply solely to search warrants'
		],
		optionExplanations: [
			'Correct! Unlike search warrant failure without ground, failure to use a BWC/ARD during an Arrest Warrant execution does NOT invalidate the arrest or automatically suppress evidence, though officers face contempt and administrative charges.',
			'Incorrect — The validity of the arrest itself is unaffected by BWC non-compliance.',
			'Incorrect — Automatic suppression applies to unjustified search warrant failures, not arrest warrants.',
			'Incorrect — BWC Rules cover BOTH arrest warrants and search warrants, and non-compliant officers still face contempt/administrative liability.'
		],
		correctIndex: 0,
		key: 'The arrest remains valid and evidence is not automatically suppressed, though officers face contempt',
		explanation:
			'Arrest Warrant failure under the BWC Rules: the arrest remains valid and evidence is not automatically suppressed, but executing officers face contempt and administrative charges.',
		legalBasis: 'A.M. No. 21-06-08-SC (Rules on the Use of Body-Worn Cameras in the Execution of Warrants)',
		hint: 'Contrast Search Warrant (inadmissible) vs. Arrest Warrant (arrest valid + contempt/admin).'
	},

	// =========================================================================
	// TOPIC 3: PRE-TRIAL PROCEEDINGS & BAIL (#23–#33)
	// =========================================================================
	{
		id: 'crimpro:finals:23',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'memorization',
		question:
			'Under DOJ Department Circular No. 15 (2024), what is the evidentiary quantum required for a prosecutor to file an Information after preliminary investigation?',
		options: [
			'Proof beyond reasonable doubt establishing moral certainty of the respondent’s guilt',
			'Substantial evidence such as a reasonable mind might accept as adequate to support a charge',
			'Prima facie evidence with a reasonable certainty of conviction upon trial on the merits',
			'Preponderance of evidence showing that the complainant’s claim outweighs the defense'
		],
		optionExplanations: [
			'Incorrect — Proof beyond reasonable doubt is the trial standard for conviction, not preliminary investigation.',
			'Incorrect — Substantial evidence is the standard in administrative proceedings.',
			'Correct! DOJ DC No. 015 (2024) — upheld by the Supreme Court En Banc in Atty. Hazel L. Meking v. Jesus Crispin C. Remulla (G.R. No. 280455, November 11, 2025) as valid executive rulemaking — sets the executive preliminary investigation quantum at Prima Facie Evidence with Reasonable Certainty of Conviction (PFC+RCC).',
			'Incorrect — Preponderance of evidence is the standard in civil cases.'
		],
		correctIndex: 2,
		key: 'Prima facie evidence with a reasonable certainty of conviction upon trial on the merits',
		explanation:
			'Under DOJ Department Circular No. 015 (2024), upheld by the Supreme Court En Banc in Atty. Hazel L. Meking v. Jesus Crispin C. Remulla (G.R. No. 280455, November 11, 2025, Dimaampao, J.) as valid executive rulemaking, the quantum of evidence required in executive preliminary investigation (and in Expedited Preliminary Investigation / Summary Investigation under DOJ DC No. 028, 2024) is Prima Facie Evidence with Reasonable Certainty of Conviction (PFC + RCC), replacing mere executive probable cause. Judicial probable cause remains intact for arrest warrants (Rule 112, Sec. 5), hot pursuit arrests (Rule 113, Sec. 5[b]), search warrants (Rule 126), and Ombudsman criminal investigations.',
		legalBasis: 'DOJ DC No. 015 (2024); DOJ DC No. 028 (2024); Meking v. Remulla (G.R. No. 280455, Nov. 11, 2025, En Banc); Rule 112',
		hint: 'DOJ DC 15 quantum = PFC + RCC.'
	},
	{
		id: 'crimpro:finals:24',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'memorization',
		question:
			'Under DOJ Department Circular No. 15 (2024), what imposable penalty threshold requires a mandatory full Preliminary Investigation?',
		options: [
			'Imprisonment of at least four years, two months, and one day regardless of fine',
			'Imprisonment of at least six years and one day, exceeding the six-year threshold',
			'Imprisonment exceeding one year and one day up to a maximum of six years',
			'Imprisonment of at least twelve years and one day under the Revised Penal Code'
		],
		optionExplanations: [
			'Incorrect — The old 4-2-1 threshold under Rule 112 has been superseded by DOJ DC No. 015 (2024), upheld in Meking v. Remulla (2025).',
			'Correct! Mandatory full Preliminary Investigation under DOJ DC No. 015 (2024) — upheld as valid executive rulemaking in Atty. Hazel L. Meking v. Jesus Crispin C. Remulla (G.R. No. 280455, Nov. 11, 2025, En Banc) — applies to offenses punishable by imprisonment of at least 6 years and 1 day (> 6 years).',
			'Incorrect — Offenses punishable by 1 year & 1 day to 6 years fall under Expedited Preliminary Investigation (DOJ DC No. 028, 2024).',
			'Incorrect — The threshold is > 6 years, not > 12 years.'
		],
		correctIndex: 1,
		key: 'Imprisonment of at least six years and one day, exceeding the six-year threshold',
		explanation:
			'Under DOJ DC No. 015 (2024), upheld by the Supreme Court En Banc in Atty. Hazel L. Meking v. Jesus Crispin C. Remulla (G.R. No. 280455, November 11, 2025) as valid executive rulemaking, mandatory full Preliminary Investigation is required when the offense is punishable by imprisonment of at least 6 years and 1 day (> 6 years), superseding the old Rule 112 threshold of 4 years, 2 months, and 1 day. Under DOJ DC No. 028 (2024), offenses punishable by 1 year and 1 day to 6 years undergo Expedited Preliminary Investigation (EPI; 10-calendar-day MR), and 1 day to 1 year (or fine regardless of amount) undergo Summary Investigation (SI).',
		legalBasis: 'DOJ DC No. 015 (2024); DOJ DC No. 028 (2024); Meking v. Remulla (G.R. No. 280455, Nov. 11, 2025, En Banc); Rule 112, Sec. 1',
		hint: 'Supersedes old 4-2-1 rule → now > 6 years (≥ 6 yrs & 1 day).'
	},
	{
		id: 'crimpro:finals:25',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'requisites',
		question: 'Under Rule 114, Sec. 5, when is bail a matter of judicial discretion?',
		options: [
			'Before conviction by the First-Level Court for any offense within its jurisdiction',
			'After conviction by the First-Level Court of an offense not punishable by capital penalty',
			'Before conviction by the RTC of an offense not punishable by death or reclusion perpetua',
			'After conviction by the RTC of an offense not punishable by death or reclusion perpetua'
		],
		optionExplanations: [
			'Incorrect — Before conviction by the MTC, bail is a matter of right (Rule 114, Sec. 4).',
			'Incorrect — Even after conviction by the MTC, bail remains a matter of right (Rule 114, Sec. 4).',
			'Incorrect — Before conviction by the RTC of a non-capital offense, bail is still a matter of right.',
			'Correct! Under Rule 114, Sec. 5, bail becomes a matter of discretion upon conviction by the RTC of an offense not punishable by death, reclusion perpetua, or life imprisonment.'
		],
		correctIndex: 3,
		key: 'After conviction by the RTC of an offense not punishable by death or reclusion perpetua',
		explanation:
			'Bail is a matter of discretion after conviction by the Regional Trial Court (RTC) of an offense not punishable by death, reclusion perpetua, or life imprisonment (Rule 114, Sec. 5).',
		legalBasis: 'Rule 114, Sec. 5, Revised Rules of Criminal Procedure (Bail When Discretionary & 5 Bail-Negating Circumstances)',
		hint: 'Matter of right before/after MTC and before RTC (non-capital); discretionary AFTER RTC conviction.'
	},
	{
		id: 'crimpro:finals:26',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'requisites',
		question:
			'When the RTC imposes a penalty exceeding 6 years, bail pending appeal must be denied if any of the five (5) bail-negating circumstances exists. Which of the following is NOT one of those five circumstances?',
		options: [
			'The accused elected not to testify in his own defense during the course of the trial',
			'The accused is a recidivist, quasi-recidivist, or habitual delinquent under the Penal Code',
			'The accused previously escaped from legal confinement or committed an offense while on parole',
			'There is a probability of flight or undue risk of committing another crime during the appeal'
		],
		optionExplanations: [
			'Correct! Exercising the constitutional right against self-incrimination / silence at trial is NEVER a bail-negating circumstance.',
			'Incorrect — Recidivism, quasi-recidivism, or habitual delinquency is the 1st bail-negating circumstance.',
			'Incorrect — Previous escape (#2) and committing an offense while on probation, parole, or conditional pardon (#3) are both bail-negating circumstances.',
			'Incorrect — Probability of flight (#4) and undue risk of committing another crime (#5) are both bail-negating circumstances.'
		],
		correctIndex: 0,
		key: 'The accused elected not to testify in his own defense during the course of the trial',
		explanation:
			'The 5 bail-negating circumstances under Rule 114, Sec. 5 (requiring mandatory denial when RTC penalty > 6 years) are: (1) recidivism/habitual delinquency; (2) previous escape; (3) offense while on probation/parole/pardon; (4) probability of flight; and (5) undue risk of committing another crime.',
		legalBasis: 'Rule 114, Sec. 5, Revised Rules of Criminal Procedure (Bail When Discretionary & 5 Bail-Negating Circumstances)',
		hint: 'Spot the constitutional right disguised among the 5 statutory disqualifiers.'
	},
	{
		id: 'crimpro:finals:27',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'jurisprudence',
		question:
			'In a prosecution for murder (punishable by reclusion perpetua), the RTC judge grants bail based solely on the affidavits attached to the Information without holding a hearing. Under Narciso v. Santa Romana-Cruz, what is the status of the bail order?',
		options: [
			'Valid, because the trial judge has discretion to evaluate sworn affidavits without a hearing',
			'Valid, unless the private offended party files a formal objection within five days from notice',
			'Null and void, because a summary bail hearing is indispensable to assess the strength of evidence',
			'Merely voidable, and cured once the accused posts the required cash or surety bond in court'
		],
		optionExplanations: [
			'Incorrect — Evaluating affidavits alone does not substitute for the mandatory bail hearing.',
			'Incorrect — Even if the prosecutor or offended party does not object, the judge must still hold a hearing.',
			'Correct! In bail applications for capital offenses, a summary bail hearing is indispensable; granting bail without a hearing is null and void (Narciso v. Santa Romana-Cruz).',
			'Incorrect — Posting a bond cannot cure a void bail order granted without a hearing.'
		],
		correctIndex: 2,
		key: 'Null and void, because a summary bail hearing is indispensable to assess the strength of evidence',
		explanation:
			'A summary bail hearing is indispensable in applications for bail in capital offenses so the prosecution can establish whether evidence of guilt is strong. Granting bail without a hearing is null and void (Narciso v. Santa Romana-Cruz).',
		legalBasis: 'Rule 114, Secs. 7–8; Narciso v. Santa Romana-Cruz',
		hint: 'Capital offense bail requisite = indispensable summary bail hearing.'
	},
	{
		id: 'crimpro:finals:28',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'requisites',
		question:
			'Before the accused enters a plea at arraignment, the prosecutor seeks to make a substantial amendment to the Information (without downgrading the offense or excluding any accused). Under Rule 110, Sec. 14, what is the rule?',
		options: [
			'Allowed only with the express written conformity of the accused and his defense counsel',
			'Allowed as a matter of right in either form or substance, without needing leave of court',
			'Strictly prohibited because substantial amendments are barred once the Information is filed',
			'Allowed only upon prior written authorization from the Secretary of the Department of Justice'
		],
		optionExplanations: [
			'Incorrect — Consent of the accused is not required for a pre-plea amendment.',
			'Correct! Before plea, both formal and substantial amendments to the Information are allowed as a matter of right without leave of court (unless downgrading the offense or excluding an accused).',
			'Incorrect — Substantial amendments are strictly prohibited only AFTER plea, not before plea.',
			'Incorrect — DOJ approval is not required under Rule 110, Sec. 14.'
		],
		correctIndex: 1,
		key: 'Allowed as a matter of right in either form or substance, without needing leave of court',
		explanation:
			'General rule under Rule 110, Sec. 14: before the accused enters a plea, the complaint or Information may be amended in form or substance as a matter of right without leave of court.',
		legalBasis: 'Rule 110, Sec. 14, Revised Rules of Criminal Procedure (Amendment or Substitution of Complaint or Information)',
		hint: 'Before plea (general rule) = matter of right (form or substance).'
	},
	{
		id: 'crimpro:finals:29',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'exceptions',
		question:
			'Before arraignment, the prosecutor wishes to amend an Information for Murder to downgrade it to Homicide and exclude one co-accused. Under Rule 110, Sec. 14, what requisites apply to this pre-plea exception?',
		options: [
			'No court approval is required because all pre-plea amendments are a matter of right',
			'Written notice served solely upon the accused and his counsel prior to arraignment',
			'Withdrawal of the Information and refiling of a new charge in the First-Level Court',
			'Motion by the prosecutor, notice to the offended party, and prior leave of court'
		],
		optionExplanations: [
			'Incorrect — Downgrading the offense or excluding an accused is the express exception to the pre-plea matter-of-right rule.',
			'Incorrect — Notice must be given to the offended party, plus motion by prosecutor and leave of court.',
			'Incorrect — Amendment with leave of court is the proper procedure, not refiling in the MTC.',
			'Correct! Before plea, any amendment that downgrades the nature of the offense or excludes any accused requires: (1) motion by the prosecutor, (2) notice to the offended party, and (3) leave of court.'
		],
		correctIndex: 3,
		key: 'Motion by the prosecutor, notice to the offended party, and prior leave of court',
		explanation:
			'Exception before plea (Rule 110, Sec. 14): any amendment that downgrades the offense or excludes an accused requires a motion by the prosecutor, notice to the offended party, and leave of court.',
		legalBasis: 'Rule 110, Sec. 14, Revised Rules of Criminal Procedure (Amendment or Substitution of Complaint or Information)',
		hint: 'Downgrade or exclude before plea → motion + notice + leave.'
	},
	{
		id: 'crimpro:finals:30',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'requisites',
		question:
			'After the accused has already entered a plea of not guilty, what amendments to the Information are permitted under Rule 110, Sec. 14?',
		options: [
			'Formal amendments with leave of court that cause no prejudice; substantial ones are barred',
			'Both formal and substantial amendments, provided the prosecutor secures leave of court',
			'Neither formal nor substantial amendments of any kind once a plea has been entered',
			'Substantial amendments allowed so long as the prosecution has not yet rested its case'
		],
		optionExplanations: [
			'Correct! After plea, only formal amendments are allowed — strictly with leave of court and when they cause no prejudice to the accused. Substantial amendments are strictly prohibited.',
			'Incorrect — Substantial amendments are strictly barred once the accused has pleaded.',
			'Incorrect — Formal amendments remain allowed with leave of court and no prejudice.',
			'Incorrect — The cutoff for substantial amendments is the entry of plea, not the close of prosecution evidence.'
		],
		correctIndex: 0,
		key: 'Formal amendments with leave of court that cause no prejudice; substantial ones are barred',
		explanation:
			'After plea, Rule 110, Sec. 14 strictly prohibits substantial amendments and allows only formal amendments with leave of court and when they can be done without causing prejudice to the rights of the accused.',
		legalBasis: 'Rule 110, Sec. 14, Revised Rules of Criminal Procedure (Amendment or Substitution of Complaint or Information)',
		hint: 'After plea = formal only (leave + no prejudice); substantial barred.'
	},
	{
		id: 'crimpro:finals:31',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'requisites',
		question:
			'After entering a plea at arraignment, the accused moves to quash the Information. Which of the following grounds is WAIVED by failing to raise it before plea (i.e., not one of the four non-waivable grounds under Rule 117, Sec. 9)?',
		options: [
			'The material facts alleged in the Information do not constitute a punishable offense',
			'The trial court lacks subject-matter jurisdiction over the criminal offense charged',
			'The officer who subscribed and filed the Information lacked authority to do so',
			'The criminal action or liability has been extinguished, or double jeopardy attaches'
		],
		optionExplanations: [
			'Incorrect — Facts not constituting an offense is non-waivable ground #1.',
			'Incorrect — Lack of subject-matter jurisdiction is non-waivable ground #2.',
			'Correct! Lack of authority of the officer who filed the Information is NOT among the 4 non-waivable grounds in Rule 117, Sec. 9 (and is waivable if not raised before plea).',
			'Incorrect — Extinction of criminal liability (#3) and double jeopardy (#4) are both non-waivable grounds.'
		],
		correctIndex: 2,
		key: 'The officer who subscribed and filed the Information lacked authority to do so',
		explanation:
			'The 4 non-waivable grounds in a Motion to Quash under Rule 117, Sec. 9 are: (1) facts do not constitute an offense; (2) lack of subject-matter jurisdiction; (3) extinction of criminal action or liability; and (4) double jeopardy.',
		legalBasis: 'Rule 117, Secs. 3(a), (b), (g), (i) & 9, Revised Rules of Criminal Procedure (Non-Waivable Grounds to Quash)',
		hint: 'Remember the 4 non-waivable grounds: No offense · No SMJ · Extinction · Double jeopardy.'
	},
	{
		id: 'crimpro:finals:32',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'requisites',
		question:
			'During pre-trial, the accused makes an admission that is reduced to writing and approved by the judge, but signed solely by defense counsel (not by the accused). Under Rule 118, Sec. 2, what is the legal consequence?',
		options: [
			'The admission is binding because defense counsel’s signature acts as agent of the accused',
			'The admission is inadmissible against the accused for lacking both required signatures',
			'The admission remains admissible in evidence as an extra-judicial confession in open court',
			'The entire criminal case must be dismissed with prejudice for a defective pre-trial order'
		],
		optionExplanations: [
			'Incorrect — Rule 118, Sec. 2 strictly requires the signatures of BOTH the accused and counsel; counsel’s signature alone is fatal.',
			'Correct! A valid Pre-Trial Agreement requires (1) in writing, (2) signed by BOTH accused and defense counsel, and (3) approved by the court. Otherwise, admissions cannot be used in evidence against the accused.',
			'Incorrect — An unsigned pre-trial stipulation is inadmissible against the accused under Rule 118, Sec. 2.',
			'Incorrect — The defect only bars using the admission against the accused; it does not dismiss the case.'
		],
		correctIndex: 1,
		key: 'The admission is inadmissible against the accused for lacking both required signatures',
		explanation:
			'Rule 118, Sec. 2 requires three mandatory requisites for a valid Pre-Trial Agreement: (1) reduced to writing; (2) signed by BOTH the accused and defense counsel; and (3) approved by the court. Otherwise, the admissions cannot be used in evidence against the accused.',
		legalBasis: 'Rule 118, Sec. 2, Revised Rules of Criminal Procedure (Pre-Trial Agreements and Admissions)',
		hint: 'Writing + BOTH accused & counsel + court approval.'
	},
	{
		id: 'crimpro:finals:33',
		topicId: 'finals',
		topic: 'FINALS — Topic 3: Pre-Trial Proceedings & Bail',
		tag: 'requisites',
		question:
			'Which combination correctly states the three (3) mandatory requisites for Plea Bargaining under Rule 116, Sec. 2?',
		options: [
			'Plea to any lesser offense, with consent of the judge and consent of the surety bondsman',
			'Plea to a lesser included offense, with the sole consent of the public trial prosecutor',
			'Consent of the accused and defense counsel, with written approval of the DOJ Secretary',
			'Plea to a lesser included offense, with consent of the prosecutor and offended party'
		],
		optionExplanations: [
			'Incorrect — The lesser offense must be necessarily included in the offense charged, and consent of prosecutor and offended party is required.',
			'Incorrect — Under Rule 116, Sec. 2, consent of BOTH the trial prosecutor and the offended party is required.',
			'Incorrect — DOJ Secretary approval is not a requisite under Rule 116, Sec. 2.',
			'Correct! Plea bargaining under Rule 116, Sec. 2 requires: (1) plea to a lesser offense necessarily included in the offense charged, (2) consent of the trial prosecutor, and (3) consent of the offended party.'
		],
		correctIndex: 3,
		key: 'Plea to a lesser included offense, with consent of the prosecutor and offended party',
		explanation:
			'Under Rule 116, Sec. 2, the 3 mandatory requisites for plea bargaining are: (1) plea to a lesser offense necessarily included in the offense charged; (2) consent of the trial prosecutor; and (3) consent of the offended party.',
		legalBasis: 'Rule 116, Sec. 2, Revised Rules of Criminal Procedure (Plea of Guilty to a Lesser Offense)',
		hint: 'Necessarily included lesser offense + prosecutor + offended party.'
	},

	// =========================================================================
	// TOPIC 4: TRIAL, EVIDENCE & DEMURRER (#34–#41)
	// =========================================================================
	{
		id: 'crimpro:finals:34',
		topicId: 'finals',
		topic: 'FINALS — Topic 4: Trial, Evidence & Demurrer',
		tag: 'requisites',
		question:
			'Under Rule 119, Sec. 11(e), what two (2) requisites trigger a Reverse / Modified Order of Trial where the defense must present its evidence first?',
		options: [
			'The accused admits the act charged in the Information, and interposes a lawful defense',
			'The accused enters a not guilty plea, and requests to present evidence ahead of the State',
			'The prosecution witnesses fail to appear on trial day, and the defense announces readiness',
			'The accused is charged with a light offense governed by the Rule on Summary Procedure'
		],
		optionExplanations: [
			'Correct! Under Rule 119, Sec. 11(e), when the accused admits the act or omission charged in the Information but interposes a lawful or justifying defense (e.g., self-defense), the order of trial is modified so the defense presents evidence first.',
			'Incorrect — A simple request or general denial never reverses the order of trial.',
			'Incorrect — Witness absence does not invert the burden of going forward with evidence.',
			'Incorrect — Summary Procedure follows judicial affidavits, not reverse order of trial.'
		],
		correctIndex: 0,
		key: 'The accused admits the act charged in the Information, and interposes a lawful defense',
		explanation:
			'Reverse / Modified Order of Trial (Rule 119, Sec. 11[e]) applies when (1) the accused admits the act or omission charged, and (2) interposes a lawful or justifying defense (e.g., self-defense).',
		legalBasis: 'Rule 119, Sec. 11(e), Revised Rules of Criminal Procedure (Modified / Reverse Order of Trial)',
		hint: 'Admits act + lawful/justifying defense → defense goes first.'
	},
	{
		id: 'crimpro:finals:35',
		topicId: 'finals',
		topic: 'FINALS — Topic 4: Trial, Evidence & Demurrer',
		tag: 'memorization',
		question:
			'Whom does the constitutional right to a Speedy Trial (Art. III, Sec. 14[2]) protect, and what proceedings does it cover?',
		options: [
			'All parties across judicial, quasi-judicial, and administrative investigations',
			'Both plaintiffs and defendants in ordinary and special civil actions exclusively',
			'The accused exclusively, during criminal trials from arraignment to promulgation',
			'The public prosecutor and private complainant during preliminary investigation'
		],
		optionExplanations: [
			'Incorrect — That is the broader scope of Speedy Disposition of Cases (Art. III, Sec. 16), not Speedy Trial.',
			'Incorrect — Speedy Trial is a right of the accused in criminal prosecutions.',
			'Correct! The right to a Speedy Trial protects the accused exclusively in criminal trials (from arraignment to promulgation).',
			'Incorrect — Speedy Trial protects the accused at the trial stage, not the prosecution at preliminary investigation.'
		],
		correctIndex: 2,
		key: 'The accused exclusively, during criminal trials from arraignment to promulgation',
		explanation:
			'Speedy Trial (Art. III, Sec. 14[2]) protects the accused exclusively and covers criminal trials (from arraignment to promulgation).',
		legalBasis: 'Art. III, Sec. 14(2), 1987 Constitution; Rule 115, Sec. 1(c) & (h), Revised Rules of Criminal Procedure',
		hint: 'Speedy Trial = Accused only · criminal trials.'
	},
	{
		id: 'crimpro:finals:36',
		topicId: 'finals',
		topic: 'FINALS — Topic 4: Trial, Evidence & Demurrer',
		tag: 'memorization',
		question:
			'What is the scope of the constitutional right to Speedy Disposition of Cases (Art. III, Sec. 16; Cagang)?',
		options: [
			'Protects solely the accused during criminal court trials after formal arraignment',
			'Protects all parties across judicial, quasi-judicial, administrative, and fiscal probes',
			'Applies exclusively to appellate proceedings pending before the Supreme Court En Banc',
			'Protects private complainants in civil actions for damages arising from quasi-delict'
		],
		optionExplanations: [
			'Incorrect — That narrow scope belongs to Speedy Trial (Art. III, Sec. 14[2]).',
			'Correct! Speedy Disposition of Cases protects ALL parties across ALL proceedings (judicial, quasi-judicial, administrative, and preliminary investigations before the fiscal/Ombudsman).',
			'Incorrect — It covers all bodies and stages, not just the Supreme Court.',
			'Incorrect — It covers all parties in all proceedings, not just civil complainants.'
		],
		correctIndex: 1,
		key: 'Protects all parties across judicial, quasi-judicial, administrative, and fiscal probes',
		explanation:
			'Unlike Speedy Trial, Speedy Disposition of Cases (Art. III, Sec. 16) protects ALL parties in ALL proceedings — judicial, quasi-judicial, administrative, and preliminary investigations before the prosecutor or Ombudsman (Cagang).',
		legalBasis: 'Art. III, Sec. 16, 1987 Constitution; Cagang v. Sandiganbayan (G.R. Nos. 206438 & 206458, July 31, 2018, En Banc)',
		hint: 'Speedy Disposition = All parties · all proceedings.'
	},
	{
		id: 'crimpro:finals:37',
		topicId: 'finals',
		topic: 'FINALS — Topic 4: Trial, Evidence & Demurrer',
		tag: 'requisites',
		question:
			'All of the following are among the five (5) strict requisites to discharge an accused as a State Witness under Rule 119, Sec. 17 EXCEPT:',
		options: [
			'There is absolute necessity for the testimony and no other direct evidence is available',
			'The testimony of the accused can be substantially corroborated in its material points',
			'The accused is not the most guilty and has no prior conviction involving moral turpitude',
			'The accused must be the least guilty among all co-accused and post a double surety bond'
		],
		optionExplanations: [
			'Incorrect — Absolute necessity (#1) and no other direct evidence (#2) are mandatory requisites.',
			'Incorrect — Substantial corroboration in material points (#3) is a mandatory requisite.',
			'Incorrect — "Does not appear to be the most guilty" (#4) and "no prior conviction involving moral turpitude" (#5) are mandatory requisites.',
			'Correct! The law requires only that the accused does NOT appear to be the MOST guilty (NOT that he be the least guilty), and posting double bail is not a requisite. Discharge operates as an immediate acquittal and double jeopardy bar.'
		],
		correctIndex: 3,
		key: 'The accused must be the least guilty among all co-accused and post a double surety bond',
		explanation:
			'The 5 strict requisites under Rule 119, Sec. 17 are: (1) absolute necessity; (2) no other direct evidence; (3) substantially corroborated; (4) does not appear to be the most guilty (need not be the least guilty); and (5) never convicted of an offense involving moral turpitude. Effect: immediate acquittal and double jeopardy bar.',
		legalBasis: 'Rule 119, Secs. 17–18, Revised Rules of Criminal Procedure (Discharge of Accused to be State Witness)',
		hint: 'Classic exam trap: "not the MOST guilty" ≠ "the LEAST guilty".'
	},
	{
		id: 'crimpro:finals:38',
		topicId: 'finals',
		topic: 'FINALS — Topic 4: Trial, Evidence & Demurrer',
		tag: 'effects',
		question:
			'Under the Variance Doctrine (Rule 120, Secs. 4 & 5), when the offense proved at trial differs from the offense charged in the Information, of what offense may the accused be convicted?',
		options: [
			'An included offense proved or charged, provided it is not graver than what was charged',
			'Any graver offense established by proof beyond reasonable doubt during the trial on merits',
			'Solely the exact offense designated in the caption of the Information, without exception',
			'Any related felony classified under the same Title of the Revised Penal Code as charged'
		],
		optionExplanations: [
			'Correct! Under the Variance Doctrine, the accused may be convicted only of an included offense (proved in charged, or charged in proved), and can NEVER be convicted of an offense graver than what was charged.',
			'Incorrect — Convicting of a graver offense than charged violates the constitutional right to be informed of the nature and cause of the accusation.',
			'Incorrect — Conviction for a lesser/included offense is expressly permitted by Rule 120, Secs. 4–5.',
			'Incorrect — One offense must necessarily be included in the other; sharing a Title of the RPC is insufficient.'
		],
		correctIndex: 0,
		key: 'An included offense proved or charged, provided it is not graver than what was charged',
		explanation:
			'Variance Doctrine (Rule 120, Secs. 4–5): an accused may be convicted of an offense proved which is included in the offense charged, or of an offense charged which is included in the offense proved. Ceiling: never graver than what was charged.',
		legalBasis: 'Rule 120, Secs. 4–5, Revised Rules of Criminal Procedure (Judgment in Case of Variance Between Allegation and Proof)',
		hint: 'Convict of included offense only; ceiling = offense charged.'
	},
	{
		id: 'crimpro:finals:39',
		topicId: 'finals',
		topic: 'FINALS — Topic 4: Trial, Evidence & Demurrer',
		tag: 'effects',
		question:
			'After the prosecution rests, the accused secures leave of court and files a Demurrer to Evidence, which the trial court denies. What is the legal consequence under Rule 119, Sec. 23?',
		options: [
			'The accused unconditionally waives the right to present any evidence in his defense',
			'The accused is automatically convicted on the basis of the prosecution’s evidence',
			'The accused retains the right to adduce evidence in his defense during the trial',
			'Double jeopardy immediately attaches and bars further continuation of the trial'
		],
		optionExplanations: [
			'Incorrect — Waiver of the right to present evidence happens only when the demurrer is filed WITHOUT leave of court.',
			'Incorrect — Denial of a demurrer with leave merely lets the trial proceed to defense evidence.',
			'Correct! When a Demurrer to Evidence filed WITH leave of court is denied, the accused retains the right to adduce evidence in his defense.',
			'Incorrect — Double jeopardy attaches when a demurrer is GRANTED (acquittal), not when it is denied.'
		],
		correctIndex: 2,
		key: 'The accused retains the right to adduce evidence in his defense during the trial',
		explanation:
			'Under Rule 119, Sec. 23, if a Demurrer to Evidence filed WITH leave of court is denied, the accused retains the right to present defense evidence.',
		legalBasis: 'Rule 119, Sec. 23, Revised Rules of Criminal Procedure (Demurrer to Evidence With or Without Leave of Court)',
		hint: 'With Leave (Denied) = Retains right to present defense.'
	},
	{
		id: 'crimpro:finals:40',
		topicId: 'finals',
		topic: 'FINALS — Topic 4: Trial, Evidence & Demurrer',
		tag: 'effects',
		question:
			'After the prosecution rests, the accused files a Demurrer to Evidence without leave of court, and the trial court denies it. What is the legal consequence under Rule 119, Sec. 23?',
		options: [
			'The accused may still present defense witnesses upon posting an additional cash bond',
			'The accused waives the right to present evidence and submits the case for judgment',
			'The accused may immediately file an ordinary Notice of Appeal from the denial order',
			'The trial court directs the public prosecutor to present rebuttal witnesses first'
		],
		optionExplanations: [
			'Incorrect — No bond or motion can restore the waived right once a demurrer without leave is denied.',
			'Correct! Filing a Demurrer to Evidence WITHOUT leave of court is a gamble: if denied, the accused unconditionally waives the right to present defense evidence and submits the case for judgment based solely on prosecution evidence.',
			'Incorrect — An order denying a demurrer to evidence is not reviewable by appeal or certiorari before judgment.',
			'Incorrect — The prosecution has already rested; the case is submitted for judgment.'
		],
		correctIndex: 1,
		key: 'The accused waives the right to present evidence and submits the case for judgment',
		explanation:
			'Under Rule 119, Sec. 23, if a Demurrer to Evidence filed WITHOUT leave of court is denied, the accused waives the right to present evidence and submits the case for judgment on the basis of the prosecution’s evidence.',
		legalBasis: 'Rule 119, Sec. 23, Revised Rules of Criminal Procedure (Demurrer to Evidence With or Without Leave of Court)',
		hint: 'Without Leave (Denied) = Waives right to present defense.'
	},
	{
		id: 'crimpro:finals:41',
		topicId: 'finals',
		topic: 'FINALS — Topic 4: Trial, Evidence & Demurrer',
		tag: 'effects',
		question:
			'Whether filed with or without leave of court, what is the legal consequence when the trial court grants the accused’s Demurrer to Evidence?',
		options: [
			'A provisional dismissal that the prosecution may revive within one or two years',
			'An interlocutory order appealable by the State through an ordinary Notice of Appeal',
			'A fifteen-day grace period allowing the prosecution to reopen and cure weak proof',
			'An acquittal on the merits where double jeopardy attaches and bars State appeal'
		],
		optionExplanations: [
			'Incorrect — Granting a demurrer is a dismissal on the merits for insufficiency of evidence, NOT a provisional dismissal.',
			'Incorrect — Because it amounts to an acquittal, the State cannot appeal without violating double jeopardy.',
			'Incorrect — Once granted, the accused is acquitted; the prosecution cannot reopen to fix weak evidence.',
			'Correct! Granting a Demurrer to Evidence (with or without leave) operates as an acquittal on the merits; double jeopardy attaches immediately and the State cannot appeal.'
		],
		correctIndex: 3,
		key: 'An acquittal on the merits where double jeopardy attaches and bars State appeal',
		explanation:
			'When a Demurrer to Evidence is GRANTED (whether with or without leave), it operates as an acquittal on the merits; double jeopardy attaches immediately and it is unappealable by the State (reviewable only via Rule 65 for grave abuse of discretion).',
		legalBasis: 'Rule 119, Sec. 23, Revised Rules of Criminal Procedure (Demurrer to Evidence With or Without Leave of Court)',
		hint: 'Granted Demurrer = Acquittal + double jeopardy.'
	},

	// =========================================================================
	// TOPIC 5: JUDGMENT & POST-JUDGMENT REMEDIES (#42–#47)
	// =========================================================================
	{
		id: 'crimpro:finals:42',
		topicId: 'finals',
		topic: 'FINALS — Topic 5: Judgment & Post-Judgment Remedies',
		tag: 'requisites',
		question:
			'An accused fails to appear without justification at the promulgation of a judgment of conviction (promulgation in absentia). Under Rule 120, Sec. 6, what two (2) requisites must he fulfill to regain his statutory remedies against the judgment?',
		options: [
			'Surrender within fifteen days, and file a motion for leave showing justifiable cause',
			'File a Notice of Appeal through counsel within thirty days without surrendering',
			'Post double bail within ten days, and file an appeal memorandum directly with the CA',
			'File a Motion for Reconsideration within fifteen days while remaining at large'
		],
		optionExplanations: [
			'Correct! Under Rule 120, Sec. 6, the accused must (1) surrender within 15 days from promulgation and (2) file a Motion for Leave to Avail of Remedies proving justifiable cause for his absence.',
			'Incorrect — Counsel cannot regain remedies on behalf of an absent convict who does not surrender within 15 days.',
			'Incorrect — Paying bail or filing directly in the CA does not cure forfeiture of remedies under Rule 120, Sec. 6.',
			'Incorrect — Remaining at large prevents the accused from regaining remedies.'
		],
		correctIndex: 0,
		key: 'Surrender within fifteen days, and file a motion for leave showing justifiable cause',
		explanation:
			'To regain remedies after promulgation in absentia (Rule 120, Sec. 6), the accused must: (1) surrender within 15 days from promulgation, and (2) file a Motion for Leave to Avail of Remedies proving justifiable cause for the absence.',
		legalBasis: 'Rule 120, Sec. 6, pars. 4–5, Revised Rules of Criminal Procedure; Jaylo v. Sandiganbayan (G.R. Nos. 183152–54, Jan. 21, 2015)',
		hint: 'Two requisites: surrender within 15 days + motion for leave with justifiable cause.'
	},
	{
		id: 'crimpro:finals:43',
		topicId: 'finals',
		topic: 'FINALS — Topic 5: Judgment & Post-Judgment Remedies',
		tag: 'requisites',
		question:
			'Which combination states the three (3) constitutional requisites for a valid Trial in Absentia under Article III, Section 14(2) of the Constitution?',
		options: [
			'Issuance of a warrant of arrest, publication of summons, and absence for thirty days',
			'Valid warrantless arrest, posting of cash bail, and consent of the offended party',
			'Valid arraignment of the accused, due notice of trial, and unjustified failure to appear',
			'Termination of investigation, presence of counsel, and absence excused by illness'
		],
		optionExplanations: [
			'Incorrect — Trial in absentia can never proceed before arraignment, regardless of warrants or publication.',
			'Incorrect — Arrest and bail alone are insufficient without prior valid arraignment, notice, and unjustified absence.',
			'Correct! The 3 constitutional requisites for a valid Trial in Absentia are: (1) accused has been validly arraigned; (2) accused was duly notified of the trial hearings; and (3) failure to appear is unjustified.',
			'Incorrect — If the absence is excused/justified (e.g., valid medical emergency), the 3rd requisite is missing; plus arraignment is mandatory.'
		],
		correctIndex: 2,
		key: 'Valid arraignment of the accused, due notice of trial, and unjustified failure to appear',
		explanation:
			'Under Const., Art. III, Sec. 14(2), a valid Trial in Absentia requires: (1) valid arraignment; (2) due notice of the trial hearings; and (3) unjustified failure to appear.',
		legalBasis: 'Art. III, Sec. 14(2), 1987 Constitution; Rule 115, Sec. 1(c) & (h), Revised Rules of Criminal Procedure',
		hint: 'Arraigned + Notified + Unjustified absence.'
	},
	{
		id: 'crimpro:finals:44',
		topicId: 'finals',
		topic: 'FINALS — Topic 5: Judgment & Post-Judgment Remedies',
		tag: 'exceptions',
		question:
			'What is the sole recognized exception to the finality and unappealability of a judgment of acquittal (Galman v. Sandiganbayan)?',
		options: [
			'Ordinary Notice of Appeal under Rule 41 raising errors of judgment or appreciation',
			'Rule 65 Petition for Certiorari for grave abuse of discretion or sham trial',
			'Motion for Reconsideration filed by the prosecutor within fifteen days under Rule 121',
			'Rule 45 Petition for Review on Certiorari raising pure questions of fact on appeal'
		],
		optionExplanations: [
			'Incorrect — Ordinary appeal of an acquittal is barred by double jeopardy.',
			'Correct! An acquittal is immediately final and unappealable EXCEPT via a Petition for Certiorari under Rule 65 strictly proving grave abuse of discretion amounting to lack of jurisdiction (GADALEJ) or a sham trial / denial of due process (Galman v. Sandiganbayan).',
			'Incorrect — Rule 121 MR/MNT is available only to the accused from a conviction, never to the prosecution from an acquittal.',
			'Incorrect — Rule 45 cannot be used to overturn an acquittal for mere errors of judgment or fact.'
		],
		correctIndex: 1,
		key: 'Rule 65 Petition for Certiorari for grave abuse of discretion or sham trial',
		explanation:
			'Sole exception to finality of an acquittal: Petition for Certiorari under Rule 65, strictly requiring proof of grave abuse of discretion amounting to lack of jurisdiction or a sham trial / denial of due process (Galman v. Sandiganbayan).',
		legalBasis: 'Art. III, Sec. 21, 1987 Constitution; Rule 65, Rules of Court; Galman v. Sandiganbayan (G.R. No. 72670, Sept. 12, 1986)',
		hint: 'Acquittal exception = Rule 65 Certiorari (GADALEJ / sham trial).'
	},
	{
		id: 'crimpro:finals:45',
		topicId: 'finals',
		topic: 'FINALS — Topic 5: Judgment & Post-Judgment Remedies',
		tag: 'requisites',
		question:
			'Defense counsel intentionally withheld a known witness’s testimony during trial as a strategic choice, and after conviction moves for a New Trial claiming the testimony is "Newly Discovered Evidence" under Rule 121. Why must the motion be denied?',
		options: [
			'Testimonial evidence of a witness can never qualify as newly discovered evidence',
			'A Motion for New Trial may be filed solely by the public prosecutor after judgment',
			'Newly discovered evidence must be merely cumulative and corroborative of prior proof',
			'Evidence known during trial but withheld by strategy is forgotten evidence, not new'
		],
		optionExplanations: [
			'Incorrect — Newly discovered witness testimony CAN qualify if all 4 requisites under Rule 121 are met.',
			'Incorrect — Under Rule 121, only the accused (or court motu proprio with accused’s consent) may move for a new trial.',
			'Incorrect — Newly Discovered Evidence must be MATERIAL, NOT merely cumulative, corroborative, or impeaching.',
			'Correct! All 4 requisites of NDE must concur: (1) discovered after trial; (2) not discoverable with reasonable diligence; (3) material, not merely cumulative/corroborative/impeaching; and (4) probably changes the judgment. Evidence known during trial but withheld is "forgotten evidence," not NDE.'
		],
		correctIndex: 3,
		key: 'Evidence known during trial but withheld by strategy is forgotten evidence, not new',
		explanation:
			'The 4 mandatory requisites for Newly Discovered Evidence (Rule 121, Sec. 2[b]) are: (1) discovered after trial; (2) could not have been discovered/produced with reasonable diligence; (3) material (not cumulative/corroborative/impeaching); and (4) probably changes the judgment. "Forgotten evidence" known during trial fails.',
		legalBasis: 'Rule 121, Sec. 2(b), Revised Rules of Criminal Procedure (Requisites of Newly Discovered Evidence)',
		hint: 'Known during trial + withheld = Forgotten Evidence ≠ NDE.'
	},
	{
		id: 'crimpro:finals:46',
		topicId: 'finals',
		topic: 'FINALS — Topic 5: Judgment & Post-Judgment Remedies',
		tag: 'jurisprudence',
		question:
			'An accused convicted by the MTC perfects a timely appeal to the RTC, but fails to file an Appeal Memorandum within 15 days under Rule 122, Sec. 9. Under Sanico v. People, how must the RTC act?',
		options: [
			'Decide the criminal appeal on the merits based on the elevated trial court records',
			'Dismiss the criminal appeal outright for failure to prosecute under Rule 40 rules',
			'Remand the case records to the MTC for the mandatory conduct of a brand-new trial',
			'Declare the appellant in default and affirm the conviction without record review'
		],
		optionExplanations: [
			'Correct! Under Sanico v. People, failure of the appellant to file an Appeal Memorandum is NOT a ground for dismissal of a criminal appeal; the RTC must decide the appeal on the merits based on the trial court records.',
			'Incorrect — That dismissal rule applies in civil appeals under Rule 40, NOT in criminal appeals (Sanico v. People).',
			'Incorrect — Non-filing of a memorandum is not a ground for remand or new trial.',
			'Incorrect — The RTC must still review the entire record and decide on the merits.'
		],
		correctIndex: 0,
		key: 'Decide the criminal appeal on the merits based on the elevated trial court records',
		explanation:
			'Sanico v. People: the failure of the appellant to file an Appeal Memorandum is NOT a ground for dismissal of a criminal appeal to the RTC; the RTC must decide the appeal on the merits based on the trial court records.',
		legalBasis: 'Rule 122, Sec. 9(c), Revised Rules of Criminal Procedure; Sanico v. People (G.R. No. 198753, Mar. 25, 2015)',
		hint: 'Sanico v. People = No Appeal Memo ≠ Dismissal.'
	},
	{
		id: 'crimpro:finals:47',
		topicId: 'finals',
		topic: 'FINALS — Topic 5: Judgment & Post-Judgment Remedies',
		tag: 'requisites',
		question:
			'Under the three (3) requisites of the R.A. 10707 Exception, which appellant may still validly apply for probation after appealing a conviction?',
		options: [
			'An accused originally sentenced to four years who appealed and had it reduced to two years',
			'An accused originally sentenced to six years who appealed seeking acquittal and was affirmed',
			'An accused originally sentenced to eight years who appealed and had it reduced to four years',
			'An accused originally sentenced to twelve years who appealed and had it reduced to eight years'
		],
		optionExplanations: [
			'Incorrect — Disqualification Rule: if the trial court’s original sentence was ALREADY probationable (≤ 6 years) and the accused appealed anyway, probation is permanently waived/forfeited, even if reduced further on appeal.',
			'Incorrect — Appealing an already probationable sentence (≤ 6 years) permanently forfeits probation.',
			'Correct! All 3 requisites of R.A. 10707 concur: (1) original penalty was non-probationable (> 6 years); (2) accused appealed; and (3) appellate court modified/reduced the sentence to a probationable penalty (≤ 6 years).',
			'Incorrect — 8 years is still non-probationable (> 6 years), so the 3rd requisite is missing.'
		],
		correctIndex: 2,
		key: 'An accused originally sentenced to eight years who appealed and had it reduced to four years',
		explanation:
			'R.A. 10707 Exception requisites: (1) trial court originally imposed a non-probationable penalty (> 6 years); (2) accused appealed; and (3) appellate court reduced the sentence to a probationable penalty (≤ 6 years). If the original sentence was already probationable (≤ 6 years) and the accused appealed anyway, probation is permanently forfeited.',
		legalBasis: 'P.D. No. 968 (Probation Law), Sec. 4, as amended by R.A. No. 10707; Colinares v. People (G.R. No. 182748, Dec. 13, 2011, En Banc)',
		hint: 'Original > 6 yrs + Appealed + Reduced on appeal to ≤ 6 yrs.'
	},
	// =========================================================================
	// TOPIC 6: RULE ON CYBERCRIME WARRANTS (A.M. No. 17-11-03-SC) (#48–#59)
	// =========================================================================
	{
		id: 'crimpro:finals:48',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'requisites',
		question:
			'Cybercrime investigators need an internet service provider and an e-wallet company to submit subscriber registration records, IP login histories, and transactional metadata within 72 hours. Which cybercrime warrant must they apply for?',
		options: [
			'Warrant to Disclose Computer Data (WDCD)',
			'Warrant to Intercept Computer Data (WICD)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD)'
		],
		optionExplanations: [
			'Correct! Under Section 4 of A.M. No. 17-11-03-SC, a WDCD authorizes law enforcement to issue an order compelling any person or service provider (including financial intermediaries) to disclose subscriber’s information, traffic data, or relevant data within 72 hours.',
			'Incorrect — A WICD authorizes real-time listening, recording, monitoring, or surveillance of ongoing communications, not compelling stored records from third parties.',
			'Incorrect — A WSSECD authorizes searching a physical place to seize and forensically examine computer hardware or data.',
			'Incorrect — A WECD is required to forensically examine data inside a device already in lawful law enforcement custody.'
		],
		correctIndex: 0,
		key: 'Warrant to Disclose Computer Data (WDCD)',
		explanation:
			'A Warrant to Disclose Computer Data (WDCD) authorizes law enforcement authorities to issue an order requiring any person or service provider (including financial intermediaries) to disclose or submit subscriber’s information, traffic data, or relevant data in their possession or control within 72 hours from receipt.',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 4; R.A. 10175, Sec. 14; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'Compelling third-party providers to submit stored records within 72 hours.'
	},
	{
		id: 'crimpro:finals:49',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'requisites',
		question:
			'Law enforcement agents seek judicial authority to monitor, record, and listen to the live encrypted voice calls and real-time chat messages of a syndicate while the communications are actively occurring. Which cybercrime warrant is required?',
		options: [
			'Warrant to Disclose Computer Data (WDCD)',
			'Warrant to Intercept Computer Data (WICD)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD)'
		],
		optionExplanations: [
			'Incorrect — A WDCD compels disclosure of already-existing data held by a person or service provider.',
			'Correct! Under Section 5 of A.M. No. 17-11-03-SC, a WICD authorizes real-time listening, recording, monitoring, or surveillance of the content of communications while the communication is occurring.',
			'Incorrect — A WSSECD is for searching a physical location for computer systems/data to be seized and examined.',
			'Incorrect — A WECD is for examining stored data inside a device already lawfully seized.'
		],
		correctIndex: 1,
		key: 'Warrant to Intercept Computer Data (WICD)',
		explanation:
			'A Warrant to Intercept Computer Data (WICD) authorizes law enforcement to listen to, record, monitor, or conduct surveillance of the content of communications, directly or via electronic eavesdropping/tapping devices, at the same time the communication is occurring.',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 5; R.A. 10175, Sec. 15; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'Real-time surveillance/wiretapping as the communication occurs.'
	},
	{
		id: 'crimpro:finals:50',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'requisites',
		question:
			'PNP Anti-Cybercrime Group operatives plan to raid a condominium unit housing servers and desktop computers used in an online phishing operation, aiming to create on-site forensic images or seize the hardware for off-site examination. Which warrant must they secure?',
		options: [
			'Warrant to Disclose Computer Data (WDCD, Sec. 4)',
			'Warrant to Intercept Computer Data (WICD, Sec. 5)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD, Sec. 6.9)'
		],
		optionExplanations: [
			'Incorrect — A WDCD directs a service provider or person to submit data; it does not authorize entering and searching a physical place.',
			'Incorrect — A WICD is limited to real-time interception of communications.',
			'Correct! Under Section 6.1 of A.M. No. 17-11-03-SC, a WSSECD authorizes law enforcement to search a particular place for computer devices, systems, or data to be seized and/or forensically examined.',
			'Incorrect — A WECD applies only when the device is already in lawful police custody.'
		],
		correctIndex: 2,
		key: 'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
		explanation:
			'A Warrant to Search, Seize, and Examine Computer Data (WSSECD) authorizes law enforcement authorities to search a particular physical place for computer items to be seized and/or forensically examined (on-site or off-site).',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Secs. 6.1–6.4; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'Digital counterpart of a traditional search warrant for a physical premises.'
	},
	{
		id: 'crimpro:finals:51',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'requisites',
		question:
			'Following a valid in flagrante delicto warrantless arrest for cyber-extortion, police officers lawfully confiscate the suspect’s unlocked laptop and smartphone. Before forensic examiners can browse or extract files from the seized devices, which warrant must be obtained?',
		options: [
			'Warrant to Disclose Computer Data (WDCD)',
			'Warrant to Intercept Computer Data (WICD)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD)'
		],
		optionExplanations: [
			'Incorrect — A WDCD is served on third parties or service providers to compel disclosure of data.',
			'Incorrect — A WICD covers real-time interception of ongoing communications, not stored files on a seized device.',
			'Incorrect — A WSSECD is used to search a physical place to seize devices not yet in police possession.',
			'Correct! Under Section 6.9 of A.M. No. 17-11-03-SC, upon acquiring possession of a device via lawful warrantless arrest or voluntary surrender, officers must first secure a WECD before searching and forensically examining its data.'
		],
		correctIndex: 3,
		key: 'Warrant to Examine Computer Data (WECD)',
		explanation:
			'Under Section 6.9 of A.M. No. 17-11-03-SC, when law enforcement acquires physical possession of a computer device via a lawful warrantless arrest, valid warrantless seizure, or voluntary surrender, they must first apply for a Warrant to Examine Computer Data (WECD) before searching its digital contents.',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 6.9; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'Device is already lawfully in police custody; officers now want to look inside.'
	},
	{
		id: 'crimpro:finals:52',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'effects',
		question:
			'Within 30 days after filing the return on this cybercrime warrant, law enforcement officers have a mandatory duty to notify the person whose communications were monitored, giving that person 10 days from notice to challenge its legality before the issuing court. Which warrant is this?',
		options: [
			'Warrant to Disclose Computer Data (WDCD)',
			'Warrant to Intercept Computer Data (WICD)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD)'
		],
		optionExplanations: [
			'Incorrect — A WDCD does not carry the 30-day post-return notice requirement to the target subscriber.',
			'Correct! Under Section 5.6 of A.M. No. 17-11-03-SC, within 30 days from filing the WICD return (or lapse of the 48-hour return period), officers must notify the intercepted person, who then has 10 days to challenge the interception by motion.',
			'Incorrect — A WSSECD requires an initial return within 10 days and a final return within 48 hours after examination, not a 30-day post-return interception notice.',
			'Incorrect — A WECD follows the WSSECD initial and final return procedure, not the 30-day post-return notice rule.'
		],
		correctIndex: 1,
		key: 'Warrant to Intercept Computer Data (WICD)',
		explanation:
			'Under Section 5.6 of A.M. No. 17-11-03-SC, within 30 days from filing the return on a WICD (or lapse of the 48-hour period to file it), the executing officer must notify the person whose communications were intercepted, who has 10 days from notice to contest its legality.',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 5.6; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'Covert real-time surveillance requires post-operation notice within 30 days.'
	},
	{
		id: 'crimpro:finals:53',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'effects',
		question:
			'Under Section 4.5 of A.M. No. 17-11-03-SC, this is the sole cybercrime warrant under which law enforcement authorities are expressly permitted to retain a strictly confidential copy of the obtained data for case build-up or preliminary investigation without prior court intervention. Which warrant is it?',
		options: [
			'Warrant to Disclose Computer Data (WDCD)',
			'Warrant to Intercept Computer Data (WICD)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD)'
		],
		optionExplanations: [
			'Correct! Section 4.5 expressly allows law enforcement to retain a labeled, strictly confidential copy of computer data or subscriber information disclosed under a WDCD for case build-up or preliminary investigation without court intervention.',
			'Incorrect — All intercepted data under a WICD must be turned over in a sealed package upon filing the 48-hour return.',
			'Incorrect — All data searched, seized, or examined under a WSSECD must be deposited in a sealed package with the court upon the final return.',
			'Incorrect — A WECD requires simultaneous turnover of all examined data in a sealed package with no retained copy privilege.'
		],
		correctIndex: 0,
		key: 'Warrant to Disclose Computer Data (WDCD)',
		explanation:
			'Under Section 4.5 of A.M. No. 17-11-03-SC, law enforcement authorities may retain a copy of the computer data or subscriber’s information disclosed under a WDCD for case build-up or preliminary investigation without court intervention, provided it is labeled and kept strictly confidential.',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 4.5; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'Retained copy for CBU/PI = Section 4.5.'
	},
	{
		id: 'crimpro:finals:54',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'effects',
		question:
			'When hardware is seized and brought outside the target premises for forensic imaging under this warrant, the lawful owner may move for the immediate return of the physical computer devices once a forensic image has been made and no lawful ground exists to withhold them. Which warrant governs this on-site/off-site principle?',
		options: [
			'Warrant to Disclose Computer Data (WDCD, Sec. 4)',
			'Warrant to Intercept Computer Data (WICD, Sec. 5)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD, Sec. 6.9)'
		],
		optionExplanations: [
			'Incorrect — A WDCD involves submission of data by a person or service provider, not on-site or off-site physical seizures.',
			'Incorrect — A WICD governs real-time interception of communications, not physical computer seizures.',
			'Correct! Section 6.4 of A.M. No. 17-11-03-SC sets the on-site vs. off-site search principle for a WSSECD and entitles the owner to move for the return of hardware seized off-site once a forensic image is completed.',
			'Incorrect — Under a WECD, the device was already lawfully acquired prior to the warrant application (e.g., via warrantless arrest).'
		],
		correctIndex: 2,
		key: 'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
		explanation:
			'Under Section 6.4 of A.M. No. 17-11-03-SC, a person whose computer devices were searched and seized off-site under a WSSECD may move for the return of the physical items once a forensic image has been made and no lawful ground exists to withhold them.',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 6.4; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'On-site vs. off-site search strategy belongs to Section 6.4.'
	},
	{
		id: 'crimpro:finals:55',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'memorization',
		question:
			'Unlike warrants that require only a single return within 48 hours from implementation or expiration, this warrant requires both an Initial Return within 10 days from issuance and a Final Return within 48 hours after the court-fixed forensic examination period expires—and its application must disclose how the device was originally acquired. Which warrant is this?',
		options: [
			'Warrant to Disclose Computer Data (WDCD)',
			'Warrant to Intercept Computer Data (WICD)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD)'
		],
		optionExplanations: [
			'Incorrect — A WDCD requires only a single return within 48 hours from implementation or expiration.',
			'Incorrect — A WICD requires only a single return within 48 hours from implementation or expiration.',
			'Incorrect — While a WSSECD also uses initial and final returns, its application does not disclose prior lawful acquisition because the device has not yet been seized.',
			'Correct! Under Section 6.9 of A.M. No. 17-11-03-SC, a WECD follows the two-tier return system (10-day initial return + 48-hour final return) and uniquely requires the application to disclose how the device was lawfully acquired.'
		],
		correctIndex: 3,
		key: 'Warrant to Examine Computer Data (WECD)',
		explanation:
			'A Warrant to Examine Computer Data (WECD) follows the initial and final return rules of Sections 6.6 to 6.8, and its verified application must specifically disclose the circumstances surrounding the lawful acquisition of the computer device or system.',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 6.9; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'Two-tier returns + disclosure of prior lawful acquisition of the hardware.'
	},
	{
		id: 'crimpro:finals:56',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'requisites',
		question:
			'A witness voluntarily surrenders a flash drive containing child sexual abuse materials to NBI cybercrime agents at their headquarters. Before forensic investigators may plug in the flash drive and examine its stored files, which cybercrime warrant must they secure?',
		options: [
			'Warrant to Disclose Computer Data (WDCD)',
			'Warrant to Intercept Computer Data (WICD)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD)'
		],
		optionExplanations: [
			'Incorrect — A WDCD compels a third party or service provider to produce data they hold, whereas the NBI already possesses the flash drive.',
			'Incorrect — A WICD is for live interception of communications in transit.',
			'Incorrect — A WSSECD is used to search a physical place to seize items, not to examine a storage device already surrendered to authorities.',
			'Correct! Voluntary surrender of a storage unit is an express example under Section 6.9 of A.M. No. 17-11-03-SC requiring a WECD before forensic examination.'
		],
		correctIndex: 3,
		key: 'Warrant to Examine Computer Data (WECD)',
		explanation:
			'Under Section 6.9 (and Footnote 37) of A.M. No. 17-11-03-SC, when possession of a computer device or storage medium is obtained via voluntary surrender, law enforcement must first obtain a Warrant to Examine Computer Data (WECD) before examining the data inside.',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 6.9; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'Voluntary surrender of a physical unit still requires judicial authority to examine its contents.'
	},
	{
		id: 'crimpro:finals:57',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'effects',
		question:
			'Upon receiving an order issued by law enforcement pursuant to this cybercrime warrant, a telecommunications provider that fails to comply within 72 hours becomes liable for contempt of court under Section 4.6 of the Rule. Which warrant serves as the basis for that order?',
		options: [
			'Warrant to Disclose Computer Data (WDCD)',
			'Warrant to Intercept Computer Data (WICD)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD)'
		],
		optionExplanations: [
			'Correct! Under Sections 4.1 and 4.6 of A.M. No. 17-11-03-SC, non-compliance with the 72-hour Order to Disclose issued pursuant to a WDCD is deemed non-compliance with the WDCD itself and triggers contempt of court.',
			'Incorrect — A WICD is executed directly by law enforcement surveillance, not by a 72-hour compliance order to a provider.',
			'Incorrect — A WSSECD authorizes law enforcement to search and seize items directly.',
			'Incorrect — A WECD authorizes law enforcement to examine a device already in their custody.'
		],
		correctIndex: 0,
		key: 'Warrant to Disclose Computer Data (WDCD)',
		explanation:
			'Under Section 4.6 of A.M. No. 17-11-03-SC, non-compliance with the 72-hour order to disclose issued by law enforcement authorities is deemed non-compliance with the WDCD on which it is based and gives rise to an action for contempt.',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Secs. 4.1 & 4.6; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: '72-hour compliance window + contempt upon non-compliance.'
	},
	{
		id: 'crimpro:finals:58',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'exceptions',
		question:
			'Under Section 6.5 of A.M. No. 17-11-03-SC, law enforcement officers implementing this warrant at a target office may intercept communications reasonably related to its subject matter without securing a separate WICD, provided the interception is fully disclosed and explained in the initial return. Which warrant confers this incidental authority?',
		options: [
			'Warrant to Disclose Computer Data (WDCD, Sec. 4)',
			'Warrant to Intercept Computer Data (WICD, Sec. 5)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD, Sec. 6.9)'
		],
		optionExplanations: [
			'Incorrect — A WDCD does not authorize premises searches or incidental interception of communications.',
			'Incorrect — A WICD is the primary warrant for interception, not an incidental interception during a premises search.',
			'Correct! Section 6.5 expressly authorizes incidental interception of reasonably related communications during the implementation of a WSSECD at a searched place, subject to full disclosure in the initial return.',
			'Incorrect — While Section 6.9 extends Section 6.5 to a WECD, a WECD applies to a device already in custody rather than searching a target office.'
		],
		correctIndex: 2,
		key: 'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
		explanation:
			'Under Section 6.5 of A.M. No. 17-11-03-SC, during the implementation of a WSSECD, officers may intercept communications and computer data reasonably related to the subject matter of the warrant without a separate WICD, provided it is fully disclosed and explained in the initial return.',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 6.5; R.A. 10175, Sec. 15; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'Incidental interception during a search operation (Section 6.5).'
	},
	{
		id: 'crimpro:finals:59',
		topicId: 'finals',
		topic: 'FINALS — Topic 6: Rule on Cybercrime Warrants (A.M. No. 17-11-03-SC)',
		tag: 'requisites',
		question:
			'Instead of asking a social media platform for stored account logs, cybercrime agents apply for a warrant to use electronic tapping software to capture incoming and outgoing messages of a suspect’s account as they are being transmitted in real time. Which warrant must the court issue?',
		options: [
			'Warrant to Disclose Computer Data (WDCD)',
			'Warrant to Intercept Computer Data (WICD)',
			'Warrant to Search, Seize, and Examine Computer Data (WSSECD)',
			'Warrant to Examine Computer Data (WECD)'
		],
		optionExplanations: [
			'Incorrect — A WDCD compels disclosure of stored data already in the possession or control of a service provider.',
			'Correct! Capturing content data in transit at the exact time the communication is occurring requires a Warrant to Intercept Computer Data (WICD) under Section 5.2.',
			'Incorrect — A WSSECD authorizes searching a physical place for hardware or stored data.',
			'Incorrect — A WECD authorizes forensic examination of a device already lawfully in police custody.'
		],
		correctIndex: 1,
		key: 'Warrant to Intercept Computer Data (WICD)',
		explanation:
			'Under Section 5.2 of A.M. No. 17-11-03-SC, procuring the content of computer data directly through access to a computer system or indirectly via electronic eavesdropping/tapping devices at the same time the communication is occurring requires a Warrant to Intercept Computer Data (WICD).',
		legalBasis: 'A.M. No. 17-11-03-SC (Rule on Cybercrime Warrants), Sec. 5.2; R.A. No. 10175 (Cybercrime Prevention Act of 2012)',
		hint: 'Stored logs = WDCD; live messages in transit = WICD.'
	}
];
