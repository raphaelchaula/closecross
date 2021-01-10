import { FunctionComponent } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    toolbargroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    toolbarlabel: {
      fontSize: 14,
      marginRight: theme.spacing(1),
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightLight,
    },
    toolbarbutton: {
      width: 72,
      height: 28,
      fontSize: 14,
      borderRadius: 5,
      textTransform: "uppercase",
      backgroundColor: "transparent",
      color: theme.palette.primary[theme.palette.type],
      border: `1px solid ${theme.palette.primary[theme.palette.type]}`
    }
  }),
);

const DRGToolbar: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container} >
      <div className={classes.toolbargroup} >
        <Typography className={classes.toolbarlabel} ><Trans>Select assets, types and period:</Trans></Typography>
        <ButtonBase className={classes.toolbarbutton} ><Trans>Filter</Trans></ButtonBase>
      </div>
      <div className={classes.toolbargroup} >
        <div className={classes.toolbargroup} >
          <Typography className={classes.toolbarlabel} ><Trans>Units:</Trans></Typography>
          <ButtonBase className={classes.toolbarbutton} ><Trans>Filter</Trans></ButtonBase>
        </div>
        <div className={classes.toolbargroup} >
          <Typography className={classes.toolbarlabel} ><Trans>Units:</Trans></Typography>
          <ButtonBase className={classes.toolbarbutton} ><Trans>Filter</Trans></ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default DRGToolbar;