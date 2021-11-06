import TypeNotification from '../../domains/Notification';
import CreateUserService from '../../services/user/CreateUserService';
import { addNotification } from '../../stores/notificationList/NotificationListEvents';

const CreateUserUseCase = async (
  command: { email: string; password: string; name: string; lastname: string },
  successCallback: () => void
): Promise<void> => {
  try {
    await CreateUserService(command);
    addNotification({
      message: 'Conta criada com sucesso',
      type: TypeNotification.SUCCESS,
    });
    successCallback();
  } catch (error) {
    addNotification({
      message: 'Não foi possível criar a conta',
      type: TypeNotification.ERROR,
    });
  }
};

export default CreateUserUseCase;
