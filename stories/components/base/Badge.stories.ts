import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '@/components/ui/badge'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Base/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      constrol: 'text',
      description:
        'This is default storybook option to change content of the component.',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'success', 'warning', 'danger'],
    },
    absolute: {
      control: 'boolean',
      description:
        'The element on the basis of which the badge is positioned should have position relative.',
    },
    top: {
      control: 'boolean',
    },
    bottom: {
      control: 'boolean',
    },
    left: {
      control: 'boolean',
    },
    right: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Badge text',
    variant: 'primary',
    rounded: false,
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {}

export const Rounded: Story = {
  args: {
    rounded: true,
  },
}
