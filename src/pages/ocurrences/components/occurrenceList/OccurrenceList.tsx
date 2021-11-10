import { useStoreMap } from 'effector-react';
import React from 'react';
import HomePageStore from '../../../../stores/homePage/HomePageStore';
import OccurrenceListItem from './occurrenceListItem/OccurrenceListItem';

const OccurrenceList: React.FunctionComponent = () => {
  const occurrences = useStoreMap({
    store: HomePageStore,
    keys: [],
    fn: (state) => state.userOccurrences,
  });

  return (
    <>
      {occurrences.map(({ id, location }) => (
        <OccurrenceListItem
          occurrenceId={id}
          key={`occurrence-${id}:${location.lat}-${location.lng}`}
        />
      ))}
    </>
  );
};

export default OccurrenceList;
