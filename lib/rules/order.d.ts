import type { AtRules, RuleConfig } from 'stylelint-define-config'

export type OrderOptions = RuleConfig<
  OrderPrimary[],
  {
    /**
     * Default behavior is the same as `"ignore"`: an unspecified element can appear before or after any other property.
     *
     * With `"top"`, unspecified elements are expected before any specified properties.
     *
     * With `"bottom"`, unspecified properties are expected after any specified properties.
     *
     * @default 'ignore'
     */
    unspecified?: 'top' | 'bottom' | 'ignore'
  }
>

type OrderPrimary = OrderKeyword | OrderRule | OrderAtRule

type OrderKeyword = 'custom-properties' | 'dollar-variables' | 'at-variables' | 'declarations' | 'rules' | 'at-rules' | 'less-mixins'

interface OrderRule {
  type: 'rule'
  selector?: string | RegExp
  name?: string
}

interface OrderAtRule {
  type: 'at-rule'
  name?: AtRules
  parameter?: string | RegExp
  hasBlock?: boolean
}
