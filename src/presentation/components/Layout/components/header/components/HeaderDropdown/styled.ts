import styled from 'styled-components';
import { HeaderButton } from '../../styled';

export const HeaderDropdownWrapper = styled.div`
  position: relative;
  height: 100%;
  padding-left: 16px;
  display: none;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 32px;
    width: 1px;
    background-color: #7a959f;
  }

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const HeaderDropdownSpacer = styled.div`
  height: 100%;

  > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const HeaderDropdownDetail = styled.div`
  margin-right: 8px;

  > div {
    > span {
      font-size: 14px;
      color: #161d1f;

      &:nth-of-type(2) {
        text-transform: capitalize;
        font-weight: 600;
      }
    }
  }

  > span {
    font-size: 12px;
    color: #4f6168;
  }
`;

export const HeaderDropdownAvatar = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 4px;
  border-radius: 50%;
  background-color: #f2f2f2;

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const HeaderDropdownButton = styled(HeaderButton)``;

export const HeaderDropdownToggle = styled.div<{
  isActive: boolean;
}>`
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 4px;
  opacity: ${(p) => (p.isActive ? '1' : '0')};
  visibility: ${(p) => (p.isActive ? 'visible' : 'hidden')};
  transition: all 0.4s ease;
  background-color: #ffffff;
  box-shadow: 0px 5px 8px rgba(74, 74, 74, 0.22);
`;

export const HeaderDropdownItem = styled.button`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  transition: all 0.4s ease;
  background-color: #ffffff;

  cc-icon {
    margin-right: 8px;
    display: flex;
    align-items: center;
    align-content: center;
    height: 14px !important;
    width: 14px !important;
    color: #283044;
  }

  > span {
    font-size: 14px;
    color: #161d1f;

    &:nth-of-type(2) {
      background-color: #5b36f2;
      border-radius: 20px;
      margin-left: auto;
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
      padding: 4px 12px;
    }
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
