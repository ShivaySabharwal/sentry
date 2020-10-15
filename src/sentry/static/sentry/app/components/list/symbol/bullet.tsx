import React from 'react';
import styled from '@emotion/styled';

type Props = {
  className?: string;
};

const Bullet = ({className}: Props) => <Wrapper className={className} />;

export default Bullet;

const Wrapper = styled('div')`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid ${p => p.theme.gray700};
`;
