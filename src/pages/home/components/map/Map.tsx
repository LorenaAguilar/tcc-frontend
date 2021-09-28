import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React, { useEffect, useMemo, useState } from 'react';
import Container from '../../../../components/container/container';
import { DEFAULT_MAP_ZOOM, GOOGLE_API_KEY } from '../../../../constants';
import MapViewUseStyles from './MapView.styles';

const locationBH = {
  lat: -19.912998,
  lng: -43.940933,
};

const Map: React.FunctionComponent = ({ children }) => {
  const { container } = MapViewUseStyles();

  const [location, setLocation] = useState<google.maps.LatLngLiteral>(locationBH);

  const zoom = useMemo(() => {
    if (location === locationBH) {
      return 12;
    }

    return DEFAULT_MAP_ZOOM;
  }, [location]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <Container>
      <LoadScript googleMapsApiKey={GOOGLE_API_KEY}>
        <GoogleMap mapContainerClassName={container} center={location} zoom={zoom}>
          {children ?? null}
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};

export default Map;
