
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const handleCardClick = () => {
    console.log('Product card clicked:', product.name);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 overflow-hidden bg-white cursor-pointer" onClick={handleCardClick}>
      <div className="bg-gray-100 h-48 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(product.name)}&background=f97316&color=fff&size=200`;
          }}
        />
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src={product.supplierLogo} 
              alt={product.supplierName}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(product.supplierName)}&background=f97316&color=fff&size=32`;
              }}
            />
          </div>
          <span className="text-sm text-gray-600">{product.supplierName}</span>
        </div>

        <Badge 
          variant="secondary" 
          className="bg-orange-100 text-orange-700 mb-4"
        >
          {product.category}
        </Badge>

        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 flex items-center justify-center gap-2"
          onClick={handleCardClick}
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
