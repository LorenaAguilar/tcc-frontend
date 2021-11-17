import TypeNotification from '../../domains/Notification';
import getPlaceInformationsByPlaceId from '../../services/google/getPlaceInformationsByPlaceId';
import editOccurrenceService from '../../services/occurrences/editOccurrence';
import * as NotificationListEvents from '../../stores/notificationList/NotificationListEvents';
import EditOccurrenceUseCase from './EditOccurrenceUseCase';

jest.mock('../../services/occurrences/editOccurrence');
jest.mock('../../services/google/getPlaceInformationsByPlaceId');

describe('EditOccurrenceUseCase', () => {
  const occurrenceIdMock = 'id to be editted';
  const createOccurrenceCommand = {
    authorName: 'authorName',
    dateTime: new Date(),
    description: 'description',
    placeId: 'placeId',
    type: 'type',
    origin: 'OriginEnum',
  };

  it('should run correctly', async () => {
    editOccurrenceService.mockResolvedValue();
    getPlaceInformationsByPlaceId.mockResolvedValue({ isFromBH: true, lat: 1, lng: 2 });

    NotificationListEvents.addNotification = jest.fn();

    await EditOccurrenceUseCase(occurrenceIdMock, createOccurrenceCommand);

    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Ocorrência editada com sucesso',
      type: TypeNotification.SUCCESS,
    });
  });

  it('should run correctly when there is no location found', async () => {
    editOccurrenceService.mockRejectedValue();
    getPlaceInformationsByPlaceId.mockResolvedValue(null);

    NotificationListEvents.addNotification = jest.fn();

    await EditOccurrenceUseCase(occurrenceIdMock, createOccurrenceCommand);

    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Erro durante a edição da ocorrência',
      type: TypeNotification.ERROR,
    });
  });

  it('should run correctly when there is error', async () => {
    editOccurrenceService.mockRejectedValue();
    getPlaceInformationsByPlaceId.mockResolvedValue({ isFromBH: true, lat: 1, lng: 2 });
    NotificationListEvents.addNotification = jest.fn();

    await EditOccurrenceUseCase(occurrenceIdMock, createOccurrenceCommand);

    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Erro durante a edição da ocorrência',
      type: TypeNotification.ERROR,
    });
  });
});
