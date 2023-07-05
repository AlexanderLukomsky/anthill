const controlsBgColor = 'rgba(76, 76, 76, 0.4)';
const mainContainerBgColor = 'rgba(91, 91, 91, 0.3)';

export const mainColor = 'light.100';

export const iconStyle = { color: mainColor };
export const textStyle = { color: mainColor, fontWeight: 400, minWidth: '37px' };

export const iconButtonStyle = { width: '24px', height: '24px', p: 0 };

export const mainContainerStyle = {
  bgcolor: mainContainerBgColor,
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  p: '32px',
};

export const playerWrapperStyle = {
  width: '100%',
  height: '100%',
  video: {
    borderRadius: '8px',
    overflow: 'hidden',
  },
};

export const playerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  overflow: 'hidden',
};

export const controlsContainerStyle = {
  bgcolor: controlsBgColor,
  p: '8px 16px',
  position: 'fixed',
  bottom: '32px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  gap: '4px',
  borderRadius: '8px',
  maxWidth: '638px',
  width: '100%',
};

export const controlsRowStyle = {
  gap: '16px',
  minHeight: '36px',
};

export const rangeContainerStyle = {
  bgcolor: controlsBgColor,
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: '-190px',
  p: '16px 0',
  left: '50%',
  transform: 'translateX(-50%)',
  height: '182px',
  width: '36px',
  borderRadius: '8px',
};

export const closeButtonStyle = {
  zIndex: 1,
  position: 'fixed',
  right: '32px',
  top: '32px',
  width: '40px',
  height: '40px',
  bgcolor: 'dark.100',
  '&:hover': {
    bgcolor: 'dark.100',
  },
};

export const rangeStyle = {
  default: {
    '& .MuiSlider-thumb': {
      color: mainColor,
      '&:hover': {
        boxShadow: 'none',
      },
    },
    '& .MuiSlider-track': {
      bgcolor: mainColor,
    },
    '& .MuiSlider-rail': {
      bgcolor: mainColor,
      opacity: 0.3,
    },
  },

  vertical: {
    '&.MuiSlider-root': {
      p: '0 13px',
    },
  },
  horizontal: {
    '&.MuiSlider-root': {
      p: '15px 0',
    },
  },
};
