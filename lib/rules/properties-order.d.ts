import type { RuleConfig, StandardPropertiesMap } from 'stylelint-define-config'

export type PropertiesOrderOptions = RuleConfig<
  (StandardPropertiesMap | PropertiesGroup)[],
  {
    /**
     * These options only apply if you've defined your own array of properties.
     *
     * Default behavior is the same as `"ignore"`: an unspecified property can appear before or after any other property.
     *
     * @default 'ignore'
     */
    unspecified?: 'top' | 'bottom' | 'bottomAlphabetical' | 'ignore'
    /**
     * Default behavior does not enforce the presence of an empty line before an unspecified block of properties (`"ignore"`).
     *
     * If `"always"`, the unspecified group must be separated from other properties by an empty newline.
     *
     * If `"never"`, the unspecified group must have no empty lines separating it from other properties.
     *
     * For `"threshold"`, see the `emptyLineMinimumPropertyThreshold` for more information.
     *
     * If `emptyLineBeforeUnspecified` specified, regardless of it's value, if the first property in a rule is target of this option, that property would be forced to not have an empty line before it.
     */
    emptyLineBeforeUnspecified?: 'always' | 'never' | 'threshold'
    /**
     * If a group is configured with `emptyLineBefore: "threshold"`, the empty line behaviour toggles based on the number of properties in the rule.
     *
     * When the configured minimum property threshold is reached, empty lines are inserted. When the number of properties is less than the minimum property threshold, empty lines are __removed__.
     */
    emptyLineMinimumPropertyThreshold?: number
  }
>

interface PropertiesGroup {
  /**
   *  The properties in this group.
   */
  properties: StandardPropertiesMap[]
  /**
   * If `"always"`, this group must be separated from other properties by an empty newline. If emptyLineBefore is never, the group must have no empty lines separating it from other properties. By default this property isn't set.
   *
   * Rule will check empty lines between properties _only_. However, shared-line comments ignored by rule. Shared-line comment is a comment on the same line as declaration before this comment.
   *
   * If `emptyLineBefore` specified, regardless of it's value, the first property in a rule would be forced to not have an empty line before it.
   *
   * For `threshold`, refer to the [`emptyLineMinimumPropertyThreshold` documentation](#emptyLineMinimumPropertyThreshold).
   *
   * If this option is not working as expected, make sure you don't have `declaration-empty-line-before` configured in a conflicting way in your Stylelint config or config you're extending (e. g. [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard)).
   *
   */
  emptyLineBefore?: 'always' | 'never' | 'threshold'
  /**
   * If `true`, properties within group should not have empty lines between them.
   */
  noEmptyLineBetween?: boolean
  /**
   * An optional name for the group. This will be used in error messages.
   */
  groupName?: string
  /**
   * If property isn't set (the default), the properties in this group must come in the order specified. If `"flexible"`, the properties can be in any order as long as they are grouped correctly.
   */
  order?: 'flexible'
}
