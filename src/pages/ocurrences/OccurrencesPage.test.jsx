import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useStoreMap } from 'effector-react';
import { shallow } from 'enzyme';
import React from 'react';
import UserStore from '../../stores/user/UserStore';
import ListUserOccurrencesUseCase from '../../usecases/occurrences/listOccurrences/listUserOccurrencesUseCase';
import Login from '../login/LoginPage';
import CreateOccurrenceModal from './components/createOccurrenceModal/CreateOccurrenceModal';
import OccurrenceList from './components/occurrenceList/OccurrenceList';
import OccurrencesPage from './OcurrencesPage';
import OcurrencesPageStyle from './OcurrencesPage.style';

jest.mock('./OcurrencesPage.style');
jest.mock('effector-react');
jest.mock('../../usecases/occurrences/listOccurrences/listUserOccurrencesUseCase');

mockUseStyles(OcurrencesPageStyle, [
  'container',
  'content',
  'button',
  'header',
  'notLogged',
  'notLoggedButton',
]);

describe('OccurrencesPage', () => {
  const UserLoggedState = { token: 'token' };
  const UserNotLoggedState = { token: undefined };

  it('should render correctly when the user is logged', () => {
    useStoreMap.mockReturnValueOnce(UserLoggedState.token);

    const wrapper = shallow(<OccurrencesPage />);

    const expectedWrapper = (
      <main className="container">
        <CreateOccurrenceModal isOpen={false} />
        <>
          <header className="header">
            <Typography variant="h2">Ocorrências cadastradas</Typography>
            <Button className="button" variant="contained" color="secondary" size="large">
              Criar ocorrência
            </Button>
          </header>
          <div className="content">
            <OccurrenceList />
          </div>
        </>
        <Login isOpen={false} />
      </main>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render correctly when the user is not logged', () => {
    useStoreMap.mockReturnValueOnce(UserNotLoggedState.token);

    const wrapper = shallow(<OccurrencesPage />);

    const expectedWrapper = (
      <main className="container">
        <CreateOccurrenceModal isOpen={false} />
        <div className="notLogged">
          <Typography variant="h2">
            Atenção! Realize o<Button className="notLoggedButton">login</Button>
            para visualizar e cadastrar ocorrências.
          </Typography>
        </div>
        <Login isOpen={false} />
      </main>
    );

    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should handle listOccurrenceUseCase', () => {
    useStoreMap.mockReturnValueOnce(UserLoggedState.token);

    shallow(<OccurrencesPage />);

    expect(ListUserOccurrencesUseCase).toHaveBeenCalledTimes(1);
    expect(ListUserOccurrencesUseCase).toHaveBeenCalledWith();
  });

  it('should select the correct values from the HomePageStore', () => {
    useStoreMap.mockReturnValueOnce(UserLoggedState.token);

    shallow(<OccurrencesPage />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(UserStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(UserLoggedState)).toEqual(UserLoggedState.token);
  });
});
