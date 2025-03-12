import Row, { type RowProps } from '../Row'
import './index.css'

export interface FormProps {
  gap: number
  rows: RowProps[]
}

export default function Form(props: FormProps) {

  const vars = {
    '--gdf_component_form_gap': props.gap
  } as React.CSSProperties


  return (
    <form className='gdf_component_form' style={vars}>
      {props.rows.map((row) => (
        <Row {...row} key={row.id} />
      ))}
    </form>
  )
}
