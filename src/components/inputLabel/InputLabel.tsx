import InputLabelMUI from '@material-ui/core/InputLabel';
import React, { useMemo } from 'react';
import useInputLabelStyles from './InputLabel.styles';

interface Props {
  label: string;
  hasError: boolean;
  required?: boolean;
}

const InputLabel: React.FunctionComponent<Props> = ({ label, required, hasError }) => {
  const { labelStyle } = useInputLabelStyles();
  const renderLabel = useMemo(() => {
    if (required) {
      return `${label}*`;
    }
    return label;
  }, [label, required]);

  return (
    <InputLabelMUI className={labelStyle} error={hasError}>
      {renderLabel}
    </InputLabelMUI>
  );
};

export default InputLabel;
