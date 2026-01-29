'use client';
import Link from 'next/link';
import css from './Home.module.css';

const Home = () => {
  return (
    <section className={css['home']}>
      <div className={css['home-cont']}>
        <div className={css['block-text']}>
          <h1 className={css['h1-text']}>Campers of your dreams</h1>
          <p className={css['p-text']}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link href="/catalog" className={css['btn-home']}>
          View Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
