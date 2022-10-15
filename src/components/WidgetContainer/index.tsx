import React, { PropsWithChildren } from 'react';

export const WidgetContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='w-full h-full rounded-xl bg-white shadow-sm p-3'>{children}</div>;
};
