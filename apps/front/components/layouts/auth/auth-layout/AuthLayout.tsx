import { FC, ReactNode } from 'react';
import { Stack, SxProps } from 'lib/mui';
import { Header } from 'components/main/header';
import { SnackbarWithState } from 'components/main/snackbar-with-state';

type AuthLayoutProps = {
  children: ReactNode;
  sx?: SxProps;
};

export const AuthLayout: FC<AuthLayoutProps> = ({ sx, children }) => (
  <Stack alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', p: '0 5px', ...sx }}>
    <Header />
    {children}
    <SnackbarWithState />
  </Stack>
);
