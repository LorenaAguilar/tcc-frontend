import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import HomeRoute from '../pages/home/HomeRoute';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function AppRouter(): JSX.Element {
  return (
    <Router>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route path="/" component={HomeRoute} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default AppRouter;
