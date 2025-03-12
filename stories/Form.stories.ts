import type { Meta, StoryObj } from '@storybook/react'
import Form from '../src/Form'
import { AccountRow, PasswordRow } from './Row.stories'
import type { RowProps } from '../src/Row'

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
      PasswordRow.args as RowProps
    ]
  }
}
