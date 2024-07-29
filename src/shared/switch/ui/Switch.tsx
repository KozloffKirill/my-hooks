import { FC, ReactNode, useMemo } from 'react';

export type SwitchT = {
  value: unknown;
  cases: Array<{
    when: unknown;
    render: ReactNode;
  }>;
  defaultRender?: ReactNode;
};

export const Switch: FC<SwitchT> = ({ value, cases, defaultRender = null }) => {
  const renderNode: ReactNode = useMemo(
    () => cases.find(item => item.when === value)?.render ?? defaultRender,
    [value, cases, defaultRender]
  );

  return renderNode;
};
