import { AuthPages } from 'common/pages-path/auth-pages';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href={AuthPages.Login}>login</Link>
        </li>
        <li>
          <Link href={AuthPages.Registration}>registration</Link>
        </li>
      </ul>
    </main>
  );
}
