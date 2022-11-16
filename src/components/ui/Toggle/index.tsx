import { Switch } from '@headlessui/react';
import { useEffect, Fragment } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Toggle: React.FC<{ enabled: boolean; setEnabled: () => void }> = ({ enabled, setEnabled }) => {
  return (
    <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button className={`${checked ? 'bg-dark-background' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}>
          <span className='sr-only'>Enable notifications</span>
          <FontAwesomeIcon
            icon={checked ? faMoon : faSun}
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full text-primary  transition`}
          />
        </button>
      )}
    </Switch>
  );
};
