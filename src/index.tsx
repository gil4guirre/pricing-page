import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PricingPage from './pages/pricing-page/PricingPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PricingPage />
  </React.StrictMode>
);
