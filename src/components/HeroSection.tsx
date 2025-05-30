
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchDropdown } from './SearchDropdown';
import { CategoryFilterButtons } from './CategoryFilterButtons';

interface HeroSectionProps {
  searchType: 'suppliers' | 'products';
  selectedCategory: string;
  categories: string[];
  onSearchTypeChange: (type: 'suppliers' | 'products') => void;
  onCategoryClick: (category: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchType,
  selectedCategory,
  categories,
  onSearchTypeChange,
  onCategoryClick,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm, 'in', searchType);
    // Search functionality can be implemented here
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find What You Need
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Search for suppliers and products across the globe
          </p>
          
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-2">
              <SearchDropdown 
                searchType={searchType} 
                onSearchTypeChange={onSearchTypeChange} 
              />
              
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder={`Search ${searchType}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 rounded-full border-2 border-gray-200"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              
              <Button
                onClick={handleSearch}
                className="h-12 px-6 rounded-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Search
              </Button>
            </div>
          </div>

          <CategoryFilterButtons
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryClick={onCategoryClick}
          />
        </div>
      </div>
    </div>
  );
};
