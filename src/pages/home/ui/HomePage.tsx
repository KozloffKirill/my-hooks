import { FC } from 'react';
import sts from './HomePage.module.css';
import { Link } from 'react-router-dom';

export const HomePage: FC = () => {
  return (
    <section className={sts.home}>
      <div className={sts.container}>
        <h1 className={sts.header}>My hooks</h1>
        <p className={sts.description}>React hooks by Kozlov Kirill</p>
        <Link to="hooks" className={sts.link}>
          Explore the hooks
        </Link>
      </div>
    </section>
  );
};
