import type { Meta, StoryObj } from '@storybook/react';
import {
  CircularProgress as ComponentCircularProgress,
  CircularProgressProps,
} from 'packages.components.circular-progress';
import { StoryCopyButton } from 'src/components/story-copy-button';

const CircularProgress = (props: CircularProgressProps) => (
  <>
    <StoryCopyButton
      path={
        "import { CircularProgress, CircularProgressProps } from 'packages.components.circular-progress';"
      }
    />

    <ComponentCircularProgress {...props} />
  </>
);

const meta: Meta<CircularProgressProps> = {
  title: 'UI/CircularProgress',
  component: CircularProgress,
  tags: ['autodocs'],
};

type Story = StoryObj<CircularProgressProps>;

export const Progress: Story = {
  args: {
    progressProps: { sx: { color: 'success.500' } },
  },
};

export default meta;
