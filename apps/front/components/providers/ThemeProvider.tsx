'use client';

import { ThemeProvider as MuiThemeProvider, createTheme } from 'mui.lib';
import { ReactNode } from 'react';
import { getScheme } from 'theme.scheme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme(getScheme());

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
