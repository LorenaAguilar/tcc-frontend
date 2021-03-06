import CircularProgress from '@material-ui/core/CircularProgress';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Notification from '../components/notification/Notification';
import AboutUs from '../pages/aboutUs/AboutUs';
import HelpRoute from '../pages/help/HelpRoute';
import HomeRoute from '../pages/home/HomeRoute';
import CreateAccount from '../pages/login/CreateAccountPage';
import OccurrencesPage from '../pages/ocurrences/OcurrencesPage';

function AppRouter(): JSX.Element {
  return (
    <Router>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Notification />
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/help" component={HelpRoute} />
          <Route path="/occurrences" component={OccurrencesPage} />
          <Route path="/cadastroConta" component={CreateAccount} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default AppRouter;
