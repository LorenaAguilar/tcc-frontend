import { createStore } from 'effector';
import { cloneDeep } from 'lodash';
import {
  cleanHomePageStore,
  loadOccurrenceFailed,
  loadOccurrencesDone,
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
  .reset(cleanHomePageStore);

export default HomePageStore;
