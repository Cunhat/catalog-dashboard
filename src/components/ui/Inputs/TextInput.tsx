import { Text } from '@ui/Typography/Text';
import React from 'react';

type TextInputProps = { label: string; value?: string; isEditing?: boolean; isLoading?: boolean };

export const TextInput = React.forwardRef<any, TextInputProps>(({ isEditing, ...props }, ref) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={props.label} className={'text-neutral-500 dark:text-white text-sm font-bold'}>
        {props.label}
      </label>
      {isEditing ? (
        <input
          type='text'
          id={props.label}
          maxLength={50}
          className='border-neutral-300 border border-solid rounded-md text-sm text-neutral-500 dark:text-white py-1 px-2 m-0 focus:text-neutral-600 hover:border-primary focus:border-primary invalid:border-red-500 focus:outline-none transition
        ease-in-out bg-transparent'
          value={props.value}
          {...props}
        ></input>
      ) : (
        <div className='py-1 px-2'>
          <Text text={props.value || '- -'} />
        </div>
      )}
    </div>
  );
});
