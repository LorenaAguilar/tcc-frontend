import restClient from '../../clients/RestClient';
import createOccurrence from './createOccurrence';

jest.mock('../../clients/RestClient');

describe('createOccurrence', () => {
  it('should run correctly', async () => {
    const data = {};
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
    const postMock = jest.fn().mockResolvedValueOnce({ data });
    restClient.mockReturnValue({ post: postMock });

    const result = await createOccurrence(command);

    expect(result).toEqual({});
    expect(postMock).toHaveBeenCalledTimes(1);
    expect(postMock).toHaveBeenCalledWith('/occurrences', JSON.stringify(command));
  });
});
