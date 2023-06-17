'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ThemeProvider, createTheme } from 'lib/mui';
import { getScheme } from 'theme.scheme';

export const Providers = ({ children }: { children: ReactNode }) => {
  const theme = createTheme(getScheme());

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};
