import type { Meta, StoryObj } from '@storybook/react'
import Form from '../src/Form'
import { AccountRow, LoginRow, PasswordRow } from './Row.stories'
import type { RowProps } from '../src/Row'
import '../src/index.css'

const meta: Meta<typeof Form> = {
  title: 'Example/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const LoginForm: Story = {
  args: {
    gap: 10,
    rows: [
      AccountRow.args as RowProps,
      PasswordRow.args as RowProps,
      LoginRow.args as RowProps,
      {
        id: 'submit-row',
        gap: 10,
        columns: [
          {
            id: 'submit-col',
            width: 380,
            height: 30,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: 'gray',
            fontColor: 'red',
            component: [
              {
                id: 'submit-button',
                type: 'button',
                props: {
                  type: 'submit',
                  text: 'Submit Form'
                }
              }
            ]
          }
        ]
      }
    ],
    onChange(data) {
      console.log(data)
    },
    onSubmit(submitter, data) {
      console.log(submitter, data)
    },
    onInput(input, data) {
      console.log(input, data)
    },
  }
}
