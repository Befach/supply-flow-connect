
import React, { useState, useMemo, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/Navigation';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
import { SupplierDetail } from '@/components/SupplierDetail';
import { CategoryFilterButtons } from '@/components/CategoryFilterButtons';
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
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-center mb-8">Search page (Product)</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg rounded-full border-2 border-gray-200 focus:border-orange-500"
            />
          </div>

          {/* Category Filter Buttons */}
          <CategoryFilterButtons 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={handleCategoryClick}
          />

          {/* Products Found Header */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold">
              Products found: {filteredProducts.length}
            </h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>

          {/* No Products Found */}
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
