import React, { useEffect } from 'react';
import Container from '../../components/container/container';
import LoadOccurrenceUseCase from '../../usecases/occurrences/listOccurrences/listOccurrencesUseCase';
import Map from './components/map/Map';
import Markers from './components/markers/Markers';

function App(): JSX.Element {
  useEffect(() => {
    LoadOccurrenceUseCase();
  }, []);

  return (
    <Container>
      <Map>
        <Markers />
      </Map>
    </Container>
  );
}

export default App;
