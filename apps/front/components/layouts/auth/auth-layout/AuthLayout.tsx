import { FC, ReactNode } from 'react';
import { Stack, SxProps } from 'lib/mui';
import { BasicHeader } from 'components/main/basic-header';
import { SnackbarWithState } from 'components/main/snackbar-with-state';

type AuthLayoutProps = {
  children: ReactNode;
  sx?: SxProps;
};

export const AuthLayout: FC<AuthLayoutProps> = ({ sx, children }) => (
  <Stack alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', p: '0 5px', ...sx }}>
    <BasicHeader />
    {children}
    <SnackbarWithState />
  </Stack>
);
