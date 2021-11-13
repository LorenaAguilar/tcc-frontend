import TypeNotification from '../../domains/Notification';
import CreateUserService from '../../services/user/CreateUserService';
import * as NotificationListEvents from '../../stores/notificationList/NotificationListEvents';
import CreateUserUseCase from './CreateUserUseCase';

jest.mock('../../services/user/CreateUserService');

describe('CreateUserUseCase', () => {
  const createUserCommand = {
    email: 'test@test.com',
    password: 'test',
    name: 'test name',
    lastname: 'lasname test',
  };

  it('should run correctly', async () => {
    CreateUserService.mockResolvedValue();
    const successCallback = jest.fn();
    NotificationListEvents.addNotification = jest.fn();

    await CreateUserUseCase(createUserCommand, successCallback);

    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Conta criada com sucesso',
      type: TypeNotification.SUCCESS,
    });
    expect(successCallback).toHaveBeenCalledTimes(1);
    expect(successCallback).toHaveBeenCalledWith();
  });

  it('should run correctly when there is error', async () => {
    CreateUserService.mockRejectedValue();
    const successCallback = jest.fn();
    NotificationListEvents.addNotification = jest.fn();

    await CreateUserUseCase(createUserCommand, successCallback);

    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Não foi possível criar a conta',
      type: TypeNotification.ERROR,
    });
    expect(successCallback).toHaveBeenCalledTimes(0);
  });
});
