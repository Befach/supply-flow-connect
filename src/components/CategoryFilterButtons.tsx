
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CategoryFilterButtonsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryClick: (category: string) => void;
}

export const CategoryFilterButtons: React.FC<CategoryFilterButtonsProps> = ({
  categories,
  selectedCategory,
  onCategoryClick,
}) => {
  const [showAll, setShowAll] = useState(false);
  const initialCategoriesCount = 8; // Show first 8 categories initially
  
  const displayedCategories = showAll 
    ? categories 
    : categories.slice(0, initialCategoriesCount);

  const hasMoreCategories = categories.length > initialCategoriesCount;

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {displayedCategories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryClick(category)}
          className={`rounded-full px-4 py-2 text-sm transition-colors hover:shadow-sm ${
            selectedCategory === category
              ? 'bg-orange-500 hover:bg-orange-600 text-white'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {category}
        </Button>
      ))}
      
      {hasMoreCategories && (
        <Button
          variant="outline"
          onClick={() => setShowAll(!showAll)}
          className="rounded-full px-4 py-2 text-sm bg-white border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-1 transition-colors"
        >
          {showAll ? 'Less' : 'More'}
          {showAll ? (
            <ChevronDown className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </Button>
      )}
    </div>
  );
};
