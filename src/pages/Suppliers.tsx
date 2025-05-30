import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navigation } from '@/components/Navigation';
import { SupplierCard } from '@/components/SupplierCard';
import { SupplierDetail } from '@/components/SupplierDetail';
import { CategoryFilter } from '@/components/CategoryFilter';
import { suppliers } from '@/data/suppliers';
import type { Supplier } from '@/types/supplier';

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);

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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Suppliers</h1>
          
          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search suppliers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              
              <div className="lg:w-64">
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSuppliers.map((supplier) => (
              <SupplierCard
                key={supplier.id}
                supplier={supplier}
                onClick={() => setSelectedSupplier(supplier)}
              />
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
