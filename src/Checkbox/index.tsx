import type { IField } from '../types'
import './index.css'

export interface CheckboxProps extends IField {
  description: string
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <label className="gdf_component_checkbox">
      <input
        name={props.name}
        type="checkbox"
        required={props.required}
        disabled={props.disabled}
        defaultChecked={props.defaultChecked}
      />
      <span className='gdf_component_checkbox_unchecked' />
      <span className='gdf_component_checkbox_checked' >
        <span>✔</span>
      </span>
      <span>{props.description}</span>
    </label>
  )
}
