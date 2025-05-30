
import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Supplier Directory
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-orange-600 hover:text-orange-700 font-medium">
              Home
            </Link>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 bg-gray-100 px-3 py-1 rounded">
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
