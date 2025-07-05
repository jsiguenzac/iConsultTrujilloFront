import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .apply {
    background: #3b82f6;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
  }

  .apply:hover {
    background: #2563eb;
  }

  .clear {
    background: transparent;
    border: 1px solid #cbd5e1;
    color: #475569;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.2s;
  }

  .clear:hover {
    background: #f1f5f9;
  }
`;
