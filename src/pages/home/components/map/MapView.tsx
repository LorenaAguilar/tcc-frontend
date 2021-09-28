import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';
import Container from '../../../../components/container/container';
import { DEFAULT_MAP_ZOOM, GOOGLE_API_KEY } from '../../../../constants';
import MapViewUseStyles from './MapView.styles';

interface Location {
  lat: number;
  lng: number;
}

interface Props {
  location: Location;
}

const MapView: React.FunctionComponent<Props> = ({ location, children }) => {
  const { container } = MapViewUseStyles();

  return (
    <Container>
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
        <GoogleMap mapContainerClassName={container} center={location} zoom={DEFAULT_MAP_ZOOM}>
          {children ?? null}
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};

export default MapView;
