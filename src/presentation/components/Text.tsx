import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div<{
  $lineHeight?: string;
  $textAlign?: string;
  $fontSize?: string;
  $fontWeight?: string | number;
  $color?: string;
  $textDecoration?: string;
  $display?: string;
  $whiteSpace?: string;
}>`
  width: auto;
  display: ${(props) => (props.$display ? props.$display : 'initial')};
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : 'initial')};
  text-align: ${(props) => (props.$textAlign ? props.$textAlign : 'left')};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : 'inherit')};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : 'normal')};
  color: ${(props) => (props.$color ? props.$color : '#161D1F')};
  text-decoration: ${(props) =>
    props.$textDecoration ? props.$textDecoration : 'inherit'};
  white-space: ${(props) => (props.$whiteSpace ? props.$whiteSpace : 'initial')};

  .bold__progress {
    font-weight: 900;
  }

  .download__disabled > p {
    font-weight: 400;
  }

  .download__disabled > strong {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #161d1f;
  }
`;

const Text = (props: any) => {
  const { children } = props;
  return <StyledText {...props}>{children}</StyledText>;
}

export default Text;
