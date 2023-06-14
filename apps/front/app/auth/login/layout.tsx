import { AuthLayout } from 'components/layouts/auth/auth-layout';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => <AuthLayout>{children}</AuthLayout>;

export default Layout;
