import TypeNotification from '../../domains/Notification';
import { addNotification } from '../../stores/notificationList/NotificationListEvents';
import { logout } from '../../stores/user/UserEvents';

const LogoutUseCase = (): void => {
  try {
    logout();
    addNotification({
      message: 'Logout realizado com sucesso',
      type: TypeNotification.SUCCESS,
    });
  } catch (error) {
    addNotification({
      message: 'Erro durante realização do logout',
      type: TypeNotification.ERROR,
    });
  }
};

export default LogoutUseCase;
