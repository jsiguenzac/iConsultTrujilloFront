import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  width: 30%;
  // max-width: 300px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 100%;
    min-width: unset;
    order: 1;
  }
`;

export const Avatar = styled.div<{ src?: string }>`
  background-image: url(${(props) =>
    props.src || "https://via.placeholder.com/128x128.png?text=Doctor"});
  width: 128px;
  height: 128px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background-color: #f1f5f9;
  background-size: cover;
  background-position: center;
`;

export const Name = styled.h2`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
`;

export const Email = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 4px 0;
`;

export const Location = styled.p`
  color: #6b7280;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 4px 0 16px;
`;

export const InfoGroup = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 16px 0;
  gap: 8px;
  text-align: left;
`;

export const IconWrapper = styled.span`
  color: #10b981;
  margin-right: 8px;
  margin-top: 2px;
`;

export const Address = styled.p`
  color: #374151;
  margin: 0;
  font-size: 14px;
`;

export const Stars = styled.div`
  display: flex;
  justify-content: center; // centra horizontalmente
  align-items: center; // centra verticalmente (si hay altura)
  flex-wrap: wrap; // permite que se ajusten si no caben
  gap: clamp(10px, 2vw, 24px); // espacio flexible entre estrellas
  color: #fbbf24;
  width: 100%; // asegúrate de que use todo el ancho disponible
  padding: 8px 0; // un poco de espacio arriba y abajo
`;

export const RatingText = styled.a`
  color: #10b981;
  font-size: 14px;
  margin-left: 8px;
  text-decoration: none;
  cursor: default;

  &:hover {
    font-size: 14px;
    font-weight: 500;
  }

  &:active {
    color: #3b82f6;
  }
`;

export const Description = styled.p`
  color: #374151;
  margin: 0;
  font-size: 14px;
`;
