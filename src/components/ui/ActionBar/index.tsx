import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBolt, faGlobe, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ActionBar: React.FC = () => {
  return (
    <div className='flex h-10 items-center rounded-xl bg-white p-4 shadow-sm gap-5 dark:bg-dark-widget'>
      <ActionBarItem icon={faFile} text='Versioning' />
    </div>
  );
};

const ActionBarItem: React.FC<{ icon: IconProp; text: string }> = ({ icon, text }) => {
  return (
    <div className='flex gap-1 items-center hover:cursor-pointer'>
      <FontAwesomeIcon icon={icon} className='text-sm text-neutral-400' />
      <text className='text-sm text-primary '>{text}</text>
    </div>
  );
};
