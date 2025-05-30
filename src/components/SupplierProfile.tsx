
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Shield, Mail, Phone } from 'lucide-react';
import type { Supplier } from '@/types/supplier';

interface SupplierProfileProps {
  supplier: Supplier;
}

export const SupplierProfile: React.FC<SupplierProfileProps> = ({ supplier }) => {
  return (
    <div className="flex-1">
      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {supplier.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600 text-sm">{supplier.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {supplier.categories.map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {supplier.verified && (
                    <div className="flex items-center gap-1 text-green-600">
                      <Shield className="h-4 w-4" />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{supplier.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">About</h3>
              <p className="text-gray-600">{supplier.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="p-3">
                    <div className="w-full h-20 bg-gray-200 rounded mb-2"></div>
                    <h4 className="text-sm font-medium">Product {item}</h4>
                    <p className="text-xs text-gray-600">Product description</p>
                  </Card>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline">View more</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Related suppliers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div>
                        <h4 className="text-sm font-medium">Supplier {item}</h4>
                        <p className="text-xs text-gray-600">Brief description</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 text-sm">{supplier.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600 text-sm">{supplier.contact.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
