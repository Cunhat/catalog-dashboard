import React, { useEffect, useState, PropsWithChildren } from 'react';
import ReactDom from 'react-dom';

type ModalProps = {
  open: boolean;
};

export const Portal: React.FC<PropsWithChildren<ModalProps>> = ({ children, open }) => {
  const [mount, setMount] = useState<boolean>(false);

  const modalContent = open ? <>{children}</> : null;

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return mount ? ReactDom.createPortal(modalContent, document.querySelector('#portal')!) : null;
};
