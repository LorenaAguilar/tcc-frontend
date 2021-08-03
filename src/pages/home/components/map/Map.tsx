import React, { useEffect, useState } from 'react';
import MapView from './MapView';

interface Props {
  children?: React.ReactNode;
}

interface Location {
  lat: number;
  lng: number;
}

function Map({ children }: Props): JSX.Element {
  const [location, setLocation] = useState<Location>({
    lat: -3.745,
    lng: -38.523,
  });

  useEffect(() => {
    console.log('oi');
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return <MapView location={location}>{children ?? null}</MapView>;
}

export default Map;
