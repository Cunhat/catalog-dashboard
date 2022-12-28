import { Text } from '@ui/Typography/Text';

export const TextInput: React.FC<{ label: string; value?: string; editMode?: boolean }> = ({ label, value, editMode = false }) => {
  return (
    <div className='flex flex-col gap-1'>
      <label htmlFor={label} className={'text-neutral-500 dark:text-white text-sm font-bold'}>
        {label}
      </label>
      {editMode ? (
        <input
          type='text'
          id={label}
          maxLength={50}
          className='border-neutral-300 border border-solid rounded-md text-sm text-neutral-500 dark:text-white py-1 px-2 m-0 focus:text-neutral-600 hover:border-primary focus:border-primary invalid:border-red-500 focus:outline-none transition
        ease-in-out bg-transparent'
          value={value}
        ></input>
      ) : (
        <div className='py-1 px-2'>
          <Text text={value || '- -'} />
        </div>
      )}
    </div>
  );
};
