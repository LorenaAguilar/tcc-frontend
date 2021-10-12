import Box from '@material-ui/core/Box';
import { shallow } from 'enzyme';
import React from 'react';
import WomanIcon from '../../assets/WomanIcon';
import OptionMenu from '../optionMenu/OptionMenu';
import Header from './Header';
import HeaderStyles from './Header.styles';

jest.mock('./Header.styles');

mockUseStyles(HeaderStyles, ['container', 'title', 'titleContainer']);

describe('Header', () => {
  it('should render correctly', () => {
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
        </div>
      </Box>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
