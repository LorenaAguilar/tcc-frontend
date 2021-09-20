import { Formik } from 'formik';
import React, { useCallback } from 'react';
import { object, string } from 'yup';
import FormikInputText from '../../../../components/formikInputText/formikInputText';
import Modal from '../../../../components/modal/Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateOccurrenceModal: React.FunctionComponent<Props> = ({ isOpen, onClose }) => {
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
        occurrenceDescription: string()
          .max(15, 'Esse campo deve possuir mais que 15 caracteres')
          .required('Campo obrigatório'),
        occurrenceType: string().required('Campo obrigatório'),
        occurrenceTypeDescription: string()
          .max(15, 'Esse campo deve possuir mais que 15 caracteres')
          .required('Campo obrigatório'),
      })}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Modal title="Criar ocorrência" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
          <FormikInputText label="Data" name="occurrenceDate" />
          <FormikInputText label="Hora" name="occurrenceTime" />
          <FormikInputText label="Endereço" name="occurrenceAddress" />
          <FormikInputText label="Tipo da ocorrência" name="occurrenceType" />
          <FormikInputText
            label="Especificação do tipo da ocorrência"
            name="occurrenceTypeDescription"
          />
          <FormikInputText label="Descrição" name="occurrenceDescription" />
        </Modal>
      )}
    </Formik>
  );
};

export default CreateOccurrenceModal;
