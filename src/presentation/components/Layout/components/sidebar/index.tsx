import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import constants from '../../../../../core/constants';
import IconChangePassword from '../../../../../assets/icons/change-password-mobile.svg';
import IconPayment from '../../../../../assets/icons/icon-pago.svg';

// import Profile from '../../../Profile';
import SidebarMenu from './components/SidebarMenu';
import type { IItem } from './components/SidebarMenu/types';

import {
  BarElement,
  BarLayer,
  Menu,
  MenuWrapper,
  SidebarElement,
  SidebarWrap
} from './styled';
import IDHelpers from '../../../../../core/helpers/IDHelper';

interface Props {
  isOpenMenuMobile: boolean;
  onClickLogout: () => void;
  onCloseMenuMobile: () => void;
  onOpenMenuMobile: () => void;
}

function Sidebar({
  isOpenMenuMobile,
  onCloseMenuMobile,
  onOpenMenuMobile,
  onClickLogout
}: Readonly<Props>) {
  // const { isSimulator } = useSelector((state: any) => state.simulator);
  // const { profile, academic } = useSelector(
  //   (state: any) => state.profile?.data
  // );

  const [storageChange, setStorageChange] = useState(0);

  useEffect(() => {
    const handleStorageChange = () => {
      setStorageChange((prev) => prev + 1);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {}, [storageChange]);

  // const { data: profilePhoto } = useSelector(
  //   (state: any) => state.profilePhoto
  // );

  const user = [
    {
      userName: 'Joel',
      userAvatar: constants.DEFAULT_PHOTO,
      photo: constants.DEFAULT_PHOTO,
      studentCode: '123456',
      isGraduated: false,
    }
  ];

  const sidebarItemsTop: IItem[] = [
    {
      icon: 'home',
      pathname: '/inicio',
      text: 'Inicio',
      type: 'router',
      class: 'step1'
    },
    {
      icon: 'calendar',
      pathname: '/calendario',
      text: 'Calendario',
      type: 'router',
      class: 'step2'
    },
    {
      icon: 'book',
      pathname: '/cursos',
      text: 'Cursos',
      type: 'router',
      class: 'step3'
    },
    {
      pathname: '/pagos',
      src: IconPayment,
      text: 'Pagos',
      type: 'router',
      class: 'step4'
    },
    {
      icon: 'file-pen',
      pathname: '/servicios',
      text: 'Servicios',
      type: 'router',
      class: 'step5'
    },
    {
      icon: 'file',
      pathname: '/tramites',
      text: 'Trámites',
      type: 'router',
      class: 'step6'
    }
  ];

  const sidebarItemsBottom: IItem[] = [
    {
      icon: 'user',
      pathname: '/perfil',
      text: 'Ver perfil',
      type: 'router'
      // isNew: true
    },
    {
      href: 'https://contrasena/Login.aspx',
      src: IconChangePassword,
      target: '_blank',
      text: 'Cambiar contraseña',
      type: 'link'
    },
    {
      handler: onClickLogout,
      icon: 'log-out',
      text: 'Cerrar sesión',
      type: 'button'
    }
  ];

  return (
    <SidebarWrap data-testid="cmp-sidebar">
      <BarLayer
        data-testid="BarLayer"
        className={`${isOpenMenuMobile ? '' : 'active'}`}
        onClick={() => onCloseMenuMobile()}
      />
      <SidebarElement
        data-testid="SidebarElement"
        id="sidebarElement"
        className={`${isOpenMenuMobile ? 'active' : ''}`}
      >
        <MenuWrapper
          data-testid="MenuWrapper-menudesktop"
          className="menuDesktop"
        >
          <Menu
            onClick={isOpenMenuMobile ? onCloseMenuMobile : onOpenMenuMobile}
          >
            {/* <CcIcon
              size={24}
              color="secondary"
              name={`${isOpenMenuMobile ? 'arrow-left' : 'menu'}`}
            /> */}
          </Menu>
        </MenuWrapper>
        <div className="menuMobile">
          <MenuWrapper>
            <Menu
              onClick={onCloseMenuMobile}
              className="backbutton"
              id="bottomMovie"
            >
              {/* <CcIcon size={16} color="secondary" name="arrow-left" /> */}
            </Menu>
          </MenuWrapper>
          {/* <Profile user={user} /> */}
        </div>
        <BarElement data-testid="BarElement">
          <SidebarMenu
            key={IDHelpers.generateID()}
            isOpen={isOpenMenuMobile}
            isSimulator={false} // isSimulator
            items={sidebarItemsTop}
            onClose={onCloseMenuMobile}
          />
          <hr className="menuMobile" />
          <SidebarMenu
            key={IDHelpers.generateID()}
            className="menuMobile"
            isOpen={isOpenMenuMobile}
            isSimulator={false} // isSimulator
            items={sidebarItemsBottom}
            onClose={onCloseMenuMobile}
          />
        </BarElement>
      </SidebarElement>
    </SidebarWrap>
  );
}

export default Sidebar;
