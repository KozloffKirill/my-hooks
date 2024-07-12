import React, { FC } from 'react';
import sts from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export type Item = {
  key: React.Key;
  label: string;
  path: string;
};

export type NavigationT = {
  items: Array<Item>;
};

export const Navigation: FC<NavigationT> = ({ items }) => {
  return (
    <ul className={sts.linksList}>
      {items.map(({ key, label, path }) => (
        <li className={sts.linkItem} key={key}>
          <NavLink to={path} className={({ isActive }) => (isActive ? sts.activeLink : '')}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
