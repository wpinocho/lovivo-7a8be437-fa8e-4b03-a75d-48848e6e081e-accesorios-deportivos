import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    console.log('Adding product to cart:', product.name);
    addItem(product);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 bg-gradient-to-br from-white to-orange-50">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <Badge className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
            🔥 -{product.discount}%
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-red-50 text-red-500 hover:text-red-600"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <p className="text-xs text-orange-600 uppercase tracking-wide font-semibold">{product.brand}</p>
          <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
        </div>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">€{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">€{product.originalPrice}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 hover:from-red-700 hover:via-orange-700 hover:to-yellow-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? '🔥 Añadir al carrito' : 'Sin stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;