import type { OrderOptions } from './rules/order'
import type { PropertiesAlphabeticalOrderOptions } from './rules/properties-alphabetical-order'
import type { PropertiesOrderOptions } from './rules/properties-order'

export interface Plugins {
  'stylelint-order': void
}

export interface Extends {
  'stylelint-config-idiomatic-order': void
  'stylelint-config-hudochenkov/order': void
  'stylelint-config-recess-order': void
  'stylelint-config-property-sort-order-smacss': void
  'stylelint-config-clean-order': void
}

export interface RuleOptions {
  /**
   * Specify the order of content within declaration blocks.
   *
   * Within an order array, you can include:
   * - keywords:
   *   - `custom-properties` — Custom properties (e. g., `--property: 10px;`)
   *   - `dollar-variables` — Dollar variables (e. g., `$variable`)
   *   - `at-variables` — At-variables (e. g., `@variable` available in Less syntax)
   *   - `declarations` — CSS declarations (e. g., `display: block`)
   *   - `rules` — Nested rules (e. g., `a { span {} }`)
   *   - `at-rules` — Nested at-rules (e. g., `div { \@media () {} }`)
   *   - `less-mixins` — Mixins in Less syntax (e. g., `.mixin();`)
   * - extended at-rule objects:
   *   ```json
   *   {
   *      "type": "at-rule",
   *      "name": "include",
   *      "parameter": "hello",
   *      "hasBlock": true
   *   }
   *   ```
   * - extended rule objects:
   *   ```json
   *   {
   *      "type": "rule",
   *      "selector": "div",
   *      "name": "tag selector"
   *   }
   *   ```
   *
   * **By default, unlisted elements will be ignored.** So if you specify an array and do not include `declarations`, that means that all declarations can be included before or after any other element. _This can be changed with the `unspecified` option (see below)._
   *
   * @see [order](https://github.com/hudochenkov/stylelint-order/blob/master/rules/order/README.md)
   */
  'order/order': OrderOptions

  /**
   * Specify the alphabetical order of properties within declaration blocks.
   *
   * Shorthand properties *must always* precede their longhand counterparts, even if that means they are not alphabetized.
   * (See also [`declaration-block-no-shorthand-property-overrides`](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/).)
   *
   * Prefixed properties *must always* precede the unprefixed version.
   *
   * This rule ignores variables (`$sass`, `@less`, `--custom-property`).
   *
   * @see [properties-alphabetical-order](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md)
   */
  'order/properties-alphabetical-order': PropertiesAlphabeticalOrderOptions

  /**
   * Specify the order of properties within declaration blocks.
   *
   * Prefixed properties *must always* precede the unprefixed version.
   *
   * This rule ignores variables (`$sass`, `@less`, `--custom-property`).
   *
   * @see [properties-order](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-order/README.md)
   */
  'order/properties-order': PropertiesOrderOptions
}
