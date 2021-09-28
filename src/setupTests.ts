import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import React from 'react';
import 'regenerator-runtime/runtime';

configure({ adapter: new Adapter() });

jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
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
