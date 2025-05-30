
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign } from 'lucide-react';
import type { Product } from '@/types/product';

interface RelatedProductsSectionProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const RelatedProductsSection: React.FC<RelatedProductsSectionProps> = ({ 
  products, 
  onProductClick 
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Related Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card 
            key={product.id} 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onProductClick(product)}
          >
            <CardContent className="p-4">
              <div className="w-full h-24 bg-gray-200 rounded-lg mb-3"></div>
              <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4 text-gray-400" />
                  <span className="font-semibold">{product.price} {product.currency}</span>
                </div>
                <Badge variant="secondary" className="text-xs">{product.category}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
