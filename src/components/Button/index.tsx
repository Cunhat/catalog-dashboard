export const Button: React.FC<{ text: string; disabled?: boolean }> = ({ text, disabled }) => {
  return (
    <button
      className='bg-primary shadow-lg text-white py-2 px-3 rounded-lg text-sm focus:outline-none focus:shadow-outline hover:bg-violet-500 min-w-[150px] hover:cursor-pointer disabled:bg-violet-500'
      type='button'
      disabled={disabled}
    >
      {text}
    </button>
  );
};
