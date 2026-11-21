import type { McqQuestion, ModuleTopic } from '$lib/types';

/** Lightweight topic list for Criminal Procedure so MCQs and shells render topic filters without loading the 18 Rule chapters. */
export const crimproTopics: ModuleTopic[] = [
	{
		"id": "finals",
		"name": "FINALS",
		"eyebrow": "REQUISITES & RULES DRILL",
		"desc": "47 high-yield multiple-choice questions based on all 5 Criminal Procedure Finals Requisites topics."
	},
	{
		"id": "quiz1",
		"name": "Quiz 1: Rules 110–114",
		"eyebrow": "PRACTICE QUIZ",
		"desc": "25 situational multiple-choice questions on Rules 110–114"
	},
	{
		"id": "quiz2",
		"name": "Quiz 2: Rules 115–119",
		"eyebrow": "PRACTICE QUIZ",
		"desc": "25 situational multiple-choice questions on Rules 115–119"
	},
	{
		"id": "quiz3",
		"name": "Quiz 3: Rules 120–124",
		"eyebrow": "PRACTICE QUIZ",
		"desc": "25 situational multiple-choice questions on Rules 120–124"
	},
	{
		"id": "quiz4",
		"name": "Quiz 4: Rules 125–127",
		"eyebrow": "PRACTICE QUIZ",
		"desc": "27 situational multiple-choice questions on Rules 125–127"
	},
	{
		"id": "r110",
		"name": "R110 Prosecution of Offenses",
		"eyebrow": "RULE 110",
		"desc": "Prosecution of Offenses"
	},
	{
		"id": "r111",
		"name": "R111 Civil Action",
		"eyebrow": "RULE 111",
		"desc": "Prosecution of Civil Action"
	},
	{
		"id": "r112",
		"name": "R112 Preliminary Investigation",
		"eyebrow": "RULE 112",
		"desc": "Preliminary Investigation"
	},
	{
		"id": "r113",
		"name": "R113 Arrest",
		"eyebrow": "RULE 113",
		"desc": "Arrest"
	},
	{
		"id": "r114",
		"name": "R114 Bail",
		"eyebrow": "RULE 114",
		"desc": "Bail"
	},
	{
		"id": "r115",
		"name": "R115 Rights of the Accused",
		"eyebrow": "RULE 115",
		"desc": "Rights of the Accused"
	},
	{
		"id": "r116",
		"name": "R116 Arraignment and Plea",
		"eyebrow": "RULE 116",
		"desc": "Arraignment and Plea"
	},
	{
		"id": "r117",
		"name": "R117 Motion to Quash",
		"eyebrow": "RULE 117",
		"desc": "Motion to Quash"
	},
	{
		"id": "r118",
		"name": "R118 Pre-Trial",
		"eyebrow": "RULE 118",
		"desc": "Pre-Trial"
	},
	{
		"id": "r119",
		"name": "R119 Trial",
		"eyebrow": "RULE 119",
		"desc": "Trial"
	},
	{
		"id": "r120",
		"name": "R120 Judgment",
		"eyebrow": "RULE 120",
		"desc": "Judgment"
	},
	{
		"id": "r121",
		"name": "R121 New Trial / MR",
		"eyebrow": "RULE 121",
		"desc": "New Trial or Reconsideration"
	},
	{
		"id": "r122",
		"name": "R122 Appeal",
		"eyebrow": "RULE 122",
		"desc": "Appeal"
	},
	{
		"id": "r123",
		"name": "R123 Procedure in MTCs",
		"eyebrow": "RULE 123",
		"desc": "Procedure in the Municipal Trial Courts"
	},
	{
		"id": "r124",
		"name": "R124 Procedure in the CA",
		"eyebrow": "RULE 124",
		"desc": "Procedure in the Court of Appeals"
	},
	{
		"id": "r125",
		"name": "R125 Procedure in the SC",
		"eyebrow": "RULE 125",
		"desc": "Procedure in the Supreme Court"
	},
	{
		"id": "r126",
		"name": "R126 Search and Seizure",
		"eyebrow": "RULE 126",
		"desc": "Search and Seizure"
	},
	{
		"id": "r127",
		"name": "R127 Provisional Remedies",
		"eyebrow": "RULE 127",
		"desc": "Provisional Remedies in Criminal Cases"
	},
	{
		"id": "prescription",
		"name": "Prescription (R110 Sec. 1)",
		"eyebrow": "SPECIAL MODULE",
		"desc": "Periods, interruption, the DENR case study"
	},
	{
		"id": "mock",
		"name": "Integrated mock exam",
		"eyebrow": "RULES 110–120",
		"desc": "Mixed-Rule questions; identify the Rule yourself"
	},
	{
		"id": "twists_kit",
		"name": "Twist Sets (23 Sets · 148 MCQs)",
		"eyebrow": "ONE FACT FLIPS IT",
		"desc": "23 linked fact-pattern chains where changing a single fact flips the ruling across Rules 110–127."
	}
];

/** Watch-for notes for Rules 110–127, Prescription, and Mock Exam. */
export const ruleWatchFor: Record<string, string> = {
	"r110": "<strong>Watch for: which document, signed by whom, changed when.</strong>\n<ul>\n<li>Is it a <em>complaint</em> (sworn; victim or officer) or an <em>information</em> (prosecutor)? Is it a private crime?</li>\n<li>Amendment questions: before or after plea? Downgrade or exclusion? Did the <em>facts</em> change or only the caption?</li>\n<li>Venue is jurisdictional. Lack of the prosecutor's authority is not (Villa Gomez, 2020).</li>\n</ul>",
	"r111": "<strong>Watch for: the source of the civil claim and the timing.</strong>\n<ul>\n<li>Is the claim ex delicto (rides with the case) or independent (Arts. 32, 33, 34, 2176)?</li>\n<li>Reservation: before the prosecution presents evidence. Prejudicial question: before the prosecution rests.</li>\n<li>Acquittal: \"act did not exist\" vs. \"reasonable doubt.\" Death: before arraignment, pending appeal, or after finality?</li>\n</ul>",
	"r112": "<strong>Watch for: the penalty, the arrest, and who acted when.</strong>\n<ul>\n<li>Prescribed penalty ≥ 4y 2m 1d? Was the respondent arrested without a warrant (inquest)?</li>\n<li>Count the periods: 10/10/10 (Sec. 3), 5/10 (Sec. 4), 10/5/30 (Sec. 5), 15 and 5 (Sec. 6).</li>\n<li>DOJ or Ombudsman? Before or after the information was filed (Crespo)? Before or after arraignment?</li>\n</ul>",
	"r113": "<strong>Watch for: what the arresting officer personally saw or knew, and when.</strong>\n<ul>\n<li>Did he see an overt act (in flagrante), or arrive right after and gather facts himself (hot pursuit)? A tip is neither.</li>\n<li>How much time passed since the crime?</li>\n<li>Was the illegality raised before plea? Is the question about jurisdiction or about evidence?</li>\n</ul>",
	"r114": "<strong>Watch for: the penalty prescribed, the stage, and the court.</strong>\n<ul>\n<li>RP/life prescribed? Before or after conviction? Which court convicted (MTC or RTC)?</li>\n<li>Penalty imposed above six years? Any bail-negating circumstance? Did the conviction downgrade a non-bailable charge?</li>\n<li>Was there a hearing with a summary of evidence? Where was the bail filed?</li>\n</ul>",
	"r115": "<strong>Watch for: arraignment, notice, and what the accused said on direct.</strong>\n<ul>\n<li>Was he arraigned before he disappeared? Was he notified?</li>\n<li>Did he testify? On what? Is the question about the crime charged or a different one?</li>\n<li>Speedy trial or speedy disposition? Did he ask for trial before moving to dismiss?</li>\n</ul>",
	"r116": "<strong>Watch for: what exactly the accused said, and when.</strong>\n<ul>\n<li>Is the plea conditional or exculpatory? Is the offense capital (searching inquiry)?</li>\n<li>Plea bargain: lesser <em>included</em> offense? Consents? Before trial? Drug case (Estipona, Montierro)?</li>\n<li>Count the periods: 3/10/10 for detained accused; 30 days otherwise; 60 days for DOJ review.</li>\n</ul>",
	"r117": "<strong>Watch for: the ground, the timing, and the consent.</strong>\n<ul>\n<li>Is the ground in Sec. 3? Is it one of the four that survive the plea?</li>\n<li>Double jeopardy: was there a plea? Did the first case end without the accused's express consent (or with a dismissal amounting to acquittal)?</li>\n<li>Provisional dismissal: express consent? notice? Count 1 or 2 years from issuance.</li>\n</ul>",
	"r118": "<strong>Watch for: who signed, who was absent, what was marked.</strong>\n<ul>\n<li>Is the admission written and signed by both the accused and counsel?</li>\n<li>Who was absent — counsel, prosecutor, accused, or complainant? (No default in criminal cases.)</li>\n<li>Is a compromise being used to end the criminal case? Is the witness sick — where must the examination be held?</li>\n</ul>",
	"r119": "<strong>Watch for: timing and leave.</strong>\n<ul>\n<li>Has the prosecution rested? (State witness motion must come before; demurrer after.)</li>\n<li>Was leave of court obtained before the demurrer?</li>\n<li>Whose witness is being examined early, and before whom?</li>\n</ul>",
	"r120": "<strong>Watch for: what was charged vs. proved, and who was in the courtroom.</strong>\n<ul>\n<li>Is the offense proved included in, or inclusive of, the offense charged? Convict of the lesser.</li>\n<li>Was the accused present at promulgation? If not, did he surrender and move within 15 days?</li>\n<li>Did the acquittal say whether the act existed? Did the accused apply for probation (waiving appeal)?</li>\n</ul>",
	"r121": "<strong>Watch for: who is asking, and what the fix needs.</strong>\n<ul>\n<li>Is the judgment a conviction? Is the movant the accused? If the court acted alone, did the accused consent?</li>\n<li>Does correcting the error need new evidence (new trial) or only a second look (reconsideration)?</li>\n<li>Was the \"new\" evidence really undiscoverable at trial? Are affidavits attached?</li>\n<li>After denial, count a fresh 15 days from notice.</li>\n</ul>",
	"r122": "<strong>Watch for: who appealed, from which court, by what mode.</strong>\n<ul>\n<li>Is the appellant the People against an acquittal? Barred — only Rule 65 for jurisdictional error.</li>\n<li>Did the RTC decide as a trial court or as an appellate court? Notice of appeal vs. Rule 42.</li>\n<li>Reclusion perpetua or life imprisonment? Notice of appeal to the CA (Mateo).</li>\n<li>Did the accused appeal? Then the penalty may go up.</li>\n<li>Several accused: is the appellate ruling favorable <i>and</i> applicable to the others?</li>\n</ul>",
	"r123": "<strong>Watch for: which court, and which track.</strong>\n<ul>\n<li>Is the case in a first-level court? Then the RTC rules apply unless a provision is court-specific.</li>\n<li>Is the offense covered by the 2022 Expedited Rules? Check the penalty and the kind of law violated.</li>\n<li>Do not cite the 1991 Summary Procedure thresholds.</li>\n</ul>",
	"r124": "<strong>Watch for: counsel, briefs and flight.</strong>\n<ul>\n<li>Was the appellant represented by counsel de oficio? Then no dismissal for a missing brief.</li>\n<li>Was the extension moved before the period lapsed?</li>\n<li>Did the appellant escape, jump bail or leave the country during the appeal?</li>\n<li>Reclusion perpetua or life imprisonment? Enter judgment; notice of appeal to the SC.</li>\n<li>New trial in the CA? Newly discovered evidence only.</li>\n</ul>",
	"r125": "<strong>Watch for: the penalty and the vote.</strong>\n<ul>\n<li>RP or LI from the CA? Notice of appeal, not Rule 45.</li>\n<li>A deadlocked en banc acquits — after re-deliberation.</li>\n</ul>",
	"r126": "<strong>Watch for: warrant or exception, and the order of events.</strong>\n<ul>\n<li>With a warrant: did the judge personally ask searching questions? One offense? Particular place and things? Served within 10 days, in daytime, before proper witnesses?</li>\n<li>Without a warrant: name the exception and its requisites. Did the arrest come before the search?</li>\n<li>Was the basis only a tip? (Sapla, Cogaed.) Did the police have time to get a warrant? (Aminnudin.)</li>\n<li>Was the searcher a private person acting alone? (Marti.)</li>\n<li>Once a case is filed, the motion to quash or suppress goes to that court.</li>\n</ul>",
	"r127": "<strong>Watch for: is the civil action still in the criminal case?</strong>\n<ul>\n<li>Was it reserved, waived or filed first? Then no provisional remedy in the criminal case.</li>\n<li>Which of the four attachment grounds is present?</li>\n<li>Attachment secures civil liability — not the fine.</li>\n</ul>",
	"prescription": "<strong>Watch for: which law, which date, which office.</strong>\n<ul>\n<li>RPC or special law? (Start, suspension and interruption differ.)</li>\n<li>Was the complaint filed before or after Consebido (April 2, 2025)? Is the offense under the Expedited Rules?</li>\n<li>Where was it filed — prosecutor, agency, court? Was the agency's proceeding one that may lead to prosecution?</li>\n</ul>",
	"mock": "<strong>Watch for: which Rule?</strong> These items mix Rules and do not say which applies. Find the stage first (filing, investigation, arrest, bail, arraignment, quash, pre-trial, trial, judgment), then ask whether arraignment has happened, who acted, and whether a post-2017 ruling changed the answer."
};

/** Pre-extracted True/False MCQs from Rules 110–127, Prescription, and Integrated Mock Exam for lightweight on-demand loading. */
export const ruleTrueFalseMcqs: McqQuestion[] = [
	{
		"id": "crimpro:r110:tf1",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? An information must be sworn to by the prosecutor who files it.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only a complaint must be sworn (Sec. 3); an information is subscribed by the prosecutor, who acts under his oath of office (Sec. 4).",
		"legalBasis": "Rule 110, Secs. 3–4"
	},
	{
		"id": "crimpro:r110:tf2",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? A complaint may be subscribed by any peace officer.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True. Sec. 3 lists the offended party, any peace officer, or other public officer charged with enforcing the law violated.",
		"legalBasis": "Rule 110, Sec. 3"
	},
	{
		"id": "crimpro:r110:tf3",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? The designation of the offense in the caption of the information determines the crime for which the accused may be convicted.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The recital of facts in the body controls, not the caption or the law cited. Tiu, pp. 46–47; Malto v. People; Pacoy v. Cajigal. Trap: Students anchor on the caption because it is the first thing they read.",
		"legalBasis": "recital of ultimate facts controls"
	},
	{
		"id": "crimpro:r110:tf4",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? Before the accused enters a plea, the prosecutor may amend the information in any respect without leave of court.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. An amendment before plea that downgrades the offense or excludes an accused requires a motion by the prosecutor, notice to the offended party and leave of court (Sec. 14).",
		"legalBasis": "downgrade; exclude; notice to offended party; leave"
	},
	{
		"id": "crimpro:r110:tf5",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? After plea, a formal amendment may be made without leave of court so long as it does not prejudice the accused.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. After plea, a formal amendment needs both leave of court and absence of prejudice.",
		"legalBasis": "Sec. 14; leave of court"
	},
	{
		"id": "crimpro:r110:tf6",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? Improper venue in a criminal case is waived if the accused does not raise it in a motion to quash.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Venue is jurisdictional in criminal cases; lack of jurisdiction over the offense is not waived (Rule 117, Sec. 9) and may be raised at any stage.",
		"legalBasis": "venue jurisdictional; Isip v. People; Rule 117, Sec. 9"
	},
	{
		"id": "crimpro:r110:tf7",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? In an MTC case, when the assigned prosecutor is unavailable, the offended party may prosecute the case.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True — as may any peace officer or the public officer charged with enforcing the law violated, until the prosecutor actually intervenes or the case is elevated to the RTC (Sec. 5; OCA Circular No. 39-2002).",
		"legalBasis": "MTC/MCTC; prosecutor unavailable; ceases on intervention or elevation"
	},
	{
		"id": "crimpro:r110:tf8",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? A private complainant may appeal a judgment of acquittal insofar as the criminal aspect is concerned.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only the State, through the OSG, may appeal the criminal aspect; the private complainant may appeal the civil aspect (Villareal v. Aliga).",
		"legalBasis": "OSG; civil aspect only"
	},
	{
		"id": "crimpro:r110:tf9",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? Rape may be prosecuted only upon a complaint filed by the offended party or her parents, grandparents or guardian.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. RA 8353 (1997) reclassified rape as a crime against persons; it is a public crime. Trap: Old reviewers list rape among the private crimes of Art. 344.",
		"legalBasis": "RA 8353; crime against persons"
	},
	{
		"id": "crimpro:r110:tf10",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? An information filed by an assistant prosecutor without the prior written approval of the city prosecutor is void, and the defect may be raised at any time, even on appeal.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Under Villa Gomez v. People (2020, En Banc), the defect is not jurisdictional and is waived if not raised in a motion to quash before plea.",
		"legalBasis": "Villa Gomez; Rule 117, Sec. 3(d); waivable"
	},
	{
		"id": "crimpro:r110:tf11",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? Where the information alleges only that the killing was committed \"with treachery,\" the accused can never be convicted of murder.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Under People v. Solar (2019), the bare label is insufficient, but if the accused fails to move to quash or for a bill of particulars before arraignment, the defect is waived and treachery may be appreciated if proven. Trap: Confusing a defectively alleged circumstance (waivable) with an unalleged one (never appreciated).",
		"legalBasis": "Solar; ultimate facts; waiver"
	},
	{
		"id": "crimpro:r110:tf12",
		"topicId": "r110",
		"topic": "R110 Prosecution of Offenses",
		"tag": "memorization",
		"question": "True or false? An information charging two distinct offenses is void and cannot support any conviction.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Duplicity is a ground to quash (Rule 117, Sec. 3[f]); if not raised before plea it is waived, and the court may convict of as many offenses as are charged and proved (Rule 120, Sec. 3).",
		"legalBasis": "Sec. 13; waiver; Rule 120, Sec. 3"
	},
	{
		"id": "crimpro:r111:tf1",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? When a criminal action is instituted, all civil actions arising from the same act are deemed instituted with it.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only the civil action for civil liability arising from the offense charged (ex delicto) is deemed instituted; independent civil actions under Arts. 32, 33, 34 and 2176 are not.",
		"legalBasis": "Sec. 1(a); Sec. 3"
	},
	{
		"id": "crimpro:r111:tf2",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? In a prosecution for violation of BP 22, the offended party may reserve the right to file the civil action separately.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Sec. 1(b): no reservation is allowed; the criminal action is deemed to include the civil action.",
		"legalBasis": "Sec. 1(b)"
	},
	{
		"id": "crimpro:r111:tf3",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? The reservation of the civil action may be made at any time before the prosecution rests.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It must be made before the prosecution starts presenting its evidence (Sec. 1[a]). Trap: Confusing it with the period for a petition to suspend for prejudicial question (before the prosecution rests).",
		"legalBasis": "before the prosecution starts presenting its evidence"
	},
	{
		"id": "crimpro:r111:tf4",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? The accused may file a counterclaim for damages against the private complainant in the criminal case.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. No counterclaim, cross-claim or third-party complaint may be filed by the accused in the criminal case; he may litigate it in a separate civil action (Sec. 1[a]; Casupanan v. Laroya).",
		"legalBasis": "no counterclaim; separate civil action"
	},
	{
		"id": "crimpro:r111:tf5",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? An independent civil action under Art. 33 of the Civil Code must be reserved in the criminal action.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Under the 2000 Rules, independent civil actions are not deemed instituted with the criminal action and need not be reserved (Tiu, p. 60).",
		"legalBasis": "Sec. 3; no reservation"
	},
	{
		"id": "crimpro:r111:tf6",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? A judgment of acquittal on reasonable doubt extinguishes the civil liability ex delicto.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Civil liability survives and may be proved by preponderance of evidence, in the same case or separately (Art. 29; Padilla v. CA). It is extinguished only by a finding that the act did not exist.",
		"legalBasis": "Art. 29; Sec. 2 last par."
	},
	{
		"id": "crimpro:r111:tf7",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? A final judgment in a civil action absolving the defendant bars a criminal action for the same act.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Sec. 5: it is not a bar.",
		"legalBasis": "Sec. 5"
	},
	{
		"id": "crimpro:r111:tf8",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? The court may suspend the criminal action motu proprio upon learning of a prejudicial question.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. A petition is required; suspension is not motu proprio (Sec. 6; Tiu, citing IBP v. Atienza).",
		"legalBasis": "petition; no motu proprio"
	},
	{
		"id": "crimpro:r111:tf9",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? If the accused dies after arraignment while his appeal is pending, the civil indemnity awarded by the trial court may still be collected from his estate.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Death before final judgment extinguishes criminal liability and civil liability ex delicto (Sec. 4; Art. 89[1]; Bayotas). Claims from other sources must be pursued separately.",
		"legalBasis": "Sec. 4; Bayotas"
	},
	{
		"id": "crimpro:r111:tf10",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? A civil action for declaration of nullity of marriage filed after an information for parricide is a prejudicial question.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The civil action must be previously instituted, and its outcome would not determine guilt, since the marriage subsisted when the crime was committed (Pimentel v. Pimentel, 2010).",
		"legalBasis": "Pimentel; previously instituted"
	},
	{
		"id": "crimpro:r111:tf11",
		"topicId": "r111",
		"topic": "R111 Civil Action",
		"tag": "memorization",
		"question": "True or false? The court may dismiss an estafa case once the offended party, having been paid in full, files an affidavit of desistance.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Payment and compromise affect only civil liability; estafa is a public offense (Art. 2034; Metrobank v. Reynaldo; Cabico v. Dimaculangan). The court may dismiss only if, without the complainant, the evidence is insufficient — a judgment on the evidence, not on the payment. Trap: In practice desistance often leads to dismissal for lack of evidence; the trap is giving payment as the legal ground.",
		"legalBasis": "Art. 2034; Metrobank v. Reynaldo"
	},
	{
		"id": "crimpro:r112:tf1",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? The right to preliminary investigation is guaranteed by the Bill of Rights.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It is a statutory right — but a substantive one and a component of due process when granted (Tiu, p. 67).",
		"legalBasis": "statutory; substantive; waivable"
	},
	{
		"id": "crimpro:r112:tf2",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? Preliminary investigation is required for offenses where the penalty prescribed by law is at least four years, two months and one day, without regard to the fine.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 1).",
		"legalBasis": "Sec. 1"
	},
	{
		"id": "crimpro:r112:tf3",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? Municipal trial court judges may conduct preliminary investigations of cases within their territory.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. That authority was removed by A.M. No. 05-8-26-SC, effective October 3, 2005.",
		"legalBasis": "A.M. No. 05-8-26-SC"
	},
	{
		"id": "crimpro:r112:tf4",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? A respondent may file a motion to dismiss in lieu of a counter-affidavit.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Sec. 3(c) expressly disallows it.",
		"legalBasis": "Sec. 3(c)"
	},
	{
		"id": "crimpro:r112:tf5",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? At the clarificatory hearing, the respondent's counsel may cross-examine the complainant's witnesses.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The parties may be present but without the right to examine or cross-examine; they may submit questions (Sec. 3[e]).",
		"legalBasis": "Sec. 3(e)"
	},
	{
		"id": "crimpro:r112:tf6",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? The absence of a required preliminary investigation is a ground for a motion to quash.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It is not among the grounds in Rule 117, Sec. 3; the remedy is to ask the court to suspend proceedings and remand for PI, before plea (Larrañaga; Socrates v. Sandiganbayan).",
		"legalBasis": "not a ground to quash; remand"
	},
	{
		"id": "crimpro:r112:tf7",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? Before issuing a warrant of arrest, the judge must personally examine the complainant and his witnesses.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Personal evaluation of the prosecutor's resolution and supporting evidence suffices; personal examination is optional (Soliven v. Makasiar; Ocampo v. Abando).",
		"legalBasis": "Soliven; Ocampo; personal evaluation"
	},
	{
		"id": "crimpro:r112:tf8",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? A person arrested without a warrant may ask for preliminary investigation before the information is filed only if he signs a waiver of Art. 125 in the presence of counsel.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 6; RA 7438). He may still apply for bail, and the PI must end within 15 days.",
		"legalBasis": "Sec. 6; Art. 125 waiver; counsel"
	},
	{
		"id": "crimpro:r112:tf9",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? The accused may file a motion for judicial determination of probable cause before arraignment.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It is a prohibited motion under the 2017 Revised Guidelines for Continuous Trial, denied outright.",
		"legalBasis": "A.M. No. 15-06-10-SC"
	},
	{
		"id": "crimpro:r112:tf10",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? Once the Secretary of Justice reverses a finding of probable cause, the trial court must grant the prosecution's motion to withdraw the information.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The court must make its own independent assessment; the Secretary's resolution is persuasive, not binding (Crespo; Lanier v. People, 2014).",
		"legalBasis": "Crespo; Lanier"
	},
	{
		"id": "crimpro:r112:tf11",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? A respondent may challenge the Ombudsman's finding of probable cause in a criminal case by Rule 65 certiorari in the Court of Appeals.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The petition is filed directly with the Supreme Court (Gatchalian v. Ombudsman, 2018).",
		"legalBasis": "Gatchalian; Rule 65; SC"
	},
	{
		"id": "crimpro:r112:tf12",
		"topicId": "r112",
		"topic": "R112 Preliminary Investigation",
		"tag": "memorization",
		"question": "True or false? If the prosecutor takes three years to resolve a simple complaint, the offense prescribes.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The filing interrupted prescription; delay may violate the right to speedy disposition (Cagang), which is a different ground for dismissal. Trap: Confusing prescription with speedy disposition.",
		"legalBasis": "interruption; Cagang"
	},
	{
		"id": "crimpro:r113:tf1",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? An arrest may be made only by actual physical restraint of the person.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It may also be made by the person's submission to the custody of the person making the arrest (Sec. 2).",
		"legalBasis": "Sec. 2"
	},
	{
		"id": "crimpro:r113:tf2",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? An arrest may be made at any time of the day or night.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 6).",
		"legalBasis": "Sec. 6"
	},
	{
		"id": "crimpro:r113:tf3",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? A warrant of arrest becomes void if not served within ten days from its receipt by the police.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The 10 days is the period for the officers to execute and report; the warrant remains valid until served or recalled (Tiu, p. 110). Trap: Confusing it with the 10-day life of a search warrant.",
		"legalBasis": "Sec. 4"
	},
	{
		"id": "crimpro:r113:tf4",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? The officer must have the warrant in his possession when he makes the arrest.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. He need not, but must show it as soon as practicable if the person arrested asks (Sec. 7).",
		"legalBasis": "Sec. 7"
	},
	{
		"id": "crimpro:r113:tf5",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? A private person may make a warrantless arrest in the same instances as a peace officer.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True. Sec. 5 applies to \"a peace officer or a private person.\" A private person informs the arrestee of his intention to arrest and the cause (Sec. 9).",
		"legalBasis": "Sec. 5; Sec. 9"
	},
	{
		"id": "crimpro:r113:tf6",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? A reliable tip from a confidential informant is sufficient to justify an in flagrante delicto arrest.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Without an overt act indicative of a crime in the officer's presence, a tip is insufficient (People v. Molina; People v. Laguio).",
		"legalBasis": "overt act; Molina; Laguio"
	},
	{
		"id": "crimpro:r113:tf7",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? In a hot pursuit arrest, the arresting officer must have personally witnessed the commission of the crime.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. He needs probable cause based on personal knowledge of facts or circumstances; he may rely on information from the victim or witnesses gathered at the scene (Pestilos v. Generoso).",
		"legalBasis": "Pestilos"
	},
	{
		"id": "crimpro:r113:tf8",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? The illegality of a warrantless arrest may be raised for the first time on appeal.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It must be raised before plea; otherwise it is waived (People v. Cunanan; People v. Palma).",
		"legalBasis": "before plea; waiver"
	},
	{
		"id": "crimpro:r113:tf9",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? An accused who pleaded without objecting to his illegal arrest may no longer object to the admission of the drugs seized from him during that arrest.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Waiver of the illegal arrest is not a waiver of the inadmissibility of evidence seized (De la Cruz v. People; Villanueva v. People, 2014).",
		"legalBasis": "De la Cruz; Villanueva"
	},
	{
		"id": "crimpro:r113:tf10",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? An accused whose warrantless arrest is proven illegal must be acquitted.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Illegality of arrest is not a ground for acquittal; conviction may rest on other evidence (People v. Yau; People v. Velasco).",
		"legalBasis": "Yau; Velasco"
	},
	{
		"id": "crimpro:r113:tf11",
		"topicId": "r113",
		"topic": "R113 Arrest",
		"tag": "memorization",
		"question": "True or false? An accused who applies for bail is deemed to have waived his objection to the legality of his arrest.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Under Rule 114, Sec. 26, bail does not bar the challenge, provided it is raised before plea.",
		"legalBasis": "Rule 114, Sec. 26"
	},
	{
		"id": "crimpro:r114:tf1",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? Bail may be posted by a person who is not yet in the custody of the law.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Bail is security for the release of a person \"in custody of the law\"; a fugitive must first surrender (Sec. 1; Tiu, p. 116).",
		"legalBasis": "custody of the law"
	},
	{
		"id": "crimpro:r114:tf2",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? Before conviction by the RTC, an accused charged with homicide is entitled to bail as a matter of right.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True. Homicide (reclusion temporal) is not punishable by death, RP or life (Sec. 4[b]).",
		"legalBasis": "Sec. 4"
	},
	{
		"id": "crimpro:r114:tf3",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? Bail posted in the RTC remains effective until the judgment becomes final.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It remains in force until promulgation of the RTC judgment (Sec. 2[a]); continued liberty on appeal requires bail pending appeal and the bondsman's consent.",
		"legalBasis": "Sec. 2(a); Maguddatu"
	},
	{
		"id": "crimpro:r114:tf4",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? An accused charged with murder in Manila but arrested in Baguio may post bail with any RTC in Baguio.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Bail in a murder case is discretionary; the application may only be filed in the court where the case is pending (Sec. 17[b]).",
		"legalBasis": "Sec. 17(b)"
	},
	{
		"id": "crimpro:r114:tf5",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? The judge may receive the cash bail personally to avoid delay in the release of the accused.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Cash is deposited with the collector of internal revenue or the provincial, city or municipal treasurer (or the clerk of court); a judge who receives it commits gross misconduct (Lachica v. Tormis).",
		"legalBasis": "Sec. 14; Lachica"
	},
	{
		"id": "crimpro:r114:tf6",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? If the prosecution does not object, the court may grant bail to an accused charged with murder without a hearing.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. A hearing is mandatory where bail is discretionary, regardless of the prosecution's stance (Serapio; Domingo v. Pagayatan).",
		"legalBasis": "mandatory hearing"
	},
	{
		"id": "crimpro:r114:tf7",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? In a bail hearing for an offense punishable by reclusion perpetua, the accused must prove that the evidence of his guilt is not strong.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The prosecution has the burden of showing that evidence of guilt is strong (Sec. 8).",
		"legalBasis": "Sec. 8"
	},
	{
		"id": "crimpro:r114:tf8",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? Whether an offense is \"punishable by reclusion perpetua\" for bail purposes depends on the penalty that may actually be imposed after considering mitigating circumstances.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The penalty prescribed by law controls, not the imposable penalty (People v. Valdez, 2015, in Tiu; Sec. 6).",
		"legalBasis": "prescribed penalty"
	},
	{
		"id": "crimpro:r114:tf9",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? After conviction by the RTC imposing a penalty of 10 years, the accused must be granted bail pending appeal if the prosecution fails to prove any bail-negating circumstance.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Bail remains discretionary; the court may still deny it (Leviste v. CA, 2010).",
		"legalBasis": "Leviste"
	},
	{
		"id": "crimpro:r114:tf10",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? By posting bail, the accused waives his right to question the legality of his warrantless arrest.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Sec. 26: bail does not bar the challenge, if raised before plea.",
		"legalBasis": "Sec. 26"
	},
	{
		"id": "crimpro:r114:tf11",
		"topicId": "r114",
		"topic": "R114 Bail",
		"tag": "memorization",
		"question": "True or false? An accused charged with murder but convicted of homicide may apply for bail pending appeal with the RTC so long as the RTC has not transmitted the record.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. When the conviction changed the offense from non-bailable to bailable, the application can only be filed with and resolved by the appellate court (Sec. 5, par. 1; Rule 120, Sec. 6). Trap: The general rule (RTC acts until it transmits the record) has this exception.",
		"legalBasis": "Sec. 5; non-bailable to bailable"
	},
	{
		"id": "crimpro:r115:tf1",
		"topicId": "r115",
		"topic": "R115 Rights of the Accused",
		"tag": "memorization",
		"question": "True or false? An accused may be tried in absentia even before arraignment if he was duly notified.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Trial in absentia requires prior arraignment (Const., Art. III, Sec. 14[2]).",
		"legalBasis": "arraignment"
	},
	{
		"id": "crimpro:r115:tf2",
		"topicId": "r115",
		"topic": "R115 Rights of the Accused",
		"tag": "memorization",
		"question": "True or false? The accused's refusal to testify may be considered as evidence of guilt.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. \"His silence shall not in any manner prejudice him\" (Sec. 1[d]).",
		"legalBasis": "Sec. 1(d)"
	},
	{
		"id": "crimpro:r115:tf3",
		"topicId": "r115",
		"topic": "R115 Rights of the Accused",
		"tag": "memorization",
		"question": "True or false? An accused under custody who escapes after arraignment waives his right to be present only on the trial date immediately following his escape.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. He waives presence \"on all subsequent trial dates until custody over him is regained\" (Sec. 1[c]).",
		"legalBasis": "Sec. 1(c)"
	},
	{
		"id": "crimpro:r115:tf4",
		"topicId": "r115",
		"topic": "R115 Rights of the Accused",
		"tag": "memorization",
		"question": "True or false? The court's duty to appoint counsel de officio is mandatory at arraignment.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Libuit v. People; Rule 116, Sec. 6).",
		"legalBasis": "arraignment"
	},
	{
		"id": "crimpro:r115:tf5",
		"topicId": "r115",
		"topic": "R115 Rights of the Accused",
		"tag": "memorization",
		"question": "True or false? Compelling the accused to submit to fingerprinting violates his right against self-incrimination.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Fingerprinting is a mechanical act, not testimonial; the right covers testimony and acts requiring intelligence and attention.",
		"legalBasis": "mechanical act"
	},
	{
		"id": "crimpro:r115:tf6",
		"topicId": "r115",
		"topic": "R115 Rights of the Accused",
		"tag": "memorization",
		"question": "True or false? An accused who takes the witness stand in his defense may refuse, on cross-examination, to answer questions on the crime charged that may incriminate him.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. He may be cross-examined on matters covered by his direct and connected matters; he may refuse only questions that would incriminate him for a different offense (Ayson).",
		"legalBasis": "Ayson"
	},
	{
		"id": "crimpro:r115:tf7",
		"topicId": "r115",
		"topic": "R115 Rights of the Accused",
		"tag": "memorization",
		"question": "True or false? Testimony given in a prior case is admissible against the accused only if he actually cross-examined the witness.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Opportunity to cross-examine suffices, with unavailability of the witness and identity of parties and subject matter (Sec. 1[f]).",
		"legalBasis": "opportunity"
	},
	{
		"id": "crimpro:r115:tf8",
		"topicId": "r115",
		"topic": "R115 Rights of the Accused",
		"tag": "memorization",
		"question": "True or false? A dismissal on the ground of violation of the right to speedy trial does not bar a new prosecution because the accused himself moved for dismissal.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It is equivalent to an acquittal; double jeopardy attaches (Rule 119, Sec. 9; Condrada, in Tiu).",
		"legalBasis": "acquittal; double jeopardy"
	},
	{
		"id": "crimpro:r115:tf9",
		"topicId": "r115",
		"topic": "R115 Rights of the Accused",
		"tag": "memorization",
		"question": "True or false? The right to speedy disposition may be invoked in a preliminary investigation before the Ombudsman.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True. Art. III, Sec. 16 covers all judicial, quasi-judicial and administrative bodies (Coscolluela; Cagang).",
		"legalBasis": "Art. III, Sec. 16"
	},
	{
		"id": "crimpro:r115:tf10",
		"topicId": "r115",
		"topic": "R115 Rights of the Accused",
		"tag": "memorization",
		"question": "True or false? Where the prosecution's evidence and the defense's evidence are evenly balanced, the presumption of regularity of the police officers' acts tips the scale toward conviction.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The equipoise rule favors the accused; the presumption of innocence prevails over the presumption of regularity.",
		"legalBasis": "equipoise; presumption of innocence"
	},
	{
		"id": "crimpro:r116:tf1",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? Counsel may enter the plea for the accused at arraignment if the accused is sick.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The accused must be present and personally enter his plea (Sec. 1[b]).",
		"legalBasis": "Sec. 1(b)"
	},
	{
		"id": "crimpro:r116:tf2",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? When the accused makes a conditional plea of guilty, the court shall enter a plea of not guilty.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 1[c]).",
		"legalBasis": "Sec. 1(c)"
	},
	{
		"id": "crimpro:r116:tf3",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? An accused who pleads guilty but claims self-defense remains bound by his plea of guilty.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. His plea is deemed withdrawn and a plea of not guilty entered (Sec. 1[d]).",
		"legalBasis": "Sec. 1(d)"
	},
	{
		"id": "crimpro:r116:tf4",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? A plea of guilty to a lesser offense may be made at any time before judgment.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. At arraignment, or after arraignment but before trial (Sec. 2).",
		"legalBasis": "before trial"
	},
	{
		"id": "crimpro:r116:tf5",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? When the accused pleads guilty to a lesser offense, the information must be amended to charge that offense.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. \"No amendment of the complaint or information is necessary\" (Sec. 2).",
		"legalBasis": "Sec. 2"
	},
	{
		"id": "crimpro:r116:tf6",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? If the offended party fails to appear at arraignment despite notice, the court may allow a plea of guilty to a lesser included offense with the conformity of the prosecutor alone.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 1[f]).",
		"legalBasis": "Sec. 1(f)"
	},
	{
		"id": "crimpro:r116:tf7",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? A motion for reconsideration of the prosecutor's resolution pending before the prosecutor's office is a ground to suspend arraignment.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only a petition for review pending at the DOJ or OP (Sec. 11[c]; Ramiscal v. Sandiganbayan).",
		"legalBasis": "Sec. 11(c); Ramiscal"
	},
	{
		"id": "crimpro:r116:tf8",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? Failure to move for a bill of particulars before arraignment waives the details desired.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Jalbuena; Solar).",
		"legalBasis": "before arraignment"
	},
	{
		"id": "crimpro:r116:tf9",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? Plea bargaining is prohibited in prosecutions under the Comprehensive Dangerous Drugs Act.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Estipona v. Lobrigo (2017) declared RA 9165, Sec. 23 unconstitutional; plea bargaining in drug cases follows the Supreme Court's framework.",
		"legalBasis": "Estipona"
	},
	{
		"id": "crimpro:r116:tf10",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? A conviction following an improvident plea of guilty must always be set aside and remanded.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only if the plea was the sole basis; if supported by independent evidence, it stands (Documento; Gambao).",
		"legalBasis": "sole basis"
	},
	{
		"id": "crimpro:r116:tf11",
		"topicId": "r116",
		"topic": "R116 Arraignment and Plea",
		"tag": "memorization",
		"question": "True or false? In a drug case, the court may approve a plea bargain over the prosecution's objection when the objection rests solely on a DOJ circular inconsistent with the Court's plea bargaining framework.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (People v. Montierro, 2022) — but not if the objection is valid and supported by evidence, e.g., strong evidence of guilt or recidivism.",
		"legalBasis": "Montierro"
	},
	{
		"id": "crimpro:r117:tf1",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? A motion to quash may be filed at any time before the prosecution rests.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Before plea (Sec. 1).",
		"legalBasis": "Sec. 1"
	},
	{
		"id": "crimpro:r117:tf2",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? A motion to quash may be made orally in open court.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It must be in writing, signed and specify its grounds (Sec. 2). (A provisional dismissal may be oral.)",
		"legalBasis": "Sec. 2"
	},
	{
		"id": "crimpro:r117:tf3",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? The court may quash an information on any ground apparent on its face even if not raised in the motion.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only lack of jurisdiction over the offense may be considered though not raised (Sec. 2).",
		"legalBasis": "Sec. 2"
	},
	{
		"id": "crimpro:r117:tf4",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? If the motion to quash is based on the ground that the facts charged do not constitute an offense, the court must immediately dismiss the case.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The prosecution must first be given the opportunity to amend (Sec. 4).",
		"legalBasis": "Sec. 4"
	},
	{
		"id": "crimpro:r117:tf5",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? An order sustaining a motion to quash on the ground of prescription is not a bar to another prosecution for the same offense.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Quashal on extinction of liability (g) or double jeopardy (i) bars another prosecution (Sec. 6).",
		"legalBasis": "Sec. 6"
	},
	{
		"id": "crimpro:r117:tf6",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? The accused who pleads without objecting waives the defense that the information charges more than one offense.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True. Duplicity (f) is waivable; he may be convicted of as many offenses as are charged and proved (Rule 120, Sec. 3).",
		"legalBasis": "Sec. 9; duplicity"
	},
	{
		"id": "crimpro:r117:tf7",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? The defense of prescription is waived if not raised in a motion to quash before plea.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Extinction of criminal liability (g) is not waived (Sec. 9).",
		"legalBasis": "Sec. 9; (g)"
	},
	{
		"id": "crimpro:r117:tf8",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? Double jeopardy attaches upon the filing of a valid information in a court of competent jurisdiction.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It also requires arraignment and a valid plea, and a valid termination of the first case.",
		"legalBasis": "Sec. 7"
	},
	{
		"id": "crimpro:r117:tf9",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? An accused acquitted of reckless imprudence resulting in damage to property may still be tried for reckless imprudence resulting in homicide arising from the same collision.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Reckless imprudence is a single quasi-offense; the acquittal bars the second prosecution (Ivler, 2010).",
		"legalBasis": "Ivler"
	},
	{
		"id": "crimpro:r117:tf10",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? The accused's failure to object to the prosecution's motion for provisional dismissal is express consent.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Express consent must be positive and unequivocal; silence is not enough (Lacson).",
		"legalBasis": "Lacson; express consent"
	},
	{
		"id": "crimpro:r117:tf11",
		"topicId": "r117",
		"topic": "R117 Motion to Quash",
		"tag": "memorization",
		"question": "True or false? The one-year period to revive a provisionally dismissed case is reckoned from the prosecution's receipt of the order.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. From issuance of the order (A.M. No. 12-11-2-SC, Sec. 14; 2017 Guidelines).",
		"legalBasis": "issuance of the order"
	},
	{
		"id": "crimpro:r118:tf1",
		"topicId": "r118",
		"topic": "R118 Pre-Trial",
		"tag": "memorization",
		"question": "True or false? Pre-trial is mandatory in criminal cases before the RTC but optional before first-level courts.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It is mandatory in the Sandiganbayan, RTCs and all first-level courts (Sec. 1).",
		"legalBasis": "Sec. 1"
	},
	{
		"id": "crimpro:r118:tf2",
		"topicId": "r118",
		"topic": "R118 Pre-Trial",
		"tag": "memorization",
		"question": "True or false? Admissions made by the accused at pre-trial need not be in writing to be used against him.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. They must be in writing and signed by the accused and counsel (Sec. 2).",
		"legalBasis": "Sec. 2"
	},
	{
		"id": "crimpro:r118:tf3",
		"topicId": "r118",
		"topic": "R118 Pre-Trial",
		"tag": "memorization",
		"question": "True or false? If defense counsel fails to appear at pre-trial without excuse, the court may allow the prosecution to present evidence ex parte.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The court may impose sanctions on counsel; there is no \"as in default\" in criminal cases (Sec. 3).",
		"legalBasis": "Sec. 3"
	},
	{
		"id": "crimpro:r118:tf4",
		"topicId": "r118",
		"topic": "R118 Pre-Trial",
		"tag": "memorization",
		"question": "True or false? The pre-trial order may be modified by the court to prevent manifest injustice.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 4).",
		"legalBasis": "Sec. 4"
	},
	{
		"id": "crimpro:r118:tf5",
		"topicId": "r118",
		"topic": "R118 Pre-Trial",
		"tag": "memorization",
		"question": "True or false? A compromise between the accused and the offended party on the civil liability in an estafa case extinguishes the criminal action.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. A compromise on civil liability does not extinguish the public action (Civil Code Art. 2034; Metrobank v. Reynaldo).",
		"legalBasis": "Art. 2034"
	},
	{
		"id": "crimpro:r118:tf6",
		"topicId": "r118",
		"topic": "R118 Pre-Trial",
		"tag": "memorization",
		"question": "True or false? The deposition of a sick prosecution witness may be taken before the clerk of court of the city where the witness lives under Rule 23.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Rule 119, Sec. 15 requires conditional examination before the court where the case is pending (Manguerra v. Risos, 2008).",
		"legalBasis": "Manguerra"
	},
	{
		"id": "crimpro:r118:tf7",
		"topicId": "r118",
		"topic": "R118 Pre-Trial",
		"tag": "memorization",
		"question": "True or false? Under the 2017 Guidelines, all criminal cases are referred to mediation before arraignment.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only listed cases (e.g., BP 22, certain property and honor crimes, criminal negligence) are referred, and only after arraignment and pre-trial; mediation must end in 30 days.",
		"legalBasis": "III.9"
	},
	{
		"id": "crimpro:r118:tf8",
		"topicId": "r118",
		"topic": "R118 Pre-Trial",
		"tag": "memorization",
		"question": "True or false? An affidavit of desistance executed by the private complainant after conviction is a ground for acquittal.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Recantations after conviction deserve scant consideration (People v. Lamsen, 2013).",
		"legalBasis": "Lamsen"
	},
	{
		"id": "crimpro:r119:tf1",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? After a plea of not guilty, the accused shall have at least fifteen days to prepare for trial.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 1).",
		"legalBasis": "Sec. 1"
	},
	{
		"id": "crimpro:r119:tf2",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? The entire trial period may not exceed 180 days from the first day of trial, except as authorized by the Supreme Court.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 2), subject to excluded delays.",
		"legalBasis": "Sec. 2"
	},
	{
		"id": "crimpro:r119:tf3",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? A continuance may be granted because the prosecutor failed to subpoena an available witness.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Prohibited ground (Sec. 4).",
		"legalBasis": "Sec. 4"
	},
	{
		"id": "crimpro:r119:tf4",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? A prosecution witness about to leave the country may be conditionally examined before any judge or a member of the Bar designated by the judge.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only before the court where the case is pending (Sec. 15; Manguerra). The broader rule is for defense witnesses (Sec. 13).",
		"legalBasis": "Sec. 15"
	},
	{
		"id": "crimpro:r119:tf5",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? A proposed state witness must appear to be the least guilty among the accused.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. He must not appear to be the most guilty (Sec. 17[d]; Jimenez v. People).",
		"legalBasis": "not the most guilty"
	},
	{
		"id": "crimpro:r119:tf6",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? If the motion to discharge an accused as state witness is denied, his sworn statement may still be used against his co-accused.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It is inadmissible (Sec. 17).",
		"legalBasis": "Sec. 17"
	},
	{
		"id": "crimpro:r119:tf7",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? When a demurrer filed without leave is denied, the accused may still present evidence.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. He waives the right and the case is decided on the prosecution's evidence (Sec. 23).",
		"legalBasis": "without leave"
	},
	{
		"id": "crimpro:r119:tf8",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? An order denying a demurrer to evidence may be challenged by certiorari before judgment.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It is not reviewable by appeal or certiorari before judgment (Sec. 23).",
		"legalBasis": "Sec. 23"
	},
	{
		"id": "crimpro:r119:tf9",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? The prosecution may appeal an order granting a demurrer to evidence.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. A grant is an acquittal; the remedy is certiorari only for grave abuse of discretion (Dayap v. Sendiong).",
		"legalBasis": "acquittal; certiorari"
	},
	{
		"id": "crimpro:r119:tf10",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? In granting a demurrer, the court may also order the accused to pay civil damages on the basis of the prosecution's evidence.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The accused must be allowed to present evidence on the civil aspect (Salazar v. People, 2003).",
		"legalBasis": "Salazar"
	},
	{
		"id": "crimpro:r119:tf11",
		"topicId": "r119",
		"topic": "R119 Trial",
		"tag": "memorization",
		"question": "True or false? Reopening of the proceedings is available only after judgment and before it becomes final.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It may be ordered at any time before finality of the judgment of conviction — even before judgment — after hearing (Sec. 24).",
		"legalBasis": "Sec. 24"
	},
	{
		"id": "crimpro:r120:tf1",
		"topicId": "r120",
		"topic": "R120 Judgment",
		"tag": "memorization",
		"question": "True or false? A judgment may be prepared by the judge's legal researcher and signed by the judge without stating the facts.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It must be personally and directly prepared by the judge and state clearly and distinctly the facts and the law (Sec. 1).",
		"legalBasis": "Sec. 1"
	},
	{
		"id": "crimpro:r120:tf2",
		"topicId": "r120",
		"topic": "R120 Judgment",
		"tag": "memorization",
		"question": "True or false? For a light offense, the judgment may be promulgated in the presence of the accused's counsel or representative.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 6).",
		"legalBasis": "Sec. 6"
	},
	{
		"id": "crimpro:r120:tf3",
		"topicId": "r120",
		"topic": "R120 Judgment",
		"tag": "memorization",
		"question": "True or false? An accused charged with homicide may be convicted of murder if treachery is proved at trial.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. He may be convicted only of homicide, the offense charged, which is included in murder (Secs. 4–5).",
		"legalBasis": "Sec. 4"
	},
	{
		"id": "crimpro:r120:tf4",
		"topicId": "r120",
		"topic": "R120 Judgment",
		"tag": "memorization",
		"question": "True or false? When an information charges two offenses and the accused does not object, the court may convict him of both if proved.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 3), with separate findings for each.",
		"legalBasis": "Sec. 3"
	},
	{
		"id": "crimpro:r120:tf5",
		"topicId": "r120",
		"topic": "R120 Judgment",
		"tag": "memorization",
		"question": "True or false? An accused who was absent without justification at the promulgation of his conviction may still appeal within 15 days through counsel.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. He loses his remedies unless, within 15 days, he surrenders and moves for leave, proving justifiable cause (Sec. 6; Jaylo).",
		"legalBasis": "Sec. 6; Jaylo"
	},
	{
		"id": "crimpro:r120:tf6",
		"topicId": "r120",
		"topic": "R120 Judgment",
		"tag": "memorization",
		"question": "True or false? The prosecution may move to modify a judgment of conviction to impose the correct, higher penalty before it becomes final.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Sec. 7 allows modification only \"upon motion of the accused.\"",
		"legalBasis": "Sec. 7"
	},
	{
		"id": "crimpro:r120:tf7",
		"topicId": "r120",
		"topic": "R120 Judgment",
		"tag": "memorization",
		"question": "True or false? A judgment of acquittal need not address civil liability.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It must state whether the evidence absolutely failed or merely failed beyond reasonable doubt, and whether the act from which civil liability might arise did not exist (Sec. 2).",
		"legalBasis": "Sec. 2"
	},
	{
		"id": "crimpro:r120:tf8",
		"topicId": "r120",
		"topic": "R120 Judgment",
		"tag": "memorization",
		"question": "True or false? An accused who appealed his conviction can never apply for probation.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Under RA 10707, if the appellate court reduces a non-probationable penalty to a probationable one, he may apply based on the modified decision before it becomes final. Otherwise, appeal and probation are mutually exclusive (Almero).",
		"legalBasis": "RA 10707; Almero"
	},
	{
		"id": "crimpro:r120:tf9",
		"topicId": "r120",
		"topic": "R120 Judgment",
		"tag": "memorization",
		"question": "True or false? An accused charged with frustrated homicide may always be convicted of slight physical injuries if that is all the evidence proves.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Not if slight physical injuries (2-month prescriptive period) had already prescribed when the information was filed (Corpus v. People, 2023).",
		"legalBasis": "Corpus; variance"
	},
	{
		"id": "crimpro:r121:tf1",
		"topicId": "r121",
		"topic": "R121 New Trial / MR",
		"tag": "memorization",
		"question": "True or false? The prosecution may file a motion for reconsideration of a judgment of acquittal within 15 days from promulgation.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Rule 121 covers only judgments of conviction, on motion of the accused; reconsidering an acquittal violates double jeopardy.",
		"legalBasis": "Sec. 1; double jeopardy"
	},
	{
		"id": "crimpro:r121:tf2",
		"topicId": "r121",
		"topic": "R121 New Trial / MR",
		"tag": "memorization",
		"question": "True or false? The court may grant a new trial at its own instance, but only with the consent of the accused.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 1).",
		"legalBasis": "Sec. 1"
	},
	{
		"id": "crimpro:r121:tf3",
		"topicId": "r121",
		"topic": "R121 New Trial / MR",
		"tag": "memorization",
		"question": "True or false? A motion for new trial based on newly discovered evidence must be supported by affidavits of the witnesses or authenticated copies of the documents.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 4).",
		"legalBasis": "Sec. 4"
	},
	{
		"id": "crimpro:r121:tf4",
		"topicId": "r121",
		"topic": "R121 New Trial / MR",
		"tag": "memorization",
		"question": "True or false? When a new trial is granted on newly discovered evidence, all evidence previously adduced is set aside and taken anew.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The evidence already adduced stands; the new evidence is considered with it (Sec. 6[b]). Setting aside applies to new trial for errors or irregularities (Sec. 6[a]).",
		"legalBasis": "Sec. 6"
	},
	{
		"id": "crimpro:r121:tf5",
		"topicId": "r121",
		"topic": "R121 New Trial / MR",
		"tag": "memorization",
		"question": "True or false? Reconsideration is the proper remedy when correcting the error in the judgment requires the reception of additional evidence.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Reconsideration covers errors of law or fact \"which requires no further proceedings\" (Sec. 3); if evidence is needed, the remedy is new trial.",
		"legalBasis": "Sec. 3"
	},
	{
		"id": "crimpro:r121:tf6",
		"topicId": "r121",
		"topic": "R121 New Trial / MR",
		"tag": "memorization",
		"question": "True or false? If an accused files a motion for reconsideration on the 12th day of the appeal period and it is denied, he has only 3 days from notice of denial to appeal.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Under the fresh-period rule, he has a fresh 15 days from notice of the denial (Neypes, applied in Yu v. Samson-Tatad, 2011).",
		"legalBasis": "Rule 122, Sec. 6; Neypes; Yu v. Samson-Tatad"
	},
	{
		"id": "crimpro:r121:tf7",
		"topicId": "r121",
		"topic": "R121 New Trial / MR",
		"tag": "memorization",
		"question": "True or false? Evidence known to the accused during trial, but not presented because his counsel thought it unnecessary, may be the basis of a new trial as newly discovered evidence.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It could have been discovered and produced at trial with reasonable diligence (Sec. 2[b]).",
		"legalBasis": "Sec. 2(b); reasonable diligence"
	},
	{
		"id": "crimpro:r121:tf8",
		"topicId": "r121",
		"topic": "R121 New Trial / MR",
		"tag": "memorization",
		"question": "True or false? An appellant in the Court of Appeals may move for a new trial on the ground of irregularities committed during the trial in the RTC.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. In the CA, a motion for new trial lies only on newly discovered evidence material to the defense (Rule 124, Sec. 14); trial irregularities are raised as assigned errors in the appeal.",
		"legalBasis": "Rule 124, Sec. 14"
	},
	{
		"id": "crimpro:r122:tf1",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? An appeal in a criminal case must be taken within 15 days from promulgation of the judgment.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 6).",
		"legalBasis": "Sec. 6"
	},
	{
		"id": "crimpro:r122:tf2",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? A notice of appeal from an RTC judgment in a case it tried is filed with the Court of Appeals.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It is filed with the court that rendered the judgment — the RTC — and served on the adverse party (Sec. 3[a]).",
		"legalBasis": "Sec. 3(a)"
	},
	{
		"id": "crimpro:r122:tf3",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? The offended party may appeal the civil aspect of a judgment of acquittal.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Ching v. Nicdao, 2007), within the same period as the accused.",
		"legalBasis": "Sec. 1; Ching v. Nicdao"
	},
	{
		"id": "crimpro:r122:tf4",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? An RTC decision affirming an MTC conviction is appealed to the CA by petition for review under Rule 42.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 3[b]).",
		"legalBasis": "Sec. 3(b)"
	},
	{
		"id": "crimpro:r122:tf5",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? A judgment of the RTC imposing reclusion perpetua is appealed directly to the Supreme Court by notice of appeal.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Since People v. Mateo (2004) and A.M. No. 00-5-03-SC, it is appealed by notice of appeal to the CA (Sec. 3[c]).",
		"legalBasis": "Sec. 3(c); Mateo"
	},
	{
		"id": "crimpro:r122:tf6",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? On appeal by the accused alone, the appellate court cannot increase the penalty imposed by the trial court.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The appeal throws the whole case open; the appellate court may increase the penalty (Trono; Bu Lin; Rule 124, Sec. 11).",
		"legalBasis": "Trono; Rule 124, Sec. 11"
	},
	{
		"id": "crimpro:r122:tf7",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? Execution of a judgment is stayed as to all accused once any one of them perfects an appeal.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only as to the appealing party (Sec. 11[c]).",
		"legalBasis": "Sec. 11(c)"
	},
	{
		"id": "crimpro:r122:tf8",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? The People may assail a judgment of acquittal by certiorari under Rule 65 on the ground that the trial court erred in appreciating the evidence.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Certiorari corrects errors of jurisdiction, not errors of judgment; misappreciation of evidence is not grave abuse (Ysidoro; Villareal v. Aliga).",
		"legalBasis": "Rule 65; errors of jurisdiction"
	},
	{
		"id": "crimpro:r122:tf9",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? An appeal taken by the wrong mode tolls the reglementary period, so the appellant may refile by the correct mode.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The wrong mode does not toll the period; the judgment becomes final, save exceptionally in the interest of justice (Tiu, p. 214).",
		"legalBasis": "wrong mode; finality"
	},
	{
		"id": "crimpro:r122:tf10",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? The People may appeal from an order granting a motion to quash filed before arraignment.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True. Jeopardy does not attach before a valid plea, so the appeal does not place the accused twice in jeopardy (Sec. 1).",
		"legalBasis": "Sec. 1; no jeopardy before plea"
	},
	{
		"id": "crimpro:r122:tf11",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? Once an appeal is perfected, the trial court can no longer allow the appellant to withdraw it.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The trial court may allow withdrawal before the record is forwarded to the appellate court; the judgment then becomes final (Sec. 12).",
		"legalBasis": "Sec. 12"
	},
	{
		"id": "crimpro:r122:tf12",
		"topicId": "r122",
		"topic": "R122 Appeal",
		"tag": "memorization",
		"question": "True or false? When the CA affirms a sentence of life imprisonment, the accused may appeal to the SC only by a Rule 45 petition raising questions of law.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. By notice of appeal filed with the CA (Rule 124, Sec. 13[c]); the SC may then review facts as well as law.",
		"legalBasis": "Rule 124, Sec. 13(c)"
	},
	{
		"id": "crimpro:r123:tf1",
		"topicId": "r123",
		"topic": "R123 Procedure in MTCs",
		"tag": "memorization",
		"question": "True or false? The procedure in the Municipal Trial Courts is generally the same as in the Regional Trial Courts.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 1), except court-specific provisions and cases under the special procedure for minor offenses.",
		"legalBasis": "Sec. 1"
	},
	{
		"id": "crimpro:r123:tf2",
		"topicId": "r123",
		"topic": "R123 Procedure in MTCs",
		"tag": "memorization",
		"question": "True or false? Criminal cases in the MTC are still governed by the 1991 Revised Rule on Summary Procedure when they fall within its coverage.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The 1991 Rule was replaced by the 2022 Rules on Expedited Procedures in the First Level Courts (A.M. No. 08-8-7-SC).",
		"legalBasis": "A.M. No. 08-8-7-SC"
	},
	{
		"id": "crimpro:r123:tf3",
		"topicId": "r123",
		"topic": "R123 Procedure in MTCs",
		"tag": "memorization",
		"question": "True or false? A municipal trial court judge may conduct the preliminary investigation of an offense punishable by prision mayor.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Since A.M. No. 05-8-26-SC (2005), MTC judges no longer conduct preliminary investigation.",
		"legalBasis": "Rule 112, Sec. 2"
	},
	{
		"id": "crimpro:r123:tf4",
		"topicId": "r123",
		"topic": "R123 Procedure in MTCs",
		"tag": "memorization",
		"question": "True or false? An accused convicted by the MTC is entitled to bail as a matter of right while his appeal is pending.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Rule 114, Sec. 4): in first-level courts, bail is a matter of right before and after conviction.",
		"legalBasis": "Rule 114, Sec. 4"
	},
	{
		"id": "crimpro:r124:tf1",
		"topicId": "r124",
		"topic": "R124 Procedure in the CA",
		"tag": "memorization",
		"question": "True or false? When the accused appeals to the CA, the title of the case becomes \"[Accused] v. People of the Philippines.\"",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The title remains as in the court of origin; the parties are called appellant and appellee (Sec. 1).",
		"legalBasis": "Sec. 1"
	},
	{
		"id": "crimpro:r124:tf2",
		"topicId": "r124",
		"topic": "R124 Procedure in the CA",
		"tag": "memorization",
		"question": "True or false? The appellant in a criminal case must file his brief within 45 days from notice.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Within 30 days from receipt of the notice that the evidence is attached to the record (Sec. 3). 45 days is the civil period.",
		"legalBasis": "Sec. 3"
	},
	{
		"id": "crimpro:r124:tf3",
		"topicId": "r124",
		"topic": "R124 Procedure in the CA",
		"tag": "memorization",
		"question": "True or false? The CA may dismiss an appeal if the appellant jumps bail while the appeal is pending.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 8, par. 2), on motion or motu proprio.",
		"legalBasis": "Sec. 8"
	},
	{
		"id": "crimpro:r124:tf4",
		"topicId": "r124",
		"topic": "R124 Procedure in the CA",
		"tag": "memorization",
		"question": "True or false? The CA may dismiss an appeal for failure to file the appellant's brief even when the appellant is represented by counsel de oficio.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The exception in Sec. 8 bars dismissal on that ground where the appellant is represented by counsel de oficio.",
		"legalBasis": "Sec. 8"
	},
	{
		"id": "crimpro:r124:tf5",
		"topicId": "r124",
		"topic": "R124 Procedure in the CA",
		"tag": "memorization",
		"question": "True or false? The accused need not be present in court during the hearing of his appeal.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 9).",
		"legalBasis": "Sec. 9"
	},
	{
		"id": "crimpro:r124:tf6",
		"topicId": "r124",
		"topic": "R124 Procedure in the CA",
		"tag": "memorization",
		"question": "True or false? On the accused's appeal, the CA may increase the penalty imposed by the trial court.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 11). The appeal throws the whole case open for review.",
		"legalBasis": "Sec. 11; Trono"
	},
	{
		"id": "crimpro:r124:tf7",
		"topicId": "r124",
		"topic": "R124 Procedure in the CA",
		"tag": "memorization",
		"question": "True or false? In the CA, the appellant may move for a new trial on the ground of errors of law committed during the trial.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only on newly discovered evidence material to his defense (Sec. 14).",
		"legalBasis": "Sec. 14"
	},
	{
		"id": "crimpro:r124:tf8",
		"topicId": "r124",
		"topic": "R124 Procedure in the CA",
		"tag": "memorization",
		"question": "True or false? The pendency of a motion for reconsideration in the CA stays the mittimus.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 16). Only one MR is allowed, within 15 days.",
		"legalBasis": "Sec. 16"
	},
	{
		"id": "crimpro:r124:tf9",
		"topicId": "r124",
		"topic": "R124 Procedure in the CA",
		"tag": "memorization",
		"question": "True or false? When the CA imposes reclusion perpetua, it renders judgment but refrains from entering it and certifies the case to the SC.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. That is the procedure for death (Sec. 13[a]). For RP or LI, the CA renders and enters judgment, appealable to the SC by notice of appeal filed with the CA (Sec. 13[c]).",
		"legalBasis": "Sec. 13"
	},
	{
		"id": "crimpro:r125:tf1",
		"topicId": "r125",
		"topic": "R125 Procedure in the SC",
		"tag": "memorization",
		"question": "True or false? The procedure in the Supreme Court in criminal cases is the same as in the Court of Appeals, unless the Constitution or law provides otherwise.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 1).",
		"legalBasis": "Sec. 1"
	},
	{
		"id": "crimpro:r125:tf2",
		"topicId": "r125",
		"topic": "R125 Procedure in the SC",
		"tag": "memorization",
		"question": "True or false? Review by the Supreme Court of Court of Appeals decisions in criminal cases follows the procedure in civil cases.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 2) — generally Rule 45 — except RP/LI cases, which go up by notice of appeal (Rule 124, Sec. 13[c]).",
		"legalBasis": "Sec. 2"
	},
	{
		"id": "crimpro:r125:tf3",
		"topicId": "r125",
		"topic": "R125 Procedure in the SC",
		"tag": "memorization",
		"question": "True or false? When the SC en banc is equally divided on whether to acquit and remains so after re-deliberation, the judgment of conviction is affirmed.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The conviction is reversed and the accused acquitted (Sec. 3).",
		"legalBasis": "Sec. 3"
	},
	{
		"id": "crimpro:r125:tf4",
		"topicId": "r125",
		"topic": "R125 Procedure in the SC",
		"tag": "memorization",
		"question": "True or false? The Constitution requires the Supreme Court to have the power to review all criminal cases in which the penalty imposed is reclusion perpetua or higher.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Art. VIII, Sec. 5[2][d]) — but Mateo held this does not bar an intermediate CA review.",
		"legalBasis": "Art. VIII, Sec. 5(2)(d); Mateo"
	},
	{
		"id": "crimpro:r126:tf1",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? A search warrant is valid for ten days from its date.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 10). Thereafter it is void.",
		"legalBasis": "Sec. 10"
	},
	{
		"id": "crimpro:r126:tf2",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? A search warrant may always be served at any time of the day or night.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Daytime, unless the affidavit asserts the property is on the person or in the place, in which case the warrant may direct service at any time (Sec. 9).",
		"legalBasis": "Sec. 9"
	},
	{
		"id": "crimpro:r126:tf3",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? A single search warrant may be issued for two or more offenses if the things to be seized are particularly described.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. One specific offense only (Sec. 4); a warrant for several offenses is a scatter-shot warrant (Stonehill; Vallejo).",
		"legalBasis": "Sec. 4"
	},
	{
		"id": "crimpro:r126:tf4",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? In issuing a search warrant, the judge may rely solely on the affidavits of the applicant and witnesses without examining them personally.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. He must personally examine them by searching questions and answers, in writing and under oath (Sec. 5; Bache; Silva). Evaluation of documents suffices only for a warrant of arrest (Soliven).",
		"legalBasis": "Sec. 5; Bache; Soliven"
	},
	{
		"id": "crimpro:r126:tf5",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? The property to be seized must be owned by the person against whom the search warrant is directed.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Control or possession suffices (Yao v. People, 2007).",
		"legalBasis": "Yao"
	},
	{
		"id": "crimpro:r126:tf6",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? In the absence of the lawful occupant and his family, a search of a house may be made in the presence of two police officers who did not take part in the raid.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The two witnesses must be of sufficient age and discretion and residing in the same locality (Sec. 8).",
		"legalBasis": "Sec. 8"
	},
	{
		"id": "crimpro:r126:tf7",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? Evidence obtained by a private individual through a search, without any participation of the police, is inadmissible under the exclusionary rule.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The constitutional guarantee and exclusionary rule apply to the State, not private individuals acting on their own (People v. Marti, 1991).",
		"legalBasis": "Marti"
	},
	{
		"id": "crimpro:r126:tf8",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? Once a criminal action has been filed, an application for a search warrant related to it may be filed only in the court where the action is pending.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 2, last par.).",
		"legalBasis": "Sec. 2"
	},
	{
		"id": "crimpro:r126:tf9",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? Improper venue of a search warrant application is jurisdictional and may be raised at any time.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. An application for a search warrant is not a criminal action; improper venue is waived if not raised in the first motion to quash (Pilipinas Shell v. Romars, 2015).",
		"legalBasis": "Pilipinas Shell; omnibus motion"
	},
	{
		"id": "crimpro:r126:tf10",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? A search warrant that describes some items particularly and others generally is void in its entirety.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. A warrant is severable; it remains valid as to the items particularly described (Uy v. BIR; Microsoft v. Maxicorp).",
		"legalBasis": "severability"
	},
	{
		"id": "crimpro:r126:tf11",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? A person lawfully arrested in a mall may be searched, as an incident of the arrest, together with his house located elsewhere.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. The search is limited to the person and the place of arrest (Nolasco v. Paño).",
		"legalBasis": "Sec. 13; Nolasco"
	},
	{
		"id": "crimpro:r126:tf12",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? A stop-and-frisk requires probable cause.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It requires less than probable cause but more than a hunch: a genuine reason, from the officer's experience and the surroundings, to believe the person is armed or carries contraband (Malacat; Esquillo).",
		"legalBasis": "Malacat; genuine reason"
	},
	{
		"id": "crimpro:r126:tf13",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? An unverified tip that a described passenger is carrying drugs is sufficient probable cause for police to search him at a checkpoint.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. A solitary tip is not probable cause; personally observed, corroborating circumstances are needed (People v. Sapla, 2020, En Banc; Cogaed, 2014).",
		"legalBasis": "Sapla; Cogaed"
	},
	{
		"id": "crimpro:r126:tf14",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? Where the police knew days in advance the identity and arrival of a suspect, a warrantless search upon his arrival may still be justified as a search of a moving vehicle.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Ample time and opportunity to secure a warrant defeats the exception (Aminnudin, 1988; Racho, 2010).",
		"legalBasis": "Aminnudin; Racho"
	},
	{
		"id": "crimpro:r126:tf15",
		"topicId": "r126",
		"topic": "R126 Search and Seizure",
		"tag": "memorization",
		"question": "True or false? A suspect who silently hands over his bag when a uniformed officer says \"Open it\" has validly consented to the search.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Consent must be unequivocal, specific and freely given; passive submission to a show of authority is not consent, and the State must prove consent by clear and positive evidence (Aruta; Luz).",
		"legalBasis": "Aruta; Luz; voluntariness"
	},
	{
		"id": "crimpro:r127:tf1",
		"topicId": "r127",
		"topic": "R127 Provisional Remedies",
		"tag": "memorization",
		"question": "True or false? Provisional remedies in civil actions may be availed of in connection with the civil action deemed instituted with the criminal action.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 1), insofar as they are applicable.",
		"legalBasis": "Sec. 1"
	},
	{
		"id": "crimpro:r127:tf2",
		"topicId": "r127",
		"topic": "R127 Provisional Remedies",
		"tag": "memorization",
		"question": "True or false? An offended party who reserved the right to file a separate civil action may still apply for preliminary attachment in the criminal case.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Provisional remedies attach to the civil action deemed instituted; once reserved, it is not in the criminal case (Sec. 1; Rule 111, Sec. 1).",
		"legalBasis": "Sec. 1; reservation"
	},
	{
		"id": "crimpro:r127:tf3",
		"topicId": "r127",
		"topic": "R127 Provisional Remedies",
		"tag": "memorization",
		"question": "True or false? The property of an accused who resides outside the Philippines may be attached in the criminal case.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Sec. 2[d]).",
		"legalBasis": "Sec. 2(d)"
	},
	{
		"id": "crimpro:r127:tf4",
		"topicId": "r127",
		"topic": "R127 Provisional Remedies",
		"tag": "memorization",
		"question": "True or false? A writ of preliminary attachment in a criminal case secures the payment of the fine that may be imposed on the accused.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It secures \"any judgment that may be recovered from the accused\" by the offended party — the civil liability (Sec. 2).",
		"legalBasis": "Sec. 2; civil liability"
	},
	{
		"id": "crimpro:prescription:tf1",
		"topicId": "prescription",
		"topic": "Prescription (R110 Sec. 1)",
		"tag": "memorization",
		"question": "True or false? Crimes punishable by arresto mayor prescribe in five years.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True. RPC Art. 90, par. 3: correctional penalties prescribe in ten years, \"with the exception of those punishable by arresto mayor, which shall prescribe in five years.\"",
		"legalBasis": "Art. 90"
	},
	{
		"id": "crimpro:prescription:tf2",
		"topicId": "prescription",
		"topic": "Prescription (R110 Sec. 1)",
		"tag": "memorization",
		"question": "True or false? Under Act 3326, prescription of every special-law offense begins to run only from its discovery.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It runs from the day of commission; discovery applies only if the violation was not known at the time (Act 3326, Sec. 2; blameless ignorance).",
		"legalBasis": "Act 3326, Sec. 2"
	},
	{
		"id": "crimpro:prescription:tf3",
		"topicId": "prescription",
		"topic": "Prescription (R110 Sec. 1)",
		"tag": "memorization",
		"question": "True or false? The absence of the offender from the Philippines suspends the running of prescription for a violation of BP 22.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Act 3326 has no absence provision, and Art. 91 cannot be applied to special laws (Romualdez v. Marcelo, 2006).",
		"legalBasis": "Romualdez v. Marcelo"
	},
	{
		"id": "crimpro:prescription:tf4",
		"topicId": "prescription",
		"topic": "Prescription (R110 Sec. 1)",
		"tag": "memorization",
		"question": "True or false? The filing of a complaint in a court that has no jurisdiction to try the case does not interrupt prescription.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Under Olarte (1967), followed in Arambulo v. Laqui (2000), filing interrupts prescription even if the court cannot try the case on the merits.",
		"legalBasis": "Olarte; Arambulo"
	},
	{
		"id": "crimpro:prescription:tf5",
		"topicId": "prescription",
		"topic": "Prescription (R110 Sec. 1)",
		"tag": "memorization",
		"question": "True or false? When the last day of the prescriptive period falls on a Sunday, the complaint may be filed on the next working day.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. A Sunday or holiday does not extend the State's prescriptive period (Yapdiangco v. Buencamino, 1983). The next-working-day rule applies to procedural periods. Trap: Importing Rule 22, Sec. 1 into a substantive period.",
		"legalBasis": "Yapdiangco"
	},
	{
		"id": "crimpro:prescription:tf6",
		"topicId": "prescription",
		"topic": "Prescription (R110 Sec. 1)",
		"tag": "memorization",
		"question": "True or false? The prescriptive period of a felony is based on the penalty actually imposed by the court after considering modifying circumstances.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It is based on the penalty prescribed by law; for a compound penalty, the highest penalty is the basis (Art. 90, last par.).",
		"legalBasis": "penalty prescribed by law; compound penalty"
	},
	{
		"id": "crimpro:prescription:tf7",
		"topicId": "prescription",
		"topic": "Prescription (R110 Sec. 1)",
		"tag": "memorization",
		"question": "True or false? Cyber libel under RA 10175 prescribes in fifteen years.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Causing v. People (2023; reconsideration denied 2026): one year from discovery, as with libel under Art. 90. The fifteen-year view from an unsigned 2018 resolution is not binding.",
		"legalBasis": "Causing; Art. 90; one year"
	},
	{
		"id": "crimpro:prescription:tf8",
		"topicId": "prescription",
		"topic": "Prescription (R110 Sec. 1)",
		"tag": "memorization",
		"question": "True or false? Under People v. Consebido (2025), a complaint for an offense covered by the Rules on Expedited Procedures that was filed with the prosecutor in 2020 tolled prescription.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False, on the Court's own terms: the Consebido rule applies \"henceforth,\" prospectively. For complaints filed before it, Desierto and Corpus applied: only filing in court tolled.",
		"legalBasis": "Consebido; prospective; Desierto; Corpus"
	},
	{
		"id": "crimpro:mock:tf1",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? An information filed by an assistant prosecutor without the city prosecutor's prior written approval is void and confers no jurisdiction.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Not jurisdictional; waived if not raised in a motion to quash before plea (Villa Gomez v. People, 2020, En Banc).",
		"legalBasis": "Villa Gomez"
	},
	{
		"id": "crimpro:mock:tf2",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? A private complainant may appeal a judgment of acquittal in its entirety.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Only the civil aspect; the criminal aspect may be appealed only by the State through the OSG, and an acquittal is generally unappealable (Villareal v. Aliga).",
		"legalBasis": "civil aspect only"
	},
	{
		"id": "crimpro:mock:tf3",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? In BP 22 cases, the offended party may reserve the civil action.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False (Rule 111, Sec. 1[b]).",
		"legalBasis": "Sec. 1(b)"
	},
	{
		"id": "crimpro:mock:tf4",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? Municipal trial court judges may still conduct preliminary investigations.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Removed by A.M. No. 05-8-26-SC (effective October 3, 2005).",
		"legalBasis": "A.M. No. 05-8-26-SC"
	},
	{
		"id": "crimpro:mock:tf5",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? A warrant of arrest that is not served within ten days from its receipt by the police is void.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It remains valid until served or recalled; the 10 days govern execution and reporting (Rule 113, Sec. 4).",
		"legalBasis": "Sec. 4"
	},
	{
		"id": "crimpro:mock:tf6",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? By posting bail, the accused waives his right to question the legality of his warrantless arrest.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False, if he raises it before plea (Rule 114, Sec. 26).",
		"legalBasis": "Sec. 26"
	},
	{
		"id": "crimpro:mock:tf7",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? An accused who jumps bail before arraignment may be tried in absentia if he was duly notified.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Trial in absentia requires prior arraignment (Const., Art. III, Sec. 14[2]).",
		"legalBasis": "arraignment"
	},
	{
		"id": "crimpro:mock:tf8",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? Plea bargaining is prohibited in prosecutions under the Comprehensive Dangerous Drugs Act.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. RA 9165, Sec. 23 was struck down (Estipona, 2017); a Supreme Court framework governs; courts may overrule objections based solely on inconsistent DOJ circulars (Montierro, 2022).",
		"legalBasis": "Estipona; Montierro"
	},
	{
		"id": "crimpro:mock:tf9",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? An order quashing an information on the ground of prescription bars another prosecution for the same offense.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 0,"key":"True",
		"explanation": "True (Rule 117, Sec. 6 — grounds [g] and [i]).",
		"legalBasis": "Sec. 6"
	},
	{
		"id": "crimpro:mock:tf10",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? A stipulation made by defense counsel at pre-trial binds the accused even if the accused did not sign it.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. It must be in writing and signed by the accused and counsel (Rule 118, Sec. 2).",
		"legalBasis": "Sec. 2"
	},
	{
		"id": "crimpro:mock:tf11",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? The prosecution may appeal an order granting a demurrer to evidence.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. A granted demurrer is an acquittal; only certiorari for grave abuse lies (Dayap v. Sendiong).",
		"legalBasis": "acquittal"
	},
	{
		"id": "crimpro:mock:tf12",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? An accused charged with homicide may be convicted of murder if treachery is proved at trial.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False. Convict of homicide; treachery was not alleged (Rule 120, Secs. 4–5; Rule 110, Sec. 8).",
		"legalBasis": "variance; qualifying circumstance must be alleged"
	},
	{
		"id": "crimpro:mock:tf13",
		"topicId": "mock",
		"topic": "Integrated mock exam",
		"tag": "memorization",
		"question": "True or false? After People v. Consebido (2025), it is settled that filing a complaint for an ordinance violation with the city prosecutor interrupts the two-month prescriptive period.",
		"options": [
			"True",
			"False"
		],
		"correctIndex": 1,"key":"False",
		"explanation": "False — unsettled. Consebido's words reach offenses covered by the 2022 Expedited Rules (which include ordinances) and it abandoned Desierto and Corpus, but it did not expressly abandon Zaldivia or Jadewell.",
		"legalBasis": "Consebido; Zaldivia; Jadewell"
	}
];
