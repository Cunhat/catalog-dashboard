import { Text } from '@ui/Typography/Text';

export const TextArea: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className='flex flex-col gap-1'>
      <Text text={label} />
      <textarea
        rows={4}
        className='border-neutral-300 resize-none border border-solid rounded-md text-sm text-neutral-500 dark:text-white py-1 px-2 m-0 focus:text-neutral-600 hover:border-primary focus:border-primary invalid:border-red-500 focus:outline-none transition
      ease-in-out bg-transparent'
      ></textarea>
    </div>
  );
};
