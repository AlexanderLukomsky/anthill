import { Box } from '@mui/material';
import { useArgs } from '@storybook/client-api';
import type { Meta } from '@storybook/react';
import { DatePicker, DatePickerProps } from 'packages.inputs.date-picker';
import dayjs from 'dayjs';

export const ExampleDatePicker = ({ label }: DatePickerProps) => {
  const [{ value }, updateArgs] = useArgs();

  return (
    <Box sx={{ bgcolor: 'dark.900', p: '50px' }}>
      <DatePicker
        label={label}
        value={value ? dayjs(value) : null}
        onChange={(newValue) => {
          updateArgs({ value: dayjs(newValue) });
        }}
      />
    </Box>
  );
};

const meta: Meta<DatePickerProps> = {
  title: 'UI/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    value: null,
    label: 'Date of birthday',
  },
  argTypes: {
    value: {
      control: 'date',
    },
  },
  parameters: {
    docs: {
      description: {
        component: "import { DatePicker } from 'packages.inputs.date-picker'",
      },
    },
  },
};

export default meta;
