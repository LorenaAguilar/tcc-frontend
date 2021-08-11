import React from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';
import { GOOGLE_API_KEY, DEFAULT_MAP_ZOOM } from '../../../../constants';
import MapViewUseStyles from './MapView.styles';
import Container from '../../../../components/container/container';

interface Location {
  lat: number;
  lng: number;
}

interface Props {
  location: Location;
  children?: React.ReactNode;
}

function MapView({ location, children }: Props): JSX.Element {
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
}

export default MapView;
