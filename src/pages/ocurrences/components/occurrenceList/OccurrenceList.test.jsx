import { useStoreMap } from 'effector-react';
import { shallow } from 'enzyme';
import React from 'react';
import OriginEnum from '../../../../domains/OriginEnum';
import HomePageStore from '../../../../stores/homePage/HomePageStore';
import OccurrenceList from './OccurrenceList';
import OccurrenceListItem from './occurrenceListItem/OccurrenceListItem';

jest.mock('effector-react');

describe('OccurrenceList', () => {
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
    useStoreMap.mockReturnValueOnce(mockedHomePageDefaultState.userOccurrences);

    const wrapper = shallow(<OccurrenceList />);

    const expectedWrapper = (
      <>
        <OccurrenceListItem
          occurrenceId={occurrence.id}
          key={`occurrence-${occurrence.id}:${occurrence.location.lat}-${occurrence.location.lng}`}
        />
      </>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should select the correct values from the store', () => {
    useStoreMap.mockReturnValueOnce(mockedHomePageDefaultState.userOccurrences);

    shallow(<OccurrenceList />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(HomePageStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(mockedHomePageDefaultState)).toEqual(
      mockedHomePageDefaultState.userOccurrences
    );
  });
});
