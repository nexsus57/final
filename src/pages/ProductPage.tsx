import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import NotFoundPage from './NotFoundPage';
import AnimatedSection from '../components/AnimatedSection';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Product Image */}
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto object-cover aspect-square"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="w-full h-auto object-cover aspect-square bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.shortDescription}</p>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-brand-blue-dark mb-3">Key Features</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-brand-blue-dark mb-3">Common Uses</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {product.uses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="/contact" 
                  state={{ productName: product.name }}
                  className="inline-block w-full sm:w-auto text-center bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-300 transition-colors duration-300"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ProductPage;