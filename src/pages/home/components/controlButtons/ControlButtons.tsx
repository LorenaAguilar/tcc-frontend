import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useStoreMap } from 'effector-react';
import React from 'react';
import { setMode } from '../../../../stores/homePage/HomePageEvents';
import HomePageStore from '../../../../stores/homePage/HomePageStore';
import ControlButtonUseStyles from './ControlButton.styles';

const ControlButtons: React.FunctionComponent = () => {
  const classes = ControlButtonUseStyles();

  const mode = useStoreMap({
    store: HomePageStore,
    keys: [],
    fn: (state) => state.mode,
  });

  const [alignment, setAlignment] = React.useState<string | null>(
    mode === 'OCCURRENCES' ? 'left' : 'center'
  );

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
    setMode(newAlignment === 'left' ? 'OCCURRENCES' : 'RISK_ZONE');
  };

  return (
    <div className={classes.containerButton}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        className={classes.container}
        aria-label="text alignment"
      >
        <ToggleButton
          value="left"
          selected={mode === 'OCCURRENCES'}
          aria-label="left aligned"
          className={classes.buttonControl}
        >
          Ocorrências
        </ToggleButton>
        <ToggleButton
          value="center"
          selected={mode === 'RISK_ZONE'}
          aria-label="centered"
          className={classes.buttonControl}
        >
          Zonas de risco
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default ControlButtons;
