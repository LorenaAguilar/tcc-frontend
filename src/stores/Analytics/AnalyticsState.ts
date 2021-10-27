import Cluster from '../../domains/Cluster';

interface AnalyticsState {
  isLoading: boolean;
  clusters: Array<Cluster>;
}

export default AnalyticsState;
