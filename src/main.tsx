import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/theme.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import App from './App.tsx';
import { ConsentProvider } from './context/ConsentContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConsentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConsentProvider>
  </StrictMode>,
);