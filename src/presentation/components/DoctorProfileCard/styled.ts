import styled from "styled-components";

export const Card = styled.div`
  background: #f1f5f9;
  padding: 1.5rem;
  border-radius: 16px;
  width: 280px;
`;

export const Avatar = styled.img`
  border-radius: 9999px;
  object-fit: cover;
  border: 2px solid #10b981;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  display: block;
`;

export const Info = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const Name = styled.h3`
  margin-bottom: 0.25rem;
`;

export const Email = styled.p`
  font-size: 14px;
  color: #334155;
`;

export const City = styled.p`
  color: #10b981;
  font-weight: bold;
`;

export const Address = styled.p`
  font-size: 14px;
  color: #64748b;
`;

export const Rating = styled.p`
  margin-top: 0.5rem;
`;

export const Note = styled.p`
  margin-top: 0.5rem;
  font-size: 14px;
  color: #475569;
`;
