import { createStyles, makeStyles } from '@material-ui/core';

const useTextWithImageStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    media: {
      maxWidth: '33.34%',
      marginRight: 16,
    },
    firstText: {
      textIndent: 16,
    },
    otherTexts: {
      paddingTop: 8,
      textIndent: 16,
    },
    titleStyle: {
      marginBottom: 32,
    },
  })
);

export default useTextWithImageStyles;
