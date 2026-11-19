import { renderRule, type RuleChapter } from './model';
import { r110 } from './r110';
import { r111 } from './r111';
import { r112 } from './r112';
import { r113 } from './r113';
import { r114 } from './r114';
import { r115 } from './r115';
import { r116 } from './r116';
import { r117 } from './r117';
import { renderPrescription } from './prescription';

/** Rules 110–117 (First half of Criminal Procedure study guide). */
export const rulesPart1: RuleChapter[] = [r110, r111, r112, r113, r114, r115, r116, r117];

export function renderRulesPart1(): string[] {
	return rulesPart1.flatMap((r) => (r.id === 'r110' ? [renderRule(r), renderPrescription()] : [renderRule(r)]));
}
