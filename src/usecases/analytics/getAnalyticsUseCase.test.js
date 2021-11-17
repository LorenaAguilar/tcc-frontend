import TypeNotification from '../../domains/Notification';
import getAnalytics from '../../services/analytics/GetAnalytics';
import * as AnalyticsEvents from '../../stores/Analytics/AnalyticsEvents';
import * as NotificationListEvents from '../../stores/notificationList/NotificationListEvents';
import getAnalyticsUseCase from './getAnalyticsUseCase';

jest.mock('../../services/analytics/GetAnalytics');

describe('getAnalyticsUseCase', () => {
  it('should run correctly', async () => {
    const mockedListOccurrencesServiceReturn = [{ occurrenceId: '1' }, { occurrenceId: '2' }];
    getAnalytics.mockResolvedValue(mockedListOccurrencesServiceReturn);
    NotificationListEvents.addNotification = jest.fn();
    AnalyticsEvents.loadAnalyticsDone = jest.fn();
    AnalyticsEvents.loadAnalyticsFailed = jest.fn();
    AnalyticsEvents.startLoadAnalytics = jest.fn();

    await getAnalyticsUseCase();

    expect(AnalyticsEvents.startLoadAnalytics).toHaveBeenCalledTimes(1);
    expect(AnalyticsEvents.loadAnalyticsFailed).toHaveBeenCalledTimes(0);
    expect(AnalyticsEvents.loadAnalyticsDone).toHaveBeenCalledTimes(1);
    expect(AnalyticsEvents.loadAnalyticsDone).toHaveBeenCalledWith(
      mockedListOccurrencesServiceReturn
    );
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(0);
  });

  it('should run correctly when there is error', async () => {
    getAnalytics.mockRejectedValue();
    NotificationListEvents.addNotification = jest.fn();
    AnalyticsEvents.loadAnalyticsDone = jest.fn();
    AnalyticsEvents.loadAnalyticsFailed = jest.fn();
    AnalyticsEvents.startLoadAnalytics = jest.fn();

    await getAnalyticsUseCase();

    expect(AnalyticsEvents.loadAnalyticsDone).toHaveBeenCalledTimes(0);
    expect(AnalyticsEvents.loadAnalyticsFailed).toHaveBeenCalledTimes(1);
    expect(AnalyticsEvents.startLoadAnalytics).toHaveBeenCalledTimes(1);

    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Não foi possível carregar as informações de analytics',
      type: TypeNotification.ERROR,
    });
  });
});
