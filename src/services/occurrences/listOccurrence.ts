import restClient from '../../clients/RestClient';
import Occurrence from '../../domains/Occurrence';

const endpoint = '/occurrences';

interface OccurrenceResponse {
  id: string;
  dateTime: string;
  lat: number;
  lng: number;
  address: string;
  description: string;
  type: string;
  origin: string;
}

export default function listOccurrence(): Promise<Array<Occurrence>> {
  return restClient()
    .get<Array<OccurrenceResponse>>(endpoint)
    .then((response) => response.data.map(OccurrenceResponseToOccurrence));
}

const OccurrenceResponseToOccurrence = (occurrence: OccurrenceResponse): Occurrence => ({
  description: occurrence.description,
  dateTime: new Date(occurrence.dateTime),
  id: occurrence.id,
  type: occurrence.type,
  location: {
    address: occurrence.address,
    lat: occurrence.lat,
    lng: occurrence.lng,
  },
  origin: occurrence.origin,
});
