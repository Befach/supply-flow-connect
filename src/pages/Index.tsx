
import React, { useState } from 'react';
import { Search, Camera, TrendingUp, DollarSign, Truck, Globe, ChevronDown, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Navigation } from '@/components/Navigation';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState<'suppliers' | 'products'>('suppliers');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchType === 'suppliers') {
      navigate('/suppliers');
    } else if (searchType === 'products') {
      navigate('/products');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Find What You Need
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Search for suppliers and products across the globe
            </p>
            
            {/* Updated Search Bar with Dropdown */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="flex items-center bg-white border-2 border-gray-200 rounded-full shadow-sm overflow-hidden">
                {/* Search Type Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="h-12 px-6 hover:bg-gray-100 rounded-none border-r border-gray-200 capitalize flex items-center gap-2"
                    >
                      {searchType}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-md">
                    <DropdownMenuItem 
                      onClick={() => setSearchType('suppliers')}
                      className="hover:bg-gray-100 cursor-pointer"
                    >
                      Suppliers
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSearchType('products')}
                      className="hover:bg-gray-100 cursor-pointer"
                    >
                      Products
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex-1 relative">
                  <Input
                    type="text"
                    placeholder={`Search ${searchType}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-600 placeholder:text-gray-400 pl-6"
                  />
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 hover:bg-gray-100 rounded-none"
                >
                  <Camera className="h-5 w-5 text-gray-600" />
                </Button>
                
                <Button
                  onClick={handleSearch}
                  className="h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white rounded-r-full rounded-l-none"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Sourcing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Our sourcing team links up with trusted global suppliers to score top-quality products at the best prices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Logistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Our international logistics simplifies imports to India with seamless end-to-end logistics.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Letter of Credit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We use encrypted, secure payment methods to keep your transactions safe.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Extended Data Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We provide data analytics that will help you understand market trends and manage imports better.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Customs Clearances
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We make sure customs processes are smooth and avoid penalties due to delays.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-12 w-12 text-gray-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-gray-900 border-b-2 border-orange-500 pb-2 inline-block">
                  Ensure Quality SGS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Get sea freight solutions with trusted carriers, great service, and competitive pricing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
