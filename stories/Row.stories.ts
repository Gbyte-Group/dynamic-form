import type { Meta, StoryObj } from '@storybook/react'
import Row from '../src/Row'
import { Account, Email, Password } from './Column.stories'
import type { ColumnProps } from '../src/Column'

const meta: Meta<typeof Row> = {
  title: 'Example/Row',
  component: Row,
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

export const AccountRow: Story = {
  args: {
    id: 'account-row',
    gap: 10,
    columns: [
      Account.args as ColumnProps,
      Email.args as ColumnProps
    ]
  }
}

export const PasswordRow: Story = {
  args: {
    id: 'password-row',
    gap: 10,
    columns: [
      Password.args as ColumnProps
    ]
  }
}
