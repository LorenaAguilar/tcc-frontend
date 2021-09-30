import { IconButton, Snackbar } from '@material-ui/core';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { CheckCircle, Error as MaterialError } from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect, useMemo, useState } from 'react';
import TypeNotification from '../../../domains/Notification';
import useNotificationViewStyle from './NotificationItem.styles';

interface Props {
  message: string;
  type: TypeNotification;
  onClose: () => void;
  duration: number;
  index: number;
}

export default function NotificationItemView({
  message,
  type,
  onClose,
  duration,
  index,
}: Props): JSX.Element {
  const classes = useNotificationViewStyle({ index });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderIcon = useMemo(() => {
    switch (type) {
      case 'SUCCESS':
        return <CheckCircle className={classes.icon} />;
      case 'ERROR':
        return <MaterialError className={classes.icon} />;
      default:
        return null;
    }
  }, [type, classes]);

  useEffect(() => {
    const TIME_TO_DISPLAY = duration;
    const TIME_TO_AUTO_CLOSE = duration + 1000;
    setTimeout(() => {
      setIsOpen(true);
    }, TIME_TO_DISPLAY * (index - 1));

    setTimeout(() => {
      onClose();
    }, TIME_TO_AUTO_CLOSE + TIME_TO_DISPLAY * (index - 1));
  });

  const SnackbarContentClassName = useMemo(() => {
    switch (type) {
      case 'SUCCESS':
        return `${classes.content} ${classes.SUCCESS}`;
      case 'ERROR':
        return `${classes.content} ${classes.ERROR}`;
      default:
        return classes.content;
    }
  }, [type, classes]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={message}
      classes={{ root: classes.root }}
      open={isOpen}
    >
      <SnackbarContent
        className={SnackbarContentClassName}
        message={
          <>
            {renderIcon}
            {message}
          </>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
}
