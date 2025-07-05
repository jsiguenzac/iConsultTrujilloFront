import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  padding?: string;
  radius?: string;
  margin?: string;
  height?: string;
  size?: string;
  weight?: string;
  border?: boolean;
}

const Container = styled.div.attrs((props: ContainerProps) => ({
  color: props.color,
  borderColor: props.borderColor,
  backgroundColor: props.backgroundColor,
  padding: props.padding,
  radius: props.radius,
  margin: props.margin,
  height: props.height,
  size: props.size,
  weight: props.weight,
  border: props.border
}))<ContainerProps>`
  text-align: center;
  line-height: 1;
  align-items: center;
  display: flex;
  background: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.radius};
  border-width: ${(props) => (props.border ? '1px' : '0px')};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  height: ${(props) => props.height};
  font-weight: ${(props) => props.weight};
`;

Container.defaultProps = {
  color: 'var(--text-text02)',
  borderColor: 'rgba(0,145,255,.3)',
  margin: '0px',
  // height: '18',
  size: '10',
  radius: '4'
};

const Tag = (props: any) => {
  const {
    children,
    color,
    borderColor,
    backgroundColor,
    padding,
    radius,
    margin,
    height,
    size,
    light,
    bold,
    black,
    border,
    className
  } = props;
  let fontWeightSize = '400';
  if (light) fontWeightSize = '100';
  if (bold) fontWeightSize = '700';
  if (black) fontWeightSize = '900';
  return (
    <Container
      data-testid="cmp-tag"
      color={color}
      border={border}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      padding={padding}
      radius={radius}
      margin={margin}
      height={height}
      size={size}
      weight={fontWeightSize}
      className={className || ''}
    >
      {children}
    </Container>
  );
};

export default Tag;
