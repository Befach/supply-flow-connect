
import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface FilterAndSortProps {
  itemCount: number;
  itemType: 'suppliers' | 'products';
  onSortChange: (sortOption: string) => void;
  onFilterChange: (filterOption: string) => void;
  currentSort: string;
  currentFilter: string;
}

export const FilterAndSort: React.FC<FilterAndSortProps> = ({
  itemCount,
  itemType,
  onSortChange,
  onFilterChange,
  currentSort,
  currentFilter
}) => {
  const sortOptions = [
    { value: 'name-asc', label: 'Name A-Z' },
    { value: 'name-desc', label: 'Name Z-A' },
    { value: 'rating-desc', label: 'Highest Rating' },
    { value: 'rating-asc', label: 'Lowest Rating' },
  ];

  const filterOptions = [
    { value: 'all', label: 'All Suppliers' },
    { value: 'verified', label: 'Verified Only' },
    { value: 'high-rated', label: 'High Rated (4.5+)' },
  ];

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filter
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {filterOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => onFilterChange(option.value)}
                className={currentFilter === option.value ? 'bg-orange-50' : ''}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 flex items-center gap-2"
            >
              Sort by
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {sortOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => onSortChange(option.value)}
                className={currentSort === option.value ? 'bg-orange-50' : ''}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <span className="text-gray-600 text-sm">
        {itemCount} {itemType}
      </span>
    </div>
  );
};
