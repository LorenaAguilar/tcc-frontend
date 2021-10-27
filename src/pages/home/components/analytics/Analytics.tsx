import { useStoreMap } from 'effector-react';
import React from 'react';
import AnalyticsStore from '../../../../stores/Analytics/AnalyticsStore';
import Circle from '../circle/Circle';

const Markers: React.FunctionComponent = () => {
  const clusters = useStoreMap({
    store: AnalyticsStore,
    keys: [],
    fn: (state) => state.clusters,
  });

  return (
    <>
      {clusters.map((cluster) => (
        <Circle
          key={`${cluster.lat}-${cluster.lng}`}
          location={{ lat: cluster.lat, lng: cluster.lng }}
          color="green"
          size={cluster.radius * (cluster.radius === 0.5 ? 0 : 75000)}
        />
      ))}
    </>
  );
};
export default Markers;
