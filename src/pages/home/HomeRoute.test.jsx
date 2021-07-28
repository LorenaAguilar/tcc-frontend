import React from 'react';
import { shallow } from 'enzyme';
import HomeRoute from './HomeRoute';
import Map from './components/map/Map';

describe('HomeRoute', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<HomeRoute />);

    const expectedWrapper = <Map />;
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
