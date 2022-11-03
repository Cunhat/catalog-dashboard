import React, { PropsWithChildren } from 'react';
import * as TooltipComponent from '@radix-ui/react-tooltip';
import { boolean } from 'zod';

export const Tooltip: React.FC<PropsWithChildren<{ text: string; open: boolean; setOpen: (open: boolean) => void }>> = ({
  text,
  open,
  setOpen,
}) => {
  return (
    <TooltipComponent.Provider>
      <TooltipComponent.Root delayDuration={100} open={open} onOpenChange={setOpen}>
        <TooltipComponent.Trigger></TooltipComponent.Trigger>
        <TooltipComponent.Portal>
          <TooltipComponent.Content side='right' sideOffset={25} align='center' avoidCollisions>
            <div className='p-2.5 bg-zinc-700  rounded-md'>
              <span className='text-white text-xs'>{text}</span>
            </div>
          </TooltipComponent.Content>
        </TooltipComponent.Portal>
      </TooltipComponent.Root>
    </TooltipComponent.Provider>
  );
};
