import React from 'react';
import ContainerStyles from './Container.styles';

const Container: React.FunctionComponent = ({ children }) => {
  const classes = ContainerStyles();
  return <main className={classes.container}>{children}</main>;
};

export default Container;
