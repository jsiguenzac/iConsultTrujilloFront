import React from 'react';
import { HeaderNotificationWrapper, HeaderNotificationButton } from './styled';

const Notification = (props: any) => {
  const { handleOpenModal, handleSelectAcademicCalendar } = props;

  const executeOpenModal = () => {
    handleSelectAcademicCalendar(0);
    handleOpenModal();
  };

  return (
    <HeaderNotificationWrapper data-testid="cmp-header-notification">
      <HeaderNotificationButton onClick={executeOpenModal}>
        {/* <CcIcon name="bell" /> */}
      </HeaderNotificationButton>
    </HeaderNotificationWrapper>
  );
};

Notification.defaultProps = {};

export default Notification;
