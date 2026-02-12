export default {
  /**
   * Enforce `return` statements in callbacks of array methods.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/array-callback-return
   *
   * Rationale: Array map, reduce, filter, etc should always return values in order to correctly
   *            generate a new array. forEach should never return as the result would be discarded.
   */
  'array-callback-return': ['error', { checkForEach: true }],

  /**
   * Require `super()` calls in constructors.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/constructor-super
   *
   * Rationale: Constructors should always call super().
   */
  'constructor-super': 'error',

  /**
   * Enforce "for" loop update clause moving the counter in the right direction.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/for-direction
   *
   * Rationale: Infinite loops are usually a sign of a mistake. If intentional, use a while loop.
   */
  'for-direction': 'error',

  /**
   * Enforce `return` statements in getters.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/getter-return
   *
   * Rationale: Getters are expected to always return a value.
   */
  'getter-return': 'error',

  /**
   * Disallow using an async function as a Promise executor.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-async-promise-executor
   *
   * Rationale: async Promise executors are usually a sign of a mistake.
   */
  'no-async-promise-executor': 'error',

  /**
   * Disallow `await` inside of loops.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-await-in-loop
   *
   * Rationale: Using await inside a loop forces all async actions to be performed in series rather
   *            than in parallel. Better to use Promise.all to perform then in parallel.
   */
  'no-await-in-loop': 'error',

  /**
   * Disallow reassigning class members.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-class-assign
   *
   * Rationale: Class declarations shouldn't be modified.
   */
  'no-class-assign': 'error',

  /**
   * Disallow comparing against -0.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-compare-neg-zero
   *
   * Rationale: Comparing against -0 doesn't work as intended. Use Object.is(x, -0) instead.
   */
  'no-compare-neg-zero': 'error',

  /**
   * Disallow assignment operators in conditional expressions.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-cond-assign
   *
   * Rationale: Assignment in a conditional statement is usually a mistake.
   */
  'no-cond-assign': ['error', 'always'],

  /**
   * Disallow reassigning `const` variables.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-const-assign
   *
   * Rationale: Reassigning a const will cause a runtime error.
   */
  'no-const-assign': 'error',

  /**
   * Disallow expressions where the operation doesn't affect the value.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-constant-binary-expression
   *
   * Rationale: Comparisons which always evaluate to true or false are usually a mistake.
   */
  'no-constant-binary-expression': 'error',

  /**
   * Disallow constant expressions in conditions.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-constant-condition
   *
   * Rationale: A condition which always evaluates to true or false is usually a mistake.
   */
  'no-constant-condition': 'error',

  /**
   * Disallow returning value from constructor.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-constructor-return
   *
   * Rationale: Returning from a constructor is usually a mistake.
   */
  'no-constructor-return': 'error',

  /**
   * Disallow control characters in regular expressions.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-control-regex
   *
   * Rationale: Control characters are special, invisible ASCII characters. Including them in a
   *            regex is usually a mistake.
   */
  'no-control-regex': 'error',

  /**
   * Disallow the use of `debugger`.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-debugger
   *
   * Rationale: The debugger statement will cause the browser to stop executing code, so it should
   *            never be used in production.
   */
  'no-debugger': 'error',

  /**
   * Disallow duplicate arguments in `function` definitions.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-dupe-args
   *
   * Rationale: If a function has multiple parameters with the same name, the last occurrence will
   *            take precedence, with earlier ones ignored. Therefore all parameters should be
   *            unique.
   */
  'no-dupe-args': 'error',

  /**
   * Disallow duplicate class members.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-dupe-class-members
   *
   * Rationale: When class members are declared multiple times, the last declaration takes
   *            precedence which can lead to unexpected behaviour.
   */
  'no-dupe-class-members': 'error',

  /**
   * Disallow duplicate conditions in if-else-if chains.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-dupe-else-if
   *
   * Rationale: Identical test conditions in an if-else-if should be combined into one.
   */
  'no-dupe-else-if': 'error',

  /**
   * Disallow duplicate keys in object literals.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-dupe-keys
   *
   * Rationale: Duplicate object keys can cause unexpected behaviour.
   */
  'no-dupe-keys': 'error',

  /**
   * Disallow duplicate case labels.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-duplicate-case
   *
   * Rationale: Duplicate switch cases should be combined into one.
   */
  'no-duplicate-case': 'error',

  /**
   * Disallow duplicate module imports.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-duplicate-imports
   *
   * Rationale: Replaced by import/no-duplicates.
   */
  'no-duplicate-imports': 'off',

  /**
   * Disallow empty character classes in regular expressions.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-empty-character-class
   *
   * Rationale: Empty character classes don't match anything and are therefore redundant.
   */
  'no-empty-character-class': 'error',

  /**
   * Disallow empty destructuring patterns.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-empty-pattern
   *
   * Rationale: Empty destructuring patterns don't create any variables.
   */
  'no-empty-pattern': 'error',

  /**
   * Disallow reassigning exceptions in `catch` clauses.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-ex-assign
   *
   * Rationale: Reassigning an exception in a catch clause means the original exception can no
   *            longer be accessed.
   */
  'no-ex-assign': 'error',

  /**
   * Disallow fallthrough of `case` statements.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-fallthrough
   *
   * Rationale: In general, a matching case should end execution of the switch statement.
   */
  'no-fallthrough': 'error',

  /**
   * Disallow reassigning `function` declarations.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-func-assign
   *
   * Rationale: Reassigning a function declaration is usually accidental.
   */
  'no-func-assign': 'error',

  /**
   * Disallow assigning to imported bindings.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-import-assign
   *
   * Rationale: Modifying imported bindings can cause runtime errors.
   */
  'no-import-assign': 'error',

  /**
   * Disallow variable or `function` declarations in nested blocks.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-inner-declarations
   *
   * Rationale: var and function declarations in nested blocks can be problematic due to hoisting.
   */
  'no-inner-declarations': ['error', 'both'],

  /**
   * Disallow invalid regular expression strings in `RegExp` constructors.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-invalid-regexp
   *
   * Rationale: Invalid regex characters will throw a runtime syntax error.
   */
  'no-invalid-regexp': 'error',

  /**
   * Disallow irregular whitespace.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-irregular-whitespace
   *
   * Rationale: Invalid or irregular whitespace causes issues with ES5+ parsers.
   */
  'no-irregular-whitespace': 'error',

  /**
   * Disallow literal numbers that lose precision.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-loss-of-precision
   *
   * Rationale: JavaScript Numbers can only hold a certain number of digits. Additional digits will
   *            be lost in the conversion to the Number type, resulting in unexpected behaviour.
   */
  'no-loss-of-precision': 'error',

  /**
   * Disallow characters which are made with multiple code points in character class syntax.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-misleading-character-class
   *
   * Rationale: RegExp character class syntax cannot handle characters which are made with multiple
   *            code points.
   */
  'no-misleading-character-class': 'error',

  /**
   * Disallow `new` operators with global non-constructor functions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
   *
   * Rationale: Global functions without a constructor should not be instantiated with new.
   */
  'no-new-native-nonconstructor': 'error',

  /**
   * Disallow `new` operators with the `Symbol` object.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-new-symbol
   *
   * Rationale: The Symbol object is not intended to be used with the new operator.
   */
  'no-new-symbol': 'error',

  /**
   * Disallow calling global object properties as functions.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-obj-calls
   *
   * Rationale: Global object properties cannot be called as functions or instantiated with new.
   */
  'no-obj-calls': 'error',

  /**
   * Disallow returning values from Promise executor functions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-promise-executor-return
   *
   * Rationale: Promise executors should either resolve or reject, not return.
   */
  'no-promise-executor-return': 'error',

  /**
   * Disallow calling some `Object.prototype` methods directly on objects.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-prototype-builtins
   *
   * Rationale: We're more likely to need these object methods than we are to create custom object
   *            prototypes.
   */
  'no-prototype-builtins': 'off',

  /**
   * Disallow assignments where both sides are exactly the same.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-self-assign
   *
   * Rationale: Self-assignments do nothing and can be removed.
   */
  'no-self-assign': 'error',

  /**
   * Disallow comparisons where both sides are exactly the same.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-self-compare
   *
   * Rationale: These comparisons will always be true and are therefore redundant.
   */
  'no-self-compare': 'error',

  /**
   * Disallow returning values from setters.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-setter-return
   *
   * Rationale: Setters should not return values.
   */
  'no-setter-return': 'error',

  /**
   * Disallow sparse arrays.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-sparse-arrays
   *
   * Rationale: Sparse arrays are confusing, it's better to be explicit about your intentions.
   */
  'no-sparse-arrays': 'error',

  /**
   * Disallow template literal placeholder syntax in regular strings.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-template-curly-in-string
   *
   * Rationale: Template literal placeholders in non-template strings are likely a mistake where the
   *            wrong quote type has been used.
   */
  'no-template-curly-in-string': 'error',

  /**
   * Disallow `this`/`super` before calling `super()` in constructors.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-this-before-super
   *
   * Rationale: This results in a reference error and should be avoided.
   */
  'no-this-before-super': 'error',

  /**
   * Disallow the use of undeclared variables unless mentioned in `global` comments.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-undef
   *
   * Rationale: The use of undefined variables is likely a typo.
   */
  'no-undef': 'error',

  /**
   * Disallow confusing multiline expressions.
   *
   * Recommended: If using Prettier then Possibly else Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-unexpected-multiline
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/README.md#no-unexpected-multiline
   *
   * Rationale: Conflicts with Prettier.
   */
  'no-unexpected-multiline': 'off',

  /**
   * Disallow unmodified loop conditions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
   *
   * Rationale: These can result in unintentional infinite loops.
   */
  'no-unmodified-loop-condition': 'error',

  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-unreachable
   *
   * Rationale: Unreachable code will never be executed, so is probably a mistake.
   */
  'no-unreachable': 'error',

  /**
   * Disallow loops with a body that allows only one iteration.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-unreachable-loop
   *
   * Rationale: Loops that cannot progress beyond the first iteration are probably mistakes, or
   *            should be refactored to remove the loop.
   */
  'no-unreachable-loop': 'error',

  /**
   * Disallow control flow statements in `finally` blocks.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-unsafe-finally
   *
   * Rationale: Control flow statements (return, throw, etc.) in try and catch blocks are suspended
   *            until the finally block has executed. Therefore control flow statements inside a
   *            finally block will take precedence over those in the try or catch blocks, leading to
   *            unexpected behaviour.
   */
  'no-unsafe-finally': 'error',

  /**
   * Disallow negating the left operand of relational operators.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-unsafe-negation
   *
   * Rationale: This is usually a mistake, e.g. `if (!key in object)` instead of
   *            `if (!(key in object))`.
   */
  'no-unsafe-negation': 'error',

  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
   *
   * Rationale: In these contexts, the undefined value would cause an error.
   */
  'no-unsafe-optional-chaining': 'error',

  /**
   * Disallow unused private class members.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-unused-private-class-members
   *
   * Rationale: Unused private class members can be removed completely.
   */
  'no-unused-private-class-members': 'error',

  /**
   * Disallow unused variables.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-unused-vars
   *
   * Rationale: Unused variables can be removed completely.
   */
  'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

  /**
   * Disallow the use of variables before they are defined.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-use-before-define
   *
   * Rationale: In ES6+, let and const assignments are not hoisted and cannot be used before they
   *            are declared.
   */
  'no-use-before-define': 'error',

  /**
   * Disallow useless backreferences in regular expressions.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-useless-backreference
   *
   * Rationale: Backreferences that only match zero-length can be removed completely.
   */
  'no-useless-backreference': 'error',

  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/require-atomic-updates
   *
   * Rationale: These race conditions can be subtle but are easily fixed by a refactor.
   */
  'require-atomic-updates': 'error',

  /**
   * Require calls to `isNaN()` when checking for `NaN`.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/use-isnan
   *
   * Rationale: NaN is not equal to anything, so nothing should be compared with it directly. Use
   *            isNaN() instead.
   */
  'use-isnan': 'error',

  /**
   * Enforce comparing `typeof` expressions against valid strings.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/valid-typeof
   *
   * Rationale: Enforces the use of valid strings when checking typeof, helping to catch typos.
   */
  'valid-typeof': ['error', { requireStringLiterals: true }],
};
