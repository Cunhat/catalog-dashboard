import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faAddressCard,
  faPlus,
  faSearch,
  faPencil,
  faBookmark,
  faTag,
  faCircleInfo,
  faSliders,
  faPaperPlane,
  faPaperclip,
  faEye,
  faMagnifyingGlass,
  faClone,
} from '@fortawesome/free-solid-svg-icons';

type SidebarItemLink = 'link';
type SidebarItemDropdown = 'dropdown';

type SidebarItem = {
  id: number;
  path: string;
  label: string;
  icon: IconProp;
  type: SidebarItemLink;
};

export type SidebarDropdownItem = {
  id: number;
  label: string;
  icon: IconProp;
  type: SidebarItemDropdown;
  subPaths: Array<{ path: string; label: string }>;
};

type SideBarSection = {
  id: number;
  sectionName?: string;
  items: Array<SidebarItem | SidebarDropdownItem>;
};

export const SideBarRoutes: Array<SideBarSection> = [
  {
    id: 1,
    items: [
      {
        id: 1,
        path: '/',
        label: 'Dashboard',
        icon: faHouse,
        type: 'link',
      },
    ],
  },
  {
    id: 2,
    sectionName: 'Catalog Management',
    items: [
      {
        id: 1,
        path: '/',
        label: 'Create New Catalog',
        icon: faPlus,
        type: 'link',
      },
      {
        id: 2,
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
        id: 3,
        path: '/',
        label: 'Edit Existing Catalogues',
        icon: faPencil,
        type: 'link',
      },
    ],
  },
  {
    id: 3,
    sectionName: 'Catalog Components',
    items: [
      {
        id: 1,
        label: 'Product Management',
        icon: faAddressCard,
        type: 'dropdown',
        subPaths: [
          { path: '/', label: 'List Products' },
          { path: '/', label: 'Create New Product' },
          { path: '/', label: 'Edit Product' },
          { path: '/', label: 'Configuration Allowed Combis' },
          { path: '/', label: 'Pricing' },
        ],
      },
      {
        id: 2,
        path: '/',
        label: 'Bundle Management',
        icon: faBookmark,
        type: 'link',
      },
      {
        id: 3,
        path: '/',
        label: 'Discounts Management',
        icon: faTag,
        type: 'link',
      },
    ],
  },
  {
    id: 4,
    sectionName: 'Product Dimensions',
    items: [
      {
        id: 1,
        path: '/',
        label: 'Specification',
        icon: faCircleInfo,
        type: 'link',
      },
      {
        id: 2,
        path: '/',
        label: 'Configurations Options',
        icon: faSliders,
        type: 'link',
      },
      {
        id: 3,
        path: '/',
        label: 'Placement',
        icon: faPaperPlane,
        type: 'link',
      },
      {
        id: 4,
        path: '/',
        label: 'Attachments',
        icon: faPaperclip,
        type: 'link',
      },
      {
        id: 5,
        path: '/',
        label: 'Visibility',
        icon: faEye,
        type: 'link',
      },
      {
        id: 6,
        path: '/',
        label: 'Eligibility',
        icon: faMagnifyingGlass,
        type: 'link',
      },
      {
        id: 7,
        path: '/',
        label: 'Templates Management',
        icon: faClone,
        type: 'link',
      },
    ],
  },
];
