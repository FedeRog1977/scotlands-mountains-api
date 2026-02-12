export default {
  /**
   * Ensure a default export is present, given a default import.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
   *
   * Rationale: Default imports are only valid if there is a corresponding default export.
   *
   * Note: In a TypeScript-based package, this rule is unnecessary.
   */
  'import/default': 'error',

  /**
   * Ensure named imports correspond to a named export in the remote file.
   *
   * Recommended: Yes
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
   *
   * Rationale: Named imports are only valid if there is a corresponding named export.
   *
   * Note: In a TypeScript-based package, this rule is unnecessary.
   */
  'import/named': 'off', // TODO: this should be off for TS as type imports are needed otherwise

  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
   *
   * Rationale: Dereferenced namespace imports are only valid if the dereferenced property exists
   *            as a named export in the exporting module.
   *
   * Note: In a TypeScript-based package, this rule is unnecessary.
   */
  'import/namespace': 'error',

  /**
   * Forbid import of modules using absolute paths.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
   *
   * Rationale: Usage of absolute paths is not portable between environments.
   */
  'import/no-absolute-path': 'error',

  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
   *
   * Rationale: Cyclic dependencies often indicate an issue with dependency structure.
   *
   * Note: There are rare cases where cyclic dependencies are suitable. For these cases, this rule
   *       can be turned off as needed.
   */
  'import/no-cycle': 'error',

  /**
   * Forbid require() calls with expressions.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
   *
   * Rationale: Usage of dynamic require calls make static analysis of CommonJS code even harder to
   *            perform than it already was.
   */
  'import/no-dynamic-require': 'error',

  /**
   * Forbid importing the submodules of other modules.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
   *
   * Rationale: This rule does not take into account modern tooling options such as the `exports`
   *            field in a `package.json` file.
   */
  'import/no-internal-modules': 'off',

  /**
   * Forbid importing packages through relative paths.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
   *
   * Rationale: Importing modules relatively from other packages within a monorepo causes issues for
   *            modern tooling - such as circumventing the purpose of the `exports` field in a
   *            `package.json` file.
   */
  'import/no-relative-packages': 'error',

  /**
   * Forbid importing modules from parent directories.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
   *
   * Rationale: Disallowing imports from a parent directory causes issues for some filesystem
   *            layouts that are otherwise benenficial to readability and understanding.
   */
  'import/no-relative-parent-imports': 'off',

  /**
   * Enforce which files can be imported in a given folder.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
   *
   * Rationale: Restricting which files can be imported based on where the import takes place is
   *            complicated to define in a generalised manner.
   */
  'import/no-restricted-paths': 'off',

  /**
   * Forbid a module from importing itself.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
   *
   * Rationale: Importing a module from within itself is an anti-pattern and should not be done.
   */
  'import/no-self-import': 'error',

  /**
   * Ensure imports point to a file/module that can be resolved.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
   *
   * Rationale: Being certain that imports always resolve ensures that the correct specifiers are
   *            being used.
   *
   * Note: In a TypeScript-based package, this rule is unnecessary.
   */
  'import/no-unresolved': 'error',

  /**
   * Forbid unnecessary path segments in import and require statements.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
   *
   * Rationale: Importing modules with extraneous segments within the specifier makes code and its
   *            dependencies harder to understand.
   */
  'import/no-useless-path-segments': 'error',

  /**
   * Forbid webpack loader syntax in imports.
   *
   * See: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
   *
   * Rationale: Usage of webpack loader syntax in imports ties code to being only usable in webpack.
   */
  'import/no-webpack-loader-syntax': 'error',
};
