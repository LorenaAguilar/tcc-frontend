import restClient from '../../clients/RestClient';

const endpoint = '/occurrences';

export default function editOccurrence(
  occurrenceId: string,
  command: {
    authorName: string;
    dateTime: Date;
    description: string;
    address: string;
    lat: number;
    lng: number;
    type: string;
    origin: string;
  }
): Promise<void> {
  return restClient()
    .put(`${endpoint}/${occurrenceId}`, JSON.stringify(command))
    .then((response) => response.data);
}
