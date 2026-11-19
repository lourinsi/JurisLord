import type { AlacEssay } from '$lib/types';

/** Pre-extracted situational essays from Rules 110–127, Prescription, and Integrated Mock Exam for lightweight on-demand loading. */
export const ruleSituationalEssays: AlacEssay[] = [
	{
		"id": "crimpro:alac:r110-1",
		"title": "Dropping an accused before arraignment",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "A, B and C are charged with estafa. Before arraignment, the prosecutor files an amended information dropping C, without notice to the offended party, and the court admits it without a hearing.",
		"question": "Was the amendment valid?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 110, Sec. 14, par. 1: an amendment before plea that \"excludes any accused\" can be made only upon motion by the prosecutor, with notice to the offended party and with leave of court; the court must state its reasons and furnish all parties, especially the offended party, copies of its order.",
			"application": "The prosecutor excluded C without a motion and without notice to the offended party, and the court admitted the amendment without stating reasons. These are the safeguards the 2000 Rules added precisely for exclusions and downgrades.",
			"conclusion": "The exclusion of C is invalid; the offended party may move to set aside the order and the court must hear the matter."
		}
	},
	{
		"id": "crimpro:alac:r110-2",
		"title": "Adultery against the wife only",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "H files a complaint for adultery against his wife W only. He says he does not want to involve the paramour P, a family friend. Both W and P are alive.",
		"question": "May the prosecution proceed?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 110, Sec. 5 (and RPC Art. 344): the offended party cannot institute criminal prosecution without including the guilty parties, if both are alive.",
			"application": "H excluded P although both W and P are alive. The rule is designed to prevent the offended spouse from choosing whom to punish.",
			"conclusion": "The complaint is defective; H must include both W and P for the prosecution to proceed."
		}
	},
	{
		"id": "crimpro:alac:r110-3",
		"title": "Rape complaint by a stranger",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "A 25-year-old woman is raped. She refuses to file a complaint. The barangay captain, who learned of the incident, files a complaint-affidavit with the prosecutor, attaching the medico-legal report and a witness's affidavit.",
		"question": "May the prosecutor proceed with the preliminary investigation and file an information?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "RA 8353 (Anti-Rape Law of 1997) reclassified rape as a crime against persons (RPC Art. 266-A), removing it from the private crimes under Art. 344 and Rule 110, Sec. 5.",
			"application": "Since rape is a public crime, anyone with knowledge may file the complaint-affidavit that starts preliminary investigation, and the prosecutor files the information if there is probable cause. The victim's refusal affects the strength of the evidence, not the State's authority to prosecute.",
			"conclusion": "The prosecutor may proceed."
		}
	},
	{
		"id": "crimpro:alac:r110-4",
		"title": "BP 22 — where to file",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "D draws and delivers a check in Manila to C. C deposits it in Batangas City, where it is dishonored. C files a BP 22 case in the MTCC of Batangas City. D moves to quash for lack of jurisdiction, arguing the check was issued in Manila.",
		"question": "Rule on the motion.",
		"modelAnswer": {
			"answer": "Deny the motion.",
			"legalBasis": "Rule 110, Sec. 15(a): the action is instituted and tried where the offense was committed or any of its essential ingredients occurred. BP 22 is a transitory or continuing crime that may be tried where the check was drawn, issued, delivered or dishonored (Yalong v. People, 2013; Rigor v. People, 2004).",
			"application": "Dishonor, an essential element, occurred in Batangas City.",
			"conclusion": "The Batangas City court has jurisdiction; the first court to take cognizance excludes the others."
		}
	},
	{
		"id": "crimpro:alac:r110-5",
		"title": "Private prosecutor without authority",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "At the scheduled hearing, the public prosecutor is absent. The private prosecutor, who has no written authority, insists on presenting the complainant. The judge allows it.",
		"question": "Was the judge correct?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 110, Sec. 5 (as amended by A.M. No. 02-2-07-SC): criminal actions are prosecuted under the direction and control of a public prosecutor; a private prosecutor may proceed alone only if authorized in writing by the Chief of the Prosecution Office or the Regional State Prosecutor, subject to the court's approval. Pinote v. Ayco (2005).",
			"application": "There was no written authority and no court approval. The public prosecutor's absence does not transfer control to the private prosecutor.",
			"conclusion": "The judge should have reset the hearing; the testimony was received in violation of the Rules and the judge may be administratively liable."
		}
	},
	{
		"id": "crimpro:alac:r110-6",
		"title": "Homicide to murder — caption or facts?",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "X is arraigned on an information for homicide that alleges that he \"shot V from behind while V was asleep, giving him no chance to defend himself.\" During trial, the prosecutor moves to amend the caption and preamble from \"Homicide\" to \"Murder.\" In a second case, Y is arraigned on an information for homicide alleging only that he \"shot and killed V.\" During trial, the prosecutor moves to add \"with treachery, by shooting V from behind while he was asleep.\"",
		"question": "Rule on both motions.",
		"modelAnswer": {
			"answer": "Grant the motion in X's case; deny it in Y's case.",
			"legalBasis": "Rule 110, Sec. 14: after plea, only formal amendments with leave and without prejudice. The body of the information, not the caption, determines the offense. Pacoy v. Cajigal (2007): a change of caption with no change in the recital of facts is formal.",
			"application": "In X's case the facts constituting treachery were already alleged; the change only conforms the caption to the facts, so X's defense and evidence are unaffected. In Y's case the amendment adds new facts that qualify the killing and raise the penalty — a change in the recital of facts, which is substantial.",
			"conclusion": "X may be tried for murder on the amended caption; Y may not be charged with murder by amendment after plea and may be convicted only of homicide on the existing information."
		}
	},
	{
		"id": "crimpro:alac:r110-7",
		"title": "Theft charged, estafa proved",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "A is charged with theft for \"taking ₱500,000 from B's office safe.\" Trial shows that B had entrusted the money to A to deposit, and A kept it. The prosecution has not yet rested.",
		"question": "What should the court do? Can A invoke double jeopardy if a new information is filed?",
		"modelAnswer": {
			"answer": "The court should require the filing of an information for estafa and, upon its filing, dismiss the theft information. A cannot invoke double jeopardy.",
			"legalBasis": "Rule 110, Sec. 14, par. 2 and Rule 119, Sec. 19: when it appears before judgment that a mistake has been made in charging the proper offense and the accused cannot be convicted of the offense charged or one necessarily included in it, the court shall commit the accused to answer for the proper offense and dismiss the original upon the filing of the proper information, provided the accused is not placed in double jeopardy.",
			"application": "Theft (taking without consent) and estafa with abuse of confidence (misappropriation of money received in trust) have different elements; neither is necessarily included in the other. A cannot be convicted of estafa under the theft information, so substitution is the proper course, and jeopardy does not attach to a different offense.",
			"conclusion": "Substitute the information; A may be held if there is good cause to detain him."
		}
	},
	{
		"id": "crimpro:alac:r110-8",
		"title": "Libel filed where the article was read",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "P, a private individual residing in Cebu City, is defamed in a newspaper printed and first published in Manila. P reads the article while on vacation in Makati and files the libel complaint there. An information is filed with the RTC of Makati. D does not move to quash, pleads, and is convicted. On appeal, D raises improper venue for the first time.",
		"question": "Will the appeal prosper?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "RPC Art. 360 limits the venue of written defamation to the place where the article was printed and first published, or, for a private individual, where he actually resided at the time. Venue is jurisdictional in criminal cases (Isip v. People, 2007), and lack of jurisdiction over the offense is not waived by failure to move to quash (Rule 117, Sec. 9).",
			"application": "Makati is neither the place of printing and first publication (Manila) nor P's residence (Cebu City). The RTC of Makati had no jurisdiction over the offense, and D's silence did not confer it.",
			"conclusion": "The conviction must be set aside for lack of jurisdiction."
		}
	},
	{
		"id": "crimpro:alac:r110-9",
		"title": "Wrong victim named — cash vs. jewelry",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "Two informations for estafa are filed. In the first, the offended party is named as \"ABC Lending\" for ₱300,000 in cash, but the money belonged to its president, M, personally. In the second, the offended party is named as \"Rita\" for a specific diamond ring, but the ring belonged to her sister Cynthia. Both errors surface at trial.",
		"question": "What is the effect of each error?",
		"modelAnswer": {
			"answer": "The error is fatal in the first case and immaterial in the second.",
			"legalBasis": "Rule 110, Sec. 12(a); Tiu (p. 48), citing Senador v. People (2013): where the property is generic and not identifiable (such as money), an error in the designation of the offended party is fatal; where the property is specific and identifiable, the error is immaterial.",
			"application": "Cash cannot be identified apart from its owner, so naming the wrong owner describes a different offense. The ring is specific and identifiable; the offense is sufficiently identified by the property itself.",
			"conclusion": "The accused may be acquitted in the first case; the second may proceed, with the true name inserted."
		}
	},
	{
		"id": "crimpro:alac:r110-10",
		"title": "Unapproved information raised after the prosecution rests",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "An assistant city prosecutor files an information for estafa without the written approval of the city prosecutor. The accused posts bail, is arraigned and pleads not guilty, and trial proceeds. After the prosecution rests, the accused moves to dismiss for lack of jurisdiction, citing Cudia v. Court of Appeals and Quisay v. People. Alternatively, before arraignment the judge, on her own, dismisses the case on the same ground.",
		"question": "Rule on the accused's motion. Was the judge's motu proprio dismissal (in the alternative facts) proper?",
		"modelAnswer": {
			"answer": "Deny the motion. The motu proprio dismissal was improper.",
			"legalBasis": "Villa Gomez v. People, G.R. No. 216824, November 10, 2020 (En Banc): the lack of prior written authority does not affect jurisdiction; it is a ground to quash under Rule 117, Sec. 3(d) that is waived if not raised before plea; earlier contrary doctrines are abandoned; and the court may not dismiss on this ground motu proprio. Rule 117, Sec. 9 exempts only grounds (a), (b), (g) and (i) from waiver.",
			"application": "The accused pleaded without moving to quash, so the defect was waived. In the alternative facts, only the accused may raise this ground; the judge could not dismiss on her own.",
			"conclusion": "Trial continues; in the alternative, the dismissal should be reversed."
		}
	},
	{
		"id": "crimpro:alac:r110-11",
		"title": "Rule 110 integrated — acts of lasciviousness",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "M, 15 years old and of normal intelligence, is subjected to acts of lasciviousness by her uncle U in Quezon City. M does not want to file a complaint. Her grandmother G files a sworn complaint with the Office of the City Prosecutor, saying M's parents are working abroad and \"will not mind.\" The prosecutor files an information alleging that U committed the act \"on or about the first week of June 2024\" in \"Quezon City, within the jurisdiction of this Court,\" and that U is M's uncle. Before arraignment, the prosecutor moves to amend the information to allege that M was \"below 18 years of age\" (to qualify the offense under special law), and to correct U's surname.",
		"question": "(a) Was the complaint validly filed? (b) Is the information sufficient as to date and place? (c) May the amendments be made, and with or without leave?",
		"modelAnswer": {
			"answer": "(a) Doubtful — as stated, G's filing is premature unless M's parents cannot or will not file. (b) Yes. (c) Yes, without leave.",
			"legalBasis": "Rule 110, Sec. 5: the offended party, even if a minor, may initiate the prosecution independently unless incompetent or incapable; where she fails to file, her parents, grandparents or guardian may file, and their right \"shall be exercised successively in the order herein provided.\" Secs. 10–11: approximate date and an allegation that the offense occurred within the court's jurisdiction suffice. Sec. 14: before plea, amendment in form or substance is without leave, except downgrading or excluding an accused.",
			"application": "(a) M has failed to file, so the right passes to her parents first, then the grandparents. G's statement that the parents \"will not mind\" is not a showing that they are unable or unwilling to file; the safer course is a complaint by the parents (who may file from abroad through proper authentication) or proof that they cannot. (b) The date is not an element of acts of lasciviousness, and the place is alleged within Quezon City. (c) Both amendments occur before plea and neither downgrades the offense nor excludes an accused; adding age is substantial but allowed before plea; correcting the surname is formal.",
			"conclusion": "(a) Cure the complaint by having the parents file or by showing they cannot; (b) the information is sufficient; (c) the amendments may be made without leave."
		}
	},
	{
		"id": "crimpro:alac:r110-12",
		"title": "Rule 110 integrated — intervention, prosecution and appeal",
		"topic": "Rule 110 — Prosecution of Offenses",
		"factPattern": "In an estafa case before the RTC, the offended party O did not reserve the civil action. The public prosecutor objects to the appearance of O's private prosecutor, saying \"the State alone prosecutes crimes.\" Later, the court acquits the accused for insufficiency of evidence and declares him not civilly liable because \"the act from which civil liability might arise did not exist.\" O wants to appeal.",
		"question": "(a) Rule on the public prosecutor's objection. (b) What may O appeal, and through whom?",
		"modelAnswer": {
			"answer": "(a) Overrule the objection. (b) O may appeal only the civil aspect, in his own name; the criminal aspect may be appealed only by the OSG — and an acquittal cannot be appealed on the criminal aspect without placing the accused in double jeopardy (save grave abuse amounting to lack of jurisdiction).",
			"legalBasis": "Rule 110, Sec. 16: where the civil action is instituted with the criminal action, the offended party may intervene by counsel; the right must be respected (Lee Pue Liong v. Chua Pue Chin Lee, 2013), subject to the public prosecutor's direction and control. Villareal v. Aliga (2014): only the OSG may appeal the criminal aspect; the offended party may appeal the civil aspect.",
			"application": "O did not waive, reserve or previously file the civil action, so he has a right to intervene. On appeal, O's interest is limited to civil liability; he may challenge the finding that the act did not exist because that finding extinguishes civil liability ex delicto.",
			"conclusion": "(a) The private prosecutor may appear; (b) O may appeal the civil aspect."
		}
	},
	{
		"id": "crimpro:alac:r111-1",
		"title": "Late reservation",
		"topic": "Rule 111 — Prosecution of Civil Action",
		"factPattern": "In a reckless-imprudence case, the prosecution has presented two witnesses. The offended party then manifests that she reserves the right to file a separate civil action for damages arising from the crime, explaining that she only now hired counsel. The accused objects.",
		"question": "Should the reservation be allowed?",
		"modelAnswer": {
			"answer": "As a rule, no — unless she shows she had no reasonable opportunity to reserve earlier.",
			"legalBasis": "Rule 111, Sec. 1(a): the reservation \"shall be made before the prosecution starts presenting its evidence and under circumstances affording the offended party a reasonable opportunity to make such reservation.\"",
			"application": "The prosecution has begun presenting evidence. Hiring counsel late is not, by itself, lack of reasonable opportunity; she could have manifested at any time before. However, she may still file an independent civil action for quasi-delict (Art. 2176), which needs no reservation.",
			"conclusion": "The reservation is too late; the civil action ex delicto stays with the criminal case, but she may sue on quasi-delict separately, subject to the bar on double recovery."
		}
	},
	{
		"id": "crimpro:alac:r111-2",
		"title": "Earlier civil case, later estafa",
		"topic": "Rule 111 — Prosecution of Civil Action",
		"factPattern": "In January, A sues B in the RTC for recovery of ₱800,000 that B allegedly misappropriated. In June, while the civil case is at the presentation of A's evidence, an estafa information is filed against B for the same act.",
		"question": "What happens to the civil case? What can A do?",
		"modelAnswer": {
			"answer": "The civil case is suspended; A may move to consolidate it with the estafa case.",
			"legalBasis": "Rule 111, Sec. 2: if the criminal action is filed after the civil action, the latter \"shall be suspended in whatever stage it may be found before judgment on the merits\" until final judgment in the criminal action; before judgment on the merits, it may be consolidated on the offended party's motion, with the evidence already adduced deemed reproduced; the civil prescriptive period is tolled.",
			"application": "A's case seeks civil liability arising from the misappropriation (ex delicto). No judgment on the merits has been rendered. A may move to consolidate in the court trying the estafa case, and her evidence is deemed reproduced subject to cross-examination.",
			"conclusion": "Suspended; consolidation available on A's motion."
		}
	},
	{
		"id": "crimpro:alac:r111-3",
		"title": "Death before arraignment",
		"topic": "Rule 111 — Prosecution of Civil Action",
		"factPattern": "X is charged with reckless imprudence resulting in homicide. He dies before arraignment.",
		"question": "What happens to the criminal case and to the claim of the victim's heirs?",
		"modelAnswer": {
			"answer": "The criminal case is dismissed; the heirs may file a civil action against X's estate.",
			"legalBasis": "Rule 111, Sec. 4, last par.: \"If the accused dies before arraignment, the case shall be dismissed without prejudice to any civil action the offended party may file against the estate of the deceased.\" RPC Art. 89(1).",
			"application": "X died before plea. The heirs may sue the estate on quasi-delict (Art. 2176) — which survives — and may also sue X's employer if X was driving in the course of employment (Art. 2180).",
			"conclusion": "Dismiss the criminal case; the heirs file a civil action against the estate (and the employer, if applicable)."
		}
	},
	{
		"id": "crimpro:alac:r111-4",
		"title": "Estafa and a prior quieting-of-title case",
		"topic": "Rule 111 — Prosecution of Civil Action",
		"factPattern": "B sold a lot to C, representing himself as owner. C files estafa against B. Six months earlier, B had sued D (who also claims the lot) for quieting of title; that case is pending. B files a petition to suspend the estafa case with the prosecutor.",
		"question": "Should the prosecutor suspend the preliminary investigation?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "Rule 111, Secs. 6–7: a previously instituted civil action involving an issue similar or intimately related to that in the criminal action, whose resolution determines whether the criminal action may proceed; the petition may be filed with the prosecutor during preliminary investigation.",
			"application": "The estafa charge rests on B's false representation of ownership. If the civil court declares B the owner, there was no false pretense. The civil action was filed first. The petition is filed in the proper forum (the prosecutor) at the proper time (preliminary investigation).",
			"conclusion": "Suspend the preliminary investigation pending resolution of the civil case."
		}
	},
	{
		"id": "crimpro:alac:r111-5",
		"title": "Two acquittals, two results",
		"topic": "Rule 111 — Prosecution of Civil Action",
		"factPattern": "Case 1: A is acquitted of estafa; the decision states that \"the prosecution failed to prove beyond reasonable doubt that A employed deceit,\" but notes that A admitted receiving ₱300,000 from the complainant. Case 2: B is acquitted of theft; the decision states that \"the evidence shows that B was in another province on the date of the taking.\" In both, the decisions are silent on civil liability.",
		"question": "May the complainants still recover civil liability? How?",
		"modelAnswer": {
			"answer": "In Case 1, yes; in Case 2, not on the basis of the crime.",
			"legalBasis": "Rule 111, Sec. 2, last par.: civil liability based on delict is extinguished if a final judgment finds that the act or omission from which it may arise did not exist. Civil Code Art. 29: acquittal on reasonable doubt allows a civil action on preponderance of evidence. Balerta v. People (two kinds of acquittal); Padilla v. CA (damages may be awarded in the same case). Rule 120, Sec. 2.",
			"application": "Case 1 is an acquittal on reasonable doubt; A's receipt of the money is established, so the complainant may move for a ruling on the civil liability or file a separate civil action. Case 2 effectively finds B was not the author of the act; civil liability ex delicto is closed, and the complainant must look to another source (none appears).",
			"conclusion": "A may still be held civilly liable for ₱300,000; B may not be held civilly liable ex delicto."
		}
	},
	{
		"id": "crimpro:alac:r111-6",
		"title": "Estafa, death on appeal, and the contract",
		"topic": "Rule 111 — Prosecution of Civil Action",
		"factPattern": "D borrows ₱2 million from E and issues postdated checks that bounce. D is convicted of estafa and of BP 22 by the RTC, with civil liability of ₱2 million. D dies while his appeal is pending in the Court of Appeals.",
		"question": "What happens to the criminal and civil liabilities? What should E do?",
		"modelAnswer": {
			"answer": "Both criminal liabilities and the civil liability ex delicto are extinguished; E should file a separate civil action against D's estate on the loan.",
			"legalBasis": "Rule 111, Sec. 4; RPC Art. 89(1); People v. Bayotas (1994): death pending appeal extinguishes criminal liability and civil liability based solely on the offense; civil liability from another source (here, contract) survives and is pursued by separate civil action; the period to file it is deemed interrupted during the criminal case.",
			"application": "D died before final judgment. The ₱2 million award, based on the crimes, falls. But the loan is a separate source of obligation; E may claim against the estate (in the settlement proceedings, as a money claim).",
			"conclusion": "Dismiss the appeal as to the criminal aspect and the civil liability ex delicto; E pursues the loan against the estate."
		}
	},
	{
		"id": "crimpro:alac:r111-7",
		"title": "Prejudicial question raised too late and in the wrong court",
		"topic": "Rule 111 — Prosecution of Civil Action",
		"factPattern": "In a falsification case, after the prosecution rests and the defense has presented one witness, the accused files in the civil court (where his earlier action to annul the deed is pending) a motion asking that court to order the suspension of the criminal case because of a prejudicial question.",
		"question": "Should the motion be granted?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 111, Sec. 6: once the criminal action is filed in court, the petition to suspend \"shall be filed in the same criminal action at any time before the prosecution rests.\" Tiu (citing IBP v. Atienza): the determination is made in the first instance in the criminal action.",
			"application": "The motion is filed in the wrong forum (the civil court) and too late (after the prosecution rested). The civil court has no authority to suspend the criminal case.",
			"conclusion": "Deny the motion; the criminal case proceeds."
		}
	},
	{
		"id": "crimpro:alac:r111-8",
		"title": "Conviction and quasi-delict judgment for the same injury",
		"topic": "Rule 111 — Prosecution of Civil Action",
		"factPattern": "A bus driver is convicted of reckless imprudence resulting in serious physical injuries and ordered to pay the victim ₱500,000. Separately, the victim wins a quasi-delict case against the bus company for ₱500,000 for the same injuries.",
		"question": "May the victim collect both awards in full?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 111, Sec. 3: \"In no case … may the offended party recover damages twice for the same act or omission charged in the criminal action.\" Civil Code Art. 2177.",
			"application": "Both awards compensate the same injuries arising from the same act. The victim may choose the more favorable award (often the one against the solvent employer), but recovery under one reduces or bars the other.",
			"conclusion": "The victim may recover only once; payment under one judgment is credited against the other."
		}
	},
	{
		"id": "crimpro:alac:r111-9",
		"title": "Rule 111 integrated — libel, Art. 33 and death",
		"topic": "Rule 111 — Prosecution of Civil Action",
		"factPattern": "P is defamed in a magazine article written by W. P files (1) a libel complaint, which results in an information against W, and (2) without any reservation, a separate civil action for damages under Art. 33 against W and the magazine. W argues that the civil case must be suspended until the libel case is decided. During trial of the libel case, W is acquitted on reasonable doubt. W later dies while the civil case is pending.",
		"question": "(a) Must the civil case be suspended? (b) What is the effect of the acquittal on P's civil case? (c) What is the effect of W's death?",
		"modelAnswer": {
			"answer": "(a) No. (b) None — the civil case continues. (c) The civil case continues against W's estate after substitution.",
			"legalBasis": "Rule 111, Sec. 3: actions under Art. 33 (defamation) proceed independently of the criminal action and require only preponderance of evidence; no reservation is needed. Sec. 2 suspension does not apply to independent civil actions. Sec. 4: the independent civil action may be continued against the estate or legal representative after substitution within 30 days from notice.",
			"application": "(a) P's action rests on Art. 33, so it is not suspended by the libel case. (b) An acquittal on reasonable doubt does not affect an independent action; P needs only preponderance of evidence. (c) W's death does not extinguish an Art. 33 action; the court orders the heirs or legal representative to substitute within 30 days.",
			"conclusion": "P's civil case proceeds throughout, now against W's estate; P may not recover twice for the same defamation."
		}
	},
	{
		"id": "crimpro:alac:r112-1",
		"title": "No preliminary investigation — what to do",
		"topic": "Rule 112 — Preliminary Investigation",
		"factPattern": "An information for qualified theft (penalty above 4 years, 2 months and 1 day) is filed directly in the RTC without preliminary investigation. The accused is arrested on a warrant. Before arraignment, he moves to quash on the ground that no preliminary investigation was held.",
		"question": "Rule on the motion. What should the court do?",
		"modelAnswer": {
			"answer": "Deny the motion to quash, but suspend the proceedings and remand the case for preliminary investigation.",
			"legalBasis": "Rule 112, Sec. 1: PI is required for offenses with a penalty of at least 4 years, 2 months and 1 day. Rule 117, Sec. 3 does not list its absence as a ground to quash. Larrañaga v. CA; Socrates v. Sandiganbayan: the court holds the proceedings in abeyance and remands. Rule 114, Sec. 26: the objection must be raised before plea.",
			"application": "The offense required PI; none was held. The accused raised it before arraignment. The proper relief is remand, not dismissal; the information remains valid and the court keeps jurisdiction.",
			"conclusion": "Treat the motion as one for preliminary investigation: suspend and remand."
		}
	},
	{
		"id": "crimpro:alac:r112-2",
		"title": "Five days after learning of the filing",
		"topic": "Rule 112 — Preliminary Investigation",
		"factPattern": "X is arrested without a warrant for frustrated homicide on March 1. After inquest, an information is filed on March 2; X learns of it on March 3. On March 10, X moves for a preliminary investigation.",
		"question": "Should the motion be granted?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 112, Sec. 6: after filing without preliminary investigation, the accused \"may within five (5) days from the time he learns of its filing, ask for a preliminary investigation.\" 2017 Revised Guidelines, III.2(b)(ii): a motion for PI filed beyond the five-day period is a prohibited motion, denied outright.",
			"application": "X learned of the filing on March 3; the five days ended on March 8. His March 10 motion is late.",
			"conclusion": "Deny the motion outright; the right was waived."
		}
	},
	{
		"id": "crimpro:alac:r112-3",
		"title": "Judge rubber-stamps the information",
		"topic": "Rule 112 — Preliminary Investigation",
		"factPattern": "An information for estafa is filed with the RTC at 9 a.m. By 10 a.m., the judge has issued a warrant of arrest. The order says only: \"Finding probable cause based on the prosecutor's certification, let a warrant issue.\" The record shows that the affidavits had not yet been transmitted to the court.",
		"question": "Is the warrant valid?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Const., Art. III, Sec. 2: probable cause \"to be determined personally by the judge.\" Rule 112, Sec. 5(a): the judge \"shall personally evaluate the resolution of the prosecutor and its supporting evidence.\" Soliven v. Makasiar; Okabe v. Gutierrez (in Tiu): the judge should consider the report, affidavits and counter-affidavits, not the certification alone.",
			"application": "The supporting evidence was not even before the judge; he relied solely on the certification.",
			"conclusion": "The warrant is invalid; the accused may move to quash it (a meritorious motion under the 2017 Guidelines)."
		}
	},
	{
		"id": "crimpro:alac:r112-4",
		"title": "Petition for review and arraignment",
		"topic": "Rule 112 — Preliminary Investigation",
		"factPattern": "On May 1, the city prosecutor approves the filing of an information for falsification against R. On May 5, the information is filed in court. On May 10, R files a petition for review with the Secretary of Justice and moves in court to suspend arraignment. The court denies the motion and sets arraignment on May 20.",
		"question": "Was the court correct?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 116, Sec. 11(c): upon motion, arraignment shall be suspended if a petition for review of the resolution of the prosecutor is pending at the DOJ or the Office of the President, provided the period of suspension does not exceed sixty days from the filing of the petition. DC 70, Sec. 9: the appeal does not hold the filing of the information, but proceedings in court should be held in abeyance.",
			"application": "R filed the petition before arraignment and moved to suspend. The court must suspend arraignment for up to sixty days from May 10.",
			"conclusion": "The court should suspend arraignment until the petition is resolved or until sixty days lapse, whichever comes first; it may still issue a warrant (Viudez v. CA)."
		}
	},
	{
		"id": "crimpro:alac:r112-5",
		"title": "Which procedure — PI, Sec. 8, or expedited?",
		"topic": "Rule 112 — Preliminary Investigation",
		"factPattern": "Three complaints are filed in a chartered city: (1) slight physical injuries (arresto menor); (2) less serious physical injuries (arresto mayor); (3) estafa with a prescribed penalty of prision correccional maximum to prision mayor minimum.",
		"question": "Which procedure applies to each? Does any require preliminary investigation?",
		"modelAnswer": {
			"answer": "(1) Expedited (summary) procedure; (2) Sec. 8 procedure if not covered by the Expedited Rules — but arresto mayor (up to 6 months) is within the one-year ceiling, so it is also under the Expedited Rules; (3) preliminary investigation.",
			"legalBasis": "Rule 112, Sec. 1 (PI for at least 4y 2m 1d); Sec. 8 (cases below the threshold not under the summary rule); 2022 Rules on Expedited Procedures, Rule I, Sec. 1(B) (imprisonment not exceeding one year or fine not exceeding ₱50,000); Rule 110, Sec. 1 (in chartered cities, file with the prosecutor).",
			"application": "Arresto menor and arresto mayor both fall within one year — expedited procedure, filed with the city prosecutor (chartered city). The estafa's maximum (prision mayor minimum, 6y 1d to 8y) exceeds 4y 2m 1d — preliminary investigation required.",
			"conclusion": "(1) and (2): expedited procedure via the city prosecutor; (3): preliminary investigation."
		}
	},
	{
		"id": "crimpro:alac:r112-6",
		"title": "DOJ reverses after arraignment",
		"topic": "Rule 112 — Preliminary Investigation",
		"factPattern": "After A is arraigned for estafa, the Secretary of Justice — on a petition filed before arraignment — reverses the finding of probable cause and directs the prosecutor to move for withdrawal of the information. The judge grants the motion, stating: \"The Court defers to the expertise of the DOJ.\"",
		"question": "(a) Could the Secretary still act after arraignment? (b) Was the judge's order proper? (c) What may the private complainant do?",
		"modelAnswer": {
			"answer": "(a) Yes. (b) No. (c) File a petition for certiorari under Rule 65.",
			"legalBasis": "DC 70, Sec. 7: arraignment after the filing of the petition does not bar the Secretary from exercising his power of review. Crespo v. Mogul; Lanier v. People (2014): the trial court must make an independent assessment of a motion to withdraw; deferring entirely to the DOJ is grave abuse of discretion. Tiu (p. 94): the private offended party may file Rule 65 when the court allows withdrawal without its own finding.",
			"application": "The petition was filed before arraignment, so the Secretary could act. But the judge merely deferred, without evaluating the evidence himself.",
			"conclusion": "The order granting withdrawal is void; the complainant may seek its annulment by certiorari."
		}
	},
	{
		"id": "crimpro:alac:r112-7",
		"title": "Arrested for one crime, inquested for another",
		"topic": "Rule 112 — Preliminary Investigation",
		"factPattern": "Police arrest Y without a warrant for allegedly inciting to sedition during a rally. At the inquest, the prosecutor, on the same referral, finds probable cause for rebellion — a different and graver offense — and files an information for rebellion.",
		"question": "Is the inquest valid?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 112, Sec. 6 allows filing without preliminary investigation only for the offense for which the person was lawfully arrested without a warrant, after inquest. Tiu (p. 98), citing Beltran v. People: where the inquest was for another offense than the one that was the basis of the arrest, the inquest proceedings are void.",
			"application": "Y was arrested for inciting to sedition; rebellion was not the basis of the arrest. As to rebellion, there was no lawful warrantless arrest to support inquest; Y is entitled to a regular preliminary investigation.",
			"conclusion": "The inquest for rebellion is void; Y may demand preliminary investigation before plea."
		}
	},
	{
		"id": "crimpro:alac:r112-8",
		"title": "Four years in preliminary investigation",
		"topic": "Rule 112 — Preliminary Investigation",
		"factPattern": "A fact-finding team of the Ombudsman investigates a mayor for two years. A formal complaint is filed in January 2020. The respondent files his counter-affidavit in March 2020 and twice moves for early resolution in 2021. The Ombudsman resolves only in January 2025. The case involves a single procurement contract.",
		"question": "May the mayor have the case dismissed for violation of the right to speedy disposition?",
		"modelAnswer": {
			"answer": "Likely yes.",
			"legalBasis": "Const., Art. III, Sec. 16. Cagang v. Sandiganbayan (2018): the period is counted from the filing of the formal complaint, excluding fact-finding; if the delay exceeds the periods in the rules, the prosecution must justify it; the respondent must assert the right timely; complexity is considered.",
			"application": "Counting from January 2020 (not the earlier fact-finding), the resolution took five years for a single-contract case. The mayor asserted his right in 2021. The prosecution must show the delay was justified by complexity or attributable to the mayor.",
			"conclusion": "Unless the Ombudsman justifies the delay, the case should be dismissed for violation of the right to speedy disposition."
		}
	},
	{
		"id": "crimpro:alac:r112-9",
		"title": "Rule 112 integrated — from complaint to warrant",
		"topic": "Rule 112 — Preliminary Investigation",
		"factPattern": "On June 1, C files an estafa complaint (penalty above 6 years) against R in Quezon City, with affidavits notarized by a notary public although an assistant prosecutor was available in the same building. On June 20, the prosecutor issues a subpoena. R receives it on June 25 and, on July 5, files a \"Motion to Dismiss for Lack of Jurisdiction\" arguing the transaction occurred in Makati. The prosecutor resolves on July 30 finding probable cause; the city prosecutor approves on August 20. The information is filed on August 25. On August 26, R files a \"Motion for Judicial Determination of Probable Cause.\" On September 15, the judge, without reading the affidavits, issues a warrant.",
		"question": "Identify every procedural defect and its effect.",
		"modelAnswer": {
			"answer": "There are five defects; only the warrant is seriously vulnerable.",
			"legalBasis": "Rule 112, Sec. 3(a) (affidavits before a prosecutor or authorized official; notary only in their absence); Sec. 3(b) (10 days to subpoena); Sec. 3(c) (10 days for counter-affidavit; no motion to dismiss in lieu); Sec. 4 (forward within 5 days; head acts within 10 days); Sec. 5(a) (judge personally evaluates within 10 days); 2017 Revised Guidelines (motion for judicial determination of probable cause prohibited); Sasot v. People (want of proper oath is a defect of form).",
			"application": "(1) Notarization when a prosecutor was available — a defect of form, curable (Sasot). (2) Subpoena on day 19 instead of within 10 days — a directory period; no effect on validity, possibly administrative. (3) R's motion to dismiss in lieu of a counter-affidavit is not allowed; R is deemed not to have controverted the complaint — though venue (Makati) is a real issue to raise later by motion to quash for lack of jurisdiction (Rule 117, Sec. 3[b]), which is never waived. (4) The head acted 21 days after the resolution — directory, no effect. (5) R's motion for judicial determination of probable cause is prohibited and should be denied outright; and the judge's warrant, issued 21 days after filing and without reading the affidavits, violates Sec. 5(a) and Art. III, Sec. 2.",
			"conclusion": "The information stands; R may move to quash the warrant (meritorious) and, before plea, move to quash the information for improper venue if the evidence shows the offense occurred entirely in Makati."
		}
	},
	{
		"id": "crimpro:alac:r113-1",
		"title": "Arrest the morning after",
		"topic": "Rule 113 — Arrest",
		"factPattern": "At 10 p.m., V is stabbed in a bar. Witnesses tell police the next morning that the assailant was A, a regular customer. At 9 a.m., police go to A's house and arrest him without a warrant.",
		"question": "Was the arrest valid?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 113, Sec. 5(b): the offense must have \"just been committed\" and the arresting officer must have probable cause based on personal knowledge of facts or circumstances. Go v. CA (1992): an arrest six days later on witnesses' statements is invalid; Tiu (citing People v. del Rosario): a day later may lack immediacy.",
			"application": "Eleven hours passed; the police did not respond to the scene and gather facts themselves; they relied on witness accounts given the next morning. Immediacy and personal knowledge are both lacking.",
			"conclusion": "The arrest was illegal; the police should have obtained a warrant. A may move to quash for lack of jurisdiction over his person before plea and is entitled to a regular preliminary investigation."
		}
	},
	{
		"id": "crimpro:alac:r113-2",
		"title": "Buy-bust vs. tip",
		"topic": "Rule 113 — Arrest",
		"factPattern": "Case 1: Police set up a buy-bust; the poseur-buyer hands marked money to B and receives a sachet, then signals; B is arrested. Case 2: Police receive a tip that C carries shabu; they wait at a terminal and arrest C as he alights, then search his bag and find shabu.",
		"question": "Are the arrests valid?",
		"modelAnswer": {
			"answer": "Case 1: valid. Case 2: invalid.",
			"legalBasis": "Rule 113, Sec. 5(a); Valdez v. People (overt act in the presence of the officer); People v. Molina and People v. Laguio (tip alone insufficient).",
			"application": "In Case 1 the officers witnessed the sale — an overt act in their presence. In Case 2 C did nothing criminal in their view; the arrest rested on the tip alone, and the search was not incident to a lawful arrest.",
			"conclusion": "B's arrest is valid; C's arrest is illegal and the shabu is inadmissible if timely objected to."
		}
	},
	{
		"id": "crimpro:alac:r113-3",
		"title": "Breaking the door",
		"topic": "Rule 113 — Arrest",
		"factPattern": "Officers with a warrant of arrest for D go to his house at midnight. They knock, shout \"Police! We have a warrant for D!\", hear someone running inside, and receive no answer. They break the door and arrest D in the kitchen.",
		"question": "Was the forced entry lawful?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "Rule 113, Sec. 6 (any time of day or night) and Sec. 11 (may break into any building where the person is or is reasonably believed to be, if refused admittance after announcing authority and purpose).",
			"application": "They had a warrant, announced authority and purpose, and were effectively refused admittance (no answer; flight inside). Night service of an arrest warrant is allowed.",
			"conclusion": "Lawful entry and arrest."
		}
	},
	{
		"id": "crimpro:alac:r113-4",
		"title": "Illegal arrest, bail, plea and evidence",
		"topic": "Rule 113 — Arrest",
		"factPattern": "E is arrested without a warrant on a tip and found with a firearm. He posts bail, then pleads not guilty without raising the legality of his arrest. During trial, when the prosecution offers the firearm, E objects that it was seized during an illegal arrest. After conviction, he argues on appeal that the court never acquired jurisdiction over his person.",
		"question": "Rule on E's objections.",
		"modelAnswer": {
			"answer": "The jurisdictional objection fails; the evidentiary objection succeeds.",
			"legalBasis": "Rule 114, Sec. 26 and Rule 117, Sec. 9: objections to the arrest must be raised before plea; People v. Cunanan (2015). De la Cruz v. People and Villanueva v. People (2014): waiver of the illegal arrest is not a waiver of the inadmissibility of evidence seized. Const., Art. III, Sec. 3(2).",
			"application": "E pleaded without raising the arrest, so he submitted to the court's jurisdiction. But he timely objected to the firearm at trial; it was seized incident to an arrest made on a tip with no overt act, so it is inadmissible.",
			"conclusion": "The court had jurisdiction over E, but the firearm must be excluded; if it is the corpus delicti, E must be acquitted for insufficiency of evidence — not because of the illegal arrest itself."
		}
	},
	{
		"id": "crimpro:alac:r113-5",
		"title": "An \"invitation\" to the station",
		"topic": "Rule 113 — Arrest",
		"factPattern": "Police \"invite\" F, a suspect in a robbery committed the day before, to the station \"for questioning.\" F goes voluntarily. After eight hours of questioning without counsel, F signs a written confession. The police then detain him and refer him for inquest.",
		"question": "Was F arrested? Is the confession admissible? Is inquest proper?",
		"modelAnswer": {
			"answer": "F was effectively under custodial investigation; the confession is inadmissible; inquest is improper because there was no lawful warrantless arrest.",
			"legalBasis": "RA 7438, Sec. 2: custodial investigation includes the practice of issuing an \"invitation\"; an extrajudicial confession must be in writing and signed in the presence of counsel, otherwise inadmissible. Rule 113, Sec. 5; Rule 112, Sec. 6.",
			"application": "The robbery was committed the day before; police had no basis for a hot-pursuit arrest. F's \"invitation\" became custodial investigation without counsel. The detention after the confession is not a lawful warrantless arrest, so inquest cannot replace a preliminary investigation.",
			"conclusion": "Exclude the confession; F should be released and subjected to a regular preliminary investigation (or a warrant obtained)."
		}
	},
	{
		"id": "crimpro:alac:r113-6",
		"title": "Three warrantless re-arrests",
		"topic": "Rule 113 — Arrest",
		"factPattern": "(1) G, a detention prisoner awaiting trial, escapes from the city jail; a week later a police officer sees him in a mall and arrests him. (2) H, out on bail, is caught at the airport boarding a flight abroad without the court's permission. (3) I, lawfully arrested for theft, is rescued by friends; a barangay tanod pursues and catches him a few minutes later in the next town.",
		"question": "Are the warrantless arrests valid?",
		"modelAnswer": {
			"answer": "All three are valid.",
			"legalBasis": "Rule 113, Sec. 5(c) (escaped prisoner, including one temporarily confined while his case is pending); Rule 114, Sec. 23 (accused on bail attempting to depart without permission); Rule 113, Sec. 13 (any person may immediately pursue and retake a lawfully arrested person who escapes or is rescued, anywhere in the Philippines).",
			"application": "(1) G is an escaped detention prisoner — Sec. 5(c) has no immediacy requirement. (2) H attempted to depart without permission. (3) I was immediately pursued after the rescue.",
			"conclusion": "Each arrest is lawful without a warrant."
		}
	},
	{
		"id": "crimpro:alac:r113-7",
		"title": "Rule 113 integrated — warrant served late, at night, without the warrant in hand",
		"topic": "Rule 113 — Arrest",
		"factPattern": "A warrant for J's arrest is received by the police on February 1. They report on February 25 that J could not be located. On April 10 at 11 p.m., an officer who knows of the warrant (but does not have it with him) sees J at a bar and arrests him; J resists, and the officer calls two bystanders to help. At the station, J asks to see the warrant; it is shown to him the next morning. J's lawyer is refused entry at 1 a.m.",
		"question": "Identify the issues and resolve each.",
		"modelAnswer": {
			"answer": "The arrest is valid; the refusal of the lawyer's visit is not.",
			"legalBasis": "Rule 113, Sec. 4 (10 days to execute — directory; warrant valid until served); Sec. 6 (any time); Sec. 7 (inform of cause and warrant unless he resists; need not possess the warrant; show it on request as soon as practicable); Sec. 10 (summon assistance); Sec. 14 and RA 7438 (lawyer may visit at any hour).",
			"application": "The February 25 report satisfied Sec. 4; the warrant remained valid. Night arrest is allowed. J resisted, excusing full prior information; the warrant was shown the next morning, as soon as practicable. Bystanders may be summoned. But refusing counsel at 1 a.m. violates Sec. 14 and RA 7438.",
			"conclusion": "The arrest stands; the officers who refused counsel are liable under RA 7438, and any statement taken in counsel's absence is inadmissible."
		}
	},
	{
		"id": "crimpro:alac:r114-1",
		"title": "Surety produces the accused late",
		"topic": "Rule 114 — Bail",
		"factPattern": "Accused A, on a corporate surety bond, fails to appear at trial on May 2. The court declares the bond forfeited and gives the surety 30 days. On June 15, the surety files a manifestation that it cannot locate A. The court renders judgment against the surety for the full amount. On July 1, A is arrested; the surety moves to reduce its liability.",
		"question": "Should the motion be granted?",
		"modelAnswer": {
			"answer": "The court may not reduce or mitigate the liability, because A was neither surrendered by the surety nor acquitted.",
			"legalBasis": "Rule 114, Sec. 21: failing to produce the accused and explain within 30 days, judgment is rendered against the bondsmen jointly and severally; \"the court shall not reduce or otherwise mitigate the liability of the bondsmen, unless the accused has been surrendered or is acquitted.\"",
			"application": "The surety failed within 30 days; A was arrested by the authorities, not surrendered by the surety, and not acquitted.",
			"conclusion": "Deny the motion."
		}
	},
	{
		"id": "crimpro:alac:r114-2",
		"title": "Detained longer than the minimum",
		"topic": "Rule 114 — Bail",
		"factPattern": "B is charged with estafa; the prescribed penalty is prision correccional (6 months and 1 day to 6 years). B has been detained for 8 months awaiting trial and cannot afford bail.",
		"question": "What relief is available to B?",
		"modelAnswer": {
			"answer": "B may be released on reduced bail or on his own recognizance.",
			"legalBasis": "Rule 114, Sec. 16, par. 3: a person in custody for a period equal to or more than the minimum of the principal penalty prescribed, without ISLAW or modifying circumstances, shall be released on reduced bail or on his own recognizance at the court's discretion. RA 10389, Sec. 5(b) and A.M. No. 12-11-2-SC, Sec. 5: release on recognizance.",
			"application": "The minimum of prision correccional is 6 months and 1 day; B has served 8 months.",
			"conclusion": "B should be released on reduced bail or recognizance, without prejudice to trial."
		}
	},
	{
		"id": "crimpro:alac:r114-3",
		"title": "Arrested in another city on a homicide warrant",
		"topic": "Rule 114 — Bail",
		"factPattern": "C is charged with homicide before the RTC of Iloilo City. He is arrested in Quezon City on a weekend.",
		"question": "Where may C post bail?",
		"modelAnswer": {
			"answer": "With the Iloilo RTC, or with any RTC of Quezon City (or, if no RTC judge is available, any first-level judge there).",
			"legalBasis": "Rule 114, Sec. 4(b) (homicide bailable as a right before conviction); Sec. 17(a) (if arrested elsewhere, bail may also be filed with any RTC of the place of arrest, or any first-level judge if no RTC judge is available); Sec. 19 (accepting judge forwards papers).",
			"application": "Homicide is not punishable by RP; bail is a matter of right. C was arrested in Quezon City, so its courts may accept bail.",
			"conclusion": "C may post bail in Quezon City; the judge forwards the bail and release order to Iloilo."
		}
	},
	{
		"id": "crimpro:alac:r114-4",
		"title": "Bail granted on the parties' agreement",
		"topic": "Rule 114 — Bail",
		"factPattern": "D is charged with rape (reclusion perpetua). At the scheduled hearing, the prosecutor manifests that the complainant has executed an affidavit of desistance and that the prosecution \"will not oppose\" bail. The judge grants bail of ₱200,000 in a one-line order, without receiving evidence.",
		"question": "Is the order valid? What should the judge have done?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 114, Secs. 7–8, 18; Serapio v. Sandiganbayan (2003); Domingo v. Pagayatan (2003); Mabutas v. Perello (2005); A.M. No. 12-11-2-SC, Sec. 6: a hearing is mandatory; the prosecution bears the burden; the order must contain a summary of the evidence and the judge's conclusion.",
			"application": "Rape is punishable by reclusion perpetua, so bail is discretionary and depends on whether evidence of guilt is strong. The judge received no evidence and wrote no summary; the affidavit of desistance does not by itself establish that evidence of guilt is weak.",
			"conclusion": "The order is issued with grave abuse of discretion; the judge should have required the prosecution to present its evidence (it may adopt affidavits), examined the witnesses, and issued an order with a summary and conclusion."
		}
	},
	{
		"id": "crimpro:alac:r114-5",
		"title": "Convicted, sentenced to 12 years, with a prior bail violation",
		"topic": "Rule 114 — Bail",
		"factPattern": "E was out on bail during trial for frustrated murder. Once, he missed a hearing without justification and his bond was forfeited, though he later appeared. He is convicted of frustrated homicide and sentenced to an indeterminate penalty with a maximum of 12 years. He files a notice of appeal and asks the RTC (which still has the record) for bail pending appeal.",
		"question": "Should bail be granted?",
		"modelAnswer": {
			"answer": "No — it must be denied if the prosecution shows the prior violation.",
			"legalBasis": "Rule 114, Sec. 5: upon RTC conviction of an offense not punishable by death, RP or life, bail is discretionary; the RTC may act while it holds the original record; if the penalty imposed exceeds six years, bail shall be denied upon a showing (with notice to the accused) that he \"violated the conditions of his bail without valid justification.\"",
			"application": "Frustrated homicide is not punishable by RP; the RTC still has the record; the penalty exceeds six years; E missed a hearing without justification — a bail violation.",
			"conclusion": "Bail pending appeal must be denied; E's original bail ended at promulgation."
		}
	},
	{
		"id": "crimpro:alac:r114-6",
		"title": "Indigent accused before arraignment",
		"topic": "Rule 114 — Bail",
		"factPattern": "F, a jobless father of four, is charged with qualified theft (prescribed penalty: reclusion temporal). Before arraignment, he applies for release on recognizance under RA 10389, attaching a sworn declaration of indigency. His cousin offers to be his custodian.",
		"question": "Should the application be granted?",
		"modelAnswer": {
			"answer": "Not yet.",
			"legalBasis": "RA 10389, Secs. 5–6, 8: recognizance is a matter of right for offenses not punishable by death, RP or life, before conviction by the RTC, upon compliance with requirements, including a social welfare certificate of indigency, prior arraignment, notice to the sanggunian, and a hearing; the custodian must not be a relative within the fourth degree.",
			"application": "Qualified theft punishable by reclusion temporal qualifies (assuming the value does not raise it to RP). But F has not been arraigned, has no social welfare certification, and his cousin (fourth degree) is disqualified as custodian.",
			"conclusion": "Deny for now; F may re-apply after arraignment with the required certification and a qualified custodian."
		}
	},
	{
		"id": "crimpro:alac:r114-7",
		"title": "Rule 114 integrated — from surrender to appeal",
		"topic": "Rule 114 — Bail",
		"factPattern": "G, charged with murder in Makati, surrenders to the Makati RTC through counsel while confined in a Pasig hospital, and petitions for bail. The prosecution presents two eyewitnesses whose accounts conflict on who fired the shot. The court grants bail of ₱300,000, summarizing the evidence. G posts a property bond but annotates the lien on day 14. Later, G is convicted of homicide and sentenced to 8–14 years. He asks the RTC for bail pending appeal; the RTC has not transmitted the record.",
		"question": "(a) Was G in custody when he applied? (b) Was the grant of bail proper? (c) Effect of the late annotation? (d) Which court acts on bail pending appeal?",
		"modelAnswer": {
			"answer": "(a) Yes. (b) Yes. (c) The bond could have been cancelled and G re-arrested. (d) Only the Court of Appeals.",
			"legalBasis": "(a) Paderanga v. CA: surrender through counsel while hospitalized is submission to the court's custody. (b) Secs. 7–8: hearing; prosecution's burden; order with summary. (c) Sec. 11: annotation and compliance within 10 days, else cancellation and re-arrest. (d) Sec. 5, par. 1 and Rule 120, Sec. 6: where the conviction changed the offense from non-bailable to bailable, the application can only be filed with and resolved by the appellate court.",
			"application": "(a) G communicated his submission through counsel while confined. (b) Conflicting eyewitness accounts justify a finding that evidence of guilt is not strong; the court heard and summarized. (c) Day 14 is late; cancellation was within the court's power, though it may accept late compliance. (d) Murder (non-bailable when evidence is strong) became homicide (bailable).",
			"conclusion": "G's custody and bail were proper; the late annotation exposed him to cancellation; bail pending appeal must be sought in the CA."
		}
	},
	{
		"id": "crimpro:alac:r115-1",
		"title": "Bail-jumping before and after arraignment",
		"topic": "Rule 115 — Rights of the Accused",
		"factPattern": "A and B, co-accused in a robbery case, are out on bail. A disappears a week before arraignment. B is arraigned, then stops attending trial; notices are sent to his address in the bail bond.",
		"question": "May the trial proceed as to each?",
		"modelAnswer": {
			"answer": "As to A, no; as to B, yes.",
			"legalBasis": "Const., Art. III, Sec. 14(2): after arraignment, trial may proceed notwithstanding the absence of the accused, provided he was duly notified and his failure to appear is unjustified. Rule 115, Sec. 1(c); Rule 114, Sec. 2(c).",
			"application": "A was never arraigned — there is no plea to try. B was arraigned, notified at his bail address, and offers no justification.",
			"conclusion": "Proceed against B in absentia; as to A, issue a warrant, forfeit his bail, and archive the case until he is arrested (2017 Guidelines, III.6)."
		}
	},
	{
		"id": "crimpro:alac:r115-2",
		"title": "Distant defense witness",
		"topic": "Rule 115 — Rights of the Accused",
		"factPattern": "The defense's key witness, a fisherman, lives on an island more than 100 km from the court and cannot afford to travel. Trial is in two months.",
		"question": "What can the accused do?",
		"modelAnswer": {
			"answer": "Move for conditional examination of the witness.",
			"legalBasis": "Rule 115, Sec. 1(g); Rule 119, Secs. 12–13: the accused may, on motion with notice, have witnesses conditionally examined if the witness resides more than 100 km from the place of trial and has no means to attend; the examination is before a judge, or a member of the Bar designated by the judge, with notice to the prosecutor at least 3 days before.",
			"application": "The witness lives more than 100 km away and lacks means. The motion must state his name and residence and the substance of his testimony, supported by the accused's affidavit.",
			"conclusion": "The court should order the conditional examination; the written record may be used at trial."
		}
	},
	{
		"id": "crimpro:alac:r115-3",
		"title": "Accused on the stand — two questions",
		"topic": "Rule 115 — Rights of the Accused",
		"factPattern": "In a homicide trial, the accused testifies that he was home all night. On cross-examination, the prosecutor asks (1) \"Isn't it true you were at the victim's house at 10 p.m.?\" and (2) \"Isn't it true that you sold a stolen motorcycle that same night?\" The accused invokes the right against self-incrimination for both.",
		"question": "Rule on each invocation.",
		"modelAnswer": {
			"answer": "Overrule the objection to question (1); sustain it as to question (2).",
			"legalBasis": "Rule 115, Sec. 1(d)–(e); People v. Ayson (1989): an accused who testifies may be cross-examined on matters stated in his direct or connected with it and cannot refuse on the ground of incrimination for the crime charged; but he may refuse a specific question that tends to incriminate him for a different offense.",
			"application": "(1) goes to his alibi, which he raised on direct — he must answer. (2) concerns a different offense (fencing or theft); it is beyond the scope of direct and incriminating as to another crime.",
			"conclusion": "He must answer (1); he may decline (2)."
		}
	},
	{
		"id": "crimpro:alac:r115-4",
		"title": "Ask for trial first",
		"topic": "Rule 115 — Rights of the Accused",
		"factPattern": "Over 14 months, the prosecution moves for postponement nine times because its witnesses are unavailable; the defense does not object each time. Before the tenth setting, the accused moves to dismiss for violation of speedy trial. The court grants the motion. The prosecution later refiles the same charge.",
		"question": "(a) Was the dismissal proper? (b) May the case be refiled?",
		"modelAnswer": {
			"answer": "(a) Doubtful — the accused's acquiescence weighs against him. (b) If the dismissal stands, no.",
			"legalBasis": "Rule 119, Secs. 3 and 9; Rule 115, Sec. 1(h); balancing test (length, reasons, assertion, prejudice — Mari v. Gonzales; Perez v. People); Andres v. Cacdac (accused should first ask for trial); dismissal is subject to double jeopardy (Condrada).",
			"application": "Fourteen months of delay attributable to the prosecution is significant, but the accused never objected or demanded trial — a factor against him. Unless the delays were unexcused and prejudicial, the dismissal may be reversed. If the dismissal is upheld (and not void), it operates as an acquittal.",
			"conclusion": "(a) The court should have weighed the accused's failure to assert the right; (b) a valid speedy-trial dismissal bars refiling."
		}
	},
	{
		"id": "crimpro:alac:r115-5",
		"title": "Witness dies before cross-examination",
		"topic": "Rule 115 — Rights of the Accused",
		"factPattern": "The prosecution's eyewitness finishes direct examination; the defense asks for time to prepare cross. Before the next setting, the witness dies.",
		"question": "Is the direct testimony admissible?",
		"modelAnswer": {
			"answer": "It depends on why cross-examination did not happen; if the defense had a fair opportunity and let it pass, the testimony may stand; if not, it should be stricken.",
			"legalBasis": "Rule 115, Sec. 1(f): right to confront and cross-examine; the test is opportunity to cross-examine (Tiu, p. 141).",
			"application": "The defense asked for time — a reasonable request — and the witness died before the next setting. The defense did not waive cross-examination; there was no real opportunity.",
			"conclusion": "The direct testimony should be stricken or given little weight; the accused's right to confrontation prevails."
		}
	},
	{
		"id": "crimpro:alac:r115-6",
		"title": "Rule 115 integrated",
		"topic": "Rule 115 — Rights of the Accused",
		"factPattern": "Z, charged with estafa, is arraigned with counsel de officio because his lawyer is late. At trial, his lawyer of choice appears irregularly; the court proceeds once without him, appointing a PAO lawyer for that hearing. The prosecution offers the transcript of a witness's testimony in a civil case between Z and the same complainant over the same transaction; the witness has since emigrated and cannot be located. Z declines to testify. The judge remarks in the decision: \"The accused's refusal to explain the missing funds speaks volumes.\"",
		"question": "Identify and resolve the Rule 115 issues.",
		"modelAnswer": {
			"answer": "The arraignment and the hearing with PAO counsel were valid; the former testimony is admissible if Z had the opportunity to cross-examine in the civil case; the judge's remark violates Z's right to silence.",
			"legalBasis": "Rule 115, Sec. 1(c) (counsel; counsel de officio mandatory at arraignment); 2017 Guidelines, III.13(b) (proceed with counsel de officio when counsel de parte is absent); Sec. 1(f) (former testimony: witness abroad or not found, same parties and subject matter, opportunity to cross); Sec. 1(d) (\"his silence shall not in any manner prejudice him\").",
			"application": "Counsel de officio at arraignment satisfies the right. Proceeding with PAO counsel during one hearing is allowed under the 2017 Guidelines. The civil case involved the same parties and subject matter; the witness is abroad and cannot be found; if Z (as a party) had the opportunity to cross-examine, the testimony may be used. The judge drew an adverse inference from silence.",
			"conclusion": "The judgment is vulnerable on the adverse-inference ground; if the conviction rests on that inference, it should be reversed."
		}
	},
	{
		"id": "crimpro:alac:r116-1",
		"title": "Guilty — \"if I get probation\"",
		"topic": "Rule 116 — Arraignment and Plea",
		"factPattern": "At arraignment for estafa, A says: \"I plead guilty, Your Honor, if I will be granted probation.\" The court records a plea of guilty and sentences him.",
		"question": "Was the procedure correct?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 116, Sec. 1(c): \"When the accused refuses to plead or makes a conditional plea, a plea of not guilty shall be entered for him.\" People v. Magat (in Tiu): a plea conditioned on the penalty is a conditional plea.",
			"application": "A's plea was conditioned on a favorable sentence (probation). It is not an unconditional admission.",
			"conclusion": "The court should have entered a plea of not guilty and proceeded to pre-trial; the judgment should be set aside."
		}
	},
	{
		"id": "crimpro:alac:r116-2",
		"title": "Victim absent at arraignment",
		"topic": "Rule 116 — Arraignment and Plea",
		"factPattern": "In a frustrated homicide case, the victim is duly notified but does not appear at arraignment. The accused offers to plead guilty to serious physical injuries; the trial prosecutor agrees.",
		"question": "May the court accept the plea?",
		"modelAnswer": {
			"answer": "Yes, if serious physical injuries is necessarily included in the frustrated homicide charged.",
			"legalBasis": "Rule 116, Sec. 1(f): if the offended party fails to appear despite due notice, the court may allow a plea of guilty to a lesser offense necessarily included in the offense charged with the conformity of the trial prosecutor alone. Sec. 2.",
			"application": "The victim was duly notified and absent. The prosecutor conforms. Physical injuries are generally considered included in a frustrated homicide charge where the information alleges the wounds inflicted.",
			"conclusion": "The court may approve the plea and convict for serious physical injuries."
		}
	},
	{
		"id": "crimpro:alac:r116-3",
		"title": "Petition for review — 60 days",
		"topic": "Rule 116 — Arraignment and Plea",
		"factPattern": "R files a petition for review with the DOJ on January 10 and moves to suspend arraignment. The court suspends. On March 15 the petition is still unresolved, and the court sets arraignment.",
		"question": "May the court proceed?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "Rule 116, Sec. 11(c): suspension \"shall not exceed sixty (60) days counted from the filing of the petition with the reviewing office.\"",
			"application": "Sixty days from January 10 ended in mid-March (March 11, counting from January 10). By March 15 the period has lapsed.",
			"conclusion": "The court may arraign R; the DOJ may still resolve the petition, but the court is not bound by it (Crespo)."
		}
	},
	{
		"id": "crimpro:alac:r116-4",
		"title": "Guilty plea to qualified rape — perfunctory inquiry",
		"topic": "Rule 116 — Arraignment and Plea",
		"factPattern": "B pleads guilty to qualified rape (reclusion perpetua). The judge asks, \"Do you understand the charge?\" B says yes. Without further inquiry or prosecution evidence, the judge convicts. On appeal, B argues his plea was improvident.",
		"question": "What should the appellate court do? Would your answer change if the prosecution had presented the victim and the medico-legal officer?",
		"modelAnswer": {
			"answer": "On the facts given, set aside the conviction and remand. If independent evidence had been presented and supports guilt, the conviction may be affirmed.",
			"legalBasis": "Rule 116, Sec. 3 (searching inquiry; proof of guilt and degree of culpability); People v. Pastor (guidelines); People v. Documento (2010) and People v. Gambao (2013): convictions based on an improvident plea are set aside only if the plea is the sole basis.",
			"application": "A one-question inquiry falls short of Pastor; no evidence was received, so the plea is the sole basis.",
			"conclusion": "Remand for a proper arraignment and trial; in the alternative facts, affirm if the evidence proves guilt beyond reasonable doubt."
		}
	},
	{
		"id": "crimpro:alac:r116-5",
		"title": "Prosecutor objects to a drug plea bargain",
		"topic": "Rule 116 — Arraignment and Plea",
		"factPattern": "C, charged with illegal sale of 0.05 gram of shabu, offers to plead guilty to possession of drug paraphernalia, consistent with the Supreme Court's framework. The prosecutor objects solely because a DOJ circular disallows plea bargaining for sale. C has no prior convictions and the evidence consists of a buy-bust with documented chain of custody.",
		"question": "May the court approve the plea bargain?",
		"modelAnswer": {
			"answer": "It may, unless the objection is valid and supported by evidence — and here the court must first determine whether evidence of guilt is strong.",
			"legalBasis": "Estipona v. Lobrigo (2017): plea bargaining is procedural; RA 9165, Sec. 23 is void. People v. Montierro (2022): courts may overrule an objection based solely on DOJ guidelines inconsistent with the Court's framework, but shall not allow plea bargaining when the objection is valid and supported by evidence, such as strong evidence of guilt or recidivism.",
			"application": "The stated objection (DOJ circular) alone is insufficient. But the buy-bust evidence with a documented chain of custody may show strong evidence of guilt — a valid ground if the prosecution raises and supports it.",
			"conclusion": "The court should hear the parties on the strength of the evidence and C's record; if evidence of guilt is not strong and C is not a recidivist, it may approve the plea over the objection."
		}
	},
	{
		"id": "crimpro:alac:r116-6",
		"title": "Arraigned only after submission for decision",
		"topic": "Rule 116 — Arraignment and Plea",
		"factPattern": "D is arrested and his counsel participates in a bail hearing and the full trial, cross-examining prosecution witnesses. The court notices, after the case is submitted for decision, that D was never arraigned; it arraigns him (he pleads not guilty) and then convicts. D appeals, arguing the proceedings are void.",
		"question": "Will the appeal prosper?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "People v. Pangilinan, G.R. No. 171020, March 14, 2007: jurisdiction over the person is acquired by arrest; a belated arraignment is cured where counsel actively participated without objection and the accused was not prejudiced.",
			"application": "D's counsel cross-examined witnesses — showing awareness of the charge — and raised no objection until after conviction.",
			"conclusion": "The defect was cured; the appeal fails on this ground."
		}
	},
	{
		"id": "crimpro:alac:r116-7",
		"title": "Rule 116 integrated",
		"topic": "Rule 116 — Arraignment and Plea",
		"factPattern": "E, detained, is charged with murder. The information is raffled on day 5 after filing. On day 20 after the raffle, E is brought for arraignment without counsel; the judge appoints the PAO lawyer in the courtroom and proceeds immediately. E says, \"Guilty, but it was an accident.\" The judge records a plea of guilty and, after asking E if he understands, sets the case for promulgation. Before arraignment, E had filed a petition for review with the DOJ but did not move to suspend.",
		"question": "Identify the errors and their effects.",
		"modelAnswer": {
			"answer": "Five errors; the plea of guilty is void and a plea of not guilty must be entered.",
			"legalBasis": "Sec. 1(e) (raffle within 3 days; arraign within 10 days from raffle); Secs. 6–8 (counsel and reasonable time to consult); Sec. 1(d) (guilty plea with exculpatory claim — not guilty); Sec. 3 (searching inquiry and evidence); Sec. 11(c) (suspension only on motion).",
			"application": "(1) Raffle on day 5 and arraignment 20 days later exceed the periods — a speedy-trial issue. (2) Counsel de oficio was not given reasonable time to consult. (3) \"It was an accident\" is exculpatory; the plea is deemed withdrawn. (4) For murder, the searching inquiry and prosecution evidence were mandatory. (5) The court was not obliged to suspend because E did not move; once arraigned, the DOJ must dismiss petitions filed after arraignment — but E filed before, so the DOJ may still act (DC 70, Sec. 7).",
			"conclusion": "Set aside the plea; enter not guilty; give counsel time; proceed to pre-trial and trial."
		}
	},
	{
		"id": "crimpro:alac:r117-1",
		"title": "Missing element — quash or amend?",
		"topic": "Rule 117 — Motion to Quash",
		"factPattern": "An information for estafa by misappropriation alleges that the accused received ₱500,000 from the complainant and failed to return it upon demand, but does not allege that he received it in trust, on commission, or under an obligation to return. The accused moves to quash for failure to charge an offense. The court immediately dismisses the case.",
		"question": "Was the court correct?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 117, Sec. 4: if the motion is based on the ground that the facts charged do not constitute an offense, the prosecution \"shall be given by the court an opportunity to correct the defect by amendment\"; the motion shall be granted only if the prosecution fails to amend or the amended information still suffers from the defect.",
			"application": "The missing element (receipt in trust or under obligation to return) can be supplied by amendment before plea.",
			"conclusion": "The court should have ordered amendment; the dismissal was premature."
		}
	},
	{
		"id": "crimpro:alac:r117-2",
		"title": "Venue raised after conviction",
		"topic": "Rule 117 — Motion to Quash",
		"factPattern": "B is convicted of estafa by the RTC of Pasig. On appeal, he argues for the first time that all elements occurred in Manila, as the prosecution's own evidence shows.",
		"question": "May B still raise improper venue?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "Venue in criminal cases is jurisdictional (Isip v. People). Lack of jurisdiction over the offense (Sec. 3[b]) is not waived (Sec. 9) and may be raised at any stage.",
			"application": "If the evidence shows no element occurred in Pasig, the Pasig RTC had no jurisdiction over the offense.",
			"conclusion": "The conviction must be set aside for lack of jurisdiction; the case may be filed in Manila subject to prescription."
		}
	},
	{
		"id": "crimpro:alac:r117-3",
		"title": "Revived after 14 months",
		"topic": "Rule 117 — Motion to Quash",
		"factPattern": "A case for theft (prision correccional — not exceeding 6 years) is provisionally dismissed on January 15, 2025, on the prosecution's motion bearing the accused's handwritten \"No objection,\" with notice to the complainant. The prosecution revives it on March 20, 2026.",
		"question": "May the case be revived?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 117, Sec. 8: for offenses punishable by imprisonment not exceeding six years, a provisional dismissal becomes permanent one year after issuance of the order; A.M. No. 12-11-2-SC, Sec. 14 (reckoned from issuance; automatically permanent).",
			"application": "The Lacson requisites appear present (motion, express written consent, notice). One year from January 15, 2025 ended on January 15, 2026. Revival on March 20, 2026 is late.",
			"conclusion": "The dismissal became permanent; the revived case should be dismissed."
		}
	},
	{
		"id": "crimpro:alac:r117-4",
		"title": "Victim dies after the plea",
		"topic": "Rule 117 — Motion to Quash",
		"factPattern": "C is charged with frustrated homicide and, with the consent of the prosecutor and the victim, pleads guilty to serious physical injuries and is sentenced. Three weeks after the judgment, the victim dies from complications of the same wounds. The prosecutor files homicide. C moves to quash for double jeopardy.",
		"question": "Rule on the motion.",
		"modelAnswer": {
			"answer": "Deny the motion.",
			"legalBasis": "Rule 117, Sec. 7, par. 2(a): a conviction is not a bar to prosecution for an offense which necessarily includes the offense charged when \"the graver offense developed due to supervening facts arising from the same act or omission constituting the former charge\"; the accused is credited with the sentence served.",
			"application": "The death occurred after the plea and is a supervening fact arising from the same act.",
			"conclusion": "C may be tried for homicide, with credit for time served."
		}
	},
	{
		"id": "crimpro:alac:r117-5",
		"title": "BP 22 and estafa from one check",
		"topic": "Rule 117 — Motion to Quash",
		"factPattern": "D issues a postdated check to buy goods; it bounces. He is acquitted in the BP 22 case because notice of dishonor was not proved. The complainant then files estafa (Art. 315[2][d]) based on the same check. D moves to quash for double jeopardy.",
		"question": "Rule on the motion.",
		"modelAnswer": {
			"answer": "Deny the motion.",
			"legalBasis": "Const., Art. III, Sec. 21 and Rule 117, Sec. 7 protect against prosecution for the same offense, or one that includes or is included in it. Where one act constitutes two distinct offenses under different laws with different elements, prosecution under one is not a bar to the other (People v. Cabrera; Nierras v. Dacuycuy — in Tiu).",
			"application": "BP 22 (malum prohibitum; knowledge of insufficiency; notice of dishonor) and estafa (deceit and damage) have different elements; neither is included in the other.",
			"conclusion": "The estafa case proceeds."
		}
	},
	{
		"id": "crimpro:alac:r117-6",
		"title": "Dismissal for lack of jurisdiction later \"revived\"",
		"topic": "Rule 117 — Motion to Quash",
		"factPattern": "On the accused's motion, the MTC dismisses an information for frustrated homicide for lack of jurisdiction (RTC offense). Three years later, the prosecutor files the information in the RTC. The accused invokes the two-year time-bar of Sec. 8.",
		"question": "Rule on the objection.",
		"modelAnswer": {
			"answer": "Overrule the objection (subject to prescription).",
			"legalBasis": "Los Baños v. Pedro (2009): where the dismissal rests on a ground in Sec. 3, the remedy is a motion to quash, and the Sec. 8 time-bar does not apply. Sec. 6: quashal is not a bar to another prosecution except on grounds (g) and (i).",
			"application": "The dismissal was for lack of jurisdiction over the offense — ground (b). Sec. 8 does not apply; Sec. 6 allows refiling.",
			"conclusion": "The RTC case may proceed if the offense has not prescribed (the MTC filing interrupted prescription — Olarte)."
		}
	},
	{
		"id": "crimpro:alac:r117-7",
		"title": "Rule 117 integrated",
		"topic": "Rule 117 — Motion to Quash",
		"factPattern": "An information for murder, signed by an assistant prosecutor without the city prosecutor's approval, alleges that E killed V \"with treachery\" and that the killing occurred \"in Quezon City,\" but the evidence later shows it happened in Pasig. It also charges E with illegal possession of the firearm used. E files a motion to quash, citing only duplicity, before arraignment; it is denied. He pleads not guilty. After the prosecution rests, he argues: (1) lack of authority of the filing officer; (2) improper venue; (3) the treachery allegation is insufficient; (4) duplicity.",
		"question": "Rule on each argument.",
		"modelAnswer": {
			"answer": "(1) Waived. (2) Not waived — may be raised. (3) Waived. (4) Already resolved (denied); duplicity, if any, allows conviction for each offense charged and proved.",
			"legalBasis": "Rule 117, Secs. 2, 3, 9; Villa Gomez v. People (2020) (lack of authority waivable); venue jurisdictional (Sec. 3[b]; non-waivable); People v. Solar (2019) (bare label waived if not raised before arraignment by MTQ or bill of particulars); Rule 120, Sec. 3 (conviction for several offenses charged and proved). Note: since RA 10591, use of an unlicensed firearm in murder is treated as an aggravating circumstance rather than a separate offense — verify before relying on the duplicity point.",
			"application": "(1) and (3) were not raised before plea; both are waivable. (2) Venue goes to jurisdiction over the offense: if the evidence shows the killing occurred in Pasig, the Quezon City court lacks jurisdiction. (4) Duplicity was raised and denied; E may raise it on appeal as error, but the defect, if any, is not jurisdictional.",
			"conclusion": "The case turns on venue: if no element occurred in Quezon City, the court must dismiss for lack of jurisdiction (refiling in Pasig allowed, subject to prescription)."
		}
	},
	{
		"id": "crimpro:alac:r118-1",
		"title": "Counsel's stipulation, accused's silence",
		"topic": "Rule 118 — Pre-Trial",
		"factPattern": "At pre-trial in a homicide case, defense counsel stipulates that the accused was at the victim's house at the time of the killing. The minutes are signed by the prosecutor and defense counsel, but not by the accused. At trial, the prosecution offers no evidence of presence, relying on the stipulation.",
		"question": "Can the stipulation be used against the accused?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 118, Sec. 2: agreements or admissions at pre-trial \"shall be reduced in writing and signed by the accused and counsel, otherwise, they cannot be used against the accused.\"",
			"application": "Only counsel signed. The admission cannot be used against the accused; the prosecution must prove his presence by evidence.",
			"conclusion": "The prosecution's failure to prove presence may result in acquittal if presence is essential."
		}
	},
	{
		"id": "crimpro:alac:r118-2",
		"title": "Absent accused and absent complainant",
		"topic": "Rule 118 — Pre-Trial",
		"factPattern": "On the pre-trial date, the accused (on bail) and the private complainant are absent; both counsel and the prosecutor are present. The accused had notice.",
		"question": "May the court proceed? What may it do about the accused?",
		"modelAnswer": {
			"answer": "The court may proceed with pre-trial through counsel; it may order the forfeiture of the accused's bail and his arrest.",
			"legalBasis": "Rule 118, Sec. 3 (sanctions on counsel or prosecutor only); People v. Sunga (2003, in Tiu): the offended party is only a witness once the information is filed; the accused's absence despite notice may lead to forfeiture of bail and arrest (Rule 114, Secs. 2 and 21).",
			"application": "Counsel and prosecutor are present, so pre-trial can proceed. But admissions binding the accused require his signature (Sec. 2), so the court should limit what is stipulated.",
			"conclusion": "Proceed (or reset if admissions requiring the accused's signature are needed); forfeit bail and issue a warrant for the accused."
		}
	},
	{
		"id": "crimpro:alac:r118-3",
		"title": "Admits the stabbing, claims self-defense",
		"topic": "Rule 118 — Pre-Trial",
		"factPattern": "At pre-trial, the accused, through a written stipulation signed by him and counsel, admits that he stabbed the victim but claims self-defense. The prosecution insists on presenting its evidence first, as usual.",
		"question": "May the court reverse the order of trial? Who bears the burden of proof?",
		"modelAnswer": {
			"answer": "Yes; the accused must prove self-defense by clear and convincing evidence.",
			"legalBasis": "Rule 118, Sec. 1(e) and Rule 119, Sec. 11(e): when the accused admits the act or omission charged but interposes a lawful defense, the order of trial may be modified. RA 8493, Sec. 7: an affirmative defense may modify the order of trial and requires the accused to prove it by clear and convincing evidence.",
			"application": "The written, signed stipulation is a judicial admission of the stabbing. With self-defense, the burden of evidence shifts; it is logical for the defense to present first.",
			"conclusion": "The court may order a reverse trial; if self-defense is not proved, the admission supports conviction."
		}
	},
	{
		"id": "crimpro:alac:r118-4",
		"title": "Unmarked exhibit, unlisted witness",
		"topic": "Rule 118 — Pre-Trial",
		"factPattern": "The pre-trial order lists four prosecution witnesses and marked exhibits A to F. At trial, the prosecution calls a fifth witness (a neighbor who just came forward) and offers an unmarked CCTV recording. The defense objects.",
		"question": "Rule on the objections.",
		"modelAnswer": {
			"answer": "Sustain the objections unless the prosecution shows good cause; the court may allow them to prevent manifest injustice.",
			"legalBasis": "Rule 118, Sec. 4 (the pre-trial order binds the parties, limits the trial and controls its course, unless modified to prevent manifest injustice); A.M. No. 03-1-09-SC (no evidence other than those identified and marked at pre-trial except for good cause).",
			"application": "The witness only recently came forward — possible good cause. The CCTV recording, if available earlier, lacks good cause. The defense should be given time to prepare if anything new is admitted.",
			"conclusion": "Admit the new witness if good cause is shown and the defense is not prejudiced; exclude the CCTV recording absent good cause."
		}
	},
	{
		"id": "crimpro:alac:r118-5",
		"title": "Rule 118 integrated",
		"topic": "Rule 118 — Pre-Trial",
		"factPattern": "In an estafa case under Art. 315(1), the accused is arraigned on March 1 and pre-trial is set on May 15. At pre-trial, the accused and complainant settle the civil liability in the courtroom. The prosecutor manifests that the complainant will execute an affidavit of desistance and moves to dismiss. Defense counsel orally stipulates that the accused received the money. The court dismisses the case \"in view of the compromise.\"",
		"question": "Identify the errors.",
		"modelAnswer": {
			"answer": "Four errors.",
			"legalBasis": "Rule 118, Sec. 1 (pre-trial within 30 days from acquisition of jurisdiction); 2017 Guidelines, III.8–9 (arraignment and pre-trial set together; estafa under 315[1] referred to mediation on civil liability after pre-trial, 30 days); Civil Code Art. 2034 (compromise does not extinguish the criminal action); Rule 118, Sec. 2 (admissions must be written and signed by accused and counsel).",
			"application": "(1) Pre-trial on May 15 exceeds the period from arraignment. (2) The civil settlement is valid as to civil liability but should go through mediation and approval. (3) The compromise cannot be the basis of dismissal of the criminal case. (4) Counsel's oral stipulation cannot be used against the accused. If the prosecution moves to dismiss for insufficiency of evidence (complainant's desistance), the court must assess it independently (Crespo); a dismissal on the prosecution's motion with the accused's consent after arraignment generally does not bar refiling.",
			"conclusion": "The dismissal \"in view of the compromise\" is erroneous; the court should rule on the evidence, not on the compromise."
		}
	},
	{
		"id": "crimpro:alac:r119-1",
		"title": "Discharge after the prosecution rests",
		"topic": "Rule 119 — Trial",
		"factPattern": "After the prosecution formally offers its evidence and rests, it moves to discharge co-accused B to testify against A, explaining that B only now agreed to cooperate.",
		"question": "Should the motion be granted?",
		"modelAnswer": {
			"answer": "No, as filed — the motion is late.",
			"legalBasis": "Rule 119, Sec. 17: discharge is \"upon motion of the prosecution before resting its case.\"",
			"application": "The prosecution already rested. It may move to reopen (Sec. 24) to present new evidence if a miscarriage of justice would otherwise result, but discharge under Sec. 17 is time-barred.",
			"conclusion": "Deny the motion; consider reopening only if its requisites are met."
		}
	},
	{
		"id": "crimpro:alac:r119-2",
		"title": "Demurrer without leave, denied",
		"topic": "Rule 119 — Trial",
		"factPattern": "After the prosecution rests in a malversation case, C files a demurrer without asking for leave. The court denies it. C then asks to present his witnesses.",
		"question": "Should he be allowed?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 119, Sec. 23: \"When the demurrer to evidence is filed without leave of court, the accused waives the right to present evidence and submits the case for judgment on the basis of the evidence for the prosecution.\"",
			"application": "C filed without leave; the denial triggers the waiver.",
			"conclusion": "The court renders judgment on the prosecution's evidence."
		}
	},
	{
		"id": "crimpro:alac:r119-3",
		"title": "Trial started late",
		"topic": "Rule 119 — Trial",
		"factPattern": "D receives the pre-trial order on February 1. No trial date is held until May 15. In between, a 20-day period was spent resolving D's motion to inhibit the judge. On May 10, D moves to dismiss for denial of speedy trial.",
		"question": "Rule on the motion.",
		"modelAnswer": {
			"answer": "Grant the motion (unless other exclusions are shown).",
			"legalBasis": "Rule 119, Sec. 1 (trial within 30 days from receipt of the pre-trial order); Sec. 3(a)(5) (delay from orders of inhibition excluded); Sec. 9 (accused proves; prosecution goes forward with exclusions; dismissal subject to double jeopardy; motion before trial).",
			"application": "From February 1 to May 10 is about 98 days; excluding 20 days for the inhibition, about 78 days ran — far beyond 30. D moved before trial.",
			"conclusion": "Dismiss; the dismissal bars reprosecution."
		}
	},
	{
		"id": "crimpro:alac:r119-4",
		"title": "The hearsay state witness",
		"topic": "Rule 119 — Trial",
		"factPattern": "E, discharged as state witness, testifies that the mastermind F told him after the killing that F had ordered it. No other evidence links F to the crime. F is convicted.",
		"question": "Should the conviction be affirmed?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 119, Sec. 17(c) (substantial corroboration); People v. Anabe (2010): the testimony of a state witness who is not an eyewitness is circumstantial and must be corroborated; only an eyewitness's sincere, detailed testimony may stand alone.",
			"application": "E did not witness the killing; his testimony is of F's admission — not direct evidence of the killing — and is uncorroborated.",
			"conclusion": "Reverse and acquit F for insufficiency of evidence."
		}
	},
	{
		"id": "crimpro:alac:r119-5",
		"title": "Acquitted on demurrer, ordered to pay",
		"topic": "Rule 119 — Trial",
		"factPattern": "G, charged with estafa, files a demurrer with leave after the prosecution rests. The court grants it, acquitting G for failure to prove deceit, but in the same order directs G to pay the complainant ₱400,000 as civil liability.",
		"question": "(a) May the prosecution appeal the acquittal? (b) Is the civil award valid?",
		"modelAnswer": {
			"answer": "(a) No. (b) No — not without letting G present evidence on the civil aspect.",
			"legalBasis": "(a) A granted demurrer is an acquittal; double jeopardy bars appeal; only certiorari for grave abuse (Dayap v. Sendiong). (b) Salazar v. People (2003): the court should acquit and set the case for continuation of trial on the civil aspect.",
			"application": "(a) Nothing suggests grave abuse. (b) G has not presented any evidence; the award on the prosecution's evidence alone denies due process. Because the acquittal is on reasonable doubt (deceit not proved), civil liability may still be proved (Art. 29).",
			"conclusion": "(a) The acquittal stands. (b) Set aside the civil award; continue trial on the civil aspect."
		}
	},
	{
		"id": "crimpro:alac:r119-6",
		"title": "Wrong offense discovered mid-trial",
		"topic": "Rule 119 — Trial",
		"factPattern": "H is tried for robbery. Mid-trial, evidence shows there was no violence or intimidation; H, a houseguest, took the jewelry while the owners slept (theft, not robbery). Later evidence also shows H was a domestic helper (qualified theft).",
		"question": "What should the court do?",
		"modelAnswer": {
			"answer": "Sec. 19 does not apply as to theft; the court may convict of theft as an offense necessarily included in robbery, but not of qualified theft unless properly charged.",
			"legalBasis": "Rule 119, Sec. 19 applies only when the accused \"cannot be convicted of the offense charged or any other offense necessarily included therein.\" Rule 120, Secs. 4–5 (variance: conviction for an offense necessarily included). Qualifying circumstances must be alleged (Rule 110, Secs. 8–9).",
			"application": "Theft (taking with intent to gain without consent) is necessarily included in robbery as alleged; H can be convicted of theft. Qualified theft requires the qualifying relationship to be alleged; it was not, so it cannot be appreciated without a new information — and Sec. 19 is not the route because theft is included.",
			"conclusion": "Convict of simple theft; no substitution needed."
		}
	},
	{
		"id": "crimpro:alac:r119-7",
		"title": "Rule 119 integrated",
		"topic": "Rule 119 — Trial",
		"factPattern": "In a kidnapping case against I, J and K, trial starts on March 1. On April 10, the prosecution's witness L, a nurse about to leave for Canada indefinitely, is examined before the clerk of court because the judge is on leave; the defense is notified but objects. On May 20, the prosecution moves to discharge K (the driver, never convicted, who did not touch the victim) as state witness; the court grants it after a hearing. The prosecution rests on June 30. On July 3, I files a demurrer without leave; it is denied on August 1. I asks to present evidence; denied. Judgment of conviction follows.",
		"question": "Identify the issues and resolve each.",
		"modelAnswer": {
			"answer": "L's testimony is inadmissible; K's discharge is valid if the other requisites were met; I lost the right to present evidence.",
			"legalBasis": "Rule 119, Sec. 15 and Manguerra (prosecution witness examined only before the court where the case is pending); Sec. 17 (discharge before the prosecution rests, five conditions, hearing); Sec. 23 (demurrer without leave — waiver of evidence if denied).",
			"application": "The examination before the clerk of court violates Sec. 15; L's testimony must be excluded. K's discharge came before the prosecution rested, after a hearing, and he does not appear the most guilty; validity depends on absolute necessity, no other direct evidence and corroboration. I filed without leave; denial waived his evidence.",
			"conclusion": "The conviction stands only if the remaining admissible evidence (including K's corroborated testimony) proves guilt beyond reasonable doubt."
		}
	},
	{
		"id": "crimpro:alac:r120-1",
		"title": "Murder charged, homicide proved — and vice versa",
		"topic": "Rule 120 — Judgment",
		"factPattern": "Case 1: A is charged with murder qualified by treachery, but treachery is not proved. Case 2: B is charged with homicide; at trial, treachery is clearly proved, but the information never alleged it.",
		"question": "Of what offense may each be convicted?",
		"modelAnswer": {
			"answer": "A: homicide. B: homicide.",
			"legalBasis": "Rule 120, Secs. 4–5: when the offense charged includes the offense proved, conviction is for the offense proved; when the offense charged is included in the offense proved, conviction is for the offense charged. Rule 110, Secs. 8–9: qualifying circumstances must be alleged.",
			"application": "Murder includes homicide; homicide is included in murder. In both, the lesser offense controls; B cannot be convicted of murder because treachery was not alleged.",
			"conclusion": "Both are convicted of homicide."
		}
	},
	{
		"id": "crimpro:alac:r120-2",
		"title": "Absent at promulgation — hospital",
		"topic": "Rule 120 — Judgment",
		"factPattern": "C is notified of promulgation for March 10. He is absent; the conviction is recorded in the docket. On March 20, he surrenders and moves for leave, attaching a hospital certificate showing emergency surgery on March 9.",
		"question": "Should leave be granted?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "Rule 120, Sec. 6: within 15 days from promulgation the accused may surrender and file a motion for leave; if he proves justifiable cause, he may avail of the remedies within 15 days from notice.",
			"application": "He surrendered and moved within 10 days, with proof of a justifiable cause.",
			"conclusion": "Grant leave; C may file an MR, motion for new trial, or appeal within 15 days from notice of the order."
		}
	},
	{
		"id": "crimpro:alac:r120-3",
		"title": "Silent acquittal and the civil claim",
		"topic": "Rule 120 — Judgment",
		"factPattern": "The court acquits D of estafa in a decision stating only: \"The accused is ACQUITTED.\" The complainant files a separate civil action for the ₱1 million she gave D; D moves to dismiss it, arguing the acquittal extinguished civil liability.",
		"question": "Rule on the motion to dismiss. What was wrong with the judgment?",
		"modelAnswer": {
			"answer": "Deny the motion to dismiss; the judgment of acquittal was deficient.",
			"legalBasis": "Rule 120, Sec. 2 (acquittal must state the ground and whether the act from which civil liability might arise did not exist); Rule 111, Sec. 2 (civil liability ex delicto extinguished only by a finding that the act did not exist); Civil Code Art. 29 (acquittal on reasonable doubt; ground may be inferred from the decision).",
			"application": "The decision contains no finding that the act did not exist; civil liability ex delicto is not extinguished by a bare acquittal. Besides, the complainant may sue on the contract (another source).",
			"conclusion": "The civil action proceeds; the acquittal should have stated its ground and the existence of the act."
		}
	},
	{
		"id": "crimpro:alac:r120-4",
		"title": "Promulgation by the executive judge of the place of detention",
		"topic": "Rule 120 — Judgment",
		"factPattern": "E, charged with murder, is detained in Davao on another case; the trial court is in Cebu. The Cebu court convicts him of homicide and requests the Davao RTC executive judge to promulgate. After promulgation, E files with the Davao court a notice of appeal and an application for bail pending appeal.",
		"question": "May the Davao court act on both?",
		"modelAnswer": {
			"answer": "It may accept the notice of appeal, but not the bail application.",
			"legalBasis": "Rule 120, Sec. 6, par. 2: the executive judge of the place of confinement may promulgate and \"shall have authority to accept the notice of appeal and to approve the bail bond pending appeal; provided, that if the decision … changed the nature of the offense from non-bailable to bailable, the application for bail can only be filed and resolved by the appellate court.\"",
			"application": "Murder (non-bailable when evidence is strong) became homicide (bailable). Bail pending appeal is for the appellate court.",
			"conclusion": "Accept the notice of appeal; refer the bail application to the CA."
		}
	},
	{
		"id": "crimpro:alac:r120-5",
		"title": "Rule 120 integrated",
		"topic": "Rule 120 — Judgment",
		"factPattern": "F is tried on an information charging, in one count, estafa and falsification arising from separate acts. He never objects. The judge, who took over after all witnesses testified, convicts F of both, with a single penalty and a single paragraph of findings. Notice of promulgation is mailed to F, who appears; the judgment is read. Twelve days later, F applies for probation; on day 14, he files a notice of appeal.",
		"question": "Identify the issues and resolve each.",
		"modelAnswer": {
			"answer": "The conviction for both offenses is allowed, but separate penalties and findings are required; the new judge may decide; the promulgation is valid; the application for probation waived the appeal.",
			"legalBasis": "Rule 120, Sec. 3 (convict of as many offenses as charged and proved, with the penalty for each and separate findings); People v. Alfredo (judge who did not hear witnesses may decide on the record); Sec. 6 (promulgation in the accused's presence after notice); Sec. 7 and Almero (probation application makes the judgment final and waives appeal).",
			"application": "F waived duplicity, so conviction for both is allowed — but a single penalty and combined findings violate Sec. 3. The successor judge may decide on the record. F was notified and present. By applying for probation on day 12, F waived his right to appeal; the day-14 notice of appeal is ineffective.",
			"conclusion": "The judgment should be corrected to impose separate penalties with separate findings (on F's motion, before finality); otherwise, the probation application controls."
		}
	},
	{
		"id": "crimpro:alac:r121-1",
		"title": "The witness who came home",
		"topic": "Rule 121 — New Trial or Reconsideration",
		"factPattern": "B is convicted of homicide on July 1 on the testimony of a lone eyewitness. On July 10, B files a motion for new trial alleging that C, an OFW who was abroad during the whole trial and whom nobody knew had seen the incident, has returned and will testify that the eyewitness was elsewhere. B attaches C's sworn affidavit and his passport stamps. The prosecutor opposes, saying B should have looked harder.",
		"question": "Should the motion be granted? If granted, what happens to the eyewitness's testimony?",
		"modelAnswer": {
			"answer": "Yes, the motion should be granted; the eyewitness's testimony stays on the record and is weighed with C's.",
			"legalBasis": "Rule 121, Sec. 2(b) (new and material evidence not discoverable with reasonable diligence that would probably change the judgment); Sec. 4 (supporting affidavits); Sec. 6(b) (evidence already adduced stands).",
			"application": "C was abroad and unknown as a witness — diligence could not have found him. His testimony goes to the core issue (whether the lone eyewitness saw anything), so it is material and would probably change the verdict. The motion was filed within the 15-day period and supported by an affidavit.",
			"conclusion": "Grant the new trial. The prior evidence stands; C's testimony is taken and considered with it, and a new judgment is rendered."
		}
	},
	{
		"id": "crimpro:alac:r121-2",
		"title": "Counting after denial",
		"topic": "Rule 121 — New Trial or Reconsideration",
		"factPattern": "D is convicted at promulgation on March 3. He files an MR on March 15. It is denied by an order he receives on April 2. He files a notice of appeal on April 14.",
		"question": "Is the appeal timely?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "Rule 122, Sec. 6 (appeal within 15 days from promulgation; suspended by a motion for new trial or reconsideration); the fresh-period rule of Neypes, applied to criminal cases in Yu v. Samson-Tatad (2011).",
			"application": "The MR was timely (day 12). After denial, D had a fresh 15 days from April 2 — until April 17. The April 14 notice is within that period.",
			"conclusion": "The appeal is timely and should be given due course."
		}
	},
	{
		"id": "crimpro:alac:r121-3",
		"title": "The judge who changed his mind",
		"topic": "Rule 121 — New Trial or Reconsideration",
		"factPattern": "E is convicted of reckless imprudence resulting in homicide and sentenced to a probationable penalty. He plans to apply for probation. Five days after promulgation, the judge, believing the evidence showed murder, issues an order on his own motion granting a \"new trial\" to receive evidence of treachery. E objects.",
		"question": "Was the order proper?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 121, Sec. 1 (the court may grant a new trial \"at its own instance but with the consent of the accused\"); Const., Art. III, Sec. 21 (double jeopardy); Rule 120, Sec. 7 (modification only on motion of the accused).",
			"application": "E did not consent and objected. The order seeks to expose him to a graver conviction — exactly what the consent requirement and double jeopardy prevent. An information for reckless imprudence also could not support a conviction for murder.",
			"conclusion": "The order is void for lack of the accused's consent; the original judgment stands and E may apply for probation."
		}
	},
	{
		"id": "crimpro:alac:r121-4",
		"title": "Rule 121 integrated",
		"topic": "Rule 121 — New Trial or Reconsideration",
		"factPattern": "F is convicted of estafa. On day 8 he orally asks the judge at the hearing for a new trial because \"a new witness will clear me\"; the judge says to put it in writing. On day 14 F files a written motion stating that a bank record proves he returned the money before the demand; he attaches a photocopy of the record, uncertified. The prosecutor is not furnished a copy. The judge denies the motion on day 30; F receives the order on day 33 and files a notice of appeal on day 45.",
		"question": "Identify and resolve the issues.",
		"modelAnswer": {
			"answer": "The motion was defective in form, but because it was timely filed in writing it stopped the appeal period, and the appeal on day 45 is timely.",
			"legalBasis": "Rule 121, Sec. 4 (written; grounds; affidavits or duly authenticated copies of documents; notice to the prosecutor); Rule 122, Sec. 6 and the fresh-period rule (Yu v. Samson-Tatad).",
			"application": "The oral request on day 8 was not a motion. The written motion on day 14 stated a ground but attached an unauthenticated photocopy and was not served on the prosecutor — enough to deny it. But a timely written motion for new trial still interrupts the period; F had a fresh 15 days from day 33, i.e., until day 48.",
			"conclusion": "Denial was proper; the day-45 notice of appeal is timely."
		}
	},
	{
		"id": "crimpro:alac:r122-1",
		"title": "MTC → RTC → ?",
		"topic": "Rule 122 — Appeal",
		"factPattern": "A is convicted by the MTC of reckless imprudence resulting in damage to property. The RTC affirms on appeal. A receives the RTC decision on August 1 and on August 10 files a notice of appeal with the RTC.",
		"question": "Was A's appeal properly taken?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 122, Sec. 3(b): appeal to the CA in cases decided by the RTC in its appellate jurisdiction is by petition for review under Rule 42, filed with the CA within 15 days. The wrong mode does not toll the period.",
			"application": "The RTC decided as an appellate court. A should have filed a verified Rule 42 petition with the CA and paid docket fees by August 16 (or moved for a 15-day extension). A notice of appeal with the RTC is the wrong mode.",
			"conclusion": "The appeal should be dismissed; unless A files a proper petition by August 16, the RTC decision becomes final."
		}
	},
	{
		"id": "crimpro:alac:r122-2",
		"title": "The co-accused who did not appeal",
		"topic": "Rule 122 — Appeal",
		"factPattern": "B and C are convicted as co-principals of robbery with homicide. Only B appeals. The CA finds that the killing was not proved to have been committed by reason or on the occasion of the robbery and convicts B of robbery only.",
		"question": "Does the CA ruling benefit C?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "Rule 122, Sec. 11(a): an appeal by one accused does not affect those who did not appeal, \"except insofar as the judgment of the appellate court is favorable and applicable to the latter.\"",
			"application": "The finding goes to the nature of the crime itself, common to both co-principals. It is favorable (a lighter offense) and applicable (the same facts underlie C's conviction).",
			"conclusion": "C's conviction should likewise be reduced to robbery."
		}
	},
	{
		"id": "crimpro:alac:r122-3",
		"title": "Appeal from a partial acquittal",
		"topic": "Rule 122 — Appeal",
		"factPattern": "D is charged with murder. The RTC convicts him of homicide, finding treachery unproved. D appeals, arguing self-defense. The OSG, in its brief, argues that treachery was proved and asks the CA to convict of murder.",
		"question": "May the CA convict D of murder?",
		"modelAnswer": {
			"answer": "Yes, if treachery was properly alleged and proved.",
			"legalBasis": "Rule 122, Sec. 1; Rule 124, Sec. 11 (the CA may \"increase or reduce the penalty\"); Trono v. US (1905); Bu Lin v. CA (1982): by appealing, the accused waives double jeopardy and throws the whole case open for review.",
			"application": "The homicide conviction was an implied acquittal of murder, but D himself put the whole judgment in issue. The CA may correct errors not assigned, including the finding on treachery. Had D not appealed, the People could not have appealed to raise treachery.",
			"conclusion": "The CA may convict of murder and impose the corresponding penalty."
		}
	},
	{
		"id": "crimpro:alac:r122-4",
		"title": "The sham trial",
		"topic": "Rule 122 — Appeal",
		"factPattern": "In an estafa case, the judge, over the prosecutor's objection, cancels all remaining prosecution dates after the first witness, declares the prosecution's evidence closed, and acquits the accused the same day. The People file a notice of appeal; alternatively, they consider certiorari.",
		"question": "What is the People's proper remedy, and will it prosper?",
		"modelAnswer": {
			"answer": "Not appeal; Rule 65 certiorari, which should prosper.",
			"legalBasis": "Rule 122, Sec. 1 (no appeal where the accused would be placed in double jeopardy); Villareal v. Aliga (2014) and Ysidoro (2012): an acquittal may be assailed by Rule 65 certiorari where the prosecution was denied due process or the court acted with grave abuse amounting to lack of jurisdiction.",
			"application": "An appeal from the acquittal is barred. But the prosecution was denied any real chance to present its case — a denial of due process that makes the acquittal void, so double jeopardy does not attach.",
			"conclusion": "The notice of appeal should be dismissed; a Rule 65 petition within 60 days should be granted and the case remanded for continuation of trial."
		}
	},
	{
		"id": "crimpro:alac:r122-5",
		"title": "Rule 122 integrated",
		"topic": "Rule 122 — Appeal",
		"factPattern": "E and F are convicted by the RTC of illegal sale of dangerous drugs and sentenced to life imprisonment; the RTC also orders E to pay a fine. At promulgation on May 2, E is present; F, on bail, is absent without cause. E files a notice of appeal with the CA on May 15; F's counsel files a notice of appeal for F with the RTC on May 16. The prosecutor files a notice of appeal of the fine, asking that it be increased.",
		"question": "Rule on each appeal.",
		"modelAnswer": {
			"answer": "E's appeal is defective in venue but can be saved if a notice is filed with the RTC by May 17; F has no appeal; the People's appeal is barred.",
			"legalBasis": "Rule 122, Sec. 3(a), (c) (notice of appeal filed with the court that rendered the judgment; LI cases by notice to the CA); Sec. 6 (15 days from promulgation); Rule 120, Sec. 6 (unjustified absence at promulgation forfeits remedies unless the accused surrenders and moves for leave within 15 days); Sec. 1 (no appeal that places the accused in double jeopardy).",
			"application": "E filed in the wrong court; the notice belongs in the RTC, and the 15 days run to May 17 — a corrected filing in time cures it. F lost his remedies by his unjustified absence and has not surrendered; counsel cannot appeal for a fugitive (Jaylo). The People's appeal to increase the penalty would place the accused twice in jeopardy.",
			"conclusion": "E should refile with the RTC by May 17; F's notice should be disregarded unless he surrenders and obtains leave by May 17; the People's appeal should be dismissed."
		}
	},
	{
		"id": "crimpro:alac:r123-1",
		"title": "Which track?",
		"topic": "Rule 123 — Procedure in the Municipal Trial Courts",
		"factPattern": "G is charged in the MTC with (1) violation of a city ordinance on littering, and (2) theft of a ₱15,000 phone, punishable under the RPC as amended by RA 10951 by a penalty within the MTC's jurisdiction but exceeding one year.",
		"question": "What procedure governs each case?",
		"modelAnswer": {
			"answer": "The ordinance case follows the expedited procedure; the theft case follows the regular procedure.",
			"legalBasis": "Rule 123, Sec. 1 (uniform procedure, except cases governed by the special rules for minor offenses); 2022 Rules on Expedited Procedures (ordinance violations; offenses punishable by imprisonment not exceeding one year or a fine not exceeding ₱50,000).",
			"application": "Ordinance violations are expressly covered. The theft, though within the MTC's jurisdiction, carries imprisonment beyond one year, so it is outside the expedited rules and follows Rules 110–122 as in the RTC.",
			"conclusion": "Expedited procedure for the ordinance case; regular procedure for the theft."
		}
	},
	{
		"id": "crimpro:alac:r124-1",
		"title": "The missing brief",
		"topic": "Rule 124 — Procedure in the Court of Appeals",
		"factPattern": "H, detained, signs his own notice of appeal from a 12-year sentence for robbery. The CA clerk designates a PAO lawyer as counsel de oficio. The PAO lawyer fails to file the appellant's brief within 30 days. The OSG moves to dismiss the appeal.",
		"question": "Should the appeal be dismissed?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 124, Sec. 8: the CA may dismiss an appeal for failure to file the brief \"except where the appellant is represented by a counsel de oficio\"; Sec. 2 (designation of counsel de oficio).",
			"application": "H is represented by counsel de oficio designated under Sec. 2 because he was confined and signed the notice himself. The exception applies; he should not lose his appeal through appointed counsel's neglect.",
			"conclusion": "Deny the motion; direct counsel to file the brief within a fixed period or designate another counsel de oficio."
		}
	},
	{
		"id": "crimpro:alac:r124-2",
		"title": "From the CA to the SC",
		"topic": "Rule 124 — Procedure in the Court of Appeals",
		"factPattern": "The CA affirms I's conviction for murder and the penalty of reclusion perpetua; the decision is entered. I wants to argue before the SC that the eyewitness was not credible.",
		"question": "What is the proper remedy, and may the SC review credibility?",
		"modelAnswer": {
			"answer": "Notice of appeal filed with the CA; yes, the SC may review the facts.",
			"legalBasis": "Rule 124, Sec. 13(c): where the CA imposes reclusion perpetua, it renders and enters judgment, appealable to the SC by notice of appeal filed with the CA. Unlike a Rule 45 petition, this appeal opens questions of fact (Tiu, p. 212).",
			"application": "The penalty is reclusion perpetua, so I need not file a Rule 45 petition limited to questions of law; a notice of appeal lets him raise credibility.",
			"conclusion": "I should file a notice of appeal with the CA within 15 days; the SC may review the eyewitness's credibility."
		}
	},
	{
		"id": "crimpro:alac:r124-3",
		"title": "DNA during appeal",
		"topic": "Rule 124 — Procedure in the Court of Appeals",
		"factPattern": "J was convicted of rape and appealed to the CA. While the appeal is pending, a DNA test on preserved samples — impossible during trial because the samples were mislabeled and found only later — excludes J. J moves for new trial in the CA, attaching the laboratory report and the analyst's affidavit. The OSG argues that new trial is a trial-court remedy under Rule 121.",
		"question": "Rule on the motion.",
		"modelAnswer": {
			"answer": "Grant the motion.",
			"legalBasis": "Rule 124, Sec. 14 (new trial in the CA on newly discovered evidence material to the defense, at any time after perfection of the appeal and before the CA judgment becomes final, in the form of Rule 121, Sec. 4); Sec. 15 (CA may receive evidence or refer to the court of origin); Sec. 12 (power to receive evidence).",
			"application": "The DNA evidence surfaced after trial, could not have been produced with diligence (mislabeled samples), and is material to identity. The motion is supported by the report and an affidavit, and is filed during the appeal.",
			"conclusion": "The CA should grant a new trial and either receive the DNA evidence itself or refer it to the RTC, then decide on the whole record."
		}
	},
	{
		"id": "crimpro:alac:r124-4",
		"title": "Rule 124 integrated",
		"topic": "Rule 124 — Procedure in the Court of Appeals",
		"factPattern": "K, on bail pending appeal, appeals his homicide conviction (8 years). He files his brief on day 34 after moving for extension on day 32. While the appeal is pending, he leaves for Hong Kong without permission. The CA, motu proprio, dismisses the appeal. K's lawyer files an MR on day 15 after notice; it is denied, and he files a second MR.",
		"question": "Identify and resolve the issues.",
		"modelAnswer": {
			"answer": "The extension was improper, the dismissal for flight was proper, the first MR was timely but correctly denied, and the second MR is prohibited.",
			"legalBasis": "Rule 124, Sec. 5 (extension only if moved before the period expires); Sec. 8 (dismissal, motu proprio, if the appellant flees to a foreign country during the appeal); Sec. 16 (MR within 15 days; no second MR).",
			"application": "The motion for extension on day 32 came after the 30-day period lapsed — alone a ground for dismissal (K's counsel was de parte). Flight to Hong Kong during the appeal independently justifies dismissal. The MR on day 15 was timely; the second MR is barred.",
			"conclusion": "The dismissal stands; the RTC judgment becomes final, and the second MR should be expunged."
		}
	},
	{
		"id": "crimpro:alac:r125-1",
		"title": "The divided Court",
		"topic": "Rule 125 — Procedure in the Supreme Court",
		"factPattern": "L's conviction for plunder (reclusion perpetua) reaches the SC en banc on appeal. Of the 14 justices taking part, 7 vote to affirm and 7 to acquit. The case is deliberated again; the vote does not change.",
		"question": "What is the result?",
		"modelAnswer": {
			"answer": "L is acquitted.",
			"legalBasis": "Rule 125, Sec. 3: when the SC en banc is equally divided or the necessary majority cannot be had on whether to acquit, the case is deliberated again, and if no decision is reached, the judgment of conviction is reversed and the accused acquitted.",
			"application": "The Court was equally divided; re-deliberation produced no majority.",
			"conclusion": "The Sandiganbayan's conviction is reversed and L acquitted."
		}
	},
	{
		"id": "crimpro:alac:r126-1",
		"title": "The wrong house number",
		"topic": "Rule 126 — Search and Seizure",
		"factPattern": "A warrant authorizes the search of \"the two-storey house painted blue with a red gate at No. 10 Grace St., Brgy. Malinis, owned by Juan Cruz.\" The blue house with a red gate is actually No. 11; No. 10 is a vacant lot. The house is owned by Juan's brother. The affiant officer, who had surveilled the blue house, leads the search team.",
		"question": "Is the warrant valid as to the blue house?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "Rule 126, Sec. 4 (particular description); Uy v. BIR (2000) (a wrong owner's name is not fatal if the place is otherwise correctly described); Yao v. People (2007) (a description suffices if the officer can, with reasonable effort, identify the place; the executing officer's prior knowledge as affiant is relevant). Tiu, p. 228: a wrong address is fatal unless the warrant also particularly describes the place.",
			"application": "Apart from the number, the warrant describes a unique structure (two-storey, blue, red gate) on a named street; No. 10 is a vacant lot, so there is no other house it could mean. The affiant led the team, leaving no room for discretion.",
			"conclusion": "The warrant is valid as to the blue house at No. 11."
		}
	},
	{
		"id": "crimpro:alac:r126-2",
		"title": "The gun on the table",
		"topic": "Rule 126 — Search and Seizure",
		"factPattern": "Officers serve a valid search warrant for shabu in M's house. In the living room, on a coffee table, they see an unlicensed pistol. They seize the shabu from the bedroom and the pistol.",
		"question": "Is the pistol admissible?",
		"modelAnswer": {
			"answer": "Yes, under the plain view doctrine.",
			"legalBasis": "Plain view (People v. Fajardo, 2011): prior lawful intrusion; inadvertent discovery; immediately apparent illegality.",
			"application": "The officers were lawfully in the house under a valid warrant; they came upon the pistol in the open while searching for shabu, not looking for guns; an unlicensed firearm in the open is immediately apparent contraband (subject to verification of the license).",
			"conclusion": "The pistol is admissible; the officers may also file a separate case for illegal possession of firearms."
		}
	},
	{
		"id": "crimpro:alac:r126-3",
		"title": "The tip at the bus terminal",
		"topic": "Rule 126 — Search and Seizure",
		"factPattern": "Police receive a text that \"a man in a black jacket with a blue backpack\" will arrive on the 5 p.m. bus with marijuana. At the terminal, they see N, matching the description, alight and walk normally. They stop him, open his backpack and find marijuana; then they arrest him. N is arraigned without objecting to his arrest and later moves to exclude the marijuana.",
		"question": "Should the marijuana be excluded?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "Const., Art. III, Secs. 2 and 3(2); Rule 126, Sec. 13 (search incident to a lawful arrest presupposes a prior lawful arrest); Rule 113, Sec. 5 (no overt act); People v. Aruta (1998); People v. Cogaed (2014); People v. Sapla (2020) (a tip alone is not probable cause). Failure to object to an illegal arrest before plea waives the objection to the arrest but not the inadmissibility of evidence seized (see Rule 113).",
			"application": "N did nothing suspicious; the police acted on the tip alone. The search came before the arrest, so it cannot be incident to it; there was no genuine reason for a stop-and-frisk, no consent, and no moving vehicle. Waiver of the illegal arrest does not cure the illegal search.",
			"conclusion": "The marijuana is inadmissible; without it, N should be acquitted."
		}
	},
	{
		"id": "crimpro:alac:r126-4",
		"title": "The fill-in-the-blanks deposition",
		"topic": "Rule 126 — Search and Seizure",
		"factPattern": "Police apply for a warrant to search O's store for counterfeit goods. The judge gives the witness a printed form with blanks; the witness fills in his name, the store address and \"I saw fake shoes sold there.\" The judge asks, \"Is this true?\" and signs a warrant for \"counterfeit goods and documents showing violations of the IP Code and the Tax Code.\"",
		"question": "Is the warrant valid?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 126, Secs. 4–5; Silva v. Presiding Judge (1991) (pre-printed depositions with leading questions are not searching questions); Bache v. Ruiz (1971); Stonehill v. Diokno (1967) and Vallejo v. CA (2004) (one specific offense; no general description).",
			"application": "The judge asked no probing questions; the deposition was a pro forma form. The warrant covers violations of two laws, and \"documents showing violations\" is a general description leaving discretion to the officers.",
			"conclusion": "The warrant is void; items seized under it are inadmissible and should be returned unless they are contraband."
		}
	},
	{
		"id": "crimpro:alac:r126-5",
		"title": "The checkpoint and the trunk",
		"topic": "Rule 126 — Search and Seizure",
		"factPattern": "At a fixed, well-lit COMELEC checkpoint during an election period, police stop P's car, look through the windows with a flashlight, and see nothing unusual. They then order P to open the trunk \"as standard procedure.\" P complies without a word. They find unlicensed firearms.",
		"question": "Is the search valid?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Valmonte v. De Villa (1989); Aniag v. COMELEC (1994); People v. Escaño (2000): checkpoint searches are valid only when limited to a visual inspection; a more intrusive search needs probable cause. Consent must be voluntary and is not presumed from silence (Aruta).",
			"application": "The visual inspection showed nothing; there was no probable cause to search the trunk. P's silent compliance with an order phrased as \"standard procedure\" is submission to authority, not consent.",
			"conclusion": "The firearms are inadmissible."
		}
	},
	{
		"id": "crimpro:alac:r126-6",
		"title": "Rule 126 integrated",
		"topic": "Rule 126 — Search and Seizure",
		"factPattern": "On June 1, Judge Q of the RTC of Makati issues, after properly examining the applicant and witnesses, a warrant to search R's house in Makati for shabu. It is silent on the time of service. Police serve it on June 14 at 10 p.m. R is out; his family is held in the garage while two officers search the bedrooms; two barangay tanods watch from the doorway. They find shabu and leave a receipt on the table. The information is filed in the RTC of Makati (another branch). R moves before Judge Q to quash the warrant and suppress the evidence.",
		"question": "Identify and resolve the issues.",
		"modelAnswer": {
			"answer": "The search was invalid on several grounds; the motion should be filed with, and granted by, the branch where the criminal case is pending.",
			"legalBasis": "Rule 126, Sec. 10 (warrant valid 10 days from its date); Sec. 9 (daytime unless the warrant directs otherwise); Sec. 8 (presence of the occupant or a family member, or two local witnesses in their absence); Sec. 11 (receipt to the occupant); Sec. 14 (motion filed only in the court where the action is instituted); Const., Art. III, Sec. 3(2).",
			"application": "June 14 is beyond 10 days from June 1 — the warrant was void when served. Service at 10 p.m. without a night-service direction violated Sec. 9. The family was present at the premises but kept away from the search, and the tanods were stationed at a doorway rather than witnessing the search — Sec. 8 was not met. Since the criminal case is pending, only the trial branch may resolve the motion.",
			"conclusion": "R should file the motion in the branch trying the case; the shabu should be suppressed."
		}
	},
	{
		"id": "crimpro:alac:r127-1",
		"title": "The departing treasurer",
		"topic": "Rule 127 — Provisional Remedies in Criminal Cases",
		"factPattern": "S, treasurer of a cooperative, is charged with estafa for converting ₱3 million of members' deposits. The cooperative did not reserve the civil action. It learns S has booked a one-way flight to Canada and listed his house for sale. It applies in the criminal case for preliminary attachment of the house.",
		"question": "Should the writ issue?",
		"modelAnswer": {
			"answer": "Yes, upon a proper affidavit and bond.",
			"legalBasis": "Rule 127, Sec. 1 (provisional remedies available for the civil action deemed instituted); Sec. 2(a), (b), (c) (accused about to abscond; embezzlement in a fiduciary capacity; disposing of property); Rule 57 (affidavit and bond).",
			"application": "The civil action rides with the criminal case (no reservation). Three grounds are present: S is about to leave the Philippines; the claim is for money converted by a fiduciary (treasurer); and he is about to dispose of his house.",
			"conclusion": "The criminal court should issue the writ upon the cooperative's affidavit and attachment bond."
		}
	},
	{
		"id": "crimpro:alac:r127-2",
		"title": "Reserved, then attached",
		"topic": "Rule 127 — Provisional Remedies in Criminal Cases",
		"factPattern": "In a reckless imprudence case, the victim's heirs expressly reserved the civil action and then filed a quasi-delict action under Art. 2176. Later, they move in the criminal case for attachment of the accused's car, alleging he is about to sell it.",
		"question": "Rule on the motion.",
		"modelAnswer": {
			"answer": "Deny the motion.",
			"legalBasis": "Rule 127, Sec. 1 (provisional remedies only in connection with the civil action deemed instituted); Rule 111, Secs. 1 and 3 (reservation; independent civil actions under Art. 2176 proceed separately).",
			"application": "The heirs reserved the civil action and sued separately on quasi-delict. No civil action remains in the criminal case to which attachment could be ancillary.",
			"conclusion": "The heirs should apply for attachment in their Art. 2176 action, where Rule 57 governs."
		}
	},
	{
		"id": "crimpro:alac:prescription-1",
		"title": "Slight physical injuries — the last day",
		"topic": "Prescription Module",
		"factPattern": "X inflicts slight physical injuries on Y, who reports it to the police the same day. The sixtieth day after the incident falls on a Sunday. The complaint is filed with the city prosecutor on the following Monday.",
		"question": "Has the offense prescribed?",
		"modelAnswer": {
			"answer": "Yes, it has prescribed (on the Yapdiangco computation).",
			"legalBasis": "RPC Art. 90: light offenses prescribe in two months; Art. 91: counted from discovery. Yapdiangco v. Buencamino (1983): a Sunday or legal holiday does not extend the prescriptive period.",
			"application": "Discovery was on the day of the incident (the offended party knew immediately). The sixtieth day fell on a Sunday; filing on the next working day is beyond the period.",
			"conclusion": "The complaint was filed out of time; the case should be dismissed (Rule 117, Sec. 3[g])."
		}
	},
	{
		"id": "crimpro:alac:prescription-2",
		"title": "Anti-Sexual Harassment complaint with the Ombudsman",
		"topic": "Prescription Module",
		"factPattern": "A public official commits an act of sexual harassment punishable under RA 7877 (prescriptive period: three years). The victim files a complaint with the Office of the Ombudsman two years later. The Ombudsman files the information with the Sandiganbayan four years after the act.",
		"question": "Has the offense prescribed?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Act 3326, Sec. 2: prescription is interrupted when proceedings are instituted against the guilty person. People v. Lee (2019): the filing of the complaint with the Ombudsman \"effectively tolled\" the period; Pangilinan (2012): no distinction between RPC and special-law offenses on interruption.",
			"application": "The complaint was filed in year two, within the three-year period. The Ombudsman's preliminary investigation is a proceeding that may lead to prosecution.",
			"conclusion": "The information is timely."
		}
	},
	{
		"id": "crimpro:alac:prescription-3",
		"title": "Forestry Code complaint filed with a DENR legal officer",
		"topic": "Prescription Module",
		"factPattern": "A person commits an offense under the Forestry Code (PD 705). A complaint is submitted to the legal officer of the DENR.",
		"question": "Does the filing interrupt the prescriptive period of the offense? Do not answer yes or no without identifying the facts you need.",
		"modelAnswer": {
			"answer": "Qualified yes: it interrupts prescription if the complaint is a criminal complaint (or report) against the offender, lodged with the DENR office that PD 705, Sec. 80 charges with investigating the offense, and filed before the period lapsed. It does not interrupt if it is purely administrative, is filed with an officer with no investigative function, or comes too late.",
			"legalBasis": "PD 705, Sec. 80: complaints not committed in the presence of a forest officer \"shall immediately be investigated by the forest officer assigned in the area,\" who, if there is prima facie evidence, \"shall file the necessary complaint with the appropriate official authorized by law to conduct a preliminary investigation.\" Act 3326, Sec. 2 as read in Panaguiton (2008), SEC v. Interport (2008), Pangilinan (2012), People v. Lee (2019) and Consebido (2025): \"any kind of investigative proceeding instituted against the guilty person which may ultimately lead to his prosecution\" tolls prescription; an agency investigation equivalent to preliminary investigation suffices (Interport). Rule 110, Sec. 1 (institution) and Sec. 5 (prosecution under special laws governed by those laws). Merida v. People (2008): the DENR route is not exclusive.",
			"application": "The Sec. 80 investigation is a statutory step whose purpose is to lead to the filing of a complaint with the prosecutor — it is the kind of executive, investigative proceeding Panaguiton and Interport had in mind, and the offended party (the State) should not lose its case to delays in the agency. But three facts decide it: (1) Nature of the complaint — a criminal complaint or report seeking investigation for prosecution, not merely an administrative case for confiscation or permit cancellation. (2) Authority of the receiving officer — a \"legal officer\" must be part of the office that conducts the Sec. 80 investigation (the forest officer or the DENR office assigned to the area); a complaint left with an officer who has no investigative function is not a proceeding against the offender. (3) Timing — it must be filed before the period ran out. On the period itself: Sec. 77 offenses are punished by the penalties of RPC Arts. 309–310 (qualified theft), so the period depends on the value of the forest products. Under Act 3326 (special law without its own period) the period is likely 8 or 12 years depending on the imprisonment prescribed; some argue Art. 90 applies because the penalty is borrowed from the RPC — state both.",
			"conclusion": "If the complaint is criminal in nature, filed with the DENR office charged with the Sec. 80 investigation, against the offender, and within the period, it interrupts prescription; the period runs again only if the proceedings are dismissed for reasons not constituting jeopardy. If any of those facts is missing, it does not, and prescription is interrupted only when a complaint reaches the prosecutor. No Supreme Court decision squarely rules on a DENR legal officer; the answer rests on the Panaguiton–Interport–Consebido line."
		}
	},
	{
		"id": "crimpro:alac:prescription-4",
		"title": "BP 22 — which interruption rule applies?",
		"topic": "Prescription Module",
		"factPattern": "D issues a check that bounces in 2019; notice of dishonor is received the same year. P files a complaint-affidavit with the city prosecutor in 2021. The prosecutor resolves the case and files the information in the MTC in 2024, more than four years after the offense.",
		"question": "Has the offense prescribed? Would your answer change if the check had bounced in 2025, the complaint had been filed in 2026, and the information had been filed in 2030?",
		"modelAnswer": {
			"answer": "On the original facts, it likely has prescribed. On the alternative facts, it has not.",
			"legalBasis": "Act 3326: BP 22 prescribes in four years (Panaguiton). Republic v. Desierto (2023) and Corpus v. People (2023): for offenses covered by the Rule on Summary Procedure (BP 22 since April 15, 2003), only filing in court interrupts. People v. Consebido (April 2, 2025): henceforth, filing before the DOJ tolls even for offenses covered by the 2022 Rules on Expedited Procedures; Desierto and Corpus abandoned on that point; prospective.",
			"application": "The offense (2019) is covered by summary procedure; the complaint (2021) predates Consebido, so the Desierto rule applies and only the 2024 court filing counts — beyond four years. In the alternative, the 2026 complaint is filed after Consebido and within four years of the 2025 offense, so it tolled the period; the 2030 information is timely even though more than four years passed from the offense.",
			"conclusion": "On the original facts, move to quash on prescription (Rule 117, Sec. 3[g]); on the alternative facts, the case may proceed."
		}
	},
	{
		"id": "crimpro:alac:prescription-5",
		"title": "Ordinance violation after Consebido",
		"topic": "Prescription Module",
		"factPattern": "On February 2, 2026, V violates a city ordinance (penalty: fine). The city legal officer files a complaint with the city prosecutor on February 20, 2026. The information is filed in the MTCC on May 15, 2026.",
		"question": "Has the offense prescribed?",
		"modelAnswer": {
			"answer": "Arguably no, under Consebido — but the point is unsettled, and both answers should be stated.",
			"legalBasis": "Act 3326, Sec. 1: ordinance violations prescribe in two months. Zaldivia (1992) and Jadewell (2013): only filing in court interrupts. Consebido (2025): henceforth, the filing of the criminal complaint before the DOJ, even for offenses \"covered by the 2022 Rules on Expedited Procedures,\" tolls; the 2022 Rules cover ordinance violations (Rule I, Sec. 1[B][3]). Consebido expressly abandoned Desierto and Corpus, but did not name Zaldivia or Jadewell.",
			"application": "The complaint was filed eighteen days after the offense, well within two months. If Consebido applies, prescription stopped on February 20 and the May 15 filing is timely. If Zaldivia and Jadewell still govern ordinances, the period ended in early April and the offense prescribed before May 15.",
			"conclusion": "The better view after Consebido is that the filing with the prosecutor tolled the period, because its reasoning and its words (\"offenses that may be covered by the 2022 Rules\") reach ordinance violations. A cautious answer flags that Zaldivia and Jadewell were not expressly abandoned."
		}
	},
	{
		"id": "crimpro:alac:prescription-6",
		"title": "Complaint dismissed, then refiled",
		"topic": "Prescription Module",
		"factPattern": "An offense under a special law prescribes in four years. It is committed and known on January 10, 2020. A complaint is filed with the prosecutor on January 10, 2022. The prosecutor dismisses it for insufficiency of evidence on January 10, 2023; the dismissal becomes final. The complainant refiles with new evidence on March 10, 2024.",
		"question": "Was the refiled complaint timely?",
		"modelAnswer": {
			"answer": "Yes.",
			"legalBasis": "Act 3326, Sec. 2: prescription is interrupted when proceedings are instituted and \"shall begin to run again if the proceedings are dismissed for reasons not constituting jeopardy.\" A prosecutor's dismissal at preliminary investigation does not place the respondent in jeopardy.",
			"application": "Two years ran before the first complaint (January 10, 2020 to January 10, 2022). The clock stopped until the dismissal on January 10, 2023, then resumed with two years left — until January 10, 2025. The refiling on March 10, 2024 is within that remainder.",
			"conclusion": "The refiled complaint is timely and interrupts prescription again."
		}
	},
	{
		"id": "crimpro:alac:prescription-7",
		"title": "Estafa, discovery and absence abroad",
		"topic": "Prescription Module",
		"factPattern": "A commits estafa (penalty prescribed by law within correctional penalties) on June 1, 2014. The victim discovers it on June 1, 2016. A leaves for the United States on June 1, 2018 and returns on June 1, 2023. The complaint is filed with the prosecutor on June 1, 2026.",
		"question": "Has the offense prescribed?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "RPC Art. 90: correctional penalties prescribe in ten years; Art. 91: the period runs from discovery and \"shall not run when the offender is absent from the Philippine Archipelago.\"",
			"application": "The period began on June 1, 2016 (discovery). It ran two years until June 1, 2018, stopped for five years while A was abroad, and resumed on June 1, 2023. By June 1, 2026, a total of five years has run (2 + 3). Five years remain.",
			"conclusion": "The complaint is timely."
		}
	},
	{
		"id": "crimpro:alac:prescription-8",
		"title": "Graver offense charged to revive a prescribed lesser offense",
		"topic": "Prescription Module",
		"factPattern": "On January 5, 2026, B punches C. On August 10, 2026, the prosecutor files an information for less serious physical injuries. The evidence at trial shows only slight physical injuries (healing in five days).",
		"question": "May the court convict B of slight physical injuries?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Corpus v. People (2023): \"the accused cannot be convicted of an offense lesser than that charged if the lesser offense had already prescribed at the time the information was filed.\" RPC Art. 90 (light offenses: two months). Rule 120, Sec. 4 (variance).",
			"application": "Slight physical injuries is a light felony that prescribed two months after January 5, 2026 (assuming the offense was immediately known and no earlier complaint was filed). By August 2026 it had prescribed. Convicting B of it would let the prosecution evade prescription by charging a graver offense.",
			"conclusion": "B must be acquitted of the lesser offense."
		}
	},
	{
		"id": "crimpro:alac:mock-1",
		"title": "Mock — Art. 125 and the five-day rule",
		"topic": "Integrated Mock Exam",
		"factPattern": "X is arrested in flagrante for homicide at 8:00 p.m. on Tuesday. At 7:00 p.m. on Thursday, he is still detained without a case filed and without having signed any waiver. On Friday, an information is filed after inquest; X learns of it on Saturday.",
		"question": "(a) Was X's detention lawful on Thursday evening? (b) Until when may X ask for a preliminary investigation?",
		"modelAnswer": {
			"answer": "(a) No — the 36-hour limit had lapsed. (b) Within 5 days from Saturday.",
			"legalBasis": "RPC Art. 125 (36 hours for offenses punishable by afflictive or capital penalties); Rule 112, Sec. 6 (PI within 5 days from learning of the filing).",
			"application": "(a) From Tuesday 8:00 p.m., 36 hours ended Thursday 8:00 a.m.; continued detention at 7:00 p.m. without filing or waiver violated Art. 125 (the officers may be liable; X should have been released). (b) X learned of the filing on Saturday; five days run to Thursday of the following week.",
			"conclusion": "(a) Detention beyond Thursday 8:00 a.m. was unlawful. (b) X must move for PI within five days from Saturday; later, the motion is prohibited."
		}
	},
	{
		"id": "crimpro:alac:mock-2",
		"title": "Mock — revival after provisional dismissal",
		"topic": "Integrated Mock Exam",
		"factPattern": "A robbery case (prision mayor) is provisionally dismissed on February 3, 2025 on the prosecution's motion, which bears the accused's handwritten \"No objection,\" with notice to the complainant and service on the prosecutor. The prosecution refiles on March 1, 2027.",
		"question": "Is the refiling timely?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 117, Sec. 8: for offenses punishable by imprisonment of more than six years, provisional dismissal becomes permanent two years after issuance of the order without revival; reckoned from issuance (A.M. No. 12-11-2-SC, Sec. 14).",
			"application": "Prision mayor exceeds six years. Two years from February 3, 2025 ended on February 3, 2027. The March 1, 2027 refiling is late; the Lacson requisites were present.",
			"conclusion": "The dismissal became permanent; the refiled case must be dismissed."
		}
	},
	{
		"id": "crimpro:alac:mock-3",
		"title": "Mock — BP 22 across three rulings",
		"topic": "Integrated Mock Exam",
		"factPattern": "A check bounces and notice of dishonor is received on May 1, 2025. The payee files a complaint with the city prosecutor on April 1, 2026. The information is filed in court on June 1, 2029.",
		"question": "Has the offense prescribed?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Act 3326, Sec. 1: four years for BP 22 (Panaguiton). People v. Consebido (April 2, 2025): henceforth, filing the complaint before the DOJ tolls prescription even for offenses under the 2022 Expedited Rules (abandoning Desierto and Corpus on that point).",
			"application": "The complaint (April 1, 2026) was filed after Consebido and within four years of the offense; it tolled prescription. The 2029 court filing is therefore timely despite being more than four years after the offense.",
			"conclusion": "The case may proceed."
		}
	},
	{
		"id": "crimpro:alac:mock-4",
		"title": "Mock — bail in another province",
		"topic": "Integrated Mock Exam",
		"factPattern": "Y is charged with frustrated homicide before the RTC of Baguio. He is arrested in Iloilo.",
		"question": "Where may Y post bail?",
		"modelAnswer": {
			"answer": "In the Baguio RTC, or in any RTC of Iloilo (or, if no RTC judge is available, any first-level judge there).",
			"legalBasis": "Rule 114, Sec. 4(b) (bail as a right before conviction for an offense not punishable by RP); Sec. 17(a) (place of arrest); Sec. 19 (papers forwarded to the court of the case).",
			"application": "Frustrated homicide is not punishable by RP; bail is a matter of right; Y was arrested in Iloilo.",
			"conclusion": "Y may post bail in Iloilo; the Iloilo judge forwards the bail and release order to Baguio."
		}
	},
	{
		"id": "crimpro:alac:mock-5",
		"title": "Mock — absent at promulgation",
		"topic": "Integrated Mock Exam",
		"factPattern": "Z, on bail, is notified that promulgation is set on September 1. He does not appear, without explanation. The conviction is recorded in the docket and served on his counsel on September 1. On September 20, Z's counsel files a notice of appeal; Z remains at large.",
		"question": "Is the appeal valid?",
		"modelAnswer": {
			"answer": "No.",
			"legalBasis": "Rule 120, Sec. 6: if the judgment is for conviction and the absence was without justifiable cause, the accused loses his remedies unless, within 15 days from promulgation, he surrenders and files a motion for leave; Jaylo v. Sandiganbayan (2015).",
			"application": "Z did not surrender or move for leave within 15 days (by September 16); the notice of appeal filed on September 20 while he is at large cannot be given due course.",
			"conclusion": "The notice of appeal should be denied; Z should be arrested."
		}
	},
	{
		"id": "crimpro:alac:mock-6",
		"title": "Mock — DENR complaint, then the prosecutor",
		"topic": "Integrated Mock Exam",
		"factPattern": "On March 1, 2015, R is caught by a barangay tanod transporting narra lumber without documents in a province. The tanod reports to the CENRO; on March 20, 2015, a DENR forest officer files a sworn report with the provincial environment office's legal division, which conducts an investigation and, in 2019, endorses a complaint to the provincial prosecutor. The prosecutor files an information for violation of PD 705, Sec. 77 in 2024. R moves to quash on prescription, arguing that only the prosecutor's receipt in 2019 interrupted the period and that it is a special law with an 8-year period.",
		"question": "Rule on the motion. What facts would you still need?",
		"modelAnswer": {
			"answer": "Deny the motion on these facts — the DENR proceeding likely interrupted prescription in 2015; even on R's theory, the 2019 endorsement was within 8 years.",
			"legalBasis": "PD 705, Sec. 80 (forest officer investigates and files the complaint with the official authorized to conduct preliminary investigation); Act 3326, Sec. 2 as read in Panaguiton, SEC v. Interport, Pangilinan, Lee and Consebido (executive investigative proceedings that may lead to prosecution toll prescription); Rule 117, Secs. 3(g), 9 (prescription is a ground never waived).",
			"application": "The forest officer's sworn report started the Sec. 80 investigation — an executive proceeding against R that may lead to prosecution (Interport analogy). That interrupted prescription on March 20, 2015, and the period stayed interrupted through the endorsement and filing. Even if only the 2019 endorsement counted, it came about four years after the offense — within 8 years (or 12, depending on the penalty fixed by the value of the lumber under Arts. 309–310).",
			"conclusion": "Deny the motion; the offense has not prescribed. Flag that no SC case squarely holds a DENR filing interrupts prescription."
		}
	},
	{
		"id": "crimpro:alac:mock-7",
		"title": "Mock — arrest days later, inquest, bail, arraignment",
		"topic": "Integrated Mock Exam",
		"factPattern": "Three days after a fatal shooting, police arrest S without a warrant on the basis of a witness's statement. S is inquested for murder; an information is filed. S applies for bail and, the next week, is arraigned and pleads not guilty. A month later, he moves to quash the information for lack of jurisdiction over his person and to suppress the gun found in his waistband at the arrest.",
		"question": "Rule on both motions.",
		"modelAnswer": {
			"answer": "Deny the motion to quash; grant the motion to suppress (if timely objected to when offered).",
			"legalBasis": "Rule 113, Sec. 5(b) and Go v. CA (arrest days later on witnesses' statements is not hot pursuit); Rule 114, Sec. 26 and Rule 117, Sec. 9 (objection to the arrest waived if not raised before plea; bail is no waiver if raised before plea); De la Cruz v. People and Villanueva v. People (waiver of the arrest does not waive inadmissibility of evidence seized); Const., Art. III, Sec. 3(2).",
			"application": "The arrest was illegal (no immediacy, no personal knowledge), and the inquest was improper — S was entitled to a regular PI. But S pleaded without objecting, waiving the arrest and the PI. The gun was seized incident to an illegal arrest and remains inadmissible.",
			"conclusion": "The case proceeds; the gun is excluded."
		}
	},
	{
		"id": "crimpro:alac:mock-8",
		"title": "Mock — estafa, earlier civil case, compromise",
		"topic": "Integrated Mock Exam",
		"factPattern": "T sues U for collection of ₱2 million based on a loan. Later, an estafa information is filed against U for issuing a fake title as collateral for the same loan. U petitions the court to suspend the estafa case because of the collection case. At pre-trial, U pays ₱2 million; the complainant executes an affidavit of desistance; the court dismisses the estafa case \"in view of the full payment.\"",
		"question": "Rule on the petition to suspend and on the dismissal.",
		"modelAnswer": {
			"answer": "Deny the petition; the dismissal was erroneous.",
			"legalBasis": "Rule 111, Secs. 6–7 (prejudicial question: a previously instituted civil action whose resolution determines whether the criminal action may proceed); Rule 111, Sec. 3 / Civil Code Arts. 31, 33 (independent actions); Civil Code Art. 2034 (compromise does not extinguish the public action); Metrobank v. Reynaldo; People v. Lamsen (desistance viewed with disfavor).",
			"application": "The collection case is on the loan (another source of obligation); its outcome does not determine whether U deceived T with a fake title, so it is not prejudicial. Payment settles civil liability only; the court cannot dismiss \"in view of payment.\" If the prosecution can no longer prove the case without T, it should move to dismiss on the evidence — and the court must assess it independently (Crespo).",
			"conclusion": "The estafa case should proceed; the dismissal should be set aside on the State's certiorari if it was a grave abuse (no double jeopardy if dismissed on the accused's motion — check who moved)."
		}
	},
	{
		"id": "crimpro:alac:mock-9",
		"title": "Mock — state witness, demurrer and variance",
		"topic": "Integrated Mock Exam",
		"factPattern": "V, W and X are charged with robbery with homicide. Before resting, the prosecution moves to discharge X, a lookout with no prior convictions and the only participant willing to describe the killing, whose account is corroborated by CCTV footage of the getaway car and phone records; the court grants it after a hearing. After the prosecution rests, V files a demurrer without leave; it is denied. W's demurrer with leave is denied; W presents evidence. The court finds that the killing was not proved to be connected with the robbery.",
		"question": "Rule on X's discharge and on both demurrers, and state the offense of which V and W may be convicted.",
		"modelAnswer": {
			"answer": "X's discharge was valid. V may not present evidence; W may. If the killing was not by reason or on the occasion of the robbery, the special complex crime fails: V and W may be convicted of robbery, and of homicide only if the information's allegations support a separate conviction.",
			"legalBasis": "Rule 119, Secs. 17–18 (requisites; acquittal); Sec. 23 (demurrer without leave — waiver of evidence; with leave — evidence allowed); Rule 120, Secs. 4–5 (variance — conviction for the offense proved included in the offense charged).",
			"application": "X met the requisites and was discharged before the prosecution rested. V filed without leave, so denial waived his evidence; W, with leave, presented evidence. Robbery is included in the special complex crime charged; if the homicide was not by reason or on the occasion of the robbery, the special complex crime fails, and the accused may be convicted of robbery and, separately, homicide only if the information's allegations support it and the duplicity point was waived.",
			"conclusion": "Convict V and W of robbery (and homicide only if alleged and proved as a separate offense); X is acquitted by the discharge if he testified as promised."
		}
	},
	{
		"id": "crimpro:alac:mock-10",
		"title": "Mock — from complaint to judgment",
		"topic": "Integrated Mock Exam",
		"factPattern": "A complaint for qualified theft (penalty above 4y 2m 1d) is filed with the city prosecutor of Makati. Without subpoenaing the respondent, the prosecutor files an information. The judge issues a warrant the same day, reading only the information. The accused is arrested, posts bail, and moves to quash for lack of preliminary investigation; denied. At arraignment, he says, \"Guilty, but I only borrowed the money.\" The court records a plea of guilty. Pre-trial is skipped. After the prosecution rests, the accused files a demurrer without leave; it is denied. The judgment, promulgated by mailing a copy to the accused, convicts him of qualified theft.",
		"question": "Identify every error and its effect.",
		"modelAnswer": {
			"answer": "Seven errors; the plea and the promulgation must be redone, and the case should have been remanded for PI.",
			"legalBasis": "Rule 112, Secs. 1, 3, 5 (PI required; personal evaluation for warrants); Rule 117, Sec. 3 and Larrañaga (absence of PI not a ground to quash — remand instead); Rule 116, Sec. 1(d) (guilty plea with exculpatory claim → not guilty); Rule 118, Sec. 1 (pre-trial mandatory); Rule 119, Sec. 23 (demurrer without leave); Rule 120, Sec. 6 (promulgation by reading in the presence of the accused).",
			"application": "(1) No PI despite the penalty. (2) Warrant without personal evaluation of supporting evidence. (3) The motion to quash was correctly denied as a quash, but the court should have treated it as a request for PI and remanded. (4) \"I only borrowed the money\" is exculpatory — a plea of not guilty should have been entered. (5) Pre-trial cannot be skipped. (6) The denial of the demurrer without leave waived defense evidence — but this is moot if the plea is invalid. (7) Mailing is not promulgation.",
			"conclusion": "Set aside the proceedings from arraignment; remand for preliminary investigation; re-arraign; hold pre-trial; try the case; promulgate properly."
		}
	},
	{
		"id": "crimpro:alac:mock-11",
		"title": "Mock — lesser offense after an early complaint",
		"topic": "Integrated Mock Exam",
		"factPattern": "On July 1, 2026, A punches B. On August 15, 2026, B files a complaint with the city prosecutor for the punch. On October 30, 2026, the prosecutor files an information for less serious physical injuries. A pleads not guilty. At trial, the medical certificate shows the injury healed in five days. The court convicts A of slight physical injuries.",
		"question": "Was the conviction proper? Would your answer change if B had gone to the prosecutor only on September 10, 2026?",
		"modelAnswer": {
			"answer": "Yes on the given facts. On the September 10 variation, no.",
			"legalBasis": "RPC Art. 90 (light offenses: two months); Art. 91 (interruption by the filing of the complaint or information); People v. Consebido (2025): henceforth, filing the complaint before the DOJ tolls prescription even for offenses covered by the 2022 Expedited Rules; Corpus v. People (2023): no conviction for a lesser offense that had prescribed when the information was filed; Rule 120, Secs. 4–5 (variance).",
			"application": "Slight physical injuries is a light offense: two months from July 1, 2026. B's complaint before the prosecutor (August 15) came within two months and after Consebido, so it tolled the period. When the information was filed on October 30, the lesser offense had not prescribed; conviction for it as an offense included in the one charged is proper. On the variation, the two months ended on September 1, 2026 — before any complaint — so the lesser offense had prescribed, and under Corpus A cannot be convicted of it even though the charge for less serious physical injuries (5 years) was timely.",
			"conclusion": "Affirm the conviction. On the variation, acquit A of slight physical injuries."
		}
	},
	{
		"id": "crimpro:alac:mock-12",
		"title": "Mock — the disappearing accused",
		"topic": "Integrated Mock Exam",
		"factPattern": "B, charged with homicide, posts bail. Before arraignment, he disappears. The court issues a warrant and forfeits the bail; the surety produces nothing within 30 days. Six months later, B is arrested, arraigned and posts a new bond. During trial he again disappears; the court proceeds. On promulgation day, B is absent; the judgment of conviction is recorded in the docket. Twelve days later, B surrenders and moves for leave, claiming he was in hiding because of threats.",
		"question": "Resolve: (a) the surety's liability; (b) the validity of trial in absentia; (c) B's motion for leave.",
		"modelAnswer": {
			"answer": "(a) Judgment against the surety; mitigation only if B is surrendered (by the surety) or acquitted. (b) Valid as to the second disappearance. (c) Grant only if he proves a justifiable cause.",
			"legalBasis": "Rule 114, Sec. 21 (30 days to produce and explain; no mitigation unless surrendered or acquitted); Const., Art. III, Sec. 14(2) and Rule 115, Sec. 1(c) (trial in absentia after arraignment, notice, unjustified absence); Rule 120, Sec. 6 (surrender and motion within 15 days; justifiable cause).",
			"application": "(a) The surety failed within 30 days; B's later arrest by the authorities is not a surrender by the surety. (b) The first disappearance (before arraignment) stalled the case; after arraignment, notice and unjustified absence allowed trial in absentia. (c) B surrendered and moved within 15 days; whether \"threats\" are justifiable depends on proof.",
			"conclusion": "Enforce the first bond; uphold the trial; rule on the motion according to the evidence of threats."
		}
	}
];
