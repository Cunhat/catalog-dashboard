import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const VersionIcon: React.FC<{ color: string; background?: string }> = ({ color, background = 'transparent' }) => {
  const colorStyle = `${'text-' + color} ${'border-' + color}`;

  return <FontAwesomeIcon icon={faCodeFork} className={`${colorStyle} ${'bg-' + background} rotate-90  p-2 rounded-full border-[1px]`} />;
};
