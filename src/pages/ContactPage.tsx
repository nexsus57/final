import { useLocation } from 'react-router-dom';

const ContactPage = () => {
    const location = useLocation();
    const initialSubject = location.state?.productName ? `Enquiry for ${location.state.productName}` : '';

  return (
    <div className="bg-brand-gray">
      {/* Page Header */}
      <section className="bg-brand-blue py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg text-gray-200">We're here to help. Reach out to us for enquiries, quotes, or support.</p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-brand-blue mb-6">Send us a Message</h2>
                <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                    {/* Hidden input for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input type="text" id="subject" name="subject" defaultValue={initialSubject} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-yellow focus:border-brand-yellow" required></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-brand-yellow text-brand-blue-dark font-bold py-3 px-6 rounded-md hover:bg-yellow-300 transition-colors duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-brand-blue mb-6">Our Location & Info</h2>
                <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                     <div className="flex items-start space-x-4">
                        <i className="fas fa-map-marker-alt text-2xl text-brand-yellow mt-1"></i>
                        <div>
                            <h3 className="font-semibold text-lg text-brand-blue-dark">Address</h3>
                            <p className="text-gray-600">SHA KUNDANMAL MISRIMAL, #52, Narayana Mudali Street, Sowcarpet, Chennai – 600 079</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <i className="fas fa-phone-alt text-2xl text-brand-yellow mt-1"></i>
                        <div>
                            <h3 className="font-semibold text-lg text-brand-blue-dark">Phone</h3>
                            <a href="tel:+918072468057" className="text-gray-600 hover:text-brand-blue transition-colors">+91 8072468057</a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <i className="fas fa-envelope text-2xl text-brand-yellow mt-1"></i>
                        <div>
                            <h3 className="font-semibold text-lg text-brand-blue-dark">Email</h3>
                            <a href="mailto:loginerw@gmail.com" className="text-gray-600 hover:text-brand-blue transition-colors">loginerw@gmail.com</a>
                        </div>
                    </div>
                </div>
                {/* Map Placeholder */}
                <div className="rounded-lg shadow-lg overflow-hidden h-64 bg-gray-300 flex items-center justify-center">
                    <p className="text-gray-500">Map Placeholder</p>
                </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;