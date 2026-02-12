import layoutRules from './rules/layout.js';
import problemRules from './rules/problem.js';
import suggestionRules from './rules/suggestion.js';

export default {
  rules: {
    ...layoutRules,
    ...problemRules,
    ...suggestionRules,
  },
};
