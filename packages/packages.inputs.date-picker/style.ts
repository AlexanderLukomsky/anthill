export const datePickerStyle = {
  maxWidth: '158px',
  input: { color: 'light.100', fontSize: '16px', p: 0, height: '22px' },
  button: { color: 'light.100', p: 0 },

  '& .MuiInputBase-root': {
    borderRadius: '2px',
    p: '6px 22px 6px 12px',
    fieldset: {
      borderColor: 'dark.300',
    },

    '&:hover': {
      fieldset: {
        borderColor: 'dark.100',
      },
    },

    '&.Mui-focused': {
      fieldset: {
        borderWidth: '1px',
        borderColor: 'dark.100',
      },
    },
  },
};

export const calendarStyle = {
  color: 'light.100',
  border: '1px solid',
  bgcolor: 'dark.500',
  borderColor: 'dark.300',
  borderRadius: '2px',

  svg: {
    color: 'light.100',
  },

  '& .MuiDayCalendar-weekDayLabel': {
    color: 'dark.100',
  },
  '& .MuiPickersDay-dayOutsideMonth': {
    color: 'dark.100',
  },
};

export const dayStyle = {
  color: 'light.100',
  lineHeight: 0,
  '&.Mui-selected': {
    backgroundColor: 'primary.500',
    border: '4px solid',
    borderColor: 'primary.900',
  },
  '&.MuiPickersDay-today': {
    lineHeight: 0,
    color: 'primary.500',
    backgroundColor: 'transparent',
    border: 'none',
    '&.Mui-selected': {
      color: 'light.100',
      lineHeight: 0,
      backgroundColor: 'primary.500',
      border: '4px solid',
      borderColor: 'primary.900',
    },
  },
  '&.MuiButtonBase-root.Mui-disabled': {
    color: 'dark.300',
  },
};
