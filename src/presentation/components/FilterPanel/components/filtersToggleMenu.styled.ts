import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  gap: 12px;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 16px;
  cursor: pointer;
`;
