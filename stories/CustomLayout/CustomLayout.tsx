import React from 'react'
import { FormProvider, Form as RawForm, useRegisterComponent, type FormProps } from '../../src'

function CustomForm(props: FormProps) {
  useRegisterComponent('input', props => {
    return (
      <div>
        {props.name}
      </div>
    )
  })

  return (
    <div>
      <div>Page Header</div>
      <hr />
      <RawForm  {...props} >
        <details>
          <summary>Goods List</summary>
          <ul>
            <li><span>goods-1</span> <span>price<i>$1</i></span></li>
          </ul>
        </details>
        <div>
          <hr />
          <details>
            <summary>user info</summary>
            <div>
              xxxx,
              xxxx,
              xxxx
            </div>
          </details>
          <RawForm.Placeholder />
          <hr />
          <details>
            <summary>delivery tips</summary>
            <div>
              xxxx,
              xxxx,
              xxxx
            </div>
          </details>
        </div>
      </RawForm>
      <hr />
      <div>Page Footer</div>
    </div>
  )
}

export default function Form(props: FormProps) {
  return (
    <FormProvider>
      <CustomForm {...props} />
    </FormProvider>
  )
}
