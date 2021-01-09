import { useState, FunctionComponent, ReactChild } from 'react';
import clsx from 'clsx';
import { Trans } from '@lingui/macro';
import ButtonBase from '@material-ui/core/ButtonBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 6,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    logo: {
      width: 32,
      height: "auto",
      marginRight: theme.spacing(3)
    },
    button: {
      fontSize: 12,
      fontWeight: 600,
      padding: "6px 16px",
    },
    buttonleft: {
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    buttonright: {
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    buttonactive: {
      border: "1px solid transparent",
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

const HCGLogo: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <img src="/logo.svg" alt="CloseCross" className={classes.logo} />
  );
};

const HCGItems = new Map<string, ReactChild>();
HCGItems.set("hlg-trainingmode", <Trans>Training Mode</Trans>);
HCGItems.set("hcg-livemode", <Trans>Live Mode</Trans>);

type HCGButtonProps = {
  key: string,
  index: number,
  active: boolean,
  onClick: () => void,
};

const HCGButton: FunctionComponent<HCGButtonProps> = ({ key, active, index, onClick, children }) => {
  const classes = useStyles();
  return (
    <ButtonBase
      key={key}
      onClick={() => onClick()}
      className={clsx(
        classes.button,
        active ? classes.buttonactive: classes.buttoninactive,
        index === 0 ? classes.buttonleft : classes.buttonright
      )}
    >
      {children}
    </ButtonBase>
  );
};

const HeaderLeftGroup: FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState<string>("hlg-trainingmode");
  const classes = useStyles();

  const HCGChildren: ReactChild[] = [];
  let index = 0;
  HCGItems.forEach((value, key) => {
    HCGChildren.push(
      <HCGButton
        key={key}
        index={index}
        children={value}
        active={activeItem === key}
        onClick={() => setActiveItem(key)}
      />
    );
    index = index + 1;
  });

  return (
    <div className={classes.container} >
      <HCGLogo/>
      <ButtonGroup disableElevation size="small" variant="text" aria-label="Button Group">
        { HCGChildren }
      </ButtonGroup>
    </div>
  );
};

export default HeaderLeftGroup;