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
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categorías</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => onCategoryChange('all')}
          >
            Todos los productos
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Precio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {priceRanges.map((range, index) => (
            <Button
              key={index}
              variant={
                priceRange[0] === range.range[0] && priceRange[1] === range.range[1]
                  ? 'default'
                  : 'ghost'
              }
              className="w-full justify-start"
              onClick={() => onPriceRangeChange(range.range)}
            >
              {range.label}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Marcas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => onBrandToggle(brand)}
                  className="rounded border-gray-300"
                />
                <label htmlFor={brand} className="text-sm cursor-pointer">
                  {brand}
                </label>
              </div>
            ))}
          </div>
          {selectedBrands.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Marcas seleccionadas:</p>
              <div className="flex flex-wrap gap-1">
                {selectedBrands.map((brand) => (
                  <Badge key={brand} variant="secondary" className="text-xs">
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