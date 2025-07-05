import { ReactNode } from 'react';

export interface WarningMessageProps {
  message?: string | ReactNode;
  styledProps?: {
    background?: string;
    padding?: string;
    alignItems?: string;
    maxWidth?: string;
    margin?: string;
    fontSize?: string;
    borderRadius?: string;
    iconSize?: number;
    gap?: string;
  };
}
