import React, { PropsWithChildren } from 'react';

export const WidgetContainer: React.FC<PropsWithChildren<{ height?: string; width?: string }>> = ({
  children,
  height = 'h-full',
  width = 'w-full',
}) => {
  return <div className={`${width} ${height} rounded-xl bg-white shadow-sm p-3 dark:bg-dark-widget`}>{children}</div>;
};

export const InnerContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='flex flex-col gap-3'>{children}</div>;
};
