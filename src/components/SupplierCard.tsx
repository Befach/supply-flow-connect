
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Shield } from 'lucide-react';
import type { Supplier } from '@/types/supplier';

interface SupplierCardProps {
  supplier: Supplier;
  onClick: () => void;
}

export const SupplierCard: React.FC<SupplierCardProps> = ({ supplier, onClick }) => {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">
            {supplier.name}
          </CardTitle>
          {supplier.verified && (
            <Shield className="h-5 w-5 text-green-500" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {supplier.description}
        </p>
        
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-600">{supplier.location}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{supplier.rating}</span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {supplier.categories.slice(0, 3).map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
          {supplier.categories.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{supplier.categories.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
