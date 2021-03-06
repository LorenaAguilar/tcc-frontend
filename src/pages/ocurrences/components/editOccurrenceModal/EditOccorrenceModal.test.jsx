import { useStoreMap } from 'effector-react';
import { shallow } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import FormikAutoCompletePlaces from '../../../../components/formikAutoCompletePlaces/FormikAutoCompletePlaces';
import FormikInputDate from '../../../../components/formikInputDate/FormikInputDate';
import FormikInputSelect from '../../../../components/formikInputSelect/FormikInputSelect';
import FormikInputText from '../../../../components/formikInputText/formikInputText';
import FormikInputTime from '../../../../components/formikInputTime/FormikInputTime';
import Modal from '../../../../components/modal/Modal';
import OriginEnum from '../../../../domains/OriginEnum';
import HomePageStore from '../../../../stores/homePage/HomePageStore';
import useEditOccorrenceModalStyles from './EditOccorrenceModal.styles';
import EditOccorrenceModal from './EditOccurrenceModal';

jest.mock('./EditOccorrenceModal.styles');
jest.mock('effector-react');
mockUseStyles(useEditOccorrenceModalStyles, ['container']);

describe('EditOccorrenceModal', () => {
  it('should render correctly the formik correctly', () => {
    const wrapper = shallow(<EditOccorrenceModal />);

    const expectedProps = {
      initialValues: {
        date: undefined,
        time: undefined,
        address: undefined,
        description: undefined,
        occurrenceType: undefined,
        occurrenceOrigin: undefined,
      },
      validationSchema: {},
    };
    expect(wrapper.type()).toBe(Formik);
    expect(wrapper.props()).toMatchObject(expectedProps);
  });

  it('should handle the onSubmit', () => {
    const mockedOnClose = jest.fn();
    const wrapper = shallow(<EditOccorrenceModal onClose={mockedOnClose} />);
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

    const wrapper = shallow(<EditOccorrenceModal onClose={mockedOnClose} isOpen={mockedIsOpen} />)
      .find(Formik)
      .renderProp('children')(mockedFormikProps);

    const expectedWrapper = (
      <Modal
        title="Criar ocorr??ncia"
        isOpen={mockedIsOpen}
        hasDividers
        onSubmit={mockedFormikProps.handleSubmit}
      >
        <div className="container">
          <FormikInputDate label="Data" name="date" required />
          <FormikInputTime label="Hora" name="time" required />
          <FormikAutoCompletePlaces label="Endere??o" name="address" required />
          <FormikInputSelect
            label="Tipo da ocorr??ncia"
            name="occurrenceType"
            required
            options={['Teste1', 'Teste2', 'Teste3']}
          />
          <FormikInputText
            label="Especifica????o do tipo da ocorr??ncia"
            name="occurrenceTypeDescription"
            required
          />
          <FormikInputText label="Descri????o" name="description" required />
        </div>
      </Modal>
    );

    // expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
  it('should handle the onClose', () => {
    const mockedOnClose = jest.fn();
    const mockedIsOpen = true;
    const mockedFormikProps = { handleSubmit: jest.fn(), resetForm: jest.fn() };

    const wrapper = shallow(<EditOccorrenceModal onClose={mockedOnClose} isOpen={mockedIsOpen} />)
      .find(Formik)
      .renderProp('children')(mockedFormikProps);

    wrapper.invoke('onClose')();

    expect(mockedOnClose).toHaveBeenCalledTimes(1);
    expect(mockedOnClose).toHaveBeenCalledWith();
    expect(mockedFormikProps.resetForm).toHaveBeenCalledTimes(1);
    expect(mockedFormikProps.resetForm).toHaveBeenCalledWith();
  });

  it('should select the correct values from the store', () => {
    const occurrence = {
      id: '1',
      location: { lat: 1, lng: 2, address: 'address' },
      dateTime: new Date(),
      origin: OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO,
      description: 'description',
    };
    const mockedHomePageDefaultState = {
      occurrences: [occurrence],
    };
    shallow(<EditOccorrenceModal occurrenceId="1" />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(HomePageStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(mockedHomePageDefaultState)).toEqual(
      mockedHomePageDefaultState.occurrences[0]
    );
  });
});
