
import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterAndSortProps {
  itemCount: number;
  itemType: 'suppliers' | 'products';
}

export const FilterAndSort: React.FC<FilterAndSortProps> = ({
  itemCount,
  itemType
}) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <Button
        variant="ghost"
        className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 flex items-center gap-2"
      >
        <Filter className="h-4 w-4" />
        Filter and sort
      </Button>
      
      <span className="text-gray-600 text-sm">
        {itemCount} {itemType}
      </span>
    </div>
  );
};
