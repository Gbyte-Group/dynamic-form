import '../styles/index.css'
import { type IColumn, EInputMode } from '../types'
import { useState } from 'react'

export interface InputProps extends IColumn {}

export const InputModeMap: Record<EInputMode, React.HTMLAttributes<HTMLInputElement>['inputMode']> = {
  text: 'text',
  email: 'email',
  password: 'text',
  number: 'numeric',
}

export default function Input(props: InputProps) {
  const isPassword = props?.inputModule === EInputMode.PASSWORD
  const [value, updateValue] = useState<string>('')
  const [valid, updateValid] = useState<boolean>(true)

  const onChange = (input: string) => {
    let valid = false

    if (props.format && input) {
      const regexp = new RegExp(props.format)
      valid = regexp.test(input)
    }

    updateValid(valid)
    updateValue(input)
  }

  return (
    <>
      <label className="gdf_input_component_container gdf_base_component_container">
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
        <input
          value={value}
          min={props.min}
          max={props.max}
          step={props.step}
          name={props.field}
          pattern={props.format}
          readOnly={props.readOnly}
          required={props.required}
          disabled={props.disabled}
          maxLength={props.maxLength}
          minLength={props.minLength}
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          defaultValue={props.defaultValue}
          type={isPassword ? 'password' : 'text'}
          inputMode={InputModeMap[props?.inputModule ?? EInputMode.TEXT]}
          className='gdf_input_component_input gdf_base_component_input'
          onChange={e => onChange(e.target.value)}
        />
      </label>
      <span className='gdf_base_wrong'> {valid ? '' : props.wrong} </span>
    </>
  )
}
