import { FC } from 'react';
import sts from './FeatureCard.module.css';

export type FeatureCardT = {
  title: string;
  description: string;
  iconSrc: string;
};

export const FeatureCard: FC<FeatureCardT> = ({ title, description, iconSrc }) => {
  return (
    <article className={sts.feature}>
      <h3 className={sts.title}>{title}</h3>
      <img className={sts.icon} src={iconSrc} />
      <p className={sts.description}>{description}</p>
    </article>
  );
};
