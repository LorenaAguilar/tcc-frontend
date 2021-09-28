import React, { useEffect } from 'react';
import Container from '../../components/container/container';
import listOccurrencesUseCase from '../../usecases/occurrences/listOccurrences/listOccurrencesUseCase';
import Map from './components/map/Map';
import Markers from './components/markers/Markers';

function App(): JSX.Element {
  useEffect(() => {
    listOccurrencesUseCase();
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
