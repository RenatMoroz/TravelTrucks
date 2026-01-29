'use client';
import Link from 'next/link';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css['logo-container']}>
      <Link href="/" aria-label="Home" className={css['logo-link']}>
        <svg width={136} height={16} className={css['svg-logo']}>
          <use href="/icons-sprite.svg#icon-logo"></use>
        </svg>
      </Link>
    </div>
  );
};
export default Logo;
