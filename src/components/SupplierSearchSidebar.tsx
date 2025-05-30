
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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

      {/* Category Filter Buttons */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={selectedCategory === 'all' ? "default" : "outline"}
            onClick={() => onCategoryChange('all')}
            className="text-xs h-8"
          >
            All Categories
          </Button>
          {categories.slice(0, 7).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
              className="text-xs h-8"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Suppliers Found */}
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-3">Suppliers Found</h4>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {suppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => onSupplierSelect(supplier)}
            >
              <div className="flex gap-4">
                {/* Supplier Avatar/Logo */}
                <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                
                {/* Supplier Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-sm font-medium text-gray-900 truncate">
                      {supplier.name}
                    </h5>
                    <div className="text-xs text-gray-500">
                      ★ {supplier.rating}
                    </div>
                  </div>
                  
                  {/* Description lines */}
                  <div className="space-y-1 mb-3">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  
                  {/* Action Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-6 px-2"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
