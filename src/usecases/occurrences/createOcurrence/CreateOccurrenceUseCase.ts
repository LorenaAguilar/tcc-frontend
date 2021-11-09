import TypeNotification from '../../../domains/Notification';
import CreateOccurrenceCommand from '../../../domains/usecases/CreateOccurrenceCommand';
import getPlaceInformationsByPlaceId from '../../../services/google/getPlaceInformationsByPlaceId';
import createOccurrence from '../../../services/occurrences/createOccurrence';
import {
  createOccurrenceDone,
  createOccurrenceFailed,
  startCreateOccurrence,
} from '../../../stores/createOccurrence/CreateOccurrenceEvents';
import { addNotification } from '../../../stores/notificationList/NotificationListEvents';

const CreateOccurrenceUseCase = async (
  createOccurrenceCommand: CreateOccurrenceCommand,
  successCallback: () => void
): Promise<void> => {
  startCreateOccurrence();
  try {
    const location = await getPlaceInformationsByPlaceId(createOccurrenceCommand.placeId);
    if (location) {
      if (location?.isFromBH && location.lat && location.lng) {
        await createOccurrence({
          authorName: createOccurrenceCommand.authorName,
          dateTime: createOccurrenceCommand.dateTime,
          description: createOccurrenceCommand.description,
          address: location.address,
          lat: location.lat,
          lng: location.lng,
          type: createOccurrenceCommand.type,
          origin: createOccurrenceCommand.origin,
        });
        createOccurrenceDone();
        addNotification({
          message: 'Ocorrência criada com sucesso',
          type: TypeNotification.SUCCESS,
        });
        successCallback();
      } else if (!location.isFromBH) {
        throw new Error('NOT_IN_BH');
      }
    }
  } catch (error) {
    createOccurrenceFailed();
    const errorMessage =
      (error as { message: string }).message === 'NOT_IN_BH'
        ? 'Não é possível criar ocorrências fora de Belo Horizonte'
        : 'Erro durante a criação da ocorrência';

    addNotification({
      message: errorMessage,
      type: TypeNotification.ERROR,
    });
  }
};

export default CreateOccurrenceUseCase;
