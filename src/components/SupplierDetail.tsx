
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Star, Shield, Mail, Phone } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import type { Supplier } from '@/types/supplier';

interface SupplierDetailProps {
  supplier: Supplier;
  onBack: () => void;
}

export const SupplierDetail: React.FC<SupplierDetailProps> = ({ supplier, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 flex items-center gap-2 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Suppliers
          </Button>
          
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {supplier.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{supplier.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {supplier.verified && (
                    <div className="flex items-center gap-1 text-green-600">
                      <Shield className="h-5 w-5" />
                      <span className="text-sm font-medium">Verified</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{supplier.rating}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">About</h3>
                  <p className="text-gray-600 mb-6">{supplier.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {supplier.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">{supplier.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">{supplier.contact.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
