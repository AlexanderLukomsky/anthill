import { ReactNode } from 'react';
import { AccountPages } from 'common/pages-path/account-pages';
import { AccountLayout } from 'components/layouts/account-layout';

const Layout = ({ children }: { children: ReactNode }) => (
  <AccountLayout currentTab={AccountPages.Information}>{children}</AccountLayout>
);

export default Layout;
