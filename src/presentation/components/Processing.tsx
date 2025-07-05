import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Spinner from './Spinner';

export const GlobalStyles = createGlobalStyle`
  body {
    overflow-y:hidden !important;
  }
  @media (min-width: 640px) {
  .container-fixzindex{
    z-index:99;
  }
}
`;

const Container = styled.div`
  position: fixed;
  width: 100% !important;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(40, 48, 68, 0.6);
  z-index: 10000;
  left: 0;
  top: 0;
  overflow: hidden;

  .spinner {
    padding: 8px;
    border-radius: 50%;
    margin-top: 8px;
    background-color: #fff;
  }
`;
const Processing = (props: any) => {
  const { isOpen, text } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  if (isOpen)
    return (
      <Container data-testid="cmp-processing">
        {isOpen ? <GlobalStyles /> : <div />}
        <Spinner colorText="#fff" text={text} />

        <input
          ref={inputRef}
          type="text"
          id="processing-modal"
          style={{ width: 0, height: 0, padding: 0, border: 'none' }}
        />
      </Container>
    );
  return null;
};

Processing.defaultProps = { text: '' };
export default Processing;
