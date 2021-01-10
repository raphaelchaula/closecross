import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Dashboard components
import MainLayout from '../../layouts/main';
import DashboardLeftGroup from './dashboardleftgroup';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(0)
    },
    background: {
      width: '100%',
      height: 'calc(100vh - 66px)',
    },
    backgroundright: {
      width: "100%",
      minHeight: "calc(100vh - 64px)",
      backgroundColor: theme.palette.background.paper,
    },
    popover: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      marginTop: 60,
      overflow: "hidden",
      textAlign: "center",
      position: 'absolute',
      minHeight: "calc(100vh - 66px)",
    },
    popoverleft: {
      width: "100%",
      overflow: "auto",
      maxHeight: "calc(100vh - 60px)",
    },
    popoverright: {
      width: "100%",
      minHeight: "calc(100vh - 60px)",
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const DashboardPage: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <div className={classes.background} >
        <Grid container spacing={0} >
          <Grid item xs={6} ></Grid>
          <Grid item xs={6} className={classes.backgroundright} ></Grid>
        </Grid>
      </div>
      <div className={classes.popover} >
        <Container fixed maxWidth="xl" className={classes.container} >
          <Grid container spacing={0} >
            <Grid item xs={3} className={classes.popoverleft} >
              <DashboardLeftGroup/>
            </Grid>
            <Grid item xs={9} className={classes.popoverright} ></Grid>
          </Grid>
        </Container>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;