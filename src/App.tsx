import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ConsultantPage from './pages/ConsultantPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="servicii" element={<ServicesPage />} />
        <Route path="portofoliu" element={<PortfolioPage />} />
        <Route path="despre" element={<AboutPage />} />
        <Route path="consultant" element={<ConsultantPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="legal/:slug" element={<LegalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;