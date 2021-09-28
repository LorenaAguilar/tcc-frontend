import TypeNotification from '../../../domains/Notification';
import listOccurrence from '../../../services/occurrences/listOccurrence';
import {
  loadOccurrenceFailed,
  loadOccurrencesDone,
  startLoadOccurrences,
} from '../../../stores/homePage/HomePageEvents';
import { addNotification } from '../../../stores/notificationList/NotificationListEvents';

const LoadOccurrenceUseCase = async (): Promise<void> => {
  startLoadOccurrences();
  try {
    const occurrences = await listOccurrence();
    loadOccurrencesDone({ occurrences });
  } catch (error) {
    loadOccurrenceFailed();
    addNotification({
      message: 'Não foi possível carregar as ocorrências',
      type: TypeNotification.ERROR,
    });
  }
};

export default LoadOccurrenceUseCase;
