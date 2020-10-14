import React from 'react';
import styled from '@emotion/styled';

type Props = {
  children: React.ReactNode;
  isSolid?: boolean;
  className?: string;
};

const Numeric = ({children, isSolid, className}: Props) => (
  <Wrapper isSolid={isSolid} className={className}>
    {children}
  </Wrapper>
);
export default Numeric;

const Wrapper = styled('div')<{isSolid?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  font-weight: 600;
  font-size: 10px;
  border: 1px solid ${p => p.theme.gray700};
  border-radius: 50%;

  ${p =>
    p.isSolid &&
    `
       width: 24px;
       height: 24px;
       font-weight: 500;
       font-size: ${p.theme.fontSizeSmall};
       border: none;
       background-color: ${p.theme.yellow400};
    `}
`;
