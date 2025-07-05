import styled from "styled-components";

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1rem;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border: 3px solid #3b82f6;
    border-radius: 9999px;
  }
`;

export const UserInfo = styled.div`
  h3 {
    font-weight: 600;
    font-size: 14px;
    margin: 0;
  }

  p {
    color: #64748b;
    font-size: 14px;
  }
`;
