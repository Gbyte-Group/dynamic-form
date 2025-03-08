import './index.css'
import { useEffect, useRef } from 'react'
import Row from '../Row'
import type { IForm } from '../types'
import { formStyle } from '../shared'

export interface FormProps extends IForm {
  onSubmit: (form: HTMLFormElement, submitter: SubmitEvent['submitter']) => void
  onInput?: (target: HTMLInputElement) => void,
  onChange?: (target: HTMLInputElement) => void,
}

export default function Form(props: FormProps) {

  const form = useRef<HTMLFormElement>(null)

  const vars = formStyle(props)

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault()
    if (form.current) {
      props.onSubmit(form.current, e.submitter)
    }
  }

  const handleInput = (e: Event) => {
    if (props.onInput) {
      props.onInput(e.target as HTMLInputElement)
    }
  }

  const handleChange = (e: Event) => {
    if (props.onChange) {
      props.onChange(e.target as HTMLInputElement)
    }
  }

  useEffect(() => {
    if (form.current) {
      form.current.addEventListener('submit', handleSubmit)
      form.current.addEventListener('input', handleInput)
      form.current.addEventListener('change', handleChange)
    }
    return () => {
      if (form.current) {
        form.current.removeEventListener('submit', handleSubmit)
        form.current.removeEventListener('input', handleInput)
        form.current.removeEventListener('change', handleChange)
      }
    }
  })

  return (
    <form ref={form} style={vars} className='gdf_base_form'>
      {
        props.rows.map((row) => (
          <Row key={row.id} {...row} />
        ))
      }
    </form>
  )
}
