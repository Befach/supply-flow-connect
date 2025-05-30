import React, { useState, useMemo, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetail } from '@/components/ProductDetail';
import { CategoryFilter } from '@/components/CategoryFilter';
import { SupplierDetail } from '@/components/SupplierDetail';
import { FeaturedProductSection } from '@/components/FeaturedProductSection';
import { SuppliersListSection } from '@/components/SuppliersListSection';
import { RelatedProductsSection } from '@/components/RelatedProductsSection';
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

  // Get featured product (first product for now)
  const featuredProduct = products[0];
  
  // Get suppliers for the featured product
  const featuredProductSuppliers = suppliers.filter(s => 
    s.name === featuredProduct?.supplierName
  );

  // Get related products (same category as featured, excluding featured)
  const relatedProducts = products.filter(p => 
    p.category === featuredProduct?.category && p.id !== featuredProduct?.id
  ).slice(0, 3);

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
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Featured Product Section */}
          {featuredProduct && (
            <FeaturedProductSection 
              product={featuredProduct}
              onProductClick={() => setSelectedProduct(featuredProduct)}
            />
          )}

          {/* Suppliers Found Section */}
          <SuppliersListSection 
            suppliers={featuredProductSuppliers}
            onSupplierClick={(supplier) => setSelectedSupplier(supplier)}
          />

          {/* Related Products Section */}
          <RelatedProductsSection 
            products={relatedProducts}
            onProductClick={handleProductClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
