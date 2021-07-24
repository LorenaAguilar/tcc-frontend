import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const HomeRoute = lazy(() => import('../routes/home/HomeRoute'));

function AppRouter(): JSX.Element {
  return (
    <Router>
      <div>
        <Suspense fallback={<CircularProgress />}>
          <div>
            <Switch>
              <Route path="/" component={HomeRoute} />
            </Switch>
          </div>
        </Suspense>
      </div>
    </Router>
  );
}

export default AppRouter;
