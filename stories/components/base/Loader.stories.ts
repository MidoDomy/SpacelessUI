import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from "@/components/ui/loader"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/Base/Loader',
  component: Loader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { 
      control: 'inline-radio', 
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    size: 'md'
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm'
  },
};

export const Large: Story = {
  args: {
    size: 'lg'
  },
};
