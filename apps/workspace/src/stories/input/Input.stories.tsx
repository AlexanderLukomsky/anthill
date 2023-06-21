import { Box } from '@mui/material';
import { useArgs } from '@storybook/client-api';
import type { Meta } from '@storybook/react';
import { Input, InputProps } from 'packages.inputs.input';

export const ExampleInputStandard = (props: InputProps) => {
  const [{ value }, updateArgs] = useArgs();

  return (
    <Box sx={{ bgcolor: 'dark.500', p: '50px' }}>
      <Input
        value={value}
        onChange={(event) => updateArgs({ value: event.currentTarget.value })}
        {...props}
      />
    </Box>
  );
};

export const ExampleInputOutlined = (props: InputProps) => {
  const [{ value }, updateArgs] = useArgs();

  return (
    <Box sx={{ bgcolor: 'dark.500', p: '50px' }}>
      <Input
        value={value}
        onChange={(event) => updateArgs({ value: event.currentTarget.value })}
        {...props}
        variant="outlined"
      />
    </Box>
  );
};

const meta: Meta<InputProps> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    variant: 'standard',
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

export default meta;
