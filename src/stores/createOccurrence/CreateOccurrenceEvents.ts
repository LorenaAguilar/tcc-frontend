import { createEvent } from 'effector';

export const startCreateOccurrence = createEvent('startCreateOccurrence');

export const createOccurrenceDone = createEvent('createOccurrenceDone');

export const createOccurrenceFailed = createEvent('createOccurrenceFailed');
