import React from 'react';

import './i18n/index';

import { Routes } from './routes';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
