import { Link } from "react-router-dom";

interface AdminHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AdminHeader = ({ sidebarOpen, setSidebarOpen }: AdminHeaderProps) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-admin-card border-b border-admin-border">
      <div className="flex items-center">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-admin-text-light focus:outline-none lg:hidden">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>

      <div className="flex items-center">
        <div className="relative">
          <button className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80" alt="Your avatar" />
          </button>
          
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10 hidden">
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-admin-accent hover:text-white">Profile</Link>
            <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-admin-accent hover:text-white">View Site</Link>
            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-admin-accent hover:text-white">Logout</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
