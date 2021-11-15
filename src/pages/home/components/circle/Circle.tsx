import { Circle as CircleComponent } from '@react-google-maps/api';
import React, { useMemo } from 'react';

interface Props {
  location: google.maps.LatLngLiteral;
  size: number;
  color: string;
}

const Circle: React.FunctionComponent<Props> = ({ location, size, color }) => {
  const options = useMemo(
    () => ({
      strokeColor: color,
      strokeOpacity: 0.6,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.6,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      zIndex: 1,
    }),
    [color]
  );

  return <CircleComponent center={location} radius={size} options={options} />;
};

export default React.memo(Circle);
