import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { Input as InputComponent, InputProps } from 'packages.inputs.input';
import { StoryCopyButton } from 'src/components/story-copy-button';

const Input = (props: InputProps) => (
  <Box sx={{ bgcolor: 'dark.500', p: '50px' }}>
    <StoryCopyButton path="import { Input } from 'packages.inputs.input';" />

    <InputComponent {...props} />
  </Box>
);

const meta: Meta<InputProps> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    type: 'text',
    value: '',
    label: 'label',
    error: false,
    helperText: '',
  },
};

type Story = StoryObj<InputProps>;

export const Example: Story = {
  args: {
    type: 'password',
    value: '',
    label: 'label',
    error: false,
    helperText: '',
  },
};

export default meta;
