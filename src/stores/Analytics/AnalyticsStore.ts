import { createStore } from 'effector';
import { cloneDeep } from 'lodash';
import {
  cleanAnalyticsStore,
  loadAnalyticsDone,
  loadAnalyticsFailed,
  startLoadAnalytics,
} from './AnalyticsEvents';
import AnalyticsState from './AnalyticsState';

const initialState: AnalyticsState = {
  isLoading: false,
  clusters: [],
  maxHistogramClass: 0,
};

const HomePageStore = createStore(initialState)
  .on(loadAnalyticsDone, (state, payload) => {
    const newState = cloneDeep(state);

    newState.isLoading = false;
    newState.clusters = payload.clusters;
    newState.maxHistogramClass = payload.maxHistogramClass;

    return newState;
  })
  .on(loadAnalyticsFailed, (state) => {
    const newState = cloneDeep(state);

    newState.isLoading = false;

    return newState;
  })
  .on(startLoadAnalytics, (state) => {
    const newState = cloneDeep(state);

    newState.isLoading = true;

    return newState;
  })
  .reset(cleanAnalyticsStore);

export default HomePageStore;
