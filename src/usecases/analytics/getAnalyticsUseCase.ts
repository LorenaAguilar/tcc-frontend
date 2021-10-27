import TypeNotification from '../../domains/Notification';
import getAnalytics from '../../services/analytics/GetAnalytics';
import {
  loadAnalyticsDone,
  loadAnalyticsFailed,
  startLoadAnalytics,
} from '../../stores/Analytics/AnalyticsEvents';
import { addNotification } from '../../stores/notificationList/NotificationListEvents';

const getAnalyticsUseCase = async (): Promise<void> => {
  startLoadAnalytics();
  try {
    const occurrences = await getAnalytics();
    loadAnalyticsDone(occurrences);
  } catch (error) {
    loadAnalyticsFailed();
    addNotification({
      message: 'Não foi possível carregar as informações de analytics',
      type: TypeNotification.ERROR,
    });
  }
};

export default getAnalyticsUseCase;
