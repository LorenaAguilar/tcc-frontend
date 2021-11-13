import TypeNotification from '../../domains/Notification';
import loginService from '../../services/user/loginService';
import * as NotificationListEvents from '../../stores/notificationList/NotificationListEvents';
import * as UserEvents from '../../stores/user/UserEvents';
import LoginUseCase from './LoginUseCase';

jest.mock('../../services/user/loginService');

describe('LoginUseCase', () => {
  it('should run correctly', async () => {
    loginService.mockResolvedValue('bearer token');
    const loginCommand = { email: 'test@test.com', password: 'test' };
    const successCallback = jest.fn();
    const loginMock = jest.fn();
    UserEvents.login = loginMock;
    NotificationListEvents.addNotification = jest.fn();

    await LoginUseCase(loginCommand, successCallback);

    expect(loginMock).toHaveBeenCalledTimes(1);
    expect(loginMock).toHaveBeenCalledWith({ token: 'bearer token' });
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Login realizado com sucesso',
      type: TypeNotification.SUCCESS,
    });
    expect(successCallback).toHaveBeenCalledTimes(1);
    expect(successCallback).toHaveBeenCalledWith();
  });

  it('should run correctly when there is error', async () => {
    loginService.mockRejectedValue('bearer token');
    const loginCommand = { email: 'test@test.com', password: 'test' };
    const successCallback = jest.fn();
    const loginMock = jest.fn();
    UserEvents.login = loginMock;
    NotificationListEvents.addNotification = jest.fn();

    await LoginUseCase(loginCommand, successCallback);

    expect(loginMock).toHaveBeenCalledTimes(0);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Usuário ou senha incorretos',
      type: TypeNotification.ERROR,
    });
    expect(successCallback).toHaveBeenCalledTimes(0);
  });
});
