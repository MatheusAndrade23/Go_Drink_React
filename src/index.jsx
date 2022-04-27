import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import { ThemeProvider } from './providers/ThemeProvider';
import { AuthProvider } from './providers/AuthProvider';

import App from './templates/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route path="*" element={<App />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
