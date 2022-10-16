import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const VersionIcon: React.FC<{ color: string; background?: string }> = ({ color, background = 'transparent' }) => {
  return (
    <FontAwesomeIcon
      icon={faCodeFork}
      className={`${'text-' + color} ${'bg-' + background} rotate-90 ${'border-' + color} p-2 rounded-full border-[1px]`}
    />
  );
};
