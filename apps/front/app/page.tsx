import { AuthPages } from 'common/pages-path/auth-pages';
import { Stack } from 'lib/mui';
import { AccountPages } from 'common/pages-path/account-pages';
import { TempList } from './temp/TempList';

const auth = [
  { path: AuthPages.SignIn, title: 'SignIn' },
  { path: AuthPages.Registration, title: 'Registration' },
  { path: AuthPages.NewPassword, title: 'NewPassword' },
];

const account = [
  { path: AccountPages.Devices, title: 'Devices' },
  { path: AccountPages.Information, title: 'Information' },
  { path: AccountPages.Management, title: 'Management' },
];

export default function Home() {
  return (
    <main>
      <Stack>
        <TempList arr={auth} />
        <TempList arr={account} />
      </Stack>
    </main>
  );
}
