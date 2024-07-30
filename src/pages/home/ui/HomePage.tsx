import { FC } from 'react';
import sts from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { Features } from '@widgets/features/ui/features/Features';
import { Title } from '@shared/title';

export const HomePage: FC = () => {
  return (
    <>
      <section className={sts.home}>
        <Title level={1}>My hooks</Title>
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
