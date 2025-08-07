import styled from "styled-components";

export const TableWrapper = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 400px;
  overflow-x: auto;
  overflow-y: auto;
  // border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #fff;
  -webkit-overflow-scrolling: touch;

  // cambiar tamaño de la barra de scroll
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
`;

export const Table = styled.table<{ columns: number; currentHourRow?: number }>`
  width: 100%;
  min-width: ${({ columns = 7 }) => `${columns * 60}px`};
  border-collapse: collapse;

  // aplicar color a las celdas tbody
  // tbody td:nth-child(odd):not([style*="background-color"]) {
  //   background-color: #f7fbfd;
  // }

  th,
  td {
    border-bottom: 1px solid #e2e8f0;
    border-right: 1px solid #e2e8f0;
    border-left: 1px solid #e2e8f0;
    min-width: 120px;
    padding: 1rem;
    text-align: center;
    font-size: 14px;
    white-space: nowrap;
  }

  th {
    background-color: #f1f5f9;
    font-weight: 600;
    height: 40px;
    position: sticky;
    top: 0;
    z-index: 7;
  }

  ${({ currentHourRow }) =>
    typeof currentHourRow === "number" &&
    `
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      border-top: 1px dashed red;
      width: 100%;
      top: ${currentHourRow}px;
      z-index: 5;
      pointer-events: none;
    }
  `}
`;

export const Cell = styled.td<{ colorText: string; colorBg?: string }>`
  height: 50px;
  width: 100%;
  align-items: center;
  ${({ colorBg }) => colorBg && `background-color: ${colorBg};`}
  color: ${({ colorText }) => colorText};
  font-weight: ${({ colorText }) => (colorText ? "bold" : "normal")};
  cursor: ${({ colorText, colorBg }) =>
    colorText !== "#000" && colorBg === "#fff" ? "pointer" : "default"};
  border-radius: 8px;
  justify-content: center;
  border-top: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  border-left: 1px solid #e2e8f0;

  div {
    min-width: 120px;
    height: 70px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 14px;
    font-weight: bold;
    border: ${({ colorText, colorBg }) =>
      colorBg === "#fff" ? `2px dashed ${colorText} !important` : "none"};
  }
`;
