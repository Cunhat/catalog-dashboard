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
  {
    sectionName: 'Catalog Components',
    items: [
      {
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
        path: '/',
        label: 'Bundle Management',
        icon: faBookmark,
        type: 'link',
      },
      {
        path: '/',
        label: 'Discounts Management',
        icon: faTag,
        type: 'link',
      },
    ],
  },
  {
    sectionName: 'Product Dimensions',
    items: [
      {
        path: '/',
        label: 'Specification',
        icon: faCircleInfo,
        type: 'link',
      },
      {
        path: '/',
        label: 'Configurations Options',
        icon: faSliders,
        type: 'link',
      },
      {
        path: '/',
        label: 'Placement',
        icon: faPaperPlane,
        type: 'link',
      },
      {
        path: '/',
        label: 'Attachments',
        icon: faPaperclip,
        type: 'link',
      },
      {
        path: '/',
        label: 'Visibility',
        icon: faEye,
        type: 'link',
      },
      {
        path: '/',
        label: 'Eligibility',
        icon: faMagnifyingGlass,
        type: 'link',
      },
      {
        path: '/',
        label: 'Templates Management',
        icon: faClone,
        type: 'link',
      },
    ],
  },
];
