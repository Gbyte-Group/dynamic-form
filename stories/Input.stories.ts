import type { Meta, StoryObj } from '@storybook/react'
import Input from '../src/Input'

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
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

// "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMCAyMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMyAxOUMzIDE0LjkxNzkgNS45NTY1MiAxMy40NTY1IDEwLjM5MTMgMTMuNDU2NU0xNy40MTMgMTlDMTcuNDEzIDE0LjkxNzkgMTQuNDU2NSAxMy40NTY1IDEwLjAyMTcgMTMuNDU2NScgc3Ryb2tlPScjODM5MkIxJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLz48Y2lyY2xlIGN4PScxMC4zOTI3JyBjeT0nNy4xNzM5MScgcj0nNC42NzM5MScgc3Ryb2tlPScjODM5MkIxJy8+PC9zdmc+IA=="
// "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMCAyMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMi41IDUuNDc4MDNDMi41IDQuNjQ5NiAzLjE3MTU3IDMuOTc4MDMgNCAzLjk3ODAzSDE2QzE2LjgyODQgMy45NzgwMyAxNy41IDQuNjQ5NiAxNy41IDUuNDc4MDNWMTQuMTQ0N0MxNy41IDE0Ljk3MzEgMTYuODI4NCAxNS42NDQ3IDE2IDE1LjY0NDdINEMzLjE3MTU3IDE1LjY0NDcgMi41IDE0Ljk3MzEgMi41IDE0LjE0NDdWNS40NzgwM1onIHN0cm9rZT0nIzgzOTJCMScvPjxwYXRoIGQ9J00xNi45MDY4IDMuOTcyMjlMMTEuMzE0IDguOTg0NTlDMTAuNTU0NCA5LjY2NTMxIDkuNDA5MSA5LjY1OTQ3IDguNjU2NCA4Ljk3MTA2TDMuMTQwNjIgMy45MjYzOScgc3Ryb2tlPScjODM5MkIxJy8+PC9zdmc+IA=="
// "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTE1IDdINUMzLjg5NTQzIDcgMyA3Ljk4NTAxIDMgOS4yVjE1LjhDMyAxNy4wMTUgMy44OTU0MyAxOCA1IDE4SDE1QzE2LjEwNDUgMTggMTcgMTcuMDE1IDE3IDE1LjhWOS4yQzE3IDcuOTg1MDEgMTYuMTA0NSA3IDE1IDdaIiBzdHJva2U9IiM4MzkyQjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiA3VjUuMTI1QzYgNC4yOTYyIDYuNDIxNDMgMy41MDEzNCA3LjE3MTU3IDIuOTE1MjlDNy45MjE3MSAyLjMyOTI0IDguOTM5MDkgMiAxMCAyQzExLjA2MDkgMiAxMi4wNzgzIDIuMzI5MjQgMTIuODI4NSAyLjkxNTI5QzEzLjU3ODYgMy41MDEzNCAxNCA0LjI5NjIgMTQgNS4xMjVWNyIgc3Ryb2tlPSIjODM5MkIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMiIgcj0iMSIgZmlsbD0iIzgzOTJCMSIvPgo8L3N2Zz4="

export const Account: Story = {
  args: {
    name: 'account',
    placeholder: 'Please input you account',
    mode: 'text'
  }
}

export const Password: Story = {
  args: {
    name: 'password',
    placeholder: "Please input you password",
    mode: 'password'
  }
}

export const Email: Story = {
  args: {
    name: 'email',
    placeholder: "Please input you email",
    mode: 'email'
  }
}

export const Age: Story = {
  args: {
    name: 'age',
    placeholder: "Please input you age",
    mode: 'number',
    min: 18,
    max: 200
  }
}

export const Phone: Story = {
  args: {
    name: 'phone',
    placeholder: "Please input you phone",
    mode: 'tel'
  }
}
