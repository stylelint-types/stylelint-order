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
