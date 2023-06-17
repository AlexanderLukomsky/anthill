import { Typography } from 'lib/mui';
import { AuthPages } from 'common/pages-path/auth-pages';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ul>
        <Link href={AuthPages.SignIn}>
          <Typography variant="h3" color="light.100">
            sing in
          </Typography>
        </Link>

        <li>
          <Link href={AuthPages.Registration}>
            <Typography variant="h3" color="light.100">
              registration
            </Typography>
          </Link>
        </li>
      </ul>
    </main>
  );
}
