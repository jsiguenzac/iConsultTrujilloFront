import styled from 'styled-components';

export const Container = styled.div<{
  styleProps?: {
    background?: string;
    padding?: string;
    alignItems?: string;
    maxWidth?: string;
    margin?: string;
    fontSize?: string;
    borderRadius?: string;
    gap?: string;
  };
}>`
  display: flex;
  align-items: ${(props) => props.styleProps?.alignItems ?? 'center'};
  padding: ${(props) => props.styleProps?.padding ?? 'initial'};
  background: ${(props) => props.styleProps?.background ?? 'initial'};
  border-radius: 4px;
  gap: ${(props) => props.styleProps?.gap ?? '8px'};
  max-width: ${(props) => props.styleProps?.maxWidth ?? 'initial'};
  margin: ${(props) => props.styleProps?.margin ?? 'initial'};
  border-radius: ${(props) => props.styleProps?.borderRadius ?? 'initial'};
  img {
    width: 24px;
    height: 24px;
  }

  span {
    font-weight: 400;
    font-size: ${(props) => props.styleProps?.fontSize ?? '14px'};
    line-height: 20px;
    color: #161d1f;
  }
`;
