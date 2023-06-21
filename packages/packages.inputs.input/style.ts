import { getScheme } from 'theme.scheme';

const { palette } = getScheme();

export const labelStyle = {
  standard: {
    color: 'light.900',
    '&.Mui-focused': {
      color: 'light.900',
    },
  },
  outlined: {
    fontSize: '14px',
    color: 'light.900',
    position: 'relative',
    transform: 'none',
    top: 0,
    '&.Mui-focused': {
      color: 'light.900',
    },
  },
};

export const helperTextStyle = {
  base: {
    color: 'light.900',
  },
  error: {
    color: 'danger.300',
  },
};

export const inputStyle = {
  base: {
    color: 'light.100',

    '&.MuiInputBase-root:has(> input:-webkit-autofill)': {
      input: {
        WebkitTextFillColor: palette.light[100],
        WebkitBoxShadow: `0 0 0 30px ${palette.dark[500]} inset`,
      },
    },
  },

  error: {
    color: 'danger.300',

    '&.MuiInputBase-root:has(> input:-webkit-autofill)': {
      input: {
        WebkitTextFillColor: palette.danger[300],
        WebkitBoxShadow: `0 0 0 30px ${palette.dark[500]} inset`,
      },
    },
  },
};

export const inputVariantsStyle = {
  standard: {
    general: {
      '&:after': {
        border: 'none',
      },
    },
    base: {
      '&:before': {
        borderColor: 'dark.300',
      },
      '&.MuiInputBase-root': {
        '&:hover': {
          '&:before': {
            borderBottom: '2px solid',
            borderBottomColor: 'dark.100',
          },
        },
      },
      '&.Mui-focused': {
        '&:before': {
          borderBottom: '2px solid',
          borderBottomColor: 'dark.100',
        },
      },
    },
    error: {
      '&:before': {
        borderColor: 'danger.300',
      },
      '&.MuiInputBase-root': {
        '&:hover': {
          '&:before': {
            borderBottom: '2px solid',
            borderBottomColor: 'danger.300',
          },
        },
      },
      '&.Mui-focused': {
        '&:before': {
          borderBottom: '2px solid',
          borderBottomColor: 'danger.300',
        },
      },
    },
  },
  outlined: {
    general: {
      border: '1px solid',
      borderRadius: '2px',
      fieldset: { display: 'none' },
      '& .MuiOutlinedInput-input': {
        p: '6px 12px',
        '&::placeholder': {
          color: 'light.900',
        },
      },
    },

    base: {
      borderColor: 'dark.300',
      '&:hover': {
        borderColor: 'dark.100',
      },
      '&.Mui-focused': {
        borderColor: 'dark.100',
      },
    },
    error: {
      borderColor: 'danger.300',
      '&:hover': {
        borderColor: 'danger.300',
      },
      '&.Mui-focused': {
        borderColor: 'danger.300',
      },
    },
  },
};
