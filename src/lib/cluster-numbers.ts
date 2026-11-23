export type AnyNumberRow = readonly [string, string, string] | readonly [string, string, string, string];

export interface SourceTag {
	id: string;
	label: string;
	ruleNum?: number;
	count: number;
}

/**
 * Extracts a normalized source/rule category from a row's `src` column so users can filter by specific rules or laws.
 */
export function extractSourceTag(src: string): { id: string; label: string; ruleNum?: number } {
	const s = src.trim();
	const ruleMatch = s.match(/\bRule\s+(\d+)\b/i) ?? s.match(/^(\d{3})\b/);
	if (ruleMatch) {
		const num = Number(ruleMatch[1]);
		return { id: `rule-${num}`, label: `Rule ${num}`, ruleNum: num };
	}
	if (/21-06-08|BWC/i.test(s)) {
		return { id: 'bwc', label: 'BWC Rules' };
	}
	if (/17-11-03|10175/i.test(s)) {
		return { id: 'cybercrime', label: 'Cybercrime Warrants' };
	}
	const artRoman = s.match(/\bArt\.\s*([IVX]+(?:-[A-D])?)\b/);
	if (artRoman) {
		return { id: `art-${artRoman[1]}`, label: `Art. ${artRoman[1]}` };
	}
	const raMatch = s.match(/\b(R\.?A\.?\s*\d+)\b/i);
	if (raMatch) {
		const clean = raMatch[1].toUpperCase().replace(/\./g, '').replace(/\s+/g, ' ');
		return { id: clean, label: clean };
	}
	if (/^Civil Code/i.test(s)) {
		return { id: 'civil-code', label: 'Civil Code' };
	}
	if (/^Family Code/i.test(s) || /^Arts?\.\s*\d+/i.test(s)) {
		return { id: 'family-code', label: 'Family Code' };
	}
	return { id: s, label: s };
}

export function collectSourceTags(rows: readonly AnyNumberRow[]): SourceTag[] {
	const map = new Map<string, SourceTag>();
	for (const row of rows) {
		const t = extractSourceTag(row[2]);
		const existing = map.get(t.id);
		if (existing) {
			existing.count += 1;
		} else {
			map.set(t.id, { ...t, count: 1 });
		}
	}
	return [...map.values()].sort((a, b) => {
		if (a.ruleNum !== undefined && b.ruleNum !== undefined) return a.ruleNum - b.ruleNum;
		if (a.ruleNum !== undefined) return -1;
		if (b.ruleNum !== undefined) return 1;
		return 0;
	});
}

export interface IndexedNumberRow {
	index: number;
	row: AnyNumberRow;
	numVal: number;
}

export interface NumberCluster {
	id: string;
	title: string;
	subtitle?: string;
	exact: boolean;
	scaleOrder: number;
	items: IndexedNumberRow[];
}

type UnitKind = 'hours' | 'days' | 'months' | 'years' | 'age' | 'quorum' | 'money' | 'count' | 'other';

interface ParsedRow {
	kind: UnitKind;
	val: number;
}

/**
 * Dynamically extracts the unit family and primary numerical value from any `[number, what, src, note?]` row.
 */
function parseRow(n: string, what: string): ParsedRow {
	const s = n.trim();
	const sl = s.toLowerCase();
	const wl = what.toLowerCase();
	const noParen = sl.replace(/\([^)]*\)/g, '').trim();

	// 1. Age thresholds & retirement/majority ages
	if (
		sl.includes('years old') ||
		sl.includes('or older') ||
		/^(?:below|under|over)\s+\d+$/.test(sl) ||
		/^\d+\s*\/\s*\d+$/.test(noParen) && /\b(?:age|emancipation|marry)\b/.test(wl) ||
		/\b(?:retirement age|minimum age|age gap|age of|age from which|age until which|tender-age|exempt unless with discernment)\b/.test(wl)
	) {
		const m = noParen.match(/(\d+)/) ?? sl.match(/(\d+)/);
		return { kind: 'age', val: m ? Number(m[1]) : 0 };
	}

	// 2. Years (check before days/months so ranges like "1 year 1 day – 6 years" or "20 years 1 day – 40 years" classify as years)
	if (/\byears?\b/.test(noParen)) {
		const rangeEnd = noParen.match(/(?:[–\-]|\bto)\s*(\d+)\s*years?\b/);
		if (rangeEnd) {
			return { kind: 'years', val: Number(rangeEnd[1]) };
		}
		const m = noParen.match(/(\d+)\s*years?\b/) ?? noParen.match(/(\d+)/);
		if (m) {
			return { kind: 'years', val: Number(m[1]) };
		}
	}

	// 3. Months
	if (/\bmonths?\b/.test(noParen)) {
		const m = noParen.match(/(\d+)\s*months?\b/) ?? noParen.match(/(\d+)/);
		if (m) {
			return { kind: 'months', val: Number(m[1]) };
		}
	}

	// 4. Days
	if (/\bdays?\b/.test(noParen)) {
		const m = noParen.match(/(\d+)/);
		if (m) {
			return { kind: 'days', val: Number(m[1]) };
		}
	}

	// 5. Hours
	if (/\bhours?\b/.test(noParen)) {
		const m = noParen.match(/(\d+)/);
		if (m) {
			return { kind: 'hours', val: Number(m[1]) };
		}
	}

	// 6. Quorums, votes, court divisions & body membership
	if (/\b(?:justices?|divisions?|members?|nominees|majority|3\/4|2\/3|1\/3|senators?|commissions?|seats?)\b/.test(sl)) {
		const m = noParen.match(/(\d+)/);
		return { kind: 'quorum', val: m ? Number(m[1]) : 0 };
	}

	// 7. Monetary amounts, fines, percentages & property shares
	if (/[₱p]\s*\d|\bpercent\b|%|^\d+\/\d+$/.test(noParen) || /\b(?:fine|bond|value limit)\b/.test(wl)) {
		const m = noParen.replace(/,/g, '').match(/(\d+)/);
		return { kind: 'money', val: m ? Number(m[1]) : 0 };
	}

	// 8. Pure counts / list lengths / quantities (excluding technical specs like 720p, 30 fps, 100 km, Rule 57)
	const countMatch = noParen.match(/^(\d+)\b/) ?? noParen.match(/\bat least (\d+)\b/);
	if (countMatch && !/\b(?:720p|fps|km|rule\s+\d|\d{4})\b/.test(noParen)) {
		return { kind: 'count', val: Number(countMatch[1]) };
	}

	const anyNum = noParen.match(/(\d+)/);
	return { kind: 'other', val: anyNum ? Number(anyNum[1]) : 0 };
}

function formatRangeLabel(unit: string, items: IndexedNumberRow[]): string {
	const vals = items.map((i) => i.numVal).filter((v) => v > 0);
	if (vals.length === 0) return `Other ${unit}`;
	const min = Math.min(...vals);
	const max = Math.max(...vals);
	return min === max ? `${min} ${unit}` : `${min}–${max} ${unit}`;
}

/**
 * Dynamically groups any list of number rows into study clusters.
 */
export function clusterNumberRows(rows: readonly AnyNumberRow[]): NumberCluster[] {
	const byKind = new Map<UnitKind, IndexedNumberRow[]>();

	rows.forEach((row, index) => {
		const { kind, val } = parseRow(row[0], row[1]);
		let list = byKind.get(kind);
		if (!list) {
			list = [];
			byKind.set(kind, list);
		}
		list.push({ index, row, numVal: val });
	});

	const clusters: NumberCluster[] = [];

	// 1. Hours: group all hour periods together in ascending order
	const hours = byKind.get('hours') ?? [];
	if (hours.length > 0) {
		const sorted = [...hours].sort((a, b) => a.numVal - b.numVal || a.index - b.index);
		clusters.push({
			id: 'hours',
			title: hours.length >= 2 ? `Hours Cluster (${formatRangeLabel('Hours', sorted)})` : 'Hours',
			subtitle: 'Custodial detention, BWC downloads & cybercrime warrant returns',
			exact: false,
			scaleOrder: 10,
			items: sorted
		});
	}

	// 2. Days: exact clusters for recurring day counts (>= 2 items), plus a combined cluster for 1-off day periods
	const days = byKind.get('days') ?? [];
	if (days.length > 0) {
		const byVal = new Map<number, IndexedNumberRow[]>();
		for (const item of days) {
			const group = byVal.get(item.numVal) ?? [];
			group.push(item);
			byVal.set(item.numVal, group);
		}
		const leftovers: IndexedNumberRow[] = [];
		for (const [val, group] of [...byVal.entries()].sort((a, b) => a[0] - b[0])) {
			if (group.length >= 2) {
				clusters.push({
					id: `days-${val}`,
					title: `${val}-Day Cluster`,
					subtitle: `${group.length} rules & periods anchored on ${val} ${val === 1 ? 'day' : 'days'}`,
					exact: true,
					scaleOrder: 100 + val,
					items: group
				});
			} else {
				leftovers.push(...group);
			}
		}
		if (leftovers.length > 0) {
			leftovers.sort((a, b) => a.numVal - b.numVal || a.index - b.index);
			clusters.push({
				id: 'days-other',
				title: clusters.some((c) => c.id.startsWith('days-'))
					? `Other Day Periods (${formatRangeLabel('Days', leftovers)})`
					: `Day Periods (${formatRangeLabel('Days', leftovers)})`,
				exact: false,
				scaleOrder: 999,
				items: leftovers
			});
		}
	}

	// 3. Months: exact clusters if >= 2 items and total months >= 4, otherwise grouped as Month Periods
	const months = byKind.get('months') ?? [];
	if (months.length > 0) {
		const byVal = new Map<number, IndexedNumberRow[]>();
		for (const item of months) {
			const group = byVal.get(item.numVal) ?? [];
			group.push(item);
			byVal.set(item.numVal, group);
		}
		const leftovers: IndexedNumberRow[] = [];
		for (const [val, group] of [...byVal.entries()].sort((a, b) => a[0] - b[0])) {
			if (group.length >= 2 && months.length >= 4) {
				clusters.push({
					id: `months-${val}`,
					title: `${val}-Month Cluster`,
					subtitle: `${group.length} periods anchored on ${val} months`,
					exact: true,
					scaleOrder: 1000 + val,
					items: group
				});
			} else {
				leftovers.push(...group);
			}
		}
		if (leftovers.length > 0) {
			leftovers.sort((a, b) => a.numVal - b.numVal || a.index - b.index);
			clusters.push({
				id: 'months-other',
				title: clusters.some((c) => c.id.startsWith('months-'))
					? `Other Month Periods (${formatRangeLabel('Months', leftovers)})`
					: `Month Periods (${formatRangeLabel('Months', leftovers)})`,
				exact: false,
				scaleOrder: 1999,
				items: leftovers
			});
		}
	}

	// 4. Years: exact clusters for recurring year thresholds (>= 2 items), plus combined cluster for remaining years
	const years = byKind.get('years') ?? [];
	if (years.length > 0) {
		const byVal = new Map<number, IndexedNumberRow[]>();
		for (const item of years) {
			const group = byVal.get(item.numVal) ?? [];
			group.push(item);
			byVal.set(item.numVal, group);
		}
		const leftovers: IndexedNumberRow[] = [];
		for (const [val, group] of [...byVal.entries()].sort((a, b) => a[0] - b[0])) {
			if (group.length >= 2) {
				clusters.push({
					id: `years-${val}`,
					title: `${val}-Year Cluster`,
					subtitle: `${group.length} rules, thresholds & prescriptions anchored on ${val} ${val === 1 ? 'year' : 'years'}`,
					exact: true,
					scaleOrder: 2000 + val,
					items: group
				});
			} else {
				leftovers.push(...group);
			}
		}
		if (leftovers.length > 0) {
			leftovers.sort((a, b) => a.numVal - b.numVal || a.index - b.index);
			clusters.push({
				id: 'years-other',
				title: clusters.some((c) => c.id.startsWith('years-'))
					? `Other Year Periods (${formatRangeLabel('Years', leftovers)})`
					: `Year Periods (${formatRangeLabel('Years', leftovers)})`,
				exact: false,
				scaleOrder: 2999,
				items: leftovers
			});
		}
	}

	// 5. Ages
	const ages = byKind.get('age') ?? [];
	if (ages.length > 0) {
		const byVal = new Map<number, IndexedNumberRow[]>();
		for (const item of ages) {
			const group = byVal.get(item.numVal) ?? [];
			group.push(item);
			byVal.set(item.numVal, group);
		}
		const leftovers: IndexedNumberRow[] = [];
		for (const [val, group] of [...byVal.entries()].sort((a, b) => a[0] - b[0])) {
			if (val > 0 && group.length >= 2) {
				clusters.push({
					id: `age-${val}`,
					title: `Age ${val} Cluster`,
					subtitle: `${group.length} rules anchored on age ${val}`,
					exact: true,
					scaleOrder: 3000 + val,
					items: group
				});
			} else {
				leftovers.push(...group);
			}
		}
		if (leftovers.length > 0) {
			leftovers.sort((a, b) => a.numVal - b.numVal || a.index - b.index);
			clusters.push({
				id: 'ages-other',
				title: clusters.some((c) => c.id.startsWith('age-')) ? 'Other Ages & Age Thresholds' : 'Ages & Age Thresholds',
				exact: false,
				scaleOrder: 3999,
				items: leftovers
			});
		}
	}

	// 6. Quorums, Votes & Court Composition
	const quorums = byKind.get('quorum') ?? [];
	if (quorums.length > 0) {
		const sorted = [...quorums].sort((a, b) => a.numVal - b.numVal || a.index - b.index);
		clusters.push({
			id: 'quorums',
			title: 'Quorums, Votes & Composition',
			subtitle: 'Justices, divisions, memberships & required voting thresholds',
			exact: false,
			scaleOrder: 4000,
			items: sorted
		});
	}

	// 7. Pure Counts & Enumerations
	const counts = byKind.get('count') ?? [];
	const others = byKind.get('other') ?? [];
	const money = byKind.get('money') ?? [];

	if (counts.length > 0) {
		const byVal = new Map<number, IndexedNumberRow[]>();
		for (const item of counts) {
			const group = byVal.get(item.numVal) ?? [];
			group.push(item);
			byVal.set(item.numVal, group);
		}
		const countLeftovers: IndexedNumberRow[] = [];
		// Pure count table (like StatCon list counts) vs mixed table
		const mostlyCounts = counts.length >= rows.length * 0.6;
		for (const [val, group] of [...byVal.entries()].sort((a, b) => a[0] - b[0])) {
			if (group.length >= 2 || mostlyCounts) {
				clusters.push({
					id: `count-${val}`,
					title: mostlyCounts ? `${val} Items` : `Count of ${val}`,
					subtitle: `${group.length} ${group.length === 1 ? 'item' : 'items'} with a count of ${val}`,
					exact: true,
					scaleOrder: 5000 + val,
					items: group
				});
			} else {
				countLeftovers.push(...group);
			}
		}
		others.push(...countLeftovers);
	}

	if (money.length >= 2) {
		const sortedMoney = [...money].sort((a, b) => a.numVal - b.numVal || a.index - b.index);
		clusters.push({
			id: 'money',
			title: 'Amounts, Fines, Percentages & Shares',
			exact: false,
			scaleOrder: 6000,
			items: sortedMoney
		});
	} else {
		others.push(...money);
	}

	if (others.length > 0) {
		clusters.push({
			id: 'other',
			title: clusters.length === 0 ? 'Items' : 'Other Thresholds, Specs & Rules',
			exact: false,
			scaleOrder: 7000,
			items: others
		});
	}

	return clusters;
}
