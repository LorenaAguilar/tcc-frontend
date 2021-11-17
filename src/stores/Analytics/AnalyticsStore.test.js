import { loadAnalyticsDone, loadAnalyticsFailed, startLoadAnalytics } from './AnalyticsEvents';
import AnalyticsStore from './AnalyticsStore';

describe('AnalyticsStore', () => {
  describe('loadAnalyticsDone', () => {
    it('should loadAnalyticsDone', () => {
      const initialState = {};
      AnalyticsStore.setState(initialState);
      const clusters = [{ id: '1' }];
      const maxHistogramClass = 3;

      loadAnalyticsDone({ clusters, maxHistogramClass });

      expect(AnalyticsStore.getState()).toEqual({ isLoading: false, clusters, maxHistogramClass });
    });
  });

  describe('loadAnalyticsFailed', () => {
    it('should loadAnalyticsFailed', () => {
      const initialState = {};
      AnalyticsStore.setState(initialState);

      loadAnalyticsFailed();

      expect(AnalyticsStore.getState()).toEqual({ isLoading: false });
    });
  });

  describe('startLoadAnalytics', () => {
    it('should startLoadAnalytics', () => {
      const initialState = {};
      AnalyticsStore.setState(initialState);

      startLoadAnalytics();

      expect(AnalyticsStore.getState()).toEqual({ isLoading: true });
    });
  });
});
