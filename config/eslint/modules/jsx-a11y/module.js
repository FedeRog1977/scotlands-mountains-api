import plugin from 'eslint-plugin-jsx-a11y';

import rules from './rules/core.js';

export default {
  plugins: {
    'jsx-a11y': plugin,
  },
  rules,
};
