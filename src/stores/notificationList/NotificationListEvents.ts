import { createEvent } from 'effector';
import TypeNotification from '../../domains/Notification';

export const addNotification =
  createEvent<{ message: string; type: TypeNotification }>('addNotification');

export const removeNotificationById = createEvent<string>('removeNotification');

export const cleanNotifications = createEvent('cleanNotifications');
