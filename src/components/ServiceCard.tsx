
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  iconBgColor = "bg-orange-500",
}) => {
  return (
    <Card className="text-center p-6 hover:shadow-lg transition-shadow border border-gray-200 rounded-lg">
      <div className="flex justify-center mb-4">
        <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <CardHeader className="pb-2 px-0">
        <CardTitle className="text-xl font-semibold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <p className="text-gray-600 leading-relaxed text-sm">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
