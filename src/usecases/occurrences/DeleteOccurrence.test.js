import TypeNotification from '../../domains/Notification';
import deleteOccurrenceService from '../../services/occurrences/deleteOccurrence';
import * as HomePageEvents from '../../stores/homePage/HomePageEvents';
import * as NotificationListEvents from '../../stores/notificationList/NotificationListEvents';
import DeleteOccurrence from './DeleteOccurrence';

jest.mock('../../services/occurrences/deleteOccurrence');

describe('DeleteOccurrence', () => {
  const occurrenceIdMock = 'id to be deletted';
  it('should run correctly', async () => {
    deleteOccurrenceService.mockResolvedValue();
    NotificationListEvents.addNotification = jest.fn();
    HomePageEvents.onDeleteSuccess = jest.fn();

    await DeleteOccurrence(occurrenceIdMock);

    expect(HomePageEvents.onDeleteSuccess).toHaveBeenCalledTimes(1);
    expect(HomePageEvents.onDeleteSuccess).toHaveBeenCalledWith({ occurrenceId: occurrenceIdMock });
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Exclusão realizada com sucesso',
      type: TypeNotification.SUCCESS,
    });
  });

  it('should run correctly when there is error', async () => {
    deleteOccurrenceService.mockRejectedValue();
    NotificationListEvents.addNotification = jest.fn();
    HomePageEvents.onDeleteSuccess = jest.fn();

    await DeleteOccurrence(occurrenceIdMock);

    expect(HomePageEvents.onDeleteSuccess).toHaveBeenCalledTimes(0);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Erro durante a exclusão da ocorrência',
      type: TypeNotification.ERROR,
    });
  });
});
