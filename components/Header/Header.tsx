import css from './Header.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header className={css['header']}>
      <div className={css['header-cont']}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
