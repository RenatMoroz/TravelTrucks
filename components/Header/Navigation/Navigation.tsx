'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Navigation.module.css';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={css['navigation-cont']}>
      <ul className={css['navigation-list']}>
        <li>
          <Link
            href="/"
            className={`${css['nav-link']} ${
              pathname === '/' ? css.active : ''
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/catalog"
            className={`${css['nav-link']} ${
              pathname === '/catalog' ? css.active : ''
            }`}
          >
            Catalog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
