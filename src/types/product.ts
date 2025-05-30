
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  supplierId: string;
  supplierName: string;
  supplierLogo: string;
  image: string;
  specifications: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
