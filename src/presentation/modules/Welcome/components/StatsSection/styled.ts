import styled from "styled-components";

export const Container = styled.section`
  background: #10b981;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const StatItem = styled.div`
  text-align: center;
  color: white;

  strong {
    display: block;
    font-size: 2rem;
  }

  p {
    margin-top: 0.5rem;
  }
`;
