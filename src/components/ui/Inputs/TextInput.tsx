import { Text } from '@ui/Typography/Text';
import ContentLoader from 'react-content-loader';

export const TextInput: React.FC<{ label: string; value?: string; editMode?: boolean; isLoading?: boolean }> = ({
  label,
  value,
  editMode = false,
  isLoading = true,
}) => {
  return (
    <div className='flex flex-col gap-1'>
      {isLoading ? (
        <ContentLoader speed={2} width={'100%'} height={15} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
          <rect x='0' y='0' rx='5' ry='5' width='80' height='10' />
        </ContentLoader>
      ) : (
        <label htmlFor={label} className={'text-neutral-500 dark:text-white text-sm font-bold'}>
          {label}
        </label>
      )}
      {isLoading ? (
        <ContentLoader speed={2} width={'100%'} height={15} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
          <rect x='0' y='0' rx='5' ry='5' width='150' height='10' />
        </ContentLoader>
      ) : editMode ? (
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
