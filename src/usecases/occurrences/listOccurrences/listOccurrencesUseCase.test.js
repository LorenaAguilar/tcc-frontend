import TypeNotification from '../../../domains/Notification';
import listOccurrenceService from '../../../services/occurrences/listOccurrence';
import * as HomePageEvents from '../../../stores/homePage/HomePageEvents';
import * as NotificationListEvents from '../../../stores/notificationList/NotificationListEvents';
import ListOccurrencesUseCase from './listOccurrencesUseCase';

jest.mock('../../../services/occurrences/listOccurrence');

describe('ListOccurrencesUseCase', () => {
  it('should run correctly', async () => {
    const mockedListOccurrencesServiceReturn = [{ occurrenceId: '1' }, { occurrenceId: '2' }];
    listOccurrenceService.mockResolvedValue(mockedListOccurrencesServiceReturn);
    NotificationListEvents.addNotification = jest.fn();
    HomePageEvents.loadOccurrenceFailed = jest.fn();
    HomePageEvents.loadOccurrencesDone = jest.fn();
    HomePageEvents.startLoadOccurrences = jest.fn();

    await ListOccurrencesUseCase();

    expect(HomePageEvents.startLoadOccurrences).toHaveBeenCalledTimes(1);
    expect(HomePageEvents.startLoadOccurrences).toHaveBeenCalledWith();
    expect(HomePageEvents.loadOccurrencesDone).toHaveBeenCalledTimes(1);
    expect(HomePageEvents.loadOccurrencesDone).toHaveBeenCalledWith({
      occurrences: mockedListOccurrencesServiceReturn,
    });
    expect(HomePageEvents.loadOccurrenceFailed).toHaveBeenCalledTimes(0);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(0);
  });

  it('should run correctly when there is error', async () => {
    listOccurrenceService.mockRejectedValue();
    NotificationListEvents.addNotification = jest.fn();
    HomePageEvents.onDeleteSuccess = jest.fn();

    await ListOccurrencesUseCase();

    expect(HomePageEvents.startLoadOccurrences).toHaveBeenCalledTimes(1);
    expect(HomePageEvents.startLoadOccurrences).toHaveBeenCalledWith();
    expect(HomePageEvents.loadOccurrencesDone).toHaveBeenCalledTimes(0);
    expect(HomePageEvents.loadOccurrenceFailed).toHaveBeenCalledTimes(1);
    expect(HomePageEvents.loadOccurrenceFailed).toHaveBeenCalledWith();
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Não foi possível carregar as ocorrências',
      type: TypeNotification.ERROR,
    });
  });
});
