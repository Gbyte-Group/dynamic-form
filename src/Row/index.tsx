import Column from '../Column'
import { rowStyle } from '../shared'
import type { IRow } from '../types'

export interface RowProps extends IRow {}

export default function Row(props: RowProps) {

  const vars = rowStyle(props)

  return (
    <div className='gdf_base_row' style={vars}>
      {props.columns.map((col) => (
        <Column key={col.id} {...col} />
      ))}
    </div>
  )
}
