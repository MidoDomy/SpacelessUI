import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Base/Button',
  component: Button,
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
      options: [
        'primary',
        'primary-outline',
        'primary-ghost',
        'secondary',
        'secondary-outline',
        'secondary-ghost',
        'info',
        'info-outline',
        'info-ghost',
        'success',
        'success-outline',
        'success-ghost',
        'warning',
        'warning-outline',
        'warning-ghost',
        'danger',
        'danger-outline',
        'danger-ghost',
      ],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    asChild: {
      description:
        'If you want the child component to take over all the properties of the button, add this attribute.',
    },
    icon: {
      control: 'select',
      options: ['iconHome'],
      mapping: {
        iconHome: 'home',
      },
    },
    iconLeft: {
      control: 'select',
      options: ['iconHome'],
      mapping: {
        iconHome: 'home',
      },
    },
    iconRight: {
      control: 'select',
      options: ['iconHome'],
      mapping: {
        iconHome: 'home',
      },
    },
    onlyIcon: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
      description: 'Loading will replace left icon with loading spinner.',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    children: 'Button text',
    variant: 'primary',
    size: 'md',
    rounded: false,
    fullWidth: false,
    loading: false,
    disabled: false,
    asChild: false,
    onlyIcon: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {}

export const Outline: Story = {
  args: {
    variant: 'primary-outline',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'primary-ghost',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Rounded: Story = {
  args: {
    rounded: true,
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
}

export const Icon: Story = {
  args: {
    icon: 'iconHome',
  },
}

export const IconLeft: Story = {
  args: {
    iconLeft: 'iconHome',
  },
}

export const IconRight: Story = {
  args: {
    iconRight: 'iconHome',
  },
}

export const OnlyIcon: Story = {
  args: {
    icon: 'iconHome',
    onlyIcon: true,
  },
}

export const OnlyIconRounded: Story = {
  args: {
    icon: 'iconHome',
    onlyIcon: true,
    rounded: true,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}
