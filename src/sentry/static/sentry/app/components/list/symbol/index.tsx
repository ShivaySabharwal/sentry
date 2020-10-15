import React from 'react';

import Numeric from './numeric';
import Bullet from './bullet';

type SymbolType = 'bullet' | 'numeric' | 'colored-numeric';

type Props = {
  symbol: SymbolType | React.ReactElement;
  index: number;
  className?: string;
};

const Symbol = ({symbol, index, className}: Props) => {
  switch (symbol) {
    case 'bullet':
      return <Bullet className={className} />;
    case 'numeric':
      return <Numeric className={className}>{index}</Numeric>;
    case 'colored-numeric':
      return (
        <Numeric className={className} isSolid>
          {index}
        </Numeric>
      );
    default:
      return symbol;
  }
};

export default Symbol;
