import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import HomeRoute from '../pages/home/HomeRoute';

function AppRouter(): JSX.Element {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route path="/" component={HomeRoute} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
