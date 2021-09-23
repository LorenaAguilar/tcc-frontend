import { Formik } from 'formik';
import React, { useCallback } from 'react';
import { date, object, string } from 'yup';
import FormikAutoCompletePlaces from '../../../../components/formikAutoCompletePlaces/FormikAutoCompletePlaces';
import FormikInputDate from '../../../../components/formikInputDate/FormikInputDate';
import FormikInputSelect from '../../../../components/formikInputSelect/FormikInputSelect';
import FormikInputText from '../../../../components/formikInputText/formikInputText';
import FormikInputTime from '../../../../components/formikInputTime/FormikInputTime';
import Modal from '../../../../components/modal/Modal';
import TypeNotification from '../../../../domains/Notification';
import { addNotification } from '../../../../stores/notificationList/NotificationListEvents';
import useCreateOccurrenceModalStyles from './CreateOccorrenceModal.styles';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateOccurrenceModal: React.FunctionComponent<Props> = ({ isOpen, onClose }) => {
  const { container } = useCreateOccurrenceModalStyles();

  const onSubmit = useCallback((values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    addNotification({
      message: 'Deu certo',
      type: TypeNotification.SUCCESS,
    });
    addNotification({
      message: 'Deu ERRADO',
      type: TypeNotification.ERROR,
    });
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
              <FormikInputDate label="Data" name="date" required />
              <FormikInputTime label="Hora" name="time" required />
              <FormikAutoCompletePlaces label="Endereço" name="address" required />
              <FormikInputSelect
                label="Tipo da ocorrência"
                name="occurrenceType"
                required
                options={['Teste1', 'Teste2', 'Teste3']}
              />
              <FormikInputText
                label="Especificação do tipo da ocorrência"
                name="occurrenceTypeDescription"
                required
              />
              <FormikInputText label="Descrição" name="description" required />
            </div>
          </Modal>
        );
      }}
    </Formik>
  );
};

export default CreateOccurrenceModal;
