import { ShieldCheckIcon, ZapIcon, PackageIcon } from '../components/icons/CategoryIcons';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-brand-gray py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
                <h1 className="text-4xl font-bold text-brand-blue">About Tape India</h1>
                <p className="mt-2 text-lg text-gray-600">Your Premier Partner in Industrial Adhesive Solutions</p>
            </AnimatedSection>
        </div>
      </section>
      
      {/* Main Content */}
      <AnimatedSection>
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                <img src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Tape India Factory" className="rounded-lg shadow-xl" loading="lazy" decoding="async"/>
                </div>
                <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-brand-blue-dark">Our Story</h2>
                <p className="text-gray-700 leading-relaxed">
                    Founded with the vision to deliver excellence, Tape India has grown to become a leading manufacturer and supplier of industrial tapes. We began our journey with a simple goal: to provide businesses with reliable, high-quality adhesive products that solve real-world challenges.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Today, we serve a diverse range of industries, from automotive and electronics to packaging and construction. Our commitment to innovation, quality, and customer satisfaction remains the cornerstone of our business.
                </p>
                </div>
            </div>
            </div>
        </section>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection>
        <section className="bg-brand-gray py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 text-center md:text-left">
                <div className="space-y-4">
                <h3 className="text-2xl font-bold text-brand-blue">Our Mission</h3>
                <p className="text-gray-600">
                    To engineer and supply superior adhesive tape solutions that enhance the efficiency, reliability, and safety of our customers' products and processes.
                </p>
                </div>
                <div className="space-y-4">
                <h3 className="text-2xl font-bold text-brand-blue">Our Vision</h3>
                <p className="text-gray-600">
                    To be the most trusted and innovative name in the industrial tape industry, recognized for our unwavering commitment to quality and customer success.
                </p>
                </div>
            </div>
            </div>
        </section>
      </AnimatedSection>
      
      {/* Why Choose Us */}
      <AnimatedSection>
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-brand-blue mb-12">Why Choose Us?</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center">
                
                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-yellow">
                <ShieldCheckIcon className="h-12 w-12 mx-auto text-brand-blue mb-4"/>
                <h3 className="text-xl font-semibold text-brand-blue-dark mb-2">Uncompromising Quality</h3>
                <p className="text-gray-600">Our products undergo rigorous testing to ensure they meet the highest standards of performance and durability.</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-yellow">
                <ZapIcon className="h-12 w-12 mx-auto text-brand-blue mb-4"/>
                <h3 className="text-xl font-semibold text-brand-blue-dark mb-2">Innovative Solutions</h3>
                <p className="text-gray-600">We continuously explore new materials and technologies to offer cutting-edge adhesive solutions for every need.</p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-yellow">
                <PackageIcon className="h-12 w-12 mx-auto text-brand-blue mb-4"/>
                <h3 className="text-xl font-semibold text-brand-blue-dark mb-2">Customer-Centric Approach</h3>
                <p className="text-gray-600">We work closely with our clients to understand their unique requirements and provide tailored support.</p>
                </div>
                
            </div>
            </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;