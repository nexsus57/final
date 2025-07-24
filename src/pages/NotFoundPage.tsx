import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-brand-blue mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-brand-blue-dark mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link 
          to="/" 
          className="bg-brand-blue text-white font-semibold py-3 px-6 rounded-md hover:bg-brand-blue-dark transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
