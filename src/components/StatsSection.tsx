
import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      number: "7K+",
      label: "Products Sourced"
    },
    {
      number: "10K+",
      label: "Shipments Delivered"
    },
    {
      number: "10K+",
      label: "Happy Clients"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-3">
                {stat.number}
              </div>
              <div className="text-gray-600 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
