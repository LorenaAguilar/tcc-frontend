import React, { Suspense } from 'react';
import { shallow } from 'enzyme';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppRouter from './AppRouter';
import HomeRoute from '../pages/home/HomeRoute';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import AboutUs from '../pages/aboutUs/AboutUs';

describe('AppRouter', () => {
  it('should render correctly', async () => {
    const wrapper = shallow(<AppRouter />);

    const expectedWrapper = (
      <BrowserRouter>
        <Header />
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route path="/" component={HomeRoute} />
            <Route path="/aboutus" component={AboutUs} />
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
