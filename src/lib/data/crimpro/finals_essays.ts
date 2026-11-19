import type { AlacEssay } from '$lib/types';

const Q1_FACTS =
	'Mayor Arthur (Salary Grade 27) and Treasurer Brenda (Salary Grade 24) of the Municipality of San Jose were charged with Malversation of Public Funds under Article 217 of the Revised Penal Code for allegedly misappropriating ₱850,000.00 from the municipal treasury. Separately, Arthur was charged with violating a municipal curfew ordinance enacted by San Jose, which carries a fine of ₱2,500.00 and 15 days of imprisonment.<br><br>The private complainant filed the criminal complaint for the ordinance violation before the Office of the Provincial Prosecutor 55 days after the incident occurred. After conducting preliminary screening, the Prosecutor filed the Information in the Municipal Trial Court (MTC) on the 70th day. Arthur moved to quash the ordinance charge on the ground of prescription.<br><br>In a third incident, Brenda issued a corporate check amounting to ₱500,000.00 to a supplier, Charlie, drawn against insufficient funds. Charlie filed a criminal action for violation of Batas Pambansa Blg. 22 against Brenda before the MTCC, but expressly manifested in the complaint that he was reserving his right to institute a separate civil action to recover the ₱500,000.00 debt in the Regional Trial Court.';

const Q2_FACTS =
	'In the aftermath of catastrophic flooding in the City of San Mateo, an investigative audit conducted by the Commission on Audit (COA) uncovered that a ₱150,000,000.00 river wall and flood-mitigation project was a "ghost project." The project had been declared 100% complete and fully disbursed, but no actual construction had taken place.<br><br>The audit implicated the following individuals in a criminal conspiracy:<br>1. <strong>Engr. Dominador</strong>, the DPWH Regional Director (<strong>Salary Grade 28</strong>), who approved the contracts and certified completion;<br>2. <strong>Engr. Bernardo</strong>, the DPWH Project Inspector (<strong>Salary Grade 22</strong>), who prepared the false inspection reports; and<br>3. <strong>Mr. Victor</strong>, the private contractor and owner of Apex Builders, who received the government disbursements and kicked back ₱20,000,000.00.';

const Q3_FACTS =
	'On February 1, 2026, Arthur assaulted Benjamin during a traffic altercation, inflicting contusions that incapacitated Benjamin for four (4) days (Slight Physical Injuries). On March 5, 2026, Benjamin reported the altercation to the police precinct, where the desk sergeant recorded the incident in the Police Blotter. However, Benjamin filed his Complaint-Affidavit before the Office of the City Prosecutor only on April 20, 2026.<br><br>Arthur filed a Motion to Quash the Information on the ground that the offense had prescribed. The prosecution opposed the motion, arguing that the entry of the incident in the police blotter on March 5, 2026, interrupted the running of the prescriptive period.';

const Q4_FACTS =
	'Police officers received an unverified anonymous tip via text message stating that a man wearing a red cap and oversized jacket at a bus terminal was carrying an illegal firearm. Arriving at the terminal, officers spotted Dennis wearing a red cap and oversized jacket. Dennis was merely standing in line eating bread. Approaching him, Officer Oscar immediately ordered Dennis to raise his hands and conducted a physical body search, which yielded an unlicensed .38 caliber revolver concealed under his jacket.<br><br>Simultaneously, other officers arrived at the rented apartment of Dennis\'s associate, Eric, armed with a valid Search Warrant particularly describing "two stolen laptops." After searching the living room, Officer Perez saw a half-closed bedroom door. Perez pushed the door open, stepped inside, and noticed a closed leather pouch on top of the desk. Perez unzipped the pouch and discovered three transparent plastic sachets containing <em>shabu</em>. Perez seized the drugs, invoking the Plain View Doctrine.<br><br>During the implementation of the search warrant at Eric\'s apartment, the police officers did not wear body-worn cameras (BWCs). Instead, they brought two smartphone Alternative Recording Devices (ARDs) without securing prior leave or authorization from the issuing court, claiming they forgot their issued BWCs at the station.';

const Q5_FACTS =
	'A Regional Trial Court issued a search warrant specifically commanding police operatives to search the "living room and garage of House No. 88, Acacia Street" for an unlicensed .45 caliber pistol. During the search, operatives found nothing in the living room or garage. An operative subsequently walked into an adjacent dining room—which was not mentioned in the warrant—and observed an opaque brown paper bag sitting on top of the dining table.<br><br>Suspecting that the bag contained contraband, the operative picked up and opened the paper bag, discovering inside three (3) heat-sealed plastic sachets of methamphetamine hydrochloride (<em>shabu</em>). During trial, the accused moved to suppress the evidence, while the prosecution argued that the seized drugs were admissible under the Plain View Doctrine.';

const Q6_FACTS =
	'Felix was charged before the Regional Trial Court with Rape under Article 266-A, paragraph 1 of the RPC (punishable by <em>reclusion perpetua</em>). During the inquest, the investigating prosecutor evaluated the case under DOJ Department Circular No. 15 and recommended the filing of an Information. After the Information was filed in the RTC, Felix immediately filed a Petition for Bail, asserting that under DOJ DC 15, the prosecutor’s threshold of evidence is only executive and cannot deprive him of his constitutional right to bail. The RTC granted bail without conducting a hearing, stating that the prosecutor\'s resolution was complete on its face.<br><br>Prior to arraignment, the prosecutor discovered that the original Information mistakenly charged Felix as a mere "accomplice." Without securing leave of court, the prosecutor filed an Amended Information charging Felix as the "sole principal." Over Felix’s objection, the court admitted the amendment.<br><br>Following his arraignment where he pleaded Not Guilty, Felix filed a Motion to Quash the Information on two grounds: (1) that the facts charged do not constitute an offense; and (2) that the arresting officers failed to inform him of his rights under R.A. 7438 during custodial investigation.';

const Q7_FACTS =
	'George was indicted for Homicide. During trial, the prosecution presented its material eyewitnesses and formally rested its case. George’s counsel immediately filed a Demurrer to Evidence directly in court, without asking for or obtaining leave of court, claiming the prosecution’s witnesses were uncorroborated and incredible.<br><br>The trial court issued an order denying the Demurrer to Evidence for lack of merit. During the next scheduled hearing, George\'s counsel stood up to present George and two defense alibi witnesses. The prosecutor objected, arguing that George was legally barred from presenting any evidence.<br><br>Separately, assume the trial court instead <em>granted</em> George\'s Demurrer to Evidence and dismissed the case on the ground of insufficient evidence. The private prosecutor filed an ordinary Notice of Appeal with the Court of Appeals, asserting that the trial judge misappreciated the weight of the testimonies.';

const Q8_FACTS =
	'An Information for Estafa was submitted for decision before Branch 15 of the Regional Trial Court. Two and a half years elapsed without the judge rendering a decision. The accused filed a formal motion invoking his constitutional rights and praying for the outright dismissal of the case. The judge denied the motion, explaining that his branch had a heavy docket of over 1,500 active cases, that his legal researcher had resigned, and that no prejudice was suffered by the accused.';

const Q9_FACTS =
	'Henry was tried for Serious Physical Injuries before the RTC. He attended all trial hearings while out on bail. The court scheduled the Promulgation of Judgment for November 3, 2026, and due notice was served on Henry at his address of record and on his defense counsel. On the date of promulgation, Henry failed to appear without submitting any explanation. The RTC proceeded with the Promulgation of Judgment <em>in absentia</em> by reading the dispositive portion convicting Henry and recording it in the criminal docket. The judge simultaneously ordered the forfeiture of his bail bond and issued a warrant of arrest.<br><br>Twenty (20) days later, Henry\'s counsel filed a Notice of Appeal before the RTC, explaining that Henry simply overslept on promulgation day.<br><br>In another case before the MTC, Ian was convicted of Less Serious Physical Injuries. Ian timely appealed to the RTC. The RTC ordered Ian to submit an Appeal Memorandum within 15 days, but Ian’s counsel failed to file it. The RTC dismissed Ian’s appeal outright for failure to prosecute.';

const Q10_FACTS =
	'In a high-profile prosecution for Plunder involving ghost flood control projects, the trial judge issued an order dismissing the case on a Friday afternoon immediately after the prosecution rested its case. The dismissal was made <em>motu proprio</em> without giving the prosecution an opportunity to file its formal offer of evidence or to oppose the termination of the case. When the public prosecutor filed a Notice of Appeal, the judge disallowed it on the ground that the dismissal was an acquittal protected by Double Jeopardy.';

export const crimproFinalsEssays: AlacEssay[] = [
	// =========================================================================
	// Part 1: Jurisdiction, Prescription & Civil Liability (Q1–Q3)
	// =========================================================================
	{
		id: 'crimpro:alac:finals-1a',
		title: 'Q1(a) — Malversation Jurisdiction',
		topic: 'Finals · Part 1: Jurisdiction, Prescription & Civil Liability',
		source: 'Finals',
		factPattern: Q1_FACTS,
		question: '(a) Which court has exclusive original jurisdiction over the Malversation case against Mayor Arthur and Treasurer Brenda?',
		modelAnswer: {
			answer: 'The Regional Trial Court (RTC), not the Sandiganbayan, has exclusive original jurisdiction over the Malversation case.',
			legalBasis:
				'Under Presidential Decree No. 1606, as amended by Republic Act No. 10660, the Sandiganbayan exercises exclusive original jurisdiction over public officials holding positions categorized as Salary Grade 27 or higher who commit offenses in relation to their office. However, under Section 4 of R.A. 10660, in cases involving bribery, malversation, or graft where the information alleges damage to the government or bribery not exceeding One Million Pesos (₱1,000,000.00), exclusive original jurisdiction is vested in the proper Regional Trial Court, even if the public officer holds Salary Grade 27 or above.',
			application:
				'While Mayor Arthur holds Salary Grade 27 and the malversation was committed in relation to his public office, the Information explicitly alleges an amount misappropriated of ₱850,000.00. Because this damage threshold does not exceed ₱1,000,000.00, the statutory exception applies.',
			conclusion: 'The case falls under the exclusive original jurisdiction of the Regional Trial Court.'
		}
	},
	{
		id: 'crimpro:alac:finals-1b',
		title: 'Q1(b) — Ordinance Prescription',
		topic: 'Finals · Part 1: Jurisdiction, Prescription & Civil Liability',
		source: 'Finals',
		factPattern: Q1_FACTS,
		question: '(b) Did the municipal ordinance violation prescribe?',
		modelAnswer: {
			answer: 'Yes, the municipal ordinance violation has prescribed.',
			legalBasis:
				'Under Act No. 3326 (Section 1) and settled jurisprudence (<em>Zaldivia v. Reyes</em>, G.R. No. 102342; <em>Jadewell Parking Systems Corp. v. Lidua</em>, G.R. No. 169588), violations of municipal or city ordinances prescribe in two (2) months (60 days). Unlike crimes punishable under the Revised Penal Code or special penal laws where filing a complaint with the Prosecutor\'s Office tolls the prescriptive period (<em>People v. Consebido</em>, En Banc, 2025), <strong>the prescriptive period for violations of municipal ordinances is interrupted ONLY by the institution of judicial proceedings directly in COURT</strong>. Filing a complaint with the Office of the Prosecutor does not suspend the running of prescription for ordinance offenses.',
			application:
				'The offense occurred on Day 1. The two-month (60-day) prescriptive clock continued running uninterrupted despite the filing of the complaint before the Prosecutor\'s Office on the 55th day. Because the Information was instituted in the MTC only on the 70th day, the 60-day prescriptive period had already lapsed by 10 days.',
			conclusion: 'The motion to quash must be granted because the criminal action was extinguished by prescription.'
		}
	},
	{
		id: 'crimpro:alac:finals-1c',
		title: 'Q1(c) — B.P. 22 Civil Action Reservation',
		topic: 'Finals · Part 1: Jurisdiction, Prescription & Civil Liability',
		source: 'Finals',
		factPattern: Q1_FACTS,
		question: '(c) Was Charlie’s reservation of the separate civil action in the B.P. Blg. 22 case valid?',
		modelAnswer: {
			answer: 'No, Charlie’s reservation to file a separate civil action is void and without legal effect.',
			legalBasis:
				'Under Rule 111, Section 1(b) of the Revised Rules of Criminal Procedure, the criminal action for violation of Batas Pambansa Blg. 22 shall be deemed to include the corresponding civil action for the recovery of the face value of the check. The rule explicitly provides that <strong>no reservation to file such civil action separately shall be allowed or entertained</strong>.',
			application:
				'Charlie cannot sever the civil claim for the ₱500,000.00 face value of the check from the criminal case. The civil action is mandatorily and inextricably instituted with the B.P. 22 information before the MTCC.',
			conclusion: 'The reservation is invalid, and the MTCC shall hear and adjudicate both the criminal liability and the civil liability for the check\'s value.'
		}
	},
	{
		id: 'crimpro:alac:finals-10a',
		title: 'Q2(a) — Ghost Project: Investigative & Prosecutorial Agencies',
		topic: 'Finals · Part 1: Jurisdiction, Prescription & Civil Liability',
		source: 'Finals',
		factPattern: Q2_FACTS,
		question:
			'(a) Identify the government agencies and personalities authorized by law to investigate and prosecute the criminal anomalies surrounding the flood control project. Explain their respective mandates.',
		modelAnswer: {
			answer:
				'The authorized agencies are: (1) the Office of the Ombudsman (primary investigative and prosecutorial authority), (2) the Commission on Audit (COA) (exclusive audit and evidence-gathering authority), and (3) the Department of Justice (DOJ) / National Prosecution Service (NPS) (concurrent investigative and prosecutorial authority).',
			legalBasis:
				'<ol><li><strong>Office of the Ombudsman (Art. XI, Sec. 13, 1987 Constitution; R.A. 6770):</strong> Exercises primary jurisdiction to investigate and prosecute criminal complaints against public officials and employees for crimes committed in relation to public office, including Plunder (R.A. 7080), Graft and Corrupt Practices (R.A. 3019), and Malversation (Art. 217, RPC), as well as private individuals acting in conspiracy with public officers.</li><li><strong>Commission on Audit (Art. IX-D, Sec. 2, 1987 Constitution):</strong> Possesses exclusive constitutional authority to audit and examine the expenditure and use of government funds, perform fraud audits, issue Notices of Disallowance, and execute Audit Investigation Reports and Joint Affidavits.</li><li><strong>Department of Justice / National Prosecution Service (R.A. 10071):</strong> Exercises general authority to investigate and prosecute all criminal offenses and shares concurrent jurisdiction to conduct preliminary investigations, particularly over private contractors and lower-ranked public officers when endorsed by law enforcement agencies (e.g., NBI or PNP-CIDG).</li></ol>',
			application:
				'In the San Mateo ghost flood-control project, the COA state auditors do not directly file Informations in court, but their fraud audit, Notices of Disallowance, and Audit Investigation Reports supply the primary documentary and expert evidence submitted to the Ombudsman. The Ombudsman exercises primary authority to investigate and indict Engr. Dominador, Engr. Bernardo, and private contractor Mr. Victor as co-conspirators, while the DOJ/NPS holds concurrent preliminary investigation authority, especially for Mr. Victor and Engr. Bernardo.',
			conclusion:
				'The Office of the Ombudsman, the COA, and the DOJ/NPS each play distinct, complementary statutory roles in investigating and prosecuting the ghost project anomaly.'
		}
	},
	{
		id: 'crimpro:alac:finals-10b',
		title: 'Q2(b) — Ghost Project: Sandiganbayan Jurisdiction & Co-Conspirators',
		topic: 'Finals · Part 1: Jurisdiction, Prescription & Civil Liability',
		source: 'Finals',
		factPattern: Q2_FACTS,
		question:
			'(b) Before which judicial court or tribunal should the criminal charges for Plunder (R.A. 7080) and Violation of the Anti-Graft and Corrupt Practices Act (R.A. 3019) be filed against Engr. Dominador, Engr. Bernardo, and Mr. Victor? Explain the jurisdictional basis for each.',
		modelAnswer: {
			answer:
				'The criminal Informations for Plunder and Violation of R.A. 3019 against all three co-conspirators—Engr. Dominador, Engr. Bernardo, and Mr. Victor—must be filed with the Sandiganbayan.',
			legalBasis:
				'<p>Under <strong>Presidential Decree No. 1606, as amended by R.A. 8249 and R.A. 10660</strong>, exclusive original jurisdiction is vested in the Sandiganbayan when three requisites concur: (1) <strong>Salary Grade Threshold</strong> — the principal accused holds a position classified as <strong>Salary Grade 27 or higher (SG 27+)</strong>; (2) <strong>Office Nexus</strong> — the offense was committed <strong>in relation to public office</strong>; and (3) <strong>Monetary/Damage Threshold (R.A. 10660)</strong> — in graft, bribery, or malversation cases, the damage to the government or value of the subject matter <strong>exceeds ₱1,000,000.00</strong>.</p><p>Furthermore, <strong>Section 4 of P.D. 1606</strong> explicitly provides that private individuals and public officers holding positions below SG 27 who are charged as co-principals, accomplices, or accessories in conspiracy with an SG 27+ official fall under the exclusive original jurisdiction of the Sandiganbayan.</p>',
			application:
				'<p><strong>As to Engr. Dominador (Regional Director, SG 28):</strong> He satisfies all three requisites—he is SG 28, he approved the contracts and certified completion in direct relation to his public office, and the ₱150,000,000.00 damage far exceeds the ₱1,000,000.00 threshold under R.A. 10660.</p><p><strong>As to Engr. Bernardo (SG 22) and Mr. Victor (Private Contractor):</strong> Although Engr. Bernardo is below SG 27 and Mr. Victor is a private individual, both are charged as co-conspirators with Engr. Dominador (an SG 28 official) in an anomaly exceeding ₱1,000,000.00.</p>',
			conclusion:
				'Accordingly, the Sandiganbayan acquires exclusive original jurisdiction over all three accused in a single Information.'
		}
	},
	{
		id: 'crimpro:alac:finals-6',
		title: 'Q3 — Prescription of Light Offenses & Police Blotters',
		topic: 'Finals · Part 1: Jurisdiction, Prescription & Civil Liability',
		source: 'Finals',
		factPattern: Q3_FACTS,
		question: 'How should the court rule on the Motion to Quash? Explain.',
		modelAnswer: {
			answer: 'The court should GRANT the Motion to Quash.',
			legalBasis:
				'<p>Under Article 90 of the Revised Penal Code, Slight Physical Injuries, which is punished by <em>arresto menor</em>, is a light offense that prescribes in <strong>two (2) months (60 days)</strong>.</p><p>Jurisprudence firmly establishes that <strong>entry of an incident in a police blotter does NOT toll or interrupt the running of the prescriptive period</strong>. A police blotter is merely an internal police administrative and logbook entry; it does not constitute the formal institution of criminal proceedings contemplated by Article 91 of the Revised Penal Code and Rule 110 of the Rules of Court (<em>People v. Consebido</em>, En Banc, 2025). The running of prescription is interrupted only by the filing of the complaint before the Office of the Prosecutor or directly with the court.</p>',
			application:
				'From the commission of the crime on February 1, 2026, until the filing of the complaint before the City Prosecutor on April 20, 2026, seventy-eight (78) days had elapsed. The March 5, 2026 police blotter entry did not stop the prescriptive clock. Since the two-month (60-day) period had already expired without any valid prosecutorial or judicial proceeding being instituted, the crime was extinguished by prescription under Article 89(3) of the RPC.',
			conclusion: 'Consequently, the Information must be quashed under Rule 117, Section 3(g) of the Rules of Court.'
		}
	},

	// =========================================================================
	// Part 2: Arrests, Searches & Warrants (Q4–Q5)
	// =========================================================================
	{
		id: 'crimpro:alac:finals-2a',
		title: 'Q4(a) — Stop-and-Frisk (Anonymous Tip)',
		topic: 'Finals · Part 2: Arrests, Searches & Warrants',
		source: 'Finals',
		factPattern: Q4_FACTS,
		question: '(a) Was the warrantless search on Dennis valid under the Stop-and-Frisk doctrine?',
		modelAnswer: {
			answer: 'No, the warrantless search of Dennis was illegal and invalid.',
			legalBasis:
				'Under the Terry stop-and-frisk doctrine (<em>People v. Cogaed</em>, 740 Phil. 212; <em>Malacat v. Court of Appeals</em>, G.R. No. 123595), a police officer may stop a citizen and conduct a limited, protective pat-down search for weapons only if the officer observes <strong>unusual and suspicious conduct</strong> that engenders a reasonable belief, based on the officer\'s experience and firsthand observations, that criminal activity is afoot and the suspect is armed and dangerous. A stop-and-frisk <strong>cannot be predicated solely on an unverified, anonymous tip</strong>.',
			application:
				'Dennis displayed no overt suspicious behavior; he was merely eating bread in a passenger line. The officers had no firsthand observation of any visible bulge or overt criminal act, relying exclusively on an uncorroborated text message.',
			conclusion: 'The stop-and-frisk was invalid. The seized firearm is inadmissible in evidence under the Fruit of the Poisonous Tree doctrine (Article III, Section 3, Constitution).'
		}
	},
	{
		id: 'crimpro:alac:finals-2b',
		title: 'Q4(b) — Plain View Doctrine',
		topic: 'Finals · Part 2: Arrests, Searches & Warrants',
		source: 'Finals',
		factPattern: Q4_FACTS,
		question: '(b) Can the seized shabu in Eric’s apartment be admitted in evidence under the Plain View Doctrine?',
		modelAnswer: {
			answer: 'No, the <em>shabu</em> cannot be admitted under the Plain View Doctrine.',
			legalBasis:
				'Under the Plain View Doctrine (<em>United Laboratories, Inc. v. Isip</em>, G.R. No. 163858; <em>Valeroso v. Court of Appeals</em>, G.R. No. 164815), warrantless seizure is permitted only when four requisites concur: (1) a prior valid intrusion based on a warrant or valid warrantless search; (2) the evidence was discovered inadvertently; (3) the illicit nature of the item is immediately apparent without further search; and (4) the object is in plain sight without need of opening containers or extending the intrusion. <strong>Opening a closed door, trunk, or unzipping a closed container constitutes an active search, completely negating plain view.</strong>',
			application:
				'Officer Perez had to push open a closed door and unzip an opaque leather pouch to see what was inside. The sachets were not open to the eye and hand; their illegality was not immediately apparent without exploratory physical rummaging.',
			conclusion: 'The Plain View Doctrine does not apply. The seized drugs are inadmissible.'
		}
	},
	{
		id: 'crimpro:alac:finals-2c',
		title: 'Q4(c) — Body-Worn Camera & ARD Rules',
		topic: 'Finals · Part 2: Arrests, Searches & Warrants',
		source: 'Finals',
		factPattern: Q4_FACTS,
		question: '(c) What is the legal consequence of the officers\' unauthorized use of ARDs under the Body-Worn Camera (BWC) Rules?',
		modelAnswer: {
			answer: 'The unauthorized use of ARDs renders the seized items vulnerable to suppression and subjects the officers to contempt and administrative sanctions.',
			legalBasis:
				'Under A.M. No. 21-06-08-SC (<em>Rules on the Use of Body-Worn Cameras in the Execution of Warrants</em>), law enforcement officers assigned to execute a search warrant must use body-worn cameras. If BWCs are unavailable, officers <strong>must expressly request authority from the issuing court in their application to utilize Alternative Recording Devices (ARDs)</strong>. Using ARDs without prior court authorization is permitted only if the BWC unexpectedly malfunctions during execution, which must be explained under oath in an affidavit submitted with the return. Merely forgetting the equipment does not constitute justifiable cause.',
			application:
				'The officers failed to request court authorization to use ARDs and failed to show an unexpected mechanical malfunction. Negligently leaving the cameras at the police station violates the mandatory recording protocol.',
			conclusion:
				'Under Rule 3, Section 7 of A.M. No. 21-06-08-SC, failure to observe the BWC requirement without justifiable cause renders the evidence obtained inadmissible upon proper motion to suppress by the affected party, and subjects the officers to indirect contempt of court.'
		}
	},
	{
		id: 'crimpro:alac:finals-7',
		title: 'Q5 — Warrant Scope, Closed Containers & Plain View',
		topic: 'Finals · Part 2: Arrests, Searches & Warrants',
		source: 'Finals',
		factPattern: Q5_FACTS,
		question: 'Is the warrantless seizure of the drugs valid under the Plain View Doctrine? Explain.',
		modelAnswer: {
			answer: 'NO, the warrantless seizure is INVALID, and the dangerous drugs are inadmissible.',
			legalBasis:
				'<p>For the Plain View Doctrine to validly apply, four requisites must concur: (1) a <strong>prior valid intrusion</strong> based on a lawful circumstance; (2) <strong>inadvertent discovery</strong> of the evidence; (3) <strong>immediate apparent illegality</strong> of the item without further search; and (4) the item must be <strong>open to eye and hand</strong> without opening closed containers (<em>United Laboratories v. Isip</em>; <em>People v. Nuevas</em>).</p><p>Under the "package rule," objects enclosed within an opaque container cannot be considered in plain view because their illicit nature is not immediately apparent to the eye.</p>',
			application:
				'<p>First, the search warrant strictly designated the living room and garage as the places to be searched. Entering the unlisted dining room was an unauthorized excursion exceeding the four corners of the warrant, thereby destroying the requirement of a prior valid intrusion.</p><p>Second, the drugs were concealed inside an opaque brown paper bag. Opening the paper bag was an active, secondary search rather than an inadvertent plain-view discovery.</p>',
			conclusion:
				'Because the Plain View Doctrine does not apply, the seizure violated the accused’s constitutional right against unreasonable searches, rendering the seized drugs inadmissible under the Exclusionary Rule (Article III, Section 3[2], 1987 Constitution).'
		}
	},

	// =========================================================================
	// Part 3: Pre-Trial Proceedings & Bail (Q6)
	// =========================================================================
	{
		id: 'crimpro:alac:finals-3a',
		title: 'Q6(a) — Mandatory Bail Hearing (DOJ DC 15)',
		topic: 'Finals · Part 3: Pre-Trial Proceedings & Bail',
		source: 'Finals',
		factPattern: Q6_FACTS,
		question: '(a) Was the trial court’s order granting bail without a hearing valid?',
		modelAnswer: {
			answer: 'No, the trial court\'s order granting bail without a hearing is void.',
			legalBasis:
				'Under Rule 114, Section 7 of the Rules of Court and established jurisprudence (<em>Narciso v. Santa Romana-Cruz</em>, 328 SCRA 505; <em>Jorda v. Bitas</em>, A.M. No. RTJ-14-2376), when an accused is charged with an offense punishable by <em>reclusion perpetua</em>, life imprisonment, or death, <strong>bail is a matter of judicial discretion</strong>, dependent on whether the evidence of guilt is strong. In such capital offenses, <strong>a hearing on the petition for bail is absolute, mandatory, and indispensable</strong>. The judge must conduct a summary hearing to enable the prosecution to discharge its burden of proving that evidence of guilt is strong; otherwise, the order granting bail is void for denying the State due process.',
			application:
				'While DOJ Department Circular No. 15 establishes an executive standard (<em>Prima Facie Case with Reasonable Certainty of Conviction</em>) for prosecutors filing informations, it does not dispense with the trial court\'s judicial duty to personally conduct a bail hearing in capital cases. The judge had no authority to dispense with the hearing by simply reading the prosecutor\'s records.',
			conclusion: 'The order granting bail was issued with grave abuse of discretion and is null and void.'
		}
	},
	{
		id: 'crimpro:alac:finals-3b',
		title: 'Q6(b) — Pre-Arraignment Amendment',
		topic: 'Finals · Part 3: Pre-Trial Proceedings & Bail',
		source: 'Finals',
		factPattern: Q6_FACTS,
		question: '(b) Was the pre-arraignment amendment upgrading Felix from accomplice to principal valid without leave of court?',
		modelAnswer: {
			answer: 'Yes, the amendment upgrading Felix’s liability from accomplice to principal was valid.',
			legalBasis:
				'Under Rule 110, Section 14 of the Revised Rules of Criminal Procedure, a Complaint or Information may be amended in <strong>form or in substance without leave of court at any time before the accused enters his plea</strong>. Leave of court and notice to the offended party are required before plea <em>only</em> when the amendment <strong>downgrades the nature of the offense</strong> or <strong>excludes an accused</strong>.',
			application:
				'The amendment took place prior to arraignment. Upgrading the participation of the accused from accomplice to principal is an upgrade/aggravation, not a downgrade or exclusion.',
			conclusion: 'The prosecutor had the absolute right to amend the Information in substance without seeking permission or leave of court.'
		}
	},
	{
		id: 'crimpro:alac:finals-3c',
		title: 'Q6(c) — Post-Arraignment Motion to Quash',
		topic: 'Finals · Part 3: Pre-Trial Proceedings & Bail',
		source: 'Finals',
		factPattern: Q6_FACTS,
		question: '(c) How should the trial court rule on Felix’s post-arraignment Motion to Quash?',
		modelAnswer: {
			answer: 'The trial court should entertain the first ground (failure to state an offense), but summarily dismiss the second ground (custodial investigation irregularities) as waived.',
			legalBasis:
				'<p>Under the Omnibus Motion Rule in Rule 117, Section 9, any ground in a motion to quash that is not asserted before plea is deemed waived, <strong>EXCEPT for the four (4) non-waivable grounds</strong> that can be raised at any stage:</p><ol><li>The facts charged do not constitute an offense (Sec. 3[a]);</li><li>The court lacks jurisdiction over the offense charged (Sec. 3[b]);</li><li>The criminal action or liability has been extinguished (Sec. 3[g]); and</li><li>Former jeopardy has attached (Sec. 3[i]).</li></ol>',
			application:
				'The ground that "facts charged do not constitute an offense" is one of the four non-waivable grounds and remains fully cognizable even after plea. Conversely, procedural irregularities during custodial investigation or arrest do not constitute grounds to quash after arraignment, having been cured and waived by entering a plea.',
			conclusion: 'The court must resolve the motion solely on the merits of whether the Information alleges an offense, and deny the challenge regarding custodial investigation.'
		}
	},

	// =========================================================================
	// Part 4: Trial, Evidence & Demurrer (Q7–Q8)
	// =========================================================================
	{
		id: 'crimpro:alac:finals-4a',
		title: 'Q7(a) — Demurrer Without Leave of Court',
		topic: 'Finals · Part 4: Trial, Evidence & Demurrer',
		source: 'Finals',
		factPattern: Q7_FACTS,
		question: '(a) Did the trial court correctly bar George from presenting defense evidence following the denial of his demurrer?',
		modelAnswer: {
			answer: 'Yes, the trial court correctly barred George from presenting evidence.',
			legalBasis:
				'Under Rule 119, Section 23 of the Revised Rules of Criminal Procedure, if the accused files a Demurrer to Evidence <strong>without leave of court</strong> and it is denied, the accused <strong>unconditionally waives the right to present evidence and submits the case for judgment on the basis of the evidence adduced by the prosecution</strong> (<em>GMA v. People</em>, G.R. No. 220598).',
			application:
				'George bypassed the mandatory requirement of filing a motion for leave within five (5) days after the prosecution rested. By filing his demurrer directly without leave, he gambled on the outright insufficiency of the State\'s evidence. Once denied, the waiver of his right to present defense evidence became absolute and irrevocable.',
			conclusion: 'The court properly refused to receive George\'s evidence; the case must be decided solely on the prosecution\'s evidence.'
		}
	},
	{
		id: 'crimpro:alac:finals-4b',
		title: 'Q7(b) — Appealability of Granted Demurrer',
		topic: 'Finals · Part 4: Trial, Evidence & Demurrer',
		source: 'Finals',
		factPattern: Q7_FACTS,
		question: '(b) Is the trial court’s order granting George’s demurrer appealable by the prosecution?',
		modelAnswer: {
			answer: 'No, the order granting the demurrer is not appealable.',
			legalBasis:
				'The grant of a Demurrer to Evidence amounts to an <strong>acquittal on the merits</strong> based on the prosecution\'s failure to overcome the constitutional presumption of innocence. Under the double jeopardy clause (Article III, Section 21, Constitution) and Rule 122, Section 1, <strong>a judgment of acquittal is final, executory, and unappealable</strong>. The prosecution cannot appeal an acquittal via an ordinary appeal, because doing so places the accused twice in jeopardy for the same offense.',
			application:
				'The private prosecutor cannot challenge the judge\'s factual appreciation of the evidence via appeal. The only recognized remedy against an acquittal is a Petition for Certiorari under Rule 65, which requires proving that the trial court committed grave abuse of discretion amounting to a denial of due process or a sham trial (<em>Galman v. Sandiganbayan</em>), which is absent here.',
			conclusion: 'The appeal must be dismissed for violating the constitutional protection against double jeopardy.'
		}
	},
	{
		id: 'crimpro:alac:finals-4c',
		title: 'Q7(c) — Speedy Trial vs. Speedy Disposition',
		topic: 'Finals · Part 4: Trial, Evidence & Demurrer',
		source: 'Finals',
		factPattern: Q7_FACTS,
		question: '(c) Distinguish between the Right to a Speedy Trial and the Right to the Speedy Disposition of Cases.',
		modelAnswer: {
			answer: 'The Right to a Speedy Trial and the Right to the Speedy Disposition of Cases are distinguished as follows: Speedy Trial (Art. III, Sec. 14) applies exclusively to the accused in criminal judicial proceedings from arraignment to promulgation of judgment, whereas Speedy Disposition of Cases (Art. III, Sec. 16) is a broader constitutional guarantee protecting all persons across all judicial, quasi-judicial, administrative, and investigatory proceedings.',
			legalBasis:
				'<ol><li><strong>Speedy Trial (Article III, Section 14, Constitution; Rule 119; R.A. 8493):</strong> Applies exclusively to the <strong>accused in criminal judicial proceedings</strong>, covering the specific period from arraignment up to the promulgation of judgment. It is enforced through statutory continuous trial deadlines (e.g., commencing trial within 30 days from pre-trial order; 180-day overall trial limit).</li><li><strong>Speedy Disposition of Cases (Article III, Section 16, Constitution):</strong> A broader constitutional guarantee protecting <strong>all persons and all parties</strong> across <strong>all proceedings</strong>—whether judicial, quasi-judicial, administrative, or investigatory. It covers stages outside of trial proper, including fact-finding investigations and preliminary investigations before the Ombudsman or the Department of Justice (<em>Tatad v. Sandiganbayan</em>; <em>Cagang v. Sandiganbayan</em>).</li></ol>',
			application:
				'Comparing the two rights point by point: (1) <strong>Persons protected</strong> — Speedy Trial protects only the accused in a criminal case, whereas Speedy Disposition protects all persons and all parties; (2) <strong>Proceedings covered</strong> — Speedy Trial applies only to criminal judicial proceedings, whereas Speedy Disposition covers judicial, quasi-judicial, administrative, and investigatory proceedings; and (3) <strong>Stage and enforcement</strong> — Speedy Trial covers the period from arraignment up to promulgation of judgment under Rule 119 and R.A. 8493 continuous trial deadlines (30 days from pre-trial order to commence; 180-day overall trial limit), whereas Speedy Disposition extends outside trial proper to fact-finding and preliminary investigations before the Ombudsman or the DOJ.',
			conclusion:
				'Thus, the Right to a Speedy Trial governs the trial proper of an accused in a criminal case, while the Right to the Speedy Disposition of Cases protects all parties across all stages and types of proceedings, including preliminary and fact-finding investigations.'
		}
	},
	{
		id: 'crimpro:alac:finals-8a',
		title: 'Q8(a) — Systemic Judicial Delay (Motion to Dismiss)',
		topic: 'Finals · Part 4: Trial, Evidence & Demurrer',
		source: 'Finals',
		factPattern: Q8_FACTS,
		question: '(a) Is the trial judge’s denial of the motion to dismiss correct? Explain.',
		modelAnswer: {
			answer: 'NO, the trial judge’s denial is INCORRECT.',
			legalBasis:
				'<p>Under Article III, Section 16 (Right to Speedy Disposition of Cases) and Article III, Section 14(2) (Right to a Speedy Trial) of the 1987 Constitution, and applying the <em>Barker v. Wingo</em> balancing test adopted in <em>Cagang v. Sandiganbayan</em>, an unexcused delay of two and a half years to render judgment after submission is vexatious, capricious, and oppressive.</p><p>The Supreme Court has consistently ruled that <strong>heavy caseloads, docket congestion, and lack of branch personnel do not justify systemic judicial delay</strong>. If a judge cannot decide a case within the mandatory 90-day period under Article VIII, Section 15 of the Constitution, the judge must seasonably request an extension of time from the Supreme Court.</p>',
			application:
				'Branch 15 allowed two and a half years to lapse after the Estafa case was submitted for decision without securing an extension from the Supreme Court. Neither the 1,500-case docket nor the resignation of a legal researcher excuses this constitutional breach.',
			conclusion:
				'The motion to dismiss should have been granted. Dismissal of a criminal case for violation of the right to speedy trial/disposition operates as an ACQUITTAL on the merits, and Double Jeopardy attaches immediately.'
		}
	},
	{
		id: 'crimpro:alac:finals-8b',
		title: 'Q8(b) — Remedies Against Systemic Judicial Delay',
		topic: 'Finals · Part 4: Trial, Evidence & Demurrer',
		source: 'Finals',
		factPattern: Q8_FACTS,
		question: '(b) What other legal or administrative remedies may be taken against the judge?',
		modelAnswer: {
			answer:
				'The aggrieved party may file (1) a Petition for Mandamus under Rule 65 before the Court of Appeals, and (2) an Administrative Complaint before the Judicial Integrity Board (JIB) / Office of the Court Administrator (OCA).',
			legalBasis:
				'<ol><li><strong>Petition for Mandamus (Rule 65):</strong> The rendition of a decision within the mandatory constitutional 90-day period (Article VIII, Section 15, 1987 Constitution) is a mandatory ministerial duty enforceable by mandamus.</li><li><strong>Administrative Complaint with the Judicial Integrity Board (JIB) / Office of the Court Administrator (OCA):</strong> Undue delay in rendering a decision beyond the reglementary period without an approved extension constitutes Gross Inefficiency and Undue Delay in Rendering a Decision, warranting disciplinary sanctions, fines, or suspension (<em>OCA v. Janolo</em>).</li></ol>',
			application:
				'Either the accused or the State may seek a writ of mandamus from the Court of Appeals to compel the Branch 15 judge to perform his ministerial duty of rendering judgment, and simultaneously initiate administrative proceedings before the JIB/OCA to hold the judge administratively liable for gross inefficiency and undue delay.',
			conclusion:
				'Both Rule 65 Mandamus and an administrative complaint before the JIB/OCA are available against the judge.'
		}
	},

	// =========================================================================
	// Part 5: Judgment & Post-Judgment Remedies (Q9–Q10)
	// =========================================================================
	{
		id: 'crimpro:alac:finals-5a',
		title: 'Q9(a) — Promulgation in Absentia & Appeal',
		topic: 'Finals · Part 5: Judgment & Post-Judgment Remedies',
		source: 'Finals',
		factPattern: Q9_FACTS,
		question: '(a) Did Henry validly perfect his appeal from the judgment promulgated in absentia?',
		modelAnswer: {
			answer: 'No, Henry forfeited his right to appeal.',
			legalBasis:
				'<p>Under Rule 120, Section 6 of the Rules of Court (<em>Estrada v. People</em>, G.R. No. 162371), if the accused fails to appear at the promulgation of judgment without justifiable cause, the promulgation shall be made by recording the judgment in the criminal docket. <strong>The accused loses the remedies available against the judgment, including the right to appeal.</strong></p><p>To regain these remedies, the accused must <strong>surrender within fifteen (15) days from date of promulgation</strong> and file a Motion for Leave of Court to avail of remedies, proving that his absence was due to a justifiable cause.</p>',
			application:
				'Henry failed to surrender within the non-extendible 15-day period; his counsel merely filed a Notice of Appeal on the 20th day. Furthermore, oversleeping does not constitute a justifiable reason in law.',
			conclusion: 'The judgment of conviction has become final and executory. Henry lost his right to appeal.'
		}
	},
	{
		id: 'crimpro:alac:finals-5b',
		title: 'Q9(b) — Failure to File Appeal Memorandum',
		topic: 'Finals · Part 5: Judgment & Post-Judgment Remedies',
		source: 'Finals',
		factPattern: Q9_FACTS,
		question: '(b) Was the RTC\'s outright dismissal of Ian\'s criminal appeal due to the failure to file an Appeal Memorandum valid?',
		modelAnswer: {
			answer: 'No, the RTC’s outright dismissal of Ian’s appeal was invalid.',
			legalBasis:
				'<p>Under Rule 122, Section 9(b) of the Revised Rules of Criminal Procedure, as interpreted in the landmark case of <strong><em>Sanico v. People</em> (G.R. No. 198753)</strong>, the failure of the appellant to file an Appeal Memorandum in an appeal from the MTC to the RTC <strong>is NOT a ground for the dismissal of a criminal appeal</strong>.</p><p>Unlike in civil appeals governed by Rule 40 where the failure to submit a memorandum results in dismissal, in criminal cases the life and personal liberty of the accused are at stake. Therefore, the RTC is under a mandatory duty to <strong>decide the appeal on the merits based on the original trial record and transcripts of stenographic notes (TSNs)</strong> transmitted by the first-level court.</p>',
			application:
				'The RTC applied the civil procedure rule erroneously. Ian\'s counsel\'s procedural omission did not divest the RTC of its duty to review the correctness of the conviction on the basis of the trial records.',
			conclusion: 'The dismissal was improper. The RTC must reinstate the appeal and adjudicate the case on its merits.'
		}
	},
	{
		id: 'crimpro:alac:finals-9',
		title: 'Q10 — Prosecution’s Remedy Against a Sham Acquittal',
		topic: 'Finals · Part 5: Judgment & Post-Judgment Remedies',
		source: 'Finals',
		factPattern: Q10_FACTS,
		question: 'What is the proper procedural remedy of the prosecution against the judge’s actions? Explain.',
		modelAnswer: {
			answer:
				'The proper procedural remedy is for the State, through the Office of the Solicitor General (OSG), to file a Petition for Certiorari under Rule 65 before the appropriate higher appellate court.',
			legalBasis:
				'<p>While the general rule is that an acquittal cannot be appealed by the prosecution due to the constitutional bar against Double Jeopardy, this rule admits of a well-settled exception: <strong>when the trial court acted with grave abuse of discretion amounting to lack or excess of jurisdiction, or conducted a sham trial that denied the prosecution its right to due process</strong> (<em>Galman v. Sandiganbayan</em>; <em>People v. Velasco</em>).</p><p>A decision rendered in violation of due process is void <em>ab initio</em>, and because a void order has no legal existence, double jeopardy never attaches.</p>',
			application:
				'By <em>motu proprio</em> dismissing the Plunder case immediately after the prosecution rested—without affording the prosecution the opportunity to file its formal offer of documentary exhibits or to be heard—the trial court flagrantly denied the State due process of law. Consequently, the dismissal order is void <em>ab initio</em> and did not trigger double jeopardy.',
			conclusion:
				'A Petition for Certiorari under Rule 65 (filed through the OSG) is the proper remedy to declare the dismissal void and remand the case for continuation of proceedings.'
		}
	}
];
