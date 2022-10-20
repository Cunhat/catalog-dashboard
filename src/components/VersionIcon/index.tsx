import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const VersionIcon: React.FC<{ type: 'primary' | 'green' }> = ({ type = 'primary' }) => {
  const colorStylePrimary = 'text-primary border-primary bg-violet-50';
  const colorStyleGreen = 'text-green-500 border-green-500 bg-green-50';

  return (
    <FontAwesomeIcon
      icon={faCodeFork}
      className={`${type === 'primary' ? colorStylePrimary : colorStyleGreen} rotate-90  p-2 rounded-full border-[1px]`}
    />
  );
};
