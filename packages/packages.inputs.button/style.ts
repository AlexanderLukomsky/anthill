export const colorStyle = {
  primary: {
    contained: {
      bgcolor: 'primary.500',
      color: 'white',
      border: 'none',
      '&:hover': {
        bgcolor: 'primary.700',
      },
    },
    outlined: {
      bgcolor: 'none',
      color: 'primary.300',
      border: '1px solid',
      borderColor: 'primary.500',
    },
    text: {
      color: 'primary.300',
    },
  },
  light: {
    contained: {
      bgcolor: 'light.300',
      color: 'dark.500',
      border: 'none',
      '&:hover': {
        bgcolor: 'light.700',
      },
    },
    outlined: {
      bgcolor: 'none',
      color: 'light.300',
      border: '1px solid',
      borderColor: 'light.300',
      '&:hover': {
        color: 'light.300',
        border: '1px solid',
        borderColor: 'light.500',
      },
    },
    text: {
      color: 'light.300',
    },
  },
  danger: {
    contained: {
      bgcolor: 'danger.300',
      color: 'light.100',
      border: 'none',
      '&:hover': {
        bgcolor: 'danger.700',
      },
    },
    outlined: {
      bgcolor: 'none',
      color: 'danger.300',
      border: '1px solid',
      borderColor: 'danger.300',
      '&:hover': {
        color: 'danger.700',
        border: '1px solid ',
        borderColor: 'danger.700',
      },
    },
    text: {
      color: 'danger.300',
    },
  },
};

export const sizeStyle = {
  large: {
    height: '48px',
  },
  medium: {
    height: '36px',
  },
};

export const disabledStyle = {
  contained: {
    backgroundColor: 'light.900',
    color: 'light.500',
  },
  outlined: {
    borderColor: 'light.900',
    backgroundColor: 'transparent',
    color: 'light.900',
  },
  text: {
    backgroundColor: 'transparent',
    color: 'light.900',
  },
};
