import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { GOOGLE_API_KEY, DEFAULT_MAP_ZOOM } from '../../../../constants';
import MapViewUseStyles from './MapView.styles';
import Container from '../../../../components/container/container';

interface Location {
  lat: number;
  lng: number;
}

interface Props {
  location: Location;
}

function MapView({ location }: Props) {
  const { container } = MapViewUseStyles();

  return (
    <Container>
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
        <GoogleMap mapContainerClassName={container} center={location} zoom={DEFAULT_MAP_ZOOM} />
      </LoadScript>
    </Container>
  );
}

export default React.memo(MapView);
