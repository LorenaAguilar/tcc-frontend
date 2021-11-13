import Cluster from '../../domains/Cluster';

interface AnalyticsState {
  isLoading: boolean;
  clusters: Array<Cluster>;
  maxHistogramClass: number;
}

export default AnalyticsState;
