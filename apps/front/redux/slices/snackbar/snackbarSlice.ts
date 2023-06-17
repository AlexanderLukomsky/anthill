import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authService } from 'services/auth/api';
import { handleAuthErrors } from 'services/auth/helpers';
import { Severity, SnackbarPayload } from './types';

const initialState = {
  isShow: false,
  message: '',
  severity: 'success' as Severity,
};

export const slice = createSlice({
  name: 'Snackbar',
  initialState,
  reducers: {
    setShowSnackbar: (state, action: PayloadAction<SnackbarPayload>) => {
      state.isShow = action.payload.isShowSnackbar;
      state.message = action.payload.message;

      if (action.payload.severity) {
        state.severity = action.payload.severity;
      }
    },

    setCloseSnackbar: (state) => {
      state.isShow = false;
      state.message = '';
    },
  },

  extraReducers(builder) {
    builder
      .addMatcher(authService.endpoints.registration.matchFulfilled, (state, action) => {
        state.isShow = true;
        state.severity = 'success';
        state.message = 'registration completed successfully';
      })

      .addMatcher(
        isAnyOf(
          authService.endpoints.registration.matchRejected,
          authService.endpoints.signIn.matchRejected,
        ),
        (state, action) => {
          state.isShow = true;
          state.severity = 'error';
          state.message = handleAuthErrors(action.payload);
        },
      );
  },
});

export const { setShowSnackbar, setCloseSnackbar } = slice.actions;

export const snackbarReducer = slice.reducer;
