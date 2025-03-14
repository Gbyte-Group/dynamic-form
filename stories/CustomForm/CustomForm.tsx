import React, { useMemo } from 'react'
import { FormProvider, Form as RawForm, useRegisterComponent, type FormProps } from '../../src'

function CustomForm(props: FormProps) {

  const CustomInput = useMemo(() => function CustomInput(props) {
    return (
      <div>
        {props.name}
      </div>
    )
  }, [])

  const CustomCheckbox = useMemo(() => function CustomCheckbox(props) {
    return (
      <div>
        {props.name}
      </div>
    )
  }, [])

  useRegisterComponent('input', CustomInput)

  useRegisterComponent('checkbox', CustomCheckbox)

  return (
    <RawForm  {...props} />
  )
}

export default function Form(props: FormProps) {
  return (
    <FormProvider>
      <CustomForm {...props} />
    </FormProvider>
  )
}
