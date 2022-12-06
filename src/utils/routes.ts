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
  faEuroSign,
  faList,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

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
        path: '/dashboard',
        label: 'dashboard',
        icon: faHouse,
        type: 'link',
      },
    ],
  },
  {
    id: 2,
    sectionName: 'catalogManagement',
    items: [
      {
        id: 1,
        path: '/',
        label: 'createNewCatalog',
        icon: faPlus,
        type: 'link',
      },
      {
        id: 2,
        label: 'listCatalogues',
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
        label: 'editExistingCatalogues',
        icon: faPencil,
        type: 'link',
      },
    ],
  },
  {
    id: 3,
    sectionName: 'catalogComponents',
    items: [
      {
        id: 1,
        label: 'productManagement',
        icon: faAddressCard,
        type: 'dropdown',
        subPaths: [
          { path: '/', label: 'productManagement.listProducts' },
          { path: '/', label: 'productManagement.createNewProduct' },
          { path: '/', label: 'productManagement.editProduct' },
          { path: '/', label: 'productManagement.configurationAllowedCombis' },
          { path: '/', label: 'productManagement.pricing' },
        ],
      },
      {
        id: 2,
        path: '/',
        label: 'bundleManagement',
        icon: faBookmark,
        type: 'link',
      },
      {
        id: 3,
        path: '/',
        label: 'discountsManagement',
        icon: faTag,
        type: 'link',
      },
    ],
  },
  {
    id: 4,
    sectionName: 'productDimensions',
    items: [
      {
        id: 1,
        path: '/',
        label: 'specification',
        icon: faCircleInfo,
        type: 'link',
      },
      {
        id: 2,
        path: '/',
        label: 'configurationsOptions',
        icon: faSliders,
        type: 'link',
      },
      {
        id: 3,
        path: '/',
        label: 'placement',
        icon: faPaperPlane,
        type: 'link',
      },
      {
        id: 4,
        path: '/',
        label: 'attachments',
        icon: faPaperclip,
        type: 'link',
      },
      {
        id: 5,
        path: '/',
        label: 'visibility',
        icon: faEye,
        type: 'link',
      },
      {
        id: 6,
        path: '/',
        label: 'eligibility',
        icon: faMagnifyingGlass,
        type: 'link',
      },
      {
        id: 7,
        path: '/',
        label: 'templatesManagement',
        icon: faClone,
        type: 'link',
      },
    ],
  },
  {
    id: 5,
    sectionName: 'dataReferences',
    items: [
      {
        id: 1,
        path: '/',
        label: 'channels',
        icon: faYoutube,
        type: 'link',
      },
      {
        id: 2,
        path: '/',
        label: 'productFamilies',
        icon: faList,
        type: 'link',
      },
      {
        id: 3,
        path: '/',
        label: 'productClasses',
        icon: faList,
        type: 'link',
      },
      {
        id: 4,
        path: '/',
        label: 'productTypes',
        icon: faList,
        type: 'link',
      },
      {
        id: 5,
        path: '/',
        label: 'productCategories',
        icon: faList,
        type: 'link',
      },
      {
        id: 6,
        path: '/',
        label: 'currencies',
        icon: faEuroSign,
        type: 'link',
      },
    ],
  },
  {
    id: 6,
    sectionName: 'administration',
    items: [
      {
        id: 1,
        path: '/',
        label: 'userAndPermissionsManagement',
        icon: faUserCheck,
        type: 'link',
      },
    ],
  },
];
