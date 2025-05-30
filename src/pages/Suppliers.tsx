
import React, { useState, useMemo, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { SupplierSearchSidebar } from '@/components/SupplierSearchSidebar';
import { SupplierProfile } from '@/components/SupplierProfile';
import { suppliers } from '@/data/suppliers';
import { useLocation } from 'react-router-dom';
import type { Supplier } from '@/types/supplier';

const Suppliers = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier>(suppliers[0]); // Default to first supplier

  // Handle search term from navigation state
  useEffect(() => {
    if (location.state?.searchTerm) {
      setSearchTerm(location.state.searchTerm);
    }
    if (location.state?.selectedCategory && location.state.selectedCategory !== 'All Suppliers') {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  const categories = useMemo(() => {
    const allCategories = suppliers.flatMap(supplier => supplier.categories);
    return Array.from(new Set(allCategories));
  }, []);

  const filteredSuppliers = useMemo(() => {
    return suppliers.filter(supplier => {
      const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          supplier.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          supplier.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || supplier.categories.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Supplier Page</h1>
          
          <div className="flex gap-6">
            {/* Main supplier profile */}
            <SupplierProfile supplier={selectedSupplier} />
            
            {/* Search sidebar */}
            <SupplierSearchSidebar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              categories={categories}
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
