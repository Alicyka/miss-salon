import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import WhatsAppButton from './WhatsAppButton';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />

      <main className="layout-main">
        <Outlet />
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default Layout;