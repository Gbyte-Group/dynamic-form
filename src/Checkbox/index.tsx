import type { IField } from '../types'
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
        value={props.defaultValue}
      />
      <span className='gdf_component_checkbox_unchecked' />
      <span className='gdf_component_checkbox_checked' >
        <span>✔</span>
      </span>
      <span>{props.description}</span>
    </label>
  )
}
