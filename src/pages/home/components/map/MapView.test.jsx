import React from 'react';
import { shallow } from 'enzyme';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { GOOGLE_API_KEY, DEFAULT_MAP_ZOOM } from '../../../../constants';
import MapViewUseStyles from './MapView.styles';
import MapView from './MapView';
import Container from '../../../../components/container/Container';

jest.mock('./MapView.styles');

mockUseStyles(MapViewUseStyles, ['container']);

describe('HomeRoute', () => {
  it('should render correctly with required props', () => {
    const mockProps = {
      location: {
        lat: 1,
        lng: 2,
      },
    };

    const wrapper = shallow(<MapView location={mockProps.location} />);

    const expectedWrapper = (
      <Container>
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
          <GoogleMap
            mapContainerClassName="container"
            center={mockProps.location}
            zoom={DEFAULT_MAP_ZOOM}
          />
        </LoadScript>
      </Container>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render correctly with optional props', () => {
    const mockProps = {
      location: {
        lat: 1,
        lng: 2,
      },
      children: <div>test</div>,
    };

    const wrapper = shallow(
      <MapView location={mockProps.location}>
        <div>test</div>
      </MapView>
    );

    const expectedWrapper = (
      <Container>
        <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
          <GoogleMap center={mockProps.location} zoom={DEFAULT_MAP_ZOOM}>
            <div>test</div>
          </GoogleMap>
        </LoadScript>
      </Container>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
