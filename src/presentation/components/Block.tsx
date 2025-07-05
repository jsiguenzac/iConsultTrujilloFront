import React from 'react';
import styled from 'styled-components';

interface Props {
  flex: boolean;
  shadow: boolean;
  color: string;
}

interface IBlock {
  border: string;
  borderRadius: string;
  padding: string;
  backgroundColor: string;
  shadow: string;
  maxWidth: string;
  minWidth: string;
  maxHeight: string;
  minHeight: string;
  margin: string;
  display: string;
  flexDirection: string;
  alignItems: string;
  alignContent: string;
  justifyContent: string;
  height: string;
  transition: string;
  transform: string;
  overflow: string;
  gap: string;
  width: string;
}

const StyledBlock = styled.div.attrs<IBlock>((props) => ({
  borderRadius: props.borderRadius,
  padding: props.padding,
  backgroundColor: props.backgroundColor,
  shadow: props.shadow,
  maxWidth: props.maxWidth,
  minWidth: props.minWidth,
  maxHeight: props.maxHeight,
  minHeight: props.minHeight,
  margin: props.margin,
  display: props.display,
  flexDirection: props.flexDirection,
  alignItems: props.alignItems,
  alignContent: props.alignContent,
  justifyContent: props.justifyContent,
  border: props.border,
  height: props.height,
  transform: props.transform,
  transition: props.transition,
  overflow: props.overflow,
  gap: props.gap,
  width: props.width
}))<IBlock>`
  transition: ${(props) => (props.transition ? props.transition : 'none')};
  width: ${(props) => (props.width ? props.width : '100%')};
  margin: ${(props) => (props.margin ? props.margin : 'initial')};
  border: ${(props) => (props.border ? props.border : 'none')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : 'none'};
  padding: ${(props) => (props.padding ? props.padding : 'none')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'auto')};
  min-width: ${(props) => (props.minWidth ? props.minWidth : '1px')};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : '100%')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : '1px')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  box-shadow: ${(props) => (props.shadow ? props.shadow : 'none')};
  display: ${(props) => (props.display ? props.display : 'flex')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'flex-start'};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  height: ${(props) => (props.height ? props.height : 'auto')};
  transform: ${(props) => (props.transform ? props.transform : 'none')};
  overflow: ${(props) => (props.overflow ? props.overflow : 'unset')};
  gap: ${(props) => (props.gap ? props.gap : '0')};

  @media (min-width: 768px) {
    .procedure__block {
      margin: 24px 0 86px 0;
    }

    // .modify {
    //   display: flex;
    //   flex-direction: column;
    //   justify-content: flex-start;
    // }
  }
`;

const BlockDefault = styled.div<Props>`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-wrap: ${(props) => props.flex && 'wrap'};
  text-align: left;
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  box-shadow: ${(props) =>
    props.shadow ? '0 8px 32px -16px var(--neutral-03)' : 'none'};
`;
const Block = (props: any) => {
  const { customized, children } = props;
  if (customized) {
    return (
      <StyledBlock
        data-testid="cmp-customized-block"
        {...props}
      >
        {children}
      </StyledBlock>
    );
  }
  return (
    <BlockDefault
      data-testid="cmp-block"
      {...props}
    >
      {children}
    </BlockDefault>
  );
};

export default Block;
