import { Switch } from '@shared/switch/ui/Switch';
import { FC, InputHTMLAttributes } from 'react';
import sts from './Title.module.css';
import cn from 'classnames';

type TitleT = {
  level: 1 | 2 | 3;
} & InputHTMLAttributes<HTMLHeadingElement>;

export const Title: FC<TitleT> = ({ level, className, ...props }) => {
  const baseProps = {
    className: cn(sts.title, className),
    ...props,
  };

  return (
    <Switch
      value={level}
      cases={[
        {
          when: 1,
          render: <h1 {...baseProps} />,
        },
        {
          when: 2,
          render: <h2 {...baseProps} />,
        },
        {
          when: 3,
          render: <h3 {...baseProps} />,
        },
      ]}
    />
  );
};
