import TypeNotification from '../../domains/Notification';
import deleteOccurrence from '../../services/occurrences/deleteOccurrence';
import { onDeleteSuccess } from '../../stores/homePage/HomePageEvents';
import { addNotification } from '../../stores/notificationList/NotificationListEvents';

const DeleteOccurrenceUseCase = async (occurrenceId: string): Promise<void> => {
  try {
    await deleteOccurrence(occurrenceId);
    onDeleteSuccess({ occurrenceId });
    addNotification({
      message: 'Exclusão realizada com sucesso',
      type: TypeNotification.SUCCESS,
    });
  } catch (error) {
    addNotification({
      message: 'Erro durante a exclusão da ocorrência',
      type: TypeNotification.ERROR,
    });
  }
};

export default DeleteOccurrenceUseCase;
