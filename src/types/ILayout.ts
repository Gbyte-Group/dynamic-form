import type { EAlign } from './EAlign'

export interface ILayout {
  height: string
  width: string
  align?: EAlign
  padding?: string[]
  margin?: string[]
  backgroundImage?: string
  backgroundColor?: string
  borderRadius?: string
  borderWidth?: string
  borderColor?: string
  borderStyle?: string
  fontSize?: string
  fontWeight?: string
  fontColor?: string
  fontStyle?: string
  lineHeight?: string
}
