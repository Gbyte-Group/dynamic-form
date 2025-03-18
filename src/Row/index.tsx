import Column, { type ColumnProps } from '../Column'
import type { ILayout } from '../types'
import { transformAlign } from '../utils'

export interface RowProps extends ILayout {
  id: string
  gap: number
  columns: ColumnProps[]
  CustomColumns?: typeof Column
}

export default function Row(props: RowProps) {

  const vars = {
    '--gdf_component_row_gap': props.gap,
    '--gdf_row_align-items': transformAlign(props.verticalAlign),
    '--gdf_row_justify-content': transformAlign(props.horizontalAlign),
    '--gdf_row_flex-direction': props.direction,
  } as React.CSSProperties

  const CustomColumns = props.CustomColumns

  return (
    <div className='gdf_component_row' style={vars}>
      {
        props.columns.map(column => (
          CustomColumns
            ? <CustomColumns {...column} key={column.id} />
            : <Column {...column} key={column.id} />
        ))
      }
    </div>
  )
}
