import { FC } from 'react';
import sts from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { Features } from '@widgets/features/ui/features/Features';

export const HomePage: FC = () => {
  return (
    <>
      <section className={sts.home}>
        <h1 className={sts.title}>My hooks</h1>
        <p className={sts.description}>React hooks by Kozlov Kirill</p>
      </section>
      <Features />
      <section className={sts.getStarted}>
        <p className={sts.title}>Ready to get started?</p>
        <Link to="hooks" className={sts.link}>
          Explore the hooks
        </Link>
      </section>
    </>
  );
};
