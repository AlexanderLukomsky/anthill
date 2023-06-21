import { Box } from '@mui/material';
import { useArgs } from '@storybook/client-api';
import type { Meta } from '@storybook/react';
import { TextArea, TextAreaProps } from 'packages.inputs.text-area';

export const ExampleTextArea = (props: TextAreaProps) => {
  const [{ value }, updateArgs] = useArgs();

  return (
    <Box sx={{ bgcolor: 'dark.900', p: '50px' }}>
      <TextArea
        onChange={(event) => updateArgs({ value: event.currentTarget.value })}
        value={value}
        {...props}
      />
    </Box>
  );
};

const meta: Meta<TextAreaProps> = {
  title: 'UI/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    helperText: '',
    error: false,
    value: '',
    label: 'textarea label',
    placeholder: 'textarea placeholder',
  },
  parameters: {
    docs: {
      description: {
        component: "import { TextArea } from 'packages.inputs.text-area'",
      },
    },
  },
};

export default meta;
