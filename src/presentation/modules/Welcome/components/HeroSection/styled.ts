import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2rem;
  flex-wrap: wrap;
  background: #fff;
`;

export const TextArea = styled.div`
  flex: 1;
  min-width: 300px;

  span {
    color: #f57c00;
    font-weight: 700;
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 700;
  line-height: 1.5;
  margin: 1rem 0;
  color: #1e293b;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: #475569;
`;

export const CTAButton = styled.button`
  background: #ff6f61;
  color: #fff;
  font-size: 20px;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
`;

export const ImageArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  img {
    width: 80%;
    max-width: 300px;
    border-radius-left: 1rem;
    border-radius-right: 1rem;
  }
  .imagesWrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: start;
    img {
      width: 100%;
      max-width: 150px;
      border-radius: 1rem;
    }
  }
`;

/* Rectangle 13 */
export const Rectangle13 = styled.div`
  position: absolute;
  width: 308px;
  height: 537px;
  left: 933px;
  top: 308px;
  background: url('./Rectangle13.jpg'), #FFB87A;
  border-radius: 0px 16px 16px 0px;
`;