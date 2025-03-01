import type { Meta, StoryObj } from '@storybook/react'
import Input from '../src/Input'

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const normal: Story = {
  args: {
    label: 'normal',
    icon: 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMCAyMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMi41IDUuNDc4MDNDMi41IDQuNjQ5NiAzLjE3MTU3IDMuOTc4MDMgNCAzLjk3ODAzSDE2QzE2LjgyODQgMy45NzgwMyAxNy41IDQuNjQ5NiAxNy41IDUuNDc4MDNWMTQuMTQ0N0MxNy41IDE0Ljk3MzEgMTYuODI4NCAxNS42NDQ3IDE2IDE1LjY0NDdINEMzLjE3MTU3IDE1LjY0NDcgMi41IDE0Ljk3MzEgMi41IDE0LjE0NDdWNS40NzgwM1onIHN0cm9rZT0nIzgzOTJCMScvPjxwYXRoIGQ9J00xNi45MDY4IDMuOTcyMjlMMTEuMzE0IDguOTg0NTlDMTAuNTU0NCA5LjY2NTMxIDkuNDA5MSA5LjY1OTQ3IDguNjU2NCA4Ljk3MTA2TDMuMTQwNjIgMy45MjYzOScgc3Ryb2tlPScjODM5MkIxJy8+PC9zdmc+IA==',
    focusIcon: 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMCAyMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPSdNMyAxOUMzIDE0LjkxNzkgNS45NTY1MiAxMy40NTY1IDEwLjM5MTMgMTMuNDU2NU0xNy40MTMgMTlDMTcuNDEzIDE0LjkxNzkgMTQuNDU2NSAxMy40NTY1IDEwLjAyMTcgMTMuNDU2NScgc3Ryb2tlPScjODM5MkIxJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLz48Y2lyY2xlIGN4PScxMC4zOTI3JyBjeT0nNy4xNzM5MScgcj0nNC42NzM5MScgc3Ryb2tlPScjODM5MkIxJy8+PC9zdmc+IA==',
  }
}
