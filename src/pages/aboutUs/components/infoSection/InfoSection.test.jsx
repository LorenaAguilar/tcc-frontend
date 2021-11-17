import Typography from '@material-ui/core/Typography';
import { shallow } from 'enzyme';
import React from 'react';
import InfoSection from './InfoSection';
import useInfoSectionStyles from './InfoSection.styles';

jest.mock('./InfoSection.styles');
mockUseStyles(useInfoSectionStyles, ['firstText', 'otherTexts']);

describe('InfoSection', () => {
  it('should render correctly', () => {
    const mockedProps = { title: 'title', text: 'text', texts: ['text 1', 'text 2'] };

    const wrapper = shallow(<InfoSection {...mockedProps} />);

    const expectedWrapper = (
      <section>
        <Typography component="h2" variant="h2">
          <b>{mockedProps.title}</b>
        </Typography>
        <Typography component="p" className="firstText">
          {mockedProps.text}
        </Typography>
        <Typography key={mockedProps.texts[0].slice(0, 10)} className="otherTexts" component="p">
          {mockedProps.texts[0]}
        </Typography>
        <Typography key={mockedProps.texts[1].slice(0, 10)} className="otherTexts" component="p">
          {mockedProps.texts[1]}
        </Typography>
      </section>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
