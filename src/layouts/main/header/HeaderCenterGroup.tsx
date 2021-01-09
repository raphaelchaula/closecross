import { useState, FunctionComponent, ReactChild } from 'react';
import { Trans } from '@lingui/macro';
import ButtonBase from '@material-ui/core/ButtonBase';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: 10,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      fontSize: 12,
      marginLeft: 4,
      marginRight: 4,
      borderRadius: 5,
      fontWeight: 600,
      padding: "6px 18px",
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

const HCGItems = new Map<string, ReactChild>();
HCGItems.set("hcg-showall", <Trans>Show All</Trans>);
HCGItems.set("hcg-crypto", <Trans>Crypto</Trans>);
HCGItems.set("hcg-commodities", <Trans>Сommodities</Trans>);
HCGItems.set("hcg-stock", <Trans>Stock</Trans>);
HCGItems.set("hcg-index", <Trans>Index</Trans>);
HCGItems.set("hcg-currency", <Trans>Currency</Trans>);

type HCGButtonProps = {
  key: string,
  active: boolean,
  onClick: () => void,
};

const HCGButton: FunctionComponent<HCGButtonProps> = ({ key, active, onClick, children }) => {
  const classes = useStyles();
  return (
    <ButtonBase
      key={key}
      onClick={() => onClick()}
      className={clsx(classes.button, active ? classes.buttonactive: classes.buttoninactive)}
    >
      {children}
    </ButtonBase>
  );
};

const HeaderCenterGroup: FunctionComponent = () => {
  const [activeItems, setActiveItems] = useState<string[]>(["hcg-crypto", "hcg-stock"]);
  const classes = useStyles();

  const handleClickItem = (key: string):void  => {
    const items = activeItems;
    const index = items.indexOf(key);
    if (index > -1) {
      items.splice(index, 1);
      setActiveItems([...items]);
    } else {
      items.splice(index, 0, key);
      setActiveItems([...items]);
    }
  };

  const HCGChildren: ReactChild[] = [];
  HCGItems.forEach((value, key) => {
    HCGChildren.push(
      <HCGButton
        key={key}
        children={value}
        active={activeItems.includes(key)}
        onClick={() => handleClickItem(key)}
      />
    );
  });

  return (
    <div className={classes.container} >
      <ButtonGroup disableElevation size="small" variant="text" aria-label="Button Group">
        { HCGChildren }
      </ButtonGroup>
    </div>
  );
};

export default HeaderCenterGroup;