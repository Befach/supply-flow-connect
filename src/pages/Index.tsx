
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, Users, ExternalLink, Filter, Camera, TrendingUp, DollarSign, Truck, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SupplierCard } from '@/components/SupplierCard';
import { ProductCard } from '@/components/ProductCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { Navigation } from '@/components/Navigation';
import { SupplierDetail } from '@/components/SupplierDetail';
import { ProductDetail } from '@/components/ProductDetail';
import { suppliersData } from '@/data/suppliers';
import { productsData } from '@/data/products';
import type { Supplier } from '@/types/supplier';
import type { Product } from '@/types/product';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchType, setSearchType] = useState<string>('product');
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredSuppliers = useMemo(() => {
    return suppliersData.filter(supplier => {
      let matchesSearch = false;
      
      matchesSearch = 
        supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = 
        selectedCategories.length === 0 || 
        selectedCategories.some(cat => supplier.categories.includes(cat));

      return matchesSearch && matchesCategory && supplier.isActive;
    });
  }, [searchTerm, selectedCategories]);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      let matchesSearch = false;
      
      matchesSearch = 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.supplierName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = 
        selectedCategories.length === 0 || 
        selectedCategories.includes(product.category);

      return matchesSearch && matchesCategory && product.isActive;
    });
  }, [searchTerm, selectedCategories]);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    if (searchType === 'supplier') {
      suppliersData.forEach(supplier => {
        supplier.categories.forEach(cat => categories.add(cat));
      });
    } else {
      productsData.forEach(product => {
        categories.add(product.category);
      });
    }
    return Array.from(categories).sort();
  }, [searchType]);

  const handleSupplierClick = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleViewSupplierFromProduct = () => {
    if (selectedProduct) {
      const supplier = suppliersData.find(s => s.id === selectedProduct.supplierId);
      if (supplier) {
        setSelectedProduct(null);
        setSelectedSupplier(supplier);
      }
    }
  };

  const handleBackToDirectory = () => {
    setSelectedSupplier(null);
    setSelectedProduct(null);
  };

  if (selectedSupplier) {
    return (
      <SupplierDetail 
        supplier={selectedSupplier} 
        onBack={handleBackToDirectory}
        onSupplierClick={handleSupplierClick}
        onProductClick={handleProductClick}
      />
    );
  }

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={handleBackToDirectory} onViewSupplier={handleViewSupplierFromProduct} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {searchType === 'supplier' ? 'Our Trusted Suppliers' : 'Quality Products'}
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              {searchType === 'supplier' 
                ? 'Quality partners that help us deliver excellence across the globe'
                : 'Discover premium products from our verified suppliers'
              }
            </p>
            
            {/* Updated Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="flex items-center bg-white border-2 border-gray-200 rounded-full shadow-sm overflow-hidden">
                <Select value={searchType} onValueChange={(value) => {
                  setSearchType(value);
                  setSearchTerm('');
                  setSelectedCategories([]);
                }}>
                  <SelectTrigger className="w-[120px] h-12 border-0 rounded-l-full bg-transparent focus:ring-0 focus:ring-offset-0 pl-4">
                    <SelectValue placeholder="Search by" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                    <SelectItem value="product" className="cursor-pointer hover:bg-orange-50">Products</SelectItem>
                    <SelectItem value="supplier" className="cursor-pointer hover:bg-orange-50">Suppliers</SelectItem>
                  </SelectContent>
                </Select>
                
                <Separator orientation="vertical" className="h-6 bg-gray-300" />
                
                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder="artificial leaves"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600 placeholder:text-gray-400"
                  />
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 hover:bg-gray-100 rounded-none"
                >
                  <Camera className="h-5 w-5 text-gray-600" />
                </Button>
                
                <Button
                  className="h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-r-full rounded-l-none"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge
                variant={selectedCategories.length === 0 ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm transition-all duration-200 ${
                  selectedCategories.length === 0
                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50'
                }`}
                onClick={() => setSelectedCategories([])}
              >
                All {searchType === 'supplier' ? 'Suppliers' : 'Products'}
              </Badge>
              {allCategories.slice(0, 9).map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <Badge
                    key={category}
                    variant={isSelected ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 text-sm transition-all duration-200 ${
                      isSelected
                        ? 'bg-orange-600 hover:bg-orange-700 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedCategories(selectedCategories.filter(c => c !== category));
                      } else {
                        setSelectedCategories([...selectedCategories, category]);
                      }
                    }}
                  >
                    {category}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Our Guarantee Section */}
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-orange-500">OUR</span> GUARANTEE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We Guarantee</h3>
              <p className="text-gray-600 mb-1">to help you</p>
              <p className="text-gray-600 mb-1">increase your</p>
              <p className="text-gray-900 font-medium">Revenues.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">We Guarantee</h3>
              <p className="text-gray-600 mb-1">to help you</p>
              <p className="text-gray-600 mb-1">reduce your</p>
              <p className="text-gray-900 font-medium">Cost.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-12 w-12 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best landed</h3>
              <p className="text-gray-600 mb-1">prices of</p>
              <p className="text-gray-600 mb-1">Imported</p>
              <p className="text-gray-900 font-medium">Products</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700">
              <span className="text-orange-500 font-semibold">120+ Customers</span> 
              <span className="text-gray-900 font-semibold"> benefited with our Services till now</span>
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Sourcing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Our sourcing team links up with trusted global suppliers to score top-quality products at the best prices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Logistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Our international logistics simplifies imports to India with seamless end-to-end logistics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Letter of Credit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We use encrypted, secure payment methods to keep your transactions safe.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Extended Data Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We provide data analytics that will help you understand market trends and manage imports better.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Customs Clearances
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We make sure customs processes are smooth and avoid penalties due to delays.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Ensure Quality SGS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Get sea freight solutions with trusted carriers, great service, and competitive pricing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {searchType === 'supplier' 
              ? `${filteredSuppliers.length} Suppliers Found`
              : `${filteredProducts.length} Products Found`
            }
          </h2>
          {(searchTerm || selectedCategories.length > 0) && (
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategories([]);
              }}
              className="text-orange-600 border-orange-600 hover:bg-orange-50"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Results Grid */}
        {searchType === 'supplier' ? (
          filteredSuppliers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSuppliers.map((supplier) => (
                <SupplierCard 
                  key={supplier.id} 
                  supplier={supplier} 
                  onClick={() => handleSupplierClick(supplier)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No suppliers found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategories([]);
                  }}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Show All Suppliers
                </Button>
              </div>
            </div>
          )
        ) : (
          filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategories([]);
                  }}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  Show All Products
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Index;
