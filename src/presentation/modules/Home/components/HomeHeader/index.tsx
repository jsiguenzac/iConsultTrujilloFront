// src/components/Header/index.tsx
import React, { useState, useRef, useEffect } from 'react';
import {
  HeaderContainer,
  LogoSection,
  LogoImage,
  LogoText,
  SearchInput,
  NavLinks,
  UserSection,
  Avatar,
  UserName,
  Arrow,
  DropdownMenu,
  DropdownItem,
  Overlay,
  ButtonNavLink,
  MenuButton,
  SidebarMenu,
  SidebarHeader,
  CloseButton
} from './styled';
import useIsMobile from '@/presentation/hooks/useIsMobile';
import { LOGO_TEXT, NAV_LINKS } from './constants';

type HeaderProps = {
  logoSrc?: string;
  avatarSrc?: string;
  userName?: string;
  onLogout?: () => void;
  onProfile?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  logoSrc,
  avatarSrc,
  userName,
  onLogout,
  onProfile
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(true, 768);

  const handleOutsideClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [menuOpen]);

  return (
    <>
      {menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}
      <HeaderContainer>
        {isMobile && (
          <MenuButton onClick={() => setMenuOpen(true)}>
            <span />
            <span />
            <span />
          </MenuButton>
        )}

        <LogoSection>
          {logoSrc && <LogoImage src={logoSrc} alt="Logo" />}
          {LOGO_TEXT && (
            <LogoText>
              <button onClick={() => { alert(LOGO_TEXT); }}>{LOGO_TEXT}</button>
            </LogoText>
          )}
          {!isMobile && <SearchInput type="text" placeholder="Buscar médico por nombre" />}
        </LogoSection>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <NavLinks>
              {NAV_LINKS?.map((link) => (
                <ButtonNavLink key={link.name} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </ButtonNavLink>
              ))}
            </NavLinks>
            <UserSection onClick={() => setMenuOpen(!menuOpen)} ref={menuRef}>
              <Avatar src={avatarSrc} alt="Avatar" />
              <UserName>{userName}</UserName>
              <Arrow open={menuOpen} />
              {menuOpen && (
                <DropdownMenu>
                  <DropdownItem onClick={onProfile}>👤 Perfil</DropdownItem>
                  <DropdownItem onClick={onLogout}>↩️ Cerrar sesión</DropdownItem>
                </DropdownMenu>
              )}
            </UserSection>
          </div>
        )}

        {/* {!isMobile && (
        )} */}
      </HeaderContainer>

      {menuOpen && isMobile && (
        <SidebarMenu ref={menuRef} data-testid="sidebar-menu">
          <SidebarHeader>
            <LogoText>{LOGO_TEXT}</LogoText>
            <CloseButton onClick={() => setMenuOpen(false)}>×</CloseButton>
          </SidebarHeader>
          <Avatar src={avatarSrc} alt="Avatar" style={{ margin: '1rem auto' }} />
          <UserName style={{ textAlign: 'center', marginBottom: '1rem' }}>{userName}</UserName>
          {NAV_LINKS?.map((link) => (
            <DropdownItem key={link.name} onClick={() => setMenuOpen(false)}>
              {link.name}
            </DropdownItem>
          ))}
          <DropdownItem onClick={onProfile}>👤 Perfil</DropdownItem>
          <DropdownItem onClick={onLogout}>↩️ Cerrar sesión</DropdownItem>
        </SidebarMenu>
      )}
    </>
  );
};

export default Header;
