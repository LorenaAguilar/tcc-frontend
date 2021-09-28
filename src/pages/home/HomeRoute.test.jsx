import { shallow } from 'enzyme';
import React from 'react';
import Map from './components/map/Map';
import HomeRoute from './HomeRoute';

describe('HomeRoute', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<HomeRoute />);

    const expectedWrapper = <Map />;
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
