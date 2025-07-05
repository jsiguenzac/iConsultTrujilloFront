import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  HeaderDropdownWrapper,
  HeaderDropdownSpacer,
  HeaderDropdownDetail,
  HeaderDropdownAvatar,
  HeaderDropdownButton,
  HeaderDropdownToggle,
  HeaderDropdownItem
} from './styled';

interface IUser {
  userName?: string;
  userAvatar?: string;
  studentCode?: string;
}

interface IProps {
  user?: IUser;
  onClickLogOut: () => void;
}

const HeaderDropdown: FC<IProps> = ({ user, onClickLogOut }) => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  // const isGraduated = useProfile().academic?.isGraduated;

  const toProfile = () => {
    // GoogleAnalytics.writeLog('portal-profile-clickViewProfile', 'profile');
    history.push('/perfil');
    setIsActive(false);
  };

  const resetPasswordHandler = () => {
    window.open(
      'https://contrasena/Recuperacion/OlvideMiClave.aspx',
      'Reset Password',
      'noopener'
    );
    setIsActive(false);
  };

  const logOutHandler = () => {
    onClickLogOut();
    setIsActive(false);
  };

  useEffect(() => {
    const buttons =
      document.querySelectorAll<HTMLButtonElement>('.toggle-focus');

    buttons.forEach((button) => {
      button.addEventListener('mouseup', (ev) => {
        const target = ev.target as any;
        target.blur();
      });
    });
  }, []);

  return (
    <HeaderDropdownWrapper data-testid="cmp-header-dropdown">
      {/* {isGraduated && (
        <>
          <HeaderDropdownDetail>
            <div>
              <span>Egresado</span>
            </div>
          </HeaderDropdownDetail>
          <HeaderDropdownWrapper />
        </>
      )} */}
      <HeaderDropdownDetail>
        <div>
          <span>Hola, </span>
          <span>{user?.userName?.split(' ')[0]}</span>
        </div>
        <span>{user?.studentCode}</span>
      </HeaderDropdownDetail>
      <HeaderDropdownAvatar>
        <img src={user?.userAvatar} alt={user?.userName} />
      </HeaderDropdownAvatar>
      <HeaderDropdownSpacer>
        {/* <OutsideClickHandler
          onOutsideClick={() => {
            setIsActive(false);
          }}
        >
          <HeaderDropdownButton
            className="toggle-focus"
            data-testid="button-dropdown"
            onClick={() => setIsActive(!isActive)}
            type="button"
          >
            <CcIcon name={isActive ? 'chevron-up' : 'chevron-down'} />
          </HeaderDropdownButton>
          <HeaderDropdownToggle isActive={isActive}>
            <HeaderDropdownItem
              className="toggle-focus"
              data-testid="button-profile"
              onClick={() => toProfile()}
              type="button"
            >
              <CcIcon name="user" />
              <span>Ver perfil</span>
            </HeaderDropdownItem>
            <HeaderDropdownItem
              className="toggle-focus"
              data-testid="button-password"
              onClick={() => resetPasswordHandler()}
              type="button"
            >
              <CcIcon name="unlock" />
              <span>Cambiar contraseña</span>
            </HeaderDropdownItem>
            <HeaderDropdownItem
              className="toggle-focus"
              data-testid="button-logout"
              onClick={() => logOutHandler()}
              type="button"
            >
              <CcIcon name="log-out" />
              <span>Cerrar sesión</span>
            </HeaderDropdownItem>
          </HeaderDropdownToggle>
        </OutsideClickHandler> */}
      </HeaderDropdownSpacer>
    </HeaderDropdownWrapper>
  );
};

export default HeaderDropdown;
