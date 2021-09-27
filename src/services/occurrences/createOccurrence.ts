import restClient from '../../clients/RestClient';

const endpoint = '/occurrences';

export default function createOccurrence(command: {
  authorName: string;
  dateTime: Date;
  description: string;
  address: string;
  lat: number;
  lng: number;
  type: string;
}): Promise<void> {
  return restClient()
    .post(endpoint, JSON.stringify(command))
    .then((response) => response.data);
}
