import { createStore } from 'effector';
import { cloneDeep } from 'lodash';
import {
  createOccurrenceDone,
  createOccurrenceFailed,
  startCreateOccurrence,
} from './CreateOccurrenceEvents';
import CreateOccurrenceState from './CreateOccurrenceState';

const initialState: CreateOccurrenceState = {
  isLoading: false,
};

const NotificationListStore = createStore(initialState)
  .on(createOccurrenceDone, (state) => {
    const newState = cloneDeep(state);

    newState.isLoading = false;

    return newState;
  })
  .on(createOccurrenceFailed, (state) => {
    const newState = cloneDeep(state);

    newState.isLoading = false;

    return newState;
  })
  .on(startCreateOccurrence, (state) => {
    const newState = cloneDeep(state);

    newState.isLoading = true;

    return newState;
  });

export default NotificationListStore;
