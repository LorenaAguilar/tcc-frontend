import React, { Suspense } from 'react';
import { shallow } from 'enzyme';
import AppRouter from './AppRouter';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomeRoute from '../pages/home/HomeRoute';
import CircularProgress from '@material-ui/core/CircularProgress';

describe('AppRouter', () => {
  it('should render correctly', async () => {
    const wrapper = shallow(<AppRouter />);

    const expectedWrapper = (
      <BrowserRouter>
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route path="/" component={HomeRoute} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
