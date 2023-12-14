import type { AtRules, RuleConfig } from 'stylelint-define-config'

export type OrderOptions = RuleConfig<
  OrderPrimary[],
  {
    unspecified?: ('top' | 'bottom' | 'ignore')[]
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
