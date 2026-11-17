import type { AlacEssay } from '$lib/types';
import { CHAPTERS, CH_TITLE, ROMAN, RULES, STATCON, TRAPS } from '$lib/statcon';
import type { Kind } from '$lib/kit';

const mdToHtml = (s: string) => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

const KIND_DOT: Record<Kind, string> = {
	req: 'green',
	exc: 'blue',
	exx: 'orange',
	cls: 'purple',
	doc: 'red',
	mem: 'yellow',
	list: 'yellow'
};

export const statconKitEssays: AlacEssay[] = STATCON.problems.map((p) => ({
	id: `statcon2:kit:${p.pid}`,
	title: `Ch. ${ROMAN[p.group as 6 | 7 | 8 | 9 | 10 | 11]} — ${p.label}`,
	topic: `Chapter ${ROMAN[p.group as 6 | 7 | 8 | 9 | 10 | 11]} · Finals Kit`,
	factPattern: p.facts,
	question: p.q || 'Resolve the problem using the ALAC method.',
	modelAnswer: {
		answer: p.alac[0] ?? '',
		legalBasis: p.alac[1] ?? '',
		application: p.alac[2] ?? '',
		conclusion: p.alac[3] ?? ''
	}
}));

export const statconKitGuideHtml = `
<h2 class="sg-h2" id="finals-kit-enumerations-terms-maxims-traps">Finals Kit — 47 Enumerations, 36 Definitions, 16 Maxims &amp; Chapter Rules/Traps</h2>

<h3 class="sg-h3" id="statcon-kit-rules-and-traps">Chapters VI–XI Rules, Limits &amp; Examiner Traps</h3>
${CHAPTERS.map(
	(ch) => `<div class="case-card"><div class="cname">${CH_TITLE[ch]}</div><div class="cdoc">
<div class="table-scroll"><table class="sg-table">
  <tr><th>Rule</th><th>In short</th><th>Limit / Exception</th></tr>
${RULES[ch].map(([r, s, l]) => `  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span>${mdToHtml(r)}</td><td>${mdToHtml(s)}</td><td>${mdToHtml(l)}</td></tr>`).join('\n')}
</table></div>
<div style="margin-top:8px"><strong>Examiner traps (Ch. ${ROMAN[ch]}):</strong><ul>${TRAPS[ch].map((t) => `<li>${mdToHtml(t)}</li>`).join('')}</ul></div>
</div></div>`
).join('\n')}

<h3 class="sg-h3" id="statcon-kit-enumerations">47 Enumerations to Recite (Chapters VI–XI)</h3>
<div class="table-scroll"><table class="sg-table">
  <tr><th>ID / Source</th><th>Enumeration, Memory Aid &amp; Trap</th></tr>
${STATCON.enums
	.map((e) => {
		const dot = KIND_DOT[e.kind] ?? 'yellow';
		const itemsHtml = e.it
			.map(([h, d], i) => `<div>${e.order ? `${i + 1}. ` : '• '}<strong>${mdToHtml(h)}</strong>${d ? ` — ${mdToHtml(d)}` : ''}</div>`)
			.join('');
		return `  <tr><td class="art"><span class="sg-dot" style="background:var(--${dot})"></span><strong>${e.id}</strong><div style="font-size:0.8em;opacity:0.75">${e.src}</div></td><td><strong>${mdToHtml(e.t)}</strong> (${e.it.length}${e.order ? ', in order' : ''})${e.mem ? `<div style="margin-top:3px;color:var(--green)"><strong>Memory aid:</strong> ${mdToHtml(e.mem)}</div>` : ''}<div style="margin-top:4px">${itemsHtml}</div>${e.trap ? `<div style="margin-top:4px;color:var(--orange)"><strong>Exam trap:</strong> ${mdToHtml(e.trap)}</div>` : ''}</td></tr>`;
	})
	.join('\n')}
</table></div>

<h3 class="sg-h3" id="statcon-kit-definitions">36 Definitions &amp; Distinctions (Chapters VI–XI)</h3>
<div class="table-scroll"><table class="sg-table">
  <tr><th>Term</th><th>Definition &amp; Distinction</th></tr>
${STATCON.terms
	.map(
		(t) =>
			`  <tr><td class="art"><span class="sg-dot" style="background:var(--yellow)"></span><strong>${mdToHtml(t.t)}</strong><div style="font-size:0.8em;opacity:0.75">${t.src}</div></td><td>${mdToHtml(t.d)}${t.x ? `<div style="margin-top:4px;color:var(--orange)"><strong>Don’t confuse with:</strong> ${mdToHtml(t.x)}</div>` : ''}</td></tr>`
	)
	.join('\n')}
</table></div>

<h3 class="sg-h3" id="statcon-kit-maxims">16 Latin Maxims (Chapters VI–XI)</h3>
<div class="table-scroll"><table class="sg-table">
  <tr><th>Maxim</th><th>Meaning</th><th>Chapter</th></tr>
${(STATCON.maxims ?? []).map((m) => `  <tr><td class="art"><span class="sg-dot" style="background:var(--purple)"></span><em>${mdToHtml(m.m)}</em></td><td>${mdToHtml(m.mean)}</td><td>${m.label}</td></tr>`).join('\n')}
</table></div>
`;
