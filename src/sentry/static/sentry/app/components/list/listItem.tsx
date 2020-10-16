import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/core';

type Props = {
  component?: React.ElementType;
  children?: React.ReactNode;
  symbol?: React.ReactNode;
  className?: string;
};

const styles = (symbol?: React.ReactNode) => css`
  position: relative;
  ${symbol && `padding-left: 34px;`}
`;

const ListItem = ({className, component: Component = 'li', children, symbol}: Props) => (
  <Component className={className} symbol={symbol} css={styles}>
    {symbol && <Symbol>{symbol}</Symbol>}
    {children}
  </Component>
);
export default ListItem;

const Symbol = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 22.5px;
`;
