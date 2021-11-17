import restClient from '../../clients/RestClient';
import loginService from './loginService';

jest.mock('../../clients/RestClient');

describe('loginService', () => {
  it('should run correctly', async () => {
    const data = { token: 'token', authType: 'authType' };
    const command = { email: 'email', password: 'password' };
    const postMock = jest.fn().mockResolvedValueOnce({ data });
    restClient.mockReturnValue({ post: postMock });

    const result = await loginService(command);

    expect(result).toEqual(`${data.authType} ${data.token}`);
    expect(postMock).toHaveBeenCalledTimes(1);
    expect(postMock).toHaveBeenCalledWith('/auth', command);
  });
});
