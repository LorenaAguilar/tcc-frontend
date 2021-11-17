import { IconButton, Snackbar } from '@material-ui/core';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { CheckCircle, Error as MaterialError } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import { shallow } from 'enzyme';
import React from 'react';
import TypeNotification from '../../../domains/Notification';
import NotificationItemView from './NotificationItem';
import useNotificationViewStyle from './NotificationItem.styles';

jest.mock('./NotificationItem.styles');

mockUseStyles(useNotificationViewStyle, ['content', 'SUCCESS', 'ERROR', 'close', 'icon', 'root']);

describe('NotificationItemView', () => {
  const defaultProps = {
    message: 'message',
    type: TypeNotification.ERROR,
    onClose: jest.fn(),
    duration: 200,
    index: 1,
  };

  it('should render correctly when type is error', () => {
    const wrapper = shallow(
      <NotificationItemView {...defaultProps} type={TypeNotification.ERROR} />
    );

    const expectedWrapper = (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={defaultProps.message}
        classes={{ root: 'root' }}
        open={false}
      >
        <SnackbarContent
          message={
            <>
              <MaterialError className="icon" />
              {defaultProps.message}
            </>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              className="close"
              onClick={defaultProps.onClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render correctly when type is success', () => {
    const wrapper = shallow(
      <NotificationItemView {...defaultProps} type={TypeNotification.SUCCESS} />
    );

    const expectedWrapper = (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={defaultProps.message}
        classes={{ root: 'root' }}
        open={false}
      >
        <SnackbarContent
          message={
            <>
              <CheckCircle className="icon" />
              {defaultProps.message}
            </>
          }
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              className="close"
              onClick={defaultProps.onClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
