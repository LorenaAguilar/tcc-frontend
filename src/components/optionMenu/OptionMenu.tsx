import React, { useCallback, useMemo } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';
import optionMenuStyles from './OptionMenu.styles';

interface Props {
  title: string;
  toUrl: string;
}

const OptionMenu: React.FunctionComponent<Props> = ({ title, toUrl }) => {
  const { container, selected } = optionMenuStyles();
  const history = useHistory();
  const location = useLocation();

  const isSelected = useMemo(
    (): boolean => location.pathname.substr(1) === toUrl,
    [toUrl, location]
  );

  const onClickButton = useCallback(() => history.push(`/${toUrl}`), [toUrl, history]);

  return (
    <Button
      className={container}
      classes={{
        label: isSelected ? selected : undefined,
      }}
      onClick={onClickButton}
    >
      {title}
    </Button>
  );
};

export default OptionMenu;
