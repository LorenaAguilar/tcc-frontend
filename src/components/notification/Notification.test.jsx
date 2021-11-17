import { useStoreMap } from 'effector-react';
import { shallow } from 'enzyme';
import React from 'react';
import TypeNotification from '../../domains/Notification';
import * as NotificationListEvents from '../../stores/notificationList/NotificationListEvents';
import NotificationListStore from '../../stores/notificationList/NotificationListStore';
import Notification from './Notification';
import NotificationItem from './notificationItem/NotificationItem';

jest.mock('effector-react');

describe('Notification', () => {
  const mockedNotificationListState = {
    notifications: [{ id: '1', message: 'message', type: TypeNotification.SUCCESS }],
  };
  it('should render correcly', () => {
    useStoreMap.mockReturnValueOnce(mockedNotificationListState.notifications);

    const wrapper = shallow(<Notification />);

    const expectedWrapper = (
      <>
        <NotificationItem
          key={`notification-${mockedNotificationListState.notifications[0].id}`}
          duration={5000}
          message={mockedNotificationListState.notifications[0].message}
          type={mockedNotificationListState.notifications[0].type}
          index={0}
        />
      </>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should handle onClose correcly', () => {
    useStoreMap.mockReturnValueOnce(mockedNotificationListState.notifications);
    NotificationListEvents.removeNotificationById = jest.fn();
    const wrapper = shallow(<Notification />);

    wrapper.find(NotificationItem).at(0).invoke('onClose')();

    expect(NotificationListEvents.removeNotificationById).toHaveBeenCalledTimes(1);
    expect(NotificationListEvents.removeNotificationById).toHaveBeenCalledWith(
      mockedNotificationListState.notifications[0].id
    );
  });

  it('should select the correct values from the store', () => {
    useStoreMap.mockReturnValueOnce(mockedNotificationListState.notifications);

    shallow(<Notification />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(NotificationListStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(mockedNotificationListState)).toEqual(
      mockedNotificationListState.notifications
    );
  });
});
