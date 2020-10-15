import React from 'react';
import styled from '@emotion/styled';

type Props = {
  component?: React.ElementType;
  children?: React.ReactNode;
  symbol?: React.ReactNode;
  className?: string;
};

const ListItem = ({className, component = 'li', children, symbol}: Props) => (
  <Wrapper className={className} component={component} symbol={symbol}>
    {symbol && <Symbol>{symbol}</Symbol>}
    {children}
  </Wrapper>
);
export default ListItem;

const Wrapper = styled(
  ({
    component: Component,
    children,
    className,
  }: Required<Pick<Props, 'component'>> &
    Pick<Props, 'className' | 'children' | 'symbol'>) => (
    <Component className={className}>{children}</Component>
  )
)`
  position: relative;
  ${p => p.symbol && `padding-left: 34px;`}
`;

const Symbol = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 22.5px;
`;
