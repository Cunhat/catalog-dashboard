import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Tag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='bg-primary w-fit py-1 px-2  rounded-2xl flex items-center gap-1'>
      <text className='text-white text-xs'>{text}</text>
      <FontAwesomeIcon icon={faCircleXmark} className='text-white text-base hover:cursor-pointer' />
    </div>
  );
};
