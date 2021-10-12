import { createStore } from 'effector';
import { cloneDeep } from 'lodash';
import OriginEnum from '../../domains/OriginEnum';
import {
  cleanHomePageStore,
  loadOccurrenceFailed,
  loadOccurrencesDone,
  onDeleteSuccess,
  onEditSuccess,
  setSelectedOccurrence,
  startLoadOccurrences,
} from './HomePageEvents';
import HomePageState from './HomePageState';

const initialState: HomePageState = {
  isLoading: false,
  occurrences: [],
  selectedOccurrenceId: '',
};

const HomePageStore = createStore(initialState)
  .on(loadOccurrencesDone, (state, { occurrences }) => {
    const newState = cloneDeep(state);

    newState.isLoading = false;
    newState.occurrences = occurrences;

    return newState;
  })
  .on(loadOccurrenceFailed, (state) => {
    const newState = cloneDeep(state);

    newState.isLoading = false;

    return newState;
  })
  .on(startLoadOccurrences, (state) => {
    const newState = cloneDeep(state);

    newState.isLoading = true;

    return newState;
  })
  .on(setSelectedOccurrence, (state, { occurrenceId }) => {
    const newState = cloneDeep(state);

    newState.selectedOccurrenceId = occurrenceId;

    return newState;
  })
  .on(onDeleteSuccess, (state, { occurrenceId }) => {
    const newState = cloneDeep(state);

    newState.occurrences = newState.occurrences.filter(({ id }) => id !== occurrenceId);

    return newState;
  })
  .on(onEditSuccess, (state, { occurrenceId, occurrenceData }) => {
    const newState = cloneDeep(state);

    newState.occurrences = newState.occurrences.map((occurrence) => {
      if (occurrence.id === occurrenceId) {
        return {
          ...occurrence,
          dateTime: occurrenceData.dateTime,
          location: {
            lat: occurrenceData.lat,
            lng: occurrenceData.lng,
            address: occurrenceData.address,
          },
          description: occurrenceData.description,
          type: occurrenceData.type,
          origin: occurrenceData.origin as OriginEnum,
        };
      }

      return occurrence;
    });

    return newState;
  })
  .reset(cleanHomePageStore);

export default HomePageStore;
