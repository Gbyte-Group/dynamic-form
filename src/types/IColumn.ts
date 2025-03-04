import type { ILayout } from './ILayout'
import type { IOption } from './IOption'
import type { EComponentType } from './EComponentType'
import type { EInputMode } from './EInputMode'

export interface IColumn extends ILayout {
  id: string
  field: string
  type: EComponentType
  label: string
  placeholder: string
  icon?: string
  wrong?: string
  defaultValue?: string
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  focusIcon?: string
  inputModule?: EInputMode
  images?: string[]
  options?: IOption[]
  maxLength?: number
  minLength?: number
  max?: number
  min?: number
  step?: number
  format?: string
  autoComplete?: string
}
