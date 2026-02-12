export default {
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
   *
   * Rationale: Usage of type-only markers comes in two forms and both have valid uses.
   */
  'import/consistent-type-specifier-style': 'off',

  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
   *
   * Rationale: Usage of this rule ties the code to webpack.
   */
  'import/dynamic-import-chunkname': 'off',

  /**
   * Ensure all exports appear after other statements.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
   *
   * Rationale: This is not always practical.
   */
  'import/exports-last': 'off',

  /**
   * Ensure consistent use of file extension within the import path.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
   *
   * Rationale: This rule is made to work with modern tooling and resolution algorithms.
   */
  // 'import/extensions': ['error', { ts: 'always', tsx: 'always' }],
  'import/extensions': 'off',

  /**
   * Ensure all imports appear before other statements.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
   *
   * Rationale: Keeping all imports at the start of a file ensures that the import-process-export
   *            flow of a file is maintained.
   */
  'import/first': 'error',

  /**
   * Prefer named exports to be grouped together in a single export declaration.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
   *
   * Rationale: Forcing exports to be grouped together requires unnecessary code when simply
   *            prepending a statement with `export` suffices.
   */
  'import/group-exports': 'off',

  /**
   * Enforce the maximum number of dependencies a module can have.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
   *
   * Rationale: Limiting the number of dependencies that a module can have risks forcing code and
   *            design decisions based on an arbitrary number.
   */
  'import/max-dependencies': 'off',

  /**
   * Enforce a newline after import statements.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
   *
   * Rationale: Separating imports from code with a newline improves readability.
   */
  'import/newline-after-import': ['error', { considerComments: true }],

  /**
   * Forbid anonymous values as default exports.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
   *
   * Rationale: Forcing default exports to have a name is unnecessary.
   */
  'import/no-anonymous-default-export': 'off',

  /**
   * Forbid default exports.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
   *
   * Rationale: While usage of default exports should be carefully considered, it is useful to allow
   *            them as an option.
   */
  'import/no-default-export': 'off',

  /**
   * Forbid repeated import of the same module in multiple places.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
   *
   * Rationale: Multiple imports that resolve to the same module can be confusing and bloat the
   *            import section of a file.
   *
   * Note: We have enabled `considerQueryString` to support future specifier possibilities. Also,
   *       this rule will need to be disabled on a file-by-file basis if importing a namespace and
   *       a default is required.
   */
  'import/no-duplicates': ['error', { considerQueryString: true }],

  /**
   * Forbid named default exports.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
   *
   * Rationale: Importing a default import only to rename it within the import makes it look like a
   *            named import and is unnecessary as default imports can be named by using the
   *            standard default import syntax.
   */
  'import/no-named-default': 'error',

  /**
   * Forbid named exports.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
   *
   * Rationale: Disallowing named exports would be very problematic in most codebases.
   */
  'import/no-named-export': 'off',

  /**
   * Forbid namespace (a.k.a. "wildcard" *) imports.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
   *
   * Rationale: While usage of namespace imports should be carefully considered, it is useful to
   *            allow them as an option.
   */
  'import/no-namespace': 'off',

  /**
   * Forbid unassigned imports.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
   *
   * Rationale: Usage of an import statement without any default, named or namespace imports is
   *            useful in some scenarios such as importing modules with side-effects or importing
   *            assets in some bundling environments.
   *
   * Note: This rule would be nice to use if it weren't for the cases where it would cause issues.
   */
  'import/no-unassigned-import': 'off',

  /**
   * Enforce a convention in module import order.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
   *
   * Rationale: Keeping imports in a standardised order makes it simple to understand what category
   *            the import is in and removes the ambiguity where to place an import.
   */
  'import/order': [
    'error',
    {
      alphabetize: { order: 'asc', caseInsensitive: true },
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
    },
  ],

  /**
   * Prefer a default export if module exports a single name or multiple names.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
   *
   * Rationale: Forcing a module to have a default export follows a default-export/import-first
   *            approach which is not the approach taken elsewhere in this configuration.
   */
  'import/prefer-default-export': 'off',
};
