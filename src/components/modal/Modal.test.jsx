import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { shallow } from 'enzyme';
import React from 'react';
import Modal from './Modal';
import useModalStyles from './Modal.styles';

jest.mock('./Modal.styles');

mockUseStyles(useModalStyles, ['titleStyle']);

describe('Modal', () => {
  it('should render correctly', () => {
    const mockedProps = {
      isOpen: true,
      onClose: jest.fn(),
      onSubmit: jest.fn(),
      children: <div>test</div>,
      title: 'title',
    };
    const wrapper = shallow(<Modal {...mockedProps} />);

    const expectedWrapper = (
      <Dialog onClose={mockedProps.onClose} fullWidth open={mockedProps.isOpen}>
        <DialogTitle>
          <Typography className="titleStyle"> {mockedProps.title}</Typography>
        </DialogTitle>
        <DialogContent>{mockedProps.children}</DialogContent>
        <DialogActions>
          <Button onClick={mockedProps.onClose}>Cancelar</Button>
          <Button onClick={mockedProps.onSubmit}>Salvar</Button>
        </DialogActions>
      </Dialog>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render correctly with optional props', () => {
    const mockedProps = {
      isOpen: true,
      onClose: jest.fn(),
      onSubmit: jest.fn(),
      children: <div>test</div>,
      title: 'title',
      labelCloseButton: 'close test',
      labelSubmitButton: 'Submit test',
      hasDividers: true,
    };
    const wrapper = shallow(<Modal {...mockedProps} />);

    const expectedWrapper = (
      <Dialog onClose={mockedProps.onClose} fullWidth open={mockedProps.isOpen}>
        <DialogTitle>
          <Typography className="titleStyle"> {mockedProps.title}</Typography>
        </DialogTitle>
        <DialogContent dividers={mockedProps.hasDividers}>{mockedProps.children}</DialogContent>
        <DialogActions>
          <Button onClick={mockedProps.onClose}> {mockedProps.labelCloseButton}</Button>
          <Button onClick={mockedProps.onSubmit}> {mockedProps.labelSubmitButton}</Button>
        </DialogActions>
      </Dialog>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
