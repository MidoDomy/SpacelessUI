import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from "@/components/ui/icon"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Base/Icon',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    name: {
      constrol: 'text',
    },
    size: { 
      control: 'inline-radio', 
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md'
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    name: 'home'
  },
};

export const Small: Story = {
  args: {
    name: 'home',
    size: 'sm'
  },
};

export const Large: Story = {
  args: {
    name: 'home',
    size: 'lg'
  },
};
