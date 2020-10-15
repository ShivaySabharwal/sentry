import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
  isSolid?: boolean;
  className?: string;
};

const Numeric = styled(({className, children}: Props) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${p =>
    p.isSolid
      ? `
          width: 24px;
          height: 24px;
          font-weight: 500;
          font-size: ${p.theme.fontSizeSmall};
          background-color: ${p.theme.yellow400};
        `
      : `
          width: 18px;
          height: 18px;
          font-weight: 600;
          font-size: 10px;
          border: 1px solid ${p.theme.gray700};
        `}
`;

export default Numeric;
