import type { Meta, StoryObj } from '@storybook/react'
import Row from '../src/Row'
import { Account, Email, NotLogin, Password } from './Column.stories'
import type { ColumnProps } from '../src/Column'
import { Platform } from './Select.stories'
import type { SelectProps } from '../src/Select'

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
      Password.args as ColumnProps,
      {
        id: 'platform-col',
        width: 175,
        height: 30,
        paddingX: 5,
        verticalAlign: 'start',
        backgroundColor: 'white',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        component: {
          id: 'platform-select',
          type: 'select',
          props: Platform.args as SelectProps
        }
      }
    ]
  }
}

export const LoginRow: Story = {
  args: {
    id: 'login-row',
    gap: 10,
    columns: [
      NotLogin.args as ColumnProps
    ],
  }
}
