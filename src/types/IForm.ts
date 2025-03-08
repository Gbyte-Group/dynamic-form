import type { EAlign } from './EAlign'
import type { ILayout } from './ILayout'
import type { IRow } from './IRow'

export interface IForm extends ILayout {
  rows: IRow[]
  horizontal?: EAlign
  vertical?: EAlign
  gap?: string
}
