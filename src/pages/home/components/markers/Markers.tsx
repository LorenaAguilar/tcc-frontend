import React, { useState } from 'react';
import { Marker, MarkerClusterer } from '@react-google-maps/api';
import Alert from '../../../../assets/AlertIcon.svg';
import InformationWindow from '../infoWindow/InfoWindow';

interface Location {
  lat: number;
  lng: number;
}

interface Props {
  locations: Array<Location>;
}

const Markers: React.FunctionComponent<Props> = ({ locations }) => {
  const [selected, setSelected] = useState<Location | null>();

  return (
    <>
      <MarkerClusterer>
        {(clusterer) =>
          locations.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={marker}
              clusterer={clusterer}
              icon={Alert}
              onClick={() => {
                setSelected(marker);
              }}
            />
          ))
        }
      </MarkerClusterer>
      {selected ? <InformationWindow selected={selected} setSelected={setSelected} /> : null}
    </>
  );
};
export default Markers;
