'use client';

import { FC } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types';
import { DateValidationError } from '@mui/x-date-pickers';
import { Typography } from '@mui/material';
import { CalendarOutlineIcon } from 'packages.icons.calendar-outline';
import { calendarStyle, datePickerStyle, dayStyle } from './style';
import 'settings.config-muidts';

export type DatePickerProps = {
  value: any;
  label?: string;
  onChange: (value: any, context: PickerChangeHandlerContext<DateValidationError>) => void;
};

export const DatePicker: FC<DatePickerProps> = ({ value, label, onChange }) => (
  <>
    {label && (
      <Typography component="p" variant="regular_text_14" color="light.100">
        {label}
      </Typography>
    )}
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        sx={datePickerStyle}
        slotProps={{
          day: {
            disableRipple: true,
            sx: dayStyle,
          },
          layout: {
            sx: calendarStyle,
          },
        }}
        slots={{
          openPickerIcon: CalendarOutlineIcon,
        }}
        value={value}
        format="DD/MM/YYYY"
        onChange={onChange}
        disableFuture
        closeOnSelect={false}
        showDaysOutsideCurrentMonth
      />
    </LocalizationProvider>
  </>
);
