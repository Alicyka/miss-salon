import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import the router provider
import './styles/theme.css';      
import './styles/base.css';       
import './styles/layout.css';     
import './styles/components.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Wrap the entire App component inside BrowserRouter to enable routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);