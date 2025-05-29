
import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Supplier } from '@/types/supplier';

interface SupplierCardProps {
  supplier: Supplier;
  onClick?: () => void;
}

export const SupplierCard: React.FC<SupplierCardProps> = ({ supplier, onClick }) => {
  const handleViewDetails = () => {
    if (onClick) {
      onClick();
    } else {
      // Fallback for external navigation
      window.open(`/supplier/${supplier.id}`, '_blank');
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 overflow-hidden bg-white cursor-pointer" onClick={handleViewDetails}>
      {/* Image placeholder with box icon */}
      <div className="bg-gray-100 h-48 flex items-center justify-center">
        <div className="w-16 h-16">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <defs>
              <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D2691E" />
                <stop offset="50%" stopColor="#CD853F" />
                <stop offset="100%" stopColor="#8B4513" />
              </linearGradient>
            </defs>
            {/* Box shape */}
            <path d="M12 20 L32 10 L52 20 L52 44 L32 54 L12 44 Z" fill="url(#boxGradient)" stroke="#8B4513" strokeWidth="1"/>
            {/* Top face */}
            <path d="M12 20 L32 10 L52 20 L32 30 Z" fill="#F4A460" stroke="#8B4513" strokeWidth="1"/>
            {/* Right face */}
            <path d="M32 30 L52 20 L52 44 L32 54 Z" fill="#CD853F" stroke="#8B4513" strokeWidth="1"/>
            {/* Left face */}
            <path d="M12 20 L32 30 L32 54 L12 44 Z" fill="#DEB887" stroke="#8B4513" strokeWidth="1"/>
          </svg>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-2">
            {supplier.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>{supplier.city}, {supplier.state}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {supplier.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {supplier.categories.slice(0, 3).map((category, index) => (
            <Badge 
              key={category} 
              variant="secondary" 
              className={`text-xs px-2 py-1 ${
                index === 1 ? 'bg-orange-100 text-orange-700' : 'bg-orange-50 text-orange-600'
              }`}
            >
              {category}
            </Badge>
          ))}
          {supplier.categories.length > 3 && (
            <Badge variant="outline" className="text-xs text-gray-600">
              +{supplier.categories.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
          <Clock className="h-4 w-4" />
          <span>Exporting from {supplier.partnershipYears} years</span>
        </div>

        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 flex items-center justify-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
            handleViewDetails();
          }}
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
