import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Toolbar Components
import DRGToolbar from './DRGToolbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      marginTop: theme.spacing(2),
      paddingTop: theme.spacing(3),
    },
  }),
);

const DashboardRightGroup: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <DRGToolbar/>
    </div>
  );
};

export default DashboardRightGroup;