
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

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    category: "Electronics",
    price: 89.99,
    currency: "USD",
    supplierName: "Global Tech Solutions",
    image: "/placeholder.svg",
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g"
    },
    inStock: true
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    category: "Textiles",
    price: 24.99,
    currency: "USD",
    supplierName: "Textile Masters Inc",
    image: "/placeholder.svg",
    specifications: {
      "Material": "100% Organic Cotton",
      "Sizes": "XS-XXL",
      "Care": "Machine Washable"
    },
    inStock: true
  },
  {
    id: "3",
    name: "Premium Olive Oil",
    description: "Extra virgin olive oil from organic Spanish olives, cold-pressed.",
    category: "Food",
    price: 18.50,
    currency: "USD",
    supplierName: "Agricultural Export Co",
    image: "/placeholder.svg",
    specifications: {
      "Volume": "500ml",
      "Origin": "Spain",
      "Certification": "Organic"
    },
    inStock: true
  }
];
