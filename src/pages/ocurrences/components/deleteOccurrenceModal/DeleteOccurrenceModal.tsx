import { Typography } from '@material-ui/core';
import React, { useCallback } from 'react';
import Modal from '../../../../components/modal/Modal';
import DeleteOccurrenceUseCase from '../../../../usecases/occurrences/DeleteOccurrence';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  occurrenceId: string;
}

const CreateOccurrenceModal: React.FunctionComponent<Props> = ({
  isOpen,
  onClose,
  occurrenceId,
}) => {
  const onSubmit = useCallback(() => {
    DeleteOccurrenceUseCase(occurrenceId);
    onClose();
  }, [occurrenceId, onClose]);

  return (
    <Modal
      title="Criar ocorrência"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      labelCloseButton="Não"
      labelSubmitButton="Sim"
    >
      <Typography component="p">Você deseja excluir essa ocorrência?</Typography>
    </Modal>
  );
};

export default CreateOccurrenceModal;
