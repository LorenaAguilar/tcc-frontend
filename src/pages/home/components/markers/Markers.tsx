import { Marker, MarkerClusterer } from '@react-google-maps/api';
import { useStoreMap } from 'effector-react';
import React, { useState } from 'react';
import Alert from '../../../../assets/AlertIcon.svg';
import Occurrence from '../../../../domains/Occurrence';
import HomePageStore from '../../../../stores/homePage/HomePageStore';
import InformationWindow from '../infoWindow/InfoWindow';

const Markers: React.FunctionComponent = () => {
  const occurrences = useStoreMap({
    store: HomePageStore,
    keys: [],
    fn: (state) => state.occurrences,
  });
  const [selected, setSelected] = useState<Occurrence | null>();

  return (
    <>
      <MarkerClusterer>
        {(clusterer) =>
          occurrences.map((occurrence) => (
            <Marker
              key={`${occurrence.location.lat}-${occurrence.location.lng}`}
              position={occurrence.location}
              clusterer={clusterer}
              icon={Alert}
              onClick={() => {
                setSelected(occurrence);
              }}
            />
          ))
        }
      </MarkerClusterer>
      {selected ? (
        <InformationWindow occurreceSelected={selected} setOccurrenceSelected={setSelected} />
      ) : null}
    </>
  );
};
export default Markers;
