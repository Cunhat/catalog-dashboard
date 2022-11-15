export const Text: React.FC<{ text: string; color?: string }> = ({ text, color }) => {
  return <text className={`${color ? color : 'text-neutral-500 dark:text-white'} text-sm`}>{text}</text>;
};
