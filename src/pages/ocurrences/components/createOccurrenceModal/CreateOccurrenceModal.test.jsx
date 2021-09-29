import { shallow } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import FormikAutoCompletePlaces from '../../../../components/formikAutoCompletePlaces/FormikAutoCompletePlaces';
import FormikInputDate from '../../../../components/formikInputDate/FormikInputDate';
import FormikInputSelect from '../../../../components/formikInputSelect/FormikInputSelect';
import FormikInputText from '../../../../components/formikInputText/formikInputText';
import FormikInputTime from '../../../../components/formikInputTime/FormikInputTime';
import Modal from '../../../../components/modal/Modal';
import useCreateOccurrenceModalStyles from './CreateOccorrenceModal.styles';
import CreateOccurrenceModal from './CreateOccurrenceModal';

jest.mock('./CreateOccorrenceModal.styles');
mockUseStyles(useCreateOccurrenceModalStyles, ['container']);

describe('CreateOccurrenceModal', () => {
  it('should render correctly the formik correctly', () => {
    const wrapper = shallow(<CreateOccurrenceModal />);

    const expectedProps = {
      initialValues: {
        date: '',
        time: '',
        address: '',
        description: '',
        occurrenceType: '',
        occurrenceTypeDescription: '',
      },
      validationSchema: {},
    };
    expect(wrapper.type()).toBe(Formik);
    expect(wrapper.props()).toMatchObject(expectedProps);
  });

  it('should handle the onSubmit', () => {
    const wrapper = shallow(<CreateOccurrenceModal />);
    const values = {
      date: 'date',
      time: 'time',
      address: 'address',
      description: 'description',
      occurrenceType: 'occurrenceType',
      occurrenceTypeDescription: 'occurrenceTypeDescription',
    };
    const mockedSetSubmitting = jest.fn();

    wrapper.find(Formik).invoke('onSubmit')(values, { setSubmitting: mockedSetSubmitting });

    expect(mockedSetSubmitting).toHaveBeenCalledTimes(1);
    expect(mockedSetSubmitting).toHaveBeenCalledWith(false);
  });

  it('should render the form correctly', () => {
    const mockedOnClose = jest.fn();
    const mockedIsOpen = true;
    const mockedFormikProps = { handleSubmit: jest.fn(), resetForm: jest.fn() };

    const wrapper = shallow(<CreateOccurrenceModal onClose={mockedOnClose} isOpen={mockedIsOpen} />)
      .find(Formik)
      .renderProp('children')(mockedFormikProps);

    const expectedWrapper = (
      <Modal
        title="Criar ocorrência"
        isOpen={mockedIsOpen}
        hasDividers
        onSubmit={mockedFormikProps.handleSubmit}
      >
        <div className="container">
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

    // expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
  it('should handle the onClose', () => {
    const mockedOnClose = jest.fn();
    const mockedIsOpen = true;
    const mockedFormikProps = { handleSubmit: jest.fn(), resetForm: jest.fn() };

    const wrapper = shallow(<CreateOccurrenceModal onClose={mockedOnClose} isOpen={mockedIsOpen} />)
      .find(Formik)
      .renderProp('children')(mockedFormikProps);

    wrapper.invoke('onClose')();

    expect(mockedOnClose).toHaveBeenCalledTimes(1);
    expect(mockedOnClose).toHaveBeenCalledWith();
    expect(mockedFormikProps.resetForm).toHaveBeenCalledTimes(1);
    expect(mockedFormikProps.resetForm).toHaveBeenCalledWith();
  });
});
