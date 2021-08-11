import React from 'react';
import { Marker, MarkerClusterer } from '@react-google-maps/api';

interface Location {
  lat: number;
  lng: number;
}

function Markers(): JSX.Element {
  const locations: Array<Location> = [
    { lat: -19.56391, lng: -43.154312 },
    { lat: -19.718234, lng: -43.363181 },
    { lat: -19.727111, lng: -43.371124 },
    { lat: -19.848588, lng: -43.209834 },
    { lat: -19.851702, lng: -43.216968 },
    { lat: -20.671264, lng: -43.863657 },
    { lat: -21.304724, lng: -43.662905 },
    { lat: -22.817685, lng: -43.699196 },
    { lat: -22.828611, lng: -43.790222 },
    { lat: -23.75, lng: -46.116667 },
    { lat: -23.759859, lng: -46.128708 },
    { lat: -23.765015, lng: -46.133858 },
    { lat: -23.770104, lng: -46.143299 },
    { lat: -23.7723, lng: -46.145187 },
    { lat: -23.774785, lng: -46.123978 },
    { lat: -23.819616, lng: -46.968119 },
    { lat: -24.330766, lng: -48.695692 },
    { lat: -25.927193, lng: -48.053218 },
    { lat: -26.330162, lng: -48.865694 },
    { lat: -27.734358, lng: -48.439506 },
    { lat: -28.734358, lng: -48.501315 },
    { lat: -29.735258, lng: -48.438 },
    { lat: -30.999792, lng: -48.463352 },
    { lat: -19.7913525, lng: -43.836068999999996 },
    { lat: -19.5913525, lng: -43.836068999999996 },
    { lat: -19.7913525, lng: -43.936068999999996 },
    { lat: -19.5913525, lng: -43.736068999999996 },
    { lat: -19.693525, lng: -43.860689999996 },
  ];

  return (
    <MarkerClusterer>
      {(clusterer) =>
        locations.map((t) => (
          <Marker key={`${t.lat}-${t.lng}`} position={t} clusterer={clusterer} />
        ))
      }
    </MarkerClusterer>
  );
}

export default Markers;
