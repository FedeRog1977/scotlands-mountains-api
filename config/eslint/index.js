/**
 *
 * This file, and those associated, document a comprehensive collection of the rule
 * configuration options supported by `eslint`.
 *
 * Each, where relevant, option provides:
 *
 * - A description of what it does
 * - Whether it is recommended by the `eslint` authors
 * - A link to the documentation on the rule
 *
 * Each option, where relevant, is detailed for the understanding of:
 *
 * - Rules which are available
 * - Rules which we've chosen to use and why we chose it
 *
 * This file is correct as of `eslint@8.33.0` and uses the `flat` config approach.
 */

import globals from 'globals';
import coreModule from './modules/core/module.js';
import importModule from './modules/import/module.js';
import jsxA11yModule from './modules/jsx-a11y/module.js';
import typescriptModule from './modules/typescript/module.js';

export default [
  /**
   * Apply all common languageOptions, linterOptions, plugins, rules and settings to all supported
   * files. We do this first so as to ensure that any later, more specific, configuration objects
   * override this one.
   *
   * Extensions included:
   * - `.js`
   * - `.cjs`
   * - `.mjs`
   * - `.jsx`
   * - `.ts`
   * - `.cts`
   * - `.mts`
   * - `.tsx`
   *
   * We deliberately use two globs to avoid supporting `.mjsx`, `.mtsx`, `.cjsx` and `.ctsx` for now
   * as these are not agreed upon by the TypeScript - and wider JavaScript - ecosystem. For details,
   * please see https://github.com/microsoft/TypeScript/issues/44442.
   *
   * We use the `node` globals rather than `nodeBuiltin` to support the rare occasion where we
   * still need to use a `require` statement.
   *
   * Note: `languageOptions.ecmaVersion` is set to `latest` by default in ESLint but is being
   *       included here for the sake of clarity.
   *
   * Note: Some plugins (such as `import`) and parsers (such as `typescript`) require
   *       `languageOptions.parserOptions.ecmaVersion` to be specified. In the future, ideally, they
   *       should be refer to `languageOptions.ecmaVersion`.
   */
  {
    files: ['**/*.?([mc])[jt]s', '**/*.[jt]sx'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.builtin,
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {
      ...importModule.plugins,
    },
    rules: {
      ...coreModule.rules,
      ...importModule.rules,
    },
    settings: {
      ...importModule.settings,
    },
  },

  /**
   * Ensure Common JS files are treated correctly.
   *
   * Extensions included:
   * - `.cjs`
   * - `.cts`
   *
   * Note: `.cjs` is treated as Common JS by default in ESLint but is being included here for the
   *       sake of clarity.
   *
   * Note: `parserOptions.sourceType` is needed for some plugins (such as `import`) due to slight
   *       incompatibilities with the `flat` config approach. in the future this shouldn't be
   *       necessary.
   */
  {
    files: ['**/*.c[jt]s'],
    languageOptions: {
      parserOptions: {
        sourceType: 'commonjs',
      },
      sourceType: 'commonjs',
    },
  },

  /**
   * Ensure ES Module files are treated correctly.
   *
   * Extensions included:
   * - `.js`
   * - `.mjs`
   * - `.jsx`
   * - `.ts`
   * - `.mts`
   * - `.tsx`
   *
   * We deliberately use two globs to avoid supporting `.mjsx` and `.mtsx` for now as these are not
   * agreed upon by the TypeScript - and wider JavaScript - ecosystem. For details, please see
   * https://github.com/microsoft/TypeScript/issues/44442. This results in making us pick a single
   * `sourceType` type for `.jsx` and `.tsx` files on a per-package basis.
   *
   * Note: `.js` and `.mjs` are treated as ES Modules by default in ESLint but are being included
   *       here for the sake of clarity.
   *
   * Note: Any file that doesn't have a `sourceType` in ESLint is considered a module by default but
   *       we're choosing to be explicit here for the sake of clarity.
   *
   * Note: `parserOptions.sourceType` is needed for some plugins (such as `import`) due to slight
   *       incompatibilities with the `flat` config approach. in the future this shouldn't be
   *       necessary.
   */
  {
    files: ['**/*.?(m)[jt]s', '**/*.[jt]sx'],
    languageOptions: {
      parserOptions: {
        sourceType: 'module',
      },
      sourceType: 'module',
    },
  },

  /**
   * Ensure JSX files are treated correctly.
   *
   * Extensions included:
   * - `.jsx`
   * - `.tsx`
   *
   * We assume that the React module (plugins, rules and settings) and JSX-A11Y module (plugins and
   * rules) should only be applied to JSX files.
   */
  {
    files: ['**/*.[jt]sx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      ...jsxA11yModule.plugins,
    },
    rules: {
      ...jsxA11yModule.rules,
    },
  },

  /**
   * Ensure TypeScript files are treated correctly.
   *
   * Extensions included:
   * - `.ts`
   * - `.mts`
   * - `.cts`
   * - `.tsx`
   *
   * We assume that the TypeScript module (languageOptions, plugins and rules) should only be
   * applied to TypeScript files.
   *
   * We deliberately use two globs to avoid supporting `.mtsx` for now as it is not agreed upon by
   * the TypeScript - and wider JavaScript - ecosystem. For details, please see
   * https://github.com/microsoft/TypeScript/issues/44442.
   */
  {
    files: ['**/*.?([mc])ts', '**/*.tsx'],
    languageOptions: {
      ...typescriptModule.languageOptions,
    },
    plugins: {
      ...typescriptModule.plugins,
    },
    rules: {
      ...typescriptModule.rules,
    },
  },

  /**
   * Ensure Test files are treated correctly.
   *
   * Extensions included:
   * - `.test.js`
   * - `.test.cjs`
   * - `.test.mjs`
   * - `.test.jsx`
   * - `.test.ts`
   * - `.test.cts`
   * - `.test.mts`
   * - `.test.tsx`
   *
   * We assume that the Jest module (globals, plugins and rules) should only be applied to test
   * files.
   *
   * We deliberately use two globs to avoid supporting `.mjsx` and `.mtsx` for now as these are not
   * agreed upon by the TypeScript - and wider JavaScript - ecosystem. For details, please see
   * https://github.com/microsoft/TypeScript/issues/44442.
   */
  {
    files: ['**/*.test.?([mc])[jt]s', '**/*.test.[jt]sx'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {},
    rules: {},
  },
];
