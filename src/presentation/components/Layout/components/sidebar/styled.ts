import styled from 'styled-components';

export const MenuWrapper = styled.div`
  background: none;
  text-align: center;
  min-height: 48px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 992px) {
    background: linear-gradient(222.12deg, #ffb59a -56.52%, #fc4a61 114.92%);
    min-height: 72px;
    // width: 260px;
    justify-content: space-between;
  }
`;

export const Menu = styled.a`
  text-align: center;
  background: none;
  height: 48px;
  width: 48px;
  min-height: 48px;
  color: #fff;
  padding: 18px;
  cursor: pointer;
  justify-content: center;
  &.active {
    background: linear-gradient(
      222deg,
      var(--interaction-identity01) -56%,
      var(--interaction-identity02) 114%
    );
  }

  @media (min-width: 992px) {
    background: none;
    height: 72px;
    width: 88px;
    padding: 28px 30px 0px;
    display: flex;
  }
`;

export const SidebarElement = styled.div`
  overflow: auto !important;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background: #fff;
  position: fixed;
  top: 0px;
  height: 100vh;
  z-index: 11;
  transition: all 0.2s linear;
  width: 288px;
  left: -100%;
  margin-bottom: 32px;
  ::-webkit-scrollbar {
    display: none;
  }
  &.active {
    left: 0%;
    overflow: scroll;
    padding-bottom: 100px;
  }
  &.active a.backbutton {
    flex-direction: row;
    background: linear-gradient(
      222deg,
      var(--interaction-identity01) -56%,
      var(--interaction-identity02) 114%
    );
  }

  .menuHome {
    display: flex;
  }
  .menuMobile {
    display: block;
  }
  .menuDesktop {
    display: none;
  }
  // @media (min-width: 768px) {
  @media (min-width: 992px) {
    width: 88px;
    left: 0px;
    &.active {
      width: 260px;
    }
    .menuHome {
      display: none;
    }
    .menuMobile {
      display: none;
    }
    .menuDesktop {
      display: flex;
      justify-content: flex-start;
    }
  }
`;

export const BarLayer = styled.div`
  width: 100%;
  height: 100vh;
  background: #0000003d;
  z-index: 10;
  position: fixed;
  display: block;
  transition: background 0.2s, display 0.3s linear;
  z-index: 11;
  &.active {
    background: #00000000;
    display: none;
  }
`;

export const SidebarWrap = styled.div`
  display: flex;
`;

export const BarElement = styled.div`
  overflow: hidden;
`;
