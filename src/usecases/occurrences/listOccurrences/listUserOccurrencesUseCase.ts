import TypeNotification from '../../../domains/Notification';
import listUserOccurrencesService from '../../../services/occurrences/listUserOccurrences';
import { loadUserOccurrencesDone } from '../../../stores/homePage/HomePageEvents';
import { addNotification } from '../../../stores/notificationList/NotificationListEvents';

const ListUserOccurrencesUseCase = async (): Promise<void> => {
  try {
    const occurrences = await listUserOccurrencesService();
    loadUserOccurrencesDone({ occurrences });
  } catch (error) {
    addNotification({
      message: 'Não foi possível carregar as ocorrências',
      type: TypeNotification.ERROR,
    });
  }
};

export default ListUserOccurrencesUseCase;
