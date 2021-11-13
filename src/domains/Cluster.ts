import Occurrence from './Occurrence';

export default interface Cluster {
  lat: number;
  lng: number;
  radius: number;
  color: string;
  id: string;
  otherNodes: Array<Occurrence>;
  histogramClass: number;
}
