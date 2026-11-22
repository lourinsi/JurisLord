import type { McqQuestion, ModuleTopic } from '$lib/types';
import { FLIPS, NUMBERS, RULES, SETS } from '$lib/crimpro';
import { resolveCorrectIndex } from '$lib/mcq';

const mdToHtml = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

export const crimproTwistTopic: ModuleTopic = {
	id: 'twists_kit',
	name: 'Twist Sets (23 Sets · 148 MCQs)',
	eyebrow: 'ONE FACT FLIPS IT',
	desc: '23 linked fact-pattern chains where changing a single fact flips the ruling across Rules 110–127.'
};

export const crimproTwistWatchFor = `<strong>Watch for: the one fact that flips the answer.</strong>
<ul>
  <li>Before answering any linked Twist Set item, spot the <strong>pivot fact</strong>: What stage of the case are we in (before or after arraignment, before or after conviction)? Which court imposed the penalty (RTC vs. MTC)? Is the defect waivable by silence at arraignment, or does it survive (jurisdiction, offense charged, extinction, jeopardy)?</li>
</ul>`;

export const crimproTwistMcqs: McqQuestion[] = SETS.flatMap((set) =>
	set.qs.map((q, k) => {
		const prefix =
			k === 0
				? `[${set.title} — Base Scenario] ${set.base}\n\n${q.q}`
				: `[${set.title} — Twist ${k}: ${q.tw ?? 'Modified facts'}]\n(Base scenario: ${set.base})\n\n${q.q}`;
		const correctIndex = resolveCorrectIndex(q);
		const optionExplanations = q.why.map((w, idx) => (idx === correctIndex ? q.ex : w));
		return {
			id: `crimpro:twist:${set.id}:${k + 1}`,
			topicId: 'twists_kit',
			topic: `Twist Sets — ${set.title} (Rule ${set.rules.join(', ')})`,
			tag: k === 0 ? 'requisites' : 'exceptions',
			question: prefix,
			options: q.o,
			optionExplanations,
			correctIndex,
			key: q.key ?? q.o[correctIndex],
			explanation: q.ex,
			legalBasis: q.lb ?? `Rule ${set.rules.join(', ')} · Twist Set: ${set.title}`,
			hint: q.tw ? `Changed fact: ${q.tw}` : `Base scenario for ${set.title}`
		};
	})
);

export const crimproFlipsAndTwistsHtml = `
<h2 class="sg-h2" id="one-fact-flips-it-and-twist-sets">One Fact Flips It (21 Pairs), 38 Numbers &amp; Rule Cards</h2>

<h3 class="sg-h3" id="crimpro-one-fact-flips-it">One Fact Flips It (21 Side-by-Side Pairs)</h3>
<div class="table-scroll"><table class="cmp-table">
  <tr><th>Pivot Topic</th><th>Fact A → Outcome A</th><th>Fact B (One Fact Changed) → Outcome B</th></tr>
${FLIPS.map(
	(f) =>
		`  <tr><td class="aspect"><strong>${mdToHtml(f.t)}</strong><div style="font-size:0.8em;opacity:0.75">Rule ${f.ref}</div></td><td><div>${mdToHtml(f.a[0])}</div><div style="margin-top:4px;color:var(--green)"><strong>→ ${mdToHtml(f.a[1])}</strong></div></td><td><div>${mdToHtml(f.b[0])}</div><div style="margin-top:4px;color:var(--orange)"><strong>→ ${mdToHtml(f.b[1])}</strong></div></td></tr>`
).join('\n')}
</table></div>

<h3 class="sg-h3" id="crimpro-numbers-to-memorize-38">Numbers to Memorize (38 Items Across Rules 110–127)</h3>
<div class="table-scroll"><table class="sg-table">
  <tr><th>Number</th><th>What it measures</th><th>Rule</th></tr>
${NUMBERS.map(([num, what, rule]) => `  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span>${mdToHtml(num)}</td><td>${mdToHtml(what)}</td><td>Rule ${rule}</td></tr>`).join('\n')}
</table></div>

<h3 class="sg-h3" id="crimpro-18-rule-cards-summary">18 Rule Cards — Hooks &amp; Exam Traps (Rules 110–127)</h3>
${RULES.map(
	(r) =>
		`<div class="case-card"><div class="cname">${r.name}</div><div class="cdoc"><p><strong>Memory hook:</strong> ${mdToHtml(r.hook)}</p>${r.mem?.length ? `<p><strong>Memorize:</strong> ${r.mem.map(mdToHtml).join(' · ')}</p>` : ''}<p><strong>Exam trap:</strong> ${mdToHtml(r.trap)}</p></div></div>`
).join('\n')}
`;
