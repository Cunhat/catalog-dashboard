import { cva } from 'class-variance-authority';
import { faCircleExclamation, faCircleInfo, faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToasterStyles = cva('flex gap-4 p-3 items-center w-[300px] border-l-4 min-h-[65px] rounded-lg', {
  variants: {
    type: {
      warning: 'bg-yellow-100 border-yellow-500 text-yellow-500',
      success: 'bg-green-100 border-green-500 text-green-500',
      error: 'bg-red-100 border-red-500 text-red-500',
    },
  },
  defaultVariants: {
    type: 'warning',
  },
});

type ToasterProps = {
  type: 'warning' | 'success' | 'error';
  title: string;
  message: string;
};

export const Toaster: React.FC<ToasterProps> = ({ type, title, message }) => {
  const getIcon = () => {
    switch (type) {
      case 'warning':
        return faCircleExclamation;
      case 'success':
        return faCircleCheck;
      case 'error':
        return faCircleInfo;
    }
  };

  return (
    <div className={ToasterStyles({ type })}>
      <FontAwesomeIcon icon={getIcon()} className='text-2xl ' />
      <div>
        <h1 className='text-base'>{title}</h1>
        <h2 className='text-sm'>{message}</h2>
      </div>
      <FontAwesomeIcon icon={faXmark} className='text-2xl ml-auto hover:cursor-pointer' />
    </div>
  );
};
