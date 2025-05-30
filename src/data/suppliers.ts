
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

export const suppliers: Supplier[] = [
  {
    id: "1",
    name: "Global Tech Solutions",
    description: "Leading supplier of electronic components and technology solutions worldwide.",
    categories: ["Electronics", "Technology", "Components"],
    location: "Shenzhen, China",
    contact: {
      email: "contact@globaltechsolutions.com",
      phone: "+86-755-1234567"
    },
    rating: 4.8,
    verified: true
  },
  {
    id: "2",
    name: "Textile Masters Inc",
    description: "Premium quality textiles and fabrics for fashion and industrial applications.",
    categories: ["Textiles", "Fashion", "Industrial"],
    location: "Mumbai, India",
    contact: {
      email: "info@textilemasters.com",
      phone: "+91-22-9876543"
    },
    rating: 4.6,
    verified: true
  },
  {
    id: "3",
    name: "Agricultural Export Co",
    description: "Fresh produce and agricultural products from certified organic farms.",
    categories: ["Agriculture", "Food", "Organic"],
    location: "Valencia, Spain",
    contact: {
      email: "exports@agriexport.es",
      phone: "+34-96-1234567"
    },
    rating: 4.7,
    verified: true
  }
];
