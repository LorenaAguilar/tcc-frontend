import { shallow } from 'enzyme';
import React from 'react';
import Container from '../../components/container/container';
import listOccurrencesUseCase from '../../usecases/occurrences/listOccurrences/listOccurrencesUseCase';
import Analytics from './components/analytics/Analytics';
import ControlButtons from './components/controlButtons/ControlButtons';
import Map from './components/map/Map';
import Markers from './components/markers/Markers';
import HomeRoute from './HomeRoute';

jest.mock('../../usecases/occurrences/listOccurrences/listOccurrencesUseCase');

describe('HomeRoute', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<HomeRoute />);
    const expectedWrapper = (
      <Container>
        <Map>
          <ControlButtons />
          <Analytics />
          <Markers />
        </Map>
      </Container>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should handle listOccurrenceUseCase', () => {
    shallow(<HomeRoute />);

    expect(listOccurrencesUseCase).toHaveBeenCalledTimes(1);
    expect(listOccurrencesUseCase).toHaveBeenCalledWith();
  });
});
