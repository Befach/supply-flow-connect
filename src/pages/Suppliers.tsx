import React, { useState, useMemo, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { SupplierSearchSidebar } from '@/components/SupplierSearchSidebar';
import { SupplierProfile } from '@/components/SupplierProfile';
import { suppliers } from '@/data/suppliers';
import { useLocation } from 'react-router-dom';
import type { Supplier } from '@/types/supplier';

const Suppliers = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Suppliers');
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier>(suppliers[0]);
  const [searchType] = useState<'suppliers' | 'products'>('suppliers');

  const categories = [
    'All Suppliers',
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
    if (location.state?.selectedCategory && location.state.selectedCategory !== 'All Suppliers') {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  const supplierCategories = useMemo(() => {
    const allCategories = suppliers.flatMap(supplier => supplier.categories);
    return Array.from(new Set(allCategories));
  }, []);

  const filteredSuppliers = useMemo(() => {
    return suppliers.filter(supplier => {
      const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          supplier.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          supplier.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All Suppliers' || 
                             selectedCategory === 'all' || 
                             supplier.categories.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleSearchTypeChange = () => {
    // Keep it as suppliers since we're on the supplier page
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

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
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6">
            {/* Main supplier profile */}
            <SupplierProfile supplier={selectedSupplier} />
            
            {/* Search sidebar */}
            <SupplierSearchSidebar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory === 'All Suppliers' ? 'all' : selectedCategory}
              onCategoryChange={(category) => setSelectedCategory(category === 'all' ? 'All Suppliers' : category)}
              categories={supplierCategories}
              suppliers={filteredSuppliers}
              onSupplierSelect={setSelectedSupplier}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
