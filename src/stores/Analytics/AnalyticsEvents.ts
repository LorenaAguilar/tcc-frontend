import { createEvent } from 'effector';
import Cluster from '../../domains/Cluster';

export const startLoadAnalytics = createEvent('startLoadAnalytics');

export const loadAnalyticsDone =
  createEvent<{ clusters: Array<Cluster>; maxHistogramClass: number }>('loadAnalyticsDone');

export const loadAnalyticsFailed = createEvent('loadAnalyticsFailed');

export const cleanAnalyticsStore = createEvent('cleanHomePageStore');
