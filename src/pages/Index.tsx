
import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { StatsSection } from '@/components/StatsSection';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [searchType, setSearchType] = useState<'suppliers' | 'products'>('suppliers');
  const [selectedCategory, setSelectedCategory] = useState('All Suppliers');
  const navigate = useNavigate();

  const categories = [
    'All Suppliers',
    'Agriculture',
    'Electronics',
    'Fabrics',
    'Food',
    'Manufacturing',
    'Organic',
    'Packaging',
    'Raw Materials',
    'Sustainable Products',
    'Textiles'
  ];

  const handleDropdownClick = (type: 'suppliers' | 'products') => {
    setSearchType(type);
    if (type === 'suppliers') {
      navigate('/suppliers', { replace: true });
    } else if (type === 'products') {
      navigate('/products', { replace: true });
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    navigate('/suppliers', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <HeroSection
        searchType={searchType}
        selectedCategory={selectedCategory}
        categories={categories}
        onSearchTypeChange={handleDropdownClick}
        onCategoryClick={handleCategoryClick}
      />

      <ServicesSection />
      <StatsSection />
    </div>
  );
};

export default Index;
