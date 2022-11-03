import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva } from 'class-variance-authority';

const VersionIconStyles = cva('rotate-90 p-2 rounded-full border-[1px]', {
  variants: {
    type: {
      primary: 'text-primary border-primary bg-violet-50',
      green: 'text-green-500 border-green-500 bg-green-50',
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

export const VersionIcon: React.FC<{ type: 'primary' | 'green' }> = ({ type }) => {
  return <FontAwesomeIcon icon={faCodeFork} className={VersionIconStyles({ type })} />;
};
