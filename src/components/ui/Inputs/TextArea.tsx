import { Text } from '@ui/Typography/Text';
import React from 'react';

type TextAreaProps = { label: string; value?: string; editMode?: boolean; isLoading?: boolean };

export const TextArea = React.forwardRef<any, TextAreaProps>((props, ref) => {
  return (
    <div className='flex flex-col gap-1'>
      {props.label !== undefined && props.label?.length > 0 && (
        <label htmlFor={props.label} className={'text-neutral-500 dark:text-white text-sm font-bold'}>
          {props.label}
        </label>
      )}
      {props.editMode ? (
        <textarea
          rows={4}
          id={props.label}
          className='border-neutral-300 resize-none border border-solid rounded-md text-sm text-neutral-500 dark:text-white py-1 px-2 m-0 focus:text-neutral-600 hover:border-primary focus:border-primary invalid:border-red-500 focus:outline-none transition
      ease-in-out bg-transparent'
          value={props.value}
          {...props}
        />
      ) : (
        <div className='py-1 px-2'>
          <Text text={props.value || '- -'} />
        </div>
      )}
    </div>
  );
});
