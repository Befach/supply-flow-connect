
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
import type { Supplier } from '@/types/supplier';

interface SupplierDetailProps {
  supplier: Supplier;
  onBack: () => void;
}

export const SupplierDetail: React.FC<SupplierDetailProps> = ({ supplier, onBack }) => {
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {supplier.images.map((image, index) => (
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

            {/* Products & Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-orange-600" />
                  Products & Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {supplier.products.map((product, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-900">{product}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Industry Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
              </CardContent>
            </Card>
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
          </div>
        </div>
      </div>
    </div>
  );
};
