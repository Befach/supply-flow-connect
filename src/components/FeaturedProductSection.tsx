
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Package, DollarSign } from 'lucide-react';
import type { Product } from '@/types/product';

interface FeaturedProductSectionProps {
  product: Product;
  onProductClick: () => void;
}

export const FeaturedProductSection: React.FC<FeaturedProductSectionProps> = ({ 
  product, 
  onProductClick 
}) => {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onProductClick}>
      <CardContent className="p-6">
        <div className="flex gap-6">
          {/* Product Image */}
          <div className="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0"></div>
          
          {/* Product Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary">{product.category}</Badge>
                  <Badge variant="secondary">In Stock</Badge>
                  <Badge variant="secondary">Featured</Badge>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.5</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{product.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-gray-400" />
                <span className="text-xl font-semibold">
                  {product.price} {product.currency}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                by {product.supplierName}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
