
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, Users, ExternalLink, Filter } from 'lucide-react';
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
  const [searchType, setSearchType] = useState<string>('supplier');
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
            
            {/* Search Bar with Dropdown */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="flex gap-2">
                <Select value={searchType} onValueChange={(value) => {
                  setSearchType(value);
                  setSearchTerm('');
                  setSelectedCategories([]);
                }}>
                  <SelectTrigger className="w-[140px] h-14 border-2 border-gray-200 focus:border-orange-500 transition-colors rounded-lg">
                    <SelectValue placeholder="Search by" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-lg z-50">
                    <SelectItem value="supplier" className="cursor-pointer hover:bg-orange-50">Supplier</SelectItem>
                    <SelectItem value="product" className="cursor-pointer hover:bg-orange-50">Product</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder={`Search ${searchType === 'supplier' ? 'suppliers by name, category, or location' : 'products and services'}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-14 text-lg border-2 border-gray-200 focus:border-orange-500 transition-colors rounded-lg"
                  />
                </div>
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
