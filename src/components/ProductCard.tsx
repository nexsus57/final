import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link to={`/products/${product.id}`} className="block">
        {product.image ? (
            <img className="w-full h-48 object-cover" src={product.image} alt={product.name} loading="lazy" decoding="async" />
        ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </div>
        )}
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-brand-blue mb-2">
          <Link to={`/products/${product.id}`} className="hover:text-brand-blue-dark">
            {product.name}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.shortDescription}</p>
        <Link 
          to={`/products/${product.id}`} 
          className="mt-auto inline-block text-center bg-brand-blue text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-blue-dark transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;