import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { once } from 'lodash';

configure({ adapter: new Adapter() });

jest.spyOn(React, 'useEffect').mockImplementation((f) => once(f));
jest.spyOn(React, 'useCallback').mockImplementation((f) => f);
jest.spyOn(React, 'useMemo').mockImplementation((f) => f());

function mockUseStyles(useStylesFn, classesArray) {
  useStylesFn.mockReturnValue(
    classesArray.reduce((classes, className) => {
      classes[className] = className;
      return classes;
    }, {})
  );
}
const _global = (window || global) as any;
_global.mockUseStyles = mockUseStyles;
