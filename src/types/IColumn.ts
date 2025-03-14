import type { ILayout } from './ILayout'

export interface IColumn extends ILayout {
  backgroundColor?: string
  backgroundImage?: string
  borderWidth?: number
  borderColor?: string
  borderRadius?: number
}
