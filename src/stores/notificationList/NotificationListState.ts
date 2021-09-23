import TypeNotification from '../../domains/Notification';

interface NotificationListState {
  notifications: Array<{ id: string; message: string; type: TypeNotification }>;
}

export default NotificationListState;
