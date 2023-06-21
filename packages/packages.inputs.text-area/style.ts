import { getScheme } from 'theme.scheme';

const { palette } = getScheme();
export const labelStyle = {
  fontSize: '14px',
  position: 'relative',
  transform: 'none',
  top: 0,
  color: 'light.900',
  '&.Mui-focused': {
    color: 'light.900',
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
  general: {
    bgcolor: 'dark.500',
    border: '1px solid',
    borderRadius: '2px',
    p: '6px 12px',
    '& .MuiOutlinedInput-input': {
      '&::placeholder': {
        color: 'light.900',
      },
    },
    fieldset: { display: 'none' },
  },

  base: {
    color: 'light.100',
    borderColor: 'dark.300',
    '&:hover': {
      borderColor: 'dark.100',
    },
    '&.Mui-focused': {
      borderColor: 'dark.100',
    },
    '&.MuiInputBase-root:has(> input:-webkit-autofill)': {
      input: {
        WebkitTextFillColor: palette.light[100],
        WebkitBoxShadow: `0 0 0 30px ${palette.dark[500]} inset`,
      },
    },
  },

  error: {
    color: 'danger.300',
    '&:hover': {
      borderColor: 'danger.300',
    },
    '&.Mui-focused': {
      borderColor: 'danger.300',
    },
    '&.MuiInputBase-root:has(> input:-webkit-autofill)': {
      input: {
        WebkitTextFillColor: palette.danger[300],
        WebkitBoxShadow: `0 0 0 30px ${palette.dark[500]} inset`,
      },
    },
  },
};
