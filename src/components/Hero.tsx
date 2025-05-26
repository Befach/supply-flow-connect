
import React from 'react';
import { Search, TrendingUp, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToSearch = () => {
    const searchSection = document.querySelector('.container');
    searchSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 border-b border-orange-100">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              Trusted by 1000+ Companies
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find the Perfect
              <span className="text-orange-600 block">Business Partners</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with verified suppliers and partners across industries. Streamline your procurement process with our comprehensive supplier directory.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg h-auto"
              onClick={scrollToSearch}
            >
              <Search className="mr-2 h-5 w-5" />
              Browse Suppliers
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg h-auto"
            >
              <Users className="mr-2 h-5 w-5" />
              List Your Company
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Industry Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};
