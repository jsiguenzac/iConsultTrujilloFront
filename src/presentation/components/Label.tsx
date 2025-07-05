/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import constants from '../../core/constants';

interface StyledLabelProps {
  fontWeight?: string | number;
  color?: string;
  size?: number;
  lineHeight?: number;
  marginLeft?: number;
  marginRight?: number;
}

const Container = styled.label.attrs((props: StyledLabelProps) => ({
  fontWeight: props.fontWeight,
  color: props.color,
  size: props.size,
  lineHeight: props.lineHeight,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight
}))<StyledLabelProps>`
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  line-height: ${(props) => props.lineHeight}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-right: ${(props) => props.marginRight}px;
  width: auto;
  // @media (min-width: ${constants.BREAKPOINT_SIZE}px) {
  //   font-size: 14px;
  // }
`;

interface Props {
  text: any;
  light?: boolean;
  bold?: boolean;
  black?: boolean;
  color?: string;
  size?: number;
  lineHeight?: number;
  marginLeft?: number;
  marginRight?: number;
  fontWeight?: string;
  className?: string;
}
const Label = (props: Props) => {
  const {
    text,
    light,
    bold,
    black,
    color,
    size,
    lineHeight,
    marginLeft,
    marginRight,
    fontWeight,
    className
  } = props;
  const textColor = color ?? 'var(--nb-text-2)';
  const textSize = size ?? 12;
  const textLineHeight = lineHeight ?? 20;
  const textMarginLeft = marginLeft ?? 0;
  const textMarginRight = marginRight ?? 0;
  let fontWeightSize = fontWeight ?? 400;
  if (light) fontWeightSize = '100';
  if (bold) fontWeightSize = '700';
  if (black) fontWeightSize = '900';
  return (
    <Container
      data-testid="cmp-label"
      className={className}
      size={textSize}
      lineHeight={textLineHeight}
      color={textColor}
      marginLeft={textMarginLeft}
      marginRight={textMarginRight}
      fontWeight={fontWeightSize}
    >
      {text}
    </Container>
  );
};
export default Label;
