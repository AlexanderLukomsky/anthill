import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authService } from 'services/auth/api';
import { snackbarReducer } from './slices/snackbar';

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  [authService.reducerPath]: authService.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authService.middleware]),
});

export type AppRootState = ReturnType<typeof rootReducer>;
