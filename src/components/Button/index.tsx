import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button: React.FC<{ text: string; disabled?: boolean; leftIcon?: IconProp; type?: 'small' | 'normal' }> = ({
  text,
  disabled,
  leftIcon,
  type = 'normal',
}) => {
  return (
    <button
      className={`bg-primary shadow-lg text-white py-2 px-3 rounded-lg text-sm focus:outline-none focus:shadow-outline hover:bg-violet-500 min-w-[150px] 
       hover:cursor-pointer disabled:bg-violet-500 ${type === 'small' ? 'w-fit' : ''}`}
      type='button'
      disabled={disabled}
    >
      {leftIcon && <FontAwesomeIcon icon={leftIcon} className='mr-2' />}
      {text}
    </button>
  );
};
