import React from 'react';
import { shallow } from 'enzyme';
import Box from '@material-ui/core/Box';
import AboutUsInformation from './AboutUsInformation';
import Container from '../../../../components/container/container';
import AboutUsInformationStyles from './AboutUsInformation.styles';

jest.mock('./AboutUsInformation.styles');

mockUseStyles(AboutUsInformationStyles, ['container']);

describe('AboutUsInformation', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AboutUsInformation />);

    const expectedWrapper = (
      <Container>
        <Box className="container" />
      </Container>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
