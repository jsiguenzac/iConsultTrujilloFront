import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 485px;
  // // min-height: calc(100vh - 4rem); /* Ajusta según tu header/footer */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
`;

export const HeaderDocList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  & >  span {
    text-align: right;
  }
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
`;

export const CountText = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #6b7280;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
