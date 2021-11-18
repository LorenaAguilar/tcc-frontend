import { Avatar, IconButton, Menu, MenuItem } from '@material-ui/core';
import { useStoreMap } from 'effector-react';
import { shallow } from 'enzyme';
import React from 'react';
import UserStore from '../../../../stores/user/UserStore';
import LogoutUseCase from '../../../../usecases/user/LogoutUseCase';
import HeaderStyles from '../../Header.styles';
import StringAvatar from './StringToAvatar';
import UserLogged from './UserLogged';

jest.mock('../../Header.styles');
jest.mock('effector-react');
jest.mock('../../../../usecases/user/LogoutUseCase');
jest.mock('./StringToAvatar');

mockUseStyles(HeaderStyles, ['container', 'title', 'titleContainer', 'menuOptions']);

describe('UserLogged', () => {
  const UserLoggedState = { name: 'name', lastname: 'lastname' };
  beforeEach(() => {
    useStoreMap.mockReturnValue(UserLoggedState);
    StringAvatar.mockReturnValue({ children: 'NL' });
  });

  it('should render correctly when the user is logged', () => {
    const wrapper = shallow(<UserLogged />);

    const expectedWrapper = (
      <div>
        <IconButton>
          <Avatar>NL</Avatar>
        </IconButton>
        <Menu id="menu-appbar" className="menuOptions" open={false}>
          <MenuItem>Sair</MenuItem>
        </Menu>
      </div>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should handle LogoutUseCase', () => {
    const wrapper = shallow(<UserLogged />);

    wrapper.find(MenuItem).invoke('onClick')();

    expect(LogoutUseCase).toHaveBeenCalledTimes(1);
    expect(LogoutUseCase).toHaveBeenCalledWith();
  });

  it('should handle handleClick', () => {
    const wrapper = shallow(<UserLogged />);
    const eventMock = { currentTarget: '' };

    wrapper.find(IconButton).invoke('onClick')(eventMock);
  });

  it('should handle handleClose', () => {
    const wrapper = shallow(<UserLogged />);

    wrapper.find(Menu).invoke('onClose')();
  });

  it('should select the correct values from the HomePageStore', () => {
    shallow(<UserLogged />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(UserStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(UserLoggedState)).toEqual(UserLoggedState);
  });
});
