import { Polygon } from '@react-google-maps/api';
import { useStoreMap } from 'effector-react';
import { GeoPosition } from 'geo-position.ts';
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

  const options = {
    fillColor: 'lightblue',
    fillOpacity: 1,
    strokeColor: 'red',
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  return (
    <>
      {clusters.map((cluster) => {
        const radius = cluster.otherNodes.reduce((accumulator, value) => {
          const xPoint = new GeoPosition(value.location.lat, value.location.lng);
          const yPoint = new GeoPosition(cluster.lat, cluster.lng);

          return Math.max(xPoint.Distance(yPoint), accumulator); // -> 20844 meters
        }, 0);

        return (
          <>
            {cluster.otherNodes.map((node) => (
              <Polygon
                key={`line-${cluster.lat}-${cluster.lng}`}
                options={options}
                paths={[
                  { lat: cluster.lat, lng: cluster.lng },
                  { lat: node.location.lat, lng: node.location.lng },
                ]}
              />
            ))}
            <Circle
              key={`${cluster.lat}-${cluster.lng}`}
              location={{ lat: cluster.lat, lng: cluster.lng }}
              color={`rgb(200, 8, 8, ${(cluster.histogramClass + 1) / maxHistogramClass})`}
              size={radius}
            />
          </>
        );
      })}
    </>
  );
};
export default Markers;
