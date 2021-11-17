import { v4 } from 'uuid';
import TypeNotification from '../../domains/Notification';
import {
  addNotification,
  cleanNotifications,
  removeNotificationById,
} from './NotificationListEvents';
import NotificationListStore from './NotificationListStore';

jest.mock('uuid');

describe('NotificationListStore', () => {
  describe('addNotification', () => {
    it('should addNotification', () => {
      const initialState = {
        notifications: [],
      };
      NotificationListStore.setState(initialState);
      v4.mockReturnValueOnce('1');

      const newNotification = { message: 'message', type: TypeNotification.ERROR };
      addNotification(newNotification);

      expect(NotificationListStore.getState()).toEqual({
        notifications: [{ id: '1', ...newNotification }],
      });
    });
  });

  describe('removeNotificationById', () => {
    it('should removeNotificationById', () => {
      const initialState = {
        notifications: [{ id: '1' }],
      };
      NotificationListStore.setState(initialState);

      removeNotificationById('1');

      expect(NotificationListStore.getState()).toEqual({ notifications: [] });
    });
  });

  describe('cleanNotifications', () => {
    it('should cleanNotifications', () => {
      const initialState = {
        notifications: [{ id: '1' }],
      };
      NotificationListStore.setState(initialState);

      cleanNotifications();

      expect(NotificationListStore.getState()).toEqual({ notifications: [] });
    });
  });
});
