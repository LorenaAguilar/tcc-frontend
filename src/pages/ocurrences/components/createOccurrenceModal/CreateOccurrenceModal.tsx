import { Formik } from 'formik';
import React, { useCallback } from 'react';
import { object, string } from 'yup';
import AutoCompletePlaces from '../../../../components/formikAutoCompletePlaces/FormikAutoCompletePlaces';
import FormikInputSelect from '../../../../components/formikInputSelect/FormikInputSelect';
import FormikInputText from '../../../../components/formikInputText/formikInputText';
import Modal from '../../../../components/modal/Modal';
import useCreateOccurrenceModalStyles from './CreateOccorrenceModal.styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateOccurrenceModal: React.FunctionComponent<Props> = ({ isOpen, onClose }) => {
  const { container } = useCreateOccurrenceModalStyles();

  const onSubmit = useCallback((values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, []);

  return (
    <Formik
      initialValues={{
        occurrenceDate: '',
        occurrenceTime: '',
        occurrenceAddress: '',
        occurrenceDescription: '',
        occurrenceType: '',
        occurrenceTypeDescription: '',
      }}
      validationSchema={object({
        occurrenceDate: string().required('Campo obrigatório'),
        occurrenceTime: string().required('Campo obrigatório'),
        occurrenceAddress: string().required('Campo obrigatório'),
        occurrenceDescription: string().required('Campo obrigatório'),
        occurrenceType: string().required('Campo obrigatório').nullable(),
        occurrenceTypeDescription: string().required('Campo obrigatório'),
      })}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, resetForm }) => {
        const handleClose = () => {
          onClose();
          resetForm();
        };

        return (
          <Modal
            title="Criar ocorrência"
            isOpen={isOpen}
            onClose={handleClose}
            hasDividers
            onSubmit={handleSubmit}
          >
            <div className={container}>
              <FormikInputText label="Data" name="occurrenceDate" />
              <FormikInputText label="Hora" name="occurrenceTime" />
              <AutoCompletePlaces label="Endereço" name="occurrenceAddress" />
              <FormikInputSelect
                label="Tipo da ocorrência"
                name="occurrenceType"
                options={['Teste1', 'Teste2', 'Teste3']}
              />
              <FormikInputText
                label="Especificação do tipo da ocorrência"
                name="occurrenceTypeDescription"
              />
              <FormikInputText label="Descrição" name="occurrenceDescription" />
            </div>
          </Modal>
        );
      }}
    </Formik>
  );
};

export default CreateOccurrenceModal;
