
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  highlighted?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  iconBgColor = "bg-orange-500",
  highlighted = false,
}) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm text-center ${highlighted ? 'border-2 border-orange-400' : 'border border-gray-200'} hover:shadow-md transition-shadow`}>
      <div className="flex justify-center mb-4">
        <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};
