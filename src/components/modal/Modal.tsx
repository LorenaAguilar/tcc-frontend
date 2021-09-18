import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useModalStyles from './Modal.styles';

interface Props {
  title: string;
  isOpen: boolean;
  labelCloseButton?: string;
  onClose: () => void;
  labelSubmitButton?: string;
  onSubmit: () => void;
  hasDividers?: boolean;
}

const Modal: React.FunctionComponent<Props> = ({
  onClose,
  isOpen,
  onSubmit,
  hasDividers,
  children,
  title,
  labelCloseButton = 'Cancelar',
  labelSubmitButton = 'Salvar',
}) => {
  const { titleStyle } = useModalStyles();

  return (
    <Dialog onClose={onClose} fullWidth open={isOpen}>
      <DialogTitle>
        <Typography className={titleStyle}> {title}</Typography>
      </DialogTitle>
      <DialogContent dividers={hasDividers}>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{labelCloseButton}</Button>
        <Button onClick={onSubmit}>{labelSubmitButton}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
