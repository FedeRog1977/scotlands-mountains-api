export default {
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/block-spacing
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L29
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/block-spacing': 'off',

  /**
   * Enforce consistent brace style for blocks.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/brace-style
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L97
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/brace-style': 'off',

  /**
   * Require or disallow trailing commas.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/comma-dangle
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L98
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/comma-dangle': 'off',

  /**
   * Enforce consistent spacing before and after commas.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/comma-spacing
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L99
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/comma-spacing': 'off',

  /**
   * Enforce default parameters to be last.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/default-param-last
   *
   * Rationale: Putting optional parameters last allows them to be omitted.
   */
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'error',

  /**
   * Enforce dot notation whenever possible.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/dot-notation
   *
   * This rule requires type information from `@typescript-eslint/parser` with the `project` option.
   *
   * Rationale: Dot notation works better with autocomplete, is easier to read and minifies better.
   */
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 'error',

  /**
   * Require or disallow spacing between function identifiers and their invocations.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/func-call-spacing
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L100
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/func-call-spacing': 'off',

  /**
   * Enforce consistent indentation.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/indent
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L101
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/indent': 'off',

  /**
   * Require or disallow initialization in variable declarations.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/init-declarations
   *
   * Rationale: Initialising variables at declaration is more readable and less error-prone.
   */
  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': 'error',

  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/key-spacing
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L45
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/key-spacing': 'off',

  /**
   * Enforce consistent spacing before and after keywords.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/keyword-spacing
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L102
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/keyword-spacing': 'off',

  /**
   * Require empty lines around comments.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/lines-around-comment
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L11
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/lines-around-comment': 'off',

  /**
   * Require or disallow an empty line between class members.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/lines-between-class-members
   *
   * Rationale: Keeping lines between class members makes for more readable code.
   */
  'lines-between-class-members': 'error',

  /**
   * Disallow generic Array constructors.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-array-constructor
   *
   * Rationale: Using the Array constructor is potentially error-prone and should be avoided.
   */
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',

  /**
   * Disallow duplicate class members.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-dupe-class-members
   *
   * Rationale: When class members are declared multiple times, the last declaration takes
   *            precedence which can lead to unexpected behaviour.
   */
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',

  /**
   * Disallow duplicate imports.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-duplicate-imports
   *
   * Rationale: Replaced by import/no-duplicates.
   */
  '@typescript-eslint/no-duplicate-imports': 'off',

  /**
   * Disallow empty functions.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-empty-function
   *
   * Rationale: The intention of an empty function isn't clear. Add a comment to explain its
   *            purpose.
   */
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'error',

  /**
   * Disallow unnecessary parentheses.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/no-extra-parens
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L104
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/no-extra-parens': 'off',

  /**
   * Disallow unnecessary semicolons.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/no-extra-semi
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L105
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/no-extra-semi': 'off',

  /**
   * Disallow the use of eval()-like methods.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-implied-eval
   *
   * This rule requires type information from `@typescript-eslint/parser` with the `project` option.
   *
   * Rationale: Implicit eval calls (e.g. via setTimeout) have the same security risks as actual
   *            eval calls.
   */
  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': 'error',

  /**
   * Disallow this keywords outside of classes or class-like objects.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-invalid-this
   *
   * Rationale: Use of this where it can be undefined can introduce errors.
   */
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',

  /**
   * Disallow function declarations that contain unsafe references inside loop statements.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-loop-func
   *
   * Rationale: These unsafe declarations can lead to code that doesn't work as expected.
   */
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',

  /**
   * Disallow literal numbers that lose precision.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-loss-of-precision
   *
   * Rationale: JavaScript Numbers can only hold a certain number of digits. Additional digits will
   *            be lost in the conversion to the Number type, resulting in unexpected behaviour.
   */
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 'error',

  /**
   * Disallow magic numbers.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-magic-numbers
   *
   * Rationale: This sounds nice in theory but in practice naming every number can be laborious and
   *            unnecessary.
   */
  '@typescript-eslint/no-magic-numbers': 'off',

  /**
   * Disallow variable redeclaration.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-redeclare
   *
   * Rationale: Declaring a variable multiple times is confusing.
   */
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',

  /**
   * Disallow specified modules when loaded by import.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-restricted-imports
   *
   * Rationale: Always import from the core @breeze/basics package rather than an implementation.
   */
  'no-restricted-imports': 'off',
  '@typescript-eslint/no-restricted-imports': [
    'error',
    {
      patterns: [
        {
          group: ['@breeze/basics-*/*', '!@breeze/basics-*/styles'],
          message: 'Import from @breeze/basics instead',
        },
      ],
    },
  ],

  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-shadow
   *
   * Rationale: Shadow variable names make it hard to understand which variable is being used.
   */
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': 'error',

  /**
   * Disallow throwing literals as exceptions.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-throw-literal
   *
   * This rule requires type information from `@typescript-eslint/parser` with the `project` option.
   *
   * Rationale: It is good practice to only throw the Error object or an object which extends it.
   */
  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': 'error',

  /**
   * Disallow unused expressions.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-unused-expressions
   *
   * Rationale: These expressions have no effect on the state of the program and can be removed.
   */
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',

  /**
   * Disallow unused variables.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-unused-vars
   *
   * Rationale: Unused variables can be removed completely.
   */
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],

  /**
   * Disallow the use of variables before they are defined.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-use-before-define
   *
   * Rationale: In ES6+, let and const assignments are not hoisted and cannot be used before they
   *            are declared.
   */
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': 'error',

  /**
   * Disallow unnecessary constructors.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-useless-constructor
   *
   * Rationale: There's no need to provide an empty constructor, or one which simply delegates to
   *            its parent, because ES6 does this by default.
   */
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',

  /**
   * Enforce consistent spacing inside braces.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/object-curly-spacing
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L106
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/object-curly-spacing': 'off',

  /**
   * Require or disallow padding lines between statements.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/padding-line-between-statements
   *
   * Rationale: Having a blank line before a `return` statement makes code flow easier to
   *            understand.
   */
  'padding-line-between-statements': 'off',
  '@typescript-eslint/padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'return' },
  ],

  /**
   * Enforce the consistent use of either backticks, double, or single quotes.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/quotes
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L17
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/quotes': 'off',

  /**
   * Disallow async functions which have no await expression.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/require-await
   *
   * This rule requires type information from `@typescript-eslint/parser` with the `project` option.
   *
   * Rationale: async functions without an await usually don't need to be asynchronous.
   */
  'require-await': 'off',
  '@typescript-eslint/require-await': 'error',

  /**
   * Enforce consistent returning of awaited values.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/return-await
   *
   * This rule requires type information from `@typescript-eslint/parser` with the `project` option.
   *
   * Rationale: Returning await can cause performance issues and is usually a misuse of async.
   */
  'no-return-await': 'off',
  '@typescript-eslint/return-await': 'error',

  /**
   * Require or disallow semicolons instead of ASI.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/semi
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L107
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/semi': 'off',

  /**
   * Enforce consistent spacing before blocks.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/space-before-blocks
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L108
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/space-before-blocks': 'off',

  /**
   * Enforce consistent spacing before function parenthesis.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/space-before-function-paren
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L109
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/space-before-function-paren': 'off',

  /**
   * Require spacing around infix operators.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://typescript-eslint.io/rules/space-infix-ops
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L110
   *
   * Rationale: Clashes with Prettier.
   */
  '@typescript-eslint/space-infix-ops': 'off',
};
