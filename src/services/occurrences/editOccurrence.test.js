import restClient from '../../clients/RestClient';
import editOccurrence from './editOccurrence';

jest.mock('../../clients/RestClient');

describe('editOccurrence', () => {
  it('should run correctly', async () => {
    const data = {};
    const occurrenceId = '1';
    const command = {
      authorName: 'authorName',
      dateTime: 'dateTime',
      description: 'description',
      address: 'address',
      lat: 'lat',
      lng: 'lng',
      type: 'type',
      origin: 'origin',
    };
    const putMock = jest.fn().mockResolvedValueOnce({ data });
    restClient.mockReturnValue({ put: putMock });

    const result = await editOccurrence(occurrenceId, command);

    expect(result).toEqual({});
    expect(putMock).toHaveBeenCalledTimes(1);
    expect(putMock).toHaveBeenCalledWith(`/occurrences/${occurrenceId}`, JSON.stringify(command));
  });
});
