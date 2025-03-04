import type { ILayout } from './ILayout'
import type { IColumn } from './IColumn'
import type { EAlign } from './EAlign'

export interface IRow extends ILayout {
  id: string
  columns: IColumn[]
  horizontal?: EAlign
  vertical?: EAlign
  gap?: string
}
