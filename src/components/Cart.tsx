import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  console.log('Cart rendered, items:', state.items.length, 'total:', state.total);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gradient-to-b from-white to-orange-50 shadow-2xl border-l-4 border-orange-500">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-orange-200 p-4 bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <h2 className="text-lg font-semibold">🔥 Carrito de compras</h2>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-lg font-medium mb-2 text-red-700">Tu carrito está vacío</h3>
                <p className="text-orange-600 mb-4">Añade algunos productos para comenzar</p>
                <Button onClick={onClose} className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white">
                  🔥 Seguir comprando
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 border-b border-orange-200 pb-4 bg-white rounded-lg p-3 shadow-sm">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-16 w-16 rounded object-cover border-2 border-orange-200"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-gray-900">{item.product.name}</h4>
                      <p className="text-sm text-orange-600 font-medium">{item.product.brand}</p>
                      <p className="font-semibold text-red-600">€{item.product.price}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-orange-300 text-orange-600 hover:bg-orange-50"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center font-semibold text-red-700">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-orange-300 text-orange-600 hover:bg-orange-50"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t-2 border-orange-200 p-4 space-y-4 bg-gradient-to-r from-orange-50 to-red-50">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-red-700">Total:</span>
                <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">€{state.total.toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 hover:from-red-700 hover:via-orange-700 hover:to-yellow-600 text-white font-semibold shadow-lg">
                  🔥 Proceder al pago
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
                  onClick={clearCart}
                >
                  Vaciar carrito
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;