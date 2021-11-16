import { createStyles, makeStyles } from '@material-ui/core';

const useInfoSectionStyles = makeStyles(() =>
  createStyles({
    firstText: {
      paddingTop: '16px',
      textIndent: '16px',
    },
    otherTexts: {
      paddingTop: '8px',
      textIndent: '16px',
    },
  })
);

export default useInfoSectionStyles;
