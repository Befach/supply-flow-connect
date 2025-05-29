
import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Users, 
  ExternalLink, 
  Mail, 
  Phone, 
  Globe,
  Star,
  Package,
  Building,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ProductCard } from '@/components/ProductCard';
import { SupplierCard } from '@/components/SupplierCard';
import { productsData } from '@/data/products';
import { suppliersData } from '@/data/suppliers';
import type { Supplier } from '@/types/supplier';

interface SupplierDetailProps {
  supplier: Supplier;
  onBack: () => void;
  onSupplierClick?: (supplier: Supplier) => void;
  onProductClick?: (product: any) => void;
}

export const SupplierDetail: React.FC<SupplierDetailProps> = ({ 
  supplier, 
  onBack, 
  onSupplierClick, 
  onProductClick 
}) => {
  const handleContact = (type: 'email' | 'phone' | 'website') => {
    switch (type) {
      case 'email':
        window.open(`mailto:${supplier.email}`);
        break;
      case 'phone':
        window.open(`tel:${supplier.phone}`);
        break;
      case 'website':
        window.open(supplier.website, '_blank', 'noopener,noreferrer');
        break;
    }
  };

  // Get products from this supplier
  const supplierProducts = productsData.filter(product => product.supplierId === supplier.id);

  // Get related suppliers (same categories, excluding current supplier)
  const relatedSuppliers = suppliersData
    .filter(s => 
      s.id !== supplier.id && 
      s.isActive && 
      s.categories.some(cat => supplier.categories.includes(cat))
    )
    .slice(0, 3);

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
            Back to Directory
          </Button>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={supplier.logoUrl} 
                  alt={`${supplier.name} logo`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(supplier.name)}&background=f97316&color=fff&size=80`;
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{supplier.name}</h1>
                  {supplier.isFeatured && (
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span>{supplier.address}</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                  {supplier.description}
                </p>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {supplier.categories.map((category) => (
                    <Badge 
                      key={category}
                      variant="secondary"
                      className="bg-orange-50 text-orange-700 hover:bg-orange-100"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Products Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Package className="h-6 w-6 text-orange-600" />
                  Products ({supplierProducts.length})
                </h2>
                {supplierProducts.length > 6 && (
                  <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                    View more
                  </Button>
                )}
              </div>
              
              {supplierProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {supplierProducts.slice(0, 6).map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product}
                      onClick={() => {
                        console.log('Product clicked:', product.name);
                        if (onProductClick) {
                          onProductClick(product);
                        }
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                  <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No products yet</h3>
                  <p className="text-gray-600">This supplier hasn't added any products to showcase.</p>
                </div>
              )}
            </div>

            {/* Related Suppliers */}
            {relatedSuppliers.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Suppliers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedSuppliers.map((relatedSupplier) => (
                    <SupplierCard 
                      key={relatedSupplier.id} 
                      supplier={relatedSupplier}
                      onClick={() => {
                        console.log('Related supplier clicked:', relatedSupplier.name);
                        if (onSupplierClick) {
                          onSupplierClick(relatedSupplier);
                        }
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  onClick={() => handleContact('email')}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                  onClick={() => handleContact('phone')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {supplier.phone}
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                  onClick={() => handleContact('website')}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
                
                <Separator />
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{supplier.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{supplier.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <ExternalLink className="h-4 w-4" />
                    <span className="truncate">{supplier.website}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Company Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Founded</span>
                  </div>
                  <span className="font-semibold">{supplier.founded}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>Employees</span>
                  </div>
                  <span className="font-semibold">{supplier.employeeCount}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Partnership</span>
                  </div>
                  <span className="font-semibold">{supplier.partnershipYears} years</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>Location</span>
                  </div>
                  <span className="font-semibold">{supplier.country}</span>
                </div>
              </CardContent>
            </Card>

            {/* Company Images */}
            {supplier.images.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-orange-600" />
                    Company Gallery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {supplier.images.slice(0, 2).map((image, index) => (
                      <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${supplier.name} facility ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
