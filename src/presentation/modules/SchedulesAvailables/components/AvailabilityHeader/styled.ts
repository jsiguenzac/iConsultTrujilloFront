import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

export const Filters = styled.div`
  display: flex;
  gap: 1rem;

  select,
  input {
    padding: 0.5rem;
  }

  button {
    background: #94a3b8;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
  }
`;

export const DateNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
