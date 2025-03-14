import type { Meta, StoryObj } from '@storybook/react'
import Select from '../src/Select'

const meta: Meta<typeof Select> = {
  title: 'Example/Select',
  component: Select,
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

export const Platform: Story = {
  args: {
    name: 'platform',
    options: [
      {
        label: 'web',
        value: 'web'
      },
      {
        label: 'ios',
        value: 'ios'
      },
      {
        label: 'android',
        value: 'android'
      }
    ],
    defaultValue: 'web',
  }
}
