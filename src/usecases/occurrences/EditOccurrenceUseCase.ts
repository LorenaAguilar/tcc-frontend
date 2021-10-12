import TypeNotification from '../../domains/Notification';
import CreateOccurrenceCommand from '../../domains/usecases/CreateOccurrenceCommand';
import getPlaceInformationsByPlaceId from '../../services/google/getPlaceInformationsByPlaceId';
import editOccurrence from '../../services/occurrences/editOccurrence';
import { onEditSuccess } from '../../stores/homePage/HomePageEvents';
import { addNotification } from '../../stores/notificationList/NotificationListEvents';

const EditOccurrenceUseCase = async (
  occurrenceId: string,
  createOccurrenceCommand: CreateOccurrenceCommand
): Promise<void> => {
  try {
    const location = await getPlaceInformationsByPlaceId(createOccurrenceCommand.placeId);
    if (location === null) {
      throw new Error('Location do not found');
    }
    const occurrenceData = {
      authorName: createOccurrenceCommand.authorName,
      dateTime: createOccurrenceCommand.dateTime,
      description: createOccurrenceCommand.description,
      address: location.address,
      lat: location.lat,
      lng: location.lng,
      type: createOccurrenceCommand.type,
      origin: createOccurrenceCommand.origin,
    };

    await editOccurrence(occurrenceId, occurrenceData);
    onEditSuccess({ occurrenceId, occurrenceData });
    addNotification({
      message: 'Ocorrência editada com sucesso',
      type: TypeNotification.SUCCESS,
    });
  } catch (error) {
    addNotification({
      message: 'Erro durante a edição da ocorrência',
      type: TypeNotification.ERROR,
    });
  }
};

export default EditOccurrenceUseCase;
