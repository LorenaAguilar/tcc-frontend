import restClient from '../../clients/RestClient';
import listUserOccurrencesService from './listUserOccurrences';

jest.mock('../../clients/RestClient');

describe('listUserOccurrencesService', () => {
  it('should run correctly', async () => {
    const occurrenceReturned = {
      id: 'id',
      dateTime: new Date().toISOString(),
      lat: 'lat',
      lng: 'lng',
      address: 'address',
      description: 'description',
      type: 'type',
      origin: 'origin',
    };
    const data = [occurrenceReturned];
    const getMock = jest.fn().mockResolvedValueOnce({ data });
    restClient.mockReturnValue({ get: getMock });

    const result = await listUserOccurrencesService();

    expect(result).toEqual([
      {
        dateTime: new Date(occurrenceReturned.dateTime),
        description: 'description',
        id: 'id',
        location: {
          address: 'address',
          lat: 'lat',
          lng: 'lng',
        },
        origin: 'origin',
        type: 'type',
      },
    ]);
    expect(getMock).toHaveBeenCalledTimes(1);
    expect(getMock).toHaveBeenCalledWith('/occurrences/by-user');
  });
});
