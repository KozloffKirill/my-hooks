import { FC } from 'react';
import { FeatureCard } from '../feature/FeatureCard';
import guardIconSrc from '@shared/assets/guard.svg';
import easyIconSrc from '@shared/assets/easy.svg';
import codeIconSrc from '@shared/assets/code.svg';
import sts from './Features.module.css';

export const Features: FC = () => {
  return (
    <section className={sts.features}>
      <div className={sts.container}>
        <h2 className={sts.title}>Features</h2>
        <ul className={sts.featuresList}>
          <li>
            <FeatureCard
              iconSrc={guardIconSrc}
              title="Type-Safe"
              description="Catch compile-time errors with ease and unlock strong typing benefits."
            />
          </li>
          <li>
            <FeatureCard
              iconSrc={easyIconSrc}
              title="Easy to Use"
              description="Get started in no time! Explore comprehensive documentation and rich examples."
            />
          </li>
          <li>
            <FeatureCard
              iconSrc={codeIconSrc}
              title="Developer-Friendly"
              description="Simplify development with an intuitive and powerful API. Don't repeat yourself."
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
