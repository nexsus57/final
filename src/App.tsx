import { HashRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/ProductsListPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProductsListPage from './pages/admin/AdminProductsListPage';
import AdminProductEditPage from './pages/admin/AdminProductEditPage';
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';
import { useEffect } from 'react';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const MainLayout = () => (
  <div className="flex flex-col min-h-screen bg-brand-gray">
    <Header />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsListPage />} />
          <Route path="products/:productId" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        
        <Route path="/admin" element={<AdminLayout />}>
           <Route index element={<AdminDashboardPage />} />
           <Route path="dashboard" element={<AdminDashboardPage />} />
           <Route path="products" element={<AdminProductsListPage />} />
           <Route path="products/new" element={<AdminProductEditPage />} />
           <Route path="products/edit/:productId" element={<AdminProductEditPage />} />
           <Route path="categories" element={<AdminCategoriesPage />} />
           <Route path="settings" element={<AdminSettingsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App;