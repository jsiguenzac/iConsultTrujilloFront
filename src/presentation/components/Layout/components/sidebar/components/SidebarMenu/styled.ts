import styled from 'styled-components';

export const WrapperItems = styled.div<{
  isOpen?: boolean;
  isSimulator?: boolean;
}>`
  width: 100%;
  user-select: none;

  > div {
    width: 100%;

    > * {
      position: relative;
      height: 80px;
      width: 100%;
      padding: ${({ isOpen }) => (isOpen ? '0 32px' : '0 8px')};
      gap: ${({ isOpen }) => (isOpen ? '16px' : '4px')};
      display: flex;
      flex-direction: ${({ isOpen }) => (isOpen ? 'row' : 'column')};
      align-items: center;
      justify-content: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')};
      background-color: #ffff;

      &::before {
        content: '';
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: ${({ isSimulator }) => (isSimulator ? '4px' : '0')};
        height: calc(100% - 8px);
        width: 4px;
        display: none;
        border-radius: 4px;
        background-color: #fc4a61;
      }

      > cc-icon {
        color: #283044;
      }

      > img {
        height: 24px;
        width: 24px;
        display: block;
        object-fit: contain;
      }

      > span {
        font-size: ${({ isOpen }) => (isOpen ? '14px' : '12px')};
        text-align: ${({ isOpen }) => (isOpen ? 'left' : 'center')};
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

      &.is-active {
        background-color: #ecf4f9;

        &::before {
          display: block;
        }
      }

      &:hover {
        background-color: #d5e5f0;
      }

      &:focus:not(:focus-visible) {
        background-color: #a8cbe2;
      }
    }
  }
`;
