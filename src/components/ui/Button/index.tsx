import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';

const ButtonStyles = cva(
  'bg-primary shadow-lg text-white py-2 px-3 rounded-lg text-sm focus:outline-none focus:shadow-outline hover:bg-violet-500 hover:cursor-pointer',
  {
    variants: {
      type: {
        normal: 'min-w-[150px]',
        small: 'w-fit',
      },
      disabled: {
        true: 'disabled:bg-violet-500 disabled:cursor-not-allowed',
      },
    },
    defaultVariants: {
      type: 'normal',
    },
  },
);

export const Button: React.FC<{ text: string; disabled?: boolean; leftIcon?: IconProp; type?: 'small' | 'normal' }> = ({
  text,
  disabled,
  leftIcon,
  type,
}) => {
  return (
    <button className={ButtonStyles({ type, disabled })} type='button' disabled={disabled}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} className='mr-2' />}
      {text}
    </button>
  );
};
