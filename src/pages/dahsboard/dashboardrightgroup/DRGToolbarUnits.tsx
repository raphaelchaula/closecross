import { useState, FunctionComponent, ReactChild } from 'react';
import clsx from 'clsx';
import ButtonBase from '@material-ui/core/ButtonBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginRight: theme.spacing(4)
    },
    button: {
      width: 52,
      height: 28,
      fontSize: 12,
      fontWeight: 600,
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
      backgroundColor: theme.palette.primary[theme.palette.type],
    },
    buttoninactive: {
      backgroundColor: "transparent",
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.primary[theme.palette.type]}`,
    },
  }),
);

const HCGItems = new Map<string, string>();
HCGItems.set("drgtt-%", "%");
HCGItems.set("drgtt-$", "$");

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

const DRGToolbarUnits: FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState<string>("drgtt-$");
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
    <ButtonGroup className={classes.container} disableElevation size="small" variant="text" aria-label="Button Group">
      { HCGChildren }
    </ButtonGroup>
  );
};

export default DRGToolbarUnits;