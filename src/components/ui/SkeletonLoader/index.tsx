import { PropsWithChildren, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { useAtom } from 'jotai';
import { darkModeAtom } from '@/components/ui/Layouts';
import React from 'react';

export const SkeletonLoader: React.FC<PropsWithChildren<{ width?: string | number; height?: string | number }>> = ({
  children,
  width = '100%',
  height = '52',
}) => {
  const [darkMode] = useAtom(darkModeAtom);
  const [canRender, setCanRender] = useState(false);

  React.useEffect(() => {
    setCanRender(true);
  }, [darkMode]);

  if (!canRender) return null;

  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      backgroundColor={darkMode ? '#b9b9b9' : '#f3f3f3'}
      foregroundColor={darkMode ? '#f3f3f3' : '#ecebeb'}
    >
      {children}
    </ContentLoader>
  );
};
