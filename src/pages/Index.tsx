import React, { useState, useMemo } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import Filters from '@/components/Filters';
import { products } from '@/data/products';
import { Product } from '@/types/product';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name');

  console.log('Index page rendered, selected category:', selectedCategory);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => 
        selectedBrands.includes(product.brand)
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, priceRange, selectedBrands, sortBy]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <Header 
          onCategorySelect={setSelectedCategory}
          onCartClick={() => setIsCartOpen(true)}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              🔥 Tu tienda deportiva más caliente
            </h1>
            <p className="text-xl mb-8 drop-shadow-md">
              ¡Encuentra todo lo que necesitas para encender tu pasión deportiva!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <div className="text-2xl font-bold">+10,000</div>
                <div className="text-sm">Productos ardientes</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Marcas de fuego</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Atención caliente</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-4">
                <Filters
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  selectedBrands={selectedBrands}
                  onBrandToggle={handleBrandToggle}
                />
              </div>
            </aside>

            {/* Products Grid */}
            <main className="flex-1">
              {/* Sort and Results */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    🔥 {selectedCategory === 'all' ? 'Todos los productos' : 
                     products.find(p => p.category === selectedCategory)?.category || 'Productos'}
                  </h2>
                  <p className="text-orange-600 font-medium">
                    {filteredProducts.length} productos encontrados
                  </p>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white text-red-700"
                >
                  <option value="name">Ordenar por nombre</option>
                  <option value="price-low">Precio: menor a mayor</option>
                  <option value="price-high">Precio: mayor a menor</option>
                  <option value="rating">Mejor valorados</option>
                </select>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-lg border-2 border-orange-200">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2 text-red-700">No se encontraron productos</h3>
                  <p className="text-orange-600 mb-4">
                    Intenta ajustar los filtros para encontrar lo que buscas
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setPriceRange([0, 1000]);
                      setSelectedBrands([]);
                    }}
                    className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 font-semibold shadow-lg"
                  >
                    🔥 Limpiar filtros
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-red-900 to-orange-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">🔥 FireSport</h3>
                <p className="text-orange-200">
                  Tu tienda deportiva de fuego con los mejores productos y precios más calientes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-orange-300">Categorías</h4>
                <ul className="space-y-2 text-orange-200">
                  <li className="hover:text-yellow-300 cursor-pointer">🏃‍♂️ Running</li>
                  <li className="hover:text-yellow-300 cursor-pointer">💪 Fitness</li>
                  <li className="hover:text-yellow-300 cursor-pointer">⚽ Fútbol</li>
                  <li className="hover:text-yellow-300 cursor-pointer">🏀 Baloncesto</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-orange-300">Ayuda</h4>
                <ul className="space-y-2 text-orange-200">
                  <li className="hover:text-yellow-300 cursor-pointer">📞 Contacto</li>
                  <li className="hover:text-yellow-300 cursor-pointer">🚚 Envíos</li>
                  <li className="hover:text-yellow-300 cursor-pointer">↩️ Devoluciones</li>
                  <li className="hover:text-yellow-300 cursor-pointer">❓ FAQ</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-orange-300">Síguenos</h4>
                <div className="flex space-x-4">
                  <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📘</span>
                  <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📷</span>
                  <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🐦</span>
                </div>
              </div>
            </div>
            <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-300">
              <p>&copy; 2024 FireSport. Todos los derechos reservados. 🔥</p>
            </div>
          </div>
        </footer>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default Index;