import { Fragment, forwardRef } from 'react';
import { Menu as MenuComponent, Transition } from '@headlessui/react';
import Link from 'next/link';
import { cva } from 'class-variance-authority';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuStyles = cva(
  'hover:bg-primary text-sm flex gap-3 items-center text-left hover:text-white text-neutral-500 dark:text-white p-2 rounded-md hover:cursor-pointer',
);

export type MenuElement = {
  label: string;
  href: string;
  type: 'link' | 'button';
  onClick?: () => void | Promise<undefined>;
  icon?: IconProp;
};

type MenuProps = {
  data: Array<MenuElement>;
  userInfo: {
    name: string;
    email: string;
    image: string;
  };
};

export const Menu: React.FC<MenuProps> = ({ data, userInfo }) => {
  return (
    <MenuComponent as='div' className='relative inline-block text-left'>
      <MenuComponent.Button as={UserMenu} userInfo={userInfo} />
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <MenuComponent.Items className='absolute p-2 right-0 mt-2 flex flex-col min-w-[200px] w-auto origin-top-right rounded-md bg-white dark:bg-dark-background shadow-xl  focus:outline-none'>
          {data.map((elem) => {
            return elem.type === 'link' ? (
              <MenuComponent.Item as={Link} href={elem.href} key={elem.href}>
                <div className={MenuStyles()}>
                  {elem.icon && <FontAwesomeIcon icon={elem.icon} />}
                  <span>{elem.label}</span>
                </div>
              </MenuComponent.Item>
            ) : (
              <MenuComponent.Item as='button' className={MenuStyles()} key={elem.href} onClick={elem.onClick}>
                {elem.icon && <FontAwesomeIcon icon={elem.icon} />}
                <span>{elem.label}</span>
              </MenuComponent.Item>
            );
          })}
        </MenuComponent.Items>
      </Transition>
    </MenuComponent>
  );
};

const UserMenu: React.FC<{
  userInfo: {
    name: string;
    email: string;
    image: string;
  };
}> = forwardRef((props, ref) => {
  return (
    <MenuComponent.Button className='flex gap-3 hover:cursor-pointer hover:bg-hover py-1 px-3 rounded-md items-center justify-center'>
      <div className='rounded-full bg-hover p-[6px] w-8 flex justify-center items-center border border-primary'>
        <span className='text-sm text-primary font-bold m-0 p-0'>{props?.userInfo?.name[0]?.toLocaleUpperCase() ?? ''}</span>
      </div>
      <div className='flex flex-col '>
        <p className='text-xs text-neutral-500 dark:text-primary'>{props?.userInfo?.name}</p>
      </div>
    </MenuComponent.Button>
  );
});
