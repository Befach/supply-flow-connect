
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Package, DollarSign, User, Star, MapPin } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { products } from '@/data/products';
import { suppliers } from '@/data/suppliers';
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
  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const productSuppliers = suppliers.filter(s => 
    s.name === product.supplierName
  );

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
          
          {/* Main Product Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex gap-6">
                {/* Product Image */}
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0"></div>
                
                {/* Product Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h1>
                      <div className="flex items-center gap-4 mb-3">
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
                  
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <span className="text-xl font-semibold">
                      {product.price} {product.currency}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suppliers Found Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Suppliers found: {productSuppliers.length}</h2>
            <div className="space-y-4">
              {productSuppliers.map((supplier) => (
                <Card key={supplier.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={onViewSupplier}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      {/* Supplier Avatar */}
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
                      
                      {/* Supplier Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{supplier.name}</h3>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium">{supplier.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">Verified</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-2">
                          {supplier.categories.slice(0, 3).map((category) => (
                            <Badge key={category} variant="secondary" className="text-xs">
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
            
            {productSuppliers.length > 3 && (
              <div className="text-center mt-4">
                <Button variant="outline">View more</Button>
              </div>
            )}
          </div>

          {/* Related Products Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="w-full h-24 bg-gray-200 rounded-lg mb-3"></div>
                    <h4 className="font-medium text-gray-900 mb-1">{relatedProduct.name}</h4>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{relatedProduct.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{relatedProduct.price} {relatedProduct.currency}</span>
                      <Badge variant="secondary" className="text-xs">{relatedProduct.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
