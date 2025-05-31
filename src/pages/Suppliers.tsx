
import React, { useState, useMemo, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { SupplierSearchSidebar } from '@/components/SupplierSearchSidebar';
import { SuppliersListSection } from '@/components/SuppliersListSection';
import { SupplierDetail } from '@/components/SupplierDetail';
import { suppliers } from '@/data/suppliers';
import { useLocation } from 'react-router-dom';
import type { Supplier } from '@/types/supplier';

const Suppliers = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);

  const categories = [
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
      
      const matchesCategory = selectedCategory === 'all' || 
                             supplier.categories.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSupplierSelect = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
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
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <SupplierSearchSidebar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            categories={categories}
            suppliers={filteredSuppliers}
            onSupplierSelect={handleSupplierSelect}
          />

          {/* Main Content */}
          <div className="flex-1">
            <SuppliersListSection
              suppliers={filteredSuppliers}
              onSupplierClick={handleSupplierSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
