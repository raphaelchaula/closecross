import { FunctionComponent, ReactChild } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
    },
    header: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      '& svg': {
        color: theme.palette.primary[theme.palette.type]
      }
    },
    headerleft: {
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    headertitle: {
      fontSize: 14,
      textTransform: "uppercase",
      marginLeft: theme.spacing(2),
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.primary[theme.palette.type]
    },
    headerbutton: {
      marginRight: -theme.spacing(2),
    },
  }),
);

type DLGHeaderProps = {
    title: string,
    leadingIcon: ReactChild,
}

const DLGHeader: FunctionComponent<DLGHeaderProps> = ({ title, leadingIcon }) => {
  const classes = useStyles();
  return (
    <div className={classes.header} >
      <div className={classes.headerleft} >
        {leadingIcon}
        <Typography className={classes.headertitle} >{title}</Typography>
      </div>
      <IconButton className={classes.headerbutton} >
        <ChevronRightIcon/>
      </IconButton>
    </div>
  );
};

export default DLGHeader;