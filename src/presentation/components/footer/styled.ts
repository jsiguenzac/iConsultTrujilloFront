// src/components/Footer/styled.ts
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  // padding: 40px 20px 20px;
  text-align: center;
  font-family: "Arial", sans-serif;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 0;
  right: 0;
  height: auto;
  z-index: 1500;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
  text-align: left;
  gap: 10px;
`;

export const FooterColumn = styled.div`
  flex: 1 1 180px;
  min-width: 150px;
  width: auto;
  text-align: center;  

  /* @media (max-width: 768px) {
    text-align: center;
  } */
`;

export const Logo = styled.h2`
  color: #00b3a4;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.2;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #444;
  margin: 5px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const LinkItem = styled.p`
  font-size: 14px;
  color: #888;
  margin: 4px 0;
  cursor: pointer;

  &:hover {
    color: #00b3a4;
  }
`;

export const Icon = styled.span`
  color: #00b3a4;
  display: inline-flex;
  align-items: center;
`;

export const BottomText = styled.div`
  // margin-top: 30px;
  font-size: 14px;
  color: #888;
`;
