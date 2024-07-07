import { FC } from 'react';
import sts from './Main.module.css';

export const Main: FC = () => {
  return (
    <section className={sts.main}>
      <div className={sts.container}>
        <h1>My hooks</h1>
        <p>React hooks by Kozlov Kirill</p>
      </div>
    </section>
  );
};
