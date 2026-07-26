import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import WhatsAppButton from './WhatsAppButton';
import CookieBanner from './CookieBanner';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />

      <main className="layout-main">
        <Outlet />
      </main>

      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default Layout;