import type { TopQuestion } from '../kit';

/** Consti I exam focus: cases flagged "★ Likely" (case id → reason) and the ranked likely questions. */
export const LIKELY_CASES: Record<string, string> = {
	marcos: 'Residual power of the President is a perennial bar topic.',
	risos: 'Pardon and its limits are asked almost every year.',
	garafil: 'Midnight appointments: the four-step test fits a scenario perfectly.',
	decastro: 'The appointments ban vs. Judiciary vacancies is a classic problem.',
	belgica: 'The pork barrel ruling is the leading case on the budget and separation of powers.',
	sereno: 'Quo warranto vs. impeachment is a favorite distinction.',
	chavez: 'JBC composition is a short, clean question on plain meaning.',
	funa: 'Terms of Commission members: a computation examiners like.',
	brillantes: 'Independence of the Commissions: no acting appointments by the President.'
};

export const TOP: TopQuestion[] = [
	{ q: 'The President signed an appointment before the election ban, but the appointee took the oath after. Is the appointment valid?', type: 'scenario', topic: 'Midnight appointments · Velicaria-Garafil', href: '/module/consti1/problems/garafil-drill' },
	{ q: 'A Supreme Court seat becomes vacant during the appointments ban. May the President fill it?', type: 'scenario', topic: 'Appointments ban and the Judiciary · De Castro', href: '/module/consti1/problems/decastro-drill' },
	{ q: 'A budget law lets legislators choose projects after the budget is passed. Is it valid?', type: 'scenario', topic: 'Pork barrel · Belgica', href: '/module/consti1/problems/belgica-drill' },
	{ q: 'May an impeachable officer be removed by quo warranto? Distinguish it from impeachment.', type: 'distinction', topic: 'Quo warranto · Republic v. Sereno', href: '/module/consti1/problems/sereno-drill' },
	{ q: 'The President does an act that no law or constitutional provision expressly allows. Is it valid?', type: 'scenario', topic: 'Residual powers · Marcos v. Manglapus', href: '/module/consti1/problems/marcos-drill' },
	{ q: 'A Commissioner is appointed Chairman, or to a vacated seat. How long may he serve?', type: 'computation', topic: 'Terms in the Commissions · Funa v. Villar', href: '/module/consti1/problems/funa-drill' },
	{ q: 'The President names an acting chairman of a Constitutional Commission. Is it valid?', type: 'scenario', topic: 'Independence of the Commissions · Brillantes v. Yorac', href: '/module/consti1/problems/brillantes-drill' },
	{ q: 'A pardoned convict runs for public office. Is he qualified?', type: 'scenario', topic: 'Pardon · Risos-Vidal', href: '/module/consti1/problems/risos-drill' },
	{ q: 'How many representatives may Congress have in the JBC?', type: 'scenario', topic: 'JBC composition · Chavez v. JBC', href: '/module/consti1/problems/chavez-drill' },
	{ q: 'The JBC excludes an applicant over an integrity question, or clusters its nominees. Is that valid?', type: 'scenario', topic: 'JBC process · Jardeleza; Aguinaldo', href: '/module/consti1/problems/jardeleza-drill' },
	{ q: 'The President revokes an amnesty already granted. Is the revocation valid?', type: 'scenario', topic: 'Amnesty · Trillanes v. Medialdea', href: '/module/consti1/problems/trillanes-drill' },
	{ q: 'Which bodies have fiscal autonomy, and what does it allow?', type: 'enumeration', topic: 'Fiscal autonomy · CHREA; Re: COA Opinion', href: '/module/consti1/problems/chrea-drill' },
	{ q: 'A candidate holds a motorcade after filing a certificate of candidacy but before the campaign period. Is that premature campaigning?', type: 'scenario', topic: 'Election law · Peñera', href: '/module/consti1/problems/penera-drill' },
	{ q: 'State the facts, issue, ruling and doctrine of an assigned case.', type: 'case digest', topic: 'All 28 cases', href: '/module/consti1/cases' },
	{ q: 'The President withdraws from a treaty without asking the Senate. Is the withdrawal valid?', type: 'scenario', topic: 'Treaties · Pangilinan v. Cayetano', href: '/module/consti1/problems/pangilinan-drill' }
];
