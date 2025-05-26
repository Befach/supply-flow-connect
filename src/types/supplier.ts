
export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  description: string;
  
  // Location
  city: string;
  state: string;
  country: string;
  address: string;
  
  // Business Info
  categories: string[];
  partnershipYears: number;
  founded: number;
  employeeCount: string;
  
  // Media
  logoUrl: string;
  images: string[];
  products: string[];
  
  // Meta
  isActive: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SupplierFormData extends Omit<Supplier, 'id' | 'createdAt' | 'updatedAt'> {}
