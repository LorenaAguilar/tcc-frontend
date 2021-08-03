import React, { useEffect, useState } from 'react';
import MapView from './MapView';

interface Location {
  lat: number;
  lng: number;
}

function Map(): JSX.Element {
  const [location, setLocation] = useState<Location>({
    lat: -3.745,
    lng: -38.523,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return <MapView location={location} />;
}

export default Map;
