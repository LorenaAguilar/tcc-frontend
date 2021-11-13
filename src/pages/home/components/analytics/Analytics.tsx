import { useStoreMap } from 'effector-react';
import React from 'react';
import AnalyticsStore from '../../../../stores/Analytics/AnalyticsStore';
import HomePageStore from '../../../../stores/homePage/HomePageStore';
import Circle from '../circle/Circle';

const Markers: React.FunctionComponent = () => {
  const mode = useStoreMap({
    store: HomePageStore,
    keys: [],
    fn: (state) => state.mode,
  });

  const { clusters, maxHistogramClass } = useStoreMap({
    store: AnalyticsStore,
    keys: [],
    fn: (state) => state,
  });

  if (mode !== 'RISK_ZONE') {
    return null;
  }

  return (
    <>
      {clusters.map((cluster) => (
        <Circle
          key={`${cluster.lat}-${cluster.lng}`}
          location={{ lat: cluster.lat, lng: cluster.lng }}
          color={`rgb(200, 8, 8, ${(cluster.histogramClass + 1) / maxHistogramClass})`}
          size={cluster.radius * (cluster.radius === 0.5 ? 0 : 75000)}
        />
      ))}
    </>
  );
};
export default Markers;
