import restClient from '../../clients/RestClient';
import CreateUserService from './CreateUserService';

jest.mock('../../clients/RestClient');

describe('CreateUserService', () => {
  it('should run correctly', async () => {
    const data = {};
    const command = { email: 'email', password: 'password', name: 'name', lastname: 'lastname' };
    const postMock = jest.fn().mockResolvedValueOnce({ data });
    restClient.mockReturnValue({ post: postMock });

    const result = await CreateUserService(command);

    expect(result).toEqual({});
    expect(postMock).toHaveBeenCalledTimes(1);
    expect(postMock).toHaveBeenCalledWith('/users', command);
  });
});
