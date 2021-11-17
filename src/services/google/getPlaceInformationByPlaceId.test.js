import restClient from '../../clients/RestClient';
import { GOOGLE_API_KEY } from '../../constants';
import getPlaceInformationsByPlaceId from './getPlaceInformationsByPlaceId';

jest.mock('../../clients/RestClient');

describe('getPlaceInformationsByPlaceId', () => {
  it('should run correctly', async () => {
    const data = {
      results: [
        {
          address_components: [
            { types: ['administrative_area_level_2'], long_name: 'Belo Horizonte' },
          ],
          geometry: {
            location: {
              lat: 1,
              lng: 1,
            },
          },
        },
      ],
    };
    const postMock = jest.fn().mockResolvedValueOnce({ data });
    restClient.mockReturnValue({ post: postMock });

    const result = await getPlaceInformationsByPlaceId('Rua');

    expect(postMock).toHaveBeenCalledWith(`geocode/json?address=Rua&key=${GOOGLE_API_KEY}`);
    expect(result).toEqual({ address: undefined, isFromBH: true, lat: 1, lng: 1 });
  });

  it('should return null', async () => {
    const data = {};
    const postMock = jest.fn().mockResolvedValueOnce({ data });
    restClient.mockReturnValue({ post: postMock });

    const result = await getPlaceInformationsByPlaceId('Rua');

    expect(postMock).toHaveBeenCalledWith(`geocode/json?address=Rua&key=${GOOGLE_API_KEY}`);
    expect(result).toBeNull();
  });
});
