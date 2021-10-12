import { useStoreMap } from 'effector-react';
import { Formik } from 'formik';
import React, { useCallback } from 'react';
import { date, object, string } from 'yup';
import FormikAutoCompletePlaces from '../../../../components/formikAutoCompletePlaces/FormikAutoCompletePlaces';
import FormikInputDate from '../../../../components/formikInputDate/FormikInputDate';
import FormikInputSelect from '../../../../components/formikInputSelect/FormikInputSelect';
import FormikInputText from '../../../../components/formikInputText/formikInputText';
import FormikInputTime from '../../../../components/formikInputTime/FormikInputTime';
import Modal from '../../../../components/modal/Modal';
import OriginEnum from '../../../../domains/OriginEnum';
import HomePageStore from '../../../../stores/homePage/HomePageStore';
import EditOccurrenceUseCase from '../../../../usecases/occurrences/EditOccurrenceUseCase';
import useCreateOccurrenceModalStyles from './EditOccorrenceModal.styles';

interface Props {
  occurrenceId: string;
  isOpen: boolean;
  onClose: () => void;
}

const types = ['Baixa Iluminação', 'Iluminação Inexistente', 'Assédio Sexual', 'Morte', 'Assalto'];
const origins = [
  { label: 'Fui vitima de uma situação', value: OriginEnum.FUI_VITIMA_DE_UMA_SITUACAO },
  { label: 'Testemunhei uma situação', value: OriginEnum.TESTEMUNHEI_UMA_SITUACAO },
  {
    label: 'Coletei uma situação do noticiario',
    value: OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO,
  },
];

const EditOccurrenceModal: React.FunctionComponent<Props> = ({ isOpen, onClose, occurrenceId }) => {
  const { container } = useCreateOccurrenceModalStyles();

  const occurrence = useStoreMap({
    store: HomePageStore,
    keys: [],
    fn: (state) => state.occurrences.find(({ id }) => occurrenceId === id),
  });

  const onSubmit = useCallback(
    (values, { setSubmitting }) => {
      const dateAux = new Date(values.date);
      const timeAux = new Date(values.time);

      const formattedDate = new Date();
      formattedDate.setDate(dateAux.getDate());
      formattedDate.setTime(timeAux.getTime());
      EditOccurrenceUseCase(occurrenceId, {
        authorName: 'Gustavo Sena',
        dateTime: formattedDate,
        description: values.description,
        placeId: values.address,
        type: values.occurrenceType,
        origin: origins.find((origin) => origin.label === values.occurrenceOrigin)
          ?.value as OriginEnum,
      });
      setSubmitting(false);
      onClose();
    },
    [onClose, occurrenceId]
  );

  return (
    <Formik
      initialValues={{
        date: occurrence?.dateTime,
        time: occurrence?.dateTime,
        address: occurrence?.location.address,
        description: occurrence?.description,
        occurrenceType: occurrence?.type,
        occurrenceOrigin: origins.find((origin) => origin.value === occurrence?.origin)?.label,
      }}
      validationSchema={object({
        date: date().required('Campo obrigatório').nullable(),
        time: string().required('Campo obrigatório').nullable(),
        address: string().required('Campo obrigatório'),
        description: string().required('Campo obrigatório'),
        occurrenceType: string().required('Campo obrigatório').nullable(),
        occurrenceOrigin: string().required('Campo obrigatório').nullable(),
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
              <FormikAutoCompletePlaces
                label="Endereço"
                name="address"
                required
                initialValue={occurrence?.location.address}
              />
              <FormikInputSelect
                label="Tipo da ocorrência"
                name="occurrenceType"
                required
                options={types}
              />
              <FormikInputSelect
                label="Origem"
                name="occurrenceOrigin"
                required
                options={origins.map((origin) => origin.label)}
              />
              <FormikInputText label="Descrição" name="description" required />
            </div>
          </Modal>
        );
      }}
    </Formik>
  );
};

export default EditOccurrenceModal;
