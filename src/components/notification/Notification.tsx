import { useStoreMap } from 'effector-react';
import React from 'react';
import { removeNotificationById } from '../../stores/notificationList/NotificationListEvents';
import NotificationListStore from '../../stores/notificationList/NotificationListStore';
import NotificationItem from './notificationItem/NotificationItem';

const duration = 5000;
const Notification: React.FunctionComponent = () => {
  const notifications = useStoreMap({
    store: NotificationListStore,
    keys: [],
    fn: (state) => state.notifications,
  });

  return (
    <>
      {notifications.length > 0 &&
        notifications.map((notification, index) => (
          <NotificationItem
            key={`notification-${notification.id}`}
            duration={duration}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotificationById(notification.id)}
            index={index}
          />
        ))}
    </>
  );
};

export default Notification;
