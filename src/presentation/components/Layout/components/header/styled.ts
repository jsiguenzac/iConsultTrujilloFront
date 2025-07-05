import styled from 'styled-components';

interface HeaderWrapperProps {
  isDetailMobile?: boolean;
}

export const HeaderWrapper = styled.div.attrs<HeaderWrapperProps>(props => ({
  isDetailMobile: props.isDetailMobile
}))`
  position: relative;
  z-index: 2;
  height: 56px;
  width: 100%;
  padding-right: 16px;
  display: ${(props: any) => (props.isDetailMobile ? 'none' : 'flex')};
  justify-content: space-between;
  gap: 0.5rem;
  background-color: #ffffff;

  &.hide {
    z-index: 1;
  }

  @media (min-width: 992px) {
    position: fixed;
    z-index: 10;
    left: 0px;
    top: 0px;
    height: 72px;
    padding-left: 88px;
    padding-right: 20px;
  }
`;

export const HeaderSpacer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HeaderButton = styled.button`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.4s ease;
  background-color: #ffffff;

  cc-icon {
    display: flex;
    align-items: center;
    align-content: center;
    height: 18px !important;
    width: 18px !important;
    color: #283044;
  }

  &:focus {
    background-color: #a8cbe2;
  }

  &:hover {
    background-color: #d5e5f0;
  }

  &:active {
    background-color: #a8cbe2;
  }
`;

export const ImagenAyuda = styled.img``;

export const AyudaButton = styled.button`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.4s ease;

  &:hover {
    background-color: #e2dffd;
  }

  &:focus {
    background: #c6c0fc;
    color: #283044;
  }

  &:active {
    background: #c6c0fc;
    color: #283044;
  }
`;
