
import type { Product } from '@/types/product';

export const productsData: Product[] = [
  {
    id: '1',
    name: 'Heavy Duty Mining Drill',
    description: 'Professional pneumatic rock drill designed for heavy-duty mining operations with superior performance and durability.',
    category: 'Mining Equipment',
    supplierId: '1',
    supplierName: 'StarCharge Technology',
    supplierLogo: 'https://electricvehiclecouncil.com.au/wp-content/uploads/2025/04/StarCharge-LOGO-H-Color-Black-scaled-e1745283608563.png',
    image: 'https://tiimg.tistatic.com/fp/1/003/038/jackleg-pneumatic-and-air-leg-rock-drill-yt23-381.jpg',
    specifications: [
      'Weight: 23kg',
      'Air consumption: 17-20 m³/min',
      'Working pressure: 0.4-0.63 MPa',
      'Drill bit diameter: 34-42mm',
      'Drilling depth: up to 5m',
      'Impact frequency: 2000-2400 bpm'
    ],
    isActive: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    name: 'Industrial Compressor System',
    description: 'High-efficiency industrial air compressor system suitable for manufacturing and construction applications.',
    category: 'Industrial Equipment',
    supplierId: '2',
    supplierName: 'Beijing Erichman Technology',
    supplierLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvcuL1dXkW1RFt267hvrZLatHB7DrPoK5ZA&s',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    specifications: [
      'Capacity: 500 CFM',
      'Pressure: 175 PSI',
      'Motor: 100 HP',
      'Tank size: 500 gallons',
      'Voltage: 460V 3-phase',
      'Noise level: <75 dB'
    ],
    isActive: true,
    createdAt: '2024-01-16T00:00:00Z',
    updatedAt: '2024-01-16T00:00:00Z'
  },
  {
    id: '3',
    name: 'Precision CNC Machine Tool',
    description: 'Advanced computer-controlled machine tool for precision manufacturing with high accuracy and repeatability.',
    category: 'Manufacturing Equipment',
    supplierId: '3',
    supplierName: 'Tech Innovation Co.',
    supplierLogo: 'https://media.licdn.com/dms/image/v2/C4E0BAQEza-gluN7GYA/company-logo_200_200/company-logo_200_200/0/1663985142894?e=2147483647&v=beta&t=wGNd15IcB0JBhKuKrFxAMsCYui-Iu-9huG5vz1TdX08',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    specifications: [
      'Spindle speed: 10,000 RPM',
      'Tool capacity: 24 tools',
      'Working area: 1000x500x400mm',
      'Positioning accuracy: ±0.005mm',
      'Repeatability: ±0.003mm',
      'Control system: Fanuc 0i-MF'
    ],
    isActive: true,
    createdAt: '2024-01-17T00:00:00Z',
    updatedAt: '2024-01-17T00:00:00Z'
  },
  {
    id: '4',
    name: 'Electric Vehicle Charging Station',
    description: 'Fast-charging electric vehicle station with multiple charging ports and smart grid integration.',
    category: 'Energy Equipment',
    supplierId: '1',
    supplierName: 'StarCharge Technology',
    supplierLogo: 'https://electricvehiclecouncil.com.au/wp-content/uploads/2025/04/StarCharge-LOGO-H-Color-Black-scaled-e1745283608563.png',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    specifications: [
      'Power output: 150kW DC',
      'Charging ports: 2 CCS, 1 CHAdeMO',
      'Voltage range: 200-1000V',
      'Current range: 0-375A',
      'Network connectivity: 4G/WiFi/Ethernet',
      'Payment methods: RFID, Mobile app'
    ],
    isActive: true,
    createdAt: '2024-01-18T00:00:00Z',
    updatedAt: '2024-01-18T00:00:00Z'
  }
];
