
import React, { useState, useMemo } from 'react';
import { Search, MapPin, Calendar, Users, ExternalLink, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { SupplierCard } from '@/components/SupplierCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { Navigation } from '@/components/Navigation';
import { suppliersData } from '@/data/suppliers';
import type { Supplier } from '@/types/supplier';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredSuppliers = useMemo(() => {
    return suppliersData.filter(supplier => {
      const matchesSearch = 
        supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplier.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = 
        selectedCategories.length === 0 || 
        selectedCategories.some(cat => supplier.categories.includes(cat));

      return matchesSearch && matchesCategory && supplier.isActive;
    });
  }, [searchTerm, selectedCategories]);

  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    suppliersData.forEach(supplier => {
      supplier.categories.forEach(cat => categories.add(cat));
    });
    return Array.from(categories).sort();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Trusted Suppliers
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Quality partners that help us deliver excellence across the globe
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search suppliers by name, category, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-orange-500 transition-colors rounded-lg"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge
                variant={selectedCategories.length === 0 ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 text-sm transition-all duration-200 ${
                  selectedCategories.length === 0
                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50'
                }`}
                onClick={() => setSelectedCategories([])}
              >
                All Suppliers
              </Badge>
              {allCategories.slice(0, 9).map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <Badge
                    key={category}
                    variant={isSelected ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 text-sm transition-all duration-200 ${
                      isSelected
                        ? 'bg-orange-600 hover:bg-orange-700 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-orange-300 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedCategories(selectedCategories.filter(c => c !== category));
                      } else {
                        setSelectedCategories([...selectedCategories, category]);
                      }
                    }}
                  >
                    {category}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredSuppliers.length} Suppliers Found
          </h2>
          {(searchTerm || selectedCategories.length > 0) && (
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategories([]);
              }}
              className="text-orange-600 border-orange-600 hover:bg-orange-50"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Supplier Grid */}
        {filteredSuppliers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSuppliers.map((supplier) => (
              <SupplierCard key={supplier.id} supplier={supplier} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No suppliers found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategories([]);
                }}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Show All Suppliers
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
