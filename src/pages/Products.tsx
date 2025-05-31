
import React, { useState, useMemo, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
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
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {productCategories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
            {productCategories.length > 8 && (
              <button className="px-4 py-2 rounded-full text-sm bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                More ({productCategories.length - 8})
              </button>
            )}
          </div>

          {/* Filter and Sort Section */}
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-orange-500">
                <Filter className="h-4 w-4" />
                <span className="font-medium">Filter and sort</span>
              </div>
              <span className="text-gray-600 font-medium">
                {filteredProducts.length} products
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleProductClick(product)}
              >
                {/* Product Image Placeholder */}
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-400 rounded-lg transform rotate-12 flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-500 rounded"></div>
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    <span>by {product.supplierName}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {product.price} {product.currency}
                    </span>
                  </div>
                </div>
              </div>
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
