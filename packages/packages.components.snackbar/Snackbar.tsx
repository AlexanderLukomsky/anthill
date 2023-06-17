import { FC, SyntheticEvent } from 'react';
import { Snackbar as MuiSnackbar, Alert } from '@mui/material';

export type SnackbarProps = {
  open: boolean;
  message: string;
  severity?: 'error' | 'success';
  disableClickAway?: boolean;
  autoHideDuration?: number;
  onClose?: (event?: SyntheticEvent | Event, reason?: string) => void;
};

export const Snackbar: FC<SnackbarProps> = ({
  open,
  message,
  severity = 'success',
  disableClickAway = true,
  autoHideDuration = 2500,
  onClose,
}) => {
  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (disableClickAway) {
      return;
    }

    if (onClose) onClose(event, reason);
  };

  return (
    <MuiSnackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};
