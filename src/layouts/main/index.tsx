import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// MainLayout components
import Header from './header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      marginTop: theme.spacing(8),
    },
  }),
);

const MainLayout: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header/>
      <div className={classes.container} >
        {children}
      </div>
    </>
  );
};

export default MainLayout;