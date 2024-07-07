import { FC } from 'react';
import sts from './Main.module.css';
import { Link } from 'react-router-dom';

export const Main: FC = () => {
  return (
    <section className={sts.main}>
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
