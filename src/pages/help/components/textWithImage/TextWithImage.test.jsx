import Typography from '@material-ui/core/Typography';
import { shallow } from 'enzyme';
import React from 'react';
import TextWithImage from './TextWithImage';
import useTextWithImageStyles from './TextWithImage.styles';

jest.mock('./TextWithImage.styles');
mockUseStyles(useTextWithImageStyles, ['titleStyle', 'firstText', 'container', 'media']);

describe('TextWithImage', () => {
  it('should render correctly', () => {
    const mockedProps = { title: 'title', text: 'text', imagePath: 'imagePath' };

    const wrapper = shallow(<TextWithImage {...mockedProps} />);

    const expectedWrapper = (
      <section>
        <Typography component="h2" variant="h2" className="titleStyle">
          <b>{mockedProps.title}</b>
        </Typography>
        <Typography className="firstText" component="p">
          {mockedProps.text}
        </Typography>
        <div className="container">
          <img src={mockedProps.imagePath} className="media" alt="Something" />
        </div>
      </section>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });
});
