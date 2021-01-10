import { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    column: {
      width: 120,
      textAlign: "left",
      marginRight: theme.spacing(2),
    },
    columntitle: {
      fontSize: 12,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightLight,
    },
    columnsubtitle: {
      fontSize: 18,
      marginTop: 4,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
    },
    columnextra: {
      fontSize: 12,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
    }
  }),
);

type DLGColumnProps = {
    title: string,
    subtitle: string,
    extra?: string,
}

const DLGColumn: FunctionComponent<DLGColumnProps> = ({title, subtitle, extra}) => {
  const classes = useStyles();
  return (
    <div className={classes.column} >
      <Typography className={classes.columntitle} >{title}</Typography>
      <Typography className={classes.columnsubtitle} >{subtitle}</Typography>
      {extra ? <Typography className={classes.columnextra} >{extra}</Typography> : null}
    </div>
  );
};

export default DLGColumn;