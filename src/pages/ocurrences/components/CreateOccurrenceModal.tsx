import React from 'react';
import Modal from '../../../components/modal/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateOccurrenceModal: React.FunctionComponent<Props> = ({ isOpen, onClose }) => {
  console.log('oi');
  return (
    <Modal
      title="Criar ocorrência"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => alert('você clicou no criar')}
    >
      <h2> Testes </h2>
    </Modal>
  );
};

export default CreateOccurrenceModal;
