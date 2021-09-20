import React, { useState } from 'react';
import Container from '../../components/container/container';
import CreateOccurrenceModal from './components/createOccurrenceModal/CreateOccurrenceModal';

const OccurrencesPage: React.FunctionComponent = () => {
  const [isCreateOccurrenceModalOpen, setIsCreateOccurrenceModalOpen] = useState<boolean>(false);
  return (
    <Container>
      <CreateOccurrenceModal
        isOpen={isCreateOccurrenceModalOpen}
        onClose={() => setIsCreateOccurrenceModalOpen(false)}
      />
      <button type="button" onClick={() => setIsCreateOccurrenceModalOpen(true)}>
        Criar
      </button>
    </Container>
  );
};

export default OccurrencesPage;
