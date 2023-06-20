import { AccountPagesPaths } from 'common/pages-path/account-pages';
import { AccountTabs } from 'components/account/account-tabs';
import { Box, Stack } from 'lib/mui';
import { FC, ReactNode } from 'react';

type AccountLayoutProps = {
  children: ReactNode;
  currentTab: AccountPagesPaths;
};

export const AccountLayout: FC<AccountLayoutProps> = ({ children, currentTab }) => (
  <Stack sx={{ p: '24px', height: '100%' }}>
    <AccountTabs currentTab={currentTab} />

    <Box sx={{ pt: '24px', height: '100%' }}>{children}</Box>
  </Stack>
);
