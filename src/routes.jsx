import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

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
import { PageNotFound } from './templates/PageNotFound';

export const Routes = () => {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <Switch>
            <Route path="/kind/:index/:kind" element={<Kinds />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/login/:action" element={<Login />} />
            <Route path="/list/:list" element={<Lists />} />
            <Route path="/drink/:id" element={<Drink />} />
            <Route path="/all-drinks" element={<AllDrinks />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route exact path="/not-found" element={<PageNotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Switch>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};
