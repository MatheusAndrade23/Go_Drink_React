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
import { Kinds } from './templates/Kinds';
import { Drink } from './templates/Drink';
import { Search } from './templates/Search';
import { Lists } from './templates/Lists';
import { Login } from './templates/Login';
import { AllDrinks } from './templates/AllDrinks';
import { Favorites } from './templates/Favorites';

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
            <Route path="/kind/:kind" element={<Kinds />} />
            <Route path="/" element={<Home />} />
            <Route path="/login/:action" element={<Login />} />
            <Route path="/all-drinks" element={<AllDrinks />} />
            <Route path="/favorites" element={<Favorites />} />
          </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
