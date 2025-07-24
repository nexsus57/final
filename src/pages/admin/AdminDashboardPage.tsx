import { Link } from 'react-router-dom';
import StatCard from '../../components/admin/StatCard';
import { PRODUCTS, CATEGORIES } from '../../constants';
import { ProductsIcon, CategoriesIcon, PlusCircleIcon } from '../../components/icons/AdminIcons';

const AdminDashboardPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-admin-text mb-6">Dashboard</h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard icon={ProductsIcon} title="Total Products" value={PRODUCTS.length} />
                <StatCard icon={CategoriesIcon} title="Total Categories" value={CATEGORIES.length} />
                 <StatCard icon={PlusCircleIcon} title="Quick Add" value="">
                    <Link to="/admin/products/new" className="text-sm font-medium text-admin-accent hover:text-admin-accent-hover mt-1">
                        Add New Product &rarr;
                    </Link>
                </StatCard>
            </div>
            
            {/* Other Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                {/* Google Analytics Placeholder */}
                <div className="lg:col-span-2 bg-admin-card p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-admin-text mb-4">Website Traffic</h2>
                    <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
                        <p className="text-admin-text-light">Google Analytics Widget Placeholder</p>
                    </div>
                </div>

                {/* Recent Activity or Quick Links */}
                <div className="bg-admin-card p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-admin-text mb-4">Recent Ad Changes</h2>
                     <p className="text-admin-text-light text-sm mb-4">A log of recent script updates or ad changes managed in settings.</p>
                    <ul className="space-y-4">
                        <li className="text-sm text-admin-text">
                            <p className="font-medium">Added Google Tag Manager Script</p>
                            <p className="text-xs text-admin-text-light">Yesterday</p>
                        </li>
                        <li className="text-sm text-admin-text">
                             <p className="font-medium">Updated Remarketing Tag</p>
                            <p className="text-xs text-admin-text-light">3 days ago</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
