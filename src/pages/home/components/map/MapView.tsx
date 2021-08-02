import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Box from '@material-ui/core/Box';
import { GOOGLE_API_KEY, DEFAULT_MAP_ZOOM } from '../../../../constants';
import MapViewUseStyles from './MapView.styles';

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
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
      <div>
        <GoogleMap mapContainerClassName={container} center={location} zoom={DEFAULT_MAP_ZOOM} />
      </div>
    </LoadScript>
  );
}

export default React.memo(MapView);
