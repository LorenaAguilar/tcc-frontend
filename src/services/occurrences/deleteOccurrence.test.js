import restClient from '../../clients/RestClient';
import deleteOccurrence from './deleteOccurrence';

jest.mock('../../clients/RestClient');

describe('deleteOccurrence', () => {
  it('should run correctly', async () => {
    const data = {};
    const occurrenceId = '1';
    const deleteMock = jest.fn().mockResolvedValueOnce({ data });
    restClient.mockReturnValue({ delete: deleteMock });

    const result = await deleteOccurrence(occurrenceId);

    expect(result).toEqual({});
    expect(deleteMock).toHaveBeenCalledTimes(1);
    expect(deleteMock).toHaveBeenCalledWith(`/occurrences/${occurrenceId}`);
  });
});
