import { Box } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { Input as InputComponent, InputProps } from 'packages.inputs.input';

const Input = (props: InputProps) => (
  <Box sx={{ bgcolor: 'dark.500', p: '50px' }}>
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
  parameters: {
    docs: {
      description: {
        component: "import { Input } from 'packages.inputs.input';",
      },
    },
  },
};

type Story = StoryObj<InputProps>;

export const Standard: Story = {
  args: {
    type: 'password',
    value: '',
    label: 'standard',
    error: false,
    helperText: '',
    variant: 'standard',
  },
};

export const Outlined: Story = {
  args: {
    type: 'text',
    value: '',
    label: 'outlined-label',
    error: false,
    helperText: '',
    variant: 'outlined',
    placeholder: 'outlined-placeholder',
  },
};

export default meta;
