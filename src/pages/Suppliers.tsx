import React, { useState, useMemo, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { SuppliersListSection } from '@/components/SuppliersListSection';
import { SupplierDetail } from '@/components/SupplierDetail';
import { FilterAndSort } from '@/components/FilterAndSort';
import { suppliers } from '@/data/suppliers';
import { useLocation } from 'react-router-dom';
import type { Supplier } from '@/types/supplier';

const Suppliers = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Suppliers');
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
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

  const handleSupplierSelect = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
  };

  const handleSearchTypeChange = () => {
    // Keep it as suppliers since we're on the supplier page
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
        <FilterAndSort 
          itemCount={filteredSuppliers.length}
          itemType="suppliers"
        />
        
        <div className="mt-6">
          <SuppliersListSection
            suppliers={filteredSuppliers}
            onSupplierClick={handleSupplierSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
