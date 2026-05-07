import type { RuleConfig } from 'stylelint-define-config'

export type CustomPropertiesAlphabeticalOrderOptions = RuleConfig<
  true,
  [first: string, second: string]
>
