import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: ${({ active }) => (active ? "#3b82f6" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#4b5563")};
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #e5e7eb;
  }
`;

export const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  color: #6b7280;
`;
