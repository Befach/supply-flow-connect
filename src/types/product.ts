
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  supplierName: string;
  image: string;
  specifications: Record<string, string>;
  inStock: boolean;
}
