import { NavBar } from '@widgets/navbar/ui/Navbar';
import { FC } from 'react';
import { Outlet } from 'react-router';

export const RootPage: FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
