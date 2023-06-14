export const textFieldStyle = {
  default: {
    '& .MuiInputBase-root': {
      '&:before': {
        borderColor: 'dark.300',
      },
      '&.MuiInput-root': {
        '&:hover': {
          '&:before': {
            borderBottom: '2px solid',
            borderColor: 'dark.100',
          },
        },
      },
      '&:after': {
        border: 'none',
      },
    },
    '& .MuiFormLabel-root': {
      color: 'light.900',
      '&.Mui-focused': {
        color: 'light.900',
      },
    },
  },
  error: {
    '& .MuiInputBase-root': {
      '&:before': {
        borderColor: 'danger.300',
      },
      '&:hover': {
        '&:before': {
          borderBottom: '2px solid',
          borderColor: 'danger.300',
        },
      },
      '&:after': {
        border: 'none',
      },
    },
  },
};

export const inputStyle = {
  default: {
    color: 'light.100',
  },
  error: {
    color: 'danger.300',
  },
};

export const iconStyle = {
  default: {
    color: 'light.900',
  },
  error: {
    color: 'danger.300',
  },
};

export const helperTextStyle = {
  default: {
    color: 'light.900',
  },
  error: {
    color: 'danger.300',
  },
};
