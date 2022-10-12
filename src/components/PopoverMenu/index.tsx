import React, { PropsWithChildren } from 'react';
import * as PopoverComp from '@radix-ui/react-popover';

type PropPopoverMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const PopoverMenu: React.FC<PropsWithChildren<PropPopoverMenuProps>> = ({ children, open, onOpenChange }) => (
  <PopoverComp.Root open={open} onOpenChange={onOpenChange}>
    <PopoverComp.Trigger />
    <PopoverComp.Anchor />
    <PopoverComp.Portal>
      <PopoverComp.Content sideOffset={20} side="right" className='focus-visible:outline-0 shadow-xl'>{children}</PopoverComp.Content>
    </PopoverComp.Portal>
  </PopoverComp.Root>
);
