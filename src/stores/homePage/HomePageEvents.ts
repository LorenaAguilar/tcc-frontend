import { createEvent } from 'effector';
import Occurrence from '../../domains/Occurrence';
import OriginEnum from '../../domains/OriginEnum';

export const startLoadOccurrences = createEvent('startLoadOccurrences');

export const loadOccurrencesDone =
  createEvent<{ occurrences: Array<Occurrence> }>('loadOccurrencesDone');

export const loadOccurrenceFailed = createEvent('loadOccurrenceFailed');

export const setSelectedOccurrence = createEvent<{ occurrenceId: string }>('setSelectedOccurrence');

export const cleanHomePageStore = createEvent('cleanHomePageStore');

export const onDeleteSuccess = createEvent<{ occurrenceId: string }>('onDeleteSuccess');

export const onEditSuccess = createEvent<{
  occurrenceId: string;
  occurrenceData: {
    authorName: string;
    dateTime: Date;
    description: string;
    address: string;
    lat: number;
    lng: number;
    type: string;
    origin: OriginEnum;
  };
}>('onEditSuccess');
