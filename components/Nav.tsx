import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/commands'>Command</Link>
        </li>
        <li>
          <Link href='/terms-privacy'>Terms</Link>
        </li>
        <li>
          <Link href='/support'>Support</Link>
        </li>
        <li>
          <Link href='/status'>Status</Link>
        </li>
      </ul>
    </nav>
  );
}
