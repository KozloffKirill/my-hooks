import { FC } from 'react';
import sts from './FeatureCard.module.css';
import { Title } from '@shared/title/ui/Title';

export type FeatureCardT = {
  title: string;
  description: string;
  iconSrc: string;
};

export const FeatureCard: FC<FeatureCardT> = ({ title, description, iconSrc }) => {
  return (
    <article className={sts.feature}>
      <Title level={3} className={sts.title}>
        {title}
      </Title>
      <img className={sts.icon} src={iconSrc} />
      <p className={sts.description}>{description}</p>
    </article>
  );
};
