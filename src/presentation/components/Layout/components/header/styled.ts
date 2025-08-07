// src/components/Header/styled.ts
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  position: fixed; /* <- antes era relative */
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  z-index: 1500;
  gap: 1.5rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    margin: 0;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    align-items: flex-center;
    height: auto;
    padding: 0.5rem 1rem;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogoImage = styled.img`
  height: 32px;
`;

export const LogoText = styled.h1`
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
  background: linear-gradient(to right, #00c2cb, #006f91);
  -webkit-background-clip: text;
  color: transparent;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #00c2cb, #006f91);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    color: transparent;
  }

  & > button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0;
    font: inherit;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SearchInput = styled.input`
  background: #f1f5f9;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-left: 1rem;
  width: 250px;
  height: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  font-size: 14px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #e0e7ff;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
  font-size: 14px;
  color: #1f2937;
  font-weight: 500;
  // manito
  pointer: cursor;
  & > a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease-in-out;
  }
  & > a:hover {
    color: #2563eb;
  }
`;

export const ButtonNavLink = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font: inherit;
  font-size: 14px;
  &:hover {
    color: #2563eb;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const Arrow = styled.span<{ open: boolean }>`
  display: inline-block;
  margin-left: 4px;
  border: solid #4b5563;
  border-width: 0 2px 2px 0;
  padding: 3px;
  transform: ${({ open }) => (open ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: transform 0.2s ease-in-out;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 200%;
  width: 140px;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  font-size: 14px;
  color: #111827;
  &:hover {
    background: #f3f4f6;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 40;
`;

export const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 20;

  span {
    width: 24px;
    height: 2px;
    background-color: #333;
    display: block;
    transition: all 0.3s ease;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  // width: 240px;
  height: 100vh;
  background-color: white;
  // box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1500;
  padding: 16px;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease forwards;
  gap: 16px;

  padding: 20px;
  width: 60%;
  // calcular el ancho del sidebar en base al ancho de la pantalla
  max-width: calc(100vw - 20px);

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2,
  span {
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

export const CloseButton = styled.button`
  background: rgba(255, 24, 24, 0.93);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  border: none;
  font-size: 14px;
  color: #fff;
  font-size: 2.4rem;
  cursor: pointer;
  line-height: 1;
  z-index: 20;
`;
