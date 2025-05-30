
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
        <Icon className="h-12 w-12 text-gray-600" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
