
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
          
          {/* Supplier Profile Section */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-start gap-6">
                {/* Supplier Avatar/Logo */}
                <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                        {supplier.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">{supplier.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
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
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {supplier.categories.map((category) => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4">{supplier.description}</p>
                  
                  {/* Contact Information */}
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{supplier.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{supplier.contact.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Products Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-3"></div>
                  <h4 className="font-medium text-gray-900 mb-1">Product {item}</h4>
                  <p className="text-sm text-gray-600">Product description goes here</p>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" className="px-6">
                View more
              </Button>
            </div>
          </div>

          {/* Related Suppliers Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Related suppliers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Supplier {item}</h4>
                      <p className="text-sm text-gray-600">Brief description</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
