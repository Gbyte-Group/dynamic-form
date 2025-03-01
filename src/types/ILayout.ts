import type { EAlign } from './EAlign'

export interface ILayout {
  height: number
  width: number
  align?: EAlign
  padding?: number[]
  margin?: number[]
  gap?: number
  backgroundImage?: string
  backgroundColor?: string
  borderRadius?: number
  borderWidth?: number
  borderColor?: string
  borderStyle?: string
}
