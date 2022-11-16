export const Text: React.FC<{ text: string; color?: string }> = ({ text, color }) => {
  return <p className={`${color ? color : 'text-neutral-500 dark:text-white'} text-sm`}>{text}</p>;
};
