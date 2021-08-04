import React from 'react';
import { shallow } from 'enzyme';
import Box from '@material-ui/core/Box';
import HeaderStyles from './Header.styles';
import Header from './Header';
import OptionMenu from '../optionMenu/OptionMenu';

jest.mock('./Header.styles');

mockUseStyles(HeaderStyles, ['container', 'title', 'titleContainer']);

describe('Header', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Header />);

    const expectedWrapper = (
      <Box className="container">
        <div className="titleContainer">
          <h1 className="title">BH mais segura para elas</h1>
        </div>
        <div>
          <OptionMenu title="Home" toUrl="" />
          <OptionMenu title="Ocorrência" toUrl="ocurrences" />
          <OptionMenu title="Ajuda" toUrl="help" />
          <OptionMenu title="Sobre nós" toUrl="aboutus" />
        </div>
      </Box>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
