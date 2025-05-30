
import React from 'react';
import { TrendingUp, DollarSign, Truck, Globe, Users, Camera } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: "Sourcing",
      description: "Our sourcing team links up with trusted global suppliers to score top-quality products at the best prices."
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Our international logistics simplifies imports to India with seamless end-to-end logistics."
    },
    {
      icon: DollarSign,
      title: "Letter of Credit",
      description: "We use encrypted, secure payment methods to keep your transactions safe."
    },
    {
      icon: TrendingUp,
      title: "Extended Data Insights",
      description: "We provide data analytics that will help you understand market trends and manage imports better."
    },
    {
      icon: Users,
      title: "Customs Clearances",
      description: "We make sure customs processes are smooth and avoid penalties due to delays."
    },
    {
      icon: Camera,
      title: "Ensure Quality SGS",
      description: "Get sea freight solutions with trusted carriers, great service, and competitive pricing."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
