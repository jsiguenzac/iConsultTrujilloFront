import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

export const Icon = styled.i`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;

export const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  margin-top: 0.25rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  z-index: 20;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background: #f3f4f6;
  }
`;
