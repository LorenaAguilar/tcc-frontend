import React, { useEffect } from 'react';
import Container from '../../components/container/container';
import getAnalyticsUseCase from '../../usecases/analytics/getAnalyticsUseCase';
import listOccurrencesUseCase from '../../usecases/occurrences/listOccurrences/listOccurrencesUseCase';
import Analytics from './components/analytics/Analytics';
import ControlButtons from './components/controlButtons/ControlButtons';
import Map from './components/map/Map';
import Markers from './components/markers/Markers';

function App(): JSX.Element {
  useEffect(() => {
    listOccurrencesUseCase();
    getAnalyticsUseCase();
  }, []);

  return (
    <Container>
      <Map>
        <ControlButtons />
        <Analytics />
        <Markers />
      </Map>
    </Container>
  );
}

export default App;
