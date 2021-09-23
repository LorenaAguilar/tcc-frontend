import { Formik } from 'formik';
import React, { useCallback } from 'react';
import { date, object, string } from 'yup';
import FormikAutoCompletePlaces from '../../../../components/formikAutoCompletePlaces/FormikAutoCompletePlaces';
import FormikInputDate from '../../../../components/formikInputDate/FormikInputDate';
import FormikInputSelect from '../../../../components/formikInputSelect/FormikInputSelect';
import FormikInputText from '../../../../components/formikInputText/formikInputText';
import FormikInputTime from '../../../../components/formikInputTime/FormikInputTime';
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
        date: '',
        time: '',
        address: '',
        description: '',
        occurrenceType: '',
        occurrenceTypeDescription: '',
      }}
      validationSchema={object({
        date: date().required('Campo obrigatório').nullable(),
        time: string().required('Campo obrigatório'),
        address: string().required('Campo obrigatório'),
        description: string().required('Campo obrigatório'),
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
              <FormikInputDate label="Data" name="date" />
              <FormikInputTime label="Hora" name="time" />
              <FormikAutoCompletePlaces label="Endereço" name="address" />
              <FormikInputSelect
                label="Tipo da ocorrência"
                name="occurrenceType"
                options={['Teste1', 'Teste2', 'Teste3']}
              />
              <FormikInputText
                label="Especificação do tipo da ocorrência"
                name="occurrenceTypeDescription"
              />
              <FormikInputText label="Descrição" name="description" />
            </div>
          </Modal>
        );
      }}
    </Formik>
  );
};

export default CreateOccurrenceModal;
