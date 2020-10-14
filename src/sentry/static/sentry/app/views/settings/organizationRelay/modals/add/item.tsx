import React from 'react';

type Props = {
  title: React.ReactNode;
  children: React.ReactElement;
  subtitle?: React.ReactNode;
};

const Item = ({title, subtitle, children}: Props) => (
  <React.Fragment>
    {title}
    {subtitle && <small>{subtitle}</small>}
    <div>{children}</div>
  </React.Fragment>
);

export default Item;
