import React, { useRef } from 'react';
import styled from 'styled-components';

interface StyledButtonProps {
  transition?: string;
  width?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  backgroundColor?: string;
  shadow?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  alignContent?: string;
  justifyContent?: string;
  height?: string;
  transform?: string;
  cursor?: string;
  outline?: string;
}

const StyledButton = styled.div<StyledButtonProps>`
  transition: ${(props) => (props.transition ? props.transition : 'none')};
  width: ${(props) => (props.width ? props.width : 'auto')};
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
  cursor: ${(props) => (props.cursor ? props.cursor : 'pointer')};
  outline: ${(props) => (props.outline ? props.outline : 'none')};

  /* &:focus {
    outline: ${(props) => (props.outline ? props.outline : 'none')};
  } */
`;

function Button(props: any) {
  const {
    /* value,
    className,
    secondary,
    icon,
    size,
    disable,
    outline,
    clear,
    expand, */
    onClick,
    // onBlur,
    /* loading,
    submit,
    href, */
    customized,
    children,
    tag,
    delayClick,
    ref,
    disabled,
    onKeyDown,
    tabIndexButton
  } = props;

  const ButtonRef: any = useRef<any>(null);
  if (customized) {
    return (
      <StyledButton
        data-testid="button-ds-customized"
        disabled={disabled}
        ref={ref || ButtonRef}
        as={tag}
        tabIndex={tabIndexButton}
        {...props}
        onClick={
          delayClick
            ? () => {
                setTimeout(() => {
                  if (typeof onClick === 'function' && onClick) {
                    onClick();
                  }

                  if (ref) {
                    ref?.current?.blur();
                  } else if (ButtonRef !== null) {
                    ButtonRef?.current?.blur();
                  }
                }, delayClick);
              }
            : onClick
        }
        onKeyDown={onKeyDown}
      >
        {children}
      </StyledButton>
    );
  }
  return (
    <button
      data-testid="button-ds"
      ref={ref || ButtonRef}
      as={tag}
      tabIndex={tabIndexButton}
      {...props}
      onClick={
        delayClick
          ? () => {
              setTimeout(() => {
                if (typeof onClick === 'function' && onClick) {
                  onClick();
                }

                if (ref) {
                  ref?.current?.blur();
                } else if (ButtonRef !== null) {
                  ButtonRef?.current?.blur();
                }
              }, delayClick);
            }
          : onClick
      }
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  );
}

export default Button;
