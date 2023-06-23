import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authService } from 'services/auth/api';
import { snackbarReducer } from './slices/snackbar';
import { appReducer } from './slices/app';
import { accountInformationReducer } from './slices/account-information';

const rootReducer = combineReducers({
  app: appReducer,
  snackbar: snackbarReducer,
  accountInformation: accountInformationReducer,
  [authService.reducerPath]: authService.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authService.middleware]),
});

export type AppRootState = ReturnType<typeof rootReducer>;
