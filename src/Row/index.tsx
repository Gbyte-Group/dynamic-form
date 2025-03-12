import Column, { type ColumnProps } from '../Column'
import './index.css'

export interface RowProps {
  id: string
  gap: number
  columns: ColumnProps[]
}

export default function Row(props: RowProps) {

  const vars = {
    '--gdf_component_row_gap': props.gap
  } as React.CSSProperties

  return (
    <div className='gdf_component_row' style={vars}>
      {
        props.columns.map(column => (
          <Column {...column} key={column.id} />
        ))
      }
    </div>
  )
}
