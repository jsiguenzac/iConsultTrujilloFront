import styled, { css } from 'styled-components';

interface TooltipBodyProps {
  currentStep: string;
  width: number;
}

export const TooltipBody = styled.div<TooltipBodyProps>`
  background-color: #fff;
  position: relative;
  border-radius: 4px;
  width: 328px;

  ${(props) => css`
    ${props.currentStep === '.step1' && props.width <= 991 && `
      left: 55px;
      top: 160px;
    `}
    ${props.currentStep === '.step1' && props.width > 991 && `
      left: 55px;
      top: 118px;
    `}
    ${['.step2', '.step3', '.step4'].includes(props.currentStep) && `
      bottom: 32px;
    `}
    ${props.currentStep === '.step5' && `
      bottom: 288px;
    `}
    ${props.currentStep === '.step6' && `
      bottom: 288px;
    `}
  `}
`;

export const ContinueButton = styled.button`
  background: #5b36f2;
  color: #fff;
  border-radius: 4px;
  width: 110px;
  height: 44px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  padding: 12px 24px;
  line-height: 20px;
  margin: 16px;

  &:focus, &:active {
    background: #4318CD;
  }

  &:hover {
    background: #745EF6;
  }
`;

export const ExitButton = styled.button`
  margin: 16px 79px 16px 0;
  background: #fff;
  color: #5b36f2;
  border-radius: 4px;
  width: 43px;
  height: 44px;
  font-weight: 700;
  text-align: center;
  font-size: 14px;
  padding: 12px 8px;
  line-height: 20px;

  &:hover {
    background: #E2DFFD;
  }

  &:focus, &:active {
    background: #C6C0FC;
  }
`;

export const TooltipFooter = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  border-radius: 4px;
`;
