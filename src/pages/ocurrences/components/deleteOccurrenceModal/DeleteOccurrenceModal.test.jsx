import { Typography } from '@material-ui/core';
import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../../../../components/modal/Modal';
import DeleteOccurrenceUseCase from '../../../../usecases/occurrences/DeleteOccurrence';
import DeleteOccurrenceModal from './DeleteOccurrenceModal';

jest.mock('../../../../usecases/occurrences/DeleteOccurrence');

describe('DeleteOccurrenceModal', () => {
  const occurrenceIdDefault = '1';

  it('should render correctly', () => {
    const wrapper = shallow(<DeleteOccurrenceModal occurrenceId={occurrenceIdDefault} isOpen />);

    const expectedWrapper = (
      <Modal title="Criar ocorrência" isOpen labelCloseButton="Não" labelSubmitButton="Sim">
        <Typography component="p">Você deseja excluir essa ocorrência?</Typography>
      </Modal>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should handle onSubmit', () => {
    const onCloseMock = jest.fn();
    const wrapper = shallow(
      <DeleteOccurrenceModal occurrenceId={occurrenceIdDefault} isOpen onClose={onCloseMock} />
    );

    wrapper.find(Modal).invoke('onSubmit')();

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(onCloseMock).toHaveBeenCalledWith();
    expect(DeleteOccurrenceUseCase).toHaveBeenCalledTimes(1);
    expect(DeleteOccurrenceUseCase).toHaveBeenCalledWith(occurrenceIdDefault);
  });

  it('should handle onClose', () => {
    const onCloseMock = jest.fn();
    const wrapper = shallow(
      <DeleteOccurrenceModal occurrenceId={occurrenceIdDefault} isOpen onClose={onCloseMock} />
    );

    wrapper.find(Modal).invoke('onClose')();

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(onCloseMock).toHaveBeenCalledWith();
  });
});
