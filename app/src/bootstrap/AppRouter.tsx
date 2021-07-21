import React, { Suspense, lazy, useMemo } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const HomeRoute = lazy(() => import('../routes/home/HomeRoute'));

function AppRouter(): JSX.Element {
  const loadingView = useMemo(
    () => (
      <div>
        <CircularProgress />
      </div>
    ),
    []
  );

  return (
    <Router>
      <div>
        <Suspense fallback={loadingView}>
          <div>
            <Switch>
              <Route path="/test" component={HomeRoute} />
            </Switch>
            <Switch>
              <Route path="/AS" component={CircularProgress} />
            </Switch>
          </div>
        </Suspense>
      </div>
    </Router>
  );
}

export default AppRouter;
