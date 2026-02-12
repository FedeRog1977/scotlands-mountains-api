export default {
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
   *
   * Rationale: Ensuring exports follow the specification makes importing and exporting more
   *            reliable.
   */
  'import/export': 'error',

  /**
   * Forbid imported names marked with @deprecated documentation tag.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
   *
   * Rationale: Ensuring that usage of deprecated code is kept to a minimum helps keep the codebase
   *            modern and up to standard.
   *
   * Note: In exceptional cases, this rule can be turned off if necessary.
   */
  'import/no-deprecated': 'error',

  /**
   * Forbid empty named import blocks.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
   *
   * Rationale: Using an import statement with no entries in the named section is the same as
   *            importing just the filename with no named or default exports specified.
   */
  'import/no-empty-named-blocks': 'error',

  /**
   * Forbid the use of extraneous packages.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
   *
   * Rationale: Importing extraneous dependencies risks creating phantom dependencies that cause
   *            packages to not function in the same way between different environments.
   */
  'import/no-extraneous-dependencies': 'error',

  /**
   * Forbid the use of mutable exports with var or let.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
   *
   * Rationale: Usage of `var` and `let` indicate a desire for mutation which, when used as an
   *            export, may indicate a code smell.
   */
  'import/no-mutable-exports': 'error',

  /**
   * Forbid use of exported name as identifier of default export.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
   *
   * Rationale: Importing a default export using the name of a named export from the same module is
   *            likely an indicator of a mistake.
   */
  'import/no-named-as-default': 'error',

  /**
   * Forbid use of exported name as property of default export.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
   *
   * Rationale: Importing a default export and access a member property of it using the name of a
   *            named export from the same module is likely an indicator of a mistake.
   *
   * Note: The combination of ES Modules, CommonJS and TypeScript may require this rule to be turned
   *       off until the ecosystem is more stable.
   */
  'import/no-named-as-default-member': 'error',

  /**
   * Forbid modules without exports, or exports without matching import in another module.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
   *
   * Rationale: Usage of this rule is not compatible with all environments (for example, a monorepo)
   *            and doesn't take into account modern `package.json` concepts such as `exports`.
   */
  'import/no-unused-modules': 'off',
};
