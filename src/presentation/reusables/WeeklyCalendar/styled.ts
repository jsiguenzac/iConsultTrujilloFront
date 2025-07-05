import styled from "styled-components";

interface CellProps {
  status?: "available_virtual" | "available_presencial" | "occupied";
}

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    border: 1px solid #e2e8f0;
    padding: 0.75rem;
    text-align: center;
    font-size: 0.9rem;
  }

  th {
    background-color: #f1f5f9;
  }
`;

export const Cell = styled.td<CellProps>`
  background-color: ${({ status }) =>
    status === "occupied"
      ? "#d1d5db"
      : status === "available_virtual"
      ? "#e0f2fe"
      : status === "available_presencial"
      ? "#d1fae5"
      : "transparent"};
  border: ${({ status }) =>
    status?.includes("available")
      ? "2px dashed"
      : status === "occupied"
      ? "2px solid #334155"
      : "1px solid #e2e8f0"};
  color: ${({ status }) => (status === "occupied" ? "#334155" : "#047857")};
  font-weight: 500;
`;
