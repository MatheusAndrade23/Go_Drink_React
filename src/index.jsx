import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import { ThemeProvider } from './providers/ThemeProvider';
import { AuthProvider } from './providers/AuthProvider';

import { Footer } from './components/Footer';

import { Home } from './templates/Home';
import { Kind } from './templates/Kind';
import { Drink } from './templates/Drink';
import { Search } from './templates/Search';
import { Lists } from './templates/Lists';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route path="/search/:search" element={<Search />} />
            <Route path="/drink/:id" element={<Drink />} />
            <Route path="/list/:index/:list" element={<Lists />} />
            <Route path="/kind/:kind" element={<Kind />} />
            <Route path="/" element={<Home />} />
          </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
