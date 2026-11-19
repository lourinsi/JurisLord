import { renderRule, type RuleChapter } from './model';
import { r118 } from './r118';
import { r119 } from './r119';
import { r120 } from './r120';
import { r121 } from './r121';
import { r122 } from './r122';
import { r123 } from './r123';
import { r124 } from './r124';
import { r125 } from './r125';
import { r126 } from './r126';
import { r127 } from './r127';
import { renderDeadlines } from './deadlines';
import { renderCaseReview } from './cases';
import { renderComparisons } from './comparisons';
import { renderMockAnswers, renderMockExam } from './integrated';
import { renderLastMinute, renderPrelim, renderStart } from './review';
import { renderQuizAnswers, renderQuizzes } from './quizzes';
import { crimproFlipsAndTwistsHtml } from './twists_ext';

/** Rules 118–127 (Second half of Criminal Procedure study guide). */
export const rulesPart2: RuleChapter[] = [r118, r119, r120, r121, r122, r123, r124, r125, r126, r127];

export function assembleCrimproGuide(rulesPart1: RuleChapter[], renderedPart1: string[]): string {
	const allRules = [...rulesPart1, ...rulesPart2];
	return [
		renderStart(allRules),
		renderPrelim(allRules),
		...renderedPart1,
		...rulesPart2.map((r) => renderRule(r)),
		renderDeadlines(allRules),
		renderCaseReview(allRules),
		renderComparisons(allRules),
		renderMockExam(),
		renderMockAnswers(),
		renderQuizzes(),
		renderQuizAnswers(),
		renderLastMinute(allRules),
		crimproFlipsAndTwistsHtml
	].join('\n');
}
