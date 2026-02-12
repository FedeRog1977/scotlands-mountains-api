export default {
  /**
   * Require `return` statements to either always or never specify values.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/consistent-return
   *
   * Rationale: TypeScript will handle this for us.
   */
  'consistent-return': 'off',

  /**
   * Require `default` cases in `switch` statements.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/default-case
   *
   * Rationale: TypeScript will handle this for us.
   */
  'default-case': 'off',

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
  'import/named': 'off',

  /**
   * Require or disallow strict mode directives.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/strict
   *
   * Rationale: Strict mode directives are unnecessary when working with TypeScript and ESModules.
   */
  strict: ['error', 'never'],
};
