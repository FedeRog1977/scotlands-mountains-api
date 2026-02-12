export default {
  /**
   * Enforce getter and setter pairs in objects and classes.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/accessor-pairs
   *
   * Rationale: Setters should always have an accompanying getter.
   */
  'accessor-pairs': 'error',

  /**
   * Require braces around arrow function bodies.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/arrow-body-style
   *
   * Rationale: Using implicit return where possible is cleaner and more readable.
   */
  'arrow-body-style': 'error',

  /**
   * Enforce the use of variables within the scope they are defined.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/block-scoped-var
   *
   * Rationale: Using variables outside the scope where they are defined can lead to unexpected
   *            behaviour.
   */
  'block-scoped-var': 'error',

  /**
   * Enforce camelcase naming convention.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/camelcase
   *
   * Rationale: A consistent naming convention aids code readbility.
   */
  camelcase: 'error',

  /**
   * Enforce or disallow capitalization of the first letter of a comment.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/capitalized-comments
   *
   * Rationale: We should aim to be consistent but this rule can be overly restrictive.
   */
  'capitalized-comments': 'off',

  /**
   * Enforce that class methods utilize `this`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/class-methods-use-this
   *
   * Rationale: This rule is overly restrictive.
   */
  'class-methods-use-this': 'off',

  /**
   * Enforce a maximum cyclomatic complexity allowed in a program.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/complexity
   *
   * Rationale: We should aim to reduce complexity but this rule is overly restrictive.
   */
  complexity: 'off',

  /**
   * Require `return` statements to either always or never specify values.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/consistent-return
   *
   * Rationale: For consistency, either always or never specify return values.
   */
  'consistent-return': 'error',

  /**
   * Enforce consistent naming when capturing the current execution context.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/consistent-this
   *
   * Rationale: A consistent style aids readability and maintainability.
   */
  'consistent-this': 'error',

  /**
   * Enforce consistent brace style for all control statements.
   *
   * Recommended: If using Prettier then Possibly else No
   *
   * See: https://eslint.org/docs/latest/rules/curly
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/README.md#curly
   *
   * Rationale: A consistent style aids readability and maintainability.
   */
  curly: 'error',

  /**
   * Require `default` cases in `switch` statements.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/default-case
   *
   * Rationale: Unhandled cases are often a mistake. Either handle them or make the omission
   *            explicit.
   */
  'default-case': 'error',

  /**
   * Enforce default clauses in switch statements to be last.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/default-case-last
   *
   * Rationale: Putting the default case last is more readable and less error-prone.
   */
  'default-case-last': 'error',

  /**
   * Enforce default parameters to be last.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/default-param-last
   *
   * Rationale: Putting optional parameters last allows them to be omitted.
   */
  'default-param-last': 'error',

  /**
   * Enforce dot notation whenever possible.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/dot-notation
   *
   * Rationale: Dot notation works better with autocomplete, is easier to read and minifies better.
   */
  'dot-notation': 'error',

  /**
   * Require the use of `===` and `!==`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/eqeqeq
   *
   * Rationale: Type-safe comparisons are considered safer than their standard counterparts.
   */
  eqeqeq: 'error',

  /**
   * Require function names to match the name of the variable or property to which they are
   * assigned.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/func-name-matching
   *
   * Rationale: Mismatched names can cause confusion and make code less readable.
   */
  'func-name-matching': 'error',

  /**
   * Require or disallow named `function` expressions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/func-names
   *
   * Rationale: Named function expressions give more useful error messages.
   */
  'func-names': 'error',

  /**
   * Enforce the consistent use of either `function` declarations or expressions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/func-style
   *
   * Rationale: We should use function expressions where possible, but declarations are useful for
   *            things like overloads.
   */
  'func-style': 'off',

  /**
   * Require grouped accessor pairs in object literals and classes.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/grouped-accessor-pairs
   *
   * Rationale: Grouping accessor pairs aids readability and maintainability.
   */
  'grouped-accessor-pairs': 'error',

  /**
   * Require `for-in` loops to include an `if` statement.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/guard-for-in
   *
   * Rationale: Using for-in loops without checking properties can result in errors, because the
   *            object will have properties inherited through the prototype chain.
   */
  'guard-for-in': 'error',

  /**
   * Disallow specified identifiers.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/id-denylist
   *
   * Rationale: Variables should always be descriptive and non-generic but the actual name should be
   *            up to the developer.
   */
  'id-denylist': 'off',

  /**
   * Enforce minimum and maximum identifier lengths.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/id-length
   *
   * Rationale: Variables should always be descriptive and non-generic but the actual name should be
   *            up to the developer.
   */
  'id-length': 'off',

  /**
   * Require identifiers to match a specified regular expression.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/id-match
   *
   * Rationale: This should be left to developer discretion.
   */
  'id-match': 'off',

  /**
   * Require or disallow initialization in variable declarations.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/init-declarations
   *
   * Rationale: Initialising variables at declaration is more readable and less error-prone.
   */
  'init-declarations': 'error',

  /**
   * Require or disallow logical assignment logical operator shorthand.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/logical-assignment-operators
   *
   * Rationale: These are uncommon and hard to read.
   */
  'logical-assignment-operators': ['error', 'never'],

  /**
   * Enforce a maximum number of classes per file.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/max-classes-per-file
   *
   * Rationale: Having one class per file makes them easier to find and keeps each file limited to
   *            a single responsibility.
   */
  'max-classes-per-file': 'error',

  /**
   * Enforce a maximum depth that blocks can be nested.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/max-depth
   *
   * Rationale: Deeply nested logic is hard to follow and should be split out.
   */
  'max-depth': 'error',

  /**
   * Enforce a maximum number of lines per file.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/max-lines
   *
   * Rationale: This is overly restrictive and should be left to developer discretion.
   */
  'max-lines': 'off',

  /**
   * Enforce a maximum number of lines of code in a function.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/max-lines-per-function
   *
   * Rationale: This is overly restrictive and should be left to developer discretion.
   */
  'max-lines-per-function': 'off',

  /**
   * Enforce a maximum depth that callbacks can be nested.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/max-nested-callbacks
   *
   * Rationale: This should be left to developer discretion.
   */
  'max-nested-callbacks': 'off',

  /**
   * Enforce a maximum number of parameters in function definitions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/max-params
   *
   * Rationale: We should aim to keep functions small, but the number of parameters should be left
   *            to developer discretion.
   */
  'max-params': 'off',

  /**
   * Enforce a maximum number of statements allowed in function blocks.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/max-statements
   *
   * Rationale: We should aim to keep functions simple, but the number of statements should be left
   *            to developer discretion.
   */
  'max-statements': 'off',

  /**
   * Enforce a particular style for multiline comments.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/multiline-comment-style
   *
   * Rationale: This rule is overly restrictive.
   */
  'multiline-comment-style': 'off',

  /**
   * Require constructor names to begin with a capital letter.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/new-cap
   *
   * Rationale: Enforces consistent naming and usage of class constructors.
   */
  'new-cap': 'error',

  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-alert
   *
   * Rationale: These native dialogs are considered obtrusive and are better replaced with custom
   *            UI elements.
   */
  'no-alert': 'error',

  /**
   * Disallow `Array` constructors.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-array-constructor
   *
   * Rationale: Using the Array constructor is potentially error-prone and should be avoided.
   */
  'no-array-constructor': 'error',

  /**
   * Disallow bitwise operators.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-bitwise
   *
   * Rationale: The use of bitwise operators is rare, confusing and often a sign of a typo rather
   *            than intended usage.
   */
  'no-bitwise': 'error',

  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-caller
   *
   * Rationale: These methods are deprecated and disallowed in ES5+.
   */
  'no-caller': 'error',

  /**
   * Disallow lexical declarations in case clauses.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-case-declarations
   *
   * Rationale: Declarations in switch cases are available to the wider switch scope, which can lead
   *            to unintended side-effects. If variables are needed, wrap the case body in braces.
   */
  'no-case-declarations': 'error',

  /**
   * Disallow arrow functions where they could be confused with comparisons.
   *
   * Recommended: If using Prettier then Possibly else No
   *
   * See: https://eslint.org/docs/latest/rules/no-confusing-arrow
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/README.md#no-confusing-arrow
   *
   * Rationale: Clashes with Prettier.
   */
  'no-confusing-arrow': 'off',

  /**
   * Disallow the use of `console`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-console
   *
   * Rationale: While console methods are useful during development, they shouldn't be committed.
   */
  'no-console': 'error',

  /**
   * Disallow `continue` statements.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-continue
   *
   * Rationale: Code which uses continue can be refactor into a clearer structure.
   */
  'no-continue': 'error',

  /**
   * Disallow deleting variables.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-delete-var
   *
   * Rationale: Deleting object properties can lead to unexpected behaviour.
   */
  'no-delete-var': 'error',

  /**
   * Disallow division operators explicitly at the beginning of regular expressions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-div-regex
   *
   * Rationale: An equals at the start of a regex can be confused with a division operator. It can
   *            be wrapped in square brackets to make the regex valid.
   */
  'no-div-regex': 'error',

  /**
   * Disallow `else` blocks after `return` statements in `if` statements.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-else-return
   *
   * Rationale: These else blocks are unnecessary and only complicate the code.
   */
  'no-else-return': 'error',

  /**
   * Disallow empty block statements.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-empty
   *
   * Rationale: These blocks do nothing and are usually a sign of an incomplete refactor.
   */
  'no-empty': 'error',

  /**
   * Disallow empty functions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-empty-function
   *
   * Rationale: The intention of an empty function isn't clear. Add a comment to explain its
   *            purpose.
   */
  'no-empty-function': 'error',

  /**
   * Disallow empty static blocks.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-empty-static-block
   *
   * Rationale: These blocks do nothing and are usually a sign of an incomplete refactor.
   */
  'no-empty-static-block': 'error',

  /**
   * Disallow `null` comparisons without type-checking operators.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-eq-null
   *
   * Rationale: These comparisons will also match undefined, which may not be desired.
   */
  'no-eq-null': 'error',

  /**
   * Disallow the use of `eval()`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-eval
   *
   * Rationale: Use of eval is potentially dangerous.
   */
  'no-eval': 'error',

  /**
   * Disallow extending native types.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-extend-native
   *
   * Rationale: Modifying built-in objects can have unintended consequences.
   */
  'no-extend-native': 'error',

  /**
   * Disallow unnecessary calls to `.bind()`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-extra-bind
   *
   * Rationale: bind should only be used where necessary.
   */
  'no-extra-bind': 'error',

  /**
   * Disallow unnecessary boolean casts.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-extra-boolean-cast
   *
   * Rationale: Boolean casting should only be used where necessary.
   */
  'no-extra-boolean-cast': 'error',

  /**
   * Disallow unnecessary labels.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-extra-label
   *
   * Rationale: Loop labels should only be used where necessary.
   */
  'no-extra-label': 'error',

  /**
   * Disallow unnecessary semicolons
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-extra-semi
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L54
   *
   * Rationale: Clashes with Prettier.
   */
  'no-extra-semi': 'off',

  /**
   * Disallow leading or trailing decimal points in numeric literals.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-floating-decimal
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L55
   *
   * Rationale: Clashes with Prettier.
   */
  'no-floating-decimal': 'off',

  /**
   * Disallow assignments to native objects or read-only global variables.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-global-assign
   *
   * Rationale: Assigning to global variables can result in losing access to important
   *            functionality.
   */
  'no-global-assign': 'error',

  /**
   * Disallow shorthand type conversions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-implicit-coercion
   *
   * Rationale: Explicit type conversions are more readable and self-explanatory.
   */
  'no-implicit-coercion': 'error',

  /**
   * Disallow declarations in the global scope.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-implicit-globals
   *
   * Rationale: Global declarations can cause name clashes and generally pollute the global scope.
   */
  'no-implicit-globals': 'error',

  /**
   * Disallow the use of `eval()`-like methods.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-implied-eval
   *
   * Rationale: Implicit eval calls (e.g. via setTimeout) have the same security risks as actual
   *            eval calls.
   */
  'no-implied-eval': 'error',

  /**
   * Disallow inline comments after code.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-inline-comments
   *
   * Rationale: Inline comments can be useful in certain situations, so it should be left to
   *            developer discretion which comment style is most appropriate.
   */
  'no-inline-comments': 'off',

  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-invalid-this
   *
   * Rationale: Use of this where it can be undefined can introduce errors.
   */
  'no-invalid-this': 'error',

  /**
   * Disallow the use of the `__iterator__` property.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-iterator
   *
   * Rationale: This approach to creating custom iterators is obsolete, use ES6 iterators and
   *            generators instead.
   */
  'no-iterator': 'error',

  /**
   * Disallow labels that share a name with a variable.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-label-var
   *
   * Rationale:
   */
  'no-label-var': 'off',

  /**
   * Disallow labeled statements.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-labels
   *
   * Rationale: Labels with names matching other variables are confusing.
   */
  'no-labels': 'error',

  /**
   * Disallow unnecessary nested blocks.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-lone-blocks
   *
   * Rationale: These blocks are redundant and can be removed.
   */
  'no-lone-blocks': 'error',

  /**
   * Disallow `if` statements as the only statement in `else` blocks.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-lonely-if
   *
   * Rationale: These should be combined into the more readable `if else`.
   */
  'no-lonely-if': 'error',

  /**
   * Disallow function declarations that contain unsafe references inside loop statements.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-loop-func
   *
   * Rationale: These unsafe declarations can lead to code that doesn't work as expected.
   */
  'no-loop-func': 'error',

  /**
   * Disallow magic numbers.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-magic-numbers
   *
   * Rationale: This sounds nice in theory but in practice naming every number can be laborious and
   *            unnecessary.
   */
  'no-magic-numbers': 'off',

  /**
   * Disallow mixed binary operators.
   *
   * Recommended: If using Prettier then Possibly else No
   *
   * See: https://eslint.org/docs/latest/rules/no-mixed-operators
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/README.md#no-mixed-operators
   *
   * Rationale: Conflicts with Prettier.
   */
  'no-mixed-operators': 'off',

  /**
   * Disallow use of chained assignment expressions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-multi-assign
   *
   * Rationale: Chained assignment is hard to read and error-prone.
   */
  'no-multi-assign': 'error',

  /**
   * Disallow multiline strings.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-multi-str
   *
   * Rationale: There are better ways to create multiline strings, such as concatenation or template
   *            literals.
   */
  'no-multi-str': 'error',

  /**
   * Disallow negated conditions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-negated-condition
   *
   * Rationale: Negated conditions are harder to understand.
   */
  'no-negated-condition': 'error',

  /**
   * Disallow nested ternary expressions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-nested-ternary
   *
   * Rationale: While sometimes useful, they're usually hard to read and should be split into
   *            multiple lines or helper functions.
   */
  'no-nested-ternary': 'error',

  /**
   * Disallow `new` operators outside of assignments or comparisons.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-new
   *
   * Rationale: New objects which aren't assigned or compared are thrown away and should be replaced
   *            with a standard function.
   */
  'no-new': 'error',

  /**
   * Disallow `new` operators with the `Function` object.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-new-func
   *
   * Rationale: Creating functions from strings is considered bad practice.
   */
  'no-new-func': 'error',

  /**
   * Disallow `Object` constructors.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-new-object
   *
   * Rationale: Objects can be created more concisely using object literal syntax.
   */
  'no-new-object': 'error',

  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-new-wrappers
   *
   * Rationale: Primitive wrapper objects are confusing because they don't work like their primitive
   *            counterparts.
   */
  'no-new-wrappers': 'error',

  /**
   * Disallow `\8` and `\9` escape sequences in string literals.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
   *
   * Rationale: Octal escape sequences are deprecated in ES5+.
   */
  'no-nonoctal-decimal-escape': 'error',

  /**
   * Disallow octal literals.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-octal
   *
   * Rationale: Octal literals are confusing and deprecated in ES5+.
   */
  'no-octal': 'error',

  /**
   * Disallow octal escape sequences in string literals.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-octal-escape
   *
   * Rationale: Octal escape sequences are deprecated in ES5+.
   */
  'no-octal-escape': 'error',

  /**
   * Disallow reassigning `function` parameters.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-param-reassign
   *
   * Rationale: Reassigning function parameters is misleading and usually indicate a mistake.
   */
  'no-param-reassign': 'error',

  /**
   * Disallow the unary operators `++` and `--`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-plusplus
   *
   * Rationale: Unary operators are affected by whitespace and can be rewritten to be more robust.
   */
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

  /**
   * Disallow the use of the `__proto__` property.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-proto
   *
   * Rationale: __proto__ is deprecated and shouldn't be used.
   */
  'no-proto': 'error',

  /**
   * Disallow variable redeclaration.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-redeclare
   *
   * Rationale: Declaring a variable multiple times is confusing.
   */
  'no-redeclare': 'error',

  /**
   * Disallow multiple spaces in regular expressions.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-regex-spaces
   *
   * Rationale: It can be unclear how many spaces are in a regex. This can be made more explicit by
   *            using /foo {3}bar/ syntax.
   */
  'no-regex-spaces': 'error',

  /**
   * Disallow specified names in exports.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-restricted-exports
   *
   * Rationale: We have no names that are specifically restricted.
   */
  'no-restricted-exports': 'off',

  /**
   * Disallow specified global variables.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-restricted-globals
   *
   * Rationale: We have no globals that are specifically restricted.
   */
  'no-restricted-globals': 'off',

  /**
   * Disallow specified modules when loaded by `import`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-restricted-imports
   *
   * Rationale: Always import from the core @breeze/basics package rather than an implementation.
   */
  'no-restricted-imports': [
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
   * Disallow certain properties on certain objects.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-restricted-properties
   *
   * Rationale: We have no properties that are specifically restricted.
   */
  'no-restricted-properties': 'off',

  /**
   * Disallow specified syntax.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-restricted-syntax
   *
   * Rationale: We have no syntax that is specifically restricted.
   */
  'no-restricted-syntax': 'off',

  /**
   * Disallow assignment operators in `return` statements.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-return-assign
   *
   * Rationale: Assignment in a return is usually a sign of a mistake.
   */
  'no-return-assign': ['error', 'always'],

  /**
   * Disallow unnecessary `return await`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-return-await
   *
   * Rationale: Returning await can cause performance issues and is usually a misuse of async.
   */
  'no-return-await': 'error',

  /**
   * Disallow `javascript:` urls.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-script-url
   *
   * Rationale: This is considered a form of eval and should be avoided.
   */
  'no-script-url': 'error',

  /**
   * Disallow comma operators.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-sequences
   *
   * Rationale: The comma operator obscures side-effects and its use is often accidental.
   */
  'no-sequences': 'error',

  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-shadow
   *
   * Rationale: Shadow variable names make it hard to understand which variable is being used.
   */
  'no-shadow': 'error',

  /**
   * Disallow identifiers from shadowing restricted names.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-shadow-restricted-names
   *
   * Rationale: Prevents global values such as undefined from being overwritten.
   */
  'no-shadow-restricted-names': 'error',

  /**
   * Disallow ternary operators.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-ternary
   *
   * Rationale: Ternaries are ace!
   */
  'no-ternary': 'off',

  /**
   * Disallow throwing literals as exceptions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-throw-literal
   *
   * Rationale: It is good practice to only throw the Error object or an object which extends it.
   */
  'no-throw-literal': 'error',

  /**
   * Disallow initializing variables to `undefined`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-undef-init
   *
   * Rationale: Variables are automatically initialised to undefined if no value is provided.
   */
  'no-undef-init': 'error',

  /**
   * Disallow the use of `undefined` as an identifier.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-undefined
   *
   * Rationale: Since ES5, undefined can no longer be overridden, so this rule is unnecessary.
   */
  'no-undefined': 'off',

  /**
   * Disallow dangling underscores in identifiers.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-underscore-dangle
   *
   * Rationale: We use underscores to denote variables which are not used.
   */
  'no-underscore-dangle': 'off',

  /**
   * Disallow ternary operators when simpler alternatives exist.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-unneeded-ternary
   *
   * Rationale: These cases can be written more simply and clearly.
   */
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  /**
   * Disallow unused expressions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-unused-expressions
   *
   * Rationale: These expressions have no effect on the state of the program and can be removed.
   */
  'no-unused-expressions': 'error',

  /**
   * Disallow unused labels.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-unused-labels
   *
   * Rationale: Unused labels are redundant and can be removed.
   */
  'no-unused-labels': 'error',

  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-useless-call
   *
   * Rationale: These usages can be replaced with a normal function invocation.
   */
  'no-useless-call': 'error',

  /**
   * Disallow unnecessary `catch` clauses.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-useless-catch
   *
   * Rationale: Catch clauses that only rethrow the error are redundant.
   */
  'no-useless-catch': 'error',

  /**
   * Disallow unnecessary computed property keys in objects and classes.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-useless-computed-key
   *
   * Rationale: Where keys don't need to be computed they should be written as regular keys instead.
   */
  'no-useless-computed-key': 'error',

  /**
   * Disallow unnecessary concatenation of literals or template literals.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-useless-concat
   *
   * Rationale: Strings don't need to be concatenated unless they're multiline or contain variables.
   */
  'no-useless-concat': 'error',

  /**
   * Disallow unnecessary constructors.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-useless-constructor
   *
   * Rationale: There's no need to provide an empty constructor, or one which simply delegates to
   *            its parent, because ES6 does this by default.
   */
  'no-useless-constructor': 'error',

  /**
   * Disallow unnecessary escape characters.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-useless-escape
   *
   * Rationale: Non-special characters don't need to be escaped.
   */
  'no-useless-escape': 'error',

  /**
   * Disallow renaming import, export, and destructured assignments to the same name.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-useless-rename
   *
   * Rationale: Renaming something to the same name is redundant.
   */
  'no-useless-rename': 'error',

  /**
   * Disallow redundant return statements.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-useless-return
   *
   * Rationale: A return statement with nothing after it is redundant.
   */
  'no-useless-return': 'error',

  /**
   * Require `let` or `const` instead of `var`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-var
   *
   * Rationale: let and const are safer as they use block scope rather than function scope.
   */
  'no-var': 'error',

  /**
   * Disallow `void` operators.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-void
   *
   * Rationale: For expressions, this is a legacy approach and is no longer required. It is still
   * useful for statements, such as calling async functions without using their return values.
   */
  'no-void': ['error', { allowAsStatement: true }],

  /**
   * Disallow specified warning terms in comments.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/no-warning-comments
   *
   * Rationale: A nice idea but impractical in practice.
   */
  'no-warning-comments': 'off',

  /**
   * Disallow `with` statements.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/no-with
   *
   * Rationale: Using with adds object properties to the current scope, making it impossible to tell
   *            what a variable inside the block actually refers to.
   */
  'no-with': 'error',

  /**
   * Require or disallow method and property shorthand syntax for object literals.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/object-shorthand
   *
   * Rationale: Shorthand syntax is cleaner and more concise.
   */
  'object-shorthand': 'error',

  /**
   * Enforce variables to be declared either together or separately in functions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/one-var
   *
   * Rationale: We should declare variables at the point where they're needed.
   */
  'one-var': 'off',

  /**
   * Require or disallow newlines around variable declarations.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://eslint.org/docs/latest/rules/one-var-declaration-per-line
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L68
   *
   * Rationale: We shouldn't be declaring multiple variables in one statement.
   */
  'one-var-declaration-per-line': 'off',

  /**
   * Require or disallow assignment operator shorthand where possible.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/operator-assignment
   *
   * Rationale: This should be left to develop discretion based on what's most readable.
   */
  'operator-assignment': 'off',

  /**
   * Require using arrow functions for callbacks.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-arrow-callback
   *
   * Rationale: Arrow function callbacks are more concise and are automatically bound to their
   *            surrounding context.
   */
  'prefer-arrow-callback': 'error',

  /**
   * Require `const` declarations for variables that are never reassigned after declared.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-const
   *
   * Rationale: Using const signals that a variable is never reassigned.
   */
  'prefer-const': 'error',

  /**
   * Require destructuring from arrays and/or objects.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-destructuring
   *
   * Rationale: Destructuring is great but there are cases where normal assignment is more readable.
   */
  'prefer-destructuring': 'off',

  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
   *
   * Rationale: The ** operator is considered to be more readable.
   */
  'prefer-exponentiation-operator': 'error',

  /**
   * Enforce using named capture group in regular expression.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-named-capture-group
   *
   * Rationale: These look quite nice but they complicate the regex so we'll leave them as optional.
   */
  'prefer-named-capture-group': 'off',

  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal
   * literals.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-numeric-literals
   *
   * Rationale: Literals are supported in ES6 and are more readable.
   */
  'prefer-numeric-literals': 'error',

  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-object-has-own
   *
   * Rationale: Object.hasOwn is a shorter, more readable alternative.
   */
  'prefer-object-has-own': 'error',

  /**
   * Disallow using Object.assign with an object literal as the first argument and prefer the use of
   * object spread instead.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-object-spread
   *
   * Rationale: Object spread is more concise and readable than Object.assign.
   */
  'prefer-object-spread': 'error',

  /**
   * Require using Error objects as Promise rejection reasons.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
   *
   * Rationale: It is good practice to only pass the Error object or an object which extends it to
   *            Promise.reject.
   */
  'prefer-promise-reject-errors': 'error',

  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-regex-literals
   *
   * Rationale: Regex literals are easier to understand.
   */
  'prefer-regex-literals': 'error',

  /**
   * Require rest parameters instead of `arguments`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-rest-params
   *
   * Rationale: Rest parameters are more readable and can also be manipulated using Array.prototype
   *            methods.
   */
  'prefer-rest-params': 'error',

  /**
   * Require spread operators instead of `.apply()`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-spread
   *
   * Rationale: The spread operator is more concise and readable.
   */
  'prefer-spread': 'error',

  /**
   * Require template literals instead of string concatenation.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/prefer-template
   *
   * Rationale: Template literals are more concise and readable.
   */
  'prefer-template': 'error',

  /**
   * Require quotes around object literal property names.
   *
   * Recommended: If using Prettier then No else Yes
   *
   * See: https://eslint.org/docs/latest/rules/quote-props
   *
   * See (Prettier): https://github.com/prettier/eslint-config-prettier/blob/414495d420fdc3936064e86dc3a5479d60f26bd6/index.js#L71
   *
   * Rationale: Clashes with Prettier.
   */
  'quote-props': 'off',

  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/radix
   *
   * Rationale: This is less necessary than it used to be because ES5+ no longer detects octal
   *            literals. However, it's still good to be explicit.
   */
  radix: 'error',

  /**
   * Disallow async functions which have no `await` expression.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/require-await
   *
   * Rationale: async functions without an await usually don't need to be asynchronous.
   */
  'require-await': 'error',

  /**
   * Enforce the use of `u` flag on RegExp.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/require-unicode-regexp
   *
   * Rationale: This is unnecessary in most instances.
   */
  'require-unicode-regexp': 'off',

  /**
   * Require generator functions to contain `yield`.
   *
   * Recommended: Yes
   *
   * See: https://eslint.org/docs/latest/rules/require-yield
   *
   * Rationale: Generators should yield values.
   */
  'require-yield': 'error',

  /**
   * Enforce sorted import declarations within modules.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/sort-imports
   *
   * Rationale: Unnecessary as we're using eslint-plugin-import.
   */
  'sort-imports': 'off',

  /**
   * Require object keys to be sorted.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/sort-keys
   *
   * Rationale: This is overly restrictive, it's better to sort object keys logically.
   */
  'sort-keys': 'off',

  /**
   * Require variables within the same declaration block to be sorted.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/sort-vars
   *
   * Rationale: We shouldn't be declaring multiple variables anyway, but if we did then it's better
   *            to sort them logically.
   */
  'sort-vars': 'off',

  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/spaced-comment
   *
   * Rationale: Comments are more readable with a leading and trailing space.
   */
  'spaced-comment': 'error',

  /**
   * Require or disallow strict mode directives.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/strict
   *
   * Rationale: Enforce proper use of strict mode.
   */
  strict: 'error',

  /**
   * Require symbol descriptions.
   *
   * Recommended: No
   *
   * See: https://eslint.org/docs/latest/rules/symbol-description
   *
   * Rationale: Giving symbols a description makes them easier to debug.
   */
  'symbol-description': 'error',

  /**
   * Require `var` declarations be placed at the top of their containing scope.
   *
   * Recommended: No
   * See: https://eslint.org/docs/latest/rules/vars-on-top
   *
   * Rationale: We don't use vars.
   */
  'vars-on-top': 'off',

  /**
   * Require or disallow "Yoda" conditions.
   *
   * Recommended: No
   * See: https://eslint.org/docs/latest/rules/yoda
   *
   * Rationale: Confusing and unnecessary they are.
   */
  yoda: 'error',
};
