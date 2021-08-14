import React from 'react';
import Circle from '../circle/Circle';

const Iqvu: React.FunctionComponent = () => (
  <>
    <Circle
      location={{ lat: -19.801664961293064, lng: -43.93884010963926 }}
      size={300}
      color="red"
    />
    <Circle
      location={{ lat: -19.797284810269978, lng: -43.92042411918701 }}
      size={600}
      color="green"
    />
    <Circle
      location={{ lat: -19.796284810269978, lng: -43.90803511948701 }}
      size={500}
      color="yellow"
    />
  </>
);

export default React.memo(Iqvu);
