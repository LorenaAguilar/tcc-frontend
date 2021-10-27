import restClient from '../../clients/RestClient';
import Cluster from '../../domains/Cluster';

const endpoint = '/analytics';

interface AnalyticsResponse {
  clusters: Array<{ lat: number; lng: number; radius: number; color: string; id: string }>;
}

export default function getAnalytics(): Promise<Array<Cluster>> {
  return restClient()
    .get<AnalyticsResponse>(endpoint)
    .then((response) => response.data.clusters);
}
