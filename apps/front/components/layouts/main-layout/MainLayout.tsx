import { Stack } from 'lib/mui';
import { FC, ReactNode } from 'react';
import { Header } from 'components/main/header';
import { Sidebar } from './sidebar/Sidebar';

export type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <Stack sx={{ minHeight: '100vh', pt: '60px' }}>
    <Header />
    <Stack direction="row" sx={{ flexGrow: 1 }}>
      <Sidebar />
      <Stack sx={{ width: '100%' }}>{children}</Stack>
    </Stack>
  </Stack>
);
