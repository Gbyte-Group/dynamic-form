import type { ILayout } from './ILayout'
import type { IOption } from './IOption'
import type { EComponentType } from './EComponentType'
import type { EInputMode } from './EInputMode'

export interface IColumn extends ILayout {
  field: string
  type: EComponentType
  label: string
  value: string
  placeholder: string
  icon: string
  required?: boolean
  disabled?: boolean
  focusIcon?: string
  inputModule?: EInputMode
  images?: string[]
  options?: IOption[]
  maxLength?: number
  minLength?: number
  max?: number
  min?: number
  step?: number
}
