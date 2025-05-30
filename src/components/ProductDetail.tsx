
import React from 'react';
import { 
  ArrowLeft, 
  Package,
  Building,
  Tag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Product } from '@/types/product';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onViewSupplier: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onViewSupplier }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/3">
              <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(product.name)}&background=f97316&color=fff&size=400`;
                  }}
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                  <Tag className="h-3 w-3 mr-1" />
                  {product.category}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src={product.supplierLogo} 
                    alt={product.supplierName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-gray-600">by {product.supplierName}</span>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-6">
                {product.description}
              </p>

              <Button 
                onClick={onViewSupplier}
                className="bg-orange-600 hover:bg-orange-700"
              >
                <Building className="h-4 w-4 mr-2" />
                View Supplier Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Product Specifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-orange-600" />
                Product Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.specifications.map((spec, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-900">{spec}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
