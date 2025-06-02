
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
  const [sortOption, setSortOption] = useState<string>('name-asc');
  const [filterOption, setFilterOption] = useState<string>('all');

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

  const filteredAndSortedSuppliers = useMemo(() => {
    let filtered = suppliers.filter(supplier => {
      const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          supplier.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          supplier.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All Suppliers' || 
                             selectedCategory === 'all' || 
                             supplier.categories.includes(selectedCategory);
      
      // Apply additional filters
      let matchesFilter = true;
      if (filterOption === 'verified') {
        matchesFilter = supplier.verified;
      } else if (filterOption === 'high-rated') {
        matchesFilter = supplier.rating >= 4.5;
      }
      
      return matchesSearch && matchesCategory && matchesFilter;
    });

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortOption) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'rating-desc':
          return b.rating - a.rating;
        case 'rating-asc':
          return a.rating - b.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortOption, filterOption]);

  const handleSupplierSelect = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
  };

  const handleSearchTypeChange = () => {
    // Keep it as suppliers since we're on the supplier page
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (newSortOption: string) => {
    setSortOption(newSortOption);
  };

  const handleFilterChange = (newFilterOption: string) => {
    setFilterOption(newFilterOption);
  };

  if (selectedSupplier) {
    return (
      <SupplierDetail 
        supplier={selectedSupplier}
        onBack={() => setSelectedSupplier(null)}
        onSupplierClick={handleSupplierSelect}
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
          itemCount={filteredAndSortedSuppliers.length}
          itemType="suppliers"
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange}
          currentSort={sortOption}
          currentFilter={filterOption}
        />
        
        <div className="mt-6">
          <SuppliersListSection
            suppliers={filteredAndSortedSuppliers}
            onSupplierClick={handleSupplierSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
