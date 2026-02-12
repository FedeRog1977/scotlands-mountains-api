export default {
  /**
   * Forbid AMD require and define calls.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
   *
   * Rationale: Usage of the AMD module system is deprecated and should not be used.
   */
  'import/no-amd': 'error',

  /**
   * Forbid CommonJS require calls and module.exports or exports.*.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
   *
   * Rationale: Usage of CommonJS is deprecated however it is still commonly used and will continue
   *            to be until ES Modules gain traction.
   */
  'import/no-commonjs': 'off',

  /**
   * Forbid import statements with CommonJS module.exports.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
   *
   * Rationale: Confusion between `import`/`export` and `require`/`exports`/`module.exports`
   *            statements can cause very hard to understand issues.
   *
   * Note: There may be cases where this rule should be turned off. When such a case arises, it
   *       should be turned off in the specific file using a comment.
   */
  'import/no-import-module-exports': 'error',

  /**
   * Forbid Node.js builtin modules.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
   *
   * Rationale: Disallowing the use of Node.js builtins entirely is silly for isomorphic package(s).
   */
  'import/no-nodejs-modules': 'off',

  /**
   * Forbid potentially ambiguous parse goal (script vs. module).
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
   *
   * Rationale: This is unnecessary in our environment.
   */
  'import/unambiguous': 'off',
};
