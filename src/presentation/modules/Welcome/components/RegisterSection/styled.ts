import styled from "styled-components";

export const Container = styled.section`
  background: #10b981;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  padding: 2rem;

  & > img {
    align-items: start;
    max-width: 400px;
    height: 315px;
  }
`;

export const Form = styled.form`
  background: white;
  width: 100%;
  border-radius: 12px 0 0 12px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;

  h3 {
    margin-bottom: 1rem;
  }

  a {
    display: block;
    margin-top: 1rem;
    text-align: center;
    color: #10b981;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`;

export const Button = styled.button`
  background: #10b981;
  color: white;
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
`;
