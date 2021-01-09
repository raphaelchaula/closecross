import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

// Header components
import HeaderRightGroup from './HeaderRightGroup';
import HeaderCenterGroup from './HeaderCenterGroup';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      backgroundColor: theme.palette.background.paper,
      borderBottom: `2px solid ${theme.palette.primary[theme.palette.type]}`
    },
    container: {
      padding: theme.spacing(0)
    },
    paper: {
      width: "100%",
      height: 36.0,
      backgroundColor: "red"
    }
  }),
);

const Header: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <AppBar elevation={0} className={classes.appbar} >
      <Toolbar>
        <Container fixed maxWidth="xl" className={classes.container} >
          <Grid container spacing={0} >
            <Grid item xs={3} ><div className={classes.paper} ></div></Grid>
            <Grid item xs={6} ><HeaderCenterGroup/></Grid>
            <Grid item xs={3} ><HeaderRightGroup/></Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;