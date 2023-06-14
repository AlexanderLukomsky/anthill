import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';

export const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
);
