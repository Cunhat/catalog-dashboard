import { cva } from 'class-variance-authority';
import { faCircleExclamation, faCircleInfo, faCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from 'react-hot-toast';

const ToasterStyles = cva('flex gap-4 p-3 items-center w-[300px] bg-opacity-75 border-l-4 min-h-[65px] rounded-lg', {
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
  clickHandler: () => void;
};

export const Toaster: React.FC<ToasterProps> = ({ type, title, message, clickHandler }) => {
  const getIcon = () => {
    switch (type) {
      case 'warning':
        return faCircleInfo;
      case 'success':
        return faCircleCheck;
      case 'error':
        return faCircleExclamation;
    }
  };

  return (
    <div className={ToasterStyles({ type })}>
      <FontAwesomeIcon icon={getIcon()} className='text-2xl ' />
      <div>
        <p className='text-base'>{title}</p>
        <p className='text-sm'>{message}</p>
      </div>
      <FontAwesomeIcon icon={faXmark} onClick={clickHandler} className='text-2xl ml-auto hover:cursor-pointer' />
    </div>
  );
};

export const notification = (type: ToasterProps['type'], title: string, message: string) =>
  toast.custom((t) => <Toaster type={type} title={title} message={message} clickHandler={() => toast.remove(t.id)} />);
