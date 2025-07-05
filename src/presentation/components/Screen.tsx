import React from 'react';
import styled from 'styled-components';

interface Props {
  modeFullScreen?: boolean;
}

function Screen(props: Readonly<Props>) {
  const { modeFullScreen } = props;

  let hScreen;
  if (!modeFullScreen) {
    hScreen = 'calc(100vh - 72px);';
  } else {
    hScreen = '100vh;';
  }

  const ScreenWrapper = styled.div`
    background: rgb(237, 246, 255);
    background: linear-gradient(
      180deg,
      rgba(237, 246, 255, 1) 0%,
      rgba(246, 251, 255, 1) 100%
    );
    text-align: center;
    height: ${hScreen};
    width: 100%;
    padding: 28px 30px 0px;
    display: flex;
    padding-left: 84px;
    padding-top: 72px;
  `;

  return <ScreenWrapper />;
}

Screen.defaultProps = {
  modeFullScreen: false
};

export default Screen;
