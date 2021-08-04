import React from 'react';
import { shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';
import OptionMenuStyles from './OptionMenu.styles';
import OptionMenu from './OptionMenu';

jest.mock('react-router');
jest.mock('./OptionMenu.styles');

mockUseStyles(OptionMenuStyles, ['container', 'selected']);

describe('OptionMenu', () => {
  it('should render correctly when is selected', () => {
    useLocation.mockImplementation(() => ({ pathname: '/home' }));

    const wrapper = shallow(<OptionMenu title="home" toUrl="home" />);

    const expectedWrapper = (
      <Button
        className="container"
        classes={{
          label: 'selected',
        }}
      >
        home
      </Button>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render correctly when is not selected', () => {
    useLocation.mockImplementation(() => ({ pathname: '/helpus' }));

    const wrapper = shallow(<OptionMenu title="home" toUrl="home" />);

    const expectedWrapper = (
      <Button className="container" classes={{ label: undefined }}>
        home
      </Button>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should call the history.push when the user clicks on the button', () => {
    const pushMock = jest.fn();
    useLocation.mockImplementation(() => ({ pathname: '/helpus' }));
    useHistory.mockImplementation(() => ({ push: pushMock }));

    const wrapper = shallow(<OptionMenu title="home" toUrl="home" />);

    wrapper.invoke('onClick')();

    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenCalledWith('/home');
  });
});
