import { createStore } from 'effector';
import { cloneDeep } from 'lodash';
import { v4 } from 'uuid';
import {
  addNotification,
  cleanNotifications,
  removeNotificationById,
} from './NotificationListEvents';
import NotificationListState from './NotificationListState';

const initialState: NotificationListState = {
  notifications: [],
};

const NotificationListStore = createStore(initialState)
  .on(addNotification, (state, newNotification) => {
    const newState = cloneDeep(state);

    newState.notifications.push({ id: v4(), ...newNotification });

    return newState;
  })
  .on(removeNotificationById, (state, notificationId) => {
    const newState = cloneDeep(state);

    newState.notifications = newState.notifications.filter(({ id }) => id !== notificationId);

    return newState;
  })
  .reset(cleanNotifications);

export default NotificationListStore;
