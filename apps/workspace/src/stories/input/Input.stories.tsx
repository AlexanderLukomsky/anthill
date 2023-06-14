import { Box } from '@mui/material';
import type { Meta } from '@storybook/react';
import { Input, InputProps } from 'packages.inputs.input';
import { StoryCopyButton } from 'src/components/story-copy-button';

const meta: Meta<InputProps> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    type: 'text',
    value: '',
    label: 'label',
    error: true,
    helperText: '',
  },
};

export const Example = (props: InputProps) => (
  <Box sx={{ bgcolor: 'dark.500', p: '50px' }}>
    <StoryCopyButton path="import { Input } from 'packages.inputs.input';" />

    <Input {...props} />
  </Box>
);

export default meta;
