import { AccountPagesPaths } from 'common/pages-path/account-pages';
import { AccountTabs } from 'components/account/account-tabs';
import { Box, Stack, SxProps } from 'lib/mui';
import { FC, ReactNode } from 'react';

type AccountLayoutProps = {
  children: ReactNode;
  currentTab: AccountPagesPaths;
  sx?: SxProps;
};

export const AccountLayout: FC<AccountLayoutProps> = ({ children, currentTab, sx }) => (
  <Stack
    sx={{ p: '24px 10px', height: '100%', m: '0 auto', maxWidth: '746px', width: '100%', ...sx }}
  >
    <AccountTabs currentTab={currentTab} />

    <Box sx={{ pt: '24px', height: '100%', width: '100%' }}>{children}</Box>
  </Stack>
);
