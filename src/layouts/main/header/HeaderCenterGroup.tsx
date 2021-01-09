import { FunctionComponent } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    buttongroup: {
      marginTop: 10,
      '& .MuiButtonGroup-groupedText': {
        fontSize: 12,
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 5,
        fontWeight: 600,
        padding: "6px 18px",
        textTransform: "none",
      },
    },
    buttonactive: {
      border: "none",
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
    },
    buttoninactive: {
      backgroundColor: "transparent",
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.grey[600]}`,
    },
  }),
);

const HeaderCenterGroup: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <ButtonGroup disableElevation className={classes.buttongroup} size="small" variant="text" aria-label="small outlined button group">
      <ButtonBase className={classes.buttoninactive} >Show All</ButtonBase>
      <ButtonBase className={classes.buttonactive} >Crypto</ButtonBase>
      <ButtonBase className={classes.buttoninactive} >Сommodities</ButtonBase>
      <ButtonBase className={classes.buttoninactive} >Stock</ButtonBase>
      <ButtonBase className={classes.buttonactive} >Index</ButtonBase>
      <ButtonBase className={classes.buttoninactive} >Currency</ButtonBase>
    </ButtonGroup>
  );
};

export default HeaderCenterGroup;