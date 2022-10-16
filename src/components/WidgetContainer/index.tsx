import React, { PropsWithChildren } from 'react';

export const WidgetContainer: React.FC<PropsWithChildren<{ height?: string }>> = ({ children, height = 'h-full' }) => {
  return <div className={`w-full ${height} rounded-xl bg-white shadow-sm p-3`}>{children}</div>;
};
