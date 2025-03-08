import type { Meta, StoryObj } from '@storybook/react'
import Form from '../src/Form'
import { EAlign, type IColumn } from '../src/types'
import { account, email, password } from './Input.stories'

const meta: Meta<typeof Form> = {
  title: 'Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Form>

export const FormStory: Story = {
  args: {
    onChange(el) {
      console.log('change', el.value)
    },
    onSubmit(form, submitter) {
      const formData = new FormData(form)
      const data = Object.fromEntries(formData.entries())
      console.log('submit', data, submitter)
    },
    onInput(el) {
      console.log('input', el.value)
    },
    width: '42rem',
    borderRadius: '.5rem',
    rows: [
      {
        id: 'row-1',
        width: '100%',
        height: '3rem',
        vertical: EAlign.CENTER,
        gap: '.5rem',
        horizontal: EAlign.BETWEEN,
        columns: [
          {
            ...account.args as IColumn,
            width: '40%',
            height: '2rem',
            borderWidth: '1px',
            borderRadius: '.25rem',
            padding: ['.25rem'],
          },
          {
            ...password.args as IColumn,
            width: '40%',
            height: '2rem',
            borderWidth: '1px',
            borderRadius: '.25rem',
            padding: ['.25rem'],
          }
        ]
      },
      {
        id: 'row-2',
        height: '3rem',
        width: '100%',
        gap: '.5rem',
        columns: [
          {
            ...password.args as IColumn,
            height: '2rem',
            borderWidth: '1px',
            borderRadius: '.25rem',
            padding: ['.25rem'],
          }
        ]
      },
      {
        id: 'row-3',
        height: '3rem',
        width: '100%',
        gap: '.5rem',
        columns: [
          {
            ...email.args as IColumn,
            height: '2rem',
            borderWidth: '1px',
            borderRadius: '.25rem',
            padding: ['.25rem'],
          }
        ]
      }
    ]
  }
}
