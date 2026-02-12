import plugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

import extensionRules from './rules/extension.js';
import supportedRules from './rules/supported.js';
import unnecessaryRules from './rules/unnecessary.js';

export default {
  languageOptions: {
    parser,
    parserOptions: {
      /**
       * `project` sets the `tsconfig.json` that's used to provide type information. This incurs a
       * performance dip as it requires a pseudo-build of the TypeScript project to get type
       * information. If we don't use rules that require type information, we could drop this.
       */
      project: './tsconfig.json',
    },
  },
  plugins: {
    '@typescript-eslint': plugin,
  },
  rules: {
    ...extensionRules,
    ...supportedRules,
    ...unnecessaryRules,
  },
};
