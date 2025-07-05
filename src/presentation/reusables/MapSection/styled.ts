import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  // background: #fff;
  justify-content: center;
  align-items: start;
  margin: 10px;
  border-radius: 8px;
  height: 580px;
  max-height: calc(100vh - 4rem); /* Ajusta según tu header/footer */
  flex-direction: column;
  // gap: 1rem;
  > div {
    border-radius: 8px;
  }
  /* @media (min-width: 768px) {
    display: block;
    width: 33.3333%;
    // background-color: #f9fafb;
    min-height: 400px;

  } */
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
`;
