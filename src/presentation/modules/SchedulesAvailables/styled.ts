import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // width: 100%;
  margin-top: 8rem; // Adjusted for header height
  gap: 2rem;
  padding: 1.5rem;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 0rem;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  background: white;
  width: 70%;
  border-radius: 16px;
  padding: 2rem;
  // max-width: 600px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    width: 88%;
    order: 2;
  }
`;
