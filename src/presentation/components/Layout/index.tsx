import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';

export const GlobalStylesSidebar = createGlobalStyle`
  #sidebarElement {
    overflow: initial !important;
  }
`;

const Layout = () => {
  const [storageChange, setStorageChange] = useState(0);

  const handleOpenMenuMobile = () => {
    document.getElementsByTagName('body')[0].classList.add('no-scroll');
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setStorageChange((prev) => prev + 1);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    const getStartStep = localStorage.getItem('_startStep');

    if (getStartStep) {
      handleOpenMenuMobile();
    }
  }, [storageChange]);

  // if (!isValidToken) {
  //   return <></>;
  // }

  return (
    <div data-testid="cmp-main-layout" className="cmpMainLayout">
      <Header
        avatarSrc="https://scontent.flim18-2.fna.fbcdn.net/v/t39.30808-1/495727835_3146161048871182_6283638010870078510_n.jpg?stp=c0.466.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHbfySSiGUHnRaqH-D-EmxVLUxj0N5Am4UtTGPQ3kCbhUM93ZRGD9wtZtOJzAD3Uq42oRkYvklM-NwpFwJE7wqY&_nc_ohc=TluVHu0sTQsQ7kNvwHLM5-5&_nc_oc=AdkKpkB6RJIijJFReD2OPtdLz5E91NWfAAJRsMcSV7Vz6QBSYvtOIljjqFNxeVBg5F0&_nc_zt=24&_nc_ht=scontent.flim18-2.fna&_nc_gid=2HyeX81_tlPk8DY51t0THg&oh=00_AfNbJV037lwiWmAL4yAV-OTDXE4UXraotkb3bOYXYSkjzw&oe=686D49FD"
        userName="Joel Sigüenza"
        onProfile={() => console.log('Ir a perfil')}
        onLogout={() => console.log('Cerrar sesión')}
      />
    </div>
  );
};

export default Layout;
