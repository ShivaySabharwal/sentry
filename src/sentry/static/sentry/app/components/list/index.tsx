import React from 'react';
import styled from '@emotion/styled';

import space from 'app/styles/space';

import Symbol from './symbol';

type SymbolType = React.ComponentProps<typeof Symbol>['symbol'];

type Props = {
  children: Array<React.ReactElement>;
  symbol?: SymbolType;
  component?: React.ElementType;
  className?: string;
};

const List = ({component = 'ul', children, className, symbol}: Props) => {
  const getRootComponent = () => {
    if (component !== 'ul') {
      return component;
    }
    switch (symbol) {
      case 'numeric':
      case 'colored-numeric':
        return 'ol';
      default:
        return component;
    }
  };

  const rootComponent = getRootComponent();

  return (
    <Wrapper className={className} component={rootComponent}>
      {!symbol
        ? children
        : React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) {
              return child;
            }
            return React.cloneElement(child as React.ReactElement, {
              icon: <Symbol symbol={symbol} index={index + 1} />,
            });
          })}
    </Wrapper>
  );
};

export default List;

const Wrapper = styled(
  ({
    component: Component,
    children,
    className,
  }: Required<Pick<Props, 'component'>> & Pick<Props, 'className' | 'children'>) => (
    <Component className={className}>{children}</Component>
  )
)`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: ${space(0.5)};
`;
