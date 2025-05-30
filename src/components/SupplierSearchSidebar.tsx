
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CategoryFilter } from '@/components/CategoryFilter';
import { SupplierCard } from '@/components/SupplierCard';
import type { Supplier } from '@/types/supplier';

interface SupplierSearchSidebarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
  suppliers: Supplier[];
  onSupplierSelect: (supplier: Supplier) => void;
}

export const SupplierSearchSidebar: React.FC<SupplierSearchSidebarProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  suppliers,
  onSupplierSelect,
}) => {
  return (
    <div className="w-80 bg-white rounded-lg border border-gray-200 p-6 h-fit">
      <h3 className="text-lg font-semibold mb-4">Search page(Supplier)</h3>
      
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="XXX"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>

      {/* Suppliers Found */}
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-3">Suppliers Found</h4>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {suppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => onSupplierSelect(supplier)}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-medium text-gray-900 truncate">
                    {supplier.name}
                  </h5>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {supplier.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
