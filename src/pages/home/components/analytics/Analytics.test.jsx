import { useStoreMap } from 'effector-react';
import { shallow } from 'enzyme';
import React from 'react';
import AnalyticsStore from '../../../../stores/Analytics/AnalyticsStore';
import HomePageStore from '../../../../stores/homePage/HomePageStore';
import Circle from '../circle/Circle';
import Analytics from './Analytics';

jest.mock('effector-react');

describe('Analytics', () => {
  const HomePageDefaultState = {
    mode: 'RISK_ZONE',
  };
  const AnalyticsDefaultState = {
    clusters: [
      { lat: 1, lng: 1, histogramClass: 1, otherNodes: [{ location: { lat: 1, lng: 1 } }] },
      { lat: 2, lng: 2, histogramClass: 2, otherNodes: [{ location: { lat: 2, lng: 2 } }] },
      { lat: 3, lng: 3, histogramClass: 3, otherNodes: [{ location: { lat: 3, lng: 3 } }] },
    ],
    maxHistogramClass: 3,
  };

  it('should render correctly', () => {
    useStoreMap
      .mockReturnValueOnce(HomePageDefaultState.mode)
      .mockReturnValueOnce(AnalyticsDefaultState);

    const wrapper = shallow(<Analytics />);

    const expectedWrapper = (
      <>
        <Circle
          key={`${AnalyticsDefaultState.clusters[0].lat}-${AnalyticsDefaultState.clusters[0].lng}`}
          location={{
            lat: AnalyticsDefaultState.clusters[0].lat,
            lng: AnalyticsDefaultState.clusters[0].lng,
          }}
          color={`rgb(200, 8, 8, ${
            (AnalyticsDefaultState.clusters[0].histogramClass + 1) /
            AnalyticsDefaultState.maxHistogramClass
          })`}
        />
        <Circle
          key={`${AnalyticsDefaultState.clusters[1].lat}-${AnalyticsDefaultState.clusters[1].lng}`}
          location={{
            lat: AnalyticsDefaultState.clusters[1].lat,
            lng: AnalyticsDefaultState.clusters[1].lng,
          }}
          color={`rgb(200, 8, 8, ${
            (AnalyticsDefaultState.clusters[1].histogramClass + 1) /
            AnalyticsDefaultState.maxHistogramClass
          })`}
        />
        <Circle
          key={`${AnalyticsDefaultState.clusters[2].lat}-${AnalyticsDefaultState.clusters[2].lng}`}
          location={{
            lat: AnalyticsDefaultState.clusters[2].lat,
            lng: AnalyticsDefaultState.clusters[2].lng,
          }}
          color={`rgb(200, 8, 8, ${
            (AnalyticsDefaultState.clusters[2].histogramClass + 1) /
            AnalyticsDefaultState.maxHistogramClass
          })`}
        />
      </>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should select the correct values from the HomePageStore', () => {
    useStoreMap
      .mockReturnValueOnce(HomePageDefaultState.mode)
      .mockReturnValueOnce(AnalyticsDefaultState);

    shallow(<Analytics />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(HomePageStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(HomePageDefaultState)).toEqual(
      HomePageDefaultState.mode
    );
  });
  it('should select the correct values from the AnalyticsStore', () => {
    useStoreMap
      .mockReturnValueOnce(HomePageDefaultState.mode)
      .mockReturnValueOnce(AnalyticsDefaultState);

    shallow(<Analytics />);

    expect(useStoreMap.mock.calls[1][0].store).toBe(AnalyticsStore);
    expect(useStoreMap.mock.calls[1][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[1][0].fn(AnalyticsDefaultState)).toEqual(AnalyticsDefaultState);
  });
  it('should not render when the mode is different of RISK_ZONE', () => {
    useStoreMap.mockReturnValueOnce('OCCURRENCES').mockReturnValueOnce(AnalyticsDefaultState);

    const wrapper = shallow(<Analytics />);

    expect(wrapper).toEqual({});
  });
});
