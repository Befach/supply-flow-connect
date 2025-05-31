
import React from 'react';
import { Users, Package, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SearchDropdownProps {
  searchType: 'suppliers' | 'products';
  onSearchTypeChange: (type: 'suppliers' | 'products') => void;
}

export const SearchDropdown: React.FC<SearchDropdownProps> = ({
  searchType,
  onSearchTypeChange,
}) => {
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-12 px-6 rounded-full capitalize flex items-center gap-2 transition-colors shadow-sm border-2 border-gray-200 hover:shadow-md bg-orange-500 text-white hover:bg-orange-600"
          >
            {searchType === 'suppliers' ? (
              <Users className="h-5 w-5" />
            ) : (
              <Package className="h-5 w-5" />
            )}
            <span className="capitalize">{searchType}</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-md z-50">
          <DropdownMenuItem 
            onClick={() => onSearchTypeChange('suppliers')}
            className="hover:bg-orange-50 cursor-pointer flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            Suppliers
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => onSearchTypeChange('products')}
            className="hover:bg-orange-50 cursor-pointer flex items-center gap-2"
          >
            <Package className="h-4 w-4" />
            Products
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
