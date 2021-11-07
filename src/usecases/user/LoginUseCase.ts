import TypeNotification from '../../domains/Notification';
import loginService from '../../services/user/loginService';
import { addNotification } from '../../stores/notificationList/NotificationListEvents';
import { login } from '../../stores/user/UserEvents';

const LoginUseCase = async (
  command: { email: string; password: string },
  successCallback: () => void
): Promise<void> => {
  try {
    const token = await loginService(command);
    login({ token });
    addNotification({
      message: 'Login realizado com sucesso',
      type: TypeNotification.SUCCESS,
    });

    successCallback();
  } catch (error) {
    addNotification({
      message: 'Usuário ou senha incorretos',
      type: TypeNotification.ERROR,
    });
  }
};

export default LoginUseCase;
