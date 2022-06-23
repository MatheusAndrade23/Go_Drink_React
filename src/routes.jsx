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
import { Auth } from './templates/Auth';
import { AllDrinks } from './templates/AllDrinks';
import { Favorites } from './templates/Favorites';
import { PageNotFound } from './templates/PageNotFound';
import { ForgotPassword } from './templates/ForgotPassword';
import { ResetPassword } from './templates/ResetPassword';

export const Routes = () => {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <Switch>
            <Route path="/password/:token/:email" element={<ResetPassword />} />
            <Route path="/kind/:index/:kind" element={<Kinds />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/auth/:action" element={<Auth />} />
            <Route path="/list/:list" element={<Lists />} />
            <Route path="/drink/:id" element={<Drink />} />
            <Route path="/all-drinks" element={<AllDrinks />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Switch>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};
