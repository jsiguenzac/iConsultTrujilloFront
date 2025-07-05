import React from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import Page404BackgroundImage from '../../assets/ilustrations/404-error-page.svg';
import Page404BackgroundImage2 from '../../assets/ilustrations/404-error-page2-m.svg';

const MessageWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  background: var(--background-05);
  /* background: linear-gradient(
    180deg,
    rgba(237, 246, 255, 1) 0%,
    rgba(246, 251, 255, 1) 100%
  ); */
  text-align: center;
  height: 100vh;
  width: 100vw;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

const MessageContentWrapper = styled.div`
  width: 776px;
  color: #000;
`;

const MessageContent = styled.div`
  width: 100vw;
  display: block;
  margin: 0 auto;
  max-width: 776px;
`;
const Page404Background = styled.img`
  height: 348px;
  width: 776px;
  display: inline-block;
`;

const MainParagraph = styled.p`
  margin-top: 14px;
  // font-family: Lato;
  font-size: 24px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: var(--text-text02);
`;
const SecondaryParagraph = styled.p`
  margin-top: 12px;
  // font-family: Lato;
  font-size: 16px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--neutral-03);
  text-align: center;
`;

function Message() {
  return (
    <MessageWrapper>
      <MessageContentWrapper>
        <MessageContent>
          <Page404Background
            style={{ width: '100%', height: 'auto' }}
            src={isMobile ? Page404BackgroundImage2 : Page404BackgroundImage}
          />
        </MessageContent>
        <MessageContent>
        </MessageContent>
        <MainParagraph>¡Gracias por visitarnos!</MainParagraph>
        <SecondaryParagraph>Vuelve pronto.</SecondaryParagraph>
      </MessageContentWrapper>
    </MessageWrapper>
  );
}

Message.defaultProps = {};

export default Message;
