import React from 'react';
import {css} from '@emotion/core';

import space from 'app/styles/space';

import Symbol from './symbol';

type SymbolType = React.ComponentProps<typeof Symbol>['symbol'];

type Props = {
  children: Array<React.ReactElement>;
  symbol?: SymbolType;
  component?: React.ElementType;
  className?: string;
};

const styles = css`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: ${space(0.5)};
`;

const List = ({
  component = 'ul',
  children,
  className,
  symbol,
}: Props): React.ReactElement => {
  const getWrapperComponent = () => {
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

  const Wrapper = getWrapperComponent();

  return (
    <Wrapper className={className} css={styles}>
      {!symbol
        ? children
        : React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) {
              return child;
            }
            return React.cloneElement(child as React.ReactElement, {
              symbol: <Symbol symbol={symbol} index={index + 1} />,
            });
          })}
    </Wrapper>
  );
};

export default List;
