import { useEffect, useRef } from 'react'
import Row, { type RowProps } from '../Row'
import './index.css'
import FormProvider from '../FormProvider'

export interface FormProps {
  gap: number
  rows: RowProps[]
  onChange?: (data: Record<string, string[]>) => void
  onInput?: (input: HTMLElement, data: Record<string, string[]>) => void
  onSubmit?: (submitter: HTMLButtonElement, data: Record<string, string[]>) => void
}

export default function Form({ onChange, onInput, onSubmit, rows, gap }: FormProps) {

  const form = useRef<HTMLFormElement>(null)

  const vars = {
    '--gdf_component_form_gap': gap
  } as React.CSSProperties

  useEffect(() => {
    const getFormData = () => {
      const data: Record<string, string[]> = {}
      if (form.current) {
        new FormData(form.current).forEach((value, key) => {
          if (!data[key]) data[key] = []
          data[key].push(value as string)
        })
      }
      return data
    }

    const inputHandler = (e: Event) => {
      const input = e.target as HTMLElement
      const data = getFormData()
      onInput?.(input, data)
    }

    const changeHandler = (e: Event) => {
      const data = getFormData()
      onChange?.(data)
    }

    const submitHandler = (e: SubmitEvent) => {
      e.preventDefault()
      const submitter = (e.submitter as HTMLButtonElement) ?? (document.activeElement as HTMLButtonElement)
      const data = getFormData()
      onSubmit?.(submitter, data)
    }

    // Use native event listeners instead of React event bindings
    // because native events do not trigger React synthetic events
    if (form.current) {
      form.current.addEventListener('input', inputHandler)
      form.current.addEventListener('change', changeHandler)
      form.current.addEventListener('submit', submitHandler)
    }
    return () => {
      if (form.current) {
        form.current.removeEventListener('input', inputHandler)
        form.current.removeEventListener('change', changeHandler)
        form.current.removeEventListener('submit', submitHandler)
      }
    }
  }, [onChange, onInput, onSubmit])

  return (
    <form ref={form} className='gdf_component_form' style={vars}>
      {rows.map((row) => (
        <Row {...row} key={row.id} />
      ))}
    </form>
  )
}
