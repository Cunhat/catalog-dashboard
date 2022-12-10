import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';

const ButtonStyles = cva(
  'bg-primary shadow-lg text-white py-2 px-3 rounded-lg text-sm focus:outline-none focus:shadow-outline hover:bg-primary_hover hover:cursor-pointer',
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

export const Button: React.FC<{
  text: string;
  disabled?: boolean;
  leftIcon?: IconProp;
  type?: 'small' | 'normal';
  onClick?: () => void;
}> = ({ text, disabled, leftIcon, type, onClick }) => {
  return (
    <button onClick={onClick} className={ButtonStyles({ type, disabled })} type='button' disabled={disabled} aria-label={text}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} className='mr-2' />}
      {text}
    </button>
  );
};
