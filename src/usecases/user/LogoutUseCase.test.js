import TypeNotification from '../../domains/Notification';
import * as NotificationListEvents from '../../stores/notificationList/NotificationListEvents';
import * as UserEvents from '../../stores/user/UserEvents';
import LogoutUseCase from './LogoutUseCase';

describe('LogoutUseCase', () => {
  it('should run correctly', () => {
    NotificationListEvents.addNotification = jest.fn();
    UserEvents.logout = jest.fn();

    LogoutUseCase();

    expect(UserEvents.logout).toHaveBeenCalledTimes(1);
    expect(UserEvents.logout).toHaveBeenCalledWith();
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Logout realizado com sucesso',
      type: TypeNotification.SUCCESS,
    });
  });

  it('should run correctly when there is a error', () => {
    NotificationListEvents.addNotification = jest.fn();
    UserEvents.logout = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });

    LogoutUseCase();

    expect(UserEvents.logout).toHaveBeenCalledTimes(1);
    expect(UserEvents.logout).toHaveBeenCalledWith();
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Erro durante realização do logout',
      type: TypeNotification.ERROR,
    });
  });
});
