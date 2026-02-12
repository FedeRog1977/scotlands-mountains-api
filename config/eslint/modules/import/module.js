import plugin from 'eslint-plugin-import';

import helpfulRules from './rules/helpful.js';
import moduleRules from './rules/module.js';
import staticRules from './rules/static.js';
import styleRules from './rules/style.js';

export default {
  plugins: {
    import: plugin,
  },
  rules: {
    ...helpfulRules,
    ...moduleRules,
    ...staticRules,
    ...styleRules,
  },
  settings: {
    'import/parsers': {
      /**
       * This entry is needed due to `eslint-plugin-import` dropping `languageOptions` while
       * destructuring an object. This is due to `eslint-plugin-import` being partially incompatible
       * with the new Flat ESLint configuration approach.
       *
       * Note: `espree` is the default JavaScript parser that ESLint uses.
       *
       * See:
       * - https://github.com/import-js/eslint-plugin-import/blob/328064abc707d3289772a8a29da5783c6dc345f6/src/ExportMap.js#L793
       */
      espree: ['.js', '.cjs', '.mjs', '.jsx'],
    },
    'import/resolver': {
      /**
       * TODO: Comment about how we need to use this for all resolution (JS + TS) because of eslint-plugin-import -> eslint-import-resolver-node -> browserify/resolve
       *
       * This entry is needed due to `eslint-plugin-import` using upon `eslint-import-resolver-node`
       * which in turn uses `browserify`'s `resolve`. It isn't able to resolve `package.json`
       * `exports` fields yet. For now, the solution is to use the resolver provided by
       * `eslint-import-resolver-typescript` for all files (JavaScript included).
       *
       * See:
       * - https://github.com/import-js/eslint-plugin-import/issues/1810
       * - https://github.com/import-js/eslint-plugin-import/issues/2495
       * - https://github.com/import-js/eslint-plugin-import/issues/1868
       * - https://github.com/import-js/eslint-plugin-import/issues/2132
       * - https://github.com/import-js/eslint-plugin-import#typescript
       */
      typescript: true,
    },
  },
};
