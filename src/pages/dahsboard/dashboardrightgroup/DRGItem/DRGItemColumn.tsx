import { FunctionComponent, ReactChild } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-bwtween"
    },
    containerbordered: {
      borderRight: `1px dotted ${theme.palette.grey[400]}`,
    },
    icon: {
      '& svg': {
        marginRight: theme.spacing(1),
        color: theme.palette.primary[theme.palette.type],
      }
    },
    texts: {
      textAlign: "left",
    },
    textstitle: {
      fontSize: 16,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
    },
    textssubtitle: {
      fontSize: 12,
      marginTop: 4,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightLight,
    },
    textsmixedtitle: {
      fontSize: 12,
      marginTop: 2,
      display: "flex",
      alignItems: "center",
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightLight,
      '& svg': {
        fontSize: 20,
        marginRight: theme.spacing(1),
        color: theme.palette.primary[theme.palette.type],        
      }
    },
  }),
);

type DLGColumnProps = {
    title?: string,
    subtitle: string,
    mixedTitle?: string,
    rightBordered?: boolean,
    leadingIcon?: ReactChild,
    mixedTitleIcon?: ReactChild,
}

const DRGItemColumn: FunctionComponent<DLGColumnProps> = ({leadingIcon, title, subtitle, mixedTitle, mixedTitleIcon, rightBordered}) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.container, rightBordered ? classes.containerbordered : null)} >
      { leadingIcon ? <div className={classes.icon} >{leadingIcon}</div> : null}
      <div className={classes.texts} >
        { title ? <Typography className={classes.textstitle} >{title}</Typography> : null}
        { mixedTitle ? <Typography className={classes.textsmixedtitle} >{mixedTitleIcon} {mixedTitle}</Typography> : null}
        <Typography className={classes.textssubtitle} >{subtitle}</Typography>
      </div>
    </div>
  );
};

export default DRGItemColumn;