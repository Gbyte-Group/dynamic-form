import React, { useEffect, useRef } from 'react'
import Row, { type RowProps } from '../Row'

export interface FormProps extends React.PropsWithChildren {
  gap: number
  rows: RowProps[]
  onChange?: (data: Record<string, string[]>) => void
  onInput?: (input: HTMLElement, data: Record<string, string[]>) => void
  onSubmit?: (submitter: HTMLButtonElement, data: Record<string, string[]>) => void
  CustomRow?: typeof Row
  CustomColumn?: RowProps['CustomColumns']
}

const FORM_PLACEHOLDER_DISPLAY_NAME = "GbyteFormPlaceholder"

const Slot = {
  [FORM_PLACEHOLDER_DISPLAY_NAME]() {
    return null
  }
}

Form.Placeholder = Slot[FORM_PLACEHOLDER_DISPLAY_NAME]

function replacePlaceholder(children: React.ReactNode, options?: React.ReactNode): React.ReactNode {
  if (!options) return children

  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child // 确保 child 是 ReactElement

    // 识别 Form.Placeholder
    if (child.type === Form.Placeholder || (typeof child.type === 'function' && child.type.name === FORM_PLACEHOLDER_DISPLAY_NAME)) {
      return options
    }

    // @ts-ignore
    if (child.props?.children) {
      return React.cloneElement(
        child,
        { ...child.props },
        // @ts-ignore
        replacePlaceholder(child.props?.children, options))
    }

    return child
  })
}



export default function Form({ onChange, onInput, onSubmit, rows, gap, CustomRow, CustomColumn, children }: FormProps) {

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

  const options = rows.map((row) => (
    CustomRow ?
      <CustomRow CustomColumns={CustomColumn} {...row} key={row.id} />
      : <Row CustomColumns={CustomColumn} {...row} key={row.id} />
  ))

  return (
    <form ref={form} className='gdf_component_form' style={vars}>
      {replacePlaceholder(children, options)}
    </form>
  )
}
