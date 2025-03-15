import type { IField } from '../types'

export interface InputProps extends IField {
  mode: 'email' | 'text' | 'number' | 'password' | 'tel'
  placeholder: string
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
}

export default function Input(props: InputProps) {
  return (
    <div className='gdf_component_input'>
      <input
        name={props.name}
        type={props.mode}
        required={props.required}
        disabled={props.disabled}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        minLength={props.minLength}
        maxLength={props.maxLength}
      />
    </div>
  )
}
