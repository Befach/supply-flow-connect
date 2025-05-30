
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Package, DollarSign, User } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import type { Product } from '@/types/product';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onViewSupplier: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ 
  product, 
  onBack, 
  onViewSupplier 
}) => {
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
            Back to Products
          </Button>
          
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <span className="text-xl font-semibold">
                      {product.price} {product.currency}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {product.inStock && (
                    <div className="flex items-center gap-1 text-green-600">
                      <Package className="h-5 w-5" />
                      <span className="text-sm font-medium">In Stock</span>
                    </div>
                  )}
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                  <div className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Supplier</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{product.supplierName}</span>
                  </div>
                  <Button onClick={onViewSupplier} className="w-full">
                    View Supplier Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
