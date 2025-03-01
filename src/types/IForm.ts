import type { ILayout } from './ILayout'
import type { IRow } from './IRow'

export interface IForm extends ILayout {
  rows: IRow[]
}
