import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { categories } from '@/data/products';

interface HeaderProps {
  onCategorySelect: (category: string) => void;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCategorySelect, onCartClick }) => {
  const { getItemCount } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const itemCount = getItemCount();

  console.log('Header rendered, cart items:', itemCount);

  return (
    <header className="bg-white shadow-lg border-b border-orange-200">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          🔥 ¡OFERTAS CALIENTES! Envío gratis en pedidos superiores a 50€ | 📞 Atención al cliente: 900 123 456
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden text-red-600 hover:bg-red-50">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer" onClick={() => onCategorySelect('all')}>
              🔥 FireSport
            </h1>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos deportivos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-orange-500" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex text-red-600 hover:bg-red-50">
              <Heart className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-red-600 hover:bg-red-50">
              <User className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onCartClick} className="relative text-red-600 hover:bg-red-50">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                  {itemCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-to-r from-orange-100 via-red-50 to-yellow-50 border-t border-orange-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <button
              onClick={() => onCategorySelect('all')}
              className="whitespace-nowrap text-sm font-medium text-red-700 hover:text-orange-600 transition-colors border-b-2 border-transparent hover:border-orange-500"
            >
              🔥 Todos los productos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className="whitespace-nowrap text-sm font-medium text-red-700 hover:text-orange-600 transition-colors flex items-center space-x-1 border-b-2 border-transparent hover:border-orange-500"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;