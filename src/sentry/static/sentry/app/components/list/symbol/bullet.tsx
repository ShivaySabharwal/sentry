import React from 'react';
import styled from '@emotion/styled';

type Props = {
  className?: string;
};

const Bullet = styled(({className}: Props) => <div className={className} />)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid ${p => p.theme.gray700};
`;
export default Bullet;
