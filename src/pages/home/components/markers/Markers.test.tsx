import React from 'react';
import { shallow } from 'enzyme';
import { Marker, MarkerClusterer } from '@react-google-maps/api';
import Markers from './Markers';

describe('Markers', () => {
  it('should render MarkerClusterer correctly', () => {
    const wrapper = shallow(<Markers />);

    expect(wrapper.type()).toBe(MarkerClusterer);
  });

  it('should render Marke  correctly', () => {
    const wrapper = shallow(<Markers />);
  });
});
