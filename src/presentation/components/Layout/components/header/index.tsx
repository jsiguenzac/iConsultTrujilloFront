import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { Brand, Menu } from '../../..';
import constants from '../../../../../core/constants';
import {
  AyudaButton,
  HeaderSpacer,
  HeaderWrapper,
  ImagenAyuda
} from './styled';
import HeaderDropdown from './components/HeaderDropdown';
import IconAyuda from '../../../../../assets/icons/icon-ayuda.svg';
// import useTutorial from '@/presentation/hooks/useTutorial';

interface Props {
  currentDevice: string;
  onClickLogout: () => void;
  OnOpenMenuMobile: any;
}

function Header(props: Readonly<Props>) {
  const { currentDevice, onClickLogout, OnOpenMenuMobile } = props;
  // const { setTutorial } = useTutorial();
  // const profile = useSelector((state: any) => state.profile?.data?.profile);
  // const { data: profilePhoto } = useSelector(
  //   (state: any) => state.profilePhoto
  // );
  const user = {
    userName: 'Joel', // profile?.firstName?.toLowerCase() || '',
    userAvatar: constants.DEFAULT_PHOTO, // profilePhoto || constants.DEFAULT_PHOTO,
    studentCode: '123456', // profile?.studentCode || '',
  };

  const [storageChange, setStorageChange] = useState(0);

  useEffect(() => {
    const handleStorageChange = () => {
      setStorageChange((prev: any) => prev + 1);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    const getStartStep = localStorage.getItem('_startStep');

    if (getStartStep) {
      OnOpenMenuMobile();
    }
  }, [storageChange]);

  return (
    <div>
      <HeaderWrapper id="header-wrapper" data-testid="cmp-header-wrapper">
        <HeaderSpacer>
          {/* <Menu
            OnOpenMenuMobile={OnOpenMenuMobile}
            currentDevice={currentDevice}
          /> */}
          {/* <Brand /> */}
        </HeaderSpacer>
        <HeaderSpacer>
          {/* TEMPORAL OCULTAR NOTIFICACIONES */}
          {/* <HeaderNotification
            handleOpenModal={handleOpenModal}
            handleSelectAcademicCalendar={handleSelectAcademicCalendar}
          /> */}
          <AyudaButton
            data-testid="helpButton"
            onClick={() => {
              // setTutorial(true);

              const DOM = document.getElementById('btnGo');
              const DOM_SIDEBAR = document.getElementById('sidebarElement');

              if (DOM_SIDEBAR) {
                DOM_SIDEBAR.scrollTop = 0;
              }

              if (DOM) {
                DOM?.click();
              }
            }}
          >
            <ImagenAyuda src={IconAyuda} />
          </AyudaButton>
          <HeaderDropdown user={user} onClickLogOut={() => onClickLogout()} />
        </HeaderSpacer>
      </HeaderWrapper>
    </div>
  );
}

export default Header;
