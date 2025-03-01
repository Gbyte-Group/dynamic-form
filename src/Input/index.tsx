import { EAlign, type IColumn } from '../types'
import '../styles/index.css'
import { alignMap, customStyle } from '../shared'

export interface InputProps extends IColumn {}

export default function Input(props: InputProps) {

  const align = alignMap[props.align || EAlign.LEFT]

  const vars = customStyle({
    '--gdf_component_align': align
  })

  return (
    <label className="gdf_input_component_container gdf_base_container" style={vars}>
      {
        props.icon && (
          <div className='gdf_input_component_icon gdf_base_icon_blur'>
            <img src={props.icon} alt={props.label} />
          </div>
        )
      }
      {
        props.focusIcon && (
          <div className='gdf_input_component_icon gdf_base_icon_focus'>
            <img src={props.focusIcon} alt={props.label} />
          </div>
        )
      }
      <input type="text" className='gdf_input_component_input gdf_base_component_input' />
    </label>
  )
}
