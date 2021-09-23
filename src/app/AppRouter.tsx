import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import AboutUs from '../pages/aboutUs/AboutUs';
import HomeRoute from '../pages/home/HomeRoute';
import OccurrencesPage from '../pages/ocurrences/OcurrencesPage';

function AppRouter(): JSX.Element {
  return (
    <Router>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/occurrences" component={OccurrencesPage} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default AppRouter;
