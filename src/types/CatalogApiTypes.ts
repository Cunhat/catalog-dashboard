export interface Charetristics {
  modelCode: string;
  modelDescription: string;
  type: string;
  productLine: string;
  prodCode: string;
  supplier: string;
}

export interface AllowedCombination {
  modelCode: string;
}

export interface CategoryRef {
  id: string;
  href: string;
  name: string;
}

export interface ProductClassRef {
  id: string;
  href: string;
  name: string;
}

export interface ProductFamilyRef {
  id: string;
  href: string;
  name: string;
}

export interface ProductTypeRef {
  id: string;
  href: string;
  name: string;
}

export interface CurrencyRef {
  id: string;
  href: string;
  name: string;
}

export interface Versioning {
  versionActiveDate: Date;
  versionEndDate: Date;
  version: number;
}

export interface Auditable {
  createdAt: Date;
  lastUpdate: Date;
  createdBy: string;
  lastUpdatedBy: string;
}

export interface ProductOfferingResponse {
  id: number;
  name: string;
  comments: string;
  commercialLaunchDate: string;
  description: string;
  objectSubType: string;
  objectType: string;
  isSellable: boolean;
  status: string;
  serializedFlg: boolean;
  original_element_id: number;
  isBundle: boolean;
  charetristics: Charetristics;
  allowedCombinations: AllowedCombination[];
  CategoryRef: CategoryRef;
  ProductClassRef: ProductClassRef;
  ProductFamilyRef: ProductFamilyRef;
  ProductTypeRef: ProductTypeRef;
  CurrencyRef: CurrencyRef;
  versioning: Versioning;
  auditable: Auditable;
}
