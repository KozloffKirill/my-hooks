import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './index.css';

const rootElem = document.getElementById('root')!;

const root = createRoot(rootElem);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
