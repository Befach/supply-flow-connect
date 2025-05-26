
import React from 'react';
import { MapPin, Calendar, Users, ExternalLink, Star, Badge as BadgeIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Supplier } from '@/types/supplier';

interface SupplierCardProps {
  supplier: Supplier;
}

export const SupplierCard: React.FC<SupplierCardProps> = ({ supplier }) => {
  const handleViewDetails = () => {
    // In a real app, this would navigate to the supplier detail page
    window.open(`/supplier/${supplier.id}`, '_blank');
  };

  const handleVisitWebsite = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(supplier.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 overflow-hidden">
      {supplier.isFeatured && (
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 text-xs font-medium flex items-center gap-1">
          <Star className="h-3 w-3 fill-current" />
          Featured Partner
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
            <img 
              src={supplier.logoUrl} 
              alt={`${supplier.name} logo`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(supplier.name)}&background=f97316&color=fff&size=48`;
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors truncate">
              {supplier.name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{supplier.city}, {supplier.state}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
          {supplier.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {supplier.categories.slice(0, 3).map((category) => (
            <Badge 
              key={category} 
              variant="secondary" 
              className="text-xs bg-orange-50 text-orange-700 hover:bg-orange-100"
            >
              {category}
            </Badge>
          ))}
          {supplier.categories.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{supplier.categories.length - 3} more
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 text-orange-500" />
            <span>Est. {supplier.founded}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4 text-orange-500" />
            <span>{supplier.employeeCount}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleVisitWebsite}
            className="border-orange-200 text-orange-600 hover:bg-orange-50"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
