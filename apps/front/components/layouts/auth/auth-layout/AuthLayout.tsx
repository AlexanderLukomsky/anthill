import { FC, ReactNode } from 'react';
import { Stack, SxProps } from 'mui.lib';
import { Header } from 'components/main/header';

type AuthLayoutProps = {
  children: ReactNode;
  sx?: SxProps;
};

export const AuthLayout: FC<AuthLayoutProps> = ({ sx, children }) => (
  <Stack alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', p: '0 5px', ...sx }}>
    <Header />
    {children}
  </Stack>
);
