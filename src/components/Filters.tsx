import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/products';

interface FiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedBrands,
  onBrandToggle
}) => {
  const brands = ['Nike', 'Adidas', 'Jordan', 'Specialized', 'Speedo', 'Decathlon'];
  const priceRanges = [
    { label: 'Menos de 25€', range: [0, 25] as [number, number] },
    { label: '25€ - 50€', range: [25, 50] as [number, number] },
    { label: '50€ - 100€', range: [50, 100] as [number, number] },
    { label: '100€ - 200€', range: [100, 200] as [number, number] },
    { label: 'Más de 200€', range: [200, 1000] as [number, number] }
  ];

  console.log('Filters rendered, selected category:', selectedCategory);

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card className="border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50">
        <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
          <CardTitle className="text-lg">🔥 Categorías</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 p-4">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'ghost'}
            className={`w-full justify-start ${
              selectedCategory === 'all' 
                ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white' 
                : 'text-red-700 hover:bg-orange-50 hover:text-orange-700'
            }`}
            onClick={() => onCategoryChange('all')}
          >
            🔥 Todos los productos
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'ghost'}
              className={`w-full justify-start ${
                selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white' 
                  : 'text-red-700 hover:bg-orange-50 hover:text-orange-700'
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card className="border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50">
        <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-t-lg">
          <CardTitle className="text-lg">💰 Precio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 p-4">
          {priceRanges.map((range, index) => (
            <Button
              key={index}
              variant={
                priceRange[0] === range.range[0] && priceRange[1] === range.range[1]
                  ? 'default'
                  : 'ghost'
              }
              className={`w-full justify-start ${
                priceRange[0] === range.range[0] && priceRange[1] === range.range[1]
                  ? 'bg-gradient-to-r from-orange-600 to-yellow-600 text-white' 
                  : 'text-orange-700 hover:bg-orange-50 hover:text-red-700'
              }`}
              onClick={() => onPriceRangeChange(range.range)}
            >
              {range.label}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Brands */}
      <Card className="border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50">
        <CardHeader className="bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-t-lg">
          <CardTitle className="text-lg">🏷️ Marcas</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandToggle(brand)}
                  className="rounded border-orange-300 text-red-600 focus:ring-red-500"
                />
                <label htmlFor={brand} className="text-sm cursor-pointer text-red-700 hover:text-orange-600">
                  {brand}
                </label>
              </div>
            ))}
          </div>
          {selectedBrands.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium mb-2 text-red-700">Marcas seleccionadas:</p>
              <div className="flex flex-wrap gap-1">
                {selectedBrands.map((brand) => (
                  <Badge key={brand} className="text-xs bg-gradient-to-r from-red-500 to-orange-500 text-white">
                    {brand}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Filters;