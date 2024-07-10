import { Navigation } from '@shared/navigation';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import sts from './Navbar.module.css';

export const NavBar: FC = () => {
  return (
    <header className={sts.navBar}>
      <div className={sts.container}>
        <Link className={sts.home} to="/">
          <span>My hooks</span>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};
