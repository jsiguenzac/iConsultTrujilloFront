/* eslint-disable no-nested-ternary */
import React from 'react';
import { Container } from './styled';
import { WarningMessageProps } from './types';
// import { Icon } from '@/presentation/components';

const WarningMessage = ({ message, styledProps }: WarningMessageProps) => (
  <Container data-testid="cmp-warning-message" styleProps={styledProps}>
    {/* <Icon name="info" size={styledProps?.iconSize ?? 24} /> */}
    <span style={{ fontSize: styledProps?.fontSize ?? 14 }}>{message}</span>
  </Container>
);

export default WarningMessage;
