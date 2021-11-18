import TypeNotification from '../../../domains/Notification';
import listUserOccurrencesService from '../../../services/occurrences/listUserOccurrences';
import * as HomePageEvents from '../../../stores/homePage/HomePageEvents';
import * as NotificationListEvents from '../../../stores/notificationList/NotificationListEvents';
import ListUserOccurrencesUseCase from './listUserOccurrencesUseCase';

jest.mock('../../../services/occurrences/listUserOccurrencesUseCase');

describe('ListUserOccurrencesUseCase', () => {
  it('should run correctly', async () => {
    const mockedListOccurrencesServiceReturn = [{ occurrenceId: '1' }, { occurrenceId: '2' }];
    listUserOccurrencesService.mockResolvedValue(mockedListOccurrencesServiceReturn);
    NotificationListEvents.addNotification = jest.fn();
    HomePageEvents.loadUserOccurrencesDone = jest.fn();

    await ListUserOccurrencesUseCase();

    expect(HomePageEvents.loadUserOccurrencesDone).toHaveBeenCalledTimes(1);
    expect(HomePageEvents.loadUserOccurrencesDone).toHaveBeenCalledWith({
      occurrences: mockedListOccurrencesServiceReturn,
    });
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(0);
  });

  it('should run correctly when there is error', async () => {
    listUserOccurrencesService.mockRejectedValue();
    NotificationListEvents.addNotification = jest.fn();
    HomePageEvents.loadUserOccurrencesDone = jest.fn();

    await ListUserOccurrencesUseCase();

    expect(HomePageEvents.loadUserOccurrencesDone).toHaveBeenCalledTimes(0);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Não foi possível carregar as ocorrências',
      type: TypeNotification.ERROR,
    });
  });
});
