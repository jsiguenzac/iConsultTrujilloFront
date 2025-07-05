// src/styles/PreloaderStyles.ts
import styled, { keyframes } from "styled-components";

export const PreloaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 10vh;
  height: 100%;
  width: 100%;
  background: #fff;
`;

const dash = keyframes`
  62.5% {
    opacity: 0;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const Indicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(2);

  svg polyline {
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  svg polyline#back {
    stroke: rgba(59, 211, 171, 0.3);
  }

  svg polyline#front {
    stroke: #3bd3ab;
    stroke-dasharray: 12, 36;
    stroke-dashoffset: 48;
    animation: ${dash} 1s linear infinite;
  }
`;
