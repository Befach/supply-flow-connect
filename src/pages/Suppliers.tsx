import React, { useState, useMemo, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { SupplierCard } from '@/components/SupplierCard';
import { SupplierDetail } from '@/components/SupplierDetail';
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
        <div className="max-w-6xl mx-auto">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {supplierCategories.map((category, index) => (
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
            {supplierCategories.length > 8 && (
              <button className="px-4 py-2 rounded-full text-sm bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                More ({supplierCategories.length - 8})
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
                {filteredSuppliers.length} suppliers
              </span>
            </div>
          </div>

          {/* Suppliers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSuppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setSelectedSupplier(supplier)}
              >
                {/* Supplier Image Placeholder */}
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-400 rounded-lg transform rotate-12 flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-500 rounded"></div>
                  </div>
                </div>

                {/* Supplier Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {supplier.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    <span>{supplier.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {supplier.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {supplier.categories.slice(0, 2).map((category) => (
                      <span key={category} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        {category}
                      </span>
                    ))}
                    {supplier.categories.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        +{supplier.categories.length - 2}
                      </span>
                    )}
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      ★ {supplier.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSuppliers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No suppliers found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
