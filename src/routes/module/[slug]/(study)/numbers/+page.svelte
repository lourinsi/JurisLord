<script lang="ts">
	import { SvelteSet } from 'svelte/reactivity';
	import { page } from '$app/state';
	import Breadcrumbs from '$lib/components/common/Breadcrumbs.svelte';
	import NumberTable from '$lib/components/NumberTable.svelte';
	import { getModule } from '$lib/data/modules';
	import { NUMBERS as CRIMPRO_NUMBERS, type NumberRow } from '$lib/crimpro';
	import { CRIMPRO_FINALS_TOPICS } from '$lib/crimpro-finals';
	import { STATCON } from '$lib/statcon';

	const slug = $derived(page.params.slug ?? '');
	const subject = $derived(getModule(slug)!);

	// Consti I numbers
	const constiRows: [string, string, string][] = [
		['2 months', 'Ban on appointments: from two months before the next presidential election until the end of the President’s term', 'Art. VII, Sec. 15'],
		['4 steps', 'A valid appointment: signing, transmittal, receipt, acceptance. All must be done before the ban.', 'Velicaria-Garafil'],
		['90 days', 'Fill a vacancy in the Supreme Court, counted from when the vacancy occurs', 'Art. VIII, Sec. 4(1)'],
		['90 days', 'Fill a vacancy in a lower court, counted from submission of the JBC list', 'Art. VIII, Sec. 9'],
		['7 members', 'Membership of the JBC', 'Art. VIII, Sec. 8(1)'],
		['1', 'Representative of Congress in the JBC, with one vote', 'Chavez v. JBC'],
		['At least 3', 'Nominees the JBC must submit for every vacancy', 'Art. VIII, Sec. 9'],
		['4 years', 'Term of the regular (non-ex officio) members of the JBC', 'Art. VIII, Sec. 8(2)'],
		['5 years', 'Service as a first-level court judge before promotion to a second-level court (JBC policy)', 'Villanueva v. JBC'],
		['70 years', 'Retirement age of justices and judges', 'Art. VIII, Sec. 11'],
		['Majority of all Members of Congress', 'Concurrence needed for an amnesty', 'Art. VII, Sec. 19'],
		['2/3 of all Members of the Senate', 'Concurrence needed for a treaty or international agreement', 'Art. VII, Sec. 21'],
		['30 days', 'Monetary Board reports to Congress on foreign loans, from the end of every quarter', 'Art. VII, Sec. 20'],
		['1/3 of all Members of the House', 'Vote needed to impeach', 'Art. XI, Sec. 3(3)'],
		['2/3 of all Members of the Senate', 'Vote needed to convict in an impeachment', 'Art. XI, Sec. 3(6)'],
		['1 year', 'Period to file quo warranto; it does not run against the State', 'Republic v. Sereno'],
		['7 years', 'Term of the Chairman and Commissioners of the CSC, COMELEC and COA, without reappointment', 'Art. IX-B, C, D, Sec. 1(2)'],
		['Never over 7 years', 'Total service of a member of a Commission, counting a promotion to Chairman', 'Funa v. Villar'],
		['7, 5, 3 years', 'Staggered terms of the first appointees to the Commissions', 'Art. IX-B, C, D, Sec. 1(2)'],
		['35 years old', 'Minimum age of a member of the CSC, COMELEC or COA', 'Art. IX-B, C, D, Sec. 1(1)'],
		['60 days', 'Period for a Commission to decide a case, from its submission', 'Art. IX-A, Sec. 7'],
		['30 days', 'Period to bring a Commission’s decision to the Supreme Court on certiorari, from receipt', 'Art. IX-A, Sec. 7'],
		['65 years', 'Compulsory retirement age in the career civil service', 'CSC v. Pililla Water District'],
		['90 days / 45 days', 'Campaign period: national positions / House and local positions', 'Omnibus Election Code, Sec. 3; Peñera'],
		['3 (J-C-O)', 'Bodies with fiscal autonomy: Judiciary, Constitutional Commissions, Ombudsman', 'CHREA v. CHR']
	];

	// PFR numbers
	const pfrRows: [string, string, string][] = [
		['1/5', 'Limit on donations between future spouses in the settlement, when the regime is not ACP', 'Family Code, Art. 84'],
		['5 years', 'Wife’s recourse to court when the husband’s decision on administration prevails', 'Art. 96, 124'],
		['3 months', 'Absence without news that is prima facie proof of abandonment', 'Art. 101'],
		['1 year', 'Liquidate the community or partnership after a spouse’s death, if there is no judicial settlement', 'Art. 103, 130'],
		['Below 7', 'Children deemed to choose the mother for the conjugal dwelling', 'Art. 102(6), 129(9)'],
		['At least 1 year', 'Separation in fact as a ground for judicial separation of property', 'Art. 135(6)'],
		['5 years', 'Innocent spouse’s period to revoke a donation propter nuptias after legal separation', 'Art. 64'],
		['P300,000 / P200,000', 'Value limit of the family home: urban / rural (codal values)', 'Art. 157'],
		['10 years', 'Family home continues after the death of the spouses or the head (or while a minor beneficiary lives there)', 'Art. 159'],
		['Majority of beneficiaries of legal age', 'Written consent needed (with the constitutor and the spouse) to sell or encumber the family home', 'Art. 158'],
		['1', 'Family homes a person may constitute or be a beneficiary of', 'Art. 161'],
		['August 3, 1988', 'Family Code effectivity; debts before it are not covered by the family-home exemption', 'Art. 162; Modequillo'],
		['120 of 300 days', 'Period before birth in which physical impossibility of intercourse must exist to impugn legitimacy', 'Art. 166'],
		['1 / 2 / 3 years', 'Period to impugn legitimacy: same place / elsewhere in the Philippines / abroad', 'Art. 170'],
		['180 and 300 days', 'Presumptions on a child born after the mother remarries', 'Art. 168'],
		['5 years', 'Heirs’ action to claim legitimacy when the child dies a minor or insane', 'Art. 173'],
		['5 years', 'Period to impugn legitimation, from when the cause of action accrues', 'Art. 182'],
		['Below 18', 'Parents’ minority at conception that does not bar legitimation', 'Art. 177 (RA 9858)'],
		['25 (27 inter-country)', 'Minimum age of an adopter', 'RA 11642'],
		['16 years', 'Required age gap between adopter and adoptee (waived for a biological parent or the parent’s spouse)', 'RA 11642'],
		['5 years', 'Residence in the Philippines required of a foreign adopter', 'RA 11642'],
		['3 years', 'An adult treated as the adopter’s own child, who may be adopted', 'RA 11642'],
		['10 years or older', 'Children whose written consent to the adoption is needed', 'RA 11642'],
		['6 months', 'Wait after the parents’ death before adoption proceedings', 'RA 11642'],
		['Under 7', 'Tender-age rule: child stays with the mother absent compelling reasons', 'Art. 213'],
		['Over 7', 'Age from which the child’s choice of parent is considered', 'Art. 213'],
		['Over 21', 'Age of the oldest sibling or actual custodian who exercises substitute parental authority', 'Art. 216'],
		['P50,000 / 10%', 'Child’s property or income above which parents must post a bond of at least 10%', 'Art. 225'],
		['18 / 21', 'Age of emancipation / age until which parental consent to marry is needed', 'Arts. 234, 236'],
		['2 years (5 with administrator)', 'Absence without news before a person may be declared absent', 'Civil Code, Art. 384'],
		['6 months', 'After publication, when a declaration of absence takes effect', 'Civil Code, Art. 386'],
		['7 years (10 for succession; 5 if over 75)', 'Absence before a person is presumed dead', 'Civil Code, Art. 390'],
		['4 years', 'Absence in danger of death before a person is presumed dead', 'Civil Code, Art. 391'],
		['4 years (2 in danger cases)', 'Absence before the present spouse may remarry, with a court declaration', 'Family Code, Art. 41'],
		['Day and month', 'Parts of the birth date the civil registrar may correct (not the year)', 'RA 10172']
	];

	// StatCon numbers
	const statconFixed: [string, string, string][] = [
		['24 months', 'Supreme Court: period to decide a case from submission', 'Art. VIII, Sec. 15(1)'],
		['12 months', 'Lower collegiate courts: period to decide, unless reduced by the Supreme Court', 'Art. VIII, Sec. 15(1)'],
		['3 months', 'All other lower courts: period to decide', 'Art. VIII, Sec. 15(1)'],
		['60 days', 'Constitutional Commissions: period to decide', 'Art. IX-A, Sec. 7'],
		['1899 · 1935 · 1943 · 1973 · 1986 · 1987', 'The Philippine constitutions, in order (1986 is the provisional Freedom Constitution)', 'Ch. XI']
	];
	const statconCounts: [string, string, string][] = STATCON.enums
		.filter((e) => STATCON.focus.enums?.[e.id])
		.map((e) => [String(e.it.length), e.t, `List ${e.id}`]);

	// Crim Pro numbers
	const crimproRows: NumberRow[] = CRIMPRO_NUMBERS.map(([n, what, rule, note]) => {
		const src = /^\d/.test(rule) ? `Rule ${rule}` : rule;
		return note ? [n, what, src, note] : [n, what, src];
	});

	// Crim Law I tables
	type Table = { title: string; head?: string[]; rows: string[][]; note?: string };
	const crimTables: Table[] = [
		{
			title: 'Duration of penalties · Art. 27',
			rows: [
				['Reclusion perpetua', '20 years 1 day – 40 years'],
				['Reclusion temporal', '12 years 1 day – 20 years'],
				['Prision mayor; temporary disqualification', '6 years 1 day – 12 years'],
				['Prision correccional; suspension; destierro', '6 months 1 day – 6 years'],
				['Arresto mayor', '1 month 1 day – 6 months'],
				['Arresto menor', '1 day – 30 days'],
				['Bond to keep the peace', 'As the court fixes']
			]
		},
		{
			title: 'Fines · Art. 26 (RA 10951)',
			rows: [
				['Afflictive', 'More than P1,200,000'],
				['Correctional', 'P40,000 to P1,200,000'],
				['Light', 'Less than P40,000'],
				['Light felony (Art. 9)', 'Arresto menor or fine not over P40,000']
			],
			note: 'Older amounts in some notes: over P6,000 / P200–P6,000 / under P200.'
		},
		{
			title: 'Periods of divisible penalties · Art. 76',
			head: ['Penalty', 'Minimum', 'Medium', 'Maximum'],
			rows: [
				['Reclusion temporal', '12y 1d – 14y 8m', '14y 8m 1d – 17y 4m', '17y 4m 1d – 20y'],
				['Prision mayor', '6y 1d – 8y', '8y 1d – 10y', '10y 1d – 12y'],
				['Prision correccional, destierro', '6m 1d – 2y 4m', '2y 4m 1d – 4y 2m', '4y 2m 1d – 6y'],
				['Arresto mayor', '1m 1d – 2m', '2m 1d – 4m', '4m 1d – 6m'],
				['Arresto menor', '1 – 10 days', '11 – 20 days', '21 – 30 days']
			]
		},
		{
			title: 'Degrees lower · Arts. 50–57',
			head: ['', 'Consummated', 'Frustrated', 'Attempted'],
			rows: [
				['Principal', '0', '1', '2'],
				['Accomplice', '1', '2', '3'],
				['Accessory', '2', '3', '4']
			],
			note: 'Scale No. 1: RP → RT → PM → PC → arresto mayor → destierro → arresto menor → public censure → fine.'
		},
		{
			title: 'Prescription · Arts. 90 and 92',
			head: ['Penalty', 'Of the crime', 'Of the penalty'],
			rows: [
				['Death, reclusion perpetua', '20 years', '20 years'],
				['Reclusion temporal', '20 years', '15 years'],
				['Other afflictive', '15 years', '15 years'],
				['Correctional', '10 years', '10 years'],
				['Arresto mayor', '5 years', '5 years'],
				['Libel and similar', '1 year', '—'],
				['Oral defamation, slander by deed', '6 months', '—'],
				['Light', '2 months', '1 year']
			]
		},
		{
			title: 'Good conduct time allowance · Art. 97',
			rows: [
				['Years 1–2', '20 days per month'],
				['Years 3–5', '23 days per month'],
				['Years 6–10', '25 days per month'],
				['Year 11 on', '30 days per month'],
				['Study, teaching, mentoring', '+15 days per month'],
				['STAL (Art. 98)', '1/5 if back within 48 hours; 2/5 if he stayed']
			]
		}
	];
	const crimOther: [string, string][] = [
		['Preventive imprisonment credit', 'full if he agrees in writing; 4/5 if not; for RP, deducted from 30 years'],
		['Subsidiary imprisonment', 'max 1/3 of the term, never over 1 year; fine only: 6 months (grave/less grave), 15 days (light)'],
		['Three-fold rule', '3× the most severe penalty, max 40 years'],
		['Habitual delinquency', 'within 10 years; 3rd conviction; total cap 30 years'],
		['Prision correccional over…', '18 months: perpetual special disqualification from suffrage'],
		['Bond to keep the peace not given', 'detention up to 6 months (grave/less grave) or 30 days (light)'],
		['Destierro radius', '25 to 250 km'],
		['Probation', 'max term not more than 6 years; period up to 2 years (term ≤ 1 year) or 6 years'],
		['ISLaw', 'not for a maximum term of 1 year or less'],
		['Children (RA 9344)', '15 or below exempt; over 15 under 18 exempt unless with discernment; suspended sentence until 21']
	];
	let crimHide = $state(false);
	let crimClustered = $state(false);
	const crimShown = new SvelteSet<string>();
	function setCrimHide(v: boolean) {
		crimHide = v;
		crimShown.clear();
	}
	function toggleCrim(id: string) {
		if (crimShown.has(id)) crimShown.delete(id);
		else crimShown.add(id);
	}

	const crimClusterRows: NumberRow[] = $derived.by(() => {
		const out: NumberRow[] = [];
		for (const t of crimTables) {
			const [topic, srcPart] = t.title.split('·').map((s) => s.trim());
			const src = srcPart || topic;
			for (const [label, ...vals] of t.rows) {
				if (t.head && t.head.length > 2) {
					vals.forEach((v, idx) => {
						if (v && v !== '—') {
							const col = t.head![idx + 1];
							out.push([v, `${topic} — ${label} (${col})`, src]);
						}
					});
				} else if (vals[0]) {
					out.push([vals[0], `${topic}: ${label}`, src]);
				}
			}
		}
		for (const [k, v] of crimOther) {
			out.push([v, k, 'Arts. 16–113']);
		}
		return out;
	});
</script>

<svelte:head><title>Numbers to Memorize — {subject.title} — Juris Lord</title></svelte:head>

<div class="mx-auto flex max-w-[68rem] flex-col gap-5 px-4 pt-6 pb-20 sm:px-8 lg:pt-8">
	<Breadcrumbs items={[{ label: subject.title, href: `/module/${subject.id}` }, { label: 'Numbers to memorize' }]} />

	<header class="flex flex-col gap-1.5">
		<p class="label-caps">Self-test recall</p>
		<h1 class="font-heading text-3xl leading-tight font-extrabold">Numbers to Memorize</h1>
	</header>

	{#if slug === 'consti1'}
		<div class="stack" style="gap:12px">
			<p class="muted" style="max-width:66ch">Every period, vote, age and count you may be asked for in this coverage. Hide the numbers, say each one, then tap to check.</p>
			<NumberTable rows={constiRows} />
		</div>
	{:else if slug === 'pfr'}
		<div class="stack" style="gap:12px">
			<p class="muted" style="max-width:66ch">Every period, amount and age to memorize in this coverage. Hide the numbers, say each one, then tap to check.</p>
			<NumberTable rows={pfrRows} />
		</div>
	{:else if slug === 'crimpro'}
		<div class="stack" style="gap:12px">
			<p class="muted" style="max-width:64ch">Hide the numbers and test yourself. Tap a blurred number to check it. Filter by rule range, toggle custom rules, or select <b>★ FINALS</b> for the 5 Final Exam Notes topics.</p>
			<NumberTable rows={crimproRows} finalsTopics={CRIMPRO_FINALS_TOPICS} />
		</div>
	{:else if slug === 'statcon'}
		<div class="stack" style="gap:18px">
			<p class="muted" style="max-width:66ch">
				StatCon has few numbers. Learn the periods, then the count of each ★ Likely list: writing “There are four…” first gives
				you the slots to fill.
			</p>
			<NumberTable rows={statconFixed} title="Periods and dates" />
			<NumberTable rows={statconCounts} title="How many items? (★ Likely lists)" />
		</div>
	{:else if slug === 'crim1' || slug === 'crim1_lloren'}
		<div class="stack" style="gap:12px">
			<p class="muted" style="max-width:66ch">
				Every number to memorize in Arts. 16–113. Fines follow <b>RA 10951 (2017)</b>. Switch to self-test, say the
				number, then tap it to check.
			</p>
			{#if crimClustered}
				<div class="seg" role="group" aria-label="Grouping mode" style="align-self:flex-start">
					<button aria-pressed={!crimClustered} onclick={() => (crimClustered = false)}>Topic tables</button>
					<button aria-pressed={crimClustered} onclick={() => (crimClustered = true)}>Cluster similar</button>
				</div>
				<NumberTable rows={crimClusterRows} title="Clustered numbers (Arts. 16–113)" defaultClustered={true} />
			{:else}
				<div class="between wrap" style="gap:8px">
					<div class="seg" role="group" aria-label="Grouping mode">
						<button aria-pressed={!crimClustered} onclick={() => (crimClustered = false)}>Topic tables</button>
						<button aria-pressed={crimClustered} onclick={() => (crimClustered = true)}>Cluster similar</button>
					</div>
					<div class="seg" role="group" aria-label="Number visibility">
						<button aria-pressed={!crimHide} onclick={() => setCrimHide(false)}>Show numbers</button>
						<button aria-pressed={crimHide} onclick={() => setCrimHide(true)}>Hide numbers (self-test)</button>
					</div>
				</div>

				{#snippet val(id: string, v: string)}
					{#if crimHide}
						<button class="v" class:blur={!crimShown.has(id)} onclick={() => toggleCrim(id)} aria-label={crimShown.has(id) ? v : 'Reveal this number'}>{v}</button>
					{:else}{v}{/if}
				{/snippet}

				<div class="crim-grid">
					{#each crimTables as t (t.title)}
						<section class="blk k-mem">
							<h4>{t.title}</h4>
							<div style="overflow-x:auto">
								<table>
									{#if t.head}<thead><tr>{#each t.head as h, i (i)}<th>{h}</th>{/each}</tr></thead>{/if}
									<tbody>
										{#each t.rows as [label, ...vals] (label)}
											<tr>
												<th scope="row">{label}</th>
												{#each vals as v, i (i)}<td>{@render val(`${t.title}|${label}|${i}`, v)}</td>{/each}
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
							{#if t.note}<p class="muted note-s">{t.note}</p>{/if}
						</section>
					{/each}
					<section class="blk k-mem wide">
						<h4>Other numbers</h4>
						<ul>
							{#each crimOther as [k, v] (k)}<li><b>{k}:</b> {@render val(k, v)}</li>{/each}
						</ul>
					</section>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.crim-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(380px, 100%), 1fr));
		gap: 12px;
	}
	.wide {
		grid-column: 1 / -1;
	}
	table {
		border-collapse: collapse;
		width: 100%;
		font-size: 14px;
	}
	th,
	td {
		border-bottom: 1px solid color-mix(in srgb, var(--fg-k, var(--border)) 22%, transparent);
		padding: 6px 8px;
		text-align: left;
		vertical-align: top;
	}
	tbody tr:last-child > * {
		border-bottom: 0;
	}
	thead th {
		font-size: 12.5px;
		color: var(--text-2);
	}
	tbody th {
		font-weight: 700;
	}
	td {
		font-variant-numeric: tabular-nums;
	}
	.note-s {
		font-size: 12.5px;
		margin-top: 6px;
	}
	.v {
		padding: 0;
		border: 0;
		background: none;
		font: inherit;
		text-align: left;
		cursor: pointer;
		transition: filter 0.15s;
	}
	.v.blur {
		filter: blur(6px);
		user-select: none;
	}
</style>
