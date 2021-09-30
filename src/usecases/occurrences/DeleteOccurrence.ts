import TypeNotification from '../../domains/Notification';
import deleteOccurrence from '../../services/occurrences/deleteOccurrence';
import { addNotification } from '../../stores/notificationList/NotificationListEvents';

const DeleteOccurrenceUseCase = async (occurrenceId: string): Promise<void> => {
  try {
    await deleteOccurrence(occurrenceId);
    addNotification({
      message: 'Ocorrência criada com sucesso',
      type: TypeNotification.SUCCESS,
    });
  } catch (error) {
    addNotification({
      message: 'Erro durante a criação da ocorrência',
      type: TypeNotification.ERROR,
    });
  }
};

export default DeleteOccurrenceUseCase;
