const controlsBgColor = 'rgba(16, 16, 16, 0.4)';
const mainContainerBgColor = 'rgba(27, 27, 27, 0.4)';

export const iconStyle = { color: 'petersburg.0' };

export const iconButtonStyle = { width: '24px', height: '24px', p: 0 };

export const containerStyle = {
  bgcolor: mainContainerBgColor,
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  p: '24px',
};

export const controlsContainerStyle = {
  bgcolor: controlsBgColor,
  p: '16px',
  position: 'fixed',
  bottom: '32px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  zIndex: 1,
  gap: '8px',
  borderRadius: '8px',
  maxWidth: '638px',
  width: '100%',
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
  bgcolor: 'petersburg.80',
  '&:hover': {
    bgcolor: 'petersburg.80',
  },
};
