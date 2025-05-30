
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, MapPin, User } from 'lucide-react';
import type { Supplier } from '@/types/supplier';

interface SuppliersListSectionProps {
  suppliers: Supplier[];
  onSupplierClick: (supplier: Supplier) => void;
}

export const SuppliersListSection: React.FC<SuppliersListSectionProps> = ({ 
  suppliers, 
  onSupplierClick 
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Suppliers Found: {suppliers.length}
      </h2>
      
      <div className="space-y-4">
        {suppliers.map((supplier) => (
          <Card 
            key={supplier.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onSupplierClick(supplier)}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                {/* Supplier Avatar */}
                <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
                
                {/* Supplier Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{supplier.name}</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{supplier.rating}</span>
                      </div>
                      {supplier.verified && (
                        <Badge variant="secondary" className="text-xs">Verified</Badge>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">{supplier.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-2">
                    {supplier.categories.slice(0, 3).map((category) => (
                      <Badge key={category} variant="outline" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{supplier.location}</span>
                    </div>
                    <span>{supplier.contact.email}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {suppliers.length > 3 && (
        <div className="text-center mt-4">
          <Button variant="outline">View more</Button>
        </div>
      )}
    </div>
  );
};
