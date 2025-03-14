export type LayoutAlign = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

export interface ILayout {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  verticalAlign?: LayoutAlign
  horizontalAlign?: LayoutAlign
}
