import React, { PropsWithChildren } from 'react';
import * as PopoverComp from '@radix-ui/react-popover';

type PropPopoverMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  side: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
};

export const PopoverMenu: React.FC<PropsWithChildren<PropPopoverMenuProps>> = ({
  children,
  open,
  onOpenChange,
  side = 'right',
  sideOffset,
}) => (
  <PopoverComp.Root open={open} onOpenChange={onOpenChange}>
    <PopoverComp.Trigger />
    <PopoverComp.Anchor />
    <PopoverComp.Portal>
      <PopoverComp.Content sideOffset={sideOffset} side={side} className='focus-visible:outline-0'>
        {children}
      </PopoverComp.Content>
    </PopoverComp.Portal>
  </PopoverComp.Root>
);
