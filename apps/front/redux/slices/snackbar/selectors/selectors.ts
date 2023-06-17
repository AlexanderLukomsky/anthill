import { AppRootState } from 'redux/store';

export const getSnackbarState = (state: AppRootState) => state.snackbar;
