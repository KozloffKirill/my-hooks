import { Navigation, NavigationT } from '@shared/navigation';
import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import sts from './Navbar.module.css';
import hookIconSrc from '@shared/assets/hook.svg';

export const NavBar: FC = () => {
  const navigationItemsRef = useRef<NavigationT['items']>([
    {
      key: 'hooks',
      path: 'hooks',
      label: 'Hooks',
    },
  ]);
  const navigationItems = navigationItemsRef.current;

  return (
    <header className={sts.navBar}>
      <div className={sts.container}>
        <Link className={sts.home} to="/">
          <img className={sts.logo} src={hookIconSrc} />
          <span>My hooks</span>
        </Link>
        <Navigation items={navigationItems} />
      </div>
    </header>
  );
};
