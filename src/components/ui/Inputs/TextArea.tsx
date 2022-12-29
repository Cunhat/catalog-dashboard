import { Text } from '@ui/Typography/Text';
import ContentLoader from 'react-content-loader';

export const TextArea: React.FC<{ label: string; value: string; editMode?: boolean }> = ({ label, value, editMode = false }) => {
  return (
    <div className='flex flex-col gap-1'>
      {label !== undefined && label?.length > 0 && (
        <label htmlFor={label} className={'text-neutral-500 dark:text-white text-sm font-bold'}>
          {label}
        </label>
      )}
      {editMode ? (
        <textarea
          rows={4}
          id={label}
          className='border-neutral-300 resize-none border border-solid rounded-md text-sm text-neutral-500 dark:text-white py-1 px-2 m-0 focus:text-neutral-600 hover:border-primary focus:border-primary invalid:border-red-500 focus:outline-none transition
      ease-in-out bg-transparent'
          value={value}
        ></textarea>
      ) : (
        <div className='py-1 px-2'>
          <Text text={value || '- -'} />
        </div>
      )}
    </div>
  );
};
