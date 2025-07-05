// src/components/BarRange/styled.ts
import styled from "styled-components";

export const BarRange = styled.input.attrs({ type: "range" })`
  width: 100%;
  position: relative;
  border-radius: 8px;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    height: 8px;
    background: #e5e7eb;
    border-radius: 12px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background: #3b82f6; // Color del thumb
    border-radius: 50%;
    cursor: pointer;
    margin-top: -6px; // Ajuste para centrar el thumb
    position: relative;
    z-index: 2;
  }

  &::-moz-range-track {
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
  }

  &::-moz-range-thumb {
    height: 20px;
    width: 20px;
    background: #3b82f6;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    position: relative;
    z-index: 2;
  }
`;

export const ThumbValue = styled.div`
    display: flex;
    width: 60px;
    align-items: center;
    border-radius: 8px;
    justify-content: center;
    background: #3b82f6;
    color: white;
`;
