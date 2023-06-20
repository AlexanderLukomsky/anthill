import { getScheme } from 'theme.scheme';

const { palette } = getScheme();

export const inputStyle = {
  default: {
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

export const helperTextStyle = {
  default: {
    color: 'light.900',
  },
  error: {
    color: 'danger.300',
  },
};

export const getTextFieldStyle = (variant: 'standard' | 'outlined', error: boolean) => {
  const borderColor = error ? 'danger.300' : 'dark.300';
  const hoveredBorderColor = error ? 'danger.300' : 'dark.100';

  if (variant === 'standard') {
    return {
      '& .MuiInputBase-root': {
        '&:before': {
          borderColor,
        },
        '&.MuiInput-root': {
          '&:hover': {
            '&:before': {
              borderBottom: '2px solid',
              borderBottomColor: hoveredBorderColor,
            },
          },
        },
        '&:after': {
          border: 'none',
        },
      },
    };
  }

  return {
    '& .MuiFormLabel-root': {
      position: 'relative',
      transform: 'none',
      top: 0,
      color: 'light.900',
      '&.Mui-focused': {
        color: 'light.300',
      },
    },

    '& .MuiInputBase-root': {
      '&:hover': {
        '& .MuiInputBase-input': {
          borderColor: hoveredBorderColor,
        },
      },
      '&.Mui-focused': {
        '& .MuiInputBase-input': {
          borderColor: hoveredBorderColor,
        },
      },
      '& .MuiInputBase-input': {
        border: '1px solid',
        borderColor,
        p: '6px 12px',
        borderRadius: '2px',

        '&.MuiOutlinedInput-input': {
          '&::placeholder': {
            color: 'light.900',
          },
        },
      },

      fieldset: { display: 'none' },
    },
  };
};
