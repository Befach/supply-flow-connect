
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onCategoryChange,
}) => {
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const clearAllCategories = () => {
    onCategoryChange([]);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
        {selectedCategories.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllCategories}
            className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
          >
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category);
          return (
            <Badge
              key={category}
              variant={isSelected ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                isSelected
                  ? 'bg-orange-600 hover:bg-orange-700 text-white border-orange-600'
                  : 'border-gray-300 text-gray-700 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50'
              }`}
              onClick={() => toggleCategory(category)}
            >
              {category}
              {isSelected && (
                <X className="h-3 w-3 ml-1" />
              )}
            </Badge>
          );
        })}
      </div>

      {selectedCategories.length > 0 && (
        <div className="text-sm text-gray-600">
          {selectedCategories.length} {selectedCategories.length === 1 ? 'category' : 'categories'} selected
        </div>
      )}
    </div>
  );
};
