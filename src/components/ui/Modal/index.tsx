import React, { useState, PropsWithChildren } from 'react';
import ReactDom from 'react-dom';
import { WidgetContainer } from '@ui/WidgetContainer';

export const Modal: React.FC<PropsWithChildren<{ open: boolean }>> = ({ children, open }) => {
  const [mount, setMount] = useState<boolean>(false);

  const modalContent = open ? (
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-zinc-800 bg-opacity-50 flex flex-col justify-center items-center dark:bg-neutral-500 dark:bg-opacity-50'>
      <WidgetContainer height='h-fit' width='w-fit'>
        {children}
      </WidgetContainer>
    </div>
  ) : null;

  React.useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return mount ? ReactDom.createPortal(modalContent, document.querySelector('#modalPortal')!) : null;
};
