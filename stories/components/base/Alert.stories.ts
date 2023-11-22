import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from "@/components/ui/alert"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Base/Alert',
  component: Alert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { 
      control: 'select', 
      options: [ 'primary', 'secondary', 'info', 'success', 'warning', 'danger' ],
    },
    icon: {
      constrol: 'text',
    },
    title: {
      constrol: 'text',
    },
    description: {
      constrol: 'text',
    },
    onClose: {
      constrol: 'object',
    },
  },
  args: {
    variant: 'primary',
    title: '',
    description: 'Lorem ispum dolor sit amet',
    onClose: undefined
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};

export const CustomIcon: Story = {
  args: {
    icon: 'home'
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Lorem ipsum',
  },
};

export const Closable: Story = {
  args: {
    title: 'Lorem ipsum',
    onClose: () => {},
  },
};

export const WithChildren: Story = {
  args: {
    title: 'Lorem ipsum',
    children: 'Some content here'
  },
};
