import { Text } from '@ui/Typography/Text';

export const TextInput: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className='flex flex-col gap-1'>
      <Text text={label} />
      <input
        type='text'
        maxLength={50}
        className='border-neutral-300 border border-solid rounded-md text-sm text-neutral-500 py-1 px-2 m-0 focus:text-neutral-600 hover:border-primary focus:border-primary invalid:border-red-500 focus:outline-none transition
        ease-in-out bg-transparent'
      ></input>
    </div>
  );
};
