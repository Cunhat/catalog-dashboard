import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';
import ContentLoader from 'react-content-loader';

const ButtonStyles = cva(
  'bg-primary shadow-lg text-white py-2 px-3 rounded-lg text-sm focus:outline-none focus:shadow-outline hover:bg-primary_hover hover:cursor-pointer',
  {
    variants: {
      size: {
        normal: 'min-w-[150px]',
        small: 'w-fit',
      },
      disabled: {
        true: 'disabled:bg-violet-500 disabled:cursor-not-allowed',
      },
    },
    defaultVariants: {
      size: 'normal',
    },
  },
);

export const Button: React.FC<{
  text: string;
  disabled?: boolean;
  leftIcon?: IconProp;
  size?: 'small' | 'normal';
  onClick?: () => void;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}> = ({ text, disabled, leftIcon, size, onClick, isLoading = false, type = 'button' }) => {
  if (isLoading) {
    return (
      <ContentLoader speed={2} width={150} height={36} backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
        <rect x='0' y='0' rx='5' ry='5' width='150' height='36' />
      </ContentLoader>
    );
  }

  return (
    <button onClick={onClick} className={ButtonStyles({ size, disabled })} type={type} disabled={disabled} aria-label={text}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} className='mr-2' />}
      {text}
    </button>
  );
};
