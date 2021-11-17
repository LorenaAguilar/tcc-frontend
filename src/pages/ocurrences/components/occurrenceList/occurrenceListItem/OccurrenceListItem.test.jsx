import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { useStoreMap } from 'effector-react';
import { shallow } from 'enzyme';
import React from 'react';
import OriginEnum from '../../../../../domains/OriginEnum';
import HomePageStore from '../../../../../stores/homePage/HomePageStore';
import DeleteOccurrenceModal from '../../deleteOccurrenceModal/DeleteOccurrenceModal';
import EditOccurrenceModal from '../../editOccurrenceModal/EditOccurrenceModal';
import OccurrenceListItem from './OccurrenceListItem';
import useOccurrenceListItemStyles from './OccurrenceListItem.styles';

jest.mock('effector-react');
jest.mock('./OccurrenceListItem.styles');

mockUseStyles(useOccurrenceListItemStyles, [
  'root',
  'formattedText',
  'centerContent',
  'contentCard',
  'title',
]);

describe('OccurrenceListItem', () => {
  const occurrenceIdDefault = '1';
  const occurrence = {
    id: occurrenceIdDefault,
    location: { lat: 1, lng: 2, address: 'address' },
    dateTime: new Date(),
    origin: OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO,
    description: 'description',
  };
  const mockedHomePageDefaultState = {
    userOccurrences: [occurrence],
  };

  it('should render correctly', () => {
    useStoreMap.mockReturnValueOnce(mockedHomePageDefaultState.userOccurrences[0]);

    const wrapper = shallow(<OccurrenceListItem occurrenceId={occurrenceIdDefault} />);

    const expectedWrapper = (
      <Card className="root">
        <CardHeader />
        <CardContent className="contentCard">
          <Typography component="p">
            <b>Tipo: </b>
            {occurrence.type}
          </Typography>
          <Typography component="p">
            <b>Origem: </b>
            Coletei do noticiário
          </Typography>
          <Typography component="p">
            <b>Descrição da ocorrência: </b>
            {occurrence.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing />
        <DeleteOccurrenceModal isOpen={false} occurrenceId={occurrence.id} />
        <EditOccurrenceModal isOpen={false} occurrenceId={occurrence.id} />
      </Card>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render when dont found occurrence correctly', () => {
    useStoreMap.mockReturnValueOnce(null);

    const wrapper = shallow(<OccurrenceListItem occurrenceId={occurrenceIdDefault} />);

    expect(wrapper.matchesElement(null)).toBe(true);
  });

  it('should select the correct values from the store', () => {
    shallow(<OccurrenceListItem occurrenceId={occurrenceIdDefault} />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(HomePageStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(mockedHomePageDefaultState)).toEqual(
      mockedHomePageDefaultState.userOccurrences[0]
    );
  });

  test.each`
    originEnum                                       | formattedOrigin
    ${OriginEnum.FUI_VITIMA_DE_UMA_SITUACAO}         | ${'Fui vítima'}
    ${OriginEnum.COLETEI_UMA_SITUACAO_DO_NOTICIARIO} | ${'Coletei do noticiário'}
    ${OriginEnum.TESTEMUNHEI_UMA_SITUACAO}           | ${'Testemunhei'}
    ${null}                                          | ${'Origem desconhecida'}
  `(
    'should render correctly when the origin is $formattedOrigin',
    ({ formattedOrigin, originEnum }) => {
      useStoreMap.mockReturnValueOnce({
        ...mockedHomePageDefaultState.userOccurrences[0],
        origin: originEnum,
      });

      const wrapper = shallow(<OccurrenceListItem occurrenceId={occurrenceIdDefault} />);

      const expectedWrapper = (
        <Card className="root">
          <CardHeader />
          <CardContent className="contentCard">
            <Typography component="p">
              <b>Tipo: </b>
              {occurrence.type}
            </Typography>
            <Typography component="p">
              <b>Origem: </b>
              {formattedOrigin}
            </Typography>
            <Typography component="p">
              <b>Descrição da ocorrência: </b>
              {occurrence.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing />
          <DeleteOccurrenceModal isOpen={false} occurrenceId={occurrence.id} />
          <EditOccurrenceModal isOpen={false} occurrenceId={occurrence.id} />
        </Card>
      );
      expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
    }
  );
});
