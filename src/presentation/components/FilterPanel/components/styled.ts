import styled from "styled-components";

export const FilterBlock = styled.div``;

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #334155;
  margin-bottom: 0.5rem;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
    color: #475569;
  }

  input[type="radio"],
  input[type="checkbox"] {
    accent-color: #3b82f6;
  }
`;

export const GroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  cursor: pointer;
  padding: 0.5rem 0;
  font-size: 14px;
  color: #1e293b;

  &:hover {
    color: #2563eb;
  }
`;

export const FiltersWrapper = styled.div`
  // width: 100%;
  padding: 16px;
  max-width: 260px;
  border-radius: 8px;
  background-color: #fff;
  padding: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
  // height: auto;
  position: relative;

  @media (max-width: 991px) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1600;
    padding: 20px;
    width: 90%;
    // calcular el ancho del sidebar en base al ancho de la pantalla
    max-width: calc(100vw - 20px);
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &.active {
      transform: translateX(0);
    }

    @keyframes slideIn {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0%);
      }
    }
  }
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  background: rgba(255, 24, 24, 0.93);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  border: none;
  color: #fff;
  font-size: 2.8rem;
  cursor: pointer;
  line-height: 1;
  z-index: 20;
  display: flex;
  justify-content: center;
`;
