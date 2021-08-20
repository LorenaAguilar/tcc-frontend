import { Circle } from '@react-google-maps/api';
import React from 'react';
import Container from '../../components/container/container';
import Map from './components/map/Map';

function App(): JSX.Element {
  const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1,
  };

  return (
    <Container>
      <Map>
        <Circle
          options={options}
          center={{ lat: -19.801664961293064, lng: -43.93884010963926 }}
          radius={300}
        />
        <Circle
          options={{ ...options, fillColor: 'red', strokeColor: 'red' }}
          center={{ lat: -19.797283810269978, lng: -43.92042411918701 }}
          radius={300}
        />
      </Map>
    </Container>
  );
}

export default App;
