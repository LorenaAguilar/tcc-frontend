import React from 'react';
import { shallow } from 'enzyme';
import MapView from './MapView';
import Map from './Map';

describe('HomeRoute', () => {
  it('should render the view correctly with optional props', () => {
    const mockProps = {
      location: {
        lat: 1,
        lng: 2,
      },
      children: <div>test</div>,
    };

    const wrapper = shallow(
      <Map location={mockProps.location}>
        <div>test</div>
      </Map>
    );

    expect(wrapper.type()).toBe(MapView);
    expect(wrapper.props()).toEqual({
      children: <div>test</div>,
      location: {
        lat: -3.745,
        lng: -38.523,
      },
    });
  });
});
