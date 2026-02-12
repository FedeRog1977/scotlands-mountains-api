export default {
  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to
   * end user.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
   *
   * Rationale: Alternative text should always be included where required.
   */
  'jsx-a11y/alt-text': 'error',

  /**
   * Enforce <a> text to not exactly match "click here", "here", "link", or "a link".
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-ambiguous-text.md
   *
   * Rationale: Anchors should have descriptive text.
   */
  'jsx-a11y/anchor-ambiguous-text': 'error',

  /**
   * Enforce all anchors to contain accessible content.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-has-content.md
   *
   * Rationale: Anchor content should always be accessible.
   */
  'jsx-a11y/anchor-has-content': 'error',

  /**
   * Enforce all anchors are valid, navigable elements.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
   *
   * Rationale: Anchors should be navigable. If they only perform an action they should be replaced
   *            with a button instead.
   */
  'jsx-a11y/anchor-is-valid': 'error',

  /**
   * Enforce elements with aria-activedescendant are tabbable.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-activedescendant-has-tabindex.md
   *
   * Rationale: Elements with aria-activedescendant should have an implicit or explicit tab index.
   */
  'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

  /**
   * Enforce all aria-* props are valid.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-props.md
   *
   * Rationale: Invalid ARIA props do nothing and can indicate a typo.
   */
  'jsx-a11y/aria-props': 'error',

  /**
   * Enforce ARIA state and property values are valid.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-proptypes.md
   *
   * Rationale: Invalid ARIA values may not work as intended and can indicate a typo.
   */
  'jsx-a11y/aria-proptypes': 'error',

  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-role.md
   *
   * Rationale: Only valid ARIA roles should be used.
   */
  'jsx-a11y/aria-role': 'error',

  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those
   * attributes.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/aria-unsupported-elements.md
   *
   * Rationale: ARIA attributes should not be applied to elements which don't support them.
   */
  'jsx-a11y/aria-unsupported-elements': 'error',

  /**
   * Enforce that autocomplete attributes are used correctly.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/autocomplete-valid.md
   *
   * Rationale: Autocomplete attributes should use valid values.
   */
  'jsx-a11y/autocomplete-valid': 'error',

  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/click-events-have-key-events.md
   *
   * Rationale: Non-interactive elements with a click event should also handle keyboard interaction.
   */
  'jsx-a11y/click-events-have-key-events': 'error',

  /**
   * Enforce that a control (an interactive element) has a text label.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
   *
   * Rationale: This rule seems to behave strangely, flagging valid usages of id/htmlFor. It's also
   *            disabled in the Recommended and Strict configs.
   */
  'jsx-a11y/control-has-associated-label': 'off',

  /**
   * Enforce heading (h1, h2, etc) elements contain accessible content.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/heading-has-content.md
   *
   * Rationale: Headings should contain accessible text content.
   */
  'jsx-a11y/heading-has-content': 'error',

  /**
   * Enforce <html> element has lang prop.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/html-has-lang.md
   *
   * Rationale: Superceded by the `lang` rule.
   */
  'jsx-a11y/html-has-lang': 'off',

  /**
   * Enforce iframe elements have a title attribute.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/iframe-has-title.md
   *
   * Rationale: iframes should have a title indicating their content.
   */
  'jsx-a11y/iframe-has-title': 'error',

  /**
   * Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/img-redundant-alt.md
   *
   * Rationale: This is overly restrictive. It would disallow alt text like "A man holding a picture
   *            of his dog".
   */
  'jsx-a11y/img-redundant-alt': 'off',

  /**
   * Enforce that elements with interactive handlers like onClick must be focusable.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/interactive-supports-focus.md
   *
   * Rationale: Interactive elements should be keyboard focusable.
   */
  'jsx-a11y/interactive-supports-focus': 'error',

  /**
   * Enforce that a label tag has a text label and an associated control.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
   *
   * Rationale: Labels should contain content and be associated with a control.
   */
  'jsx-a11y/label-has-associated-control': 'error',

  /**
   * Enforce lang attribute has a valid value.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
   *
   * Rationale: The page's language should always be specified.
   */
  'jsx-a11y/lang': 'error',

  /**
   * Enforces that <audio> and <video> elements must have a <track> for captions.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/media-has-caption.md
   *
   * Rationale: Media should have captions for visually impaired users.
   */
  'jsx-a11y/media-has-caption': 'error',

  /**
   * Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
   *
   * Rationale: Elements with mouse events should have equivalent keyboard events.
   */
  'jsx-a11y/mouse-events-have-key-events': 'error',

  /**
   * Enforce that the accessKey prop is not used on any element to avoid complications with keyboard
   * commands used by a screenreader.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-access-key.md
   *
   * Rationale: Access keys can interfere with screen reader shortcuts and should be avoided.
   */
  'jsx-a11y/no-access-key': 'error',

  /**
   * Disallow aria-hidden="true" from being set on focusable elements.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-aria-hidden-on-focusable.md
   *
   * Rationale: ARIA hidden elements are considered invisible and shouldn't be keyboard navigable.
   */
  'jsx-a11y/no-aria-hidden-on-focusable': 'error',

  /**
   * Enforce autoFocus prop is not used.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-autofocus.md
   *
   * Rationale: Autofocusing on an element creates usability issues.
   */
  'jsx-a11y/no-autofocus': 'error',

  /**
   * Enforce distracting elements are not used.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-distracting-elements.md
   *
   * Rationale: Visually distracting elements are an eyesore and often deprecated.
   */
  'jsx-a11y/no-distracting-elements': 'error',

  /**
   * Interactive elements should not be assigned non-interactive roles.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-interactive-element-to-noninteractive-role.md
   *
   * Rationale: Interactive elements indicate controls and should not be used for non-interactive
   *            content.
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',

  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-interactions.md
   *
   * Rationale: Non-interactive elements shouldn't be given interactivity.
   */
  'jsx-a11y/no-noninteractive-element-interactions': 'error',

  /**
   * Non-interactive elements should not be assigned interactive roles.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-element-to-interactive-role.md
   *
   * Rationale: Use real interactive elements rather than converting a non-interactive element.
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',

  /**
   * tabIndex should only be declared on interactive elements.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-noninteractive-tabindex.md
   *
   * Rationale: Screen readers already provide ways of navigating non-interactive elements.
   */
  'jsx-a11y/no-noninteractive-tabindex': 'error',

  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-redundant-roles.md
   *
   * Rationale: There's no need to explicitly declare a role that matches the implicit role.
   */
  'jsx-a11y/no-redundant-roles': 'error',

  /**
   * Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the
   * role attribute.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-static-element-interactions.md
   *
   * Rationale: Static elements which are given interactivity should include a role to improve
   *            semantics.
   */
  'jsx-a11y/no-static-element-interactions': 'error',

  /**
   * Enforces using semantic DOM elements over the ARIA role property.
   *
   * Recommended: No
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/prefer-tag-over-role.md
   *
   * Rationale: Use the proper semantic tag with implicit role where possible.
   */
  'jsx-a11y/prefer-tag-over-role': 'error',

  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-has-required-aria-props.md
   *
   * Rationale: Elements with an assigned role should include all attributes necessary for
   *            fulfilling that role.
   */
  'jsx-a11y/role-has-required-aria-props': 'error',

  /**
   * Enforce that elements with explicit or implicit roles defined contain only aria-* properties
   * supported by that role.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/role-supports-aria-props.md
   *
   * Rationale: Elements with an ARIA role should only include ARIA attributes associated with that
   *            role.
   */
  'jsx-a11y/role-supports-aria-props': 'error',

  /**
   * Enforce scope prop is only used on <th> elements.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/scope.md
   *
   * Rationale: When th scope is not specified, the browser will attempt to determine the correct
   *            value. It's better for us to be explicit about it.
   */
  'jsx-a11y/scope': 'error',

  /**
   * Enforce tabIndex value is not greater than zero.
   *
   * Recommended: Yes
   *
   * See: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/tabindex-no-positive.md
   *
   * Rationale: Positive tab indexes break the expected navigation order and are very hard to
   *            maintain. Better to use a negative value to remove focus completely, or zero to add
   *            focus in natural document order. See
   *            https://www.scottohara.me/blog/2019/05/25/tabindex.html
   */
  'jsx-a11y/tabindex-no-positive': 'error',
};
