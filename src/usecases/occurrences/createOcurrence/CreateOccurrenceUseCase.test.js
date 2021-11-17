import TypeNotification from '../../../domains/Notification';
import getPlaceInformationsByPlaceId from '../../../services/google/getPlaceInformationsByPlaceId';
import createOccurrenceService from '../../../services/occurrences/createOccurrence';
import * as CreateOccurrenceEvents from '../../../stores/createOccurrence/CreateOccurrenceEvents';
import * as NotificationListEvents from '../../../stores/notificationList/NotificationListEvents';
import CreateOccurrenceUseCase from './CreateOccurrenceUseCase';

jest.mock('../../../services/occurrences/createOccurrence');
jest.mock('../../../services/google/getPlaceInformationsByPlaceId');

describe('CreateOccurrenceUseCase', () => {
  const createOccurrenceCommand = {
    authorName: 'authorName',
    dateTime: new Date(),
    description: 'description',
    placeId: 'placeId',
    type: 'type',
    origin: 'OriginEnum',
  };
  const successCallback = jest.fn();

  it('should run correctly', async () => {
    createOccurrenceService.mockResolvedValue();
    getPlaceInformationsByPlaceId.mockResolvedValue({ isFromBH: true, lat: 1, lng: 2 });
    NotificationListEvents.addNotification = jest.fn();
    CreateOccurrenceEvents.startCreateOccurrence = jest.fn();
    CreateOccurrenceEvents.createOccurrenceFailed = jest.fn();
    CreateOccurrenceEvents.createOccurrenceDone = jest.fn();

    await CreateOccurrenceUseCase(createOccurrenceCommand, successCallback);

    expect(CreateOccurrenceEvents.startCreateOccurrence).toHaveBeenCalledTimes(1);
    expect(CreateOccurrenceEvents.createOccurrenceDone).toHaveBeenCalledTimes(1);
    expect(CreateOccurrenceEvents.createOccurrenceFailed).toHaveBeenCalledTimes(0);

    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Ocorrência criada com sucesso',
      type: TypeNotification.SUCCESS,
    });
  });

  it('should run correctly when there is error that is not from bh', async () => {
    createOccurrenceService.mockRejectedValue({ message: '' });
    getPlaceInformationsByPlaceId.mockResolvedValue({ isFromBH: false, lat: 1, lng: 2 });
    NotificationListEvents.addNotification = jest.fn();
    CreateOccurrenceEvents.startCreateOccurrence = jest.fn();
    CreateOccurrenceEvents.createOccurrenceFailed = jest.fn();
    CreateOccurrenceEvents.createOccurrenceDone = jest.fn();

    await CreateOccurrenceUseCase(createOccurrenceCommand, successCallback);

    expect(CreateOccurrenceEvents.startCreateOccurrence).toHaveBeenCalledTimes(1);
    expect(CreateOccurrenceEvents.createOccurrenceFailed).toHaveBeenCalledTimes(1);
    expect(CreateOccurrenceEvents.createOccurrenceDone).toHaveBeenCalledTimes(0);

    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Não é possível criar ocorrências fora de Belo Horizonte',
      type: TypeNotification.ERROR,
    });
  });

  it('should run correctly when there is error', async () => {
    createOccurrenceService.mockRejectedValue({ message: '' });
    getPlaceInformationsByPlaceId.mockResolvedValue({ isFromBH: true, lat: 1, lng: 2 });
    NotificationListEvents.addNotification = jest.fn();
    CreateOccurrenceEvents.startCreateOccurrence = jest.fn();
    CreateOccurrenceEvents.createOccurrenceFailed = jest.fn();
    CreateOccurrenceEvents.createOccurrenceDone = jest.fn();

    await CreateOccurrenceUseCase(createOccurrenceCommand, successCallback);

    expect(CreateOccurrenceEvents.startCreateOccurrence).toHaveBeenCalledTimes(1);
    expect(CreateOccurrenceEvents.createOccurrenceFailed).toHaveBeenCalledTimes(1);
    expect(CreateOccurrenceEvents.createOccurrenceDone).toHaveBeenCalledTimes(0);

    expect(NotificationListEvents.addNotification).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.addNotification).toHaveBeenCalledWith({
      message: 'Erro durante a criação da ocorrência',
      type: TypeNotification.ERROR,
    });
  });
});
