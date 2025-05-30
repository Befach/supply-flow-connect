import React, { useState, useMemo, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
import { CategoryFilter } from '@/components/CategoryFilter';
import { SupplierDetail } from '@/components/SupplierDetail';
import { products } from '@/data/products';
import { suppliers } from '@/data/suppliers';
import { useLocation } from 'react-router-dom';
import type { Product } from '@/types/product';
import type { Supplier } from '@/types/supplier';

const Products = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [searchType] = useState<'suppliers' | 'products'>('products');

  const categories = [
    'All Categories',
    'Agriculture',
    'Electronics', 
    'Fabrics',
    'Food',
    'Manufacturing',
    'Organic',
    'Packaging',
    'Raw Materials',
    'Sustainable Products',
    'Textiles'
  ];

  // Handle search term from navigation state
  useEffect(() => {
    if (location.state?.searchTerm) {
      setSearchTerm(location.state.searchTerm);
    }
    if (location.state?.selectedCategory && location.state.selectedCategory !== 'All Categories') {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  const productCategories = useMemo(() => {
    const allCategories = products.map(product => product.category);
    return Array.from(new Set(allCategories));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All Categories' || 
                             selectedCategory === 'all' || 
                             product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleViewSupplier = () => {
    if (selectedProduct) {
      const supplier = suppliers.find(s => s.name === selectedProduct.supplierName);
      if (supplier) {
        setSelectedSupplier(supplier);
        setSelectedProduct(null);
      }
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleSearchTypeChange = () => {
    // Keep it as products since we're on the product page
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  if (selectedSupplier) {
    return (
      <SupplierDetail 
        supplier={selectedSupplier}
        onBack={() => setSelectedSupplier(null)}
      />
    );
  }

  if (selectedProduct) {
    return (
      <ProductDetail 
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
        onViewSupplier={handleViewSupplier}
        onProductClick={handleProductClick}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <HeroSection
        searchType={searchType}
        selectedCategory={selectedCategory}
        categories={categories}
        onSearchTypeChange={handleSearchTypeChange}
        onCategoryClick={handleCategoryClick}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Search Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              
              {/* Category Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {productCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Found Label */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Products found: {filteredProducts.length}
            </h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
