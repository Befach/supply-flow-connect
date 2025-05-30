
import React from 'react';
import { Globe, Truck, CreditCard, FileText, Package, Circle } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: "Sourcing",
      description: "Our sourcing team links up with trusted global suppliers to score top-quality products at the best prices.",
      iconBgColor: "bg-orange-500"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Our international logistics simplifies imports to India with seamless end-to-end logistics.",
      iconBgColor: "bg-amber-600"
    },
    {
      icon: CreditCard,
      title: "Letter of Credit",
      description: "We use encrypted, secure payment methods to keep your transactions safe.",
      iconBgColor: "bg-orange-500"
    },
    {
      icon: FileText,
      title: "Extended Data Insights",
      description: "We provide data analytics that will help you understand market trends and manage imports better.",
      iconBgColor: "bg-yellow-500"
    },
    {
      icon: Package,
      title: "Customs Clearances",
      description: "We make sure customs processes are smooth and avoid penalties due to delays.",
      iconBgColor: "bg-yellow-600"
    },
    {
      icon: Circle,
      title: "Ensure Quality SGS",
      description: "Get sea freight solutions with trusted carriers, great service, and competitive pricing.",
      iconBgColor: "bg-amber-700"
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconBgColor={service.iconBgColor}
              highlighted={service.highlighted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
