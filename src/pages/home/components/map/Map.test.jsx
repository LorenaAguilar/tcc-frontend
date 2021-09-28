import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { shallow } from 'enzyme';
import React from 'react';
import Container from '../../../../components/container/container';
import { DEFAULT_MAP_ZOOM, GOOGLE_API_KEY } from '../../../../constants';
import Map from './Map';
import MapViewUseStyles from './MapView.styles';

jest.mock('./MapView.styles');
mockUseStyles(MapViewUseStyles, ['container']);

describe('Map', () => {
  it('should render the view correctly without getLocation permission', () => {
    const MockedPosition = {
      coords: { latitude: 1, longitude: 1 },
    };
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementation((f) => f(MockedPosition)),
      watchPosition: jest.fn(),
    };
    const mockedChildren = <div>test</div>;
    const locationBH = {
      lat: -19.912998,
      lng: -43.940933,
    };

    global.navigator.geolocation = mockGeolocation;

    const wrapper = shallow(<Map>{mockedChildren}</Map>);

    const expectedWrapper = (
      <Container>
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
          <GoogleMap mapContainerClassName="container" center={locationBH} zoom={DEFAULT_MAP_ZOOM}>
            {mockedChildren}
          </GoogleMap>
        </LoadScript>
      </Container>
    );
    console.log(wrapper.debug());
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render the view correctly with getLocation permission', () => {
    const MockedPosition = {
      coords: { latitude: 1, longitude: 1 },
    };
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    global.navigator.geolocation = mockGeolocation;
    const mockedChildren = <div>test</div>;

    const wrapper = shallow(<Map>{mockedChildren}</Map>);
    const expectedWrapper = (
      <Container>
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
          <GoogleMap mapContainerClassName="container" center={MockedPosition} zoom={12}>
            {mockedChildren}
          </GoogleMap>
        </LoadScript>
      </Container>
    );
    console.log(wrapper.debug());
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
