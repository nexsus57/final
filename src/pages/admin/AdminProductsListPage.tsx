import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../../constants';
import { PlusCircleIcon } from '../../components/icons/AdminIcons';

const AdminProductsListPage = () => {

  const getCategoryName = (categoryId: string) => {
    return CATEGORIES.find(c => c.id === categoryId)?.name || 'Uncategorized';
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-admin-text">Products</h1>
        <Link 
          to="/admin/products/new" 
          className="bg-admin-accent text-white font-bold py-2 px-4 rounded-md hover:bg-admin-accent-hover transition-colors duration-300 flex items-center"
        >
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          Add Product
        </Link>
      </div>

      <div className="bg-admin-card shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="border-b-2 border-admin-border bg-gray-50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Product Name</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Category</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Status</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-admin-text-light uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {PRODUCTS.map((product) => (
                <tr key={product.id} className="border-b border-admin-border hover:bg-gray-50">
                  <td className="px-5 py-4 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12">
                        {product.image ? (
                          <img className="w-full h-full rounded-md object-cover" src={product.image} alt={product.name} />
                        ) : (
                          <div className="w-full h-full rounded-md bg-gray-200 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                              </svg>
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <p className="text-admin-text font-semibold whitespace-no-wrap">{product.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <p className="text-admin-text-light whitespace-no-wrap">{getCategoryName(product.category)}</p>
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                      <span className="relative">Visible</span>
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <div className="flex items-center space-x-3">
                      <Link to={`/admin/products/edit/${product.id}`} className="text-admin-accent hover:text-admin-accent-hover">Edit</Link>
                      <button className="text-red-500 hover:text-red-700">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsListPage;
