import { PropsWithChildren } from 'react';

export const SmallWidget: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={`w-fit h-fit rounded-xl bg-white shadow-lg p-3`}>{children}</div>;
};
