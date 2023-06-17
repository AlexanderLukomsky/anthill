'use client';

import { Snackbar } from 'packages.components.snackbar';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux/hooks';
import { setCloseSnackbar } from 'redux/slices/snackbar';
import { getSnackbarState } from 'redux/slices/snackbar/selectors';

export const SnackbarWithState = () => {
  const dispatch = useAppDispatch();

  const { isShow, message, severity } = useSelector(getSnackbarState);

  const handleClose = () => {
    dispatch(setCloseSnackbar());
  };

  return <Snackbar onClose={handleClose} open={isShow} message={message} severity={severity} />;
};
