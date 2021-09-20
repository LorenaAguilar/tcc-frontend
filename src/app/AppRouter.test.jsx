import CircularProgress from '@material-ui/core/CircularProgress';
import { shallow } from 'enzyme';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import AboutUs from '../pages/aboutUs/AboutUs';
import HomeRoute from '../pages/home/HomeRoute';
import OccurrencesPage from '../pages/ocurrences/OcurrencesPage';
import AppRouter from './AppRouter';

describe('AppRouter', () => {
  it('should render correctly', async () => {
    const wrapper = shallow(<AppRouter />);

    const expectedWrapper = (
      <BrowserRouter>
        <Header />
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route exact path="/" component={HomeRoute} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/ocurrences" component={OccurrencesPage} />
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
