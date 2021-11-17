import restClient from '../../clients/RestClient';
import getAnalytics from './GetAnalytics';

jest.mock('../../clients/RestClient');

describe('getAnalytics', () => {
  it('should run correctly', async () => {
    const data = { clusters: [{ id: '1' }], maxHistogramClass: 1 };
    restClient.mockReturnValue({ get: jest.fn().mockResolvedValueOnce({ data }) });

    const result = await getAnalytics();

    expect(result).toEqual(data);
  });
});
