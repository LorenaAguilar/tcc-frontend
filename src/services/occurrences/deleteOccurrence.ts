import restClient from '../../clients/RestClient';

const endpoint = '/occurrences';

export default function deleteOccurrence(occurrenceId: string): Promise<void> {
  return restClient()
    .delete(`${endpoint}/${occurrenceId}`)
    .then((response) => response.data);
}
