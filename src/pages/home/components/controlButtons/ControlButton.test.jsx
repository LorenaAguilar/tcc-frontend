import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useStoreMap } from 'effector-react';
import { shallow } from 'enzyme';
import React from 'react';
import HomePageStore from '../../../../stores/homePage/HomePageStore';
import ControlButtonUseStyles from './ControlButton.styles';
import ControlButtons from './ControlButtons';

jest.mock('effector-react');

jest.mock('./ControlButton.styles');

mockUseStyles(ControlButtonUseStyles, ['containerButton', 'container', 'buttonControl']);

describe('ControlButtons', () => {
  const HomePageDefaultState = {
    mode: 'RISK_ZONE',
  };
  it('should render correctly when center is selected', () => {
    useStoreMap.mockReturnValueOnce(HomePageDefaultState.mode);
    const wrapper = shallow(<ControlButtons />);

    const expectedWrapper = (
      <div className="containerButton">
        <ToggleButtonGroup
          value="center"
          exclusive
          className="container"
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned" className="buttonControl">
            Ocorrências
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered" className="buttonControl">
            Zonas de risco
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should render correctly when left is selected', () => {
    useStoreMap.mockReturnValueOnce('OCCURRENCES');
    const wrapper = shallow(<ControlButtons />);

    const expectedWrapper = (
      <div className="containerButton">
        <ToggleButtonGroup value="left" exclusive className="container" aria-label="text alignment">
          <ToggleButton value="left" aria-label="left aligned" className="buttonControl">
            Ocorrências
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered" className="buttonControl">
            Zonas de risco
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
    expect(wrapper.matchesElement(expectedWrapper)).toBe(true);
  });

  it('should select the correct values from the HomePageStore', () => {
    useStoreMap.mockReturnValueOnce(HomePageDefaultState.mode);

    shallow(<ControlButtons />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(HomePageStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(HomePageDefaultState)).toEqual(
      HomePageDefaultState.mode
    );
  });
});
