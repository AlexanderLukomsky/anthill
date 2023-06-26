import { IconButton } from '@mui/material';
import { FC, MouseEventHandler } from 'react';
import CloseIcon from '@mui/icons-material/Close';

type CloseButtonProps = { onClick: MouseEventHandler<HTMLButtonElement> };

export const CloseButton: FC<CloseButtonProps> = ({ onClick }) => (
  <IconButton
    sx={{
      position: 'fixed',
      right: '32px',
      top: '32px',
      width: '40px',
      height: '40px',
      bgcolor: '#404040',
      '&:hover': {
        bgcolor: '#404040',
      },
    }}
    onClick={onClick}
  >
    <CloseIcon sx={{ color: '#fff' }} />
  </IconButton>
);
