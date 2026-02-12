export default {
  /**
   * Require that function overload signatures be consecutive.
   *
   * See: https://typescript-eslint.io/rules/adjacent-overload-signatures
   *
   * Rationale: Keeping function overload signatures together makes understanding the collection of
   *            overloads simpler.
   */
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  /**
   * Require consistently using either T[] or Array<T> for arrays.
   *
   * See: https://typescript-eslint.io/rules/array-type
   *
   * Rationale: Ensuring a single way of defining arrays makes code more readable and easier for
   *            unfamiliar devs to understand. Square-bracket notation doesn't extend well to
   *            complex types therefore `Array<T>` notation is the best option.
   */
  '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

  /**
   * Disallow awaiting a value that is not a Thenable.
   *
   * See: https://typescript-eslint.io/rules/await-thenable
   *
   * Rationale: Usage of `await` on non-`Thenable`s is often an indicator of an issue.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/await-thenable': 'error',

  /**
   * Disallow @ts-<directive> comments or require descriptions after directives.
   *
   * See: https://typescript-eslint.io/rules/ban-ts-comment
   *
   * Rationale: Usage of `@ts-` directives should be used sparingly and with good reason. This rule
   *            allows them but ensures that reasoning is provided.
   */
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
      'ts-check': 'allow-with-description',
    },
  ],

  /**
   * Disallow // tslint:<rule-flag> comments.
   *
   * See: https://typescript-eslint.io/rules/ban-tslint-comment
   *
   * Rationale: Usage of `tslint` is not supported.
   */
  '@typescript-eslint/ban-tslint-comment': 'error',

  /**
   * Disallow certain types.
   *
   * See: https://typescript-eslint.io/rules/ban-types
   *
   * Rationale: Disallowing certain types keeps code more consistent and thus easier to read and
   *            maintain.
   *
   * Note: The defaults for this rule can be found at the link above and appear to be suitable for
   *       standard codebases.
   */
  '@typescript-eslint/ban-types': 'error',

  /**
   * Enforce that literals on classes are exposed in a consistent style.
   *
   * See: https://typescript-eslint.io/rules/class-literal-property-style
   *
   * Rationale: Exposure of readonly literals from classes don't have the same protection in
   *            JavaScript as the `readonly` is only honoured at build-time. Enforcing getters
   *            instead ensures that protection is applied both in TypeScript and JavaScript.
   */
  '@typescript-eslint/class-literal-property-style': ['error', 'getters'],

  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a
   * constructor call.
   *
   * See: https://typescript-eslint.io/rules/consistent-generic-constructors
   *
   * Rationale: Having the type annotation (left hand side) hold the type arguments ensures that
   *            the returned types meet what's expected rather setting the expectations. This is
   *            especially necessary as potentially unexpected type inference can happen based on
   *            constructor parameters.
   */
  '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],

  /**
   * Require or disallow the Record type.
   *
   * See: https://typescript-eslint.io/rules/consistent-indexed-object-style
   *
   * Rationale: Requiring usage of `Record` instead of a type with only an index signature ensures
   *            code is more readable and similar in more places.
   */
  '@typescript-eslint/consistent-indexed-object-style': 'error',

  /**
   * Enforce consistent usage of type assertions.
   *
   * See: https://typescript-eslint.io/rules/consistent-type-assertions
   *
   * Rationale: Type assertions should be avoided as much as possible. When necessary, this rule
   *            can be disabled on a case-by-case basis.
   */
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'never',
    },
  ],

  /**
   * Enforce type definitions to consistently use either interface or type.
   *
   * See: https://typescript-eslint.io/rules/consistent-type-definitions
   *
   * Rationale: Allowing multiple type definition methods, to account for exports of
   *            both top-level interfaces and child types
   */
  '@typescript-eslint/consistent-type-definitions': 'off',

  /**
   * Enforce consistent usage of type exports.
   *
   * See: https://typescript-eslint.io/rules/consistent-type-exports
   *
   * Rationale: Using `type` exports is unnecessary in most cases and leads to more complicated
   *            looking exports. Allowing `type` exports is necessary, however, for some less-than-
   *            common cases so having no setting for this rule is best.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/consistent-type-exports': 'off',

  /**
   * Enforce consistent usage of type imports.
   *
   * See: https://typescript-eslint.io/rules/consistent-type-imports
   *
   * Rationale: Using `type` imports is unnecessary in most cases and leads to more complicated
   *            looking imports. Allowing `type` imports is necessary, however, for some less-than-
   *            common cases so having no setting for this rule is best.
   */
  '@typescript-eslint/consistent-type-imports': 'off',

  /**
   * Require explicit return types on functions and class methods.
   *
   * See: https://typescript-eslint.io/rules/explicit-function-return-type
   *
   * Rationale: Using explicit return types on functions and methods is beneficial as it ensures
   *            that the code inside the function/method is adhering to the expected contract that
   *            class-sites of the function/method expect.
   */
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowHigherOrderFunctions: false,
    },
  ],

  /**
   * Require explicit accessibility modifiers on class properties and methods.
   *
   * See: https://typescript-eslint.io/rules/explicit-member-accessibility
   *
   * Rationale: Having the ability to specify the visibility of code inside classes is one of the
   *            benefits of using TypeScript over plain JavaScript. Ensuring that members that are
   *            meant to be hidden actually are hidden is useful. Also, having developers consider
   *            visibility rather than relying on a default is helpful for code quality.
   */
  '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],

  /**
   * Require explicit return and argument types on exported functions' and classes' public class
   * methods.
   *
   * See: https://typescript-eslint.io/rules/explicit-module-boundary-types
   *
   * Rationale: Using explicit return types on functions and methods that are exported is beneficial
   *            as it ensures that the code inside the function/method is adhering to the expected
   *            contract that class-sites of the function/method expect.
   */
  '@typescript-eslint/explicit-module-boundary-types': [
    'error',
    {
      allowHigherOrderFunctions: false,
    },
  ],

  /**
   * Require a consistent member declaration order.
   *
   * See: https://typescript-eslint.io/rules/member-ordering
   *
   * Rationale: Keeping members in a standard order (both based on kind and alphabetically) makes
   *            adding new code and understanding existing code easier.
   *
   * Note: I'm disabling this for now as it needs more thought.
   */
  '@typescript-eslint/member-ordering': 'off',

  /**
   * Enforce using a particular method signature syntax.
   *
   * See: https://typescript-eslint.io/rules/method-signature-style
   *
   * Rationale: Ensuring that all method signatures look the same (and have the same type behaviour)
   *            keeps code maintainable.
   *
   * Note: The default for this rule "property" as opposed to "method".
   */
  '@typescript-eslint/method-signature-style': 'error',

  /**
   * Enforce naming conventions for everything across a codebase.
   *
   * See: https://typescript-eslint.io/rules/naming-convention
   *
   * Rationale: Enforcing a naming convention via linting is very complicated to configure and will
   *            be managed by convention at first.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/naming-convention': 'off',

  /**
   * Require .toString() to only be called on objects which provide useful information when
   * stringified.
   *
   * See: https://typescript-eslint.io/rules/no-base-to-string
   *
   * Rationale: Ensuring that the stringifying of an object yields useful information is helpful
   *            for debugging.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-base-to-string': 'error',

  /**
   * Disallow non-null assertion in locations that may be confusing.
   *
   * See: https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   *
   * Rationale: We've disabled non-null assertions completely.
   */
  '@typescript-eslint/no-confusing-non-null-assertion': 'off',

  /**
   * Require expressions of type void to appear in statement position.
   *
   * See: https://typescript-eslint.io/rules/no-confusing-void-expression
   *
   * Rationale: Ensuring that `void` "values" aren't stored in variables or mistakenly returned in
   *            functions/methods keeps code understandable. It also stops there being a risk of
   *            type information being wrong resulting in values being returned incorrectly when the
   *            intention was to not return a value at all.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-confusing-void-expression': 'error',

  /**
   * Disallow duplicate enum member values.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-duplicate-enum-values
   *
   * Rationale: Enum members should have unique values.
   */
  '@typescript-eslint/no-duplicate-enum-values': 'error',

  /**
   * Disallow using the delete operator on computed key expressions.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-dynamic-delete
   *
   * Rationale: This can be dangerous and is usually a sign that you could use a better data
   *            structure.
   */
  '@typescript-eslint/no-dynamic-delete': 'error',

  /**
   * Disallow the declaration of empty interfaces.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-empty-interface
   *
   * Rationale: Empty interfaces do nothing and are usually a mistake.
   */
  '@typescript-eslint/no-empty-interface': 'error',

  /**
   * Disallow the any type.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-explicit-any
   *
   * Rationale: Using `any` negates the benefits of a type-checking system.
   */
  '@typescript-eslint/no-explicit-any': 'error',

  /**
   * Disallow extra non-null assertions.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-extra-non-null-assertion
   *
   * Rationale: We've disabled use of the non-null assertion elsewhere.
   */
  '@typescript-eslint/no-extra-non-null-assertion': 'error',

  /**
   * Disallow classes used as namespaces.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-extraneous-class
   *
   * Rationale: Prefer ES6 modules to namespace-only classes.
   */
  '@typescript-eslint/no-extraneous-class': 'error',

  /**
   * Require Promise-like statements to be handled appropriately.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-floating-promises
   *
   * Rationale: Promise errors should always be handled.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-floating-promises': 'error',

  /**
   * Disallow iterating over an array with a for-in loop.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-for-in-array
   *
   * Rationale: for-in is intended for objects, not arrays.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-for-in-array': 'error',

  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number,
   * string, or boolean.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-inferrable-types
   *
   * Rationale: Allowing TypeScript to infer types removes clutter and makes code easier to read.
   */
  '@typescript-eslint/no-inferrable-types': 'error',

  /**
   * Disallow void type outside of generic or return types.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-invalid-void-type
   *
   * Rationale: `void` should only be used for return types or in generics.
   */
  '@typescript-eslint/no-invalid-void-type': 'error',

  /**
   * Disallow the void operator except when used to discard a value.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-meaningless-void-operator
   *
   * Rationale: The `void` operator should only be used on values which are discarded.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-meaningless-void-operator': 'error',

  /**
   * Enforce valid definition of new and constructor.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-misused-new
   *
   * Rationale: Misused `new` and `constructor` can be confusing.
   */
  '@typescript-eslint/no-misused-new': 'error',

  /**
   * Disallow Promises in places not designed to handle them.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-misused-promises
   *
   * Rationale: Using Promises in places where they are not handled properly is usually a sign of
   *            a missing `await`.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],

  /**
   * Disallow TypeScript namespaces.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-namespace
   *
   * Rationale: ES6 module syntax is preferred to namespaces.
   */
  '@typescript-eslint/no-namespace': 'error',

  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
   *
   * Rationale: We've disabled non-null assertions completely.
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',

  /**
   * Disallow non-null assertions after an optional chain expression.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   *
   * Rationale: We've disabled non-null assertions completely.
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

  /**
   * Disallow non-null assertions using the ! postfix operator.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-non-null-assertion
   *
   * Rationale: Non-null assertions can be a sign of code that is not fully type-safe, and should be
   *            avoided.
   */
  '@typescript-eslint/no-non-null-assertion': 'error',

  /**
   * Disallow members of unions and intersections that do nothing or override type information.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-redundant-type-constituents
   *
   * Rationale: When used in unions and intersections, certain types either override others (e.g.
   *            `any`) or are discarded (e.g. `never`). The type should be refactored to be valid.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-redundant-type-constituents': 'error',

  /**
   * Disallow invocation of require().
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-require-imports
   *
   * Rationale: ES6 imports should be used instead.
   */
  '@typescript-eslint/no-require-imports': 'error',

  /**
   * Disallow aliasing this.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-this-alias
   *
   * Rationale: Scope can be better managed using arrow functions.
   */
  '@typescript-eslint/no-this-alias': 'error',

  /**
   * Disallow type aliases.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-type-alias
   *
   * Rationale: Type aliases are extremely useful.
   */
  '@typescript-eslint/no-type-alias': 'off',

  /**
   * Disallow unnecessary equality comparisons against boolean literals.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
   *
   * Rationale: Boolean do not need to be compared to a literal, they can be used as-is. e.g.
   *            `if (isWidget)` vs `if (isWidget === true)`.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

  /**
   * Disallow conditionals where the type is always truthy or always falsy.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-unnecessary-condition
   *
   * Rationale: Conditionals should only use values which can evaluate to both true or false.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-unnecessary-condition': 'error',

  /**
   * Disallow unnecessary namespace qualifiers.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-unnecessary-qualifier
   *
   * Rationale: Namespaces don't need to be used when you're already in the context of that
   *            namespace.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-unnecessary-qualifier': 'error',

  /**
   * Disallow type arguments that are equal to the default.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-unnecessary-type-arguments
   *
   * Rationale: Type arguments which equal the default can be omitted.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',

  /**
   * Disallow type assertions that do not change the type of an expression.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-unnecessary-type-assertion
   *
   * Rationale: `as` assertions clutter the code, so it's best to remove them if they don't change
   *            the type of an expression.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',

  /**
   * Disallow unnecessary constraints on generic types.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   *
   * Rationale: `extends any` is the same as just `any`.
   */
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',

  /**
   * Disallow calling a function with a value with type any.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-unsafe-argument
   *
   * Rationale: Calling functions with parameters of type `any` can cause bugs.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-unsafe-argument': 'error',

  /**
   * Disallow assigning a value with type any to variables and properties.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-unsafe-assignment
   *
   * Rationale: `any` types are dangerous and should be avoided. They can be useful in tests, in
   *            which case disable this rule for the specific test line in question.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-unsafe-assignment': 'error',

  /**
   * Disallow calling a value with type any.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-unsafe-call
   *
   * Rationale: Calling values with `any` type is dangerous because it might not be a function. Use
   *            proper typings instead.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-unsafe-call': 'error',

  /**
   * Disallow unsafe declaration merging.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   *
   * Rationale: Declaration merging between classes and interfaces can bypass certain TypeScript
   *            checks and lead to runtime errors.
   */
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',

  /**
   * Disallow member access on a value with type any.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-unsafe-member-access
   *
   * Rationale: `any` values are unsafe and can lead to unexpected behaviour. Use proper typings
   *            instead.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-unsafe-member-access': 'error',

  /**
   * Disallow returning a value with type any from a function.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-unsafe-return
   *
   * Rationale: Functions should always return a properly-typed value.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/no-unsafe-return': 'error',

  /**
   * Disallow empty exports that don't change anything in a module file.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/no-useless-empty-export
   *
   * Rationale: Using `export {}` in a file which is already a module does nothing.
   */
  '@typescript-eslint/no-useless-empty-export': 'error',

  /**
   * Disallow require statements except in import statements.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/no-var-requires
   *
   * Rationale: Use ES6 imports instead.
   */
  '@typescript-eslint/no-var-requires': 'error',

  /**
   * Enforce non-null assertions over explicit type casts.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/non-nullable-type-assertion-style
   *
   * Rationale: We've disabled non-null assertions completely.
   */
  '@typescript-eslint/non-nullable-type-assertion-style': 'off',

  /**
   * Require or disallow parameter properties in class constructors.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/parameter-properties
   *
   * Rationale: Class properties are more conventional and arguably easier to read.
   */
  '@typescript-eslint/parameter-properties': 'error',

  /**
   * Enforce the use of as const over literal type.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/prefer-as-const
   *
   * Rationale: `as const` is a more readable way of telling TypeScript to infer the literal type.
   */
  '@typescript-eslint/prefer-as-const': 'error',

  /**
   * Require each enum member value to be explicitly initialized.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/prefer-enum-initializers
   *
   * Rationale: Giving enum members explicit values makes them safer to use, as the value will not
   *            be unintentionally changed when updating the enum.
   */
  '@typescript-eslint/prefer-enum-initializers': 'error',

  /**
   * Enforce the use of for-of loop over the standard for loop where possible.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/prefer-for-of
   *
   * Rationale: A for-of loop is more concise and explicit in cases where the array index is only
   *            used to access the item.
   */
  '@typescript-eslint/prefer-for-of': 'error',

  /**
   * Enforce using function types instead of interfaces with call signatures.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/prefer-function-type
   *
   * Rationale: Function types are more concise than objects with a call signature.
   */
  '@typescript-eslint/prefer-function-type': 'error',

  /**
   * Enforce includes method over indexOf method.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/prefer-includes
   *
   * Rationale: When looking for an item in an array, prefer Array.includes to Array.indexOf.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/prefer-includes': 'error',

  /**
   * Require all enum members to be literal values.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/prefer-literal-enum-member
   *
   * Rationale: Assigning enum values using literals rather than expressions is easier to read.
   */
  '@typescript-eslint/prefer-literal-enum-member': 'error',

  /**
   * Require using namespace keyword over module keyword to declare custom TypeScript modules.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/prefer-namespace-keyword
   *
   * Rationale: ES6 modules are now the preferred way of handling this, but this is enabled for any
   *            legacy code.
   */
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  /**
   * Enforce using the nullish coalescing operator instead of logical chaining.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/prefer-nullish-coalescing
   *
   * Rationale: The nullish coalescing operator (??) is safer than the OR operator (||) and should
   *            be used where possible.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/prefer-nullish-coalescing': 'error',

  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated
   * logical ors, or empty objects.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/prefer-optional-chain
   *
   * Rationale: Optional chaining is more concise and easier to read.
   */
  '@typescript-eslint/prefer-optional-chain': 'error',

  /**
   * Require private members to be marked as readonly if they're never modified outside of the
   * constructor.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/prefer-readonly
   *
   * Rationale: Private members can be marked as readonly if they're only modified in the
   *            constructor.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/prefer-readonly': 'error',

  /**
   * Require function parameters to be typed as readonly to prevent accidental mutation of inputs.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/prefer-readonly-parameter-types
   *
   * Rationale: This is cumbersome to implement as we'd need to add it to almost all parameters.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  /**
   * Enforce using type parameter when calling Array#reduce instead of casting.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/prefer-reduce-type-parameter
   *
   * Rationale: Typing Array.reduce results using its type parameter is more explicit and less
   *            error-prone than using an `as` assertion.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',

  /**
   * Enforce RegExp#exec over String#match if no global flag is provided.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/prefer-regexp-exec
   *
   * Rationale: When no global flag is provided, RegExp#exec and String#match work the same. Using
   *            one consistently improves code readability.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/prefer-regexp-exec': 'error',

  /**
   * Enforce that this is used when only this type is returned.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/prefer-return-this-type
   *
   * Rationale: Returning `this` rather than the class name improves typing of the return value.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/prefer-return-this-type': 'error',

  /**
   * Enforce using String#startsWith and String#endsWith over other equivalent methods of checking
   * substrings.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/prefer-string-starts-ends-with
   *
   * Rationale: These built-in methods are more declarative and readable than alternatives like
   *            String.indexOf.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',

  /**
   * Enforce using @ts-expect-error over @ts-ignore.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/prefer-ts-expect-error
   *
   * Rationale: @ts-expect-error suppresses errors in the same way as @ts-ignore, except it WILL
   *            throw an error when used unnecessarily. This makes it easier to find usages which
   *            can be removed.
   */
  '@typescript-eslint/prefer-ts-expect-error': 'error',

  /**
   * Require any function or method that returns a Promise to be marked async.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/promise-function-async
   *
   * Rationale: Promise-returning functions should always be marked async.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/promise-function-async': 'error',

  /**
   * Require Array#sort calls to always provide a compareFunction.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/require-array-sort-compare
   *
   * Rationale: The default Array.sort() function sorts alphabetically, even for numbers, which can
   *            result in unexpected behaviour. A sort compare function should always be passed for
   *            any non-string arrays.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],

  /**
   * Require both operands of addition to be the same type and be bigint, number, or string.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/restrict-plus-operands
   *
   * Rationale: When adding values, they should be of the same type to ensure the expected outcome.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/restrict-plus-operands': 'error',

  /**
   * Enforce template literal expressions to be of string type.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/restrict-template-expressions
   *
   * Rationale: Only strings and numbers should be used in template literals. Other types should be
   *            explicitly converted.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/restrict-template-expressions': 'error',

  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/sort-type-constituents
   *
   * Rationale: This is overly restrictive, constituents should be sorted logically.
   */
  '@typescript-eslint/sort-type-constituents': 'off',

  /**
   * Disallow certain types in boolean expressions.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/strict-boolean-expressions
   *
   * Rationale: This is overly restrictive, and all of the configurable exceptions (nullable string,
   *            etc.) are useful at some point.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/strict-boolean-expressions': 'off',

  /**
   * Require switch-case statements to be exhaustive with union type.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/switch-exhaustiveness-check
   *
   * Rationale: When switching over a union, all possible cases should be handled.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/switch-exhaustiveness-check': 'error',

  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/triple-slash-reference
   *
   * Rationale: Use ES6 imports instead to make the type reference explicit.
   */
  '@typescript-eslint/triple-slash-reference': 'error',

  /**
   * Require type annotations in certain places.
   *
   * Recommended: No
   *
   * See: https://typescript-eslint.io/rules/typedef
   *
   * Rationale: Prefer inference where possible. --noImplicitAny will help us avoid issues.
   */
  '@typescript-eslint/typedef': 'off',

  /**
   * Enforce unbound methods are called with their expected scope.
   *
   * Recommended: Yes
   *
   * See: https://typescript-eslint.io/rules/unbound-method
   *
   * Rationale: Class methods should be bound to avoid losing their scope.
   *
   * Note: This rule requires type information from `@typescript-eslint/parser` with the `project`
   *       option.
   */
  '@typescript-eslint/unbound-method': 'error',

  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest
   * parameter.
   *
   * Recommended: Yes, if strict
   *
   * See: https://typescript-eslint.io/rules/unified-signatures
   *
   * Rationale: Overloads should be kept as simple as possible.
   */
  '@typescript-eslint/unified-signatures': 'error',
};
