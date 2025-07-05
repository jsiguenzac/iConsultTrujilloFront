// src/components/DoctorList/styled.ts
import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border-left: 4px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-left-color: #3b82f6;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.h3`
  font-weight: 600;
  margin: 0;
  line-height: 1.25;
  font-size: 14px;
  color: #111827;
`;

export const Specialty = styled.p`
  font-size: 14px;
  margin-top: 5px;
  color: #6b7280;
`;

export const Modalities = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 1.5rem;
  align-items: center;
  gap: 1rem;
`;

export const Badge = styled.span`
  font-size: 14px;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  background-color: #e0f2fe;
  color: #0284c7;
  white-space: nowrap;
`;

export const Address = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const Price = styled.p`
  font-weight: 500;
  color: #3b82f6;
`;

export const ReserveButton = styled.button`
  font-size: 14px;
  background-color: #3b82f6;
  border: none;
  height: 3rem;
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
