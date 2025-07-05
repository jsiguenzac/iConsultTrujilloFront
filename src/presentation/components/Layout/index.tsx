import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import DeviceHelper from '../../../core/helpers/DeviceHelper';

export const GlobalStylesSidebar = createGlobalStyle`
  #sidebarElement {
    overflow: initial !important;
  }
`;

const Layout = () => {
  const [someDevice, setSomeDevice] = useState(
    DeviceHelper.detectStateDevice()
  );
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openAcademicsDates, setOpenAcademicsDates] = useState(false);
  const [storageChange, setStorageChange] = useState(0);

  const handleOpenMenuMobile = () => {
    setOpenMenuMobile(true);
    document.getElementsByTagName('body')[0].classList.add('no-scroll');
  };

  useEffect(() => {
    function handleResize() {
      setSomeDevice(DeviceHelper.detectStateDevice());
    }
    return window.addEventListener('resize', handleResize);
  }, []);

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
    // <div data-testid="cmp-main-layout" className="cmpMainLayout">
    //   <FiltersPanel />
    // </div>
    null
  );
};

export default Layout;
