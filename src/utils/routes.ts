import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faAnglesLeft, faPlus, faSearch, faPencil, faMinus } from '@fortawesome/free-solid-svg-icons';

type SidebarItemLink = 'link';
type SidebarItemDropdown = 'dropdown';

type SidebarItem = {
  path: string;
  label: string;
  icon: IconProp;
  type: SidebarItemLink;
};

export type SidebarDropdownItem = {
  label: string;
  icon: IconProp;
  type: SidebarItemDropdown;
  subPaths: Array<{ path: string; label: string }>;
};

type SideBarSection = {
  sectionName?: string;
  items: Array<SidebarItem | SidebarDropdownItem>;
};

export const SideBarRoutes: Array<SideBarSection> = [
  {
    items: [
      {
        path: '/',
        label: 'Dashboard',
        icon: faHouse,
        type: 'link',
      },
    ],
  },
  {
    sectionName: 'Catalog Management',
    items: [
      {
        path: '/',
        label: 'Create New Catalog',
        icon: faPlus,
        type: 'link',
      },
      {
        label: 'List Catalogues',
        icon: faSearch,
        type: 'dropdown',
        subPaths: [
          { path: '/', label: 'Catalogue 1' },
          { path: '/', label: 'Catalogue 1' },
          { path: '/', label: 'Catalogue 1' },
        ],
      },
      {
        path: '/',
        label: 'Edit Existing Catalogues',
        icon: faPencil,
        type: 'link',
      },
    ],
  },
];
