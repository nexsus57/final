import { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';

const ProductsListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-brand-blue mb-4">Our Products</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our extensive range of high-quality industrial tapes, designed for performance and reliability.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${selectedCategory === 'all' ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All Products
          </button>
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${selectedCategory === category.id ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No products found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsListPage;
