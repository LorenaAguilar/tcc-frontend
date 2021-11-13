import Box from '@material-ui/core/Box';
import { useStoreMap } from 'effector-react';
import { shallow } from 'enzyme';
import React from 'react';
import WomanIcon from '../../assets/WomanIcon';
import UserStore from '../../stores/user/UserStore';
import OptionMenu from '../optionMenu/OptionMenu';
import UserLogged from './components/userLogged/UserLogged';
import UserNotLogged from './components/userNotLogged/UserNotLogged';
import Header from './Header';
import HeaderStyles from './Header.styles';

jest.mock('./Header.styles');
jest.mock('effector-react');

mockUseStyles(HeaderStyles, ['container', 'title', 'titleContainer']);

describe('Header', () => {
  it('should render correctly when there is user token', () => {
    useStoreMap.mockReturnValue('bearer token');

    const wrapper = shallow(<Header />);

    const expectedWrapper = (
      <Box className="container">
        <div className="titleContainer">
          <WomanIcon />
          <h1 className="title">BH mais segura para elas</h1>
        </div>
        <div>
          <OptionMenu title="Home" toUrl="" />
          <OptionMenu title="Ocorrência" toUrl="occurrences" />
          <OptionMenu title="Sobre nós" toUrl="aboutus" />
          <UserLogged />
        </div>
      </Box>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render correctly when there is no user token', () => {
    useStoreMap.mockReturnValue(undefined);

    const wrapper = shallow(<Header />);

    const expectedWrapper = (
      <Box className="container">
        <div className="titleContainer">
          <WomanIcon />
          <h1 className="title">BH mais segura para elas</h1>
        </div>
        <div>
          <OptionMenu title="Home" toUrl="" />
          <OptionMenu title="Ocorrência" toUrl="occurrences" />
          <OptionMenu title="Sobre nós" toUrl="aboutus" />
          <UserNotLogged />
        </div>
      </Box>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should select the correct values from the store', () => {
    const mockedHomePageState = {
      token: 'Bearer token',
    };
    useStoreMap.mockReturnValueOnce(mockedHomePageState.token);

    shallow(<Header />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(UserStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(mockedHomePageState)).toEqual(mockedHomePageState.token);
  });
});
