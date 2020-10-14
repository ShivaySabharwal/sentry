import React from 'react';
import styled from '@emotion/styled';

type Props = {
  component?: React.ElementType;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

const ListItem = ({className, component = 'li', children, icon}: Props) => (
  <Wrapper className={className} component={component} icon={icon}>
    {icon && <IconWrapper>{icon}</IconWrapper>}
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
    Pick<Props, 'className' | 'children' | 'icon'>) => (
    <Component className={className}>{children}</Component>
  )
)`
  position: relative;
  ${p => p.icon && `padding-left: 34px;`}
`;

const IconWrapper = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 22.5px;
`;
