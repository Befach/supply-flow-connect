
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, DollarSign } from 'lucide-react';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900">
            {product.name}
          </CardTitle>
          {product.inStock && (
            <Package className="h-5 w-5 text-green-500" />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2 mb-3">
          <DollarSign className="h-4 w-4 text-gray-400" />
          <span className="text-lg font-semibold">
            {product.price} {product.currency}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <span className="text-sm text-gray-500">
            by {product.supplierName}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
