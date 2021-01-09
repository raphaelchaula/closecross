import React, { FunctionComponent, MouseEvent, ReactChild, SyntheticEvent } from 'react';
import Typography from '@material-ui/core/Typography';

type HeaderProps = {
  title: string,
  paragraph?: string,
  children?: ReactChild,
}

const onClickParagraph = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  alert(event.currentTarget.tagName);
};

const onInput = (event: SyntheticEvent) => {
  event.preventDefault();
  alert(event.currentTarget.nodeName);
};

const Header: FunctionComponent<HeaderProps> = ({title, paragraph = "Hello world, this is TS.", children}) => {
  return (
    <div>
      <Typography variant="h1" component="h1" >{title}</Typography>
      <button onClick={onClickParagraph} >{paragraph}</button>
      <input type="text" onInput={onInput} placeholder="input" />
      {children}
    </div>
  );
};

export default Header;