
import React from 'react';
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
            <SearchDropdown 
              searchType={searchType} 
              onSearchTypeChange={onSearchTypeChange} 
            />
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
