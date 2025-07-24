import { NavLink, Link } from 'react-router-dom';
import { DashboardIcon, ProductsIcon, CategoriesIcon, SettingsIcon } from '../icons/AdminIcons';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {

  const navLinkClass = "flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100 rounded-md transition-colors duration-200";
  const activeNavLinkClass = "bg-gray-700 bg-opacity-50 text-white";

  const navLinks = [
    { to: '/admin/dashboard', icon: DashboardIcon, text: 'Dashboard' },
    { to: '/admin/products', icon: ProductsIcon, text: 'Products' },
    { to: '/admin/categories', icon: CategoriesIcon, text: 'Categories' },
    { to: '/admin/settings', icon: SettingsIcon, text: 'Settings' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} fixed inset-0 bg-black opacity-50 z-20 lg:hidden`} onClick={() => setSidebarOpen(false)}></div>
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 bg-admin-sidebar w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 z-30 transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-center justify-center mt-8 px-4">
          <Link to="/admin" className="flex flex-col items-center space-y-2">
            <img src="https://i.ibb.co/3kC7BvG/tape-india-logo-transparent.png" alt="Tape India Logo" className="h-16" />
            <span className="text-white text-lg font-semibold">Admin Panel</span>
          </Link>
        </div>

        <nav className="mt-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) => `${navLinkClass} ${isActive ? activeNavLinkClass : ''}`}
            >
              <link.icon className="h-6 w-6" />
              <span className="mx-3">{link.text}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;