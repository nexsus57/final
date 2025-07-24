import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';

const HomePage = () => {
  const featuredProductIds = ['copper-tape', 'reflective-tape', 'floor-marking-tape', 'aluminium-waterproof-tape'];
  const featuredProducts = PRODUCTS.filter(p => featuredProductIds.includes(p.id))
    .sort((a, b) => featuredProductIds.indexOf(a.id) - featuredProductIds.indexOf(b.id));

  const industries = [
    { name: 'Automotive', icon: 'fa-car' },
    { name: 'Electronics', icon: 'fa-microchip' },
    { name: 'Construction', icon: 'fa-hard-hat' },
    { name: 'Packaging', icon: 'fa-box-open' },
    { name: 'Safety', icon: 'fa-shield-alt' },
    { name: 'Printing', icon: 'fa-print' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-blue text-white h-[60vh] min-h-[400px] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573523478440-349a685b81a3?q=80&w=2070&auto=format&fit=crop')" }}></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            High-Performance Industrial Tapes
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Your trusted source for reliable adhesive solutions for every industrial need.
          </p>
          <Link
            to="/products"
            className="bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Explore Products
          </Link>
        </div>
      </section>

      {/* About Us Summary */}
      <AnimatedSection>
        <section className="py-16 lg:py-24 bg-brand-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">About Tape India</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-8">
              Tape India is a leading manufacturer and supplier of a comprehensive range of industrial tapes. With a commitment to quality and innovation, we deliver high-performance adhesive solutions that meet the demanding standards of various industries across the nation.
            </p>
            <Link to="/about" className="text-brand-blue font-semibold hover:underline">
              Learn More About Us &rarr;
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* Featured Products Section */}
      <AnimatedSection>
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Best Selling Tapes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="bg-brand-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-brand-blue-dark transition-colors duration-300"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Product Categories Section */}
      <AnimatedSection>
        <section className="bg-brand-gray py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Product Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {CATEGORIES.map(category => (
                <Link to="/products" key={category.id} className="group">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center h-full">
                    <category.icon className="h-12 w-12 text-brand-blue mb-4 transition-colors group-hover:text-brand-yellow" />
                    <h3 className="font-semibold text-brand-blue">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Industries Served Section */}
      <AnimatedSection>
       <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              {industries.map(industry => (
                 <div key={industry.name} className="flex flex-col items-center">
                   <div className="flex items-center justify-center w-24 h-24 bg-brand-gray rounded-full mb-4">
                     <i className={`fas ${industry.icon} text-4xl text-brand-blue`}></i>
                   </div>
                   <h3 className="font-semibold text-brand-blue">{industry.name}</h3>
                 </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection>
        <section className="bg-brand-blue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Have a Specific Requirement?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              We can help you find the perfect tape for your needs. Contact our experts today for a custom quote or consultation.
            </p>
            <Link 
              to="/contact" 
              className="bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
};

export default HomePage;