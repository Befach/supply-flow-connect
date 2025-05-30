
export interface Supplier {
  id: string;
  name: string;
  description: string;
  categories: string[];
  location: string;
  contact: {
    email: string;
    phone: string;
  };
  rating: number;
  verified: boolean;
}
